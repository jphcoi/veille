var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"vaccination contre la fièvre jaune": {
men: [0.96328, 0.96246, 0.9578, 0.95804, 0.95833, 0.95883, 0.95384, 0.95824, 0.95036, 0.95129, 0.95126, 0.9512, 0.95124, 0.94957, 0.94876, 0.94926, 0.95017, 0.94991, 0.94982, 0.94964, 0.94996, 0.9448, 0.94663, 0.94993, 0.94981, 0.94931, 0.95696, 0.96124, 0.96278, 0.95785, 0.95827, 0.95816, 0.95786, 0.95798, 0.95933, 0.96211, 0.96286, 0.96299, 0.96272, 0.96263, 0.96103, 0.96007, 0.95982, 0.9634, 0.96543, 0.96596, 0.96683, 0.96754, 0.96818, 0.96693, 0.96805, 0.96502, 0.96518, 0.96573, 0.96571, 0.96474, 0.96349, 0.96228, 0.96145, 0.96131, 0.96094, 0.96067, 0.95996, 0.9585, 0.95682, 0.95994, 0.95983, 0.95948, 0.96061, 0.96139, 0.96297, 0.96398, 0.96359, 0.96189, 0.96211, 0.96239, 0.96302, 0.96267, 0.96282, 0.96039, 0.96064, 0.96102, 0.9605, 0.95861, 0.95856, 0.95892, 0.95868, 0.96001, 0.96026, 0.96016, 0.95744, 0.95708, 0.95302, 0.95147, 0.9513, 0.9513, 0.94675, 0.95328, 0.9535, 0.95366, 0.95593, 0.95628, 0.95618, 0.95912, 0.95852, 0.96162, 0.96287, 0.96365, 0.96442, 0.96395], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espoir thérapeutique": {
men: [0.96328, 0.96246, 0.9578, 0.95804, 0.95833, 0.95883, 0.95384, 0.95824, 0.95036, 0.95129, 0.95126, 0.9512, 0.95124, 0.94957, 0.94876, 0.94926, 0.51039, 0.51024, 0.5102, 0.5101, 0.51027, 0.3847, 0.38545, 0.37611, 0.37606, 0.37586, 0.57858, 0.65374, 0.65479, 0.65143, 0.95827, 0.95816, 0.95786, 0.95798, 0.95933, 0.96211, 0.96286, 0.96299, 0.76042, 0.76036, 0.72261, 0.69954, 0.69936, 0.70197, 0.70704, 0.70743, 0.70807, 0.72714, 0.72948, 0.69617, 0.72259, 0.69462, 0.96518, 0.96573, 0.96571, 0.96474, 0.96349, 0.96228, 0.96145, 0.96131, 0.96094, 0.96067, 0.95996, 0.9585, 0.95682, 0.95994, 0.95983, 0.95948, 0.96061, 0.96139, 0.96297, 0.96398, 0.96359, 0.96189, 0.96211, 0.96239, 0.96302, 0.96267, 0.96282, 0.96039, 0.96064, 0.96102, 0.9605, 0.95861, 0.95856, 0.95892, 0.95868, 0.96001, 0.96026, 0.96016, 0.95744, 0.95708, 0.95302, 0.95147, 0.9513, 0.9513, 0.94675, 0.95328, 0.9535, 0.95366, 0.95593, 0.95628, 0.95618, 0.95912, 0.95852, 0.96162, 0.96287, 0.96365, 0.96442, 0.96395], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"efficacité virologique": {
men: [0.96328, 0.96246, 0.9578, 0.95804, 0.95833, 0.43674, 0.3234, 0.42661, 0.31896, 0.41691, 0.41689, 0.41687, 0.41688, 0.39401, 0.39367, 0.39388, 0.39426, 0.39415, 0.39411, 0.94964, 0.94996, 0.9448, 0.94663, 0.94993, 0.94981, 0.94931, 0.95696, 0.96124, 0.96278, 0.95785, 0.95827, 0.95816, 0.95786, 0.95798, 0.95933, 0.96211, 0.96286, 0.96299, 0.96272, 0.96263, 0.96103, 0.96007, 0.95982, 0.9634, 0.96543, 0.96596, 0.96683, 0.96754, 0.96818, 0.96693, 0.96805, 0.96502, 0.96518, 0.96573, 0.96571, 0.96474, 0.96349, 0.96228, 0.96145, 0.96131, 0.96094, 0.96067, 0.95996, 0.9585, 0.95682, 0.95994, 0.95983, 0.95948, 0.96061, 0.96139, 0.96297, 0.96398, 0.96359, 0.96189, 0.96211, 0.87656, 0.87648, 0.87616, 0.87872, 0.87179, 0.87202, 0.73098, 0.7236, 0.68893, 0.68889, 0.68916, 0.68898, 0.68994, 0.69012, 0.73432, 0.68204, 0.68178, 0.605, 0.52152, 0.52143, 0.9513, 0.94675, 0.95328, 0.9535, 0.95366, 0.95593, 0.95628, 0.95618, 0.95912, 0.95852, 0.96162, 0.96287, 0.96365, 0.96442, 0.96395], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pandemrix": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93772, 0.93821, 0.93912, 0.93885, 0.93877, 0.93859, 0.93891, 0.96702, 0.9749, 0.97875, 0.97949, 0.97897, 0.97854, 0.97968, 0.981, 0.94409, 0.95497, 0.92434, 0.92405, 0.92562, 0.92686, 0.9166, 0.90423, 0.90429, 0.90114, 0.90106, 0.9015, 0.90169, 0.90146, 0.88814, 0.75094, 0.96614, 0.96701, 0.96332, 0.95623, 0.95665, 0.961, 0.9627, 0.96285, 0.96341, 0.96338, 0.96253, 0.96128, 0.95863, 0.9638, 0.96366, 0.96329, 0.96298, 0.96269, 0.96274, 0.96153, 0.95994, 0.95983, 0.95948, 0.95913, 0.95975, 0.96133, 0.96127, 0.94782, 0.94615, 0.94636, 0.94534, 0.94605, 0.9457, 0.94555, 0.94373, 0.94693, 0.9473, 0.94716, 0.95764, 0.95759, 0.95534, 0.95509, 0.95642, 0.95667, 0.95799, 0.96222, 0.96185, 0.96193, 0.96383, 0.96298, 0.96299, 0.96337, 0.95548, 0.9557, 0.95586, 0.95477, 0.95511, 0.95502, 0.95512, 0.93858, 0.93913, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Préservatif masculin": {
men: [0.96328, 0.96246, 0.9578, 0.95804, 0.95833, 0.95883, 0.95384, 0.95824, 0.95036, 0.95129, 0.95126, 0.9512, 0.95124, 0.94957, 0.43261, 0.43284, 0.43326, 0.43314, 0.4331, 0.43301, 0.43316, 0.31327, 0.31388, 0.3052, 0.21488, 0.21477, 0.31887, 0.39406, 0.53846, 0.5357, 0.48568, 0.48562, 0.48547, 0.48553, 0.53419, 0.60037, 0.62171, 0.62333, 0.71056, 0.71049, 0.65706, 0.6307, 0.63054, 0.63289, 0.75774, 0.75816, 0.75884, 0.7753, 0.7774, 0.74858, 0.77149, 0.74694, 0.74706, 0.74749, 0.96571, 0.96474, 0.96349, 0.96228, 0.96145, 0.96131, 0.96094, 0.96067, 0.95996, 0.9585, 0.95682, 0.95994, 0.95983, 0.95948, 0.96061, 0.82658, 0.82794, 0.82881, 0.81335, 0.81191, 0.81209, 0.65563, 0.65431, 0.47605, 0.48364, 0.46801, 0.46813, 0.46832, 0.45858, 0.45635, 0.45633, 0.4565, 0.45638, 0.45702, 0.45714, 0.52825, 0.46176, 0.95708, 0.95302, 0.95147, 0.9513, 0.9513, 0.94675, 0.95328, 0.9535, 0.95366, 0.95593, 0.95628, 0.95618, 0.95912, 0.95852, 0.96162, 0.96287, 0.96365, 0.96442, 0.96395], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe pandémique": {
men: [0.96298, 0.96216, 0.95996, 0.9602, 0.96049, 0.96426, 0.96394, 0.96406, 0.96502, 0.96449, 0.96445, 0.96439, 0.96443, 0.96366, 0.95984, 0.96034, 0.96127, 0.961, 0.96091, 0.95874, 0.95907, 0.95888, 0.95468, 0.94425, 0.94413, 0.94364, 0.94322, 0.95383, 0.96482, 0.64761, 0.67103, 0.67095, 0.67074, 0.68289, 0.68247, 0.68255, 0.68244, 0.68249, 0.68229, 0.68223, 0.68256, 0.67534, 0.64873, 0.96514, 0.96093, 0.66901, 0.31656, 0.19242, 0.19253, 0.19261, 0.30681, 0.30627, 0.30632, 0.30649, 0.30649, 0.30621, 0.30582, 0.22313, 0.22304, 0.23462, 0.28993, 0.28984, 0.28975, 0.28977, 0, 0.17437, 0.30743, 0.38779, 0.38764, 0.3879, 0.38853, 0.95949, 0.96031, 0.95861, 0.95883, 0.95779, 0.95851, 0.95815, 0.958, 0.95232, 0.94503, 0, 0.93945, 0.93928, 0.93923, 0.93959, 0.93935, 0.94065, 0.9409, 0.94219, 0.94694, 0.94658, 0.94916, 0.95104, 0.95086, 0.95087, 0.94601, 0.94596, 0.94617, 0.94634, 0.94526, 0.9456, 0.9455, 0.9456, 0.93858, 0.93913, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccins pandémiques": {
men: [0.96959, 0.96523, 0.95996, 0.9602, 0.96049, 0.96099, 0.96068, 0.96079, 0.95732, 0.95586, 0.95582, 0.95577, 0.9558, 0.95504, 0.94406, 0.94455, 0.94546, 0.9452, 0.94511, 0.94493, 0.94526, 0.94507, 0.9469, 0.94425, 0.94413, 0.94364, 0.94322, 0.94432, 0, 0.95014, 0.94892, 0.94881, 0.94851, 0.94863, 0.94806, 0.94816, 0.94801, 0.94808, 0.94781, 0.94773, 0.94818, 0.95251, 0.95226, 0.94589, 0.94769, 0.95431, 0.95517, 0.95491, 0.95545, 0.95587, 0.95568, 0.95399, 0.95414, 0.95469, 0.95466, 0.9467, 0.94548, 0.96826, 0.96786, 0.9669, 0.96652, 0.96621, 0.96592, 0.76285, 0.76333, 0.76411, 0.76402, 0.76374, 0.76346, 0.76396, 0.76522, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95011, 0.94975, 0.94907, 0.95095, 0.95077, 0.95078, 0.95116, 0.95111, 0.95133, 0.95149, 0.95041, 0.95075, 0.95066, 0.95075, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"couverture vaccinale": {
men: [0.47276, 0.44255, 0.40819, 0.40829, 0.40841, 0.40863, 0.40849, 0.40854, 0.40707, 0.36155, 0.36154, 0.36152, 0.28104, 0.097725, 0.94635, 0.94685, 0.94776, 0.9475, 0.94741, 0.94723, 0.94755, 0.94736, 0.9492, 0.96287, 0.96275, 0.96224, 0.96181, 0.96294, 0.96027, 0.95534, 0.95412, 0.9623, 0.962, 0.96212, 0.96153, 0.96164, 0.96149, 0.95631, 0.95604, 0.95596, 0.95642, 0.95663, 0.95638, 0.95995, 0.96179, 0, 0, 0, 0, 0, 0.42481, 0.42406, 0.42413, 0.42437, 0.42436, 0.42398, 0.42343, 0.52298, 0.52276, 0.52269, 0.52248, 0.52232, 0.52216, 0.54506, 0.96498, 0.96742, 0.96858, 0.96823, 0.96787, 0.96851, 0.38179, 0.24365, 0.2315, 0.23109, 0.23114, 0.23089, 0.23106, 0.17991, 0.15561, 0.17627, 0.12506, 0.12511, 0.12509, 0.12506, 0.66191, 0.73773, 0.96215, 0.96693, 0.96718, 0.96851, 0.97102, 0.97349, 0.97226, 0.97274, 0.97345, 0.97346, 0.97435, 0.9743, 0.97452, 0.97373, 0.97316, 0.97147, 0.97138, 0.50234, 0.5369, 0.45904, 0.49795, 0.49835, 0.47291, 0.47268], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe saisonnière": {
men: [0.94906, 0, 0, 0, 0.93078, 0.93127, 0.93096, 0.95215, 0.96533, 0.96883, 0.96879, 0.96873, 0.96877, 0.62757, 0.67285, 0.67319, 0.61052, 0.61035, 0.62833, 0.62821, 0.61511, 0.60861, 0.57246, 0.51767, 0.5176, 0.51733, 0.5171, 0.57778, 0.29837, 0.29684, 0.43331, 0.43326, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098955, 0.31196, 0.4108, 0.41158, 0.45719, 0.4576, 0.45748, 0.41597, 0.41615, 0.41607, 0.41533, 0.4154, 0.41564, 0.63192, 0.59763, 0.64968, 0.87198, 0.88311, 0.885, 0.88466, 0.88438, 0.97782, 0.97788, 0.97892, 0.98021, 0.98043, 0.98103, 0.98067, 0.98132, 0.98208, 0.97272, 0.97021, 0.96664, 0.96685, 0.96581, 0.96653, 0.76536, 0.72723, 0.68771, 0.74931, 0.58569, 0.62167, 0.62156, 0.62152, 0.62176, 0.6216, 0.67704, 0.67721, 0.82825, 0.83214, 0.97134, 0.97095, 0.97287, 0.9698, 0.96981, 0.97173, 0.97168, 0.97191, 0.97207, 0.97096, 0.9703, 0.9702, 0.68558, 0.23317, 0.2333, 0.21868, 0.21886, 0.21904, 0.21893], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"col de l' utérus": {
men: [0.11627, 0.11617, 0.32659, 0.32667, 0.32677, 0.32694, 0.30842, 0.32498, 0.30689, 0.46645, 0.46643, 0.57968, 0.54021, 0.85911, 0.85838, 0.85883, 0.56749, 0.56733, 0.56728, 0.56717, 0.56736, 0.44162, 0.44247, 0.43296, 0.72982, 0.72944, 0.7589, 0.78437, 0.78563, 0.814, 0.82262, 0.82252, 0.84319, 0.86365, 0.8698, 0.88004, 0.88351, 0.88384, 0.81137, 0.8113, 0.89014, 0.88543, 0.8852, 0.87319, 0.87589, 0.87637, 0.85638, 0.82625, 0.67145, 0.63394, 0.6636, 0.63249, 0.72876, 0.6654, 0.58895, 0.58569, 0.58493, 0.5842, 0.57331, 0.57322, 0.51212, 0.51312, 0.55547, 0.51733, 0.45944, 0.51471, 0.51465, 0.56472, 0.69195, 0.69569, 0.69684, 0.69756, 0.67262, 0.67144, 0.80363, 0.75783, 0.35625, 0.35612, 0.4373, 0.42588, 0.42599, 0.42616, 0.41926, 0.44848, 0.44845, 0.44862, 0.44851, 0.44913, 0.44925, 0.44567, 0.96571, 0.96534, 0.95911, 0.69889, 0.69876, 0.69877, 0.67162, 0.61077, 0.61091, 0.61102, 0.65694, 0.65718, 0.65711, 0.31317, 0.31297, 0.25399, 0.25432, 0.22519, 0.22537, 0.29585], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccination contre la grippe": {
men: [0.46245, 0.44718, 0.34637, 0.36148, 0.41863, 0.50661, 0.3762, 0.43144, 0.64013, 0.55681, 0.55678, 0.55675, 0.57839, 0.56061, 0.62252, 0.6849, 0.69699, 0.6968, 0.69673, 0.67165, 0.67188, 0.82566, 0.82857, 0.92545, 0.92887, 0.92838, 0.92521, 0.98297, 0.90557, 0.65263, 0.59664, 0.59534, 0.59516, 0.60121, 0.60827, 0.56658, 0.52047, 0.51043, 0.49945, 0.48569, 0.48592, 0.49074, 0.51726, 0.50397, 0.55653, 0.56878, 0.5693, 0.53239, 0.47483, 0.47504, 0.7033, 0.63629, 0.63639, 0.68762, 0.68761, 0.69799, 0.7268, 0.8562, 0.84528, 0.73945, 0.73916, 0.73893, 0.76795, 0.77688, 0.7241, 0.77967, 0.78383, 0.79594, 0.79565, 0.78887, 0.76633, 0.73764, 0.72616, 0.9767, 0.97692, 0.97587, 0.97202, 0.96919, 0.29625, 0.35085, 0.33893, 0.3002, 0.30841, 0.30835, 0.29851, 0.30498, 0.3049, 0.30589, 0.30597, 0.47211, 0.34687, 0.34674, 0.46064, 0.41854, 0.41546, 0.40441, 0.47754, 0.47752, 0.4978, 0.49419, 0.50495, 0.51175, 0.5117, 0.41827, 0.52344, 0.52374, 0.5409, 0.54134, 0.54177, 0.54151], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pandémie de grippe": {
men: [0.054232, 0, 0, 0, 0.0084348, 0.0084392, 0.04381, 0.36577, 0.8795, 0.89815, 0.89812, 0.89806, 0.90136, 0.57533, 0.56991, 0.56642, 0.57868, 0.57852, 0.57781, 0.5777, 0.5779, 0.57002, 0.42879, 0.36161, 0.36156, 0.36137, 0.33046, 0.48688, 0.40258, 0.60873, 0.57367, 0.57361, 0.57343, 0.5735, 0.57315, 0.57322, 0.50525, 0.50528, 0.50514, 0.5051, 0.662, 0.66214, 0.71593, 0.95662, 0.9535, 0.95403, 0.065329, 0.065311, 0.11363, 0.11368, 0.11366, 0.11346, 0.11347, 0.11354, 0.11354, 0.13727, 0.20808, 0.48779, 0.52267, 0.5226, 0.956, 0.95569, 0.63667, 0.60538, 0.60577, 0.61412, 0.61405, 0.61382, 0.58731, 0.58789, 0.55871, 0.32688, 0.24342, 0.24299, 0.24305, 0.27644, 0.36866, 0.39843, 0.52344, 0.46555, 0.48406, 0.48425, 0.6648, 0.66468, 0.63146, 0.69322, 0.69305, 0.72224, 0.72243, 0.66949, 0.68523, 0.9628, 0.95789, 0.5263, 0.69977, 0.74832, 0.75607, 0.75603, 0.75621, 0.72863, 0.7278, 0.7073, 0.70723, 0.7073, 0.69646, 0.69687, 0.68628, 0.9683, 0.95958, 0.94172], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Hépatite virale": {
men: [0.52252, 0.52208, 0.49316, 0.49328, 0.49343, 0.241, 0.11095, 0.18052, 0.12116, 0.26068, 0.26067, 0.26066, 0.26067, 0.2475, 0.24729, 0.22872, 0.22894, 0.22888, 0.22886, 0.26179, 0.72505, 0.65813, 0.6594, 0.20966, 0.20963, 0.20952, 0.38073, 0.37162, 0.37222, 0.40851, 0.44952, 0.44947, 0.44933, 0.44938, 0.49819, 0.56568, 0.58775, 0.77992, 0.7797, 0.77963, 0.74434, 0.96007, 0.95982, 0.9634, 0.96543, 0.96596, 0.96683, 0.96754, 0.96818, 0.96693, 0.96805, 0.96502, 0.96518, 0.96573, 0.96571, 0.96474, 0.96349, 0.96228, 0.96145, 0.96131, 0.96094, 0.75798, 0.75027, 0.72214, 0.67596, 0.72068, 0.72059, 0.72033, 0.59584, 0.47954, 0.48033, 0.48083, 0.45067, 0.44988, 0.44998, 0.51325, 0.36964, 0.40371, 0.41012, 0.39696, 0.34891, 0.34904, 0.3749, 0.39545, 0.39543, 0.39558, 0.39548, 0.39603, 0.39613, 0.39715, 0.45575, 0.4097, 0.35623, 0.31254, 0.52143, 0.52143, 0.39661, 0.56289, 0.56302, 0.21716, 0.19516, 0.19523, 0.1691, 0.17559, 0.18796, 0.23207, 0.23237, 0.23256, 0.21343, 0.21332], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités de santé": {
men: [0.38846, 0.61616, 0.61475, 0.4971, 0.46741, 0.4004, 0.4347, 0.3466, 0.43838, 0.43691, 0.43689, 0.46395, 0.454, 0.42669, 0.42633, 0.39786, 0.39825, 0.44135, 0.45787, 0.58511, 0.55364, 0.74557, 0.60642, 0.60882, 0.60874, 0.52329, 0.52305, 0.46148, 0.46223, 0.80447, 0.82382, 0.82373, 0.82347, 0.81909, 0.81859, 0.8644, 0.86426, 0.86432, 0.86408, 0.864, 0.86442, 0.92484, 0.92459, 0.96307, 0.96449, 0.96502, 0.96589, 0.58483, 0.58516, 0.40668, 0.48326, 0.41079, 0.37628, 0.37649, 0.37648, 0.32846, 0.3828, 0.30961, 0.21624, 0.21621, 0.18165, 0.23807, 0.18519, 0.24721, 0.19346, 0.18271, 0.22697, 0.22689, 0.21965, 0.21496, 0.21792, 0.23231, 0.24808, 0.24765, 0.26708, 0.2855, 0.34225, 0.36228, 0.32616, 0.4051, 0.3592, 0.39157, 0.46734, 0.51132, 0.47362, 0.49502, 0.4705, 0.44854, 0.44866, 0.42827, 0.51391, 0.51281, 0.71029, 0.71948, 0.71934, 0.69056, 0.67063, 0.61765, 0.56972, 0.49611, 0.40353, 0.4211, 0.42106, 0.39812, 0.33054, 0.1138, 0.12294, 0.085555, 0.085624, 0.085582], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"h1n1": {
men: [0.16967, 0.18624, 0.15798, 0.15802, 0.14946, 0.18084, 0.21367, 0.27398, 0.56011, 0.57391, 0.58062, 0.57116, 0.58672, 0.31864, 0.29766, 0.2974, 0.29996, 0.29569, 0.29773, 0.29709, 0.30395, 0.31038, 0.26734, 0.24581, 0.24542, 0.24684, 0.24006, 0.38932, 0.54357, 0.66979, 0.68331, 0.69595, 0.69985, 0.69733, 0.70162, 0.69412, 0.69023, 0.68461, 0.68538, 0.68532, 0.64902, 0.64654, 0.65492, 0.50519, 0.32389, 0.2982, 0.21837, 0.1893, 0.15832, 0.15292, 0.22396, 0.2273, 0.22275, 0.22173, 0.23617, 0.25422, 0.27564, 0.38197, 0.44084, 0.44243, 0.52834, 0.52003, 0.53154, 0.54589, 0.51107, 0.54599, 0.56888, 0.58947, 0.60651, 0.58595, 0.55145, 0.43996, 0.34095, 0.34034, 0.35342, 0.44047, 0.60621, 0.60754, 0.64273, 0.61341, 0.60329, 0.57671, 0.59755, 0.61657, 0.57278, 0.57644, 0.59486, 0.61036, 0.53546, 0.47389, 0.48343, 0.48737, 0.49178, 0.45738, 0.49846, 0.50689, 0.57672, 0.55632, 0.63631, 0.63251, 0.67388, 0.57935, 0.6467, 0.58289, 0.60761, 0.6104, 0.63739, 0.61808, 0.58889, 0.60254], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gsk": {
men: [0.11263, 0.12041, 0.12667, 0.12058, 0.070247, 0.081099, 0.081073, 0.12918, 0.21485, 0.23297, 0.24872, 0.24871, 0.36388, 0.43562, 0.53746, 0.55979, 0.5373, 0.57785, 0.5778, 0.74869, 0.74895, 0.73309, 0.66247, 0.64638, 0.62807, 0.62774, 0.56605, 0.56671, 0.43493, 0.74845, 0.85706, 0.85696, 0.86155, 0.90678, 0.90623, 0.85667, 0.87853, 0.87859, 0.87834, 0.87826, 0.73971, 0.59926, 0.54722, 0.38802, 0.15937, 0.15946, 0.12295, 0.08531, 0.082242, 0.088442, 0.12939, 0.12917, 0.12919, 0.12926, 0.17695, 0.32002, 0.65639, 0.15165, 0.17294, 0.17291, 0.17285, 0.17279, 0.17754, 0.17251, 0.1449, 0.14505, 0.14503, 0.16565, 0.16559, 0.1657, 0.10496, 0.30034, 0.25862, 0.25817, 0.25822, 0.25795, 0.31289, 0.43923, 0.61618, 0.70861, 0.7088, 0.6546, 0.6545, 0.73737, 0.73733, 0.55171, 0.64828, 0.64919, 0.64935, 0.5994, 0.62837, 0.62813, 0.63602, 0.57889, 0.67167, 0.60672, 0.60697, 0.55924, 0.55937, 0.68708, 0.6863, 0.68655, 0.68648, 0.74357, 0.71009, 0.50062, 0.33442, 0.33469, 0.11439, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe": {
men: [0.1217, 0.13754, 0.14543, 0.14948, 0.14063, 0.18628, 0.19794, 0.24108, 0.61703, 0.75296, 0.74748, 0.74155, 0.74341, 0.45696, 0.44983, 0.44606, 0.45552, 0.45189, 0.44895, 0.44275, 0.44715, 0.45559, 0.42523, 0.28839, 0.28244, 0.27947, 0.26765, 0.49872, 0.545, 0.66814, 0.68809, 0.69469, 0.69284, 0.70946, 0.7139, 0.70188, 0.68058, 0.67539, 0.66232, 0.66311, 0.6514, 0.64727, 0.6535, 0.51688, 0.29308, 0.26967, 0.21712, 0.1863, 0.21368, 0.17573, 0.20023, 0.21505, 0.25033, 0.20669, 0.20325, 0.22376, 0.22833, 0.28953, 0.31158, 0.29501, 0.34001, 0.37387, 0.37946, 0.41523, 0.41131, 0.40992, 0.3971, 0.48711, 0.49499, 0.46146, 0.45467, 0.38549, 0.3797, 0.47653, 0.48524, 0.50662, 0.42979, 0.39806, 0.36212, 0.45675, 0.45912, 0.44299, 0.41566, 0.44926, 0.3954, 0.41398, 0.38449, 0.37096, 0.30997, 0.27005, 0.26255, 0.2706, 0.29544, 0.23616, 0.28252, 0.29466, 0.30622, 0.2843, 0.30892, 0.30447, 0.37189, 0.31921, 0.36812, 0.46922, 0.49045, 0.47153, 0.39702, 0.38072, 0.31968, 0.27376], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"anti-h1n1": {
men: [0, 0, 0, 0, 0, 0, 0, 0.9647, 0.96121, 0.95798, 0.95794, 0.95788, 0.95792, 0.95716, 0.95634, 0.95684, 0.95776, 0.9575, 0.95741, 0.95722, 0.95755, 0, 0.96069, 0.96449, 0.96437, 0.9666, 0.96617, 0.9673, 0.96886, 0.96718, 0.96925, 0.97157, 0.97127, 0.97139, 0.9708, 0.97091, 0.96736, 0.96742, 0.96715, 0.96563, 0.96609, 0.9663, 0.96701, 0.96798, 0.96421, 0.95033, 0.95119, 0.95093, 0.95147, 0.95189, 0.9517, 0.95001, 0.95017, 0.95071, 0.95069, 0.94985, 0, 0, 0, 0, 0, 0, 0, 0.94785, 0.94846, 0.94941, 0.94931, 0.94896, 0.94861, 0.94923, 0.95079, 0.9563, 0.95711, 0.95542, 0.95564, 0.95461, 0.95532, 0.9457, 0.94555, 0.94373, 0.94398, 0.94436, 0.94421, 0.94404, 0.94399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion de la pandémie": {
men: [0.96021, 0.95277, 0, 0, 0, 0, 0, 0.95416, 0.98242, 0.98867, 0.98863, 0.98857, 0.98861, 0.98782, 0.98719, 0.9877, 0.98866, 0.98838, 0.98829, 0.9881, 0.98844, 0.9881, 0.98583, 0.96207, 0.96194, 0.96144, 0.96101, 0.96213, 0.95555, 0.95726, 0.95604, 0.95593, 0.95563, 0.95575, 0.95517, 0.95527, 0.94853, 0.94859, 0.94832, 0.94824, 0.9487, 0.9489, 0.94865, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17437, 0.30743, 0.38779, 0.38764, 0.3879, 0.50872, 0.96426, 0.96508, 0.96337, 0.96359, 0.96255, 0.96327, 0.96292, 0.96276, 0.95875, 0.95586, 0.95256, 0.95242, 0.95224, 0, 0, 0, 0, 0, 0, 0.93833, 0.93797, 0.94393, 0.9458, 0.94562, 0.94563, 0.94999, 0.94994, 0.95016, 0.95032, 0.26777, 0.26786, 0.26784, 0.26787, 0.19818, 0.19829, 0.11176, 0.11185, 0.11194, 0.11189], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pandémie grippale": {
men: [0.96313, 0.96688, 0.96243, 0.96267, 0.96004, 0.96054, 0.96023, 0.96398, 0.96333, 0.96382, 0.96468, 0.96463, 0.96592, 0.23124, 0.25026, 0.21282, 0.21303, 0.21297, 0.21295, 0.21291, 0.21298, 0.19441, 0.17352, 0.13146, 0.11758, 0.11752, 0.092209, 0.40987, 0, 0.77321, 0.65009, 0.65001, 0.64981, 0.64989, 0.6495, 0.64957, 0.64947, 0.64951, 0.64933, 0.5668, 0.38038, 0.42861, 0.4285, 0.12167, 0.08229, 0.082336, 0.08241, 0.082387, 0.066982, 0.062433, 0.06242, 0.06231, 0.06232, 0.066539, 0.10012, 0, 0.079022, 0.16152, 0.30379, 0.30375, 0.30363, 0.30353, 0.59476, 0.95268, 0.95329, 0.95425, 0.95798, 0.95994, 0.95959, 0.50277, 0.43819, 0.32735, 0.32762, 0.62182, 0.6904, 0.68966, 0.69018, 0.68992, 0.70487, 0.78961, 0.78194, 0.77259, 0.77247, 0.97193, 0.97187, 0.97224, 0.972, 0.96944, 0.96681, 0.96814, 0.96846, 0.96809, 0.96689, 0.9493, 0.94562, 0.94563, 0.94601, 0.94596, 0.94617, 0.94634, 0.94526, 0.9456, 0.9455, 0.18415, 0.10222, 0.10228, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94785, 0.94968, 0.95343, 0.95524, 0.95474, 0.95431, 0.95542, 0.96107, 0.95615, 0.95492, 0.95481, 0.95451, 0.95463, 0.95405, 0.94694, 0.94679, 0.95113, 0.94918, 0.9491, 0.94955, 0.94976, 0.94159, 0.94511, 0.94692, 0.94744, 0.94829, 0.94803, 0.95905, 0.95947, 0.96419, 0.5153, 0.51539, 0.51568, 0.51567, 0.51521, 0.51455, 0.5139, 0.64973, 0.64964, 0.64939, 0.64918, 0.57453, 0.65601, 0.5854, 0.96073, 0.96062, 0.96027, 0.95992, 0.96055, 0.96212, 0.96313, 0.95548, 0.95379, 0.954, 0.95298, 0.95369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56257, 0.7479, 0.74737, 0.74885, 0.74871, 0.7604, 0.7669, 0.77478, 0.77496, 0.84319, 0.84223, 0.84253, 0.84245, 0.84619, 0.6233, 0.40035, 0.20699, 0.14765, 0.14776, 0.12137], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccination obligatoire": {
men: [0.97422, 0.97339, 0.97117, 0.97141, 0.9717, 0.97221, 0.97189, 0.97201, 0.96849, 0.96182, 0.96178, 0.96172, 0.95643, 0.94989, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94707, 0.94713, 0.94686, 0.94678, 0.94724, 0.94744, 0.94719, 0.95073, 0.95994, 0.96047, 0.62487, 0.29056, 0.29072, 0.29085, 0.18085, 0.18053, 0.18056, 0.18066, 0.18066, 0.1805, 0.18026, 0.18004, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95386, 0.95381, 0.95417, 0.95393, 0.95862, 0.95887, 0.96714, 0.96703, 0.96666, 0.96598, 0.96789, 0.96914, 0.96915, 0.97029, 0.96716, 0.97037, 0.97054, 0.96943, 0.96858, 0.96849, 0.96393, 0.80247, 0.80294, 0.80398, 0.80463, 0.76393, 0.76356], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"épidémie de grippe": {
men: [0.52441, 0.45435, 0.45332, 0.45343, 0.59375, 0.59407, 0.59387, 0.96964, 0.97005, 0.75528, 0.77451, 0.67775, 0.67777, 0.57645, 0.5381, 0.46296, 0.49286, 0.49272, 0.49268, 0.49258, 0.49275, 0.38061, 0.23973, 0.30154, 0.21902, 0.27465, 0.27452, 0.4271, 0.28885, 0.95374, 0.9446, 0.94449, 0.94419, 0.25335, 0.2532, 0.25323, 0.18053, 0.18054, 0.18049, 0.18048, 0.21542, 0.27285, 0.27278, 0.25246, 0.25294, 0.34814, 0.34845, 0.44571, 0.56005, 0.54304, 0.61487, 0.61378, 0.61388, 0.61423, 0.90576, 0.90918, 0.92955, 0.92473, 0.92435, 0.91265, 0.91229, 0.912, 0.87755, 0.96179, 0.96441, 0.96539, 0.96528, 0.96493, 0.80575, 0.77647, 0.63372, 0.63438, 0.63492, 0.6338, 0.63394, 0.63326, 0.32833, 0.15151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.039819, 0.043336, 0.17266, 0.173, 0.35932, 0.35932, 0.35946, 0.35945, 0.35953, 0.35959, 0.35918, 0.35931, 0.35927, 0.71466, 0.65544, 0.65583, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bcg": {
men: [0.61676, 0.61624, 0.61483, 0.61498, 0.61517, 0.61549, 0.61529, 0.61536, 0.70517, 0.7028, 0.70278, 0.70273, 0.70276, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16301, 0.16298, 0.16269, 0.16271, 0.16281, 0.29925, 0.95131, 0.95008, 0.94889, 0.94849, 0.94836, 0.94799, 0.94768, 0.94739, 0, 0.94846, 0.94941, 0.94931, 0.94896, 0.94861, 0.94923, 0.95079, 0.95178, 0.95259, 0.95091, 0.95112, 0.9501, 0.95081, 0.95046, 0, 0, 0.95492, 0.9553, 0.95516, 0.95499, 0.95493, 0.9553, 0.95505, 0.95943, 0.95968, 0.961, 0.9609, 0.96053, 0.95985, 0.96175, 0.94916, 0.94917, 0.94955, 0.9495, 0.94972, 0.94988, 0.94879, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"personnes vaccinées": {
men: [0.96513, 0.96087, 0.95333, 0.95356, 0.95385, 0.95435, 0, 0, 0.94868, 0.94549, 0.94545, 0.9454, 0.94543, 0.94468, 0.94387, 0.94436, 0.94528, 0.94501, 0.94493, 0.94474, 0.94507, 0.94488, 0, 0, 0, 0, 0, 0, 0, 0.59007, 0.6975, 0.69742, 0.6972, 0.69729, 0.69687, 0.69695, 0.69684, 0.7088, 0.7086, 0.70854, 0.70888, 0.70903, 0.70885, 0.9641, 0.94692, 0.94744, 0.94829, 0.94803, 0.94857, 0.94898, 0.94879, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95466, 0.95527, 0.95623, 0.95613, 0.95578, 0.95543, 0.95605, 0.95762, 0.95862, 0.95943, 0.95774, 0.95796, 0.95692, 0.95764, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"stratégie vaccinale": {
men: [0.95466, 0.95385, 0.95167, 0.9519, 0.95219, 0.95269, 0, 0.95416, 0.98296, 0.98899, 0.98895, 0.98889, 0.98905, 0.98826, 0.98747, 0.98798, 0.98894, 0.98866, 0.98857, 0.98838, 0.98872, 0.98839, 0.9857, 0.95468, 0.95456, 0.95406, 0.94322, 0.94432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94744, 0.9528, 0.95245, 0.95308, 0.95464, 0.95564, 0.95645, 0.96669, 0.96995, 0.96891, 0.96963, 0.96927, 0.96912, 0.79548, 0.77666, 0.75812, 0.76859, 0.76845, 0.7684, 0.7687, 0.7685, 0.573, 0.18094, 0.18119, 0.18117, 0.1811, 0.18097, 0.94293, 0.94275, 0.94276, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"firmes pharmaceutiques": {
men: [0.97039, 0.97188, 0.96823, 0.78461, 0.78485, 0.78526, 0.75396, 0.78732, 0.35844, 0.43461, 0.43459, 0.40565, 0.40567, 0.40534, 0.34547, 0.27007, 0.32853, 0.34492, 0.34489, 0.34482, 0.3954, 0.37322, 0.50399, 0.3668, 0.36676, 0.42345, 0.42326, 0.42376, 0.44776, 0.51889, 0.19441, 0.19438, 0.19432, 0.19435, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11499, 0.93942, 0.93927, 0.93746, 0.93771, 0.93808, 0.93794, 0.95546, 0.95541, 0.95577, 0.95553, 0.95686, 0.95711, 0.96051, 0.96304, 0.96267, 0.96269, 0.96459, 0.96441, 0.96442, 0.96549, 0.95971, 0.96618, 0.96754, 0.96643, 0.96678, 0.96669, 0.96774, 0.64718, 0.55921, 0.54391, 0.49559, 0.49599, 0.49574], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit immunitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94421, 0.94531, 0.94683, 0.94198, 0.94077, 0.94067, 0.94037, 0.95047, 0.9499, 0.95, 0.94985, 0.94992, 0.94965, 0.94957, 0.94597, 0.94618, 0.94593, 0.95627, 0.9581, 0.95863, 0.95949, 0.9528, 0.95334, 0.52078, 0.52067, 0.39123, 0.39129, 0.39152, 0.39151, 0.39116, 0.39065, 0.15501, 0.24795, 0.24791, 0.24781, 0.24774, 0.24766, 0.21852, 0.21866, 0.44818, 0.44813, 0.44796, 0.4478, 0.44809, 0.44883, 0.94352, 0, 0, 0, 0, 0, 0.71902, 0.78579, 0.8413, 0.84152, 0.84185, 0.84172, 0.84157, 0.84152, 0.84184, 0.84163, 0.8428, 0.84302, 0.96074, 0.96064, 0.95493, 0.9498, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"charge virale": {
men: [0.16012, 0.15998, 0.19418, 0.19423, 0.32548, 0.081924, 0.081898, 0.081908, 0.081611, 0.31522, 0.31521, 0.39078, 0.3908, 0.39049, 0.39016, 0.39036, 0.39073, 0.39063, 0.34192, 0.94747, 0.9478, 0.94761, 0.95147, 0.93959, 0.93947, 0.93898, 0.93856, 0.93966, 0.12813, 0.12748, 0.12731, 0.1273, 0.12726, 0.12727, 0.1272, 0.12721, 0, 0, 0, 0, 0, 0.21738, 0.94043, 0.94394, 0.95577, 0.95629, 0.95716, 0.9569, 0.68145, 0.68175, 0.68161, 0.68041, 0.68052, 0.68091, 0.5066, 0.40266, 0.40214, 0.40164, 0, 0, 0, 0.23731, 0.35993, 0.35995, 0.51772, 0.51824, 0.5814, 0.62931, 0.95211, 0.95273, 0.9543, 0.22834, 0.20119, 0.20084, 0.20088, 0.14802, 0.095979, 0.18328, 0.18862, 0.22335, 0.20385, 0.1864, 0.19995, 0.19991, 0.1999, 0.25557, 0.26886, 0.26923, 0.2693, 0.29961, 0.51604, 0.38096, 0.31713, 0.17496, 0.31091, 0.94276, 0, 0.9467, 0.94691, 0.33925, 0.33886, 0.20975, 0.20973, 0.20975, 0.20962, 0.28598, 0.28635, 0.28658, 0.28681, 0.34927], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
