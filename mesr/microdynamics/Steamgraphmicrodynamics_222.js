var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"Micro-organisme unicellulaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15867, 0.15867, 0.15906, 0.18325, 0.18445, 0.18445, 0.31183, 0.31183, 0.31183, 0.31183, 0.31265, 0.56669, 0.56671, 0.56505, 0.9814, 0.9814, 0.9814, 0.9814, 0.9814, 0.98584, 0.98205, 0.97872, 0.97872, 0.97872, 0.97872, 0.97872, 0.97775, 0.98017, 0.983, 0.98933, 0.98572, 0.98572, 0.98481, 0.98697, 0.98697, 0.98931, 0.98931, 0.98598, 0.98689, 0.98622, 0.98645, 0.98645, 0.98645, 0.98357, 0.98332, 0.98332, 0.98305, 0.97527, 0.97527, 0.97425, 0.97425, 0.97675, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0, 0.42196, 0.42196, 0.42196, 0.42196, 0.29444, 0.29444, 0.29414, 0.29414, 0.29384, 0.18172, 0.24167, 0.24167, 0.24324, 0.17108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13706, 0.1377, 0.13723, 0.13723, 0.13723, 0.12713, 0.12713, 0.127, 0.16598, 0.13971, 0.13941, 0.1389, 0.1389, 0.25104, 0.20781, 0.20781, 0.20831, 0.20831, 0.2076, 0.31307, 0.31286, 0.55524, 0.55524, 0.7327, 0.73331, 0.73312, 0.73312, 0.98331, 0.98444, 0.98444, 0.98758, 0.98758, 0.99012, 0.99318, 0.9945, 0.9924, 0.9924, 0.66592, 0.66592, 0.67102, 0.67102, 0.6499, 0.41215, 0.41215, 0.22725, 0.22725, 0.22578, 0.22578, 0.16989, 0.16943, 0.16943, 0.2157, 0.2157, 0.2157, 0.1652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60288], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pelotes microscopiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13706, 0.1377, 0.13723, 0.13723, 0.13723, 0.12713, 0.12713, 0.127, 0.16598, 0.13971, 0.13941, 0.1389, 0.1389, 0.25104, 0.20781, 0.20781, 0.20831, 0.20831, 0.2076, 0.31307, 0.31286, 0.55524, 0.55524, 0.7327, 0.73331, 0.73312, 0.73312, 0.98331, 0.98444, 0.98444, 0.98758, 0.98758, 0.99012, 0.99318, 0.9945, 0.9924, 0.9924, 0.66592, 0.66592, 0.67102, 0.67102, 0.6499, 0.41215, 0.41215, 0.22725, 0.22725, 0.22578, 0.22578, 0.16989, 0.16943, 0.16943, 0.2157, 0.2157, 0.2157, 0.1652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60288], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"noyau de la cellule": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11192, 0.13753, 0.13787, 0.13787, 0.13877, 0.16549, 0.2844, 0.2844, 0.2844, 0.2844, 0.6162, 0.9917, 0.99174, 0.98884, 0.47107, 0.47107, 0.47107, 0.47107, 0.32819, 0.32155, 0.16872, 0.16815, 0.1439, 0.1439, 0.11748, 0.11748, 0.11736, 0.10386, 0.12298, 0.2503, 0.24939, 0.24939, 0.28612, 0.26865, 0.26865, 0.26929, 0.33527, 0.33414, 0.33337, 0.33314, 0.52691, 0.65433, 0.43114, 0.2942, 0.29413, 0.29413, 0.29405, 0.29438, 0.29438, 0.45135, 0.45135, 0.45251, 0.57632, 0.57709, 0.29249, 0.29249, 0.34867, 0.34867, 0.35134, 0.35134, 0.34947, 0.34947, 0.34947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections intestinales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25946, 0.25946, 0.12211, 0.12211, 0.12244, 0.12244, 0.12244, 0.14765, 0.14756, 0.10971, 0.063542, 0.036341, 0.036341, 0.038275, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052906, 0.079933, 0.98032, 0.98465, 0.98959, 0.74784, 0.74961, 0.74961, 0.74709, 0.7911, 0.79056, 0.79074, 0.79074, 0.79074, 0.73812, 0.73793, 0.73793, 0.68074, 0.46385, 0.97527, 0.97425, 0.97425, 0.97675, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"germes pathogènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.079949, 0.085202, 0.093039, 0.085886, 0.082686, 0.082407, 0.16903, 0.23803, 0.20447, 0.20447, 0.21032, 0.21049, 0.2429, 0.2429, 0.26671, 0.23349, 0.23349, 0.33286, 0.33508, 0.33594, 0.22328, 0.13582, 0.17506, 0.17506, 0.20426, 0.20426, 0.20583, 0.20583, 0, 0, 0, 0, 0, 0, 0, 0.47598, 0.4747, 0.4747, 0.4727, 0.4727, 0.4727, 0.4723, 0.47145, 0.47145, 0.97433, 0.97357, 0.97357, 0.975, 0.975, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection bactérienne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31812, 0.31812, 0.54027, 0.97924, 0.98563, 0.98563, 0.98908, 0.23273, 0.14269, 0.14269, 0.13598, 0.13598, 0.13599, 0.13559, 0.072239, 0.063551, 0.063551, 0.063551, 0.063551, 0.10654, 0.04848, 0.075927, 0.17053, 0.17053, 0.20492, 0.20492, 0.20471, 0.20522, 0.20581, 0.63873, 0.6364, 0.3272, 0.16859, 0.17459, 0.16517, 0.17475, 0.17475, 0.16177, 0.18811, 0.1953, 0.19534, 0.19534, 0.19534, 0.16059, 0.16055, 0.18038, 0.26165, 0.21457, 0.24472, 0.24446, 0.24446, 0.30221, 0.14748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"capacités cognitives": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98466, 0.98466, 0.98466, 0.98466, 0.98466, 0.98359, 0.98815, 0.9848, 0.9848, 0.9848, 0.9848, 0.9848, 0.98382, 0.98625, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces endémiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23448, 0.2338, 0.46677, 0.46677, 0.46677, 0.46677, 0.46677, 0.46626, 0.46842, 0.46684, 0.46684, 0.46684, 0.98035, 0.98035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection virale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4741, 0.4741, 0.4741, 0.37341, 0.63119, 0.3067, 0.30812, 0.22931, 0.15197, 0.15197, 0.15197, 0.15197, 0.15182, 0.1522, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces inconnues": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97922, 0.97922, 0.97729, 0.98143, 0.97825, 0.97825, 0.97924, 0.97924, 0.97924, 0.97924, 0.97924, 0.97814, 0.97924, 0.98078, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phytoplancton": {
men: [0, 0.022099, 0.020519, 0.011747, 0.011134, 0.011114, 0.010955, 0.011779, 0.011779, 0.012362, 0.012362, 0.012393, 0.012837, 0.01422, 0.014552, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24357, 0.26143, 0.3048, 0.30487, 0.19774, 0.21746, 0.21764, 0.28094, 0.28094, 0.28086, 0.31987, 0.35865, 0.35827, 0.35827, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60835, 0.60835, 0.60835, 0.61065, 0.61065, 0.60669, 0.60669, 0.60539, 0.60376, 0.60376, 0.60122, 0.60122, 0.97381, 0.97298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biotope": {
men: [0, 0, 0, 0, 0, 0.2312, 0.2312, 0.33233, 0.33233, 0.332, 0.332, 0.33282, 0.23796, 0.23951, 0.18823, 0.18758, 0.18758, 0.1924, 0.1924, 0.085423, 0.085423, 0.074076, 0.18183, 0.18172, 0.18172, 0.18172, 0.28307, 0.21355, 0.27675, 0.19782, 0.1206, 0.11286, 0.11286, 0.11286, 0.095224, 0.12492, 0.050831, 0.04959, 0.04062, 0.040471, 0.040471, 0.040965, 0.040936, 0.045216, 0.058864, 0.068114, 0.067884, 0.12991, 0.15535, 0.067653, 0.096838, 0.1021, 0.18115, 0.1418, 0.096564, 0.11213, 0.088073, 0.088073, 0.081, 0.075045, 0.075238, 0, 0, 0, 0, 0, 0, 0, 0, 0.051118, 0.066238, 0.066238, 0.075411, 0.041337, 0.041069, 0.033554, 0.087019, 0.086785, 0.082011, 0.081666, 0.081666, 0.081666, 0.095275, 0.14979, 0.12815, 0.12333, 0.12324, 0.17365, 0.16771, 0.21785, 0.15356, 0.15379, 0.14656, 0.13167, 0.1315, 0.11192, 0.11662, 0, 0, 0, 0, 0, 0, 0, 0, 0.13493, 0.1674, 0.21013, 0.20991, 0.36703], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biosphère": {
men: [0, 0.071672, 0.071672, 0.064508, 0.062268, 0.15631, 0.17472, 0.17454, 0.23062, 0.26345, 0.16403, 0.13136, 0.074577, 0.075064, 0.065958, 0.041259, 0.041259, 0.043132, 0.043848, 0, 0, 0.027126, 0.072188, 0.06777, 0.079602, 0.090099, 0.17237, 0.15306, 0.11185, 0.055027, 0.05484, 0.05484, 0.04939, 0.048473, 0.046035, 0.047898, 0.023664, 0.021338, 0.021291, 0.019833, 0.019634, 0.02007, 0.022755, 0.032391, 0.031797, 0.028883, 0.03077, 0.053922, 0.05645, 0.0367, 0.039967, 0.040746, 0.038385, 0.040576, 0.036891, 0.036881, 0.037822, 0.040983, 0.034359, 0.038398, 0.039886, 0, 0, 0, 0, 0, 0, 0, 0, 0.038453, 0.032818, 0.032818, 0.048267, 0.046664, 0.039113, 0.024557, 0.049921, 0.061239, 0.048074, 0.043017, 0.043017, 0.043017, 0.040642, 0.063369, 0.068245, 0.066855, 0.066802, 0.067618, 0.072667, 0.11177, 0.085009, 0.081392, 0.08407, 0.064623, 0.054214, 0.04781, 0.049691, 0, 0, 0, 0, 0, 0, 0, 0, 0.027252, 0.032307, 0.045339, 0.05433, 0.064795], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réactions chimiques": {
men: [0, 0.094027, 0.094027, 0.081243, 0.11757, 0.099826, 0.079134, 0.072212, 0.081306, 0.081224, 0.081224, 0.081426, 0.081426, 0.096229, 0.096229, 0.10836, 0.10836, 0.13089, 0.13089, 0.16114, 0.26804, 0.38472, 0.98201, 0.9814, 0.9814, 0.9814, 0.9814, 0.51464, 0.39912, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.079524, 0.079233, 0.079233, 0.08065, 0.08431, 0.08431, 0.092242, 0.092242, 0.081848, 0.090087, 0.11344, 0.17351, 0.13657, 0.13657, 0, 0, 0, 0.15388, 0.15406, 0.15406, 0.13389, 0.13389, 0.16272, 0.16322, 0.16344, 0.22744, 0.22424, 0.17518, 0.17518, 0.15261, 0.13273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie endémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21976, 0.21976, 0.22028, 0.25385, 0.25299, 0.36185, 0.44007, 0.44017, 0.50252, 0.66573, 0.66629, 0.66612, 0.66612, 0.66594, 0.53195, 0.53195, 0.5314, 0.98081, 0.98333, 0.43526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides aminés": {
men: [0.60917, 0.6083, 0.6083, 0.6083, 0.59335, 0.48821, 0.48821, 0.29493, 0.29493, 0.29463, 0.29463, 0.32672, 0.2839, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.097249, 0.1119, 0.094486, 0.14296, 0.16515, 0.16515, 0.21409, 0.23607, 0.19869, 0.16666, 0.16655, 0.19068, 0.15346, 0.13495, 0.05319, 0.053176, 0.065215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Rayonnement électromagnétique": {
men: [0, 0.16108, 0.16108, 0.23719, 0.23719, 0.23676, 0.23676, 0.23652, 0.17119, 0.17102, 0.10054, 0.10078, 0.1105, 0.14973, 0.090795, 0.15132, 0.15132, 0.15132, 0.15132, 0.14242, 0.14242, 0.14243, 0.16272, 0.16262, 0.20065, 0.20065, 0.20065, 0.20065, 0.3909, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.047414, 0.047381, 0.048691, 0.03735, 0.03735, 0.037224, 0.037138, 0.031251, 0.032777, 0.042635, 0.042635, 0.04267, 0.042659, 0.042659, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066668, 0.052445, 0.052445, 0.047579, 0.047579, 0.04727, 0.054252, 0.058905, 0.048656, 0.071888, 0.03958, 0.034037, 0.034037, 0.019508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.035274, 0.037658, 0.037658, 0.061578, 0.07513, 0.080253, 0.082031, 0.072953, 0.072953, 0.088271, 0.088271, 0.088271, 0.14947, 0.15636, 0.13402, 0.14653, 0.24061], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gaz nocifs": {
men: [0, 0.36186, 0.21823, 0.21823, 0.11925, 0.11904, 0.11904, 0.11892, 0.099775, 0.099674, 0.099674, 0.099922, 0.12103, 0.12182, 0.12182, 0.18226, 0.22351, 0.22351, 0.42436, 0.42548, 0.42548, 0.4255, 0.37213, 0.3719, 0.3719, 0.3719, 0.3719, 0.3719, 0.3715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ondes électromagnétiques": {
men: [0, 0.050579, 0.050579, 0.054418, 0.064155, 0.06404, 0.06404, 0.10376, 0.08399, 0.083906, 0.075342, 0.075529, 0.075529, 0.092235, 0.079517, 0.20429, 0.20429, 0.2192, 0.2192, 0.21978, 0.21978, 0.18589, 0.28032, 0.28015, 0.26393, 0.26393, 0.26393, 0.26393, 0.20985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021844, 0.029922, 0.029922, 0.061569, 0.076545, 0.076048, 0.095903, 0.095698, 0.059453, 0.068131, 0.030979, 0.029788, 0.029788, 0.019347, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046835, 0.046654, 0.046654, 0.067514, 0.075623, 0.11361, 0.13752, 0.093115, 0.099988, 0.10579, 0.10579, 0.10928, 0.068876, 0.068952, 0, 0, 0.050633], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"héréditaire": {
men: [0.13115, 0.13096, 0.081973, 0.087875, 0.087875, 0.084601, 0.075768, 0.075691, 0.049335, 0.072528, 0.061414, 0.021897, 0.022302, 0.020901, 0.020691, 0.02062, 0.024484, 0.023401, 0.02231, 0.021712, 0.015793, 0.015794, 0.021295, 0, 0, 0, 0, 0, 0.018491, 0.017987, 0.019258, 0.020245, 0.02146, 0.022196, 0.047205, 0.038402, 0.041414, 0.042092, 0.09478, 0.066727, 0.063305, 0.076017, 0.057151, 0.05973, 0.059872, 0.054224, 0.054042, 0.055934, 0.057105, 0.083377, 0.064799, 0.064799, 0.043514, 0.053071, 0.040838, 0.048172, 0.048228, 0.047444, 0.070883, 0.071915, 0.072099, 0.072322, 0.074074, 0.056507, 0.075876, 0.073727, 0.073727, 0.074291, 0.14461, 0.15746, 0.12424, 0.10672, 0.039336, 0.04385, 0.043565, 0.043565, 0.080278, 0.085291, 0.072984, 0.077337, 0.077337, 0.077337, 0.117, 0.13383, 0.15563, 0.18584, 0.17628, 0.17628, 0.17654, 0.17654, 0.17605, 0.12951, 0.17081, 0.15189, 0.1351, 0.1351, 0.078209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050341], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces exogènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0.083533, 0.075158, 0.075083, 0.075083, 0.075269, 0.075269, 0.075761, 0.075761, 0.0755, 0.0755, 0.0755, 0.0755, 0.0757, 0.25256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97999, 0.97932, 0.97955, 0.97955, 0.13994, 0.14005, 0.14002, 0.14002, 0.13998, 0.14014, 0.14014, 0.13999, 0.13999, 0.14035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces végétales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20635, 0.27461, 0.27461, 0.27461, 0.27461, 0.27461, 0.12909, 0.12969, 0.14638, 0.14638, 0.13939, 0.11776, 0.078017, 0.14545, 0.060253, 0.060427, 0.060294, 0.057256, 0.057256, 0.057203, 0.071928, 0.071928, 0.072099, 0.072099, 0.073678, 0.081449, 0.10032, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53022, 0.22653, 0.22653, 0.22635, 0.22635, 0.22669, 0.22669, 0.2376, 0.17743, 0.14995, 0.11644, 0.11629, 0.11629, 0.11606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moelle osseuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22243, 0.22227, 0.37687, 0.78975, 0.78975, 0.78709, 0.78527, 0.78473, 0.090593, 0.067124, 0.062089, 0.062141, 0.062125, 0.057075, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces locales": {
men: [0, 0, 0, 0, 0, 0, 0, 0.11078, 0.11078, 0.11066, 0.11066, 0.19928, 0.19928, 0.20058, 0.20058, 0.1013, 0.1013, 0.1013, 0.1013, 0.10157, 0.10157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30325, 0.21788, 0.21793, 0.21793, 0.21793, 0.21811, 0.21806, 0.18091, 0.18086, 0.20496, 0.20496, 0.30756, 0.30756, 0.22399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mammifères": {
men: [0.031751, 0.042973, 0.036585, 0.034484, 0.030785, 0.031469, 0.030523, 0.035315, 0.036128, 0.03672, 0.036983, 0.016805, 0.01844, 0.019259, 0.023263, 0.02393, 0.029805, 0.030035, 0.035727, 0.02746, 0.01756, 0.0093709, 0.010065, 0.010099, 0.010099, 0.0097929, 0.0099938, 0.010234, 0.017556, 0.0076229, 0.0075971, 0.0078369, 0.007723, 0.0094887, 0.019222, 0.022784, 0.026031, 0.022051, 0.050998, 0.055726, 0.052131, 0.070347, 0.09319, 0.094049, 0.089789, 0.095128, 0.097042, 0.16567, 0.12315, 0.11681, 0.10686, 0.12273, 0.094021, 0.091175, 0.095309, 0.090038, 0.067008, 0.065236, 0.056023, 0.056023, 0.054706, 0.015848, 0.018055, 0.015302, 0.016314, 0.013772, 0.013495, 0.013459, 0.012938, 0.010344, 0.010209, 0.010508, 0.012073, 0.012073, 0.012457, 0.011126, 0.010673, 0.010771, 0.010644, 0.011581, 0.011389, 0.011744, 0.010788, 0, 0, 0, 0.016995, 0.01585, 0.015839, 0.018624, 0.020501, 0.020978, 0.045336, 0.038054, 0.06246, 0.061146, 0.070565, 0.064722, 0.11745, 0.12463, 0.10891, 0.11937, 0.12153, 0.11682, 0.11272, 0.13222, 0.10266, 0.15095, 0.11663, 0.15567], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"plancton": {
men: [0, 0.024484, 0.023074, 0.022502, 0.023597, 0.032725, 0.02711, 0.023714, 0.02766, 0.026451, 0.026451, 0.028495, 0.028495, 0.02664, 0.026144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22856, 0.22803, 0.22788, 0.23123, 0.16937, 0.17469, 0.17484, 0.21346, 0.23747, 0.25576, 0.28775, 0.31875, 0.31842, 0.34814, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.087107, 0.087107, 0.087107, 0.087436, 0.087436, 0.086869, 0.086869, 0.086683, 0.08645, 0.08645, 0.086086, 0.077897, 0.08196, 0.13945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes vivants": {
men: [0, 0, 0, 0, 0, 0.069974, 0.065868, 0.10941, 0.11189, 0.14328, 0.14809, 0.14846, 0.15818, 0.15921, 0.15294, 0.17599, 0.20913, 0.22378, 0.23931, 0.21395, 0.20454, 0.11176, 0.10592, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055107, 0.054906, 0.058437, 0.097023, 0.10034, 0.039876, 0.039108, 0.039108, 0.039448, 0.040929, 0.039676, 0.039844, 0.039844, 0.044438, 0.018706, 0.018701, 0.018306, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.034921, 0.032395, 0.057621, 0.061514, 0.061514, 0.058847, 0.069369, 0.069452, 0.076036, 0.069601, 0.076118, 0.090223, 0.10966, 0.10008, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système digestif": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11063, 0.09686, 0.095842, 0.095842, 0.09552, 0.095299, 0.095234, 0.085223, 0.093886, 0.093886, 0.11539, 0.11154, 0.11154, 0.11151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18145, 0.18145, 0.18385, 0.18385, 0.18385, 0.1837, 0.18337, 0.13678, 0.14425, 0.17235, 0.34709, 0.3476, 0.26827, 0.26849, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
