var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"éolien offshore": {
men: [0.55142, 0.55124, 0.55022, 0.55016, 0.55011, 0.71913, 0.71901, 0.68267, 0.6826, 0.97362, 0.97362, 0.97362, 0.96901, 0.9692, 0.96442, 0.96471, 0.97025, 0.9703, 0.97054, 0.96071, 0.96064, 0.3209, 0.51322, 0.57726, 0.57703, 0.57703, 0.5801, 0.7207, 0.63253, 0.64278, 0.6408, 0.65606, 0.65602, 0.66208, 0.66166, 0.69149, 0.68288, 0.70071, 0.70048, 0.70397, 0.70192, 0.6392, 0.97904, 0.85612, 0.88092, 0.83321, 0.83967, 0.46509, 0.44501, 0.46943, 0.48681, 0.45967, 0.45984, 0.45442, 0.45523, 0.4712, 0.40692, 0.41873, 0.39558, 0.30566, 0.29492, 0.40719, 0.4313, 0.34021, 0.25594, 0.321, 0.3335, 0.33324, 0.32322, 0.38125, 0.43198, 0.41031, 0.44755, 0.44768, 0.44794, 0.44803, 0.44506, 0.50752, 0.3188, 0.32369, 0.31748, 0.31782, 0.32241, 0.24887, 0.31909, 0.31906, 0.34932, 0.34928, 0.34928, 0.34183, 0.33819, 0.25501, 0.78573, 0.86626, 0.63782, 0.51729, 0.51793, 0.56167, 0.56119, 0.45863, 0.29484, 0.29471, 0.29472, 0.28805, 0.28814, 0.28811, 0.23203, 0.083653, 0.10142, 0.12493], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc éolien": {
men: [0.12502, 0.12911, 0.13161, 0.1316, 0.13158, 0.15649, 0.18421, 0.26796, 0.47192, 0.27264, 0.27264, 0.27264, 0.48397, 0.55319, 0.65364, 0.82186, 0.97765, 0.9777, 0.97793, 0.97831, 0.51395, 0.53026, 0.5255, 0.56815, 0.56793, 0.56793, 0.51142, 0.32072, 0.33004, 0.32253, 0.32402, 0.32392, 0.3239, 0.32391, 0.3758, 0.31436, 0.25863, 0.29498, 0.29488, 0.30996, 0.32249, 0.48172, 0.50769, 0.51896, 0.61935, 0.63739, 0.63735, 0.5399, 0.41217, 0.43459, 0.48558, 0.46914, 0.46931, 0.46565, 0.46882, 0.35595, 0.29603, 0.28206, 0.23189, 0.21374, 0.21366, 0.19433, 0.26328, 0.24513, 0.19982, 0.19288, 0.20285, 0.38552, 0.37771, 0.46797, 0.49537, 0.7602, 0.7826, 0.78283, 0.78328, 0.78344, 0.51666, 0.55452, 0.55218, 0.53403, 0.53186, 0.33632, 0.33585, 0.36447, 0.36916, 0.306, 0.3272, 0.32717, 0.30447, 0.30441, 0.73173, 0.7115, 0.60165, 0.67144, 0.67118, 0.67181, 0.64493, 0.70222, 0.70162, 0.66014, 0.60255, 0.60229, 0.68064, 0.71838, 0.63644, 0.65278, 0.81197, 0.45481, 0.43329, 0.55362], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie éolienne": {
men: [0.068715, 0.066526, 0.12505, 0.14348, 0.14789, 0.14784, 0.12947, 0.13948, 0.19173, 0.16725, 0.16725, 0.16725, 0.34628, 0.34774, 0.41393, 0.44607, 0.4702, 0.43458, 0.43135, 0.43928, 0.62284, 0.58031, 0.59083, 0.59049, 0.61535, 0.61535, 0.39148, 0.70357, 0.80992, 0.81876, 0.81696, 0.83033, 0.83028, 0.81447, 0.81395, 0.74694, 0.65899, 0.66295, 0.68499, 0.68454, 0.72738, 0.60811, 0.46466, 0.45587, 0.4953, 0.50732, 0.50729, 0.56456, 0.54012, 0.62102, 0.74837, 0.65316, 0.59162, 0.55865, 0.52905, 0.47028, 0.47022, 0.40715, 0.35465, 0.31828, 0.34007, 0.30764, 0.28127, 0.28215, 0.16769, 0.18716, 0.17043, 0.29804, 0.30989, 0.35073, 0.35112, 0.39044, 0.45786, 0.458, 0.4287, 0.40021, 0.56173, 0.49797, 0.51876, 0.53287, 0.58969, 0.49802, 0.46953, 0.57008, 0.56991, 0.5589, 0.52342, 0.53489, 0.53489, 0.55924, 0.49928, 0.52957, 0.40823, 0.48813, 0.48794, 0.48839, 0.50357, 0.60249, 0.63598, 0.61867, 0.65937, 0.66335, 0.66339, 0.67282, 0.67777, 0.66804, 0.71657, 0.70438, 0.70444, 0.69012], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ferme éolienne": {
men: [0, 0, 0, 0.28233, 0.2823, 0.95511, 0.95495, 0.95487, 0.95478, 0.95619, 0.95619, 0.37497, 0.3732, 0.37327, 0.37311, 0.68606, 0.68706, 0.62135, 0.6215, 0.34763, 0.3476, 0.34702, 0.34701, 0.34681, 0.34667, 0.43247, 0.43477, 0.43341, 0.23644, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23799, 0.23783, 0.23714, 0.23767, 0.96753, 0.96696, 0.97188, 0.97098, 0.97092, 0.80528, 0.80549, 0.80347, 0.80257, 0.64979, 0.61772, 0.61774, 0.61884, 0.61876, 0.51685, 0.51694, 0.23207, 0.23226, 0.4944, 0.54254, 0.50122, 0.50279, 0.50308, 0.54473, 0.54473, 0.61314, 0.6135, 0.61357, 0.61425, 0.61444, 0.84206, 0.84231, 0.58988, 0.59, 0.97514, 0.67511, 0.67575, 0.67517, 0.67523, 0.62463, 0.62376, 0.64986, 0.64966, 0.64961, 0.64966, 0.6496, 0.6496, 0.64946, 0.47413, 0.95665, 0.15444, 0.15452, 0.15446, 0.1546, 0.1548, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vélos électriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.17361, 0.17387, 0.17387, 0.17387, 0.17305, 0.33513, 0.16463, 0.16468, 0.16492, 0.16493, 0.16497, 0.16503, 0.16502, 0.16474, 0, 0.12146, 0.12142, 0.12142, 0.12206, 0.14384, 0.39631, 0.25717, 0.25705, 0.25697, 0.25695, 0.25696, 0.2568, 0.25719, 0.25724, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12884, 0.13944, 0.13945, 0.13969, 0.28909, 0.28905, 0.2891, 0.30525, 0.3055, 0.30538, 0.30559, 0.30529, 0.30624, 0.30642, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95459, 0.95451, 0.95459, 0.9545, 0.9545, 0.95429, 0.95445, 0.95665, 0.95752, 0.17963, 0.17956, 0.17973, 0.17995, 0.16282, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations éoliennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95479, 0.95441, 0.95441, 0.95949, 0.95647, 0.95529, 0.95531, 0.96225, 0.96195, 0.9619, 0.96193, 0.51974, 0.52054, 0.27135, 0.16639, 0.16633, 0.35213, 0.3511, 0.40985, 0.41008, 0.40984, 0.3703, 0.36996, 0.36994, 0.36958, 0.415, 0.34406, 0.43164, 0.43177, 0.43193, 0.34385, 0.34447, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rendement énergétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.66801, 0.66802, 0.66772, 0.66751, 0.66748, 0.6675, 0.66707, 0.48989, 0.48998, 0.48986, 0.48969, 0.48937, 0.62884, 0.63024, 0.69805, 0.69764, 0.69751, 0.69686, 0.69682, 0.27618, 0.27625, 0.30942, 0.30907, 0.30917, 0.30928, 0.3093, 0.22639, 0.22636, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.018929, 0.018915, 0.022413, 0.022415, 0.026992, 0.025697, 0.025703, 0.023726, 0.02374, 0.021038, 0.021061, 0.021016, 0.087287, 0.129, 0.097457, 0.097559, 0.12251, 0.11357, 0.11354, 0.12313, 0.12314, 0.14428, 0.14428, 0.089686, 0.080186, 0.08037, 0, 0, 0, 0, 0.12811, 0.12085, 0.12075, 0.10414, 0.10401, 0.10397, 0.10397, 0.20512, 0.25893, 0.10715, 0.1141, 0.11397, 0.11398, 0.11389], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"constructions de centrales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4216, 0.42254, 0.42278, 0.95874, 0.95857, 0.95768, 0.95762, 0.95671, 0.95696, 0.95456, 0.95349, 0.95379, 0.95413, 0.95417, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1127, 0.11261, 0.11268, 0.11269, 0.11282, 0.41983, 0.41994, 0.42006, 0.4203, 0.54348, 0.5441, 0.70193, 0.7026, 0.94977, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produire de l' électricité": {
men: [0.26275, 0, 0.13286, 0.13284, 0.13283, 0.14213, 0.14211, 0.1421, 0.14208, 0.14229, 0.13424, 0.17173, 0.18019, 0.18621, 0.2226, 0.52989, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.097469, 0.16178, 0.16178, 0.16168, 0.19219, 0.18391, 0.16466, 0.1458, 0.1457, 0.29002, 0.23839, 0.35935, 0.43601, 0.43592, 0.35996, 0.34191, 0.34158, 0.31131, 0.24486, 0.19367, 0.17535, 0.20181, 0.20182, 0.083326, 0.13505, 0.056342, 0.1184, 0.11272, 0.1191, 0.15738, 0.13338, 0.13693, 0.12162, 0.12712, 0.13573, 0.13424, 0.11993, 0.13319, 0.10756, 0.10331, 0.099651, 0.09778, 0.092007, 0.055859, 0.065814, 0.1034, 0.14068, 0.1392, 0.12301, 0.12478, 0.16253, 0.19018, 0.2558, 0.31243, 0.19873, 0.22973, 0.22971, 0.3218, 0.32629, 0.21054, 0.17785, 0.21736, 0.2287, 0.22861, 0.22883, 0.24004, 0.19068, 0.19052, 0.21445, 0.18068, 0.1618, 0.052282, 0.049018, 0.053762, 0.06573, 0.060967, 0.059518, 0.056553, 0.056512], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géothermie": {
men: [0.09673, 0.10314, 0.075648, 0.074482, 0.079087, 0.079514, 0.15232, 0.24528, 0.26787, 0.27853, 0.27853, 0.27853, 0.023021, 0.02398, 0.082295, 0.08232, 0.18134, 0.42756, 0, 0, 0, 0, 0, 0.95725, 0.95688, 0.95688, 0.21722, 0.19268, 0.19244, 0.19244, 0.32422, 0.32412, 0.3241, 0.32411, 0.3239, 0.23032, 0.20139, 0.078225, 0.078199, 0.078147, 0.10759, 0.084789, 0.084837, 0.12928, 0.051461, 0.051413, 0.05141, 0.051361, 0.046359, 0.054828, 0.040747, 0.055679, 0.054975, 0.054977, 0.055075, 0.077173, 0.077162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.012149, 0.010942, 0.011015, 0.011527, 0.031548, 0.031781, 0.031783, 0.074965, 0.14946, 0.17584, 0.2026, 0.29341, 0.35414, 0.3541, 0.43212, 0.62976, 0.55349, 0.44978, 0.41209, 0.48626, 0.48607, 0.38609, 0.089441, 0, 0, 0, 0, 0.081458, 0.11675, 0.093819, 0.10183, 0.10354, 0.10354, 0.10342, 0.10342, 0.10335], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de centrale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70991, 0.70758, 0.70781, 0.68211, 0.68213, 0.72782, 0.72772, 0.7851, 0.78522, 0.78527, 0.78592, 0.78561, 0.82481, 0.86378, 0.44337, 0, 0, 0.22236, 0.22219, 0.22232, 0.22234, 0.099759, 0.021328, 0.019986, 0.019992, 0.020004, 0.020008, 0.020869, 0.01934, 0.019358, 0.018854, 0, 0, 0, 0, 0, 0, 0.10631, 0.1063, 0.1063, 0.10628, 0.1063, 0.15585, 0.15599, 0.23906, 0.23896, 0.23919, 0.51136, 0.50968, 0.50924, 0.19157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"liaisons aériennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.78133, 0.79566, 0.79591, 0.79619, 0.79623, 0.79765, 0.79754, 0.79743, 0.79756, 0.79761, 0.79826, 0.79795, 0.79849, 0.79771, 0.95893, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"centrales électriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20465, 0.16626, 0.12262, 0.11786, 0.11785, 0.11786, 0.10079, 0.085675, 0.085692, 0.079666, 0.07964, 0.079587, 0.14933, 0.14472, 0.078231, 0.090128, 0.12352, 0.12961, 0.1296, 0.12948, 0.078077, 0.44812, 0.47548, 0.50168, 0.48276, 0.46027, 0.39455, 0.40386, 0.43088, 0.41088, 0.35814, 0.35843, 0.34788, 0.36249, 0.39153, 0.099089, 0.035828, 0.033318, 0.040535, 0.042982, 0.039121, 0.034698, 0.058931, 0.048719, 0.051881, 0.051896, 0.053597, 0.028641, 0.036686, 0.038204, 0.039301, 0.03996, 0.034011, 0.034047, 0.13664, 0.14873, 0.11181, 0.14166, 0.17106, 0.17104, 0.17104, 0.16297, 0.14286, 0.14319, 0.14332, 0.089207, 0.089173, 0.089256, 0.043303, 0.047302, 0.047262, 0.054881, 0.036148, 0.036132, 0.036134, 0.038948, 0.040216, 0.03389, 0.012259, 0.039868, 0.039872, 0.039349], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emplois verts": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.08157, 0.081574, 0.081594, 0.083339, 0.09115, 0.22312, 0.22311, 0.22298, 0.22289, 0.22289, 0.52964, 0.52798, 0.52733, 0.52734, 0.3431, 0.34299, 0.34297, 0.27703, 0.48801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14318, 0.14305, 0.14304, 0.16326, 0.23754, 0.23694, 0.2175, 0.21757, 0.26839, 0.2684, 0.33225, 0.48484, 0.48477, 0.48485, 0.46426, 0.46464, 0.46446, 0.31855, 0.21861, 0.21929, 0.23741, 0.23736, 0.23736, 0.23718, 0.23732, 0.21291, 0.18759, 0.16644, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.081834, 0.081838, 0.15518, 0.15523, 0.089391, 0.10717, 0.10704, 0.10705, 0.068702], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone portuaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96006, 0.96011, 0.96034, 0.96071, 0.96064, 0.95904, 0.95901, 0.95845, 0.95807, 0.95807, 0.96317, 0.96014, 0.95896, 0.95898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie agricole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22472, 0.22479, 0.36606, 0.46231, 0.46242, 0.4626, 0.46256, 0.95319, 0.95315, 0.9526, 0.95223, 0.95223, 0.95729, 0.95428, 0.94925, 0.94927, 0.94228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"quotas laitiers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95183, 0.95165, 0.95164, 0.9509, 0.95146, 0.95158, 0.95262, 0.95292, 0.95315, 0.95343, 0.95398, 0.95417, 0.95525, 0.9532, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écosystèmes naturels": {
men: [0.077028, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.054122, 0.10302, 0.10309, 0.16001, 0.16051, 0.22233, 0.22229, 0.22229, 0.95109, 0.95165, 0.95176, 0.95281, 0.9531, 0.95333, 0.94974, 0.94366, 0.94385, 0.94492, 0.94289, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16609, 0.16604, 0.16603, 0.28262, 0.033362, 0.021307, 0.019177, 0.019172, 0.019852, 0.019839, 0.019781, 0.020099, 0.02011, 0.020099, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95087, 0.95069, 0.74142, 0.74085, 0.70409, 0.70418, 0.70495, 0.70517, 0.70534, 0.70555, 0.70595, 0.7061, 0.7069, 0.7207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"émanations toxiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94557, 0.94563, 0.9464, 0.94603, 0.94668, 0.94575, 0.9487, 0.94926, 0.94908, 0.94907, 0.94834, 0.9489, 0.94901, 0.95005, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières fissiles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94534, 0.94542, 0.94642, 0.9451, 0.94589, 0.9456, 0.94552, 0.9456, 0.94551, 0.94551, 0.9453, 0.94546, 0.94763, 0.9485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14123, 0.14805, 0.37266, 0.37287, 0.37265, 0.37258, 0.37224, 0.37222, 0.37186, 0.70751, 0.70573, 0.70494, 0.70516, 0.70542, 0, 0, 0, 0, 0.94532, 0.94538, 0.95274, 0.95236, 0.95301, 0.95208, 0.16045, 0.12093, 0.1209, 0.1209, 0.12081, 0.12088, 0.1209, 0.12103, 0.064175, 0.027703, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"téléphones usagés": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94074, 0.93764, 0.93683, 0.93438, 0.93321, 0.93281, 0.93286, 0.93276, 0.93307, 0.93295, 0.9329, 0.93179, 0.93188, 0.93119], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergies propres": {
men: [0.077004, 0.070982, 0.074222, 0.076423, 0.078294, 0.073673, 0.077986, 0.092431, 0.10905, 0.076924, 0.076924, 0.079827, 0.085249, 0.091769, 0.08937, 0.091252, 0.0039799, 0.0039137, 0, 0, 0, 0.073817, 0.073814, 0.14858, 0.14749, 0.14749, 0.14553, 0.19981, 0.20794, 0.23243, 0.29225, 0.23501, 0.235, 0.24768, 0.1716, 0.13112, 0.12562, 0.055382, 0.055702, 0.055665, 0.11688, 0.065248, 0.069737, 0.13087, 0.13085, 0.15595, 0.14745, 0.15705, 0.23611, 0.17641, 0.22993, 0.16092, 0.16098, 0.16098, 0.1039, 0.11466, 0.11464, 0.055296, 0.04676, 0.046799, 0.16955, 0.17925, 0.17046, 0.19989, 0.16154, 0.24154, 0.2265, 0.22633, 0.22342, 0.22345, 0.22027, 0.19836, 0.20212, 0.18938, 0.083557, 0.070759, 0.17071, 0.14697, 0.14944, 0.14938, 0.15344, 0.1536, 0.18028, 0.16779, 0.16899, 0.17868, 0.19215, 0.20036, 0.16968, 0.19271, 0.088132, 0.051241, 0.042476, 0.035005, 0.034991, 0.028015, 0, 0, 0, 0.015413, 0.015363, 0.015356, 0.015722, 0.015137, 0.032127, 0.05444, 0.059529, 0.070195, 0.070201, 0.095285], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"entreprises chinoises": {
men: [0.14877, 0.14872, 0.2327, 0.23268, 0.23265, 0.23256, 0.95592, 0.95585, 0.95575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15513, 0.18899, 0.18881, 0.1888, 0.18862, 0.20719, 0.18209, 0.38888, 0.389, 0.38914, 0.34269, 0.3433, 0.60658, 0.60649, 0.50898, 0.34481, 0.3451, 0.34496, 0.29287, 0.29259, 0.32421, 0.37701, 0.37694, 0.37694, 0.40277, 0.35663, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013593, 0.013592, 0.013596, 0.012584, 0.026064, 0.026033, 0.026035, 0.026016], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"choix énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.089363, 0.089263, 0.051354, 0.051372, 0.051375, 0.051466, 0.050277, 0.05027, 0.041507, 0.043308, 0.043344, 0.046339, 0.070389, 0.07032, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30352, 0.30345, 0.96109, 0.9633, 0.96418, 0.96469, 0.96431, 0.96521, 0.96641, 0.96323, 0.9624, 0.95989, 0.95868, 0.95826, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie photovoltaïque": {
men: [0, 0, 0, 0, 0.025919, 0.028041, 0.028036, 0.069224, 0.069217, 0.10234, 0.10234, 0.10234, 0.22138, 0.22143, 0.22133, 0.2214, 0.94473, 0.94478, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53568, 0.53561, 0.5357, 0.53573, 0.53617, 0.53596, 0.53633, 0.5358, 0.69921, 0.69962, 0.96853, 0.96851, 0.96777, 0.96834, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48091, 0.9501, 0.95033, 0.95061, 0.95115, 0.95135, 0.95242, 0.95038, 0.95129, 0.95047, 0.95055, 0.95155, 0.95022, 0.95102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"révolution énergétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29086, 0.49993, 0.49974, 0.50008, 0.49959, 0.50115, 0.50144, 0.68989, 0.68988, 0.68935, 0.68976, 0.64057, 0.64127, 0.64147, 0, 0, 0, 0, 0, 0.40684, 0.40723, 0.40688, 0.26522, 0.2655, 0.26513, 0.31525, 0.31515, 0.31513, 0.31515, 0.31512, 0.31512, 0.31506, 0.31511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
