<?php
include("login_check.php");
include("library/fonctions_php.php");


$depth=2;// rang dans le nombre d'occurences des termes acceptés pour labellisation des branches
$min_similarity=3;// seuil de similarité pour clusteriser


//connexion a la base de donnees

include("parametre.php");
$ink  =mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("include/header.php");
include("banner.php");

$phylo_min_nb_periods_covered=4;
$phylo_recent_min_nb_periods_covered=2;

echo "
<script>
	$(function() {
		$( '#tabs' ).tabs();
                   event: 'mouseover'
	});
	</script>
";
/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
}
$last_period=max($last_period_list);
//////////

//// Début des tab /////////
echo "
<div class='demo'>

<div id='tabs'>

	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>Phylogénie</h2></tr>
</table >
		<li><a href='#tabs-1'>Principaux thèmes d'actualité</a></li>
		<li><a href='#tabs-2'>Thèmes récents</a></li>
		<li><a href='#tabs-3'>Thèmes passés</a></li>
	</ul>
	<div id='tabs-1'>
";
/// Première tab  ////
$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period=$last_period";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
        echo "<h3>Principaux thèmes d'actualité (couvrant au moins 4 périodes)</h3>";
	echo $branch_list;
echo "
	</div>
	<div id='tabs-2'>";
            $branch_list=branch_list_string($resultat,$depth,$min_similarity);
            echo "<h3>Thématiques récentes</h3>";
            echo $branch_list;

echo "
	</div>
	<div id='tabs-3'>";
		$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period<$last_period";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
        echo "<h3>Thématiques passées (couvrant au moins 4 périodes)</h3>";
	echo $branch_list;

echo "       	</div>
";




///////// Fonctions /////
function branch_list_string($mysql_branch_list,$depth,$min_similarity){
//donne la liste des macro-branches qui couvrent au moins $phylo_min_nb_periods_covered

//$label_list=array(); // liste des branches
//$branch_last_period=array(); // liste des périodes associées
//$branch_last_period_cluster_id=array(); // liste de clusters des branches
$branch_list=array(); // infos sur les macro-branches (a vocation a intégrer toutes les variable ci-dessus)
while ($ligne=mysql_fetch_array($mysql_branch_list)) {
       $last_period_for_branch=$ligne[last_period_string];
       // on récupère un cluster de la dernière période
       $clusterQuery="select id_cluster FROM cluster WHERE periode='$last_period_for_branch' AND pseudo=$ligne[id_partition]";
       $clusters_from_last_period=mysql_query($clusterQuery) or die ("<b>Requête non exécutée (récupération des clusters de la dernière période)</b>.");
       $cluster_ligne=mysql_fetch_array($clusters_from_last_period);
       $infos=array();
       $infos['id_partition']=$ligne[id_partition];
       $infos['nb_fields']=$ligne[nb_fields];
       $infos['terms']=$ligne[terms];
       $infos['terms_occ']=$ligne[terms_occ];
       $infos['branch_last_period']=str_replace(' ','-',$last_period_for_branch);
       $infos['label']=$ligne[label];
       $infos['branch_last_period_cluster_id']=$cluster_ligne[id_cluster];
       //array_push($branch_last_period,str_replace(' ','-',$last_period_for_branch));
       //array_push($label_list,$branch.$ligne[label]);
       //array_push($branch_last_period_cluster_id,$cluster_ligne[id_cluster]);
       array_push($branch_list,$infos);
}
 //print_r($branch_list);

$nb_branches=count($branch_list);

$grouped_labels=cluster_branches($branch_list,$depth,$min_similarity);

// ICI
//$grouped_labels=group_list($label_list,1,4);
$grouped_indexes=$grouped_labels[grouped_indexes]; // groupes des index branches
$Ngram_arrays=$grouped_labels[Ngram_arrays]; // array pour les labelliser
$branch_list='<i>('.$nb_branches.' thématiques dans cette catégorie)'.'<i><br/><p></p>'; // html avec la liste des branches

for ($i=0;$i<count($grouped_indexes);$i++){
    $index_grouped=$grouped_indexes[$i];
    $Ngrams=$Ngram_arrays[$i];
     
    if (count($index_grouped)>1){
        $group_title='<p>';
        while ((count($Ngrams)>0)&&($line = current($Ngrams))){
            $group_title=$group_title.key($Ngrams).', ';
            next($Ngrams);
        }
        $group_title=substr($group_title, 0, -1);
        $branch_list=$branch_list.'<b>'.$group_title.' :</b>'.'<br/><ul>';
        while ((count($index_grouped)>0)&&($index = current($index_grouped))){
            $branch='<li><i><a href="cluster.php?id_cluster='.$branch_last_period_cluster_id[$index].'&periode='.str_replace(' ','-',$branch_last_period[$index]).'">';
            $branch=$branch.ucfirst($label_list[$index]).'</a></i><br/>';
            $branch_list=$branch_list.$branch;

            next($index_grouped);
        }
        $branch_list=$branch_list.'</ul></p>';
    }else{
         $branch='<a href="cluster.php?id_cluster='.$branch_last_period_cluster_id[$index_grouped[0]].'&periode='.str_replace(' ','-',$branch_last_period[$index_grouped[0]]).'">';
         $branch=$branch.ucfirst($label_list[$index_grouped[0]]).'</a><br/>';
         $branch_list=$branch_list.$branch;
    }
    $branch_list=$branch_list.'</ul>'.'<br/>';
}
return remove_popo($branch_list);
}

////////////
function cluster_branches($branch_list,$depth,$min_similarity){
// $branch_list est un array contenant toutes les infos des branches
/// retour un array contenant
// ['grouped_indexes']: un array de groupes d'indices mentionnant les labels similaires
// ['Ngram_arrays']: un array contenant pour chaque groupe d'indices, un array pour labelliser le groupe dont les clés sont des NGram pris jusqu'à une profondeur $depth et les valeurs leur nombre d'occurrences dans les labels
// calcul des similarités entre labels de branches
$label_rows_groups=array();
$label_groups=array();
$nb_labels_treated=0;
$label_rows_remaining_to_process=array();// index des labels non encore catégorisés
// initialisation de ce tableau
for ($i=0;$i<count($branch_list);$i++){
    array_push($label_rows_remaining_to_process,$i);
};


while (count($label_rows_remaining_to_process)>0){
    $target_row=array_pop($label_rows_remaining_to_process);
    $target_label_raw=array();// liste des rangs (dans $branch_list) groupés avec target_row
    $target_branches=array();   // liste des branches correspondant aux rangs associés
    array_push($target_branches,$branch_list[$target_row]);
    array_push($target_label_raw,$target_row);

    $label_rows_remaining_to_process_second_pass=$label_rows_remaining_to_process;
    while (count($label_rows_remaining_to_process_second_pass)>0){
        $candidate_row=array_pop($label_rows_remaining_to_process_second_pass);
        $candidate_branch=$branch_list[$candidate_row];
        $exit_here=0;
        $j=0;
        while (($j<count($target_branches))&&(exit_here==0)){
            $p=branch_similarity($target_branches[$j],$candidate_branch);
            //similar_text ( $candidate_label,$target_branches[$j],$p );
            if ($p>$min_similarity){
                $exit_here=1;
                //echo 'similarity: '.$p.'<br/>';
                //echo 'candidate labels'.$candidate_label.'<br/>';
                //echo 'target labels'.$target_branches[$j].'<br/>';
            };
            $j++;
        };

        if ($exit_here==1){
            array_push($target_branches,$candidate_branch);
            array_push($target_label_raw,$candidate_row);
            $label_rows_remaining_to_process=array_diff($label_rows_remaining_to_process,$target_label_raw);
         }
    }
    array_push($label_rows_groups,$target_label_raw);
    // on reconstruit l'array des labels de branche
    $target_branches_label=array();
    for ($i=0;$i<count($target_branches);$i++){
        array_push($target_branches_label,$target_branches[$i]['label']);
        echo $target_branches[$i]['label'].'<br/>';
    }    
    array_push($label_groups,label_label_group($target_branches_label,$depth));
}
$resultat=array();
$resultat['grouped_indexes']=$label_rows_groups;
$resultat['Ngram_arrays']=$label_groups;
//echo 'labels: <br/>';
//print_r($label_groups);

return $resultat;

}
////////////////


function label_label_group($target_labels,$depth){
// calcul les Ngrammes les plus fréquent d'un ensemble de labels formés de Ngrammes
$ngram_array=array();
echo 'labels: <br/>';
print_r($target_labels);


while (count($target_labels)>0 ){
    $ngrams=explode(',',array_pop($target_labels));
     while (count($ngrams)>0 ){
            $ngram=array_pop($ngrams);
            if ($ngram_array[trim($ngram)]==null){
                $ngram_array[trim($ngram)]=1;
            }else{
                $ngram_array[trim($ngram)]++;
            }
    }
}
return get_keys_with_highest_values($ngram_array,$depth);
}

function branch_similarity($branch1,$branch2){
// calcul une similarité entre branches en fonctions des termes quelles contiennent et de leurs occurrences
// utilise le cos des vecteurs des occ de termes normalisées
$branch1_terms=explode('_',$branch1['terms']);
$branch2_terms=explode('_',$branch2['terms']);
$nb_fields1=$branch1['nb_fields'];
$squared_nb_fields1=$nb_fields1*$nb_fields1;
$nb_fields2=$branch2['nb_fields'];

$squared_nb_fields2=$nb_fields2*$nb_fields2;


$branch1_terms_occ=explode('_',$branch1['terms_occ']);
$branch2_terms_occ=explode('_',$branch2['terms_occ']);


$common_terms=array_intersect($branch1_terms,$branch2_terms);
$similarity=0;
while (count($common_terms)>0){
    $term=array_pop($common_terms);
    $rank_in_branch1=search($term, $branch1_terms);
    $rank_in_branch2=search($term, $branch2_terms);
    $similarity=$similarity+($branch1_terms_occ[$rank_in_branch1]/$nb_fields1*$branch2_terms_occ[$rank_in_branch2]/$nb_fields2);
}

$branch1_squares=0;
while (count($branch1_terms_occ)>0){
    $occ=array_pop($branch1_terms_occ);
    $branch1_squares=$branch1_squares+$occ*$occ/$squared_nb_fields1;
}

$branch2_squares=0;
while (count($branch2_terms_occ)>0){
    $occ=array_pop($branch2_terms_occ);
    $branch2_squares=$branch2_squares+$occ*$occ/$squared_nb_fields2;
}

//echo 'Similarity'.($similarity*$similarity/$branch1_squares/$branch2_squares).'<br/>';
return ($similarity*$similarity/$branch1_squares/$branch2_squares);
}


/////////////////////////////////
//////// veilles fonctions //////
/////////////////////////////////

function group_list($label_list,$depth,$min_similarity){
// $label_list est un array de labels composés de ngrammes séparés par des virgules
/// retour un array contenant
// ['grouped_indexes']: un array de groupes d'indices mentionnant les labels similaires
// ['Ngram_arrays']: un array contenant pour chaque groupe d'indices, un array pour labelliser le groupe dont les clés sont des NGram pris jusqu'à une profondeur $depth et les valeurs leur nombre d'occurrences dans les labels
// calcul des similarités entre labels de branches
$label_rows_groups=array();
$label_groups=array();
$nb_labels_treated=0;
$label_rows_remaining_to_process=array();// index des labels non encore catégorisés
// initialisation de ce tableau
for ($i=0;$i<count($label_list);$i++){
    array_push($label_rows_remaining_to_process,$i);
};


while (count($label_rows_remaining_to_process)>0){
    $target_row=array_pop($label_rows_remaining_to_process);
    $target_label_raw=array();// liste des rangs groupés avec target_row
    $target_labels=array();   // liste des labels des rangs associés
    array_push($target_labels,$label_list[$target_row]);
    array_push($target_label_raw,$target_row);

    $label_rows_remaining_to_process_second_pass=$label_rows_remaining_to_process;
    while (count($label_rows_remaining_to_process_second_pass)>0){
        $candidate_row=array_pop($label_rows_remaining_to_process_second_pass);
        $candidate_label=remove_popo($label_list[$candidate_row]);
        $exit_here=0;
        $j=0;
        while (($j<count($target_labels))&&(exit_here==0)){
            $p=similarity($candidate_label,remove_popo($target_labels[$j]));
            //similar_text ( $candidate_label,$target_labels[$j],$p );
            if ($p>$min_similarity){
                $exit_here=1;
                //echo 'similarity: '.$p.'<br/>';
                //echo 'candidate labels'.$candidate_label.'<br/>';
                //echo 'target labels'.$target_labels[$j].'<br/>';
            };
            $j++;
        };

        if ($exit_here==1){
            array_push($target_labels,$label_list[$candidate_row]);
            array_push($target_label_raw,$candidate_row);
            $label_rows_remaining_to_process=array_diff($label_rows_remaining_to_process,$target_label_raw);
         }
    }
    array_push($label_rows_groups,$target_label_raw);
    array_push($label_groups,label_label_group($target_labels,$depth));
    $resultat=array();
    }
$resultat['grouped_indexes']=$label_rows_groups;
$resultat['Ngram_arrays']=$label_groups;
return $resultat;
}


//on ferme l'acces à la base de donnees
mysql_close($ink);
include("footer.php");
?>