var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"industrie touristique": {
men: [0.9555, 0.95578, 0.95243, 0.95229, 0.9525, 0.95528, 0.95461, 0.95469, 0.9547, 0.94153, 0.94733, 0.9506, 0.95105, 0.95351, 0.95325, 0.9528, 0.95308, 0.95489, 0.95482, 0.95271, 0.9535, 0.9536, 0.95337, 0.95363, 0.95051, 0.94734, 0.94727, 0.94105, 0.94083, 0.94709, 0.94691, 0.94065, 0.94104, 0.94156, 0.94592, 0.94576, 0.94589, 0.94589, 0.94612, 0.94841, 0.94847, 0.94862, 0.94896, 0.94255, 0.9437, 0.94363, 0.9431, 0.94356, 0.94701, 0.94729, 0.94694, 0.94685, 0.94719, 0.944, 0.94434, 0.35199, 0.35189, 0.35219, 0.35216, 0.35217, 0.35233, 0.35228, 0.080126, 0.080124, 0.080176, 0.080193, 0.080185, 0.08022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96179, 0.96285, 0.96207, 0.96156, 0.67223, 0.67214, 0.67206, 0.67211, 0.67163, 0.67175, 0.67179, 0.67189, 0.67202, 0.67206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie aéronautique": {
men: [0.57496, 0.64799, 0.71699, 0.71688, 0.71704, 0.62084, 0.5716, 0.4429, 0.28644, 0.39639, 0.39643, 0.39631, 0.3965, 0.57433, 0.87863, 0.87821, 0.84338, 0.84318, 0.84312, 0.95445, 0.95524, 0.95534, 0.96227, 0.96254, 0.96215, 0.96284, 0.96277, 0.9605, 0.95671, 0.95661, 0.96033, 0.9608, 0.96121, 0.83629, 0.83609, 0.83596, 0.65585, 0.65584, 0.54657, 0.54668, 0.54671, 0.5468, 0.40676, 0.40677, 0, 0, 0, 0.66402, 0.66418, 0.74341, 0.78359, 0.78351, 0.82242, 0.82235, 0.82122, 0.7653, 0.84535, 0.84607, 0.846, 0.84603, 0.84641, 0.77688, 0.77729, 0.70589, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62874, 0.44397, 0.44401, 0.44421, 0.44405, 0.44379, 0.45091, 0.45055, 0.45031, 0.44973, 0.44967, 0.54354, 0.54358, 0.47358, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sig": {
men: [0.23348, 0.13968, 0.12715, 0.13078, 0.13367, 0.20748, 0.22591, 0.22441, 0.21897, 0.30331, 0.29941, 0.29932, 0.31709, 0.27132, 0.28792, 0.35719, 0.51159, 0.52381, 0.52377, 0.57546, 0.52179, 0.36039, 0.37189, 0.32114, 0.31443, 0.31466, 0.3217, 0.32181, 0.39748, 0.39744, 0.39737, 0.39757, 0.39773, 0.20001, 0.20336, 0.4777, 0.62079, 0.62079, 0.75689, 0.7158, 0.71585, 0.73198, 0.18772, 0.18772, 0.14864, 0.14863, 0.14855, 0.29839, 0.29846, 0.29855, 0.29844, 0.29841, 0.29852, 0.40622, 0.24989, 0.092558, 0.092532, 0.065691, 0.05477, 0.054771, 0.054796, 0.18866, 0.15735, 0.13648, 0.1191, 0.11293, 0.11291, 0.10432, 0.096771, 0.087835, 0.082308, 0.084505, 0.091647, 0.091674, 0.091654, 0.080117, 0.073184, 0.071187, 0.068404, 0.07318, 0.073212, 0.077488, 0.077376, 0.086974, 0.15986, 0.16076, 0.16544, 0.16542, 0.1654, 0.11889, 0.23366, 0.26486, 0.27461, 0.278, 0.27806, 0.27807, 0.27547, 0.26475, 0.14383, 0.1405, 0.12442, 0.12447, 0.1227, 0.12534, 0.016865, 0.024191, 0.026587, 0.027788, 0.027779, 0.027732], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tourisme vert": {
men: [0.50564, 0.50579, 0.44364, 0.38872, 0.16596, 0.16597, 0.1494, 0.14942, 0.14942, 0.14944, 0.14945, 0.14941, 0.14948, 0.14946, 0, 0, 0, 0.50017, 0.50014, 0.50035, 0.93892, 0.93902, 0.93879, 0.93905, 0.93867, 0.93935, 0.93928, 0.9396, 0.93938, 0.94883, 0.94866, 0.94485, 0.94525, 0.94577, 0.94554, 0.94539, 0.94552, 0.94552, 0.95029, 0.95048, 0.95055, 0.9507, 0.95104, 0.94192, 0.94307, 0.943, 0.94247, 0.94293, 0.94316, 0.94344, 0.9431, 0.943, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96462, 0.9649, 0.96469, 0.96465, 0.96542, 0.9658, 0.83283, 0.83292, 0.83328, 0.83298, 0.8325, 0.83342, 0.83274, 0.8323, 0.64439, 0.6443, 0.64422, 0.64427, 0.64382, 0.64393, 0.95308, 0.95322, 0.9534, 0.95345, 0.95423, 0.95407, 0.95531, 0.95456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"submersions marines": {
men: [0.32444, 0.34536, 0.30047, 0.30042, 0.30049, 0.31259, 0.36626, 0.2894, 0.3577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23454, 0.23447, 0.93761, 0.9384, 0.93833, 0.93836, 0.93878, 0.93865, 0.93915, 0.93913, 0.93973, 0.93993, 0.93984, 0.94025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94504, 0.94518, 0.94535, 0.9454, 0.94618, 0.94602, 0.94725, 0.94651, 0.94809, 0.94854, 0.94888, 0.94896, 0.94758, 0.55147, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"jean-noël escudié": {
men: [0.31303, 0.22219, 0.20431, 0.20428, 0.20433, 0.30263, 0.33757, 0.32952, 0.30767, 0.39523, 0.39526, 0.39515, 0.43655, 0.37463, 0.38458, 0.3844, 0.52932, 0.52919, 0.52916, 0.40593, 0.22994, 0.38145, 0.94924, 0, 0, 0, 0, 0, 0.6937, 0.47482, 0.47474, 0.47497, 0.47517, 0.5694, 0.466, 0.38411, 0.31698, 0.27149, 0.27155, 0.27161, 0.2505, 0.25054, 0.16066, 0.17387, 0.17736, 0.17735, 0.17725, 0.042102, 0.047319, 0.044711, 0.051318, 0.096347, 0.096381, 0.096372, 0.10758, 0.090342, 0.096915, 0.083005, 0.048412, 0.048414, 0.048435, 0.23116, 0.23128, 0.25257, 0.24328, 0.24461, 0.24458, 0.24469, 0.20669, 0.24353, 0.21297, 0.24834, 0.24413, 0.2442, 0.24415, 0.14223, 0.1134, 0.11512, 0.12029, 0.14947, 0.14954, 0.14949, 0.15593, 0.1921, 0.34852, 0.32578, 0.34232, 0.34227, 0.34223, 0.25466, 0.40137, 0.43502, 0.4122, 0.42929, 0.42937, 0.42939, 0.42485, 0.38587, 0.21839, 0.20704, 0.17571, 0.17579, 0.17585, 0.15641, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonds structurels européens": {
men: [0.30152, 0.20811, 0.18006, 0.18003, 0.18007, 0.26358, 0.29288, 0.29035, 0.28131, 0.38239, 0.38242, 0.38231, 0.42299, 0.36229, 0.39701, 0.39683, 0.5786, 0.57846, 0.57842, 0.46165, 0.31481, 0.46411, 0.96375, 0, 0, 0, 0, 0, 0.54493, 0.33905, 0.33899, 0.33916, 0.3393, 0.39291, 0.34074, 0.2825, 0.25015, 0.22085, 0.22091, 0.22095, 0.20576, 0.27048, 0.18505, 0.21175, 0.18038, 0.18037, 0.18027, 0.10296, 0.112, 0.12396, 0.14081, 0.15539, 0.15545, 0.15543, 0.16851, 0.07459, 0.081775, 0.073619, 0.072697, 0.072699, 0.072732, 0.15857, 0.14475, 0.13611, 0.13165, 0.137, 0.13699, 0.13705, 0.1217, 0.11269, 0.10372, 0.10918, 0.11845, 0.11848, 0.11846, 0.12397, 0.12674, 0.12854, 0.11457, 0.11475, 0.1148, 0.11475, 0.11812, 0.13179, 0.24063, 0.2402, 0.25627, 0.25623, 0.2562, 0.1491, 0.24962, 0.26486, 0.26995, 0.2866, 0.28666, 0.28667, 0.2839, 0.27314, 0.14918, 0.14511, 0.12801, 0.12807, 0.12812, 0.131, 0.01761, 0.025622, 0.028836, 0.028814, 0.028805, 0.028757], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de loi de réforme": {
men: [0.27898, 0.19059, 0.17005, 0.17405, 0.17622, 0.26227, 0.29288, 0.29035, 0.28131, 0.38239, 0.38242, 0.38231, 0.42299, 0.36229, 0.39701, 0.39683, 0.5786, 0.57846, 0.57842, 0.46165, 0.31481, 0.46411, 0.96375, 0, 0, 0, 0, 0, 0.5973, 0.35862, 0.35855, 0.35873, 0.35888, 0.38631, 0.33576, 0.27364, 0.24318, 0.21144, 0.21053, 0.20828, 0.19474, 0.25713, 0.17496, 0.17325, 0.15227, 0.15226, 0.15069, 0.086301, 0.093851, 0.10039, 0.11399, 0.12495, 0.12551, 0.12676, 0.13047, 0.058941, 0.063334, 0.066208, 0.064854, 0.064856, 0.065724, 0.14331, 0.13119, 0.12942, 0.12341, 0.12749, 0.12566, 0.11373, 0.10458, 0.093274, 0.08706, 0.089996, 0.095192, 0.094516, 0.093804, 0.097588, 0.098592, 0.098156, 0.08782, 0.088626, 0.086754, 0.092575, 0.093073, 0.12207, 0.19656, 0.18376, 0.18515, 0.18113, 0.18127, 0.11224, 0.16909, 0.17681, 0.18037, 0.18655, 0.19336, 0.19606, 0.20083, 0.17761, 0.099111, 0.11162, 0.10509, 0.10946, 0.11044, 0.11357, 0.016369, 0.023451, 0.026171, 0.026151, 0.026143, 0.026099], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"régions côtières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95684, 0.9605, 0.96118, 0.96164, 0.90791, 0.90766, 0.90723, 0.90749, 0.67987, 0.54358, 0.54381, 0.54425, 0.54431, 0.54418, 0.31437, 0.10382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30418, 0.078798, 0.054783, 0.054794, 0.050406, 0.050414, 0.050432, 0.050433, 0.048239, 0.048235, 0.048209, 0.054022, 0.054036, 0.054052, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93627, 0.20379, 0.20392, 0.20396, 0.20394, 0.20403, 0.20437, 0.20433, 0.20454, 0.2046, 0.20461, 0.20467, 0.20462, 0.20461, 0, 0, 0, 0, 0, 0, 0, 0.9595, 0.95873, 0.95822, 0.95699, 0.95686, 0.95674, 0.95682, 0.59493, 0.59503, 0.59507, 0.59516, 0.59527, 0.59531, 0.59579, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lagon": {
men: [0.25847, 0.25854, 0.25847, 0.25843, 0.25849, 0.13848, 0.15896, 0.09015, 0.090151, 0.090166, 0.12028, 0.14842, 0.14849, 0.097421, 0.12251, 0.12245, 0.12249, 0.13661, 0.1366, 0.15525, 0.165, 0.18783, 0.18778, 0.18784, 0.15869, 0.13323, 0.13322, 0.5432, 0.16913, 0.1424, 0.14237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10672, 0.10673, 0.13128, 0.16171, 0.16191, 0.1619, 0.27545, 0.27558, 0.58445, 0.72087, 0.72061, 0.72054, 0.7208, 0.72073, 0.69113, 0.69093, 0.77459, 0.77524, 0.77518, 0.7752, 0.95836, 0.95823, 0.95302, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27181, 0.27216, 0.27195, 0.3178, 0.31795, 0.57253, 0.57257, 0.57174, 0.57163, 0.57186, 0.57142, 0.57124, 0.57028], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques naturels": {
men: [0.080015, 0.09812, 0.098093, 0.098079, 0.0981, 0.19953, 0.19939, 0.069079, 0.92764, 0.92779, 0.24376, 0.1273, 0.047072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26851, 0.26852, 0.26857, 0.38081, 0.06645, 0.064823, 0.064818, 0.064782, 0.17011, 0.25865, 0.24321, 0.32107, 0.32104, 0.37035, 0.34172, 0.33847, 0.35083, 0.35073, 0.67352, 0.68744, 0.68746, 0.68777, 0.65303, 0.61635, 0.68615, 0.62854, 0.70721, 0.671, 0.67129, 0.77486, 0.95984, 0.82549, 0.72654, 0.72656, 0.72677, 0.72662, 0.72658, 0.42838, 0.42855, 0.25151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"foyers épidémiques": {
men: [0.11399, 0.11402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94037, 0.94047, 0.94024, 0.9405, 0.94012, 0.9408, 0.94073, 0.94105, 0.94587, 0.94577, 0.9456, 0.94607, 0.94647, 0.94698, 0.93844, 0.93829, 0.93842, 0.93842, 0.93864, 0.93883, 0.93889, 0.93905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise du lait": {
men: [0, 0, 0, 0, 0, 0.96408, 0.9643, 0.53791, 0.48091, 0.40863, 0.39501, 0.3949, 0.39508, 0.39503, 0.39492, 0.29564, 0.30683, 0.30676, 0.30673, 0.096766, 0.06956, 0.052699, 0.055608, 0.058707, 0.06119, 0.061234, 0.057453, 0.057473, 0.057459, 0.076124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95131, 0.95232, 0.95258, 0.95261, 0.95289, 0.95268, 0.95264, 0.9534, 0.95378, 0.95405, 0.95416, 0.95458, 0.95423, 0.95367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt domaniale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95896, 0.95924, 0.95901, 0.75346, 0.75377, 0.75439, 0.75447, 0.75428, 0.75449, 0.75419, 0.75473, 0.75468, 0.75493, 0.75475, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091459, 0.091484, 0.091487, 0.091513, 0.091494, 0.23853, 0.23872, 0.23881, 0.23888, 0.95563, 0.95605, 0.31857, 0.31838, 0.31873, 0, 0, 0, 0, 0, 0, 0.14898, 0.14901, 0.14902, 0.14904, 0.14907, 0.94414, 0.94492, 0.94476, 0.94599, 0.14925, 0.1495, 0.10249, 0.10253, 0.10254, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bactéries résistantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94237, 0.95386, 0.34338, 0.24839, 0.24837, 0.2222, 0.28723, 0.2543, 0.25424, 0.23567, 0.23558, 0.23575, 0.22955, 0.22963, 0.21872, 0.15496, 0.18484, 0.22778, 0.22788, 0.27097, 0.069944, 0.1308, 0.13081, 0.16015, 0.046115, 0.046124, 0.042416, 0.042423, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35027, 0.94703, 0.94653, 0.94532, 0.94519, 0.94507, 0.94515, 0.94448, 0.94464, 0.94471, 0.94484, 0.94502, 0.94507, 0.94585, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouveaux antibiotiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9528, 0.95707, 0.7867, 0.7271, 0.74442, 0.74473, 0.68967, 0.72068, 0.7205, 0.66699, 0.61545, 0.56937, 0.56933, 0.56953, 0.46757, 0.37138, 0.3604, 0.319, 0.23405, 0.23418, 0.27561, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14421, 0.1946, 0.19449, 0.19424, 0.19422, 0.19419, 0.19421, 0.19407, 0.1941, 0.94471, 0.94484, 0.94502, 0.94507, 0.94585, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections pulmonaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31033, 0.6438, 0.70872, 0.76107, 0.76138, 0.76201, 0.76209, 0.7619, 0.63167, 0.63141, 0.63186, 0.69457, 0.75945, 0.66911, 0.6404, 0.49291, 0.35524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95004, 0.94866, 0.94848, 0.94885, 0.94813, 0.94783, 0.94623], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"niveau de pollution": {
men: [0.49745, 0.49759, 0.49746, 0.49738, 0.49749, 0.27123, 0.34033, 0.1753, 0.17531, 0.14328, 0.14329, 0.14324, 0.13882, 0.1388, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41953, 0.4196, 0.53782, 0.46629, 0.46686, 0.46682, 0.46656, 0.46679, 0.4669, 0.46704, 0.45282, 0.53664, 0.60516, 0.60511, 0.4237, 0.42359, 0.5479, 0.66574, 0.66569, 0.5707, 0.57095, 0.57088, 0.42688, 0.42687, 0.52865, 0.37893, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitation forestière": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.238, 0.23806, 0.23811, 0.18001, 0.18004, 0.18011, 0.22263, 0.18864, 0.18863, 0.18852, 0.13936, 0.13939, 0.16241, 0.16235, 0, 0, 0, 0.63557, 0.67611, 0.67592, 0.67649, 0.79485, 0.79487, 0.79523, 0.96385, 0.84209, 0.84207, 0.73235, 0.59427, 0.59421, 0.59447, 0.20568, 0, 0, 0, 0, 0, 0, 0, 0, 0.099088, 0.11397, 0.12597, 0.12602, 0.12598, 0.11932, 0.11945, 0.12314, 0.14222, 0.14204, 0.14202, 0.142, 0.18064, 0.18051, 0.13184, 0.10383, 0.11473, 0.11475, 0.11476, 0.11079, 0.099157, 0.10904, 0.15645, 0.13873, 0.1388, 0.13885, 0.13886, 0.10242, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre la marée noire": {
men: [0.057787, 0.06101, 0.060246, 0.063278, 0.045845, 0.0081786, 0.0049117, 0.0051001, 0.0050937, 0.0055477, 0.0064224, 0.006929, 0.0077302, 0.0028707, 0.0030298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19655, 0.25077, 0.2507, 0.25063, 0.25085, 0.25083, 0.25434, 0.25446, 0.25442, 0.25456, 0.25455, 0.25471, 0.25477, 0.25474, 0.29867, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17539, 0.27946, 0.95822, 0.95699, 0.95686, 0.95674, 0.95682, 0.95614, 0.9563, 0.95637, 0.95651, 0.95669, 0.95674, 0.95753, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nucléaire iranien": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9516, 0.95699, 0.95686, 0.95674, 0.95682, 0.95614, 0.9563, 0.95637, 0.95651, 0.95669, 0.95674, 0.95753, 0.95736, 0.95861, 0.75641, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"touristes": {
men: [0.17807, 0.17612, 0.1852, 0.16168, 0.16783, 0.18734, 0.22395, 0.19512, 0.19171, 0.1613, 0.15163, 0.14412, 0.14387, 0.13319, 0.13215, 0.13035, 0.14177, 0.14778, 0.14445, 0.11114, 0.099278, 0.10233, 0.12206, 0.12726, 0.12425, 0.11806, 0.12582, 0.11169, 0.096746, 0.11047, 0.10358, 0.10569, 0.10889, 0.13753, 0.13652, 0.13309, 0.11491, 0.11666, 0.15141, 0.15471, 0.14421, 0.17808, 0.19196, 0.16993, 0.16599, 0.15858, 0.13731, 0.13374, 0.16685, 0.19588, 0.18416, 0.18294, 0.15183, 0.16104, 0.17305, 0.17796, 0.18442, 0.17934, 0.17152, 0.16887, 0.17782, 0.18187, 0.12197, 0.12193, 0.12849, 0.14577, 0.1947, 0.16533, 0.12829, 0.10915, 0.11662, 0.10889, 0.088347, 0.10747, 0.15749, 0.15135, 0.15359, 0.1378, 0.12204, 0.11007, 0.098236, 0.10684, 0.14013, 0.15912, 0.14968, 0.17714, 0.26873, 0.26284, 0.14268, 0.13689, 0.15929, 0.16763, 0.17551, 0.1617, 0.16173, 0.13654, 0.11717, 0.10536, 0.10947, 0.10974, 0.10176, 0.097126, 0.11753, 0.12661, 0.093207, 0.083846, 0.062666, 0.075707, 0.061344, 0.084601], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"consommation responsable": {
men: [0.94989, 0.95017, 0.94991, 0.94977, 0.94998, 0.95008, 0.74037, 0.52407, 0.52407, 0.52416, 0.5242, 0.52405, 0.37258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092516, 0.092507, 0.09238, 0.12571, 0.12568, 0.12578, 0.19281, 0.19281, 0.1929, 0.17874, 0.14908, 0.26052, 0.26069, 0.17117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18979, 0.15833, 0.15851, 0.15838, 0.15829, 0.15809, 0.15807, 0.15805, 0.15806, 0.22485, 0.22488, 0.47791, 0.33921, 0.33928, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15023, 0.15021, 0.10999, 0.16086, 0.16081, 0.16054], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces protégées": {
men: [0.14095, 0.14099, 0.17964, 0.17962, 0.17966, 0.14385, 0.14375, 0.10858, 0.10858, 0.13879, 0.1388, 0.13876, 0.17191, 0.086049, 0, 0, 0, 0, 0, 0, 0, 0.72788, 0.7277, 0.7279, 0.72761, 0.72813, 0.72808, 0.95593, 0.87793, 0.87784, 0.41007, 0.41027, 0.41044, 0.41067, 0.41057, 0.25904, 0.25907, 0.25907, 0.25914, 0.27432, 0.27433, 0.27438, 0.02918, 0.027082, 0.26865, 0.26863, 0.26848, 0.26861, 0.26868, 0.26876, 0.26866, 0.26863, 0.26873, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones touristiques": {
men: [0, 0, 0.94332, 0.086398, 0.042946, 0.041491, 0.037486, 0.037489, 0.033006, 0.030051, 0.028519, 0.025725, 0.022848, 0.018686, 0.052115, 0.051506, 0.043576, 0.047658, 0.079911, 0.090543, 0.09219, 0.0922, 0.10014, 0.10927, 0.11552, 0.13171, 0.16067, 0.28494, 0.11157, 0.10495, 0.096935, 0.096983, 0, 0, 0, 0, 0, 0, 0, 0.14571, 0.14572, 0.14574, 0.28791, 0.35989, 0.44349, 0.44345, 0.44321, 0.44342, 0.64065, 0.64084, 0.64061, 0.96082, 0.96116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34899, 0.34957, 0.34974, 0.34987, 0.34989, 0.60683, 0.60671, 0.60695, 0.60649, 0.6063, 0.60528], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gazole": {
men: [0, 0, 0, 0, 0, 0.29387, 0.29366, 0.67662, 0.54948, 0.54956, 0.54961, 0.89819, 0.64273, 0.63299, 0.63281, 0.63252, 0.6327, 0.64276, 0.59437, 0.60633, 0.54025, 0.48045, 0.48931, 0.48944, 0.48924, 0.086737, 0.11722, 0.15106, 0.15103, 0.15101, 0.15099, 0.10634, 0.12568, 0.12575, 0.17595, 0.1222, 0.12222, 0.12222, 0.12225, 0.195, 0.94257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011998, 0.022272, 0.022162, 0.023612, 0.02103, 0.018974, 0.018135, 0.018336, 0.017761, 0.012617, 0.01298, 0.013408, 0.014129, 0.015551, 0.0080803, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27253, 0.27207], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Développement des territoires": {
men: [0.094559, 0.0964, 0.10703, 0.10701, 0.10703, 0.11398, 0.42917, 0.46946, 0.68298, 0.70358, 0.70363, 0.74268, 0.79635, 0.78584, 0.68927, 0.75027, 0.79977, 0.79958, 0.79952, 0.79986, 0.33838, 0.33841, 0.33833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03486, 0.036983, 0.060388, 0.060405, 0.060407, 0.060424, 0.060411, 0.060409, 0.060457, 0.046636, 0.046649, 0.047018, 0.041852, 0.041837, 0, 0, 0.094371, 0.094321, 0.094201, 0.094187, 0.094176, 0.077934, 0.15606, 0.19449, 0.19451, 0.16175, 0.20279, 0.2028, 0.18111, 0.16182, 0.099311, 0.099233, 0.092531, 0.092575, 0.092609, 0.1018, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés indigènes": {
men: [0.087596, 0.1285, 0.12846, 0.12845, 0.12913, 0.11726, 0.11092, 0.11953, 0.13192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7011, 0.79258, 0.6758, 0.72391, 0.72384, 0.72284, 0.72264, 0.72243, 0.72304, 0.59543, 0.59544, 0.59571, 0.62803, 0.62836, 0.6035, 0.4282, 0.53669, 0.2727, 0.21647, 0.21682, 0.21678, 0.21701, 0.21707, 0.38168, 0.38179, 0.38171, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets industriels": {
men: [0, 0, 0.93932, 0.93918, 0.93939, 0.93948, 0.93882, 0.9389, 0.93891, 0.93906, 0.93914, 0.93886, 0.9393, 0.58008, 0.57992, 0.57965, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10066, 0.1006, 0.18096, 0.18093, 0.18091, 0.15897, 0.15886, 0.17952, 0.17954, 0.17956, 0.1796, 0.17961, 0.17975, 0.27812, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
