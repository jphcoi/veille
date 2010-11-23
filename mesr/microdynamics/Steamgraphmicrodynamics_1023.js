var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"autosuffisance alimentaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3367, 0.21062, 0.21064, 0.25049, 0.2504, 0.25034, 0.25019, 0.25007, 0.35181, 0.35113, 0.35108, 0.35132, 0.23103, 0.23099, 0, 0, 0, 0, 0, 0, 0.21714, 0.21719, 0.2174, 0.21814, 0.21805, 0.21789, 0.31458, 0.31454, 0.3144, 0.31438, 0.31415, 0.31396, 0.6408, 0.64072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94692, 0.95399, 0.95725, 0.9574, 0.95719, 0.95728, 0.95708, 0.95503, 0.95481, 0.95479, 0.95441, 0.95399, 0.95412, 0.95414], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32006, 0.31987, 0.93546, 0.052944, 0.052916, 0.052931, 0.10083, 0.14405, 0.13982, 0.13989, 0.13995, 0.14004, 0.13997, 0.13995, 0.097795, 0.097857, 0.097891, 0.72275, 0.7231, 0.72306, 0.58232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93611, 0.93611, 0.94805, 0.94838, 0.94786, 0.94884, 0.94986, 0.94951, 0.95049, 0.95101, 0.95149, 0.95102, 0.95117, 0.95095, 0.94765, 0.94745, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"implantations sauvages": {
men: [0, 0, 0.84024, 0.78065, 0.78887, 0.79124, 0.79125, 0.79103, 0.79106, 0.77456, 0.77489, 0.77551, 0.77533, 0.77456, 0.73139, 0.66993, 0.13551, 0.16419, 0.047245, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36568, 0.36498, 0.21368, 0.21383, 0.17237, 0.24306, 0.24314, 0.24345, 0.24359, 0.2438, 0.24382, 0.12879, 0.076978, 0.036195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97022, 0.97, 0.96998, 0.9696, 0.96918, 0.9693, 0.96887], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections pulmonaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95109, 0.95069, 0.95001, 0.94953, 0.94942, 0.94899, 0.94894, 0.94824, 0.94769, 0.94814, 0.94803, 0.94752, 0.9478, 0.94729, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94987, 0.94965, 0.94963, 0.94926, 0.94884, 0.94897, 0.94854], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"violences sexuelles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.079757, 0.14793, 0.148, 0.07509, 0.045296, 0.045251, 0.045277, 0.045265, 0.045369, 0.071418, 0.071483, 0.071477, 0.084455, 0.084433, 0.059497, 0.033469, 0.033453, 0.064547, 0.93381, 0.93389, 0.93305, 0.9327, 0.93247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47062, 0.47056, 0.47031, 0.47045, 0.47019, 0.93976, 0.94047, 0.94765, 0.9481, 0.94869, 0.94821, 0.94805, 0.94857, 0.94918, 0.94312, 0.32995, 0.33012, 0.3301, 0.33024, 0.15471, 0.15471, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau courante": {
men: [0.081931, 0.081874, 0.064917, 0.05514, 0.058735, 0.058705, 0.058706, 0.05869, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065175, 0.055349, 0.052546, 0.053465, 0.053452, 0.19772, 0.29589, 0.43844, 0.43759, 0.39032, 0.42085, 0.49208, 0.492, 0.50158, 0.47104, 0.58678, 0.53637, 0.58627, 0.58639, 0.44741, 0.35947, 0, 0, 0.44244, 0.39382, 0.39362, 0.39357, 0.3934, 0.39338, 0.35852, 0.54499, 0.59979, 0.55748, 0.55718, 0.59084, 0.59052, 0.59013, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.023677, 0.23155, 0.34215, 0.34226, 0.3424, 0.34263, 0.34263, 0.34286, 0.38267, 0.38246, 0.19819, 0.1984, 0.19833, 0.19853, 0.041907, 0.057257, 0.057229, 0.057238, 0.057225, 0.057231, 0.057218, 0.047578, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"courant électrique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2692, 0.54381, 0.74464, 0.74429, 0.74369, 0.74201, 0.59737, 0.59683, 0.59661, 0.59646, 0.59611, 0.59583, 0.72332, 0.72193, 0.74219, 0.7427, 0.74277, 0.48777, 0.48795, 0.48856, 0.48376, 0.48417, 0.48422, 0.48432, 0.48464, 0.48475, 0.48523, 0.38286, 0.10388, 0.10381, 0.10376, 0.17184, 0.17176, 0.13696, 0.05719, 0.057157, 0.057185, 0.057178, 0.057147, 0.057164, 0.057133, 0.057095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"troubles sociaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95339, 0.95155, 0.95139, 0.95204, 0.95214, 0.95197, 0.95232, 0.95351, 0.95407, 0.95489, 0.95498, 0.95518, 0.95581, 0.95603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37755, 0.37773, 0.37769, 0.37749, 0.3776, 0.37739, 0.37714, 0.37743, 0.37761, 0.14436, 0.099258, 0.099207, 0.09919, 0.11765, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accidents graves": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1978, 0.33698, 0.42475, 0.22168, 0.26554, 0.26551, 0.31098, 0.31107, 0.24302, 0.24286, 0.24304, 0.24316, 0.24328, 0.24343, 0.096854, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95299, 0.95326, 0.95322, 0.95362, 0.95457, 0.95521, 0.9553, 0.95498, 0.95528, 0.95567, 0.95631, 0.9563, 0.95694, 0.95727, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.06257, 0.1099, 0.92511, 0.92496, 0.92529, 0.92645, 0.92699, 0.93856, 0.93865, 0.93885, 0.93946, 0.93968, 0.94061, 0.20933, 0.070664, 0.065441, 0.053785, 0.048126, 0.048104, 0.048102, 0.043277, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17943, 0.17942, 0.17949, 0.17974, 0.17974, 0.17979, 0.17978, 0.17986, 0.30346, 0.30366, 0.30369, 0.30359, 0.30369, 0.94342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10614, 0.19231, 0.19222, 0.13412, 0.13409, 0.1341, 0.13407, 0.13379, 0.13376, 0.14932, 0.18624, 0.18616, 0.18619, 0.1861], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgence sanitaire": {
men: [0.49451, 0.49417, 0.49288, 0.49223, 0.49198, 0.49173, 0.653, 0.65282, 0.65284, 0.719, 0.71931, 0.71989, 0.71972, 0.3089, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57906, 0.57877, 0.57869, 0.57844, 0.57841, 0.57798, 0.57764, 0.57792, 0.57785, 0.57754, 0.57771, 0.5774, 0.829, 0.82963, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système capitaliste": {
men: [0.015162, 0.015151, 0.015009, 0.015478, 0.015669, 0.017075, 0.1012, 0.13841, 0.27169, 0.31034, 0.29077, 0.35587, 0.40066, 0.52352, 0.29883, 0.25242, 0.25741, 0.25767, 0.24002, 0.21227, 0.090526, 0.042695, 0.040643, 0, 0.047001, 0.045912, 0.042412, 0.068405, 0.093751, 0.10585, 0.10253, 0.091894, 0.098537, 0.099902, 0.20838, 0.14569, 0.1435, 0.13973, 0.1111, 0.1342, 0.13562, 0.11443, 0.11558, 0.1164, 0.11405, 0.12193, 0.11932, 0.12712, 0.033251, 0.05618, 0.058567, 0.064292, 0.068979, 0.011439, 0.038312, 0.040625, 0.066503, 0.11143, 0.11353, 0.11142, 0.11337, 0.10755, 0.10362, 0.10163, 0.13114, 0.13256, 0.1385, 0.16705, 0.14934, 0.14311, 0.10627, 0.062838, 0.063146, 0.072365, 0.07383, 0.074821, 0.14131, 0.18047, 0.23619, 0.21986, 0.21995, 0.13334, 0.13737, 0.14342, 0.18648, 0.1988, 0.12084, 0.11523, 0.10581, 0.09919, 0.054118, 0.048197, 0, 0, 0.028358, 0.048343, 0.071112, 0.086878, 0.12783, 0.12425, 0.18673, 0.18242, 0.29868, 0.50655, 0.54939, 0.57291, 0.55885, 0.5864, 0.56922, 0.4347], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ère soviétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.27508, 0.27495, 0.55815, 0.5586, 0.55847, 0.17274, 0.11718, 0.11715, 0.11742, 0.11754, 0.11765, 0.09317, 0.09312, 0.099824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93254, 0.93318, 0.93327, 0.93311, 0.93344, 0.93462, 0.93516, 0.93597, 0.93606, 0.93626, 0.93687, 0.93708, 0.93801, 0.9412, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"affaire Elf": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94512, 0.94641, 0.9464, 0.94668, 0.94664, 0.94703, 0.94798, 0.94861, 0.9487, 0.94838, 0.94868, 0.94907, 0.9497, 0.9497, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9505, 0.95062, 0.9502], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise profonde": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12952, 0.12949, 0.12979, 0.12991, 0.13003, 0.13002, 0.12995, 0.12992, 0.12956, 0.12952, 0.29823, 0.29799, 0.29732, 0.9489, 0.56601, 0.5658, 0.56566, 0.37969, 0.32274, 0.21627, 0.21585, 0.21582, 0.16244, 0.16245, 0.078268, 0.078296, 0.078394, 0.07844, 0.084518, 0.084526, 0.084544, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65624, 0.65624, 0.76411, 0.76407, 0.76439, 0.76516, 0.81413, 0.28089, 0.28079, 0.28088, 0.35111, 0.35134, 0.35134, 0.35157, 0.22807, 0.17231, 0.10589, 0.10601, 0.10597, 0.10608, 0.05581, 0.10192, 0.10187, 0.10189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.024868], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement technologique": {
men: [0.1064, 0.1924, 0.1919, 0.1775, 0.17741, 0.17732, 0.21092, 0.54086, 0.54087, 0.37632, 0.37649, 0.31942, 0.31935, 0.31903, 0.27755, 0.2783, 0.27894, 0.29419, 0.29445, 0.29443, 0.28336, 0.09783, 0.057304, 0.076785, 0.065588, 0.079136, 0.078957, 0.078963, 0.078892, 0, 0, 0, 0, 0, 0, 0.14988, 0.41893, 0.5826, 0.94097, 0.9413, 0.94249, 0.94304, 0.94385, 0.28729, 0.28735, 0.28753, 0.2876, 0.28789, 0.28886, 0.10907, 0.10899, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064381, 0.06438, 0.1627, 0.075409, 0.075368, 0.06834, 0.068413, 0.068388, 0.068458, 0.073609, 0.073646, 0.07361, 0.063762, 0.056218, 0.039883, 0.039875, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"famine": {
men: [0.052022, 0.074067, 0.094273, 0.095852, 0.085574, 0.11312, 0.12418, 0.11154, 0.11477, 0.25074, 0.25085, 0.29236, 0.14999, 0.17915, 0.1687, 0.12431, 0.11057, 0.098335, 0.095422, 0.10346, 0.090312, 0.073507, 0.059447, 0.053711, 0.053686, 0.080551, 0.082575, 0.078657, 0.06275, 0.072609, 0.064624, 0.062933, 0.060372, 0.067169, 0.06366, 0.083395, 0.10461, 0.11409, 0.15496, 0.1398, 0.15064, 0.16228, 0.15987, 0.16476, 0.15219, 0.2016, 0.21732, 0.23479, 0.30827, 0.3593, 0.38538, 0.25347, 0.20402, 0.1801, 0.15881, 0.16716, 0.21467, 0.16816, 0.17372, 0.17162, 0.17983, 0.15951, 0.1594, 0.14255, 0.13821, 0.17693, 0.15717, 0.101, 0.14969, 0.171, 0.13237, 0.17727, 0.18457, 0.1636, 0.15316, 0.1595, 0.15971, 0.16803, 0.16735, 0.172, 0.18082, 0.34575, 0.27791, 0.19815, 0.25634, 0.14777, 0.14783, 0.13321, 0.10539, 0.11078, 0.08777, 0.10681, 0.11123, 0.090114, 0.11639, 0.1145, 0.092055, 0.09479, 0.073216, 0.086719, 0.093428, 0.093437, 0.1142, 0.065652, 0.079424, 0.049464, 0.038652, 0.040596, 0.015854, 0.014583], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie chinoise": {
men: [0.023734, 0.21996, 0.21939, 0.2191, 0.21899, 0.14291, 0.20009, 0.24052, 0.37472, 0.37455, 0.37471, 0.37501, 0.37492, 0.37455, 0.28663, 0.28842, 0.28908, 0.28937, 0.28963, 0.5041, 0.049201, 0.049188, 0.049053, 0.041678, 0.037558, 0.037528, 0.037443, 0.037446, 0.037412, 0, 0, 0, 0, 0, 0, 0.024732, 0.024749, 0.020627, 0.022668, 0.020447, 0.020472, 0.020484, 0.020502, 0.018663, 0.016889, 0.0169, 0.016904, 0.02004, 0.022847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57542, 0.57577, 0.57548, 0.57538, 0.5757, 0.94681, 0.94714, 0.94674, 0.52346, 0.52342, 0.52365, 0.28282, 0.28282, 0.2829, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"inégalités sociales": {
men: [0, 0, 0, 0.093356, 0.28059, 0.26128, 0.26128, 0.27381, 0.30382, 0.33889, 0.36921, 0.37818, 0.36222, 0.35759, 0.32859, 0.36733, 0.35776, 0.31148, 0.14496, 0.16049, 0.20749, 0.20326, 0.14727, 0.13047, 0.12011, 0.12001, 0.12886, 0.13305, 0.11234, 0.09957, 0.093022, 0.059742, 0.059714, 0.048645, 0, 0.018468, 0.01986, 0.015387, 0.015385, 0.01539, 0.079038, 0.073472, 0.084704, 0.16385, 0.14628, 0.14434, 0.1247, 0.11267, 0.11523, 0.098423, 0.098522, 0.1161, 0.11806, 0.11122, 0.062523, 0.053742, 0.049619, 0.062999, 0.063302, 0.063648, 0.060473, 0.063335, 0.062696, 0.061525, 0.069416, 0.065022, 0.063502, 0.066107, 0.072132, 0.077887, 0.091894, 0.038988, 0.037697, 0.037715, 0.038477, 0.043259, 0.044145, 0.061474, 0.052799, 0.05387, 0.053892, 0.053946, 0.09438, 0.11873, 0.11868, 0.17435, 0.21741, 0.19711, 0.16538, 0.16419, 0.22031, 0.20724, 0.18536, 0.21745, 0.21737, 0.21759, 0.20495, 0.21414, 0.20807, 0.14322, 0.12495, 0.12616, 0.12376, 0.10537, 0.03277, 0.034262, 0.066174, 0.066266, 0.066274, 0.10129], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeux écologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39395, 0.39412, 0.39444, 0.95301, 0.95206, 0.9526, 0.95235, 0.95454, 0.95549, 0.95635, 0.95627, 0.95576, 0.95551, 0.95288, 0.18886, 0.18877, 0.18862, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026202, 0.0262, 0.019377, 0.019403, 0.019403, 0.01717, 0.017169, 0.017176, 0.015139, 0.015149, 0.015151, 0.015146, 0.019607, 0.023203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17776, 0.17779, 0.17775, 0.17776, 0.14541, 0.14509, 0.078988, 0.074304, 0.074275, 0.074243, 0.074252, 0.074219], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété collective": {
men: [0.1825, 0.26306, 0.2282, 0.2279, 0.22779, 0.22767, 0.31481, 0.44108, 0.38006, 0.55965, 0.5599, 0.32206, 0.32199, 0.48399, 0.48426, 0.48413, 0.64108, 0.64171, 0.6423, 0.64224, 0.48445, 0.48432, 0.32215, 0.22408, 0.22397, 0.22379, 0.22328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25032, 0.25013, 0.39721, 0.3974, 0.39735, 0.39714, 0.39726, 0.090723, 0.090663, 0.090732, 0.097374, 0.093549, 0.085952, 0.085909, 0.044688, 0.044713, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prolifération nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15649, 0.1564, 0.20246, 0.20235, 0.35899, 0.29698, 0.29718, 0.29721, 0.29716, 0.29727, 0.29764, 0.29781, 0.37445, 0.23647, 0.06634, 0.038319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56045, 0.40418, 0.48369, 0.65254, 0.6523, 0.65297, 0.65332, 0.65365, 0.68269, 0.6828, 0.68265, 0.68271, 0.68257, 0.6811, 0.37004, 0.23447, 0.096065, 0.096023, 0.078845, 0.07881], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13747, 0.23664, 0.23666, 0.9266, 0.92625, 0.92602, 0.92548, 0.92504, 0.92454, 0.92276, 0.92261, 0.92323, 0.92333, 0.92317, 0, 0.39051, 0.39074, 0.39108, 0.39111, 0.3912, 0.39145, 0.070127, 0.070196, 0.070435, 0.070404, 0.070355, 0.03439, 0.034385, 0.03437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"personnes dépendantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13848, 0.13837, 0.13805, 0.15365, 0.15351, 0.25371, 0.25365, 0.93773, 0.93728, 0.93677, 0.93497, 0.94681, 0.94746, 0.94755, 0.94429, 0.94463, 0.44521, 0.44547, 0.44585, 0.44589, 0.44599, 0.44628, 0.44638, 0.16164, 0.13717, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065273], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau plate": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95172, 0.95224, 0.95285, 0.95318, 0.95278, 0.95325, 0.95319, 0.95361, 0.9549, 0.9549, 0.95518, 0.95514, 0.95554, 0.95649, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94688, 0.94633, 0.94679, 0.94667, 0.94617, 0.94645, 0.94593, 0.9453, 0.94602, 0.94647, 0.94692, 0.94751, 0.94703, 0.94687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"touchés par la sécheresse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94688, 0.94633, 0.94679, 0.94667, 0.94617, 0.94645, 0.94593, 0.9453, 0.94602, 0.94647, 0.94692, 0.94751, 0.94703, 0.94687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Jacques Delors": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94068, 0.94285, 0.94378, 0.94464, 0.94456, 0.94406, 0.94381, 0.94121, 0.94094, 0.9405, 0.93973, 0.93761, 0.93768, 0.93684, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins fondamentaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40085, 0.40061, 0.33426, 0.20245, 0.16413, 0.17304, 0.17316, 0.17317, 0.17314, 0.13993, 0.1574, 0.15749, 0.15763, 0.13498, 0.020516, 0.020529, 0.021975, 0.030391, 0.039285, 0, 0, 0, 0, 0, 0, 0, 0, 0.19172, 0.32092, 0.32075, 0.32085, 0.32067, 0.32046, 0.44783, 0.67724, 0.55573, 0.55607, 0.55579, 0.61791, 0.44165, 0.44193, 0.38016, 0.30199, 0.30214, 0.30212, 0.30225, 0.22904, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1464, 0.14633, 0.14635, 0.14632, 0.14633, 0.1463, 0.14599, 0.19241, 0.10838, 0.10833, 0.13641, 0.19646, 0.38371], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
