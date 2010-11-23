var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"équipements photovoltaïques": {
men: [0, 0, 0.98982, 0.98982, 0.98982, 0.99108, 0.99108, 0.99108, 0.99108, 0.99349, 0.99349, 0.99349, 0.9967, 0.99831, 0.99831, 0.99703, 0.99732, 0.99732, 0.99732, 0.99732, 0.99732, 0.99732, 0.99732, 0.99732, 0.99732, 0.99732, 0.42742, 0.10561, 0.079888, 0.079917, 0.079917, 0.079917, 0.079851, 0.079851, 0.079784, 0.079784, 0.079665, 0.079665, 0.07964, 0.07964, 0.087663, 0, 0, 0, 0.96685, 0.96685, 0.96738, 0.96738, 0.968, 0.57601, 0.31876, 0.31876, 0.31886, 0.31886, 0.32139, 0.32212, 0.32447, 0.32447, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie photovoltaïque": {
men: [0.21975, 0.22083, 0.29171, 0.29171, 0.28373, 0.22504, 0.22504, 0.5557, 0.5557, 0.34656, 0.34656, 0.34656, 0.75566, 0.7512, 0.7512, 0.75023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61397, 0.61397, 0.61305, 0.61305, 0.61286, 0.61286, 0.61044, 0.97268, 0.9731, 0.9731, 0.972, 0.972, 0.97253, 0.97253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98035, 0.97931, 0.1305, 0.13035, 0.13035, 0.13035, 0.11782, 0.11829, 0.11866, 0.11866, 0.11866, 0.11866, 0.14788, 0.2733, 0.18502, 0.23063, 0.52826, 0.52957, 0.52779, 0.52779, 0.62912, 0.62796, 0.62796, 0.62796, 0.62796, 0.62796, 0.71704, 0.41954, 0.97893, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"électricité photovoltaïque": {
men: [0.24549, 0.086141, 0.066216, 0.066216, 0.05481, 0.049653, 0.05488, 0.057929, 0.052231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22074, 0.26992, 0.2647, 0.2647, 0.2708, 0.29158, 0.29158, 0.30288, 0.26303, 0.25339, 0.25339, 0.25102, 0.24114, 0.26465, 0.21099, 0.10378, 0.10659, 0.17182, 0.17182, 0.14077, 0.14077, 0.10325, 0.1327, 0.14431, 0.14431, 0.14765, 0.16467, 0.18153, 0.19593, 0.38571, 0.34536, 0, 0, 0, 0, 0.16451, 0.29754, 0.28411, 0.28411, 0.28411, 0.28411, 0.28411, 0.37228, 0.42138, 0.48156, 0.49901, 0.53669, 0.49224, 0.52873, 0.4922, 0.51228, 0.4397, 0.34071, 0.34071, 0.34071, 0.34001, 0.22633, 0.1765, 0.1305, 0.10329, 0.030168, 0.033361, 0.018293, 0.013929, 0.011434, 0.011661, 0.01229, 0.01229, 0.011779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur photovoltaïque": {
men: [0.50493, 0.50741, 0.39237, 0.39237, 0.39237, 0.12553, 0.12553, 0.13481, 0.13481, 0.061782, 0.061782, 0.061782, 0.061982, 0.061616, 0.061616, 0.11057, 0.064514, 0.064514, 0.064514, 0.98563, 0.98563, 0.98563, 0.98563, 0.98563, 0.98563, 0.98563, 0.37548, 0.082021, 0.08174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052556, 0.13242, 0.13248, 0.13248, 0.13233, 0.13233, 0.1324, 0.1324, 0.252, 0.25193, 0.25227, 0.25227, 0.25236, 0.96354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"choix énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3105, 0.3105, 0.98326, 0.98146, 0.98146, 0.98146, 0.98146, 0.98146, 0.98209, 0.98316, 0.98316, 0.98717, 0.98717, 0.98717, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations photovoltaïques": {
men: [0.12689, 0.12861, 0.1152, 0.1152, 0.1152, 0.11635, 0.12384, 0.13731, 0.14135, 0.076636, 0.076636, 0.076636, 0.042242, 0.047881, 0.053998, 0.058265, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15185, 0.15322, 0.19242, 0.14143, 0.14822, 0.14704, 0.14712, 0.14174, 0.14271, 0.13764, 0.14015, 0.14015, 0.1402, 0.1402, 0.033031, 0.037099, 0.039099, 0.074496, 0.033672, 0.031899, 0.029941, 0.031431, 0.09334, 0.19757, 0.25741, 0.23592, 0.23592, 0.23592, 0.1886, 0.18187, 0.20406, 0.20091, 0.21189, 0.22334, 0.23399, 0.24814, 0.21553, 0.17237, 0.071149, 0.082154, 0.082154, 0.082154, 0.12242, 0.13949, 0, 0.12686, 0.11869, 0.11899, 0.19991, 0.15372, 0.16314, 0.15443, 0.17809, 0.17809, 0.17809, 0.17809, 0.20581, 0.20603, 0.19481, 0.12251, 0.12839, 0.12018, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.261, 0.261, 0.26061, 0.26061, 0.26053, 0.26053, 0.2595, 0.26034, 0.59883, 0.9731, 0.972, 0.972, 0.97253, 0.97253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1512, 0.15102, 0.15102, 0.089109, 0.1217, 0.14511, 0.17916, 0.17916, 0.17916, 0.17916, 0.17899, 0.17861, 0.17897, 0.1786, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bilan énergétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47109, 0.47263, 0.42906, 0.42906, 0.40902, 0.40902, 0.40925, 0.39704, 0.43791, 0.48051, 0.40626, 0.40626, 0.4064, 0.4064, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.041242, 0.055081, 0.069698, 0.28967, 0.28967, 0.27098, 0.27098, 0.27098, 0.30322, 0.30355, 0.16075, 0.16141, 0.16141, 0.16141, 0.12751, 0.12684, 0.07303, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergies vertes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052763, 0.066022, 0.066022, 0.058222, 0.036554, 0.036554, 0.041678, 0.047035, 0.047035, 0.049301, 0.049301, 0.049301, 0.27325, 0.37851, 0.38598, 0.38425, 0.38425, 0.44371, 0.60679, 0.60628, 0.63238, 0.61514, 0.61514, 0.61495, 0.61495, 0.54643, 0.46121, 0.19686, 0.18235, 0.1294, 0.1294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"questions énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16806, 0.23245, 0.23602, 0.23602, 0.23602, 0.3214, 0.32532, 0.32505, 0.32505, 0.32456, 0.49864, 0.57246, 0.50824, 0.61111, 0.56862, 0.38647, 0.502, 0.39468, 0.39468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ferme éolienne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23977, 0.31803, 0.31803, 0.31803, 0.31776, 0.52813, 0.52769, 0.52769, 0.5269, 0.5269, 0.39574, 0.39574, 0.39418, 0.39546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie solaire": {
men: [0.049856, 0.051089, 0.038383, 0.03921, 0.034993, 0.030663, 0.03063, 0.030466, 0.031641, 0.039527, 0.03951, 0.03951, 0.019147, 0.020149, 0.021186, 0.038243, 0.022936, 0.021986, 0.026823, 0.025213, 0.023794, 0.026137, 0.025266, 0.025266, 0.02595, 0.02595, 0.027672, 0.08205, 0.16363, 0.15298, 0.15298, 0.13473, 0.15253, 0.16205, 0.15279, 0.14828, 0.13942, 0.13641, 0.1329, 0.1329, 0.10684, 0.088145, 0.041169, 0.039671, 0.046985, 0.049738, 0.033073, 0.033636, 0.035217, 0.040588, 0.036434, 0.036658, 0.036873, 0.036676, 0.031294, 0.029228, 0.02166, 0.021811, 0.010748, 0.01104, 0.011511, 0.010237, 0.010017, 0, 0, 0, 0, 0, 0, 0, 0.018278, 0.017818, 0.016852, 0.0162, 0.01558, 0.015156, 0.01389, 0.014152, 0.015172, 0.015009, 0.015042, 0.015042, 0.015879, 0.016705, 0, 0, 0, 0, 0.023197, 0.027143, 0.026378, 0.048289, 0.043206, 0.037756, 0.037756, 0.037486, 0.035566, 0.03443, 0.034219, 0.033934, 0.031492, 0.03072, 0.016075, 0.01539, 0.018236, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.043989, 0.039404, 0.045097, 0.045097, 0.045046, 0.045046, 0.051366, 0.055821, 0.053931, 0.05767, 0.057749, 0.057749, 0.057769, 0.065203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14978, 0.14061, 0.28081, 0.34028, 0.33987, 0.33987, 0.33987, 0.27402, 0.28961, 0.36558, 0.36558, 0.36558, 0.36558, 0.52763, 0.4501, 0.48342, 0.32232, 0.1839, 0.18436, 0.18374, 0.11459, 0.073248, 0.062393, 0.067146, 0.052603, 0.052603, 0.052603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.031946, 0.030735, 0.124, 0.15762, 0.15743, 0.1685, 0.15423, 0.14904, 0.13646, 0.19142, 0.17454, 0.17454, 0.19019, 0.22278, 0.1986, 0.21689, 0.12261, 0.055349, 0.055486, 0.0553, 0.057533, 0.05635, 0.12733, 0.14636, 0.15325, 0.15325, 0.15325, 0.069942, 0.070018, 0.070018, 0.075984, 0.075984, 0.075984, 0.076406, 0.073121, 0.099199, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque majeur": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.047848, 0.049336, 0.11039, 0.14092, 0.14075, 0.14075, 0.22087, 0.22544, 0.20133, 0.24587, 0.24587, 0.33006, 0.33006, 0.27291, 0.20899, 0.22727, 0.10624, 0.053196, 0.053328, 0.053149, 0.053149, 0.057235, 0.047291, 0.045278, 0.045278, 0.046669, 0.046669, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"photovoltaïque": {
men: [0.032076, 0.031355, 0.047168, 0.046814, 0.045272, 0.042097, 0.051865, 0.067833, 0.07257, 0.056554, 0.056554, 0.058506, 0.06243, 0.11982, 0.18384, 0.18604, 0.099673, 0.097799, 0.10974, 0.10579, 0.10579, 0.10579, 0.069702, 0.072066, 0.065333, 0.065333, 0.049317, 0.048711, 0.052501, 0.048317, 0.050622, 0.050582, 0.05054, 0.051366, 0.063334, 0.061392, 0.07091, 0.069607, 0.067676, 0.06611, 0.14317, 0.13165, 0.14704, 0.131, 0.13748, 0.13875, 0.13883, 0.13979, 0.12764, 0.12708, 0.1263, 0.12527, 0.13765, 0.13826, 0.061115, 0.071878, 0.034457, 0.044767, 0, 0, 0, 0, 0.035237, 0.052281, 0.041624, 0.041601, 0.040945, 0.041542, 0.045268, 0.055895, 0.066862, 0.07888, 0.084203, 0.097254, 0.097825, 0.11129, 0.0586, 0.04313, 0.049219, 0.049032, 0.049694, 0.050244, 0.05425, 0.048656, 0.035898, 0.026565, 0.020262, 0.005551, 0.022874, 0.020868, 0.030615, 0.063694, 0.056495, 0.055955, 0.055955, 0.055517, 0.048958, 0.042037, 0.043607, 0.04031, 0.038346, 0.039079, 0.018658, 0.024798, 0.026567, 0, 0.086217, 0.086458, 0.086458, 0.087386], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules photovoltaïques": {
men: [0.163, 0.23863, 0.52366, 0.43384, 0.43384, 0.43439, 0.43439, 0.43439, 0.71191, 0.29667, 0.29667, 0.29667, 0.15144, 0.15055, 0.15055, 0.15035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12522, 0.096014, 0.10589, 0.10589, 0.10589, 0.087103, 0.098281, 0.15885, 0.183, 0.183, 0.183, 0.18402, 0.18305, 0.14086, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet solaire": {
men: [0.096521, 0.10755, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026758, 0.0237, 0.0237, 0.023673, 0.023673, 0.023686, 0.022338, 0.020532, 0.023282, 0.023314, 0.023918, 0.023926, 0.023926, 0.030821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098596, 0.11231, 0.23202, 0.2853, 0.28496, 0.28496, 0.2122, 0.15708, 0.1071, 0.11627, 0.1296, 0.1296, 0.1296, 0.15255, 0.11673, 0.11698, 0.10647, 0.077022, 0.077213, 0.14041, 0.15453, 0.17544, 0.31034, 0.31034, 0.27139, 0.27139, 0.27139, 0.27728, 0.27759, 0.24772, 0.20113, 0.18976, 0.18976, 0.10882, 0.12451, 0.14926, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10647, 0.076943, 0.076971, 0.076971, 0.080117, 0.08005, 0.077367, 0.074149, 0.074149, 0.074038, 0.074038, 0.074015, 0.074015, 0.057269, 0, 0, 0, 0.069244, 0.069244, 0.069282, 0.074801, 0.083269, 0.083243, 0.083357, 0.083357, 0.083385, 0.083385, 0.97704, 0.97925, 0.9864, 0.2877, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24983, 0.24929, 0.24981, 0.12321, 0.078147, 0.07834, 0.078077, 0.063318, 0.063318, 0.063202, 0.077934, 0.077934, 0.077934, 0.077934, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"erdf": {
men: [0.05543, 0.05737, 0.064347, 0.05821, 0.065968, 0.061078, 0.077646, 0.090442, 0.07927, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10804, 0.10767, 0.12521, 0.12521, 0.10902, 0.12511, 0.14014, 0.13187, 0.086583, 0.077083, 0.070116, 0.070094, 0.060071, 0.03379, 0.045806, 0.039208, 0.037781, 0.036018, 0.036882, 0.036902, 0.034233, 0.033405, 0.035375, 0.031174, 0.031376, 0.031387, 0.032719, 0.038886, 0, 0, 0, 0, 0, 0, 0, 0.058243, 0.15211, 0.20358, 0.21136, 0.21136, 0.20259, 0.19737, 0.18687, 0.18659, 0.1864, 0.25683, 0.25653, 0.25653, 0.28474, 0.25195, 0, 0, 0, 0, 0, 0.051676, 0.060948, 0.061074, 0.060946, 0.070391, 0.070565, 0.070328, 0.038286, 0.015789, 0.01429, 0.014275, 0.014843, 0.014843, 0.014627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surcoûts pour les consommateurs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38833, 0.37044, 0.35681, 0.35681, 0.3564, 0.3564, 0.3566, 0.3566, 0.35682, 0.35671, 0.3572, 0.3572, 0.73277, 0.80438, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière industrielle": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18814, 0.18814, 0.18786, 0.18786, 0.28352, 0.22481, 0.1818, 0.35368, 0.38169, 0.33014, 0.33956, 0.33956, 0.33974, 0.31328, 0.2538, 0.25373, 0.23625, 0.23625, 0.1958, 0.21889, 0.27359, 0.095223, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.035664, 0.015729, 0.01552, 0.013383, 0.012494, 0.012494, 0.012494, 0.012212, 0.011558, 0.013618, 0.012006, 0.012055, 0.011864, 0.011864, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emplois verts": {
men: [0.079359, 0.085424, 0.096487, 0.096487, 0.096487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29292, 0.29305, 0.29305, 0.26535, 0.26535, 0.26549, 0.3033, 0.21921, 0.21914, 0.20166, 0.20166, 0.24876, 0.24876, 0.30982, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bei": {
men: [0, 0, 0.035173, 0.030111, 0.030111, 0.03502, 0.03502, 0.037602, 0.039568, 0.039665, 0.039841, 0.039841, 0.03997, 0.13888, 0.30196, 0.26399, 0.16366, 0.52799, 0.52799, 0.42269, 0.42269, 0.42269, 0.42269, 0.15682, 0.15682, 0.15682, 0.15682, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.05591, 0.11583, 0.10835, 0.10398, 0.11234, 0.11583, 0.11583], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière solaire": {
men: [0.21546, 0.16037, 0.2939, 0.2939, 0.2939, 0.18301, 0.13762, 0.16258, 0.16258, 0.16298, 0.16298, 0.16298, 0.23953, 0.23812, 0.23812, 0.354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.086558, 0.086558, 0.08646, 0.08646, 0.086507, 0.086507, 0.086562, 0.12608, 0.10277, 0.10277, 0.1028, 0.12897, 0.13, 0.16286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barrages hydroélectriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.072781, 0.072844, 0.073025, 0.072779, 0.072779, 0.074045, 0.073909, 0.073909, 0.97724, 0.97724, 0.97724, 0.97787, 0.12769, 0.12769, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prix de l' électricité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03738, 0.041468, 0.048456, 0.073328, 0.074329, 0.081448, 0.1088, 0.1136, 0.11944, 0.11926, 0.11926, 0.20082, 0.20082, 0.14792, 0.12585, 0.10676, 0.10676, 0.10664, 0.12907, 0.12914, 0.12914, 0.050651, 0.053086, 0.05167, 0.05167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11313, 0.14191, 0.14174, 0.13918, 0.11913, 0.14396, 0.1275, 0.1279, 0.12208, 0.14923, 0.14269, 0.14889, 0.14857, 0.16665, 0.063864, 0, 0, 0, 0, 0, 0.0060713, 0.0050998, 0.0050735, 0.0049362, 0.0049355, 0.0049386, 0.0047161, 0.004715, 0.0043407, 0.0043407, 0.0042923, 0.005141, 0.0076385, 0.0094296, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeux financiers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47319, 0.33747, 0.33736, 0.33736, 0.33603, 0.33712, 0.27756, 0.26329, 0.24562, 0.22961, 0.22974, 0.22974, 0.22988, 0.2531, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Christian Jacob": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29338, 0.24733, 0.24794, 0.24711, 0.24711, 0.24711, 0.30722, 0.22863, 0.22863, 0.22863, 0.22863, 0.22878, 0.22902, 0.22902, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
