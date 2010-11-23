var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"dépistage systématique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95799, 0.95799, 0.9579, 0.96748, 0.96765, 0.97935, 0.98388, 0.98498, 0.98403, 0.98391, 0.98256, 0.98808, 0.98813, 0.98788, 0.98368, 0.98368, 0.98375, 0.98231, 0.98039, 0.9761, 0.96856, 0.95448, 0.95533, 0.95545, 0.95702, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46248, 0.46248, 0.46085, 0.51971, 0.51958, 0.52017, 0.39457, 0.39444, 0.39458, 0.39329, 0.4931, 0.49239, 0.49217, 0.49237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules tumorales": {
men: [0.6127, 0.6127, 0.61249, 0.61249, 0.61249, 0.61172, 0.479, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078535, 0.095387, 0.095387, 0.095394, 0.095348, 0.095162, 0.095254, 0.063359, 0.05874, 0.058792, 0.0588, 0.058896, 0.072775, 0.060559, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16116, 0.39254, 0.61827, 0.61806, 0.85057, 0.84779, 0.84887, 0.6841, 0.6838, 0.68407, 0.68425, 0.68425, 0.6782, 0.75649, 0.71996, 0.56243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaisseaux sanguins": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.031902, 0.031902, 0.032078, 0.04474, 0.039805, 0.036963, 0.037172, 0.039757, 0.039719, 0.050014, 0.055855, 0.07895, 0.081274, 0.081304, 0, 0, 0, 0, 0, 0.016849, 0.016808, 0.019003, 0.019037, 0.019875, 0.01988, 0.019604, 0.027297, 0.027289, 0.032705, 0.043068, 0.043064, 0.043046, 0.069925, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3113, 0.3113, 0.26322, 0.26309, 0.23165, 0.23187, 0.23197, 0.28761, 0.28787, 0.2879, 0.2937, 0.27133, 0.27133, 0.2468, 0.016306, 0.016306, 0.022104, 0.022126, 0.030113, 0.030113, 0.030123, 0, 0, 0, 0, 0, 0.17948, 0.46727, 0.58326, 0.58605, 0.57314, 0.5517, 0.56697, 0.55386, 0.57516, 0.56277, 0.56292, 0.56292, 0.57228, 0.58462, 0.57881, 0.53438, 0.30532, 0.2072, 0.22785, 0.27105, 0.24112, 0.2295, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tumeur": {
men: [0.084754, 0.08036, 0.070414, 0.061495, 0.061335, 0.056047, 0.060205, 0.027539, 0.023194, 0.023753, 0.023644, 0.024155, 0.023263, 0.022869, 0.018022, 0.017671, 0.023887, 0.02552, 0.025279, 0.025506, 0.024538, 0.041717, 0.056724, 0.064457, 0.066425, 0.06479, 0.075011, 0.083262, 0.021514, 0.023517, 0, 0, 0, 0, 0, 0.048517, 0.029948, 0.021632, 0.020236, 0.020117, 0.01839, 0.016419, 0.011777, 0.011666, 0.011811, 0.011811, 0.020764, 0.020628, 0.019491, 0.022199, 0.034623, 0.062081, 0.064806, 0.065443, 0.065742, 0.064679, 0.10545, 0.11984, 0.16527, 0.16326, 0.15368, 0.14389, 0.15103, 0.11581, 0.096477, 0.063333, 0.060916, 0.061486, 0.057238, 0.064575, 0.060579, 0.048662, 0.0017955, 0.0017688, 0.0016786, 0.001669, 0.0014283, 0.0017176, 0.0017031, 0.093613, 0.095581, 0.089753, 0.10008, 0.098772, 0.1156, 0.16624, 0.24372, 0.257, 0.26692, 0.27252, 0.31311, 0.30699, 0.32031, 0.26456, 0.26498, 0.27777, 0.27379, 0.26764, 0.2603, 0.21257, 0.064617, 0.032153, 0.033969, 0.066077, 0.064916, 0.11666, 0.075386, 0.066462, 0.063144, 0.062407], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accident vasculaire": {
men: [0.18903, 0.18903, 0.37022, 0.37022, 0.40307, 0.84341, 0.87891, 0.90807, 0.89933, 0.84551, 0.84551, 0.92396, 0.87984, 0.77802, 0.65014, 0.64996, 0.6259, 0.6259, 0.59822, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37271, 0.33167, 0.19272, 0.18637, 0.15703, 0.13739, 0.14429, 0.12649, 0.12647, 0.12859, 0.12863, 0.12642, 0.12665, 0.13186, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"examens médicaux": {
men: [0, 0, 0, 0, 0, 0.63365, 0.63391, 0.63403, 0.87174, 0.87158, 0.83717, 0.83751, 0.6414, 0.61986, 0.57466, 0.5745, 0.54762, 0.51992, 0.51992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11154, 0.11151, 0.11151, 0.076577, 0.076569, 0.14645, 0.039646, 0.15763, 0.11951, 0.19552, 0.19533, 0.2521, 0.20443, 0.18874, 0.16958, 0.16954, 0.16229, 0.17153, 0.17154, 0.17146, 0.20005, 0.12257, 0.12927, 0.065127, 0.062406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise médicale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.049518, 0.049717, 0.051857, 0.35393, 0.97243, 0.97183, 0.97183, 0.96841, 0.96841, 0.64545, 0.64617, 0.48361, 0.48344, 0.48362, 0, 0.29139, 0.29097, 0.29085, 0.29096, 0.29104, 0.29104, 0.28359, 0.28312, 0.37904, 0.37899, 0.57388, 0.57405, 0.57405, 0.88039, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traitement du cancer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26024, 0.26024, 0.26024, 0.26021, 0.30916, 0.30922, 0.34597, 0.34601, 0.26609, 0.26583, 0.2658, 0.17362, 0.1674, 0.16741, 0.25132, 0.25038, 0.25038, 0.2504, 0.25027, 0.24979, 0.25003, 0.25013, 0.24734, 0.24756, 0.24759, 0.43786, 0.54859, 0.47526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97144, 0.96964, 0.96991, 0.96951, 0.96951, 0.96951], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"études cliniques": {
men: [0.10864, 0.12328, 0.12323, 0.12323, 0.14288, 0.1427, 0.11489, 0.236, 0.3114, 0.31134, 0.31134, 0.34651, 0.4548, 0.50817, 0.44224, 0.48978, 0.4899, 0.4899, 0.4899, 0.39544, 0.55216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055967, 0.058109, 0.058109, 0.058103, 0.085413, 0.083624, 0.090712, 0.10282, 0.19409, 0.1939, 0.20736, 0.11971, 0.11629, 0.09726, 0, 0, 0, 0, 0.19558, 0.27146, 0.23019, 0.194, 0.21222, 0.21241, 0.20745, 0.24881, 0.26839, 0.30267, 0.30239, 0.25714, 0.25714, 0.26378, 0.094538, 0.012109, 0.013448, 0.015479, 0, 0, 0, 0, 0, 0, 0, 0, 0.017928, 0.017935, 0.028986, 0.051855, 0.053676, 0.056975, 0.0585, 0.058516, 0.053891, 0.056811, 0.057476, 0.067884, 0.037292, 0.047799, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cancer du poumon": {
men: [0.20003, 0.21033, 0.19646, 0.19646, 0.18097, 0.14246, 0.15406, 0.16583, 0.1746, 0.17601, 0.17601, 0.17105, 0.19113, 0.10588, 0.055053, 0.050708, 0.066972, 0.066972, 0.064829, 0.0744, 0.0744, 0.074071, 0.074489, 0.074981, 0.06782, 0.058454, 0.058461, 0.075562, 0.022977, 0.026117, 0, 0, 0, 0, 0, 0.012137, 0.0094514, 0.0085368, 0.0084456, 0.0089202, 0.0089221, 0.0088955, 0.0088964, 0.028666, 0.028665, 0.028665, 0.036061, 0.063744, 0.070395, 0.083425, 0.16968, 0.35668, 0.53331, 0.53324, 0.53251, 0.7322, 0.62587, 0.52497, 0.44431, 0.37397, 0.21276, 0.19229, 0.082282, 0.043131, 0.013482, 0.013489, 0.013501, 0.013502, 0.01298, 0.012995, 0.013481, 0.11572, 0.11991, 0.1247, 0.1114, 0.10124, 0.16611, 0.16611, 0.16226, 0.16212, 0.15068, 0.15068, 0.15727, 0.11099, 0.11096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10826, 0.19018, 0.18219, 0.18446, 0.18881, 0.18004, 0.18246], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cas de cancers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51539, 0.51489, 0.59569, 0.60881, 0.47074, 0.47076, 0.47064, 0.46887, 0.46887, 0.46891, 0.33432, 0.33367, 0.36318, 0.32305, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064517, 0.25596, 0.28609, 0.3283, 0.29441, 0.29781, 0.30251, 0.33342, 0.33355, 0.33364, 0.33364, 0.51084, 0.51, 0.46196, 0.41174, 0.13395, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dépistage": {
men: [0.033317, 0.033325, 0.030166, 0.031147, 0.031414, 0.036219, 0.044512, 0.052008, 0.050721, 0.06488, 0.06488, 0.011384, 0.011556, 0.0098607, 0.010647, 0.010721, 0.025121, 0.0234, 0.022788, 0.02285, 0.018561, 0.0156, 0.015182, 0.0071434, 0.0071115, 0.0071904, 0.012, 0.013231, 0.012915, 0.012135, 0.0052215, 0.0051397, 0.004418, 0.0046743, 0.0044911, 0.0062017, 0.0066116, 0.0066383, 0.0062403, 0.0061672, 0.0011822, 0.0010125, 0.00094883, 0.00091711, 0.012044, 0.012257, 0.013778, 0.029722, 0.04226, 0.13692, 0.1378, 0.1702, 0.2033, 0.20629, 0.2027, 0.24577, 0.2246, 0.23342, 0.25255, 0.25758, 0.26192, 0.25878, 0.2499, 0.16931, 0.1344, 0.09603, 0.06366, 0.05925, 0.054149, 0.022484, 0.02101, 0.015476, 0, 0, 0, 0.007372, 0.0073893, 0.0070177, 0.007629, 0.0074268, 0.014855, 0.015255, 0.015639, 0.018096, 0.019973, 0.032504, 0.053487, 0.062785, 0.065665, 0.087314, 0.091036, 0.10064, 0.10093, 0.1077, 0.10002, 0.1004, 0.11025, 0.094512, 0.07584, 0.058096, 0.037437, 0.033467, 0.032076, 0.031663, 0.031038, 0.022465, 0.0219, 0.023139, 0.023237, 0.02259], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sras": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39776, 0.066647, 0.066648, 0.066629, 0.066645, 0.066645, 0.066645, 0.06695, 0.06026, 0.059993, 0.060331, 0.065988, 0.064673, 0.064673, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25756, 0.25693, 0.25784, 0.94813, 0.94813, 0.94833, 0.93519, 0.93529, 0.93503, 0.935, 0.935, 0.93491, 0.93453, 0.061543, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"campagnes de prévention": {
men: [0.17786, 0.20054, 0.3193, 0.3193, 0.3193, 0.3957, 0.39586, 0.39593, 0.49066, 0.49057, 0.49057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.55975, 0.5359, 0.50165, 0.49989, 0.49989, 0.44878, 0.49471, 0.49367, 0.54608, 0.68576, 0.55388, 0.51665, 0.51591, 0.51569, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antigène": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013615, 0.012662, 0.010612, 0.010631, 0.010631, 0.012384, 0.011408, 0.011409, 0.010628, 0.0055107, 0.0055107, 0.0055102, 0.0058194, 0.006746, 0.085675, 0.13723, 0.25377, 0.40718, 0.40713, 0.40657, 0.43633, 0.43635, 0.47875, 0.8125, 0.8125, 0.81256, 0.81217, 0.81059, 0.82965, 0.78108, 0.75259, 0.39085, 0.3909, 0.39154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"voie orale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28237, 0.13249, 0.089188, 0.091838, 0.091838, 0.091858, 0.082447, 0.082456, 0.082433, 0.082431, 0.082431, 0.082422, 0.082389, 0.048453, 0, 0, 0, 0, 0, 0.50113, 0.53309, 0.46762, 0.4675, 0.40374, 0.40374, 0.40377, 0.3327, 0.46465, 0.4651, 0.44263, 0.44285, 0.44324, 0.42856, 0, 0, 0, 0, 0, 0, 0, 0.35854, 0.17949, 0.15977, 0.17681, 0.17665, 0.17654, 0.19086, 0.19019, 0.19019, 0.19014, 0.19035, 0.18995, 0.18989, 0.18996, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tests cliniques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9551, 0.9551, 0.95548, 0.95569, 0.95689, 0.23665, 0.23658, 0.23664, 0.23664, 0.23664, 0.23772, 0.19362, 0.19276, 0.19385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24205, 0.24214, 0.2864, 0.28677, 0.16237, 0.1623, 0.16236, 0.26928, 0.26928, 0.26985, 0.26941, 0.26945, 0.26942, 0.26983, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chlordécone": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01334, 0.01334, 0.012966, 0.011959, 0.012137, 0.08388, 0.082705, 0.07158, 0.071709, 0.071709, 0.076178, 0.085492, 0.14157, 0.14509, 0.15057, 0.15057, 0.15874, 0.1896, 0.21596, 0.043465, 0.041977, 0.066686, 0.066621, 0.056509, 0.056432, 0.050996, 0.054164, 0.067111, 0.066859, 0.066859, 0.066864, 0.06285, 0.25615, 0.32752, 0.36082, 0.361, 0.34391, 0.41773, 0.41842, 0.64546, 0.64546, 0.64485, 0.64827, 0.64827, 0.648, 0.63283, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.012225, 0.023772, 0.023772, 0.02588, 0.017317, 0.017285, 0.022961, 0.022952, 0.022952, 0.022952], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pfizer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61542, 0.61601, 0.55628, 0.60142, 0.60195, 0.62172, 0.53233, 0.50272, 0.47503, 0.47069, 0.43003, 0.43199, 0.43181, 0.3796, 0.014453, 0.011157, 0.010209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93212, 0.93295, 0.93307, 0.9346, 0.93568, 0.93568, 0.9348, 0.93976, 0.93976, 0.23402, 0.23425, 0.23519, 0.23519, 0.23527, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollutions chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94402, 0.95064, 0.95064, 0.95236, 0.95023, 0.94847, 0.94873, 0.94833, 0.94833, 0.94833], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"effet thérapeutique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27765, 0.2777, 0.27766, 0.27808, 0.27816, 0.27816, 0.27867, 0.97315, 0.97135, 0.97161, 0.97121, 0.97121, 0.97121], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"affaire Elf": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62564, 0.62571, 0.62553, 0.62552, 0.62552, 0.63222, 0.63196, 0.63207, 0.66124, 0.69388, 0.69326, 0.69259, 0.6925, 0.69156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géant pétrolier": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045058, 0.082189, 0.082189, 0.081497, 0.10763, 0.10511, 0.14498, 0.14497, 0.14727, 0.20669, 0.16677, 0.17829, 0.15017, 0.14642, 0.047144, 0, 0, 0, 0.4711, 0.43885, 0.43414, 0.43413, 0.43417, 0.44468, 0.46733, 0.45237, 0.47401, 0.45948, 0.5749, 0.58587, 0.67781, 0.54885, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"recherche sur le cancer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12429, 0.067092, 0.061282, 0.061524, 0.053308, 0.039271, 0.038806, 0.043077, 0.041847, 0.041806, 0.041806, 0.041811, 0.031574, 0.031588, 0, 0, 0, 0, 0, 0, 0.040519, 0.025681, 0.026477, 0.026524, 0.026524, 0.02653, 0.039764, 0.039768, 0.039757, 0.039756, 0.049024, 0.049019, 0.053939, 0.10747, 0.095975, 0.78631, 0.78561, 0.78484, 0.78475, 0.78367, 0.78768, 0.36146, 0.15549, 0.15491, 0.15491, 0.13016, 0.1301, 0.063771, 0.032143, 0.032957, 0.16317, 0.16332, 0.11399, 0.09677, 0.094463, 0.10156, 0.11987, 0.1205, 0.1205, 0.13573, 0.13587, 0.10633, 0.10389, 0.098336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules cancéreuses": {
men: [0.15675, 0.15675, 0.12511, 0.12511, 0.12418, 0.12402, 0.15529, 0, 0, 0, 0, 0, 0, 0, 0.1444, 0.14436, 0.18798, 0.18798, 0.16694, 0.16452, 0.15617, 0.13648, 0.1557, 0.18026, 0.18009, 0.18009, 0.18011, 0.1988, 0.0629, 0.062923, 0, 0, 0, 0, 0, 0.28947, 0.13519, 0.061849, 0.06196, 0.054677, 0.05089, 0.19336, 0.11063, 0.10554, 0.10323, 0.10422, 0.1034, 0.1419, 0.13137, 0.11376, 0.1232, 0.14531, 0.14517, 0.1534, 0.15892, 0.064603, 0.15559, 0.18469, 0.20256, 0.20256, 0.21007, 0, 0, 0, 0, 0.93212, 0.076078, 0.076087, 0.026289, 0.026319, 0.019987, 0.016658, 0.011375, 0.011375, 0.01137, 0.0098769, 0.0092461, 0.0092461, 0.0092493, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"endorphines": {
men: [0, 0, 0.9668, 0.9668, 0.52277, 0.52211, 0.52233, 0.52242, 0.5221, 0.522, 0.522, 0.52221, 0.52232, 0.52298, 0.52298, 0.44299, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies auto-immunes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13924, 0.13924, 0.15549, 0.17646, 0.2212, 0.2212, 0.22114, 0.83639, 0.83639, 0.95686, 0.96123, 0.96123, 0.95697, 0.96237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0067789, 0.0067624, 0.0065076, 0.0065192, 0.0065192, 0.0065206, 0.0064303, 0.0049845, 0.0071437, 0.0097368, 0.0097368, 0.0097358, 0.0072751, 0.011022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génome humain": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014335, 0.014348, 0.01594, 0.015966, 0.017169, 0.017169, 0.9348, 0.93976, 0.93976, 0.93936, 0.94031, 0.94408, 0.94408, 0.94441, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
