var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"semences locales": {
men: [0.31276, 0.66878, 0.66864, 0.66932, 0.66921, 0.67133, 0.66919, 0.6679, 0.66778, 0.66796, 0.66793, 0.66739, 0.66754, 0, 0, 0.94497, 0.94498, 0.94511, 0.94524, 0.94439, 0.94505, 0.94554, 0.95219, 0.95263, 0.75746, 0.75781, 0.75787, 0.7568, 0.75682, 0.74931, 0.74858, 0.74856, 0.80431, 0.80419, 0.80467, 0.80475, 0.79163, 0.79129, 0.95217, 0.95194, 0.95154, 0.95249, 0.95277, 0.94993, 0.95005, 0.95002, 0.94576, 0.94625, 0.94439, 0.94415, 0.94408, 0.94225, 0.94471, 0.94454, 0.94358, 0.94227, 0.94219, 0.93909, 0.93879, 0.93885, 0.93873, 0.42467, 0.42505, 0.42477, 0.45163, 0.45228, 0.36314, 0.3633, 0.36385, 0.36431, 0.36407, 0.48179, 0.48211, 0.48193, 0.48161, 0.94462, 0.94498, 0.9461, 0.94583, 0.94569, 0.94524, 0.94521, 0.9451, 0.94595, 0.94678, 0.94871, 0.94899, 0.94948, 0.95046, 0.9514, 0.95184, 0.95252, 0.144, 0.086887, 0.087007, 0.086994, 0.086952, 0.086965, 0.087026, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement agricole": {
men: [0.196, 0.31012, 0.41959, 0.51752, 0.51743, 0.51907, 0.18366, 0.11702, 0.12349, 0.097137, 0.097133, 0.097055, 0.11193, 0.059647, 0.059576, 0.032377, 0.032377, 0.032382, 0.032386, 0.032357, 0.047873, 0.076565, 0.11537, 0.25683, 0.24498, 0.24509, 0.18402, 0.45458, 0.45459, 0.44291, 0.44248, 0.44246, 0.53243, 0.53235, 0.53267, 0.52341, 0.50166, 0.50145, 0.56158, 0.56144, 0.56121, 0.54671, 0.37281, 0.35825, 0.3583, 0.35829, 0.31489, 0.31505, 0.31443, 0.44359, 0.44053, 0.43968, 0.49714, 0.43188, 0.43144, 0.38561, 0.64717, 0.6165, 0.61631, 0.61635, 0.64556, 0.6456, 0.64618, 0.36151, 0.26202, 0.2571, 0.14673, 0.18781, 0.18809, 0.18833, 0.18821, 0.34568, 0.39814, 0.39799, 0.36535, 0.36504, 0.36518, 0.44275, 0.73737, 0.77407, 0.7737, 0.77367, 0.6948, 0.69543, 0.69604, 0.62835, 0.53604, 0.53632, 0.53687, 0.5374, 0.53765, 0.79189, 0.7233, 0.72423, 0.72523, 0.72512, 0.53294, 0.53303, 0.5334, 0.3355, 0.33497, 0.33491, 0.21634, 0.21596, 0.40113, 0.28577, 0.28584, 0.28574, 0.2858, 0.28572], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"objectifs du millénaire": {
men: [0.5804, 0.55838, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95383, 0.95739, 0.95983, 0.9599, 0.95855, 0.95857, 0.95955, 0.95862, 0.95858, 0.95829, 0.95815, 0.96434, 0.96508, 0.9637, 0.96012, 0.95801, 0.95598, 0.95559, 0.65733, 0.65752, 0.44414, 0.44419, 0.44418, 0.44434, 0.3142, 0.28259, 0.16589, 0.26154, 0.28003, 0.27999, 0.3375, 0.29363, 0.27308, 0.27552, 0.26653, 0.26149, 0.25931, 0.26287, 0.27381, 0.25599, 0.26639, 0.25615, 0.25309, 0.24485, 0.22844, 0.16009, 0.12822, 0.13977, 0.19975, 0.24005, 0.26407, 0.2194, 0.13377, 0.20924, 0.17016, 0.14597, 0.12314, 0.42318, 0.37348, 0.37343, 0.37377, 0.24266, 0.24269, 0.20481, 0.20491, 0.20512, 0.20533, 0.20542, 0.15786, 0.18226, 0.2284, 0, 0.14404, 0.14397, 0.144, 0.1441, 0.14412, 0.15961, 0.15959, 0.15955, 0.15927, 0.15913, 0.41858, 0.41868, 0.41854, 0.41862, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins alimentaires": {
men: [0.938, 0.94001, 0.93982, 0.94077, 0.94061, 0.94359, 0.11674, 0.0544, 0, 0, 0, 0, 0.092616, 0.092608, 0.092499, 0.092381, 0.092382, 0.092395, 0.13501, 0.13489, 0.21498, 0.94582, 0.94828, 0.94872, 0.94835, 0.94878, 0.30989, 0.30945, 0.30946, 0.30977, 0.30947, 0.30946, 0.18383, 0.18381, 0.18392, 0.18394, 0, 0, 0, 0, 0, 0.22607, 0.36746, 0.36682, 0.36687, 0.36686, 0.36699, 0.36718, 0.56492, 0.56478, 0.37489, 0.37416, 0.37412, 0.37405, 0.37367, 0.45269, 0.37515, 0.3754, 0.3315, 0.33152, 0.33147, 0.33149, 0, 0, 0, 0, 0, 0, 0, 0.51322, 0.51287, 0.60021, 0.70243, 0.66947, 0.66902, 0.47219, 0.57517, 0.48852, 0.48868, 0.42427, 0.42407, 0.42405, 0.34035, 0.1375, 0.13762, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9579, 0.95809, 0.95785], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15133, 0.15128, 0.26196, 0.50959, 0.6697, 0.66874, 0.66845, 0.66846, 0.66829, 0.66802, 0.66868, 0.95024, 0.9486, 0.94872, 0.94228, 0.94261, 0.9431, 0.94124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93271, 0.93333, 0.93298, 0.93235, 0.93156, 0.93192, 0.93302, 0.93331, 0.93318, 0.93273, 0.9327, 0.93259, 0.93343, 0.93425, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077189, 0.077201, 0.077255, 0.10251, 0.10235, 0.10233, 0.10231, 0.10213, 0.34023, 0.34033, 0.94765, 0.94733, 0.94752, 0.94728], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"millénaire pour le développement": {
men: [0.12295, 0.10977, 0.1127, 0.1092, 0.10918, 0.10989, 0.10954, 0.10288, 0.10286, 0.10696, 0.10695, 0.10687, 0.091933, 0.13816, 0.138, 0.2838, 0.34587, 0.35796, 0.35801, 0.38374, 0.38401, 0.35227, 0.35213, 0.35229, 0.35216, 0.35232, 0.54121, 0.2715, 0.24761, 0.030908, 0.030878, 0.030877, 0.030868, 0.030863, 0.030882, 0.076035, 0.075925, 0.075893, 0.075894, 0.075875, 0.052969, 0.072776, 0.087846, 0.082772, 0.082783, 0.25467, 0.25476, 0.50287, 0.76626, 0.67051, 0.64764, 0.62004, 0.4388, 0.38658, 0.3867, 0.34958, 0.29626, 0.26791, 0.25455, 0.2579, 0.25703, 0.25115, 0.21091, 0.21516, 0.1988, 0.20545, 0.2188, 0.22149, 0.1536, 0.12433, 0.1703, 0.21696, 0.32, 0.26049, 0.26955, 0.23926, 0.28487, 0.20914, 0.33044, 0.14325, 0.14318, 0.10789, 0.10332, 0.12372, 0.45349, 0.63016, 0.63034, 0.63067, 0.5084, 0.53106, 0.58404, 0.58446, 0.58445, 0.45092, 0.45154, 0.33587, 0.37457, 0.34086, 0.0912, 0.091212, 0.091068, 0.091052, 0.10026, 0.10008, 0.099999, 0.10003, 0.10005, 0.11565, 0.11567, 0.15105], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"travailleurs agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.059739, 0.059745, 0.059659, 0.059634, 0.064093, 0.080349, 0.93568, 0.094846, 0.094875, 0.094711, 0.094723, 0.09472, 0.094754, 0.094803, 0, 0.24582, 0.24594, 0.41114, 0.50033, 0.5415, 0.54094, 0.95468, 0.9546, 0.95522, 0.95492, 0.95498, 0.95562, 0.95568, 0.95653, 0.95361, 0.95379, 0.95151, 0.9469, 0.94276, 0.94419, 0.93625, 0.20538, 0.20551, 0.20565, 0.20557, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15828, 0.15826, 0.15822, 0.93837, 0.93757, 0.93782, 0.93805, 0.93773, 0.93791, 0.93768], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mortalité infantile": {
men: [0.03109, 0.02928, 0.017488, 0.016596, 0, 0, 0, 0, 0, 0, 0, 0, 0.011187, 0.01129, 0.015999, 0.016853, 0.066539, 0.087649, 0.087661, 0.08781, 0.087871, 0.17525, 0.17518, 0.3763, 0.34871, 0.42257, 0.33218, 0.66147, 0.67758, 0.62269, 0.48643, 0.47999, 0.47984, 0.48298, 0.42513, 0.39149, 0.33995, 0.31813, 0.30273, 0.29449, 0.30331, 0.099598, 0.094833, 0.093187, 0.10859, 0.13262, 0.13267, 0.12321, 0.074078, 0.082506, 0.131, 0.23556, 0.22924, 0.23738, 0.26993, 0.27814, 0.27995, 0.30498, 0.30195, 0.30697, 0.30693, 0.31899, 0.32564, 0.33734, 0.33089, 0.30488, 0.31587, 0.32521, 0.33077, 0.31216, 0.35021, 0.32046, 0.30472, 0.24788, 0.24771, 0.33942, 0.37394, 0.33204, 0.42837, 0.58489, 0.58461, 0.57762, 0.61869, 0.65443, 0.63797, 0.63803, 0.70222, 0.66962, 0.64656, 0.63724, 0.18809, 0.10286, 0.096607, 0.030975, 0.027167, 0.026946, 0.0072685, 0.0073101, 0.0066841, 0.0063108, 0.0061244, 0.016069, 0.013507, 0.02391, 0.043977, 0.0617, 0.064244, 0.074977, 0.12481, 0.13478], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété publique": {
men: [0.27802, 0.24306, 0.14273, 0.14288, 0.14285, 0.14331, 0.20013, 0.19975, 0.25987, 0.25994, 0.25993, 0.25972, 0.25977, 0.30695, 0.20778, 0.27154, 0.52642, 0.52649, 0.52656, 0.4261, 0.34085, 0.34103, 0.19122, 0.19131, 0.19124, 0.19132, 0.091234, 0.091106, 0.12134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94204, 0.94247, 0.9439, 0.94509, 0.35417, 0.35439, 0.31658, 0.31646, 0.31624, 0.31598, 0.23913, 0.23941, 0.23948, 0.23945, 0, 0, 0, 0, 0, 0.41485, 0.48277, 0.48302, 0.48352, 0.484, 0.94982, 0.9505, 0.95049, 0.9517, 0.95302, 0.95287, 0.95242, 0.95256, 0.95323, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"santé maternelle": {
men: [0.14263, 0.12282, 0.1228, 0.12292, 0.1229, 0.13064, 0.13925, 0.086982, 0.086967, 0.093188, 0.093184, 0.11843, 0, 0, 0, 0.1601, 0.1601, 0.16012, 0.16014, 0.16, 0.16011, 0.51813, 0.46559, 0.46581, 0.43803, 0.43822, 0.30866, 0.30822, 0.42396, 0, 0, 0, 0, 0, 0, 0.11322, 0.10005, 0.10001, 0.10874, 0.10872, 0.2866, 0.28688, 0.28697, 0.23859, 0.23863, 0.23862, 0.2387, 0.23883, 0.30164, 0.3607, 0.39251, 0.42727, 0.34019, 0.42105, 0.59005, 0.58967, 0.58081, 0.58591, 0.58572, 0.59073, 0.59433, 0.59437, 0.59657, 0.58785, 0.59921, 0.594, 0.6356, 0.63454, 0.55664, 0.47697, 0.59023, 0.94931, 0.94994, 0.94161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduire la mortalité": {
men: [0.95813, 0.14772, 0.14769, 0.14784, 0.14288, 0.13298, 0.12938, 0.094237, 0.09422, 0.094245, 0.09424, 0.094165, 0.021264, 0.020862, 0.020092, 0.214, 0.21401, 0.21404, 0.22331, 0.24811, 0.25808, 0.66475, 0.6645, 0.6648, 0.66455, 0.66485, 0.62323, 0.53232, 0.52517, 0, 0, 0, 0, 0, 0, 0.077572, 0.07746, 0.077427, 0.077428, 0.077409, 0.19416, 0.21443, 0.23546, 0.23505, 0.23508, 0.23507, 0.23516, 0.27926, 0.38173, 0.50141, 0.50164, 0.50068, 0.38925, 0.40557, 0.70534, 0.64209, 0.49549, 0.49581, 0.49566, 0.50277, 0.50793, 0.50797, 0.49813, 0.48578, 0.48588, 0.48755, 0.509, 0.51087, 0.25743, 0.088947, 0.38231, 0.27855, 0.17192, 0.088699, 0.011166, 0.011156, 0.011161, 0.011174, 0.011177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0.94796, 0.94999, 0.9498, 0.95076, 0.9506, 0, 0, 0.39921, 0.39914, 0.39924, 0.39923, 0.39891, 0.33501, 0.33498, 0.29253, 0.20329, 0.19478, 0.1948, 0.18699, 0.18683, 0.21886, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25883, 0.93687, 0.93673, 0.9373, 0.9374, 0.93605, 0.93565, 0.93566, 0.93543, 0.93504, 0.93597, 0.93625, 0.93464, 0.93476, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34299, 0.34287, 0.42363, 0.42352], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellule familiale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95979, 0.96037, 0.96102, 0.96065, 0.96, 0.9592, 0.95956, 0.9607, 0.961, 0.96086, 0.9604, 0.96037, 0.86423, 0.865, 0.79694, 0.79702, 0.79725, 0.79766, 0.79849, 0.71988, 0.72021, 0.72072, 0.58455, 0.5853, 0.58611, 0.58602, 0.45068, 0.45074, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"diarrhées aiguës": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20088, 0.24264, 0.24276, 0.23071, 0.23082, 0.23073, 0.23083, 0.23085, 0.22202, 0.22203, 0.22225, 0.24749, 0.35423, 0.52704, 0.29332, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94191, 0.94203, 0.942, 0.94234, 0.94283, 0.94752, 0.94728, 0.94772, 0.94589, 0.94577, 0.9456, 0.94464, 0.94332, 0.94325, 0.93734, 0.93705, 0.9371, 0.93699, 0.93704, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"famine": {
men: [0.11607, 0.17356, 0.20094, 0.19231, 0.15633, 0.18917, 0.18657, 0.18229, 0.20794, 0.45464, 0.45462, 0.529, 0.56608, 0.67675, 0.32436, 0.20076, 0.19256, 0.17111, 0.20824, 0.17908, 0.19219, 0.16268, 0.11984, 0.10836, 0.10832, 0.10208, 0.092396, 0.087881, 0.10518, 0.10397, 0.092545, 0.10208, 0.08008, 0.13095, 0.10536, 0.11153, 0.16467, 0.17948, 0.16847, 0.17153, 0.14744, 0.1589, 0.15645, 0.16167, 0.202, 0.23843, 0.24227, 0.18325, 0.23931, 0.36446, 0.30888, 0.20286, 0.26141, 0.26419, 0.22389, 0.20759, 0.24337, 0.20429, 0.14782, 0.11357, 0.13003, 0.13086, 0.13097, 0.099175, 0.10855, 0.13909, 0.12203, 0.078494, 0.081218, 0.11479, 0.083523, 0.099032, 0.11237, 0.12288, 0.11142, 0.18486, 0.18493, 0.17432, 0.15995, 0.25816, 0.25247, 0.48226, 0.57077, 0.49886, 0.5081, 0.42486, 0.42498, 0.42967, 0.34028, 0.26828, 0.21259, 0.17908, 0.1863, 0.042316, 0.039468, 0.038779, 0.085232, 0.087733, 0.092337, 0.084306, 0.090917, 0.090901, 0.1111, 0.06355, 0.076833, 0.094859, 0.13527, 0.14208, 0.14525, 0.13363], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"modèle agricole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9434, 0.58191, 0.5825, 0.58194, 0.58191, 0.58173, 0.58165, 0.582, 0.37827, 0.37772, 0.37756, 0.37756, 0.37747, 0.37732, 0.40708, 0.56828, 0.5673, 0.56738, 0.3614, 0.2436, 0.28092, 0.23824, 0.26216, 0.26593, 0.24657, 0.279, 0.27895, 0.27866, 0.23706, 0.1907, 0.19082, 0.19076, 0.1816, 0.28129, 0.21364, 0.32665, 0.32644, 0.37458, 0.93779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13868, 0.13868, 0.22958, 0.20584, 0.24304, 0.24306, 0.24313, 0.24326, 0.24351, 0.28871, 0.25036, 0.25054, 0.25053, 0.25086, 0.30191, 0.30186, 0, 0, 0, 0, 0, 0, 0, 0, 0.27611, 0.27619, 0.27626, 0.27616, 0.27622, 0.27615], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"aide alimentaire": {
men: [0.092913, 0.17081, 0.20464, 0.20485, 0.20481, 0.20546, 0.085995, 0.12112, 0.14582, 0.081133, 0.051701, 0.051659, 0.05167, 0.052502, 0.077409, 0.048251, 0.062456, 0.061987, 0.060987, 0.05951, 0.11056, 0.109, 0.099501, 0.13771, 0.27083, 0.25305, 0.22352, 0.22321, 0.19192, 0.19211, 0.09746, 0.11102, 0.11573, 0.12347, 0.018647, 0.019638, 0.01961, 0.019602, 0.019602, 0.014964, 0.016468, 0.016484, 0.018444, 0.018412, 0.03218, 0, 0, 0.046753, 0.046661, 0.02639, 0.023488, 0.023443, 0.02344, 0.09487, 0.090291, 0.090165, 0.092882, 0.28541, 0.23485, 0.2651, 0.26507, 0.25081, 0.25104, 0.36502, 0.41964, 0.42024, 0.37651, 0.33739, 0.32117, 0.29479, 0.2946, 0, 0, 0, 0, 0, 0, 0.13072, 0.13076, 0.13074, 0.26301, 0.263, 0.40418, 0.46003, 0.59399, 0.59406, 0.59423, 0.59454, 0.59515, 0.59574, 0.59601, 0.6637, 0.6637, 0.46548, 0.43563, 0.43556, 0.25438, 0.33731, 0.13986, 0.13988, 0.12524, 0.12522, 0.12519, 0.12497, 0.14055, 0.14058, 0.12248, 0.14173, 0.084658, 0.081225], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0.4233, 0.42421, 0.33412, 0.33446, 0.3344, 0.26835, 0.26749, 0.26698, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027947, 0.027952, 0.027993, 0.027995, 0.028007, 0.02805, 0.029542, 0.029523, 0.029541, 0.21834, 0.21826, 0.21811, 0.35331, 0.93309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9351, 0.93607, 0.94832, 0.94876, 0.94943, 0.94942, 0.95063, 0.95195, 0.9518, 0.95135, 0.95149, 0.95216, 0.95229, 0.95079, 0.94723, 0.94704, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prix du lait": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0030605, 0.0060501, 0.0098444, 0.0096427, 0.014363, 0.014632, 0.015679, 0.014844, 0.016376, 0.028345, 0.030172, 0.030172, 0.030164, 0.030819, 0.024385, 0.010196, 0.012073, 0.014162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18688, 0.18696, 0.23957, 0.35275, 0.35252, 0.35273, 0.69315, 0.69288, 0.69242, 0.69183, 0.6921, 0.95622, 0.96835, 0.96821, 0.96518, 0.96514, 0.64017, 0.45965, 0.46005, 0.39762, 0.39774, 0.39795, 0.39836, 0.39875, 0.39893, 0.39922, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32333, 0.32327, 0.48422, 0.61127, 0.61144, 0.61158, 0.61138, 0.61149, 0.61134], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture paysanne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07452, 0.13896, 0.18273, 0.20787, 0.2079, 0.20793, 0.20774, 0.20788, 0.20224, 0.26739, 0.26751, 0.29463, 0.29477, 0.11582, 0.10218, 0.064947, 0.062398, 0.062338, 0.062335, 0.062316, 0.062307, 0.078829, 0.049862, 0.04514, 0.045121, 0.04677, 0.046758, 0.058281, 0.037561, 0.019338, 0.018641, 0.018643, 0.052393, 0.052412, 0.052439, 0.037274, 0.18324, 0.21161, 0.19325, 0.3093, 0.25281, 0.25255, 0.2522, 0.2428, 0.25492, 0.25484, 0.27321, 0.30307, 0.1957, 0.19587, 0.13022, 0.28015, 0.29899, 0.18866, 0.20121, 0.20151, 0.20177, 0.19833, 0.21195, 0.37011, 0.36996, 0.35258, 0.54997, 0.55018, 0.45759, 0.28819, 0.3222, 0.36161, 0.40996, 0.40992, 0.46188, 0.42797, 0.42801, 0.2748, 0.27495, 0.27523, 0.2755, 0.27563, 0.33296, 0.50319, 0.38632, 0.38685, 0.19427, 0.19418, 0, 0, 0, 0, 0, 0, 0, 0.10758, 0.10761, 0.10764, 0.1076, 0.095039, 0.13806], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industries électriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93844, 0.93845, 0.93859, 0.93871, 0.94389, 0.94455, 0.94867, 0.94831, 0.94875, 0.94838, 0.94881, 0.94889, 0.94755, 0.94757, 0.94432, 0.94341, 0.94337, 0.94308, 0.93637, 0.93694, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pnud": {
men: [0.19497, 0.26991, 0.3035, 0.30381, 0.30376, 0.30472, 0.25147, 0.20171, 0.22654, 0, 0, 0, 0.053452, 0.053448, 0.050559, 0.048797, 0.051769, 0.050803, 0.05081, 0.048857, 0.054793, 0.063236, 0.062298, 0.068995, 0.079093, 0.072743, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27151, 0.25671, 0.2562, 0.18424, 0.18432, 0.163, 0.17724, 0.16295, 0.24153, 0.16307, 0.16333, 0.17493, 0.18926, 0.21486, 0.11725, 0.13692, 0.13704, 0.16851, 0.16454, 0.17031, 0.17032, 0.19917, 0.13317, 0.29604, 0.34256, 0.47402, 0.50656, 0.40503, 0.40475, 0.36121, 0.36135, 0.36178, 0.42867, 0.94708, 0.94662, 0.94324, 0.94313, 0.94398, 0.94481, 0.23736, 0, 0, 0, 0, 0.2037, 0.20385, 0.14885, 0.13708, 0.13727, 0.13725, 0.12776, 0.11398, 0.11406, 0.082031, 0.058671, 0.058661, 0.064973, 0.064857, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94161, 0.94808, 0.94869, 0.9484, 0.86148, 0.86137, 0.86142, 0.86219, 0.87175, 0.87192, 0.87318, 0.87323, 0.87363, 0.87496, 0.81749, 0.52185, 0.52217, 0.52252, 0.93415, 0.93352, 0.93274, 0.93309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques d' infection": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16258, 0.49057, 0.49089, 0.49074, 0.49077, 0.49071, 0.93428, 0.93512, 0.93451, 0.9347, 0.93605, 0.93611, 0.93654, 0.93796, 0.94078, 0.94015, 0.38195, 0.38221, 0.38206, 0.3818, 0.38148, 0.38163, 0.38208, 0.3822, 0.38214, 0.38196, 0.38195, 0.3819, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits agrochimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50392, 0.50415, 0.50318, 0.65747, 0.65736, 0.65669, 0.65578, 0.65572, 0.65615, 0.65594, 0.65598, 0.68944, 0.94906, 0.94991, 0.94396, 0.94415, 0.94551, 0.93322, 0.93365, 0.93507, 0.93625, 0.93563, 0.37623, 0.37648, 0.37634, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"globules blancs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14628, 0.42674, 0.4268, 0.42686, 0.371, 0.47568, 0.47592, 0.47574, 0.71394, 0.71367, 0.71399, 0.71405, 0.71305, 0.71306, 0.56708, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95286, 0.95282, 0.709, 0.70963, 0.57243, 0.57249, 0.57266, 0.57296, 0.57355, 0.57412, 0.57438, 0.57479, 0.57478, 0.57552, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosions nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37309, 0.37316, 0.3737, 0.37372, 0.3739, 0.93275, 0.93393, 0.93331, 0.9398, 0.94044, 0.94008, 0.93944, 0.93865, 0.93901, 0.93302, 0.93331, 0.93318, 0.93273, 0.9327, 0.93259, 0.93343, 0.17873, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements militaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45858, 0.4589, 0.93914, 0.93879, 0.93922, 0.93886, 0.93928, 0.93936, 0.93804, 0.93806, 0.93901, 0.9381, 0.93807, 0.37996, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31971, 0.32016, 0.32011, 0.31995, 0.32, 0.32023, 0.42069, 0.42002, 0.41995, 0.41986, 0.41912, 0.41876, 0.41887, 0.33934, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution des sols": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.059213, 0.059138, 0.12924, 0.1822, 0.18222, 0.18206, 0.18218, 0.14543, 0.14538, 0.14544, 0.14539, 0.21322, 0.21324, 0.21294, 0.31679, 0.14668, 0.063126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2809, 0.28105, 0.28134, 0.28162, 0.28174, 0.95071, 0.95069, 0.95191, 0.95323, 0.95308, 0.95262, 0.95277, 0.95344, 0.95357, 0.94509, 0.94493, 0.94474, 0.94306, 0.16717, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
