<?php
/// Librarie de fonctions relatives aux phylogénies et fils thématiques

///////////////////////////////////////
/// Opérations sur les fils thématiques
///////////////////////////////////////

function linkFilThematique($jscriptmp,$id_partition,$partition_infos,$color_link) {
// fait un lien vers l'extrémité d'un fils thématique
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

    $cluster_Link_html='<ul>';
    for ($i=0;$i<count($last_period_clusters);$i++) {
        $cluster_Link_html.='<li><a href="'.$last_period_clusters[$i][attribut].'">
                <font color=blue>'.str_replace('---','/',remove_popo($last_period_clusters[$i][label])).'</font></a></li>';
    }
    $cluster_Link_html.='</ul>';
    $fils_thematique_html='<a href scr=# id="openerfilThematique'.$id_partition.'">
            <font color='.$color_link.'>'.substr(remove_popo($partition_infos[label]),0,-1).'</font></a>';
    echo '<span id="dialogfilThematique'.$id_partition.'" style="display:none;" title="Caractéristiques du fil thématique ('.get_short_string_periode(arrange_periode($last_period_clusters[0][periode])).')">';
    echo 'Ce fil thématique a plusieurs champs en dernière période :'.$cluster_Link_html;
    echo '</span>';
    return array($jscriptmp,$fils_thematique_html);
}

function imagestar($id_partition) {
// produit le html des images de score
    $sql='SELECT * from partitions WHERE id_partition='.$id_partition;
    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");
    $ligne=mysql_fetch_array($resultat);
    $score=$ligne['score'];
    $star_image='';
    if ($score>.5) {
        $score=round(($score+1)/2) ;
        $star_image='';
        for ($s=0;$s<$score;$s++) {
            $star_image.='<img src="images/star.gif" border="0" >';
        }
    }else {
        $star_image.='<img src="images/stargrey.gif" border="0">';
    }
    return $star_image;
}

function linkstar($jscriptmp,$id_partition) {
// renvoie la partie <a href= ...> pour construire les liens vers les clusters les plus populaires d'un
// fil thématique
$sql='SELECT * from partitions WHERE id_partition='.$id_partition;
$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");
$ligne=mysql_fetch_array($resultat);
$clusters=getClutersFromThisPeriod($id_partition,$ligne['periodWithMaxScore']);

//// préparation des liens de fils thématiques
    $jscriptmp.="
               $('#dialoglinkstar".$id_partition."')
		  .dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
		  .click(function () { $('#dialoglinkstar".$id_partition."').dialog('close'); });

		$('#openerlinkstar".$id_partition."').click(function(e) {
			if (!$('#dialoglinkstar".$id_partition."').dialog('isOpen'))
				$('#dialoglinkstar".$id_partition."').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
			else
				$('#dialoglinkstar".$id_partition."').dialog('close');
			return false;
			});";
    if (count($clusters)==1) {
        $clusters=$clusters[0];
        $linkstar='<a href="'.$clusters[attribut].'">';
    }
    else {
        $cluster_Link_html='<ul>';
        for ($i=0;$i<count($clusters);$i++) {
            $cluster_Link_html.='<li><a href="'.$clusters[$i][attribut].'"><font color=blue>'.str_replace('---','/',remove_popo($clusters[$i][label])).'</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
        $linkstar='<a href scr=# id="openerlinkstar'.$id_partition.'">';

    }
    echo '<span id="dialoglinkstar'.$id_partition.'" style="display:none;"
        title="Liens vers la période de popularité maximale <span style=\'font-size: x-small\'>
        ('.get_short_string_periode(arrange_periode($ligne['periodWithMaxScore'])).')</span>">';
    echo 'La période de popularité maximale de ce fil thématique correspond a plusieurs champs thématiques :'.$cluster_Link_html;
    echo '</span>';
    return array($jscriptmp,$linkstar);
}

function linkstarString($id_partition,$imagestar) {
// renvoie une string pour le popup fil thématique avec les infos sur les champs de score max
$sql='SELECT * from partitions WHERE id_partition='.$id_partition;
$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");
$ligne=mysql_fetch_array($resultat);
$clusters=getClutersFromThisPeriod($id_partition,$ligne['periodWithMaxScore']);

//// préparation des liens de fils thématiques

    if (count($clusters)==1) {
        $clusters=$clusters[0];
        $linkstarString='Ce fil thématique atteint sa popularité maximale ('.$imagestar.') sur la
            période'.get_short_string_periode(arrange_periode($ligne['periodWithMaxScore'])).'
            avec le champ '.'<a href="'.$clusters[attribut].'"><font color=blue>'.
        str_replace('---','/',remove_popo($clusters[label])).'</font></a>';
    }
    else {
        $cluster_Link_html='<ul>';
        for ($i=0;$i<count($clusters);$i++) {
            $cluster_Link_html.='<li><a href="'.$clusters[$i][attribut].'"><font color=blue>'.str_replace('---','/',remove_popo($clusters[$i][label])).'</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
        $linkstarString='Ce fil thématique atteint sa popularité maximale ('.$imagestar.') sur la
            période'.get_short_string_periode(arrange_periode($ligne['periodWithMaxScore'])).'
            avec les champs suivants :<br/>'.$cluster_Link_html;
    }
    return $linkstarString  ;
}

function FTInfo($jscriptmp,$partition_infos,$color_link) {
    $id_partition=$partition_infos[id_partition];
//    global $imagestar;
$imagestar=imagestar($id_partition);

    $linkstarString=linkstarString($partition_infos[id_partition],$imagestar);
// Construit le popup d'info d'un champs thématique

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

    if (count($last_period_clusters)>1) {
         $cluster_Link_html='Ce fil thématique comporte plusieurs champs en dernière période :<ul>';
        for ($i=0;$i<count($last_period_clusters);$i++) {
            $cluster_Link_html.='<li><a href="'.$last_period_clusters[$i][attribut].'">
                <font color=blue>'.str_replace('---','/',remove_popo($last_period_clusters[$i][label])).'</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
    }else {
         $cluster_Link_html='Le champ en dernière période de ce fil thématique est '.
         '<a href="'.$last_period_clusters[0][attribut].'">
                <font color=blue>'.str_replace('---','/',remove_popo($last_period_clusters[0][label])).'</font></a>';
    }
    $fils_thematique_html='<a href scr=# id="openerfilThematique'.$id_partition.'">
            <font color='.$color_link.'>'.substr(remove_popo($partition_infos[label]),0,-1).'</font></a>';


    echo '<span id="dialogfilThematique'.$id_partition.'" style="display:none;" title="Caractéristiques du fil thématique ('.get_short_string_periode(arrange_periode($last_period_clusters[0][periode])).')">';
    echo '<p>'.$linkstarString.'</p>';
    echo '<p>'.$cluster_Link_html.'</p>';
    echo '<b>Statistiques</b>';
    echo '<ul>
           <li type=circle>Extention : du <span style="font-size: x-small;" >'.get_date_since($partition_infos['first_period']).'</span> au <span style="font-size: x-small;" >'.get_date_since($partition_infos['last_period']).'</span>'.
            '<li type=circle>'.$partition_infos['nb_period_covered'].' périodes couvertes,'.
            '<li type=circle>'.$partition_infos['nb_fields'].'  champs thématiques au total, '.
            '<li type=circle>'.$partition_infos['nb_terms'].' termes utilisés.'.
            '</ul>';
    echo '</span>';
    return array($jscriptmp,$fils_thematique_html);
}
function link2clusters($jscriptmp,$id_partition,$partition_infos,$period) {
// génère des petits carrés pour faire un lien vers les
//autres clusters de la même période sur le fil thématique
    global $jscriptmp;
    $clusters=getClutersFromThisPeriod($id_partition,$period);
    $nbcluster='';
    for ($i=0;$i<count($clusters);$i++) {
        $nbcluster.='<img src="images/cluster.gif" border="0" >';
    }

//// préparation des liens vers les clusters de la même période et du même fil thématique
    $jscriptmp.="
               $('#dialoglinkCluster".$id_partition."')
		  .dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
		  .click(function () { $('#dialoglinkCluster".$id_partition."').dialog('close'); });

		$('#openerlinkCluster".$id_partition."').click(function(e) {
			if (!$('#dialoglinkCluster".$id_partition."').dialog('isOpen'))
				$('#dialoglinkCluster".$id_partition."').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
			else
				$('#dialoglinkCluster".$id_partition."').dialog('close');
			return false;
			});";
    if (count($clusters)==1) {
        $clusters=$clusters[0];
        $linkcluster='';
    }
    else {
        $cluster_Link_html='<ul>';
        for ($i=0;$i<count($clusters);$i++) {
            $cluster_Link_html.='<li><a href="'.$clusters[$i][attribut].'"><font color=blue>'.str_replace('---','/',remove_popo($clusters[$i][label])).'</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
        $linkcluster='<a href scr=# id="openerlinkCluster'.$id_partition.'">'.$nbcluster.'</a>';

    }
    echo '<span id="dialoglinkCluster'.$id_partition.'" style="display:none;" title="Période du '.get_short_string_periode(arrange_periode($period)).'">';
    echo 'Autres clusters pour ce fil thématique : '.$cluster_Link_html;
    echo '</span>';
    return array($jscriptmp,$linkcluster);
}



function getPartitionLastPeriodClusters($id_partition) {
//renvoie un array contenant les infos des clusters de la dernière période de la
//partition concernée
// Infos de la partitions concernée
    $sql="SELECT * FROM partitions WHERE id_partition=".$id_partition;
    $partQuery=mysql_query($sql);
    while ($part=mysql_fetch_array($partQuery)) {
        $partition_infos=$part;
    }

// Récupère tous les clusters de la dernière période
    $last_period_clusters=array();
    $sql="SELECT * FROM cluster WHERE periode='".$partition_infos[last_period_string]."' AND pseudo=".$partition_infos['id_partition']." GROUP BY id_cluster";
    $resultat=mysql_query($sql) or die ("Champ thématique de la dernière période non récupérés");
    while ($partit=mysql_fetch_array($resultat)) {
        array_push($last_period_clusters,$partit);
    }
    return getClutersFromThisPeriod($partition_infos['id_partition'],$partition_infos[last_period_string]);
}

function getClutersFromThisPeriod($id_partition,$period){
// Récupère tous les clusters de la période
    $clusters=array();
    $sql="SELECT * FROM cluster WHERE periode='".$period."' AND pseudo=".$id_partition." GROUP BY id_cluster";
    $resultat=mysql_query($sql) or die ("Champ thématique de la dernière période non récupérés");
    while ($partit=mysql_fetch_array($resultat)) {
        array_push($clusters,$partit);
    }
    return $clusters;

}

//////////////////////////////
///////// Fonctions //////////
//////////////////////////////

function branch_list_string($mysql_branch_list,$depth,$min_similarity){
//donne la liste des macro-branches qui couvrent au moins $phylo_min_nb_periods_covered
    global $jscriptmp;
	$whitedark='#F8F8F8';
	$whitedarker='#E8E8E8';
	//$label_list=array(); // liste des branches
	//$branch_last_period=array(); // liste des périodes associées
	//$branch_last_period_cluster_id=array(); // liste de clusters des branches
	$branch_list=array(); // infos sur les macro-branches (a vocation a intégrer toutes les variable ci-dessus)
	while ($ligne=mysql_fetch_array($mysql_branch_list)) {
	   $last_period_for_branch=$ligne[last_period_string];
	   $infos=array();// information sur la partition traitée
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
	$branch_string.='<tr height=7px><td colspan=4 width=100%></td></tr>';

	$first_withoutgroup=1;
        if (count($grouped_indexes)>0){
            $branch_string.='<tr style="background-color:white; font-variant:small-caps; font-size:large; font-weight:bold;" height=50px>';
            $branch_string.='<td colspan=4 width=100%>Regroupements de fils thématiques</td></tr>';
            $branch_string.='<tr height=7px style="background-color:#E0E0E0;"><td colspan=4 width=100%></td></tr>';
        }
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
                                    list($jscriptmp,$linkFilThematique)=linkFilThematique($jscriptmp,$branch_id,$branch_list[$index],$backdarker);

				$sql='SELECT * from partitions WHERE id_partition='.$branch_id;
				$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");

				$ligne=mysql_fetch_array($resultat);
				$nchamps=$ligne['nb_fields'];

                                list($jscriptmp,$linkstar)=linkstar($jscriptmp,$branch_id,$branch_list[$index],$ligne['periodWithMaxScore']);
                                $imagestar=imagestar($branch_id);
				$branch='<tr value='.$nchamps.' onMouseOver="this.style.backgroundColor=\''.$whitedarker.'\';" onMouseOut="this.style.backgroundColor=\''.$whitedark.'\';">';

				$branch.='<td width=50px style="font-size: x-small; text-align:right;"><b>'.$nchamps.'</b>&nbsp;champs<br/>'.$linkstar.$imagestar.'</a></td>';
				$branch.='<td width=50px style="font-size: x-small; text-align:right;">&nbsp;';
				$branch.=str_replace("(&nbsp;","(",str_replace(" ","&nbsp;",get_short_string_periode($ligne['first_period'].'-'.$ligne['last_period'])));
				$branch.='&nbsp;</td><td style="font-size:9pt;">';

				$branch.=$linkFilThematique;
				$branch.='</td></tr>';
				$branch_string.=$branch;
				next($index_grouped);
			}
		}
		else
		{ // c'est une branche isolée
			if ($first_withoutgroup) {
				$branch_string.='<tr style="background-color:white; font-variant:small-caps; font-size:large; font-weight:bold;" height=50px>';
				$branch_string.='<td colspan=4 width=100%>fils thématiques hors regroupement';
				$first_withoutgroup=0;
				}
			else {
				$branch_string.='<tr><td colspan=4 width=100%>';
				}
			$branch_string.='</td></tr>';
			$branch_id=$branch_list[$index_grouped[0]]['id_partition'];
                        list($jscriptmp,$linkFilThematique)=linkFilThematique($jscriptmp,$branch_id,$branch_list[$index_grouped[0]],$backdarker);

			$sql='SELECT * from partitions WHERE id_partition='.$branch_id;
			$resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des infos de partition)</b>.");
			$ligne=mysql_fetch_array($resultat);
			$nchamps=$ligne['nb_fields'];
                       list($jscriptmp,$linkstar)=linkstar($jscriptmp,$branch_id,$branch_list[$index],$ligne['periodWithMaxScore']);


                        $branch='<tr value='.$nchamps.' onMouseOver="this.style.backgroundColor=\''.$whitedarker.'\';" onMouseOut="this.style.backgroundColor=\''.$whitedark.'\';">';

			$branch.='<td width=50px style="font-size: x-small; text-align:right;"><b>'.$ligne['nb_fields'].'</b>&nbsp;champs'.$linkstar.'</td>';
			$branch.='<td width=50px style="font-size: x-small; text-align:right;">&nbsp;';
			$branch.=str_replace("(&nbsp;","(",str_replace(" ","&nbsp;",get_short_string_periode($ligne['first_period'].'-'.$ligne['last_period'])));
			$branch.='&nbsp;</td><td style="font-size:9pt;">';

			$branch.=$linkFilThematique;
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
$allterms=array_values(array_merge($branch1_terms_ids,$branch2_terms_ids));
$ratio_common_terms=min(count($common_terms)/count($branch1_terms_ids),count($common_terms)/count($branch2_terms_ids));

$similarity=0;
$branch1_sq_norm=0;
$branch2_sq_norm=0;

while (count($common_terms)>0){
    $term=array_pop($common_terms);
    $nb_occ=getValue($term,'concepts','id','occurrences_in_clusters');
    $rank_in_branch1=search($term, $branch1_terms_ids);
    $rank_in_branch2=search($term, $branch2_terms_ids);
    $var1=$branch1_terms_occ[$rank_in_branch1]/$nb_fields1/$nb_occ*$total_number_of_clusters;
    $var2=$branch2_terms_occ[$rank_in_branch2]/$nb_fields2/$nb_occ*$total_number_of_clusters;
    $similarity=$similarity+$var1*$var2;
    $branch1_sq_norm+=$var1*$var1;
    $branch2_sq_norm+=$var2*$var2;
}

if ($branch1_sq_norm*$branch2_sq_norm==0){
    $similarity=0;
}else{
    $similarity=$ratio_common_terms*$similarity/sqrt($branch1_sq_norm)/sqrt($branch2_sq_norm);
}
//echo $similarity.'<br/>';
return $similarity;
}

/////////////////////////////////
//////// veilles fonctions //////
/////////////////////////////////
function label_label_group($target_labels,$depth){
// calcul les Ngrammes les plus fréquent d'un ensemble de labels formés de Ngrammes
echo 'entering label_label_group<br/>';
echo '$target_labels : <br/>';
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

?>
