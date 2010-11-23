var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"production photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97531, 0.9776, 0.97933, 0.98032, 0.98032, 0.98507, 1, 1, 1, 0.97753, 0.96559, 0.24345, 0.37606, 0.37606, 0.21968, 0.21962, 0.21962, 0.42192, 0.42132, 0.42117, 0.42117, 0.42113, 0.42096, 0.42113, 0.42296, 0.97354, 0.96908, 0.96834, 0.96834, 0.9687, 0.9687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98311, 0.98094, 0.98311, 0.98311, 0.98311, 0.98311, 0.98311, 0.98435, 0.98354, 0.98347, 0.9848, 0.98403, 0.98318, 0.58055, 0.43184, 0.32959, 0.1777, 0.17725, 0.17725, 0.17725, 0.17707, 0.17661, 0.17672, 0.17682, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière photovoltaïque": {
men: [0.53901, 0.25388, 0.18514, 0.18514, 0.18479, 0.20972, 0.20993, 0.21004, 0.20982, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.66903, 0.76223, 0.78998, 0.78998, 0.79016, 0.80644, 0.80644, 0.82136, 0.8202, 0.70614, 0.70614, 0.68449, 0.68421, 0.48768, 0.34964, 0.16057, 0.16062, 0.24957, 0.24957, 0.20804, 0.20804, 0.15676, 0.15238, 0.17479, 0.17479, 0.18084, 0.18104, 0.30098, 0.37755, 0.78674, 0.78587, 0, 0, 0, 0, 0.51954, 0.88702, 0.6614, 0.6614, 0.6614, 0.6614, 0.6614, 0.69397, 0.73559, 0.7623, 0.77467, 0.79985, 0.79916, 0.79973, 0.8138, 0.72664, 0.99182, 0.98929, 0.98929, 0.98929, 0.98927, 0.68743, 0.61782, 0.35201, 0.29442, 0.10157, 0.072622, 0.072187, 0.071991, 0.059794, 0.059806, 0.059837, 0.059837, 0.059812, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97531, 0.9776, 0.97933, 0.98032, 0.98032, 0.98507, 1, 1, 1, 0.45117, 0.20132, 0.23613, 0.23608, 0.23608, 0.20535, 0.20529, 0.19841, 0.19019, 0.18992, 0.18985, 0.18985, 0.18984, 0.18976, 0.14747, 0.1284, 0, 0, 0.068983, 0.068983, 0.069009, 0.074507, 0.082918, 0.083127, 0.083195, 0.083195, 0.083214, 0.083305, 0.97206, 0.97278, 0.97932, 0.28532, 0, 0, 0, 0, 0.26299, 0.52457, 0.52434, 0.52434, 0.52434, 0.52434, 0.52434, 0.525, 0.52458, 0.98217, 0.98183, 0.98107, 0.98022, 0.98092, 0.97804, 0, 0, 0, 0, 0, 0.24714, 0.24651, 0.24666, 0.12198, 0.077325, 0.077386, 0.077466, 0.24746, 0.24679, 0.2463, 0.30377, 0.30393, 0.30393, 0.30381, 0.24507, 0.24541, 0.24541, 0.37664, 0.96824, 0.54221, 0.54221, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie photovoltaïque": {
men: [0.28617, 0.28672, 0.25973, 0.25973, 0.25215, 0.27262, 0.27289, 0.67423, 0.67353, 0.5243, 0.5243, 0.5243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96372, 0.96111, 0.96092, 0.96092, 0.96113, 0.96086, 0.96086, 0.96983, 0.96846, 0.96811, 0.96811, 0.96802, 0.96764, 0.96802, 0.96773, 0.96882, 0.96908, 0.96834, 0.96834, 0.9687, 0.9687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97485, 0.97478, 0.12993, 0.12982, 0.12971, 0.1298, 0.11723, 0.11788, 0.11769, 0.11739, 0.11739, 0.11739, 0.14629, 0.12441, 0.035955, 0.033949, 0.077717, 0.077778, 0.077859, 0.077393, 0.092, 0.09182, 0.091838, 0.091886, 0.091886, 0.091847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements photovoltaïques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56334, 0.55119, 0.65773, 0.6576, 0.6576, 0.65775, 0.65756, 0.65756, 0.65714, 0.65621, 0.65598, 0.65598, 0.65592, 0.65565, 0.6201, 0.98177, 0, 0, 0.96321, 0.96321, 0.96357, 0.96357, 0.96392, 0.57521, 0.31814, 0.31814, 0.31821, 0.31856, 0.31976, 0.31999, 0.32214, 0.32179, 0, 0, 0, 0, 0, 0.23872, 0.36348, 0.36348, 0.36348, 0.36348, 0.36348, 0.36394, 0.36364, 0.36362, 0.36349, 0.36321, 0.3629, 0.36316, 0.3635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25989, 0.25938, 0.25943, 0.35396, 0.35396, 0.35381, 0.35383, 0.35433, 0.35433, 0.35433, 0.35423, 0.35423, 0.55664, 0.978, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur photovoltaïque": {
men: [0.98054, 0.98242, 0.81979, 0.81979, 0.81824, 0.39822, 0.39861, 0.35455, 0.35418, 0.29942, 0.29942, 0.29942, 0.29958, 0.29992, 0.3001, 0.28431, 0.1854, 0.18524, 0.18567, 0, 0, 0, 0, 0, 0, 0, 0.60433, 0.56485, 0.56332, 0.6152, 0.6152, 0.61534, 0.61516, 0.61516, 0.693, 0.69202, 0.69177, 0.69177, 0.69171, 0.58982, 0.56972, 0.59435, 0.59502, 0.59518, 0.59472, 0.59472, 0.59495, 0.59495, 0.25094, 0.25158, 0.25178, 0.25178, 0.25184, 0.96262, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35615, 0.26815, 0.26815, 0.26815, 0.26815, 0.26815, 0.26849, 0.26827, 0.28637, 0.12354, 0.12715, 0.12704, 0.12714, 0.12725, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations photovoltaïques": {
men: [0.25831, 0.26103, 0.27496, 0.27496, 0.27444, 0.27655, 0.23034, 0.20809, 0.21398, 0.3267, 0.3267, 0.3267, 0.42621, 0.34635, 0.31197, 0.33706, 0.35916, 0.41904, 0.42002, 0.99417, 0.99517, 0.99517, 1, 1, 1, 1, 0.98369, 0.25996, 0.084592, 0.084575, 0.084575, 0.04109, 0.041079, 0.041079, 0.097957, 0.18242, 0.16767, 0.16767, 0.16765, 0.16758, 0.069568, 0.070272, 0.088309, 0.064923, 0.07429, 0.073702, 0.073729, 0.07103, 0.074143, 0.036019, 0.036656, 0.036656, 0.036664, 0.036704, 0.057064, 0.063994, 0.067406, 0.12829, 0.087491, 0.082885, 0.077797, 0.081493, 0.12756, 0.33805, 0.31909, 0.29245, 0.29245, 0.29245, 0.23379, 0.22596, 0.24557, 0.24201, 0.25529, 0.2692, 0.2818, 0.29905, 0.21443, 0.06964, 0.070567, 0.081274, 0.081274, 0.081274, 0.12111, 0.13794, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10193, 0.095416, 0.10184, 0.177, 0.12915, 0.10532, 0.10559, 0.096231, 0.096231, 0.096186], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière solaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2566, 0.2567, 0.38285, 0.29741, 0.29749, 0.29726, 0.29726, 0.29737, 0.29737, 0.29748, 0.43451, 0.35399, 0.35399, 0.35407, 0.19406, 0.19479, 0, 0, 0, 0, 0, 0, 0, 0.23444, 0.37593, 0.97073, 0.97073, 0.97073, 0.97073, 0.97073, 0.97195, 0.97115, 0.97109, 0.6091, 0.60862, 0.6081, 0.33906, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fiscalité écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26197, 0.37191, 0.42471, 0.42471, 0.42471, 0.42471, 0.42524, 0.40313, 0.4031, 0.33195, 0.33169, 0.33141, 0.2919, 0.39679, 0.0975, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"photovoltaïque": {
men: [0.12996, 0.12666, 0.14585, 0.14476, 0.17292, 0.18857, 0.19163, 0.23293, 0.28637, 0.26868, 0.26868, 0.27796, 0.26876, 0.23172, 0.31451, 0.27979, 0.23111, 0.26941, 0.18053, 0.17435, 0.17452, 0.17452, 0.030003, 0.031491, 0.028549, 0.028549, 0.11515, 0.19623, 0.23153, 0.24467, 0.25635, 0.24594, 0.24587, 0.24989, 0.25426, 0.27083, 0.31317, 0.30742, 0.27168, 0.2774, 0.23779, 0.18198, 0.15184, 0.12734, 0.13405, 0.13529, 0.13534, 0.13627, 0.12414, 0.10195, 0.10127, 0.10045, 0.11536, 0.10351, 0.10612, 0.095213, 0.034209, 0.044397, 0, 0, 0, 0, 0.040298, 0.075363, 0.06861, 0.068573, 0.067492, 0.068476, 0.074618, 0.085911, 0.094538, 0.10646, 0.11129, 0.12348, 0.1241, 0.14129, 0.097954, 0.069768, 0.072134, 0.071676, 0.072645, 0.073449, 0.076899, 0.072228, 0.059689, 0.051852, 0.045411, 0.03108, 0.02975, 0.062238, 0.058146, 0.073852, 0.065517, 0.064925, 0.064925, 0.072108, 0.066149, 0.056816, 0.058937, 0.05426, 0.064413, 0.065644, 0.069591, 0.026991, 0.02919, 0.028435, 0.032024, 0.075885, 0.075885, 0.065898], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97768, 0.98184, 0.98184, 0.98184, 0.97973, 0.97735, 0.97167, 0.97125, 0.97125, 0.97125, 0.97125, 0.97125, 0.97247, 0.44167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"constructions de centrales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37084, 0.37242, 0.37242, 0.37242, 0.34306, 0.34222, 0.32114, 0.321, 0.30572, 0.26938, 0.26938, 0.26938, 0.26972, 0.2695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergies vertes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24135, 0.34985, 0.38174, 0.38003, 0.38012, 0.43918, 0.60059, 0.6002, 0.62515, 0.60881, 0.60881, 0.60875, 0.60851, 0.54306, 0.45886, 0.19599, 0.1816, 0.12891, 0.12891, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15286, 0.37439, 0.35583, 0.25447, 0.25447, 0.26585, 0.29071, 0.2507, 0.17992, 0.17557, 0.18109, 0.18109, 0.19059, 0.18032, 0.12615, 0.01214, 0.012638, 0.017827, 0.017827, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ferme éolienne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23727, 0.31453, 0.31453, 0.31461, 0.31451, 0.52273, 0.5224, 0.52166, 0.52148, 0.52148, 0.39175, 0.39159, 0.39175, 0.39345, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17862, 0.084003, 0.075329, 0.086272, 0.086295, 0.086229, 0.086229, 0.09831, 0.10684, 0.10319, 0.11066, 0.11075, 0.11075, 0.11077, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14884, 0.13982, 0.27951, 0.33877, 0.3385, 0.33821, 0.33845, 0.27264, 0.28859, 0.36259, 0.36166, 0.36166, 0.36166, 0.52197, 0.44508, 0.47734, 0.3191, 0.18197, 0.18211, 0.1823, 0.11302, 0.072042, 0.061359, 0.066046, 0.051769, 0.051769, 0.051747, 0, 0, 0, 0, 0.092884, 0.092884, 0.092884, 0.11024, 0.20353, 0.26947, 0.27016, 0.59898, 0.59898, 0.5987], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière industrielle": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21408, 0.1504, 0.17003, 0.15725, 0.15728, 0.15724, 0.15724, 0.29719, 0.29677, 0.29667, 0.29667, 0.30673, 0.384, 0.31189, 0.25087, 0.22952, 0.19858, 0.20432, 0.20432, 0.20439, 0.18847, 0.1062, 0.10646, 0.09908, 0.09908, 0.10443, 0, 0, 0, 0, 0.13467, 0.13525, 0.12304, 0.12304, 0.12278, 0.089015, 0.088498, 0.05695, 0.05695, 0.055553, 0.053268, 0.041322, 0.035681, 0.033919, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13241, 0.12364, 0.12371, 0.12371, 0.14308, 0.1888, 0.22253, 0.19618, 0.19618, 0.19302, 0.19302, 0.19541, 0.34125, 0.33086, 0.16239, 0.18791, 0.18758, 0.18758, 0.1408], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"panneaux solaires": {
men: [0.10188, 0.072869, 0.070729, 0.071825, 0.12213, 0.12183, 0.10097, 0.074355, 0.051872, 0.11914, 0.11469, 0.091918, 0.10838, 0.11562, 0.12111, 0.1163, 0.1121, 0.11283, 0.068392, 0.066612, 0.063954, 0.0715, 0.072286, 0, 0, 0, 0.096116, 0.27745, 0.25518, 0.27909, 0.22578, 0.19398, 0.19392, 0.192, 0.19586, 0.22296, 0.17147, 0.16346, 0.16437, 0.16431, 0.12404, 0.053841, 0.058492, 0.050236, 0.062402, 0.068648, 0.06679, 0.06127, 0.046904, 0.022836, 0.02657, 0.027275, 0.027538, 0.027568, 0.033473, 0.024502, 0.0085653, 0.0082461, 0, 0, 0, 0, 0.023671, 0.023171, 0.01834, 0.017661, 0.017717, 0.017717, 0.017535, 0.022808, 0.029329, 0.037158, 0.041306, 0.040856, 0.037719, 0.035116, 0.021174, 0.020624, 0.024019, 0.023991, 0.024076, 0.024076, 0.034421, 0.06379, 0.057407, 0.05143, 0.052416, 0.05379, 0.057467, 0.10861, 0.16088, 0.23034, 0.22966, 0.20219, 0.19971, 0.20162, 0.20083, 0.18763, 0.2021, 0.19949, 0.19461, 0.18832, 0.19142, 0.17209, 0.092272, 0.024961, 0.028229, 0.036667, 0.037577, 0.030811], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie solaire": {
men: [0, 0, 0, 0, 0.061788, 0.087447, 0.087441, 0.087018, 0.090282, 0.11237, 0.11232, 0.11232, 0.12883, 0.13653, 0.14365, 0.13689, 0.17546, 0.20948, 0.12745, 0.046525, 0.04395, 0.048279, 0.046896, 0.047607, 0.048895, 0.048895, 0.050968, 0.14742, 0.20694, 0.23215, 0.23215, 0.18262, 0.19729, 0.2096, 0.19766, 0.19155, 0.18031, 0.17642, 0.17193, 0.17186, 0.12628, 0.09043, 0.050789, 0.037287, 0.044745, 0.047367, 0.030765, 0.031289, 0.032751, 0.029927, 0.02685, 0.027015, 0.02717, 0.027055, 0.028706, 0.02677, 0.011814, 0.011883, 0, 0, 0, 0, 0.010954, 0.010859, 0.012342, 0.012176, 0.012341, 0.01244, 0.011922, 0.013659, 0.030771, 0.030027, 0.028404, 0.027316, 0.026249, 0.025553, 0.013819, 0.014102, 0.015048, 0.014848, 0.01488, 0.01488, 0.015708, 0.016519, 0, 0, 0, 0, 0, 0.069307, 0.17641, 0.26261, 0.23502, 0.20548, 0.20548, 0.21106, 0.21733, 0.21045, 0.20917, 0.20658, 0.19166, 0.18696, 0.18773, 0.14461, 0.10277, 0.02757, 0.029954, 0.03659, 0.032811, 0.059485], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bâtiments agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.72589, 0.36495, 0.58687, 0.42991, 0.39876, 0.39886, 0.39874, 0.39874, 0.43036, 0.42799, 0.42784, 0.42087, 0.41348, 0.41331, 0.35161, 0.37464, 0.19624, 0.28449, 0.33118, 0.33118, 0.3313, 0.3313, 0.23487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bâtiments neufs": {
men: [0.33338, 0.33403, 0.58307, 0.58307, 0.58197, 0.58139, 0.58197, 0.47286, 0.47237, 0.43546, 0.43546, 0.43546, 0.4357, 0.83303, 0.83354, 0.83354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"erdf": {
men: [0.23265, 0.24008, 0.26941, 0.24372, 0.27568, 0.25466, 0.21311, 0.1625, 0.14228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23579, 0.21016, 0.19116, 0.19115, 0.16375, 0.11229, 0.083166, 0.071235, 0.068663, 0.065481, 0.067052, 0.067077, 0.062225, 0.060703, 0.011061, 0.0097423, 0.0098055, 0.0098078, 0.010235, 0, 0, 0, 0, 0, 0, 0, 0, 0.11361, 0.20609, 0.27652, 0.28709, 0.28709, 0.27517, 0.26809, 0.25439, 0.25418, 0.25417, 0.35028, 0.35001, 0.3497, 0.38845, 0.25068, 0, 0, 0, 0, 0, 0.051122, 0.060268, 0.060306, 0.060338, 0.06965, 0.069705, 0.069777, 0.037759, 0.015529, 0.014053, 0.014041, 0.014608, 0.014608, 0.028535, 0.012772, 0.01279, 0.012568, 0.011162, 0.011159, 0.010518, 0.010518, 0.012017, 0.018794, 0.021702, 0.024566, 0.027366, 0.027366, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chimie verte": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14221, 0.96663, 0.96663, 0.96663, 0.96663, 0.96663, 0.3686, 0.3683, 0.36827, 0.36814, 0.36786, 0.36754, 0.3678, 0.36815, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emballages ménagers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.87969, 0.79103, 0.79193, 0.79214, 0.79153, 0.79153, 0.79182, 0.79182, 0.18415, 0.17073, 0.16711, 0.16281, 0.16284, 0.16302, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"questions énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16619, 0.23003, 0.23343, 0.23343, 0.23348, 0.31812, 0.32199, 0.32179, 0.32133, 0.32122, 0.4935, 0.56669, 0.50291, 0.60735, 0.56573, 0.38477, 0.49993, 0.39319, 0.39319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules photovoltaïques": {
men: [0.251, 0.36637, 0.45999, 0.38109, 0.38037, 0.37999, 0.38037, 0.38058, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091738, 0.091489, 0.15484, 0.15484, 0.15487, 0.15483, 0.21698, 0.21684, 0.21502, 0.16981, 0.14896, 0.19121, 0.21675, 0.28581, 0.072665, 0.072747, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11474, 0.078868, 0.066087, 0.070215, 0.070215, 0.070215, 0.070215, 0.084886, 0.10169, 0.10168, 0.10165, 0.10157, 0.10148, 0.088076, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4167, 0.41681, 0.4165, 0.4165, 0.41665, 0.45252, 0.45269, 0.45382, 0.4542, 0.4542, 0.4543, 0.4548, 0.73689, 0.73743, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filières vertes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24461, 0.2445, 0.2445, 0.2445, 0.2445, 0.2445, 0.24481, 0.24461, 0.24459, 0.24451, 0.24432, 0.97643, 0.97712, 0.97804, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitants agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17765, 0.31363, 0.36511, 0.36497, 0.31768, 0.24762, 0.336, 0.37379, 0.34617, 0.31879, 0.31891, 0.31891, 0.13478, 0.13941, 0.028588, 0.024902, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chantier de l' epr": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23087, 0.21802, 0.21759, 0.20552, 0.18271, 0.18271, 0.20373, 0.20375, 0.20403, 0.19719, 0.19719, 0.19713, 0.19713, 0.19713, 0.036374, 0.11673, 0.11764, 0.15146, 0.42036, 0.42036, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
