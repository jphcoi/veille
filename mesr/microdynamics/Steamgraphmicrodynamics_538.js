var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"Edward markey": {
men: [0, 0, 0, 0, 0, 0.77001, 0.81737, 0.83034, 0.82964, 0.82894, 0.82899, 0.82903, 0.82932, 0.83048, 0.83007, 0.83005, 0.83013, 0.83013, 0.8513, 0.84784, 0.87885, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96606, 0.97965, 0.97907, 0.97713, 0.97713, 0.97713, 0.97709, 0.97709, 0.97709, 0.97709, 0.97709, 0.97709, 0.97689, 0.97689, 0.98018, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fond de la mer": {
men: [0.15603, 0.24127, 0.32985, 0, 0, 0, 0.44579, 0.39536, 0.35133, 0.35529, 0.35531, 0.35532, 0.36685, 0.32558, 0.46114, 0.46113, 0.42491, 0.39394, 0.39384, 0.39439, 0.35627, 0.31543, 0.16231, 0.16269, 0.16274, 0.16277, 0.16284, 0.17298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70289, 0.70247, 0.75539, 0.73241, 0.71156, 0.76954, 0.76954, 0.79975, 0.79975, 0.79975, 0.79975, 0.81185, 0.81185, 0.81612, 0.42676, 0.39264, 0.077896, 0.071121, 0.073689, 0.074024, 0.073871, 0.073593, 0.073593, 0.073593, 0.073593, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"deepwater": {
men: [0.12805, 0.13144, 0.11131, 0.096832, 0.10176, 0.14693, 0.175, 0.22784, 0.2519, 0.26594, 0.30122, 0.32776, 0.32194, 0.31062, 0.32166, 0.3281, 0.32741, 0.32765, 0.33292, 0.30735, 0.28856, 0.20456, 0.16669, 0.13512, 0.13781, 0.13208, 0.13243, 0.11654, 0.12213, 0.11424, 0.10386, 0.10519, 0.084551, 0.075753, 0.080061, 0.079203, 0.24493, 0.28487, 0.29733, 0.34875, 0.34964, 0.33682, 0.27804, 0.28204, 0.29567, 0.29841, 0.29437, 0.29437, 0.29571, 0.29589, 0.21878, 0.13593, 0.11377, 0.018708, 0.042645, 0.04749, 0.040365, 0.055141, 0.06429, 0.063679, 0.065735, 0.063588, 0.070083, 0.067159, 0.067035, 0.079651, 0.081517, 0.10212, 0.052961, 0.088872, 0.089661, 0.068008, 0.06103, 0.062046, 0.064551, 0.068639, 0.045031, 0.051892, 0.05448, 0.05499, 0.058558, 0.058558, 0.058781, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052826, 0.054217, 0.052287, 0.050939, 0.050939, 0.049709, 0.05756, 0.051266, 0.047487, 0.049582, 0.055193, 0.056602, 0.056602], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Louisiane": {
men: [0.070372, 0.073277, 0.050862, 0.051434, 0.054705, 0.09095, 0.15577, 0.19925, 0.20364, 0.25534, 0.26724, 0.26112, 0.2721, 0.2466, 0.24823, 0.28416, 0.30125, 0.32983, 0.33277, 0.29082, 0.20639, 0.12217, 0.12423, 0.082234, 0.08747, 0.088288, 0.076249, 0.055098, 0.037643, 0.021156, 0.019935, 0.020148, 0.016879, 0.0072249, 0, 0, 0.21083, 0.21888, 0.22002, 0.21566, 0.21372, 0.23579, 0.24868, 0.25751, 0.27544, 0.2817, 0.338, 0.37313, 0.35814, 0.33643, 0.13919, 0.039654, 0.041077, 0.044268, 0.077544, 0.072795, 0.078333, 0.068941, 0.054368, 0.054163, 0.051728, 0.050041, 0.046233, 0.052629, 0.063675, 0.065863, 0.060537, 0.062187, 0.033767, 0.039346, 0.036272, 0.042977, 0.073, 0.075962, 0.086378, 0.10026, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écoulement de pétrole": {
men: [0.11075, 0.12693, 0, 0, 0, 0, 0, 0, 0.080065, 0.24322, 0.24323, 0.24324, 0.29193, 0.33651, 0.33634, 0.37658, 0.37662, 0.37662, 0.37652, 0.37705, 0.41381, 0.82557, 0.98304, 0.9794, 0.97969, 0.97991, 0.97653, 0.9716, 0.97376, 0, 0, 0, 0, 0, 0, 0, 0, 0.97653, 0.97595, 0.98612, 0.80708, 0.80708, 0.80705, 0.80705, 0.80705, 0.80705, 0.80705, 0.80705, 0.80688, 0.80688, 0.81113, 0.75709, 0.6904, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moratoire sur les forages": {
men: [0.11622, 0.12575, 0.11658, 0.090774, 0.094105, 0.098477, 0.079923, 0.07786, 0.13374, 0.074436, 0.07444, 0.074443, 0.076981, 0.082833, 0.18965, 0.18965, 0.21711, 0.78505, 0.78483, 0.78594, 0.78758, 0.9724, 0.72118, 0.72288, 0.72309, 0.72326, 0.72357, 0.7248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.64472, 0.64434, 0.64306, 0.64306, 0.64306, 0.64303, 0.64303, 0.64303, 0.53762, 0.53762, 0.53762, 0.53751, 0.40479, 0.31795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"injection de boue": {
men: [0, 0, 0, 0, 0, 0.38379, 0.3828, 0.51275, 0.49464, 0.55358, 0.55361, 0.55363, 0.56284, 0.56363, 0.56335, 0.56334, 0.57271, 0.57271, 0.57256, 0.56382, 0.56499, 0.58327, 0.64559, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97924, 0.97924, 0.98369, 0.98166, 0.97797, 0.97797, 0.97797, 0.97797, 0.97847, 0.97847, 0.97847, 0.97847, 0.97847, 0.97847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agence océanique": {
men: [0, 0, 0, 0, 0, 0.065907, 0.065736, 0.17467, 0.28051, 0.35584, 0.36414, 0.36416, 0.36429, 0.41284, 0.4422, 0.45949, 0.45953, 0.45953, 0.45941, 0.4612, 0.47614, 0.52217, 0.71657, 0.51023, 0.51038, 0.51049, 0.51071, 0.51158, 0.51271, 0.51309, 0.51309, 0.51309, 0.51392, 0.3188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98335, 0.98647, 0.98647, 0.98647, 0.98647, 0.45177, 0.45177, 0.45177, 0.45177, 0.45177, 0.45177, 0.45424, 0.45251, 0.45251, 0.29188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"côtes de Louisiane": {
men: [0.021022, 0, 0, 0, 0, 0, 0, 0.028323, 0.028299, 0.028343, 0.058582, 0.095499, 0.11143, 0.13267, 0.076771, 0.059371, 0.059377, 0.066223, 0.068354, 0.072325, 0.075049, 0, 0, 0.12338, 0.12341, 0.11895, 0.119, 0.10718, 0.17914, 0.35274, 0.35274, 0.35274, 0.35331, 0.35516, 0.30314, 0.29868, 0.29182, 0.1557, 0.1556, 0.15955, 0.15955, 0.17428, 0.17806, 0.17806, 0.17806, 0.17806, 0.17806, 0.17806, 0.15124, 0.15188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.52503, 0.52503, 0.52503, 0.52503, 0.52503, 0.52503, 0.52791, 0.5259, 0.5259, 0.52681, 0.98791, 0.98791, 0.98791, 0.98791, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"woods hole oceanographic institution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97847, 0.97847, 0.97847, 0.97847, 0.97847, 0.97847, 0.98384, 0.98008, 0.98008, 0.98178, 0.98791, 0.98791, 0.98791, 0.98791, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre la marée noire": {
men: [0.041218, 0.039455, 0.02851, 0.020256, 0.02143, 0.062413, 0.10656, 0.15794, 0.18098, 0.23069, 0.26318, 0.28403, 0.32492, 0.40357, 0.40334, 0.41153, 0.41717, 0.42393, 0.42736, 0.37791, 0.28232, 0.19925, 0.1618, 0.071066, 0.071087, 0.1303, 0.14849, 0.099136, 0.10173, 0.062157, 0.056471, 0.056471, 0.056564, 0.056859, 0.082194, 0.082194, 0.096855, 0.096503, 0.14188, 0.344, 0.33653, 0.43794, 0.43793, 0.48486, 0.75433, 0.73808, 0.73808, 0.73808, 0.73792, 0.73792, 0.80293, 0.80796, 0.89944, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pêche à la crevette": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.78904, 0.51225, 0.45804, 0.4582, 0.45885, 0.45862, 0.45861, 0.45865, 0.45865, 0.45853, 0.52808, 0.57184, 0.57412, 0.57524, 0.3829, 0.70045, 0.97271, 0.97313, 0.97478, 0.73093, 0.73146, 0.73146, 0.73146, 0.73265, 0.55262, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine de la marée noire": {
men: [0.082953, 0.064695, 0.036369, 0, 0, 0.012747, 0.058788, 0.15049, 0.16449, 0.18394, 0.25573, 0.26522, 0.2792, 0.28837, 0.28465, 0.29847, 0.31752, 0.33994, 0.37264, 0.36424, 0.32876, 0.29011, 0.27417, 0.28891, 0.34723, 0.49327, 0.44067, 0.42045, 0.46347, 0.46659, 0.66903, 0.66903, 0, 0, 0, 0, 0, 0, 0, 0.18871, 0.18871, 0.18871, 0.16548, 0.12857, 0.11684, 0.11684, 0.11684, 0.11684, 0.11682, 0.11682, 0.17572, 0.17682, 0.16784, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hausse des températures": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98335, 0.98647, 0.98647, 0.98647, 0.98647, 0.98697, 0.98697, 0.98697, 0.98697, 0.98697, 0.98697, 0.99238, 0.9886, 0.9886, 0.35405, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exxon valdez": {
men: [0.15937, 0.15231, 0.12482, 0, 0, 0.055157, 0.38289, 0.48491, 0.49628, 0.50662, 0.51839, 0.5289, 0.55919, 0.56085, 0.56057, 0.57692, 0.60677, 0.59032, 0.59016, 0.58295, 0.5548, 0.44987, 0.29215, 0.25163, 0.2517, 0.25176, 0.16563, 0.088942, 0.079083, 0, 0, 0, 0, 0, 0, 0, 0.082546, 0.12316, 0.12308, 0.12284, 0.14119, 0.16058, 0.16107, 0.16107, 0.15238, 0.15238, 0.15238, 0.12521, 0.27451, 0.19292, 0.12806, 0.094941, 0.095091, 0.067538, 0.064634, 0.063547, 0.069542, 0.064833, 0.056788, 0.056788, 0.056788, 0.065178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"soupe toxique": {
men: [0, 0, 0, 0, 0, 0.78329, 0.75823, 0.78174, 0.78108, 0.78043, 0.78047, 0.7805, 0.78078, 0.78188, 0.78148, 0.78147, 0.78155, 0.78155, 0.78134, 0.77663, 0.96214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières solides": {
men: [0, 0, 0, 0, 0, 0.16205, 0.32064, 0.37475, 0.41361, 0.4229, 0.4599, 0.57897, 0.59588, 0.73076, 0.7304, 0.73038, 0.74226, 0.78515, 0.79858, 0.78607, 0.73129, 0.97158, 0.96284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"questions énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0.26668, 0.38817, 0.38785, 0.38787, 0.38788, 0.46224, 0.52266, 0.5224, 0.57152, 0.57158, 0.57158, 0.64421, 0.63382, 0.63514, 0.9488, 0.94317, 0.44201, 0.39186, 0.39195, 0.29538, 0.17929, 0.16559, 0.11167, 0.11167, 0.11167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"difficultés respiratoires": {
men: [0, 0, 0, 0, 0, 0, 0.73735, 0.71308, 0.71248, 0.71188, 0.71192, 0.71195, 0.63329, 0.63418, 0.67399, 0.67398, 0.67404, 0.65394, 0.65377, 0.65469, 0.57288, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux du golfe": {
men: [0.0066383, 0.0066433, 0.0069528, 0.0069655, 0.0088342, 0.010608, 0, 0.034882, 0.038839, 0.066935, 0.075768, 0.10873, 0.073213, 0.084634, 0.086028, 0.077509, 0.077516, 0.077516, 0.063013, 0.05619, 0.053585, 0.015166, 0.01573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12924, 0.34939, 0.3768, 0.37605, 0.35158, 0.37248, 0.34808, 0.3743, 0.3743, 0.3743, 0.3743, 0.40796, 0.40787, 0.40787, 0.34256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.099679, 0.099679, 0.099679, 0.12019, 0.154, 0.154, 0.154, 0.98558, 0.98558, 0.98558, 0.98558, 0.98558, 0.98558], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"large de la Louisiane": {
men: [0.11273, 0.11126, 0.11152, 0.11173, 0.11173, 0.11511, 0.12373, 0.14812, 0.15661, 0.15648, 0.16374, 0.16374, 0.2069, 0.063986, 0, 0, 0, 0, 0.12843, 0.13458, 0.14679, 0.1344, 0.13467, 0.12563, 0.12566, 0.12569, 0.12575, 0.1028, 0.093445, 0.08926, 0.099858, 0.11745, 0, 0, 0, 0, 0.019794, 0.013326, 0.013318, 0.013291, 0.013291, 0.015019, 0.016192, 0.016868, 0.016868, 0.016868, 0.016868, 0.016868, 0.016864, 0.016864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0.48722, 0.37259, 0.37259, 0.37259, 0.37259, 0.37259, 0.20882], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"colmatage de la fuite": {
men: [0.016597, 0.01661, 0.020011, 0.019362, 0.024661, 0.026131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915, 0.72915], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nettoyage des plages": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.16419, 0.16405, 0.16406, 0.16407, 0.28546, 0.37893, 0.41978, 0.49474, 0.49479, 0.49479, 0.49466, 0.49536, 0.49639, 0.86767, 0.9771, 0.9794, 0.97969, 0.97991, 0.97653, 0.9716, 0.50367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dôme de confinement": {
men: [0.024485, 0.014964, 0, 0, 0, 0, 0, 0.03186, 0.08393, 0.076351, 0.081014, 0.081017, 0.12208, 0.16044, 0.16036, 0.19658, 0.1966, 0.1966, 0.213, 0.22402, 0.33023, 0.56176, 0.54135, 0.9794, 0.97969, 0.97991, 0.97653, 0.9716, 0.97376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fermeture du puits": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95697, 0.95697, 0.95697, 0.95697, 0.95697, 0.95697, 0.95678, 0.95678, 0.96181, 0.96783, 0.96935, 0.38258, 0.38026, 0.38026, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc obturateur": {
men: [0.071559, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23913, 0.26924, 0.45169, 0.44495, 0.43813, 0.45231, 0.45231, 0.47498, 0.47498, 0.47498, 0.47498, 0.49667, 0.52139, 0.61455, 0.66758, 0.80594, 0.45629, 0.54798, 0.70016, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surface de l' eau": {
men: [0.3281, 0.34028, 0.2711, 0.22041, 0.31396, 0.31284, 0.2925, 0.3427, 0.33826, 0.33798, 0.338, 0.33801, 0.35171, 0.13985, 0.10518, 0.10518, 0.1233, 0.1278, 0.10033, 0.10047, 0.090918, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56593, 0.61865, 0.62147, 0.62019, 0.61785, 0.4401, 0.27104, 0.24352, 0.24365, 0.27532, 0.27532, 0.27532, 0.27532, 0.27532, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"garde-côtes américains": {
men: [0.19677, 0.18453, 0.15426, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074401, 0.074506, 0.074469, 0.11812, 0.15539, 0.15539, 0.17014, 0.17038, 0.2744, 0.27549, 0.27602, 0.96836, 0.96865, 0.96887, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32272, 0.3266, 0.3264, 0.32576, 0.32576, 0.32576, 0.32908, 0.33994, 0.3487, 0.3487, 0.3487, 0.35274, 0.37431, 0.37431, 0.32759, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"puits de pétrole": {
men: [0.026392, 0.027635, 0.029202, 0.030747, 0.038982, 0.10591, 0.14267, 0.1599, 0.15843, 0.17101, 0.17796, 0.19546, 0.2037, 0.19613, 0.19505, 0.19866, 0.2003, 0.19723, 0.20489, 0.18626, 0.18059, 0.18455, 0.20439, 0.14546, 0.17247, 0.18402, 0.1803, 0.14367, 0.14399, 0.10058, 0.10563, 0.15397, 0, 0, 0, 0, 0.27, 0.14316, 0.069166, 0.19006, 0.19006, 0.19275, 0.18846, 0.18205, 0.17859, 0.17859, 0.17503, 0.17503, 0.17499, 0.17157, 0.13082, 0.10912, 0.1295, 0, 0.040059, 0.040061, 0.040397, 0.040654, 0.040845, 0.040845, 0.04147, 0.041194, 0.041215, 0.041355, 0.0485, 0.060141, 0.066496, 0.11031, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.080423, 0.080423, 0.080423, 0.078882, 0.078882, 0.078882, 0.078882, 0.078882, 0.078882, 0.078882, 0.13702, 0.14605, 0.15498], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
