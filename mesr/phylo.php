<?php
include("login_check.php");
include("library/fonctions_php.php");
$jsprotovis="TRUE";

//connexion a la base de donnees
include("parametre.php");
$ink  =mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("include/header.php");
include("banner.php");


///// PARAMETRES ///
$depth=2;// rang dans le nombre d'occurences des termes acceptés pour labellisation des branches
$min_similarity=5000000;// seuil de similarité pour clusteriser
$phylo_min_nb_periods_covered=4;
$phylo_recent_min_nb_periods_covered=4;

///////////////////

/// on récupère pour chaque catégorie les données similapré-calculées pour les streamgraph
//// Branches actives
$cle='branches_actives_'.$phylo_min_nb_periods_covered;
$sql="SELECT * FROM data WHERE cle='".$cle."';";
$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        $json_dataActives=$ligne[valeur];
}

//// Branches émergentes
//$cle='branches_emergentes_'.$phylo_recent_min_nb_periods_covered;
//$sql="SELECT * FROM data WHERE cle='".$cle."';";
//$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
//while ($ligne=mysql_fetch_array($resultat)) {
//        $json_dataEmergentes=$ligne[valeur];
//}

//// Branches en suspens
//$cle='branches_suspens_'.$phylo_min_nb_periods_covered;
//$sql="SELECT * FROM data WHERE cle='".$cle."';";
//$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (données streamgraph actives)</b>.");
//while ($ligne=mysql_fetch_array($resultat)) {
//        $json_dataSuspens=$ligne[valeur];
//}

$jscriptmp="	$( '#tabs' ).tabs();
                   event: 'mouseover'";

/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
}
$last_period=max($last_period_list);
$dT=$last_period_list[1]-$last_period_list[0];

$dated=min($last_period_list);
$datef=max($last_period_list);

//////////
include('include/streamgraphActives.php');
//include('include/streamgraphEmergentes.php');
//include('include/streamgraphSuspens.php');

echo $myaboveActives;
//echo $myaboveSuspens;
//echo $myaboveEmergentes;


//// Début des tab /////////
echo "
<div class='demo'>

<div id='tabs'>

	<ul>
<table width=100% class=tableitems>
<tr valign=top></td><td><h2 class=subtitle>fils thématiques (branches phylogénétiques)";

    $jscriptmp.=display_helper('Fils thématiques','Les <a href="aide.php?selectedTab=2"><font color=blue>fils thématiques</font></a> sont des ensembles de champs thématiques sur des sujets similaires répartis sur plusieurs périodes. Ils sont classés ici en trois catégories:
            <ul style="font-size:small;"><li>
            "<b style="font-variant:small-caps;">Actifs</b>": Fils thématiques couvrant au moins quatre périodes et qui sont toujours actifs sur les trois dernières périodes.
                </li>
            <li>
                "<b style="font-variant:small-caps;">Potentiellement émergents</b>":
                Fils thématiques couvrant au plus trois périodes dont la plus récente.
            </li>
                <li>
                "<b style="font-variant:small-caps;">En suspens</b>":
            Fils thématiques couvrant au moins quatre périodes mais qui ne sont pas présents sur les trois dernières périodes. Cette rupture du fil thématique peut être temporaire, témoignant d\'une baisse d\'intérêt pour le sujet concerné, ou définitive.
                </li>
                    </ul>
            <p>Dans chaque catégorie, les fils thématiques sont labélisés par leur composantes les plus représentatives puis, lorsque cela est possible, regroupés par grands thèmes.
              Un click sur le nom d\'un fil thématique permet d\'accéder aux champs thématiques les plus récents de ce fil.</p><p>Pour chaque fil, sont par
            ailleurs indiqués la fenêtre temporelle couverte par ce fil thématique ainsi que le nombre de champs qu\'il comporte.</p>
                    ',"helper");
echo "</h2></tr>
</table >
		<li><a href='#tabs-1'>Actifs</a></li>
		<li><a href='#tabs-2'>Potentiellement émergents </a></li>
		<li><a href='#tabs-3'>En suspens</a></li>
	</ul>
	<div id='tabs-1'>
";
/// Première tab  ////
//$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered";
$query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered." AND last_period>=".($last_period-3*$dT);
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
echo "<h3>Fils thématiques actifs";
echo " <span style='font-size: x-small;'> (couvrant au moins 4 périodes) </span></h3>";
echo $myscriptActives;
echo '<br/>';
echo $branch_list;
echo "
	</div>
	<div id='tabs-2'>";
            $query="select * FROM partitions WHERE nb_period_covered > 1 AND nb_period_covered < 4 AND  last_period>($last_period-2*$dT)";
            $resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
            $branch_list=branch_list_string($resultat,$depth,$min_similarity);
            echo "<h3>Thématiques potentiellement émergentes <span style='font-size: x-small;'> (couvrant 2 ou 3 périodes)</span></h3>";
            //echo $myscriptEmergentes;
            echo $branch_list;

echo "
	</div>
	<div id='tabs-3'>";
		$query="select * FROM partitions WHERE nb_period_covered >= $phylo_min_nb_periods_covered AND last_period<($last_period-3*$dT)";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$branch_list=branch_list_string($resultat,$depth,$min_similarity);
        echo "<h3>Fils thématiques passés <span style='font-size: x-small;'> (couvrant au moins 4 périodes)</span></h3>";
        //echo $myscriptSuspens;
	echo $branch_list;

echo "       	</div>
";



//////////////////////////////
///////// Fonctions //////////
//////////////////////////////

function branch_list_string($mysql_branch_list,$depth,$min_similarity){
//donne la liste des macro-branches qui couvrent au moins $phylo_min_nb_periods_covered
	$whitedark='#F8F8F8';
	$whitedarker='#E8E8E8';
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
	   $lab=$ligne[label];
	   if (strcmp(substr($lab,-1),',')==0){
			$lab=substr($lab,0,-1);
	   }
	   $infos['label']=$lab;
	   $infos['label_ids']=$ligne[label_ids];
	   $infos['branch_last_period_cluster_id']=$cluster_ligne[id_cluster];
	   //array_push($branch_last_period,str_replace(' ','-',$last_period_for_branch));
	   //array_push($label_list,$branch.$ligne[label]);
	   //array_push($branch_last_period_cluster_id,$cluster_ligne[id_cluster]);
	   array_push($branch_list,$infos);
	}
	 
	$nb_branches=count($branch_list);
	
	$grouped_labels=cluster_branches($branch_list,$depth,$min_similarity);
	
	$grouped_indexes=$grouped_labels[grouped_indexes]; // groupes des index branches
	
	$Ngram_arrays=$grouped_labels[Ngram_arrays]; // array pour les labelliser
	
	$branch_string='<table class=tableitems cellspacing=0 cellpadding=3 style="background-color:'.$whitedark.';" width=100%>';
	$branch_string.='<tr><td colspan=4 width=100% style="font-variant:small-caps; font-size:normal;">';
	// html avec la liste des branches
	$branch_string.='<i>('.$nb_branches.' fils thématiques dans cette catégorie)</i>'; 
	$branch_string.='</td></tr>';
	$branch_string.='<tr height=27px style="background-color:white;"><td colspan=4 width=100%></td></tr>';
	$branch_string.='<tr height=7px style="background-color:#E0E0E0;"><td colspan=4 width=100%></td></tr>';
	$branch_string.='<tr height=7px><td colspan=4 width=100%></td></tr>';
	
	$first_withoutgroup=1;
	for ($i=0;$i<count($grouped_indexes);$i++){
	
		$index_grouped=$grouped_indexes[$i];
		$Ngrams=$Ngram_arrays[$i];
		if (count($index_grouped)>1)
		{ // c'est un groupe
		
			$group_title='';
			while ((count($Ngrams)>0)&&($line = current($Ngrams))){
				$group_title.=ucfirst(key($Ngrams)).', ';
				next($Ngrams);
			}
			$group_title=substr(trim($group_title), 0, -1);
			$branch_string.='<tr><td colspan=4 width=100%>';
			$branch_string.='<b>'.ucfirst($group_title).'</b>';
			$branch_string.='</td></tr>';

			for ($j=0;$j<count($index_grouped);$j++){
				$index = $index_grouped[$j];
				$branch_id=$branch_list[$index]['id_partition'];
				$sql='SELECT * from partitions WHERE id_partition='.$branch_id;
				$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");
	
				$ligne=mysql_fetch_array($resultat);
				$nchamps=$ligne['nb_fields'];
				$branch='<tr value='.$nchamps.' onMouseOver="this.style.backgroundColor=\''.$whitedarker.'\';" onMouseOut="this.style.backgroundColor=\''.$whitedark.'\';">';

				$branch.='<td width=50px style="font-size: x-small; text-align:right;"><b>'.$nchamps.'</b>&nbsp;champs</td>';
				$branch.='<td width=50px style="font-size: x-small; text-align:right;">&nbsp;';
				$branch.=str_replace("(&nbsp;","(",str_replace(" ","&nbsp;",get_short_string_periode($ligne['first_period'].'-'.$ligne['last_period'])));
				$branch.='&nbsp;</td><td style="font-size:9pt;">';
				
				$branch.='<a href="cluster.php?id_cluster='.$branch_list[$index]['branch_last_period_cluster_id'].'&periode='.str_replace(' ','-',$branch_list[$index]['branch_last_period']).'">';
				$branch.=ucfirst($branch_list[$index]['label']).'</a>';
				$branch.='</td></tr>';
				$branch_string.=$branch;
				next($index_grouped);
			}
		}
		else 
		{ // c'est une branche isolée
			if ($first_withoutgroup) {
				$branch_string.='<tr style="background-color:white; font-variant:small-caps; font-size:large; font-weight:bold;" height=50px>';
				$branch_string.='<td colspan=4 width=100%>fils thématiques "isolés"';
				$first_withoutgroup=0;
				}
			else {
				$branch_string.='<tr><td colspan=4 width=100%>';
				}
			$branch_string.='</td></tr>';
			$branch_id=$branch_list[$index_grouped[0]]['id_partition'];
			$sql='SELECT * from partitions WHERE id_partition='.$branch_id;
			$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");
			
			$ligne=mysql_fetch_array($resultat);
			$nchamps=$ligne['nb_fields'];
			
			$branch='<tr value='.$nchamps.' onMouseOver="this.style.backgroundColor=\''.$whitedarker.'\';" onMouseOut="this.style.backgroundColor=\''.$whitedark.'\';">';
			
			$branch.='<td width=50px style="font-size: x-small; text-align:right;"><b>'.$ligne['nb_fields'].'</b>&nbsp;champs</td>';
			$branch.='<td width=50px style="font-size: x-small; text-align:right;">&nbsp;';
			$branch.=str_replace("(&nbsp;","(",str_replace(" ","&nbsp;",get_short_string_periode($ligne['first_period'].'-'.$ligne['last_period'])));
			$branch.='&nbsp;</td><td style="font-size:9pt;">';
			
			$branch.='<a href="cluster.php?id_cluster='.$branch_list[$index_grouped[0]]['branch_last_period_cluster_id'].'&periode='.str_replace(' ','-',$branch_list[$index_grouped[0]]['branch_last_period']).'">';
			$branch.=ucfirst($branch_list[$index_grouped[0]]['label']).'</a>';
			$branch_string.=$branch.'</td></tr>';
		}
		$branch_string.='<tr height=3px><td width=100% colspan=4 style="background-color:'.$whitedarker.';"></td></tr>';
		//$branch_string=$branch_string.'</ul>'.'<br/>';

	}

	$branch_string.='</table>';
	return remove_popo($branch_string);

}

////////////
function cluster_branches($branch_list,$depth,$min_similarity){
// $branch_list est un array contenant toutes les infos des branches
/// retour un array contenant
// ['grouped_indexes']: un array de groupes d'indices mentionnant les branches associées
// ['Ngram_arrays']: un array contenant pour chaque groupe d'indices, un array pour labelliser le groupe dont les clés sont des NGram pris jusqu'à une profondeur $depth et les valeurs leur nombre d'occurrences dans le corpus
// calcul des similarités entre labels de branches
$label_rows_groups=array();
$label_groups=array();
$nb_labels_treated=0;
$label_rows_remaining_to_process=array();// index des labels non encore catégorisés
// initialisation de ce tableau
for ($i=0;$i<count($branch_list);$i++){
    array_push($label_rows_remaining_to_process,$i);
};

$branch_net=array(); // liens entre branches

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
    // on reconstruit l'array des labels_id de branche
    $target_branches_label_ids=array();
    for ($i=0;$i<count($target_branches);$i++){
        array_push($target_branches_label_ids,$target_branches[$i]['label_ids']);
    }
    if (count($target_branches_label_ids)>3){
        array_push($label_groups,groups_labels($target_branches_label_ids,4,$target_label_raw,$branch_list));
    }else{
        array_push($label_groups,groups_labels($target_branches_label_ids,$depth,$target_label_raw,$branch_list));
    }
}

/// on réordonne par nombre de sujets groupés
$groups_sizes=array();

for ($i=0;$i<count($label_rows_groups);$i++){
    array_push($groups_sizes,count($label_rows_groups[$i]));
}

uasort($groups_sizes, 'compare');
$new_order=array_keys($groups_sizes);

//
$label_rows_groups_temp=array();
for  ($i=0;$i<count($label_rows_groups);$i++){
    array_push($label_rows_groups_temp,$label_rows_groups[$new_order[$i]]);
}
$label_rows_groups=$label_rows_groups_temp;
//
$label_groups_temp=array();
for  ($i=0;$i<count($label_groups);$i++){
    array_push($label_groups_temp,$label_groups[$new_order[$i]]);
}
$label_groups=$label_groups_temp;
//
$resultat=array();
$resultat['grouped_indexes']=$label_rows_groups;
//echo '<br/>';
//print_r($label_rows_groups);
//echo '<br/>';

$resultat['Ngram_arrays']=$label_groups;
//echo '<br/>';
//print_r($label_groups);
//echo '<br/>';

return $resultat;

}
////////////////


function groups_labels($target_labels_ids,$depth,$target_label_raw,$branch_list){
// calcul les $depth Ngrammes les plus fréquents dans la branche parmis d'un ensemble de labels_ids formés de Ngrammes
$ngram_ids_array=array();
$nb_max_fields=0; /// nombre maximum de champs d'une branche.  Sert à diminuer $depth pour les petites branches
$ngram_array=array(); // array dont les clés sont les Ngrams et les valeurs leurs occurrences dans le cluster de banches
    //creation du tableau contenant tous les ids de Ngrammes intervenant dans un label
    while (count($target_labels_ids)>0 ){
        $ngrams_ids=explode('_',array_pop($target_labels_ids));      
        $ngram_ids_array=array_merge($ngram_ids_array,$ngrams_ids);
    }
     $ngram_ids_array=array_unique($ngram_ids_array);
     sort($ngram_ids_array);
    // calcul des formes principales
    $forme_principales=array();
     for ($i=0;$i<count($ngram_ids_array);$i++){
        $ngram_id=$ngram_ids_array[$i];
        $sql = 'SELECT forme_principale from concepts WHERE id='.$ngram_id;      
	$resultat = mysql_query($sql);
        $ngram=mysql_fetch_array ($resultat) ;
        $ngram=$ngram[forme_principale];
        array_push($forme_principales,$ngram);
    }
    for ($i=0;$i<count($target_label_raw);$i++){
        if ($nb_max_fields<$branch_list[$target_label_raw[$i]][nb_fields]){
            $nb_max_fields=$branch_list[$target_label_raw[$i]][nb_fields];
        }
        //echo $i.' branche';
        //echo '<br/>';
        $occurrences_in_branch=explode('_',$branch_list[$target_label_raw[$i]][terms_occ]);
        //print_r($occurrences_in_branch);
        //echo '<br/>';

        $terms_in_branch=explode('_',$branch_list[$target_label_raw[$i]][terms]);
        //print_r($terms_in_branch);
        //echo '<br/>';

        for ($j=0;$j<count($ngram_ids_array);$j++){
            $term_pos_in_array=array_search($ngram_ids_array[$j],$terms_in_branch);
            if ($term_pos_in_array!=''){
                //echo  '<br/>'.$forme_principales[$j].'<br/>';
                //echo $ngram_ids_array[$j].' en position' .$term_pos_in_array.' occ= '.$occurrences_in_branch[$term_pos_in_array].'<br/>';
                if ($ngram_array[$forme_principales[$j]]!=null){
                    $ngram_array[ $forme_principales[$j]]+=$occurrences_in_branch[$term_pos_in_array]/$branch_list[$target_label_raw[$i]][nb_fields];
                }else{
                    $ngram_array[ $forme_principales[$j]]=$occurrences_in_branch[$term_pos_in_array]/$branch_list[$target_label_raw[$i]][nb_fields];
                }

             }  
        
        }
        
    }
   if ($nb_max_fields<=4){
        if ($depth==4){
            $depth=2;
        }else{
            $depth=1;
        }
   }
    return get_keys_with_highest_values($ngram_array,$depth);
}

function branch_similarity($branch1,$branch2){
// calcul une similarité entre branches en fonctions des termes quelles contiennent et de leurs occurrences
// utilise le cos des vecteurs des occ de termes normalisées
$branch1_terms_ids=explode('_',$branch1['terms']);
$branch1_terms=explode('_',$branch1['label']);
$branch2_terms_ids=explode('_',$branch2['terms']);
$nb_fields1=$branch1['nb_fields'];
$squared_nb_fields1=$nb_fields1*$nb_fields1;
$nb_fields2=$branch2['nb_fields'];

$squared_nb_fields2=$nb_fields2*$nb_fields2;

$total_number_of_clusters=getValue('total_number_of_clusters');

$branch1_terms_occ=explode('_',$branch1['terms_occ']);
$branch2_terms_occ=explode('_',$branch2['terms_occ']);


$common_terms=array_intersect($branch1_terms_ids,$branch2_terms_ids);
$similarity=0;
while (count($common_terms)>0){
    $term=array_pop($common_terms);
    $sql = 'SELECT occurrences_in_clusters from concepts WHERE id='.$term;

    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des occurrences dans le corpus)</b>.");
    while ($ligne=mysql_fetch_array($resultat)) {
        $nb_occ=$ligne[occurrences_in_clusters];
        }
    $rank_in_branch1=search($term, $branch1_terms_ids);
    $rank_in_branch2=search($term, $branch2_terms_ids);
    $similarity=$similarity+($branch1_terms_occ[$rank_in_branch1]/$nb_fields1/$nb_occ*$total_number_of_clusters*$branch2_terms_occ[$rank_in_branch2]/$nb_fields2/$nb_occ*$total_number_of_clusters);
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

return ($similarity*$similarity/$branch1_squares/$branch2_squares);
}

function linkFilThematique($jscriptmp,$id_partition) {
// Construit le lien vers les champs thématiques de l'extrémité du FT en proposant
// si besoin plusieurs choix via un helper
// retourne le $jscriptmp actualisé et le html à injecter pour faire le lien

    $last_period_clusters=getPartitionLastPeriodClusters($id_partition);
//// préparation des liens de fils thématiques
    $jscriptmp.="
               $('#dialogfilThematique".$id_partition."')
		  .dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
		  .click(function () { $('#dialogfilThematique".$id_partition."').dialog('close'); });

		$('#openerfilThematique".$id_partition."').click(function(e) {
			if (!$('#dialogfilThematique".$id_partition."').dialog('isOpen'))
				$('#dialogfilThematique".$id_partition."').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
			else
				$('#dialogfilThematique".$id_partition."').dialog('close');
			return false;
			});";
    if (count($last_period_clusters)==1) {
        $last_period_clusters=$last_period_clusters[0];
        $fils_thematique_html='<a href="'.$last_period_clusters[attribut].'"><font color='.$backdarker.'>'.remove_popo(substr($partition_infos[label],0,-1)).'</font></a></span>';
    }
    else {
        $cluster_Link_html='<ul><font color=blue>';
        for ($i=0;$i<count($last_period_clusters);$i++) {
            $cluster_Link_html.='<li><a href="'.$last_period_clusters[$i][attribut].'"><font color=blue>'.str_replace('---','/',remove_popo($last_period_clusters[$i][label])).'</a></li>';
        }
        $cluster_Link_html.='</ul>';
        $fils_thematique_html='<a href scr=# id="openerfilThematique'.$id_partition.'"><font color='.$backdarker.'>'.remove_popo(substr($partition_infos[label],0,-1)).'</font></a>';

    }
    echo '<span id="dialogfilThematique'.$id_partition.'" style="display:none;" title="Liens vers l\'extrémité du fil thématique ('.get_short_string_periode(arrange_periode($last_period_clusters[0][periode])).')">';
    echo 'Ce fil thématique a plusieurs champs en dernière période :'.$cluster_Link_html;
    echo '</span>';
    return array($jscriptmp,$fils_thematique_html);
}
/////////////////////////////////
//////// veilles fonctions //////
/////////////////////////////////
function label_label_group($target_labels,$depth){
// calcul les Ngrammes les plus fréquent d'un ensemble de labels formés de Ngrammes
echo 'entering label_label_group<br/>';
echo '$target_labels : <br/>';
    print_r($target_labels);
    echo '<br/>';
$ngram_array=array();
echo 'nb labels:'.count($target_labels);
if (count($target_labels)>1){
    while (count($target_labels)>0 ){
        $ngrams=explode(',',array_pop($target_labels));
        echo 'Incorporating<br/>';
        print_r($ngrams);
        echo '<br/>';
         while (count($ngrams)>0 ){
                $ngram=array_pop($ngrams);
                echo 'added:'.$ngram.'<br/>';
                if ($ngram_array[trim($ngram)]==null){
                    $ngram_array[trim($ngram)]=1;
                }else{
                    echo 'incrementing: '.trim($ngram).'<br/>';
                    $ngram_array[trim($ngram)]=$ngram_array[trim($ngram)]+1;
                }
        }
    echo '$ngram_array : <br/>';
    print_r($ngram_array);
    echo '<br/>';
    }

echo 'Several Targets; ngram array<br/>';
print_r($ngram_array);
echo '<br/>';

echo 'label<br/>';
print_r(get_keys_with_highest_values($ngram_array,$depth));
echo '<br/>';

    return get_keys_with_highest_values($ngram_array,$depth);
}else{
    $ngrams=explode(',',array_pop($target_labels));
    while (count($ngrams)>0 ){
                $ng=array_pop($ngrams);
                if ($ng!=null){
                    $result[$ng]=1;
                }
    }
    echo 'legend:'.'<br/';
    print_r($result);
    echo '<br/';
    return $result;
}
}


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

echo '</div>';
echo '
	<script> $(function() { '.$jscriptmp.' });</script>';
include("footer.php");

		   // print_r($branch_list);
		   //  echo $index_grouped[0].'<br/>';
		   //  echo 'list:'.$branch_list['branch_last_period_cluster_id'].'<br/>';
		   // echo $branch_list['branch_last_period_cluster_id'][$index_grouped[0]].'<br/>';
	
		   //  echo $branch_list['branch_last_period'][$index_grouped[0]].'<br/>';
		   //  echo $branch_list['label'][$index_grouped[0]].'<br/>';

?>