var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"lobby pétrolier": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26039, 0.4439, 0.4439, 0.4439, 0.44377, 0.44259, 0.44272, 0.44322, 0.33741, 0.33741, 0.33741, 0.33741, 0.33741, 0.57506, 0, 0, 0, 0, 0, 0, 0, 0.37818, 0.50064, 0.50064, 0.50064, 0.50064, 0.38508, 0.38557, 0.38557, 0.38641, 0.38696, 0.38696, 0.38606, 0.47811, 0.61198, 0, 0, 0, 0.67378, 0.67378, 0.96907, 0.96858, 0.27027, 0.26951, 0.26944, 0.26944, 0.26924, 0.26917, 0.27017, 0.2592, 0.2592, 0.24635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34481, 0.3177, 0.3177, 0.33572, 0.33572, 0.33572, 0.33572, 0.33572, 0.33581, 0.33581, 0.33581, 0.33581, 0.33581, 0.33724, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux profondes": {
men: [0.24358, 0.26822, 0.272, 0.26732, 0.27514, 0.21141, 0.19849, 0.19397, 0.16648, 0.15894, 0.16266, 0.16437, 0.17779, 0.064534, 0.11529, 0.098869, 0.067236, 0.065885, 0.064797, 0.10927, 0.17629, 0.17803, 0.16251, 0.16715, 0.16968, 0.1723, 0.16103, 0.17707, 0.16658, 0.1733, 0.17083, 0.18789, 0.1946, 0.16225, 0.044235, 0.042549, 0.11246, 0.10487, 0.10487, 0.10487, 0.12816, 0.13302, 0.10313, 0.10313, 0.1293, 0.12949, 0.12949, 0.22992, 0.25414, 0.53873, 0.57351, 0.60221, 0.60221, 0.55514, 0.50008, 0.44229, 0.45702, 0.43198, 0.54604, 0.56156, 0.56156, 0.58172, 0.506, 0.27966, 0.26431, 0.26587, 0.26587, 0.27369, 0.27811, 0.29431, 0.28805, 0.29592, 0.11927, 0.083848, 0.083848, 0, 0.075787, 0.1226, 0.29074, 0.3188, 0.3188, 0.3188, 0.33344, 0.3054, 0.2537, 0.21997, 0.21997, 0.20307, 0.20307, 0.19508, 0.15243, 0.17924, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moratoire sur les forages": {
men: [0.10124, 0.10944, 0.17523, 0.13619, 0.1412, 0.14836, 0.15441, 0.15091, 0.17067, 0.18343, 0.18343, 0.18361, 0.19016, 0.13147, 0.12406, 0.12344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24039, 0.40251, 0.79228, 0.79228, 0.61225, 0.61225, 0.61193, 0.61162, 0.61162, 0.57146, 0.62015, 0.62015, 0.641, 0.5396, 0.50588, 0.42334, 0.42334, 0.42334, 0.44262, 0.44262, 0.44296, 0.44334, 0.44299, 0.30943, 0.23251, 0.23251, 0, 0.29732, 0.28896, 0.38527, 0.38527, 0.38527, 0.38527, 0.38527, 0.38527, 0.38527, 0.38537, 0.38537, 0.38537, 0.38537, 0.38537, 0.33481, 0.52751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt boréale": {
men: [0.62235, 0.6222, 0.86926, 0.96683, 0.92502, 0.92546, 0.92556, 0.92595, 0.92735, 0.92941, 0.92941, 0.93028, 0.93205, 0, 0, 0.87383, 0.8749, 0.74766, 0.81497, 0.81473, 0.81256, 0.63995, 0.64068, 0.64068, 0.64068, 0.64068, 0.64068, 0.64068, 0.64167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sables bitumineux": {
men: [0.21865, 0.26388, 0.28955, 0.29511, 0.27434, 0.23429, 0.1907, 0.15453, 0.15477, 0.15884, 0.15884, 0.15899, 0.19298, 0, 0, 0.15793, 0.19391, 0.19391, 0.19391, 0.19385, 0.16209, 0.22845, 0.22872, 0.31745, 0.31745, 0.31745, 0.31745, 0.15359, 0.15383, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités britanniques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41441, 0.48958, 0.53637, 0.53637, 0.53637, 0.53621, 0.6871, 0.6873, 0.9867, 0.9867, 0.9867, 0.9867, 0.9867, 0.9867, 0.97527, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.043468, 0.088665, 0.088665, 0.088665, 0.088624, 0.14581, 0.17879, 0.34772, 0.34772, 0.6037, 0.60355, 0.60355, 0.6031, 0.60295, 0.96997, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chevron": {
men: [0.24184, 0.23921, 0.17481, 0.17481, 0.17327, 0.16598, 0.172, 0.17033, 0.17577, 0.05044, 0.052093, 0.052142, 0.052241, 0.05383, 0.056093, 0.057982, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.090841, 0.27978, 0.36746, 0.61571, 0.64113, 0.64113, 0.68472, 0.68454, 0.71566, 0.53838, 0.53838, 0.50256, 0.50286, 0.50646, 0.50993, 0.45249, 0.45213, 0.23139, 0.14048, 0.14048, 0, 0, 0.27753, 0.39504, 0.39504, 0.44369, 0.44369, 0.38521, 0.30207, 0.26923, 0.21335, 0.15435, 0.16264, 0.14844, 0.14507, 0.14569, 0, 0, 0.057403, 0.05558, 0.038473, 0.039581, 0.042112, 0.045687, 0.042314, 0.049675, 0.050299, 0.053674, 0.053281, 0.050586, 0.051973, 0.05008, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production de pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074343, 0.061182, 0.061182, 0.057857, 0.057857, 0.047805, 0.047088, 0.046073, 0.057841, 0.057923, 0.056963, 0.046573, 0.045599, 0.042818, 0, 0, 0, 0.046476, 0.042826, 0.052928, 0.054306, 0.065138, 0.14294, 0.1429, 0.1465, 0.2203, 0.3031, 0.40538, 0.37803, 0.27504, 0.29739, 0.22823, 0.25516, 0.21379, 0.21397, 0.20127, 0.092982, 0.093108, 0.093108, 0.094083, 0.089307, 0.13197, 0.14761, 0.2085, 0.21328, 0.21328, 0.23294, 0.23375, 0.21057, 0.22823, 0.21001, 0.21001, 0.21001, 0.21001, 0.12815, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage pétrolier": {
men: [0.21973, 0.21967, 0.14979, 0.15822, 0.15548, 0.16051, 0.12844, 0.12322, 0.091936, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055984, 0.043456, 0.043456, 0.043456, 0.026567, 0.023622, 0.023653, 0.031502, 0.030395, 0.030438, 0.030438, 0.027992, 0.028495, 0.064029, 0.042203, 0.048814, 0.045567, 0.045546, 0.086766, 0.077843, 0.077804, 0.077804, 0.13427, 0.13424, 0.13424, 0.16673, 0.22489, 0.16984, 0.16162, 0.1214, 0.13381, 0.13207, 0.13207, 0.19485, 0.19501, 0.27485, 0.22608, 0.22639, 0.22639, 0.22876, 0.12221, 0.49918, 0.55633, 0.57126, 0.57126, 0.57473, 0.57473, 0.57473, 0.57473, 0.55996, 0.5607, 0.5607, 0.5607, 0.55256, 0.56989, 0.29685, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exxon valdez": {
men: [0.073682, 0.11541, 0.12681, 0.18033, 0.18034, 0.14321, 0.047121, 0.043023, 0.038282, 0.037707, 0.03858, 0.019563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35349, 0.51833, 0.51833, 0.54707, 0.54707, 0.42698, 0.42698, 0.4271, 0.4271, 0.4271, 0.4271, 0.4271, 0.42892, 0.66397, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Louisiane": {
men: [0.049866, 0.051873, 0.047978, 0.048429, 0.051512, 0.051687, 0.051576, 0.041894, 0.040232, 0.017194, 0.017994, 0.01931, 0.013021, 0.0055248, 0.005784, 0.0063286, 0.0067168, 0.0073541, 0.0074216, 0.0077148, 0.021533, 0.020405, 0.01207, 0.012629, 0.013429, 0.013552, 0.014236, 0.01323, 0.012863, 0.012594, 0.027572, 0.03649, 0.03052, 0.029905, 0.02173, 0.02571, 0.02345, 0.018198, 0.018304, 0.017977, 0.017816, 0.019655, 0.020757, 0.021494, 0.011475, 0.0053824, 0.0064582, 0.007113, 0.0065789, 0.0060998, 0, 0, 0, 0, 0, 0, 0, 0, 0.034367, 0.034229, 0.03269, 0.031601, 0.03598, 0.041109, 0.049939, 0.051654, 0.047477, 0.048801, 0.053075, 0.062129, 0.057324, 0.067748, 0, 0, 0, 0, 0.24405, 0.45397, 0.45353, 0.46077, 0.62547, 0.4861, 0.4861, 0.37635, 0.45481, 0.20212, 0.20212, 0.20212, 0.18911, 0.18032, 0.067919, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"golfe du Mexique": {
men: [0.03354, 0.037412, 0.037554, 0.040455, 0.040512, 0.03993, 0.037353, 0.036495, 0.03146, 0.025537, 0.028462, 0.027135, 0.022594, 0.012596, 0.010883, 0.015396, 0.011938, 0.01161, 0.011547, 0.010538, 0.017213, 0.016638, 0.014489, 0.014488, 0.014596, 0.015247, 0.016594, 0.016918, 0.017997, 0.0088014, 0.0094177, 0.011914, 0.012849, 0.012284, 0.0095025, 0.011203, 0.013441, 0.012069, 0.011374, 0.010955, 0.010535, 0.010147, 0.0087003, 0.0090122, 0.0091152, 0.0078941, 0.0078919, 0.010249, 0.0071389, 0.017084, 0.035178, 0.039014, 0.042754, 0.045535, 0.047567, 0.05656, 0.070483, 0.070977, 0.089671, 0.093261, 0.093754, 0.099711, 0.10078, 0.077837, 0.053654, 0.065334, 0.070459, 0.077638, 0.088742, 0.078673, 0.071951, 0.081669, 0.039474, 0.031045, 0.031058, 0.016723, 0.11566, 0.26574, 0.26987, 0.29165, 0.29591, 0.2919, 0.28653, 0.27419, 0.25461, 0.23289, 0.23028, 0.23498, 0.23682, 0.20524, 0.1322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût économique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95274, 0.95274, 0.95274, 0.95229, 0.95229, 0.95178, 0.9513, 0.9513, 0.94863, 0.94838, 0.98486, 0.98414, 0.98388, 0.98751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations pétrolières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.097297, 0.22828, 0.22828, 0.22828, 0.22817, 0.36334, 0.36315, 0.41944, 0.41944, 0.41826, 0.41815, 0.41815, 0.9728, 0.58444, 0.4311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitation pétrolière": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.094826, 0.23378, 0.25401, 0.24307, 0.24307, 0.24307, 0.24307, 0.23162, 0.21739, 0.21773, 0.21934, 0.24651, 0.24632, 0.34049, 0.32529, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12753, 0.12753, 0.14485, 0.13887, 0.10448, 0.067819, 0.067801, 0.067801, 0.067751, 0.06329, 0.063523, 0.06378, 0.075448, 0.0763, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97636, 0.96751, 0.5739, 0.5739, 0.5739, 0.5739, 0.5739, 0.42484, 0.42484, 0.28788, 0.28788, 0.28788, 0.28788, 0.28788, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"touchés par la marée noire": {
men: [0.038294, 0.039723, 0.037483, 0.034725, 0.033987, 0.038057, 0.038061, 0.027313, 0.028999, 0.035116, 0.043182, 0.044046, 0.032875, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19035, 0.18862, 0.18844, 0.96657, 0.96657, 0.96657, 0.96657, 0.96657, 0.96657, 0.96683, 0.96683, 0.96683, 0.96683, 0.96683, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût de la marée noire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97183, 0.97901, 0.97747, 0.97673, 0.97673, 0.97861, 0.98344, 0.98344, 0.97908, 0.037821, 0.037821, 0.035985, 0.035985, 0.035985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie pétrolière": {
men: [0.085679, 0.086698, 0.091343, 0.097785, 0.10399, 0.10869, 0.099545, 0.10158, 0.15189, 0.14885, 0.14885, 0.14899, 0.1532, 0.095199, 0.10019, 0.095625, 0.098391, 0.091829, 0.087581, 0.15034, 0.18412, 0.17372, 0.10772, 0.10899, 0.10467, 0.10338, 0.080537, 0.074626, 0.1012, 0.11039, 0.11022, 0.11721, 0.12386, 0.043136, 0.044753, 0.048921, 0.046663, 0.034016, 0.033165, 0.033409, 0.041251, 0.05069, 0, 0, 0, 0, 0, 0, 0, 0.069587, 0.1095, 0.14218, 0.14997, 0.1499, 0.10988, 0.10672, 0.11368, 0.12819, 0.23987, 0.26217, 0.26621, 0.26601, 0.31489, 0.31179, 0.25142, 0.23827, 0.16113, 0.13003, 0.13381, 0.13713, 0.1394, 0.14112, 0.039222, 0.018483, 0.018483, 0.018291, 0.018712, 0.048253, 0.03495, 0.032332, 0.028275, 0.029309, 0.029026, 0.025255, 0.024761, 0.024437, 0.024582, 0.025343, 0.021877, 0.018316, 0.011966, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"halliburton": {
men: [0.16758, 0.15702, 0.15805, 0.15805, 0.15806, 0.12363, 0.11712, 0.11975, 0.13098, 0.097201, 0.094996, 0.087785, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074502, 0.074502, 0.081088, 0.081489, 0.10178, 0.10133, 0.32875, 0.20274, 0.20274, 0.16789, 0.17374, 0.024184, 0.018958, 0.017259, 0, 0, 0, 0, 0.024889, 0.024814, 0.024323, 0.024633, 0.022844, 0.023185, 0.022816, 0.046664, 0.070171, 0.091472, 0.091448, 0.14745, 0.1409, 0.13496, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.52646, 0.44202, 0.44202, 0.44202, 0.31625, 0.28886, 0.24903, 0.2491, 0.22612, 0.22612, 0.22612, 0.23441, 0.23541, 0.23998, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prospection pétrolière": {
men: [0.69282, 0.69265, 0.69339, 0.95518, 0.95523, 0.95569, 0.95579, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19442, 0.19442, 0.14374, 0.1275, 0.1275, 0.1275, 0.13964, 0.16815, 0.20011, 0.20011, 0.21463, 0.21493, 0.21493, 0.21444, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équivalent pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33768, 0.50431, 0.50431, 0.38751, 0.3874, 0.3874, 0.61727, 0.61711, 0.61938, 0.62189, 0.60836, 0.60836, 0.60874, 0.60874, 0.43852, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"milieu marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092414, 0.14836, 0.14836, 0.22665, 0.22659, 0.22659, 0.35426, 0.29243, 0.35385, 0.38763, 0.39072, 0.43603, 0.4363, 0.40879, 0.39785, 0.34536, 0.34508, 0.24168, 0.22818, 0.22474, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage pétrolier en haute mer": {
men: [0.44479, 0.44468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076682, 0.076449, 0.076449, 0.076449, 0.076413, 0.076413, 0.076372, 0.5155, 0.97035, 0.96762, 0.96737, 0.96737, 0.96666, 0.96641, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"quantité de pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048291, 0.060415, 0.049673, 0.036202, 0.036191, 0.039337, 0.024334, 0.024985, 0.024985, 0.024985, 0.024985, 0.024355, 0.023452, 0.022834, 0, 0, 0, 0, 0, 0, 0, 0.29466, 0.29466, 0.29466, 0.29466, 0.34195, 0.4532, 0.60617, 0.60617, 0.60749, 0.60834, 0.60834, 0.60694, 0.60938, 0.97696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"société pétrolière": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36356, 0.36356, 0.36356, 0.36356, 0.23386, 0.1504, 0.11656, 0.12164, 0.12191, 0.12208, 0.12208, 0.1218, 0.12636, 0.11157, 0, 0, 0, 0.036905, 0.040361, 0.047219, 0.06045, 0.057946, 0.057784, 0.057769, 0.057769, 0.057726, 0.055416, 0.060427, 0.060046, 0.21865, 0.38103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24723, 0.24723, 0.24723, 0.22366, 0.25698, 0.25698, 0.19381, 0.2275, 0.25192, 0.25192, 0.26381, 0.26381, 0.31825, 0.32443, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe pétrolière": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.68658, 0.68742, 0.68742, 0.68742, 0.68722, 0.44652, 0.49604, 0.55597, 0.48029, 0.48029, 0.48029, 0.42891, 0.42891, 0.34556, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc de glace": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60994, 0.60994, 0.60723, 0.60723, 0.60723, 0.60723, 0.60723, 0.60723, 0.32052, 0.30024, 0.30089, 0.30131, 0.30131, 0.30062, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barils par jour": {
men: [0.13106, 0.13727, 0.14988, 0.15897, 0.19761, 0.22069, 0.23121, 0.25096, 0.21563, 0.12599, 0.13013, 0.14653, 0.15338, 0.11163, 0.093256, 0.062333, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045338, 0.048261, 0.048261, 0.047095, 0.047136, 0.044612, 0.042107, 0.050507, 0.056514, 0.056549, 0.051154, 0.054575, 0.046053, 0.0427, 0, 0, 0, 0, 0, 0.19255, 0.23657, 0.22902, 0.22902, 0.22902, 0.24341, 0.21732, 0.20013, 0.22918, 0.21335, 0.21335, 0.21335, 0.16967, 0.17083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise scientifique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37083, 0.37094, 0.39949, 0.97948, 0.97948, 0.51411, 0.32765, 0.32765, 0.32815, 0.33057, 0.33005, 0.3298, 0.3298, 0.2542, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
