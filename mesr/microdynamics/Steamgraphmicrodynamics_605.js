var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"toilettes sèches": {
men: [0, 0, 0.15599, 0.13491, 0.13483, 0.13505, 0.13501, 0.15033, 0.15021, 0.15024, 0.15014, 0.15007, 0.14998, 0.15005, 0.15025, 0.18489, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30453, 0.30442, 0.49673, 0.75358, 0.8225, 0.96119, 0.9302, 0.93049, 0.93167, 0.93228, 0.9332, 0.84801, 0.42993, 0.43, 0.30628, 0.30093, 0.30124, 0.30118, 0.3317, 0.26385, 0.19436, 0.19417, 0.19419, 0.19424, 0.19413, 0.17326, 0.27856, 0.27845, 0.29282, 0.30267, 0.30257, 0.30242, 0, 0, 0, 0, 0, 0, 0, 0.41184, 0.79559, 0.79587, 0.79572, 0.79565, 0.79512, 0.79546, 0.9585, 0.95904, 0.96215, 0.65394, 0.6548, 0.65474, 0.65479, 0.38651, 0.38679, 0.38698, 0.38706, 0.24955, 0.24976, 0.24973, 0.14603, 0.14604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits écologiques": {
men: [0.52466, 0.52479, 0.52509, 0.52561, 0.52529, 0.9599, 0.95957, 0.96057, 0.95979, 0.96001, 0.95938, 0.95887, 0.96675, 0.96719, 0.96846, 0.96862, 0.96831, 0.96821, 0.9681, 0.96721, 0.9666, 0.96549, 0.96475, 0.96279, 0.96205, 0.9613, 0, 0, 0, 0.30004, 0.29993, 0.29977, 0.29986, 0.19668, 0.19671, 0.1572, 0.15725, 0.15745, 0.15756, 0.15771, 0.14969, 0.14977, 0.14979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fruits et légumes bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.95646, 0.95667, 0.95604, 0.95554, 0.95499, 0.95543, 0.95669, 0.95684, 0.95653, 0.95643, 0.95632, 0.95545, 0.95952, 0.95842, 0.94862, 0.94669, 0.94596, 0.94523, 0.36512, 0.023749, 0.018736, 0.018463, 0.016622, 0.016391, 0.016396, 0.016398, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"affaire Elf": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.056524, 0.056492, 0.056518, 0.056592, 0.065865, 0.57571, 0.57565, 0.57559, 0.96528, 0.96894, 0.7771, 0.69283, 0.65378, 0.49312, 0.49012, 0.49001, 0.45469, 0.4546, 0.45431, 0.38918, 0.38897, 0.37461, 0.37467, 0.30963, 0.28249, 0.21517, 0.18328, 0.10274, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94997, 0.95051, 0.94989, 0.94891, 0.95015, 0.95007, 0.95015, 0.95002, 0.9507, 0.95116, 0.95136, 0.95155, 0.95235, 0.95223, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"verts-europe": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51535, 0.34398, 0.34175, 0.45533, 0.47233, 0.52243, 0.50723, 0.45234, 0.45205, 0.47947, 0.47921, 0.47936, 0.47943, 0.49602, 0.47561, 0.49489, 0.63485, 0.51969, 0.48891, 0.3469, 0.3214, 0.95729, 0.71145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95009, 0.94947, 0.94849, 0.94973, 0.94965, 0.94973, 0.9496, 0.95027, 0.95074, 0.95094, 0.95112, 0.95192, 0.9518, 0.95217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0.32923, 0.22794, 0.1942, 0.19439, 0.19427, 0.19459, 0.19453, 0.19473, 0.19457, 0.2261, 0.22595, 0.22583, 0.31682, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33026, 0.49573, 0.64689, 0.64694, 0.72063, 0.72114, 0.7215, 0.72165, 0.72179, 0.72239, 0.56223, 0.56245, 0.56247, 0.56281, 0.69885, 0.69846, 0.61198, 0.61184, 0.46539, 0.46577, 0.46514, 0.46453, 0.46352, 0.46361, 0.94936, 0.94931, 0.94946, 0.94908, 0, 0, 0.94682, 0.94608], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces protégées": {
men: [0.086098, 0.086119, 0.1918, 0.19199, 0.19188, 0.15388, 0.15382, 0.1163, 0.11621, 0.14855, 0.14845, 0.14837, 0.18362, 0.077905, 0.085899, 0.085913, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.020058, 0.020057, 0.020067, 0.029344, 0.027248, 0.27016, 0.27044, 0.27039, 0.26973, 0.26964, 0.26976, 0.26949, 0.26952, 0.26959, 0, 0.47345, 0.47367, 0.47348, 0.94747, 0.94745, 0.94712, 0.94664, 0.94823, 0.27093, 0.27109, 0.27165, 0.2712, 0.27116, 0.27131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95687, 0.95776, 0.95723, 0.95705, 0.95683, 0.9566, 0.62341, 0.62256, 0.62175, 0.6204, 0.62052, 0.62056, 0.62053, 0.063362, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transformation écologique": {
men: [0, 0, 0, 0, 0.30891, 0.23963, 0.23955, 0.34126, 0.34098, 0.34106, 0.34084, 0.34066, 0.34046, 0.50164, 0.5023, 0.50237, 0.78461, 0.78453, 0.73448, 0.42067, 0.32813, 0.32775, 0.3275, 0.41555, 0.36559, 0.41884, 0.44627, 0.41938, 0.41296, 0.4127, 0.3696, 0.36941, 0.33379, 0.36605, 0.36475, 0.34463, 0.34474, 0.27872, 0.30228, 0.13382, 0, 0, 0, 0, 0, 0, 0, 0.07907, 0.097948, 0.13427, 0.11238, 0.068235, 0.06438, 0.064343, 0.060358, 0.060387, 0.069932, 0.098339, 0.072692, 0.072666, 0.07263, 0, 0, 0, 0, 0, 0, 0, 0, 0.14662, 0.13961, 0.1259, 0.1797, 0.17431, 0.17439, 0.17445, 0.42691, 0.42663, 0.27894, 0.2793, 0.27928, 0.2793, 0.13257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2272, 0.2269, 0.24823, 0.24828, 0.39385, 0.39383, 0.39389, 0.39374, 0.21499, 0.17324, 0.23781, 0.34871], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Cécile duflot": {
men: [0.019541, 0, 0, 0, 0.022535, 0.024055, 0.022799, 0.078797, 0.077334, 0.18423, 0.18411, 0.18401, 0.17327, 0.17335, 0.23655, 0.16062, 0.27342, 0.27339, 0.23791, 0.20961, 0.19166, 0.34491, 0.30014, 0.30778, 0.31868, 0.30115, 0.21406, 0.21946, 0.22021, 0.21095, 0.20283, 0.21384, 0.21101, 0.21556, 0.22088, 0.20072, 0.17857, 0.13765, 0.084378, 0.075226, 0.10859, 0.08491, 0.076956, 0.088618, 0.092672, 0.044829, 0.047068, 0.029974, 0.036047, 0.035607, 0.043063, 0.056203, 0.12151, 0.11439, 0.12428, 0.13307, 0.10699, 0.10779, 0.12728, 0.11051, 0.11046, 0.10854, 0.085781, 0.08986, 0.079353, 0.06723, 0.044557, 0.045619, 0.032582, 0.032853, 0.037983, 0.036961, 0.055447, 0.064891, 0.048018, 0.036219, 0.047521, 0.044366, 0.047602, 0.046062, 0.048676, 0.054605, 0.055682, 0.055722, 0.062525, 0.063394, 0.016083, 0.016097, 0.026825, 0.043173, 0, 0, 0, 0, 0, 0, 0, 0.18033, 0.2935, 0.19273, 0.22651, 0.22655, 0.28464, 0.27296, 0.26471, 0.2539, 0.23973, 0.29581, 0.24631, 0.30955], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coton bio": {
men: [0, 0, 0.11441, 0.11452, 0.57073, 0.64663, 0.64641, 0.64708, 0.78206, 0.5512, 0.55084, 0.49085, 0.38832, 0.5446, 0.54532, 0.54541, 0.53025, 0.53019, 0.31287, 0.31259, 0.31239, 0.31203, 0.31179, 0.43184, 0.43151, 0.51311, 0.9527, 0, 0, 0, 0, 0, 0, 0, 0, 0.055453, 0.055471, 0.055541, 0.039404, 0.039443, 0.039442, 0.039462, 0.039469, 0.065831, 0.11863, 0.11875, 0.11873, 0.11844, 0.1184, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37165, 0.37167, 0.37188, 0.37265, 0.29398, 0.29394, 0.4703, 0.47032, 0.46979, 0.46996, 0.46987, 0.46983, 0.46952, 0.46972, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077042, 0.077088, 0.06687, 0.093261, 0.093245, 0.093223, 0.14372, 0.14384, 0.30443, 0.30848, 0.15431, 0.15434, 0.17245, 0.17244, 0.11378, 0.11373, 0.13231, 0.13222, 0.13223, 0.12331], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mouvement écologiste": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.10162, 0.066888, 0.062735, 0.047467, 0.044724, 0.039204, 0.032929, 0.038574, 0.038562, 0.038558, 0.038553, 0.038518, 0.038494, 0.11602, 0.092783, 0.14736, 0.23841, 0.24397, 0.26254, 0.26055, 0.28195, 0.28177, 0.28002, 0.27987, 0.27498, 0.26788, 0.25255, 0.23671, 0.23852, 0.28018, 0.13947, 0.14289, 0.05992, 0.071714, 0.08381, 0.080627, 0.08297, 0.083057, 0.090996, 0.51465, 0.64916, 0.6921, 0.69244, 0.69251, 0.73502, 0.83113, 0.78905, 0.70715, 0.54187, 0.56983, 0.56982, 0.56962, 0.51342, 0.18026, 0.18027, 0.18037, 0.19781, 0.17578, 0.057928, 0.057961, 0.13986, 0.14145, 0.1773, 0.18699, 0.18698, 0.18685, 0.22371, 0.32291, 0.25283, 0.25267, 0.2524, 0.26088, 0.26086, 0.26088, 0.11261, 0.14521, 0.17487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15198, 0.15178, 0.13963, 0.13933, 0.12933, 0.21845, 0.21167, 0.20479, 0.19548, 0.15623, 0.14396, 0.13087, 0.22429], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pacte écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5018, 0.75864, 0.75887, 0.79419, 0.81807, 0.81815, 0.84278, 0.84385, 0.8444, 0.78747, 0.78745, 0.66626, 0.66637, 0.66673, 0.70913, 0.56765, 0.56754, 0.47381, 0.34388, 0.34402, 0, 0, 0, 0, 0, 0, 0, 0.15314, 0.15314, 0.15308, 0.15301, 0.10997, 0.10997, 0.11004, 0.11026, 0.13305, 0.13303, 0.13311, 0.27603, 0.27572, 0.27582, 0, 0, 0, 0, 0, 0, 0, 0.50604, 0.5067, 0.50666, 0.25385, 0.081112, 0.08117, 0.08121, 0.077562, 0.083565, 0.083636, 0.14286, 0.14292, 0.14292, 0.14301, 0.074467, 0.064404, 0.091371, 0.10508, 0.2927, 0.29294, 0.29255, 0.23809, 0.23757, 0.23761, 0.10447, 0.075323, 0.075334, 0.049961, 0.049935, 0.042091, 0.057057, 0.13266], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût environnemental": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51138, 0.59332, 0.5932, 0.49062, 0.56495, 0.56519, 0.56462, 0.71714, 0.71735, 0.71694, 0.71747, 0.71781, 0.71752, 0.7179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32441, 0.32484, 0.4771, 0.47714, 0.56562, 0.56603, 0.56631, 0.56642, 0.80167, 0.80235, 0.7299, 0.73019, 0.73022, 0.86066, 0.80886, 0.68607, 0.52047, 0.52035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033962, 0.033961, 0.033949, 0.033932, 0.03626, 0.067047, 0.067086, 0.086028, 0.94475, 0.94462, 0.94514, 0.94519, 0.94413, 0.95116, 0.94453, 0.94444, 0.94382, 0.94422, 0.94455, 0.94508, 0.94447, 0.94349, 0.94473, 0.94465, 0.94472, 0.94459, 0.94527, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets plastiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95444, 0.95426, 0.95417, 0.95354, 0.95394, 0.95428, 0.95482, 0.9542, 0.95321, 0.95445, 0.95438, 0.95445, 0.95432, 0.955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Nicolas hulot": {
men: [0.18889, 0.18894, 0.18905, 0.11034, 0.11939, 0.16781, 0.18875, 0.18895, 0.17096, 0.2357, 0.20839, 0.23988, 0.23098, 0.17287, 0.16903, 0.16906, 0.16513, 0.16141, 0.14082, 0.14069, 0.14061, 0.36325, 0.51386, 0.42271, 0.43167, 0.44646, 0.45725, 0.45683, 0.43298, 0.43271, 0.44471, 0.43523, 0.43536, 0.4578, 0.48115, 0.45106, 0.36442, 0.37278, 0.39138, 0.35387, 0.3125, 0.31267, 0.32096, 0.32114, 0.28395, 0.26555, 0.18351, 0.11926, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02204, 0.021179, 0.019895, 0.026158, 0.02455, 0.037587, 0.029385, 0.0408, 0.040733, 0.072515, 0.072555, 0.14777, 0.20047, 0.1512, 0.095065, 0.084398, 0.08679, 0.089691, 0.080896, 0.080942, 0.08403, 0.10515, 0.095959, 0.089589, 0.077195, 0.049233, 0.026799, 0.024053, 0.028777, 0.031238, 0.031264, 0.048358, 0.066165, 0.066169, 0.055092, 0.034429, 0.052824, 0.051929, 0.055655, 0.084141, 0.089119, 0.10802, 0.096768, 0.097339, 0.097358, 0.077982, 0.049958, 0.053923, 0.055352, 0.10478, 0.13198, 0.16804, 0.31749], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filières vertes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95044, 0.94935, 0.94862, 0.94669, 0.94596, 0.94523, 0.94501, 0.94414, 0.94394, 0.95353, 0.95319, 0.95268, 0.95297, 0.63029, 0.53398, 0.53403, 0.5342, 0.53488, 0.53523, 0.53576, 0.53574, 0.53602, 0.5361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"recyclables": {
men: [0.087907, 0.090432, 0.13342, 0.13115, 0.12638, 0.23654, 0.256, 0.36384, 0.38092, 0.37241, 0.40771, 0.40749, 0.24585, 0.29183, 0.29221, 0.28102, 0.1794, 0.20411, 0.28545, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2024, 0.19857, 0.24044, 0.24052, 0.21704, 0.18886, 0.17874, 0.17879, 0.17644, 0.17655, 0.17673, 0.17672, 0.17226, 0.23497, 0.13488, 0.13341, 0.066099, 0.066086, 0.063862, 0.07822, 0.079627, 0.079547, 0.11093, 0.11097, 0.1109, 0.11098, 0.10064, 0.13819, 0.058419, 0.061765, 0.058397, 0.058368, 0.16723, 0.15446, 0.18155, 0.16912, 0.13727, 0.13725, 0.13732, 0.13733, 0.22525, 0.22533, 0.38189, 0.34034, 0.33077, 0.33091, 0.33741, 0.47846, 0.47815, 0.50835, 0.50902, 0.50898, 0.34127, 0.34122, 0.34146, 0.20256, 0.13736, 0.12556, 0.13342, 0.13341, 0.063753, 0.08372, 0.08377, 0.02489, 0.024876, 0.024871, 0.033559, 0.033551, 0.027628, 0.06886, 0.031889, 0.080626, 0.080641, 0.076839, 0.064011, 0.036381, 0.032506, 0.031348, 0.0288, 0.028801, 0.028779], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"jean-vincent placé": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.088972, 0.074035, 0.064714, 0.055016, 0.055041, 0.055113, 0.062278, 0.14039, 0.13304, 0.13303, 0.12631, 0.19002, 0.27324, 0.3635, 0.41372, 0.46699, 0.48079, 0.47981, 0.4895, 0.46892, 0.46863, 0.4536, 0.46181, 0.41834, 0.43585, 0.43264, 0.40746, 0.36845, 0.30158, 0.1824, 0.16978, 0.16249, 0.067392, 0.07969, 0.076413, 0.076466, 0.076546, 0.13097, 0, 0, 0, 0, 0.29606, 0.29614, 0.12962, 0.069262, 0.058027, 0.056234, 0.058476, 0.058475, 0.058454, 0.058425, 0.058523, 0.058525, 0.063349, 0.06348, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96342, 0.9621, 0.48043, 0.47938, 0.47947, 0.47951, 0.47948, 0.47955, 0.31958, 0.27378, 0.37423, 0.4898, 0.6614], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"militants écologistes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.64686, 0.64636, 0.64586, 0.48299, 0.44637, 0.3791, 0.37886, 0.34683, 0.34664, 0.34675, 0.3468, 0.39602, 0.36565, 0.23029, 0.11094, 0.11101, 0.11112, 0.063717, 0.050929, 0.09347, 0.09352, 0.086089, 0.086179, 0.086162, 0.077529, 0.034265, 0.035117, 0.059027, 0.024214, 0.021973, 0.017825, 0.045455, 0.049553, 0.030951, 0.030575, 0.032833, 0.032392, 0.095929, 0.10182, 0.10183, 0.10264, 0.10285, 0.19061, 0.22611, 0.36489, 0.28173, 0.32278, 0.31184, 0.28204, 0.28202, 0.29446, 0.07111, 0.071134, 0.071175, 0.092964, 0.42389, 0.47139, 0.47135, 0.47689, 0.47683, 0.39272, 0.42349, 0.51831, 0.51841, 0.51885, 0.51879, 0.51899, 0.51901, 0.35881, 0, 0, 0.033291, 0.038518, 0.038508, 0.029247, 0.029207, 0.029169, 0.015012, 0.013207, 0.010804, 0.0099248, 0.0034797, 0.0035318, 0.0035859, 0.0035456, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bilan énergétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.284, 0.20716, 0.20722, 0.20749, 0.3569, 0.35725, 0.073741, 0.073779, 0.066959, 0.066995, 0.063984, 0.064051, 0.064038, 0.061977, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43594, 0.43579, 0.43557, 0.47898, 0.479, 0.47928, 0.96053, 0.95895, 0.61946, 0.4802, 0.48022, 0.47968, 0.47985, 0.44954, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42662, 0.42697, 0.2258, 0.22551, 0.22502, 0.22506, 0.23442, 0.23441, 0.41098, 0.44389, 0.416, 0.45173, 0.45175, 0.4514], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assises nationales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9522, 0.95145, 0.95124, 0.50686, 0.50675, 0.50643, 0.50625, 0.50598, 0.50613, 0.50621, 0.50629, 0.50634, 0.5065, 0.39399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.096492, 0.10222, 0.19548, 0.19555, 0.21875, 0.26383, 0.30134, 0.25377, 0.25375, 0.25377, 0.33318, 0.37727, 0.37745, 0.34998, 0.2111, 0.21128, 0, 0.10107, 0.11959, 0.12998, 0.14285, 0.24026, 0.20622, 0.20617, 0.24152, 0.30933, 0.1525, 0.066164, 0.068532, 0.068545, 0.06855, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits de substitution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45284, 0.71722, 0.95751, 0.95813, 0.95908, 0.95905, 0.74287, 0.743, 0.78683, 0.78738, 0.7882, 0.78805, 0.78612, 0.78587, 0.48414, 0.48366, 0.48371, 0.48385, 0.29884, 0.29906, 0.25325, 0.25315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"toilettes chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94862, 0.94913, 0.94911, 0.94877, 0.9483, 0.94988, 0.94992, 0.95047, 0.95242, 0.95086, 0.95072, 0.95125, 0.95131, 0.95023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93955], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"thon rouge": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3008, 0.30076, 0.22853, 0.3165, 0.31614, 0.25227, 0.25176, 0.25157, 0.25137, 0.25131, 0.25108, 0.25103, 0.18451, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94303, 0.94301, 0.94268, 0.9422, 0.94378, 0.10366, 0.10372, 0.10393, 0.10376, 0.10374, 0.1038, 0.10381, 0.086432, 0.086463, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1853, 0.18531, 0.26481, 0.31126, 0.35065, 0.31043, 0.31049, 0.31928, 0.34641, 0.38739, 0.35764, 0.2376, 0.21749, 0.22529, 0.16007, 0.16003, 0.11829, 0.066068, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Dominique voynet": {
men: [0.43148, 0.5158, 0.51611, 0, 0.013398, 0.013421, 0.013416, 0.01343, 0.013734, 0.013975, 0.013966, 0.013958, 0.013763, 0.013769, 0.013787, 0.013086, 0.012071, 0.081127, 0, 0, 0, 0.010779, 0.030135, 0.067333, 0.080706, 0.080643, 0.081065, 0.078935, 0.078918, 0.07953, 0.082404, 0.082361, 0.12531, 0.19593, 0.38786, 0.35957, 0.36619, 0.18398, 0, 0, 0.049297, 0.13231, 0.13234, 0.93836, 0.93901, 0.94, 0.93981, 0.93751, 0.12728, 0.12733, 0.1272, 0.43622, 0.43634, 0.3493, 0.26481, 0.26493, 0.26483, 0.26497, 0.26496, 0.26487, 0.088506, 0.064945, 0.072098, 0.07214, 0.064479, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038646, 0.069029, 0.066236, 0.06095, 0.05338, 0.1188, 0.09769, 0.24772], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fièvre aphteuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95127, 0.9511, 0.95087, 0.95064, 0.95142, 0.95013, 0.94889, 0.94683, 0.94701, 0.94707, 0.94703, 0.94717, 0.94679, 0.94631, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets organiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46096, 0.58136, 0.58115, 0.58084, 0.58101, 0.58111, 0.75406, 0.95085, 0.95115, 0.95236, 0.95298, 0.95392, 0.9539, 0.95439, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20858, 0.20835, 0.20842, 0.19741, 0.16607, 0.18533, 0.18541, 0.14653, 0.16814, 0.16803, 0.16786, 0.16808, 0.14545, 0.14546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polluants lourds": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94155, 0.94211, 0.94298, 0.94246, 0.94229, 0.94207, 0.94184, 0.94261, 0.94133, 0.9401, 0.93806, 0.93824, 0.9383, 0.93826, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
