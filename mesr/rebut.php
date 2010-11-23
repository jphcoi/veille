
//fonction pour récupérer l'ensemble des concepts d'un agrégat de clusters labellisés par $id_label
function get_conceptsin($type,$id_label,$periode)
{
	$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requete non executée.");
	while ($ligne=mysql_fetch_array($resultat)) $liste_termes[$ligne['id']] = $ligne['forme_principale'];

	create_concept_string();
	if ($type=="s")
	{
		$sql ="select id_cluster FROM cluster WHERE periode = \"$periode\" and label_2 = \"$id_label\"  GROUP by id_cluster";//on s'attache à extraire l'ensemble des clusters associés au label specifique donné
	}
	else
	{
		$sql ="select id_cluster FROM cluster WHERE periode = \"$periode\" and label_1 = \"$id_label\" GROUP by id_cluster ";//on s'attache à extraire l'ensemble des clusters associés au label générique donné	
	}

	//echo $sql;
	$resultat=(mysql_query($sql))or die ("Requête non executée.");

	//bloc récupération id des clusters incluent dans le noeud.
	while ($ligne=mysql_fetch_array($resultat)) 
	{$liste_clusters[] = $ligne['id_cluster'];}

	$liste_clusters_label1 =export_label1($liste_clusters,$periode);
	$liste_clusters_label2 =export_label2($liste_clusters,$periode);

	$label1 = get_concept_string($liste_clusters_label1);
	$label2 = get_concept_string($liste_clusters_label2);

	$ensemble_concepts = export_concepts_pondere($liste_clusters,$periode);
	return $ensemble_concepts;
}