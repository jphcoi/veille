<?php
$past = time() - 100;
//this makes the time in the past to destroy the cookie
setcookie("ID_my_site", "gone", $past);
setcookie("Key_my_site", "gone", $past);

header("Location: index0.php?origine=phylo.php");
?>
