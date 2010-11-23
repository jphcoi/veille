var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"vaccination contre la fièvre jaune": {
men: [0.95157, 0.95154, 0.94914, 0.95011, 0.95107, 0.95097, 0.94612, 0.94925, 0.94457, 0.94889, 0.94983, 0.94966, 0.94875, 0.94728, 0.94642, 0.94571, 0.94541, 0.94532, 0.94514, 0.94529, 0.94527, 0.94117, 0.94202, 0.94201, 0.94182, 0.94207, 0.95102, 0.9551, 0.95533, 0.95561, 0.95809, 0.95823, 0.95793, 0.9524, 0.95271, 0.95541, 0.95515, 0.95461, 0.95381, 0.95356, 0.95135, 0.94986, 0.94972, 0.94973, 0.94968, 0.9496, 0.94948, 0.95344, 0.95523, 0.95307, 0.95484, 0.95344, 0.95439, 0.9547, 0.95468, 0.95363, 0.9537, 0.95372, 0.95331, 0.95346, 0.95372, 0.9534, 0.95242, 0.95143, 0.94815, 0.95025, 0.95031, 0.95014, 0.95112, 0.95125, 0.95131, 0.95088, 0.94926, 0.94895, 0.94884, 0.95011, 0.94974, 0.94903, 0.94989, 0.94867, 0.94874, 0.94898, 0.94883, 0.94801, 0.94768, 0.94774, 0.94771, 0.94794, 0.94823, 0.94677, 0.94454, 0.94502, 0.94226, 0.94027, 0.94013, 0.94002, 0.93538, 0.94158, 0.94234, 0.94263, 0.94699, 0.94633, 0.94555, 0.94639, 0.94648, 0.94904, 0.94917, 0.94879, 0.94858, 0.94847], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"col de l' utérus": {
men: [0.9719, 0.97187, 0.97464, 0.97564, 0.97662, 0.97652, 0.97603, 0.97513, 0.97457, 0.97139, 0.97236, 0.97007, 0.96982, 0.96457, 0.9637, 0.96298, 0.9503, 0.95021, 0.95003, 0.95018, 0.95016, 0.94836, 0.94922, 0.94944, 0.95699, 0.95724, 0.75419, 0.77936, 0.77955, 0.8121, 0.82246, 0.82258, 0.84325, 0.85861, 0.8638, 0.87391, 0.87643, 0.87615, 0.86416, 0.86394, 0.95858, 0.95772, 0.95758, 0.9561, 0.95596, 0.95588, 0.95402, 0.95495, 0.95873, 0.9571, 0.95845, 0.95748, 0.95707, 0.95826, 0.95941, 0.9584, 0.95847, 0.9585, 0.95825, 0.9584, 0.95974, 0.9594, 0.95764, 0.95732, 0.95513, 0.95619, 0.95625, 0.95519, 0.95424, 0.95434, 0.95439, 0.95396, 0.95268, 0.95237, 0.95055, 0.95239, 0.95924, 0.95851, 0.96044, 0.95959, 0.95966, 0.95991, 0.96001, 0.96142, 0.96109, 0.96114, 0.96112, 0.96136, 0.96164, 0.96095, 0.9527, 0.95318, 0.94829, 0.69067, 0.69056, 0.69048, 0.66356, 0.60327, 0.60376, 0.60394, 0.65079, 0.65034, 0.6498, 0.84114, 0.84122, 0.88461, 0.88473, 0.96268, 0.96247, 0.96738], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espoir thérapeutique": {
men: [0.95157, 0.95154, 0.94914, 0.95011, 0.95107, 0.95097, 0.94612, 0.94925, 0.94457, 0.94889, 0.94983, 0.94966, 0.94875, 0.94728, 0.94642, 0.94571, 0.50783, 0.50778, 0.50768, 0.50776, 0.50775, 0.38322, 0.38357, 0.37297, 0.3729, 0.373, 0.57499, 0.64956, 0.64972, 0.64991, 0.95809, 0.95823, 0.95793, 0.9524, 0.95271, 0.95541, 0.95515, 0.95461, 0.75338, 0.75319, 0.71533, 0.6921, 0.692, 0.69201, 0.69551, 0.69545, 0.69536, 0.71655, 0.71972, 0.68619, 0.71273, 0.68628, 0.95439, 0.9547, 0.95468, 0.95363, 0.9537, 0.95372, 0.95331, 0.95346, 0.95372, 0.9534, 0.95242, 0.95143, 0.94815, 0.95025, 0.95031, 0.95014, 0.95112, 0.95125, 0.95131, 0.95088, 0.94926, 0.94895, 0.94884, 0.95011, 0.94974, 0.94903, 0.94989, 0.94867, 0.94874, 0.94898, 0.94883, 0.94801, 0.94768, 0.94774, 0.94771, 0.94794, 0.94823, 0.94677, 0.94454, 0.94502, 0.94226, 0.94027, 0.94013, 0.94002, 0.93538, 0.94158, 0.94234, 0.94263, 0.94699, 0.94633, 0.94555, 0.94639, 0.94648, 0.94904, 0.94917, 0.94879, 0.94858, 0.94847], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"efficacité virologique": {
men: [0.95157, 0.95154, 0.94914, 0.95011, 0.95107, 0.43316, 0.32078, 0.42261, 0.31701, 0.41585, 0.41627, 0.41619, 0.41579, 0.39306, 0.3927, 0.39241, 0.39228, 0.39225, 0.39217, 0.94529, 0.94527, 0.94117, 0.94202, 0.94201, 0.94182, 0.94207, 0.95102, 0.9551, 0.95533, 0.95561, 0.95809, 0.95823, 0.95793, 0.9524, 0.95271, 0.95541, 0.95515, 0.95461, 0.95381, 0.95356, 0.95135, 0.94986, 0.94972, 0.94973, 0.94968, 0.9496, 0.94948, 0.95344, 0.95523, 0.95307, 0.95484, 0.95344, 0.95439, 0.9547, 0.95468, 0.95363, 0.9537, 0.95372, 0.95331, 0.95346, 0.95372, 0.9534, 0.95242, 0.95143, 0.94815, 0.95025, 0.95031, 0.95014, 0.95112, 0.95125, 0.95131, 0.95088, 0.94926, 0.94895, 0.94884, 0.951, 0.95064, 0.94992, 0.95076, 0.94959, 0.94966, 0.79595, 0.79117, 0.76835, 0.76808, 0.76813, 0.76811, 0.7683, 0.76853, 0.72408, 0.67285, 0.67319, 0.59817, 0.51539, 0.51531, 0.94002, 0.93538, 0.94158, 0.94234, 0.94263, 0.94699, 0.94633, 0.94555, 0.94639, 0.94648, 0.94904, 0.94917, 0.94879, 0.94858, 0.94847], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules cancéreuses": {
men: [0.74688, 0.74685, 0.79279, 0.79359, 0.79575, 0.79567, 0.75, 0.86032, 0.87443, 0.62141, 0.62203, 0.64144, 0.64083, 0.69463, 0.82219, 0.82158, 0.80536, 0.80529, 0.82453, 0.8276, 0.83531, 0.73392, 0.70147, 0.81469, 0.81452, 0.81474, 0.81554, 0.79915, 0.60115, 0.60133, 0.57582, 0.59587, 0.43808, 0.39594, 0.10872, 0.95138, 0.95746, 0.9644, 0.96359, 0.96455, 0.96508, 0.96691, 0.70788, 0.7203, 0.7258, 0.72331, 0.71761, 0.73139, 0.75146, 0.74695, 0.72764, 0.68142, 0.6821, 0.66524, 0.65336, 0.60107, 0.93863, 0.93207, 0.92801, 0.92816, 0.96276, 0.96002, 0.95258, 0.94498, 0.94397, 0.9191, 0.94249, 0.94232, 0.95192, 0.9519, 0.95457, 0.79595, 0.8501, 0.84983, 0.84973, 0.86533, 0.87208, 0.87142, 0.87194, 0.87039, 0.85826, 0.85849, 0.84407, 0.84485, 0.8364, 0.95916, 0.95755, 0.95949, 0.95978, 0.95824, 0.95766, 0.95815, 0.66201, 0.61542, 0.61533, 0.61526, 0.77168, 0.78698, 0.78724, 0.77014, 0.75852, 0.74302, 0.7424, 0.74459, 0.74467, 0.7447, 0.87678, 0.96623, 0.96602, 0.96633], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules tumorales": {
men: [0.8861, 0.88607, 0.88611, 0.88701, 0.8879, 0.88781, 0.90435, 0.9481, 0.94779, 0.948, 0.94894, 0.94191, 0.941, 0.94044, 0.93959, 0.93889, 0.93859, 0.9385, 0.93832, 0.94285, 0.93356, 0.93439, 0.93524, 0.93566, 0.93547, 0.93572, 0.93664, 0.93757, 0.93779, 0.21441, 0.2146, 0.21463, 0.21457, 0, 0, 0, 0.44279, 0.6, 0.5995, 0.59934, 0.69096, 0.69071, 0.69062, 0.95313, 0.9544, 0.95432, 0.9542, 0.95722, 0.95891, 0.9584, 0.95691, 0.95738, 0.95833, 0.95864, 0.95614, 0.95944, 0.95951, 0.95713, 0.95526, 0.9554, 0.95566, 0.9553, 0.95474, 0.95526, 0.63445, 0.65863, 0.65867, 0.65855, 0.65822, 0.58687, 0.64997, 0.62833, 0.71346, 0.71323, 0.52322, 0.5232, 0.52304, 0.52265, 0.6428, 0.55803, 0.55807, 0.55821, 0.55834, 0.55886, 0.56577, 0.67837, 0.69679, 0.69696, 0.95909, 0.95904, 0.9594, 0.96194, 0.96253, 0.96396, 0.96381, 0.96371, 0.96406, 0.96267, 0.96202, 0.95779, 0.95054, 0.94988, 0.94909, 0.94942, 0.94951, 0.93676, 0.93689, 0.93651, 0.93631, 0.9362], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cas de cancers": {
men: [0.65061, 0.65059, 0.70295, 0.70366, 0.52292, 0.52287, 0.43721, 0.4367, 0.57155, 0.30488, 0.30518, 0.44016, 0.54623, 0.5459, 0.55713, 0.55671, 0.49784, 0.4978, 0.71236, 0.71247, 0.86453, 0.86766, 0.87849, 0.87889, 0.87871, 0.87259, 0.8644, 0.86525, 0.96716, 0.8469, 0.85294, 0.85307, 0.86506, 0.88903, 0.84509, 0.84219, 0.85278, 0.86208, 0.86136, 0.87302, 0.88044, 0.88013, 0.88, 0.96204, 0.96148, 0.96139, 0.96033, 0.95915, 0.95891, 0.96094, 0.95821, 0.89615, 0.89704, 0.88523, 0.78634, 0.82878, 0.82884, 0.82886, 0.82888, 0.829, 0.82923, 0.87121, 0.8707, 0.86186, 0.87379, 0.88171, 0.88177, 0.88161, 0.96363, 0.96079, 0.96084, 0.96041, 0.68764, 0.68742, 0.7548, 0.65135, 0.68711, 0.68775, 0.59487, 0.59446, 0.5945, 0.59466, 0.73795, 0.73864, 0.75673, 0.77142, 0.92325, 0.92584, 0.91812, 0.9243, 0.92407, 0.92356, 0.97175, 0.9732, 0.97305, 0.97294, 0.96907, 0.96875, 0.9705, 0.96991, 0.96471, 0.9626, 0.9618, 0.9552, 0.95274, 0.95278, 0.95292, 0.6415, 0.33242, 0.33239], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Préservatif masculin": {
men: [0.95157, 0.95154, 0.94914, 0.95011, 0.95107, 0.95097, 0.94612, 0.94925, 0.94457, 0.94889, 0.94983, 0.94966, 0.94875, 0.94728, 0.43155, 0.43122, 0.43109, 0.43105, 0.43096, 0.43103, 0.43102, 0.31207, 0.31235, 0.30266, 0.21307, 0.21313, 0.31689, 0.39154, 0.53429, 0.53445, 0.48558, 0.48566, 0.4855, 0.4827, 0.53051, 0.59619, 0.61673, 0.61791, 0.70398, 0.7038, 0.65044, 0.624, 0.62391, 0.62391, 0.74538, 0.74532, 0.74522, 0.76401, 0.76699, 0.73784, 0.76096, 0.73798, 0.73871, 0.73895, 0.95468, 0.95363, 0.9537, 0.95372, 0.95331, 0.95346, 0.95372, 0.9534, 0.95242, 0.95143, 0.94815, 0.95025, 0.95031, 0.95014, 0.95112, 0.81787, 0.81791, 0.81754, 0.80125, 0.80099, 0.8009, 0.64727, 0.64528, 0.5401, 0.54691, 0.53408, 0.53411, 0.53425, 0.52619, 0.53848, 0.53829, 0.53832, 0.53831, 0.53844, 0.5386, 0.63766, 0.58966, 0.94502, 0.94226, 0.94027, 0.94013, 0.94002, 0.93538, 0.94158, 0.94234, 0.94263, 0.94699, 0.94633, 0.94555, 0.94639, 0.94648, 0.94904, 0.94917, 0.94879, 0.94858, 0.94847], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tumeur": {
men: [0.72611, 0.68845, 0.76956, 0.5943, 0.59591, 0.56555, 0.57278, 0.78319, 0.8163, 0.78533, 0.77489, 0.77006, 0.79368, 0.79067, 0.79356, 0.81047, 0.80344, 0.8688, 0.86982, 0.89612, 0.89984, 0.85714, 0.8117, 0.87391, 0.9013, 0.87934, 0.8633, 0.92158, 0.84434, 0.83156, 0.83494, 0.82848, 0.8306, 0.82145, 0.76678, 0.72972, 0.82363, 0.73337, 0.7492, 0.76871, 0.72707, 0.74393, 0.63713, 0.64032, 0.63587, 0.63582, 0.65218, 0.64026, 0.64696, 0.58849, 0.5247, 0.54558, 0.52634, 0.52193, 0.52235, 0.50226, 0.5801, 0.56529, 0.5513, 0.5447, 0.52207, 0.51108, 0.49716, 0.62319, 0.63362, 0.59863, 0.59711, 0.59343, 0.64085, 0.64671, 0.66757, 0.65778, 0.6905, 0.70478, 0.66508, 0.72283, 0.64046, 0.62552, 0.61882, 0.66012, 0.6685, 0.6279, 0.61849, 0.6238, 0.64308, 0.66217, 0.73061, 0.73058, 0.73076, 0.72443, 0.78827, 0.79231, 0.77605, 0.76855, 0.7593, 0.79587, 0.79927, 0.78573, 0.73132, 0.73816, 0.59145, 0.60201, 0.63548, 0.61767, 0.61792, 0.6551, 0.54707, 0.57832, 0.61006, 0.61437], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traitement du cancer": {
men: [0.82342, 0.82339, 0.82343, 0.82427, 0.8251, 0.82501, 0.82483, 0.09011, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046193, 0.046192, 0.0677, 0.94865, 0.94908, 0.95683, 0.95998, 0.96092, 0.96187, 0.9621, 0.96238, 0.96322, 0.96337, 0.96306, 0.70029, 0.69912, 0.60764, 0.6069, 0.60652, 0.38014, 0, 0, 0.30527, 0.30523, 0.48092, 0.48081, 0.48077, 0.48071, 0.57319, 0.5742, 0.64257, 0.6429, 0.7172, 0.71791, 0.71814, 0.52625, 0.5438, 0.54384, 0.58806, 0.58808, 0.58817, 0.58832, 0.5881, 0.58776, 0.58807, 0.58745, 0.59189, 0.59193, 0.59182, 0.95954, 0.83589, 0.85339, 0.74681, 0.74647, 0.74623, 0.74614, 0.83643, 0.83618, 0.83555, 0.83605, 0.78026, 0.78031, 0.78052, 0.87884, 0.95955, 0.95883, 0.95888, 0.95995, 0.96019, 0.96048, 0.95722, 0.95757, 0.95806, 0.95865, 0.96007, 0.95992, 0.95982, 0.94665, 0.94634, 0.94256, 0.94285, 0, 0, 0, 0, 0.95251, 0.95255, 0.95269, 0.95231, 0.9521, 0.95199], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies auto-immunes": {
men: [0.67333, 0.67331, 0.83326, 0.83411, 0.83819, 0.83811, 0.83792, 0.83694, 0.83667, 0.85572, 0.85657, 0.84353, 0.95618, 0.95346, 0.9526, 0.95189, 0.93901, 0.93892, 0.93748, 0.93763, 0.93761, 0.93845, 0.9393, 0, 0, 0, 0, 0, 0.93523, 0.049893, 0.31903, 0.31908, 0.31897, 0.31713, 0.21678, 0.22212, 0.22186, 0.25203, 0.25181, 0.25175, 0.2517, 0.25162, 0.41152, 0.58995, 0.51918, 0.51913, 0.51907, 0.38926, 0.59068, 0.58589, 0.58618, 0.3932, 0.39359, 0.39372, 0.39371, 0.39333, 0, 0, 0, 0, 0, 0.5135, 0.51319, 0.51347, 0.51292, 0.95255, 0.95261, 0.95244, 0.95195, 0.95193, 0.95383, 0.8437, 0.84331, 0.84304, 0.84294, 0.53899, 0.53883, 0.53842, 0.92353, 0.9229, 0.92296, 0.79934, 0.79952, 0.80027, 0.7913, 0.82182, 0.8218, 0.822, 0.82225, 0.82221, 0.82251, 0.82293, 0, 0, 0, 0, 0.96368, 0.90362, 0.90436, 0.90463, 0.90563, 0.905, 0.90425, 0.90238, 0.90246, 0.90504, 0.83071, 0.77997, 0.7798, 0.72379], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"leucémie": {
men: [0.60903, 0.60901, 0.64638, 0.64704, 0.64769, 0.67314, 0.67299, 0.68391, 0.72598, 0.84285, 0.82938, 0.96003, 0.96107, 0.95675, 0.71481, 0.71427, 0.65701, 0.65695, 0.65682, 0.51871, 0.5187, 0.51916, 0.40685, 0.40703, 0.60122, 0.60138, 0.65874, 0.61298, 0.67457, 0.30737, 0.30763, 0.2972, 0.2971, 0.28414, 0.3451, 0.34512, 0.42602, 0.50854, 0.47648, 0.47636, 0.51362, 0.55874, 0.59502, 0.68135, 0.69978, 0.71594, 0.39399, 0.43119, 0.43457, 0.4234, 0.38647, 0.36039, 0.34978, 0.3499, 0.28943, 0.30169, 0.27843, 0.30103, 0.2661, 0.26614, 0.76713, 0.61603, 0.5297, 0.66939, 0.67646, 0.6066, 0.44067, 0.44059, 0.44037, 0.12261, 0.12262, 0.12256, 0.1225, 0.29148, 0.29145, 0.45406, 0.5326, 0.50462, 0.57023, 0.55851, 0.78488, 0.78508, 0.88414, 0.95987, 0.96018, 0.96092, 0.96338, 0.96324, 0.96353, 0.96255, 0.9626, 0.96309, 0.96368, 0.96559, 0.96591, 0.96625, 0.97024, 0.97085, 0.97162, 0.97158, 0.97108, 0.96999, 0.96918, 0.69392, 0.66278, 0.66872, 0.66882, 0.66166, 0.65412, 0.6463], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"recherche sur le cancer": {
men: [0.69796, 0.69793, 0.67696, 0.67765, 0.68119, 0.48628, 0.31708, 0.31671, 0.64429, 0.64443, 0.96204, 0.96187, 0.96094, 0.96037, 0.9595, 0.96562, 0.4614, 0.5058, 0.50386, 0.56893, 0.47858, 0.48274, 0.43158, 0.44599, 0.4459, 0.44602, 0.44646, 0.33748, 0.33756, 0.24258, 0.33771, 0.25044, 0.25036, 0.19508, 0.18048, 0.27316, 0.15039, 0.12807, 0.12796, 0.12792, 0.1279, 0.19433, 0.1943, 0.1943, 0.19426, 0.23952, 0.23949, 0.16761, 0.15809, 0, 0.16794, 0.16792, 0.16809, 0.16814, 0.16814, 0.16797, 0.077084, 0.061208, 0.06121, 0.061219, 0.20428, 0.2042, 0.20978, 0.21733, 0.19861, 0.35567, 0.35569, 0.54168, 0.50047, 0.48796, 0.52466, 0.71108, 0.71075, 0.71052, 0.67718, 0.67716, 0.76833, 0.75009, 0.76263, 0.74867, 0.74872, 0.6181, 0.89321, 0.94173, 0.9425, 0.94256, 0.94253, 0.94276, 0.94305, 0.943, 0.93148, 0.96528, 0.96498, 0.97065, 0.9705, 0.97039, 0.96507, 0.96274, 0.84542, 0.86029, 0.86124, 0.86064, 0.85992, 0.85814, 0.85822, 0.85826, 0.85838, 0.78913, 0.78896, 0.78887], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Hépatite virale": {
men: [0.44868, 0.44866, 0.41719, 0.41762, 0.41804, 0.23902, 0.11005, 0.17883, 0.12042, 0.26003, 0.26028, 0.26024, 0.25999, 0.2469, 0.24668, 0.22787, 0.2278, 0.22777, 0.22773, 0.26059, 0.72147, 0.6556, 0.65619, 0.20791, 0.20787, 0.20792, 0.37837, 0.36925, 0.36934, 0.40756, 0.44943, 0.4495, 0.44936, 0.44676, 0.49475, 0.56175, 0.58304, 0.77313, 0.77248, 0.77228, 0.73684, 0.94986, 0.94972, 0.94973, 0.94968, 0.9496, 0.94948, 0.95344, 0.95523, 0.95307, 0.95484, 0.95344, 0.95439, 0.9547, 0.95468, 0.95363, 0.9537, 0.95372, 0.95331, 0.95346, 0.95372, 0.75224, 0.74438, 0.71682, 0.66984, 0.7134, 0.71345, 0.71332, 0.58996, 0.47448, 0.47451, 0.4743, 0.44397, 0.44382, 0.44377, 0.5067, 0.36454, 0.34362, 0.35081, 0.3372, 0.30472, 0.3048, 0.32629, 0.33851, 0.33839, 0.33841, 0.3384, 0.33849, 0.33859, 0.33366, 0.37131, 0.40454, 0.35221, 0.30886, 0.51531, 0.51525, 0.39185, 0.55598, 0.55643, 0.21464, 0.19333, 0.1932, 0.16722, 0.17326, 0.1856, 0.22903, 0.22906, 0.22897, 0.20992, 0.2099], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"anticancéreux": {
men: [0.74969, 0.63963, 0.63966, 0.64031, 0.64096, 0.64089, 0.64075, 0.57927, 0.55336, 0.33737, 0.33771, 0.28922, 0.33441, 0.15482, 0.28352, 0.39846, 0.55061, 0.55056, 0.55045, 0.62795, 0.62794, 0.9598, 0.95882, 0.96084, 0.96064, 0.96295, 0.96389, 0.96484, 0.96327, 0.96355, 0.14611, 0.15912, 0.12844, 0.079847, 0.079713, 0.079717, 0.11219, 0.11921, 0.11911, 0.082919, 0.087902, 0.13907, 0.30564, 0.29548, 0.40393, 0.39966, 0.44999, 0.44527, 0.43264, 0.43241, 0.43079, 0.41821, 0.41863, 0.41876, 0.51953, 0.49391, 0.19653, 0.27901, 0.34851, 0.34856, 0.34866, 0.50696, 0.94635, 0.50634, 0.18233, 0.46795, 0.39216, 0.39209, 0.39189, 0.33326, 0.43589, 0.47633, 0.47612, 0.47596, 0.47591, 0.47589, 0.47575, 0.53375, 0.60881, 0.54708, 0.81004, 0.81026, 0.85014, 0.95322, 0.65893, 0.66691, 0.66689, 0.66705, 0.66725, 0.71582, 0.71609, 0.71645, 0.71689, 0.71795, 0.71784, 0.71776, 0.63698, 0.29377, 0.29018, 0.20101, 0.20124, 0.2011, 0.14626, 0.097275, 0.097284, 0.30721, 0.30725, 0.30713, 0.30706, 0.30702], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cancer du poumon": {
men: [0.25562, 0.26878, 0.31469, 0.31502, 0.33836, 0.38016, 0.41084, 0.44165, 0.41301, 0.50067, 0.50117, 0.48674, 0.54325, 0.73789, 0.78889, 0.80368, 0.80107, 0.80099, 0.82019, 0.86008, 0.86007, 0.86084, 0.86162, 0.82329, 0.74524, 0.6425, 0.64313, 0.42642, 0.24118, 0.14197, 0.119, 0.11902, 0, 0.023022, 0.070529, 0.12257, 0.23582, 0.21212, 0.24966, 0.26362, 0.26357, 0.28974, 0.2897, 0.30385, 0.30378, 0.30375, 0.31085, 0.52602, 0.52855, 0.52698, 0.45917, 0.96601, 0.96307, 0.96339, 0.96336, 0.95941, 0.96098, 0.95861, 0.8144, 0.68558, 0.75617, 0.77663, 0.32974, 0.28412, 0.22009, 0.22009, 0.2201, 0.22006, 0.25009, 0.25009, 0.22324, 0.29144, 0.30026, 0.31215, 0.18669, 0.20674, 0.36118, 0.3609, 0.35264, 0.3524, 0.32777, 0.32785, 0.29756, 0.35792, 0.3578, 0.2959, 0.28511, 0.27459, 0.34637, 0.37188, 0.41594, 0.41615, 0.51784, 0.49172, 0.54524, 0.55594, 0.54134, 0.53807, 0.50678, 0.29696, 0.31163, 0.36527, 0.37301, 0.62795, 0.63193, 0.60652, 0.60202, 0.63363, 0.64966, 0.64512], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lymphocytes": {
men: [0.30069, 0.30068, 0.33783, 0.33818, 0.46807, 0.46802, 0.43791, 0.44412, 0.39396, 0.51668, 0.5172, 0.59304, 0.64368, 0.47462, 0.47419, 0.47383, 0.47368, 0.47364, 0.51323, 0.56347, 0.94552, 0.94636, 0.56389, 0.56415, 0.56404, 0.56419, 0.56474, 0.69604, 0.85658, 0.65561, 0.6046, 0.60469, 0.6045, 0.59317, 0.57548, 0.57551, 0.58262, 0.58226, 0.58177, 0.58162, 0.58152, 0.58246, 0.28637, 0.48905, 0.71413, 0.58816, 0.58808, 0.47019, 0.51971, 0.55651, 0.47381, 0.45435, 0.4548, 0.45495, 0.45494, 0.26898, 0.269, 0.26901, 0.2132, 0.24456, 0.24463, 0.3675, 0.36728, 0.30178, 0.36052, 0.39661, 0.31651, 0.26274, 0.2626, 0.72463, 0.72467, 0.25979, 0.25967, 0.25959, 0.25956, 0.41777, 0.35513, 0.33259, 0.35202, 0.34739, 0.37867, 0.37012, 0.36243, 0.35707, 0.35694, 0.46199, 0.46198, 0.4621, 0.46223, 0.37579, 0.47805, 0.55831, 0.52188, 0.46792, 0.38494, 0.53778, 0.64589, 0.32476, 0.32237, 0.28761, 0.32059, 0.32037, 0.30504, 0.30526, 0.30529, 0.29699, 0.29704, 0.30886, 0.30879, 0.23605], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque de cancer": {
men: [0.11693, 0.13728, 0.18341, 0.1836, 0.18378, 0.3716, 0.35202, 0.40181, 0.45613, 0.44511, 0.40032, 0.38835, 0.42886, 0.48295, 0.50246, 0.4839, 0.62194, 0.62188, 0.62177, 0.36382, 0.36382, 0.35618, 0.3146, 0.30831, 0.34649, 0.36006, 0.3413, 0.30912, 0.24634, 0.36175, 0.30552, 0.30557, 0.30547, 0.6108, 0.66192, 0.73286, 0.64398, 0.56036, 0.55989, 0.44861, 0.43357, 0.44736, 0.36295, 0.30703, 0.31493, 0.3149, 0.34869, 0.32231, 0.30183, 0.29677, 0.2876, 0.30837, 0.31567, 0.36539, 0.33831, 0.40367, 0.47785, 0.57069, 0.47967, 0.47974, 0.4726, 0.4802, 0.49191, 0.4714, 0.46637, 0.44966, 0.43083, 0.43075, 0.57132, 0.38985, 0.37769, 0.37752, 0.67265, 0.6964, 0.57652, 0.57309, 0.54175, 0.54135, 0.54167, 0.58811, 0.654, 0.65417, 0.62651, 0.64515, 0.66402, 0.66406, 0.57805, 0.58253, 0.57506, 0.57569, 0.60152, 0.60182, 0.48445, 0.43285, 0.36452, 0.36448, 0.35369, 0.28091, 0.27663, 0.22543, 0.21492, 0.1618, 0.16566, 0.30948, 0.36173, 0.36175, 0.45472, 0.50188, 0.58391, 0.58384], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cd4": {
men: [0.010723, 0.010722, 0.015145, 0.015161, 0.017485, 0.0325, 0.044179, 0.067183, 0.082191, 0.26682, 0.26709, 0.57803, 0.57747, 0.48387, 0.28974, 0.28952, 0.28943, 0.2894, 0.40655, 0.40661, 0.40661, 0.40697, 0.28991, 0.29004, 0.28998, 0.29006, 0.29034, 0.44644, 0.2137, 0.21376, 0.60227, 0.60237, 0.60217, 0.5987, 0.59769, 0.59772, 0.21994, 0.20909, 0.20892, 0.20886, 0.31182, 0.38084, 0.41196, 0.41197, 0.32896, 0.31527, 0.31524, 0.29834, 0.29887, 0.31386, 0.6084, 0.62108, 0.62169, 0.62189, 0.55029, 0.34433, 0.34436, 0.34437, 0.34428, 0.4002, 0.40031, 0.56597, 0.61124, 0.57284, 0.60764, 0.74172, 0.67701, 0.62195, 0.32769, 0.57789, 0.57792, 0.53643, 0.53619, 0.53601, 0.53595, 0.62053, 0.44067, 0.36129, 0.36515, 0.33075, 0.35235, 0.34542, 0.38152, 0.32668, 0.37182, 0.41476, 0.41475, 0.41485, 0.41498, 0.35723, 0.42434, 0.57281, 0.54943, 0.77064, 0.80382, 0.95599, 0.95549, 0.95517, 0.95196, 0.39198, 0.45815, 0.45783, 0.4089, 0.40966, 0.4097, 0.38544, 0.38549, 0.38534, 0.38525, 0.23389], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"globules blancs": {
men: [0, 0, 0, 0, 0, 0, 0.257, 0.2567, 0.25662, 0.4272, 0.42762, 0.42755, 0.42714, 0.42688, 0.4265, 0.36019, 0.5216, 0.52155, 0.52145, 0.57812, 0.47193, 0.47236, 0.47278, 0.23392, 0.23387, 0.23393, 0.23416, 0.23439, 0.23445, 0.37523, 0.94693, 0.94708, 0.94678, 0.93611, 0.46135, 0.46137, 0.46082, 0.46053, 0.46014, 0.46002, 0.45994, 0.33666, 0.54391, 0.54391, 0.54141, 0.54137, 0.5413, 0.54301, 0.72138, 0.72099, 0.37797, 0.45089, 0.45134, 0.45149, 0.45148, 0.50553, 0.36939, 0.3694, 0.21802, 0.21805, 0.21811, 0.21803, 0.2179, 0.48251, 0.94492, 0.94163, 0.94169, 0.94152, 0.94104, 0.94102, 0.94107, 0.94065, 0.94022, 0.93992, 0.93981, 0.93978, 0.93949, 0, 0, 0, 0, 0, 0, 0, 0.1813, 0.18131, 0.18131, 0.18135, 0.18141, 0.1814, 0.18146, 0.18156, 0.18167, 0.18194, 0.45452, 0.45447, 0.93758, 0.94352, 0.94389, 0.94418, 0.94522, 0.94456, 0.94378, 0.94182, 0.94569, 0.95065, 0.95078, 0.9504, 0.95019, 0.95009], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cancers professionnels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.54629, 0.54596, 0.54547, 0.54506, 0.54489, 0.54483, 0.54473, 0.54482, 0.54481, 0.58259, 0.58312, 0.58338, 0.9497, 0.94995, 0.93285, 0.94797, 0.9482, 0.94847, 0.9493, 0.94944, 0.94914, 0.9511, 0.9495, 0.94854, 0.94739, 0.9468, 0.94893, 0.94869, 0.94852, 0.94495, 0.94482, 0.94483, 0.58129, 0.58124, 0.58117, 0.3518, 0.19785, 0.19775, 0.25049, 0.25047, 0.080954, 0.080981, 0.080979, 0.080899, 0.080905, 0.080907, 0.13616, 0.13618, 0.13622, 0.13617, 0.92995, 0.93045, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38936, 0.38932, 0.38931, 0.38919, 0.41311, 0.35184, 0.37683, 0.37685, 0.40614, 0.40623, 0.40661, 0.40646, 0.46418, 0.46417, 0.40858, 0.40871, 0.40868, 0.40884, 0.37331, 0.94284, 0.93877, 0.93862, 0, 0, 0.94497, 0.94574, 0.94603, 0.94707, 0.94641, 0.94563, 0.94367, 0.94376, 0.9438, 0.94393, 0.94356, 0.9481, 0.94799], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"stratégies thérapeutiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28427, 0.28409, 0.40548, 0.40518, 0.94512, 0.94503, 0.94485, 0.609, 0.60899, 0.60953, 0.61008, 0.61036, 0.61024, 0.6104, 0, 0, 0, 0, 0.62678, 0.62688, 0.62668, 0.59083, 0.58984, 0.58987, 0.71453, 0.71408, 0.75629, 0.7561, 0.75596, 0.81317, 0.81305, 0.81306, 0.7868, 0.78673, 0.78663, 0.953, 0.95469, 0.56516, 0.4836, 0.48355, 0.41416, 0.41429, 0.41428, 0.15166, 0.15167, 0.11525, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40732, 0.57155, 0.64356, 0.64394, 0.6435, 0.64355, 0.64371, 0.64386, 0.64446, 0.64423, 0.64427, 0.64425, 0.64441, 0.64461, 0.48602, 0, 0.93971, 0.94029, 0.94168, 0.94154, 0.94143, 0.94167, 0.94136, 0.94495, 0.94524, 0.94628, 0.94562, 0.94484, 0.94288, 0.94297, 0.93035, 0.93048, 0.93011, 0.12846, 0.12844], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"endocriniennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14345, 0.13525, 0.25758, 0.2575, 0.25748, 0.21601, 0.17932, 0.14937, 0.13919, 0.13931, 0.17516, 0.17513, 0.17517, 0.22029, 0.1792, 0.1568, 0.050162, 0.095037, 0.095052, 0.11353, 0.15009, 0.24519, 0.3418, 0.34138, 0.34117, 0.34088, 0.34079, 0.205, 0.16857, 0.46995, 0.46996, 0, 0, 0, 0.51997, 0.52089, 0.52061, 0.52087, 0.52082, 0.52133, 0.5215, 0.52149, 0.70318, 0.70323, 0.70324, 0.70326, 0.70337, 0.94168, 0, 0, 0, 0.93706, 0.93703, 0.93709, 0.93692, 0.51572, 0.51571, 0.51574, 0.51551, 0.51527, 0.51511, 0.51505, 0.75388, 0.81485, 0.81424, 0.78443, 0.78389, 0.78394, 0.78415, 0.9475, 0.94838, 0.94805, 0.9481, 0.94807, 0.94831, 0.9486, 0.94532, 0.93664, 0.93712, 0.93769, 0.93909, 0.93894, 0.93883, 0.94464, 0.51173, 0.61213, 0.72071, 0.73176, 0.74028, 0.73967, 0.69937, 0.69944, 0.69947, 0.60456, 0.60432, 0.60419, 0.60412], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moelle osseuse": {
men: [0.3976, 0.39759, 0.39761, 0.39801, 0.39841, 0.39837, 0.39828, 0.39782, 0.33065, 0.52283, 0.52335, 0.94589, 0.94498, 0.94441, 0.9543, 0.95358, 0.95328, 0.95319, 0.95301, 0.95428, 0.95426, 0.77557, 0.71933, 0.71965, 0.71951, 0.78954, 0.79032, 0.7911, 0.64536, 0.50474, 0.56964, 0.56973, 0.56955, 0.52068, 0.51981, 0.69482, 0.69398, 0.69354, 0.69296, 0.43745, 0.43738, 0.33758, 0.33753, 0.57231, 0.17583, 0.17582, 0.17579, 0.17635, 0.17666, 0, 0, 0.070061, 0.07013, 0.070153, 0.064449, 0.034859, 0.034861, 0.034862, 0.034863, 0.034868, 0.034878, 0.034864, 0.034844, 0.05046, 0.060915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95905, 0.95994, 0.96025, 0.8985, 0.84569, 0.8459, 0.84615, 0.84611, 0.84642, 0.84685, 0.84737, 0.84863, 0.8485, 0.8484, 0.30315, 0.30305, 0.28597, 0.44198, 0.93856, 0.9379, 0.93713, 0.44087, 0.60347, 0.6035, 0.60358, 0.60334, 0.60321, 0.60314], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies orphelines": {
men: [0.25515, 0.21475, 0.21476, 0.21498, 0.22347, 0.22345, 0.2234, 0.2015, 0.20144, 0, 0, 0, 0, 0.16952, 0.16936, 0.59138, 0.5912, 0.59114, 0.59103, 0.59112, 0.59111, 0.34264, 0.34295, 0.43714, 0.43705, 0.43717, 0.4376, 0, 0, 0, 0, 0, 0.072029, 0.091307, 0.079315, 0.079081, 0.078985, 0.078936, 0.078869, 0.078849, 0.078835, 0.078807, 0.078796, 0.078797, 0.078778, 0.066724, 0.061249, 0, 0, 0.097131, 0.097179, 0.09717, 0.097266, 0.097298, 0.097296, 0.0972, 0.097207, 0.09721, 0.097212, 0.93986, 0.94011, 0.93976, 0.94241, 0.93129, 0.93029, 0.93026, 0.94195, 0.94178, 0.9413, 0.94128, 0.94611, 0.94569, 0.94526, 0.94495, 0.94484, 0.94481, 0.94272, 0.94201, 0.94257, 0.94193, 0.93513, 0.93538, 0.93559, 0.93646, 0, 0, 0.93685, 0.94295, 0.55601, 0.42958, 0.42974, 0.42996, 0.43023, 0.43086, 0.4308, 0.43075, 0.43086, 0.43072, 0.43107, 0.4312, 0.38232, 0.38536, 0.43721, 0.9378, 0.93789, 0.93793, 0.93806, 0.93768, 0.93748, 0.93737], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosions nucléaires": {
men: [0, 0, 0.24024, 0.24048, 0.27956, 0.27954, 0.27947, 0.27915, 0.27906, 0.27912, 0.21078, 0.21075, 0.40018, 0.2974, 0.29713, 0.29691, 0.23842, 0.23839, 0.2237, 0.22374, 0.22373, 0.22394, 0.22414, 0.22424, 0.25523, 0.2553, 0, 0, 0, 0, 0, 0, 0.93577, 0.93684, 0.93526, 0.93531, 0.93418, 0.93359, 0.9328, 0.93256, 0.9324, 0.93207, 0.93194, 0.93194, 0.93172, 0.93164, 0.92509, 0, 0, 0, 0, 0, 0, 0, 0.9335, 0.93259, 0.93266, 0.93268, 0.9327, 0.93284, 0.93309, 0.93274, 0.93219, 0.9375, 0.93649, 0.93647, 0.93653, 0.93636, 0.92738, 0.92736, 0.92741, 0.93287, 0.93245, 0.93215, 0.93204, 0.93201, 0.93173, 0.92399, 0.92454, 0.92391, 0.92397, 0.92422, 0.92443, 0.92529, 0.17695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mortalité prématurée": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29545, 0.29518, 0.31954, 0.31944, 0.31941, 0.31935, 0.95819, 0.95817, 0.95903, 0.9599, 0.96176, 0.96157, 0.96182, 0.69607, 0.39825, 0.28708, 0.28716, 0.22967, 0.42613, 0.42599, 0.33277, 0.33222, 0.33223, 0.33183, 0.28462, 0.28438, 0.2843, 0.33604, 0.27578, 0.33599, 0.336, 0.41816, 0, 0, 0, 0.48973, 0.73893, 0.73929, 0.73922, 0.73996, 0.7402, 0.94964, 0.94871, 0.94878, 0.94881, 0.94883, 0.94897, 0.94923, 0.94887, 0.20601, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95353, 0.95319, 0.95325, 0.95322, 0.95346, 0.95375, 0.95369, 0.95405, 0.95453, 0.95512, 0.95654, 0.95639, 0.95628, 0.95652, 0, 0, 0, 0, 0, 0, 0.9466, 0.94669, 0.94673, 0.94687, 0.94649, 0.94628, 0.94617], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cause de mortalité": {
men: [0.066895, 0.038861, 0.029533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045723, 0.056113, 0.056062, 0.08457, 0.18052, 0.1805, 0.18047, 0.42071, 0.4207, 0.53907, 0.53266, 0.52341, 0.5233, 0.52344, 0.54353, 0.58885, 0.7002, 0.74927, 0.74992, 0.7862, 0.78594, 0.76423, 0.76295, 0.83556, 0.71875, 0.66903, 0.66846, 0.66829, 0.66131, 0.46071, 0.3917, 0.32765, 0.35069, 0.27495, 0.27492, 0.28912, 0.28963, 0.26304, 0.25743, 0.29234, 0.29263, 0.29273, 0.41157, 0.69757, 0.69762, 0.6286, 0.62151, 0.62161, 0.62177, 0.60718, 0.62101, 0.62267, 0.58012, 0.38259, 0.38261, 0.38254, 0.32094, 0.1781, 0.17811, 0.20025, 0.2383, 0.23822, 0.2382, 0.26041, 0.22738, 0.36217, 0.3863, 0.78156, 0.78161, 0.79782, 0.77088, 0.95381, 0.95348, 0.95353, 0.95212, 0.95236, 0.95264, 0.9508, 0.95115, 0.9362, 0.48936, 0.49008, 0.49001, 0, 0, 0, 0, 0, 0, 0, 0, 0.50493, 0.56566, 0.56568, 0.57846, 0.55084, 0.56356, 0.5635], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tests cliniques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9403, 0.94123, 0.94107, 0.94016, 0.9396, 0.95196, 0.95124, 0.95094, 0.95085, 0.95067, 0.95082, 0.95276, 0.95361, 0.95447, 0.95276, 0.95257, 0.95282, 0.95376, 0.9547, 0.94109, 0.38243, 0.38276, 0.25824, 0.25816, 0.25667, 0, 0, 0, 0.25578, 0.25556, 0.25549, 0.25545, 0.25536, 0.25532, 0.42592, 0.42582, 0.93139, 0.93127, 0.93422, 0.32272, 0.32254, 0.3227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93171, 0.93143, 0.93073, 0.93128, 0.93064, 0.19594, 0.19599, 0.19603, 0.19622, 0.19615, 0.19616, 0.19615, 0.38589, 0.386, 0.28099, 0.28109, 0.57257, 0.57292, 0.57377, 0.95123, 0.95113, 0.95137, 0.95105, 0.95183, 0.95212, 0.95317, 0.94935, 0.94856, 0.9466, 0.94669, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
