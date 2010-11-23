var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"éducation thérapeutique": {
men: [0.77051, 0.70666, 0.70675, 0.70681, 0.70708, 0.70708, 0.94432, 0.56757, 0.75467, 0.76052, 0.76129, 0.7613, 0.76106, 0.49958, 0.45952, 0.45947, 0.47752, 0.47744, 0.47765, 0.47799, 0.49718, 0.47468, 0.17336, 0.1714, 0.17141, 0.19239, 0.24135, 0.61097, 0.61113, 0.61096, 0.54937, 0.54936, 0.54936, 0.54909, 0.44726, 0.77937, 0.77943, 0.75793, 0.75787, 0.94658, 0.94646, 0.9503, 0.95044, 0.95044, 0.95071, 0.95105, 0.95089, 0.95149, 0.95291, 0.94885, 0.95442, 0.95504, 0.95468, 0.95441, 0.95185, 0.95636, 0.95625, 0.81116, 0.77114, 0.77102, 0.77127, 0.79582, 0.78446, 0.78431, 0.72975, 0.72944, 0.72934, 0.72958, 0.72966, 0.41255, 0.41274, 0.70757, 0.9389, 0.93896, 0.93884, 0.73279, 0.75983, 0.71303, 0.71309, 0.71331, 0.71353, 0.71349, 0.75991, 0.62404, 0.62333, 0.6233, 0.6231, 0.62301, 0.62288, 0.58139, 0.44262, 0.48273, 0.4831, 0.5464, 0.54658, 0.54664, 0.37919, 0.93823, 0.93973, 0.9593, 0.64543, 0.64523, 0.64529, 0.61717, 0.6167, 0.61615, 0.61608, 0.585, 0.58483, 0.58459], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hpst": {
men: [0.47877, 0.85381, 0.85522, 0.85529, 0.85562, 0.84029, 0.9597, 0.96106, 0.90325, 0.52132, 0.52184, 0.52185, 0.50436, 0.50485, 0.37433, 0.33611, 0.31945, 0.31939, 0.31953, 0.31976, 0.32593, 0.22057, 0.093975, 0.13408, 0.13409, 0.13408, 0.41019, 0.55186, 0.95983, 0.95958, 0.80546, 0.80546, 0.80544, 0.7229, 0.73918, 0.74024, 0.75223, 0.75176, 0.773, 0.77296, 0.73931, 0.69197, 0.67922, 0.67922, 0.83293, 0.83323, 0.83308, 0.95949, 0.95702, 0.42914, 0.40428, 0.40454, 0.34396, 0.36912, 0.29637, 0.20108, 0.3289, 0.32881, 0.28262, 0.35446, 0.41301, 0.29547, 0.334, 0.50404, 0.53169, 0.48748, 0.4874, 0.47514, 0.47519, 0.47765, 0.41968, 0.41981, 0.41971, 0.3866, 0.37402, 0.66032, 0.62681, 0.53503, 0.49315, 0.64594, 0.65421, 0.65418, 0.64376, 0.69346, 0.79968, 0.79965, 0.81156, 0.81144, 0.80356, 0.71106, 0.75547, 0.79498, 0.82966, 0.81658, 0.81474, 0.81482, 0.86951, 0.87251, 0.84061, 0.84056, 0.83519, 0.85751, 0.8665, 0.96999, 0.85655, 0.92238, 0.91653, 0.91649, 0.91623, 0.91799], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"blocs opératoires": {
men: [0.55896, 0.56775, 0.56541, 0.56329, 0.56727, 0.56727, 0.57153, 0.59105, 0.59112, 0.58576, 0.58635, 0.58635, 0.58591, 0.66506, 0.79922, 0.68345, 0.83534, 0.95489, 0.95532, 0.95599, 0.95608, 0.94166, 0.94094, 0.9351, 0.93518, 0.93511, 0.25989, 0.25993, 0.4304, 0.6915, 0.78946, 0.78945, 0.41919, 0.43965, 0.43951, 0.4211, 0.42113, 0.3226, 0.32257, 0.40995, 0.38681, 0.42457, 0.41193, 0.35552, 0.27703, 0.27713, 0.43221, 0.47356, 0.47362, 0.47373, 0.49181, 0.66001, 0.65976, 0.63307, 0.87486, 0.95715, 0.95704, 0.9606, 0.961, 0.9624, 0.96171, 0.95715, 0.95753, 0.95735, 0.95526, 0.67017, 0.36424, 0.3618, 0.4218, 0.46691, 0.41614, 0.36547, 0.39755, 0.41206, 0.39683, 0.40546, 0.40546, 0.38591, 0.39889, 0.39783, 0.55336, 0.53037, 0.49427, 0.40783, 0.6253, 0.67566, 0.61671, 0.50988, 0.63371, 0.49486, 0.49483, 0.15793, 0.11955, 0.11957, 0.19758, 0.1976, 0.18072, 0.18071, 0.11003, 0.17109, 0.17113, 0.17108, 0.17109, 0.20029, 0.20014, 0.434, 0.43395, 0.43393, 0.30554, 0.30541], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"offre de soins": {
men: [0.46023, 0.45601, 0.50818, 0.50822, 0.51965, 0.54826, 0.54796, 0.50826, 0.50832, 0.51968, 0.5202, 0.5202, 0.49433, 0.53813, 0.61414, 0.59162, 0.41815, 0.41808, 0.41827, 0.41856, 0.27742, 0.52119, 0.48557, 0.57428, 0.45888, 0.47589, 0.50402, 0.2701, 0.27017, 0.30052, 0.30036, 0.30036, 0.30036, 0.28574, 0.34586, 0.34545, 0.34764, 0.28892, 0.31758, 0.35403, 0.33559, 0.70481, 0.70492, 0.57024, 0.63949, 0.59702, 0.59691, 0.67169, 0.66858, 0.67251, 0.68669, 0.68714, 0.68688, 0.64345, 0.64342, 0.68696, 0.71713, 0.8197, 0.81854, 0.96019, 0.9605, 0.95787, 0.95547, 0.71432, 0.62038, 0.75796, 0.58796, 0.58815, 0.59973, 0.55171, 0.49565, 0.49581, 0.49886, 0.49889, 0.49882, 0.50877, 0.50876, 0.53951, 0.52645, 0.47254, 0.48289, 0.45724, 0.46734, 0.43403, 0.60767, 0.60765, 0.62474, 0.62465, 0.62452, 0.59062, 0.62945, 0.59567, 0.62346, 0.62355, 0.62375, 0.69805, 0.63557, 0.55137, 0.45, 0.49501, 0.31468, 0.31458, 0.31461, 0.37382, 0.21635, 0.33897, 0.38617, 0.38615, 0.38604, 0.38588], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hôpital public": {
men: [0.39673, 0.57375, 0.51843, 0.52478, 0.53871, 0.49506, 0.54346, 0.6033, 0.60337, 0.59044, 0.59103, 0.61726, 0.61707, 0.61767, 0.47087, 0.34004, 0.5433, 0.61802, 0.61829, 0.61872, 0.61879, 0, 0.59732, 0.59724, 0.59729, 0.59725, 0.59757, 0.33406, 0.53133, 0.47481, 0.44076, 0.44076, 0.26862, 0.33003, 0.24836, 0.23764, 0.14186, 0.14177, 0.14176, 0.13522, 0.17456, 0.30188, 0.21558, 0.29133, 0.2973, 0.33059, 0.37851, 0.37702, 0.45014, 0.41148, 0.35983, 0.42134, 0.35787, 0.36634, 0.35661, 0.46654, 0.536, 0.53177, 0.55754, 0.55745, 0.59749, 0.58799, 0.60439, 0.66189, 0.69853, 0.6867, 0.77454, 0.78152, 0.80301, 0.81408, 0.83165, 0.9016, 0.90003, 0.88964, 0.77077, 0.75312, 0.74035, 0.69792, 0.71368, 0.7334, 0.73716, 0.71819, 0.64262, 0.5225, 0.51296, 0.50766, 0.44177, 0.4494, 0.53283, 0.50468, 0.50466, 0.50508, 0.54193, 0.4793, 0.45779, 0.45784, 0.48067, 0.53139, 0.54235, 0.4647, 0.45035, 0.57281, 0.52934, 0.52358, 0.52632, 0.52586, 0.52667, 0.50402, 0.4872, 0.4876], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"services hospitaliers": {
men: [0.51286, 0.51536, 0.46709, 0.50749, 0.50769, 0.50768, 0.5074, 0.39559, 0.39564, 0.39572, 0.48949, 0.4895, 0.48935, 0.75779, 0.61705, 0.38274, 0.67414, 0, 0, 0, 0.61167, 0.50552, 0.50513, 0.50506, 0.50511, 0.50507, 0.41718, 0.37896, 0.41249, 0.41238, 0.3538, 0.3538, 0.3538, 0.35363, 0.25478, 0, 0, 0, 0, 0.49233, 0.60713, 0.35993, 0.35999, 0.35998, 0.41497, 0.41512, 0.41505, 0.41531, 0.33019, 0.39219, 0.39247, 0.43193, 0.43176, 0.26434, 0.26433, 0.38368, 0.42603, 0.42592, 0.4261, 0.42603, 0.42617, 0.42549, 0.84013, 0.81752, 0.81681, 0.60275, 0.60266, 0.60286, 0.60293, 0.751, 0.39499, 0.39512, 0.44023, 0.44026, 0.4402, 0.44059, 0.38282, 0.38257, 0.40318, 0.4436, 0.44374, 0.44371, 0.4078, 0.34681, 0.70243, 0.78755, 0.31879, 0.36714, 0.39659, 0.35358, 0.28915, 0.28939, 0.26503, 0.26507, 0.26516, 0.30144, 0.32726, 0.35236, 0.35292, 0.24248, 0.60666, 0.51065, 0.53456, 0.9497, 0.94897, 0.94813, 0.94802, 0.94798, 0.94771, 0.13374], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agence régionale de santé": {
men: [0.42379, 0.4322, 0.48609, 0.48643, 0.47738, 0.48022, 0.55994, 0.65974, 0.66077, 0.70609, 0.7068, 0.70681, 0.6705, 0.61767, 0.63558, 0.63551, 0.62283, 0.65312, 0.71635, 0.74095, 0.71634, 0.61722, 0.58043, 0.087454, 0.0875, 0.1036, 0.22483, 0.30088, 0.30099, 0.32956, 0.24711, 0.23625, 0.21805, 0.22701, 0.24853, 0.26787, 0.27191, 0.35047, 0.41215, 0.46572, 0.47121, 0.4622, 0.4684, 0.44535, 0.64795, 0.69489, 0.73938, 0.73736, 0.75408, 0.74887, 0.72234, 0.74751, 0.56619, 0.48357, 0.43373, 0.36562, 0.40944, 0.40934, 0.32713, 0.26415, 0.25798, 0.2064, 0.18703, 0.16736, 0.15861, 0.1609, 0.19622, 0.20158, 0.20062, 0.28239, 0.23602, 0.22429, 0.2416, 0.31464, 0.36211, 0.39507, 0.40821, 0.37291, 0.41462, 0.41474, 0.41488, 0.41485, 0.42973, 0.33556, 0.40929, 0.426, 0.35442, 0.35831, 0.34647, 0.35247, 0.32258, 0.33921, 0.38116, 0.36806, 0.36818, 0.36822, 0.37081, 0.4398, 0.35767, 0.40004, 0.37891, 0.35549, 0.35553, 0.36981, 0.3197, 0.4271, 0.41145, 0.42286, 0.36347, 0.35429], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hospitalisation": {
men: [0.44077, 0.41832, 0.39442, 0.38023, 0.32362, 0.39161, 0.42353, 0.49473, 0.4563, 0.37428, 0.34348, 0.33194, 0.34297, 0.24229, 0.28863, 0.33178, 0.38284, 0.35908, 0.35226, 0.25575, 0.25012, 0.25901, 0.27811, 0.32265, 0.33499, 0.35091, 0.33454, 0.3783, 0.32254, 0.32395, 0.29283, 0.31235, 0.29096, 0.33007, 0.33387, 0.32791, 0.2566, 0.25925, 0.28601, 0.27765, 0.27547, 0.25799, 0.24345, 0.2093, 0.20656, 0.19475, 0.1961, 0.20032, 0.18114, 0.1542, 0.17886, 0.15443, 0.17285, 0.15838, 0.17594, 0.17476, 0.20499, 0.28886, 0.31291, 0.35075, 0.2966, 0.32308, 0.45045, 0.47471, 0.47758, 0.4914, 0.4733, 0.46553, 0.4116, 0.43628, 0.43265, 0.40789, 0.38579, 0.37513, 0.40719, 0.38741, 0.30666, 0.28179, 0.21964, 0.17493, 0.16473, 0.1695, 0.20844, 0.19889, 0.21588, 0.2196, 0.26685, 0.27427, 0.27746, 0.26456, 0.25471, 0.28268, 0.34453, 0.3374, 0.33856, 0.34142, 0.31214, 0.33829, 0.32967, 0.41251, 0.35745, 0.33389, 0.33384, 0.36395, 0.44464, 0.52308, 0.5187, 0.52736, 0.54237, 0.57555], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"blocs chirurgicaux": {
men: [0.95772, 0.95762, 0.95774, 0.95782, 0.9582, 0.95819, 0.95766, 0.9577, 0.95782, 0.95865, 0.95961, 0.95962, 0.95933, 0.95783, 0.93519, 0.93508, 0.93503, 0.93488, 0.93529, 0.93595, 0.93604, 0.9343, 0.93358, 0, 0, 0, 0, 0, 0, 0.95025, 0.95793, 0.95792, 0.95791, 0.95745, 0.95713, 0.95851, 0.95858, 0.95799, 0.95792, 0.95873, 0.95861, 0.95907, 0.95921, 0.95516, 0.94, 0.94034, 0.94017, 0.94077, 0.94089, 0.94111, 0.94178, 0.94239, 0.94203, 0.93136, 0.93132, 0.93079, 0.93068, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24176, 0.2417, 0.24172, 0.24169, 0.2419, 0.2419, 0.24175, 0.24177, 0.24184, 0.24192, 0.2419, 0.94167, 0.94202, 0.94095, 0.93241, 0.93211, 0.93197, 0.93178, 0.93206, 0.93202, 0.93279, 0.9335, 0.93363, 0.93394, 0.93404, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cliniques privées": {
men: [0.14206, 0.14205, 0.36208, 0.36211, 0.69836, 0.62938, 0.94058, 0.94063, 0.94074, 0.94092, 0.94187, 0.94188, 0.94159, 0.9425, 0.94336, 0.94325, 0, 0, 0, 0, 0, 0.9373, 0.94858, 0.94846, 0.94854, 0.94847, 0.94898, 0.9491, 0.94934, 0.94909, 0.94858, 0.94857, 0.94856, 0.95125, 0.95094, 0.95017, 0.94041, 0.93982, 0.93976, 0.93971, 0.93959, 0.94657, 0.94672, 0.94672, 0.94698, 0.94733, 0.94716, 0.94122, 0.3985, 0.30839, 0.30861, 0.28651, 0.2864, 0.28632, 0.23641, 0.11136, 0.11134, 0.11131, 0.11136, 0.11134, 0.11138, 0.1112, 0.11518, 0, 0.20113, 0.21959, 0.21955, 0.21963, 0.30071, 0.33747, 0.45856, 0.45871, 0.45859, 0.47524, 0.47518, 0.4756, 0.67812, 0.67768, 0.93878, 0.93907, 0.93936, 0.93931, 0.93876, 0.9391, 0.92038, 0.086699, 0.086671, 0, 0, 0, 0, 0, 0, 0, 0.32049, 0.32052, 0.32086, 0.23388, 0.23425, 0.45008, 0.45019, 0.58987, 0.58993, 0.58984, 0.58938, 0.58886, 0.58879, 0.72382, 0.65838, 0.6581], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés hospitalières": {
men: [0.94442, 0.93958, 0.9397, 0.93978, 0.94015, 0.94014, 0.93962, 0.93966, 0.93977, 0.94355, 0.9445, 0.94451, 0.93926, 0.94017, 0.93519, 0.93508, 0.93503, 0.93488, 0.93529, 0.93595, 0.93604, 0.9343, 0.93358, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9355, 0.13292, 0.13311, 0.18588, 0.18576, 0.18575, 0.18574, 0.18572, 0.18581, 0.18583, 0.18583, 0.18589, 0.18595, 0.18592, 0.12614, 0.93643, 0.93664, 0.93923, 0.93984, 0.93948, 0.94403, 0.94399, 0.94345, 0.94335, 0.94311, 0.9435, 0.94336, 0.94366, 0.94215, 0.94954, 0.94936, 0.94535, 0.94496, 0.94482, 0.9422, 0.94231, 0.94221, 0.94265, 0.94295, 0.94272, 0.94277, 0.94265, 0.94349, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94111, 0.94098, 0.38487, 0.38498, 0.38496, 0.38528, 0.38558, 0.38563, 0.38576, 0.3858, 0.3862, 0.38618, 0.3868, 0.38678, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"intervention chirurgicale": {
men: [0.95053, 0.95522, 0.88322, 0.88329, 0.87012, 0.87012, 0.86963, 0.8419, 0.842, 0.84217, 0.84301, 0.84302, 0.84276, 0.84358, 0.82479, 0.73399, 0.94336, 0.46055, 0.40492, 0.40521, 0.40525, 0.40449, 0.53804, 0.5589, 0.55894, 0.55891, 0.5592, 0.55928, 0.57468, 0.51883, 0.488, 0.55306, 0.69665, 0.69631, 0.69608, 0.52876, 0.36501, 0.31548, 0.28367, 0.28365, 0.28361, 0.28375, 0.24138, 0.2787, 0.27878, 0.3125, 0.21488, 0.33206, 0.3321, 0.45327, 0.24578, 0.14138, 0.11426, 0.18934, 0.12322, 0.12315, 0.11082, 0.081071, 0.081105, 0.079453, 0.079479, 0.032455, 0.032468, 0.037459, 0.42479, 0.45801, 0.48886, 0.44582, 0.48934, 0.48928, 0.50531, 0.6093, 0.62131, 0.63098, 0.6309, 0.70229, 0.70228, 0.73566, 0.29971, 0.28527, 0.28536, 0.46856, 0.76109, 0.76137, 0.52663, 0.52661, 0.36873, 0.36868, 0.3686, 0.36871, 0.3687, 0.369, 0, 0, 0.2784, 0.27843, 0.27872, 0.27871, 0.93897, 0.94803, 0.94826, 0.94797, 0.94806, 0.95189, 0.95628, 0.95543, 0.84102, 0.2514, 0.22279, 0.22269], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Fédération hospitalière": {
men: [0.7159, 0.95591, 0.95776, 0.95784, 0.95929, 0.95928, 0.95875, 0.9588, 0.95891, 0.9591, 0.96006, 0.96008, 0.95978, 0.95867, 0.70269, 0.6309, 0.42733, 0.42726, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42268, 0.42329, 0.42332, 0.93425, 0.93419, 0.94855, 0.94843, 0.94888, 0.94903, 0.94902, 0.94929, 0.94964, 0.95411, 0.95719, 0.95628, 0.9565, 0.95718, 0.95781, 0.95744, 0.95207, 0.95203, 0.95149, 0.95138, 0.95114, 0.95154, 0.95139, 0.94381, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94558, 0.94709, 0.95254, 0.95278, 0.95248, 0.95258, 0.95242, 0.95169, 0.95479, 0.95468, 0.95464, 0.95437, 0.95397], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"établissements hospitaliers": {
men: [0.53769, 0.68518, 0.68527, 0.68532, 0.68559, 0.68558, 0.95031, 0.95347, 0.95359, 0.95377, 0.95519, 0.95083, 0.95053, 0.95145, 0.95509, 0.95712, 0.95707, 0.95691, 0.95733, 0.83763, 0.83772, 0.79997, 0.51119, 0.46887, 0.45409, 0.45405, 0.4543, 0.45436, 0.2578, 0.31807, 0.3179, 0.31789, 0.31789, 0.4233, 0.42316, 0.51499, 0.81467, 0.47136, 0.47133, 0.4713, 0.47124, 0.47147, 0.30812, 0.27371, 0.24408, 0.24417, 0.24413, 0.20324, 0.20327, 0.10582, 0.10589, 0.18306, 0.18299, 0.18294, 0.18293, 0.18282, 0.43742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11855, 0.11856, 0.11854, 0.11865, 0.19085, 0.19072, 0.19074, 0.23041, 0.32927, 0.32925, 0.36881, 0.36894, 0.80098, 0.80095, 0.75903, 0.75892, 0.75877, 0.75899, 0.7114, 0.71198, 0.71252, 0.71263, 0.57983, 0.67999, 0.55555, 0.55553, 0.50953, 0.5095, 0.43745, 0.43732, 0.53922, 0.60946, 0.5663, 0.58741, 0.62822, 0.66381, 0.66363, 0.62932], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moelle osseuse": {
men: [0.73627, 0.7362, 0.73629, 0.73636, 0.73664, 0.73664, 0.73623, 0.73626, 0.94612, 0.94198, 0.94293, 0.93737, 0.93708, 0.93799, 0.94952, 0.94941, 0.94936, 0.9492, 0.94962, 0.84437, 0.84445, 0.86475, 0.83553, 0.83542, 0.83549, 0.59753, 0.59785, 0.59793, 0.3013, 0.23551, 0.33546, 0.33545, 0.33545, 0.37427, 0.37414, 0.186, 0.18601, 0.1859, 0.18588, 0.37104, 0.37099, 0.28658, 0.28662, 0.48598, 0, 0, 0, 0, 0, 0.86285, 0.88936, 0.82318, 0.82287, 0.82264, 0.83421, 0.45138, 0.45133, 0.45122, 0.45141, 0.45134, 0.45149, 0.45076, 0.45094, 0.2231, 0.071696, 0.07667, 0.076659, 0.076684, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6741, 0.67434, 0.6924, 0.64781, 0.60956, 0.60947, 0.60935, 0.60953, 0.6095, 0.61, 0.61047, 0.61056, 0.61076, 0.61082, 0.30232, 0.30231, 0, 0, 0, 0, 0, 0.49504, 0.33618, 0.33588, 0.33584, 0.33583, 0.33573, 0.33559], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"imagerie médicale": {
men: [0.55564, 0.55558, 0.55565, 0.65992, 0.66017, 0.61154, 0.42783, 0.42785, 0.4279, 0.42799, 0.38874, 0.38874, 0.38862, 0.65953, 0.81408, 0.81398, 0.81394, 0.5595, 0.55975, 0.56015, 0.75358, 0.75218, 0.57652, 0.31754, 0.40589, 0.40586, 0.40608, 0.36831, 0.29165, 0.29157, 0.29142, 0.29141, 0.29141, 0.29127, 0.11561, 0.11577, 0.13867, 0.44998, 0, 0, 0, 0, 0, 0.16861, 0.16866, 0.25437, 0.25433, 0.25449, 0.25452, 0.25458, 0.19405, 0.19418, 0.20455, 0.20449, 0.20448, 0.20437, 0.16333, 0.1062, 0.092922, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066671, 0.066675, 0.066667, 0.10123, 0.10123, 0.10116, 0.10117, 0.19643, 0.31507, 0.31505, 0.31487, 0.31498, 0.31462, 0.52285, 0.51826, 0.51819, 0.51808, 0.6334, 0.68453, 0.6851, 0.68562, 0.68571, 0.68594, 0.68601, 0.68672, 0.6867, 0.68779, 0.94238, 0.94261, 0.94233, 0.94242, 0.94226, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgences médicales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18195, 0.19918, 0.22021, 0.51602, 0.94092, 0.94142, 0.94155, 0.94178, 0.94153, 0.94103, 0.94102, 0.941, 0.94056, 0.94024, 0, 0, 0, 0, 0, 0.95474, 0.82235, 0.82248, 0.82248, 0.82271, 0.82301, 0.82286, 0.84356, 0.84367, 0.80129, 0.80186, 0.80239, 0.80208, 0.80186, 0.42267, 0.68303, 0.68296, 0.68279, 0.68307, 0.68297, 0.68319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94265, 0.94295, 0.94272, 0.94277, 0.94265, 0.94349, 0.68617, 0.68573, 0.68579, 0.686, 0.68621, 0.77414, 0.77368, 0.77397, 0.60057, 0.60055, 0.60036, 0.60027, 0.60015, 0.416, 0.55425, 0.55471, 0.55513, 0.55521, 0.55539, 0, 0, 0, 0.4058, 0.27213, 0.2722, 0.27211, 0.27214, 0.43889, 0.43855, 0.43816, 0.43811, 0.43809, 0.43796, 0.43778], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hospitalier": {
men: [0.68886, 0.70154, 0.72157, 0.72163, 0.72191, 0.72191, 0.75969, 0.80722, 0.79551, 0.72904, 0.72977, 0.72978, 0.91441, 0.71512, 0.72344, 0.72146, 0.71802, 0.7179, 0.71822, 0.71872, 0.71017, 0.72455, 0.724, 0.7239, 0.72396, 0.72391, 0.60604, 0.94698, 0.94178, 0.94153, 0.94103, 0.94102, 0.941, 0.94056, 0.14373, 0, 0, 0.076342, 0.076337, 0.076333, 0.073236, 0.07327, 0.054022, 0.054022, 0.10293, 0.10296, 0.10294, 0.10301, 0.1429, 0.14293, 0.15378, 0.080211, 0.08018, 0.080158, 0.078232, 0.078187, 0.10697, 0.10694, 0.033193, 0.033187, 0.033198, 0.033145, 0.17987, 0.17983, 0.17477, 0.591, 0.59091, 0.59111, 0.80654, 0.39923, 0.39942, 0.31901, 0.31893, 0.31894, 0.3189, 0.36889, 0.062859, 0.024067, 0.049953, 0.049968, 0.049984, 0.049982, 0.049952, 0.055847, 0.085876, 0.091047, 0.091018, 0.091005, 0.090987, 0.068733, 0.081293, 0.30266, 0.93999, 0.94013, 0.94044, 0.94887, 0.94985, 0.94982, 0.94626, 0.94621, 0.94644, 0.94615, 0.94625, 0.55461, 0.55418, 0.55369, 0.55362, 0.39157, 0.39146, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traumatisme crânien": {
men: [0.75028, 0.75021, 0.75031, 0.63199, 0.63224, 0.63223, 0.63188, 0.77445, 0.77454, 0.7747, 0.77547, 0.77548, 0.77524, 0.776, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94559, 0.94572, 0.94595, 0.9457, 0.94519, 0.94518, 0.94517, 0.94472, 0.9444, 0.52017, 0.52021, 0.51989, 0.51985, 0.51982, 0, 0, 0, 0, 0, 0.5967, 0.5966, 0.59698, 0.59705, 0.95007, 0.95075, 0.95137, 0.95101, 0.95074, 0.9507, 0.95016, 0.95005, 0.94982, 0.95021, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.91698, 0.91774, 0.91843, 0.91857, 0.91887, 0.91896, 0.91992, 0.91988, 0.92135, 0.92129, 0.015708, 0.015703, 0.015704, 0.015702, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"établissements médico-sociaux": {
men: [0.95731, 0.95696, 0.95708, 0.95716, 0.95753, 0.95752, 0.95699, 0.95704, 0.77783, 0.52383, 0.52435, 0.52436, 0.23344, 0.23366, 0.23387, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17226, 0.17221, 0.17212, 0.17212, 0.17211, 0.17203, 0.60147, 0.93987, 0.9445, 0.94392, 0.9494, 0.94935, 0.94922, 0.94968, 0.94835, 0.94834, 0.94861, 0.94896, 0.94879, 0.9494, 0.94701, 0.94723, 0.94418, 0.9448, 0, 0, 0, 0, 0, 0, 0.94523, 0.94508, 0.94539, 0.94387, 0.94424, 0.94406, 0.94325, 0.94285, 0.94271, 0.94302, 0.94313, 0.94303, 0.94347, 0.94377, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cordon ombilical": {
men: [0.179, 0.17898, 0.179, 0.17902, 0.17909, 0.21559, 0.21547, 0.21548, 0.31208, 0.31214, 0.46868, 0.93737, 0.93708, 0.93799, 0.93884, 0.93873, 0.93868, 0.94463, 0.94505, 0.94571, 0.94581, 0.94405, 0.4469, 0.44685, 0.44688, 0.44685, 0.44709, 0.21316, 0.21321, 0.21316, 0.19595, 0, 0, 0, 0, 0, 0.13169, 0.13161, 0.1316, 0.13159, 0.13157, 0.16661, 0.15348, 0.15348, 0.16005, 0.16011, 0.16008, 0.16018, 0.3271, 0.63493, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28529, 0.28542, 0.28552, 0.28544, 0.28546, 0.28542, 0.28568, 0.28568, 0.28549, 0.28552, 0.30272, 0.93237, 0.93232, 0.93177, 0, 0, 0, 0, 0, 0, 0.9501, 0.95006, 0.95084, 0.95157, 0.9517, 0.95201, 0.95211, 0.9531, 0.85379, 0.85515, 0.8551, 0.85531, 0.85505, 0.85513, 0.5299, 0.52949, 0.52902, 0.52896, 0.52894, 0.52879, 0.14413], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hôpital psychiatrique": {
men: [0.73377, 0.7337, 0.73379, 0.73385, 0.7437, 0.74369, 0.74328, 0.6798, 0.67988, 0.68002, 0.63545, 0.76445, 0.76422, 0.21293, 0.11458, 0.10599, 0.10598, 0.098586, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.107, 0.445, 0.44532, 0.44561, 0.44544, 0.44532, 0.4453, 0.44505, 0.445, 0.44488, 0.37041, 0.37035, 0.65923, 0.65817, 0.76516, 0.76501, 0.76436, 0.76403, 0.76392, 0.76417, 0.82514, 0.82505, 0.82544, 0.8984, 0.95582, 0.95588, 0.95576, 0.95789, 0.95527, 0.95465, 0.95473, 0.81383, 0.81409, 0.81404, 0.78596, 0.78624, 0.78535, 0.45703, 0.28509, 0.28505, 0.17386, 0.19711, 0.1971, 0.32829, 0.20216, 0.2237, 0.15697, 0.14742, 0.13414, 0.13414, 0.13435, 0.13434, 0.14526, 0.14522, 0.15314, 0.082703, 0.08264, 0, 0, 0.083713, 0.16174, 0.65148], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"foyers épidémiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93844, 0.93669, 0.93597, 0.93585, 0.93593, 0.93586, 0.93636, 0.93649, 0.94174, 0.94149, 0.94098, 0.94097, 0.94096, 0.94051, 0.93194, 0.93328, 0.93335, 0.93277, 0.9327, 0.93265, 0.93253, 0.93298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4498, 0.44975, 0.44963, 0.44982, 0.44975, 0.4499, 0.93579, 0.93615, 0.93597, 0.93517, 0.93478, 0.93464, 0.93495, 0.93505, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70144, 0.77055, 0.77052, 0.77115, 0.77174, 0.94997, 0.59393, 0.59399, 0.5946, 0.59458, 0.59553, 0.59549, 0.46229, 0.46215, 0.22521, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"samu": {
men: [0.063763, 0.0835, 0.077977, 0.077983, 0, 0.24789, 0.37446, 0.37448, 0.34644, 0.33249, 0.33283, 0.33283, 0.37137, 0.38384, 0.45066, 0.43074, 0.53011, 0.53002, 0.53025, 0.35904, 0.22952, 0.2857, 0.31263, 0.30878, 0.35485, 0.35482, 0.33826, 0.32551, 0.35728, 0.40847, 0.37, 0.45511, 0.4551, 0.4366, 0.45679, 0.40655, 0.44336, 0.44945, 0.40457, 0.40454, 0.52959, 0.52985, 0.50216, 0.36287, 0.36297, 0.12447, 0.12445, 0.15192, 0.13693, 0.15703, 0, 0, 0, 0.077072, 0.29964, 0.29947, 0.32197, 0.4426, 0.5135, 0.51342, 0.51358, 0.56012, 0.68994, 0.75512, 0.69581, 0.69551, 0.69541, 0.68608, 0.63872, 0.50393, 0.44544, 0.41578, 0.36817, 0.3682, 0.36815, 0.30931, 0.24375, 0.24359, 0.050648, 0.049261, 0.049277, 0.049274, 0.15271, 0.18279, 0.28279, 0.36897, 0.39137, 0.39131, 0.39123, 0.47614, 0.75782, 0.75845, 0.71116, 0.67637, 0.55578, 0.55584, 0.58108, 0.44289, 0.37198, 0.29387, 0.29395, 0.29386, 0.29389, 0.23836, 0.14124, 0.13098, 0.13391, 0.14102, 0.27469, 0.34348], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"insuffisance rénale": {
men: [0.064233, 0.051898, 0.051904, 0.051909, 0.051929, 0.051928, 0.071208, 0.13649, 0.13651, 0.13653, 0.15574, 0.15574, 0.18912, 0.2494, 0.20594, 0.52294, 0.52291, 0.52282, 0.52305, 0.52342, 0.32212, 0.18157, 0.40457, 0.40451, 0.40455, 0.40452, 0.40473, 0.40479, 0.54878, 0.54863, 0.54834, 0.54833, 0.54833, 0.54806, 0.45554, 0.58702, 0.37229, 0.60643, 0.60639, 0.60636, 0.60628, 0.60657, 0.60666, 0.60666, 0.26049, 0.26059, 0.26054, 0.26071, 0.26074, 0.30762, 0.16466, 0, 0, 0, 0, 0, 0, 0, 0, 0.22775, 0.22782, 0.22746, 0.48972, 0.48963, 0.73126, 0.86147, 0.86134, 0.86163, 0.95918, 0.71505, 0.56972, 0.5699, 0.56976, 0.55467, 0.5546, 0.54751, 0.50849, 0.50817, 0.47154, 0.18917, 0.18923, 0.17839, 0.17828, 0.052335, 0.1962, 0.19619, 0.1384, 0.13838, 0.13835, 0, 0, 0.31701, 0.31725, 0.3173, 0.3174, 0.57705, 0.57765, 0.57763, 0.57855, 0.57851, 0.73081, 0.73058, 0.35746, 0.3574, 0.35713, 0.16271, 0.16269, 0.16268, 0.16264, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"troubles cognitifs": {
men: [0.24021, 0.14939, 0, 0, 0, 0, 0, 0, 0, 0.068571, 0.06864, 0.10736, 0.071187, 0.025684, 0.025707, 0.028892, 0.032597, 0.032591, 0.032606, 0.032629, 0.032632, 0.032571, 0.032546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93073, 0.93955, 0.94397, 0.94392, 0.94379, 0.94425, 0.94439, 0.94439, 0.52858, 0.52877, 0.52867, 0.52901, 0.52908, 0.5292, 0.46759, 0.30482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93602, 0.93562, 0.93548, 0.93579, 0.9359, 0.9358, 0.93624, 0.95235, 0.95211, 0.95217, 0.95205, 0.95353, 0.95444, 0.95383, 0.95428, 0.95457, 0.95488, 0.95482, 0.95426, 0.95461, 0.95352, 0.94314, 0.51453, 0.51445, 0.51435, 0.47084, 0.38084, 0.38116, 0, 0, 0, 0, 0, 0, 0.15671, 0.1567, 0.19083, 0.19077, 0.19079, 0.19076, 0.19061, 0.19044, 0.19042, 0.19041, 0.19036, 0.19028], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"blessés graves": {
men: [0.65082, 0.65075, 0.32176, 0.29224, 0.29235, 0.27951, 0.27936, 0.19414, 0.19416, 0.11717, 0.11729, 0.11974, 0.063411, 0.063472, 0.0253, 0.025297, 0.032224, 0.084572, 0.084609, 0.08488, 0.084888, 0.10987, 0.10364, 0.37569, 0.37572, 0.3757, 0.3759, 0.56721, 0.56159, 0.63915, 0.63881, 0.52536, 0.52535, 0.54778, 0.5476, 0.59554, 0.65162, 0.65122, 0.72279, 0.72275, 0.55911, 0.43217, 0.43223, 0.29993, 0.30001, 0.36468, 0.35702, 0.33928, 0.33932, 0.28058, 0.28078, 0.28096, 0.15156, 0.11504, 0.1416, 0.14949, 0.14947, 0.14661, 0.14667, 0.14665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1353, 0.13526, 0.13527, 0.13525, 0.13537, 0.13537, 0.13529, 0.93017, 0.93045, 0.93075, 0.9307, 0.94935, 0.94969, 0.94862, 0.94726, 0.94696, 0.94682, 0.94925, 0.94953, 0.94977, 0.41544, 0.51716, 0.45731, 0.45746, 0.4575, 0.30551, 0.30549, 0.30598, 0.30596, 0.30604, 0.30594, 0.23656, 0.23652, 0.27838, 0.29042, 0.090228, 0.088766, 0.08874, 0.036504], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pratiques médicales": {
men: [0.079735, 0.079727, 0.079737, 0, 0, 0, 0, 0, 0.4727, 0.47279, 0.47327, 0.47327, 0.47313, 0.47358, 0.47401, 0.47396, 0.31571, 0.31566, 0.3158, 0.36061, 0.36064, 0.35997, 0, 0, 0, 0, 0.32364, 0.32368, 0.2718, 0.41608, 0.54117, 0.54116, 0.54116, 0.5409, 0.54072, 0.42505, 0.42509, 0.42482, 0.42479, 0.42477, 0.34887, 0.34904, 0.47185, 0.41423, 0.41435, 0.4145, 0.41443, 0.41469, 0.17877, 0.2357, 0.23587, 0.25853, 0.25843, 0.25836, 0.25835, 0.2582, 0.25817, 0.104, 0.10405, 0.15862, 0.15867, 0.15841, 0.42098, 0.4209, 0.42054, 0.92966, 0.92952, 0.92983, 0.92994, 0.14035, 0.14042, 0.14046, 0.14043, 0, 0, 0, 0, 0, 0, 0.4561, 0.45624, 0.45622, 0.45595, 0.71284, 0.71204, 0.62417, 0.62397, 0.62388, 0.62376, 0.5417, 0.54167, 0.42169, 0.51575, 0.11905, 0.11909, 0.1191, 0.11922, 0.11922, 0.11941, 0.30421, 0.30429, 0.30419, 0.30422, 0.31691, 0.31144, 0.40955, 0.32736, 0.51449, 0.51434, 0.51412], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"commission médicale": {
men: [0.94387, 0.93985, 0.93997, 0.94005, 0.94041, 0.9404, 0.93988, 0.93993, 0.94004, 0.94022, 0.94117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1134, 0.16345, 0.16343, 0.24395, 0.24393, 0.24406, 0.24409, 0.24415, 0.39135, 0.4515, 0.54719, 0.54718, 0.54692, 0.94904, 0.94832, 0.34377, 0.34355, 0.27386, 0.27384, 0.27381, 0.27394, 0.26056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11837, 0.11842, 0.1184, 0.11844, 0.11825, 0.22997, 0.22993, 0.22973, 0.33508, 0.33503, 0.33514, 0.65628, 0.95149, 0.95194, 0.94951, 0.94927, 0.94933, 0.94921, 0.95005, 0.95005, 0.73033, 0.7304, 0.73062, 0.73085, 0.73081, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6199, 0.61935, 0.61928, 0.56706, 0.5669, 0.56666], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
