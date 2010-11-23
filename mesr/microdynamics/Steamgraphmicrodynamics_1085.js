var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"risques professionnels": {
men: [0.17227, 0.17258, 0.17654, 0.17644, 0.17633, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24624, 0.24586, 0.31848, 0.31848, 0.31861, 0.29385, 0.29294, 0.29268, 0.29251, 0.29243, 0.29243, 0.29228, 0.29286, 0.31309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18108, 0.28359, 0.34314, 0.34244, 0.34244, 0.34253, 0.38391, 0.38381, 0.33189, 0.34121, 0.40297, 0.41835, 0.43495, 0.46792, 0.51968, 0.56426, 0.53728, 0.5201, 0.52007, 0.54024, 0.53785, 0.55689, 0.66001, 0.77745, 0.74721, 0.74698, 0.74626, 0.56112, 0.4984, 0.42351, 0.42446, 0.43076, 0.43078, 0.35015, 0.23073, 0, 0.21346, 0.54922, 0.59811, 0.59844, 0.59972, 0.79129, 0.79164, 0.79164, 0.79072, 0.78953, 0.78953, 0.78953, 0.78989, 0.79, 0.71834, 0.36631, 0.57199, 0.57199, 0.57192, 0.8575, 0.85292, 0.85206, 0.85308, 0.85307, 0.85287, 0.85262], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médecins du travail": {
men: [0.073493, 0.084863, 0, 0, 0.087908, 0.087987, 0.099161, 0.099568, 0.12606, 0.12631, 0.16213, 0.14691, 0.17222, 0.37558, 0.41445, 0.41456, 0.41421, 0.41438, 0.35506, 0.31595, 0.31468, 0.31438, 0.47034, 0.46961, 0.55884, 0.65793, 0.42964, 0.18995, 0.20034, 0.38927, 0.32268, 0.32259, 0.32259, 0.34912, 0.34981, 0.35012, 0.21339, 0.21379, 0.099001, 0.098923, 0.11524, 0.10181, 0.084348, 0, 0, 0.14922, 0.24053, 0.2174, 0.22882, 0.23766, 0.34798, 0.44494, 0.50897, 0.4781, 0.48965, 0.49919, 0.50269, 0.50153, 0.5357, 0.53231, 0.50631, 0.54062, 0.5527, 0.60012, 0.58948, 0.40697, 0.36154, 0.38731, 0.38184, 0.41188, 0.40635, 0.43677, 0.39427, 0.39415, 0.42164, 0.38996, 0.3846, 0.32546, 0.26538, 0.32043, 0.33058, 0.31847, 0.30966, 0.24645, 0.3283, 0.29828, 0.35808, 0.34888, 0.3223, 0.34588, 0.34603, 0.46253, 0.52033, 0.47257, 0.71966, 0.71966, 0.69888, 0.64174, 0.54545, 0.59399, 0.5556, 0.52176, 0.5217, 0.34533, 0.55102, 0.5394, 0.54004, 0.55983, 0.5492, 0.53618], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"laboratoire français": {
men: [0.091816, 0.11983, 0.11997, 0.11989, 0.11281, 0.11291, 0.13074, 0.11858, 0.14258, 0.15429, 0.14924, 0.14924, 0.1144, 0.17591, 0.17554, 0.097435, 0.097352, 0.097392, 0.12101, 0.12121, 0, 0, 0, 0, 0, 0, 0, 0.95891, 0.9593, 0.9648, 0.41623, 0.41612, 0.41612, 0.082196, 0.077955, 0.053643, 0.047187, 0.047276, 0.04729, 0.047252, 0.047335, 0.030936, 0.030895, 0.014996, 0.033198, 0.033176, 0.033146, 0.036747, 0.039333, 0.1063, 0.42797, 0.42711, 0.42711, 0.42721, 0.42707, 0.42696, 0.65952, 0.66095, 0.9569, 0.95733, 0.9578, 0.073782, 0.073939, 0.097239, 0.11808, 0.12861, 0.1286, 0.12858, 0.13005, 0.13, 0.095722, 0.095675, 0.099701, 0.099671, 0.099574, 0.2554, 0.25552, 0.2222, 0.19508, 0.18654, 0.16718, 0.16721, 0.22095, 0.26407, 0.23317, 0.19884, 0.23962, 0.23975, 0.24027, 0.24141, 0.24151, 0.24151, 0.2047, 0.25367, 0.3035, 0.3035, 0.24984, 0.17718, 0.23158, 0.42579, 0.42573, 0.42573, 0.42568, 0.26859, 0.26716, 0.26689, 0.95749, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marché pharmaceutique": {
men: [0.085098, 0.10299, 0.10204, 0.10198, 0.10192, 0.1077, 0.15052, 0.17154, 0.20478, 0.20518, 0.20518, 0.20518, 0.16875, 0.15905, 0.15872, 0.13917, 0.14706, 0.14713, 0.1472, 0.14744, 0, 0, 0, 0, 0, 0, 0, 0.046499, 0.037934, 0.071133, 0.077454, 0.077433, 0.077433, 0.088337, 0.087069, 0.067706, 0.067768, 0.062756, 0.062775, 0.062726, 0.058741, 0.0395, 0.039349, 0.017714, 0.038212, 0.038187, 0.038153, 0.020123, 0.021693, 0.025824, 0.025795, 0.023863, 0.023863, 0.023868, 0.024841, 0.03435, 0.10426, 0.11273, 0.061852, 0.06188, 0.06191, 0.12386, 0.098641, 0.13721, 0.16499, 0.24859, 0.24858, 0.24854, 0.33896, 0.33884, 0.26679, 0.25991, 0.40553, 0.4054, 0.40501, 0.40722, 0.69058, 0.65232, 0.66287, 0.62333, 0.62337, 0.62348, 0.28552, 0.33572, 0.33539, 0.39705, 0.34302, 0.3432, 0.27321, 0.27443, 0.27455, 0.27455, 0.15649, 0.19687, 0.19687, 0.19687, 0.2634, 0.18782, 0.18822, 0.18815, 0.18812, 0.18812, 0.26747, 0.15243, 0.15161, 0.15146, 0.95749, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités de santé": {
men: [0.28662, 0.48955, 0.49009, 0.39597, 0.37197, 0.33434, 0.44181, 0.31491, 0.36688, 0.36761, 0.36761, 0.33202, 0.29659, 0.26001, 0.25946, 0.22125, 0.22106, 0.24515, 0.25447, 0.22979, 0.1675, 0.25094, 0, 0, 0, 0, 0, 0.18109, 0.18116, 0.085029, 0.075361, 0.075341, 0.075341, 0.11286, 0.11309, 0.11951, 0.11962, 0.11985, 0.11988, 0.11979, 0.12, 0.081755, 0.081648, 0.17295, 0.39833, 0.39807, 0.39771, 0.16044, 0.15987, 0.11099, 0.080013, 0.067997, 0.062274, 0.062289, 0.062269, 0.067202, 0.15719, 0.12757, 0.090807, 0.090848, 0.076394, 0.08981, 0.070031, 0.096175, 0.11331, 0.11421, 0.11209, 0.11207, 0.11781, 0.11518, 0.082505, 0.087817, 0.10638, 0.10634, 0.11455, 0.13602, 0.16301, 0.13117, 0.12156, 0.12935, 0.13972, 0.13248, 0.15663, 0.19938, 0.2152, 0.22513, 0.18701, 0.17813, 0.17851, 0.20006, 0.19557, 0.19595, 0.22785, 0.28028, 0.28028, 0.31093, 0.26449, 0.14898, 0.13768, 0.11982, 0.097562, 0.10177, 0.10176, 0.041927, 0.046537, 0.031585, 0.034118, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"études cliniques": {
men: [0.16104, 0.24615, 0.24643, 0.24628, 0.28536, 0.28561, 0.29101, 0.25502, 0.33633, 0.337, 0.337, 0.37492, 0.3015, 0.22162, 0.19246, 0.10784, 0.10775, 0.10779, 0.10785, 0.0868, 0, 0, 0, 0, 0, 0, 0, 0.18255, 0.24474, 0.21337, 0.15228, 0.15224, 0.15224, 0.1093, 0.10644, 0.096888, 0.08624, 0.059882, 0.0599, 0.05869, 0.058792, 0.037213, 0.037165, 0.017351, 0.039714, 0.039688, 0.039652, 0.031441, 0.030669, 0.033272, 0.037667, 0.07102, 0.07102, 0.075978, 0.043907, 0.042427, 0.096333, 0.12249, 0.082954, 0.082991, 0.078826, 0.090163, 0.068122, 0.07792, 0.081656, 0.0979, 0.097895, 0.095582, 0.13556, 0.146, 0.11653, 0.11647, 0.12187, 0.12184, 0.12491, 0.092446, 0.086241, 0.079576, 0.095702, 0.078986, 0.078991, 0.08108, 0.079994, 0.099168, 0.09401, 0.089708, 0.072168, 0.069503, 0.069652, 0.1137, 0.20323, 0.21067, 0.16268, 0.22096, 0.22096, 0.20349, 0.16324, 0.10665, 0.12621, 0.069316, 0.088699, 0.098546, 0.093172, 0.047981, 0.045458, 0.041878, 0.041928, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"troubles musculo-squelettiques": {
men: [0.053585, 0.053682, 0.026515, 0.025474, 0.024606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5542, 0.5547, 0.55521, 0.55625, 0.44014, 0.43979, 0.36607, 0.22382, 0.36579, 0.55758, 0.48702, 0.38754, 0.38719, 0.38726, 0.4074, 0.28002, 0.3818, 0.45547, 0.46264, 0.46275, 0.4698, 0.51306, 0.49434, 0.40512, 0.42374, 0.4479, 0.44812, 0.4481, 0.36406, 0.42705, 0.30504, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11052, 0.11058, 0.11081, 0.12067, 0.2418, 0.21706, 0.21681, 0.21648, 0.32477, 0.32477, 0.32492, 0.50414, 0.50522, 0.22374, 0, 0, 0, 0, 0, 0.048762, 0.048821, 0.04882, 0.048809, 0.14322], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques psychosociaux": {
men: [0.17507, 0.24208, 0.20876, 0.20864, 0.20851, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5542, 0.5547, 0.119, 0.11922, 0.11926, 0.11917, 0.10941, 0.11959, 0.11943, 0.078666, 0.067057, 0.12618, 0.12607, 0.10238, 0.05348, 0.048354, 0.34931, 0.48617, 0.48617, 0.48629, 0.50112, 0.37754, 0.37765, 0.39983, 0.42969, 0.39148, 0.39168, 0.44831, 0.42026, 0.42285, 0.25649, 0, 0, 0, 0.06266, 0.17823, 0.1782, 0.20918, 0.2094, 0.22934, 0.26679, 0.26662, 0.29909, 0.30291, 0.30359, 0.30373, 0.30375, 0.30381, 0.33712, 0.27748, 0.2772, 0.27757, 0.27767, 0.23412, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085582, 0.085765, 0.085731, 0.08572, 0.092269, 0.092258, 0.092526, 0.092032, 0.12722, 0.15211, 0.19264, 0.1926, 0.26249], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"santé au travail": {
men: [0.11864, 0.12414, 0.090773, 0.090719, 0.092483, 0.015876, 0.014729, 0.014653, 0.015765, 0.015667, 0.016447, 0.015915, 0.01627, 0.039622, 0.037378, 0.029955, 0.026522, 0.026533, 0.017773, 0.021793, 0.026196, 0.028929, 0.053026, 0.055047, 0.055972, 0.058478, 0.059947, 0.02659, 0.029054, 0.044519, 0.083713, 0.083691, 0.083691, 0.090501, 0.11169, 0.10385, 0.034226, 0.030343, 0.02782, 0.027798, 0.026029, 0.020206, 0.014095, 0.091783, 0.08679, 0.11848, 0.13569, 0.12596, 0.12731, 0.157, 0.22996, 0.29385, 0.29911, 0.29512, 0.25805, 0.26032, 0.29577, 0.24253, 0.26917, 0.26434, 0.21951, 0.24265, 0.2546, 0.24477, 0.19273, 0.13819, 0.13419, 0.13304, 0.14995, 0.17088, 0.1594, 0.18564, 0.15362, 0.15357, 0.20082, 0.1751, 0.16205, 0.13358, 0.12204, 0.11376, 0.11416, 0.11577, 0.10071, 0.054882, 0.074795, 0.093089, 0.11454, 0.11461, 0.10248, 0.1131, 0.11315, 0.10234, 0.10499, 0.10071, 0.10574, 0.10475, 0.099524, 0.13316, 0.11746, 0.1344, 0.1381, 0.13378, 0.13377, 0.11524, 0.13501, 0.15303, 0.13938, 0.14429, 0.143, 0.15206], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lésions cérébrales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93483, 0.93524, 0.93524, 0.98861, 0.89868, 0.85827, 0.85827, 0.85865, 0.85877, 0.86061, 0.86026, 0.86015, 0.86015, 0.86006, 0.70151, 0.69776, 0.69705, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"abattage systématique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95019, 0.94876, 0.94876, 0.94876, 0.94919, 0.94932, 0.95135, 0.95097, 0.95084, 0.95084, 0.95074, 0.9535, 0.9484, 0.94744, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"encéphalopathie spongiforme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95019, 0.94876, 0.94876, 0.94876, 0.94919, 0.94932, 0.95135, 0.95097, 0.95084, 0.95084, 0.95074, 0.9535, 0.9484, 0.94744, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cancérigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.068295, 0.068255, 0.052596, 0.050404, 0.048427, 0.048523, 0.042404, 0.035287, 0.035353, 0.035363, 0.035335, 0.035397, 0.039468, 0.06243, 0, 0, 0, 0, 0, 0.65471, 0.73455, 0.91263, 0.91079, 0.91079, 0.91101, 0.91071, 0.93472, 0.93499, 0.93703, 0.93565, 0.93607, 0.91532, 0.91529, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits dangereux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.78138, 0.78088, 0.75102, 0.71533, 0.71533, 0.7155, 0.6662, 0.66602, 0.79175, 0.79348, 0.80947, 0.80983, 0.81023, 0.81021, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cancers professionnels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42222, 0.42196, 0.39201, 0.39122, 0.48647, 0.48659, 0.48643, 0.4863, 0.48644, 0.4875, 0.81922, 0.81959, 0.81999, 0.81997, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0394, 0.039403, 0.03745, 0.037472, 0.037514, 0.037477, 0.042853, 0.042869, 0.047668, 0.04777, 0.04771, 0.047731, 0.1675, 0.42228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vieillissement de la population": {
men: [0.10497, 0.12399, 0.12412, 0.12405, 0.11807, 0.11817, 0.15689, 0.23693, 0.23668, 0.23715, 0.23715, 0.23715, 0.15555, 0.11341, 0.13451, 0.091978, 0.0919, 0.091938, 0.10733, 0.06316, 0, 0, 0, 0, 0, 0, 0, 0.078521, 0.068138, 0.12425, 0.12418, 0.12415, 0.12415, 0.29072, 0.2913, 0.29156, 0.48039, 0.48129, 0.48143, 0.48105, 0.34931, 0.22715, 0.1274, 0.061785, 0.11637, 0.11629, 0.11619, 0.050852, 0.012746, 0.011088, 0.01114, 0.010833, 0.010833, 0.010835, 0.011094, 0.0105, 0.027799, 0.027643, 0.028227, 0.027016, 0.026714, 0.035503, 0.070818, 0.10276, 0.11786, 0.12622, 0.12621, 0.12619, 0.1316, 0.13465, 0.1226, 0.097817, 0.1026, 0.11312, 0.11627, 0.11726, 0.11881, 0.1078, 0.10794, 0.099516, 0.092651, 0.08545, 0.088972, 0.11937, 0.11448, 0.14399, 0.10881, 0.10887, 0.1047, 0.1041, 0.10335, 0.10335, 0.075846, 0.098217, 0.10111, 0.10667, 0.11165, 0.082879, 0.092196, 0.090842, 0.10848, 0.10848, 0.10414, 0.06199, 0.077258, 0.071547, 0.073628, 0.046936, 0.047264, 0.04999], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe porcine": {
men: [0, 0, 0, 0.97178, 0.97117, 0.97204, 0.97169, 0.97567, 0.97462, 0.97656, 0.97656, 0.97656, 0.97282, 0.47078, 0.4033, 0.40341, 0.40306, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"visite médicale": {
men: [0, 0, 0, 0, 0.15725, 0.15739, 0.12738, 0.1279, 0.071377, 0.062894, 0.059478, 0.059478, 0.05925, 0.059137, 0.059013, 0.060761, 0.060709, 0.060734, 0, 0, 0, 0, 0.17385, 0.28116, 0.96377, 0.96377, 0.96415, 0.27202, 0.12372, 0.19145, 0.19134, 0.13299, 0.13299, 0.13292, 0.090222, 0.089129, 0.055905, 0.045767, 0.042477, 0.042444, 0.03828, 0.040076, 0.045127, 0, 0, 0, 0, 0, 0, 0, 0, 0.020529, 0.022658, 0.022664, 0.024889, 0.025073, 0.023634, 0.021799, 0.027726, 0.028794, 0.028808, 0.038344, 0.033412, 0.026051, 0.024768, 0.053053, 0.053051, 0.053043, 0.057843, 0.059992, 0.064847, 0.073792, 0.07265, 0.077824, 0.077749, 0.075941, 0.082709, 0.11728, 0.16922, 0.057209, 0.043161, 0.043169, 0.033574, 0.033612, 0.030449, 0.026042, 0.02906, 0.027686, 0.027745, 0.026871, 0.029885, 0.031767, 0.028927, 0, 0, 0, 0, 0.1212, 0.14368, 0.216, 0.37548, 0.33369, 0.33365, 0.25921, 0.23031, 0.21388, 0.23726, 0.20525, 0.2052, 0.19218], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"farines animales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95019, 0.94876, 0.94876, 0.94876, 0.94919, 0.94932, 0.95135, 0.95097, 0.95084, 0.95084, 0.95074, 0.15215, 0.15134, 0.15119, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"suivi médical": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.037684, 0.038156, 0.038153, 0.038103, 0.17478, 0.18299, 0.18287, 0.17661, 0.17665, 0.25635, 0.25706, 0.30575, 0.37065, 0.49297, 0.42592, 0.43369, 0.42985, 0.42998, 0.2567, 0.25632, 0.25644, 0.28713, 0.28713, 0.30337, 0.30305, 0.20632, 0, 0, 0.090562, 0.097856, 0.17489, 0.17487, 0.21118, 0.19677, 0.19671, 0.16919, 0.15048, 0.15055, 0.12875, 0.12904, 0.11813, 0.13078, 0.074811, 0.08538, 0, 0.062934, 0.060419, 0.11984, 0.11991, 0.13475, 0.14194, 0.092493, 0.097651, 0.089754, 0.092257, 0.092257, 0.09544, 0.095483, 0.096377, 0.059871, 0.053327, 0, 0, 0, 0, 0.053127, 0.057441, 0.047425, 0.044508, 0.044498, 0.044484], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organisations patronales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13368, 0.60881, 0.60881, 0.60896, 0.60876, 0.6086, 0.60878, 0.49289, 0.49217, 0.31688, 0.31704, 0.26339, 0.21339, 0.23217, 0.32014, 0.21211, 0.2121, 0.21207, 0.19975, 0.19968, 0.19965, 0.22241, 0.15338, 0.18644, 0.18626, 0.21234, 0.26457, 0.22591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vague de chaleur": {
men: [0.0070633, 0.0070761, 0.011697, 0.01089, 0.0096078, 0.015383, 0.015378, 0.015441, 0.013932, 0, 0, 0, 0.095859, 0.073501, 0.065897, 0.063299, 0.063245, 0.060937, 0.05961, 0.055984, 0.055759, 0.05442, 0.055216, 0.056199, 0.060916, 0.062247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.88436, 0.88436, 0.88426, 0.88683, 0.96367, 0.96269, 0.96385, 0.96384, 0.96361, 0.96332], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surveillance médicale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10101, 0.10114, 0.10118, 0.10123, 0.10145, 0.10132, 0.10136, 0.10337, 0.10325, 0.10309, 0.10309, 0.10309, 0.10314, 0.29139, 0, 0.73108, 0.73098, 0.73098, 0.7309, 0.73302, 0.72911, 0.76565, 0.76657, 0.56557, 0.56543, 0.56527], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"évolution démographique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7205, 0.71937, 0.71923, 0.71923, 0.71951, 0.71919, 0.71948, 0.96325, 0.96269, 0.96244, 0.96244, 0.68476, 0.3267, 0.32699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biologie médicale": {
men: [0.86441, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.086533, 0.086533, 0.086567, 0.086528, 0.086563, 0.086487, 0.086437, 0.086413, 0.086413, 0.086367, 0.086539, 0.086617, 0.086697, 0.96258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9579, 0.95891, 0.95862, 0.95769, 0.38246, 0.38263, 0.38325, 0.38411, 0.38429, 0.34207, 0.34213, 0.20918, 0.20942, 0.20921, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arsenal nucléaire": {
men: [0.083939, 0.94837, 0.94942, 0.94886, 0.94826, 0.94911, 0.94877, 0.95266, 0.95163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13085, 0.15655, 0.13282, 0.13295, 0.1332, 0.13324, 0.14721, 0.14747, 0.14773, 0.21495, 0.17712, 0.095313, 0.071718, 0.071653, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"experts européens": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94439, 0.94467, 0.94673, 0.94533, 0.94576, 0.94622, 0.9462, 0.94822, 0.94722, 0.29949, 0.14511, 0.08593, 0.085919, 0.085892, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies professionnelles": {
men: [0.17064, 0.17975, 0.15591, 0.15582, 0.1415, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085909, 0.047037, 0.045008, 0.043759, 0.024813, 0.025074, 0.025123, 0.021809, 0.019807, 0.01794, 0.016116, 0.031011, 0.054372, 0.055252, 0.040038, 0.040538, 0.053489, 0.05807, 0.074183, 0.074201, 0.077434, 0.093165, 0.093582, 0.10042, 0.13698, 0.11225, 0.072059, 0.0695, 0.059345, 0.092589, 0.076022, 0.10507, 0.11589, 0.14463, 0.1743, 0.258, 0.24252, 0.24563, 0.23394, 0.23309, 0.23869, 0.24082, 0.28734, 0.26543, 0.24316, 0.22708, 0.22709, 0.20096, 0.14625, 0.017067, 0.016037, 0.028691, 0.059196, 0.063615, 0.063751, 0.060936, 0.063989, 0.067173, 0.067095, 0.047344, 0.046203, 0.042874, 0.052317, 0.058259, 0.091037, 0.21803, 0.14426, 0.1552, 0.17431, 0.20054, 0.16019, 0.14471, 0.14948, 0.16029, 0.15911, 0.16776], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gel microbicide": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.235, 0.235, 0.23509, 0.23498, 0.23508, 0.23487, 0.94732, 0.94707, 0.94707, 0.94656, 0.94844, 0.9493, 0.95017, 0.95195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
