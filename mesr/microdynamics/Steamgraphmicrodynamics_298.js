var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"évolution du climat": {
men: [0.28786, 0.25363, 0.29422, 0.46597, 0.43004, 0.46571, 0.44652, 0.47592, 0.4763, 0.47435, 0.47435, 0.70566, 0.70657, 0.72084, 0.73195, 0.84549, 0.83423, 0.70494, 0.97775, 0.97866, 0.97936, 0.97729, 0.97775, 0.98789, 0.98789, 0.98789, 0.98747, 0.86762, 0.64621, 0.41159, 0.40832, 0.4087, 0.40896, 0.45371, 0.39379, 0.34713, 0.34705, 0.25874, 0.23883, 0.23483, 0.24056, 0.23701, 0.23695, 0.2424, 0.24351, 0.24351, 0.24729, 0.14719, 0.078821, 0.12377, 0.12216, 0.18298, 0.26613, 0.26434, 0.34315, 0.36301, 0.42888, 0.48552, 0.49471, 0.49471, 0.48761, 0.53564, 0.55373, 0.49651, 0.50219, 0.51795, 0.50862, 0.53105, 0.53161, 0.76992, 0.73902, 0.63778, 0.68556, 0.68556, 0.69309, 0.52989, 0.37051, 0.45216, 0.48583, 0.40248, 0.39433, 0.45328, 0.46305, 0.40125, 0.46882, 0.43864, 0.38847, 0.37483, 0.36777, 0.39731, 0.47185, 0.47073, 0.40356, 0.39912, 0.40947, 0.38691, 0.38682, 0.43869, 0.39552, 0.42707, 0.42715, 0.43574, 0.44634, 0.44351, 0.45097, 0.45102, 0.52024, 0.72786, 0.76569, 0.72706], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"giec": {
men: [0.092022, 0.089843, 0.10955, 0.20307, 0.20199, 0.19597, 0.19834, 0.2283, 0.2573, 0.3228, 0.38105, 0.34951, 0.32948, 0.38215, 0.38747, 0.46739, 0.40021, 0.31132, 0.31347, 0.33982, 0.38082, 0.31651, 0.326, 0.30102, 0.22164, 0.21793, 0.23277, 0.18472, 0.16909, 0.12768, 0.13453, 0.08251, 0.069949, 0.1617, 0.1601, 0.17622, 0.18412, 0.18299, 0.20736, 0.21961, 0.25012, 0.24468, 0.23788, 0.24292, 0.25209, 0.32027, 0.36104, 0.32345, 0.39818, 0.39461, 0.37205, 0.32566, 0.35865, 0.29465, 0.18676, 0.247, 0.26727, 0.20435, 0.205, 0.20112, 0.19801, 0.21693, 0.23084, 0.21398, 0.20877, 0.20716, 0.20011, 0.20956, 0.19946, 0.15785, 0.15114, 0.23714, 0.27648, 0.28812, 0.29788, 0.27346, 0.20981, 0.23184, 0.29285, 0.25757, 0.34681, 0.33253, 0.3105, 0.27607, 0.28646, 0.24668, 0.22378, 0.22117, 0.21325, 0.20983, 0.22567, 0.27751, 0.25045, 0.28671, 0.26349, 0.25984, 0.26025, 0.25987, 0.24826, 0.2834, 0.28228, 0.28218, 0.29474, 0.28649, 0.29791, 0.25566, 0.27613, 0.21489, 0.21577, 0.22381], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"climatologues": {
men: [0.07989, 0.0869, 0.15146, 0.14228, 0.14228, 0.16047, 0.20118, 0.3081, 0.2373, 0.23633, 0.39897, 0.28279, 0.20127, 0.22846, 0.2524, 0.25274, 0.21599, 0.22808, 0.22797, 0.22104, 0.25663, 0.2074, 0.25659, 0.39427, 0.41262, 0.41262, 0.5004, 0.89273, 0.53675, 0.53714, 0.53288, 0.53338, 0.53371, 0.46535, 0.37894, 0.37024, 0.3404, 0.34435, 0.31664, 0.3, 0.29972, 0.28058, 0.32854, 0.30093, 0.30232, 0.30232, 0.30229, 0.30334, 0.32552, 0.32994, 0.32701, 0, 0, 0, 0.050056, 0.11939, 0.10645, 0.095055, 0.094933, 0.093532, 0.093458, 0.13656, 0.13654, 0.13275, 0.14031, 0.13931, 0.13653, 0.13652, 0.1402, 0.073012, 0.1108, 0.21391, 0.29972, 0.30762, 0.28718, 0.16698, 0.16176, 0.16817, 0.16815, 0.1583, 0.16227, 0.18185, 0.22214, 0.18926, 0.13569, 0.096879, 0.043704, 0.043101, 0.039441, 0.045345, 0.074725, 0.10285, 0.14515, 0.18939, 0.19182, 0.1751, 0.16862, 0.16016, 0.17218, 0.18106, 0.19085, 0.18526, 0.19164, 0.19303, 0.1812, 0.17072, 0.15724, 0.099354, 0.085462, 0.096692], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"échange de seringues": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.080106, 0.074661, 0.074696, 0.067258, 0.067258, 0.067258, 0.067229, 0.070162, 0.1315, 0.20977, 0.23415, 0.28634, 0.28652, 0.28575, 0, 0, 0, 0.95635, 0.95605, 0.95575, 0.95485, 0.95475, 0.95451, 0.95425, 0.95865, 0.95865, 0.95856, 0.96011, 0.96077, 0.96092, 0.96055, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11741, 0.11747, 0.17259, 0.17256, 0.2535, 0.25311, 0.19953, 0.22546, 0.1546, 0.21162, 0.21169, 0.21199, 0.21199, 0.212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine porcine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.056102, 0.053678, 0.053752, 0.053766, 0.053792, 0.053768, 0.053818, 0.053765, 0.053779, 0.053804, 0.054064, 0.054064, 0.054064, 0.054042, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95342, 0.95328, 0.95344, 0.95377, 0.9551, 0.9551, 0.95518, 0.95902, 0.95968, 0.95742, 0.95538, 0.95335, 0.95397, 0.9541, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection au vih": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17878, 0.17887, 0.17911, 0.17909, 0.17944, 0.31142, 0.3113, 0.31104, 0.63706, 0.63717, 0.63739, 0.63828, 0.63828, 0.63833, 0.96032, 0.96098, 0.95872, 0.95668, 0.95464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe pandémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95342, 0.95328, 0.95344, 0.95377, 0.9551, 0.9551, 0.95518, 0.95902, 0.57458, 0.57323, 0.40568, 0.40482, 0.40508, 0.40514, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Académie des sciences": {
men: [0, 0, 0.065135, 0.085722, 0.085722, 0.085676, 0.12203, 0.07983, 0.079893, 0.079567, 0.08748, 0.087515, 0.087627, 0.05682, 0.056776, 0.11095, 0.069639, 0.069673, 0.069641, 0.069706, 0.069637, 0.094221, 0.094265, 0.094721, 0.094721, 0.094721, 0.094681, 0.21014, 0.13369, 0, 0, 0, 0, 0.29665, 0.29654, 0.19114, 0.1711, 0.35404, 0.35392, 0.32373, 0.32343, 0.32339, 0.31035, 0.21595, 0.17993, 0.18698, 0.18263, 0.12252, 0.12261, 0.14555, 0.15165, 0, 0, 0, 0.024259, 0.056173, 0.079795, 0.092155, 0.10063, 0.097883, 0.096742, 0.12239, 0.13662, 0.13494, 0.13109, 0.12252, 0.12257, 0.12646, 0.17414, 0.14576, 0.17446, 0.17445, 0.20919, 0.22303, 0.22923, 0.18947, 0.15756, 0.15052, 0.14656, 0.19044, 0.19015, 0.21833, 0.23038, 0.32726, 0.23238, 0.13245, 0.082049, 0.082049, 0.069447, 0.051612, 0.04571, 0.13759, 0.13387, 0.10556, 0.10927, 0.098388, 0.096267, 0.089194, 0.087042, 0.082727, 0.081638, 0.081212, 0.08003, 0.078892, 0.089076, 0.080619, 0.056868, 0.049563, 0.035988, 0.035992], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"colmatage de la fuite": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96184, 0.96184, 0.96108, 0.95984, 0.95969, 0.95935, 0.95944, 0.95865, 0.95908, 0.95904, 0.95998, 0.96196, 0.96189, 0.96185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pluviométrie": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046815, 0.04684, 0.058548, 0.058392, 0.058358, 0.10142, 0.9566, 0.9566, 0.95584, 0.95461, 0.95446, 0.95413, 0.95422, 0.95342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14585, 0.14614, 0.29637, 0.29625, 0.29601, 0.29597, 0.29602, 0.96702, 0.41711, 0.41711, 0.41714, 0.41882, 0.30827, 0.30755, 0.16688, 0.16652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"noaa": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.010719, 0.012735, 0.027655, 0.027648, 0.036041, 0.036029, 0.042, 0.041961, 0.045658, 0.090643, 0.090618, 0.091036, 0.091036, 0.091028, 0, 0, 0.47685, 0.47666, 0.32654, 0.3264, 0.32658, 0.31395, 0.42261, 0.26912, 0.22608, 0.26628, 0.26628, 0.26607, 0.26573, 0.20484, 0.11417, 0.11418, 0.11942, 0.11948, 0.11947, 0.11211, 0.075876, 0.10674, 0.12595, 0.30786, 0.30786, 0.30813, 0.3081, 0.53402, 0.56092, 0.56084, 0.69182, 0.69075, 0.69048, 0.57446, 0.50044, 0.50053, 0.36122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96412, 0.96447, 0.96381, 0.96398, 0.96398, 0.96358, 0.96283, 0.96132, 0.96144, 0.96198, 0.96301, 0.96341, 0.96371], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"calotte glaciaire": {
men: [0, 0, 0, 0.27223, 0.23111, 0.25071, 0.25083, 0.26547, 0.27488, 0.27376, 0.20728, 0.12714, 0.11253, 0.083605, 0.087862, 0.083573, 0.083594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025195, 0.025185, 0.025198, 0.024143, 0.062062, 0.361, 0.36104, 0.36058, 0.29391, 0.24785, 0.24753, 0.2475, 0.24741, 0.099748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.64023, 0.63886, 0.42219, 0.42246, 0.42252, 0.42304, 0.42268, 0.42283, 0.42254, 0.42262, 0.42262, 0.42244, 0.42211, 0.54393, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gel microbicide": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47234, 0.47257, 0.47321, 0.47315, 0.96065, 0.95917, 0.95878, 0.958, 0.95786, 0.95803, 0.95835, 0.9597, 0.9597, 0.95977, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rendements agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9537, 0.95394, 0.95441, 0.95397, 0.95486, 0.95392, 0.95417, 0.95462, 0.70547, 0.24672, 0.24672, 0.046648, 0.046737, 0.046849, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.084784, 0.084749, 0.084795, 0.084758, 0.084531, 0.084482, 0.14325, 0.18167, 0.18167, 0.18153, 0.11281, 0.11279, 0.088448, 0.073337, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.069643, 0.11071, 0.036029, 0.041929, 0.049621, 0.05072, 0.040403, 0.040387, 0.034436, 0.034431, 0.034437, 0.024277, 0.024311, 0.024311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95378, 0.95532, 0.95598, 0.95613, 0.95576, 0.95661, 0.9562, 0.95673, 0.95631, 0.95375, 0.9532, 0.17795, 0.17772, 0.17772, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"charge virale": {
men: [0.22243, 0.22203, 0.26994, 0.26965, 0.31012, 0.25373, 0.25385, 0.25398, 0.25418, 0.18529, 0.18529, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27695, 0.27699, 0.27688, 0.27713, 0.27701, 0.27716, 0.20613, 0.2521, 0.25195, 0.25198, 0.43621, 0.43621, 0.43587, 0.3255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1488, 0.096457, 0.086914, 0.086309, 0.072984, 0.090919, 0.088849, 0.10416, 0.10415, 0.10417, 0.13317, 0.14032, 0.14032, 0.14034, 0.060606, 0.10447, 0.13508, 0.14942, 0.38243, 0.31461, 0.9541, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement industriel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.81378, 0.81365, 0.81336, 0.96451, 0.9637, 0.67928, 0.70679, 0.70749, 0.70894, 0.70889, 0.59842, 0.51777, 0.51777, 0.51823, 0.085342, 0.06529, 0.053655, 0.053647, 0.053754, 0.064045, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise scientifique": {
men: [0, 0, 0, 0.51391, 0.36119, 0.361, 0.41475, 0.41497, 0.38188, 0.23345, 0.23345, 0.23354, 0.23384, 0.23373, 0.23355, 0.24344, 0.2435, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15556, 0.15544, 0.1554, 0.15101, 0.15096, 0.19212, 0.28524, 0.28521, 0.24696, 0.20792, 0.20888, 0.20888, 0.20152, 0.28146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.062197, 0.062208, 0.10011, 0.10025, 0.10025, 0.10025, 0.10066, 0.10073, 0.13975, 0.29635, 0.19731, 0.1174, 0.10928, 0.11616, 0.078692, 0.07872, 0.054083, 0.054093, 0.054093, 0.05407, 0.054028, 0.050654, 0.05066, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"météorologues": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0084696, 0.0084717, 0.012255, 0.0088258, 0.0084022, 0.0085929, 0.0093455, 0.01063, 0.010946, 0.012029, 0.022398, 0.02024, 0.016614, 0.016691, 0, 0, 0, 0, 0, 0.033253, 0.033681, 0.033673, 0.026602, 0.026593, 0.026585, 0.027817, 0.031209, 0.031843, 0.031834, 0.030759, 0.030759, 0.038023, 0.045024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97178, 0.96949, 0.96742, 0.96537, 0.966, 0.96613, 0.96731, 0.67654, 0.38869, 0.30386, 0.10588, 0.092803, 0.064772, 0.057261, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"himalaya": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.079742, 0.1194, 0.13218, 0.13212, 0.13224, 0.13211, 0.13215, 0.079585, 0.29865, 0.29865, 0.26534, 0.26522, 0.20554, 0.20604, 0.21609, 0.1924, 0.19258, 0.19271, 0.23969, 0.23621, 0.22328, 0.25528, 0.17322, 0.17316, 0.18325, 0.22436, 0.24722, 0.24716, 0.2122, 0.22343, 0.20637, 0.20635, 0.096654, 0.064776, 0.071043, 0.071016, 0.072614, 0.072583, 0.072623, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10488, 0.1048, 0.1325, 0.14998, 0.15007, 0.15023, 0.15029, 0.96217], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sichuan": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33192, 0.39025, 0.41735, 0.42562, 0.6027, 0.70998, 0.67942, 0.67932, 0.6791, 0.67889, 0.74179, 0.75703, 0.82713, 0.82691, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phénomènes météorologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10364, 0.10454, 0.09663, 0.07707, 0.077108, 0.077072, 0.090294, 0.090206, 0.09023, 0.090272, 0.096851, 0.096851, 0.096851, 0.09681, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34338, 0.34343, 0.43972, 0.43934, 0.4395, 0.4392, 0.43928, 0.43928, 0.75434, 0.96911, 0.9676, 0.35653, 0.35673, 0.32756, 0.19236, 0.19242], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités suédoises": {
men: [0.96293, 0.96119, 0.96058, 0.95958, 0.95958, 0.95906, 0.9595, 0.96001, 0.96076, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géologues": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01288, 0.01305, 0.013058, 0.012325, 0.013937, 0.091621, 0.088707, 0.090545, 0.090545, 0.11872, 0.13555, 0.13986, 0.12627, 0.11183, 0.10988, 0.10993, 0.093884, 0.10432, 0.13098, 0.052412, 0.19189, 0.36145, 0.36145, 0.37661, 0.34194, 0.3189, 0.29326, 0.35609, 0.3568, 0.35625, 0.49486, 0.49446, 0.45291, 0.38051, 0.29696, 0.11303, 0.069905, 0.050144, 0.047484, 0.051077, 0.066655, 0.16246, 0.11805, 0.11382, 0.080115, 0.080213, 0.073391, 0.074242, 0.074191, 0.045987, 0.047923, 0.047903, 0.051393, 0.051313, 0.049225, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"effort de recherche": {
men: [0, 0, 0, 0, 0, 0.46376, 0.085541, 0.052635, 0.052677, 0.052462, 0.049259, 0.049279, 0.049342, 0.049319, 0.049281, 0.052218, 0.052231, 0.052257, 0.052233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045799, 0.043279, 0.043338, 0.043332, 0.043664, 0.043597, 0.043579, 0.043544, 0.045123, 0.059838, 0.1719, 0.17214, 0.17214, 0.17216, 0, 0, 0, 0, 0.62516, 0.71292, 0.62947, 0.665, 0.50434, 0.42877, 0.33406, 0.33412, 0.33412, 0.33398, 0.3613, 0.24109, 0.24112, 0.24696, 0.088444, 0.031061, 0.03208], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues injectables": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22068, 0.22074, 0.1774, 0.17826, 0.17826, 0.17826, 0.17818, 0.17852, 0.17895, 0.19437, 0.19283, 0.19301, 0.30836, 0.30753, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24602, 0.24613, 0.24647, 0.24644, 0.24693, 0.40314, 0.40298, 0.40265, 0.40259, 0.22431, 0.28822, 0.28862, 0.28862, 0.28864, 0.20578, 0.20592, 0.20544, 0.205, 0.20457, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transport maritime": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.044775, 0.19012, 0.64169, 0.64152, 0.64448, 0.64448, 0.64442, 0.64546, 0.64591, 0.64601, 0.38745, 0.55198, 0.55175, 0.39883, 0.093413, 0.093163, 0.093109, 0.068714, 0.068625, 0.047046, 0.047009, 0.038601, 0.038595, 0.038581, 0.03888, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antigène": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.72651, 0.72789, 0.72964, 0.39603, 0.34951, 0.34984, 0.35006, 0.30626, 0.19692, 0.17501, 0.16312, 0.13621, 0.13616, 0.13612, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18265, 0.18274, 0.18299, 0.23257, 0.1475, 0.24543, 0.24533, 0.24513, 0.17982, 0.17985, 0.14808, 0.12048, 0.12048, 0.12049, 0.066197, 0.066243, 0.066087, 0.065946, 0.088065, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
