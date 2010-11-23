var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"sommet de Copenhague": {
men: [0, 0, 0, 0, 0, 0, 0.090619, 0.12007, 0.068699, 0.079408, 0.079388, 0.07954, 0.048987, 0.046528, 0.046555, 0.046565, 0.046634, 0.046684, 0.046684, 0.04404, 0, 0.23714, 0.41233, 0.38779, 0.22898, 0.21569, 0.25331, 0.2608, 0.26094, 0.26014, 0.23505, 0.17787, 0.17787, 0.18016, 0.18001, 0.12552, 0.074921, 0.12554, 0.24855, 0.25153, 0.23769, 0.20894, 0.20838, 0.20539, 0.22328, 0.31287, 0.30574, 0.29796, 0.27854, 0.20949, 0.26448, 0.14497, 0, 0.62454, 0.65512, 0.70381, 0.67282, 0.65153, 0.65062, 0.65046, 0.56759, 0.55744, 0.58231, 0.5859, 0.58594, 0.54738, 0.49919, 0.10184, 0.1021, 0.15458, 0.27692, 0.2785, 0.25165, 0.25945, 0.26095, 0.25376, 0.29974, 0.2812, 0.28116, 0.28863, 0.30466, 0.32161, 0.36198, 0.31916, 0.21354, 0.19873, 0.20165, 0.19053, 0.22419, 0.2474, 0.29544, 0.31611, 0.27698, 0.19466, 0.15509, 0.1527, 0.13899, 0.14308, 0.13243, 0.14133, 0.14478, 0.14482, 0.13901, 0.1391, 0.061514, 0.062431, 0.063388, 0.05624, 0.069236, 0.070497], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"protocole de Kyoto": {
men: [0, 0, 0, 0, 0, 0, 0.028623, 0.025658, 0.033907, 0.032286, 0.12686, 0.1271, 0.13869, 0.19293, 0.19055, 0.19124, 0.20304, 0.20326, 0.20326, 0.19681, 0.19753, 0.20979, 0.22895, 0.23108, 0.20089, 0.20089, 0.30083, 0.19524, 0.20191, 0.20767, 0.1151, 0.1046, 0.1046, 0.097088, 0.10179, 0.10176, 0.047311, 0.038932, 0.039, 0.039, 0.085512, 0.089985, 0.075818, 0.07596, 0.079168, 0.082439, 0.073112, 0.076791, 0.072201, 0.065045, 0.063978, 0.079378, 0.079221, 0.073656, 0, 0, 0, 0.20802, 0.20091, 0.20086, 0.20703, 0.24842, 0.26068, 0.25973, 0.25678, 0.26341, 0.26368, 0.31582, 0.39483, 0.47813, 0.50049, 0.41193, 0.41582, 0.37249, 0.33932, 0.2732, 0.24259, 0.20958, 0.1646, 0.16215, 0.16215, 0.14617, 0.10014, 0.064341, 0.051427, 0.051772, 0.038898, 0.10375, 0.11675, 0.11191, 0.12202, 0.22246, 0.29547, 0.40702, 0.4655, 0.45819, 0.54222, 0.57805, 0.55733, 0.5637, 0.55568, 0.4713, 0.42981, 0.42524, 0.37888, 0.32094, 0.36377, 0.16852, 0.026819, 0.029798], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"carbone": {
men: [0.074599, 0.063946, 0.069672, 0.068983, 0.068965, 0.073381, 0.066666, 0.046018, 0.051153, 0.057729, 0.050976, 0.042922, 0.03286, 0.033902, 0.035769, 0.036163, 0.033868, 0.034254, 0.034476, 0.048904, 0.050317, 0.051952, 0.053464, 0.049827, 0.051158, 0.051476, 0.051199, 0.053459, 0.048998, 0.059506, 0.049606, 0.051271, 0.05149, 0.042562, 0.039828, 0.039282, 0.035787, 0.03443, 0.035455, 0.035416, 0.033174, 0.028851, 0.03635, 0.051314, 0.051501, 0.051507, 0.050209, 0.03532, 0.030668, 0.036182, 0.03414, 0.032752, 0.031847, 0.031097, 0.030813, 0.033022, 0.036168, 0.046447, 0.065607, 0.064123, 0.063902, 0.071944, 0.079509, 0.087621, 0.084676, 0.091859, 0.092991, 0.094958, 0.11216, 0.10932, 0.10379, 0.082863, 0.063126, 0.062872, 0.057096, 0.049596, 0.04586, 0.037864, 0.048978, 0.055168, 0.055712, 0.05478, 0.039303, 0.042036, 0.036918, 0.036365, 0.036912, 0.051686, 0.056526, 0.10813, 0.12738, 0.15519, 0.1407, 0.13025, 0.14554, 0.14855, 0.17705, 0.22934, 0.22135, 0.20864, 0.22385, 0.20779, 0.21301, 0.16041, 0.13801, 0.1194, 0.13014, 0.13027, 0.11232, 0.10948], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gaz à effet de serre": {
men: [0.05785, 0.047087, 0.047343, 0.047476, 0.04743, 0.051029, 0.02353, 0.023945, 0.027278, 0.014885, 0.014458, 0.013557, 0.03003, 0.027533, 0.048957, 0.070133, 0.084528, 0.075215, 0.072174, 0.069595, 0.084374, 0.088814, 0.1107, 0.11135, 0.11098, 0.11497, 0.096136, 0.11038, 0.078741, 0.053911, 0.035145, 0.039258, 0.039404, 0.064307, 0.041659, 0.042214, 0.017026, 0.024955, 0.02554, 0.026117, 0.028272, 0.040103, 0.039473, 0.040905, 0.0449, 0.045519, 0.047667, 0.02512, 0.026536, 0.020434, 0.019525, 0.041629, 0.05799, 0.057886, 0.055471, 0.067603, 0.087021, 0.097645, 0.093768, 0.097391, 0.098486, 0.089913, 0.085951, 0.089639, 0.097073, 0.083103, 0.080777, 0.094916, 0.11937, 0.11375, 0.11054, 0.093419, 0.085713, 0.088205, 0.084413, 0.094171, 0.10446, 0.1155, 0.11007, 0.10128, 0.097116, 0.088298, 0.070423, 0.060538, 0.048483, 0.050209, 0.088472, 0.080878, 0.07821, 0.14108, 0.15334, 0.13966, 0.11213, 0.1198, 0.11631, 0.11592, 0.12761, 0.12386, 0.12907, 0.12262, 0.090429, 0.091079, 0.095597, 0.039422, 0.021249, 0.020213, 0.02686, 0.019822, 0.018985, 0.019623], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduction des émissions": {
men: [0.087447, 0, 0.084096, 0.08413, 0.08413, 0.079624, 0.12356, 0.1041, 0.12054, 0.096799, 0.09856, 0.098748, 0.10356, 0.11379, 0.12712, 0.12646, 0.11677, 0.11689, 0.11689, 0.094078, 0.052144, 0.062851, 0.13253, 0.16012, 0.15958, 0.15958, 0.15992, 0.15281, 0.14544, 0.1471, 0.087362, 0.087357, 0.087357, 0.14249, 0.15699, 0.15694, 0, 0, 0, 0, 0, 0, 0, 0.32607, 0.25066, 0.25069, 0.25059, 0.19623, 0.19633, 0.18377, 0.11443, 0.098416, 0.10637, 0.10618, 0.12366, 0.38578, 0.36658, 0.32439, 0.34483, 0.34474, 0.33222, 0.35818, 0.35803, 0.32567, 0.41195, 0.46448, 0.48942, 0.46137, 0.37475, 0.13689, 0.19126, 0.15478, 0.15494, 0.14501, 0.14668, 0.13149, 0.18459, 0.16515, 0.16512, 0.16513, 0.14274, 0.14811, 0.18666, 0.14611, 0.10589, 0.12544, 0.1234, 0.13308, 0.13037, 0.31324, 0.2108, 0.24295, 0.23062, 0.19822, 0.19815, 0.19817, 0.20507, 0.20752, 0.21533, 0.31576, 0.29288, 0.29298, 0.30531, 0.12818, 0.16019, 0.1813, 0.18303, 0.1982, 0.19819, 0.24474], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Kyoto": {
men: [0, 0, 0.11443, 0.11447, 0.11447, 0.064262, 0.064351, 0.064473, 0.076118, 0.077605, 0.076479, 0.076625, 0.076539, 0.076541, 0.076586, 0.14524, 0.10038, 0.10049, 0.10049, 0.19783, 0.1632, 0.12687, 0.12674, 0.15824, 0.15834, 0.15834, 0.15868, 0.15839, 0.14418, 0.058452, 0.058282, 0.058279, 0.058279, 0.059534, 0.069981, 0.086904, 0.074985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074797, 0.073351, 0.073247, 0.1356, 0.12444, 0.16569, 0.16565, 0.16565, 0.33088, 0.628, 0.71851, 0.67413, 0.67418, 0.67488, 0.55233, 0.69167, 0.69191, 0.69132, 0.64261, 0.64329, 0.49954, 0.49961, 0.37877, 0.25896, 0.13823, 0.14519, 0.13128, 0.13128, 0.14175, 0, 0, 0, 0, 0, 0, 0.0098421, 0.011123, 0.012821, 0.014365, 0.056299, 0.060163, 0.051758, 0.048072, 0.10336, 0.11, 0.056162, 0.05747, 0.056008, 0.046255, 0.024412, 0.023719, 0.022738, 0.022746, 0, 0, 0.01219, 0.012534], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15694, 0.15684, 0.19392, 0.25981, 0.25941, 0.25905, 0.25898, 0.25898, 0.50546, 0.50524, 0.59822, 0.59827, 0.4305, 0.49574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24972, 0.24977, 0.32877, 0.3288, 0.46417, 0.46358, 0.46317, 0.46269, 0.46168, 0.46183, 0.94528, 0.9459, 0.94524, 0.94557, 0, 0, 0.94449, 0.9444], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement urbain": {
men: [0.36912, 0.36908, 0.36923, 0.36938, 0.36938, 0.36981, 0.37032, 0.37103, 0.57881, 0.57902, 0.57888, 0.57998, 0.57933, 0.96557, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46226, 0.46214, 0.54205, 0.54154, 0.54131, 0.57624, 0.57629, 0.47334, 0.47383, 0.47429, 0.47368, 0.41947, 0.49788, 0.49762, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014715, 0.01266, 0.020869, 0.018984, 0.018979, 0.018983, 0.018976, 0.018978, 0.019919, 0.014057, 0.014045, 0.012948, 0.014401, 0.014406, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby pétrolier": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22817, 0.22739, 0.22739, 0.22788, 0.22746, 0.38728, 0.95035, 0.94759, 0.94754, 0.94754, 0.94798, 0.5382, 0.37801, 0.23153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25145, 0.2511, 0.25104, 0.25104, 0.2508, 0.2507, 0.25066, 0.23954, 0.23956, 0.22791, 0.30557, 0.30518, 0.30528, 0.30502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48392, 0.32916, 0.32938, 0.32915, 0.23003, 0.23007, 0.23007, 0.23006, 0.23004], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"négociations sur le climat": {
men: [0.026615, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12303, 0.1231, 0.12313, 0.11545, 0.11557, 0.11557, 0.12342, 0.17054, 0.33127, 0.33092, 0.43425, 0.42178, 0.42178, 0.42269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.062053, 0.11131, 0.10961, 0.1096, 0.11663, 0.11632, 0.11654, 0.1394, 0.14489, 0.13528, 0.24136, 0.2074, 0.20731, 0.26596, 0.19525, 0, 0, 0.060279, 0.054849, 0.054954, 0.049191, 0.049123, 0.046441, 0.051478, 0.043297, 0.14094, 0.13894, 0.10552, 0.098311, 0.098412, 0.13686, 0.15038, 0.20465, 0.23795, 0.23606, 0.19774, 0.25613, 0.24718, 0.24436, 0.26371, 0.25636, 0.30288, 0.32214, 0.32215, 0.30328, 0.30464, 0.2328, 0.18774, 0.19807, 0.22908, 0.16217, 0.17077, 0.23703, 0.11293, 0.10518, 0.10687, 0.05782, 0.055435, 0.05544, 0.056526, 0.058901, 0.069994, 0.069921, 0.069769, 0.069791, 0.05718, 0, 0, 0.02668, 0.025037, 0.030661, 0.031939, 0.026827], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92841, 0.92936, 0.93026, 0.92906, 0.92938, 0.92859, 0.92811, 0.9291, 0.92897, 0.9291, 0.92994, 0.92921, 0.9294, 0.92926, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écosystèmes naturels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053932, 0.10269, 0.1026, 0.15934, 0.15932, 0.22057, 0.22058, 0.22081, 0.94641, 0.94519, 0.94551, 0.94471, 0.94422, 0.94523, 0.94125, 0.93483, 0.93567, 0.93494, 0.93513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.059711, 0.060251, 0.063199, 0.063198, 0.065572, 0.065566], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.061683, 0.11654, 0.11643, 0.17919, 0.17916, 0.24567, 0.24569, 0.24594, 0.24618, 0.24586, 0.24595, 0.94471, 0.94422, 0.94523, 0.94125, 0.93483, 0.93567, 0.93494, 0.93513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"révolution énergétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29015, 0.49818, 0.49818, 0.49771, 0.4975, 0.49742, 0.49746, 0.68459, 0.6853, 0.68596, 0.68508, 0.63636, 0.63582, 0.63549, 0, 0, 0, 0, 0, 0.4224, 0.42234, 0.42235, 0.2753, 0.27534, 0.27575, 0.32798, 0.32838, 0.32931, 0.329, 0.32891, 0.32886, 0.32833, 0.32849, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements photovoltaïques": {
men: [0, 0, 0.96424, 0.96464, 0.96464, 0.96577, 0.9671, 0.96895, 0.96896, 0.96931, 0.96907, 0.97092, 0.96983, 0.4564, 0.45667, 0.45676, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"émissions de carbone": {
men: [0.28829, 0.27291, 0.28946, 0.26389, 0.26107, 0.29717, 0.05436, 0.082688, 0.20973, 0.35127, 0.24028, 0.24074, 0.25787, 0.20112, 0.17776, 0.13336, 0.091517, 0.091615, 0.093104, 0.092949, 0.076995, 0.076919, 0.086874, 0.06501, 0.068908, 0.068908, 0.071585, 0.066351, 0.065528, 0.070661, 0.085048, 0.085043, 0.085043, 0.09938, 0.092317, 0.084716, 0.052648, 0.049588, 0.049675, 0.049675, 0.049669, 0.05777, 0.062766, 0.06432, 0.056495, 0.040046, 0.040031, 0, 0, 0, 0, 0, 0, 0, 0, 0.023272, 0.023317, 0.02328, 0.020526, 0.02613, 0.02613, 0.064924, 0.066994, 0.061957, 0.066461, 0.097954, 0.098054, 0.14251, 0.15473, 0.19729, 0.19713, 0.14693, 0.16609, 0.13391, 0.1224, 0.083993, 0.083927, 0.084276, 0.084428, 0.069141, 0.067362, 0.035221, 0.038703, 0, 0, 0, 0, 0.019342, 0.020658, 0.052328, 0.049216, 0.056512, 0.039032, 0.037199, 0.038324, 0.038529, 0.039084, 0.040469, 0.040433, 0.056242, 0.24235, 0.22269, 0.22664, 0.20571, 0.22004, 0.20245, 0.37704, 0.45945, 0.45945, 0.43136], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dioxyde de carbone": {
men: [0.020942, 0.023088, 0, 0, 0, 0, 0.026715, 0.027464, 0.029137, 0.029405, 0.031468, 0.02821, 0.030003, 0.026518, 0.043244, 0.073822, 0.077654, 0.076639, 0.07938, 0.1425, 0.17049, 0.17032, 0.17014, 0.17986, 0.16826, 0.18795, 0.17674, 0.19308, 0.19463, 0.17479, 0.15386, 0.16044, 0.16044, 0.058317, 0.064833, 0.059363, 0.087527, 0.065193, 0.070103, 0.067202, 0.068313, 0.07267, 0.073477, 0.082124, 0.099158, 0.09917, 0.095266, 0.10074, 0.048703, 0.05489, 0, 0.053024, 0.05292, 0.056975, 0.095834, 0.15278, 0.15851, 0.10792, 0.11004, 0.11002, 0.10844, 0.11406, 0.12591, 0.11883, 0.14281, 0.11388, 0.11228, 0.11029, 0.085926, 0.014476, 0.010992, 0.0111, 0.06643, 0.055605, 0.05661, 0.0514, 0.067588, 0.05949, 0.057634, 0.055074, 0.053648, 0.051081, 0.06322, 0.063679, 0.094687, 0.11357, 0.07948, 0.078307, 0.080061, 0.24501, 0.26062, 0.30701, 0.3003, 0.28578, 0.26052, 0.25662, 0.2526, 0.25748, 0.21229, 0.20428, 0.20006, 0.22652, 0.22643, 0.12381, 0.11608, 0.09613, 0.10378, 0.099376, 0.11495, 0.11723], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollueurs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20843, 0.1153, 0.1153, 0.079743, 0.052055, 0.032463, 0.030946, 0.030856, 0.030854, 0.031249, 0.031264, 0.031239, 0.03123, 0.031622, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35112, 0.35083, 0.351, 0.19122, 0.16524, 0.14355, 0.14326, 0.12016, 0.10354, 0.1034, 0.10359, 0.09329, 0.09316, 0.071066, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11971, 0.14083, 0.16217, 0.14446, 0.16074, 0.13179, 0.11845, 0.12612, 0.15739, 0.15737, 0.15737, 0.19202, 0.19205, 0.19019, 0.10477, 0.074126, 0.059079, 0.064564, 0.063635, 0.080788, 0.40353, 0.38217, 0.33278, 0.3287, 0.33909, 0.33274, 0.33277, 0.33825, 0.36865, 0.40956, 0.38454, 0.3837, 0.38382, 0.3645, 0.187, 0.084536, 0.14782, 0.092986, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bioterrorisme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93662, 0.93747, 0.93673, 0.93693, 0.93679, 0.93682, 0.93685, 0.93699, 0.93838, 0.49774, 0.49834, 0.49975, 0.49928, 0.49915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70329, 0.70392, 0.70337, 0.70352, 0.70341, 0.93682, 0.93685, 0.93699, 0.93838, 0.49774, 0.49834, 0.49975, 0.49928, 0.49915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pnud": {
men: [0, 0, 0, 0, 0, 0, 0.049717, 0.040032, 0.044969, 0.051436, 0.046045, 0.046133, 0.034032, 0.034033, 0.1218, 0.11773, 0.12508, 0.12286, 0.12286, 0.11805, 0.096548, 0.11126, 0.22059, 0.24411, 0.27898, 0.25647, 0.3994, 0.39867, 0.2492, 0.2754, 0.2746, 0.29159, 0.29159, 0.33477, 0.33451, 0.47843, 0, 0, 0, 0, 0.49269, 0.41055, 0.31536, 0.18959, 0.1902, 0.19023, 0.13617, 0.12857, 0.12863, 0.092484, 0.092561, 0.081905, 0.088896, 0.081598, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050415, 0.050467, 0.053581, 0.058152, 0.12916, 0.14943, 0.17495, 0.20097, 0.24562, 0.24566, 0.31988, 0.31963, 0.31969, 0.37863, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pays en développement": {
men: [0.011094, 0.012591, 0.025524, 0.025987, 0.025987, 0.028355, 0.028211, 0.031434, 0.05767, 0.069234, 0.059352, 0.057855, 0.062179, 0.066049, 0.091686, 0.085523, 0.066989, 0.064761, 0.064289, 0.064038, 0.069623, 0.068258, 0.1364, 0.1365, 0.13951, 0.14103, 0.12658, 0.13949, 0.10119, 0.097343, 0.099785, 0.10353, 0.10437, 0.10726, 0.089212, 0.088851, 0, 0.030031, 0.056372, 0.054465, 0.071793, 0.070237, 0.074035, 0.073061, 0.073807, 0.07147, 0.07074, 0.069731, 0.072294, 0.072453, 0.06801, 0.054725, 0.028043, 0.025862, 0.046916, 0.066228, 0.064281, 0.065418, 0.088694, 0.087795, 0.086233, 0.098909, 0.13285, 0.13542, 0.15948, 0.14842, 0.15142, 0.17694, 0.18176, 0.19194, 0.20243, 0.21145, 0.17997, 0.22866, 0.22425, 0.23212, 0.2001, 0.21814, 0.2086, 0.20532, 0.20704, 0.18936, 0.16186, 0.14982, 0.14331, 0.14181, 0.13254, 0.091217, 0.095067, 0.11243, 0.10801, 0.07486, 0.071461, 0.065235, 0.06514, 0.06516, 0.070985, 0.060482, 0.066263, 0.069947, 0.10616, 0.11167, 0.10932, 0.071788, 0.076221, 0.097065, 0.097816, 0.10781, 0.10891, 0.10588], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"émissions de gaz à effet de serre": {
men: [0.086152, 0.10162, 0.10601, 0.074013, 0.07398, 0.082921, 0.076551, 0.061409, 0.069941, 0.065165, 0.056905, 0.057014, 0.057015, 0.056635, 0.043397, 0.041391, 0.026503, 0.026616, 0.026433, 0.02274, 0.026046, 0.025775, 0.023934, 0.021887, 0.021257, 0.02109, 0.024957, 0.024635, 0.02196, 0.017603, 0.019758, 0.019757, 0.019458, 0.036671, 0.03173, 0.041051, 0.040483, 0.037542, 0.039025, 0.038942, 0.034948, 0.03651, 0.04579, 0.056491, 0.053806, 0.052923, 0.051721, 0.037099, 0.054408, 0.036005, 0.027098, 0.033995, 0.040956, 0.040391, 0.044691, 0.045454, 0.047275, 0.042422, 0.041811, 0.043562, 0.045334, 0.054226, 0.059543, 0.087625, 0.096331, 0.095889, 0.087721, 0.096774, 0.16569, 0.20127, 0.21627, 0.23265, 0.24056, 0.23065, 0.20315, 0.18751, 0.1754, 0.16174, 0.157, 0.16074, 0.16249, 0.16327, 0.12132, 0.090934, 0.070495, 0.052306, 0.062852, 0.066674, 0.074772, 0.082945, 0.078138, 0.091935, 0.10972, 0.091165, 0.089077, 0.085097, 0.097088, 0.11567, 0.11629, 0.12436, 0.11802, 0.11831, 0.11648, 0.10238, 0.10705, 0.086615, 0.073194, 0.073809, 0.075372, 0.079818], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ours polaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053812, 0.053769, 0.17192, 0.17185, 0.17199, 0.17177, 0.078572, 0.078432, 0.087494, 0.012399, 0.012423, 0.012404, 0.012386, 0.012383, 0, 0, 0.047941, 0.047934, 0.047938, 0.087393, 0.094609, 0.0947, 0.094578, 0.51032, 0.50988, 0.50962, 0.51016, 0.51009, 0.51016, 0.56092, 0.094878, 0.17824, 0.17821, 0.058696, 0.058698, 0.058707, 0.058794, 0.058864, 0.058934, 0.059101, 0.059046, 0.05903, 0.059021, 0.058925, 0.22773, 0.13968, 0.11555, 0.39396, 0.39382, 0.39385, 0.39342, 0.39292, 0.39257, 0.39217, 0.23534, 0.23542, 0.23532, 0.23548, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie verte": {
men: [0.043306, 0.027425, 0.027436, 0.027447, 0.027198, 0.028061, 0.026843, 0.028388, 0.028389, 0.0078785, 0.0078766, 0.0078916, 0.0078828, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03373, 0.033444, 0.041666, 0.05531, 0.055212, 0.058804, 0.059475, 0.069255, 0.049338, 0.055486, 0.055473, 0.055472, 0.057658, 0.044225, 0.010632, 0.010738, 0.010722, 0.010821, 0.010832, 0.0095726, 0, 0, 0, 0, 0, 0, 0, 0.013896, 0.064421, 0.071246, 0.1518, 0.1518, 0.15183, 0.23582, 0.32642, 0.48277, 0.62193, 0.62134, 0.62118, 0.67906, 0.74776, 0.82372, 0.34476, 0.34467, 0.28732, 0.28721, 0.28724, 0.25826, 0.21462, 0.036151, 0.073046, 0.066011, 0.062609, 0.062584, 0.053946, 0.033726, 0.038616, 0.076875, 0.066154, 0.066153, 0.066146], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations autochtones": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048536, 0.048629, 0.064203, 0.035088, 0.035079, 0.035079, 0.035046, 0.034, 0.039754, 0.039757, 0.049712, 0.049763, 0.049811, 0.049747, 0, 0, 0, 0, 0, 0, 0, 0.16756, 0.56958, 0.56949, 0.70331, 0.70334, 0.60733, 0.35763, 0.35806, 0.35849, 0.3595, 0.36782, 0.36772, 0.36767, 0.27103, 0.25515, 0.14602, 0.14598, 0, 0, 0, 0, 0, 0.10907, 0.14495, 0.15485, 0.1549, 0.14634, 0.1846, 0.18447, 0.18453, 0.18456, 0.18456, 0.23287, 0.23284], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"objectifs du millénaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.054466, 0.054358, 0.04113, 0.019592, 0.040502, 0.039859, 0.038474, 0.037706, 0.03738, 0.037195, 0.037568, 0.037386, 0.038589, 0.040252, 0.03162, 0.03062, 0.036827, 0.072753, 0.024266, 0.025632, 0.03659, 0.043989, 0.048404, 0.051488, 0.057484, 0.089809, 0.094558, 0.081078, 0.21799, 0.34711, 0.20833, 0.20864, 0.20889, 0.25597, 0.25669, 0.21636, 0.2163, 0.21627, 0.21591, 0.21602, 0.16584, 0.19143, 0, 0, 0, 0, 0, 0, 0, 0.19834, 0.1984, 0.19833, 0.19846, 0.19832, 0.52169, 0.52177, 0.52177, 0.52176, 0.93907], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"productivisme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045954, 0.04491, 0.037131, 0.034228, 0.028414, 0.027378, 0.027878, 0.026595, 0.025935, 0.023169, 0.025137, 0.024579, 0.026012, 0.032607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03253, 0.033806, 0.033758, 0.035077, 0.034038, 0.033871, 0.042052, 0.049154, 0.055618, 0.056581, 0.058441, 0.065237, 0.075166, 0.077405, 0.060872, 0.075164, 0.083917, 0.098667, 0.1036, 0.086293, 0.08437, 0.068668, 0.095462, 0.095387, 0.12047, 0.11574, 0.10918, 0.12246, 0.13175, 0.12577, 0.13204, 0.12354, 0.13201, 0.18893, 0.14982, 0.19204, 0.083493, 0.079405, 0.039643, 0.09316, 0.10016, 0.075147, 0.075154, 0.087784, 0.087672, 0.087594, 0.087504, 0.17991, 0.2051, 0.24519, 0.36841, 0.37091, 0.37546, 0.40465, 0.40464, 0.45296, 0.45291], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution de l' air": {
men: [0, 0, 0, 0, 0, 0, 0.011477, 0.01158, 0.014513, 0.015704, 0.015613, 0.015811, 0.017429, 0.020894, 0.051011, 0.065075, 0.083387, 0.08725, 0.0794, 0.11169, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.020913, 0.02095, 0.018417, 0.018465, 0.043336, 0.052079, 0.091918, 0.09947, 0.11093, 0.11753, 0.11687, 0.092912, 0.09287, 0.096928, 0.054978, 0.05487, 0.087609, 0.095444, 0, 0, 0, 0.30954, 0.37244, 0.37244, 0.37859, 0.43631, 0.43624, 0.43628, 0.45845, 0.45892, 0.43772, 0.41699, 0.41714, 0.41678, 0.36461, 0.08059, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.086038, 0.076567, 0.076594, 0.083913, 0.098807, 0.10113, 0.099429], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
