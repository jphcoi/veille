<?
include("../login_check.php");
include("fonctions_php.php");
include("../parametre.php");
include("../parametres/parametresPhylo.php");

//connexion a la base de donnees
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


$gexfPath=substr($hrefrootroot,1,strrpos($hrefrootroot,'/')).'/tinaweb';
echo 'Gexf exporté dans:'.$gexfPath;
echo '</br>';
$gexfFileName='current.gexf';


echo 'opening'.$gexfFileName;
$gexfFile = fopen('../tinaweb/' .$gexfFileName,'w');


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

// on sélectionne tous les clusters appartenant aux partitions sélectionnées
$query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered;
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
$fieldsList=array();// list des champs de la partition
$termsList=array();// liste des termes présents dans les champs avec leurs cooc avec les autres termes
while ($ligne=mysql_fetch_array($resultat)) {
    $sql="select * FROM cluster WHERE pseudo=".$ligne[id_partition]." GROUP BY id_cluster_univ";
    $clusterQuery=mysql_query($sql) or die ("<b>Requête non exécutée (récupération de clusters d'une partition)</b>.");
    while ($clusterLigne=mysql_fetch_array($clusterQuery)) {
        $clusterAttributes=array();
        $clusterAttributes[id_partition]=$clusterLigne[pseudo];
        $clusterAttributes[id]=$clusterLigne[id_cluster];
        $clusterAttributes[label_1]=$clusterLigne[label_1];
        $clusterAttributes[label_2]=$clusterLigne[label_2];
        $clusterAttributes[label_2]=$clusterLigne[label_2];
        $clusterAttributes[periode]=$clusterLigne[periode];
        $clusterAttributes[id_cluster_univ]=$clusterLigne[id_cluster_univ];

        $fieldsList[]=$clusterAttributes;
        $terms_sql="select concept FROM cluster WHERE id_cluster_univ=".$clusterLigne[id_cluster_univ];
        //echo $terms_sql.'<br/>';
        $termQuery=mysql_query($terms_sql) or die ("<b>Requête non exécutée (récupération de clusters d'une partition)</b>.");
        $clusterTerms=array();
        while ($clusterLigne=mysql_fetch_array($termQuery)) {
            $clusterTerms[]=$clusterLigne[concept];
        }

        // on calcul au passage les occurrences et co-occurrences des termes dans les clusters sélectionnés
        for ($k=0;$k<count($clusterTerms);$k++){
           if ($termsList[$clusterTerms[$k]]!=null) {
                $termsList[$clusterTerms[$k]][occ]=$termsList[$clusterTerms[$k]][occ]+1;
                for($l=0;$l<count($clusterTerms);$l++){
                    if ($termsList[$clusterTerms[$k]][cooc][$clusterTerms[$l]]!=null) {
                        $termsList[$clusterTerms[$k]][cooc][$clusterTerms[$l]]+=1;
                    }else{
                        $termsList[$clusterTerms[$k]][cooc][$clusterTerms[$l]]=1;
                    }
                }
            }else {
                $termsList[$clusterTerms[$k]][occ]=1;
                for($l=0;$l<count($clusterTerms);$l++){
                    if ($termsList[$clusterTerms[$k]][cooc][$clusterTerms[$l]]!=null) {
                        $termsList[$clusterTerms[$k]][cooc][$clusterTerms[$l]]+=1;
                    }else{
                        $termsList[$clusterTerms[$k]][cooc][$clusterTerms[$l]]=1;
                    }
                }
            }
            //print_r($termsList);
        }
    }
}

//echo 'Liste des champs<br/>';
//print_r($fieldsList);
//echo '<br/>';
echo 'Liste des termes<br/>';
//print_r($termsList);



// Ecriture de l'entête du gexf

fputs($gexfFile,'<?xml version="1.0" encoding="UTF-8"?>');
fputs($gexfFile,'<gexf xmlns="http://www.gexf.net/1.1draft" xmlns:viz="http://www.gephi.org/gexf/viz" version="1.1"> ');
fputs($gexfFile, ' <meta lastmodifieddate="'.date('Y-m-d').'"> "\n"');
fputs($gexfFile,' </meta> "\n"');
fputs($gexfFile,'<graph type="static">'."\n");
fputs($gexfFile,'<attributes class="node" type="static">'."\n");
fputs($gexfFile,' <attribute id="0" title="category" type="string">  </attribute>'."\n");
fputs($gexfFile,' <attribute id="1" title="occurrences" type="float">    </attribute>'."\n");
fputs($gexfFile,' <attribute id="2" title="content" type="string">    </attribute>'."\n");
fputs($gexfFile,' <attribute id="3" title="keywords" type="string">   </attribute>'."\n");
fputs($gexfFile,' <attribute id="4" title="weight" type="float">   </attribute>'."\n");
fputs($gexfFile,'</attributes>'."\n");
fputs($gexfFile,'<attributes class="edge" type="float">'."\n");
fputs($gexfFile,' <attribute id="5" title="cooc" type="float"> </attribute>'."\n");
fputs($gexfFile,' <attribute id="6" title="type" type="string"> </attribute>'."\n");
fputs($gexfFile,"</attributes>"."\n");
fputs($gexfFile,"<nodes>"."\n");

// liste des champs
for ($i=0;$i<count($fieldsList);$i++) {
    $nodeId=$fieldsList[$i][id_cluster];
    $nodeLabel=remove_popo(labelId2Label($fieldsList[$i][label_1])).'/'.remove_popo(labelId2Label($fieldsList[$i][label_2]));
    $nodeId='D::'.str_replace(" ", "#", $fieldsList[$i][periode]).'_'.$fieldsList[$i][id];
    $periods=explode(' ',$fieldsList[$i][periode]);
    $nodePositionY=$periods[1];
    $partition=$fieldsList[$i][id_partition];
    fputs($gexfFile,'<node id="'.$nodeId.'" label="'.$nodeLabel.'">'."\n");
    fputs($gexfFile,'<viz:color b="255" g="0"  r="0"/>'."\n");
    fputs($gexfFile,'<viz:position x="'.(10*$partition).'"    y="'.$nodePositionY.'"  z="0" />'."\n");
    fputs($gexfFile,'<attvalues> <attvalue for="0" value="Document"/>'."\n");
    fputs($gexfFile,'<attvalue for="1" value="10"/>'."\n");
    fputs($gexfFile,'<attvalue for="4" value="10"/>'."\n");
    fputs($gexfFile,'</attvalues></node>'."\n");
}

// liste des termes
$conceptIds=array_keys($termsList);
for ($j=0;$j<count($conceptIds);$j++) {
    $nodeId=$conceptIds[$j];
    $nodesInfo=mysql_query("SELECT * FROM concepts WHERE id=".$nodeId);
    while ($ligne=mysql_fetch_array($nodesInfo)) {
        $nodeLabel=$ligne[forme_principale];
    }

    fputs($gexfFile,'<node id="N::'.$nodeId.'" label="'.remove_popo($nodeLabel).'">'."\n");
    fputs($gexfFile,'<viz:color b="0" g="0"  r="255"/>'."\n");
    fputs($gexfFile,'<viz:position x="'.rand(0,3).'"    y="'.rand(0,3).'"  z="0" />'."\n");
    fputs($gexfFile,'<attvalues> <attvalue for="0" value="NGram"/>'."\n");
    fputs($gexfFile,'<attvalue for="1" value="'.$termsList[$nodeId][occ].'"/>'."\n");
    fputs($gexfFile,'<attvalue for="4" value="'.$termsList[$nodeId][occ].'"/>'."\n");
    fputs($gexfFile,'</attvalues></node>'."\n");
}

fputs($gexfFile,'</nodes><edges>'."\n");

$edgeid=1;
// ecriture des liens de filiation
for ($i=0;$i<count($fieldsList);$i++) {
    $nodeId1='D::'.str_replace(" ", "#", $fieldsList[$i][periode]).'_'.$fieldsList[$i][id];
    echo $nodeId1.'<br/>';
    // récupération des fils
    $sql='SELECT id_cluster_2_univ,strength FROM phylo WHERE id_cluster_1_univ='.$fieldsList[$i][id_cluster_univ];
    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des fils)</b>.");
    while ($ligne=mysql_fetch_array($resultat)) {
        $id_cluster_2_univ=$ligne[id_cluster_2_univ];
        $sql_cluster="select * FROM cluster WHERE id_cluster_univ=".$id_cluster_2_univ." GROUP BY id_cluster_univ";
        $clusterQuery=mysql_query($sql_cluster) or die ("<b>Requête non exécutée (récupération de clusters d'une partition)</b>.");
        while ($clusterLigne=mysql_fetch_array($clusterQuery)) {
            $nodeId2='D::'.str_replace(" ", "#", $clusterLigne[periode]).'_'.$clusterLigne[id_cluster];

             fputs($gexfFile,'<edge id="'.$edgeid.'"'.' source="'.$nodeId1.'" '.
                     ' target="'.$nodeId2.'" weight="'.$ligne[strength].'">'."\n");
             fputs($gexfFile,'<attvalues> <attvalue for="5" value="'.$ligne[strength].
                     '"/><attvalue for="6" value="node1"/></attvalues>'."\n".'</edge>'."\n");
             $edgeid+=1;
        }
    }
}

// ecriture des liens bipartite
echo 'Fields list'.count($fieldsList).'<br/>';
for ($i=0;$i<count($fieldsList);$i++) {
    $nodeId1='D::'.str_replace(" ", "#", $fieldsList[$i][periode]).'_'.$fieldsList[$i][id];
    echo 'bipart'.$nodeId1.'<br/>';
    // récupération des concepts
    $sql='SELECT concept FROM cluster WHERE id_cluster='.$fieldsList[$i][id].' AND periode="'.$fieldsList[$i][periode].'"';
    echo $sql;
    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des bipart)</b>.");
    while ($ligne=mysql_fetch_array($resultat)) {
        $id_concept=$ligne[concept];
        fputs($gexfFile,'<edge id="'.$edgeid.'"'.' source="'.$nodeId1.'" '.
                ' target="N::'.$id_concept.'" weight="1">'."\n");
        fputs($gexfFile,'<attvalues> <attvalue for="5" value="1"'.
                '/><attvalue for="6" value="bipartite"/></attvalues>'."\n".'</edge>'."\n");
        $edgeid+=1;
    }
}

// ecriture des liens semantiques
$terms=array_keys($termsList);
//print_r($terms);
for ($i=0;$i<count($terms);$i++) {
    $nodeId1=$terms[$i];
    echo 'node2 '.$nodeId1.'<br/>';
    $neighbors=$termsList[$nodeId1][cooc];
    $neighborsIds=array_keys($neighbors);
    for ($j=0;$j<count($neighborsIds);$j++) {
        if ($neighborsIds[$j]!=$nodeId1) {
            fputs($gexfFile,'<edge id="'.$edgeid.'"'.' source="N::'.$nodeId1.'" '.
                    ' target="N::'.$neighborsIds[$j].'" weight="'.$neighbors[$neighborsIds[$j]].'">'."\n");
            fputs($gexfFile,'<attvalues> <attvalue for="5" value="1"'.
                    '/><attvalue for="6" value="nodes2"/></attvalues>'."\n".'</edge>'."\n");
            $edgeid+=1;
        }
    }
}

fputs($gexfFile,'</edges> '."\n");
fputs($gexfFile,'</graph></gexf> '."\n");
 
fclose($gexfFile);

///////// Fonctions locales ///////////
function labelId2Label($labelId){
    echo $labelId;
    $query="select * FROM concepts WHERE id=".$labelId;
    $resultat=mysql_query( $query) or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
    $ligne=mysql_fetch_array($resultat);
    return $ligne[forme_principale];
}


function recup_info($tag_avant,$tag_apres,$ligne)
{
		$noeudidv = explode($tag_avant,$ligne);
		$noeudidv = explode($tag_apres,$noeudidv[1]);
		return $noeudidv[0];
}


////////////////////////////////

?>0