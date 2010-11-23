var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"installations sanitaires": {
men: [0.64702, 0.89393, 0.91493, 0.91469, 0.91168, 0.91032, 0.91014, 0.91021, 0.91023, 0.91028, 0.91016, 0.90995, 0.91051, 0.90974, 0.90932, 0.79372, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40506, 0.45763, 0.45782, 0.45817, 0.4584, 0.45882, 0.82386, 0.82444, 0.82395, 0.82407, 0.8241, 0.82406, 0.86425, 0.86453, 0.94919, 0.9507, 0.95077, 0.94931, 0.94945, 0.95037, 0.94963, 0.94974, 0.94919, 0.94932, 0.94952, 0.94848, 0.96064, 0.96012, 0.95942, 0.78291, 0.75487, 0.75505, 0.75507, 0.75472, 0.68625, 0.68615, 0.68646, 0.68626, 0.68616, 0.68697, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96142, 0.96191, 0.96244, 0.96266, 0.96352, 0.96428, 0.9636, 0.96401, 0.96326, 0.96463, 0.96788, 0.96937, 0.95486, 0.95623, 0.70445, 0.70433, 0.70335, 0.7031, 0.70326, 0.70339, 0.70382, 0.70429, 0.70471, 0.70474, 0.57189, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"captage": {
men: [0.20534, 0.20833, 0.20827, 0.21116, 0.2131, 0.21519, 0.23648, 0.25306, 0.26256, 0.31831, 0.31827, 0.28467, 0.16979, 0.1708, 0.20104, 0.18219, 0.13882, 0.11703, 0.11211, 0.11594, 0.12517, 0.1252, 0.12091, 0.055192, 0.055214, 0.065976, 0.17181, 0.10992, 0.11003, 0.16799, 0.30219, 0.30232, 0.30255, 0.2054, 0.20559, 0.19782, 0.2348, 0.28067, 0.28071, 0.49258, 0.41149, 0.41149, 0.35108, 0.3127, 0.28609, 0.28612, 0.25381, 0.39248, 0.41297, 0.42846, 0.42851, 0.44691, 0.44697, 0.15995, 0.084161, 0.084022, 0.09395, 0.17802, 0.20446, 0.20446, 0.22263, 0.19085, 0.34674, 0.34704, 0.31368, 0.30991, 0.34553, 0.36326, 0.59552, 0.54142, 0.36005, 0.35776, 0.34293, 0.34241, 0.34004, 0.34858, 0.29828, 0.30715, 0.344, 0.35061, 0.34117, 0.34125, 0.30327, 0.30959, 0.34865, 0.31312, 0.34604, 0.3376, 0.34356, 0.42414, 0.41936, 0.41054, 0.34808, 0.3203, 0.31066, 0.31055, 0.17972, 0.18444, 0.20615, 0.20606, 0.17165, 0.17798, 0.17817, 0.033147, 0.030054, 0.026395, 0.025156, 0.024665, 0.025354, 0.025357], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins humanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95029, 0.95484, 0.95472, 0.96293, 0.9687, 0.97109, 0.9713, 0.93394, 0.93459, 0.93496, 0.86655, 0.86632, 0.87054, 0.87144, 0.8602, 0.85166, 0.85202, 0.81238, 0.72436, 0.621, 0.62099, 0.24689, 0.24674, 0.24677, 0.94542, 0.94537, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94478, 0.94374, 0.94217, 0.94166, 0.94098, 0.94106, 0.94108, 0.94131, 0.94133, 0.94089, 0.94169, 0.94156, 0.94199, 0.9417, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96439, 0.96404, 0.96426, 0.96444, 0.96502, 0.96568, 0.96625, 0.96823, 0.96924, 0.97046, 0.97046, 0.97069, 0.96964, 0.96895, 0.9545, 0.95458], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau du robinet": {
men: [0.56757, 0.69013, 0.68995, 0.70487, 0.49158, 0.43689, 0.37282, 0.35558, 0.35559, 0.27522, 0.27519, 0.27512, 0.26138, 0.66003, 0.64696, 0.61686, 0.60831, 0.60241, 0.69103, 0.70666, 0.73264, 0.75144, 0.7515, 0.76543, 0.78147, 0.78177, 0.85393, 0.69182, 0.78448, 0.83818, 0.87252, 0.87288, 0.87355, 0.85049, 0.85126, 0.5375, 0.53788, 0.48673, 0.41605, 0.41607, 0.41604, 0.3937, 0.12627, 0.11909, 0.10666, 0.10169, 0.095453, 0.098194, 0.092582, 0.36024, 0.24505, 0.18317, 0.1672, 0.16723, 0.23181, 0.46625, 0.45664, 0.48051, 0.46544, 0.4573, 0.47057, 0.47059, 0.48431, 0.46356, 0.54801, 0.66519, 0.52919, 0.52912, 0.54305, 0.15805, 0.15828, 0.11567, 0.088869, 0.12493, 0.12509, 0.14848, 0.14846, 0.14826, 0.24389, 0.25808, 0.28314, 0.2832, 0.22111, 0.24696, 0.23382, 0.24373, 0.33675, 0.30853, 0.29045, 0.29922, 0.27774, 0.27814, 0.13539, 0.084039, 0.11183, 0.11179, 0.12478, 0.15548, 0.17619, 0.17631, 0.17641, 0.17642, 0.22412, 0.076496, 0.07953, 0.072221, 0.072143, 0.072092, 0.072237, 0.072243], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ressources en eau": {
men: [0.40843, 0.43729, 0.50899, 0.52171, 0.50063, 0.2857, 0.27147, 0.23266, 0.22905, 0.17921, 0.17919, 0.20153, 0.18004, 0.16034, 0.11601, 0.081694, 0.10055, 0.10054, 0.10276, 0.16437, 0.36139, 0.5976, 0.6441, 0.61695, 0.6172, 0.59361, 0.61146, 0.61232, 0.61295, 0.79697, 0.7035, 0.7038, 0.70434, 0.59892, 0.30426, 0.23884, 0.36784, 0.2128, 0.21283, 0.15989, 0.086432, 0.081881, 0.078401, 0.079855, 0.074009, 0.074015, 0.071005, 0.068211, 0.053597, 0.050888, 0.013884, 0.015159, 0.014788, 0.016796, 0.019162, 0.091225, 0.12733, 0.13358, 0.1656, 0.1656, 0.16068, 0.26688, 0.29321, 0.31038, 0.34388, 0.364, 0.38235, 0.34549, 0.3459, 0.32557, 0.23688, 0.32395, 0.3091, 0.30111, 0.31723, 0.25451, 0.24072, 0.26312, 0.30653, 0.28791, 0.28806, 0.3138, 0.32569, 0.30243, 0.35344, 0.23215, 0.21945, 0.22357, 0.24929, 0.25293, 0.26494, 0.25324, 0.22454, 0.25837, 0.24972, 0.22779, 0.202, 0.21665, 0.18318, 0.2614, 0.33242, 0.33244, 0.23024, 0.21947, 0.1723, 0.16955, 0.16184, 0.10034, 0.10562, 0.086204], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones inondées": {
men: [0, 0, 0, 0, 0, 0.95638, 0.96363, 0.96872, 0.96874, 0.96879, 0.96867, 0.96844, 0.96904, 0.96821, 0.9684, 0.96849, 0.96875, 0.97166, 0.93859, 0.93022, 0.91369, 0.8654, 0.86547, 0.86607, 0.86642, 0.86675, 0.86653, 0.86775, 0.85256, 0.86904, 0.88071, 0.69107, 0.95441, 0.9549, 0.95576, 0.95574, 0.95642, 0.95585, 0.95599, 0.95603, 0.95598, 0.95596, 0.37017, 0.22792, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96266, 0.96289, 0.96185, 0.96117, 0.96311, 0.96319], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bassin versant": {
men: [0, 0, 0, 0, 0, 0.5555, 0.93888, 0.3596, 0.35961, 0.35963, 0.20661, 0.20656, 0.20668, 0.20651, 0.20641, 0.20643, 0.20649, 0.20646, 0.20643, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2186, 0.2187, 0.21849, 0.21858, 0.21875, 0.21886, 0.36506, 0.36505, 0.5821, 0.58175, 0.95073, 0.95077, 0.95072, 0.95071, 0.94474, 0.94474, 0.94624, 0.94632, 0.94486, 0.945, 0.94825, 0.39664, 0.60448, 0.60412, 0.6042, 0.60433, 0.60367, 0.60267, 0.60234, 0.68549, 0.68555, 0.68556, 0.68573, 0.51207, 0.4309, 0.57416, 0.38327, 0.38344, 0.38332, 0.38327, 0.38372, 0.38447, 0.38502, 0, 0, 0, 0, 0, 0, 0, 0.94743, 0.94791, 0.94843, 0.94864, 0.9495, 0.95024, 0.94958, 0.94998, 0.38833, 0.38888, 0.38861, 0.033335, 0.033378, 0.033426, 0, 0, 0, 0, 0, 0.024973, 0.024988, 0.025005, 0.026371, 0.026372, 0.0264, 0.39322, 0.24735, 0.24741, 0.24714, 0.20201, 0.20242, 0.20243], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies liées à l' eau": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96447, 0.97281, 0.97257, 0.93595, 0.87484, 0.87444, 0.87453, 0.87475, 0.87465, 0.87452, 0.66209, 0.56432, 0.62602, 0.63003, 0.54311, 0.3153, 0.31542, 0.32701, 0.35802, 0.35839, 0.35856, 0.35821, 0.35836, 0.35864, 0.56726, 0.96968, 0.95317, 0.94981, 0.94925, 0.94939, 0.94943, 0.94938, 0.94887, 0.94919, 0.94919, 0.9507, 0.95077, 0.94931, 0.94945, 0.95037, 0.94963, 0.94974, 0.94919, 0.94932, 0.94952, 0.94848, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouvelles pluies": {
men: [0, 0, 0, 0, 0, 0.60768, 0.621, 0.68715, 0.67835, 0.67839, 0.69157, 0.51971, 0.52004, 0.43955, 0.43935, 0.47647, 0.47659, 0.48262, 0.48255, 0.46655, 0.41913, 0.36007, 0.29584, 0.29605, 0.26627, 0.3977, 0.41914, 0.70045, 0.70117, 0.59951, 0.59894, 0.94893, 0.94966, 0.95014, 0.94515, 0.94514, 0.94581, 0.94524, 0.94538, 0.94542, 0.94537, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045338, 0.045288, 0.052817, 0.94166, 0.94098, 0.94106, 0.94108, 0.94131, 0.94133, 0.94089, 0.94169, 0.94156, 0.94199, 0.9417, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"diarrhées aiguës": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9537, 0.44816, 0.47316, 0.40298, 0.3461, 0.34618, 0.37727, 0.37753, 0.37768, 0.37783, 0.37773, 0.36431, 0.36468, 0.36485, 0.29407, 0.30956, 0.20746, 0.21125, 0.53632, 0.53631, 0, 0, 0, 0, 0, 0, 0, 0.9439, 0.9454, 0.94547, 0.94401, 0.94415, 0.95164, 0.9509, 0.95101, 0.95045, 0.95059, 0.95079, 0.94974, 0.94816, 0.94765, 0.94042, 0.9405, 0.94052, 0.94075, 0.94077, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13522, 0.13525, 0.13533, 0.13542, 0.41399, 0.41401, 0.41444, 0.95442, 0.95442, 0.95464, 0.95361, 0.5105, 0.51153, 0.51157], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies diarrhéiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18779, 0.18763, 0.18754, 0.18756, 0.18761, 0.18759, 0.26794, 0.26819, 0.26832, 0.26838, 0.93941, 0.94006, 0.94328, 0.94364, 0.3222, 0.32266, 0.32299, 0.32314, 0.32283, 0.18408, 0.12883, 0.12889, 0.099184, 0.099182, 0.099253, 0.099193, 0, 0, 0, 0, 0, 0.51522, 0.51604, 0.58346, 0.67003, 0.67013, 0.81891, 0.81828, 0.81837, 0.81789, 0.95968, 0.95988, 0.95883, 0.96152, 0.961, 0.95867, 0.95875, 0.95877, 0.95901, 0.95903, 0.95707, 0.95788, 0.95775, 0.95819, 0.9579, 0.95777, 0.9589, 0.95412, 0.95549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux souterraines": {
men: [0.42532, 0.36157, 0.22053, 0.2488, 0.27433, 0.27392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085565, 0.0948, 0.10538, 0.12094, 0.12103, 0.12107, 0.12112, 0.14982, 0.24819, 0.30093, 0.38996, 0.61777, 0.61803, 0.61851, 0.50453, 0.44989, 0.44989, 0.4502, 0.44993, 0.45, 0.60156, 0.69681, 0.72163, 0.72743, 0.72743, 0.73073, 0.73078, 0.72965, 0.83306, 0.91616, 0.91545, 0.91556, 0.91502, 0.91515, 0.89392, 0.84046, 0.76912, 0.84271, 0.86469, 0.59731, 0.59023, 0.59038, 0.59039, 0.54187, 0.54233, 0.44266, 0.44286, 0.46889, 0.42321, 0.39193, 0.28257, 0.1795, 0.093866, 0.13119, 0.13304, 0.11932, 0.10878, 0.10876, 0.10861, 0.13199, 0.16793, 0.10763, 0.12916, 0.17687, 0.17701, 0.14303, 0.13007, 0.1175, 0.11767, 0.13413, 0.12009, 0.10829, 0.10845, 0.11373, 0.072395, 0.072294, 0.072268, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"usage de l' eau": {
men: [0.24523, 0.24505, 0.24499, 0.23957, 0.23947, 0.20233, 0.07814, 0.075451, 0.071987, 0.044049, 0.044044, 0.05703, 0.035623, 0.049158, 0.054799, 0.081945, 0.096659, 0.098575, 0.098561, 0.098653, 0.27153, 0.31639, 0.41105, 0.38368, 0.38383, 0.3227, 0.32262, 0.27165, 0.28746, 0.21505, 0, 0, 0, 0, 0.42726, 0.42725, 0.42755, 0.4273, 0.42736, 0.42738, 0.53286, 0.5977, 0.5979, 0.48154, 0.48231, 0.69484, 0.69377, 0.69388, 0.61033, 0.65823, 0.6583, 0.65791, 0.67725, 0.6774, 0.43435, 0.31768, 0.3175, 0.42639, 0.48335, 0.48336, 0.48348, 0.50848, 0.49351, 0.43328, 0.41067, 0.41085, 0.4255, 0.42544, 0.50169, 0.6601, 0.66104, 0.61481, 0.52246, 0.52167, 0.52232, 0.43448, 0.35917, 0.54598, 0.33125, 0.33142, 0.17783, 0.17787, 0.17803, 0.17817, 0.10495, 0.105, 0.090472, 0.090601, 0.090538, 0.090373, 0.09049, 0.09062, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"approvisionnement en eau": {
men: [0.60086, 0.67464, 0.54421, 0.54407, 0.52754, 0.55946, 0.54833, 0.5756, 0.56814, 0.56817, 0.53175, 0.46017, 0.3901, 0.38704, 0.38686, 0.15549, 0.15974, 0.15972, 0.17081, 0.098468, 0, 0, 0, 0, 0, 0.035387, 0.031134, 0.10563, 0.10262, 0.10566, 0.11201, 0.11206, 0.11214, 0.080582, 0.050937, 0.064651, 0.060842, 0.083231, 0.083243, 0.06789, 0.070713, 0.026073, 0.025686, 0.026517, 0.028533, 0.028535, 0.028491, 0.03587, 0.1496, 0.14948, 0.18795, 0.07465, 0.07466, 0.070585, 0.073624, 0.1547, 0.35274, 0.34753, 0.37511, 0.37512, 0.36053, 0.37292, 0.37757, 0.35298, 0.38955, 0.43153, 0.39657, 0.37923, 0.38508, 0.41589, 0.24549, 0.2531, 0.25317, 0.21214, 0.22783, 0.21986, 0.21982, 0.2469, 0.12709, 0, 0, 0, 0.31731, 0.31756, 0.28046, 0.28058, 0.28036, 0.41261, 0.41232, 0.52832, 0.61856, 0.61945, 0.62013, 0.64265, 0.64176, 0.64153, 0.36741, 0.36748, 0.55118, 0.55155, 0.55188, 0.5519, 0.21295, 0.21322, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accès à l' eau potable": {
men: [0.54976, 0.62092, 0.65588, 0.65571, 0.63849, 0.55842, 0.49286, 0.5113, 0.49477, 0.44388, 0.47019, 0.46496, 0.46525, 0.46485, 0.48821, 0.37637, 0.24165, 0.22155, 0.14189, 0.20517, 0.11706, 0.070532, 0.070773, 0.08565, 0.085684, 0.10647, 0.10645, 0.10257, 0.06171, 0.052382, 0.05128, 0.039817, 0.044788, 0.084586, 0.093116, 0.099623, 0.10319, 0.21593, 0.18063, 0.16916, 0.1653, 0.15998, 0.24233, 0.28501, 0.29571, 0.28897, 0.28074, 0.17072, 0.19072, 0.19555, 0.19558, 0.040873, 0.057929, 0.05296, 0.14617, 0.1141, 0.11407, 0.10267, 0.12535, 0.12437, 0.12717, 0.16906, 0.19475, 0.16642, 0.2052, 0.21787, 0.21433, 0.22541, 0.23917, 0.24881, 0.26921, 0.34396, 0.3244, 0.33412, 0.33453, 0.31721, 0.28003, 0.34091, 0.20498, 0.20355, 0.20022, 0.20027, 0.10969, 0.16908, 0.16896, 0.076414, 0.063445, 0.094778, 0.15582, 0.21237, 0.2367, 0.24334, 0.31521, 0.31283, 0.30861, 0.3085, 0.29576, 0.27756, 0.27773, 0.2872, 0.27138, 0.25104, 0.20301, 0.11624, 0.058512, 0.058526, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"aide alimentaire": {
men: [0, 0, 0, 0, 0, 0, 0.4177, 0.5895, 0.52967, 0.71712, 0.81376, 0.81357, 0.81408, 0.82654, 0.80307, 0.82927, 0.8167, 0.81035, 0.79706, 0.77918, 0.79215, 0.79518, 0.82869, 0.77871, 0.5838, 0.60995, 0.5386, 0.53935, 0.53946, 0.53971, 0.37639, 0.37862, 0.39511, 0.42181, 0.29645, 0.26065, 0.26084, 0.26068, 0.26072, 0.13368, 0.14716, 0.14716, 0, 0, 0.11839, 0.073101, 0.072988, 0.069384, 0.06945, 0.039259, 0.034929, 0.034908, 0.034913, 0.03895, 0.037067, 0.037005, 0.038103, 0.029701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23995, 0.43106, 0.43124, 0.43091, 0.43152, 0.43122, 0.43044, 0.43099, 0.72159, 0.72238, 0.5059, 0.53557, 0.53537, 0.3129, 0.18586, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"choléra": {
men: [0.10204, 0.10197, 0, 0, 0.2006, 0.68118, 0.83296, 0.85241, 0.8397, 0.85278, 0.85684, 0.85663, 0.82407, 0.75922, 0.75918, 0.75926, 0.75946, 0.66303, 0.66927, 0.5348, 0.42151, 0.37948, 0.37001, 0.36157, 0.34778, 0.34549, 0.3103, 0.31856, 0.29017, 0.29492, 0.29464, 0.31247, 0.29917, 0.30989, 0.27521, 0.27397, 0.22393, 0.22951, 0.23388, 0.24044, 0.23886, 0.19462, 0.2979, 0.38615, 0.38676, 0.31013, 0.36982, 0.38075, 0.3965, 0.23386, 0.21606, 0.2224, 0.22243, 0.22607, 0.23281, 0.19916, 0.18647, 0.10208, 0.10209, 0.10209, 0.03817, 0.039202, 0.024131, 0.038139, 0.052456, 0.05248, 0.052464, 0.014398, 0.012158, 0.016722, 0.02032, 0.02034, 0.014623, 0.014226, 0.023724, 0.023732, 0.023729, 0.023696, 0, 0, 0, 0, 0, 0.17407, 0.17395, 0.29486, 0.16994, 0.16323, 0.16557, 0.19051, 0.1729, 0.14799, 0.1422, 0.13757, 0.13548, 0.13543, 0.1365, 0.13306, 0.13122, 0.12045, 0.10781, 0.11575, 0.10201, 0.065949, 0.072096, 0.090307, 0.098029, 0.10446, 0.10443, 0.090293], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique de l' eau": {
men: [0.17379, 0.18159, 0.18154, 0.18149, 0.18142, 0.13598, 0.12574, 0.12575, 0.12575, 0.12575, 0.12574, 0.07019, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95226, 0.95258, 0.95259, 0.9541, 0.95417, 0.9527, 0.95284, 0.95376, 0.95303, 0.95314, 0.95258, 0.95271, 0.43981, 0.43932, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.095562, 0.09561, 0.095663, 0.095685, 0.15314, 0.95024, 0.94958, 0.94998, 0.94924, 0.95059, 0.94993, 0.9482, 0.17802, 0.17827, 0, 0, 0, 0, 0, 0.10049, 0.10055, 0.10062, 0.10068, 0.10068, 0.10079, 0.10092, 0.26461, 0.26467, 0.26439, 0.95011, 0.95203, 0.9521], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45555, 0.45834, 0.54678, 0.51218, 0.51211, 0.44999, 0.48916, 0.48927, 0.48931, 0.48965, 0.48985, 0.49003, 0.48991, 0.4906, 0.51687, 0.54686, 0.43984, 0.55053, 0.55095, 0.95468, 0.94922, 0.9534, 0.95408, 0.95351, 0.95365, 0.95369, 0.95364, 0.95362, 0.95059, 0.9506, 0.95211, 0.94574, 0.94428, 0.94443, 0.94534, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion de l' eau": {
men: [0.21978, 0.21425, 0.10894, 0.12069, 0.12064, 0.14887, 0.20096, 0.19032, 0.19033, 0.22347, 0.23688, 0.23682, 0.14392, 0.2332, 0.26515, 0.26517, 0.27315, 0.27312, 0.27308, 0.27213, 0.18487, 0.1876, 0.18762, 0.07803, 0.078061, 0.073974, 0.073955, 0.0663, 0.066368, 0.057716, 0.20764, 0.20772, 0.24645, 0.21806, 0.20348, 0.20274, 0.24839, 0.24824, 0.24828, 0.35124, 0.35123, 0.44281, 0.44348, 0.5222, 0.37897, 0.41617, 0.43748, 0.5199, 0.61634, 0.53684, 0.51127, 0.52238, 0.55709, 0.55721, 0.43302, 0.37519, 0.35735, 0.20062, 0.21032, 0.19795, 0.1793, 0.19088, 0.15507, 0.13331, 0.13329, 0.1405, 0.11978, 0.11976, 0.1193, 0.1166, 0.1188, 0.28839, 0.28421, 0.28378, 0.25973, 0.23039, 0.28215, 0.27237, 0.28864, 0.19583, 0.16417, 0.1642, 0.17009, 0.17265, 0.17253, 0.033163, 0.071728, 0.07183, 0.0847, 0.1071, 0.108, 0.11611, 0.074752, 0.11293, 0.12425, 0.12421, 0.12117, 0.13806, 0.13815, 0.14934, 0.20168, 0.20169, 0.17198, 0.16878, 0.19074, 0.19079, 0.25344, 0.2237, 0.22057, 0.18894], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution radioactive": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0091693, 0.0089868, 0.0089891, 0.008953, 0.0088267, 0.008835, 0.0088392, 0.0088411, 0.010687, 0.015673, 0.018867, 0.019668, 0.019195, 0.019222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22619, 0.22622, 0.22627, 0.76084, 0.75958, 0.75917, 0.75862, 0.75868, 0.7587, 0.75888, 0.7589, 0.75855, 0.95174, 0.95161, 0.94626, 0.95331, 0.9573, 0.9589, 0.96076, 0.96214, 0.96306, 0.96331, 0.96185, 0.96303, 0.96339, 0.96325, 0.96192, 0.96142, 0.75579, 0.4771, 0.31547, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"opérations humanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.331, 0.33109, 0.23888, 0.22268, 0.27085, 0.27098, 0.27104, 0.27468, 0.27858, 0.27869, 0.2788, 0.34522, 0.3457, 0.37262, 0.30884, 0.30855, 0.38923, 0.75726, 0.62625, 0.62682, 0.62681, 0.62725, 0.62688, 0.62697, 0.627, 0, 0, 0, 0, 0, 0, 0, 0, 0.4118, 0.57323, 0.5733, 0.57296, 0.65968, 0.65982, 0.6591, 0.75523, 0.88392, 0.88328, 0.88336, 0.67988, 0.72378, 0.72379, 0.67814, 0.61627, 0.61618, 0.61646, 0.52442, 0.52435, 0.52497, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conditions sanitaires": {
men: [0.090718, 0, 0, 0, 0, 0, 0, 0.13325, 0.13325, 0.1446, 0.14459, 0.14455, 0.15329, 0.10427, 0.075226, 0.046055, 0.046067, 0.046061, 0.046055, 0.047237, 0.10293, 0.064848, 0.057061, 0.06075, 0.060775, 0.060798, 0.062388, 0.07317, 0.092331, 0.22716, 0.22694, 0.22704, 0.22721, 0.089012, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.85173, 0.85255, 0.95838, 0.95849, 0.95792, 0.95806, 0.95826, 0.96386, 0.32075, 0.32058, 0.32035, 0.32038, 0.30416, 0.30423, 0.1124, 0.11234, 0.067221, 0.067211, 0.067242, 0.067222, 0.067213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40181, 0.65037, 0.67646, 0.60221, 0.61466, 0.61546, 0.61634, 0.63296, 0.64283, 0.64194, 0.6417, 0.64185, 0.66053, 0.66093, 0.65362, 0.31974, 0.18549, 0.099959, 0.098676, 0.10477, 0.21506, 0.15325, 0.13078, 0.12755, 0.12042], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"citernes": {
men: [0.33133, 0.3311, 0.37055, 0.39066, 0.3905, 0.56639, 0.56629, 0.50869, 0.5087, 0.50872, 0.47324, 0.43209, 0.4778, 0.44359, 0.56999, 0.57004, 0.57019, 0.60109, 0.68143, 0.49301, 0.46934, 0.52933, 0.51511, 0.51546, 0.51567, 0.51587, 0.46037, 0.46938, 0.46986, 0.47008, 0.41178, 0.41195, 0.23907, 0, 0, 0, 0, 0.37817, 0.37822, 0.37824, 0.37822, 0.36152, 0.36164, 0.19544, 0.26546, 0.13412, 0.13392, 0.1207, 0.12082, 0.11505, 0.11506, 0, 0, 0, 0.12751, 0.13296, 0.18305, 0.26508, 0.23407, 0.33853, 0.33861, 0.39039, 0.27114, 0.28658, 0.23748, 0.23759, 0.23751, 0.23748, 0.12516, 0.11474, 0.038303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0081829, 0.010881, 0.013327, 0.013771, 0.013854, 0.014235, 0.014177, 0.015836, 0.020196, 0.020197, 0.021461, 0.034602, 0.038113, 0.034512, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"source d' eau": {
men: [0.39692, 0.39665, 0.39655, 0.39644, 0.39628, 0.39568, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56926, 0.40379, 0.40373, 0.75431, 0.82778, 0.82796, 0.41644, 0.41673, 0.42342, 0.42359, 0.42348, 0.43248, 0.43293, 0.42072, 0.38915, 0.35091, 0.35118, 0.19607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.058518, 0.058611, 0.084044, 0.083915, 0.083927, 0.084008, 0.10921, 0.10922, 0.10493, 0.10494, 0.086988, 0.086892, 0.086748, 0.086701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13841, 0.20014, 0.19986, 0.17992, 0.18001, 0.18011, 0.18015, 0.18031, 0.16827, 0.37264, 0.3728, 0.37251, 0.37304, 0.37278, 0.41653, 0.42892, 0.52714, 0.55105, 0.55095, 0.55019, 0.54999, 0.49177, 0.57234, 0.17708, 0.069322, 0.069363, 0.069366, 0.069439, 0.33736, 0.33736, 0.33744, 0.36235, 0.30377, 0.30439, 0.30441], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau de qualité": {
men: [0, 0.27872, 0.51001, 0.50988, 0.49942, 0.49868, 0.49858, 0.53358, 0.5336, 0.62532, 0.62524, 0.62509, 0.77126, 0.7706, 0.77024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.082719, 0.074077, 0.074086, 0.074042, 0.074053, 0.074068, 0.073987, 0.073864, 0.073824, 0.073771, 0.073777, 0.073778, 0.069021, 0.069023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9573, 0.95556, 0.9568, 0.95817, 0.95922, 0.95905, 0.95773, 0.95738, 0.9576, 0.95778, 0.95836, 0.95901, 0.95957, 0.95962, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau minérale": {
men: [0, 0, 0, 0.19107, 0.19099, 0.1411, 0.14107, 0.26561, 0.26561, 0.26562, 0.24187, 0.24181, 0.24196, 0.42316, 0.46314, 0.46319, 0.46331, 0.43199, 0.43192, 0.81215, 0.81253, 0.81271, 0.81278, 0.81334, 0.9491, 0.94947, 0.94922, 0.94097, 0.93425, 0.93468, 0.079713, 0.079747, 0.079808, 0, 0, 0, 0, 0, 0, 0, 0, 0.41846, 0.4186, 0.4186, 0.95832, 0.9584, 0.95692, 0.95706, 0.95799, 0.4003, 0.40035, 0.18246, 0.18248, 0.18252, 0.18232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau douce": {
men: [0.078855, 0.067187, 0.088845, 0.095125, 0.088363, 0.087711, 0.081401, 0.072913, 0.074416, 0.078367, 0.13244, 0.31231, 0.33415, 0.412, 0.4921, 0.47303, 0.50846, 0.51461, 0.53723, 0.45562, 0.46489, 0.45275, 0.4701, 0.50228, 0.48161, 0.34681, 0.27319, 0.20497, 0.15216, 0.1815, 0.18577, 0.18585, 0.18599, 0.21969, 0.20309, 0.33916, 0.2669, 0.20699, 0.20702, 0.22645, 0.19601, 0.12841, 0.16516, 0.18316, 0.15612, 0.15613, 0.15068, 0.15224, 0.17869, 0.34934, 0.35936, 0.39474, 0.40494, 0.41462, 0.47989, 0.46562, 0.43127, 0.45484, 0.45112, 0.45113, 0.39032, 0.42083, 0.42789, 0.10632, 0.1063, 0.10635, 0.078136, 0.078126, 0.075007, 0.015238, 0.013593, 0.013405, 0.015646, 0.014931, 0.020181, 0.016015, 0, 0.1104, 0.12628, 0.13764, 0.13866, 0.16084, 0.1561, 0.14143, 0.15747, 0.14722, 0.15738, 0.16172, 0.16448, 0.18058, 0.18545, 0.12181, 0.13015, 0.11731, 0.10872, 0.08039, 0.075605, 0.096517, 0.10022, 0.093967, 0.065857, 0.06586, 0.050685, 0.054177, 0.05436, 0.052848, 0, 0.027479, 0.031481, 0.031483], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pluviométrie": {
men: [0.093846, 0.09378, 0.093756, 0.093732, 0.1181, 0.082648, 0.065056, 0.052388, 0.039019, 0.039021, 0.039016, 0.039007, 0.039413, 0.041261, 0.042381, 0.042385, 0.041002, 0.040997, 0.040991, 0.055241, 0.085463, 0.42686, 0.65976, 0.66022, 0.36405, 0.36419, 0.3242, 0.32466, 0.27146, 0.27158, 0.49073, 0.49093, 0.49131, 0.41847, 0.41885, 0.3207, 0.32093, 0.32074, 0.48642, 0.48644, 0.42889, 0.42889, 0.55336, 0.36137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94643, 0.94631, 0.94742, 0.94926, 0.95062, 0.24669, 0.24676, 0.24638, 0.24669, 0.24678, 0.24674, 0.2464, 0.20892, 0.20903, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25187, 0.25223, 0.30543, 0.30537, 0.23889, 0.2388, 0.23886, 0.2389, 0.23904, 0.23921, 0.39676, 0.39678, 0.3972, 0.31262, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
