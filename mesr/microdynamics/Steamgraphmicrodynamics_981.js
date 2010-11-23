var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"vente d' alcools": {
men: [0.46539, 0.41348, 0.41348, 0.41341, 0.41337, 0.41385, 0.41374, 0.29202, 0.29218, 0.20469, 0.20485, 0.20505, 0.20497, 0.20488, 0, 0, 0, 0, 0, 0, 0, 0.16484, 0.10956, 0.10474, 0.10475, 0.10479, 0.10453, 0.10445, 0.077137, 0.077244, 0.077238, 0.077299, 0.077299, 0.050695, 0.050665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95687, 0.62561, 0.62659, 0.62637, 0.62683, 0.62649, 0.62634, 0.62685, 0.62808, 0.62754, 0.62741, 0.62809, 0.62842, 0.76384, 0.51219, 0.71392, 0.71393, 0.71449, 0.71459, 0.71505, 0.71588, 0.716, 0.716, 0.71662, 0.36491, 0.36443, 0.36461, 0.11653, 0.13574, 0.13575, 0.13563, 0.13562, 0.13557, 0.13559, 0.13545, 0.13542, 0.13537, 0.13542, 0.96096, 0.96112, 0.96126, 0.96691, 0.96765, 0.96773, 0.96949, 0.96941, 0.96759, 0.96617, 0.9681, 0.9682, 0.96858, 0.96782], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"consommation d' alcool": {
men: [0.30324, 0.28415, 0.17952, 0.17949, 0.17947, 0.12957, 0.084321, 0.094089, 0.087684, 0.082146, 0.082208, 0.15566, 0.16002, 0.17575, 0.19067, 0.20531, 0.21076, 0.21055, 0.21057, 0.19497, 0.19491, 0.36085, 0.41753, 0.45568, 0.45572, 0.36023, 0.37841, 0.29061, 0.25411, 0.24094, 0.24092, 0.24111, 0.24111, 0.2496, 0.24946, 0, 0.10093, 0.082056, 0.082067, 0.082083, 0.090462, 0.099101, 0.10235, 0.13848, 0.13844, 0.1384, 0.13803, 0.1084, 0.10841, 0.10847, 0.075345, 0.082572, 0.082424, 0.082417, 0.082406, 0.10065, 0.22135, 0.11378, 0.11367, 0.11366, 0.11384, 0.33151, 0.33175, 0.23661, 0.27266, 0.27288, 0.27342, 0.27318, 0.27313, 0.27342, 0.16775, 0.30444, 0.30485, 0.30497, 0.30498, 0.34917, 0.31403, 0.33938, 0.30908, 0.30913, 0.30913, 0.3094, 0.3405, 0.34005, 0.34021, 0.71316, 0.71318, 0.7132, 0.71257, 0.6938, 0.78666, 0.84036, 0.93965, 0.93943, 0.9391, 0.83428, 0.78853, 0.78866, 0.78878, 0.40248, 0.40279, 0.40282, 0.40355, 0.36753, 0.36684, 0.15237, 0, 0.055056, 0.055078, 0.10567], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nutriments": {
men: [0.1136, 0, 0, 0, 0.0070407, 0.0060384, 0.0060368, 0.0060445, 0.0060476, 0.0049711, 0.0054816, 0.0054871, 0.0062669, 0.028533, 0.055243, 0.061217, 0.05442, 0.082285, 0.073066, 0.2192, 0.1328, 0.11307, 0.11304, 0.14207, 0.10333, 0.10337, 0.092708, 0.22306, 0.19311, 0.18561, 0.17696, 0.1771, 0.16703, 0.13343, 0.10188, 0.10735, 0.10454, 0.10304, 0.11842, 0.11845, 0.1266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12635, 0.15755, 0.19531, 0.20638, 0.21345, 0.21341, 0.21364, 0.22022, 0.21982, 0.21675, 0.21684, 0.21685, 0.19252, 0.20846, 0.27232, 0.27264, 0.27241, 0.27241, 0.28044, 0.28048, 0.23958, 0.29699, 0.57604, 0.66584, 0.67726, 0.65952, 0.78554, 0.78521, 0.74582, 0.70135, 0.70118, 0.66209, 0.6623, 0.6626, 0.71737, 0.54303, 0.28911, 0.064293, 0, 0, 0, 0, 0, 0, 0.010352, 0.011034, 0.011025], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alcool": {
men: [0.19839, 0.1152, 0.10273, 0.11312, 0.11582, 0.099954, 0.092338, 0.056231, 0.059621, 0.046517, 0.045811, 0.05192, 0.052288, 0.045934, 0.050084, 0.074895, 0.058392, 0.062807, 0.063736, 0.066804, 0.059221, 0.082722, 0.083304, 0.078568, 0.077017, 0.066483, 0.056249, 0.054239, 0.041941, 0.039147, 0.042114, 0.034748, 0.033273, 0.044386, 0.04183, 0.030345, 0.029329, 0.028721, 0.037656, 0.037539, 0.044076, 0.047622, 0.048537, 0.053338, 0.051584, 0.050028, 0.04808, 0.035499, 0.037402, 0.03003, 0.021148, 0.019363, 0.0075626, 0.0078453, 0.0075857, 0.0041601, 0.011142, 0.0067582, 0.019126, 0.024245, 0.026157, 0.027787, 0.028992, 0.025685, 0.037406, 0.054542, 0.062672, 0.062799, 0.0913, 0.098013, 0.084673, 0.14209, 0.1286, 0.12762, 0.14394, 0.14988, 0.17097, 0.17993, 0.19294, 0.19837, 0.19803, 0.22209, 0.19702, 0.16196, 0.16116, 0.23991, 0.24102, 0.24583, 0.21991, 0.212, 0.21491, 0.24522, 0.24264, 0.24948, 0.24207, 0.21537, 0.24574, 0.30803, 0.31093, 0.15244, 0.15391, 0.14575, 0.15738, 0.137, 0.1045, 0.1249, 0.11571, 0.10167, 0.099839, 0.11073], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coca-cola": {
men: [0.43521, 0.42879, 0.42879, 0.39756, 0.39752, 0.29191, 0.26801, 0, 0, 0.19113, 0.188, 0.18819, 0.19862, 0.214, 0.16064, 0.13878, 0.12875, 0.18067, 0.18069, 0.25667, 0.29129, 0.13119, 0.13115, 0.04426, 0.044643, 0.044659, 0.21812, 0.20577, 0.23191, 0.26108, 0.27523, 0.24605, 0.24605, 0.23021, 0.23007, 0.64848, 0.64861, 0.7173, 0.7174, 0.71753, 0.3787, 0.6136, 0.53951, 0.53933, 0.53918, 0.53902, 0.7547, 0.65824, 0.78213, 0.73871, 0.42145, 0.3953, 0.36718, 0.35517, 0.34562, 0.33436, 0.34005, 0.33986, 0.33954, 0.33952, 0.27495, 0.29732, 0.094598, 0.068328, 0.14914, 0.19319, 0.15053, 0.16861, 0.19511, 0.19532, 0.1752, 0.11288, 0.10029, 0.10033, 0.0057919, 0.0057965, 0.0057973, 0.0062406, 0.026134, 0.016298, 0.023036, 0.023056, 0.023059, 0.42421, 0.44429, 0.61876, 0.69527, 0.66702, 0.66643, 0.66642, 0.53992, 0.54003, 0.53736, 0.63872, 0.63849, 0.55357, 0.49592, 0.12723, 0.12382, 0.026896, 0.02214, 0.023273, 0.015153, 0.015152, 0.017427, 0.015176, 0.015482, 0.014606, 0.014611, 0.016645], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alcool au volant": {
men: [0.95281, 0.60779, 0.60778, 0.60768, 0.60762, 0.019258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23836, 0.23823, 0.95199, 0.95194, 0.95344, 0.9531, 0.95379, 0.44259, 0.44249, 0.44285, 0.44372, 0.44333, 0.44325, 0.44373, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96167, 0.96171, 0.96173, 0.96088, 0.96087, 0.96046, 0.96064, 0.95966, 0.95943, 0.95909, 0.95939, 0.95982, 0.95999, 0.96013, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie alimentaire": {
men: [0.52105, 0.52102, 0.71424, 0.88401, 0.88393, 0.85096, 0.85072, 0.82595, 0.82639, 0.97027, 0.971, 0.97197, 0.97159, 0.97117, 0.97042, 0.96916, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30905, 0.24885, 0.22037, 0.21045, 0.27962, 0.26949, 0.26947, 0.26943, 0.22253, 0.2225, 0.22238, 0.22216, 0.22215, 0.18492, 0.1354, 0.15558, 0.17255, 0.17333, 0.17347, 0.18148, 0.18132, 0.18129, 0.17767, 0.17776, 0.36658, 0.36707, 0.36722, 0.47951, 0.36821, 0.36826, 0.36849, 0.36892, 0.36898, 0.36898, 0.36931, 0.36935, 0.13311, 0.10266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02401, 0.02402, 0.024001], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie du tabac": {
men: [0.22945, 0.22944, 0.2605, 0.2985, 0.29847, 0.29882, 0.96536, 0.95328, 0.95379, 0.95517, 0.95589, 0.95685, 0.95647, 0.95606, 0.048834, 0.165, 0.16505, 0.16488, 0.1649, 0.16489, 0.13238, 0.13219, 0.12546, 0.12551, 0.12553, 0.12557, 0.12526, 0.12516, 0.42492, 0, 0, 0, 0, 0, 0.61699, 0.50535, 0.71425, 0.62503, 0.62511, 0.62523, 0.62727, 0.54529, 0.54467, 0.54449, 0.54434, 0.52344, 0.52204, 0.52215, 0.40705, 0.44622, 0.42916, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits pharmaceutiques": {
men: [0.04852, 0.036428, 0.032104, 0.024829, 0.024827, 0.28226, 0.28218, 0.19789, 0.16834, 0.16858, 0.16871, 0.16888, 0.16385, 0.16378, 0.16366, 0.15827, 0.1649, 0.18358, 0.1836, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27148, 0.233, 0.23303, 0.36263, 0.75107, 0.75156, 0.4608, 0.48096, 0.4348, 0.43468, 0.43352, 0.26233, 0.25279, 0.24169, 0.16142, 0.17052, 0.17021, 0.1702, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33746, 0.26778, 0.26792, 0.28069, 0.27193, 0.27497, 0.27497, 0.27519, 0.33821, 0.34649, 0.34689, 0.23625, 0.23625, 0.23973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15074, 0.29667, 0.29657, 0.32491, 0.32506, 0.36719, 0.4162, 0.64956, 0.77167, 0.77173, 0.77314, 0.84358, 0.45333, 0.45266, 0.20876, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau plate": {
men: [0.095816, 0.09581, 0.095809, 0.095793, 0.095784, 0.090712, 0.090688, 0.090803, 0.090851, 0.2104, 0.21055, 0.21077, 0.6129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40406, 0.40406, 0.26671, 0.26655, 0.43175, 0.17378, 0.17369, 0.17371, 0.17375, 0.17431, 0.10483, 0.10471, 0.10467, 0.10464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95957, 0.96061, 0.96111, 0.95936, 0.96065, 0.96104, 0.96106, 0.96182, 0.96195, 0.96257, 0.96368, 0.96385, 0.96385, 0.96469, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"thé vert": {
men: [0.20658, 0.33531, 0.33531, 0.47439, 0.25206, 0.25235, 0.25228, 0.31905, 0.31922, 0.31968, 0.31992, 0.32024, 0.32012, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6559, 0.65661, 0.65695, 0.65575, 0.65663, 0.6569, 0.65692, 0.65744, 0.65753, 0.96499, 0.96611, 0.96627, 0.96627, 0.96711, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.093889], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alcoolémie": {
men: [0.39317, 0.45776, 0.45775, 0.45768, 0.4249, 0.24164, 0.18188, 0.041212, 0.032057, 0.032104, 0.032128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.015417, 0.015408, 0.022384, 0.039965, 0.041667, 0.054118, 0.053152, 0.045514, 0.053483, 0.056315, 0.056426, 0.056377, 0.13114, 0.13128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.072531, 0.072435, 0.07247, 0.9104, 0.91043, 0.91333, 0.91252, 0.91251, 0.95913, 0.95932, 0.95833, 0.9365, 0.93617, 0.93646, 0.9353, 0.77021, 0.77032, 0.42372, 0.42404, 0.38461, 0.35807, 0.35804, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accidents corporels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95503, 0.95507, 0.95509, 0.95424, 0.95423, 0.95382, 0.95401, 0.95303, 0.9528, 0.95247, 0.95276, 0.95319, 0.95336, 0.9535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sac plastique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1088, 0.10889, 0.088632, 0.088613, 0.10255, 0.16957, 0.1696, 0.16952, 0.12971, 0.12974, 0.15181, 0.15191, 0.16402, 0.13416, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1508, 0.12516, 0.13895, 0.13894, 0.12119, 0.10946, 0.11545, 0.12458, 0.11126, 0.092533, 0.098803, 0.098717, 0.098698, 0.098804, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.52999, 0.53001, 0.53002, 0.52955, 0.58241, 0.58217, 0.65925, 0.49151, 0.49139, 0.49121, 0.49137, 0.49159, 0.49167, 0.49175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau minérale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24415, 0.29841, 0.29802, 0.29811, 0.43813, 0.43818, 0.82307, 0.82279, 0.82161, 0.82139, 0.82175, 0.95862, 0.95896, 0.95656, 0.94622, 0.93942, 0.94072, 0.080299, 0.080362, 0.080362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15584, 0.15583, 0.071007, 0.070879, 0.070873, 0.070863, 0.084237, 0.084226, 0.08418, 0.084098, 0.073397, 0.073512, 0.073486, 0.073539, 0, 0, 0.06088, 0.061001, 0.060947, 0.060936, 0.039361, 0.039382, 0.03931, 0.030478, 0.04846, 0.048461, 0.048499, 0.048506, 0.039878, 0.039924, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3091, 0.42256, 0.37515, 0.37527, 0.37544, 0.17801, 0.19367, 0.16459, 0.17756, 0.18948, 0.18983, 0.18981, 0.043977, 0.043913, 0.0066612, 0.0066619, 0.0067377, 0.0067324], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sérotonine": {
men: [0, 0, 0, 0, 0.019073, 0.02774, 0.027733, 0.027768, 0.057573, 0.057656, 0.0577, 0.057757, 0.057735, 0.05771, 0.93346, 0.95153, 0.95779, 0.95683, 0.95626, 0.95617, 0.95585, 0.95448, 0.95422, 0.95464, 0.95473, 0.95507, 0.95268, 0.95198, 0.95292, 0.94765, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011894, 0.021936, 0.021917, 0.13067, 0.13081, 0.048999, 0.048909, 0.048975, 0.048995, 0.048996, 0.049035, 0.049042, 0.031943, 0.03198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"verre de vin": {
men: [0.14063, 0.14062, 0.14062, 0.1406, 0.13782, 0.051276, 0.051262, 0.051327, 0.048281, 0.048351, 0.048387, 0, 0, 0, 0.29857, 0.29818, 0.29827, 0.29797, 0.30848, 0.29098, 0.29088, 0.29046, 0.44886, 0.44906, 0.4491, 0.44926, 0.33736, 0.51552, 0.32631, 0.32676, 0.27516, 0.27538, 0.27538, 0.2947, 0.20707, 0.23056, 0.13243, 0.13236, 0.13238, 0.13241, 0.15463, 0.082151, 0.082058, 0.082031, 0.061018, 0.061, 0.060838, 0.06085, 0.057824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19055, 0.19054, 0.19084, 0.19077, 0.29757, 0.29741, 0.29734, 0.29758, 0.36434, 0.34964, 0.34957, 0.34995, 0.35013, 0.2479, 0, 0, 0, 0, 0, 0, 0, 0.13358, 0.14343, 0.15513, 0.058033, 0.057957, 0.057984, 0.084196, 0.27709, 0.22013, 0.21993, 0.21993, 0.21984, 0.21988, 0.065878, 0.050708, 0.05069, 0.050706, 0.061297, 0.10146, 0.10148, 0.10207, 0.045239, 0.049024, 0.049113, 0.049108, 0.037519, 0.030142, 0.07267, 0.072677, 0.072706, 0.071489], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits laitiers": {
men: [0.080005, 0.078417, 0.075784, 0.077775, 0.077768, 0.066062, 0.072581, 0.017663, 0.013714, 0.012845, 0.012854, 0.013195, 0.01401, 0.027049, 0.052762, 0.10339, 0.11013, 0.10762, 0.10595, 0.10818, 0.10638, 0.094466, 0.11341, 0.11497, 0.11498, 0.11502, 0.11273, 0.11581, 0.086987, 0.016299, 0, 0.057984, 0.05979, 0.071156, 0.12068, 0.16425, 0.20483, 0.44684, 0.4469, 0.44699, 0.46782, 0.40732, 0.51809, 0.51793, 0.45231, 0.39815, 0.39709, 0.36065, 0.46908, 0.47549, 0.33341, 0.18468, 0.18243, 0.16667, 0.15341, 0.1602, 0.16018, 0.16009, 0.15905, 0.15904, 0.15929, 0.10197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.094809, 0.10603, 0.10607, 0.10607, 0.31112, 0.13098, 0.2982, 0.30804, 0.30809, 0.30809, 0.30836, 0.2808, 0.28043, 0.25753, 0.13586, 0.13587, 0.13587, 0.13575, 0.141, 0.24211, 0, 0.11682, 0.1168, 0.11676, 0.11679, 0.11494, 0.10979, 0.11443, 0.15927, 0.062816, 0.062821, 0.062935, 0.059873, 0.060744, 0.061244, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alcoolisme": {
men: [0.011613, 0.010564, 0.013312, 0.013309, 0.015689, 0.019516, 0.025087, 0, 0, 0, 0, 0, 0, 0, 0.2958, 0.35698, 0.29214, 0.29185, 0.29188, 0.18883, 0.18876, 0.27855, 0.27736, 0.27254, 0.27257, 0.28281, 0.22179, 0.22163, 0.16967, 0.1699, 0.17627, 0.17641, 0.17641, 0.19879, 0.19255, 0.1638, 0.19835, 0.20761, 0.20764, 0.1805, 0.34702, 0.25184, 0.26496, 0.26487, 0.26479, 0.23146, 0.23084, 0.21776, 0.17992, 0.072462, 0, 0, 0, 0, 0, 0, 0.064698, 0.059967, 0.14602, 0.1572, 0.15745, 0.13024, 0.15345, 0.16359, 0.1824, 0.22199, 0.22243, 0.22224, 0.2222, 0.3291, 0.23486, 0.28216, 0, 0, 0, 0.27227, 0.27231, 0.27248, 0.2728, 0.27285, 0.27285, 0.22084, 0.18956, 0.18931, 0.11787, 0.24913, 0.28392, 0.29111, 0.29085, 0.17869, 0.12342, 0.12345, 0.12332, 0.11871, 0.11867, 0.12231, 0.11331, 0.10004, 0.12416, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système digestif": {
men: [0.96567, 0.95895, 0.74411, 0.74398, 0.74391, 0.57113, 0.57097, 0.55029, 0.55059, 0.55139, 0.5518, 0.55235, 0.55213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15735, 0.15747, 0.15747, 0.1688, 0.29757, 0.38628, 0.26293, 0.2628, 0.18712, 0.15957, 0.16009, 0.1602, 0.14198, 0.24477, 0.11725, 0.11722, 0.11691, 0.11693, 0.11693, 0.10467, 0.15857, 0.15846, 0.19423, 0.18779, 0.18777, 0.18774, 0.21187, 0.067508, 0.086771, 0.086767, 0.086903, 0.073675, 0.073729, 0.15567, 0, 0.050513, 0.050613, 0.12095, 0.12093, 0.12106, 0.12112, 0.079776, 0.039537, 0.017207, 0.017207, 0.019649, 0.019652, 0.016044, 0.016063, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits de substitution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21581, 0.21557, 0.35895, 0.35884, 0.35874, 0.35778, 0.35785, 0.35786, 0.95881, 0.9587, 0.958, 0.95627, 0.59092, 0.59084, 0.25361, 0.25358, 0, 0, 0, 0, 0, 0, 0, 0, 0.17453, 0.17487, 0.21655, 0.21651, 0.31107, 0.31124, 0.31067, 0.55592, 0.55615, 0.39258, 0.31248, 0.31252, 0.31272, 0.31308, 0.18222, 0.18222, 0.18238, 0.1824, 0.11001, 0.11007, 0.1098, 0.13225, 0.13226, 0.1661, 0.21428, 0.21419, 0.21423, 0.21401, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matière plastique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95238, 0.45449, 0.45416, 0.45335, 0.45331, 0.45325, 0.45317, 0.45311, 0.45286, 0.45242, 0.4524, 0.45311, 0.45295, 0.45328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.58148, 0.9575, 0.95717, 0.95747, 0.9579, 0.95806, 0.70725, 0.43791, 0.25155, 0.25157, 0.25202, 0.252, 0.25153, 0.25116, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies vénériennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.95462, 0.96367, 0.96439, 0.96536, 0.96498, 0.96456, 0.96382, 0.96256, 0.96285, 0.96188, 0.96199, 0.9619, 0.96158, 0.96021, 0.95422, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marché noir": {
men: [0.062616, 0.065472, 0.065472, 0.080099, 0.10316, 0.10328, 0.095699, 0.092921, 0.092971, 0.15221, 0.15233, 0.22339, 0.2233, 0.22321, 0, 0, 0, 0, 0, 0, 0, 0.63075, 0.69946, 0.69977, 0.69983, 0.70008, 0.69833, 0.69782, 0.69851, 0.69948, 0.62677, 0.62726, 0.62726, 0.62713, 0.58616, 0.23223, 0.19945, 0.13229, 0.13231, 0.13233, 0.13276, 0.20778, 0.20755, 0.19581, 0.21379, 0.21372, 0.21316, 0.17146, 0.18037, 0.22909, 0.10943, 0.18048, 0.072644, 0.072638, 0.070151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pieds de vigne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94423, 0.945, 0.94686, 0.94604, 0.94585, 0.94687, 0.94737, 0.94564, 0.94691, 0.9473, 0.94732, 0.94806, 0.9482, 0.9488, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93157, 0.93341, 0.93259, 0.93241, 0.93342, 0.93391, 0.9322, 0.93345, 0.93383, 0.93385, 0.93459, 0.93472, 0.93532, 0.9364, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits écologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96499, 0.96611, 0.96627, 0.96627, 0.96711, 0.96724, 0.96596, 0.96642, 0.96409, 0.96413, 0.96415, 0.9633, 0.96329, 0.60813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"méduses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.080526, 0.08059, 0.08059, 0.11434, 0.11427, 0.11434, 0.11436, 0.1143, 0.11432, 0.11434, 0.073221, 0.068965, 0.063825, 0.072708, 0, 0, 0, 0.24839, 0.2484, 0.24853, 0.2485, 0.24832, 0.24788, 0.24786, 0.52445, 0.64944, 0.9578, 0.95727, 0.95635, 0.9563, 0.9578, 0, 0, 0, 0, 0.9288, 0.93064, 0.92982, 0.037519, 0.03756, 0.025835, 0.025788, 0.025823, 0.025834, 0.025834, 0.025854, 0.025858, 0.025875, 0.025905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95734, 0.95693, 0.95712, 0.95614, 0.95591, 0.95557, 0.95587, 0.9563, 0.95646, 0.95661, 0.46187, 0.46222, 0.46226, 0.4631, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
