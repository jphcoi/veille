var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"eaux boueuses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95654, 0.45921, 0.73811, 0.83482, 0.85536, 0.85632, 0.85565, 0.85527, 0.85544, 0.85577, 0.85552, 0.85572, 0.85543, 0.85477, 0.83796, 0.97248, 0.96901, 0.95747, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95348, 0.95272, 0.95235, 0.95215, 0.95234, 0.95324, 0.95328, 0.95313, 0.95306, 0.95309, 0.95321, 0.95336, 0.95423, 0.95782, 0, 0, 0, 0, 0, 0, 0, 0.95406, 0.953, 0.95289, 0.95237, 0.95365, 0.95344, 0.95269, 0.95176, 0.95116, 0.95095, 0.95184, 0.95216, 0.95243, 0.95313, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coulées de boue": {
men: [0, 0, 0, 0, 0, 0, 0.94705, 0.94705, 0.94705, 0.94736, 0.94742, 0.95962, 0.76452, 0.82949, 0.8906, 0.82211, 0.76381, 0.70677, 0.70646, 0.70659, 0.69873, 0.69853, 0.72271, 0.72247, 0.72191, 0.70191, 0.71984, 0.6774, 0.55084, 0.54503, 0.62453, 0.95612, 0.95606, 0.95566, 0.95609, 0.9562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013269, 0.013266, 0.013275, 0.013278, 0.013258, 0.013253, 0.013247, 0.013238, 0.013237, 0.029121, 0.088596, 0.14382, 0.14383, 0.14376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076135, 0.55478, 0.45496, 0.4531, 0.43654, 0.44912, 0.42438, 0.41294, 0.41499, 0.40436, 0.40433, 0.40521, 0.40055, 0.396, 0.42399, 0.3433, 0.35621, 0.30491, 0.30432, 0.21871, 0.23292, 0.17814, 0.14683, 0.20836, 0.20812, 0.2081, 0.25785, 0.33962, 0.23199, 0.052264, 0.38693, 0.33351, 0.31021, 0.3105, 0.3106, 0.31069, 0.31092, 0.31097, 0.31118, 0.3113], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bassin versant": {
men: [0.96019, 0.95955, 0.94296, 0.9427, 0.94285, 0.95177, 0.94564, 0.36216, 0.36216, 0.36228, 0.61724, 0.61718, 0.61706, 0.61689, 0.61694, 0.61707, 0.61777, 0.61729, 0.61702, 0.51934, 0.51954, 0.95221, 0.95847, 0.95814, 0.95497, 0.95488, 0.95345, 0.95446, 0.73336, 0.73361, 0.7322, 0.73233, 0.73228, 0.73197, 0.58741, 0.58748, 0.36676, 0.36685, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21992, 0.21993, 0.21982, 0.21998, 0.16413, 0.19348, 0.25728, 0.38528, 0.38555, 0.38585, 0.38624, 0.38645, 0.38594, 0.38551, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025005, 0.024999, 0.02498, 0.026303, 0.026286, 0.026281, 0.19146, 0.12048, 0.12051, 0.1206, 0.098663, 0.098729, 0.098769], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marées vertes": {
men: [0.64257, 0.64214, 0.61407, 0.6139, 0.59849, 0.69924, 0.5695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.131, 0.10287, 0.12745, 0.12759, 0.15151, 0.17102, 0.19524, 0.19528, 0.19526, 0.19518, 0.18674, 0.18296, 0.183, 0.17212, 0.23079, 0.38985, 0.26043, 0.2605, 0.59143, 0.53975, 0.48797, 0.48842, 0.48837, 0.44714, 0.39022, 0.36868, 0.34952, 0.27039, 0.25549, 0.28968, 0.28163, 0.23004, 0.12946, 0.11785, 0.11972, 0.11966, 0.11975, 0.12287, 0.13202, 0.1366, 0.14001, 0.1697, 0.17731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94417, 0.94502, 0.94858, 0.94926, 0.95125, 0.24394, 0.24436, 0.24404, 0.24399, 0.24383, 0.24384, 0.24357, 0.24354, 0.24341, 0, 0.45696, 0.4566, 0.45616, 0.45587, 0.95712, 0.95801, 0.96272, 0.96501, 0.96572, 0.96587, 0.96652, 0.96691], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies diarrhéiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40469, 0.56989, 0.56965, 0.6599, 0.65997, 0.66013, 0.66029, 0.7852, 0.78526, 0.95715, 0.9574, 0.95632, 0.56573, 0.56704, 0.51508, 0.44714, 0.44703, 0.45611, 0.4562, 0.45552, 0.45533, 0.36719, 0.36696, 0.36692, 0.58252, 0.58319, 0.96498, 0.96506, 0.96457, 0.96526, 0.96448, 0.96263, 0.96148, 0.9628, 0.96345, 0.9642, 0.96518, 0.9657, 0.95777, 0.9567, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vie sauvage": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.084537, 0.13479, 0.15381, 0.18179, 0.18165, 0.18164, 0.18136, 0.18156, 0.16111, 0.16116, 0.16085, 0.16088, 0.16087, 0.1608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95249, 0.95208, 0.95164, 0.95103, 0.95094, 0.59966, 0.7276, 0.72851, 0.48622, 0.48598, 0.48632, 0.48593, 0.48577, 0.33103, 0.18586, 0.18599, 0.18613, 0.18632, 0.26088, 0.2967, 0.12883, 0.12837, 0.20042, 0.20026, 0.20018, 0.20014, 0.20018, 0.94175, 0.94179, 0.94163, 0.94157, 0.31947, 0.48335, 0.42644, 0.42683, 0.13725, 0.13735, 0.13764, 0.13765, 0.13789, 0.13771, 0.18248, 0.18237, 0.17021, 0.23814, 0.25273, 0.16238, 0.16132, 0.16128, 0.54952, 0.54899, 0.54864, 0.54852, 0.54903, 0.54922, 0.44397, 0.4443, 0.66828, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pluviométrie": {
men: [0.30558, 0.30538, 0.30522, 0.30514, 0.38468, 0.080621, 0.063396, 0.051048, 0.037662, 0.037674, 0.037677, 0.037673, 0.038034, 0.03984, 0.014408, 0.014411, 0.013953, 0.013942, 0.013936, 0, 0, 0, 0, 0, 0.43176, 0.43172, 0.49026, 0.49078, 0.4102, 0.41034, 0.53241, 0.5325, 0.53247, 0.55368, 0.55393, 0.65199, 0.65215, 0.6523, 0.48621, 0.48625, 0.30825, 0.30833, 0.39724, 0.4123, 0.14424, 0.14438, 0.14436, 0.15513, 0.15524, 0.15527, 0.15504, 0.15497, 0.14735, 0.14726, 0.18413, 0.18418, 0.18439, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95266, 0.95363, 0.95414, 0.95289, 0.95183, 0.24589, 0.24573, 0.24553, 0.24543, 0.24538, 0.24543, 0.24566, 0.20841, 0.20838, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25246, 0.25243, 0.25229, 0.25263, 0.25257, 0.25238, 0.41795, 0.41769, 0.4176, 0.32857, 0.48803, 0.48817, 0.48853, 0.48861, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones marécageuses": {
men: [0, 0.89067, 0.90475, 0.75303, 0.75315, 0.75349, 0.75258, 0.75259, 0.79784, 0.7981, 0.79815, 0.79807, 0.79793, 0.7977, 0.7444, 0.34819, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95063, 0.94921, 0.94881, 0.94837, 0.94776, 0.94766, 0.94791, 0.949, 0.95019, 0.95027, 0.94979, 0.95047, 0.9497, 0.94937, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Guyane française": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20085, 0.95466, 0.95541, 0.95638, 0.52194, 0.52125, 0.52067, 0.51881, 0.51847, 0.67509, 0.67482, 0.67469, 0.67482, 0.67546, 0.51836, 0.67538, 0.67533, 0.67535, 0.95687, 0.95702, 0.95789, 0.9615, 0.96219, 0.95754, 0.53515, 0.53608, 0.51064, 0.51053, 0.5102, 0, 0, 0, 0, 0, 0, 0, 0.27961, 0.27944, 0.48047, 0.48091, 0.52237, 0.52252, 0.52291, 0.52299, 0.52334, 0.52355], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"baignade": {
men: [0.027437, 0.020519, 0.059284, 0.090025, 0.079634, 0.096363, 0.14253, 0.1055, 0.12441, 0.13114, 0.16311, 0.15326, 0.19021, 0.1654, 0.21401, 0.21985, 0.21133, 0.21661, 0.21457, 0.205, 0.17772, 0.17887, 0.17138, 0.1202, 0.10526, 0.092933, 0.16576, 0.1705, 0.14677, 0.14605, 0.14577, 0.12468, 0.1293, 0.13412, 0.14784, 0.15203, 0.15784, 0.23425, 0.29948, 0.44821, 0.028996, 0.029003, 0.035372, 0.038559, 0.038649, 0.038685, 0.038681, 0.038672, 0.038699, 0.038707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065505, 0.099919, 0.099997, 0.1001, 0.073683, 0.060503, 0.077214, 0.076938, 0.076888, 0.076826, 0.076796, 0.081403, 0.13099, 0.13112, 0.028023, 0.21401, 0.21399, 0.214, 0.23199, 0.37291, 0.37325, 0.37465, 0.37492, 0.59439, 0.76279, 0.81498, 0.81392, 0.81374, 0.81322, 0.79252, 0.79164, 0.79155, 0.97276, 0.97407, 0.97385, 0.97308, 0.97214, 0.96911, 0.96017, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux de baignade": {
men: [0.036081, 0.036057, 0.1659, 0.16586, 0.14695, 0.14702, 0.23766, 0.17198, 0.3676, 0.49955, 0.49959, 0.42173, 0.46642, 0.46628, 0.46633, 0.46643, 0.38158, 0.38128, 0.46889, 0.46898, 0.67845, 0.67826, 0.34265, 0.34254, 0.34227, 0.13943, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96535, 0.96409, 0.96389, 0.96327, 0.96332, 0.96224, 0.96213, 0.96161, 0.9629, 0.96269, 0.96193, 0.96099, 0.96038, 0.96017, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"milieux aquatiques": {
men: [0.22236, 0.29917, 0.20555, 0.20549, 0.20553, 0.20562, 0.24413, 0.24413, 0.27928, 0.27937, 0.30936, 0.29229, 0.30778, 0.31369, 0.33307, 0.3125, 0.46626, 0.51225, 0.51202, 0.51212, 0.451, 0.41436, 0.33717, 0.33706, 0.31204, 0.38184, 0.33304, 0.079192, 0.064546, 0.058639, 0.059604, 0.028132, 0.02813, 0.028118, 0.028131, 0.029003, 0.07858, 0.077287, 0.047177, 0.047181, 0.04883, 0.088721, 0.12448, 0.28516, 0.28582, 0.28609, 0.28606, 0.19508, 0.19522, 0.18666, 0.11315, 0.11705, 0.14868, 0.13614, 0.23997, 0.31974, 0.32011, 0.19083, 0.16576, 0.28196, 0.25502, 0.36246, 0.3762, 0.42535, 0.42594, 0.42623, 0.42656, 0.46106, 0.18559, 0.17326, 0.16761, 0.16701, 0.1762, 0.1086, 0.11586, 0.25693, 0.18883, 0.16796, 0.12329, 0.12327, 0.1129, 0.1129, 0.1569, 0.1561, 0.13545, 0.13596, 0.13235, 0.13263, 0.12744, 0.015133, 0.017557, 0.017554, 0.028002, 0.028003, 0.036917, 0.036912, 0.036892, 0.091264, 0.20676, 0.11848, 0.13611, 0.13602, 0.34791, 0.40643, 0.40657, 0.47817, 0.40484, 0.4049, 0.40517, 0.40534], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution des eaux": {
men: [0.44266, 0.44237, 0.14338, 0.1384, 0.13842, 0.098839, 0.087004, 0.087171, 0.11821, 0.11825, 0.11603, 0.11265, 0.11646, 0.065388, 0.21455, 0.21217, 0.48955, 0.53771, 0.53747, 0.50111, 0.5013, 0.50957, 0.46845, 0.46829, 0.51225, 0.56139, 0.56924, 0.47134, 0.018896, 0.018383, 0.016864, 0.016867, 0.016866, 0.019835, 0.014717, 0.016101, 0.01393, 0.011026, 0, 0.18172, 0.16759, 0.1604, 0.22303, 0.2247, 0.24892, 0.24915, 0.27382, 0.28374, 0.30303, 0.20908, 0.22098, 0.25096, 0.24354, 0.15175, 0.16122, 0.18735, 0.11534, 0.098602, 0.098611, 0.098561, 0.07788, 0.077817, 0.0808, 0.11466, 0.11482, 0.036943, 0.042739, 0.042782, 0.044327, 0.039844, 0.2106, 0.57976, 0.26199, 0.19937, 0.1993, 0.18317, 0.1853, 0.16908, 0.20988, 0.26753, 0.23964, 0.23965, 0.23417, 0.20661, 0.14133, 0.14186, 0.14074, 0.15098, 0.18996, 0.19674, 0.19794, 0.20627, 0.17245, 0.089314, 0.098657, 0.098645, 0.097631, 0.2108, 0.2916, 0.29137, 0.36719, 0.39011, 0.37274, 0.37309, 0.40209, 0.33158, 0.39411, 0.39417, 0.36106, 0.36121], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"voies respiratoires": {
men: [0.11556, 0.11708, 0.12798, 0.1366, 0.11801, 0.055796, 0.061517, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34269, 0.34259, 0.45815, 0.458, 0.37369, 0.37365, 0.45023, 0.50289, 0.56687, 0.56706, 0.51249, 0.51258, 0.51255, 0.58095, 0.27928, 0.27931, 0.27938, 0.22393, 0.38012, 0.38014, 0.22449, 0.17363, 0.13366, 0.11009, 0.11937, 0.11948, 0.11947, 0.11944, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36544, 0.3657, 0.36541, 0.36528, 0.71819, 0.71918, 0.71966, 0.72022, 0.72096, 0.58885, 0.58808, 0.58742, 0.58532, 0.68288, 0.61901, 0.61877, 0.61865, 0.61877, 0.24867, 0.24868, 0.24864, 0.24862, 0.24863, 0.28902, 0.28907, 0.28933, 0.14157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tempête tropicale": {
men: [0.00054917, 0.00055399, 0.0005537, 0.00055678, 0.00056234, 0.00056871, 0.00056803, 0.00058795, 0.00069418, 0, 0, 0, 0, 0.52851, 0.97216, 0.97237, 0.97348, 0.97271, 0.97228, 0.97247, 0.83546, 0.83522, 0.84474, 0.84446, 0.84381, 0.84372, 0.84246, 0.81687, 0.30652, 0.30662, 0.15855, 0.12002, 0.090631, 0.076538, 0.03685, 0.036855, 0, 0, 0, 0, 0, 0.036105, 0.034614, 0.034586, 0.03631, 0.03753, 0.039233, 0.040609, 0.052843, 0.048996, 0.046099, 0.04494, 0.042409, 0.042382, 0.055807, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94341, 0.94505, 0.11177, 0.11174, 0.11167, 0.11168, 0.11155, 0.11154, 0.11148, 0.11163, 0.051008, 0.16204, 0.48942, 0.55293, 0.50581, 0.47902, 0.49594, 0.43754, 0.43787, 0.43794, 0.43823, 0.43841], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0.06087, 0.060838, 0.060822, 0.051787, 0.051811, 0.051749, 0.051749, 0.051748, 0.070942, 0.070947, 0.0917, 0.25402, 0.25395, 0.25397, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25868, 0.22286, 0.22338, 0.22358, 0.33403, 0.33395, 0.10925, 0.39771, 0.39711, 0.39694, 0.39676, 0.39651, 0.39647, 0.39657, 0.38992, 0.41268, 0.41271, 0.4125, 0.4128, 0.41246, 0.9599, 0, 0, 0.93239, 0.93311, 0.93406, 0.93457, 0.93334, 0.9323, 0.92896, 0.92835, 0.92761, 0.92725, 0.92706, 0.92724, 0.92812, 0.92816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistance humanitaire": {
men: [0.18734, 0.18722, 0.18712, 0.18707, 0.1871, 0.18718, 0.18696, 0.93479, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33453, 0.95003, 0.95091, 0.95081, 0.95059, 0.36993, 0.37001, 0.36946, 0.3693, 0.36913, 0.36889, 0.36886, 0.61665, 0.61737, 0.67442, 0.67447, 0.67413, 0.67461, 0.67407, 0.96263, 0.96148, 0.9628, 0.96345, 0.9642, 0.96518, 0.9657, 0.95777, 0.9567, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones humides": {
men: [0.061002, 0.10006, 0.10001, 0.099978, 0.099994, 0.10004, 0.15104, 0.096423, 0.072683, 0.069747, 0.14943, 0.20173, 0.17885, 0.2313, 0.18261, 0.17745, 0.17765, 0.22356, 0.22346, 0.22351, 0.22359, 0.27076, 0.37842, 0.39089, 0.38697, 0.36401, 0.57481, 0.65229, 0.82847, 0.95769, 0.57093, 0.47203, 0.472, 0.2052, 0.16661, 0.16663, 0.076155, 0.073644, 0, 0.032087, 0.02077, 0.058911, 0.053891, 0.042897, 0.046365, 0.043037, 0.055207, 0.062664, 0.066404, 0.059572, 0.056979, 0.057797, 0.05777, 0.044408, 0.040963, 0.0090855, 0.064605, 0.073908, 0.073254, 0.09323, 0.11173, 0.11725, 0.11817, 0.11608, 0.11792, 0.14846, 0.14663, 0.14677, 0.18258, 0.29429, 0.25435, 0.28457, 0.29082, 0.2923, 0.21994, 0.17732, 0.17308, 0.21151, 0.3018, 0.20466, 0.15082, 0.15082, 0.13748, 0.35122, 0.34089, 0.31217, 0.27397, 0.27454, 0.24986, 0.2462, 0.23088, 0.23083, 0.22661, 0.2312, 0.26393, 0.26389, 0.31102, 0.15926, 0.15922, 0.17797, 0.16322, 0.16311, 0.17963, 0.22115, 0.2894, 0.34706, 0.30673, 0.1942, 0.19433, 0.1673], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets industriels": {
men: [0, 0, 0.9475, 0.94724, 0.94739, 0.94782, 0.94668, 0.94668, 0.94667, 0.94698, 0.94705, 0.94695, 0.94678, 0.58461, 0.58466, 0.58479, 0, 0.21734, 0.21724, 0.21729, 0.21737, 0.01852, 0.018525, 0.016284, 0.016271, 0.01627, 0.016245, 0.017254, 0.017265, 0.0054947, 0.0054842, 0, 0, 0, 0, 0, 0, 0, 0, 0.16045, 0.16074, 0.16079, 0.1606, 0.62813, 0.55011, 0.55063, 0.61297, 0.61283, 0.69462, 0.69476, 0.69373, 0.53994, 0.53968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12049, 0.1205, 0.12048, 0.13216, 0.13216, 0.13218, 0.089022, 0.068463, 0.068721, 0.12386, 0.12412, 0.12413, 0.10926, 0.10912, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16934, 0.16941], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux souterraines": {
men: [0.23928, 0.34765, 0.63262, 0.7137, 0.78738, 0.78774, 0.90018, 0.76745, 0.65587, 0.65609, 0.65613, 0.65607, 0.55168, 0.436, 0.43604, 0.36491, 0.10992, 0.10983, 0.10978, 0.09241, 0, 0, 0, 0, 0, 0, 0, 0, 0.079171, 0.10258, 0.075893, 0.075906, 0.075902, 0.090968, 0.081079, 0.081089, 0.081108, 0.081128, 0.081175, 0.05761, 0.13551, 0.12364, 0.12255, 0.12246, 0.15954, 0.15969, 0.15967, 0.18223, 0.16162, 0.16165, 0.16141, 0.16134, 0.16126, 0.21514, 0.11896, 0.062743, 0, 0.078169, 0.053997, 0.05333, 0.053368, 0.053324, 0.059967, 0.059896, 0.048962, 0.048996, 0.046631, 0.13642, 0.12625, 0.16438, 0.18881, 0.15404, 0.21509, 0.21828, 0.19545, 0.26391, 0.26396, 0.26421, 0.36614, 0.35034, 0.37683, 0.25849, 0.21441, 0.21444, 0.17356, 0.17429, 0.15768, 0.15801, 0.18026, 0.048008, 0.043179, 0.043169, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22223, 0.22238, 0.22247], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie touristique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43082, 0.59644, 0.59633, 0.68409, 0.68416, 0.6843, 0.68508, 0.73932, 0.73899, 0.96088, 0.96125, 0.96097, 0.96119, 0.96087, 0.95737, 0.9534, 0.95197, 0.9464, 0.94701, 0.48333, 0.4824, 0, 0, 0, 0, 0, 0, 0, 0, 0.18646, 0.1868, 0.18685, 0.18664, 0.36786, 0.36872, 0.36906, 0.36902, 0.36894, 0.26273, 0.26279, 0.26239, 0.26228, 0.26216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe environnementale": {
men: [0.17903, 0.17891, 0.10494, 0.10491, 0.076864, 0.12842, 0.12827, 0.063717, 0.063716, 0.052939, 0.058671, 0.058665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36642, 0.42855, 0.42835, 0.42807, 0.50188, 0.50201, 0.27681, 0.37458, 0.37461, 0.37442, 0.37469, 0.25905, 0.25896, 0.25865, 0, 0, 0, 0, 0, 0, 0, 0, 0.14975, 0.18374, 0.18367, 0.19441, 0.19445, 0.18901, 0.18902, 0.18899, 0.18897, 0.18898, 0.189, 0.18267, 0.17688, 0.21272, 0.23549, 0.09599, 0.096, 0.096167, 0.096041, 0, 0, 0, 0.15494, 0.15492, 0.15483, 0.26635, 0.94413, 0.94339, 0.94247, 0.94188, 0.94167, 0.94255, 0.94287, 0.94313, 0.94383, 0.94398, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"centrales hydroélectriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57049, 0.81016, 0.96469, 0.96578, 0.96502, 0.9646, 0.96479, 0.96516, 0.96488, 0.9651, 0.96477, 0.70695, 0.70688, 0.70582, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16704, 0.16716, 0.11728, 0.21209, 0.21199, 0.2119, 0.21176, 0.1536, 0.23098, 0.27374, 0.24417, 0.22458, 0.22447, 0.22463, 0.10243, 0.10239, 0.14465, 0.14485, 0.14495, 0.14506, 0.14521, 0.18127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.086017, 0.086021, 0.085926, 0.085916, 0.085869, 0.085985, 0.085965, 0.085897, 0.085814, 0.08576, 0.08574, 0.20001, 0.94581, 0.94608, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"diarrhées aiguës": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18385, 0.11848, 0.087273, 0.074947, 0.074926, 0.071249, 0.071225, 0.07117, 0.071163, 0.071056, 0.068507, 0.068552, 0.068575, 0.07629, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94343, 0.94563, 0.94651, 0.94641, 0.94619, 0.95344, 0.95364, 0.95222, 0.95181, 0.95137, 0.95076, 0.95066, 0.9509, 0.952, 0.94661, 0.94669, 0.94621, 0.94689, 0.94612, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux superficielles": {
men: [0, 0, 0.14799, 0.14795, 0.14797, 0.14804, 0.14786, 0.94632, 0.94632, 0.94663, 0.94669, 0.9466, 0.94642, 0.17203, 0.17204, 0.17208, 0, 0.015922, 0.014025, 0.014027, 0.014033, 0.014029, 0.014032, 0.014027, 0.01231, 0.012309, 0.012291, 0.017685, 0.017697, 0.017703, 0.026294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94231, 0.95275, 0.95269, 0.95271, 0.95283, 0.95299, 0.95385, 0.95745, 0.95813, 0.96013, 0.96024, 0.3958, 0.39528, 0.3952, 0.30593, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nappes phréatiques": {
men: [0.27532, 0.26487, 0.2574, 0.29806, 0.29811, 0.27853, 0.27605, 0.26404, 0.23058, 0.18506, 0.17947, 0.11235, 0.11233, 0.14513, 0.10797, 0.10071, 0.082515, 0.083945, 0.083908, 0.072672, 0.052924, 0.03344, 0.035996, 0.043376, 0.048401, 0.053858, 0.069476, 0.02117, 0.095656, 0.10417, 0.15021, 0.16759, 0.18842, 0.20875, 0.19853, 0.25447, 0.32198, 0.31567, 0.3037, 0.29793, 0.23631, 0.21582, 0.14681, 0.1596, 0.17271, 0.15868, 0.11737, 0.11734, 0.10819, 0.17107, 0.10725, 0.10684, 0.093765, 0.093201, 0.10867, 0.12181, 0.13313, 0.15394, 0.16448, 0.16439, 0.19744, 0.17933, 0.18781, 0.083276, 0.090147, 0.099359, 0.15839, 0.27033, 0.39631, 0.38955, 0.33473, 0.32109, 0.29351, 0.29327, 0.29316, 0.30038, 0.28092, 0.30196, 0.32995, 0.32566, 0.32426, 0.29232, 0.22357, 0.217, 0.23155, 0.16352, 0.19225, 0.17898, 0.16388, 0.1718, 0.18713, 0.12868, 0.080855, 0.083018, 0.042611, 0.042606, 0.064639, 0.088923, 0.080433, 0.063749, 0.046445, 0.047574, 0.14233, 0.13885, 0.12913, 0.15341, 0.14751, 0.14753, 0.18255, 0.18262], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"approvisionnement en eau": {
men: [0.32642, 0.26257, 0.36336, 0.36326, 0.35243, 0.34856, 0.35725, 0.37499, 0.36377, 0.36389, 0.3961, 0.43769, 0.36329, 0.25286, 0.25288, 0.3054, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11466, 0.10557, 0.10252, 0.12078, 0.12791, 0.12794, 0.12793, 0.091841, 0.058028, 0.073661, 0.069289, 0.067594, 0.067633, 0.06881, 0.0087911, 0.0092328, 0.0090825, 0, 0, 0, 0, 0.055543, 0.1279, 0.12793, 0.16059, 0.3356, 0.33545, 0.31687, 0.33084, 0.19653, 0.12381, 0.12223, 0.13193, 0.13186, 0.12679, 0.073645, 0.081108, 0.075671, 0.09098, 0.059059, 0.054334, 0.1121, 0.11376, 0.14571, 0.26954, 0.27664, 0.27646, 0.23183, 0.24856, 0.23973, 0.23977, 0.26994, 0.27825, 0.20902, 0.28782, 0, 0.038665, 0.038671, 0.034209, 0.034338, 0.034362, 0.050604, 0.05061, 0.06508, 0.051837, 0.051826, 0.051793, 0.053687, 0.053627, 0.05362, 0, 0, 0, 0, 0, 0, 0.59096, 0.59151, 0.76125, 0.76146, 0.76202, 0.72073, 0.72121, 0.32433], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture bretonne": {
men: [0.20794, 0.39003, 0.38983, 0.38973, 0.38979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18554, 0.18552, 0.18557, 0.18579, 0.18602, 0.23398, 0.28534, 0.28554, 0.95052, 0.9502, 0.4635, 0.46413, 0.46445, 0.46481, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95963, 0.95887, 0.95794, 0.95733, 0.95712, 0.95801, 0.95834, 0.96161, 0.96231, 0.96247, 0.96311, 0.9635], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"métaux lourds": {
men: [0, 0, 0.19945, 0.1994, 0.19943, 0.19952, 0.22575, 0.23401, 0.23401, 0.23409, 0.2341, 0.12611, 0.12609, 0.11068, 0.11069, 0.11071, 0, 0.021938, 0.021929, 0.015138, 0.013825, 0.012476, 0.012479, 0.011793, 0.011784, 0.016067, 0.060555, 0.068411, 0.068455, 0.068478, 0.065745, 0.051112, 0.032539, 0.032301, 0.3919, 0.39401, 0.33686, 0.3313, 0.40333, 0.41148, 0.41422, 0.39603, 0.40005, 0.39973, 0.39317, 0.35557, 0.38969, 0.42638, 0.22745, 0.2687, 0.26433, 0.2765, 0.13522, 0.11295, 0.10581, 0.10276, 0.068789, 0.051967, 0.04149, 0.044962, 0.047697, 0.047024, 0.048775, 0, 0, 0, 0, 0, 0, 0.10788, 0.14247, 0.26153, 0.35039, 0.34919, 0.31687, 0.29964, 0.29476, 0.27086, 0.25941, 0.26265, 0.26264, 0.25943, 0.26149, 0.24209, 0.25393, 0.21074, 0.17951, 0.18302, 0.18892, 0.1756, 0.17689, 0.18223, 0.22005, 0.18935, 0.18914, 0.21295, 0.19956, 0.2749, 0.26928, 0.12883, 0.059736, 0.059698, 0.06182, 0.06233, 0.057072, 0.045313, 0.037494, 0.0375, 0.076095, 0.07454], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
