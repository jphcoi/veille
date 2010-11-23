<?
include("../parametre.php");
include("fonctions_php.php");
$my_period='jk';




//$map3d = $hrefroot."/".$dbid."/".$exportid.'/'.$filename;



$fichier="Phylo4d.gexf";
//$adresse_root= $_SERVER['DOCUMENT_ROOT'];
$map3d=$hrefrootroot."data/cartes/".$exportid."/";
$map3d=str_replace('library','',$map3d);
$map3d = $map3d.$fichier;
echo $map3d;
echo '<br>';

$mapgexf= $hrefrootroot."data/cartes/v.1/";
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
			$noeud_id_1 = recup_info(' source="','" target',$ligne);
			$noeud_id_2 = recup_info('target="','" weight',$ligne);
			echo $noeud_id_1;
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
			fputs($fichier_out,$ligne);	
			echo $i;
			//echo $ligne;
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
		}	
} 		

print_r($noeuds);
//echo '<br>';
$noeuds_periode=$noeuds['periode'];

$periodes = array_unique($noeuds_periode);
print_r($periodes);
echo '<br>';

foreach ($periodes as $per )
{
	$carte_per =$mapgexf.$per."_gs.gexf";
	echo '<br>';
	echo '<br>';
	echo  $carte_per;
	echo '<br>';
	$fichier_out = fopen($carte_per,'w');
	$noeuds_per=array();
	for ($i=0;$i<count($noeuds['periode']);$i++)
	{ 
		print_r($node);
		if ($noeuds['periode'][$i]==$per)
		{
			$noeuds_per[]=$noeuds['id'][$i];
		}
	}
	print_r($noeuds_per);

	ecrire_gexf_per($tabfich,$fichier_out,$per,$noeuds_per);
	
}

































?>