var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"forêts primaires": {
men: [0, 0.60272, 0.66623, 0.79557, 0.79557, 0.79685, 0.72919, 0.77517, 0.77539, 0.79808, 0.7987, 0.79951, 0.79883, 0.84436, 0.81646, 0.57184, 0.37104, 0.37103, 0.3708, 0.37067, 0.53014, 0.61075, 0.69765, 0.55265, 0.30438, 0.30438, 0.35995, 0.32494, 0.37408, 0.3743, 0.37427, 0.37429, 0.3745, 0.32137, 0.27014, 0.22989, 0.15015, 0.14992, 0.19778, 0.19777, 0.14464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.59791, 0.59691, 0.56095, 0.56056, 0.56018, 0.5598, 0.76372, 0.76384, 0.76362, 0.65413, 0.72074, 0.72076, 0.72036, 0.64648, 0.45697, 0.45746, 0.49248, 0.67924, 0.57955, 0.57983, 0.59896, 0.58544, 0.58537, 0.63147, 0.54803, 0.5479, 0.54809, 0.50704, 0.46579, 0.43375, 0.43392, 0.15784, 0.21418, 0.21408, 0.45844, 0.47711, 0.5349, 0.3354, 0.38299, 0.3831, 0.35925, 0.4045, 0.40511, 0.43399, 0.43315, 0.37736, 0.37743, 0.37743, 0.1134, 0.096768, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêts tropicales": {
men: [0.61722, 0.60958, 0.60872, 0.50771, 0.4575, 0.22711, 0.2198, 0.2129, 0.24881, 0.24898, 0.24917, 0.25831, 0.24679, 0.23529, 0.27059, 0.23003, 0.191, 0.2052, 0.21417, 0.39926, 0.43035, 0.46628, 0.36172, 0.31801, 0.31336, 0.31336, 0.34649, 0.38212, 0.27939, 0.15814, 0.18693, 0.17978, 0.17988, 0.19844, 0.18162, 0.30869, 0.35731, 0.41838, 0.42681, 0.38528, 0.40983, 0.4649, 0.46499, 0.44972, 0.35213, 0.35213, 0.35209, 0.38301, 0.53889, 0.47934, 0.51526, 0.44595, 0.44592, 0.53146, 0.5318, 0.5309, 0.46339, 0.46301, 0.57724, 0.54419, 0.54382, 0.52401, 0.52409, 0.11834, 0.12173, 0.12161, 0.12162, 0.12155, 0.12134, 0.13067, 0.13045, 0.11592, 0.10752, 0.10864, 0.10646, 0.10238, 0.18818, 0.67185, 0.53467, 0.47008, 0.47891, 0.48948, 0.45695, 0.45738, 0.45284, 0.42136, 0.42178, 0.42223, 0.408, 0.42807, 0.25729, 0.2172, 0.2155, 0.18355, 0.16337, 0.13772, 0.14996, 0.10676, 0.11406, 0.099019, 0.096422, 0.096442, 0.10899, 0.18825, 0.20896, 0.2253, 0.21164, 0.3099, 0.2634, 0.28092], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"amazonie": {
men: [0.51746, 0.39197, 0.39212, 0.39212, 0.4057, 0.27, 0.20215, 0.20593, 0.19457, 0.1594, 0.15296, 0.087164, 0.088898, 0.0564, 0.054218, 0.049057, 0.044081, 0.044079, 0.050793, 0.064713, 0.083906, 0.075436, 0.089587, 0.061488, 0.061479, 0.062583, 0.048087, 0.044423, 0.047106, 0.053771, 0.060184, 0.060187, 0.050488, 0.15687, 0.15669, 0.2461, 0.29469, 0.35719, 0.35728, 0.35726, 0.30771, 0.3227, 0.31626, 0.31463, 0.34566, 0.34566, 0.34562, 0.25912, 0.34372, 0.30941, 0.29349, 0.21141, 0.21847, 0.2185, 0.24971, 0.16263, 0.17974, 0.14263, 0.11421, 0.16267, 0.16256, 0.19534, 0.10738, 0.1028, 0.10557, 0.093946, 0.08957, 0.069397, 0.078284, 0.08022, 0.079259, 0.08245, 0.085811, 0.066246, 0.066277, 0.056261, 0.10015, 0.113, 0.11773, 0.12099, 0.12736, 0.1501, 0.27917, 0.34485, 0.3295, 0.37074, 0.36247, 0.38774, 0.38756, 0.34056, 0.14804, 0.15592, 0.14985, 0.16104, 0.1564, 0.15494, 0.15511, 0.16143, 0.16779, 0.19235, 0.19775, 0.19779, 0.19779, 0.21276, 0.26554, 0.23257, 0.27344, 0.24822, 0.16849, 0.16263], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écosystèmes naturels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.054698, 0.10408, 0.10403, 0.16167, 0.16162, 0.22361, 0.22339, 0.2234, 0.95607, 0.95444, 0.95561, 0.95663, 0.95634, 0.95598, 0.95096, 0.94478, 0.9444, 0.9428, 0.94269, 0, 0, 0, 0, 0, 0, 0.96053, 0.96493, 0.96589, 0.96691, 0.96801, 0.96836, 0.97035, 0.7311, 0.59547, 0.59545, 0.52352, 0.52359, 0.52416, 0.49188, 0.29911, 0.027955, 0.027939, 0.027945, 0, 0.16578, 0.24509, 0.2883, 0.30268, 0.30275, 0.31415, 0.31409], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone montagneuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013304, 0.010409, 0.010405, 0.075053, 0.073877, 0.088558, 0.095987, 0.095973, 0.095973, 0.095955, 0.095973, 0.10612, 0.16368, 0.16366, 0.14831, 0.23681, 0.23662, 0.61519, 0.96758, 0.96798, 0.96653, 0.96678, 0.96671, 0.96692, 0.96666, 0.96685, 0.96671, 0.96607, 0.96607, 0.96595, 0.96765, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27493, 0.95412, 0.95383, 0.95347, 0.95233, 0.95278, 0.9524, 0.95079, 0.95068, 0.18601, 0.10317, 0.10315, 0.10318, 0.10328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"perte de biodiversité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.83323, 0.85208, 0.87018, 0.87021, 0.87034, 0.88359, 0.88359, 0.82967, 0.82983, 0.83112, 0.83162, 0.8002, 0.84578, 0.74706, 0.569, 0.49698, 0.35065, 0.27333, 0.25741, 0.13842, 0.13841, 0.10522, 0.24987, 0.19224, 0.17811, 0.17752, 0.17752, 0.19278, 0.18689, 0.18695, 0.18716, 0.17018, 0.15792, 0.16483, 0.16485, 0.12295, 0.04958, 0.019703, 0.019402, 0.019388, 0.019375, 0.019362, 0.020036, 0.018948, 0.11282, 0.17809, 0.17791, 0.17792, 0.17782, 0.24664, 0.31169, 0.29661, 0.35181, 0.30669, 0.29011, 0.29025, 0.1921, 0.19874, 0.11741, 0.078797, 0.073808, 0.073791, 0.090105, 0.10044, 0.15203, 0.19286, 0.19293, 0.17969, 0.18516, 0.17747, 0.18044, 0.17259, 0.18213, 0.16839, 0.17735, 0.1774, 0.16742, 0.16523, 0.083933, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"huile de palme": {
men: [0.065563, 0.23984, 0.28825, 0.30561, 0.30561, 0.29478, 0.2828, 0.23026, 0.41317, 0.40466, 0.41669, 0.40088, 0.37162, 0.29845, 0.36325, 0.21478, 0.17188, 0.1662, 0.1661, 0.16604, 0.16602, 0.22058, 0.14438, 0.11949, 0.12345, 0.12771, 0.14705, 0.22043, 0.027732, 0.025802, 0.0258, 0.027574, 0.02759, 0.24066, 0.24037, 0.24236, 0.56411, 0.49863, 0.49875, 0.49872, 0.50353, 0.538, 0.45497, 0.47815, 0.47783, 0.3789, 0.37886, 0.24838, 0.23426, 0.25204, 0.25208, 0.15233, 0.14976, 0.14978, 0.1278, 0.045071, 0.026317, 0.024418, 0.024401, 0.029854, 0.029833, 0.032028, 0.033992, 0, 0, 0, 0, 0, 0, 0, 0.065777, 0.15823, 0.15817, 0.15798, 0.15805, 0.096117, 0.095954, 0.093902, 0.10187, 0.10268, 0.086283, 0.11998, 0.14323, 0.19858, 0.17036, 0.13688, 0.15614, 0.15631, 0.15623, 0.31792, 0.32875, 0.307, 0.23603, 0.1323, 0.16033, 0.12287, 0.12301, 0.047322, 0.044547, 0.05904, 0.026249, 0.026255, 0.026254, 0.026237, 0.01224, 0.15336, 0.18538, 0.37187, 0.3719, 0.37183], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"huile végétale": {
men: [0.065456, 0.057671, 0.056575, 0.065317, 0.065537, 0.050858, 0.050861, 0.056168, 0, 0, 0, 0, 0, 0, 0.064744, 0.078706, 0.080581, 0.074621, 0.080251, 0.11433, 0.11431, 0.1141, 0.12947, 0.09401, 0.11831, 0.11831, 0.10719, 0.10721, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.52668, 0.63612, 0.63603, 0.6356, 0.54741, 0.77897, 0.6913, 0.69154, 0.56807, 0.56816, 0.56978, 0.56974, 0.56981, 0.57017, 0.15349, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13576, 0.13571, 0.13555, 0.13561, 0.097005, 0.22842, 0.46987, 0.59086, 0.59133, 0.59119, 0.59139, 0.59194, 0.72769, 0.72737, 0.64594, 0.64658, 0.64727, 0.64696, 0.87023, 0.64001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduction des émissions": {
men: [0, 0, 0.084652, 0.084652, 0.084652, 0.080152, 0.15427, 0.12974, 0.15027, 0.12062, 0.12295, 0.12307, 0.12911, 0.14173, 0.34925, 0.34768, 0.27945, 0.27944, 0.27927, 0.22506, 0.16681, 0.20088, 0.18556, 0.32157, 0.32152, 0.32152, 0.32146, 0.30779, 0.08692, 0.12611, 0.1352, 0.1352, 0.13528, 0.22038, 0.24271, 0.24292, 0.29077, 0.10822, 0.082566, 0.08256, 0.19344, 0.35207, 0.64495, 0.39509, 0.30253, 0.30253, 0.30249, 0.23749, 0.23757, 0.22272, 0.13859, 0.11969, 0.12961, 0.12962, 0.064608, 0, 0.050054, 0.053395, 0.056799, 0.05676, 0.054662, 0.058961, 0.05897, 0.052013, 0.065753, 0.07406, 0.07056, 0.12337, 0.21865, 0.30546, 0.21067, 0.17052, 0.17046, 0.15936, 0.17798, 0.17432, 0.18118, 0.20163, 0.20163, 0.2018, 0.20731, 0.17819, 0.12396, 0.12848, 0.13328, 0.1575, 0.1703, 0.1839, 0.16019, 0.12086, 0.065263, 0.04193, 0.039806, 0.034205, 0.034215, 0.03422, 0.035489, 0.036014, 0.037421, 0.16179, 0.15333, 0.15336, 0.15988, 0.18293, 0.22855, 0.22947, 0.23187, 0.25114, 0.25116, 0.23597], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone agricole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65991, 0.66008, 0.66003, 0.66018, 0.66, 0.66013, 0.66003, 0.6596, 0.6596, 0.68577, 0.68698, 0.97312, 0.9742, 0.97436, 0.95629, 0.95624, 0.95634, 0.95696, 0.95533, 0.95373, 0.95326, 0.14089, 0.11258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"monoculture": {
men: [0, 0, 0.16931, 0.16931, 0.16931, 0.24206, 0.20616, 0.2727, 0.27278, 0.31924, 0.31949, 0.31981, 0.31954, 0.31925, 0.39812, 0.4636, 0.16976, 0.16975, 0.13904, 0.057629, 0.066735, 0.066609, 0.066612, 0.060457, 0.055982, 0.055982, 0.049925, 0.13805, 0.14399, 0.12909, 0.12459, 0.12248, 0.11252, 0.1183, 0.16277, 0.16291, 0.16298, 0.16544, 0.16361, 0.1636, 0.16751, 0.14739, 0.14742, 0.13797, 0.13698, 0.13963, 0.1597, 0.18157, 0.30464, 0.26824, 0.23879, 0.19396, 0.20277, 0.20279, 0.20292, 0.14316, 0.14292, 0.14534, 0.15248, 0.15238, 0.15227, 0.17561, 0.087726, 0.093069, 0.10269, 0.13184, 0.11806, 0.10611, 0.12299, 0.24692, 0.17774, 0.18499, 0.18492, 0.1847, 0.17296, 0.13443, 0.044712, 0.044753, 0.044754, 0.04479, 0.042139, 0.048946, 0.1356, 0.13549, 0.18898, 0.14294, 0.14308, 0.14323, 0.15741, 0.15746, 0.15779, 0.14146, 0.14144, 0.14144, 0.19534, 0.19537, 0.11589, 0.08792, 0.076984, 0.10111, 0.10106, 0.089755, 0.089753, 0.089695, 0.089609, 0.099468, 0.099572, 0.099595, 0.099603, 0.099583], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pluies acides": {
men: [0.046478, 0.046502, 0.04652, 0.048484, 0.048484, 0.048561, 0.048564, 0.04857, 0.13668, 0.13667, 0.092348, 0.09244, 0.092362, 0.29084, 0.66475, 0.66534, 0.24707, 0.24706, 0.24691, 0.24683, 0.24679, 0.24632, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22621, 0.41335, 0.41266, 0.41245, 0.41217, 0.80948, 0.80893, 0.80855, 0.80868, 0.68719, 0.59724, 0.68078, 0.68079, 0.68042, 0.64365, 0.64445, 0.64513, 0.64494, 0.6447, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"caractéristiques morphologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18445, 0.38367, 0.36066, 0.36061, 0.36061, 0.36054, 0.36061, 0.32399, 0.5146, 0.64806, 0.64809, 0.64846, 0.64794, 0.64719, 0.67926, 0.59521, 0.79297, 0.63643, 0.4414, 0.4415, 0.40255, 0.37543, 0.37538, 0.21534, 0.21534, 0.15369, 0.12217, 0.11415, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077437, 0.13019, 0.13014, 0.13019, 0.12045, 0.12058, 0.13969, 0.13974, 0.15213, 0.17655, 0.26424, 0.32278, 0.28332, 0.28335, 0.16261, 0.14193, 0.10262, 0.10242, 0.11319, 0.11321, 0.11321, 0.11314, 0.11303, 0.10111, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"révolution énergétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2525, 0.2527, 0.25295, 0.25274, 0.27917, 0.45276, 0.45316, 0.38192, 0.38191, 0.38168, 0.25667, 0.25663, 0.25614, 0.25615, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96088, 0.96173, 0.96213, 0.96069, 0.96093, 0.96087, 0.96108, 0.96082, 0.96101, 0.67129, 0.67085, 0.22964, 0.22962, 0.23002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ressources halieutiques": {
men: [0.94865, 0.94916, 0.94952, 0.94952, 0.94952, 0.95104, 0.21739, 0.13445, 0.13448, 0.39677, 0.3351, 0.33544, 0.33516, 0.33485, 0.33402, 0.33432, 0.33455, 0.33454, 0.33434, 0.33422, 0.52404, 0.95892, 0.95896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34606, 0.34608, 0.34644, 0.42758, 0.42762, 0.42753], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biodiversité terrestre": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95687, 0.95665, 0.95698, 0.95786, 0.95706, 0.95664, 0.95702, 0.95797, 0.95899, 0.5368, 0.76269, 0.45418, 0.419, 0.41893, 0.35143, 0.35152, 0.35157, 0.35196, 0.35249, 0.35268, 0.352, 0.32688, 0.32695, 0.34057, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0.34643, 0.34661, 0.34675, 0.56129, 0.56129, 0.56219, 0.56223, 0.56229, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32239, 0.32184, 0.48246, 0.9606, 0.96032, 0.48265, 0.57537, 0.57564, 0.57541, 0.57443, 0.57437, 0.57438, 0.57485, 0.57471, 0.3062, 0.30648, 0.30623, 0.30609, 0.30621, 0.95181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces protégées": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.020326, 0.020331, 0.020325, 0.029722, 0.02758, 0.27308, 0.27308, 0.27305, 0.27353, 0.27363, 0.27393, 0.27397, 0.27475, 0.27474, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.69169, 0.69149, 0.69111, 0.69044, 0.69046, 0.69008, 0.96447, 0.96565, 0.96668, 0.96639, 0.96603, 0.96487, 0.96532, 0.96494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosions nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23542, 0.23566, 0.1411, 0.10483, 0.10457, 0.10466, 0.11404, 0.11404, 0.11631, 0.11627, 0.11625, 0.11603, 0.11603, 0.11605, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.77327, 0.95658, 0.95752, 0.95854, 0.95809, 0.95843, 0.9604, 0.96039, 0.96024, 0.96021, 0.61408, 0.61416, 0.61483, 0.61577, 0, 0, 0, 0, 0, 0, 0.028735, 0.028737, 0.028768, 0.028774, 0.030205, 0.030199], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby pétrolier": {
men: [0.1794, 0.10704, 0.075165, 0.075165, 0.075165, 0.075286, 0.097747, 0.097758, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22801, 0.22798, 0.22798, 0.22794, 0.22798, 0.38855, 0.95702, 0.95694, 0.95697, 0.95753, 0.95676, 0.54298, 0.38182, 0.23405, 0, 0, 0, 0, 0.22041, 0.22045, 0.22042, 0.22027, 0.22027, 0.22025, 0.22063, 0.27224, 0.35344, 0.95738, 0.9601, 0.96004, 0.29293, 0.29312, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces locales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9565, 0.95635, 0.95632, 0.95659, 0.95672, 0.95776, 0.95923, 0.95973, 0.95788, 0.95733, 0.95752, 0.9575, 0.95689, 0.95597, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polluants lourds": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94922, 0.9492, 0.94905, 0.94903, 0.94929, 0.94942, 0.95045, 0.9519, 0.95241, 0.95056, 0.95002, 0.95022, 0.9502, 0.94958, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9519, 0.95029, 0.95018, 0.9502, 0.95097, 0.95075, 0.95107, 0.95195, 0.95116, 0.95074, 0.95112, 0.95206, 0.95307, 0.95262, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fruits et légumes bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27692, 0.95029, 0.95018, 0.9502, 0.95097, 0.95075, 0.95107, 0.95195, 0.95116, 0.95074, 0.95112, 0.95206, 0.95307, 0.95262, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution agricole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9531, 0.95412, 0.95383, 0.95347, 0.95233, 0.95278, 0.9524, 0.95079, 0.95068, 0.95071, 0.95147, 0.95125, 0.95157, 0.3651, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût environnemental": {
men: [0.15014, 0.15022, 0.15028, 0.15028, 0.15028, 0.15052, 0.15053, 0.15054, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51692, 0.59911, 0.59904, 0.49754, 0.57329, 0.57393, 0.57402, 0.73108, 0.73103, 0.73112, 0.73159, 0.73034, 0.72912, 0.72876, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085443, 0.085473, 0.085649, 0.10089, 0.14911, 0.12654, 0.20156, 0.20158, 0.44531, 0.44599, 0.16552, 0.080276, 0.08023, 0.080246, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pnud": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.03463, 0.1378, 0.12348, 0.12361, 0.091209, 0.091127, 0.08609, 0.083268, 0.088401, 0.086736, 0.086684, 0.083397, 0.09345, 0.10759, 0.11829, 0.047143, 0.054056, 0.049693, 0.077207, 0.077221, 0.09731, 0.10794, 0.10793, 0.11462, 0.11468, 0.1315, 0.13135, 0.18808, 0, 0, 0, 0, 0, 0.15983, 0.12312, 0.073871, 0.073822, 0.073822, 0.052857, 0.050036, 0.050053, 0.036043, 0.036049, 0.032031, 0.034832, 0.032033, 0.032215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.051058, 0.051059, 0.072636, 0.0788, 0.17517, 0.20305, 0.31089, 0.35662, 0.4354, 0.43561, 0.56647, 0.56552, 0.56545, 0.66981, 0.62695, 0.6268, 0.48531, 0.48576, 0.48536, 0.48514, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065719, 0.058713, 0.058744, 0.042159, 0.030184, 0.03019, 0.033444, 0.033423, 0.039235, 0.037898, 0.043782, 0.04609, 0.046093, 0.040524], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pc. des terres": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37417, 0.43003, 0.12902, 0.12902, 0.11682, 0.11678, 0.11676, 0.11654, 0.11655, 0.11657, 0.11655, 0.12328, 0.11785, 0.11787, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2547, 0.44099, 0.44697, 0.44718, 0.47756, 0.58305, 0.64006, 0.60818, 0.60867, 0.60853, 0.60874, 0.6093, 0.60879, 0.60852, 0.43023, 0, 0, 0, 0, 0, 0.18313, 0.11943, 0.092996, 0.065771, 0.065779, 0.060224, 0.085924, 0.081936, 0.076963, 0.077732, 0.081379, 0.081378, 0.081325, 0.074798, 0.042367, 0.047467, 0.051383, 0.05761, 0.057599], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture productiviste": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.090192, 0.090161, 0.11846, 0.11824, 0.21167, 0.2117, 0.21167, 0.21167, 0.21163, 0.95253, 0.95401, 0.34712, 0.34709, 0.34711, 0.21078, 0.21061, 0.21036, 0.21055, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.058118, 0.058128, 0.058111, 0.058079, 0.11155, 0.11155, 0.11149, 0.30439, 0.94555, 0.94655, 0.94627, 0.17794, 0.17773, 0.17781, 0, 0, 0, 0, 0, 0, 0, 0.12622, 0.12612, 0.086607, 0.086641, 0.11272, 0.11284, 0.11279, 0.21474, 0.21518, 0.21518, 0.21514, 0.21514, 0.2152, 0.21523, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
