var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"jean-noël escudié": {
men: [0.98606, 0.98605, 0.98545, 0.98545, 0.98545, 0.98572, 0.98614, 0.98629, 0.98665, 0.98659, 0.98659, 0.98659, 0.98661, 0.98654, 0.98749, 0.98749, 0.98805, 0.98805, 0.98805, 0.98813, 0.98789, 0.98673, 0.98495, 0, 0, 0, 0, 0, 0.98276, 0.98183, 0.98183, 0.98183, 0.98183, 0.98413, 0.9847, 0.98476, 0.98545, 0.98575, 0.98575, 0.98575, 0.98584, 0.98499, 0.98503, 0.98558, 0.98561, 0.98561, 0.98561, 0.98527, 0.98413, 0.98504, 0.9837, 0.9842, 0.9842, 0.9842, 0.98391, 0.98471, 0.98492, 0.98451, 0.98359, 0.98359, 0.98359, 0.98461, 0.98432, 0.98341, 0.98379, 0.98274, 0.98274, 0.98274, 0.98235, 0.98166, 0.98216, 0.98179, 0.98197, 0.98197, 0.98197, 0.98062, 0.98306, 0.98305, 0.98253, 0.98337, 0.98337, 0.98337, 0.98425, 0.98472, 0.98519, 0.98563, 0.98617, 0.98617, 0.98617, 0.98573, 0.98553, 0.98532, 0.98604, 0.98548, 0.98548, 0.98548, 0.98549, 0.98545, 0.98456, 0.98384, 0.98422, 0.98422, 0.98422, 0.98559, 0.98526, 0.98492, 0.98506, 0.98506, 0.98506, 0.98506], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de loi de réforme": {
men: [0.92524, 0.91583, 0.94442, 0.96676, 0.9786, 0.99503, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0.99908, 0.99944, 0.99944, 0.99944, 0.99944, 0.94931, 0.95593, 0.94462, 0.95079, 0.95739, 0.95301, 0.94266, 0.9464, 0.95062, 0.94547, 0.81818, 0.84416, 0.84416, 0.83593, 0.83819, 0.83797, 0.80983, 0.80959, 0.80408, 0.8074, 0.8155, 0.7743, 0.7902, 0.77449, 0.89934, 0.89211, 0.89211, 0.90365, 0.90379, 0.90631, 0.95084, 0.93747, 0.93052, 0.91732, 0.82985, 0.85927, 0.82773, 0.83938, 0.8243, 0.80366, 0.79773, 0.79189, 0.7872, 0.77788, 0.76365, 0.76654, 0.77237, 0.75572, 0.80672, 0.78795, 0.79728, 0.75126, 0.70477, 0.66349, 0.64921, 0.64978, 0.65535, 0.62151, 0.61249, 0.60252, 0.58372, 0.60493, 0.61335, 0.63453, 0.63757, 0.64916, 0.75369, 0.80638, 0.83951, 0.84671, 0.85119, 0.91297, 0.90043, 0.90759, 0.90759, 0.90759, 0.90759], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sig": {
men: [0.77434, 0.67117, 0.70615, 0.72644, 0.74235, 0.78716, 0.77135, 0.77289, 0.77839, 0.7932, 0.78294, 0.78294, 0.74963, 0.74889, 0.72522, 0.90012, 0.88419, 0.90553, 0.90553, 0.43979, 0.37238, 0.16183, 0.080421, 0, 0, 0, 0, 0, 0.11294, 0.1124, 0.1124, 0.1124, 0.1124, 0.16444, 0.167, 0.48411, 0.62827, 0.62749, 0.76488, 0.72321, 0.72269, 0.73822, 0.18945, 0.1897, 0.14971, 0.14971, 0.14971, 0.30095, 0.30095, 0.30106, 0.30106, 0.30117, 0.30117, 0.40986, 0.25268, 0.84361, 0.84439, 0.91504, 0.96052, 0.96052, 0.96052, 0.96682, 0.97299, 0.97745, 0.86851, 0.82425, 0.82425, 0.76117, 0.79514, 0.77947, 0.79356, 0.77401, 0.77374, 0.77374, 0.77374, 0.64627, 0.57741, 0.55383, 0.59707, 0.63776, 0.63776, 0.67525, 0.65506, 0.65994, 0.66434, 0.66929, 0.64559, 0.64559, 0.64559, 0.79742, 0.93606, 1, 0.99983, 0.95155, 0.95155, 0.95155, 0.95204, 0.95039, 0.94206, 0.94868, 0.95463, 0.95463, 0.94069, 0.93942, 0.94064, 0.92885, 0.922, 0.96437, 0.96437, 0.96437], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"handicap": {
men: [0.3207, 0.30345, 0.33331, 0.32084, 0.30217, 0.35922, 0.39118, 0.42369, 0.44746, 0.42691, 0.43702, 0.46052, 0.44959, 0.42358, 0.39569, 0.31365, 0.22536, 0.23505, 0.24617, 0.2013, 0.17333, 0.12812, 0.065681, 0, 0, 0, 0, 0, 0.11251, 0.23169, 0.23857, 0.23737, 0.24176, 0.32096, 0.32327, 0.3616, 0.40291, 0.4607, 0.47434, 0.47314, 0.49302, 0.49803, 0.44729, 0.40322, 0.46171, 0.4509, 0.39991, 0.3792, 0.34256, 0.31838, 0.29712, 0.27312, 0.26925, 0.25559, 0.22515, 0.24392, 0.23949, 0.2767, 0.25701, 0.26204, 0.28903, 0.29372, 0.3232, 0.33203, 0.3435, 0.34604, 0.35944, 0.38694, 0.43526, 0.40701, 0.38678, 0.33861, 0.34029, 0.3328, 0.32982, 0.32784, 0.33764, 0.33806, 0.34074, 0.36304, 0.35608, 0.35411, 0.337, 0.3473, 0.38909, 0.36402, 0.3188, 0.32305, 0.3138, 0.31444, 0.29985, 0.29621, 0.28705, 0.26887, 0.27332, 0.27659, 0.30436, 0.28987, 0.2597, 0.31064, 0.34674, 0.34821, 0.34967, 0.3618, 0.37731, 0.39687, 0.39184, 0.39305, 0.38756, 0.39139], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urbanisme": {
men: [0.21991, 0.22101, 0.21137, 0.20833, 0.20833, 0.26434, 0.20768, 0.2114, 0.22963, 0.28433, 0.28514, 0.29404, 0.24523, 0.32793, 0.26907, 0.26698, 0.28869, 0.26705, 0.25236, 0.14624, 0.1516, 0.13831, 0.069794, 0, 0, 0, 0, 0, 0.053609, 0.056296, 0.057145, 0.061235, 0.064122, 0.077697, 0.080181, 0.081744, 0.084255, 0.10809, 0.10809, 0.12327, 0.13178, 0.14647, 0.059316, 0.04902, 0.22763, 0.22306, 0.20774, 0.2513, 0.21297, 0.19446, 0.18392, 0.21567, 0.20085, 0.20023, 0.20091, 0.1973, 0.20521, 0.24652, 0.22104, 0.21824, 0.2215, 0.19302, 0.21865, 0.28363, 0.31616, 0.25821, 0.28606, 0.28831, 0.33466, 0.37161, 0.42013, 0.34202, 0.30065, 0.31759, 0.31154, 0.342, 0.34528, 0.31522, 0.29105, 0.30084, 0.29228, 0.28004, 0.26, 0.25666, 0.24218, 0.29313, 0.27009, 0.26702, 0.26643, 0.20873, 0.23517, 0.20797, 0.21158, 0.21186, 0.2137, 0.21833, 0.19476, 0.16462, 0.11882, 0.064546, 0.068097, 0.06686, 0.068359, 0.073473, 0.012715, 0.017545, 0.017465, 0.01766, 0.015437, 0.013971], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marchés publics": {
men: [0.35219, 0.28598, 0.29277, 0.29277, 0.29277, 0.32206, 0.3482, 0.34817, 0.38305, 0.3658, 0.3658, 0.35696, 0.34777, 0.37315, 0.13388, 0.22053, 0.1526, 0.1526, 0.1526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16353, 0.11903, 0.11052, 0.11052, 0.11052, 0.17273, 0.15045, 0.19571, 0.18312, 0.18093, 0.18093, 0.17439, 0.17427, 0.18832, 0.15197, 0.16529, 0.19925, 0.19925, 0.19643, 0.15585, 0.1585, 0.30714, 0.37614, 0.33685, 0.33685, 0.32655, 0.26859, 0.2919, 0.30392, 0.32306, 0.29334, 0.29334, 0.29716, 0.31335, 0.31116, 0.16063, 0.34289, 0.29053, 0.28541, 0.30133, 0.32048, 0.29747, 0.25768, 0.23411, 0.21528, 0.20418, 0.20418, 0.20104, 0.22214, 0.20702, 0.043913, 0.069411, 0.071142, 0.071142, 0.045109, 0.063369, 0.072607, 0.077101, 0.097889, 0.10651, 0.10651, 0.11685, 0.14483, 0.13693, 0.09645, 0.078812, 0.076616, 0.076616, 0.095836, 0.064216, 0.062399, 0.068784, 0.065504, 0.067269, 0.067269, 0.067769, 0.052528, 0.05216, 0.054522, 0.046067, 0.046736, 0.046736], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"habitat": {
men: [0.1515, 0.15223, 0.16676, 0.1646, 0.16285, 0.16131, 0.1285, 0.12068, 0.14687, 0.169, 0.16985, 0.16764, 0.15389, 0.13995, 0.17244, 0.17873, 0.13045, 0.13488, 0.13528, 0.1244, 0.12889, 0.10068, 0.053466, 0, 0, 0, 0, 0, 0.011845, 0.071534, 0.070596, 0.068355, 0.072541, 0.15258, 0.14875, 0.13928, 0.18499, 0.17881, 0.17929, 0.16231, 0.14565, 0.17854, 0.19546, 0.15533, 0.21397, 0.22074, 0.21217, 0.19016, 0.20714, 0.22305, 0.20492, 0.20411, 0.20209, 0.21127, 0.23098, 0.24005, 0.22636, 0.26241, 0.22972, 0.21839, 0.2266, 0.21973, 0.24653, 0.26621, 0.26278, 0.25956, 0.25921, 0.2407, 0.28028, 0.24515, 0.24964, 0.24834, 0.22461, 0.23002, 0.23117, 0.23274, 0.23171, 0.21784, 0.23302, 0.24402, 0.24228, 0.25737, 0.20928, 0.2128, 0.20401, 0.1881, 0.19304, 0.18668, 0.18297, 0.16827, 0.16054, 0.15794, 0.11767, 0.088538, 0.090005, 0.091513, 0.093195, 0.077776, 0.072766, 0.1058, 0.10696, 0.11223, 0.11105, 0.11969, 0.090296, 0.063959, 0.059709, 0.0608, 0.060547, 0.06164], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ehpad": {
men: [0.71893, 0.71986, 0.66428, 0.66428, 0.8097, 0.80881, 0.671, 0.80769, 0.80744, 0.80758, 0.80758, 0.80758, 0.80839, 0.82425, 0.82526, 0.82526, 0.98372, 0.98372, 0.98372, 0.98624, 0.98872, 0, 0, 0, 0, 0, 0, 0, 0.98954, 0.98485, 0.89679, 0.89679, 0.89679, 0.89259, 0.89132, 0.76813, 0.7672, 0.76624, 0.76624, 0.76624, 0.7657, 0.63896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.05198, 0.052028, 0.44259, 0.44314, 0.44314, 0.37176, 0.37176, 0.37165, 0.38418, 0.36639, 0.36681, 0.36681, 0.48867, 0.58524, 0.59419, 0.59369, 0.15559, 0.10436, 0.10436, 0.18292, 0.1701, 0.24779, 0.25646, 0.39225, 0.43788, 0.43788, 0.43788, 0.37874, 0.33501, 0.28977, 0.33171, 0.52214, 0.52214, 0.52214, 0.56415, 0.44699, 0.24526, 0.16392, 0.090394, 0.090394, 0.090394, 0.66917, 0.68185, 0.74461, 0.53831, 0.55392, 0.55392, 0.55392, 0.57566, 0.5213, 0.54182, 0.54246, 0.44396, 0.44396, 0.44396], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés hospitalières": {
men: [0.57937, 0.95982, 0.95844, 0.95844, 0.95844, 0.95738, 0.95826, 0.95818, 0.95788, 0.96171, 0.96171, 0.96171, 0.95761, 0.9586, 0.95382, 0.95382, 0.95742, 0.95742, 0.95742, 0.95987, 0.96229, 0.96603, 0.97312, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95736, 0.98079, 0.97895, 0.97841, 0.97719, 0.97719, 0.97719, 0.9765, 0.97565, 0.97667, 0.97799, 0.97592, 0.97592, 0.97592, 0.97637, 0.95067, 0.95101, 0.95297, 0.95331, 0.95331, 0.57199, 0.57246, 0.57192, 0.57245, 0.57132, 0.57203, 0.57203, 0.57203, 0.57202, 0.27231, 0.2723, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Développement des territoires": {
men: [0.095932, 0.097897, 0.15633, 0.15633, 0.15633, 0.16627, 0.46805, 0.51191, 0.7445, 0.7618, 0.7618, 0.80431, 0.79189, 0.78118, 0.75748, 0.8249, 0.81712, 0.81712, 0.81712, 0.81921, 0.34715, 0.3485, 0.35106, 0, 0, 0, 0, 0, 0.93112, 0.83907, 0.70366, 0.70366, 0.70366, 0.52244, 0.52169, 0.48529, 0.4847, 0.48409, 0.48409, 0.48409, 0.48375, 0.48333, 0.07705, 0.090051, 0.11481, 0.11481, 0.11481, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.059047, 0.068739, 0.075535, 0.075535, 0.075535, 0.55901, 0.59372, 0.96765, 0.96876, 0.96878, 0.96878, 0.96878, 0.96872, 0.96892, 0.69861, 0.69855, 0.70343, 0.62588, 0.62588, 0, 0, 0.094766, 0.094744, 0.094844, 0.094844, 0.094844, 0.078464, 0.15724, 0.19605, 0.19609, 0.16322, 0.20458, 0.20458, 0.2874, 0.36093, 0.32487, 0.32446, 0.36918, 0.36918, 0.36918, 0.49455, 0.43638, 0.65026, 0.49983, 0.66786, 0.66786, 0.66786], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonction publique territoriale": {
men: [0.15656, 0.20066, 0.12328, 0.18046, 0.18046, 0.2973, 0.39017, 0.32996, 0.47129, 0.97294, 0.97294, 0.97294, 0.97392, 0.97492, 0.97611, 0.97611, 0.9798, 0.9798, 0.9798, 0.98021, 0.9798, 0.98361, 0.22555, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.016059, 0.020483, 0.03025, 0.1164, 0.21383, 0.21383, 0.21383, 0.21368, 0.27091, 0.2712, 0.27156, 0.32812, 0.32812, 0.32812, 0.45166, 0.63294, 0.74019, 0.74856, 0.68359, 0.66238, 0.66238, 0.61031, 0.5104, 0.51087, 0.50505, 0.33557, 0.33557, 0.33557, 0.36358, 0.36348, 0.24854, 0.26909, 0.052337, 0.054916, 0.035609, 0.19905, 0.18549, 0.17679, 0.17956, 0.20238, 0.20238, 0.20238, 0.21427, 0.20803, 0.28265, 0.27252, 0.28202, 0.28202, 0.43838, 0.21367, 0.37572, 0.48873, 0.37729, 0.25589, 0.25589, 0.25589, 0.19116, 0.23308, 0.23321, 0.1768, 0.21673, 0.21673, 0.21673, 0.2167, 0, 0, 0, 0.34149, 0.34149, 0.34149, 0.34157, 0.1993, 0.15173, 0.11323, 0.11323, 0.11323, 0.11323], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emballages ménagers": {
men: [0.19654, 0.19679, 0.19651, 0.19651, 0.19651, 0.19629, 0.19647, 0.9411, 0.9408, 0.94097, 0.94097, 0.94097, 0.94191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.87603, 0.78366, 0.78448, 0.78554, 0.78388, 0.78388, 0.78388, 0.78483, 0.39376, 0.36427, 0.35626, 0.34721, 0.34721, 0.34721, 0.22046, 0.21239, 0.21258, 0.21216, 0.21243, 0.21243, 0.21243, 0.21242, 0, 0, 0, 0, 0, 0, 0.15861, 0.26738, 0.26716, 0.26747, 0.26747, 0.26747, 0.26747, 0.26745, 0.26751, 0.26755, 0.26752, 0.95468, 0.95468, 0.95468, 0.23028, 0.066617, 0.041147, 0.041138, 0.041182, 0.041182, 0.041182, 0.041173, 0.041176, 0.21598, 0.21602, 0.21625, 0.21625, 0.21625, 0.21266, 0.3653, 0.97395, 0.97272, 0.97149, 0.97149, 0.97149, 0.9717, 0.8384, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations de méthanisation": {
men: [0.97718, 0.97843, 0.97702, 0.97702, 0.97702, 0.97595, 0.97685, 0.97676, 0.97645, 0.97662, 0.97662, 0.97662, 0.97761, 0.97861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98733, 0.98733, 0.98733, 0.98733, 0.98272, 0.98132, 0.97949, 0.97829, 0.97708, 0.97708, 0.97708, 0.97638, 0.70166, 0.7024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18123, 0.18122, 0.18123, 0.18143, 0.18143, 0.18143, 0.18105, 0.18122, 0.18107, 0.18128, 0.2783, 0.55, 0.55, 0.95328, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lignes ferroviaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.75107, 0.75107, 0.78143, 0.78087, 0.7802, 0.81026, 0.81135, 0.80964, 0.80964, 0.80964, 0.89297, 0.89299, 0.85531, 0.78827, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29159, 0.29193, 0.29193, 0.29193, 0.29193, 0.29191, 0.65059, 0.7785, 0.77843, 0.7778, 0.7778, 0.7778, 0.96286, 0.96265, 0.95608, 0.95587, 0.95688, 0.95688, 0.95688, 0.95667, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40751, 0.40699, 0.17341, 0.17341, 0.088648, 0.088629, 0.088546, 0.08865, 0.080478, 0.080478, 0.080478], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"activités polluantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2973, 0.37438, 0.37438, 0.96269, 0.95819, 0.95683, 0.46641, 0.46585, 0.46527, 0.46527, 0.26324, 0.4268, 0.42644, 0.42688, 0.14339, 0.14309, 0.14309, 0.14309, 0.1237, 0.1751, 0.19312, 0.1725, 0.16652, 0.16652, 0.19195, 0.099289, 0.15616, 0.15631, 0.24617, 0.24648, 0.24648, 0.24648, 0.30272, 0.2688, 0.26878, 0.57808, 0.94999, 0.94999, 0.94999, 0.44437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.090333, 0.05301, 0.053066, 0.053688, 0.053688, 0.053676, 0.05368, 0.071063, 0.080873, 0.080957, 0.080957, 0.080957, 0.080948, 0.10251, 0, 0.95498, 0.95377, 0.95377, 0.95377, 0.95398, 0.95378, 0.95776, 0.95889, 0.95889, 0.95889, 0.95889], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"établissements médico-sociaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17772, 0.17688, 0.17688, 0.17688, 0.17688, 0.17605, 0.61485, 0.95761, 0.96109, 0.95989, 0.53417, 0.53417, 0.53379, 0.53333, 0.46085, 0.46147, 0.46049, 0.46049, 0.46049, 0.46105, 0.30897, 0.30908, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9492, 0.9492, 0.9492, 0.95045, 0.95024, 0.95006, 0.94984, 0.95085, 0.95085, 0.95085, 0.95064, 0.95071, 0.95127, 0.95145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Fédération hospitalière": {
men: [0.059365, 0.067933, 0.056633, 0.056633, 0.050598, 0.050543, 0.050589, 0.050585, 0.050569, 0.050578, 0.050578, 0.050578, 0.050629, 0.062708, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43209, 0.43128, 0.43075, 0.95006, 0.95006, 0.20542, 0.20527, 0.20509, 0.20531, 0.20559, 0.20515, 0.20515, 0.12609, 0.097376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9527, 0.95193, 0.95193, 0.95193, 0.96048, 0.96027, 0.96008, 0.95987, 0.96088, 0.96088, 0.96088, 0.96067, 0.96075, 0.96131, 0.95547, 0.95646, 0.95646, 0.95646, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hpst": {
men: [0.61819, 0.27289, 0.28037, 0.28037, 0.28037, 0.31764, 0.34656, 0.30125, 0.25983, 0.62963, 0.62963, 0.62963, 0.61633, 0.61696, 0.46151, 0.49106, 0.47969, 0.47969, 0.47969, 0.48091, 0.4436, 0.49205, 0.55866, 0, 0, 0, 0, 0, 0.050422, 0.050183, 0.042146, 0.042146, 0.042146, 0.037668, 0.084203, 0.084045, 0.12978, 0.12962, 0.11702, 0.11702, 0.17776, 0.21461, 0.17953, 0.17977, 0.28916, 0.28916, 0.28916, 0.33323, 0.33378, 0.1845, 0.14766, 0.14771, 0.16358, 0.15694, 0.13449, 0.15361, 0.12789, 0.12764, 0.066493, 0.059473, 0.053794, 0.36739, 0.34635, 0.44312, 0.41647, 0.38243, 0.38243, 0.39227, 0.39144, 0.32277, 0.37174, 0.37217, 0.37217, 0.39456, 0.40305, 0.048401, 0.053633, 0.10627, 0.11657, 0.11239, 0.10959, 0.10959, 0.10477, 0.13834, 0.064683, 0.064669, 0.060228, 0.060228, 0.063084, 0.10516, 0.087411, 0.060908, 0.049554, 0.053991, 0.054694, 0.054694, 0.043946, 0.069781, 0.092159, 0.092043, 0.095695, 0.080513, 0.074596, 0.029476, 0.083317, 0.038986, 0.042666, 0.042666, 0.042666, 0.041301], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique de la ville": {
men: [0, 0, 0.033353, 0.031669, 0.026072, 0.029014, 0.21147, 0.1884, 0.19808, 0.22724, 0.21028, 0.21028, 0.21049, 0.19257, 0.1921, 0.20011, 0.20491, 0.22289, 0.27891, 0.30186, 0, 0, 0, 0, 0, 0, 0, 0, 0.036763, 0.036589, 0.033528, 0.033528, 0.025747, 0.02467, 0.0099865, 0.0094215, 0.00941, 0.008968, 0.0085328, 0.0088327, 0.0085981, 0.0082265, 0.0035129, 0.0035177, 0.0034374, 0.0034089, 0.0034503, 0.0034637, 0, 0, 0.013632, 0.015508, 0.015956, 0.015956, 0.017059, 0.048458, 0.050995, 0.25079, 0.25953, 0.26743, 0.29677, 0.31856, 0.34559, 0.3514, 0.32399, 0.31687, 0.36782, 0.29634, 0.28163, 0.26798, 0.29033, 0.10693, 0.16589, 0.14394, 0.12805, 0.11574, 0.13834, 0.10151, 0.3025, 0.28384, 0.28384, 0.34146, 0.48055, 0.56488, 0.56399, 0.63663, 0.62347, 0.67683, 0.73587, 0.71946, 0.72453, 0.78406, 0.72794, 0.6654, 0.6654, 0.6654, 0.59942, 0.45345, 0.46182, 0.057237, 0.049272, 0.048368, 0.045844, 0.056962, 0.27185, 0.4316, 0.42623, 0.35176, 0.31987, 0.30376], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"précarité énergétique": {
men: [0.68628, 0.68717, 0.68618, 0.68618, 0.68618, 0.68542, 0.64134, 0.031909, 0.031899, 0.12638, 0.12638, 0.12638, 0.1265, 0.095927, 0.096044, 0.096044, 0.081241, 0.066578, 0.056399, 0.053019, 0.060687, 0.071573, 0.072098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7183, 0.54308, 0.36877, 0.3311, 0.33069, 0.33069, 0.33069, 0.32529, 0.342, 0.44107, 0.44166, 0.44073, 0.44073, 0.44073, 0.24684, 0.2983, 0.44896, 0.5458, 0.54599, 0.54599, 0.54599, 0.5958, 0.61048, 0.153, 0.21764, 0.21791, 0.20749, 0.20749, 0.37375, 0.31899, 0.16852, 0.20104, 0.18426, 0.18426, 0.18426, 0.1736, 0.14172, 0.18762, 0.10248, 0.10248, 0.099598, 0.099598, 0.040531, 0.04054, 0.0629, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32208, 0.22042, 0.1975, 0.1975, 0.1812, 0.18119, 0.18125, 0.17612, 0.1759, 0.17568, 0.17568, 0.17568, 0.17571, 0.2388, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infrastructures publiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.070527, 0.070527, 0.070527, 0.09624, 0.045731, 0.050106, 0.050106, 0.050295, 0.04261, 0.044329, 0.05056, 0.047751, 0.047937, 0.048288, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.59585, 0.59585, 0.59585, 0.59658, 0.59658, 0.59679, 0.18336, 0.18342, 0.18342, 0.18342, 0.18357, 0.1834, 0.18357, 0.18321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9522, 0.95496, 0.95606, 0.95607, 0.95607, 0.95607, 0.23556, 0.23561, 0.23565, 0.23563, 0.23544, 0.23544, 0.23544, 0.23575, 0.15922, 0.11926, 0.11923, 0.11936, 0.11936, 0.11936, 0, 0.95101, 0.95158, 0.95176, 0.95274, 0.95274, 0.95274, 0.95264, 0.14418, 0.14441, 0.14423, 0.14405, 0.14405, 0.14405, 0.14408, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rénovation énergétique": {
men: [0.84444, 0.84553, 0.84431, 0.84431, 0.84431, 0.97585, 0.97675, 0.97597, 0.95749, 0.95765, 0.95765, 0.95765, 0.95862, 0.9596, 0.96077, 0.96077, 0.9644, 0.9644, 0.9644, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.029277, 0.028248, 0.024866, 0.024866, 0.021861, 0.021887, 0.023866, 0.026324, 0.025684, 0.025694, 0.025694, 0.025694, 0.028705, 0.031346, 0, 0, 0, 0, 0, 0, 0.033223, 0.04579, 0.041039, 0.041086, 0.041086, 0.041086, 0.036659, 0.036466, 0.036435, 0.038918, 0.042067, 0.046718, 0.046718, 0.062416, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.070242, 0.070255, 0.070328, 0.30853, 0.30853, 0.95636, 0.089835, 0.089979, 0.060192, 0.060116, 0.060116, 0.060116, 0.060129, 0.060116, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistantes maternelles": {
men: [0.13464, 0.13481, 0.22486, 0.22486, 0.34883, 0.28693, 0.28719, 0.28717, 0.28707, 0.35696, 0.35696, 0.35696, 0.28139, 0.28168, 0.39803, 0.39803, 0.37503, 0.37503, 0.37503, 0.96085, 0.96327, 0.96701, 0.97411, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.028185, 0.025586, 0.024472, 0.024053, 0.024561, 0.025331, 0.05243, 0.066246, 0.066106, 0.066106, 0.093704, 0.14087, 0.233, 0.23308, 0.12229, 0.11197, 0.1463, 0.16676, 0.16689, 0.16674, 0.16689, 0.14373, 0.14391, 0.14391, 0.14391, 0.10057, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11181, 0.11181, 0.10299, 0.10463, 0.10461, 0.10459, 0.12449, 0.13263, 0.15698, 0.15265, 0.23784, 0.23786, 0.238, 0.23804, 0.17043, 0.17043, 0.20748, 0.26509, 0.26518, 0.26561, 0.82801, 0.82696, 0.82696, 0.34451, 0.32811, 0.24435, 0.2598, 0.2601, 0.2601, 0.2601, 0.25969], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"blocs chirurgicaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.061666, 0.061666, 0.061666, 0.061728, 0.079567, 0.95382, 0.95382, 0.95742, 0.95742, 0.95742, 0.95987, 0.96229, 0.96603, 0.97312, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38328, 0.3832, 0.38312, 0.94927, 0.95027, 0.95027, 0.95027, 0.95006, 0.95014, 0.9507, 0.95088, 0.95186, 0.95186, 0.95186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement urbain": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.051102, 0.051155, 0.051224, 0.046152, 0.046152, 0.042356, 0.045445, 0.052355, 0.083789, 0.08379, 0.08382, 0.08382, 0.08382, 0.083889, 0.097002, 0.072236, 0.072094, 0.049127, 0.049127, 0.057622, 0.057621, 0.057604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67943, 0.67952, 0.67946, 0.77019, 0.77019, 0.77019, 0.73252, 0.69825, 0.69811, 0.69795, 0.60818, 0.60818, 0.54567, 0.47011, 0.058999, 0.053716, 0.053726, 0.053782, 0.053782, 0.053782, 0.056503, 0.50296, 0.50377, 0.46431, 0.5169, 0.5169, 0.57524, 0.69843, 0.66403, 0.7341, 0.73497, 0.73497, 0.73497, 0.73497], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pôles de compétitivité": {
men: [0.28109, 0.32839, 0.47968, 0.46316, 0.48121, 0.47463, 0.48302, 0.52377, 0.5193, 0.52454, 0.52454, 0.52454, 0.56246, 0.42095, 0.42147, 0.40569, 0.065242, 0.070686, 0.070686, 0.084667, 0.12546, 0.043353, 0.048935, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.034318, 0.03627, 0.03132, 0.03132, 0.035368, 0.059142, 0.054115, 0.052267, 0.085624, 0.085624, 0.079997, 0.08435, 0.072157, 0.071128, 0.045813, 0.04667, 0.050604, 0.045263, 0.053241, 0.053875, 0.05383, 0.074372, 0.050292, 0.050292, 0.053754, 0.049204, 0.053452, 0.25339, 0.25592, 0.24882, 0.24882, 0.26031, 0.39304, 0.36469, 0.36647, 0.38304, 0.42351, 0.42351, 0.42351, 0.45845, 0.49929, 0.34667, 0.40551, 0.3856, 0.3856, 0.41185, 0.11322, 0.16688, 0.20336, 0.25517, 0.18008, 0.18008, 0.18008, 0.14166, 0.087832, 0.098972, 0.055923, 0.060648, 0.060648, 0.060466], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement rural": {
men: [0.35344, 0.37541, 0.37213, 0.37213, 0.37213, 0.37172, 0.34698, 0.54887, 0.55595, 0.071828, 0.08741, 0.13262, 0.13275, 0.13289, 0.13305, 0.094882, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064342, 0.064342, 0.059477, 0.059435, 0.04613, 0.061639, 0.061722, 0.067716, 0.062413, 0.062413, 0.062488, 0.061214, 0.53049, 0.5305, 0.4754, 0.4754, 0.48678, 0.46677, 0.5211, 0.61107, 0.60987, 0.54381, 0.59083, 0.57023, 0.57022, 0.60226, 0.076156, 0.098332, 0.10752, 0.10752, 0.10661, 0.10441, 0.11202, 0.11193, 0.10058, 0.078155, 0.078155, 0.080943, 0.1096, 0.065939, 0.12654, 0.076651, 0.068678, 0.068678, 0.073846, 0.088725, 0.069308, 0.050786, 0.050511, 0.041184, 0.041184, 0.041184, 0, 0.034898, 0.081799, 0.071941, 0.072814, 0.072814, 0.072814, 0.11108, 0.11802, 0.14039, 0.16025, 0.25307, 0.25307, 0.25307, 0.25312, 0.17286, 0.086716, 0.12377, 0.088586, 0.088586, 0.08802], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"qualité de l' eau": {
men: [0.36114, 0.30104, 0.29287, 0.32011, 0.29918, 0.29118, 0.12639, 0.010174, 0.1333, 0.13819, 0.15631, 0.15631, 0.131, 0.12578, 0.1104, 0.1105, 0.10813, 0.10148, 0.10774, 0.10774, 0.11933, 0.13743, 0, 0, 0, 0, 0, 0, 0.0051017, 0.0088673, 0.0091632, 0.0098224, 0.0098224, 0.0096494, 0.0096865, 0.0094786, 0.0097342, 0.021824, 0.022148, 0.027673, 0.035365, 0.033557, 0.030306, 0.016029, 0.015995, 0.010577, 0.0091149, 0.0092458, 0.009294, 0.0087909, 0.0087679, 0, 0, 0, 0, 0, 0, 0.0094404, 0.0086099, 0.011624, 0.012624, 0.013203, 0.011841, 0.011581, 0.025818, 0.025944, 0.022779, 0.024642, 0.021978, 0.019852, 0.020834, 0.010156, 0.010106, 0.0094988, 0.0095571, 0.0075, 0.007409, 0.0075421, 0, 0, 0, 0, 0.095523, 0.20216, 0.28463, 0.33465, 0.29712, 0.30438, 0.30184, 0.37893, 0.4206, 0.44591, 0.4587, 0.47449, 0.47863, 0.47863, 0.4813, 0.48002, 0.42964, 0.48377, 0.59652, 0.58681, 0.57776, 0.61514, 0.62648, 0.65894, 0.65125, 0.64469, 0.64643, 0.6438], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assises nationales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.84322, 0.84436, 0.85479, 0.85479, 0.8186, 0.8196, 0.77128, 0.77156, 0.77157, 0.74103, 0.78202, 0.78202, 0.78266, 0.7292, 0.28678, 0.28622, 0.1258, 0.098158, 0.10846, 0.10846, 0.066867, 0.044334, 0.036134, 0.039592, 0.039592, 0.039592, 0.029174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.049662, 0.12874, 0.12871, 0.19015, 0.21822, 0.21822, 0.27964, 0.24996, 0.29577, 0.32147, 0.35302, 0.59471, 0.51055, 0.51055, 0.43089, 0.28033, 0.13862, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
