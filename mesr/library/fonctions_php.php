<?php // Cv1


$backdark="#DDDDDD";
$backdarker="#CCCCCC";
$skipper="<td width=2.5%></td>";
//$univ_time_begin="2009-12-31";
$date_depart = $univ_time_begin;
setlocale (LC_TIME, 'fr_FR','fra');

function error(){
$query="select * FROM partifgdfgtions WHERE nb_period_covered >= $phylo_min_nb_periods_covered";
$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");

}

function similarity($string1,$string2){
// calcule le nombre de Ngram communs de strings formées de ngrammes séparés par des virgules
$str1=array();
$str2=array();
$string1=str_replace("dpopostrophe","'",$string1);
$string2=str_replace("dpopostrophe","'",$string2);


$string1=explode(',',$string1);
while (count($string1)>0){
    $a=trim(array_pop($string1));
    if (strlen($a)<5){
        array_push($str1,$a);
    }else{
        $b=explode(',',str_replace(" ",",",$a));
        while (count($b)>0){
            $c=trim(array_pop($b));
            if (strlen($c)>4){
                array_push($str1,$c);
            }
        }
    }
}
$string2=explode(',',$string2);
while (count($string2)>0){
    $a=trim(array_pop($string2));
    if (strlen($a)<5){
        array_push($str2,$a);
    }else{
        $b=explode(',',str_replace(" ",",",$a));
        while (count($b)>0){
            $c=trim(array_pop($b));
            if (strlen($c)>4){
                array_push($str2,$c);
            }
        }
    }
}

return count(array_intersect($str1, $str2));
}


function remove_popo($st)
{
	return str_replace('popostrophe ',"’",$st);
}

function connexion_base($server,$user,$password,$database)
{
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");
}


//renvoie la liste des clusters associés à un concept pour une période donnee
function concept_to_clusters($concept, $periode,$clause) {
	if ($periode =='-1')
	{$sql = "SELECT * from cluster WHERE concept='$concept' ".$clause." ORDER by periode,label_1,label_2,id_cluster";}
	else
	{$sql = "SELECT * from cluster WHERE concept='$concept' AND periode='$periode' ".$clause." ORDER by periode,label_1,label_2,id_cluster";}

	$res = mysql_query($sql);
	$check2 = mysql_num_rows($res);
	return $res;
}

function get_keys_with_highest_values($tableau,$depth){
// fonction qui donne les clés avec les plus fortes valeurs jusqu'à une profondeur $depth
// retourne un array avec les clés et les valeurs

    $most_frequent=array();
    uasort($tableau, 'compare');
    $label='';
    $unique_occurrences=array_unique($tableau);

    // on cherche la $depth ième plus grande valeur d'occurences
    $min_occ=100000000; // chiffre arbitraire
    $exit=1;
    while (($exit<=$depth)&&($line = current($unique_occurrences))){
         $min_occ=min($min_occ,$line);
         $exit++;
         next($unique_occurrences);
    }

    // on récupère les labels correspondants
    $exit=0;
    while (($exit==0)&&($key_occ = current($tableau))){
        if ($key_occ>=$min_occ){
            $key=key($tableau);
            $most_frequent[$key]=$key_occ;
        }else{
            $exit=1;
        }
        next($tableau);
    };
    return $most_frequent;
}

/// fonction de comparaison servant ci-dessus
function compare($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return ($a > $b) ? -1 : 1;
}


//fonctions de tri avec accents avec majuscules
function dropaccente($s){if ($s=="É"||$s=="Ê") return ("E"); if ($s=="é"||$s=="ê") return ("e"); return ($s);}
function dropaccents($s){
	$ss="";
	for ($i=0;$i<mb_strlen($s);$i++)
		$ss=$ss.dropaccente(mb_substr($s,$i,1,"utf-8"));
	return ($ss);
}

function strcasecmpcam($a,$b){
	$premierelettrea=strip_tags(dropaccents(mb_strtoupper(mb_substr($a,0,mb_strlen($a),"utf-8"),"utf-8")));
	$premierelettreb=strip_tags(dropaccents(mb_strtoupper(mb_substr($b,0,mb_strlen($b),"utf-8"),"utf-8")));	
	return strcasecmp($premierelettrea,$premierelettreb);
}

function strcasecmpnorm($a,$b){
	$aok=dropaccents(mb_strtoupper(mb_substr($a[0],0,mb_strlen($a[0]),"utf-8"),"utf-8"));
	$bok=dropaccents(mb_strtoupper(mb_substr($b[0],0,mb_strlen($b[0]),"utf-8"),"utf-8"));	
	return strcasecmp($aok,$bok);
}

function strcmpperiod($a,$b){
	if (intval($a[0])<intval($b[0])) return (-1); else return(1);}


function sort_periods($raw){
	$list_of_periods_tmp=array();
	foreach ($raw as $i) {
		$periode=split(" ",$i,2);
		$list_of_periods_tmp[]=array($periode[0],$periode[1]);
	}
	usort($list_of_periods_tmp,"strcmpperiod");
	$list_of_periods=array();
	foreach ($list_of_periods_tmp as $i) $list_of_periods[]=arrange_periode($i[0]." ".$i[1]);
	return($list_of_periods);
}

//fabrication des colonnes
function width_column($ncolumns){return(floor(100/$ncolumns)-3);}
function make_columns($ncolumns,$count){
	$percolumn=ceil($count/$ncolumns);
	$columns=array();
	$increment=0;
	for($i=0;$i<$ncolumns-1;$i++){
		$columns[$i]=array($increment,$increment+$percolumn-1);
		$increment+=$percolumn;
		}
	$columns[$ncolumns-1]=array($increment,$count-1);
	return ($columns);
	}
function display_columns($n,$l,$force_width="yes") 
{
	$w=width_column($n);
	$c=make_columns($n,count($l));
	$td='';
	if ($force_width=="yes") $td=' width='.$w.'%';
	for ($i=0;$i<$n;$i++){
		echo "<td".$td.">";
		if ($c[$i][0]<count($l))
			for ($j=$c[$i][0];$j<=$c[$i][1];$j++) echo ($l[$j]."<br>");
		echo '</td>';
		}
}

//renvoie une date "2009-12-05 17:43:56" en "05/12/2009 (17:43)" (le premier est le format de stockage universel dans la BDD, le second est un peu plus friendly...)
//si le format de date stocke dans la base est du type 2009 11 25
function adjust_date($s){
	global $conf;
	if (strlen($s)>15)
	{
		$t1=split(" ",$s,2);
		$d=$t1[0];
		$d=substr($d,8,2)."/".substr($d,5,2)."/".substr($d,0,4);
		$h=$t1[1];
		return $d." (".substr($h,0,5).")";
	}
	else
	{
		setlocale (LC_TIME, 'fr_FR.UTF8','fra');	
		$t1=str_replace(' ','-',$s);
		$special_date_string="%e";
		//version David / Windows: %#d remplace %e
		if ($conf==3) { $special_date_string="%#d";}
		$dt = strftime("%a ".$special_date_string." %b", strtotime($t1));  
		return $dt;
	}
}





function adjust_date_jours($s){
	global $conf;
	if ($type_date='jour')
	{
	$univ_time_begin = 	"2009-12-31";
	setlocale (LC_TIME, 'fr_FR.UTF8','fra');	
	$date_depart = strtotime($univ_time_begin);
	eval( '$newd = date(\'n/j/Y\', strtotime(\'+'.intval($s).' days\',$date_depart));');
	$date = date('n/j/Y', strtotime('+7 days', $date_depart));
	$special_date_string="%e";
	//version David / Windows: %#d remplace %e
	if ($conf==3) { $special_date_string="%#d";}
	$dt = strftime("%a ".$special_date_string." %b", strtotime($newd)); 
 }
	else
	{$dt=$s;}
	return $dt;
}




//renvoie la liste pondérée de concepts associée à un ensemble d'ids de clusters
function export_concepts_pondere($ids_cluster,$periode){
	$concept_list=array();
	for( $i = 0 ; $i < count($ids_cluster) ; $i++ )
	{
		$id_i = $ids_cluster[$i];
		$sql = "SELECT concept from cluster WHERE id_cluster='$id_i' AND periode='".$periode."'";
		$resultat = mysql_query($sql);
		while( $row  =  mysql_fetch_array ( $resultat )) 
     	{
			$concept_list[]=$row[0];
		}
		
	}
 	return $concept_list;
}

//renvoie la liste unique de concepts associée à un ensemble d'ids de clusters 
function export_concepts($ids_cluster,$periode){
	$concept_list=array();
	for( $i = 0 ; $i < count($ids_cluster) ; $i++ )
	{
		$id_i = $ids_cluster[$i];
		$sql = "SELECT concept from cluster WHERE id_cluster='$id_i' AND periode='".$periode."'";
		$resultat = mysql_query($sql);
		while( $row  =  mysql_fetch_array ( $resultat )) 
     	{
			$concept_list[]=$row[0];
		}
		
	}
	$concept_list_unique =  array_unique($concept_list);
 	$concept_list_unique_final=array();
	foreach ($concept_list_unique as $i) {
		$concept_list_unique_final[] = $i;
		}
 	return $concept_list_unique_final;
}


//renvoie les formes principales associées à une string avec des lemmes
function convert_forme_principale($concepts){
	$formes=array();
	$concepts_arr = explode(';',$concepts);
	for( $i = 0 ; $i < count($concepts_arr) ; $i++ )
	{
		$id_i = $concepts_arr[$i];
		$sql = "SELECT forme_principale from concepts WHERE concepts='".$id_i."'";
		$resultat = mysql_query($sql);
		while( $row  =  mysql_fetch_array ( $resultat )) 
     	{
			$concept_arr[]=$row[0];
		}
		
	}
 	return $concept_arr;
}

//renvoie l'id associé à une forme principale
function forme_principale2id($forme_principale){
        $query="SELECT id FROM concepts WHERE forme_principale=$forme_principale";
        $resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des l'id associé à une FP)</b>.");	
 	return mysql_fetch_array($resultat);
}



//renvoie les formes principales associées à une id avec des lemmes
function convert_forme_principale_id($concepts){

	//echo '\n';
	
	$formes=array();
	$concepts_v= explode('[',$concepts);
	$concepts =$concepts_v[1];
	
	$concepts_v= explode(']',$concepts);
	$concepts =$concepts_v[0];
	$concepts_arr = explode(', ',$concepts);
	for( $i = 0 ; $i < count($concepts_arr) ; $i++ )
	{
		$id_i = $concepts_arr[$i];
		
		$sql = "SELECT forme_principale from concepts WHERE id='".$id_i."'";
		$resultat = mysql_query($sql);
		while( $row  =  mysql_fetch_array ( $resultat)) 
     	{
			$formes[]=$row[0];
		}
		
	}
 	if (count($concepts_v)==1) {	$formes[] = '...';}


	//print_r($formes);

 	return $formes;
}


//exporte les liens associées à une array d'index de billets
function extract_permalink($id_billets_liste){
	$sql = "SELECT permalink,site,title,date,id,auteur_id,jours,content,concepts_id from billets WHERE ";
	for( $i = 0 ; $i < count($id_billets_liste) ; $i++ )
	{
			$id_i=$id_billets_liste[$i];
			$sql = $sql."id='$id_i' ";
			if ($i < count($id_billets_liste)-1)
			{
				$sql = $sql.' OR ';
			}
	}
	$sql = $sql." ORDER by jours";
	$resultats = mysql_query($sql);
	return $resultats;
}



function ecrire_json($liste_auteur_unique,$legende,$aut_occ,$liens_from,$liens_to,$cluster_name,$centre)
{
	//$force donne le poids des liens ie. le nombre de citations sur la période
	//on cree d'abord l'array dyades
	for( $i = 0 ; $i < count($liens_from) ; $i++ )
	{
		$dyadestxt[] = strval($liens_from[$i]).'to'.strval($liens_to[$i]); 
	}
	if (count($dyadestxt)==0)
	{$poids=array();}
	else
	{$poids = (array_count_values($dyadestxt));}
	//$fh = fopen("json_data.txt", 'w');
	if (is_dir("TMP_cooc/".$_COOKIE['ID_my_site']) == False)
	{mkdir("TMP_cooc/".$_COOKIE['ID_my_site']);}
	$tmpfname = tempnam("TMP_cooc", "TMP_");
	unlink($tmpfname);
	$tmpfnamev=explode('/',$tmpfname);
	$tmpfname="TMP_cooc".'/'.$_COOKIE['ID_my_site'].'/'.$tmpfnamev[count($tmpfnamev)-1].'.txt';
	$fh = fopen($tmpfname, "w");
	
	fwrite($fh, "[");
	$compte=0;
	if ($centre>0)
	{
	$taille_cluster=array_sum($aut_occ);//count($liste_auteur_unique);
		fwrite($fh, "{\"keyword\":");
		fwrite($fh, "\"".$cluster_name."\",");
		fwrite($fh, "\"count\":");
		fwrite($fh, $taille_cluster.',');
		fwrite($fh, "\"links\":{");
		$compt=0;
		foreach($liste_auteur_unique as $value)
		{
				$compt=$compt+1;
				fwrite($fh, "\"".$legende[$value]."\"");
				fwrite($fh,":0.1");
					if ($compt<count($liste_auteur_unique))
					{
						fwrite($fh, ",");
					}
		
		}
		fwrite($fh, "}},");
	}
	foreach($liste_auteur_unique as $value)
	{
		$liens=array();
		for( $i = 0 ; $i < count($liens_from) ; $i++ )
		{
			if ($liens_from[$i]==$value)
			{
				$liens[]=$liens_to[$i];
			}
		}
		
		
		$compte=$compte+1;	
		fwrite($fh, "{\"keyword\":");
		fwrite($fh, "\"".$legende[$value]."\",");
		fwrite($fh, "\"count\":");
		fwrite($fh, $aut_occ[$value].',');
		fwrite($fh, "\"links\":{");
		if (count($liens)>0)
		{
			for( $ii = 0 ; $ii < count($liens) ; $ii++ )
			
			{fwrite($fh, "\"".$legende[$liens[$ii]]."\"");
			fwrite($fh,":");
			
			$force = strval($poids[strval($value).'to'.strval($liens[$ii])]);
			fwrite($fh,"$force");
				if ($ii<count($liens)-1)
				{
					fwrite($fh,',');
				}
			}
		}
		fwrite($fh, "}");
		if ($compte<count($liste_auteur_unique))
		{
			fwrite($fh, "},");
		}	
	}
	fwrite($fh, "}]");
	fclose($fh);
	return $tmpfname;
}



function ecrire_json_cooc($liste_auteur_unique,$legende,$aut_occ,$liens_from,$liens_to,$pertinence)
{
	//$force donne le poids des liens ie. le nombre de citations sur la période
	//on cree d'abord l'array dyades
	for( $i = 0 ; $i < count($liens_from) ; $i++ )
	{
		$dyadestxt[] = strval($liens_from[$i]).'to'.strval($liens_to[$i]); 
	}
	if (count($dyadestxt)==0)
	{$poids=array();}
	else
	{$poids = (array_count_values($dyadestxt));}

	$poids_pert = array();
	$liens_from_pert = array();
	$liens_to_pert = array();
	$h=-1;
	while (list ($key, $val) = each ($poids)) {
		$h=$h+1;
	if ($val>=$pertinence)
	{
		$poids_pert[$key]=$val;
		$valv=explode('to',$key);
		$liens_from_pert[]=$valv[0];
		$liens_to_pert[]=$valv[1];
	}
	}

	$poids=array();
	$liens_from=array();
	$liens_to=array();
	$poids = $poids_pert;
	$liens_from=$liens_from_pert;
	$liens_to=$liens_to_pert;

	if (is_dir("TMP_cooc/".$_COOKIE['ID_my_site']) == False)
	{mkdir("TMP_cooc/".$_COOKIE['ID_my_site']);}
	$tmpfname = tempnam("TMP_cooc", "TMP_");
	unlink($tmpfname);
	$tmpfnamev=explode('/',$tmpfname);
	$tmpfname='TMP_cooc'.'/'.$_COOKIE['ID_my_site'].'/'.$tmpfnamev[count($tmpfnamev)-1].'.txt';
	$fh = fopen($tmpfname, "w");
	
	fwrite($fh, "[");
	$compte=0;

	foreach($liste_auteur_unique as $value)
	{
		$liens=array();
		for( $i = 0 ; $i < count($liens_from) ; $i++ )
		{
			if ($liens_from[$i]==$value)
			{
				if (in_array($liens_to[$i],$liens))
				{}
				else
				{$liens[]=$liens_to[$i];}
			}
		
		}
		
		$compte=$compte+1;	
		fwrite($fh, "{\"keyword\":");
		fwrite($fh, "\"".$legende[$value]."\",");
		fwrite($fh, "\"count\":");
		fwrite($fh, $aut_occ[$value].',');
		fwrite($fh, "\"links\":{");
		if (count($liens)>0)
		{
			for( $ii = 0 ; $ii < count($liens) ; $ii++ )

					{
						fwrite($fh, "\"".$legende[$liens[$ii]]."\"");
						fwrite($fh,":");
						$force = strval($poids[strval($value).'to'.strval($liens[$ii])]);
						fwrite($fh,$force);
						if ($ii<count($liens)-1)
						{
							fwrite($fh,',');
						}					
					}
		}
		
		fwrite($fh, "}");

		if ($compte<count($liste_auteur_unique))
		{
			fwrite($fh, "},");
		}	
	
	}
	fwrite($fh, "}]");
	fclose($fh);
	return $tmpfname;
}



function strip_www($s){
	if (substr($s,strlen($s)-1,1)=="/") $s=substr($s,0,strlen($s)-1);
	return str_replace("http://","",str_replace("http://www.","",$s));
}

//renvoie la liste des labels associée à un ensemble d'ids de clusters 
function export_label1($ids_cluster,$periode){
	$concept_list=array();
	for( $i = 0 ; $i < count($ids_cluster) ; $i++ )
	{
		$id_i = $ids_cluster[$i];
		$sql = "SELECT label_1 from cluster WHERE id_cluster='$id_i' AND periode='".$periode."' GROUP by id_cluster";
		$resultat = mysql_query($sql);
		while( $row  =  mysql_fetch_array ( $resultat )) 
     	{
			$concept_list[]=$row['label_1'];
		}
		
	}
 	return $concept_list;
}



//renvoie la liste des labels associée à un ensemble d'ids de clusters 
function export_label2($ids_cluster,$periode){
	$concept_list=array();
	for( $i = 0 ; $i < count($ids_cluster) ; $i++ )
	{
		$id_i = $ids_cluster[$i];
		$sql = "SELECT label_2 from cluster WHERE id_cluster='$id_i' AND periode='".$periode."' GROUP by id_cluster";
		$resultat = mysql_query($sql);
		while( $row  =  mysql_fetch_array ( $resultat )) 
     	{
			$concept_list[]=$row['label_2'];
		}
		
	}
 	return $concept_list;
}


//renvoie la liste  des concepts_strings associée à un ensemble d'ids de concepts 

function create_concept_string(){
	global $dico_termes;
	$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executée.");
	while ($ligne=mysql_fetch_array($resultat)) $dico_termes[$ligne['id']]=remove_popo($ligne['forme_principale']);
}

function get_concept_string($liste){
	global $dico_termes;
	foreach($liste as $i){
		$liste_out[]=remove_popo($dico_termes[$i]);
		}
	return($liste_out);
		
}

function arrange_periode($s) {return str_replace(" ","-",$s);}
function derange_periode($s) {return str_replace("-"," ",$s);}
function compute_periode($s) {$a=explode(" ",$s); return(intval($a[0])*1000000+intval($a[1]));}




function get_date_since($jour)
	{ 
		$univ_time_begin = 	"2009-12-31";
		setlocale (LC_TIME, 'fr_FR.UTF8','fra');	
		$date_depart_v = explode('-',$date_depart); 
		$day=date('Y-m-d');
		$date_depart = strtotime($day);
		eval( '$newd = date(\'n/j/Y\', strtotime(\'-'.$jour.' days\',$date_depart));');
		$dt = date("Y-m-d", strtotime($newd));  
		return $dt;
	}

function get_date($date_depart,$jour,$short=0)
{ 
	global $conf;
	if ($jour<1000)
	{
		$univ_time_begin = 	"2009-12-31";
		setlocale (LC_TIME, 'fr_FR.UTF8','fra');	
		$date_depart = strtotime($univ_time_begin);
		eval( '$newd = date(\'n/j/Y\', strtotime(\'+'.$jour.' days\',$date_depart));');
		$date = date('n/j/Y', strtotime('+7 days', $date_depart));
		$special_date_string="%e";
		//version David / Windows: %#d remplace %e
		if ($conf==3) { $special_date_string="%#d";}
		if ($short==0) { $dt=strftime($special_date_string." %b", strtotime($newd));}
			else { $dt=strftime("%d/%m",strtotime($newd));}
	}
	else
	{
		$dt = $jour;
	}
	return $dt;
}



//retourne la periode
function get_string_periode($periode,$brk=0)
{
	if (strlen($periodes[0])!=4)
	{
	$date_depart =$univ_time_begin;
	$periodes = explode('-',$periode);
	$dt1 = get_date($date_depart,$periodes[0]);
	$dt2 = get_date($date_depart,$periodes[1]);}
	else
	{
		$periodes = explode('-',$periode);
		$dt1 = $periodes[0];
		$dt2 = $periodes[1];
		if ($brk!=0) $dt1=$dt1.'<br>'; else $dt1=$dt1.' ';
		return 'de '.$dt1.'à '.$dt2;
	}
	
	if ($brk!=0) $dt1=$dt1.'<br>'; else $dt1=$dt1.' ';
	return 'du '.$dt1.'au '.$dt2;
}

function get_short_string_periode($periode,$brk=0,$short=0)
{
	if ($periode==-1) return ("***");
	$date_depart=$univ_time_begin;
	$periodes = explode('-',$periode);
	$dt1 = get_date($date_depart,$periodes[0],$short);
	$dt2 = get_date($date_depart,$periodes[1],$short);
	if ($brk!=0) $dt1=$dt1.'<br>'; else $dt1=$dt1.'';
	return str_replace("- ","-",$dt1.'-'.$dt2);
}

function explode_period($periode){
	$periode_v=explode('-',arrange_periode($periode));
	return (array("from"=>$periode_v[0],"to" => $periode_v[1]));
}

//retourne les billets associés à un cluster
function scan_billet($list_of_concepts,$periode)
{
	$periodex=explode_period($periode);
	$sql = "SELECT id_b,concept,auteur from socsem WHERE jours<='".$periodex['to']."' and jours>='".$periodex['from']."' AND (concept=";
	for( $i = 0 ; $i < count($list_of_concepts) ; $i++ )
	{
		$sql=$sql.' '.$list_of_concepts[$i];
		if ($i < count($list_of_concepts)-1)
		{
			$sql=$sql.' OR concept = ';			
		}
	}
	$sql = $sql.')';
	echo $sql;
	$resultat = mysql_query($sql) or die ("Requêste non executée.");
	while( $row  =  mysql_fetch_array ( $resultat )) 
 	{
		$liste_billet[]=$row['id_b'];
	}
	$occ_bill = array_count_values($liste_billet);
	foreach($occ_bill as $key => $value)
	{
		if ($value>1)//on ne selectionne que les blogs comportant au moins deux concepts
		{
			$liste_id_billet_pertinents[$key]=$value;
		}
	}	
	return $liste_id_billet_pertinents;	
}

function scan_billet_fast($list_of_concepts,$periode)
{
	$sql = "SELECT id_b  from concept2billets WHERE (concept=";
	for( $i = 0 ; $i < count($list_of_concepts) ; $i++ )
	{
		$sql=$sql.' '.$list_of_concepts[$i];
		if ($i < count($list_of_concepts)-1)
		{
			$sql=$sql.' OR concept = ';			
		}
	}

	$sql = $sql.')';

	$resultat = mysql_query($sql) or die ("Requêste non executée.");
	while( $row  =  mysql_fetch_array ( $resultat )) 
 	{
		$liste_billet[]=$row['id_b'];
	}
	$occ_bill = array_count_values($liste_billet);
	foreach($occ_bill as $key => $value)
	{
		if ($value>1)//on ne selectionne que les blogs comportant au moins deux concepts
		{
			$liste_id_billet_pertinents[$key]=$value;
		}
	}	
	return $liste_id_billet_pertinents;	
}

function scan_billet_seuil($list_of_concepts,$periode,$seuil)
{
	$sql = "SELECT id_b,concept,auteur from socsem WHERE ";
	if (strlen($periode)>2)
	{
		$periodex=explode_period($periode);
	 	$sql=$sql."  jours<='".$periodex['to']."' and jours>='".$periodex['from']."' AND ";
	}
	$sql=$sql."(concept=";
	for( $i = 0 ; $i < count($list_of_concepts) ; $i++ )
	{
		$sql=$sql.' '.$list_of_concepts[$i];
		if ($i < count($list_of_concepts)-1)
		{
			$sql=$sql.' OR concept = ';			
		}
	}
	$sql = $sql.')';
	$resultat = mysql_query($sql) or die ("Requêste non executée.");
	while( $row  =  mysql_fetch_array ( $resultat )) 
 	{
		$liste_billet[]=$row['id_b'];
	}
	$liste_id_billet_pertinents=array();
	if (count($liste_billet)>0)
	{$occ_bill = array_count_values($liste_billet);
	foreach($occ_bill as $key => $value)
	{
		if ($value>$seuil)//on ne selectionne que les blogs comportant au moins deux concepts
		{
			$liste_id_billet_pertinents[$key]=$value;
		}
	}}	
	return $liste_id_billet_pertinents;	
}


function clean_text($string)//enlève les caractères bizarres dans le texte
{
	$string = str_replace('Â?','\'',$string);
	$string = str_replace('Ã©','é',$string);
  $string=str_replace('Ãª','ê',$string);
  $string=str_replace('Ã¨','è',$string);
  $string=str_replace('Ã¯','ï',$string);
  $string=str_replace('Ã§','ç',$string);
  $string=str_replace('Ã‰','E',$string);
  $string=str_replace('Ã®','î',$string);
  $string=str_replace('Ã','à',$string);
  $string=str_replace('Ã¡','a',$string);
  $string=str_replace('Ã´','ô',$string);
	$string=str_replace('a´','o',$string);
	$string=str_replace('à¡','a',$string);
	$string=str_replace('à´','o',$string);
	$string=str_replace('à¢','a',$string);
	$string=str_replace('o«','ë',$string);
	$string=str_replace('â??','\'',$string);
	$string=str_replace('Ã©','é',$string);
	$string=str_replace('â?¦','...',$string);
		$string=str_replace('É','é',$string);
				$string=str_replace('à?','é',$string);
				$string=str_replace('Â«','«',$string);
				$string=str_replace('Â»','»',$string);
				$string=str_replace('à?','é',$string);
				$string=str_replace('***','',$string);
				
		return $string;
}

function clean_utf8($string)//enlève les caractères bizarres dans le texte
{
//bon caracteres
$GoodCharaters = array ("¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","*","®","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾","¿","×","÷","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","ø","ù","ú","û","ü","ý","þ","ÿ");  
 
//Mauvais caractères
$BadCharacters = array ("Â¡","Â¢","Â£","Â¤","Â¥","Â¦","Â§","Â¨","Â©","Âª","Â«","Â¬","Â*","Â®","Â¯","Â°","Â±","Â²","Â³","Â´","Âµ","Â¶","Â·","Â¸","Â¹","Âº","Â»","Â¼","Â½","Â¾","Â¿","Ã—","Ã·","Ã€","Ã","Ã‚","Ãƒ","Ã„","Ã…","Ã†","Ã‡","Ãˆ","Ã‰","ÃŠ","Ã‹","ÃŒ","Ã","ÃŽ","Ã","Ã","Ã‘","Ã’","Ã“","Ã”","Ã•","Ã–","Ã˜","Ã™","Ãš","Ã›","Ãœ","Ã","Ãž","ÃŸ","Ã ","Ã¡","Ã¢","Ã£","Ã¤","Ã¥","Ã¦","Ã§","Ã¨","Ã©","Ãª","Ã«","Ã¬","Ã*","Ã®","Ã¯","Ã°","Ã±","Ã²","Ã³","Ã´","Ãµ","Ã¶","Ã¸","Ã¹","Ãº","Ã»","Ã¼","Ã½","Ã¾","Ã¿");  
  							
// remplacer les mauvais caracatères par les bons et encoder le tout en utf8			
$website_description = utf8_encode(str_replace($BadCharacters ,$GoodCharaters ,$string));
return $website_description;
}




function search($searchValue, $ar)
	{
		for($i=0; $i< count($ar); $i++) {
	   if($ar[$i] == $searchValue) return $i;}
	}

function display_arrow_periodes($my_period,$total_list_periods)
{
	$up=1;
	$down=1;
	$old_url  =$_SERVER['REQUEST_URI'];
	if ($my_period==-1)
	{
		$up=0;
		$down=0;
	}
	
	if ($my_period==$total_list_periods[0])
	{
		$up=0;
	}
	
	if ($my_period==end($total_list_periods))
	{
		$down=0;
	}
	if ($down>0)
	{
		$index_per = search($my_period,$total_list_periods);
		$url_per_suiv=str_replace($my_period,$total_list_periods[$index_per+1],$old_url);
				if (stristr($old_url,'periode')==FALSE)
	{$url_per_suiv=$url_per_suiv.'?periode='.$total_list_periods[$index_per+1];}
		
		
		echo '<a href="'.$url_per_suiv.'"><font size="2" face="Verdana"> &darr; </font> </a>';
	}
	else
	{
		echo '&nbsp';
	}
	
	if ($up>0)
	{	
		$index_per = search($my_period,$total_list_periods);
		$url_per_prec=str_replace($my_period,$total_list_periods[$index_per-1],$old_url);
		if (stristr($old_url,'periode')==FALSE)
{$url_per_prec=$url_per_prec.'?periode='.$total_list_periods[$index_per-1];}
		
		echo '<a href="'.$url_per_prec.'"> <font size="2" face="Verdana"> &uarr; </font> </a>';
	echo '&nbsp';
	}
	else
	{
		echo '&nbsp&nbsp';
	}
}


function mise_en_forme_abstract($titre,$auteurs,$abstract,$concepts,$type_notice)
{
	$abstractv1 = explode('* * *',$abstract);
	if (count($abstractv1)>1)
	{$abstract = $abstractv1[1];}
	//echo $concepts;
	$abstractv =  explode('. ',$abstract);
	//print_r($abstractv);
	$abs = '';
	$keywords='';
	if (count(explode(' ; ',$abstractv[2]))>1)
	{
		$jlim = 2;
	}
	else
	{	
		if (count(explode(' ; ',$abstractv[1]))>1)
		{
			$jlim = 1;
		}
		else
		{$jlim=0;}
	}

	for ($j=0;$j<count($abstractv);$j++)
	{
		
		if ($j>=$jlim)
		{$abs = $abs.'. '.$abstractv[$j];}
		else
		{if ($type_notice=='article')
			{$keywords = $keywords.$abstractv[$j];}
		else
			{$keywords=$keywords.'';}
		}
	}

	while ($abs[0]==' ' or $abs[0]=='.') 
	{
		$abs=substr($abs, 1);
	}

	$notice = '<b>Source: '.'</b>'.$auteurs.'<br><br><b>'.'Résumé: '.'</b>'.str_replace('popostrophe',"'",$abs).'<br>';
	if ($type_notice==article) $notice.='<b>'.'Mots-clés: </b>'.str_replace('popostrophe',"'",$keywords);
	$notice.='<br>'.'<b>'.'Concepts: </b>'.str_replace('popostrophe',"'",$concepts);
	$notice = str_replace("'","’",$notice);
	$notice = str_replace('"',"’",$notice);
	$notice = str_replace(" )",")",str_replace("( ","(",str_replace("’ ","'",str_replace(" ,",",",str_replace("' ","'",str_replace(' .','.',$notice))))));
	return $notice;
	
}


function display_box($titre,$auteurs,$abstract,$permalien,$concepts,$type_notice,$index,$insertedtext)
{
	$notice = mise_en_forme_abstract($titre,$auteurs,$abstract,$concepts,$type_notice);
	echo '<div id="dialog'.$index.'" title="'.$titre.'" style="font-size:8pt;">'.$notice.'</div>';
	echo '<a ';
	if (strpos($permalien,'http:')>-1) {
		echo 'href="'.$permalien.'"';
		}
	else {
		echo 'href="'.'http://scholar.google.com/scholar?hl=en&q='.str_replace(' ','+',$titre).'"';
		}
	echo '>';
	echo '<img alt="aller sur le site" src="images/externallink.png"  border="0" align=left height=16> ';
	echo '</a>';
	echo '</td><td>';
	echo '<div id="opener'.$index.'"><a href=#>'.$titre.'</a>'.$insertedtext.'</div>
	';
}

function display_helper($title,$text,$indexsuffix,$img="question-mark.gif") {
// cette fonction affiche un point d'interrogation correspondant au dialogue d'id "dialog$indexsuffix"
// et renvoie le bout de script JS-Jquery qui doit être ajouté à la commande d'affichage de script JQuery à la fin
	echo "
	<img src='images/".$img."' id='opener".$indexsuffix."'>
	<div id='dialog".$indexsuffix."' title=".str_replace(" ","&nbsp;",$title).">".$text."
	</div>
	";
	
	return("
		$('#dialog".$indexsuffix."')
		  .dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
		  .click(function () { $('#dialog".$indexsuffix."').dialog('close'); });

		$('#opener".$indexsuffix."').click(function(e) {
			if (!$('#dialog".$indexsuffix."').dialog('isOpen')) 
				$('#dialog".$indexsuffix."').dialog('option','position', [$(this).position().left+25,25]).dialog('open');
			else
				$('#dialog".$indexsuffix."').dialog('close');
			return false;
			});");
}

function recup_id_auteurs($chaine)
{
//	ex:[10996, 9787, 9924, 5918, 3948, 4666, 14409, 8136, 2959, 15818, 4316, 6424, 3900, 4151, 12036, 16938, 4624, 11684, 8305, 13840, 12663, 3821, 1681, 10779, 13426, 14139, 5008, 420, 10750, 1182, 1272, 15173, 6696, 9327, 14410, 6143, 15316, 7044, 5609, 14252, 11229, 11474, 14943, 12279, 8393]martinez, d ; berka, rm ; henrissat, b ; saloheimo, m ; arvas, m ; baker, se ; chapman, j ; chertkov, o ; coutinho, pm ; cullen, d

	if ($chaine[0]='[')
	{
		$chaine = str_replace(']','',str_replace('[','',$chaine));
		$sortie = explode(', ',$chaine);
	}
	else
	{
		$sortie=array();
		$sortie[]=$chaine;
	}
	return $sortie;
}



function recup_names_auteurs($chaine)
{
	$sortie = explode(' ; ',$chaine);
	return $sortie;
}

function prone($chaine,$n)
{
	$chaine_v = explode('.',$chaine);

	$output = array_slice($chaine_v, 0, min($n,count($chaine_v)-1));
	$abs_red = implode('.',$output);
	$abs_red=$abs_red.'.';
	if ($n<count($chaine_v))
	{
		$abs_red = $abs_red.' [...]';
	}
	return $abs_red;
	
}


function display_billets($info_sources,$list_of_concepts,$my_period,$type_notice)
{
	$backdark="#DDDDDD";
	$backdarker="#CCCCCC";
	
	echo "<table class=tableitems rules=all width=100% cellspacing=0 cellpadding=0>";
	echo "</td>";
	echo "<td align=left width=80%>";
	echo "<table width=100% cellspacing=0 cellpadding=0>";
	$odd=0;
	$jscriptmp="";
	foreach(array_keys($info_sources) as $key)
	{
		//print_r($info_sources[$key]['dates']);
		$odd+=1;
		if ($odd%2==0) $bckclr=$backdark; else $bckclr=$backdarker;
		echo ('<tr valign=top class=tableitems style="background-color:'.$bckclr.'; ">');
		echo "<td  width=100%>";
		echo '<table class=tableitems width=100%><tr><td width=100%>';
		$ids_auteur=recup_id_auteurs($info_sources[$key]['idauteur']);
		$keys = recup_names_auteurs($key);

		for ($j=0;$j<count($ids_auteur);$j++)
		{
			echo '<a href=source.php?id_source='.$ids_auteur[$j]."&periode=".$my_period.'><i>'.$keys[$j]."</i></a>";
			if ($j<count($ids_auteur)-1)
			{echo '; ';}
		}
		
		echo '</td></tr></table>';
		echo "<table class=commentitems width=100%>";
		for ($i=0;$i<count($info_sources[$key]['titres']);$i++){
			echo "<tr valign=top><td width=13% style=\"font-size:x-small;\">";
			echo $info_sources[$key]['dates'][$i];
			echo "</td><td width=2%>";
			echo "</td><td width=18px>";
			$chaine=$info_sources[$key]['content'][$i];
			//coupe l'abstract aux 15 premières lignes
			$chaine = prone($chaine,8);
			//print_r(convert_forme_principale_id($info_sources[$key]['concepts'][$i]));
			$conc = implode("; ", convert_forme_principale_id($info_sources[$key]['concepts'][$i]));
			//echo $conc;
			//il faut normaliser le nom de l'index pour que javascript ne soit pas perdu
			$index=str_replace("/","",str_replace(".","",str_replace("-","",$key."-".$i)));
			$jscriptmp.="
				$('#dialog".$index."')
					.dialog({ autoOpen: false, stack: true, modal:true, width:600, closeOnEscape:true})
					.click(function () { $('#dialog".$index."').dialog('close'); });
				$('#opener".$index."').click(function(e) {
					if (!$('#dialog".$index."').dialog('isOpen')) 
						$('#dialog".$index."').dialog('option','position', [$(this).position().left+50,'center']).dialog('open');
					else
						$('#dialog".$index."').dialog('close');
					return false;
					});";
			$insertedtext="";
			if (count($list_of_concepts)>1){ 
				//echo 
				///log10(10+$info_sources[$key]['nbsize'][$i]-$info_sources[$key]['nbtermes'][$i]
				$insertedtext=" (".number_format(100*$info_sources[$key]['nbtermes'][$i]/count($list_of_concepts)/log10(10+max($info_sources[$key]['nbsize'][$i],$info_sources[$key]['nbtermes'][$i])-$info_sources[$key]['nbtermes'][$i]), 0, ',', ' ')."%)";
				//	echo $info_sources[$key]['nbtermes'][$i];
				//	echo '<br>';
				//	echo count($list_of_concepts);
				//	echo '<br>';
				//	echo $info_sources[$key]['nbsize'][$i];
				}
			echo display_box($info_sources[$key]['titres'][$i],$key,$chaine,$info_sources[$key]['permaliens'][$i],$conc,$type_notice,$index,$insertedtext);
			echo "</i></td></tr>";
		}
		echo "</table>";

		echo "</td>";
		echo "</tr>";
	}
	echo "</table>";
	echo '
	<script> $(function() { '.$jscriptmp.' 
		});</script>';

}
					


?>