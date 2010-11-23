var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"forage pétrolier en haute mer": {
men: [0.95671, 0.95807, 0.95196, 0.95235, 0.95278, 0, 0.95408, 0.96156, 0.96362, 0.964, 0.96433, 0.96435, 0.96456, 0.96585, 0.96643, 0.96572, 0.96621, 0.96611, 0.96599, 0.96649, 0.96272, 0.36113, 0.27409, 0.22473, 0.22476, 0.22488, 0.22474, 0.22471, 0.22467, 0.22483, 0.22484, 0.22493, 0.22498, 0.22484, 0.22462, 0, 0, 0, 0, 0, 0, 0, 0.16593, 0.15345, 0.15353, 0.15355, 0.15356, 0.15361, 0.15357, 0.21719, 0.21739, 0.21729, 0.21735, 0.21731, 0.21727, 0.21715, 0.50505, 0.95027, 0.94947, 0.94946, 0.94929, 0.94957, 0.9495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc obturateur": {
men: [0.091019, 0.25928, 0.5703, 0.57053, 0.57079, 0.95139, 0.95087, 0.9512, 0.95121, 0.95159, 0.95191, 0.45834, 0.45844, 0.45905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12317, 0.13476, 0.096358, 0.094964, 0.09348, 0.088525, 0.088538, 0.093027, 0.093035, 0.093047, 0.093071, 0.097318, 0.10184, 0.11951, 0.052969, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95226, 0.95185, 0.9517, 0.95166, 0.95177, 0.95208, 0.95687, 0.95444, 0.95409, 0.95367, 0.95358, 0.95313, 0.95304, 0.95198, 0.94719, 0.94769, 0.94782, 0.94792, 0.94766, 0.9475, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre la marée noire": {
men: [0.089873, 0.08816, 0.099021, 0.10406, 0.11014, 0.089029, 0.077448, 0.055371, 0.064022, 0.069745, 0.080764, 0.076475, 0.096132, 0.091231, 0.09637, 0.095502, 0.11082, 0.1126, 0.11353, 0.12506, 0.14622, 0.15254, 0.15504, 0.19743, 0.19746, 0.22469, 0.26977, 0.2193, 0.22451, 0.21653, 0.071255, 0.071282, 0.071297, 0.071255, 0.048986, 0.049009, 0.058514, 0.0585, 0.10776, 0.081989, 0.080247, 0.053933, 0.053894, 0.059679, 0.092896, 0.090902, 0.090913, 0.090937, 0.090915, 0.09063, 0.098186, 0.098141, 0, 0.19244, 0.10975, 0.10969, 0.10977, 0.10972, 0.10963, 0.11116, 0.11114, 0.11117, 0.11116, 0.1114, 0.11133, 0.11128, 0.11126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17329, 0.27691, 0.95225, 0.95287, 0.95313, 0.95325, 0.9535, 0.954, 0.95672, 0.95508, 0.95425, 0.95422, 0.95431, 0.95549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dommages environnementaux": {
men: [0.329, 0.32947, 0.3294, 0.32953, 0.32968, 0.38106, 0.24581, 0.2784, 0.2784, 0.27851, 0.27861, 0.27861, 0.27868, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2294, 0.53143, 0.50629, 0.52111, 0.70657, 0.70676, 0.70685, 0.70703, 0.70741, 0.70942, 0.63748, 0.63693, 0.63691, 0.63696, 0.55877, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polluants organiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53705, 0.53815, 0.72409, 0.72456, 0.72476, 0.72485, 0.72504, 0.72542, 0.95267, 0.95103, 0.95021, 0.95018, 0.95026, 0.95144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"régions côtières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94804, 0.94999, 0.95225, 0.95287, 0.95313, 0.95325, 0.9535, 0.5936, 0.5953, 0.59427, 0.59376, 0.59374, 0.59379, 0.59453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moratoire sur les forages": {
men: [0.03953, 0.042803, 0.11197, 0.087058, 0.090293, 0.094833, 0.09864, 0.096396, 0.10885, 0.18011, 0.18017, 0.18018, 0.1863, 0.12829, 0.23248, 0.23231, 0.12576, 0.45468, 0.45462, 0.45485, 0.45527, 0.56045, 0.71323, 0.7133, 0.71341, 0.71377, 0.71333, 0.71324, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21487, 0.21483, 0.21471, 0.21486, 0.21476, 0.24808, 0.24212, 0.24207, 0.23971, 0.20183, 0.21063, 0.20164, 0.20155, 0.20152, 0.16698, 0.167, 0.16706, 0.1664, 0.16598, 0.060063, 0.066763, 0.066757, 0, 0.46795, 0.32158, 0.31055, 0.31072, 0.31076, 0.31079, 0.3107, 0.31065, 0.31129, 0.31203, 0.31223, 0.31232, 0.31236, 0.31244, 0.1611, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"semences paysannes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21023, 0.21034, 0.21021, 0.21018, 0.037174, 0.0372, 0.037203, 0.037217, 0.037225, 0.037203, 0.037166, 0.037184, 0.03711, 0.043, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94439, 0.94417, 0.9412, 0.94204, 0.94161, 0.94187, 0.35874, 0.35867, 0.35848, 0.35872, 0.35856, 0.35826, 0.35826, 0.3582, 0, 0, 0, 0, 0, 0, 0.94202, 0.94212, 0.94243, 0.46276, 0.46158, 0.46142, 0.46122, 0.46117, 0.46095, 0.46091, 0.4604, 0.4605, 0.46074, 0.4608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"effort de recherche": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052702, 0.043063, 0.043085, 0.038673, 0.038669, 0.038662, 0.038689, 0.035179, 0.033678, 0.033685, 0.033665, 0.033632, 0.03766, 0.041277, 0.022992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2475, 0.60875, 0.71983, 0.8903, 0.88991, 0.88917, 0.88916, 0.889, 0.88926, 0.88919, 0.89112, 0.8905, 0.91307, 0.91292, 0.96599, 0.95869, 0.71669, 0.26563, 0.11745, 0.11741, 0.11736, 0.11735, 0.10521, 0.099362, 0.099251, 0.099273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22991, 0.19558, 0.15258, 0.15265, 0.15272, 0.15275, 0.16548, 0.1107, 0.1107, 0.11396, 0.095986, 0.10222, 0.10941], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prospection pétrolière": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95694, 0.79781, 0.5327, 0.53307, 0.47786, 0.47804, 0.47814, 0.47786, 0.47888, 0.47911, 0.60737, 0.53861, 0.53835, 0.53831, 0.4964, 0.4517, 0.53647, 0.53655, 0.57453, 0.57458, 0.57465, 0.5748, 0.64472, 0.6427, 0, 0, 0, 0, 0.93047, 0.92997, 0.080339, 0.080304, 0.080236, 0.080236, 0.080221, 0.080245, 0.080239, 0.080413, 0.080357, 0.080322, 0.08031, 0.080307, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"large de la Louisiane": {
men: [0.078767, 0.077788, 0.077771, 0.077803, 0.077838, 0.080487, 0.08669, 0.10411, 0.11017, 0.11021, 0.11536, 0.11536, 0.14574, 0.063655, 0, 0, 0.2135, 0.1251, 0.059219, 0.062002, 0.06755, 0.061666, 0.06168, 0.057409, 0.057418, 0.057447, 0.057412, 0.046849, 0.042486, 0.040582, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36277, 0.36261, 0.36255, 0.36254, 0.95177, 0.95208, 0.48893, 0.3953, 0.39516, 0.39499, 0.39495, 0.39476, 0.43966, 0.43917, 0.36281, 0.363, 0.36305, 0.36309, 0.36299, 0.36292, 0.3777, 0.94368, 0.94429, 0.94455, 0.94466, 0.94491, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"touchés par la marée noire": {
men: [0.056049, 0.058239, 0.054884, 0.050866, 0.049805, 0.055747, 0.055717, 0.059666, 0.063254, 0.076456, 0.09405, 0.095844, 0.12523, 0.14782, 0.11039, 0.11827, 0.17565, 0.15875, 0.12239, 0.12246, 0.1135, 0.11361, 0.11049, 0.12403, 0.13054, 0.1306, 0.10761, 0.045707, 0.048073, 0.047062, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1758, 0.17577, 0.17576, 0.17578, 0.17584, 0.17515, 0.17471, 0.17464, 0.17457, 0.17455, 0.17447, 0.32682, 0.32645, 0.32652, 0.94422, 0.94434, 0.94444, 0.94418, 0.94402, 0.94596, 0.94822, 0.94883, 0.94909, 0.94921, 0.94945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"puits macondo": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.016603, 0.014064, 0.014441, 0.014515, 0.015778, 0.017633, 0.016713, 0.017102, 0.018174, 0.01529, 0.014861, 0.015235, 0.020385, 0.026831, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085148, 0.082901, 0.082945, 0.082952, 0.082963, 0.082985, 0.082964, 0.082704, 0.1, 0.17747, 0.17751, 0.20002, 0.13954, 0.13946, 0.12377, 0.12747, 0.12737, 0.12736, 0.12734, 0.12738, 0.12737, 0.15785, 0.15774, 0.16118, 0.16116, 0.11497, 0.46495, 0.4651, 0.59669, 0.59517, 0.59496, 0.5947, 0.59464, 0.59436, 0.5943, 0.70647, 0.70663, 0.94769, 0.94782, 0.94792, 0.94766, 0.9475, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.095737, 0.095734, 0.095742, 0.095861, 0.095983, 0.096075, 0.096139, 0.096182, 0.096228, 0.11894, 0.11902, 0.071965, 0.071963, 0.12856, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"atteintes à l' environnement": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074264, 0.067714, 0.067749, 0.055096, 0.030278, 0.022011, 0.030294, 0.030296, 0.030307, 0.030314, 0.030296, 0.026725, 0.026738, 0.021093, 0, 0.19805, 0.19804, 0.21001, 0.28515, 0.40622, 0.40628, 0.4065, 0.3474, 0.34744, 0.34753, 0.39861, 0.39736, 0.59698, 0.32958, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57675, 0.57528, 0.57508, 0.57482, 0.57477, 0.57449, 0.57444, 0.5738, 0.57393, 0.94579, 0.94592, 0.94602, 0.79498, 0.79485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communications électroniques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16032, 0.11513, 0.18009, 0.18012, 0.16585, 0.14741, 0.14743, 0.13467, 0.12952, 0.096514, 0.091099, 0.096901, 0.087819, 0.087803, 0.053181, 0.051721, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4097, 0.52094, 0.53685, 0.53662, 0.53656, 0.5511, 0.57832, 0.57167, 0.60263, 0.58897, 0.5967, 0.59676, 0.60051, 0.60597, 0.48663, 0.32448, 0.2751, 0.27518, 0.27521, 0.21711, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sites nucléaires": {
men: [0.23194, 0.23228, 0.23223, 0.23232, 0.23243, 0.2875, 0, 0, 0, 0, 0, 0, 0, 0.053296, 0.048333, 0.045971, 0.041663, 0.041567, 0.041562, 0.040635, 0.040672, 0.04054, 0.042996, 0.047618, 0.055834, 0.060273, 0.081566, 0, 0.12978, 0.15738, 0.28997, 0.2959, 0.29597, 0.37603, 0.27, 0.29698, 0.29639, 0.29632, 0.40795, 0.42696, 0.42715, 0.47896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19596, 0.19583, 0.33231, 0.33225, 0.33224, 0.33228, 0.33239, 0.33109, 0.27745, 0.61235, 0.61208, 0.61202, 0.39349, 0.39346, 0, 0.27187, 0.079031, 0.079042, 0.07905, 0.2681, 0.17245, 0.1728, 0.18053, 0.18065, 0.18069, 0.18072, 0.18228, 0.16518, 0.13332, 0.10499, 0.13794, 0.13793, 0.13795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion collective": {
men: [0.15568, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17833, 0.35025, 0.26829, 0.26853, 0.16933, 0.16938, 0.16934, 0.13723, 0.18219, 0.093788, 0.093747, 0.093668, 0.093668, 0.093651, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16413, 0.16447, 0.16486, 0.28359, 0.28366, 0.23571, 0.38222, 0.38242, 0.38351, 0.38286, 0.38252, 0.38251, 0.38254, 0.50882, 0.56373, 0.56427, 0.41568, 0.34267, 0.46067, 0.61121, 0.61161, 0.61219, 0.61217, 0.61565, 0.61595, 0.61602, 0.48686], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"faux médicaments": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95555, 0.95513, 0.95433, 0.95433, 0.95415, 0.95443, 0.47718, 0.47822, 0.47788, 0.47768, 0.4776, 0.59057, 0.59063, 0.59082, 0.35513, 0.35422, 0.35409, 0.35394, 0.3539, 0.35374, 0.94321, 0.51391, 0.25412, 0.15121, 0.15123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine de la marée noire": {
men: [0.035738, 0.036655, 0.071485, 0.073046, 0.074254, 0.078768, 0.07496, 0.061445, 0.072269, 0.085501, 0.11891, 0.12332, 0.12099, 0.11675, 0.11537, 0.13508, 0.10192, 0.10911, 0.10609, 0.10767, 0.11394, 0.11323, 0.094181, 0.12117, 0.14561, 0.20692, 0.2286, 0.2886, 0.31736, 0.21213, 0.30419, 0.30431, 0.95659, 0.95602, 0.95508, 0.95553, 0.25586, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063645, 0.05979, 0.055877, 0.059601, 0.070406, 0.19099, 0.19098, 0.19095, 0.19101, 0.19099, 0.19141, 0.19127, 0.19119, 0.23098, 0.44889, 0.59533, 0.95284, 0.94912, 0.52594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitation pétrolière": {
men: [0.14254, 0.14144, 0.1708, 0.20283, 0.19053, 0.18328, 0.14988, 0.14394, 0.1453, 0.14536, 0.15731, 0.15731, 0.17663, 0.16421, 0.16431, 0.1857, 0.085504, 0, 0, 0.09286, 0.11408, 0.12405, 0.1186, 0.11861, 0.11863, 0.11869, 0.11302, 0.10607, 0.10605, 0.10613, 0.11947, 0.11951, 0.16524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22127, 0.2165, 0.18799, 0.18796, 0.21348, 0.20491, 0.1541, 0.10023, 0.10022, 0.10021, 0.10024, 0.093652, 0.093856, 0.09379, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94456, 0.94351, 0.56033, 0.56063, 0.5607, 0.56076, 0.56061, 0.41493, 0.41578, 0.28234, 0.28252, 0.2826, 0.28263, 0.28271, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage pétrolier": {
men: [0.18205, 0.18231, 0.13165, 0.20921, 0.20566, 0.21223, 0.16972, 0.2027, 0.27342, 0.30222, 0.33407, 0.24789, 0.24794, 0.24827, 0.26065, 0.26046, 0.2116, 0.14344, 0.16001, 0.1551, 0.24639, 0, 0, 0, 0, 0, 0, 0, 0, 0.11928, 0.11928, 0.11933, 0.11935, 0.12394, 0.11888, 0.11894, 0.081954, 0.0636, 0.063569, 0.063565, 0.038878, 0.085591, 0.08553, 0.067161, 0.064696, 0.064702, 0.06471, 0.059662, 0.060477, 0.056409, 0.064111, 0.074119, 0.069208, 0.069195, 0.13179, 0, 0, 0, 0, 0, 0, 0, 0.067499, 0.078094, 0.18371, 0.13793, 0.152, 0.14993, 0.14995, 0.22113, 0.22026, 0.29418, 0.36416, 0.364, 0.36396, 0.36379, 0.35773, 0.14388, 0.10017, 0.10291, 0.10292, 0.10356, 0.10353, 0.10351, 0.10373, 0.073876, 0.074023, 0.074043, 0.074052, 0.072996, 0.049015, 0.12397, 0.11587, 0.11867, 0.11866, 0.11867, 0.11882, 0.11897, 0.099615, 0.099681, 0.10837, 0.10842, 0.10844, 0.11397, 0.096509, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bonus gouvernemental": {
men: [0.079495, 0.079609, 0.079592, 0.079624, 0.07966, 0.079667, 0.079624, 0.079651, 0.079652, 0.079684, 0.07971, 0.079712, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.81326, 0.81301, 0.81243, 0.81255, 0.81298, 0.81305, 0.81316, 0.81337, 0.81317, 0.81062, 0.81134, 0.81098, 0.81119, 0.81104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"calotte glaciaire": {
men: [0.29123, 0.32466, 0.32459, 0.23393, 0.19869, 0.21568, 0.21556, 0.2281, 0.236, 0.2361, 0.17882, 0.10964, 0.096939, 0.072154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33896, 0.2167, 0.21666, 0.2067, 0.19212, 0.19218, 0.19143, 0.19094, 0.19087, 0.19785, 0.20543, 0.20533, 0.20531, 0.20508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62708, 0.626, 0.41421, 0.4142, 0.41423, 0.41475, 0.41528, 0.41568, 0.41595, 0.41614, 0.41634, 0.41642, 0.41669, 0.53829, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forages en eaux profondes": {
men: [0.042118, 0.041157, 0.056199, 0.056222, 0.056581, 0.059356, 0.059969, 0.062559, 0.07275, 0.090857, 0.090887, 0.099868, 0.12081, 0.13171, 0.29818, 0.1808, 0.10151, 0.1015, 0.10149, 0.19848, 0.15215, 0.15689, 0.17589, 0.17591, 0.17593, 0.17602, 0.17591, 0.17589, 0.10189, 0.21284, 0.18184, 0.1686, 0.16863, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19667, 0.2935, 0.15412, 0.1137, 0.11365, 0.11368, 0.10848, 0.10846, 0.10278, 0.09778, 0.097737, 0.15266, 0.14871, 0.14868, 0.10315, 0.12564, 0.13578, 0.2031, 0.20301, 0.20298, 0.21573, 0.21575, 0.23343, 0.25317, 0.30736, 0.29238, 0.33491, 0.33487, 0.94846, 0.32115, 0.12902, 0.11705, 0.11712, 0.11713, 0.11714, 0.11711, 0.11709, 0.11733, 0.093887, 0.093948, 0.093973, 0.093985, 0.094009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations pétrolières": {
men: [0.61281, 0.61368, 0.61356, 0.61381, 0.61408, 0.61413, 0.6138, 0.61401, 0.61402, 0.71285, 0.71309, 0.7131, 0.71326, 0.62403, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33818, 0.33813, 0.33836, 0.33839, 0.33851, 0.33858, 0.2212, 0.125, 0.12506, 0.10538, 0.10536, 0.1053, 0.1053, 0.088157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fond de la mer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.10483, 0.10614, 0.10618, 0.10618, 0.10961, 0.097273, 0.19633, 0.19619, 0.18085, 0.16765, 0.16763, 0.16772, 0.17896, 0.27086, 0.18907, 0.18909, 0.18912, 0.18922, 0.1891, 0.2005, 0.12102, 0.1211, 0.12319, 0.13329, 0.13332, 0.13324, 0.13311, 0.14367, 0, 0.36204, 0.36187, 0.14996, 0.14547, 0.14129, 0.15269, 0.15272, 0.1588, 0.15881, 0.15883, 0.15887, 0.20966, 0.209, 0.20919, 0.24577, 0.22582, 0.38169, 0.35055, 0.36301, 0.36325, 0.3631, 0.36279, 0.36279, 0.36272, 0.36283, 0.3132, 0.31388, 0.31366, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières solides": {
men: [0.11096, 0.11112, 0.10978, 0.10633, 0.10632, 0.10623, 0.058141, 0.05648, 0.059746, 0.059893, 0.06515, 0.057412, 0.059081, 0.033838, 0.033858, 0.033833, 0.034397, 0.036381, 0.037009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29597, 0.29591, 0.29576, 0.94705, 0.94664, 0.94584, 0.94583, 0.94566, 0.94594, 0.94587, 0.94792, 0.94726, 0.36822, 0.36816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94945, 0.94996, 0.95267, 0.95103, 0.95021, 0.95018, 0.95026, 0.95144, 0.95266, 0.95357, 0.45802, 0.45822, 0.45844, 0.45853, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agence océanique": {
men: [0.099336, 0.098257, 0.098236, 0.098276, 0.09832, 0.041486, 0.041464, 0.14932, 0.11508, 0.13736, 0.1406, 0.14061, 0.14064, 0.15937, 0.17089, 0.17745, 0.17754, 0.17752, 0.1775, 0.2218, 0.21617, 0.05254, 0.26587, 0.2808, 0.28085, 0.28099, 0.28081, 0.28078, 0.28074, 0.28093, 0.28095, 0.28106, 0.28112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17335, 0.17372, 0.1736, 0.17353, 0.1735, 0.17349, 0.17351, 0.17357, 0.17289, 0.22363, 0.3179, 0.31776, 0.31773, 0.31758, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15197, 0.12979, 0.1298, 0.12984, 0.12991, 0.13028, 0.13005, 0.12994, 0.12994, 0.12995, 0.15651, 0.15671, 0.15686, 0.20117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
