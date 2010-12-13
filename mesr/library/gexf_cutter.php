<?
include("../parametre.php");
include("fonctions_php.php");

$my_period='jk';

//connexion a la base de donnees
mysql_connect($server,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

create_concept_string();

//récupération des périodes
$periode_concepts=array();
$periode_brute=array();
$resultat=mysql_query("select periode FROM cluster GROUP by periode") or die ("<b>Requête non exécutée (récupération des périodes pour les concepts)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
	$per=$ligne['periode'];
	if ($per!=""){ // exception pour éviter un bug de la BDD avec concept 0 à période ""
		if (!in_array($per,$periode_brute)) $periode_brute[]=$per;
	}
}
$list_of_periods=sort_periods($periode_brute);



//$map3d = $hrefroot."/".$dbid."/".$exportid.'/'.$filename;



$fichier="Phylo4d.gexf";
//$adresse_root= $_SERVER['DOCUMENT_ROOT'];
$map3d=$hrefrootroot."data/cartes/".$exportid."/";
$map3d=str_replace('library','',$map3d);
$map3d = $map3d.$fichier;
echo $map3d;
echo '<br>';

$mapgexf= $hrefrootroot."data/cartes/".$exportid."/";
$mapgexf=str_replace('library','',$mapgexf);

echo $mapgexf;


echo '<br>';
$tabfich=file($map3d);
//$fichier_out = fopen($sortie,'w');

$noeuds=array();

function recup_info($tag_avant,$tag_apres,$ligne)
{
		$noeudidv = explode($tag_avant,$ligne);
		$noeudidv = explode($tag_apres,$noeudidv[1]);
		return $noeudidv[0];
}


function ecrire_gexf_per($tabfich,$fichier_out,$per,$noeuds_per)
{
	echo 'on ecrit le reseau maintenant';
	$clause=true;
	
	for( $i = 0 ; $i < count($tabfich) ; $i++ )
	{
		$ligne = $tabfich[$i];
		if(stristr($ligne, '<nodes count="'))
		{
			$ligne = '<nodes count="'.strval(count($noeuds_per)).'">\n';
		}
		if(stristr($ligne, '<node id='))
		{
			$noeud_id = recup_info('<node id="','" label',$ligne);
			if (in_array($noeud_id,$noeuds_per))
			{
				$clause=true;
			}
			else
			{
				$clause=false;
			}
		}
		
		if(stristr($ligne, ' source='))
		{
			$noeud_id_1 = recup_info('source="','" target',$ligne);
			$noeud_id_2 = recup_info('target="','" weight',$ligne);
			if (in_array($noeud_id_1,$noeuds_per) and in_array($noeud_id_2,$noeuds_per))
			{
				$clause=true;
				
			}
			else
			{
				$clause=false;
			}
		}

		if(stristr($ligne, '</nodes')){$clause=true;}
		if(stristr($ligne, '</edges>')){$clause=true;}				
		if ($clause)
		{	$edge_id=recup_info('edge id="','" source',$ligne);
			$ligne = str_replace($edge_id,'',$ligne);
			$ligne = str_replace('id="" ','',$ligne);
			$ligne = str_replace(' --- ',' - ',$ligne);
			$ligne = str_replace('attvalue for=','attvalue id=',$ligne);
			echo $ligne;
			echo $fichier_out;
			fputs($fichier_out,$ligne);	
		}
	}
	
}

for( $i = 0 ; $i < count($tabfich) ; $i++ )
//for( $i = 0 ; $i < 5000 ; $i++ )
{

	$ligne = $tabfich[$i];
	if(stristr($ligne, '<node id='))
		{
			$noeud_id = recup_info('<node id="','" label',$ligne);
			$noeuds['id'][]=$noeud_id;
		}
	if(stristr($ligne, 'value="cluster'))
		{
			$noeud_periode = recup_info('periode=','"/>',$ligne);
			$noeuds['periode'][]=$noeud_periode;
			$noeud_cluster_id = recup_info('id_cluster=','&amp',$ligne);
			$noeuds['cluster_id'][]=$noeud_cluster_id;
		}	
} 		

//print_r($noeuds);
echo '<br>';
$noeuds_periode=$noeuds['periode'];

$periodes = array_unique($noeuds_periode);
print_r($periodes);
echo '<br>';








echo $orphan_filter;

foreach ($periodes as $per )
{
	$clusters_pertinents=array();
	if ($list_of_periods[count($list_of_periods)-1]==$per)
	{$clause_fils_pere = '';}
	else
	{$clause_fils_pere = ' AND nb_sons+nb_fathers>='.$orphan_filter;}
	$quer="select id_cluster FROM cluster WHERE periode ='".derange_periode($per)."'".$clause_fils_pere." GROUP by id_cluster  ORDER by 	id_cluster";
	echo "<br>";
	echo $quer;
	$resultat=mysql_query($quer) or die ("<b>Requête non exécutée</b>.");

	while ($ligne=mysql_fetch_array($resultat)){
	$clusters_pertinents[] = $ligne['id_cluster'];}
	echo '<br> clusters pertinents:<br>';
	print_r($clusters_pertinents);
	echo '<br>';

	$carte_per =$mapgexf.$per."_gs.gexf";
//	echo '<br>';
	echo '<br>';
	echo  $carte_per;
	echo '<br>';
	$fichier_out = fopen($carte_per,'w');
	$noeuds_per=array();
	for ($i=0;$i<count($noeuds['periode']);$i++)
	{ 
		
		if ($noeuds['periode'][$i]==$per)
		{	
			
			$noeuds_propose[] = $noeuds['id'][$i];
			if (in_array($noeuds['cluster_id'][$i],$clusters_pertinents))
			{
				echo 'noeud accepte'.strval($noeuds['id'][$i]);	
				$noeuds_per[]=$noeuds['id'][$i];
			}
		}
	}
	echo '<br>on a conserve les champs:<br>';
	print_r($noeuds_per);
	echo '<br>';
	echo '<br>sur les candidats:<br>';
	print_r($noeuds_propose);
	echo '<br>';
	
	ecrire_gexf_per($tabfich,$fichier_out,$per,$noeuds_per);
}

































?>