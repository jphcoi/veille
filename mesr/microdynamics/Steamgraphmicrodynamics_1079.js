var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"biofuels": {
men: [0.50244, 0.3882, 0.38805, 0.3879, 0.38757, 0.38733, 0.14923, 0.14917, 0.4595, 0.45988, 0.45994, 0.45998, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96555, 0.96364, 0.96374, 0.96358, 0.96246, 0.96243, 0.96268, 0.96141, 0.96184, 0.96148, 0.96148, 0.96546, 0.96498, 0.96802, 0.96394, 0.96519, 0.9655, 0.96571, 0.96745, 0.96745, 0.96542, 0.96702, 0.96665, 0.9669, 0.967, 0.96115, 0.97077, 0.96435, 0.96347, 0.96281, 0.96295, 0.96262, 0.96255, 0.96212, 0.42798, 0.42789, 0.42857, 0.42843, 0.42847, 0.4284, 0, 0.23876, 0.23904, 0.23739, 0.23741, 0.23747, 0.23729, 0.23742, 0.50392, 0.50399, 0.50359, 0.50356, 0.5035, 0.50352, 0.5026, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9549, 0.95483, 0.95436, 0.95486, 0.95448, 0.95456, 0.9544], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"huile végétale": {
men: [0.17073, 0.26722, 0.26194, 0.3023, 0.30306, 0.23466, 0.23461, 0.25895, 0.39037, 0.44647, 0.38593, 0.38596, 0.43218, 0.43204, 0.40347, 0.27892, 0.28558, 0.26465, 0.28478, 0.40581, 0.40608, 0.4054, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16824, 0.16816, 0.16818, 0.1683, 0.27886, 0.61414, 0.61428, 0.61538, 0.96, 0.68346, 0.51914, 0.51894, 0.51907, 0.58235, 0.41706, 0.37024, 0.37003, 0.30335, 0.30314, 0.30318, 0.30308, 0.30306, 0.30292, 0.33807, 0.43801, 0.23657, 0.23649, 0.18636, 0.18633, 0.19505, 0.19516, 0.21445, 0.16476, 0.16478, 0.16482, 0.1647, 0.16478, 0.035455, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076153, 0.076172, 0.076186, 0.076195, 0.10266, 0.099504, 0.29, 0.51965, 0.5196, 0.52131, 0.52141, 0.52145, 0.75789, 0.64518, 0.54243, 0.60955, 0.60955, 0.60955, 0.60921, 0.62829, 0.62799, 0.58203, 0.57006, 0.5701, 0.57001], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"butanol": {
men: [0.96665, 0.96913, 0.96877, 0.96838, 0.96775, 0.96068, 0.96048, 0.96006, 0.96019, 0.93044, 0.93056, 0.93063, 0.93329, 0.93298, 0.93415, 0.93289, 0.93358, 0.93422, 0, 0, 0, 0.64885, 0.64757, 0.88812, 0.88797, 0.88693, 0.8869, 0.88714, 0.88597, 0.88636, 0.88603, 0.88603, 0.8865, 0.88607, 0.88617, 0.9771, 0.97836, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"canne à sucre": {
men: [0.45379, 0.5376, 0.48103, 0.39123, 0.39089, 0.53039, 0.42688, 0.42669, 0.42675, 0.4271, 0.42716, 0.42719, 0.62851, 0.42756, 0.50571, 0.239, 0.19245, 0.172, 0.13157, 0, 0, 0, 0, 0.037449, 0.037442, 0.037399, 0.034763, 0.035261, 0.028798, 0.31495, 0.27293, 0.28358, 0.31958, 0.39894, 0.38864, 0.40621, 0.43251, 0.41919, 0.41928, 0.42003, 0.44214, 0.44519, 0.53445, 0.25837, 0.47856, 0.51672, 0.51678, 0.19364, 0.26755, 0.13379, 0.1337, 0.10997, 0.14451, 0.13315, 0.12996, 0.092982, 0.12508, 0.093271, 0.07967, 0.039207, 0.037373, 0.037388, 0.031425, 0.039573, 0.039299, 0.040011, 0.024069, 0.024966, 0.025275, 0.030027, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14245, 0.14214, 0.48631, 0.48624, 0.69139, 0.86117, 0.86165, 0.72255, 0.72268, 0.6074, 0.60866, 0.30545, 0.24829, 0.24825, 0.21891, 0.21963, 0.03981, 0.039813, 0, 0.10891, 0.099677, 0.10499, 0.10499, 0.11209, 0.091664, 0.092712, 0.19668, 0.17866, 0.16037, 0.16038, 0.18332], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"algues": {
men: [0.13663, 0.065025, 0.076088, 0.076971, 0.077557, 0.067609, 0.063482, 0.06867, 0.072641, 0.028873, 0.028942, 0.021382, 0.020394, 0.044509, 0.044138, 0.15631, 0.15034, 0.16515, 0.24853, 0.2429, 0.27181, 0.2718, 0.27102, 0.26894, 0.2456, 0.34688, 0.37449, 0.53709, 0.54736, 0.45863, 0.46908, 0.4546, 0.36873, 0.46672, 0.48826, 0.48766, 0.50084, 0.5384, 0.63971, 0.44316, 0.46116, 0.46477, 0.48908, 0.64256, 0.66228, 0.68704, 0.67474, 0.59315, 0.52831, 0.48552, 0.45048, 0.1626, 0.13364, 0.12458, 0.10494, 0.14655, 0.14939, 0.07165, 0.050973, 0.046025, 0.057659, 0.0548, 0.064042, 0.068095, 0.070733, 0.1201, 0.15393, 0.17531, 0.18895, 0.0877, 0.085706, 0.10904, 0.11686, 0.11685, 0.0759, 0.098593, 0.059037, 0.041626, 0.0090926, 0, 0, 0, 0, 0.014237, 0.013746, 0.013998, 0.012486, 0.011547, 0.010753, 0.010776, 0.010765, 0.010771, 0.21806, 0.22235, 0.26364, 0.26369, 0.27881, 0.36052, 0.50449, 0.40617, 0.44318, 0.4799, 0.54516, 0.54486, 0.49155, 0.49131, 0.29136, 0.30143, 0.30145, 0.279], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chimie verte": {
men: [0.75195, 0.96736, 0.72525, 0.72496, 0.72435, 0.57513, 0.575, 0.57475, 0.57483, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033051, 0.033094, 0.033181, 0.033188, 0.033248, 0.019164, 0.019124, 0.019156, 0.019148, 0.027784, 0.027787, 0.02779, 0.020246, 0.027293, 0.61313, 0.7374, 0.7375, 0.73725, 0.7372, 0.86937, 0.87012, 0.86994, 0.87133, 0.87105, 0.87112, 0.87097, 0.9789, 0.97946, 0.82967, 0, 0, 0, 0, 0, 0.34952, 0.34956, 0.34929, 0.34927, 0.34922, 0.34924, 0.3486, 0.34863, 0.56305, 0.566, 0.5658, 0.56453, 0.56495, 0.56487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.070092, 0.070097, 0.073324], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biologie synthétique": {
men: [0, 0, 0, 0, 0.9307, 0.93014, 0.92994, 0.94678, 0.94691, 0.94769, 0.94782, 0.94789, 0.9506, 0.95029, 0.38249, 0.38197, 0.38225, 0.38251, 0.34301, 0.34297, 0.3432, 0.46828, 0.46736, 0.46611, 0.50168, 0.50109, 0.50107, 0.50121, 0.33308, 0.33323, 0.33311, 0.3331, 0.33328, 0.33312, 0.33316, 0.075364, 0.042727, 0.042839, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075724, 0.075763, 0.075806, 0.075825, 0.075839, 0.075847, 0.076004, 0.075931, 0.075968, 0.075955, 0.075947, 0.076197, 0.076212, 0.94727, 0, 0, 0, 0.95986, 0.95986, 0.58277, 0.24937, 0.24834, 0.2142, 0.21431, 0.21422, 0.21424, 0.2142], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cultures énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51108, 0.50971, 0.50962, 0.50903, 0.50901, 0.50915, 0.50848, 0.5087, 0.50852, 0.50851, 0.50879, 0.2813, 0.17085, 0.15104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23018, 0.23055, 0.23048, 0.23049, 0.23046, 0.23055, 0.23068, 0.23096, 0.22936, 0.22938, 0.22944, 0.22927, 0.22939, 0.94349, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45827, 0.45736, 0.45708, 0.45708, 0.45708, 0.50305, 0.54392, 0.54366, 0.83165, 0.83133, 0.83139, 0.83125], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surface agricole": {
men: [0, 0, 0, 0, 0, 0, 0.0469, 0.056634, 0.06322, 0.052841, 0.052848, 0.051103, 0.046855, 0.046972, 0.059157, 0.066239, 0.087511, 0.087571, 0.087569, 0.087557, 0, 0, 0, 0, 0, 0, 0, 0, 0.3273, 0.27505, 0.15309, 0.13959, 0.13407, 0.12885, 0.11916, 0.11525, 0.1154, 0.11786, 0.11789, 0.10323, 0.10323, 0.088653, 0, 0.18255, 0.26029, 0.24829, 0.25918, 0.27159, 0.23706, 0.21944, 0.21929, 0.21932, 0.24354, 0.28555, 0.29268, 0.36067, 0.36059, 0.087326, 0.087297, 0.064648, 0.064637, 0.064663, 0.061571, 0.035679, 0.022879, 0.022881, 0.01428, 0.013539, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20708, 0.37347, 0.37334, 0.3725, 0.49029, 0.49023, 0.49043, 0.51401, 0.3977, 0.31886, 0.31892, 0.31896, 0.34437, 0.32405, 0.091325, 0.14377, 0.14376, 0.13945, 0.063966, 0.061298, 0.061163, 0.05739, 0.0707, 0.12433, 0.12433, 0.12433, 0.15348, 0.21776, 0.28205, 0.20433, 0.35958, 0.38419, 0.38412], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"comestibles": {
men: [0.10214, 0.1024, 0.10237, 0.10233, 0.11132, 0.12869, 0.11994, 0.13181, 0.13182, 0.14951, 0.14953, 0.14954, 0, 0, 0, 0.36725, 0.36753, 0.33929, 0.33929, 0.38, 0.30486, 0.25817, 0.25766, 0.27001, 0.26997, 0.23664, 0.24821, 0.31248, 0.27633, 0, 0.13225, 0.14325, 0.14332, 0.14325, 0.20451, 0.29462, 0.29501, 0.42557, 0.42567, 0.61892, 0.61892, 0.61762, 0.67489, 0.67463, 0.48008, 0.48013, 0.48019, 0.42161, 0.42137, 0.42099, 0.33419, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30241, 0.30244, 0.27762], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduire la dépendance": {
men: [0, 0.178, 0.17793, 0.17786, 0.17771, 0.1776, 0.1663, 0.13486, 0.16005, 0.075578, 0.075588, 0.081763, 0.08587, 0.078432, 0.080944, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37567, 0.3757, 0.37564, 0.43175, 0.432, 0.45511, 0.38723, 0.40568, 0.42545, 0.62679, 0.39698, 0.37428, 0.37433, 0.27792, 0, 0, 0, 0, 0, 0.13413, 0.45448, 0.34591, 0.34513, 0.34539, 0.4138, 0.42812, 0.33899, 0.40487, 0.40497, 0.40504, 0.38817, 0.4104, 0.46684, 0.41712, 0.12977, 0.12358, 0.10088, 0.1009, 0.10091, 0.10069, 0.13217, 0.13191, 0.13183, 0.13183, 0.13952, 0.13944, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cultures conventionnelles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12296, 0.21954, 0.21954, 0.21959, 0.2193, 0.2194, 0.21932, 0.21932, 0.21944, 0.21933, 0.93383, 0.93451, 0.93572, 0.93818, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5786, 0.57854, 0.58045, 0.58055, 0.5806, 0.57125, 0.5702, 0.56907, 0.56872, 0.56872, 0.56872, 0.5684, 0.56606, 0.56579, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins alimentaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046666, 0.04666, 0.07436, 0.32644, 0.48722, 0.48592, 0.48584, 0.48527, 0.30987, 0.30995, 0.30954, 0.30968, 0.30957, 0.30956, 0.18405, 0.18396, 0.18398, 0.18412, 0, 0, 0, 0, 0, 0.28271, 0.22849, 0.2284, 0.22846, 0.22848, 0.22851, 0.22898, 0.47608, 0.47565, 0.31536, 0.31541, 0.3153, 0.31527, 0.31513, 0.33021, 0.38077, 0.38138, 0.33678, 0.33681, 0.33675, 0.33688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11944, 0.11947, 0.12346, 0.12347, 0.12373, 0.12361, 0.14521, 0.11884, 0.13859, 0.13905, 0.13907, 0.20167, 0.20123, 0.20086, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pluies de printemps": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95556, 0.95468, 0.95403, 0.95417, 0.95384, 0.95377, 0.95334, 0.95417, 0.95396, 0.95549, 0.95518, 0.95526, 0.9551, 0.95549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés indigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70918, 0.80146, 0.68353, 0.73168, 0.73162, 0.73129, 0.73193, 0.73177, 0.73294, 0.60343, 0.60348, 0.60338, 0.55206, 0.55237, 0.50439, 0.25143, 0.3151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières fissiles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94396, 0.94184, 0.94254, 0.94241, 0.94281, 0.94329, 0.94383, 0.94406, 0.94424, 0.94434, 0.9463, 0.94539, 0.94585, 0.94569, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"huile de palme": {
men: [0.08808, 0.071606, 0.072765, 0.077116, 0.077051, 0.062328, 0.046809, 0.038092, 0.075626, 0.064572, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21812, 0.21815, 0.21991, 0.51232, 0.26493, 0.26499, 0.26547, 0.28139, 0.26089, 0.20738, 0.2179, 0.21795, 0.17284, 0.17287, 0.074964, 0.070639, 0.066529, 0.066483, 0.096334, 0.11102, 0.11101, 0.094619, 0.092576, 0.098885, 0.091942, 0.091912, 0.11254, 0.11252, 0.04889, 0.051909, 0.056461, 0.04878, 0.056747, 0.044769, 0.089953, 0.086287, 0.093677, 0.10973, 0.12427, 0.12427, 0.12425, 0.12426, 0.054613, 0.054617, 0.073927, 0.080616, 0.074229, 0.062251, 0.0187, 0.0223, 0.020827, 0.02159, 0.0225, 0.021994, 0.021998, 0.022, 0.054863, 0.050382, 0, 0, 0.16916, 0.20562, 0.21508, 0.21509, 0.23372, 0.2774, 0.27248, 0.29041, 0.29041, 0.29041, 0.29025, 0.29891, 0.41205, 0.49782, 0.60745, 0.6075, 0.60739], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93322, 0.93345, 0.93277, 0.93325, 0.93369, 0.93382, 0.93308, 0.93303, 0.9329, 0.93295, 0.93124, 0.93131, 0.93129, 0.93617, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêts primaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15097, 0.15971, 0.17701, 0.17748, 0.23413, 0.23455, 0.25068, 0.54704, 0.54795, 0.54774, 0.54788, 0.54794, 0.548, 0.83636, 0.73685, 0.73618, 0.73568, 0.53702, 0.53684, 0.5368, 0.53656, 0.20922, 0.20918, 0.19699, 0.19692, 0.19694, 0.1969, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10918, 0.068458, 0.078165, 0.078423, 0.073545, 0.082724, 0.082543, 0.088216, 0.088041, 0.086787, 0.086787, 0.086787, 0.11245, 0.095652, 0, 0, 0, 0, 0.19466], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"émissions de carbone": {
men: [0.049338, 0.054522, 0.057784, 0.059892, 0.059201, 0.067268, 0.12571, 0.19078, 0.48394, 0.34015, 0.23277, 0.23278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30668, 0.32288, 0.34336, 0.34296, 0.3555, 0.3302, 0.3255, 0.35225, 0.42504, 0.42504, 0.42527, 0.44762, 0.57662, 0.52969, 0.18275, 0.17258, 0.17261, 0.17292, 0.17292, 0.20055, 0.21883, 0.22375, 0.19594, 0.13889, 0.13891, 0, 0, 0, 0, 0.057584, 0.057564, 0.05756, 0.13437, 0.14997, 0.14994, 0.15018, 0.13255, 0.1688, 0.16877, 0.14184, 0.14651, 0.13568, 0.14453, 0.11853, 0.11856, 0.11246, 0.029582, 0.0044428, 0.0044434, 0.0033111, 0.0037387, 0.0030143, 0.002755, 0.0025706, 0.0025708, 0.0025809, 0.0025995, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.023621, 0.027144, 0.018749, 0.017863, 0.018471, 0.018571, 0.018861, 0.019511, 0.019475, 0.027064, 0.024048, 0.024696, 0.025145, 0.02584, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"résidus": {
men: [0.023632, 0.025356, 0.0047293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1979, 0.44662, 0.41978, 0.53415, 0.53457, 0.52777, 0.46962, 0.45309, 0.40606, 0.41026, 0.41907, 0.41995, 0.50466, 0.49264, 0.45765, 0.31126, 0.35094, 0.099917, 0.10061, 0.089181, 0.10591, 0.13839, 0.2161, 0.18052, 0.11251, 0.10733, 0.1202, 0.11612, 0.10244, 0.12747, 0.12739, 0.10419, 0.10041, 0.10864, 0.11446, 0.10087, 0.094006, 0.10135, 0.16389, 0.16048, 0.15439, 0.14557, 0.10935, 0.090929, 0.08707, 0.09727, 0.098834, 0.098762, 0.083759, 0.059644, 0.056086, 0.044869, 0.00162, 0.0015504, 0.001412, 0.0014148, 0.0013894, 0.0013412, 0.0013284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027991, 0.02801, 0.028102, 0.028069, 0.028657, 0.028146, 0.029574, 0.020188, 0.019368, 0.018381, 0.017035, 0.039439, 0.035768, 0.036053, 0.022613, 0.022893, 0.022436, 0.022502], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biomasse": {
men: [0.063971, 0.031507, 0.10003, 0.09463, 0.094549, 0.063771, 0.063998, 0.047144, 0.047887, 0.048199, 0.048205, 0.038597, 0.038951, 0.040319, 0.047213, 0.056298, 0, 0, 0.0039926, 0.0067609, 0.0068904, 0.15564, 0.15237, 0.20211, 0.20208, 0.20184, 0.17532, 0.16688, 0.12612, 0.10439, 0.13672, 0.13756, 0.13035, 0.17652, 0.18369, 0.12856, 0.11151, 0.085192, 0.085211, 0.085364, 0.085882, 0.080754, 0.088161, 0.082228, 0.04668, 0.046685, 0.046691, 0, 0.02849, 0.030206, 0.14872, 0.15023, 0.17325, 0.16609, 0.14364, 0.15186, 0.161, 0.18175, 0.17111, 0.17113, 0.15629, 0.19569, 0.16164, 0.17891, 0.0895, 0.071293, 0.041633, 0.041564, 0.046801, 0.036968, 0.03208, 0.030572, 0.031313, 0.029559, 0.031845, 0.0029261, 0.0028312, 0.028357, 0.11378, 0.12364, 0.12381, 0.12701, 0.12498, 0.14103, 0.13819, 0.14042, 0.14115, 0.14594, 0.14355, 0.14424, 0.15606, 0.16561, 0, 0, 0, 0, 0, 0.029838, 0.10965, 0.10317, 0.11012, 0.11051, 0.10925, 0.17022, 0.17605, 0.17564, 0.17318, 0.29187, 0.23523, 0.23941], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génie génétique": {
men: [0.14204, 0.1424, 0.15241, 0.15235, 0.15222, 0.15212, 0.18472, 0.34781, 0.18022, 0.18037, 0.1804, 0.068032, 0.068227, 0.077725, 0.077822, 0.077717, 0.077775, 0.077828, 0.077827, 0.071116, 0.074049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31371, 0.31387, 0.94215, 0.94239, 0.94256, 0.94267, 0.94462, 0.94371, 0.94418, 0.19628, 0.19626, 0.19691, 0.19694, 0.19696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc de glace": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9454, 0.94545, 0.94372, 0.9438, 0.94377, 0.94872, 0.94838, 0.94625, 0.94695, 0.94682, 0.94722, 0.16724, 0.16734, 0.16738, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gazole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10694, 0.1888, 0.19195, 0.19143, 0.1914, 0.31939, 0.43167, 0.42737, 0.42681, 0.427, 0.42684, 0.45035, 0.53233, 0.53206, 0.35341, 0, 0, 0, 0, 0, 0, 0.95558, 0.26801, 0.2679, 0.26797, 0.268, 0.076146, 0.069787, 0.069747, 0.041155, 0.034839, 0.034844, 0.034832, 0.03483, 0.034814, 0, 0, 0, 0, 0, 0, 0, 0, 0.13744, 0.27298, 0.147, 0.1015, 0.148, 0.14807, 0.13925, 0.15554, 0.14628, 0.11812, 0.10329, 0.10164, 0.099116, 0.09759, 0.080992, 0.091558, 0.089069, 0.089353, 0.042027, 0.036706, 0.031949, 0.012051, 0.012057, 0.032671, 0.03482, 0.031019, 0.028042, 0.026796, 0.027101, 0.01642, 0.011662, 0.012035, 0.012433, 0.013092, 0.01438, 0.016379, 0.016821, 0, 0, 0, 0.018176, 0.019638, 0.019932, 0.021965, 0.13276, 0.095138, 0.095122], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"diesel": {
men: [0.10174, 0.11905, 0.10088, 0.074635, 0.039723, 0, 0, 0, 0, 0, 0, 0, 0.050893, 0.071285, 0.077769, 0.071868, 0.075391, 0.071926, 0.071925, 0.077711, 0.084578, 0.081462, 0.093005, 0.33188, 0.33183, 0.33144, 0.34456, 0.38303, 0.3347, 0.36807, 0.43345, 0.4676, 0.28697, 0.21505, 0.21508, 0.23263, 0.14284, 0, 0, 0, 0, 0, 0, 0, 0, 0.008286, 0.009531, 0.010019, 0.0091242, 0.0090011, 0.010253, 0.010586, 0.010554, 0.010569, 0.020405, 0.045429, 0.047629, 0.046252, 0.046776, 0.038798, 0.036113, 0.040158, 0.04544, 0.03528, 0.13993, 0.14616, 0.14114, 0.14325, 0.13055, 0.093115, 0.10854, 0.12782, 0.12793, 0.12791, 0.14844, 0.153, 0.15557, 0.18238, 0.12727, 0.093238, 0.074518, 0.065695, 0.064074, 0.085215, 0.057172, 0.025921, 0.082188, 0.082203, 0.060228, 0.057977, 0.059955, 0.06378, 0.054281, 0.058813, 0.076074, 0.091869, 0.10133, 0.076505, 0.15848, 0.1669, 0.11082, 0.10759, 0.10759, 0.074385, 0.066069, 0.063843, 0.072217, 0.077764, 0.079008, 0.078995], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44252, 0.44275, 0.443, 0.44311, 0.44319, 0.94267, 0.94462, 0.94371, 0.94418, 0.94402, 0.94391, 0.94702, 0.9472, 0.94727, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bioterrorisme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44252, 0.44275, 0.443, 0.44311, 0.44319, 0.94267, 0.94462, 0.94371, 0.94418, 0.94402, 0.94391, 0.94702, 0.9472, 0.94727, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fourrage": {
men: [0, 0.09261, 0.081319, 0.081287, 0.081217, 0.076668, 0.29183, 0.29171, 0.11375, 0.11384, 0.11386, 0.11387, 0.096597, 0.089964, 0.090077, 0.04116, 0.032578, 0.025811, 0.024733, 0.023806, 0.014834, 0.013436, 0.015675, 0.015044, 0.015041, 0.015024, 0.014413, 0.013585, 0.012297, 0.0084335, 0.0089502, 0.010072, 0.010349, 0.010276, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011829, 0.013081, 0.015523, 0.026853, 0.026835, 0.026839, 0.024095, 0.024093, 0.036338, 0.031521, 0.12223, 0.1802, 0.18015, 0.18016, 0.13221, 0.13227, 0.18032, 0.18054, 0.17929, 0.044927, 0.04902, 0.048985, 0.051056, 0.056419, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40032, 0.40035, 0.71207, 0.66563, 0.66431, 0.43787, 0.43787, 0.44916, 0.44891, 0.44706, 0.37046, 0.31655, 0.31642, 0.31645, 0.30747], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
