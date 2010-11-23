var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"potager": {
men: [0.62443, 0.59705, 0.56028, 0.56029, 0.56039, 0.56619, 0.58303, 0.66236, 0.71196, 0.71176, 0.73863, 0.573, 0.60282, 0.59258, 0.66273, 0.5316, 0.6376, 0.53146, 0.4877, 0.46781, 0.47088, 0.44625, 0.37867, 0.37992, 0.41614, 0.42794, 0.36299, 0.36288, 0.379, 0.46749, 0.49445, 0.60634, 0.69045, 0.81262, 0.77236, 0.63614, 0.64852, 0.58351, 0.25461, 0.25457, 0.25459, 0.25464, 0.1944, 0.19434, 0.24459, 0.2446, 0.26714, 0.26696, 0.30235, 0.23868, 0.11768, 0.12267, 0.15848, 0.14135, 0.1414, 0.134, 0.13629, 0.13632, 0.08031, 0.091393, 0.072619, 0.071511, 0.143, 0.14289, 0.46064, 0.42484, 0.43115, 0.54231, 0.54246, 0.60149, 0.6205, 0.65324, 0.65356, 0.61648, 0.63256, 0.64623, 0.56078, 0.56123, 0.52478, 0.60056, 0.66762, 0.62868, 0.55627, 0.5248, 0.44024, 0.24453, 0.24448, 0.28272, 0.15507, 0.11706, 0.12267, 0.10931, 0.011108, 0.010586, 0, 0.10207, 0.093479, 0.088875, 0.08821, 0.096441, 0.22611, 0.21426, 0.24929, 0.25661, 0.29067, 0.27989, 0.28418, 0.33382, 0.32505, 0.26572], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"verger": {
men: [0.079075, 0.44899, 0.54413, 0.58341, 0.64142, 0.57557, 0.64452, 0.71146, 0.75745, 0.76614, 0.7791, 0.65082, 0.68077, 0.68076, 0.59451, 0.48692, 0.4349, 0.3774, 0.37732, 0.40248, 0.31138, 0.28263, 0.242, 0.23006, 0.17699, 0.23118, 0.21554, 0.32615, 0.4063, 0.45762, 0.34493, 0.31536, 0.31533, 0.34488, 0.3449, 0.32424, 0.34091, 0.32438, 0.32432, 0.32427, 0.34375, 0.21572, 0.25681, 0.25673, 0.35481, 0.36137, 0.33269, 0.1971, 0.19704, 0.18562, 0.1857, 0.18565, 0.18563, 0.18565, 0.10718, 0.046962, 0, 0.041248, 0.041226, 0.044464, 0.22939, 0.22873, 0.22881, 0.22862, 0.19723, 0.19728, 0.18664, 0.18652, 0.21755, 0.50621, 0.4706, 0.37692, 0.31969, 0.31966, 0.085792, 0.1661, 0.16608, 0.16621, 0.21498, 0.215, 0.24501, 0.19792, 0.16931, 0.10763, 0.18155, 0.16524, 0.19256, 0.17431, 0.17433, 0.10966, 0.10969, 0.10975, 0.14624, 0.14123, 0.13641, 0.15903, 0.19407, 0.19411, 0.075944, 0.14779, 0.34627, 0.27092, 0.23518, 0.23519, 0.19957, 0.15322, 0.10841, 0.07099, 0.064872, 0.066775], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espaces verts": {
men: [0.12303, 0.13297, 0.10738, 0.14117, 0.1372, 0.12247, 0.14794, 0.1969, 0.19707, 0.12413, 0.12824, 0.16632, 0.1838, 0.20741, 0.31909, 0.33735, 0.31399, 0.2909, 0.30936, 0.41746, 0.43621, 0.45671, 0.42688, 0.5776, 0.57751, 0.57786, 0.60261, 0.54257, 0.49237, 0.35889, 0.39413, 0.39411, 0.39407, 0.38354, 0.23237, 0.28044, 0.23853, 0.26811, 0.25311, 0.22645, 0.23185, 0.21888, 0.20587, 0.21428, 0.20738, 0.21897, 0.22658, 0.1858, 0.20715, 0.18148, 0.22017, 0.18129, 0.17749, 0.17121, 0.1177, 0.18839, 0.20308, 0.22316, 0.2559, 0.29825, 0.26539, 0.30587, 0.32678, 0.28894, 0.24894, 0.23557, 0.23563, 0.35254, 0.36633, 0.3231, 0.30636, 0.29864, 0.28922, 0.2302, 0.25574, 0.23069, 0.22593, 0.32311, 0.38598, 0.41465, 0.45462, 0.25092, 0.29856, 0.31744, 0.3401, 0.30063, 0.26788, 0.21939, 0.17234, 0.13031, 0.11455, 0.10942, 0.10958, 0.11709, 0.082139, 0.11317, 0.08959, 0.087554, 0.089028, 0.080825, 0.11666, 0.12323, 0.13818, 0.17784, 0.23723, 0.19831, 0.18916, 0.18426, 0.22073, 0.19416], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"semences locales": {
men: [0.30956, 0.65982, 0.65964, 0.65965, 0.65977, 0.65991, 0.66026, 0.65982, 0.66038, 0.6602, 0.66017, 0.66024, 0.66028, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19056, 0.19067, 0.19055, 0.19049, 0.19046, 0.1984, 0.19832, 0.19831, 0.39416, 0.39398, 0.394, 0.39377, 0.67824, 0.67829, 0.62246, 0.62236, 0.62241, 0.62253, 0.62295, 0.94463, 0.94571, 0.94575, 0.94108, 0.94044, 0.94018, 0.94093, 0.39981, 0.3997, 0.30426, 0.3043, 0.3044, 0.30397, 0.3036, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18595, 0.18604, 0.18603, 0.18609, 0.36527, 0.36523, 0.36552, 0.94087, 0.94097, 0.94095, 0.94199, 0.94195, 0.94237, 0.94106, 0.94202, 0.94183, 0.9424, 0.9425, 0.94278, 0.94303, 0.94356, 0.1427, 0.086029, 0.086056, 0.086023, 0.086021, 0.086036, 0.086269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Colmar": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.029759, 0.029761, 0.026887, 0.026913, 0.02691, 0.04986, 0.11058, 0.0093322, 0.0070965, 0.0065313, 0.0063266, 0.0060092, 0.0057939, 0.0054797, 0.0029228, 0.0027784, 0.0025321, 0.0023923, 0.00237, 0.0023165, 0, 0, 0, 0, 0.022919, 0.022398, 0.023064, 0.042937, 0.090614, 0.11281, 0.15983, 0.18802, 0.18716, 0.19494, 0.19597, 0.1835, 0.23285, 0.26, 0.24603, 0.31039, 0.31061, 0.27098, 0.18747, 0.31943, 0.35669, 0.4298, 0.45888, 0.53194, 0.5318, 0.6142, 0.57597, 0.58351, 0.60599, 0.64678, 0.7736, 0.79006, 0.79058, 0.70368, 0.7032, 0.1508, 0.10708, 0.63272, 0.58371, 0.635, 0.69651, 0.74885, 0.74945, 0.75972, 0.77359, 0.79229, 0.79317, 0.79983, 0.75197, 0.75824, 0.77518, 0.74399, 0.82823, 0.80814, 0.84829, 0.76622, 0.67484, 0.64484, 0.60252, 0.49312, 0.49293, 0.44059, 0.51362, 0.60083, 0.46495, 0.4651, 0.41199, 0.4117, 0.32611, 0.33608, 0.31876, 0.39111, 0.39073, 0.39676, 0.39673], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"côtes-d'armor": {
men: [0.0063592, 0.0061828, 0.0062532, 0.0063326, 0.0083103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.019135, 0.035248, 0.031124, 0.042257, 0.041004, 0.047051, 0.046615, 0.049357, 0.071151, 0.064919, 0.072379, 0.10007, 0.15211, 0.15069, 0.15427, 0.12435, 0.13867, 0.11919, 0.11652, 0.11668, 0.11241, 0.10755, 0.095007, 0.10391, 0.0792, 0.066658, 0.038562, 0.076773, 0.091037, 0.13854, 0.14536, 0.16557, 0.17492, 0.17897, 0.17996, 0.2037, 0.18295, 0.18398, 0.26644, 0.25715, 0.25376, 0.17648, 0.11852, 0, 0, 0.17109, 0.30832, 0.35865, 0.44485, 0.51324, 0.65195, 0.66476, 0.70681, 0.79935, 0.80023, 0.78277, 0.84209, 0.82805, 0.82729, 0.77012, 0.72051, 0.68798, 0.69936, 0.61538, 0.7072, 0.69586, 0.73423, 0.65505, 0.65481, 0.69566, 0.63747, 0.76791, 0.83657, 0.93878, 0.94486, 0.94619, 0.86789, 0.82136, 0.8214, 0.85207, 0.54767, 0.54737, 0.54734], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"haies": {
men: [0, 0, 0, 0, 0, 0.008941, 0.0090935, 0.0090875, 0.0090953, 0.008978, 0.0089776, 0.0179, 0.015997, 0.018189, 0.042359, 0.0445, 0.044499, 0.068925, 0.10525, 0.13221, 0.13219, 0.12052, 0.12051, 0.12561, 0.12559, 0.069191, 0.30139, 0.28653, 0.2558, 0.2561, 0.25599, 0.24729, 0.24727, 0.12734, 0.11577, 0.12251, 0.12249, 0.1191, 0.11908, 0.18234, 0.037607, 0.039254, 0.039281, 0.037557, 0.036156, 0.027474, 0.027471, 0.099522, 0.11136, 0.09192, 0.091961, 0.091414, 0.085698, 0.046315, 0.045576, 0.11728, 0.11714, 0.10139, 0.10523, 0.29651, 0.29258, 0.23977, 0.25364, 0.30791, 0.30756, 0.32933, 0.35758, 0.41864, 0.45381, 0.37547, 0.37578, 0.49551, 0.49575, 0.34871, 0.35812, 0.42177, 0.46412, 0.46449, 0.42646, 0.42651, 0.4265, 0.28531, 0.29812, 0.54412, 0.54336, 0.51202, 0.55426, 0.55459, 0.55466, 0.46851, 0.47275, 0.47302, 0.56734, 0.56759, 0.56776, 0.67212, 0.67211, 0.41981, 0.42095, 0.28622, 0.094277, 0.094276, 0.058843, 0.058845, 0.033817, 0.033819, 0, 0, 0.021026, 0.020384], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0.22323, 0.44962, 0.38273, 0.38274, 0.38281, 0.38289, 0.38309, 0.38283, 0.38316, 0.28939, 0.28938, 0.28941, 0.40627, 0.60665, 0.60724, 0, 0, 0, 0, 0.94416, 0.94402, 0.94443, 0.94437, 0.94424, 0.94409, 0.94466, 0.94407, 0.94379, 0.94359, 0.94467, 0.94428, 0.94422, 0.94413, 0, 0, 0.94266, 0.94255, 0.94261, 0.94245, 0.9423, 0.94238, 0.47129, 0.30835, 0.30826, 0.30861, 0.30862, 0.30859, 0.20545, 0.20539, 0, 0, 0, 0, 0.1554, 0.15546, 0.1922, 0.25671, 0.25677, 0.25663, 0.25657, 0.25653, 0.50157, 0.50173, 0.59367, 0.59368, 0.42727, 0.49162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture urbaine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19186, 0.19184, 0.19183, 0.19179, 0.19175, 0.19173, 0.1917, 0.93763, 0.30651, 0.47617, 0.4761, 0.47638, 0.47608, 0.47594, 0.3253, 0.32567, 0.32554, 0.32552, 0.32549, 0.32534, 0.32537, 0.32517, 0.93714, 0, 0, 0, 0, 0, 0, 0, 0, 0.48334, 0.48329, 0.48297, 0.48283, 0.37338, 0.37354, 0.37344, 0.35947, 0.35951, 0.35963, 0.35912, 0.35868, 0.56588, 0.56559, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93566, 0.93559, 0.93589, 0.93581, 0.9357, 0.93644, 0.93605, 0.11951, 0.11951, 0.37343, 0.33041, 0.33056, 0.3301, 0.32979, 0.27614, 0.2763, 0.48501, 0.48515, 0.48528, 0.48555, 0.45413, 0.73209, 0.73231, 0.62936, 0.51683, 0.51692, 0.51832, 0.36139, 0.3615, 0.36149, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24444, 0.24441, 0.28994, 0.28988, 0.28982, 0.37134, 0.37128, 0.37144, 0.37142, 0.37137, 0.37131, 0.94313, 0.94537, 0.94509, 0.93225, 0.93331, 0.93293, 0.93287, 0.93278, 0.93235, 0.52978, 0.52947, 0.5294, 0.52944, 0.52935, 0.52926, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92813, 0.92823, 0.93973, 0.93998, 0.94051, 0.94084, 0.94125, 0.94154, 0.94118, 0.94116, 0.94133, 0.94388, 0.9436, 0.94389, 0.94051, 0.93985, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tourisme vert": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60152, 0.60127, 0.94479, 0.94471, 0.94428, 0.94434, 0.94378, 0.94366, 0.94373, 0.58411, 0.58402, 0.58407, 0.58418, 0.58457, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21775, 0.21764, 0.21758, 0.21755, 0.21774, 0.2178, 0.21763, 0.21763, 0.21769, 0.21773, 0.21759, 0.21765, 0.2178, 0.93729, 0, 0, 0, 0, 0, 0, 0, 0.12975, 0.12976, 0.12976, 0.12991, 0.1299, 0.12996, 0.12978, 0.12966, 0.95048, 0.95105, 0.95116, 0.95143, 0.95169, 0.95223, 0.94883, 0.94925, 0.94954, 0.94918, 0.94916, 0.94933, 0.9519, 0.95162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets humains": {
men: [0.32773, 0.32739, 0.3273, 0.3273, 0.32737, 0.67349, 0.67385, 0.61979, 0.62032, 0.62014, 0.62012, 0.95095, 0.951, 0.95099, 0.95854, 0.95843, 0.95841, 0.95819, 0.958, 0.95131, 0.95116, 0.95157, 0.95151, 0.95138, 0.95124, 0.6057, 0.38662, 0.22321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93162, 0.93268, 0.93273, 0.93263, 0.932, 0.93174, 0.93249, 0.93289, 0.17645, 0.17643, 0.17645, 0.17652, 0.17626, 0.17605, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"toilettes sèches": {
men: [0.44121, 0.30827, 0.23807, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30654, 0.27246, 0.24959, 0.24956, 0.24957, 0.24953, 0.24949, 0.22674, 0.11492, 0.115, 0.16291, 0.17756, 0.17757, 0.17755, 0.21387, 0.23646, 0.24629, 0.2464, 0.24633, 0.24632, 0.24634, 0.21978, 0.70376, 0.7029, 0.68966, 0.68004, 0.67986, 0.67977, 0.58885, 0.58903, 0.58856, 0.58857, 0.58871, 0.58884, 0.58844, 0.54267, 0.15858, 0.15871, 0.1587, 0.15877, 0.15876, 0.15881, 0, 0, 0.30332, 0.20629, 0.20631, 0.2063, 0.20653, 0.38365, 0.38382, 0.38329, 0.38293, 0.58673, 0.58708, 0.58715, 0.3433, 0.3434, 0.23229, 0.31579, 0.31593, 0.31603, 0.31591, 0.22745, 0.22749, 0.2281, 0.22804, 0, 0, 0, 0.26108, 0.26101, 0.26103, 0.26069, 0.26043, 0.26029, 0.26028], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chauve-souris": {
men: [0.075483, 0, 0.94096, 0.94098, 0.94115, 0.94135, 0.94184, 0.94122, 0.54505, 0.5449, 0.54488, 0.54493, 0.54496, 0.54496, 0.54549, 0.54543, 0.11626, 0.11624, 0.11621, 0.1162, 0.11619, 0.11624, 0, 0, 0, 0.090207, 0.090151, 0.090124, 0.083641, 0.07813, 0.1198, 0.11979, 0.11978, 0.11973, 0.11974, 0.097886, 0.21558, 0.2156, 0.11727, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19425, 0.26165, 0.099612, 0.099585, 0.13739, 0.13741, 0.12644, 0.12625, 0.1261, 0.11209, 0.24917, 0.2491, 0.32103, 0.31421, 0.24031, 0.24012, 0.41145, 0.35736, 0.35744, 0.3572, 0.36111, 0.36135, 0.36165, 0.40171, 0.27684, 0.27682, 0, 0, 0, 0.38093, 0.38077, 0.60255, 0.60254, 0.60321, 0.78633, 0.39097, 0.32379, 0.3235, 0.32343, 0.25683, 0.25686, 0.25694, 0.27232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"friches industrielles": {
men: [0.23977, 0.35708, 0.35698, 0.35699, 0.35705, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19186, 0.16182, 0.16181, 0.10872, 0.10869, 0.10869, 0.091516, 0.091556, 0.09155, 0.10435, 0.086231, 0.086282, 0.086229, 0.086203, 0.059551, 0, 0, 0, 0, 0, 0, 0.055633, 0.055626, 0.05563, 0.927, 0.92686, 0.29554, 0.12179, 0.12187, 0.049218, 0.094233, 0.094237, 0.052656, 0.05262, 0.049262, 0.091052, 0.17322, 0.1003, 0.10029, 0.089603, 0.091861, 0.086761, 0.086655, 0.098894, 0.11595, 0.11592, 0.17605, 0.20741, 0.1927, 0.16951, 0.1171, 0.1741, 0.17413, 0.20188, 0.20194, 0.24061, 0.24081, 0.20999, 0.22671, 0.2267, 0.16279, 0.069947, 0.10084, 0.10092, 0.22535, 0.22537, 0.22536, 0.22561, 0.2256, 0.22571, 0.22539, 0.93538, 0, 0, 0, 0.94854, 0.94879, 0.94933, 0.94966, 0.95008, 0.95037, 0.95001, 0.94999, 0.95015, 0.95273, 0.703, 0.59573, 0.39947, 0.29465, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cercle polaire": {
men: [0, 0, 0, 0, 0.019724, 0.019728, 0.019738, 0.019725, 0.017806, 0.017801, 0.015072, 0.015073, 0.015074, 0.015074, 0.030068, 0.030065, 0.32206, 0.32198, 0.30752, 0.30749, 0.30745, 0.30758, 0.57101, 0.57094, 0.94409, 0.94466, 0.94407, 0.94379, 0.23114, 0.17179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94729, 0.9475, 0.94686, 0.94713, 0.94778, 0.94855, 0.95509, 0.95556, 0.95549, 0.95579, 0.95571, 0.95559, 0.95635, 0.95596, 0.94945, 0.94943, 0.63366, 0.63363, 0.32469, 0.32424, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"apiculteurs": {
men: [0.14838, 0.12977, 0.15528, 0.085764, 0.086942, 0.08696, 0.11374, 0.21964, 0.23612, 0.23605, 0.22843, 0.22131, 0.27069, 0.27999, 0.28197, 0.30781, 0.21869, 0.23711, 0.23872, 0.2387, 0.19985, 0, 0, 0, 0, 0, 0.16159, 0.16155, 0.17509, 0.17529, 0.23359, 0.25841, 0.32816, 0.29429, 0.31243, 0.31224, 0.23378, 0.2338, 0.28113, 0.28108, 0.43416, 0.32433, 0.28705, 0.24892, 0.29621, 0.31151, 0.31148, 0.32053, 0.33302, 0.33329, 0.39057, 0.39046, 0.3682, 0.36824, 0.2243, 0.18093, 0.1825, 0.29849, 0.22968, 0.31109, 0.31105, 0.31131, 0.31141, 0.31116, 0.28308, 0.33966, 0.36336, 0.36312, 0.37904, 0.56325, 0.52155, 0.48301, 0.48324, 0.38199, 0.42186, 0.42182, 0.23072, 0.2309, 0.23081, 0.086833, 0.15871, 0.15888, 0.13649, 0.13655, 0.1545, 0.10435, 0.10433, 0.1079, 0.083741, 0.083766, 0.12786, 0.12027, 0.11351, 0.14035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"abeilles": {
men: [0.18353, 0.17721, 0.20117, 0.20422, 0.20193, 0.18384, 0.18688, 0.23246, 0.24316, 0.24309, 0.24603, 0.24877, 0.22486, 0.23252, 0.19612, 0.18834, 0.1529, 0.15785, 0.16263, 0.16701, 0.16412, 0.04047, 0.012094, 0.010165, 0.0095185, 0.0093528, 0.077206, 0.075203, 0.065637, 0.070059, 0.074831, 0.074669, 0.07897, 0.078934, 0.066215, 0.064499, 0.10094, 0.10095, 0.1084, 0.11233, 0.17301, 0.16869, 0.17439, 0.17947, 0.1962, 0.21442, 0.21531, 0.21517, 0.24536, 0.24983, 0.26969, 0.28125, 0.26772, 0.26775, 0.17446, 0.19574, 0.23031, 0.30415, 0.29253, 0.31241, 0.31023, 0.30392, 0.2465, 0.25885, 0.22224, 0.34845, 0.36209, 0.34032, 0.37782, 0.33998, 0.32808, 0.30276, 0.28792, 0.23862, 0.22843, 0.20507, 0.16455, 0.15766, 0.16, 0.060347, 0.092893, 0.096859, 0.082525, 0.098709, 0.1027, 0.084134, 0.084987, 0.085661, 0.088728, 0.095368, 0.13227, 0.1323, 0.12853, 0.12948, 0.10734, 0.1073, 0.060065, 0.026071, 0.025538, 0.024781, 0.024047, 0.025821, 0.057567, 0.058091, 0.058076, 0.05558, 0.056597, 0.060501, 0.032932, 0.029425], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93671, 0.93675, 0.93666, 0.93603, 0.94783, 0.94859, 0.949, 0.94874, 0.94868, 0.94879, 0.94912, 0.94776, 0.95358, 0.9538, 0.95194, 0.88894, 0.83384, 0.83455, 0.76727, 0.76665, 0.70071, 0.70088, 0.70103, 0.70056, 0.70076, 0.70124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces locales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40601, 0.40589, 0.40581, 0.94796, 0.94758, 0.94751, 0.94743, 0.947, 0.94706, 0.94649, 0.94638, 0.94644, 0.94628, 0.94613, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62172, 0.73229, 0.4647, 0.46508, 0.46505, 0.46528, 0.46524, 0.54517, 0.54512, 0.54506, 0.54549, 0.54527, 0.54532, 0.54531, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"semis": {
men: [0.15424, 0.17376, 0.19495, 0.19495, 0.19498, 0.16988, 0.19741, 0.19728, 0.37954, 0.35647, 0.35645, 0.35649, 0.36054, 0.30941, 0.30971, 0.24573, 0.24572, 0.24567, 0.16106, 0.14206, 0.10161, 0.10165, 0.070389, 0, 0, 0, 0.04951, 0.046778, 0.046768, 0.052596, 0.096326, 0.096319, 0.1998, 0.17365, 0.17366, 0.16091, 0.16089, 0.26181, 0.26647, 0.26643, 0.24788, 0.29338, 0.29358, 0.081177, 0.04146, 0.070466, 0.034371, 0.037711, 0.077486, 0.081512, 0.081548, 0.081526, 0.08152, 0.081529, 0.081558, 0.072448, 0.069667, 0.15331, 0.16352, 0.12166, 0.13092, 0.13103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95722, 0.63846, 0.63841, 0.63862, 0.63856, 0.63849, 0.63899, 0.4109, 0.41094, 0.35076, 0.35115, 0.35113, 0.28238, 0.25229, 0, 0, 0, 0, 0, 0.037255, 0.037276, 0.085457, 0.085495, 0.10049, 0.10045, 0.096914, 0.11932, 0.15103, 0.17143, 0.17149, 0.17149, 0.18516, 0.18516, 0.097666, 0.097671, 0, 0, 0, 0.21518], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"poison violent": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083083, 0.083088, 0.083087, 0.090391, 0.090381, 0.090379, 0.090358, 0.1468, 0.18789, 0.93932, 0.93973, 0.93967, 0.93954, 0.93939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94541, 0.94605, 0.94682, 0.94676, 0.94723, 0.94716, 0.94746, 0.94738, 0.94726, 0.94801, 0.94762, 0.94772, 0.9477, 0.94875, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistantes maternelles": {
men: [0.13284, 0.1327, 0.30675, 0.30676, 0.47598, 0.39202, 0.39223, 0.39197, 0.3923, 0.35221, 0.3522, 0.35224, 0.2774, 0.2774, 0.39189, 0.39185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098634, 0.098641, 0.098581, 0.095664, 0.086958, 0.083156, 0.081719, 0.083513, 0.086224, 0.1784, 0.22503, 0.22529, 0.2253, 0.31933, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37878, 0.37886, 0.37861, 0.4524, 0.45271, 0.45308, 0.41652, 0.44893, 0.51316, 0.43063, 0.57653, 0.57647, 0.57692, 0.57668, 0.48741, 0.4874, 0.44945, 0.36452, 0.36469, 0.36418, 0.43318, 0.39901, 0.29615, 0.28801, 0.25799, 0.25806, 0.2582, 0.25829, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0014667], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets verts": {
men: [0.4037, 0.51384, 0.5137, 0.51371, 0.5138, 0.39567, 0.39588, 0.39562, 0.20939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18007, 0.090126, 0.09012, 0.09013, 0.15022, 0.15, 0.14982, 0.16518, 0.1651, 0.16505, 0.21957, 0.21976, 0.21982, 0.21965, 0.12876, 0.36435, 0.36443, 0.36418, 0, 0, 0, 0, 0, 0.94386, 0.94417, 0.94408, 0.94397, 0.94472, 0.94433, 0.94443, 0.9444, 0.94545, 0.58825, 0.58852, 0.5877, 0.58716, 0.58705, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ceinture verte": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93779, 0.9375, 0.42951, 0.42953, 0.42949, 0.4292, 0.42908, 0.42942, 0.42961, 0.42949, 0.42946, 0.42951, 0.42966, 0.60829, 0.4603, 0.46041, 0.93739, 0.93714, 0.93702, 0.93781, 0.9381, 0.93734, 0.93737, 0.93759, 0.93779, 0.93716, 0.93743, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"usage des pesticides": {
men: [0.18678, 0.23939, 0.095962, 0.10747, 0.18476, 0.18479, 0.16722, 0.16711, 0.26276, 0.26269, 0.26268, 0.2627, 0.25191, 0.28137, 0.28165, 0.28161, 0.092227, 0.092206, 0.098903, 0.086594, 0.09248, 0.09252, 0, 0, 0, 0.078652, 0.076309, 0.076286, 0.056909, 0.056974, 0.083053, 0.070077, 0.070071, 0.075971, 0.075977, 0.075931, 0.075922, 0.22088, 0.24341, 0.22358, 0.24478, 0.22828, 0.25614, 0.24887, 0.237, 0.18532, 0.17913, 0.17901, 0.17586, 0.17457, 0.17464, 0.044151, 0.044148, 0.044153, 0.01919, 0.021288, 0.020207, 0.021058, 0.058423, 0.15434, 0.37477, 0.32584, 0.36144, 0.38078, 0.38079, 0.43215, 0.43224, 0.43195, 0.53834, 0.30999, 0.35451, 0.245, 0.11785, 0.11784, 0.068232, 0.10003, 0.095715, 0.087634, 0.087598, 0.087607, 0.087605, 0.087702, 0.12629, 0.12507, 0.1249, 0.10198, 0.2099, 0.21003, 0.21005, 0.24522, 0.27415, 0.36805, 0.30802, 0.27945, 0.27953, 0.27943, 0.16837, 0.24737, 0.19282, 0.19276, 0.16927, 0.16927, 0.16915, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces végétales": {
men: [0.3827, 0.30164, 0.30155, 0.30156, 0.30161, 0.10657, 0.11101, 0.11094, 0.11103, 0.10743, 0.10742, 0.10743, 0, 0, 0, 0, 0, 0, 0, 0, 0.18236, 0.18243, 0.14426, 0.19208, 0.19205, 0.19216, 0.19204, 0.19199, 0.090327, 0.090429, 0.10238, 0.10237, 0.09747, 0.19153, 0.071505, 0.066222, 0.055102, 0.055106, 0.055097, 0.052504, 0.052508, 0.052519, 0.16883, 0.16877, 0.16896, 0.16897, 0.17324, 0.11541, 0.30567, 0.26515, 0.39776, 0.39766, 0.36559, 0.4057, 0.40584, 0.40526, 0.26704, 0.2671, 0.26696, 0.23281, 0.23278, 0.23297, 0, 0.39666, 0.32058, 0.32065, 0.36285, 0.36261, 0.36271, 0.36296, 0.36325, 0.36323, 0.36341, 0.43893, 0.43908, 0.43904, 0.41053, 0, 0, 0, 0, 0, 0, 0, 0.23199, 0.23178, 0.23173, 0.23187, 0.2319, 0.23197, 0.243, 0.18129, 0.15345, 0.11897, 0.11901, 0.11896, 0.11896, 0.11505, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets organiques": {
men: [0.15939, 0.15922, 0.22004, 0.22004, 0.22008, 0.22013, 0.93603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93162, 0.93268, 0.93273, 0.93263, 0.932, 0.93174, 0.33728, 0.64152, 0.64134, 0.6413, 0.64137, 0.12608, 0.1259, 0.12575, 0.095152, 0.072152, 0.067567, 0.067558, 0.067615, 0.13927, 0.14537, 0.085377, 0.085397, 0.085416, 0.085358, 0.17146, 0.17158, 0.17172, 0.21287, 0.17918, 0.20007, 0.20013, 0.1581, 0.041769, 0.041802, 0.041785, 0.041789, 0.16412, 0.1643, 0.17681, 0.17689, 0.17665, 0.14261, 0.29896, 0.29914, 0.29918, 0.58764, 0.5878, 0.58813, 0.38481, 0.38498, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"citron": {
men: [0.052911, 0.048152, 0.062504, 0.075566, 0.0699, 0.062515, 0.11977, 0.11087, 0.13486, 0.14622, 0.22117, 0.25717, 0.25845, 0.29369, 0.32102, 0.34976, 0.3792, 0.41188, 0.38568, 0.40899, 0.33696, 0.4421, 0.46891, 0.40704, 0.40698, 0.38511, 0.42879, 0.33979, 0.35332, 0.37724, 0.4209, 0.39335, 0.45927, 0.48901, 0.44501, 0.34915, 0.30313, 0.36129, 0.32596, 0.26118, 0.2612, 0.3209, 0.26206, 0.19769, 0.04657, 0.046572, 0.097871, 0.10437, 0.11616, 0.14618, 0.14624, 0.1462, 0.11522, 0.1641, 0.16416, 0.16393, 0.11947, 0.073048, 0.084669, 0.084647, 0, 0, 0, 0, 0.025046, 0.023459, 0.023465, 0.019693, 0.018088, 0.018101, 0.020085, 0.03391, 0.029165, 0.026329, 0.029886, 0.038096, 0.038091, 0.072051, 0.036256, 0.040435, 0.040434, 0.061843, 0.087494, 0.087534, 0.087413, 0.087332, 0.1567, 0.40114, 0.11632, 0.13946, 0.07536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077123, 0.077122, 0.097453, 0.097458, 0.19492, 0.14251, 0.14232, 0.15104, 0.15096, 0.15388], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
