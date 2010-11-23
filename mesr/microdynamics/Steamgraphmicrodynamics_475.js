var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"consommation mondiale de pétrole": {
men: [0.26337, 0.28788, 0.16102, 0.16109, 0.16113, 0.23977, 0.17273, 0.17284, 0.098318, 0.10476, 0.10476, 0.10476, 0.17503, 0.26241, 0.26374, 0.26306, 0.36924, 0.36924, 0.36924, 0.36924, 0.67134, 0.54269, 0.54269, 0.78649, 0.78649, 0.78649, 0.67506, 0.49859, 0.49728, 0.50035, 0.50195, 0.50195, 0.50195, 0.3102, 0.3102, 0.44468, 0.44413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51745, 0.26624, 0.26637, 0.26637, 0.2667, 0.2667, 0.2667, 0.16963, 0.16962, 0.20012, 0.32938, 0.32938, 0.32938, 0.3306, 0.32557, 0.63871, 0.59115, 0.58997, 0.58919, 0.58919, 0.58857, 0.808, 0.8085, 0.80896, 0.76992, 0.76992, 0.76992, 0.769, 0.71242, 0.41979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage en mer": {
men: [0.056228, 0.074744, 0.038085, 0.025115, 0.02401, 0.017703, 0.01905, 0.022278, 0, 0, 0, 0, 0, 0.021652, 0.021762, 0.02139, 0.023223, 0.0324, 0.034237, 0.057707, 0.06437, 0.064451, 0.043695, 0.11135, 0.11135, 0.11135, 0.11151, 0.056147, 0.052263, 0.058103, 0.058289, 0.058289, 0.058289, 0.070268, 0.070268, 0.070268, 0.16085, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10037, 0.08564, 0.058395, 0.10925, 0.10938, 0.10938, 0.12257, 0.12257, 0.12256, 0.12234, 0.21512, 0.21512, 0.21512, 0.21592, 0.18539, 0.22099, 0.66594, 0.66461, 0.66373, 0.62308, 0.62243, 0.62217, 0.68431, 0.59971, 0.52155, 0.52155, 0.52155, 0.52092, 0.60669, 0.6077, 0.4505, 0.6162, 0.61405, 0.67923, 0.67952, 0.55143, 0.23953, 0.45997, 0.4593, 0.4593, 0.4592, 0.45945, 0.55454, 0.55398, 0.41104, 0.34017, 0.34135, 0.34156, 0.34156, 0.37259, 0.46925, 0.36703, 0.36847, 0.36847, 0.36867, 0.36867, 0.48634, 0.48798, 0.97757, 0.68508, 0.68508, 0.68508], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"services pétroliers": {
men: [0, 0, 0.16411, 0.16517, 0.16521, 0.1708, 0.16576, 0.16587, 0.16621, 0.24525, 0.24525, 0.24525, 0.27188, 0.56538, 0.56824, 0.56678, 0.11367, 0.11367, 0.11367, 0.22258, 0.2927, 0.11381, 0.11381, 0.19791, 0.19791, 0.19791, 0.19819, 0.10493, 0.10465, 0.1053, 0.14563, 0.14563, 0.14563, 0.12348, 0.12348, 0.44468, 0.44413, 0, 0, 0, 0, 0, 0.091543, 0.082397, 0.076032, 0.076032, 0.076032, 0.082177, 0.14394, 0.22393, 0.22404, 0.22404, 0.22432, 0.22432, 0.22432, 0.18694, 0.30102, 0.35917, 0.51048, 0.51048, 0.51048, 0.51237, 0.50894, 0.36429, 0.44527, 0.44438, 0.44379, 0.44379, 0.44332, 0.97836, 0.98168, 0.98224, 0.67618, 0.56082, 0.56082, 0.56014, 0.44546, 0.23126, 0.1361, 0.2392, 0.23837, 0.23826, 0.23836, 0.22032, 0.097401, 0.17548, 0.14087, 0.15097, 0.15094, 0.15103, 0.20801, 0.29114, 0.23717, 0.087524, 0.082671, 0.08272, 0.08272, 0.061632, 0.064709, 0.043182, 0.045365, 0.045365, 0.045389, 0.034942, 0.040454, 0.040591, 0.030785, 0.041153, 0.042819, 0.042819], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champs pétroliers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35387, 0.35366, 0.35366, 0.37502, 0.37641, 0.37611, 0.37573, 0.37553, 0.37479, 0.37429, 0.37429, 0.49697, 0.49676, 0.98662, 0.97802, 0.97684, 0.97684, 0.97684, 0.97567, 0.97641, 0.97803, 0.97693, 0.97254, 0.96914, 0.96869, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2194, 0.2194, 0.2194], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barils par jour": {
men: [0.097863, 0.10254, 0.069746, 0.074007, 0.092014, 0.10279, 0.10769, 0.11691, 0.033132, 0.039609, 0.040913, 0.046025, 0.072505, 0.13274, 0.11133, 0.074592, 0.11073, 0.11073, 0.10021, 0.089647, 0.10541, 0.08785, 0.08785, 0.1213, 0.11788, 0.11788, 0.069424, 0.034144, 0.038479, 0.072693, 0.072925, 0.072925, 0.089986, 0.10965, 0.10965, 0.25774, 0.25742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.072198, 0.07202, 0.057293, 0.040888, 0.03552, 0.03552, 0.03552, 0.037045, 0.043362, 0.041643, 0.050681, 0.053963, 0.053963, 0.052893, 0.051775, 0.098224, 0.11095, 0.13281, 0.14841, 0.14841, 0.20199, 0.21524, 0.20424, 0.18963, 0.2642, 0.2642, 0.2642, 0.27874, 0.23997, 0.12129, 0.11958, 0.14674, 0.14623, 0.14616, 0.06557, 0.11188, 0.15788, 0.21118, 0.1963, 0.1963, 0.19626, 0.15617, 0.17832, 0.24683, 0.2681, 0.16954, 0.15796, 0.15805, 0.16479, 0.13611, 0.08284, 0.055648, 0.055474, 0.055474, 0.055503, 0.076009, 0.13049, 0.13092, 0.10836, 0.2055, 0.22914, 0.22914], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pétrole": {
men: [0.10315, 0.084316, 0.076658, 0.074937, 0.074955, 0.074005, 0.067741, 0.068398, 0.048984, 0.051412, 0.051669, 0.051669, 0.034956, 0.057322, 0.039557, 0.037586, 0.040822, 0.041546, 0.038653, 0.042126, 0.051444, 0.054035, 0.053594, 0.072192, 0.071908, 0.071908, 0.040672, 0.039871, 0.1312, 0.15368, 0.15255, 0.15255, 0.17598, 0.16949, 0.16715, 0.17015, 0.18893, 0.14793, 0.14848, 0.14848, 0.16974, 0.12713, 0, 0, 0, 0, 0, 0, 0.046518, 0.047239, 0.047262, 0.061701, 0.061778, 0.061778, 0.061778, 0.074385, 0.085047, 0.091992, 0.14409, 0.11848, 0.086011, 0.082751, 0.07603, 0.11747, 0.13041, 0.13015, 0.12538, 0.12538, 0.17321, 0.16004, 0.17659, 0.17329, 0.15448, 0.16543, 0.23717, 0.24981, 0.22135, 0.16691, 0.13416, 0.097881, 0.10076, 0.10071, 0.040367, 0.083537, 0.056668, 0.074572, 0.074266, 0.073013, 0.06926, 0.060668, 0.073403, 0.08026, 0.099574, 0.11506, 0.11546, 0.11552, 0.13742, 0.090124, 0.089937, 0.063223, 0.066867, 0.062908, 0.064359, 0.088285, 0.20263, 0.19184, 0.16075, 0.27775, 0.27775, 0.20245], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prix du pétrole": {
men: [0.03752, 0.038072, 0.01164, 0.0117, 0.011911, 0.012515, 0.01296, 0.013475, 0, 0, 0, 0, 0, 0.018255, 0.020107, 0.019983, 0.048407, 0.048407, 0.046099, 0.046099, 0.064338, 0.038064, 0.041508, 0.086558, 0.090538, 0.094902, 0.10136, 0.041175, 0.036968, 0.040516, 0.040646, 0.040646, 0.041531, 0.041531, 0.028738, 0.031513, 0.022463, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02319, 0.025017, 0.035858, 0.037532, 0.036743, 0.039169, 0.040096, 0.045722, 0.027454, 0.022097, 0.043081, 0.043837, 0.043468, 0.042883, 0.049413, 0.057385, 0.074394, 0.074021, 0.074636, 0.07352, 0.073442, 0.058156, 0.10524, 0.13372, 0.10326, 0.10011, 0.10161, 0.09558, 0.058981, 0.059079, 0.031286, 0.060999, 0.061352, 0.062571, 0.062597, 0.098778, 0.058191, 0.13398, 0.12264, 0.10796, 0.10793, 0.097943, 0.11014, 0.11003, 0.22093, 0.1326, 0.12452, 0.12459, 0.12414, 0.089378, 0.08942, 0.071174, 0.072321, 0.076667, 0.073644, 0.080619, 0.11122, 0.10562, 0.04758, 0.061087, 0.061786, 0.052164], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équivalent pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96927, 0.96952, 0.9681, 0.9681, 0.96791, 0.42369, 0.42364, 0.42321, 0.41373, 0.41423, 0.41567, 0.41592, 0.41592, 0.41615, 0.22549, 0.2254, 0.22629, 0.22629, 0.22641, 0.29903, 0.29873, 0.29973, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production de pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.062723, 0.10522, 0.10969, 0.10701, 0.12103, 0.12103, 0.12103, 0.1184, 0.1184, 0.1054, 0.10913, 0.12915, 0.22789, 0.22789, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15171, 0.14781, 0.14028, 0.18835, 0.22222, 0.21102, 0.21391, 0.19711, 0.24373, 0.25019, 0.29954, 0.27387, 0.27387, 0.28078, 0, 0, 0, 0, 0, 0, 0, 0, 0.067818, 0.06786, 0.06392, 0.07269, 0.07269, 0.07269, 0.072603, 0.062879, 0.052679, 0.058916, 0.082843, 0.084446, 0.084406, 0.092224, 0.14869, 0.1339, 0.14513, 0.13335, 0.13335, 0.13332, 0.13339, 0.18747, 0.22607, 0.38608, 0.20139, 0.17863, 0.17874, 0.17874, 0.10305, 0.10534, 0.1053, 0.10096, 0.093542, 0.093592, 0.080951, 0.13812, 0.14861, 0.064562, 0.23745, 0.27155, 0.27155], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gisement pétrolier": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25767, 0.25733, 0.25733, 0.25706, 0.25695, 0.25711, 0.25726, 0.25695, 0.23623, 0.23623, 0.31742, 0.31766, 0.31818, 0.52626, 0.58157, 0.57953, 0.57926, 0.57951, 0.35999, 0.35989, 0.35998, 0.35945, 0.47839, 0.47829, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transport maritime": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14936, 0.19391, 0.19391, 0.33504, 0.3353, 0.30726, 0.33655, 0.33504, 0.39944, 0.39925, 0.39942, 0.39919, 0.39907, 0.23097, 0.17166, 0.17166, 0.17162, 0.072515, 0.067939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage pétrolier en haute mer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.068279, 0.063034, 0.063034, 0.063034, 0.063034, 0.062589, 0.062536, 0.13525, 0.13531, 0.13531, 0.13548, 0.13548, 0.13548, 0.13548, 0.51989, 0.9768, 0.97623, 0.97623, 0.97623, 0.97984, 0.97907, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matière plastique": {
men: [0.49443, 0.49449, 0.45778, 0.45799, 0.4581, 0.45843, 0.45849, 0.45878, 0.49715, 0.55922, 0.55922, 0.55922, 0.53669, 0.53796, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nombreuses victimes": {
men: [0, 0.4043, 0.40433, 0.40451, 0.40461, 0.4049, 0.40495, 0.40521, 0.40604, 0.40693, 0.14265, 0.14265, 0.14282, 0.14316, 0.10751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"halliburton": {
men: [0.14122, 0.15825, 0.15913, 0.1592, 0.15924, 0.21146, 0.20033, 0.20487, 0.13269, 0.1508, 0.14738, 0.13606, 0.15221, 0.22306, 0.096523, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37801, 0.37801, 0.31303, 0.32459, 0.10343, 0.097697, 0.08875, 0.090341, 0.081005, 0.081938, 0.081869, 0.1051, 0.10515, 0.10308, 0.07524, 0.06981, 0.070852, 0.06976, 0.072584, 0.070637, 0.092286, 0.092286, 0.1488, 0.14282, 0.13673, 0, 0, 0.021363, 0.024125, 0.062735, 0.062668, 0.13846, 0.13855, 0.13862, 0.053836, 0.053836, 0.053836, 0.05315, 0.061343, 0.066234, 0.030346, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"or noir": {
men: [0.015585, 0.015587, 0.014527, 0.015714, 0.02134, 0.014652, 0.012123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25942, 0.30234, 0.43636, 0.43636, 0.39458, 0.39458, 0.20432, 0.12965, 0.096895, 0.090859, 0.090598, 0.086469, 0.079732, 0.075637, 0, 0, 0, 0, 0, 0, 0, 0.06203, 0.082098, 0.091277, 0.091392, 0.099724, 0.12001, 0.13251, 0.13251, 0.29757, 0.22224, 0.22224, 0.22224, 0.22306, 0.28616, 0.18099, 0.19179, 0.16895, 0.16872, 0.16872, 0.15302, 0.12488, 0.10722, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"études environnementales": {
men: [0.98026, 0.67195, 0.67199, 0.6723, 0.67247, 0.67295, 0.67303, 0.64359, 0.5915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploration offshore": {
men: [0.58055, 0.58062, 0.58065, 0.58092, 0.58107, 0.58148, 0.58155, 0.54911, 0.49352, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chimie verte": {
men: [0.31001, 0.48303, 0.36229, 0.36246, 0.36255, 0.5805, 0.58057, 0.58094, 0.58213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits pétroliers": {
men: [0.13557, 0.12579, 0.10355, 0.1036, 0.11794, 0.12278, 0.12808, 0.12816, 0.11661, 0.13285, 0.13285, 0.13285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15319, 0.15414, 0.16851, 0.15443, 0.18042, 0.18042, 0.1257, 0.1541, 0.13035, 0.12585, 0.12549, 0.12549, 0.12549, 0.13069, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18731, 0.19523, 0.17752, 0.13403, 0.10782, 0.10789, 0.081578, 0.075937, 0.067604, 0.066005, 0.091603, 0.089397, 0.078419, 0.080099, 0.058045, 0.056115, 0.055824, 0.052507, 0.055139, 0.053289, 0.055991, 0.052304, 0.054567, 0.05464, 0.039299, 0.038682, 0.04129, 0.043249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sables bitumineux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.020379, 0.064276, 0.092229, 0.074504, 0.13153, 0.1156, 0.096277, 0.17763, 0.15536, 0.15546, 0.19526, 0.19502, 0.19502, 0.19502, 0.17352, 0.10973, 0.10084, 0.11267, 0.11298, 0.122, 0.14177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12077, 0.13215, 0.12479, 0.12523, 0.1253, 0.1253, 0.12564, 0.13982, 0.13976, 0.32588, 0.32588, 0.32606, 0.32606, 0.37707, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"perspectives économiques": {
men: [0.23217, 0.18261, 0.18952, 0.11984, 0.079472, 0.021309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.049439, 0.06381, 0.040819, 0.040819, 0.040819, 0.04077, 0.039088, 0.029344, 0.030264, 0.044314, 0.044159, 0.044138, 0.043317, 0.091217, 0.065252, 0.088083, 0.10529, 0.10529, 0.10527, 0.10013, 0.12553, 0.16227, 0.18772, 0.27961, 0.28058, 0.28075, 0.31927, 0.24914, 0.19145, 0.13392, 0.13965, 0.13965, 0.13972, 0.1627, 0.10553, 0.10589, 0.087203, 0.14538, 0.14538, 0.14538], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exxon valdez": {
men: [0.060494, 0.094789, 0.070028, 0.099623, 0.099648, 0.097331, 0.041218, 0.02139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.094966, 0.094815, 0.089695, 0.089695, 0.089695, 0.44704, 0.51601, 0.36176, 0.36322, 0.37762, 0.37809, 0.2646, 0.25477, 0.25049, 0.22697, 0.21165, 0.18598, 0.18598, 0.18598, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie pétrolière": {
men: [0.068695, 0.069538, 0.073189, 0.078388, 0.083376, 0.087169, 0.079834, 0.069031, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.047542, 0.047891, 0.059133, 0.072808, 0.07203, 0.083221, 0.077582, 0.077582, 0.077415, 0.083298, 0.075701, 0.10001, 0.10269, 0.13335, 0.079963, 0.079963, 0.058614, 0.056956, 0.060701, 0.044298, 0.041709, 0.040473, 0.041097, 0.041249, 0.043405, 0, 0, 0, 0.061553, 0.04964, 0.051029, 0.052234, 0.053085, 0.053816, 0.043072, 0.038858, 0.038858, 0.038012, 0.035478, 0.031485, 0.022802, 0.067521, 0.040178, 0.041628, 0.041243, 0.035864, 0.035152, 0.034691, 0.034846, 0.035925, 0.038624, 0.032355, 0.032224, 0.033098, 0.038901, 0.036208, 0.03755, 0.036334, 0.036317, 0.040235, 0.040332, 0.053216, 0.056731, 0.057302, 0.057474, 0.07338, 0.090119, 0.092248, 0.093654, 0.086548, 0.12892, 0.16978], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitation pétrolière": {
men: [0.041596, 0.041221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060123, 0.059964, 0.060335, 0.068133, 0.068133, 0.09418, 0.18085, 0.14821, 0.14821, 0.12517, 0.1119, 0.11158, 0.11158, 0.12151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29424, 0.19142, 0.19142, 0.19142, 0.19212, 0.17938, 0.1792, 0.1791, 0.21145, 0.21355, 0.23174, 0.2315, 0.2314, 0.31102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"signaux d' alerte": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16894, 0.38138, 0.59843, 0.43576, 0.4349, 0.34443, 0.34443, 0.34406, 0.34392, 0.28111, 0.16234, 0.18131, 0.18131, 0.18131, 0.12862, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"facteur aggravant": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25462, 0.25421, 0.25421, 0.32126, 0.32126, 0.36684, 0.36653, 0.36563, 0.3658, 0.3658, 0.50985, 0.34984, 0.19954, 0.19954, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"problèmes écologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17035, 0.17037, 0.22522, 0.31756, 0.36281, 0.36281, 0.363, 0.43826, 0.43809, 0.38901, 0.28484, 0.23733, 0.23733, 0.24896, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine de la marée noire": {
men: [0.038141, 0.03031, 0.016287, 0.016644, 0.016916, 0.017955, 0.017099, 0.014373, 0.014391, 0.013106, 0.01822, 0.018895, 0.018556, 0.017925, 0.017792, 0.021827, 0.049053, 0.052516, 0.05107, 0.051802, 0.054767, 0.086509, 0.091782, 0.14448, 0.1736, 0.24656, 0.27296, 0.34457, 0.37798, 0.29869, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12125, 0.094053, 0.085474, 0.085474, 0.085474, 0.08487, 0.084798, 0.084589, 0.12664, 0.12664, 0.12017, 0.068666, 0.064519, 0.060328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
