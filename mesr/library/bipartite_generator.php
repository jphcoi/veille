<?
include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");

//connexion a la base de donnees
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");


$gexfPath=substr($hrefrootroot,1,strrpos($hrefrootroot,'/')).'data/';
echo 'Gexf exporté dans:'.$gexfPath;
echo '</br>';
$gexfFileName=$mapgexf.'bipartite.gexf';


echo 'opening'.$gexfFileName;
$gexfFile = fopen($gexfFileName,'w');

// Ecriture de l'entête du gexf

fputs($gexfFile,'<?xml version="1.0" encoding="UTF-8"?>');
fputs($gexfFile,'<gexf xmlns="http://www.gexf.net/1.1draft" xmlns:viz="http://www.gephi.org/gexf/viz" version="1.1"> ');
fputs($gexfFile, ' <meta lastmodifieddate="'.date('Y-m-d').'">');
fputs($gexfFile,' </meta> ');
fputs($gexfFile,'<graph type="static">');
fputs($gexfFile,'<attributes class="node" type="static">');
fputs($gexfFile,' <attribute id="0" title="category" type="string">  </attribute>');
fputs($gexfFile,' <attribute id="1" title="occurrences" type="float">    </attribute>');
fputs($gexfFile,' <attribute id="2" title="content" type="string">    </attribute>');
fputs($gexfFile,' <attribute id="3" title="keywords" type="string">   </attribute>');
fputs($gexfFile,' <attribute id="4" title="weight" type="float">   </attribute>');
fputs($gexfFile,'</attributes>');
fputs($gexfFile,'<attributes class="edge" type="float">');
fputs($gexfFile,' <attribute id="0" title="cooc" type="float"> </attribute>');
fputs($gexfFile,' <attribute id="1" title="type" type="string"> </attribute>');
fputs($gexfFile,"</attributes>");
fputs($gexfFile,"<nodes>");

$resultat=mysql_query("select * FROM cluster") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
    $nodeId=$ligne[id_cluster];
    $nodeLabel=labelId2Label($ligne[label_1]).'/'.labelId2Label($ligne[label_2]);
    $nodeId='D::'.str_replace(" ", "#", $ligne[periode]).'_'.$ligne[id_cluster];
    $periods=explode(' ',$ligne[periode]);
    $nodePositionY=$periods[1];
    fputs($gexfFile,'<node id="'.$nodeId.'" label="'.$nodeLabel.'">');
    fputs($gexfFile,'<viz:color b="255" g="0"  r="0"/>');
    fputs($gexfFile,'<viz:position x="0"    y="'.$nodePositionY.'"  z="0" />');
    fputs($gexfFile,'<attvalues> <attvalue for="0" value="Document"/>');
    fputs($gexfFile,'<attvalue for="1" value="10"/>');
    fputs($gexfFile,'<attvalue for="4" value="10"/>');
    fputs($gexfFile,'</attvalues></node>');
}

$resultat=mysql_query("select * FROM concepts") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
    $nodeId=$ligne[id];
    $nodeLabel=$ligne[forme_principale];
    fputs($gexfFile,'<node id="'.$nodeId.'" label="'.$nodeLabel.'">');
    fputs($gexfFile,'<viz:color b="0" g="0"  r="255"/>');
    fputs($gexfFile,'<viz:position x="0"    y="0"  z="0" />');
    fputs($gexfFile,'<attvalues> <attvalue for="0" value="NGram "/>');
    $termsInClusterQuery=mysql_query("select concept FROM cluster WHERE concept=$nodeId") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
    $nbTermsInCluster=0; // le poids d'un terms est le nombre de clusters dans lequel il apparait
    while ($ligne=mysql_fetch_array($termsInClusterQuery)) {
        $nbTermsInCluster++;
    }
    echo $nbTermsInCluster;
    //fputs($gexfFile,'<attvalue for="1" value="'$nbTermsInCluster'"/>');
    //fputs($gexfFile,'<attvalue for="4" value="'$nbTermsInCluster'"/>');
    //fputs($gexfFile,'</attvalues></node>');
}

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

?>