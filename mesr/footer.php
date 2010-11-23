<?php 
echo '<p><table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td>';
echo "<div class=subbanner>zone de commentaires</div>";
echo "</td><td width=2.5%></td></tr></table>";
echo "<table width=100% class=tableitems><tr><td width=2.5%></td><td width=95%>";

include("commentaire.php");
        
echo "</td></tr></table>";

//echo '<div align=right style="font-size:xx-small; color:DarkSlateGray;">réalisé pour le compte du MESR par David Chavalarias, Jean-Philippe Cointet, Camille Roth.&nbsp;&nbsp;</div>';

echo "</body></html>";
?>