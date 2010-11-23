var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"élevage industriel": {
men: [0, 0, 0, 0, 0, 0, 0, 0.076378, 0.23192, 0.23158, 0.23166, 0.23174, 0.23177, 0.23186, 0.2657, 0.26553, 0.40848, 0.95295, 0.953, 0.95309, 0.95268, 0, 0, 0.95611, 0.95572, 0.95563, 0.73797, 0.73739, 0.34291, 0.34267, 0.34249, 0.34228, 0.26486, 0.26494, 0.26492, 0.26482, 0.26472, 0.093175, 0.093217, 0.093191, 0.1006, 0.10059, 0.16858, 0.16882, 0.32468, 0.32497, 0.4617, 0.46185, 0.46254, 0.57672, 0.57614, 0.95637, 0.95591, 0.35715, 0.32835, 0.32872, 0.32861, 0.3285, 0.20034, 0.17159, 0.17159, 0.17162, 0.17165, 0, 0, 0, 0, 0.13475, 0.10469, 0.10467, 0.059327, 0.059361, 0.059382, 0.061216, 0.0612, 0.27184, 0.27189, 0.32857, 0.32867, 0.36926, 0.36934, 0.32544, 0.42946, 0.42975, 0.97601, 0.97522, 0.97327, 0.9736, 0.91382, 0.81689, 0.81694, 0.81739, 0.81758, 0.81699, 0.81657, 0.8166, 0.57417, 0.57369, 0.57473, 0.57468, 0.47584, 0.47584, 0.56027, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"encéphalopathie spongiforme": {
men: [0.14418, 0.14412, 0.13307, 0.13309, 0.14733, 0.16166, 0.17072, 0.18581, 0.24118, 0.23449, 0.23457, 0.23465, 0.23468, 0.21446, 0.52942, 0.52908, 0.68923, 0.68911, 0.68915, 0.68921, 0.68891, 0.68974, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94949, 0.94994, 0.95128, 0.95119, 0.95206, 0.95271, 0.95301, 0.95443, 0.95399, 0.95302, 0.9523, 0.95184, 0.95232, 0.95233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94198, 0.94131, 0.94083, 0.94086, 0.94171, 0.94093, 0.94264, 0.94256, 0.94525, 0.94525, 0.94379, 0.94316, 0.94215, 0.9421, 0, 0, 0, 0.50855], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"farines animales": {
men: [0.16923, 0.16917, 0.16649, 0.16651, 0.1683, 0.16809, 0.17757, 0.17068, 0.17656, 0.17244, 0.17251, 0.17256, 0.16711, 0.20651, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94949, 0.95481, 0.95615, 0.95962, 0.9605, 0.96116, 0.96146, 0.96289, 0.96515, 0.96417, 0.96344, 0.96297, 0.96346, 0.73403, 0.66058, 0.57922, 0.49167, 0.33327, 0.24668, 0.24668, 0.24672, 0.24677, 0, 0, 0, 0, 0, 0.20783, 0.20778, 0.16067, 0.20625, 0.20633, 0.40629, 0.40619, 0.40597, 0.40605, 0.40633, 0.40645, 0.40633, 0.40643, 0.40666, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94198, 0.94131, 0.94083, 0.94086, 0.94171, 0.94093, 0.94264, 0.94256, 0.94525, 0.94525, 0.94379, 0.1505, 0.15034, 0.15033, 0, 0, 0, 0.33212], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tuberculose bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96937, 0.97344, 0.97498, 0.97447, 0.90774, 0.90734, 0.90761, 0.90756, 0.90723, 0.90686, 0.9074, 0.90781, 0.90756, 0.90722, 0.7448, 0.559, 0.65272, 0.65266, 0.77888, 0.77942, 0.77966, 0.78082, 0.78047, 0.77967, 0.77908, 0.46543, 0.46567, 0.46567, 0.52674, 0.52656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53099, 0.53008, 0.52965, 0.52859, 0.52877, 0.52875, 0.52902, 0.52906, 0.52935, 0.96267, 0.96198, 0.96149, 0.96152, 0.96239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"germes pathogènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22919, 0.19983, 0.19974, 0.25668, 0.25667, 0.25657, 0.25647, 0.35579, 0.35595, 0.45135, 0.5547, 0.58842, 0.62782, 0.68653, 0.8241, 0.79412, 0.79467, 0.71859, 0.7412, 0.77421, 0.77342, 0.69618, 0.69585, 0.65335, 0.65335, 0.566, 0.49476, 0.4946, 0.29222, 0.4619, 0.4619, 0.57607, 0.53142, 0.40712, 0.40773, 0.47667, 0.47705, 0.4768, 0.47725, 0.60202, 0.95861, 0.6334, 0.63363, 0.4325, 0.43239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94835, 0.22498, 0.22496, 0.2256, 0.2256, 0.46796, 0.46764, 0.46714, 0.46712, 0.46664, 0.46699, 0.46713, 0.46682], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lait français": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44351, 0.44343, 0.44346, 0.4435, 0.57947, 0.27467, 0.25233, 0.25251, 0.2524, 0.25238, 0.25248, 0.25228, 0.25222, 0.25204, 0.16759, 0.20176, 0.20167, 0.20173, 0.13008, 0.21612, 0.94122, 0.94179, 0.94222, 0.94196, 0.9416, 0.94148, 0.94193, 0.94325, 0.94316, 0, 0, 0, 0, 0, 0.95965, 0.96137, 0.96091, 0.96139, 0.9614, 0.96248, 0.96215, 0.96184, 0.96216, 0.96182, 0.96182, 0.96198, 0.96217, 0.96263, 0.94979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vache folle": {
men: [0.15193, 0.15187, 0.15791, 0.16026, 0.17503, 0.17482, 0.18065, 0.25789, 0.31792, 0.34525, 0.34538, 0.37033, 0.34845, 0.35402, 0.44199, 0.4417, 0.44158, 0.44151, 0.51049, 0.54481, 0.61366, 0.5178, 0.29926, 0.25363, 0.25352, 0.2535, 0.951, 0.18308, 0.18303, 0.15335, 0.21115, 0.21102, 0.21093, 0.21099, 0.21098, 0.07937, 0.079337, 0.17154, 0.17161, 0.17157, 0.15714, 0.57335, 0.641, 0.72897, 0.44783, 0.44824, 0.44855, 0.44869, 0.44936, 0.50679, 0.50628, 0.46721, 0.46698, 0.46721, 0.4327, 0.34512, 0.26882, 0.26403, 0.33327, 0.33315, 0.33315, 0.33321, 0.33327, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57187, 0.57134, 0.2619, 0.29172, 0.29148, 0.2909, 0.27515, 0.2599, 0.26004, 0.26005, 0.2602, 0.27925, 0.3036, 0.27084, 0.032652, 0.032682, 0.06994, 0.070067, 0.070061, 0.070261, 0.081682, 0.098859, 0.063669, 0.063601, 0.063597, 0, 0, 0, 0.22764], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éleveur britannique": {
men: [0, 0, 0, 0, 0, 0, 0, 0.85655, 0.82502, 0.82379, 0.8241, 0.82436, 0.82447, 0.82478, 0.82526, 0.82472, 0.8245, 0.82436, 0.82441, 0.91075, 0.91036, 0.75593, 0.95045, 0.95663, 0.95624, 0.95615, 0.95653, 0.95577, 0.95553, 0.95485, 0.95435, 0.95377, 0.95334, 0.95364, 0.95358, 0.94543, 0.94505, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur agroalimentaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.94637, 0.27053, 0.27062, 0.27071, 0.27075, 0.27085, 0.27101, 0.27083, 0.27076, 0.27071, 0.27073, 0.27075, 0.27064, 0.27096, 0.2383, 0.94881, 0.94842, 0.94833, 0.9487, 0.94796, 0.94771, 0.94704, 0.94655, 0.94597, 0.94555, 0.94584, 0.94578, 0.94543, 0.94505, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"animaux domestiques": {
men: [0.047656, 0.047636, 0.047655, 0.036674, 0.036689, 0.036643, 0.033327, 0.03328, 0.045311, 0.05157, 0.06287, 0.062891, 0.025758, 0.019372, 0.018436, 0.016479, 0.016474, 0.028514, 0.028515, 0.028518, 0.031463, 0.031501, 0.03158, 0.031602, 0, 0, 0, 0.091106, 0.039613, 0.044736, 0.043033, 0.043007, 0.042988, 0.043001, 0.050602, 0.050584, 0.050563, 0.050594, 0.057382, 0.12425, 0.1242, 0.074447, 0.58266, 0.73503, 0.95956, 0.96044, 0.9611, 0.9614, 0.96283, 0.96239, 0.96141, 0.96068, 0.96022, 0.95728, 0.95729, 0.679, 0.83163, 0.80429, 0.75804, 0.75777, 0.75777, 0.7579, 0.75805, 0.6844, 0.24046, 0.24093, 0.24112, 0.24099, 0.24122, 0.375, 0.19802, 0.18313, 0.17408, 0.1741, 0.17406, 0.16448, 0.16451, 0.16915, 0.35308, 0.35298, 0.35306, 0.35326, 0.35293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13524, 0.13514, 0.13508, 0.088434, 0.070022, 0.069964, 0.070091, 0.062197, 0.062375, 0.062375, 0.062278, 0.062236, 0.10258, 0.10258, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"animaux morts": {
men: [0.08158, 0.081547, 0.08158, 0.096467, 0.096506, 0.096386, 0.096325, 0.094532, 0.09434, 0.094552, 0.094586, 0.094617, 0.73448, 0.73476, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026643, 0.026655, 0.10819, 0.10815, 0.1561, 0.15617, 0.19661, 0.40652, 0.96302, 0.96368, 0.96398, 0.96542, 0.9705, 0.96951, 0.96778, 0.96731, 0.96336, 0.96337, 0.96446, 0.96413, 0.96381, 0.96153, 0.96119, 0.96119, 0.96136, 0.96155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éleveurs français": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.051857, 0.05188, 0.11314, 0.1131, 0.11309, 0.11314, 0.1133, 0.48078, 0.48122, 0.48155, 0.4817, 0.10972, 0.3392, 0.60081, 0.61595, 0.61565, 0.6084, 0.6084, 0.60909, 0.60888, 0.60868, 0.60068, 0.60046, 0.60046, 0.60057, 0.98276, 0.98045, 0.34343, 0, 0, 0, 0, 0, 0, 0.10476, 0.093164, 0.093174, 0.09315, 0.082426, 0.082441, 0.082499, 0.11386, 0.12112, 0.12115, 0.12122, 0.090602, 0.12119, 0.12098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"services vétérinaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13115, 0.20576, 0.20565, 0.20552, 0.20543, 0.2055, 0.19347, 0.21962, 0.22909, 0.40208, 0.30177, 0.30168, 0.30404, 0.35975, 0.2204, 0.071569, 0.071562, 0.064364, 0.064408, 0.064428, 0.082228, 0.08219, 0.082106, 0.0733, 0.095262, 0.09531, 0.12301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31971, 0.31993, 0.31939, 0.3822, 0.38143, 0.57709, 0.57707, 0.75882, 0.75887, 0.96637, 0.96658, 0.96588, 0.9696, 0.96964, 0.96046, 0.95966, 0.96141, 0.96132, 0.96408, 0.96408, 0.96258, 0.96863, 0.30215, 0.30213, 0.30182, 0.30205, 0.17779, 0.11775], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage bovin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10415, 0.10412, 0.1041, 0.10411, 0.10412, 0.10407, 0.20487, 0.20539, 0.31514, 0.94504, 0.94495, 0.94533, 0.94458, 0.94434, 0.9596, 0.9591, 0.95851, 0.95809, 0.95838, 0.74377, 0.45149, 0.29988, 0.30006, 0.30019, 0.30011, 0.3, 0.29996, 0.3001, 0, 0, 0, 0, 0, 0.07213, 0.030307, 0.030383, 0.028496, 0.028482, 0.028496, 0.049211, 0.049266, 0.047963, 0.047948, 0.051496, 0.051478, 0.051478, 0.05603, 0.025334, 0.071884, 0.090271, 0.082677, 0.082743, 0.082699, 0, 0, 0, 0.084922, 0.090802, 0.090812, 0.090789, 0.09745, 0.095089, 0.09163, 0.096757, 0.12445, 0.12448, 0.12455, 0.28377, 0.41961, 0.41509, 0.3125, 0.31187, 0.31198, 0.31197, 0.31213, 0.32683, 0.28219, 0.28225, 0.28205, 0.2819, 0.31145, 0.056206, 0.056159, 0.10027, 0.10026, 0.10055, 0.10055, 0.06399, 0.03721, 0.05196, 0.056615, 0.056557, 0.053993, 0.05401, 0.044593], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones marécageuses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95125, 0.95028, 0.94956, 0.9491, 0.94958, 0.94959, 0.95066, 0.95033, 0.95002, 0.95034, 0.95, 0.95, 0.95017, 0.95035, 0, 0, 0, 0, 0.95473, 0.95564, 0.95544, 0.95479, 0.43571, 0.43586, 0.43591, 0.4358, 0.43557, 0.43565, 0.43596, 0.43609, 0.43596, 0.43606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lactalis": {
men: [0, 0.25811, 0.25821, 0.25824, 0.25835, 0.19153, 0.087007, 0.074742, 0.31286, 0.3124, 0.32466, 0.32477, 0.32481, 0.40955, 0.43824, 0.3801, 0.38624, 0.38617, 0.38619, 0.41858, 0.45057, 0.50482, 0.45751, 0.44548, 0.44062, 0.44058, 0.44075, 0.3965, 0.37587, 0.44362, 0.43333, 0.43306, 0.43287, 0.33196, 0.39348, 0.16673, 0.2184, 0.56335, 0.5636, 0.56345, 0.56323, 0.94582, 0.94627, 0.49515, 0.4951, 0.49555, 0.49589, 0.49605, 0.30489, 0.18022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevages porcins": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97418, 0.97378, 0.97369, 0.97408, 0.97331, 0.97306, 0.97237, 0.97186, 0.97127, 0.97084, 0.97113, 0.97107, 0.97072, 0.97032, 0, 0, 0, 0, 0, 0, 0.58647, 0.58641, 0.58695, 0.58736, 0.58754, 0.20674, 0.20664, 0.20643, 0.23851, 0.23839, 0.23851, 0.23852, 0.23878, 0.2387, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0086547, 0.0083874, 0.0083817, 0.0083864, 0.0083894, 0.0083903, 0.0087379, 0.010394, 0.010396, 0.21226, 0.14487, 0.14482, 0.14486, 0.14494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lait de vache": {
men: [0.14479, 0.14474, 0.14479, 0.14481, 0.14487, 0.40574, 0.53125, 0.67604, 0.70562, 0.45444, 0.4546, 0.45475, 0.41117, 0.44919, 0.44945, 0.51976, 0.51962, 0.51954, 0.51956, 0.49446, 0.46922, 0.34832, 0.32336, 0.42664, 0.42646, 0.42642, 0.44497, 0.38278, 0.38268, 0.11033, 0.11028, 0.11021, 0.11016, 0.11019, 0.060692, 0.078243, 0.078211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23991, 0.23973, 0.23961, 0.23974, 0.23032, 0.14969, 0.14963, 0.14959, 0.19532, 0.19525, 0.19525, 0.19528, 0.19532, 0.17973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11018, 0.11006, 0.11005, 0.10994, 0.95353, 0.95383, 0.95319], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaches laitières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14679, 0.12259, 0.12268, 0.12263, 0.12262, 0.12267, 0.12257, 0.30675, 0.27449, 0.24026, 0.24011, 0.24001, 0.24008, 0.24007, 0.33423, 0.42241, 0.42267, 0.42286, 0.42274, 0.42258, 0.42253, 0, 0, 0, 0, 0, 0, 0, 0, 0.04706, 0.10975, 0.1097, 0.10976, 0.10976, 0.10988, 0.10984, 0.20893, 0.12463, 0.12458, 0.12458, 0.098178, 0.098197, 0.15515, 0.098822, 0.1962, 0.19636, 0.19626, 0.19645, 0.1964, 0.19627, 0.14461, 0.22307, 0.22309, 0.22303, 0.34901, 0.34908, 0.34932, 0.23887, 0, 0, 0, 0.34414, 0.34438, 0.34379, 0.35755, 0.35683, 0.35695, 0.35694, 0.35712, 0.35715, 0.35735, 0.4331, 0.68268, 0.70545, 0.70548, 0.27818, 0.19622, 0.19658, 0.39302, 0.10719, 0.10719, 0.10702, 0.054809, 0.053528, 0.053525, 0.037566, 0.037594, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage intensif": {
men: [0.18346, 0.18338, 0.18345, 0.18348, 0.17883, 0.23202, 0.31998, 0.30348, 0.30287, 0.19788, 0.19795, 0.19801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.456, 0.47092, 0.47056, 0.47034, 0.47057, 0.40891, 0.33557, 0.29681, 0.29671, 0.29681, 0.29671, 0.32139, 0.22702, 0.27993, 0.022658, 0, 0, 0, 0, 0.025394, 0.031456, 0.037991, 0.038013, 0.038026, 0.038031, 0.038021, 0.71724, 0.71738, 0.71788, 0.8692, 0.86894, 0.70286, 0.77178, 0.42762, 0.30609, 0.30556, 0.2873, 0.34332, 0.34344, 0.34343, 0.1072, 0.10721, 0.10066, 0.10068, 0.10061, 0.11149, 0.1115, 0.18204, 0.426, 0.30415, 0.38531, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage bio": {
men: [0.13896, 0.1389, 0.13896, 0.13897, 0.13903, 0.50252, 0.50221, 0.5015, 0.50048, 0.49973, 0.49991, 0.50008, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95514, 0.95481, 0.9545, 0.95482, 0.95448, 0.95448, 0.95464, 0.95483, 0.95529, 0.95671, 0.95856, 0.95933, 0.95882, 0.95974, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pacte écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21001, 0.21009, 0.21021, 0.21007, 0.21002, 0.20998, 0.20999, 0.21001, 0.20992, 0.21017, 0.2107, 0.21085, 0.94842, 0.94833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10037, 0.21608, 0.21601, 0.18087, 0.18093, 0.18087, 0.18087, 0.40173, 0.40181, 0.402, 0.4026, 0.48754, 0.48793, 0.48767, 0.67881, 0.67867, 0.6782, 0.9585, 0.48658, 0.48663, 0.48651, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042976, 0.0462, 0.046216, 0.04048, 0.040501, 0.040503, 0.040526, 0.043899, 0.03796, 0.065577, 0.075433, 0.21037, 0.2102, 0.21058, 0.35143, 0.35244, 0.35244, 0.49889, 0.35946, 0.35908, 0.23822, 0.23797, 0.20087, 0.13973, 0.082478], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tube digestif": {
men: [0.02624, 0.026229, 0.02624, 0.026243, 0.026254, 0.024111, 0.024095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.030315, 0.032288, 0.034359, 0.037696, 0.040827, 0.047718, 0.053661, 0.1493, 0.14937, 0.1674, 0.23623, 0.4479, 0.61116, 0.61202, 0.68113, 0.68175, 0.50828, 0.51274, 0.51351, 0.19059, 0.14602, 0.11174, 0.10484, 0.10489, 0.10489, 0.10501, 0.10497, 0.10494, 0.056264, 0.056244, 0.059014, 0.047128, 0.037231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94198, 0.94131, 0.94083, 0.94086, 0.94171, 0.95192, 0.43793, 0.43789, 0.43914, 0.43914, 0.43846, 0.43817, 0.4377, 0.43768, 0.34947, 0.23732, 0.23739, 0.23723], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie laitière": {
men: [0, 0.32376, 0.32389, 0.32393, 0.32406, 0.27171, 0.18932, 0.50499, 0.57886, 0.57799, 0.5782, 0.57839, 0.52463, 0.54924, 0.57229, 0.42281, 0.44173, 0.44165, 0.38304, 0.3699, 0.39059, 0.2588, 0.22585, 0.226, 0.22591, 0.22589, 0.23911, 0.15283, 0.15279, 0.101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12122, 0.12116, 0.12122, 0.12123, 0.12136, 0.12132, 0.12128, 0.12132, 0.12128, 0.12128, 0.28001, 0.94792, 0.94838, 0.94979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28935, 0.28904, 0.28903, 0.28873, 0.28895, 0.28904, 0.28885], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie endémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11734, 0.11729, 0.13376, 0.17707, 0.17699, 0.17707, 0.17708, 0.17728, 0.25001, 0.24993, 0.25002, 0.4613, 0.4613, 0.9519, 0.94651, 0.94696, 0.94837, 0.95021, 0.95097, 0.95047, 0.95137, 0.95117, 0.95052, 0.95106, 0.9514, 0.9515, 0.95126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"abattage systématique": {
men: [0.071555, 0.071526, 0.050879, 0.050885, 0.055771, 0.055701, 0.065952, 0.074267, 0.074116, 0.068649, 0.068675, 0.068697, 0.068706, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94198, 0.94131, 0.94083, 0.94086, 0.94171, 0.94093, 0.94264, 0.94256, 0.94525, 0.94525, 0.94379, 0.94316, 0.94215, 0.9421, 0, 0, 0, 0.95728], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pâturages": {
men: [0.16791, 0.12616, 0.17979, 0.19217, 0.19225, 0.18233, 0.26238, 0.23999, 0.20345, 0.22581, 0.22589, 0.17669, 0.17672, 0.11289, 0.051555, 0.050375, 0.050362, 0.050354, 0.050356, 0.067491, 0.030277, 0.031915, 0.031722, 0.028465, 0.025798, 0.027426, 0.025098, 0.026763, 0.027091, 0.030898, 0.027012, 0.023197, 0.022054, 0, 0, 0, 0, 0, 0.022306, 0.042742, 0.045008, 0.046894, 0.052449, 0.049867, 0.0564, 0.071866, 0.07194, 0.093771, 0.10517, 0.10568, 0.11744, 0.25441, 0.21224, 0.1655, 0.16683, 0.19994, 0.22303, 0.23435, 0.21492, 0.20823, 0.2182, 0.23325, 0.23669, 0.22392, 0.23399, 0.1885, 0.19653, 0.23347, 0.23202, 0.18769, 0.1396, 0.19622, 0.25066, 0.27756, 0.28778, 0.29869, 0.31236, 0.38387, 0.38399, 0.25361, 0.20938, 0.17837, 0.21886, 0.29626, 0.29576, 0, 0, 0, 0, 0.18469, 0.1847, 0.13894, 0.1214, 0.12131, 0.088341, 0.093515, 0.075844, 0.075782, 0.075919, 0.058685, 0.11784, 0.11784, 0.11766, 0.12822, 0.12808, 0.14556, 0.13082, 0.17093, 0.21979, 0.21965], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitants agricoles": {
men: [0, 0.14813, 0.10943, 0.10944, 0.10949, 0.10101, 0.086917, 0.079995, 0.19964, 0.19105, 0.2041, 0.20416, 0.20419, 0.19854, 0.2218, 0.30461, 0.3745, 0.37444, 0.3719, 0.31356, 0.31459, 0.34537, 0.29177, 0.24429, 0.25109, 0.25107, 0.24841, 0.25854, 0.33295, 0.20979, 0.16542, 0.16532, 0.16683, 0.24256, 0.28574, 0.26842, 0.22906, 0.40462, 0.37341, 0.37331, 0.32469, 0.25196, 0, 0, 0, 0, 0, 0, 0, 0, 0.016456, 0.014324, 0.014697, 0.014705, 0.01573, 0.014713, 0.014708, 0.014703, 0.015109, 0.014674, 0.013814, 0.013817, 0.024614, 0.024626, 0, 0, 0, 0, 0.028109, 0.041562, 0.041533, 0.041557, 0.041572, 0.051332, 0.067957, 0.04189, 0.054409, 0.054447, 0.072507, 0.072486, 0.072503, 0.080778, 0, 0, 0, 0, 0.15684, 0.1569, 0.15689, 0.17631, 0.17182, 0.17191, 0.15331, 0.13512, 0.15711, 0.15711, 0.16752, 0.21321, 0.25173, 0.25171, 0.072169, 0.072169, 0.066985, 0.061859, 0.040001, 0.039999, 0.04697, 0.059999, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau plate": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96465, 0.96445, 0.96379, 0.96433, 0.96468, 0.96479, 0.96454, 0.96403, 0.96421, 0.96488, 0.96518, 0.96489, 0.96512, 0.96566, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
