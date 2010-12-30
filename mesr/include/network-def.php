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
			if (!array_key_exists($tmpfrom,$tmpvalues)) {$tmpvalues[$tmpfrom]=array();}
			if (!array_key_exists($tmpto,$tmpvalues[$tmpfrom])) {$tmpvalues[$tmpfrom][$tmpto]=0;}
			$tmpvalues[$tmpfrom][$tmpto]+=1;
		}
		foreach(array_keys($tmpvalues) as $i) {
			foreach(array_keys($tmpvalues[$i]) as $j) {
					$tmp["links"][]=array("source" => $i, "target" => $j, "value" => $tmpvalues[$i][$j]);
				}
			}
	}

?>