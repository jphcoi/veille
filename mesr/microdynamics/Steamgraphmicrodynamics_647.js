var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"noyau de la cellule": {
men: [0.57753, 0.57559, 0.57412, 0.57368, 0.57331, 0.38785, 0.48281, 0.48282, 0.48293, 0.5409, 0.43773, 0.43773, 0.43801, 0.43801, 0.52216, 0.44774, 0.44851, 0.44881, 0.44911, 0.67986, 0.489, 0.48924, 0.48899, 0, 0, 0, 0, 0, 0.29714, 0.36521, 0.36521, 0.31253, 0.31238, 0.43704, 0.43727, 0.43773, 0.38693, 0.45403, 0.53256, 0.53256, 0.53289, 0.61175, 0.56939, 0.56416, 0.56403, 0.70224, 0.70232, 0.3293, 0.3292, 0.23202, 0.28812, 0.52425, 0.41206, 0.41206, 0.41197, 0.41127, 0.41137, 0.41296, 0.31964, 0.31964, 0.31964, 0.40557, 0.40569, 0.68637, 0.68637, 0.62968, 0.62933, 0.62901, 0.62911, 0.63102, 0.63055, 0.63419, 0.9857, 0.9857, 0.98533, 0.98695, 0.98698, 0.98395, 0.98308, 0.97735, 0.97901, 0.98092, 0.98004, 0.97925, 0.98014, 0.98606, 0.98091, 0.98091, 0.98156, 0.97976, 0.98112, 0.9798, 0.98441, 0.98351, 0.98351, 0.98351, 0.98513, 0.98687, 0.99084, 0.98768, 0.98644, 0.98471, 0.98716, 0.98889, 0.99091, 0.99062, 0.98607, 0.98697, 0.98697, 0.58917], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réactions chimiques": {
men: [0, 0, 0, 0, 0, 0.14552, 0.11529, 0.10531, 0.1186, 0.11846, 0.1185, 0.1185, 0.11858, 0.13923, 0.13917, 0.14972, 0.14998, 0.18128, 0.1814, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014125, 0.014144, 0.014056, 0.091815, 0.091815, 0.091872, 0.14674, 0.15356, 0.15215, 0.2515, 0.2515, 0.22394, 0.24715, 0.31134, 0.44683, 0.3517, 0.35209, 0.2497, 0.2497, 0.24965, 0.13694, 0.13697, 0.1375, 0, 0, 0, 0, 0, 0, 0, 0.1819, 0.1818, 0.15709, 0.26424, 0.30596, 0.30573, 0.3075, 0.43073, 0.43073, 0.43056, 0.43127, 0.54685, 0.44608, 0.56839, 0.48809, 0.48893, 0.61358, 0.46553, 0.46516, 0.46558, 0.46494, 0.46552, 0.46552, 0.46582, 0.46497, 0, 0, 0.1852, 0.18503, 0.18503, 0.18503, 0.17812, 0.15439, 0.27914, 0.27961, 0.27925, 0.27877, 0.27854, 0.27903, 0.23549, 0.38446, 0.30536, 0.30563, 0.30563, 0.30563], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pelotes microscopiques": {
men: [0, 0, 0, 0, 0, 0.41774, 0.41748, 0.41749, 0.41758, 0.4171, 0.22162, 0.31773, 0.31793, 0.31793, 0.2037, 0.204, 0.20435, 0.20449, 0.20462, 0.16391, 0.16384, 0.16392, 0.36091, 0.3619, 0.55378, 0.55378, 0.55232, 0.44234, 0.68275, 0.68275, 0.68275, 0.68275, 0.68243, 0.70518, 0.70554, 0.70628, 0.61835, 0.67535, 0.67496, 0.67496, 0.67538, 0.85897, 0.98392, 0.97488, 0.97467, 0.97467, 0.97479, 0.97115, 0.97085, 0.62196, 0.62196, 0.50857, 0.50871, 0.50871, 0.5086, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31823, 0.31805, 0.31789, 0.31794, 0.60594, 0.38398, 0.3862, 0.50852, 0.50852, 0.50832, 0.50916, 0.62847, 0.62906, 0.6285, 0.52705, 0.52794, 0.52897, 0.40511, 0.28452, 0.49831, 0.49762, 0.49824, 0.49824, 0.49857, 0.49766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97468, 0.97638, 0.97524, 0.97496, 0.97325, 0.97414, 0.97414, 0.37282], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0, 0, 0, 0, 0, 0.29201, 0.29183, 0.29184, 0.2919, 0.29156, 0.18037, 0.23928, 0.23943, 0.23943, 0.16833, 0.204, 0.20435, 0.20449, 0.20462, 0.16391, 0.16384, 0.16392, 0.36091, 0.3619, 0.55378, 0.55378, 0.55232, 0.44234, 0.68275, 0.68275, 0.68275, 0.68275, 0.68243, 0.70518, 0.70554, 0.70628, 0.61835, 0.67535, 0.67496, 0.67496, 0.67538, 0.85897, 0.98392, 0.97488, 0.97467, 0.97467, 0.97479, 0.97115, 0.97085, 0.62196, 0.62196, 0.50857, 0.50871, 0.50871, 0.5086, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31823, 0.31805, 0.31789, 0.31794, 0.60594, 0.38398, 0.3862, 0.50852, 0.50852, 0.50832, 0.50916, 0.62847, 0.62906, 0.6285, 0.52705, 0.52794, 0.52897, 0.40511, 0.28452, 0.49831, 0.49762, 0.49824, 0.49824, 0.49857, 0.49766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97468, 0.97638, 0.97524, 0.97496, 0.97325, 0.97414, 0.97414, 0.37282], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"neurotransmetteur": {
men: [0, 0, 0, 0, 0, 0, 0.050496, 0.051161, 0.042545, 0.042496, 0.04251, 0.04251, 0.042537, 0.042537, 0.046598, 0.046665, 0.046745, 0.046777, 0.046808, 0.20202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.018555, 0.024572, 0.02442, 0.024406, 0.024406, 0.14307, 0.041709, 0.041723, 0.04134, 0.054956, 0.054956, 0.054963, 0.039619, 0.039607, 0, 0, 0.33303, 0.33312, 0.33312, 0.46761, 0.74003, 0.45403, 0.45578, 0.45562, 0.45562, 0.45562, 0.60509, 0.60527, 0.60507, 0.60507, 0.53894, 0.53864, 0.53837, 0.31438, 0.31533, 0.44212, 0.44468, 0.36238, 0.36238, 0.36224, 0.26559, 0.36557, 0.36591, 0.29876, 0.22633, 0.22672, 0.22716, 0.19569, 0.14935, 0.14949, 0.26089, 0.31786, 0.31786, 0.31807, 0.43478, 0.34844, 0.34797, 0.46399, 0.46356, 0.46356, 0.46356, 0.58923, 0.98951, 0.98962, 0.9856, 0.98436, 0.98265, 0.98186, 0, 0, 0.98136, 0.97963, 0.98053, 0.98053, 0.98053], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"globules blancs": {
men: [0, 0, 0, 0, 0, 0, 0.2651, 0.26511, 0.26517, 0.20016, 0.20023, 0.20023, 0.20035, 0.20035, 0.20027, 0.16951, 0.24597, 0.24614, 0.2463, 0.34434, 0.16247, 0.16255, 0.16247, 0.24437, 0.2447, 0.2447, 0.24405, 0.24347, 0.24329, 0.38927, 0.41411, 0.41411, 0.41392, 0, 0.49398, 0.49449, 0.49516, 0.4921, 0.49182, 0.49182, 0.49212, 0.6238, 0.41151, 0.40773, 0.63929, 0.63929, 0.63937, 0.63962, 0.5283, 0.52832, 0.27682, 0.36619, 0.36629, 0.36629, 0.36621, 0.2914, 0.38002, 0.38149, 0.22506, 0.22506, 0.22506, 0.22491, 0.22498, 0.14371, 0.28174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19019, 0.18993, 0.19017, 0.19017, 0.19029, 0.18994, 0.19021, 0.18995, 0.18977, 0.1896, 0.47374, 0.47374, 0.97869, 0.50422, 0.48314, 0.48395, 0.48334, 0.4825, 0.48211, 0.48296, 0.65063, 0.38742, 0.38674, 0.3871, 0.3871, 0.3871], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules nerveuses": {
men: [0, 0, 0.5481, 0.54769, 0.51077, 0.50943, 0.50913, 0.50914, 0.50925, 0.50866, 0.50883, 0.50883, 0.50915, 0.61147, 0.86203, 0.86327, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1396, 0.13065, 0.13068, 0.13118, 0.13113, 0.13113, 0.13113, 0.13104, 0.13108, 0.66287, 0.66287, 0.72919, 0.72879, 0.72842, 0.53344, 0.83311, 0.53107, 0.53414, 0.53447, 0.53447, 0.53427, 0.051994, 0.03284, 0.032871, 0.031469, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.82142, 0.82279, 0.82175, 0.82032, 0.81966, 0.8211, 0.82014, 0.91391, 0.9123, 0.91314, 0.91314, 0.91314], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"processus biologique": {
men: [0.9892, 0.98588, 0.98335, 0.98261, 0.98197, 0.9794, 0.9788, 0.97882, 0.97904, 0.9779, 0.96754, 0.96754, 0, 0, 0, 0, 0, 0, 0, 0.97527, 0.97483, 0.97529, 0.9748, 0.97747, 0.97878, 0.97878, 0.22656, 0.22602, 0.22585, 0.1593, 0.1593, 0.1593, 0.15923, 0, 0.20803, 0.12301, 0.12317, 0.12241, 0.12234, 0.12234, 0.17512, 0.13118, 0.13122, 0.15769, 0.15766, 0.15766, 0.15768, 0.15774, 0, 0, 0, 0.32114, 0.32123, 0.32123, 0.32116, 0.96185, 0.96207, 0.10731, 0.10727, 0.10727, 0.10727, 0.1072, 0.10723, 0.10719, 0.10719, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Micro-organisme unicellulaire": {
men: [0.97839, 0.97511, 0.97261, 0.97188, 0.97124, 0.9687, 0.21514, 0.21514, 0.21519, 0.28706, 0.28715, 0.28715, 0.18155, 0.18155, 0.18148, 0.15309, 0.15336, 0.15346, 0.15356, 0.15424, 0.27943, 0.27956, 0.27942, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56136, 0.56136, 0.56171, 0.56154, 0.42082, 0.41695, 0.41686, 0.41686, 0.41691, 0.30168, 0.30159, 0.3016, 0.3016, 0.30193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96574, 0.96603, 0.9657, 0.9657, 0.96651, 0.96597, 0.96549, 0.42602, 0.42731, 0.42699, 0.42946, 0.42972, 0.42972, 0.42956, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bioterrorisme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9676, 0.96919, 0.96922, 0.97013, 0.96927, 0.97018, 0.97183, 0.97373, 0.97285, 0.97827, 0.97915, 0.9778, 0.97902, 0.97902, 0.9723, 0.97052, 0.97187, 0.97056, 0.96965, 0.96876, 0.96876, 0.96876, 0.97036, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.72655, 0.72774, 0.72777, 0.72845, 0.7278, 0.97018, 0.97183, 0.97373, 0.97285, 0.97827, 0.97915, 0.9778, 0.97902, 0.97902, 0.9723, 0.97052, 0.97187, 0.97056, 0.96965, 0.96876, 0.96876, 0.96876, 0.97036, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules tumorales": {
men: [0, 0, 0, 0, 0, 0, 0.2112, 0.47035, 0.47046, 0.46991, 0.47007, 0.97147, 0.97209, 0.97209, 0.9717, 0.97309, 0.97478, 0.97543, 0.97609, 0.98496, 0.97483, 0.97529, 0.9748, 0.97747, 0.97878, 0.97878, 0.97621, 0.97388, 0.97316, 0.22244, 0.22244, 0.22244, 0.22233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.08873, 0.088753, 0.088753, 0.11487, 0.073682, 0.073699, 0.095068, 0.11586, 0.11586, 0.11586, 0.11578, 0.11582, 0.11578, 0.076977, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules immunitaires": {
men: [0.13468, 0.13422, 0.086341, 0.086276, 0.08622, 0.085994, 0.085942, 0.085943, 0.10684, 0.10672, 0.10675, 0.1328, 0, 0, 0, 0, 0, 0, 0, 0.27308, 0.13123, 0.13129, 0.20069, 0.20124, 0.20151, 0.20151, 0.20098, 0.15931, 0.1592, 0.1592, 0.1592, 0.1592, 0.15912, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98014, 0.97879, 0.98001, 0.98001, 0.98065, 0.97886, 0.98022, 0.9789, 0.97798, 0.97708, 0.97708, 0.97708, 0.83146, 0.27191, 0.25543, 0.25585, 0.25553, 0.25509, 0.37383, 0.37449, 0.37405, 0.37394, 0.37329, 0.37363, 0.37363, 0.37363], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"division cellulaire": {
men: [0, 0, 0, 0, 0, 0.83016, 0.36826, 0.36827, 0.36835, 0.36792, 0.36804, 0.36804, 0.36828, 0.36828, 0.36813, 0.36866, 0.3693, 0.36955, 0.39511, 0, 0, 0, 0.98088, 0.98357, 0.98489, 0.98489, 0.9823, 0.58525, 0.58482, 0.58482, 0.58482, 0.44078, 0.44057, 0.42058, 0.4208, 0.42124, 0.25043, 0.24888, 0.24873, 0.18455, 0.18467, 0.21719, 0.21727, 0.21527, 0.21523, 0.2512, 0.25123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42981, 0.42968, 0.42893, 0.42932, 0.42932, 0.42932], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection bactérienne": {
men: [0.38392, 0.38264, 0.38166, 0.38137, 0.38112, 0.38012, 0.37989, 0.3799, 0.37998, 0.57553, 0.57572, 0.97533, 0.97017, 0.97017, 0.96978, 0.48559, 0.11445, 0.070222, 0.070269, 0.11616, 0.11611, 0.11617, 0.11611, 0.051963, 0.045776, 0.045776, 0.045655, 0.045546, 0.043405, 0.046262, 0.0727, 0.16329, 0.16321, 0, 0, 0, 0, 0, 0.36243, 0.36243, 0.18645, 0.11666, 0.097472, 0.091366, 0.096418, 0.096418, 0.08957, 0.080547, 0.068627, 0.068629, 0.068629, 0.068704, 0.029357, 0.029357, 0.032976, 0, 0, 0, 0, 0, 0, 0.17222, 0.46996, 0.64593, 0.64593, 0.64647, 0.64611, 0.64579, 0.46028, 0.46168, 0.46134, 0.40012, 0.40037, 0.40037, 0.40022, 0.29108, 0.29109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moelle osseuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10871, 0.10866, 0.088275, 0.11499, 0.11531, 0.11546, 0.082584, 0.082367, 0.082171, 0.15083, 0.11793, 0.10135, 0.10135, 0.1013, 0, 0, 0.033753, 0.033799, 0.03359, 0.03357, 0.067013, 0.067055, 0.27381, 0.2739, 0.46015, 0.96177, 0.96177, 0.96188, 0.96226, 0.96197, 0.089504, 0.066317, 0.13454, 0.13457, 0.13457, 0.12361, 0.035856, 0.035864, 0.036002, 0.035989, 0.035989, 0.035989, 0.035964, 0.035975, 0.052053, 0.062905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063457, 0.059291, 0.055878, 0.055878, 0.055914, 0.055812, 0.055889, 0.055814, 0.055762, 0.055711, 0.055711, 0.055711, 0.31644, 0.317, 0.29892, 0.46263, 0.98011, 0.9784, 0.97762, 0.46168, 0.63116, 0.63097, 0.62987, 0.63044, 0.63044, 0.63044], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides aminés": {
men: [0.12474, 0.12432, 0.12401, 0.12391, 0.12079, 0.27224, 0.27207, 0.16453, 0.16457, 0.16437, 0.16443, 0.18189, 0.099423, 0.14524, 0.12794, 0.12813, 0.12835, 0.12843, 0.1305, 0, 0, 0, 0.19122, 0.19174, 0.192, 0.15974, 0.20413, 0.20364, 0.42865, 0.42865, 0.31859, 0.29458, 0.29444, 0.43304, 0.43327, 0.38104, 0.29268, 0.29087, 0.36009, 0.41587, 0.35136, 0.42594, 0.33715, 0.33405, 0.43193, 0.47627, 0.40228, 0.22868, 0.22861, 0.26168, 0.2106, 0.18541, 0.1022, 0.1022, 0.12531, 0, 0, 0, 0, 0, 0, 0.16248, 0.16253, 0.16248, 0.23227, 0.33294, 0.58536, 0.58506, 0.30448, 0.30541, 0.38415, 0.38636, 0.097952, 0.097952, 0.097915, 0.049766, 0.049767, 0.049814, 0.04977, 0.049816, 0.049901, 0.049999, 0.054446, 0.050434, 0.050479, 0.044997, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076685, 0.076819, 0.076729, 0.076707, 0.093246, 0.093331, 0.11931, 0.11931], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides nucléiques": {
men: [0.55529, 0.55343, 0.55201, 0.55159, 0.55123, 0.54979, 0.54946, 0.54947, 0.54959, 0.54895, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13138, 0.13145, 0.13159, 0.184, 0.22231, 0.22218, 0.22218, 0.26321, 0.44228, 0.27159, 0.26909, 0.32219, 0.35712, 0.35716, 0.23362, 0.23355, 0.23356, 0.27279, 0.27309, 0.27316, 0.27316, 0.27311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97468, 0.97638, 0.97524, 0.97496, 0.97325, 0.97414, 0.21309, 0.21309], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"circulation sanguine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1117, 0.11173, 0.11173, 0.11171, 0.11152, 0.11154, 0.17384, 0.17378, 0.17378, 0.17378, 0.33922, 0.33933, 0.33921, 0.33921, 0.96818, 0.96764, 0.96715, 0.9673, 0.53601, 0.5356, 0.18173, 0.18184, 0.18184, 0.18177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16782, 0.47456, 0.47516, 0.47516, 0.47547, 0.4746, 0.98022, 0.51664, 0.51616, 0.51568, 0.51568, 0.51568, 0.47238, 0.26564, 0, 0, 0, 0, 0, 0, 0.16347, 0.15201, 0.15174, 0.126, 0.10581, 0.10581], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise technique": {
men: [0, 0.26779, 0.2671, 0.2669, 0.26673, 0.26603, 0.26587, 0.97486, 0.97508, 0.97395, 0.97427, 0.97427, 0.97489, 0.97489, 0.9745, 0, 0, 0, 0, 0, 0, 0.98138, 0.98088, 0.98357, 0.98489, 0.98489, 0.9823, 0.070557, 0.036902, 0.036902, 0.032906, 0.032906, 0.032891, 0.030726, 0.030742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système digestif": {
men: [0, 0, 0, 0, 0, 0.22708, 0.22694, 0.23914, 0.2392, 0.23892, 0.239, 0.239, 0.23915, 0.56043, 0.56021, 0.56102, 0.38194, 0.3822, 0.38246, 0.24382, 0.097483, 0.063331, 0.063299, 0.063472, 0.063557, 0.063557, 0.06339, 0.063239, 0.063192, 0.063192, 0.065513, 0.065513, 0.065482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14696, 0.147, 0.31044, 0.37206, 0.35212, 0.35193, 0.84134, 0.84147, 0.84403, 0.84339, 0.55972, 0.2772, 0.12059, 0.12054, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22417, 0.22448, 0.30873, 0.30844, 0.30815, 0.30815, 0.30815, 0.297, 0.25844, 0.19143, 0.19175, 0.1915, 0.19117, 0.19102, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matière plastique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.54516, 0.72171, 0.72118, 0.72118, 0.60562, 0.60562, 0.60533, 0.60485, 0.60516, 0.61584, 0.61667, 0.61286, 0.61251, 0.61251, 0.67568, 0.1338, 0.13385, 0.13262, 0.94603, 0.94603, 0.94615, 0.94652, 0.94623, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosions nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96965, 0.97562, 0.97612, 0.97714, 0.97846, 0.97241, 0.97185, 0.97185, 0.97245, 0.97216, 0.97249, 0.96356, 0.96335, 0.96335, 0.95681, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sérotonine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97109, 0.23312, 0.23312, 0.23541, 0.23502, 0.23507, 0.23598, 0.23589, 0.23589, 0.23589, 0.23573, 0.2358, 0.23572, 0.23572, 0.18337, 0.33734, 0.33717, 0.83059, 0.83311, 0.31166, 0.31346, 0.31365, 0.31365, 0.31354, 0.31405, 0.31406, 0.20462, 0.20444, 0, 0, 0, 0, 0, 0, 0.39565, 0.23364, 0.23364, 0.23379, 0.23337, 0.23369, 0.35993, 0.35959, 0.35926, 0.35926, 0.35926, 0.3397, 0.20355, 0.20357, 0, 0, 0, 0, 0, 0, 0.22876, 0.22836, 0.22857, 0.22857, 0.22857], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonctions cognitives": {
men: [0, 0, 0.16689, 0.16676, 0.1631, 0.32248, 0.26684, 0.26685, 0.18013, 0.16754, 0.1676, 0.25255, 0.17354, 0.072017, 0.071988, 0.072091, 0.032182, 0.032203, 0.032406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33726, 0.33669, 0.33676, 0.33807, 0.33794, 0.33794, 0.33794, 0.45394, 0.21475, 0.11063, 0.11063, 0.17646, 0.17636, 0.17627, 0.094001, 0.075844, 0.075787, 0.0687, 0.068742, 0.068742, 0.068716, 0.068829, 0.089982, 0.19939, 0.19921, 0, 0, 0, 0, 0, 0, 0.97969, 0.98091, 0.98091, 0.54057, 0.53958, 0.54033, 0.5396, 0.14019, 0.1243, 0.1243, 0.1243, 0.1245, 0.12472, 0.093905, 0, 0, 0, 0, 0, 0, 0.097164, 0.16988, 0.19518, 0.19518, 0.19518], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones marécageuses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97035, 0.9705, 0.97345, 0.97272, 0.4462, 0.44647, 0.44647, 0.44631, 0.44704, 0.44706, 0.44747, 0.44708, 0.4475, 0.44826, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.054555, 0.054646, 0.17424, 0.17394, 0.1738, 0.1741, 0.2953, 0.29522, 0.97618, 0.97708, 0.97708, 0.97708], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie endémique": {
men: [0, 0, 0.97687, 0.97613, 0.9755, 0.97294, 0.97235, 0.97237, 0.97259, 0.97146, 0.97178, 0.97178, 0.9724, 0.9724, 0.972, 0.9734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fièvre aphteuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42119, 0.42139, 0.42117, 0.98543, 0.98675, 0.98675, 0.98416, 0.98181, 0.98109, 0.98109, 0.98109, 0.98109, 0.98063, 0.97985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antigène": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97527, 0.97483, 0.97529, 0.9748, 0.97747, 0.97878, 0.97878, 0.24405, 0.24347, 0.24329, 0.13195, 0.11739, 0.11739, 0.11733, 0, 0.091944, 0.096082, 0.089695, 0.074444, 0.074401, 0.074401, 0.086708, 0.080967, 0.080995, 0.074778, 0.038767, 0.038767, 0.038771, 0.04098, 0.0068293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48242, 0.32109, 0.52658, 0.32248, 0.32191, 0.32221, 0.32221, 0.32221], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
