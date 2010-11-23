CREATE TABLE users (ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(100), password VARCHAR(60)) 

CREATE TABLE commentaires (ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username VARCHAR(100), commentaire VARCHAR(800), jour DATE, periode VARCHAR(50), concept INT, blog INT, vue VARCHAR(50), comm_unique VARCHAR(1000) UNIQUE, cluster INT(10)) 




CREATE TABLE `tbl_slider` (
  `id` INT(6) NOT NULL auto_increment,
  `slider_val` INT(6) NOT NULL default '0',
  `user` VARCHAR(50),
  PRIMARY KEY  (`id`)
)