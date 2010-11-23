<?  
	$sql = 'SELECT COUNT(id),jours FROM billets GROUP by jours ';
  	$resultat=mysql_query($sql);

	while ($ligne=mysql_fetch_array($resultat))
	{
		$data_t[$ligne[1]]=$ligne[0];
	}

	$xlab_an = array();
	$data_propre_0= array();
	$data_propre= array();

	for ( $i=$dated; $i<$datef+1; $i+=1)
	{
		$xlab_an[]=$i;
		if (array_key_exists($i,$data))	{ $data_propre_0[$i]=$data[$i]; }
		else {$data_propre_0[$i] =0;}
	}

	$data_propre_old=array();

	$maxdata=0;
	for ( $i=$dated; $i<$datef+1; $i+=1)
	{		
		if (intval($data_t[$i])>0)
		{ $data_propre_old[$i] =intval($data_propre_0[$i])*1000/intval($data_t[$i]);}
		else
		{ $data_propre_old[$i]=0;}
		if ($data_propre_old[$i]>$maxdata) {$maxdata=$data_propre_old[$i];}
	}

	$data_propre=$data_propre_old;

?>