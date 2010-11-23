var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"pelotes microscopiques": {
men: [0.97412, 0.97412, 0.96957, 0.97024, 0.97024, 0.97537, 0.97429, 0.97429, 0.97013, 0.97033, 0.97487, 0.97302, 0.9732, 0.9725, 0.97674, 0.97674, 0.97842, 0.97797, 0.97751, 0.97671, 0.97361, 0.97361, 0.97921, 0.97919, 0.97736, 0.97727, 0.97616, 0.97888, 0.98017, 0.97985, 0.98055, 0.98104, 0.98162, 0.9827, 0.99014, 0.98811, 0.98621, 0.98807, 0.98751, 0.98409, 0.98357, 0.98286, 0.9784, 0.97883, 0.97883, 0.97786, 0.97786, 0.97419, 0.97439, 0.97709, 0.97463, 0.97193, 0.97215, 0.97408, 0.97154, 0.97029, 0.97029, 0.97013, 0.974, 0.97414, 0.97414, 0.97414, 0.97436, 0.97175, 0.97462, 0.97823, 0.97823, 0.97823, 0.98477, 0.98592, 0.98808, 0.98658, 0.98261, 0.98368, 0.98368, 0.98368, 0.9839, 0.98452, 0.98299, 0.98119, 0.98119, 0.98119, 0.98366, 0.98249, 0.97848, 0.98022, 0.97971, 0.97971, 0.97971, 0.97971, 0.97705, 0.97404, 0.97675, 0.97558, 0.97445, 0.97445, 0, 0, 0, 0, 0, 0, 0.96972, 0.96883, 0.9683, 0.97083, 0.96793, 0.96678, 0.96666, 0.97548], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0.97412, 0.55471, 0.55211, 0.5525, 0.5525, 0.68181, 0.68106, 0.68106, 0.67815, 0.67829, 0.79342, 0.73277, 0.7329, 0.73238, 0.80712, 0.97674, 0.97842, 0.97797, 0.97751, 0.97671, 0.97361, 0.97361, 0.97921, 0.97919, 0.97736, 0.97727, 0.97616, 0.97888, 0.98017, 0.97985, 0.98055, 0.98104, 0.98162, 0.9827, 0.99014, 0.98811, 0.98621, 0.98807, 0.98751, 0.98409, 0.98357, 0.98286, 0.9784, 0.97883, 0.97883, 0.97786, 0.97786, 0.97419, 0.97439, 0.97709, 0.97463, 0.97193, 0.97215, 0.97408, 0.97154, 0.97029, 0.97029, 0.97013, 0.974, 0.97414, 0.97414, 0.97414, 0.97436, 0.97175, 0.97462, 0.97823, 0.97823, 0.97823, 0.98477, 0.98592, 0.98808, 0.98658, 0.98261, 0.98368, 0.98368, 0.98368, 0.9839, 0.98452, 0.98299, 0.98119, 0.98119, 0.98119, 0.98366, 0.98249, 0.97848, 0.98022, 0.97971, 0.97971, 0.97971, 0.97971, 0.97705, 0.97404, 0.97675, 0.97558, 0.97445, 0.97445, 0, 0, 0, 0, 0, 0, 0.96972, 0.96883, 0.9683, 0.97083, 0.96793, 0.96678, 0.96666, 0.97548], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"noyau de la cellule": {
men: [0.98184, 0.98184, 0.97726, 0.97793, 0.97793, 0.56085, 0.47188, 0.47188, 0.46986, 0.52913, 0.424, 0.42472, 0.4248, 0.42449, 0.31732, 0.2717, 0.27217, 0.27204, 0.27191, 0.29905, 0.47976, 0.47976, 0.48121, 0.50085, 0.50204, 0.50199, 0.50142, 0.64609, 0.79586, 0.97786, 0.97856, 0.83782, 0.83831, 0.86656, 0.87313, 0.87134, 0.76975, 0.72874, 0.76756, 0.7649, 0.76449, 0.72944, 0.56619, 0.56644, 0.56644, 0.70453, 0.70453, 0.33033, 0.3304, 0.52157, 0.64607, 0.58553, 0.48846, 0.48944, 0.48816, 0.4882, 0.4882, 0.48812, 0.59928, 0.59936, 0.59936, 0.76101, 0.76118, 0.7547, 0.75693, 0.9784, 0.9784, 0.9784, 0.98494, 0.9866, 0.98426, 0.98277, 0.64517, 0.64587, 0.64587, 0.64587, 0.64419, 0.47779, 0.47704, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31446, 0.51136, 0.51151, 0.51151, 0.64403, 0.64344, 0.73799, 0.73992, 0.98068, 0.97952, 0.9794, 0.58434], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes vivants": {
men: [0.33093, 0.23652, 0.18217, 0.16901, 0.15832, 0.16981, 0.15967, 0.15999, 0.16291, 0.18834, 0.12181, 0.12202, 0.091489, 0.091424, 0.087813, 0.1014, 0.1207, 0.12909, 0.13798, 0.18866, 0.17979, 0.18854, 0.32197, 0.28416, 0.32579, 0.32576, 0.25006, 0.197, 0.32878, 0.32867, 0.32891, 0.32907, 0.31416, 0.32398, 0.3437, 0.38078, 0.29251, 0.20599, 0.25007, 0.2492, 0.26509, 0.33474, 0.25264, 0.10044, 0.098277, 0.09818, 0.099367, 0.076293, 0.074023, 0.074193, 0.074006, 0.082539, 0.057966, 0.058081, 0.096663, 0.051469, 0.052659, 0.077413, 0.074669, 0.07468, 0.07468, 0.06968, 0.071825, 0.10215, 0.10245, 0.11992, 0.11342, 0.10783, 0.064518, 0.12275, 0.11361, 0.20176, 0.21431, 0.21454, 0.20658, 0.24351, 0.34328, 0.28017, 0.25605, 0.1844, 0.21857, 0.26565, 0.24261, 0.13081, 0.14334, 0.12514, 0.14167, 0.14167, 0.15129, 0.12599, 0, 0, 0, 0, 0, 0, 0, 0, 0.12534, 0.14798, 0.13053, 0.10961, 0.17694, 0.21052, 0.29616, 0.28846, 0.24119, 0.26398, 0.26395, 0.26381], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génétique": {
men: [0.22216, 0.22216, 0.22112, 0.19291, 0.19291, 0.27846, 0.25279, 0.24618, 0.25337, 0.26779, 0.21766, 0.12015, 0.10831, 0.1261, 0.086548, 0.07832, 0.11355, 0.11262, 0.086039, 0.071989, 0.087128, 0.088417, 0.10546, 0.10959, 0.11593, 0.11694, 0.10825, 0.095512, 0.10073, 0.11425, 0.083165, 0.078163, 0.09093, 0.10669, 0.14833, 0.1373, 0.10586, 0.09609, 0.11279, 0.11503, 0.10789, 0.13747, 0.14308, 0.13867, 0.15696, 0.17721, 0.17721, 0.14931, 0.095542, 0.092934, 0.15524, 0.15524, 0.12308, 0.1188, 0.17709, 0.21439, 0.17429, 0.16513, 0.1274, 0.12742, 0.12152, 0.11778, 0.1178, 0.13727, 0.12948, 0.098083, 0.09406, 0.09217, 0.072407, 0.054031, 0.084225, 0.0941, 0.11063, 0.11075, 0.10533, 0.08865, 0.10037, 0.083403, 0.08213, 0.099838, 0.083539, 0.086085, 0.11683, 0.11508, 0.072797, 0.053244, 0.054284, 0.054284, 0.058104, 0.066353, 0.050288, 0.088077, 0.083393, 0.078899, 0.12715, 0.12715, 0.096487, 0.098815, 0.15514, 0.17655, 0.12763, 0.12079, 0.1227, 0.1274, 0.12333, 0.09642, 0.10427, 0.11152, 0.11599, 0.11593], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"division cellulaire": {
men: [0, 0, 0, 0, 0, 0.82755, 0.36692, 0.36692, 0.36536, 0.36543, 0.36483, 0.36545, 0.36551, 0.36525, 0.36522, 0.36522, 0.36584, 0.36568, 0.39053, 0, 0, 0, 0.96527, 0.96525, 0.96754, 0.96745, 0.96635, 0.97191, 0.97172, 0.97141, 0.97211, 0.73305, 0.73347, 0.56985, 0.57416, 0.57298, 0.44815, 0.44821, 0.44796, 0.58607, 0.58576, 0.51388, 0.51427, 0.5145, 0.5145, 0.5999, 0.5999, 0.97066, 0.97086, 0.96922, 0.96678, 0.96678, 0.967, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.55023, 0.5506, 0.55143, 0.55241, 0.97279, 0.97279, 0.97279, 0.97279, 0.97705, 0.97404, 0.97675, 0.97558, 0.97445, 0.97445, 0, 0, 0, 0, 0, 0, 0, 0, 0.42675, 0.42786, 0.42658, 0.42608, 0.42603, 0.4258], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moelle osseuse": {
men: [0.57485, 0.57485, 0.57217, 0.57256, 0.57256, 0.57236, 0.57173, 0.57173, 0.63347, 0.43188, 0.43116, 0, 0, 0, 0, 0, 0, 0, 0, 0.10694, 0.1066, 0.086565, 0.11316, 0.11316, 0.11343, 0.081122, 0.08103, 0.081077, 0.14891, 0.32926, 0.28317, 0.28331, 0.28348, 0.20259, 0.20413, 0.2591, 0.25929, 0.25933, 0.25918, 0.51558, 0.51531, 0.62065, 0.62112, 0.37243, 0.7786, 0.77782, 0.77782, 0.77811, 0.77828, 0.98488, 0.88228, 0.8907, 0.8909, 0.89268, 0.81797, 0.41129, 0.41129, 0.41122, 0.41112, 0.41118, 0.41118, 0.41118, 0.41127, 0.15319, 0.062983, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29705, 0.45862, 0.97311, 0.97311, 0.97265, 0.45811, 0.62666, 0.6283, 0.62642, 0.62568, 0.6256, 0.62527], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Micro-organisme unicellulaire": {
men: [0.96987, 0.96987, 0.96534, 0.96601, 0.96601, 0.96566, 0.21435, 0.21435, 0.21344, 0.28512, 0.28464, 0.28513, 0.18019, 0.18006, 0.18004, 0.15166, 0.15192, 0.15185, 0.15178, 0.15174, 0.27415, 0.27415, 0.27498, 0, 0, 0, 0, 0, 0.4119, 0.96079, 0.96148, 0.96196, 0.96252, 0.96284, 0.97014, 0.96815, 0.96885, 0.96898, 0.97682, 0.97343, 0.97292, 0.97136, 0.41846, 0.41864, 0.41864, 0.41823, 0.41823, 0.30262, 0.30269, 0.30218, 0.30142, 0.30142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides aminés": {
men: [0.31809, 0.31809, 0.3166, 0.31682, 0.30904, 0.25464, 0.25436, 0.15381, 0.15315, 0.15319, 0.15293, 0.065877, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18817, 0.18817, 0.18862, 0.15692, 0.20082, 0.20094, 0.42318, 0.42304, 0.31464, 0.29107, 0.29124, 0.42883, 0.43208, 0.37882, 0.29079, 0.29083, 0.36005, 0.41438, 0.3497, 0.42337, 0.33526, 0.33541, 0.43377, 0.47783, 0.40355, 0.2294, 0.22945, 0.26218, 0.21047, 0.18509, 0.10202, 0.10222, 0.12504, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076295, 0.076225, 0.076183, 0.076382, 0.092736, 0.092626, 0.1184, 0.11833], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"processus biologique": {
men: [0.98058, 0.98058, 0.976, 0.97668, 0.97668, 0.97632, 0.97525, 0.97525, 0.97108, 0.97129, 0.95908, 0.96071, 0, 0, 0, 0, 0, 0, 0, 0.95944, 0.9564, 0.9564, 0.95929, 0.95927, 0.96155, 0.96145, 0.22288, 0.22301, 0.22297, 0.44477, 0.44509, 0.44531, 0.44557, 0.34111, 0.27041, 0.15939, 0.15951, 0.15953, 0.15944, 0.15889, 0.22718, 0.16995, 0.17008, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96945, 0.40568, 0.40629, 0.29891, 0.29875, 0.15068, 0.10074, 0.088055, 0.083307, 0.08305, 0.083281, 0.083182, 0.072149, 0.072149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"germes pathogènes": {
men: [0.98467, 0.98467, 0.98007, 0.98075, 0.98075, 0.6525, 0.65178, 0.65178, 0.64899, 0.64913, 0.34103, 0.16897, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078857, 0.08416, 0.091943, 0.084673, 0.081437, 0.081437, 0.073645, 0.06747, 0.057845, 0.0577, 0.13003, 0.13006, 0.15042, 0.15002, 0.17631, 0.15417, 0.15415, 0.21992, 0.22142, 0.22142, 0.21683, 0.24152, 0.31112, 0.31204, 0.20055, 0.20055, 0.20055, 0.20189, 0, 0, 0, 0, 0, 0, 0, 0.4693, 0.4696, 0.46886, 0.46916, 0.46916, 0.46916, 0.46909, 0.4694, 0.47011, 0.97329, 0.97279, 0.97279, 0.97279, 0.97279, 0, 0, 0, 0, 0, 0, 0, 0, 0.22431, 0.22414, 0.2242, 0.2242, 0.26382, 0.26358, 0.26343, 0.26412, 0.26333, 0.26302, 0.26299, 0.26285], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides nucléiques": {
men: [0.98223, 0.98223, 0.97764, 0.97832, 0.97832, 0.97796, 0.97689, 0.97689, 0.97271, 0.97292, 0.96328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17307, 0.17348, 0.17346, 0.15342, 0.15351, 0.15348, 0.15343, 0.1256, 0.11527, 0.11534, 0.25467, 0.2566, 0.25607, 0.35785, 0.22228, 0.22216, 0.22139, 0.26196, 0.43962, 0.27006, 0.27018, 0.32356, 0.35829, 0.35829, 0.23435, 0.2344, 0.23401, 0.27263, 0.27263, 0.27269, 0.27323, 0.27252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96972, 0.96883, 0.9683, 0.97083, 0.96793, 0.96678, 0.21146, 0.21135], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection bactérienne": {
men: [0.97898, 0.97898, 0.97441, 0.97509, 0.97509, 0.97473, 0.97366, 0.97366, 0.9695, 0.97353, 0.97191, 0.96845, 0.96289, 0.9622, 0.9621, 0.48105, 0.11338, 0.069487, 0.069454, 0.11428, 0.11391, 0.11391, 0.11426, 0.050996, 0.044969, 0.044965, 0.044914, 0.04494, 0.087973, 0.093734, 0.14741, 0.33125, 0.33144, 0.20159, 0.20312, 0.2027, 0.20285, 0.20288, 0.63066, 0.62847, 0.32295, 0.16629, 0.096925, 0.091736, 0.09683, 0.096734, 0.089852, 0.080799, 0.068877, 0.068761, 0.068587, 0.068587, 0.029306, 0.029364, 0.032905, 0, 0, 0, 0, 0, 0, 0, 0, 0.33348, 0.33446, 0.33437, 0.33437, 0.33437, 0.23988, 0.24028, 0.23971, 0.2064, 0.20613, 0.20636, 0.20636, 0.28973, 0.28898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"caractéristiques morphologiques": {
men: [0.36296, 0.31464, 0.31317, 0.31339, 0.31339, 0.26217, 0.26188, 0.23673, 0.23572, 0.30724, 0.30673, 0.11811, 0.11813, 0.22634, 0.22632, 0.16047, 0.16075, 0.16067, 0.1606, 0.20914, 0.20847, 0.20941, 0.15669, 0, 0, 0, 0, 0, 0.098948, 0.15702, 0.11186, 0.11192, 0.11198, 0.11202, 0.11287, 0.10198, 0.13069, 0.1744, 0.3341, 0.23093, 0.23081, 0.29663, 0.19302, 0.19311, 0.24473, 0.24448, 0.17451, 0.13854, 0.12942, 0.22863, 0.22805, 0.22805, 0.16262, 0.15883, 0.15841, 0.18032, 0.20217, 0.20214, 0.27925, 0.27929, 0.36094, 0.49154, 0.56115, 0.45325, 0.45459, 0.45446, 0.45446, 0.97434, 0.98085, 0.53295, 0.53169, 0.53088, 0.32276, 0.32311, 0.16858, 0.16858, 0.32507, 0.24853, 0.24815, 0.1629, 0.1629, 0.1629, 0.22982, 0.2059, 0.20621, 0.20657, 0.19083, 0.19083, 0.22119, 0.22119, 0.15535, 0.17973, 0.16042, 0.19574, 0.17156, 0.17156, 0.070007, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091526], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules nerveuses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24015, 0.23977, 0.23995, 0.31197, 0.33956, 0.33922, 0.33922, 0.97563, 0.97584, 0.21352, 0.21298, 0.21298, 0.21303, 0.21346, 0.1393, 0.1306, 0.1306, 0.13058, 0.13054, 0.13056, 0.13056, 0.13056, 0.13059, 0.66174, 0.66369, 0.72928, 0.72928, 0.72928, 0.53755, 0.8384, 0.53358, 0.53277, 0.53209, 0.53266, 0.53266, 0.051752, 0.032602, 0.032622, 0.03121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.81625, 0.81565, 0.81588, 0.81588, 0.8155, 0.81475, 0.8143, 0.37226, 0.37115, 0.37071, 0.37066, 0.37047], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit immunitaire": {
men: [0.47087, 0.47087, 0.46867, 0.469, 0.98387, 0.98351, 0.98243, 0.98243, 0.97446, 0.96658, 0.96498, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44368, 0.44256, 0.33313, 0.3332, 0.33387, 0.33299, 0.33302, 0.33302, 0.53135, 0.46949, 0.46956, 0.46956, 0.46956, 0.46966, 0.24594, 0.24667, 0.50494, 0.50494, 0.50494, 0.50831, 0.50917, 0.50796, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réactions chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45807, 0.35556, 0.59952, 0.2565, 0.25662, 0.25677, 0.19215, 0.12874, 0.075374, 0.075429, 0.075439, 0.14885, 0.14833, 0.14825, 0.13233, 0.13854, 0.1386, 0.15128, 0.15113, 0.13455, 0.1485, 0.18716, 0.28571, 0.22432, 0.22432, 0.10233, 0.10253, 0.10226, 0.15184, 0.15184, 0.15182, 0.13204, 0.13206, 0.16009, 0.16009, 0.16013, 0.2227, 0.22023, 0.35637, 0.35637, 0.30809, 0.26976, 0.15924, 0.15886, 0.15862, 0.22176, 0.222, 0.222, 0.222, 0.37758, 0.30791, 0.39207, 0.26492, 0.26492, 0.33182, 0.46022, 0.46053, 0.46123, 0.46205, 0.46181, 0.46181, 0.46181, 0.46181, 0, 0, 0, 0, 0, 0, 0, 0, 0.14487, 0.14476, 0.1448, 0.1448, 0.14474, 0.1446, 0.12211, 0.19994, 0.30369, 0.30333, 0.30329, 0.30313], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"globules blancs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12481, 0.1594, 0.1594, 0.15988, 0.23982, 0.24039, 0.24036, 0.24009, 0.24023, 0.24018, 0.38417, 0.40899, 0.40919, 0.40943, 0, 0, 0, 0, 0, 0, 0, 0, 0.25777, 0.17011, 0.17019, 0.17118, 0.17101, 0.17101, 0.17108, 0.22692, 0.22654, 0.1184, 0.22657, 0.22662, 0.22707, 0.22648, 0.13625, 0.17764, 0.17761, 0.22405, 0.22408, 0.22408, 0.22408, 0.22413, 0.14347, 0.28209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.248, 0.24817, 0.20031, 0.20067, 0.20056, 0.20056, 0.20056, 0.20056, 0.20144, 0.20082, 0.20138, 0.20114, 0.50199, 0.50199, 0, 0, 0.48011, 0.47975, 0.47989, 0.47989, 0.47966, 0.47922, 0.646, 0.38578, 0.38463, 0.38417, 0.38413, 0.38392], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Rayonnement électromagnétique": {
men: [0.16294, 0.13616, 0.13552, 0.1997, 0.1997, 0.19962, 0.1994, 0.1994, 0.14371, 0.14374, 0.29035, 0.29084, 0.22436, 0.30181, 0.33753, 0.31482, 0.31536, 0.31522, 0.31507, 0.35607, 0.35493, 0.35493, 0.40792, 0.40791, 0.27391, 0.27388, 0.27357, 0.27373, 0.16231, 0.28524, 0.28545, 0.28559, 0.28576, 0.20441, 0.20596, 0.11451, 0.079147, 0.079158, 0.089501, 0.08919, 0.089143, 0.1323, 0.1324, 0.048118, 0.036822, 0.036786, 0.036786, 0.036799, 0.030994, 0.032445, 0.042096, 0.042096, 0.042106, 0.042189, 0.042079, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065852, 0.26304, 0.26264, 0.23706, 0.23732, 0.23732, 0.27237, 0.2956, 0.24498, 0.36139, 0.19994, 0.17193, 0.17193, 0.098611, 0.071759, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19984, 0.28761], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lymphocytes": {
men: [0.22983, 0.22983, 0.25701, 0.25719, 0.35561, 0.35548, 0.28773, 0.29216, 0.271, 0.19164, 0.19133, 0.076422, 0, 0, 0, 0, 0, 0, 0, 0.1083, 0.26779, 0.26779, 0.57839, 0.57838, 0.57976, 0.5797, 0.57904, 0.15648, 0.066568, 0.050918, 0.04484, 0.044862, 0.044888, 0.025372, 0.024844, 0.024793, 0.025148, 0.025152, 0.025137, 0.02505, 0.025037, 0.022301, 0.039631, 0.067709, 0.099345, 0.081746, 0.081746, 0.065176, 0.071929, 0.06578, 0.048614, 0.091114, 0.091135, 0.091316, 0.091077, 0.14549, 0.14549, 0.14547, 0.15725, 0.18038, 0.18038, 0.20874, 0.20879, 0.23251, 0.4362, 0.55568, 0.44343, 0.36816, 0.37062, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076543, 0.068218, 0.064934, 0.064934, 0.10822, 0.10798, 0.10792, 0.10525, 0.10494, 0.10903, 0.10902, 0.1163], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mutations génétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.10084, 0.10086, 0.1007, 0.10087, 0.10594, 0.1577, 0.17727, 0.1645, 0.21085, 0.17983, 0.17975, 0.19502, 0.30039, 0.30039, 0.1134, 0.1134, 0.11367, 0.11365, 0.11353, 0.11359, 0.11357, 0.1287, 0, 0, 0, 0.26553, 0.26755, 0.25645, 0.25664, 0.1414, 0.14131, 0.2619, 0.26176, 0.26134, 0.26154, 0.26165, 0.26165, 0.37335, 0.15699, 0.096587, 0.096608, 0.097513, 0.097268, 0.1261, 0.12613, 0, 0, 0, 0, 0.057723, 0.057709, 0.057717, 0.23262, 0.23262, 0.23267, 0.23307, 0.23376, 0.23369, 0.23369, 0.23369, 0.23525, 0.23565, 0.23509, 0, 0, 0, 0, 0, 0, 0, 0.18868, 0.18879, 0.18879, 0.18879, 0.14712, 0.14722, 0.12079, 0.121, 0.12094, 0.12094, 0.12094, 0.24926, 0.25035, 0.24958, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antigène": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95944, 0.9564, 0.9564, 0.95929, 0.95927, 0.96155, 0.96145, 0.24009, 0.24023, 0.24018, 0.13023, 0.11593, 0.11599, 0.11606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025984, 0.025984, 0.028511, 0.048557, 0.048564, 0.048564, 0.048564, 0.048575, 0.057398, 0.059967, 0.081102, 0.21383, 0.21383, 0.21526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47996, 0.31861, 0.52283, 0.32111, 0.32015, 0.31977, 0.31974, 0.31957], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"complications graves": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9641, 0.9641, 0.96394, 0.9637, 0.96384, 0.96384, 0.96384, 0.96405, 0.96571, 0.96856, 0.96828, 0.45187, 0.31397, 0.31607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génome humain": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21009, 0.26805, 0.26825, 0.19432, 0.19421, 0.19353, 0.19343, 0.19312, 0.19327, 0.19335, 0.19335, 0.19316, 0.28834, 0.39025, 0, 0, 0.12307, 0.35552, 0.3556, 0.22661, 0.22601, 0.36403, 0.36403, 0.10555, 0.10552, 0.10554, 0.10554, 0.10554, 0.10556, 0.1168, 0.060777, 0.059825, 0.059825, 0.066453, 0.066897, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22678, 0.22678, 0.22713, 0.38085, 0.38058, 0.3803, 0.3804, 0.28341, 0.31135, 0.31106, 0.47555, 0.47679, 0.47537, 0.4748, 0.21623, 0.21611], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"thérapie génique": {
men: [0.20547, 0.20547, 0.20451, 0.20465, 0.20465, 0.20457, 0.21224, 0.21224, 0.15375, 0.57391, 0.57295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19783, 0.12632, 0.12612, 0.25699, 0.2571, 0.2571, 0.4303, 0.4303, 0.32792, 0.32799, 0.49231, 0.50223, 0.5179, 0.51802, 0.44076, 0.32693, 0.38414, 0.33182, 0.33177, 0.30253, 0.26845, 0.26845, 0.26644, 0.2665, 0.15229, 0.1104, 0.090707, 0.090707, 0.097903, 0.16391, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"facteurs environnementaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97266, 0.97266, 0.9756, 0.97558, 0.9779, 0.9778, 0.67556, 0.67595, 0.67582, 0.61492, 0.49598, 0.41897, 0.41921, 0.41935, 0.22845, 0.22798, 0.22815, 0.22818, 0.22805, 0.22726, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules immunitaires": {
men: [0.1335, 0.1335, 0.085695, 0.085755, 0.085755, 0.085724, 0.085629, 0.085629, 0.10597, 0.10599, 0.10582, 0.13186, 0, 0, 0, 0, 0, 0, 0, 0.26864, 0.12875, 0.12875, 0.1975, 0.1975, 0.19797, 0.19795, 0.19772, 0.3575, 0.35743, 0.35731, 0.35757, 0.35775, 0.35796, 0.16657, 0.35735, 0.35661, 0.35687, 0.35692, 0.35672, 0.35548, 0.35529, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25382, 0.25363, 0.25371, 0.25371, 0.37193, 0.37159, 0.37139, 0.37236, 0.37124, 0.37081, 0.37076, 0.37056], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"neurotransmetteur": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.058906, 0.058919, 0.058821, 0.058921, 0.058932, 0.05889, 0.064531, 0.064531, 0.064642, 0.064613, 0.064582, 0.27743, 0.34833, 0.25591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1998, 0.31677, 0.1943, 0.19427, 0.19422, 0.19425, 0.19425, 0.19247, 0.19251, 0.19284, 0.19341, 0.36888, 0.36888, 0.36888, 0.10393, 0.1041, 0.14573, 0.1455, 0.11835, 0.11848, 0.11848, 0.13671, 0.25241, 0.25257, 0.3868, 0.32642, 0.32642, 0.32642, 0.51405, 0.39291, 0.3935, 0.34207, 0.41604, 0.41604, 0.41604, 0.34445, 0.24628, 0.24552, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14122, 0.24336, 0.24351, 0.9541, 0.95379, 0.95448, 0.95495, 0.95551, 0.95583, 0.96307, 0.9611, 0.9618, 0.96193, 0.96138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
