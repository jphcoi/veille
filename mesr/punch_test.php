<?	


//include("login_check.php");
include("library/fonctions_php.php");
//include("parametre.php");

$all_periode=0;
$jscriptmp="";

if (isset($_POST['all_periode'])) $all_periode = intval($_POST['all_periode']); else $all_periode = 0;

if (isset($_GET['pertinence'])) {
	$pertinence = $_GET['pertinence'];
	$pertinence = intval($pertinence)/100; }
else $pertinence = 0.3;

if (isset($_POST['reduced'])) $reduced = $_POST['reduced']; else $reduced = '0';

$my_period = '305-318';
echo '<p>ça donne ça:</p>';
$data=array( 0 => array(  201 => 1  , 208 => 1  , 209 => 2  , 210 => 2  , 213 => 1  , 215 => 1  , 222 => 2  , 223 => 1  , 225 => 1  , 228 => 1  , 231 => 2  , 235 => 2  , 236 => 1  , 237 => 4  , 239 => 1  , 244 => 1  , 245 => 1  , 248 => 4  , 249 => 1  , 250 => 2  , 251 => 2  , 253 => 2  , 255 => 1  , 257 => 1  , 259 => 1  , 261 => 1  , 264 => 3  , 266 => 4  , 267 => 1  , 268 => 1  , 270 => 5  , 273 => 1  , 274 => 1  , 277 => 1  , 278 => 4  , 279 => 2  , 280 => 1  , 281 => 1  , 283 => 1  , 284 => 3  , 285 => 4  , 287 => 1  , 291 => 2  , 292 => 1  , 293 => 1  , 295 => 1  , 297 => 1  , 299 => 1  , 302 => 4  , 303 => 1  , 306 => 1  , 308 => 9  , 313 => 5  , 315 => 1  , 319 => 1  , 320 => 2 ), 1 => array(  200 => 8  , 201 => 4  , 202 => 5  , 205 => 1  , 209 => 3  , 211 => 1  , 212 => 1  , 218 => 1  , 222 => 2  , 223 => 2  , 225 => 1  , 229 => 1  , 231 => 1  , 237 => 2  , 242 => 1  , 244 => 1  , 245 => 3  , 246 => 2  , 250 => 1  , 252 => 2  , 253 => 2  , 257 => 3  , 259 => 1  , 260 => 1  , 263 => 2  , 264 => 1  , 270 => 1  , 277 => 1  , 279 => 1  , 283 => 1  , 284 => 6  , 285 => 3  , 286 => 1  , 287 => 1  , 288 => 4  , 289 => 2  , 291 => 4  , 292 => 1  , 300 => 1  , 301 => 1  , 306 => 1  , 307 => 2  , 308 => 8  , 309 => 1  , 311 => 1 )  , 2 => array(  200 => 3  , 202 => 1  , 206 => 1  , 207 => 1  , 208 => 1  , 209 => 4  , 211 => 1  , 216 => 2  , 217 => 5  , 218 => 3  , 219 => 1  , 230 => 2  , 231 => 1  , 232 => 2  , 237 => 1  , 238 => 1  , 239 => 1  , 241 => 2  , 244 => 4  , 245 => 2  , 248 => 1  , 249 => 2  , 250 => 1  , 251 => 1  , 256 => 1  , 257 => 1  , 259 => 2  , 260 => 1  , 261 => 3  , 263 => 2  , 264 => 2  , 265 => 1  , 267 => 2  , 270 => 3  , 271 => 4  , 272 => 3  , 273 => 1  , 274 => 1  , 275 => 1  , 276 => 1  , 277 => 1  , 278 => 1  , 279 => 1  , 280 => 1  , 281 => 2  , 284 => 4  , 285 => 4  , 287 => 1  , 288 => 1  , 291 => 5  , 292 => 2  , 293 => 3  , 294 => 1  , 301 => 1  , 305 => 7  , 308 => 7  , 312 => 1  , 317 => 1  , 319 => 1 )  , 3 => array( 200 => 3  , 204 => 1  , 209 => 3  , 214 => 1  , 218 => 1  , 229 => 1  , 241 => 2  , 242 => 2  , 244 => 1  , 250 => 2  , 254 => 1  , 257 => 1  , 259 => 2  , 263 => 2  , 264 => 2  , 265 => 1  , 266 => 2  , 267 => 1  , 270 => 1  , 271 => 1  , 272 => 4  , 274 => 1  , 284 => 3  , 285 => 4  , 286 => 1  , 288 => 2  , 289 => 1  , 291 => 2  , 292 => 1  , 300 => 1  , 305 => 1  , 306 => 1  , 308 => 6  , 312 => 1 )  , 4 => array( 201 => 1  , 209 => 2  , 216 => 5  , 217 => 3  , 218 => 1  , 222 => 1  , 225 => 2  , 229 => 1  , 230 => 1  , 232 => 1  , 234 => 2  , 235 => 1  , 244 => 1  , 249 => 1  , 250 => 1  , 257 => 1  , 259 => 1  , 264 => 3  , 266 => 1  , 267 => 1  , 270 => 1  , 284 => 4  , 285 => 5  , 286 => 1  , 291 => 2  , 292 => 3  , 302 => 1  , 308 => 6  , 309 => 2  , 312 => 1  , 319 => 2  , 320 => 1 ) );
	 $datalabels=array( 0 => "résilience"  , 1 => "personnes séropositives"  , 2 => "secteur de la santé"  , 3 => "accès universel"  , 4 => "éducation thérapeutique");
	include('include/cluster_punch.php');
	echo $ggraph;
echo '<p>et oui:</p>';	
	?>