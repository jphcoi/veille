<?
	$flip_source=array_flip($liste_auteur_unique);
	//$flip_source[285] renvoie le ré-index (à partir de 0) de la source id #285
	$tmp=array();
	$tmp["nodes"]=array();
	$tmp["links"]=array();
	foreach(array_keys($flip_source) as $i)
	{
		if ($i==$id_source) { $tmpgroup=0; } else {$tmpgroup=1;}
		$tmp["nodes"][]=array("nodeName" => $legende[$i], "group" => $tmpgroup, "ourID" => $i, "pvID"=> $flip_source[$i], "ourDEG" => $aut_occ[$i]);
	}
	
	$tmpvalues=array();
		if (count($liens_from)>0){
		foreach(range(0,count($liens_from)-1) as $i)
		{
			$tmpfrom=$flip_source[$liens_from[$i]];
			$tmpto=$flip_source[$liens_to[$i]];
			$tmpweight = $liens_weight[$i];
			//if ($tmpweight>1)			//filtre à + d'1 occurrences stricte
			{$tmp["links"][]=array("source" => $tmpfrom, "target" => $tmpto, "value" => $tmpweight);}
		}
		}
?>