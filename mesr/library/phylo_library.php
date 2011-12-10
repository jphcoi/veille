<?php

/// Librarie de fonctions relatives aux phylogénies et fils thématiques
//////////////////////////////
///////// Fonctions //////////
//////////////////////////////

//////////////////////////////
///// Fonctions liées aux dev globpulse et viz raphael
//////////////////////////////


function phylo_plot($phylo_structure,$ytrans,$timespan,$period_min,$screen_width,$myperiod1){

    if(isset( $_GET['id_cluster'])){
        $id_cluster = intval($_GET['id_cluster']); }
        else{
            $id_cluster =-1;
    }    
    
$ymax=max($phylo_structure['y']);    
    
// on écrit toutes les coordonnées des points
for ($i=0;$i<count($phylo_structure['cluster_univ_id']);$i++){       
     echo 'var x_'.$phylo_structure['cluster_univ_id'][$i].'='.($phylo_structure['x'][$i]-$period_min)*1/$timespan.'*(x-60)+40;';
     echo 'var y_'.$phylo_structure['cluster_univ_id'][$i].'='.$ytrans.'+(y-'.$ytrans.')*'.(($phylo_structure['y'][$i]-1)/$ymax).';
            ';                  
}


// on trace les lignes
for ($i=0;$i<count($phylo_structure['cluster_univ_id']);$i++){
    foreach ($phylo_structure['sons'][$i] as $value) {
         $index=array_search($value, $phylo_structure['cluster_univ_id']);
         echo 'var S_'.$phylo_structure['cluster_univ_id'][$i].'_'.$value.'="M"+(x_'.$phylo_structure['cluster_univ_id'][$i].')+ "," + y_'.$phylo_structure['cluster_univ_id'][$i].' + "C"+(x_'.$phylo_structure['cluster_univ_id'][$i].'+30)+ "," + y_'.$phylo_structure['cluster_univ_id'][$i].'  + " " + (x_'.$value.'-30)+ "," + y_'.$value.'+ " " +(x_'.$value.')+ "," + y_'.$value.";                        
            ";
        
        echo 'var c'.$phylo_structure['cluster_univ_id'][$i].'_'.$value. '= R.path(S_'.$phylo_structure['cluster_univ_id'][$i].'_'.$value.');';
        }
};


// on trace les balles
$hue= ($phylo_structure['stream_id'] % 15)/15 ;

for ($i=0;$i<count($phylo_structure['cluster_univ_id']);$i++){    
        //var t2_'.$i.' = R.text(x_'.$phylo_structure['cluster_univ_id'][$i].',y_'.$phylo_structure['cluster_univ_id'][$i].',"'.$phylo_structure['counter'][$i].'-'.$phylo_structure['length_to_end'][$i].'");           
        //t2_'.$i.'.attr({"text-anchor":"start","font-size":20});        
    //var t2_'.$i.' = R.text(x_'.$phylo_structure['cluster_univ_id'][$i].',y_'.$phylo_structure['cluster_univ_id'][$i].',"'.$phylo_structure['cluster_univ_id'][$i].'-'.$phylo_structure['stream_id'].'");           
            //t2_'.$i.'.attr({"text-anchor":"start","font-size":20});        
            
    if (($id_cluster==$phylo_structure['local_id'][$i])&&($phylo_structure['period1'][$i]==$myperiod1)){     
    echo '
            R.circle(x_'.$phylo_structure['cluster_univ_id'][$i].',y_'.$phylo_structure['cluster_univ_id'][$i].', 2*r);
            var t = R.text(50,10,"'.$phylo_structure['label'][$i].'");
            var twidth = t.getBBox().width; 
            var trans=twidth*Math.cos(Math.pi-10);
            t.attr({ "text-anchor":"start","font-size":22,"font-weight":"bold","fill":"grey"});        
            var bal=R.ball(x_'.$phylo_structure['cluster_univ_id'][$i].',y_'.$phylo_structure['cluster_univ_id'][$i].', r, 0)                          
                .click(function (event) {window.open("'.str_replace('amp;','', $phylo_structure['attribut'][$i]).'","_self");});     
                
        ';
    }else{
   // 
    
        echo '         
            var bal_'.$phylo_structure['cluster_univ_id'][$i].'=R.ball(x_'.$phylo_structure['cluster_univ_id'][$i].',y_'.$phylo_structure['cluster_univ_id'][$i].', r, '.$hue.');                                    
            var t_'.$phylo_structure['cluster_univ_id'][$i].' = R.text(x_'.$phylo_structure['cluster_univ_id'][$i].',y_'.$phylo_structure['cluster_univ_id'][$i].'-20, "'.''.str_replace('dpopostrophe ', "d'", $phylo_structure['label'][$i]).'");                           
        

            t_'.$phylo_structure['cluster_univ_id'][$i].'.attr({"text-anchor":"center","font-size":20});        
            t_'.$phylo_structure['cluster_univ_id'][$i].'.hide();
            var c_'.$phylo_structure['cluster_univ_id'][$i].'=R.circle((x_'.$phylo_structure['cluster_univ_id'][$i].'),y_'.$phylo_structure['cluster_univ_id'][$i].', 1.5*r).attr({fill: "red",opacity:0});';
        
            
        
            echo 'c_'.$phylo_structure['cluster_univ_id'][$i].'.mouseover(function (event) {t_'.$phylo_structure['cluster_univ_id'][$i].'.show();'.$showlinks.'});
            c_'.$phylo_structure['cluster_univ_id'][$i].'.mouseout(function (event) {t_'.$phylo_structure['cluster_univ_id'][$i].'.hide();});
            c_'.$phylo_structure['cluster_univ_id'][$i].'.click(function (event) {window.open("'.str_replace('amp;','', $phylo_structure['attribut'][$i]).'","_self");});              
        ';    
    }
};
      
}

function create_phylo_structure($partition_id) {
     //Créer une spatialisation de la phylo en parcourant le réseau de proche en proche
    //crée une structure de type multi_array décrivant une macro-branch de phylogénie avec les champs suivants
    // cluster_ids (identifiant unique d'un cluster),period1,period2, 
    // length_to_end (distance restant sur la sous chaine),length_from_start (distance parcourue depuis le début),fathers,sons     
    // x est la période et y est calculé de façon a optimiser le nombre de sous branches rectilignes et minimiser 
    
    // on sélectionne tous les clusters
    $phylo = array();
    
    $phylo['stream_id']=$partition_id;
    $count=0;  
    $listed_clusters=array();
    $resultat = mysql_query("SELECT * FROM cluster WHERE pseudo=" . $partition_id) or die("Requête non executée.");
    while ($ligne = mysql_fetch_array($resultat)) {
        $cluster_id_exist = array_search($ligne['id_cluster_univ'],$listed_clusters);
        if (is_bool($cluster_id_exist)) {//le cluster n'est pas encore répertorié
            array_push($listed_clusters,$ligne['id_cluster_univ']);
            $phylo['cluster_univ_id'][] = $ligne['id_cluster_univ'];
            $phylo['attribut'][]=$ligne['attribut'];     
            $p = split(' ', $ligne['periode']);
            $phylo['period1'][] = $p[0];
            $phylo['local_id'][] = $ligne['id_cluster'];
            $phylo['label'][] = $ligne['label'];
            $phylo['period2'][] = $p[1];
            $phylo['length_to_end'][] = 0;
            $phylo['exit'][] = 0; // marqueur utile pour la suite pour voir s'il le noeud doit encore être traité                                 
            $phylo['count'][] = 0; // pour le debugg
            
            
            
            // on récupère pères et fils            
            $resultat_sons = mysql_query("SELECT id_cluster_2_univ FROM `phylo` WHERE id_cluster_1_univ=" . $ligne['id_cluster_univ']) or die("fils non récupérés.");
            $resultat_fathers = mysql_query("SELECT id_cluster_1_univ FROM `phylo` WHERE id_cluster_2_univ=" . $ligne['id_cluster_univ']) or die("fils non récupérés.");
            $sons = array();
            $fathers = array();
            while ($ligne_sons = mysql_fetch_array($resultat_sons)) {
                $sons[] = $ligne_sons['id_cluster_2_univ'];
            }

            while ($ligne_fathers = mysql_fetch_array($resultat_fathers)) {
                $fathers[] = $ligne_fathers['id_cluster_1_univ'];
            }
            $phylo['fathers'][] = $fathers;
            $phylo['sons'][] = $sons;
            $phylo['x'][] = 0; // positions initialisées en 0
            $phylo['y'][] = 0;
           
        }
        
    }
    
        $period_uniques = $phylo['period1'];
    
    $period_uniques=array_unique($period_uniques);// périodes par ordre décroissant
    sort($period_uniques);
    $period_uniques_reverse=array_reverse($period_uniques); 
    ///$nb_periodes=$period_uniques[-1]-$period_uniques[0];   
    
    $clusters_processed = array();
    // On calcule pour chaque cluster sa distance à l'extremité de sa branche 
    foreach ($period_uniques_reverse as $current_period) {
        $clusters_rank = array_keys($phylo['period1'], $current_period);
        foreach ($clusters_rank as $cluster_rank) {
            $clusters_processed[$cluster_rank] = 0; // on initialise le marqueur de traitement de la spatialisation (pour plus tard)
            $length_to_end = 0;
            //pta($phylo['sons'][$cluster_rank]);
            if (!empty($phylo['sons'][$cluster_rank])) {                               
                for ($j = 0; $j < count($phylo['sons'][$cluster_rank]); $j++) {
                    if ($phylo['length_to_end'][array_search($phylo['sons'][$cluster_rank][$j], $phylo['cluster_univ_id'])] > $length_to_end - 1) {
                        $length_to_end = $phylo['length_to_end'][array_search($phylo['sons'][$cluster_rank][$j], $phylo['cluster_univ_id'])] + 1;
                    }
                }
                $phylo['length_to_end'][$cluster_rank] = $length_to_end;
                
            }
        }unset($cluster_rank);       
    }unset($current_period);

    // On calcule pour chaque cluster sa distance au début sa branche 
    
    foreach ($period_uniques as $current_period) {
        $clusters_rank = array_keys($phylo['period1'], $current_period);
        
        foreach ($clusters_rank as $cluster_rank) {
            $length_to_start = 0;
            if (!empty($phylo['fathers'][$cluster_rank])) {
                for ($j = 0; $j < count($phylo['fathers'][$cluster_rank]); $j++) {
                    if ($phylo['length_to_start'][array_search($phylo['fathers'][$cluster_rank][$j], $phylo['cluster_univ_id'])] > $length_to_start - 1) {
                        $length_to_start = $phylo['length_to_start'][array_search($phylo['fathers'][$cluster_rank][$j], $phylo['cluster_univ_id'])] + 1;
                    }
                }
                $phylo['length_to_start'][$cluster_rank] = $length_to_start;
            }
        }unset($cluster_rank);
    }unset($current_period);

///////////////////////////////////////////
//Spatialisation de la phylo
///////////////////////////////////////////

    
    $y_axis = array(); // donne l'épaisseur de la phylo par période (nombre de branches parallèles)
    foreach ($period_uniques as $value) {
        $y_axis[$value] = 1;
    }unset($value);


    // on initialise le exit en choisissant l'un des noeuds extrêmes qui a le plus de périodes antécédentes
    $firstCandidates=array_search(max($phylo['length_to_start']),$phylo['length_to_start']);
    $phylo['exit'][$firstCandidates] = 1; // on marque comme une sortie le premier noeud, également un bout de chaine

    global $end_reached; // indique si on a atteint une extrémité de branche
    $end_reached=1;
    $to_process = true; // dit s'il reste des noeuds à traiter
    $direction=1; // dit si on parcours vers le haut ou le bas (0 bas, 1 haut)
    $directionChanged=0;// dit si on vient de changer de direction
    $stop=0; // si stop =2 on a changé deux fois de suite de direction et on doit s'arrêter
    
    $next_nodes= array_search_filtered($phylo,'exit',1,'length_to_start','max');  
    // noeud d'ou l'on vient. Initialisé à la même valeur que le premier noeud
    
    $next_nodes=$next_nodes[0];
    
    
    
    while ($to_process) {        
        $previous_node=$next_nodes;// on garde en mémoire le noeud que l'on vient de traiter      
        if ($direction==1){// on remonte la phylo                
                $next_nodes =  array_search_filtered($phylo,'exit',max(1,max($phylo['exit'])),'length_to_start','min');                   
            if (count($next_nodes)==0){                                
                $direction=0;
                $directionChanged=1;
                $stop+=1;
            }else{
                $next_nodes=$next_nodes[0];            
                $directionChanged=0;
                $stop=0;
            }
        }else{// on redescend la phylo            
                $next_nodes = array_search_filtered($phylo,'exit',min(-1,min($phylo['exit'])),'length_to_end','min');    
                
                // on regarde s'il y a des pères                
//                $neighborsId=array();
//                foreach ($next_nodes as $value){
//                    $neighborsId[]=$phylo['cluster_id'][$next_nodes];
//                }unset($value);

            if (count($next_nodes)==0){                                
                $direction=1;
                $directionChanged=1;    
                
                $stop+=1;
            }else{
                $next_nodes=$next_nodes[0];
                $stop=0;
                $directionChanged=0;
            }
        }
        if (count($next_nodes)!=0) { // s'il reste des 'sorties'            
            //pt('processing node'.$phylo['label'][$next_nodes].'from periode'.$phylo['period1'][$next_nodes]);
            
            $phylo['x'][$next_nodes] = $phylo['period1'][$next_nodes];
            
            //$y_axis[$phylo['period1'][$next_nodes]] = $y_axis[$phylo['period1'][$next_nodes]] + 1;
            if ($end_reached==1){    
                $y_axis[$phylo['period1'][$next_nodes]] = $y_axis[$phylo['period1'][$next_nodes]] +1;
                $end_reached=0;
            }else{                                
                foreach ($period_uniques as $period){
                    if (($period>=min($phylo['period1'][$next_nodes],$phylo['period1'][$previous_node]))
                            &&($period<=max($phylo['period1'][$next_nodes],$phylo['period1'][$previous_node]))){
                        //pt($y_axis[$phylo['period1'][$previous_node]]);
                        $y_axis[$period]=$phylo['y'][$previous_node];                       
                    }                                        
                }
                
            }

            $m=min($phylo['exit']);
            $M=max($phylo['exit']);
            $periodRank=array_keys($period_uniques,$phylo['period1'][$next_nodes]);

            $current_sons = $phylo['sons'][$next_nodes];    
            
            if ($direction==0){
                $end_reached=1;
            }
                         
            foreach ($current_sons as $value) {
                $index=array_search($value, $phylo['cluster_univ_id']);
                if ($clusters_processed[$index] == 0) {
                    if ($direction==0){
                        $phylo['exit'][$index] = $m-1;
                        $end_reached=0;
                    }else{
                        $phylo['exit'][$index] = -1;
                    }
                    
                }else{
                    if($end_reached){ 
                        $periodRankTemp=array_keys($period_uniques,$phylo['period1'][$index]);
                        for ($per=min($periodRank[0],$periodRankTemp[0]);$per<=max($periodRank[0],$periodRankTemp[0]);$per++){
                            if ($y_axis[$phylo['period1'][$next_nodes]]<$y_axis[$period_uniques[$per]]){
                                $y_axis[$phylo['period1'][$next_nodes]]=$y_axis[$period_uniques[$per]]+1;
                            }
                        }
                    }
                }
            }unset($value);
            
            
            $current_fathers = $phylo['fathers'][$next_nodes];                                  
            
            if ($direction==1){
                $end_reached=1;
            }
            
            
            
            foreach ($current_fathers as $value) {
                $index=array_search($value, $phylo['cluster_univ_id']);
                if ($clusters_processed[$index] == 0) {
                    if ($direction==0){
                        $phylo['exit'][$index] =1;
                    }else{
                        $phylo['exit'][$index] = $M+1;
                        $end_reached=0;
                    }
                }else{
                    if($end_reached){ 
                        $periodRankTemp=array_keys($period_uniques,$phylo['period1'][$index]);
                        for ($per=min($periodRank[0],$periodRankTemp[0]);$per<=max($periodRank[0],$periodRankTemp[0]);$per++){
                            if ($y_axis[$phylo['period1'][$next_nodes]]<$y_axis[$period_uniques[$per]]){
                                $y_axis[$phylo['period1'][$next_nodes]]=$y_axis[$period_uniques[$per]]+1;
                            }
                        }
                    }
                }
            }unset($value);
            
            
//            if ($directionChanged){
//                $ylist=array_slice($y_axis,$phylo['period1'][$next_nodes],$phylo['length_to_end'][$next_nodes]+1);
//                $ybranch=max($ylist);
//            }
//            
       
            $y=0;// on s'assure qu'il n'y a pas de noeud entre un père et son fils avec une ordonnée supérieure à
            // celles du père et du fils
            foreach ($period_uniques as $period){
            if (($period>=min($phylo['period1'][$next_nodes],$phylo['period1'][$previous_node]))
                            &&($period<=max($phylo['period1'][$next_nodes],$phylo['period1'][$previous_node]))){
                        //pt($y_axis[$phylo['period1'][$previous_node]]);
                        if ($y<$y_axis[$period]){
                            $y=$y_axis[$period];
                        }                    
                }                                        
            }
            
            $phylo['y'][$next_nodes] =$y;// $y_axis[$phylo['period1'][$next_nodes]];
            $clusters_processed[$next_nodes] = 1;
            $counter+=1;
            $phylo['counter'][$next_nodes]=$counter;
            $phylo['exit'][$next_nodes] = 0;

        } else {
            if ($stop>2){
                $to_process = 0;
            }
            
        }        

    }
    $dbh=NULL;
    return $phylo;

}

function pta($array){
    print_r($array);
    echo '<br/>';
}


function array_find_sup($array,$minvalue){
    // find all keys for which values are more or equal to $value
    $result=array();
    foreach ($array as $key=>$value){
        if ($minvalue<=$value){
            $result[]=$key;            
        }
    }
    return $result;
}

function array_search_filtered($array, $dim_filter, $dim_filter_val, $target_dim, $funct) {
// tri combiné sur les array multidimentionnels
// retourne un tableau des clef telles que:
// -1) $array[$dim_filter]=$dim_filter_val
// -2) $array[$target_dim]=max($array[$target_dim])  ou min selon $funct

    $array1 = array_keys($array[$dim_filter], $dim_filter_val); // toutes les clef qui ont une certaine valeur de dim
    $array_filtered = array();
    foreach ($array1 as $value) {
        $array_filtered[$value] = $array[$target_dim][$value];
    }
    if ($array_filtered!=null){
    if ($funct==='max'){
        $result = array_keys($array_filtered, max($array_filtered));        
    }else{
        $result = array_keys($array_filtered, min($array_filtered));        
    }        
    }else{
        $result = null;
    }
        
    return $result;
}

function array_search_filtered_sup($array, $dim_filter, $dim_filter_val, $target_dim, $funct) {
// tri combiné sur les array multidimentionnels
// retourne un tableau des clef telles que:
// -1) $array[$dim_filter]>=$dim_filter_val
// -2) $array[$target_dim]=max($array[$target_dim])  ou min selon $funct

    $array1 = array_find_sup($array[$dim_filter], $dim_filter_val); // toutes les clef qui ont une certaine valeur de dim
    $array_filtered = array();
    foreach ($array1 as $value) {
        $array_filtered[$value] = $array[$target_dim][$value];
    }
    $result = array_keys($array_filtered, max($array_filtered));
    return $result;
}

function map($x,$xmin,$xmax,$X,$Y){
    // normalise $x entre $X et $Y sachant que les valeurs parcourent $xmin,$xmax   
    
    if ($xmax==$xmin){
        return 40;
    }else{
        return $X+($x-$xmin)/($xmax-$xmin)*($Y-$X);
    }
    
}    


//////

function branch_list_string($mysql_branch_list, $depth, $min_similarity, $groupAlgo='cluster_branches') {
//donne la liste des macro-branches qui couvrent au moins $phylo_min_nb_periods_covered
    global $jscriptmp;
    $whitedark = '#F8F8F8';
    $whitedarker = '#E8E8E8';
//$label_list=array(); // liste des branches
//$branch_last_period=array(); // liste des périodes associées
//$branch_last_period_cluster_id=array(); // liste de clusters des branches
    $branch_list = array(); // infos sur les macro-branches (a vocation a intégrer toutes les variable ci-dessus)
    while ($ligne = mysql_fetch_array($mysql_branch_list)) {
        $last_period_for_branch = $ligne[last_period_string];
        $infos = array(); // information sur la partition traitée
        $infos['id_partition'] = $ligne[id_partition];
        $infos['nb_fields'] = $ligne[nb_fields];
        $infos['terms'] = $ligne[terms];
        $infos['terms_occ'] = $ligne[terms_occ];
        $infos['branch_last_period'] = str_replace(' ', '-', $last_period_for_branch);
        $lab = $ligne[label];
        if (strcmp(substr($lab, -1), ',') == 0) {
            $lab = substr($lab, 0, -1);
        }
        $infos['label'] = $lab;
        $infos['label_ids'] = $ligne[label_ids];
        array_push($branch_list, $infos);
    }

    $nb_branches = count($branch_list);

    $grouped_labels = cluster_branches($branch_list, $depth, $min_similarity, $groupAlgo);



    $grouped_indexes = $grouped_labels[grouped_indexes]; // groupes des index branches

    $Ngram_arrays = $grouped_labels[Ngram_arrays]; // array pour les labelliser


    $branch_string = '<table class=tableitems cellspacing=0 cellpadding=3 style="background-color:' . $whitedark . ';" width=100%>';
    $branch_string.='<tr><td colspan=4 width=100% style="font-variant:small-caps; font-size:normal;">';
// html avec la liste des branches
    $branch_string.='<i>(' . $nb_branches . ' fils thématiques dans cette catégorie)</i>';
    $branch_string.='</td></tr>';
    $branch_string.='<tr height=7px><td colspan=4 width=100%></td></tr>';

    $first_withoutgroup = 1;
    if (count($grouped_indexes) > 0) {
        $branch_string.='<tr style="background-color:white; font-variant:small-caps; font-size:large; font-weight:bold;" height=50px>';
        $branch_string.='<td colspan=4 width=100%>Regroupements de fils thématiques</td></tr>';
        $branch_string.='<tr height=7px style="background-color:#E0E0E0;"><td colspan=4 width=100%></td></tr>';
    }
    for ($i = 0; $i < count($grouped_indexes); $i++) {
        $index_grouped = $grouped_indexes[$i];
        $Ngrams = $Ngram_arrays[$i];
        if (count($index_grouped) > 1) { // c'est un groupe
            $group_title = '';
            while ((count($Ngrams) > 0) && ($line = current($Ngrams))) {
                $group_title.=ucfirst(key($Ngrams)) . ', ';
                next($Ngrams);
            }
            $group_title = substr(trim($group_title), 0, -1);
            $branch_string.='<tr><td colspan=4 width=100%>';
            $branch_string.='<b>' . ucfirst($group_title) . '</b>';
            $branch_string.='</td></tr>';

            for ($j = 0; $j < count($index_grouped); $j++) {
                $index = $index_grouped[$j];
                $branch_id = $branch_list[$index]['id_partition'];
                list($jscriptmp, $linkFilThematique) = FTInfo($jscriptmp, $branch_id, '#000000');

                //list($jscriptmp,$linkFilThematique)=linkFilThematique($jscriptmp,$branch_id,$branch_list[$index],$backdarker);

                $sql = 'SELECT * from partitions WHERE id_partition=' . $branch_id;
                $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des infos de partition)</b>.");

                $ligne = mysql_fetch_array($resultat);
                $nchamps = $ligne['nb_fields'];

                list($jscriptmp, $linkstar) = linkstar($jscriptmp, $branch_id, $branch_list[$index], $ligne['periodWithMaxScore']);
                $imagestar = imagestar($branch_id);
                $branch = '<tr value=' . $nchamps . ' onMouseOver="this.style.backgroundColor=\'' . $whitedarker . '\';" onMouseOut="this.style.backgroundColor=\'' . $whitedark . '\';">';

                $branch.='<td width=50px style="font-size: x-small; text-align:right;"><b>' . $nchamps . '</b>&nbsp;champs<br/>' . $linkstar . $imagestar . '</a></td>';
                $branch.='<td width=50px style="font-size: x-small; text-align:right;">&nbsp;';
                $branch.=str_replace("(&nbsp;", "(", str_replace(" ", "&nbsp;", get_short_string_periode($ligne['first_period'] . '-' . $ligne['last_period'])));
                $branch.='&nbsp;</td><td style="font-size:9pt;">';

                $branch.=$linkFilThematique;
                $branch.='</td></tr>';
                $branch_string.=$branch;
                next($index_grouped);
            }
        } else { // c'est une branche isolée
            if ($first_withoutgroup) {
                $branch_string.='<tr style="background-color:white; font-variant:small-caps; font-size:large; font-weight:bold;" height=50px>';
                $branch_string.='<td colspan=4 width=100%>fils thématiques hors regroupement';
                $first_withoutgroup = 0;
            } else {
                $branch_string.='<tr><td colspan=4 width=100%>';
            }
            $branch_string.='</td></tr>';
            $branch_id = $branch_list[$index_grouped[0]]['id_partition'];
            //list($jscriptmp,$linkFilThematique)=linkFilThematique($jscriptmp,$branch_id,$branch_list[$index_grouped[0]],$backdarker);
            list($jscriptmp, $linkFilThematique) = FTInfo($jscriptmp, $branch_id, '#000000');
            $sql = 'SELECT * from partitions WHERE id_partition=' . $branch_id;
            $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des infos de partition)</b>.");
            $ligne = mysql_fetch_array($resultat);
            $nchamps = $ligne['nb_fields'];
            list($jscriptmp, $linkstar) = linkstar($jscriptmp, $branch_id, $branch_list[$index], $ligne['periodWithMaxScore']);
            $imagestar = imagestar($branch_id);
            $branch = '<tr value=' . $nchamps . ' onMouseOver="this.style.backgroundColor=\'' . $whitedarker . '\';" onMouseOut="this.style.backgroundColor=\'' . $whitedark . '\';">';
            $branch.='<td width=50px style="font-size: x-small; text-align:right;"><b>' . $ligne['nb_fields'] . '</b>&nbsp;champs<br/>' . $linkstar . $imagestar . '</a></td>';
            $branch.='<td width=50px style="font-size: x-small; text-align:right;">&nbsp;';
            $branch.=str_replace("(&nbsp;", "(", str_replace(" ", "&nbsp;", get_short_string_periode($ligne['first_period'] . '-' . $ligne['last_period'])));
            $branch.='&nbsp;</td><td style="font-size:9pt;">';
            $branch.=$linkFilThematique;
            $branch.='</td></tr>';
            $branch_string.=$branch;
        }
        $branch_string.='<tr height=3px><td width=100% colspan=4 style="background-color:' . $whitedarker . ';"></td></tr>';
//$branch_string=$branch_string.'</ul>'.'<br/>';
    }

    $branch_string.='</table>';
    return remove_popo($branch_string);
}

////////////
function cluster_branches($branch_list, $depth, $min_similarity, $groupAlgo) {
// $branch_list est un array contenant toutes les infos des branches
/// retour un array contenant
// ['grouped_indexes']: un array de groupes d'indices mentionnant les branches associées
// ['Ngram_arrays']: un array contenant pour chaque groupe d'indices, un array pour labelliser le groupe dont les clés sont des NGram pris jusqu'à une profondeur $depth et les valeurs leur nombre d'occurrences dans le corpus
// calcul des similarités entre labels de branches
    $label_rows_groups = array();
    $label_groups = array();
    $nb_labels_treated = 0;
    $label_rows_remaining_to_process = array(); // index des labels non encore catégorisés
// initialisation de ce tableau
    for ($i = 0; $i < count($branch_list); $i++) {
        array_push($label_rows_remaining_to_process, $i);
    };

    $branch_net = array(); // liens entre branches

    while (count($label_rows_remaining_to_process) > 0) {
        $target_row = array_pop($label_rows_remaining_to_process);
        $target_label_raw = array(); // liste des rangs (dans $branch_list) groupés avec target_row
        $target_branches = array(); // liste des branches correspondant aux rangs associés
        array_push($target_branches, $branch_list[$target_row]);
        array_push($target_label_raw, $target_row);

        $label_rows_remaining_to_process_second_pass = $label_rows_remaining_to_process;
        while (count($label_rows_remaining_to_process_second_pass) > 0) {
            $candidate_row = array_pop($label_rows_remaining_to_process_second_pass);
            $candidate_branch = $branch_list[$candidate_row];
            $candidateLabel = remove_popo($candidate_branch[label]);
            $exit_here = 0;
            $j = 0;
            while (($j < count($target_branches)) && (exit_here == 0)) {
                if (strcmp($groupAlgo, 'cluster_branches') == 0) {
                    $p = branch_similarity($target_branches[$j], $candidate_branch);
                    //similar_text ( $candidate_label,$target_branches[$j],$p );
                    if ($p > $min_similarity) {
                        $exit_here = 1;
                    };
                    $j++;
                } else {
                    $min_similarity = 1;
                    $p = similarity(remove_popo($target_branches[$j][label]), $candidateLabel);
                    if ($p > $min_similarity) {
                        $exit_here = 1;
                    };
                    $j++;
                }
            };

            if ($exit_here == 1) {
                array_push($target_branches, $candidate_branch);
                array_push($target_label_raw, $candidate_row);
                $label_rows_remaining_to_process = array_diff($label_rows_remaining_to_process, $target_label_raw);
            }
        }


        array_push($label_rows_groups, $target_label_raw);
        // on reconstruit l'array des labels_id de branche
        $target_branches_label_ids = array();
        for ($i = 0; $i < count($target_branches); $i++) {
            array_push($target_branches_label_ids, $target_branches[$i]['label_ids']);
        }
        if (count($target_branches_label_ids) > 3) {
            array_push($label_groups, groups_labels($target_branches_label_ids, 4, $target_label_raw, $branch_list));
        } else {
            array_push($label_groups, groups_labels($target_branches_label_ids, $depth, $target_label_raw, $branch_list));
        }
    }

/// on réordonne par nombre de sujets groupés
    $groups_sizes = array();

    for ($i = 0; $i < count($label_rows_groups); $i++) {
        array_push($groups_sizes, count($label_rows_groups[$i]));
    }

    uasort($groups_sizes, 'compare');
    $new_order = array_keys($groups_sizes);

//
    $label_rows_groups_temp = array();
    for ($i = 0; $i < count($label_rows_groups); $i++) {
        array_push($label_rows_groups_temp, $label_rows_groups[$new_order[$i]]);
    }
    $label_rows_groups = $label_rows_groups_temp;
//
    $label_groups_temp = array();
    for ($i = 0; $i < count($label_groups); $i++) {
        array_push($label_groups_temp, $label_groups[$new_order[$i]]);
    }
    $label_groups = $label_groups_temp;
//
    $resultat = array();
    $resultat['grouped_indexes'] = $label_rows_groups;
//echo '<br/>';
//print_r($label_rows_groups);
//echo '<br/>';

    $resultat['Ngram_arrays'] = $label_groups;
//echo '<br/>';
//print_r($label_groups);
//echo '<br/>';

    return $resultat;
}

////////////////


function groups_labels($target_labels_ids, $depth, $target_label_raw, $branch_list) {
// calcul les $depth Ngrammes les plus fréquents dans la branche parmis d'un ensemble de labels_ids formés de Ngrammes
    $ngram_ids_array = array();
    $nb_max_fields = 0; /// nombre maximum de champs d'une branche. Sert à diminuer $depth pour les petites branches
    $ngram_array = array(); // array dont les clés sont les Ngrams et les valeurs leurs occurrences dans le cluster de banches
    //creation du tableau contenant tous les ids de Ngrammes intervenant dans un label
    while (count($target_labels_ids) > 0) {
        $ngrams_ids = explode('_', array_pop($target_labels_ids));
        $ngram_ids_array = array_merge($ngram_ids_array, $ngrams_ids);
    }
    $ngram_ids_array = array_unique($ngram_ids_array);
    sort($ngram_ids_array);
    // calcul des formes principales
    $forme_principales = array();
    for ($i = 0; $i < count($ngram_ids_array); $i++) {
        $ngram_id = $ngram_ids_array[$i];
        $sql = 'SELECT forme_principale from concepts WHERE id=' . $ngram_id;
        $resultat = mysql_query($sql);
        $ngram = mysql_fetch_array($resultat);
        $ngram = $ngram[forme_principale];
        array_push($forme_principales, $ngram);
    }
    for ($i = 0; $i < count($target_label_raw); $i++) {
        if ($nb_max_fields < $branch_list[$target_label_raw[$i]][nb_fields]) {
            $nb_max_fields = $branch_list[$target_label_raw[$i]][nb_fields];
        }
        //echo $i.' branche';
        //echo '<br/>';
        $occurrences_in_branch = explode('_', $branch_list[$target_label_raw[$i]][terms_occ]);
        //print_r($occurrences_in_branch);
        //echo '<br/>';

        $terms_in_branch = explode('_', $branch_list[$target_label_raw[$i]][terms]);
        //print_r($terms_in_branch);
        //echo '<br/>';

        for ($j = 0; $j < count($ngram_ids_array); $j++) {
            $term_pos_in_array = array_search($ngram_ids_array[$j], $terms_in_branch);
            if ($term_pos_in_array != '') {
                //echo '<br/>'.$forme_principales[$j].'<br/>';
                //echo $ngram_ids_array[$j].' en position' .$term_pos_in_array.' occ= '.$occurrences_in_branch[$term_pos_in_array].'<br/>';
                if ($ngram_array[$forme_principales[$j]] != null) {
                    $ngram_array[$forme_principales[$j]]+=$occurrences_in_branch[$term_pos_in_array] / $branch_list[$target_label_raw[$i]][nb_fields];
                } else {
                    $ngram_array[$forme_principales[$j]] = $occurrences_in_branch[$term_pos_in_array] / $branch_list[$target_label_raw[$i]][nb_fields];
                }
            }
        }
    }
    if ($nb_max_fields <= 4) {
        if ($depth == 4) {
            $depth = 2;
        } else {
            $depth = 1;
        }
    }
    return get_keys_with_highest_values($ngram_array, $depth);
}

function branch_similarity($branch1, $branch2) {
// calcul une similarité entre branches en fonctions des termes quelles contiennent et de leurs occurrences
// utilise le cos des vecteurs des occ de termes normalisées
    $branch1_terms_ids = explode('_', $branch1['terms']);

    $branch1_terms = explode('_', $branch1['label']);
    $branch2_terms_ids = explode('_', $branch2['terms']);

    $nb_fields1 = $branch1['nb_fields'];
    $squared_nb_fields1 = $nb_fields1 * $nb_fields1;

    $nb_fields2 = $branch2['nb_fields'];
    $squared_nb_fields2 = $nb_fields2 * $nb_fields2;

    $total_number_of_clusters = getValue('total_number_of_clusters');

    $branch1_terms_occ = explode('_', $branch1['terms_occ']);
    $branch2_terms_occ = explode('_', $branch2['terms_occ']);


    $common_terms = array_intersect($branch1_terms_ids, $branch2_terms_ids);
    $allterms = array_values(array_merge($branch1_terms_ids, $branch2_terms_ids));
    $ratio_common_terms = min(count($common_terms) / count($branch1_terms_ids), count($common_terms) / count($branch2_terms_ids));

    $similarity = 0;
    $branch1_sq_norm = 0;
    $branch2_sq_norm = 0;

    while (count($common_terms) > 0) {
        $term = array_pop($common_terms);
        $nb_occ = getValue($term, 'concepts', 'id', 'occurrences_in_clusters');
        $rank_in_branch1 = search($term, $branch1_terms_ids);
        $rank_in_branch2 = search($term, $branch2_terms_ids);
        $var1 = $branch1_terms_occ[$rank_in_branch1] / $nb_fields1 / $nb_occ * $total_number_of_clusters;
        $var2 = $branch2_terms_occ[$rank_in_branch2] / $nb_fields2 / $nb_occ * $total_number_of_clusters;
        $similarity = $similarity + $var1 * $var2;
        $branch1_sq_norm+=$var1 * $var1;
        $branch2_sq_norm+=$var2 * $var2;
    }

    if ($branch1_sq_norm * $branch2_sq_norm == 0) {
        $similarity = 0;
    } else {
        $similarity = $ratio_common_terms * $similarity / sqrt($branch1_sq_norm) / sqrt($branch2_sq_norm);
    }
//echo $similarity.'<br/>';
    return $similarity;
}

///////////////////////////////////////
/// Opérations sur les fils thématiques
///////////////////////////////////////

function linkFilThematique($jscriptmp, $id_partition, $partition_infos, $color_link) {
// fait un lien vers l'extrémité d'un fils thématique
// si besoin plusieurs choix via un helper
// retourne le $jscriptmp actualisé et le html à injecter pour faire le lien

    $last_period_clusters = getPartitionLastPeriodClusters($id_partition);
//// préparation des liens de fils thématiques
    $jscriptmp.="
$('#dialogfilThematique" . $id_partition . "')
.dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
.click(function () { $('#dialogfilThematique" . $id_partition . "').dialog('close'); });

$('#openerfilThematique" . $id_partition . "').click(function(e) {
if (!$('#dialogfilThematique" . $id_partition . "').dialog('isOpen'))
$('#dialogfilThematique" . $id_partition . "').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
else
$('#dialogfilThematique" . $id_partition . "').dialog('close');
return false;
});";

    $cluster_Link_html = '<ul>';
    for ($i = 0; $i < count($last_period_clusters); $i++) {
        $cluster_Link_html.='<li><a href="' . $last_period_clusters[$i][attribut] . '">
<font color=blue>' . str_replace('---', '/', remove_popo($last_period_clusters[$i][label])) . '</font></a></li>';
    }
    $cluster_Link_html.='</ul>';
    if (count($last_period_clusters) > 1) {
        $fils_thematique_html = '<a href scr=# id="openerfilThematique' . $id_partition . '">
<font color=' . $color_link . '>' . remove_popo($partition_infos[label]) . '</font></a>';
        echo '<span id="dialogfilThematique' . $id_partition . '" style="display:none;" title="Caractéristiques du fil thématique (' . get_short_string_periode(arrange_periode($last_period_clusters[0][periode])) . ')">';
        echo 'Ce fil thématique a plusieurs champs en dernière période :' . $cluster_Link_html;
        echo '</span>';
    } else {
        $fils_thematique_html = '<a href="' . $last_period_clusters[0][attribut] . '">
<font color=' . $color_link . '>' . remove_popo($partition_infos[label]) . '</font></a>';
    }

    return array($jscriptmp, $fils_thematique_html);
}

function imagestar($id_partition) {
// produit le html des images de score
    $sql = 'SELECT * from partitions WHERE id_partition=' . $id_partition;
    $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des infos de partition)</b>.");
    $ligne = mysql_fetch_array($resultat);
    $score = $ligne['score'];
    $star_image = '';
    if ($score > .5) {
        $score = round(($score + 1) / 2);
        $star_image = '';
        for ($s = 0; $s < $score; $s++) {
            $star_image.='<img src="images/star.gif" border="0" >';
        }
    } else {
        $star_image.='<img src="images/stargrey.gif" border="0">';
    }
    return $star_image;
}

function linkstar($jscriptmp, $id_partition) {
// renvoie la partie <a href= ...> pour construire les liens vers les clusters les plus populaires d'un
// fil thématique
    $sql = 'SELECT * from partitions WHERE id_partition=' . $id_partition;
    $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des infos de partition)</b>.");
    $ligne = mysql_fetch_array($resultat);
    $clusters = getClutersFromThisPeriod($id_partition, $ligne['periodWithMaxScore']);

//// préparation des liens de fils thématiques
    $jscriptmp.="
$('#dialoglinkstar" . $id_partition . "')
.dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
.click(function () { $('#dialoglinkstar" . $id_partition . "').dialog('close'); });

$('#openerlinkstar" . $id_partition . "').click(function(e) {
if (!$('#dialoglinkstar" . $id_partition . "').dialog('isOpen'))
$('#dialoglinkstar" . $id_partition . "').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
else
$('#dialoglinkstar" . $id_partition . "').dialog('close');
return false;
});";
    if (count($clusters) == 1) {
        $clusters = $clusters[0];
        $linkstar = '<a href="' . $clusters[attribut] . '">';
    } else {
        $cluster_Link_html = '<ul>';
        for ($i = 0; $i < count($clusters); $i++) {
            $cluster_Link_html.='<li><a href="' . $clusters[$i][attribut] . '"><font color=blue>' . str_replace('---', '/', remove_popo($clusters[$i][label])) . '</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
        $linkstar = '<a href scr=# id="openerlinkstar' . $id_partition . '">';
    }
    echo '<span id="dialoglinkstar' . $id_partition . '" style="display:none;"
title="Liens vers la période de popularité maximale <span style=\'font-size: x-small\'>
(' . get_short_string_periode(arrange_periode($ligne['periodWithMaxScore'])) . ')</span>">';
    echo 'La période de popularité maximale de ce fil thématique correspond a plusieurs champs thématiques :' . $cluster_Link_html;
    echo '</span>';
    return array($jscriptmp, $linkstar);
}

function linkstarString($id_partition, $imagestar) {
// renvoie une string pour le popup fil thématique avec les infos sur les champs de score max
    $sql = 'SELECT * from partitions WHERE id_partition=' . $id_partition;
    $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des infos de partition)</b>.");
    $ligne = mysql_fetch_array($resultat);
    $clusters = getClutersFromThisPeriod($id_partition, $ligne['periodWithMaxScore']);

//// préparation des liens de fils thématiques

    if (count($clusters) == 1) {
        $clusters = $clusters[0];
        $linkstarString = 'Ce fil thématique atteint le maximum de sa popularité (' . $imagestar . ') sur la
période ' . get_short_string_periode(arrange_periode($ligne['periodWithMaxScore'])) . '
avec le champ ' . '<a href="' . $clusters[attribut] . '"><font color=blue>' .
                str_replace('---', '/', remove_popo($clusters[label])) . '</font></a>';
    } else {
        $cluster_Link_html = '<ul>';
        for ($i = 0; $i < count($clusters); $i++) {
            $cluster_Link_html.='<li><a href="' . $clusters[$i][attribut] . '"><font color=blue>' . str_replace('---', '/', remove_popo($clusters[$i][label])) . '</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
        $linkstarString = 'Ce fil thématique atteint le maximum de sa popularité (' . $imagestar . ') sur la
période ' . get_short_string_periode(arrange_periode($ligne['periodWithMaxScore'])) . '
avec les champs suivants :<br/>' . $cluster_Link_html;
    }
    return $linkstarString;
}

function FTInfo($jscriptmp, $id_partition, $color_link) {
    // donnes les informations sur un fil thématique
    $query = "select * FROM partitions WHERE id_partition=" . $id_partition;
    $resultat = mysql_query($query) or die("<b>Requête non exécutée (récupération de info de partition)</b>.");
    $partition_infos = mysql_fetch_array($resultat);
// global $imagestar;
    $imagestar = imagestar($id_partition);
    $linkstarString = linkstarString($partition_infos[id_partition], $imagestar);
// Construit le popup d'info d'un champs thématique

    $last_period_clusters = getPartitionLastPeriodClusters($id_partition);
    $first_period_clusters= getPartitionFirstPeriodClusters($id_partition);
  
//// préparation des liens de fils thématiques
    $jscriptmp.="
$('#dialogfilThematique" . $id_partition . "')
.dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
.click(function () { $('#dialogfilThematique" . $id_partition . "').dialog('close'); });

$('#openerfilThematique" . $id_partition . "').click(function(e) {
if (!$('#dialogfilThematique" . $id_partition . "').dialog('isOpen'))
$('#dialogfilThematique" . $id_partition . "').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
else
$('#dialogfilThematique" . $id_partition . "').dialog('close');
return false;
});";
    
  
    $cluster_Link_html="Ce fil thématique commence le ".get_date("2009-12-31", $partition_infos[first_period]-2*getValue(time_step))." avec le champ ".
            '<a href="' . $first_period_clusters[0][attribut] . '">
<font color=blue>' . str_replace('---', '/', remove_popo($first_period_clusters[0][label])) . '</font></a>. '; 

    if (strcmp($last_period_clusters[0][periode], $partition_infos[periodWithMaxScore]) == 0) {
        if (count($last_period_clusters) > 1) {
            $cluster_Link_html.=' Il atteint le maximum de sa popularité sur sa période la plus récente (' . get_string_periode(str_replace(' ', '-', $last_period_clusters[0][periode])) . ') avec les champs suivants :<ul>';
            for ($i = 0; $i < count($last_period_clusters); $i++) {
                $cluster_Link_html.='<li><a href="' . $last_period_clusters[$i][attribut] . '">
<font color=blue>' . str_replace('---', '/', remove_popo($last_period_clusters[$i][label])) . '</font></a></li>';
            }
            $cluster_Link_html.='</ul>';
        } else {
            $cluster_Link_html.='Il atteint le maximum de sa popularité sur sa période la plus récente avec le champ ' .
                    '<a href="' . $last_period_clusters[0][attribut] . '">
<font color=blue>' . str_replace('---', '/', remove_popo($last_period_clusters[0][label])) . '</font></a> (période ' . get_string_periode(str_replace(' ', '-', $last_period_clusters[0][periode])) . ')';
        }
    } else {
        $cluster_Link_html.= '<p>' . $linkstarString . '</p>';
        if (count($last_period_clusters) > 1) {
            $cluster_Link_html.='Ce fil thématique comporte plusieurs champs en dernière période (' . get_string_periode(str_replace(' ', '-', $last_period_clusters[0][periode])) . ') :<ul>';
            for ($i = 0; $i < count($last_period_clusters); $i++) {
                $cluster_Link_html.='<li><a href="' . $last_period_clusters[$i][attribut] . '">
<font color=blue>' . str_replace('---', '/', remove_popo($last_period_clusters[$i][label])) . '</font></a></li>';
            }
            $cluster_Link_html.='</ul>';
        } else {
            $cluster_Link_html.='Le champ le plus récent de ce fil thématique est ' .
                    '<a href="' . $last_period_clusters[0][attribut] . '">
<font color=blue>' . str_replace('---', '/', remove_popo($last_period_clusters[0][label])) . '</font></a> (période ' . get_string_periode(str_replace(' ', '-', $last_period_clusters[0][periode])) . ')';
        }
    }

    $fils_thematique_html = '<a href scr=# id="openerfilThematique' . $id_partition . '">
<font color=' . $color_link . '>' . substr(remove_popo($partition_infos[label]), 0, -1) . '</font></a>';


    echo '<span id="dialogfilThematique' . $id_partition . '" style="display:none;" title="' .
    str_replace('lpopostrophe ', "l'", $partition_infos[label]) . '">';
    echo '<p>' . $cluster_Link_html . '</p>';
    echo '<br/><b>Caractéristiques de ce fil thématique :</b>';
    echo '<ul>
<li type=circle>Couverture : du <span style="font-size: small;" >' . get_date("2009-12-31", $partition_infos[first_period]) . '</span> au <span style="font-size: small;" >' . get_date("2009-12-31", $partition_infos[last_period]) . '</span>' .
    '<li type=circle>' . $partition_infos['nb_period_covered'] . ' périodes couvertes,' .
    '<li type=circle>' . $partition_infos['nb_fields'] . ' champs thématiques au total, ' .
    '<li type=circle>' . $partition_infos['nb_terms'] . ' termes employés.' .
    '</ul>';
    echo '</span>';
    return array($jscriptmp, $fils_thematique_html);
}

function link2clusters($jscriptmp, $id_partition, $partition_infos, $period) {
// génère des petits carrés pour faire un lien vers les
//autres clusters de la même période sur le fil thématique
    global $jscriptmp;
    $clusters = getClutersFromThisPeriod($id_partition, $period);
    $nbcluster = '';
    for ($i = 0; $i < count($clusters); $i++) {
        $nbcluster.='<img src="images/cluster.gif" border="0" >';
    }

//// préparation des liens vers les clusters de la même période et du même fil thématique
    $jscriptmp.="
$('#dialoglinkCluster" . $id_partition . "')
.dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
.click(function () { $('#dialoglinkCluster" . $id_partition . "').dialog('close'); });

$('#openerlinkCluster" . $id_partition . "').click(function(e) {
if (!$('#dialoglinkCluster" . $id_partition . "').dialog('isOpen'))
$('#dialoglinkCluster" . $id_partition . "').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
else
$('#dialoglinkCluster" . $id_partition . "').dialog('close');
return false;
});";
    if (count($clusters) == 1) {
        $clusters = $clusters[0];
        $linkcluster = '';
    } else {
        $cluster_Link_html = '<ul>';
        for ($i = 0; $i < count($clusters); $i++) {
            $cluster_Link_html.='<li><a href="' . $clusters[$i][attribut] . '"><font color=blue>' . str_replace('---', '/', remove_popo($clusters[$i][label])) . '</font></a></li>';
        }
        $cluster_Link_html.='</ul>';
        $linkcluster = '<a href scr=# id="openerlinkCluster' . $id_partition . '">' . $nbcluster . '</a>';
    }
    echo '<span id="dialoglinkCluster' . $id_partition . '" style="display:none;" title="Période du ' . get_short_string_periode(arrange_periode($period)) . '">';
    echo 'Autres clusters pour ce fil thématique : ' . $cluster_Link_html;
    echo '</span>';
    return array($jscriptmp, $linkcluster);
}

function getPartitionLastPeriodClusters($id_partition) {
//renvoie un array contenant les infos des clusters de la dernière période de la
//partition concernée
// Infos de la partitions concernée
    $sql = "SELECT * FROM partitions WHERE id_partition=" . $id_partition;
    $partQuery = mysql_query($sql);
    while ($part = mysql_fetch_array($partQuery)) {
        $partition_infos = $part;
    }
// Récupère tous les clusters de la dernière période
    return getClutersFromThisPeriod($partition_infos['id_partition'], $partition_infos[last_period_string]);
}

function getPartitionFirstPeriodClusters($id_partition) {
//renvoie un array contenant les infos des clusters de la dernière période de la
//partition concernée
// Infos de la partitions concernée
    $sql = "SELECT * FROM partitions WHERE id_partition=" . $id_partition;
    $partQuery = mysql_query($sql);
    while ($part = mysql_fetch_array($partQuery)) {
        $partition_infos = $part;
    }
    $first_day=$partition_infos[first_period]- getValue('dT') ;
    
// Récupère tous les clusters de la dernière période
    $first_period_string = $first_day . ' ' . ($first_day + getValue('dT')); 
    return getClutersFromThisPeriod($partition_infos['id_partition'], $first_period_string);
}

function getClutersFromThisPeriod($id_partition, $period) {
// Récupère tous les clusters de la période
    $clusters = array();
    $sql = "SELECT * FROM cluster WHERE periode='" . $period . "' AND pseudo=" . $id_partition . " GROUP BY id_cluster"; 
    $resultat = mysql_query($sql) or die("Champ thématique de la dernière période non récupérés");
    while ($partit = mysql_fetch_array($resultat)) {
        array_push($clusters, $partit);
    }
    return $clusters;
}

/////////////////////////////////
//////// veilles fonctions //////
/////////////////////////////////
function label_label_group($target_labels, $depth) {
// calcul les Ngrammes les plus fréquent d'un ensemble de labels formés de Ngrammes
//echo 'entering label_label_group<br/>';
//echo '$target_labels : <br/>';
// echo '<br/>';
    $ngram_array = array();
//echo 'nb labels:'.count($target_labels);
    if (count($target_labels) > 1) {
        while (count($target_labels) > 0) {
            $ngrams = explode(',', array_pop($target_labels));
// echo 'Incorporating<br/>';
// print_r($ngrams);
// echo '<br/>';
            while (count($ngrams) > 0) {
                $ngram = array_pop($ngrams);
                //echo 'added:'.$ngram.'<br/>';
                if ($ngram_array[trim($ngram)] == null) {
                    $ngram_array[trim($ngram)] = 1;
                } else {
// echo 'incrementing: '.trim($ngram).'<br/>';
                    $ngram_array[trim($ngram)] = $ngram_array[trim($ngram)] + 1;
                }
            }
// echo '$ngram_array : <br/>';
// print_r($ngram_array);
// echo '<br/>';
        }

//echo 'Several Targets; ngram array<br/>';
//print_r($ngram_array);
//echo '<br/>';
//echo 'label<br/>';
//print_r(get_keys_with_highest_values($ngram_array,$depth));
//echo '<br/>';

        return get_keys_with_highest_values($ngram_array, $depth);
    } else {
        $ngrams = explode(',', array_pop($target_labels));
        while (count($ngrams) > 0) {
            $ng = array_pop($ngrams);
            if ($ng != null) {
                $result[$ng] = 1;
            }
        }
// echo 'legend:'.'<br/';
// print_r($result);
// echo '<br/';
        return $result;
    }
}

function group_list($branch_list, $depth, $min_similarity) {
    $min_similarity = 2;
    $depth = 2;
// $branch_list est un array de labels composés de ngrammes séparés par des virgules
/// retour un array contenant
// ['grouped_indexes']: un array de groupes d'indices mentionnant les labels similaires
// ['Ngram_arrays']: un array contenant pour chaque groupe d'indices, un array pour labelliser le groupe dont les clés sont des NGram pris jusqu'à une profondeur $depth et les valeurs leur nombre d'occurrences dans les labels
// calcul des similarités entre labels de branches
    $label_rows_groups = array();
    $label_groups = array();
    $nb_labels_treated = 0;
    $label_rows_remaining_to_process = array(); // index des labels non encore catégorisés
// initialisation de ce tableau
    for ($i = 0; $i < count($branch_list); $i++) {
        array_push($label_rows_remaining_to_process, $i);
    };


    while (count($label_rows_remaining_to_process) > 0) {
        $target_row = array_pop($label_rows_remaining_to_process);
        $target_label_raw = array(); // liste des rangs groupés avec target_row
        $target_labels = array(); // liste des labels des rangs associés
        array_push($target_labels, $branch_list[$target_row][label]);
        array_push($target_label_raw, $target_row);

        $label_rows_remaining_to_process_second_pass = $label_rows_remaining_to_process;
        while (count($label_rows_remaining_to_process_second_pass) > 0) {
            $candidate_row = array_pop($label_rows_remaining_to_process_second_pass);
            $candidate_label = remove_popo($branch_list[$candidate_row][label]);
            $exit_here = 0;
            $j = 0;
            while (($j < count($target_labels)) && (exit_here == 0)) {
                $p = similarity($candidate_label, remove_popo($target_labels[$j]));
// echo 'candidate labels'.$candidate_label.'<br/>';
// echo 'target labels'.$target_labels[$j].'<br/>';
// echo $p.'<br/>';
                //similar_text ( $candidate_label,$target_labels[$j],$p );
                if ($p > $min_similarity) {
                    $exit_here = 1;
// echo 'similarity: '.$p.'<br/>';
// echo 'candidate labels '.$candidate_label.'<br/>';
// echo 'target labels' .$target_labels[$j].'<br/><br/> ';
                };
                $j++;
            };

            if ($exit_here == 1) {
                //echo $branch_list[$candidate_row][label].'<br/>';
                array_push($target_labels, $branch_list[$candidate_row][label]);
                array_push($target_label_raw, $candidate_row);
                $label_rows_remaining_to_process = array_diff($label_rows_remaining_to_process, $target_label_raw);



                array_push($target_branches, $candidate_branch);
                array_push($target_label_raw, $candidate_row);
            }
        }
        array_push($label_rows_groups, $target_label_raw);

        /////////////////
        // on reconstruit l'array des labels_id de branche
        $target_branches_label_ids = array();
        for ($i = 0; $i < count($target_labels); $i++) {
            array_push($target_branches_label_ids, $target_labels[$i]['label_ids']);
        }
        if (count($target_branches_label_ids) > 3) {
            array_push($label_groups, groups_labels($target_branches_label_ids, 4, $target_label_raw, $branch_list));
        } else {
            array_push($label_groups, groups_labels($target_branches_label_ids, $depth, $target_label_raw, $branch_list));
        }
        /////////////////


        array_push($label_groups, label_label_group($target_labels, $depth));
        $resultat = array();
    }


/// on réordonne par nombre de sujets groupés
    $groups_sizes = array();
    for ($i = 0; $i < count($label_rows_groups); $i++) {
        array_push($groups_sizes, count($label_rows_groups[$i]));
    }

    uasort($groups_sizes, 'compare');
    $new_order = array_keys($groups_sizes);

//
    $label_rows_groups_temp = array();
    for ($i = 0; $i < count($label_rows_groups); $i++) {
        array_push($label_rows_groups_temp, $label_rows_groups[$new_order[$i]]);
    }
    $label_rows_groups = $label_rows_groups_temp;
//
    $label_groups_temp = array();
    for ($i = 0; $i < count($label_groups); $i++) {
        array_push($label_groups_temp, $label_groups[$new_order[$i]]);
    }
    $label_groups = $label_groups_temp;
//
    $resultat['grouped_indexes'] = $label_rows_groups;
    $resultat['Ngram_arrays'] = $label_groups;
    return $resultat;
}

////////////////////////////////
///////Calcul des streamgraphs /////////
////////////////////////////////


function query2streamgraphData($query, $first_period, $last_period, $dT, $time_steps) {
// transforme un ensemble de données de partition d'une requête sur la table partition en un streamgraph par partition

    $resultat = mysql_query($query) or die("<b>Requête non exécutée (récupération des principales thématiques)</b>.");

    $year_String = 'var years = [';
    for ($i = $first_period-2*$time_steps; $i <= $last_period; $i+=$time_steps) {
        $year_String.=$i . ', ';
    }
    $year_String = substr($year_String, 0, -2) . '];';
// ajout des var pour chaque branche
    $streamgraphString = $year_String . 'var dynamics= {';

    while ($partition_resultat = mysql_fetch_array($resultat)) {
        //infos sur la partition
        $id_partition = $partition_resultat[id_partition];
        $partition_label = $partition_resultat[label];
        if (strcmp(substr($partition_label, -1), ',') == 0) {
            $lab = substr($partition_label, 0, -1);
        }
        $streamgraphString.='"' . remove_popo(substr($partition_label, 0, -1)) . '":' . partition2JSON($id_partition, $first_period, $last_period, $dT, $time_steps);
    }
    $streamgraphString = substr($streamgraphString, 0, -1) . '};';
//pt($streamgraphString);
    return $streamgraphString;
}

function id_partition2streamgraphData($id_partition, $level, $current_category, $first_period, $last_period, $dT, $time_steps) {
// calcul le JSon du streamgraph d'une partition en catégorisant les blogs suivant 
// la catégorisation Linkfluence de niveau $level $categoryType 
// si $current_category est précisé prend alors toutes les sous catégories de $current_category i.e. politique  
// sinon mettre $current_category='';    

    if ($current_category == '') {
        $categoryType = "categorie" . $level;
    } else {
        $categoryType = "categorie" . ($level + 1);
    }
    if ($current_category == '') {// on prend toutes les catégories du niveau cible
        $category_list = split(",", getValue($categoryType));
    } else {// on crée un tableau avec toutes les sous catégories de la catégorie parente $current_category
        $category_list = array();
        $query = "select " . $categoryType . " FROM `billets`  WHERE categorie" . $level . "='" . $current_category . "' GROUP BY " . $categoryType;
        $resultat = mysql_query($query) or die("<b>Requête non exécutée (récupération des principales thématiques)</b>");
        $categ = "";
        while ($ligne = mysql_fetch_array($resultat)) {
            $category_list[] = $ligne[$categoryType];
        }
    }

// on consulte les infos de la macrobranche concernée    
    $query = "select * FROM partitions WHERE id_partition=" . $id_partition;
    $resultat = mysql_query($query) or die("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
    $partition_resultat = mysql_fetch_array($resultat);

// on génère la liste des années
    $year_String = 'var years = [';
    for ($i = $first_period-2*$time_steps; $i <= $last_period; $i+=$time_steps) {
        $year_String.=$i . ', ';
    }
    
    $year_String = substr($year_String, 0, -2) . '];';
 
// ajout des var pour chaque branche
    $streamgraphString = $year_String . 'var dynamics= {';

// on adjoint les données pour toutes les catégories ou sous catégories
    while (count($category_list) > 0) {
        $category = trim(array_pop($category_list));
        //infos sur la partition
        $streamgraphString.='"' . $category . '":' . partition2JSON($id_partition, $first_period, $last_period, $dT, $time_steps, $categoryType, $category);
    }
    $streamgraphString = substr($streamgraphString, 0, -1) . '};';
//pt($streamgraphString);
    return $streamgraphString;
}

/////////////////////////////////////////////

function partition2JSON($id_partition, $first_period, $last_period, $dT, $time_steps, $categoryType='none', $category='none') {
// transforme un ensemble de champs d'une partition en un JSon pour streagraph
// { activity: [ value1, ..., valueN]}
// lorsque que category et level sont précisés, on restreint à certaines sous catégories
// $categoryType est une des catégories linkfluence (categorie1, ..., categorie2) 
// et category est le nom de la catégorie cible ex: 'politique'
    $partitionScore = 0;
    $periodWithMaxScore = 0;
    $JSON_string = "{ activity: [";

// pour chaque période, pour chaque champ, on considère l'ensemble des auteurs associé à un
// champ. On fait alors la somme, pour tous les auteurs dont au moins un billet dépasse le seuil
// de pertinence, des scores des billets les plus pertinents pour chaque auteur. Cela donne
// l'épaisseur du fil thématique, proportionnelle au nombre d'acteurs concernés et à leur proximité sémantique
    $seuil_pertinence = 0.3; //overlap_size/cluster_size/log10(10+billet_size-overlap_size)
    $penetration_thematique = 0.4; //overlap_size/cluster_size

    for ($i = $first_period; $i <= $last_period; $i+=$time_steps) {

        $period_string = ($i - $dT) . ' ' . $i;

        //echo $period_string.'<br/>';
        $sql = "SELECT id_cluster,periode FROM cluster WHERE pseudo='" . $id_partition . "' AND periode='" . $period_string . "' GROUP BY id_cluster";
        $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des clusters d'une période pour une partition)</b>.");

        $count = 0;
        $period_score = 0;   // score de la période
        $auteur_score = array(); // liste des score max des auteurs qui s'expriment sur ce fil thématique à cette période

        while ($ligne = mysql_fetch_array($resultat)) {
            $commande_sql_pert = "SELECT id_billet,id_auteur,overlap_size,billet_size,cluster_size from biparti where cluster = '" . $ligne[id_cluster] . "' AND periode = '" . $ligne[periode] . "' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=" . $seuil_pertinence . " and overlap_size/cluster_size>" . $penetration_thematique;

            $billet_list = mysql_query($commande_sql_pert) or die("<b>Requête non exécutée (récupération des billets associés à un cluster)</b>.");

            while ($billet = mysql_fetch_array($billet_list)) {
                if ($category != 'none') {
                    // on récupère la catégorie du billet pour voir si c'est la bonne
                    $sql_billet = "SELECT " . $categoryType . " FROM billets WHERE id=" . $billet[id_billet];
                    $resultat = mysql_query($sql_billet) or die("<b>Requête non exécutée (récupération des billets)</b>.");
                    while ($ligne = mysql_fetch_array($resultat)) {
                        //pt($ligne[$categoryType]);
                        $category_ok = (trim($ligne[$categoryType]) == trim($category));
                    }
                }
                //pt($ligne[$categoryType]." - ".$category);                                

                if (($category == 'none') || $category_ok) {

                    $score = $billet[overlap_size] / $billet[cluster_size] / log10(10 + $billet[billet_size] - $billet[overlap_size]);
                    //echo $billet[id_auteur].'<br/>';
                    if ($auteur_score[$billet[id_auteur]] != null) {
                        if ($score > $auteur_score[$billet[id_auteur]]) {
                            $auteur_score[$billet[id_auteur]] = $score;
                        }
                    } else {
                        $auteur_score[$billet[id_auteur]] = $score;
                        $count++;
                    }
                }
            }
        }
        $period_score+=array_sum($auteur_score) / 10;

        //echo $count.' billets<br/>';
        //echo ' ------------------------<br/>';
        $JSON_string.=round($period_score, 4) . ', ';
        
        if (($i == $first_period)|($i == $last_period)){
        $JSON_string.=round($period_score, 4) . ', ';    
        }
            
        
        if ($partitionScore < $period_score) {
            $partitionScore = $period_score;
            $periodWithMaxScore = $period_string;
        }
    }
    $JSON_string = substr($JSON_string, 0, -2);
    $JSON_string.='] },';
    if ($category == 'none') { // pour le streamgraph des partitions, on stocke en base le score max pour les ratings
        $sqlScore = "INSERT INTO partitions (id_partition,score,periodWithMaxScore) VALUES ('" . $id_partition . "','" . $partitionScore . "','" . $periodWithMaxScore . "') ON DUPLICATE KEY UPDATE id_partition='" . $id_partition . "',
    score='" . $partitionScore . "', periodWithMaxScore='" . $periodWithMaxScore . "'";
        echo $sqlScore;
        mysql_query($sqlScore) or die("<b>Insert of total_number_of_cluster failed</b>.");
        ;
    }
//pt('$JSON_string='.$JSON_string);
    return $JSON_string;
}

function batchPartitionScore($query, $first_period, $last_period, $dT, $time_steps) {
// calcul les scores pour un ensemble de données de partition d'une requête sur la table partition
    echo 'calul des score sur petites branches<br/>';
    echo $query . '<br/>';
    $resultat = mysql_query($query) or die("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
    while ($partition_resultat = mysql_fetch_array($resultat)) {
        //infos sur la partition
        $id_partition = $partition_resultat[id_partition];
        $partition_label = $partition_resultat[label];
        partitionScore($id_partition, $first_period, $last_period, $dT, $time_steps);
    }
}

////////////////
function partitionScore($id_partition, $first_period, $last_period, $dT, $time_steps) {
// calcul le score d'une partition
    $partitionScore = 0;
    $periodWithMaxScore = 0;
    echo 'id part ' . $id_partition . '<br/>';

// pour chaque période, pour chaque champ, on considère l'ensemble des auteurs associé à un
// champ. On fait alors la somme, pour tous les auteurs dont au moins un billet dépasse le seuil
// de pertinence, des scores des billets les plus pertinents pour chaque auteur. Cela donne
// l'épaisseur du fil thématique, proportionnelle au nombre d'acteurs concernés et à leur proximité sémantique
    $seuil_pertinence = 0.3; //overlap_size/cluster_size/log10(10+billet_size-overlap_size)
    $penetration_thematique = 0.4; //overlap_size/cluster_size
// Pour chaque période
    for ($i = $first_period; $i <= $last_period; $i+=$time_steps) {
        $period_string = ($i - $dT) . ' ' . $i;
        $period_score = 0;

        // On récupère tous les clusters de la partition sur la période concerné
        $sql = "SELECT id_cluster,periode FROM cluster WHERE pseudo=$id_partition AND periode='" . $period_string . "' GROUP BY id_cluster";
        $resultat = mysql_query($sql) or die("<b>Requête non exécutée (récupération des clusters d'une période pour une partition)</b>.");
        $count = 0;
        while ($ligne = mysql_fetch_array($resultat)) {
            // pour chaque cluster, on calcul sa pertinence
            // on récupère l'ensemble des billets et des auteurs associés
            $commande_sql_pert = "SELECT id_billet,id_auteur,overlap_size,billet_size,cluster_size from biparti where cluster = '" . $ligne[id_cluster] . "' AND periode = '" . $ligne[periode] . "' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=" . $seuil_pertinence . " and overlap_size/cluster_size>" . $penetration_thematique;
            $billet_list = mysql_query($commande_sql_pert) or die("<b>Requête non exécutée (récupération des billets associés à un cluster)</b>.");
            $auteur_score = array(); //
            while ($billet = mysql_fetch_array($billet_list)) {
                // pour chaque billet on calcul son score
                $score = $billet[overlap_size] / $billet[cluster_size] / log10(10 + $billet[billet_size] - $billet[overlap_size]);
                // on assigne à l'auteur le score du billet si c'est son score max
                if ($auteur_score[$billet[id_auteur]] != null) {
                    if ($score > $auteur_score[$billet[id_auteur]]) {
                        $auteur_score[$billet[id_auteur]] = $score;
                    }
                } else {
                    $auteur_score[$billet[id_auteur]] = $score;
                    $count++;
                }
            }
            $period_score+=array_sum($auteur_score) / 10;
        }
        //echo $count.' billets<br/>';
        //echo ' ------------------------<br/>';
        $JSON_string.=round($period_score, 4) . ', ';
        if ($partitionScore < $period_score) {
            $partitionScore = $period_score;
            $periodWithMaxScore = $period_string;
        }
    }
    echo 'partition ' . $id_partition . 'with score' . $partitionScore . 'at ' . $periodWithMaxScore . '<br/>';
    //echo ' ------------------------<br/>';

    $sqlScore = "INSERT INTO partitions (id_partition,score,periodWithMaxScore) VALUES ('" . $id_partition . "','" . $partitionScore . "','" . $periodWithMaxScore . "') ON DUPLICATE KEY UPDATE id_partition='" . $id_partition . "',
score='" . $partitionScore . "', periodWithMaxScore='" . $periodWithMaxScore . "'";
    echo $sqlScore;
    mysql_query($sqlScore) or die("<b>Insert of total_number_of_cluster failed</b>.");
    ;
}

?>