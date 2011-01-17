<?
$myaboveEmergentes='<script type="text/javascript">'.$json_dataEmergentes.'</script>';
$out=display_helper_two_outputs('Graph d\'évolution des fils thématiques','<p>Ce graphique représente l\'évolution de la popularité des <a href="aide.php?selectedTab=2"><font color=blue>fils thématiques</font></a> actifs.
            Chaque couleur représente un fil thématique, l\'épaisseur des tubes étant proportionnelle à la popularité de la thématique concernée
            sur la période correspondante. Pour afficher le nom d\'un fil thématique, laisser la souris au dessus quelques secondes.</p>

            <p>Le champ de recherche permet de retrouver le profil d\'évolution d\'un des fils thématiques listés ci-dessous.</p>
                    ',"evolution");
$jscriptmp.=$out[1];
$myscriptEmergentes='<table class=tableitems width="100%">
<tr valign=bottom>
<td align="left">Evolution Temporelle';
$myscriptEmergentes.=$out[0];

include('streamgraph_template.php');
$myscriptEmergentes.=$myscriptstream;
?>