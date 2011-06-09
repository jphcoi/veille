<?
$myaboveFilThematique='<script type="text/javascript">'.$JSonFilThematique.'</script>';
$out=display_helper_two_outputs('Graph d\'évolution des participations des differentes parties de 
    la blogosphère au fil thématique','<p>Ce graphique représente l\'évolution de la popularité des <a href="aide.php?selectedTab=2"><font color=blue>de ce fil thématique</font></a> 
        en fonctions des types d\'acteurs.
            Chaque couleur représente un type acteur thématique, l\'épaisseur des tubes étant proportionnelle à la popularité de la thématique concernée
            sur la période correspondante. Pour afficher le type d\acteur, laisser la souris au dessus quelques secondes.</p>

            <p>Le champ de recherche permet de retrouver le profil d\'évolution lié à un type d\acteur particulier.</p>
                    ',"evolution");
$jscriptmp.=$out[1];
$myscriptFilThematique='<table class=tableitems width="100%">
<tr valign=bottom>
<td align="left">Evolution Temporelle';
$myscriptFilThematique.=$out[0];

include('streamgraph_templateCluster.php');
$myscriptFilThematique.=$myscriptstream;
?>