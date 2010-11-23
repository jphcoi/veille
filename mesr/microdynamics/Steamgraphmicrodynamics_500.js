var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"utilité sociale": {
men: [0.65981, 0.95022, 0.7347, 0.73451, 0.77894, 0.77864, 0.86465, 0.86499, 0.83661, 0.83646, 0.846, 0.84621, 0.82756, 0.82768, 0.8278, 0.82726, 0.9556, 0.95592, 0.95414, 0.95401, 0.94995, 0.94998, 0.94954, 0.61303, 0.59193, 0.5919, 0.59173, 0.59168, 0.59125, 0.5912, 0.5912, 0.59105, 0.73886, 0.73882, 0.46156, 0.41454, 0.29399, 0.34227, 0.32154, 0.32145, 0.28382, 0.28371, 0.28381, 0.28366, 0.29098, 0.29101, 0.061808, 0.047933, 0.0527, 0.036278, 0.045898, 0.21124, 0.38754, 0.38766, 0.41349, 0.46452, 0.50703, 0.5071, 0.54233, 0.54207, 0.68734, 0.79712, 0.58518, 0.58495, 0.59137, 0.53257, 0.37783, 0.37785, 0.40384, 0.34097, 0.29782, 0.29791, 0.22011, 0.22017, 0.21766, 0.24482, 0.37829, 0.37856, 0.41142, 0.48955, 0.48945, 0.45713, 0.40392, 0.37613, 0.25721, 0.25728, 0.28726, 0.24653, 0.25592, 0.17743, 0.17743, 0.17751, 0.13634, 0.089253, 0.089273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10143, 0.16767, 0.12782, 0.12781, 0.11903], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"capitalistes": {
men: [0.27094, 0.3095, 0.32866, 0.33419, 0.29345, 0.3153, 0.44876, 0.32815, 0.38718, 0.38711, 0.4168, 0.44988, 0.39791, 0.3549, 0.41089, 0.37268, 0.36252, 0.36264, 0.35544, 0.355, 0.38594, 0.51762, 0.44256, 0.44243, 0.41879, 0.40716, 0.42424, 0.36289, 0.36669, 0.30246, 0.30246, 0.29303, 0.30798, 0.35613, 0.35029, 0.22152, 0.24366, 0.20284, 0.19747, 0.19963, 0.18558, 0.20224, 0.19829, 0.22991, 0.2272, 0.23646, 0.26158, 0.22588, 0.21449, 0.20641, 0.19945, 0.26322, 0.26572, 0.26581, 0.29213, 0.27811, 0.29505, 0.28217, 0.2892, 0.31005, 0.27373, 0.31551, 0.28609, 0.32673, 0.25975, 0.25285, 0.25119, 0.25121, 0.2609, 0.28955, 0.26283, 0.27974, 0.22725, 0.22426, 0.22224, 0.17601, 0.19619, 0.18848, 0.2185, 0.19388, 0.20408, 0.20406, 0.19084, 0.18693, 0.1868, 0.18685, 0.27119, 0.17459, 0.16102, 0.29372, 0.23766, 0.20968, 0.20972, 0.21996, 0.35798, 0.36969, 0.35876, 0.29947, 0.2822, 0.28231, 0.29882, 0.30636, 0.37117, 0.33375, 0.36234, 0.37823, 0.3482, 0.35436, 0.30846, 0.32974], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété collective": {
men: [0.18125, 0.26149, 0.35137, 0.35128, 0.35129, 0.35116, 0.42362, 0.59394, 0.64433, 0.94907, 0.94833, 0.94406, 0.94476, 0.94774, 0.94788, 0.94726, 0.94455, 0.94487, 0.94482, 0.9447, 0.94114, 0.94118, 0.32156, 0.51208, 0.51253, 0.5125, 0.51235, 0.37477, 0.37449, 0.37446, 0.37446, 0.37436, 0.3743, 0.37428, 0.58167, 0.69538, 0.94812, 0.94747, 0.94755, 0.94729, 0.71135, 0.71107, 0.71132, 0.71095, 0.7106, 0.71066, 0.70986, 0.75701, 0.70105, 0.57146, 0.41074, 0.30053, 0.3004, 0.3005, 0.333, 0.33298, 0.46227, 0.46234, 0.46232, 0.46209, 0.46243, 0.044894, 0.044893, 0.044875, 0.048151, 0.083747, 0.076934, 0.076939, 0.080633, 0.080655, 0.037339, 0.095685, 0.12169, 0.12173, 0.12178, 0.57767, 0.57809, 0.41696, 0.41676, 0.34063, 0.50008, 0.50003, 0.58565, 0.58557, 0.58535, 0.089621, 0.047806, 0.047823, 0.047803, 0.047812, 0.047813, 0.0533, 0.053309, 0.053296, 0.053308, 0.053308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4716, 0.30846, 0.3083, 0.30815, 0.30817, 0.30783, 0.5243, 0.52422, 0.68902, 0.68905, 0.70572, 0.71996, 0.60145, 0.60131, 0.5158, 0.68967, 0.68976, 0.68973, 0.68939, 0.68989, 0.43789, 0.43788, 0.34418, 0.34428, 0.51365, 0.4483, 0.93936, 0.93956, 0.93982, 0.93976, 0.94006, 0.94053, 0.94079, 0.94125, 0.94089, 0.94157, 0.94224, 0.64593, 0.49163, 0.64147, 0.64141, 0.71441, 0.71431, 0.71405, 0.71425, 0.71401, 0.71426, 0.76894, 0.76908, 0.7691, 0.76942, 0.70199, 0.70183, 0.62041, 0.62041, 0.48251, 0.4826, 0.48311, 0.48331, 0.48342, 0.48352, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement humain": {
men: [0.57392, 0.79906, 0.77886, 0.77867, 0.7787, 0.7784, 0.77832, 0.95609, 0.73867, 0.68457, 0.66341, 0.60296, 0.38889, 0.31132, 0.25686, 0.29754, 0.27987, 0.27997, 0.27995, 0.24494, 0.24502, 0.28444, 0.25401, 0.21056, 0.21074, 0.22397, 0.23503, 0.23502, 0.38747, 0.32894, 0.26817, 0.2681, 0.23797, 0.28937, 0.2221, 0.16091, 0.17115, 0.17112, 0.17114, 0.28212, 0.31848, 0.20531, 0.14842, 0.14835, 0.16976, 0.16978, 0.18476, 0.18478, 0.21067, 0.21065, 0.19523, 0.20673, 0.20664, 0.11991, 0.16842, 0.18809, 0.17486, 0.17488, 0.19668, 0.19659, 0.19673, 0.21494, 0.2197, 0.18531, 0.17374, 0.16239, 0.16246, 0.17042, 0.091309, 0.10123, 0.11482, 0.12832, 0.094811, 0.10641, 0.10646, 0.068342, 0.13934, 0.18158, 0.31646, 0.41557, 0.33406, 0.34351, 0.34344, 0.40097, 0.40082, 0.47773, 0.52596, 0.51578, 0.62254, 0.7118, 0.67398, 0.63729, 0.58316, 0.45107, 0.68245, 0.68245, 0.68293, 0.76991, 0.77072, 0.51611, 0.31933, 0.31939, 0.19573, 0.19593, 0.15951, 0.17991, 0.27879, 0.29205, 0.31086, 0.31083], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"productivisme": {
men: [0.20524, 0.21674, 0.22198, 0.22192, 0.27795, 0.29402, 0.35029, 0.41811, 0.33658, 0.42786, 0.51246, 0.51258, 0.47636, 0.44433, 0.41634, 0.48693, 0.48689, 0.48705, 0.41893, 0.31442, 0.19248, 0.077225, 0.050029, 0.046951, 0.014604, 0.068294, 0.062802, 0.19472, 0.18738, 0.19138, 0.22492, 0.21929, 0.23337, 0.25306, 0.26827, 0.28389, 0.35599, 0.37226, 0.40267, 0.41637, 0.40364, 0.28737, 0.31693, 0.36129, 0.33601, 0.30867, 0.36664, 0.28516, 0.29134, 0.2938, 0.27093, 0.23078, 0.19988, 0.13199, 0.13533, 0.13532, 0.12307, 0.096442, 0.099476, 0.11971, 0.10759, 0.14325, 0.12867, 0.13287, 0.13901, 0.1465, 0.15077, 0.21914, 0.24603, 0.20605, 0.28207, 0.32235, 0.26891, 0.25435, 0.31764, 0.33098, 0.33122, 0.34989, 0.36102, 0.34057, 0.32887, 0.35376, 0.33713, 0.41043, 0.34743, 0.33634, 0.42837, 0.35942, 0.18965, 0.41938, 0.39865, 0.36057, 0.30772, 0.33069, 0.34958, 0.34958, 0.40906, 0.40914, 0.40957, 0.40974, 0.38973, 0.44424, 0.42096, 0.068836, 0.069289, 0.12001, 0.19333, 0.19346, 0.22498, 0.22496], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0.58034, 0.58047, 0.58041, 0.9393, 0.93933, 0.93897, 0.93887, 0.93925, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94839, 0.56666, 0.56716, 0.56713, 0.56696, 0.56692, 0.56651, 0.56646, 0.56646, 0.56631, 0.56622, 0.56618, 0.56587, 0.59228, 0.31836, 0.92887, 0.92896, 0.9287, 0.9286, 0.92824, 0.29286, 0.2927, 0.29256, 0.29258, 0.29225, 0.2923, 0.06482, 0, 0.068441, 0.11331, 0.10136, 0.10139, 0.10137, 0.18624, 0.26739, 0.26743, 0.26742, 0.26729, 0.26748, 0.26743, 0.34489, 0.57992, 0.53798, 0.64217, 0.94764, 0.95159, 0.95179, 0.94822, 0.94166, 0.94197, 0.47384, 0.38342, 0.38361, 0.38346, 0.38374, 0.38401, 0.38383, 0.38386, 0.38378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"travailleurs agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93569, 0.93561, 0.93593, 0.93589, 0.25291, 0.25299, 0.253, 0.25289, 0.25281, 0.20663, 0.45402, 0.73138, 0.73132, 0.73079, 0.71369, 0.71369, 0.71351, 0.71339, 0.88561, 0.89027, 0.88994, 0.88989, 0.88975, 0.95637, 0.95394, 0.9307, 0.094211, 0.094245, 0.094196, 0.094149, 0.094157, 0.094051, 0.094065, 0, 0, 0, 0.219, 0.18345, 0.25182, 0.25176, 0.51349, 0.51343, 0.5135, 0.51348, 0.51323, 0.4744, 0.47432, 0.47431, 0.60377, 0.60395, 0.44051, 0.72113, 0.5806, 0.58073, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15685, 0.15688, 0.15696, 0.93347, 0.93261, 0.93194, 0.93245, 0.93306, 0.93295, 0.93287], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pc. des ressources": {
men: [0.23916, 0.16316, 0.10376, 0.10374, 0.086293, 0.08626, 0.086251, 0.064662, 0.072131, 0.072118, 0.11227, 0.10149, 0.10156, 0.10158, 0.15616, 0.1928, 0.38507, 0.42827, 0.65589, 0.65581, 0.65603, 0.57484, 0.57458, 0.65148, 0.60453, 0.94674, 0.94646, 0.94639, 0.94346, 0.94337, 0.94043, 0.93591, 0.93575, 0.17445, 0.58739, 0.58717, 0.58714, 0.55088, 0.55093, 0.55078, 0.41382, 0.27629, 0.27639, 0.24871, 0.24859, 0.24861, 0.24833, 0.30673, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30757, 0.43344, 0.43327, 0.4334, 0.43354, 0.43374, 0.43377, 0.43387, 0.43398, 0.43396, 0.94734, 0.94781, 0.94807, 0.94854, 0.94011, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1392, 0.12407, 0.16465, 0.16468, 0.16468, 0.18949, 0.23548, 0.18353, 0.26876, 0.26882, 0.32029, 0.32045, 0.32078, 0.32048, 0.17709, 0.26789, 0.16317, 0.29051, 0.4319], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champ pétrolifère": {
men: [0.0061891, 0.0058949, 0.007358, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62031, 0.80303, 0.6969, 0.69669, 0.78412, 0.78408, 0.78385, 0.78379, 0.78322, 0.78315, 0.78315, 0.78295, 0.85839, 0.85834, 0.83451, 0.74336, 0.94053, 0.94038, 0, 0, 0.93416, 0.93379, 0.93412, 0.93364, 0.4415, 0.44154, 0.44104, 0.44111, 0.44104, 0.44101, 0.44103, 0.44092, 0.44074, 0.44088, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93389, 0.93409, 0.93409, 0.93475, 0.93493, 0.93592, 0.9363, 0.93652, 0.93672, 0.9372, 0.12721, 0.12709, 0.127, 0.12707, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"richesses naturelles": {
men: [0.42583, 0.39339, 0.48244, 0.48231, 0.44388, 0.59712, 0.49773, 0.44403, 0.44408, 0.38673, 0.34169, 0.40234, 0.40265, 0.4027, 0.3706, 0.38655, 0.36145, 0.36157, 0.36155, 0.21565, 0.19308, 0.20834, 0.20825, 0.22853, 0.26101, 0.17114, 0.17109, 0.17107, 0.11744, 0.066015, 0.078495, 0.20768, 0.20765, 0.20454, 0.31843, 0.10263, 0.10262, 0.10261, 0.085506, 0.085482, 0.13399, 0.13394, 0.13398, 0.13391, 0.13385, 0.065798, 0.065724, 0.075141, 0.075129, 0.64281, 0.3604, 0.36031, 0.43971, 0.34683, 0.24938, 0.24936, 0.1856, 0.18562, 0.18562, 0.15688, 0.15699, 0.15697, 0.15696, 0, 0, 0, 0, 0, 0, 0.12013, 0.15952, 0.15957, 0.15965, 0.31445, 0.3146, 0.31448, 0.40488, 0.40516, 0.53634, 0.57833, 0.70304, 0.70297, 0.1968, 0.19966, 0.21097, 0.20085, 0.18416, 0.18677, 0.20376, 0.21429, 0.19875, 0.19883, 0.14545, 0.20183, 0.20187, 0.20187, 0.37237, 0.40362, 0.40523, 0.43704, 0.51197, 0.49963, 0.47634, 0.50757, 0.5071, 0.6258, 0.82745, 0.76922, 0.76913, 0.76907], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"atteintes à l' environnement": {
men: [0, 0, 0, 0, 0, 0, 0, 0.80018, 0.80027, 0.80013, 0.79951, 0.7997, 0.8003, 0.94762, 0.94776, 0.40592, 0.40588, 0.40602, 0.406, 0.40595, 0.40608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10977, 0.10973, 0.086727, 0.13183, 0.10738, 0.10735, 0.11378, 0.15447, 0.2203, 0.22018, 0.22007, 0.18807, 0.18786, 0.18789, 0.076347, 0.076342, 0.1146, 0, 0, 0, 0, 0, 0.10125, 0.10127, 0.10126, 0.12473, 0.12482, 0.12479, 0.12479, 0.12474, 0.12478, 0.22944, 0.22954, 0.22956, 0.22961, 0.22967, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1487, 0.14868, 0.93226, 0.93253, 0.93222, 0.93254, 0.93217, 0.93233, 0.93236, 0.93274, 0.9329, 0.93269, 0.93289, 0.93289, 0, 0, 0, 0, 0, 0, 0.93971, 0.94066, 0.15312, 0.15301, 0.14654, 0.14663, 0.14662, 0.1466], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système capitaliste": {
men: [0.23935, 0.2394, 0.2444, 0.22044, 0.21074, 0.19188, 0.15696, 0.14312, 0.20133, 0.18739, 0.16408, 0.2007, 0.22618, 0.29588, 0.16882, 0.15789, 0.14382, 0.14387, 0.13389, 0.12993, 0.1446, 0.093714, 0.076083, 0.1187, 0.10979, 0.10733, 0.15141, 0.14352, 0.19674, 0.24058, 0.26321, 0.23599, 0.25313, 0.24282, 0.18152, 0.13457, 0.13245, 0.10544, 0.12576, 0.12459, 0.085201, 0.11058, 0.11163, 0.10562, 0.12302, 0.13144, 0.14926, 0.15888, 0.17789, 0.24953, 0.29862, 0.36999, 0.3794, 0.38463, 0.48438, 0.45482, 0.49523, 0.52901, 0.52059, 0.5285, 0.52124, 0.56534, 0.54507, 0.56321, 0.57925, 0.57538, 0.57253, 0.6042, 0.61789, 0.59194, 0.45727, 0.4036, 0.4008, 0.40045, 0.38908, 0.3554, 0.36128, 0.41471, 0.3477, 0.30188, 0.30182, 0.19264, 0.11714, 0.12228, 0.15898, 0.13569, 0.048179, 0.034061, 0.031266, 0.088856, 0.12159, 0.10839, 0.11418, 0.12782, 0.15283, 0.20408, 0.20945, 0.21005, 0.23385, 0.22737, 0.34184, 0.334, 0.31224, 0.16537, 0.13527, 0.24504, 0.26272, 0.2808, 0.25078, 0.18504], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"néolibérale": {
men: [0.15924, 0.14726, 0.16495, 0.15983, 0.14068, 0.14288, 0.15959, 0.15385, 0.17973, 0.21466, 0.18315, 0.15133, 0.15114, 0.15047, 0.18948, 0.21567, 0.16292, 0.16928, 0.15074, 0.2019, 0.18949, 0.21406, 0.21531, 0.17653, 0.21231, 0.26172, 0.29949, 0.34885, 0.38375, 0.37655, 0.40038, 0.37525, 0.35202, 0.25651, 0.20868, 0.16339, 0.16119, 0.13531, 0.10015, 0.081865, 0.090891, 0.090635, 0.14141, 0.1663, 0.1608, 0.15565, 0.17108, 0.22015, 0.23258, 0.2715, 0.26433, 0.31661, 0.40294, 0.37069, 0.29301, 0.34495, 0.28044, 0.26504, 0.29059, 0.28923, 0.28489, 0.23371, 0.23088, 0.24259, 0.26025, 0.20471, 0.20041, 0.21412, 0.24328, 0.18408, 0.21793, 0.20287, 0.19227, 0.20734, 0.21704, 0.23273, 0.21121, 0.2151, 0.22659, 0.28094, 0.29776, 0.27604, 0.26225, 0.30707, 0.26667, 0.27321, 0.26715, 0.25008, 0.17745, 0.28411, 0.33601, 0.3346, 0.23721, 0.24001, 0.21775, 0.22518, 0.22376, 0.21297, 0.22081, 0.2115, 0.20026, 0.20066, 0.22253, 0.11564, 0.11258, 0.084949, 0.12724, 0.12927, 0.15586, 0.14749], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pénibilité physique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16052, 0.27583, 0.27579, 0.27582, 0.27574, 0.22889, 0.14493, 0.10373, 0.10368, 0.10363, 0.10364, 0.10352, 0.091385, 0.091371, 0.063308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34692, 0.34717, 0.34741, 0.34725, 0.34728, 0.34721, 0.93942, 0.93923, 0.93909, 0.93875, 0.93901, 0.9387, 0.93903, 0.93865, 0.94384, 0.95043, 0.95083, 0.95099, 0.95077, 0.95098, 0.95098, 0.95165, 0.95183, 0.95284, 0.95323, 0.95345, 0.95366, 0.95414, 0.9485, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie agricole": {
men: [0.70688, 0.70704, 0.70696, 0.70679, 0, 0, 0, 0.94275, 0.94286, 0.94269, 0.94196, 0.94219, 0.94289, 0.94303, 0.94575, 0.94513, 0.94707, 0.94906, 0.94902, 0.9489, 0.94921, 0.94239, 0.94195, 0.94167, 0.94249, 0.94244, 0.94217, 0.94209, 0.9376, 0.93751, 0.93104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lagon": {
men: [0, 0, 0, 0, 0, 0.02824, 0.032434, 0.18469, 0.18471, 0.18467, 0.17815, 0.17223, 0.17236, 0.092915, 0.090245, 0.090186, 0.090178, 0.088392, 0.088388, 0.10953, 0.11635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10657, 0.10653, 0.25579, 0.31492, 0.31477, 0.3148, 0.94806, 0.94819, 0.51945, 0.33456, 0.33457, 0.33449, 0.33435, 0.33446, 0.26282, 0.2628, 0.17919, 0.17921, 0.17921, 0.17912, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94233, 0.94259, 0.94305, 0.94269, 0.94337, 0.25417, 0.25405, 0.11149, 0.11147, 0.11146, 0.11143, 0.11142, 0.11138, 0.11141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25115, 0.4527, 0.45318, 0.45337, 0.52905, 0.52916, 0.95298, 0.95394, 0.95306, 0.95238, 0.95289, 0.95352, 0.95341, 0.95333], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone montagneuse": {
men: [0.45576, 0.45586, 0.45581, 0.45569, 0.45571, 0.45554, 0.45549, 0.37263, 0.21554, 0.18515, 0.185, 0.18505, 0.18519, 0, 0, 0, 0, 0, 0.20743, 0.20741, 0.16057, 0.15836, 0.18973, 0.20556, 0.20574, 0.20573, 0.20567, 0.20565, 0.22687, 0.34969, 0.34969, 0.35622, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32784, 0.32789, 0.32787, 0.32771, 0.32795, 0.32789, 0.32789, 0.32775, 0.32785, 0.32796, 0.32811, 0.32813, 0.94359, 0.67158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94059, 0.94097, 0.9412, 0.9414, 0.94187, 0.94282, 0.94195, 0.94128, 0.94179, 0.9424, 0.9423, 0.94222], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Guyane française": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6081, 0.60785, 0.60804, 0.6079, 0.60785, 0.60779, 0.60787, 0.95518, 0.95472, 0.9554, 0.95523, 0.95522, 0.95483, 0.75404, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41586, 0.41594, 0.39673, 0.39689, 0.39696, 0.84982, 0.85001, 0.85001, 0.8506, 0.85077, 0.85167, 0.85202, 0.62662, 0.62675, 0.39009, 0.39049, 0.42361, 0.42331, 0.42354, 0.42382, 0.42377, 0.42373], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés rurales": {
men: [0.07655, 0.063719, 0.063712, 0.063696, 0.063698, 0.063674, 0.063667, 0.052286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65334, 0.65314, 0.65371, 0.65367, 0.65348, 0.65343, 0.65296, 0.6529, 0.6529, 0.65273, 0.65262, 0.65258, 0.65222, 0.51901, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33937, 0.42886, 0.42868, 0.42882, 0.42872, 0.42868, 0.42864, 0.4287, 0.42868, 0.42847, 0.37648, 0.37641, 0.45759, 0.18144, 0.099751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36284, 0.36267, 0.3627, 0.36263, 0.36259, 0.36252, 0.36247, 0.36233, 0.36244, 0.93324, 0.93356, 0.93318, 0.93335, 0.93337, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mobilisation sociale": {
men: [0, 0, 0, 0, 0, 0, 0.10434, 0.11488, 0.1149, 0.21337, 0.21321, 0.31819, 0.41729, 0.57918, 0.57927, 0.57889, 0.57884, 0.57903, 0.57901, 0.57893, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.099418, 0.099402, 0.099411, 0.099383, 0.067863, 0.071154, 0.093001, 0.11574, 0.13447, 0.13632, 0.072717, 0.06197, 0.08147, 0.086499, 0.056109, 0.071698, 0.076311, 0.068821, 0.078021, 0.070181, 0.1181, 0.10124, 0.092947, 0.10253, 0.17535, 0.25462, 0.23195, 0.23185, 0.23558, 0.39405, 0.41685, 0.49991, 0.55456, 0.65112, 0.60205, 0.694, 0.69435, 0.61405, 0.60928, 0.61045, 0.51047, 0.51084, 0.53552, 0.36501, 0.31391, 0.28791, 0.086816, 0.086804, 0.093909, 0.093935, 0.081883, 0.057022, 0.37829, 0.36227, 0.42303, 0.25697, 0.25689, 0.25683, 0.24881, 0.24881, 0.26226, 0.24961, 0.25639, 0.23247, 0.22798, 0.24124, 0.067653, 0.049555, 0.021085, 0.056199, 0.064635, 0.096877, 0.11571, 0.1157], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie chinoise": {
men: [0.12535, 0.68897, 0.68889, 0.68872, 0.68875, 0.44952, 0.48562, 0.58414, 0.37431, 0.37424, 0.37395, 0.37404, 0.37432, 0.37437, 0.28637, 0.28805, 0.28803, 0.28812, 0.28811, 0.50144, 0.048983, 0.048985, 0.048962, 0.0416, 0.037539, 0.037537, 0.037526, 0.037523, 0.037496, 0, 0, 0, 0, 0, 0, 0.024857, 0.024856, 0.020711, 0.022767, 0.020522, 0.02052, 0.020512, 0.020519, 0.018667, 0.016881, 0.016882, 0.016863, 0.019975, 0.022692, 0, 0.10869, 0.16862, 0.16855, 0.20774, 0.20769, 0.20768, 0.31889, 0.55979, 0.94498, 0.94452, 0.94521, 0.94503, 0.94502, 0.94464, 0.93725, 0.36712, 0.36729, 0.36731, 0.36739, 0.36749, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23726, 0.23721, 0.23719, 0.23715, 0.23711, 0.15796, 0.059597, 0.054967, 0.056872, 0.056849, 0.053364, 0.056861, 0.056884, 0.063996, 0.012933, 0.012936, 0.025696, 0.025714, 0.025719, 0.029435, 0.072255, 0.094393, 0.094413, 0.09446, 0.12615, 0.12603, 0.12594, 0.045263, 0.045292, 0.045287, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"révolution industrielle": {
men: [0, 0.096211, 0.15516, 0.15512, 0.15513, 0.13565, 0.13564, 0.12846, 0.21502, 0.25162, 0.39585, 0.39595, 0.39624, 0.3963, 0.43373, 0.22059, 0.20699, 0.25396, 0.25395, 0.22665, 0.32487, 0.35606, 0.27571, 0.27563, 0.27587, 0.26556, 0.11829, 0.11828, 0.10476, 0.11203, 0.087636, 0.064418, 0.064407, 0.055054, 0.016355, 0.029691, 0.030139, 0.025462, 0.024469, 0.023653, 0.056594, 0.051072, 0.068754, 0.068719, 0.059338, 0.063447, 0.063376, 0.083357, 0.083344, 0.063085, 0.064496, 0.07348, 0.078008, 0.13016, 0.12519, 0.1468, 0.11393, 0.11395, 0.24491, 0.24479, 0.24497, 0.24493, 0.24492, 0.4088, 0.40892, 0.48551, 0.63869, 0.37192, 0.47193, 0.47206, 0.38939, 0.27164, 0.23142, 0.23148, 0.24756, 0.20678, 0.18716, 0.16305, 0.16297, 0.15828, 0.097522, 0.10251, 0.03506, 0.032256, 0.19563, 0.23026, 0.25628, 0.25637, 0.24398, 0.27909, 0.29976, 0.3711, 0.34793, 0.32998, 0.36656, 0.38617, 0.36921, 0.41642, 0.21623, 0.21632, 0.20645, 0.2065, 0.16543, 0.17262, 0.14742, 0.12706, 0.12334, 0.12826, 0.0821, 0.082093], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40203, 0.40188, 0.40186, 0.40179, 0.40183, 0.40172, 0.93019, 0.92983, 0.93016, 0.23932, 0.2392, 0.23922, 0.23895, 0.23899, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92815, 0.92777, 0.93915, 0.93918, 0.93957, 0.93973, 0.93951, 0.93972, 0.93972, 0.94038, 0.94056, 0.94156, 0.94194, 0.94216, 0.939, 0.93947, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeux écologiques": {
men: [0.17804, 0.26455, 0.26452, 0.26445, 0.26446, 0.9528, 0.9527, 0.95308, 0.94806, 0.95301, 0.95227, 0.9525, 0.95148, 0.95162, 0.95176, 0.95114, 0.95106, 0.95138, 0.95134, 0.95122, 0.95153, 0.95156, 0.95112, 0.18851, 0.18868, 0.18867, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042296, 0.042279, 0.042294, 0.061989, 0.061958, 0.061963, 0.061894, 0.04347, 0.043463, 0.043461, 0.053965, 0.066909, 0.066882, 0.05226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074394, 0.063966, 0.12116, 0.12122, 0.089573, 0.089638, 0.089702, 0.079318, 0.079324, 0.079308, 0.069825, 0.069812, 0.069801, 0.069776, 0.019461, 0.023013, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03243, 0.086809, 0.086856, 0.086913, 0.086903, 0.086896], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champs pétroliers": {
men: [0.19398, 0.4586, 0.2714, 0.095654, 0.095658, 0.14174, 0.14173, 0.14178, 0.13804, 0.13801, 0.13791, 0.13794, 0.13804, 0.1056, 0.056677, 0.025387, 0.027259, 0.040833, 0.037137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053671, 0.053678, 0.05367, 0.053667, 0.053669, 0.053655, 0.053633, 0.05365, 0.93329, 0.93322, 0.082944, 0.053153, 0.053151, 0.053125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93812, 0.93839, 0.93808, 0.94478, 0.9444, 0.94457, 0.94459, 0.94498, 0.94515, 0.94493, 0.94514, 0.94514, 0.9458, 0.94598, 0.94029, 0.94068, 0.9409, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût social": {
men: [0.082486, 0.082505, 0.082495, 0.082474, 0.082478, 0.07599, 0.079671, 0.28603, 0.28607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.082571, 0.095855, 0.13951, 0.13946, 0.13945, 0.13935, 0.13934, 0.13934, 0.1393, 0.13928, 0.10257, 0.12436, 0.45309, 0.45306, 0.401, 0.49104, 0.4909, 0.49085, 0.40302, 0.47565, 0.4754, 0.44518, 0.44521, 0.44471, 0.54772, 0.59215, 0.48626, 0.4254, 0.42529, 0.42511, 0.42525, 0.38353, 0.42363, 0.34216, 0.24731, 0.13828, 0.13822, 0.13832, 0.15705, 0.052711, 0.13315, 0.14207, 0.14212, 0.14219, 0.1422, 0.16082, 0.16086, 0.16085, 0.23899, 0.36371, 0.36381, 0.36399, 0.5535, 0.47334, 0.19066, 0.1847, 0.18471, 0.26868, 0.26866, 0.28647, 0.28642, 0.2336, 0.23366, 0.23359, 0.23367, 0.23357, 0.23362, 0.19279, 0.20423, 0.19766, 0.19762, 0.090896, 0.077852, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"impérialisme": {
men: [0.056844, 0.097801, 0.10071, 0.12315, 0.14781, 0.17736, 0.21751, 0.23852, 0.24789, 0.28322, 0.26897, 0.229, 0.21831, 0.16222, 0.10196, 0.080306, 0.080645, 0.077503, 0.074817, 0.052261, 0.014349, 0.041122, 0.042099, 0.042086, 0.06517, 0.075944, 0.078651, 0.084517, 0.19907, 0.28066, 0.2962, 0.28794, 0.29123, 0.37916, 0.46798, 0.39787, 0.40704, 0.37942, 0.33927, 0.32991, 0.32208, 0.33514, 0.2906, 0.24826, 0.23563, 0.23852, 0.24191, 0.21702, 0.15955, 0.16792, 0.088727, 0.088085, 0.098931, 0.1004, 0.095695, 0.080719, 0.087441, 0.11505, 0.12197, 0.11001, 0.068386, 0.16349, 0.2283, 0.22459, 0.23333, 0.23662, 0.22914, 0.20848, 0.20261, 0.30075, 0.24284, 0.19011, 0.19619, 0.17688, 0.22531, 0.1353, 0.089068, 0.092791, 0.07396, 0.11743, 0.1203, 0.12683, 0.13018, 0.11019, 0.1263, 0.11854, 0.1185, 0.11971, 0.066427, 0.17351, 0.17556, 0.1701, 0.22047, 0.19704, 0.23568, 0.25503, 0.20529, 0.23996, 0.30264, 0.2864, 0.30633, 0.32255, 0.34067, 0.28861, 0.28776, 0.25249, 0.24694, 0.25816, 0.23945, 0.23943], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise profonde": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13674, 0.13678, 0.13688, 0.062345, 0.08804, 0.087983, 0.087975, 0.088005, 0.088001, 0.08799, 0.088019, 0.088022, 0.087981, 0.087954, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.089744, 0.16381, 0.16378, 0.067016, 0.08586, 0.085838, 0.069595, 0.13226, 0.13223, 0.13222, 0.10288, 0.10289, 0.10289, 0.10284, 0.05087, 0.050861, 0.05086, 0.089966, 0.10636, 0.1064, 0.14782, 0, 0, 0, 0, 0, 0.21862, 0.21868, 0.92983, 0.92947, 0.9413, 0.94197, 0.60208, 0.60213, 0.60201, 0.60196, 0.45279, 0.15618, 0.15613, 0.15617, 0.10466, 0.1047, 0.10466, 0.10468, 0.15929, 0.12046, 0.21693, 0.21688, 0.21693, 0.21693, 0.22988, 0.4197, 0.42014, 0.42031, 0.53363, 0.53375, 0.53402, 0.53456, 0.40603, 0.94832, 0.93987, 0.94049, 0.94606, 0.39593], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
