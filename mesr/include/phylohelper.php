<?php
    $jscriptmp.=display_helper('Fils thématiques','Les <a href="aide.php?selectedTab=2"><font color=blue>fils thématiques</font></a> sont des ensembles de champs thématiques sur des sujets similaires répartis sur plusieurs périodes. Ils sont classés ici en trois catégories:
            <ul style="font-size:small;"><li>
            "<b style="font-variant:small-caps;">Actifs</b>": Fils thématiques couvrant au moins '.$phylo_min_nb_periods_covered.' périodes et qui sont toujours actifs sur les trois dernières périodes.
                </li>
            <li>
                "<b style="font-variant:small-caps;">Potentiellement émergents</b>":
                Fils thématiques couvrant au plus trois périodes dont la plus récente.
            </li>
                <li>
                "<b style="font-variant:small-caps;">En suspens</b>":
            Fils thématiques couvrant au moins '.$phylo_min_nb_periods_covered.' périodes mais 
                qui ne sont pas présents sur les trois dernières périodes. Cette rupture du fil
                thématique peut être temporaire, témoignant d\'une baisse d\'intérêt pour le sujet
                concerné, ou définitive. Il est pourtant possible que des thématiques proches
                soient cependant traitée sur les périodes récentes au sein d\'un autre fil thématique.
                </li>
                    </ul>
            <p>Dans chaque catégorie, les fils thématiques sont labélisés par leur composantes les plus représentatives puis, lorsque cela est possible, regroupés par grands thèmes.
              Un click sur le nom d\'un fil thématique permet d\'accéder aux champs thématiques les plus récents de ce fil.</p><p>Pour chaque fil, sont par
            ailleurs indiqués la fenêtre temporelle couverte par ce fil thématique ainsi que le nombre de champs qu\'il comporte.</p>
            <p>Les fils thématiques connaissent une popularité variable au cours du temps. Le
            nombre d\'étoiles devant un fils thématique (<img src="images/star.gif"><img src="images/star.gif">)
            indiquent la popularité maximal qu\'a pu atteindre le fils thématique.<p>
                    ',"helper");

?>
