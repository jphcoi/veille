var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"producteurs bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96666, 0.96804, 0.96883, 0.6361, 0.63496, 0.63528, 0.63572, 0.588, 0.588, 0.58783, 0.58788, 0.58784, 0.58775, 0.28443, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24269, 0.24235, 0.24181, 0.17136, 0.17117, 0.17104, 0.17138, 0.1714, 0.17138, 0.21485, 0.21485, 0.36495, 0.3648, 0.36435, 0.16279, 0.14803, 0.1483, 0.60244, 0.60317, 0.44405, 0.44389, 0.44339, 0.7656, 0.76573, 0.76557, 0.76564, 0.76624, 0.7662, 0.72005, 0.82618, 0.58644, 0.58731, 0.5875, 0.65431, 0.65473, 0.65578, 0, 0, 0, 0, 0.65516, 0.65603, 0.65762, 0.76253, 0.97546, 0.97525, 0.97416, 0.97789, 0.97756, 0.55132, 0.55142, 0.55132, 0.55163, 0.55053, 0.44625, 0.4465, 0.4465, 0.3352, 0.33498, 0.33482], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"huiles essentielles": {
men: [0.24798, 0.28431, 0.30263, 0.30276, 0.35673, 0.35655, 0.35678, 0.31819, 0.33758, 0.53083, 0.57357, 0.45147, 0.5376, 0.6041, 0.60286, 0.60338, 0.58996, 0.58966, 0.5339, 0.53434, 0.53274, 0.73903, 0.7394, 0, 0.32767, 0.32767, 0.32758, 0.25532, 0.2553, 0.42437, 0.42433, 0.4245, 0.42452, 0.42456, 0.28063, 0.31445, 0.31447, 0.37989, 0.24666, 0.24666, 0.24682, 0.30216, 0.20011, 0, 0.23983, 0.23979, 0.19227, 0.19226, 0.21451, 0.21451, 0.21436, 0.21406, 0.21358, 0.21354, 0.16604, 0.16591, 0.20623, 0.20764, 0, 0, 0, 0, 0, 0.2672, 0.26719, 0.26697, 0.26745, 0.26719, 0.44369, 0.65602, 0.6558, 0.68703, 0.4595, 0.45957, 0.45948, 0.45952, 0.54101, 0.41073, 0.3573, 0.35796, 0.35779, 0.35833, 0.31908, 0.27411, 0.27429, 0.29, 0.33738, 0.33738, 0.33726, 0.3376, 0.28125, 0.28162, 0.31938, 0.31883, 0.31919, 0.31912, 0.36432, 0, 0, 0, 0.29031, 0.29025, 0.045471, 0.04538, 0.050986, 0.051015, 0.051015, 0.051103, 0.05107, 0.051044], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production biologique": {
men: [0.38384, 0.38367, 0.35595, 0.3561, 0.35584, 0.35567, 0.21661, 0.28017, 0.28041, 0, 0, 0, 0, 0.3024, 0.28398, 0.28422, 0.33093, 0.33076, 0.33123, 0.3315, 0.33051, 0.32992, 0.25896, 0.25914, 0.25286, 0.25286, 0.28529, 0.18821, 0.60727, 0.54448, 0.40335, 0.37692, 0.37693, 0.37697, 0.35462, 0.44037, 0.5146, 0.51444, 0.52415, 0.52415, 0.5245, 0.52414, 0.30664, 0.46031, 0.68778, 0.50348, 0.50348, 0.31447, 0.33657, 0.19655, 0.19641, 0.19614, 0.1957, 0.19566, 0.19545, 0.14955, 0.14985, 0, 0, 0, 0, 0, 0.20645, 0.2062, 0.26832, 0.18822, 0.18856, 0.18837, 0.1886, 0.2027, 0.20263, 0.30651, 0.30655, 0.3066, 0.30654, 0.3447, 0.14195, 0.14194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.63365, 0.63449, 0.63603, 0.63493, 0.63566, 0.63552, 0.63481, 0.63392, 0.63371, 0.63213, 0.96502, 0.96484, 0.96538, 0.96346, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière bio": {
men: [0.27781, 0.27769, 0.31171, 0.3553, 0.35504, 0.35487, 0.45837, 0.95731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.55233, 0.5523, 0.55221, 0.55216, 0.55239, 0.55241, 0.36842, 0.36942, 0.37025, 0.37027, 0.37016, 0.36989, 0.36989, 0.37014, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078994, 0.03712, 0.037037, 0.036358, 0.035144, 0.033699, 0.033767, 0.033771, 0.033766, 0.034969, 0.034969, 0.034951, 0.034937, 0.034894, 0.052588, 0.2616, 0.26208, 0.30395, 0.4329, 0.96138, 0.96104, 0.95996, 0.96009, 0.96025, 0.96005, 0.96275, 0.96351, 0.96345, 0.94909, 0.51515, 0.51491, 0.51567, 0.51584, 0.51622, 0.51655, 0.51738, 0.51724, 0.51724, 0.51705, 0.48758, 0.48694, 0.48758, 0.48876, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95771, 0.95963, 0.95974, 0.95961, 0.9595, 0.9595, 0.95901, 0.95863, 0.95745, 0.9574, 0.95661, 0.95835, 0.9574, 0.95856, 0, 0, 0, 0, 0, 0, 0.94904, 0.94978, 0.94972, 0.94909, 0.95085, 0.95041, 0.95182, 0.95212, 0.95283, 0.95345, 0.95497, 0.95471, 0.95471, 0.95437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture biologique": {
men: [0.18913, 0.16956, 0.14588, 0.14507, 0.16784, 0.16913, 0.16153, 0.17197, 0.20283, 0.23125, 0.21564, 0.1903, 0.179, 0.22349, 0.23133, 0.30791, 0.32171, 0.3468, 0.32316, 0.331, 0.36782, 0.46689, 0.41785, 0.39049, 0.37416, 0.38635, 0.36147, 0.25557, 0.31044, 0.28649, 0.27136, 0.25572, 0.26282, 0.27894, 0.22703, 0.14746, 0.13806, 0.15121, 0.15134, 0.1346, 0.12268, 0.17987, 0.14905, 0.15746, 0.14279, 0.12597, 0.10534, 0.089128, 0.087144, 0.087096, 0.08975, 0.082547, 0.07755, 0.074608, 0.070751, 0.055342, 0.045066, 0.046729, 0.061729, 0.066359, 0.072815, 0.087919, 0.13511, 0.15844, 0.16297, 0.1462, 0.14841, 0.15678, 0.15538, 0.16916, 0.16624, 0.17938, 0.18079, 0.17777, 0.18118, 0.17531, 0.12147, 0.088788, 0.074427, 0.14406, 0.18839, 0.18871, 0.21071, 0.18108, 0.19222, 0.1716, 0.16781, 0.1714, 0.17009, 0.16517, 0.22058, 0.27966, 0.28423, 0.30595, 0.25844, 0.28073, 0.29798, 0.53662, 0.46562, 0.36611, 0.23773, 0.21788, 0.20235, 0.22258, 0.18992, 0.17846, 0.16674, 0.13984, 0.11255, 0.10769], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits bio": {
men: [0.13594, 0.13588, 0.15538, 0.15545, 0.15508, 0.17436, 0.17132, 0.17971, 0.13575, 0.13936, 0.1546, 0.15467, 0.20267, 0.29313, 0.43546, 0.48023, 0.51891, 0.51864, 0.49911, 0.41167, 0.4429, 0.59084, 0.58395, 0.41031, 0.40494, 0.35897, 0.31313, 0.18516, 0.14819, 0.1469, 0.13841, 0.13192, 0.13398, 0.14109, 0.091326, 0.077726, 0.077265, 0.0794, 0.088733, 0.091224, 0.084483, 0.073694, 0.049291, 0.049545, 0.048084, 0.0434, 0.042447, 0.045955, 0.043197, 0.049778, 0.065846, 0.10464, 0.099182, 0.079266, 0.081771, 0.089067, 0.11258, 0.11259, 0.11257, 0.12959, 0.13271, 0.13211, 0.15424, 0.14592, 0.16796, 0.14828, 0.12488, 0.14046, 0.14274, 0.15182, 0.14811, 0.1649, 0.17678, 0.17564, 0.17596, 0.16742, 0.16533, 0.16193, 0.12913, 0.12813, 0.15512, 0.17181, 0.18112, 0.15016, 0.13238, 0.14741, 0.14146, 0.14378, 0.17276, 0.15714, 0.18425, 0.23507, 0.17021, 0.20757, 0.21781, 0.22753, 0.23063, 0.24532, 0.27187, 0.25643, 0.23439, 0.2453, 0.22362, 0.30829, 0.31016, 0.27293, 0.35593, 0.31511, 0.32479, 0.2728], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture conventionnelle": {
men: [0.22872, 0.22862, 0.27047, 0.30224, 0.30202, 0.30187, 0.20602, 0.20632, 0.26266, 0.10574, 0.10579, 0.10584, 0.16787, 0.97266, 0.97067, 0.52991, 0.45967, 0.45943, 0.46009, 0.62927, 0.62738, 0.62626, 0.62657, 0.54019, 0.52724, 0.52724, 0.45477, 0.51027, 0.51023, 0.61997, 0.56279, 0.53125, 0.53127, 0.41943, 0.3621, 0.44537, 0.4454, 0.49039, 0.49892, 0.49892, 0.56823, 0.33987, 0.33905, 0.37471, 0.41664, 0.085679, 0.085679, 0.068628, 0.073322, 0, 0.079591, 0.07948, 0.079302, 0.079286, 0.074562, 0.072837, 0.072983, 0.072991, 0.072981, 0.17493, 0.17493, 0.30051, 0.18497, 0.16786, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tourisme vert": {
men: [0.080367, 0.080331, 0.091174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51199, 0.51272, 0.51314, 0.95926, 0.95754, 0.95802, 0.95869, 0.95843, 0.95843, 0.95816, 0.95824, 0.95818, 0.34837, 0.34834, 0, 0, 0, 0, 0, 0, 0, 0.36686, 0.36686, 0.3671, 0.36685, 0.36597, 0.9604, 0.96003, 0.95989, 0.95989, 0.95984, 0.95855, 0.95858, 0.9579, 0.95657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fruits et légumes bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17334, 0.32184, 0.31731, 0.29759, 0.29372, 0.29373, 0.29376, 0.29066, 0.31407, 0.31409, 0.31399, 0.31377, 0.31377, 0.32249, 0.5523, 0.23329, 0.24962, 0.41664, 0.50344, 0.50344, 0.50341, 0.9645, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27608, 0.94978, 0.94972, 0.94909, 0.95085, 0.95041, 0.95182, 0.95212, 0.95283, 0.95345, 0.95497, 0.95471, 0.95471, 0.95437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nuage de fumée": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96134, 0.96129, 0.9605, 0.96225, 0.96129, 0.96246, 0.96328, 0.96294, 0.96186, 0.96199, 0.96215, 0.96195, 0.96204, 0.96279, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93429, 0.93599, 0.93507, 0.9362, 0.937, 0.93667, 0.93562, 0.93575, 0.9359, 0.9357, 0.93579, 0.93653, 0.93647, 0.93585, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95998, 0.96136, 0.96214, 0.95926, 0.95754, 0.95802, 0.95869, 0.95843, 0.95843, 0.95816, 0.95824, 0.95818, 0.95802, 0.95793, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"touchés par la sécheresse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95771, 0.95963, 0.95974, 0.95961, 0.9595, 0.9595, 0.95901, 0.95863, 0.95745, 0.9574, 0.95661, 0.95835, 0.9574, 0.95856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits écologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96618, 0.96553, 0.96732, 0.96688, 0.96831, 0.96862, 0.96934, 0.96997, 0.97151, 0.97125, 0.97125, 0.9709, 0.97189, 0.61301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"somnolence": {
men: [0.025357, 0.016314, 0.0087958, 0.0087996, 0.0086666, 0.0091761, 0.010203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35177, 0.4833, 0.4842, 0.50189, 0.5222, 0.52237, 0.52276, 0.52309, 0.52393, 0.52379, 0.97275, 0.9724, 0.97338, 0.9721, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025653, 0.025648, 0.025663, 0.025612, 0.025641, 0.025396, 0.025396, 0.036857, 0.1356, 0.226], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"résidus de pesticides": {
men: [0.079369, 0.12995, 0.2425, 0.24261, 0.24243, 0.22031, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.041335, 0.039402, 0.039404, 0.040943, 0.039137, 0.039224, 0.039227, 0.039215, 0.039187, 0.029532, 0.029551, 0.029531, 0.049987, 0.052882, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17794, 0.47713, 0.47711, 0.47679, 0.47767, 0.47745, 0.47816, 0.47831, 0.47867, 0.47898, 0.34798, 0.54889, 0.54889, 0.54869, 0.48333, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surface agricole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11236, 0.1124, 0.10873, 0.18348, 0.22527, 0.28277, 0.31733, 0.41966, 0.41944, 0.42004, 0.42038, 0.46132, 0.4605, 0.46073, 0.35364, 0.35355, 0.38719, 0.16995, 0, 0, 0, 0.080789, 0.073694, 0.070746, 0.068029, 0.063079, 0.061101, 0.061105, 0.062226, 0.062182, 0.05435, 0.054386, 0.046774, 0.062677, 0.054512, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40397, 0.28251, 0.28227, 0.2854, 0.2705, 0.28269, 0.28293, 0.27722, 0.30511, 0.27714, 0.31584, 0.31578, 0.28208, 0.30402, 0.026181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098873, 0.089357, 0.089204, 0.086346, 0.094126, 0.090091, 0.089965, 0.084543, 0.1041, 0.18322, 0.18318, 0.18328, 0.22593, 0.2861, 0.06222, 0.076575, 0.061091, 0.065224, 0.065192], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"poisson sauvage": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9706, 0.97189, 0.97424, 0.97257, 0.97369, 0.97347, 0.97238, 0.97102, 0.9707, 0.96828, 0.80312, 0.80297, 0.80342, 0.80182, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coton bio": {
men: [0, 0, 0.11488, 0.11493, 0.57269, 0.64745, 0.64787, 0.64881, 0.78548, 0.55332, 0.55355, 0.49376, 0.39109, 0.3414, 0.3407, 0.34099, 0.31942, 0.31926, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14404, 0.14418, 0.1323, 0.13248, 0.11509, 0.16033, 0.16051, 0.16048, 0.24718, 0.24684, 0.19837, 0.20077, 0.10067, 0.10065, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cordon ombilical": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.87813, 0.87726, 0.87832, 0.60971, 0.60949, 0.60881, 0.60889, 0.60899, 0.60886, 0.60892, 0.6094, 0.60936, 0.60896, 0.64666, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marées vertes": {
men: [0, 0, 0.041201, 0.041219, 0.042929, 0.11609, 0.38119, 0.95435, 0.9552, 0.95491, 0.95531, 0.95575, 0.95637, 0.95927, 0.9573, 0.95812, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mode de production": {
men: [0.16895, 0.1594, 0.31779, 0.31793, 0.30472, 0.33953, 0.36395, 0.39777, 0.4419, 0.44177, 0.37065, 0.37082, 0.3348, 0.35644, 0.37518, 0.43017, 0.12862, 0.12856, 0.14895, 0.14612, 0.11157, 0.29971, 0.22875, 0.21366, 0.21652, 0.21652, 0.20975, 0.18817, 0.1608, 0.14924, 0.14277, 0.14283, 0.14283, 0.12593, 0.13549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.016413, 0.013554, 0.01337, 0.014042, 0.013871, 0.016392, 0.014295, 0.014689, 0.011894, 0.013179, 0.013655, 0.013413, 0.014218, 0.016863, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0058103, 0.0054615, 0.0075129], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût environnemental": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19784, 0.17248, 0.15757, 0.21573, 0.19889, 0.1989, 0.2522, 0.23, 0.23051, 0.23053, 0.2185, 0.21835, 0.21835, 0.24832, 0.098649, 0.11537, 0.13211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49553, 0.49563, 0.49553, 0.54152, 0.45736, 0.45789, 0.45814, 0.45814, 0.50355, 0.50322, 0.50297], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vélos électriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12225, 0.12222, 0.12222, 0.12219, 0.14446, 0.39847, 0.60159, 0.60153, 0.60178, 0.60181, 0.60186, 0.60351, 0.60485, 0.60489, 0.97039, 0.53501, 0.53501, 0.53536, 0.10648, 0.10623, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bilan écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96859, 0.96843, 0.96834, 0.96875, 0.96878, 0.96887, 0.97152, 0.2885, 0.25441, 0.25434, 0.25415, 0.25415, 0.25432, 0.25415, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"amidon": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085606, 0.13913, 0.13871, 0.13846, 0.24336, 0.24353, 0.24346, 0.24346, 0.2434, 0.24342, 0.42824, 0.95268, 0.21603, 0.21612, 0.12104, 0.12106, 0.029001, 0.027963, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47053, 0.40161, 0.40161, 0.40141, 0.40125, 0.34373, 0.34371, 0.16613, 0.16643, 0.16627, 0.16647, 0.17482, 0.17476, 0.18247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"commerce équitable": {
men: [0.027922, 0.02791, 0.034117, 0.0083003, 0.0082943, 0.0075374, 0.0077514, 0.0091972, 0.008991, 0.0073537, 0.0074109, 0.0079061, 0.0087315, 0.0092873, 0.0084809, 0.007948, 0, 0.025509, 0.025545, 0.027757, 0.028974, 0.13112, 0.13446, 0.18781, 0.186, 0.1955, 0.15606, 0.13834, 0.22969, 0.26461, 0.26458, 0.22343, 0.21206, 0.20482, 0.18699, 0, 0, 0, 0.050366, 0.050366, 0.1536, 0.19764, 0.11436, 0.1088, 0.10244, 0.10242, 0.10612, 0.15033, 0.15013, 0.11474, 0.097892, 0.08957, 0.067733, 0.04839, 0.015895, 0.015448, 0.018192, 0.018318, 0.01825, 0.018248, 0.018248, 0, 0, 0, 0, 0, 0, 0, 0, 0.034659, 0.033934, 0.032251, 0.03338, 0.033386, 0.032824, 0.030069, 0.030676, 0.03148, 0.080429, 0.079216, 0.079179, 0.080539, 0.098921, 0.07223, 0.075081, 0.0821, 0.082078, 0.07955, 0.073755, 0.088837, 0.085206, 0.090707, 0, 0, 0, 0, 0, 0.12606, 0.12602, 0.1257, 0.12115, 0.12711, 0.14113, 0.1229, 0.13053, 0.15403, 0.11943, 0.12765, 0.12756, 0.12165], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"troubles digestifs": {
men: [0.015081, 0.019533, 0.019537, 0.019545, 0.019531, 0.019521, 0.022533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36687, 0.3668, 0.36701, 0.36628, 0.95341, 0.95395, 0.95395, 0.95561, 0.95498, 0.95451], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
