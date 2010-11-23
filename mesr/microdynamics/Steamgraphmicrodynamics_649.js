var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"Micro-organisme unicellulaire": {
men: [0.94681, 0.94635, 0.9461, 0.94576, 0.94553, 0.94552, 0.20997, 0.21035, 0.21049, 0.28134, 0.28141, 0.28133, 0.17779, 0.17803, 0.17811, 0.30222, 0.30118, 0.30084, 0.30093, 0.3009, 0.54456, 0.54396, 0.54298, 0.94269, 0.94232, 0.94203, 0.94121, 0.94117, 0.94578, 0.93759, 0.93846, 0.93892, 0.93897, 0.93899, 0.93956, 0.94003, 0.94146, 0.94187, 0.95009, 0.95066, 0.95191, 0.95048, 0.95486, 0.95473, 0.9556, 0.95598, 0.95538, 0.95832, 0.95951, 0.95916, 0.95919, 0.95954, 0.95581, 0.95587, 0.9563, 0.95828, 0.94913, 0.94897, 0.94888, 0.94905, 0.95006, 0.95161, 0.95097, 0.95174, 0.9513, 0.95133, 0.95175, 0.95108, 0.959, 0.95936, 0.95885, 0.96099, 0.96125, 0.9614, 0.96095, 0.95587, 0.95638, 0.96382, 0.96456, 0.96564, 0.96622, 0.96747, 0.96159, 0.96056, 0.96237, 0.96481, 0.96404, 0.96255, 0.96124, 0.96047, 0.95975, 0.95154, 0.951, 0.95105, 0.95054, 0.95042, 0.9501, 0.94994, 0.94958, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bactéries résistantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95915, 0.97151, 0.97967, 0.98356, 0.98384, 0.98485, 0.98536, 0.98549, 0.98371, 0.94026, 0.93989, 0.93959, 0.94015, 0.94012, 0.9387, 0.93412, 0.91527, 0.87846, 0.8785, 0.85896, 0.77793, 0.60902, 0.60995, 0.96275, 0.97488, 0.97546, 0.97757, 0.9761, 0.97731, 0.97718, 0.97808, 0.97846, 0.97785, 0.97817, 0.81058, 0.80933, 0.80935, 0.78737, 0.51394, 0.51397, 0.29128, 0.29188, 0.29174, 0.29169, 0.29166, 0.29171, 0.29202, 0.1711, 0, 0, 0.96753, 0.96756, 0.96798, 0.9673, 0.96742, 0.96777, 0.97061, 0.97277, 0.97303, 0.97318, 0.97272, 0.97324, 0.97375, 0.97383, 0.96264, 0.96372, 0.9643, 0.96554, 0.96568, 0.96911, 0.96132, 0.95864, 0.95788, 0.9564, 0.95509, 0.95433, 0.95361, 0.95386, 0.95332, 0.95337, 0.95286, 0.95274, 0.95242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antibiotiques": {
men: [0.10682, 0.14658, 0.16015, 0.16009, 0.16342, 0.10093, 0.09607, 0.092161, 0.09222, 0.10559, 0.097465, 0.095524, 0.096847, 0.070766, 0.19401, 0.34086, 0.68154, 0.72454, 0.71334, 0.83423, 0.86694, 0.8673, 0.86806, 0.86002, 0.87515, 0.88094, 0.82238, 0.82235, 0.81377, 0.78102, 0.70873, 0.6819, 0.67006, 0.65967, 0.64704, 0.62335, 0.47978, 0.49797, 0.54892, 0.52263, 0.67366, 0.58755, 0.5337, 0.55272, 0.51583, 0.51065, 0.4734, 0.45039, 0.423, 0.41698, 0.40529, 0.39045, 0.31636, 0.31862, 0.28423, 0.30302, 0.30764, 0.31907, 0.35621, 0.34054, 0.36155, 0.42556, 0.44821, 0.44551, 0.48353, 0.45616, 0.46537, 0.47719, 0.41367, 0.43597, 0.49375, 0.49486, 0.42459, 0.42465, 0.42445, 0.35622, 0.46509, 0.4426, 0.33124, 0.38066, 0.46138, 0.47292, 0.51945, 0.52692, 0.49509, 0.45319, 0.45283, 0.46694, 0.50563, 0.52194, 0.5075, 0.55534, 0.60735, 0.59483, 0.53516, 0.53959, 0.56871, 0.59179, 0.62064, 0.66774, 0.66796, 0.67844, 0.64543, 0.35091, 0.21676, 0.19225, 0.17764, 0.17752, 0.20003, 0.19579], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection bactérienne": {
men: [0.95571, 0.95524, 0.95499, 0.95465, 0.95441, 0.95441, 0.95373, 0.95548, 0.95609, 0.96064, 0.96089, 0.95554, 0.95006, 0.95132, 0.95176, 0.95859, 0.22478, 0.51348, 0.51363, 0.53653, 0.53571, 0.53513, 0.53417, 0.50138, 0.55778, 0.5576, 0.55712, 0.55709, 0.5759, 0.54976, 0.86475, 0.73715, 0.73719, 0.69198, 0.6924, 0.69274, 0.6938, 0.6941, 0.6134, 0.61377, 0.78552, 0.33441, 0.44029, 0.46918, 0.49568, 0.49588, 0.52993, 0.57535, 0.63625, 0.63602, 0.63603, 0.63627, 0.62107, 0.62111, 0.57667, 0.97425, 0.97016, 0.96872, 0.96863, 0.96881, 0.96781, 0.96816, 0.95784, 0.9627, 0.96226, 0.96228, 0.9627, 0.96203, 0.9654, 0.96576, 0.96525, 0.83422, 0.83445, 0.83458, 0.83419, 0.62146, 0.62178, 0.65467, 0.65517, 0.6559, 0.6563, 0.65715, 0.51108, 0.65998, 0.66122, 0.83968, 0.83902, 0.83772, 0.83657, 0.32836, 0.32811, 0.2551, 0.25495, 0.25497, 0.25483, 0.2548, 0.25471, 0.28597, 0.28586, 0.33215, 0.33226, 0.33244, 0.33275, 0.96468, 0.96459, 0.9639, 0.96449, 0.96382, 0.96433, 0.96397], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"micro-organismes": {
men: [0.17598, 0.20515, 0.39486, 0.39472, 0.41586, 0.38091, 0.44628, 0.37731, 0.45525, 0.37211, 0.35801, 0.37224, 0.36954, 0.33627, 0.36942, 0.34749, 0.3558, 0.3786, 0.36148, 0.38957, 0.28959, 0.30509, 0.26457, 0.27407, 0.34748, 0.36934, 0.3857, 0.36143, 0.36991, 0.37109, 0.35387, 0.34069, 0.3407, 0.34071, 0.3711, 0.38872, 0.39296, 0.4385, 0.37925, 0.33176, 0.33272, 0.3509, 0.29367, 0.28909, 0.28285, 0.24794, 0.22248, 0.2274, 0.21416, 0.21408, 0.2239, 0.20457, 0.18404, 0.17158, 0.14385, 0.11615, 0.089551, 0.094155, 0.14797, 0.23443, 0.50675, 0.63838, 0.50969, 0.66306, 0.88349, 0.89908, 0.97771, 0.97702, 0.97713, 0.9775, 0.97698, 0.97916, 0.98004, 0.98019, 0.97973, 0.74447, 0.64595, 0.58698, 0.51335, 0.46337, 0.32864, 0.27039, 0.22951, 0.22927, 0.2297, 0.21018, 0.14908, 0.14885, 0.13321, 0.18376, 0.2261, 0.23991, 0.12016, 0.072618, 0.063194, 0.069099, 0.073673, 0.15954, 0.14972, 0.14946, 0.19181, 0.19192, 0.17742, 0.1594, 0.15086, 0.14857, 0.16035, 0.206, 0.23205, 0.22806], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections intestinales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.34629, 0.34657, 0.34666, 0.34656, 0.34662, 0.95448, 0.47746, 0.60699, 0.60491, 0.43573, 0.43585, 0.43581, 0.43515, 0.43467, 0.323, 0.32267, 0.48688, 0.69049, 0.81307, 0.81304, 0.85664, 0.85146, 0.85224, 0.97043, 0.97048, 0.97051, 0.9711, 0.97157, 0.97306, 0.97348, 0.97292, 0.96946, 0.9467, 0.95033, 0.9574, 0.95996, 0.96083, 0.96121, 0.96061, 0.96238, 0.96357, 0.96322, 0.96325, 0.9636, 0.96125, 0.96131, 0.96175, 0.96181, 0.95621, 0.94897, 0.94888, 0.94905, 0.95006, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9641, 0.96279, 0.96779, 0.96707, 0.96732, 0.96677, 0.96682, 0.9663, 0.96618, 0.96585, 0.96569, 0.96533, 0.96566, 0.96598, 0.95884, 0.95973, 0, 0, 0, 0, 0.94838, 0.94888, 0.94853], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie endémique": {
men: [0, 0, 0.95024, 0.9499, 0.94967, 0.94967, 0.94899, 0.95073, 0.95134, 0.95211, 0.95236, 0.95206, 0.95224, 0.95351, 0.95395, 0.95416, 0, 0.94983, 0.9501, 0.361, 0.36045, 0.36006, 0.35941, 0.35905, 0.35891, 0.35879, 0.22966, 0.22965, 0.22948, 0.22943, 0.22964, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21261, 0.21258, 0.21278, 0.24529, 0.24514, 0.35137, 0.42815, 0.428, 0.48864, 0.64757, 0.64748, 0.64752, 0.64782, 0.64916, 0.51769, 0.51761, 0.51756, 0.95544, 0.95645, 0.95774, 0.95148, 0.95226, 0.95182, 0.95184, 0.95226, 0.95159, 0.9517, 0.95206, 0.95155, 0.95367, 0.95393, 0.95408, 0.95363, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95254, 0.95182, 0.96145, 0.62119, 0.62122, 0.62089, 0.62081, 0.6206, 0.6205, 0.62027, 0.62048, 0.62069, 0.62103, 0.62161, 0.51056, 0.51051, 0, 0, 0.94838, 0.94888, 0.94853], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouveaux antibiotiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96976, 0.97477, 0.97507, 0.97622, 0.97723, 0.97714, 0.97641, 0.97647, 0.97471, 0.97447, 0.97487, 0.97533, 0.97448, 0.97444, 0.97156, 0.96964, 0.96808, 0.96592, 0.96476, 0.96478, 0.96379, 0.96096, 0.96242, 0.95938, 0.9531, 0, 0.95328, 0.95185, 0.9583, 0.29072, 0.29099, 0.392, 0.26678, 0.28904, 0.32586, 0.33286, 0.33287, 0.33299, 0.33295, 0.33297, 0.30857, 0.30921, 0.29195, 0.34196, 0.34193, 0.31315, 0.62755, 0.6586, 0.42213, 0, 0, 0, 0, 0, 0, 0, 0.95872, 0.96086, 0.96112, 0.96126, 0.96081, 0.96132, 0.96182, 0.96191, 0.29469, 0.29501, 0.29519, 0.29557, 0.29562, 0.39898, 0.19753, 0.19698, 0.19682, 0.19652, 0.19625, 0.1961, 0.19595, 0.196, 0.95332, 0.95337, 0.95286, 0.95274, 0.95242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traitement antibiotique": {
men: [0.95036, 0.9499, 0.94965, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37165, 0.37173, 0.37046, 0.55281, 0.7626, 0.96638, 0.96491, 0.96386, 0.68674, 0.61263, 0.61239, 0.6122, 0.61167, 0.61164, 0.74914, 0.74898, 0.69132, 0.65848, 0.6265, 0.62651, 0.62689, 0.6272, 0.75814, 0.87198, 0.87203, 0.87255, 0.8737, 0.87239, 0.72684, 0.72674, 0.96449, 0.96486, 0.96426, 0.96411, 0.9653, 0.96495, 0.95994, 0, 0, 0, 0.95648, 0.95846, 0.95798, 0.95781, 0.95773, 0.9579, 0.95892, 0.9593, 0.95865, 0.41575, 0.41556, 0.41557, 0.41575, 0.41546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41917, 0.4191, 0.41894, 0.41908, 0.41922, 0.41946, 0.41985, 0.95298, 0.9529, 0.95221, 0.9528, 0.4104, 0.41062, 0.41047], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agents infectieux": {
men: [0.95548, 0.3846, 0.50115, 0.50097, 0.60808, 0.49509, 0.49474, 0.49565, 0.49596, 0.49636, 0.49649, 0.42758, 0.36059, 0.31232, 0.31246, 0.45465, 0.33203, 0.45259, 0.25216, 0.41455, 0.41392, 0.69422, 0.69297, 0.69226, 0.69199, 0.69177, 0.95494, 0.9549, 0.95423, 0.95402, 0.54155, 0.45697, 0.457, 0.45701, 0.45729, 0, 0, 0.5758, 0.57584, 0.57618, 0.57694, 0.64192, 0.64302, 0.64294, 0.83658, 0.83691, 0.83639, 0.83625, 0.83729, 0.83698, 0.83701, 0.58984, 0.58976, 0.5898, 0.59007, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24948, 0.25004, 0.25011, 0.25015, 0.25003, 0.097088, 0.097139, 0.12136, 0.13619, 0.13634, 0.13642, 0.1366, 0.086226, 0.086134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3002, 0.30004, 0.3, 0.95422, 0.96162, 0.96125, 0.96963, 0.96995, 0.97049, 0.9714, 0.9727, 0.97261, 0.97191, 0.97251, 0.96993, 0.97045, 0.97008], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95033, 0.95036, 0.9507, 0.95057, 0.95063, 0.95106, 0.95303, 0.95255, 0.95239, 0.9523, 0.95248, 0.95349, 0.95386, 0.95322, 0, 0, 0.93503, 0.93544, 0.93478, 0.93489, 0.93524, 0.93474, 0.93683, 0.93708, 0.93722, 0.94989, 0.95039, 0.95089, 0.95097, 0.9517, 0.95004, 0.95061, 0.95184, 0.95198, 0.95702, 0.95882, 0.95615, 0.95539, 0.95391, 0.94545, 0.9447, 0.94398, 0.94423, 0.94369, 0.94374, 0.94324, 0.94312, 0.9428, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"germes pathogènes": {
men: [0.53547, 0.53521, 0.53507, 0.53487, 0.53474, 0.35589, 0.35564, 0.35629, 0.35652, 0.35681, 0.33717, 0.16672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077505, 0.18816, 0.37657, 0.32868, 0.3287, 0.42229, 0.42255, 0.42275, 0.4234, 0.50009, 0.50012, 0.42197, 0.51947, 0.55561, 0.52901, 0.48838, 0.41185, 0.39666, 0.39642, 0.45141, 0.49575, 0.56324, 0.56326, 0.48082, 0.48075, 0.55494, 0.55519, 0.47116, 0.41179, 0.41172, 0.39856, 0.57036, 0.57096, 0.5796, 0.53422, 0.4094, 0.40921, 0.47749, 0.4777, 0.47736, 0.47742, 0.60258, 0.95965, 0.63514, 0.63532, 0.43367, 0.43347, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9502, 0.73966, 0.73992, 0.74017, 0.74058, 0.81786, 0.81808, 0.81801, 0.81742, 0.81792, 0.81735, 0.81779, 0.81748], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génome humain": {
men: [0.25722, 0.33599, 0.33591, 0.33579, 0.3357, 0.3357, 0.33546, 0.46795, 0.46825, 0.46863, 0.95665, 0.95635, 0.95653, 0.95562, 0.95019, 0.9504, 0.94714, 0.31536, 0.31545, 0.18925, 0.18897, 0, 0, 0.041322, 0.041306, 0.041293, 0.041257, 0.041255, 0.041226, 0.041217, 0.041255, 0.05641, 0.029123, 0.0273, 0.021474, 0.027468, 0.02751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23758, 0.20713, 0.59859, 0.59851, 0.38066, 0.38083, 0.31111, 0.31095, 0.78293, 0.78286, 0.78301, 0.78384, 0.78415, 0.78362, 0.76339, 0.81305, 0.81568, 0.81604, 0.9058, 0.90591, 0.97339, 0.97287, 0.93683, 0.93708, 0.93722, 0.93678, 0.93728, 0.93777, 0.93785, 0.93857, 0, 0, 0, 0, 0.14997, 0.15025, 0.14984, 0.14972, 0.14949, 0.14928, 0.14916, 0.078354, 0.078375, 0.07833, 0.078334, 0.06014, 0.060133, 0.060112, 0, 0, 0, 0, 0, 0.091983, 0.092007, 0.14072, 0.14062, 0.14071, 0.14061, 0.21221, 0.21213], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tube digestif": {
men: [0.097646, 0.097598, 0.097573, 0.097538, 0.097514, 0.089665, 0.089601, 0.066798, 0.11592, 0.11602, 0.11605, 0.43668, 0, 0, 0.67841, 0.67856, 0.82376, 0.85329, 0.87285, 0.97141, 0.9712, 0.97211, 0.97141, 0.92202, 0.92166, 0.92502, 0.80505, 0.72682, 0.71619, 0.71603, 0.69273, 0.67428, 0.65468, 0.57965, 0.54711, 0.4752, 0.41382, 0.41115, 0.41118, 0.34386, 0.48609, 0.74491, 0.66626, 0.66617, 0.72595, 0.72624, 0.78781, 0.96281, 0.964, 0.28743, 0.22044, 0.18914, 0.17751, 0.17752, 0.1776, 0.17797, 0.17788, 0.17785, 0.13266, 0.13269, 0.091507, 0.047417, 0.037427, 0, 0, 0.007322, 0.0079604, 0.0079548, 0.006664, 0.0066665, 0.0066629, 0.0064943, 0.0064961, 0.0064971, 0.006494, 0.0082188, 0.014628, 0.023254, 0.023272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65275, 0.29964, 0.29974, 0.29984, 0.30001, 0.30029, 0.30037, 0.30034, 0.30012, 0.35073, 0.54811, 0.54841, 0.5482], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agents pathogènes": {
men: [0.43928, 0.43907, 0.28272, 0.21396, 0.21391, 0.16408, 0.16397, 0.16427, 0.16437, 0.0955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10593, 0.10593, 0.16801, 0.16798, 0.3013, 0.3524, 0.35241, 0.70651, 0.57828, 0.68492, 0.68597, 0.74703, 0.74707, 0.74752, 0.72632, 0.72523, 0.70811, 0.65065, 0.57665, 0.52575, 0.52542, 0.52533, 0.70672, 0.80877, 0.54366, 0.64703, 0.64694, 0.64698, 0.60969, 0.57921, 0.57892, 0.60666, 0.6066, 0.60671, 0.60736, 0.6076, 0.60719, 0.42155, 0.4306, 0, 0.21186, 0.18119, 0.19055, 0.20036, 0.28499, 0.28563, 0.2857, 0.28575, 0.22526, 0.22538, 0.2255, 0.27702, 0.29001, 0.40643, 0.20298, 0.1961, 0.19613, 0.19592, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.089714, 0.13359, 0.13363, 0.20676, 0.20687, 0.20706, 0.28149, 0.2943, 0.29409, 0.37569, 0.4386, 0.43883, 0.43867], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cas d' infection": {
men: [0.1814, 0.18131, 0.18127, 0.1812, 0.18116, 0.22256, 0.50782, 0.50876, 0.50908, 0.50949, 0.50962, 0.50947, 0.50956, 0, 0, 0.42853, 0.42705, 0.42658, 0.42671, 0.42666, 0.95846, 0.95742, 0.47834, 0.47785, 0.47767, 0.47752, 0.61484, 0.61481, 0.66441, 0.60575, 0.60631, 0.60661, 0.60664, 0.60666, 0.53018, 0.53044, 0.95829, 0.95871, 0.95877, 0.95934, 0.95106, 0.95385, 0.38092, 0.085321, 0.0854, 0.085433, 0.08538, 0.22781, 0.13949, 0.13944, 0.13944, 0.10479, 0.10477, 0.10478, 0.10483, 0.07399, 0.078119, 0.11601, 0.098863, 0.098881, 0.08927, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5733, 0.464, 0.46428, 0.46487, 0.47838, 0.47787, 0.47877, 0.47744, 0.47706, 0.47632, 0.47567, 0.47529, 0.47493, 0.53654, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063846, 0.06388, 0.063856], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0.96066, 0.96041, 0.96006, 0.96188, 0.96187, 0.96119, 0.96295, 0.77702, 0.62266, 0.5278, 0.49548, 0.49557, 0.53528, 0.53553, 0.33016, 0.32902, 0.32866, 0.1501, 0.15009, 0.14986, 0.14969, 0.13523, 0.12844, 0.10724, 0.061482, 0.048205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19883, 0.20787, 0.2148, 0.29925, 0.25836, 0.2588, 0.25876, 0.259, 0.2591, 0.25894, 0.2589, 0.35044, 0.37683, 0.37684, 0, 0, 0, 0, 0, 0, 0, 0, 0.086266, 0.086357, 0.086392, 0.086333, 0.17701, 0.17693, 0.17693, 0.17701, 0.17689, 0.17691, 0.29835, 0.94925, 0.95137, 0.95163, 0.94626, 0.94581, 0.94631, 0.94681, 0, 0, 0, 0, 0, 0, 0.25912, 0.2596, 0.25888, 0.25868, 0.25828, 0.25792, 0.25772, 0.25752, 0.25759, 0.25744, 0.95273, 0.95222, 0.9521, 0.95178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biologie synthétique": {
men: [0, 0, 0, 0, 0.93032, 0.93031, 0.92965, 0.94863, 0.94923, 0.95, 0.95025, 0.94996, 0.95013, 0.9514, 0.38263, 0.38272, 0.3814, 0.38098, 0.34174, 0.34171, 0.34119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27152, 0.95036, 0.9507, 0.95057, 0.49795, 0.49818, 0.49921, 0.49896, 0.87898, 0.8789, 0.87906, 0.87999, 0.88034, 0.87975, 0.86818, 0.86778, 0.86968, 0.87007, 0.97291, 0.67746, 0.67771, 0.67735, 0.037809, 0.037819, 0.037825, 0.037807, 0.037827, 0.037847, 0.03785, 0.037879, 0, 0, 0, 0, 0.076423, 0.076567, 0.076353, 0.076293, 0.076175, 0.076071, 0.07601, 0.075953, 0.075972, 0.075929, 0.075933, 0.075893, 0.075883, 0.9428, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génie génétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0.1149, 0.059564, 0.059612, 0.059628, 0.068181, 0.068193, 0.077816, 0.077852, 0.077869, 0.077602, 0.077516, 0.077538, 0.070854, 0.073615, 0, 0, 0, 0, 0, 0.1017, 0.10169, 0.10162, 0.1016, 0.10169, 0.10174, 0.13493, 0.14035, 0.15697, 0.21334, 0.27323, 0.49277, 0.68838, 0.6888, 0.38947, 0.27438, 0.1305, 0.11729, 0.11739, 0.11744, 0.053292, 0.045917, 0.045973, 0.14285, 0.14882, 0.14887, 0.14885, 0.14886, 0.14893, 0.13415, 0.30596, 0.42176, 0.42173, 0.4218, 0.42225, 0.95599, 0.95535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31661, 0.3172, 0.94896, 0.94821, 0.94674, 0.94545, 0.9447, 0.94398, 0.94423, 0.95863, 0.95868, 0.95817, 0.95805, 0.95773, 0.95534, 0.95497, 0.95531, 0.95562, 0.95615, 0.95704, 0.9573, 0.95721, 0.6102, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"animaux morts": {
men: [0.01038, 0.010375, 0.010372, 0.012259, 0.012256, 0.012256, 0.012247, 0.02858, 0.028599, 0.028729, 0.028736, 0.028727, 0.22301, 0.22331, 0.95152, 0.95173, 0.94846, 0.94741, 0.94769, 0.94759, 0.94615, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026702, 0.026704, 0.024391, 0.024423, 0.035203, 0.035263, 0.044324, 0.16683, 0.39501, 0.39476, 0.3947, 0.39519, 0.35967, 0.35968, 0.29334, 0.2933, 0.46409, 0.4643, 0.46526, 0.46502, 0.46494, 0.30892, 0.30897, 0.3093, 0.30942, 0.30921, 0, 0, 0, 0, 0, 0, 0, 0.94943, 0.95155, 0.95181, 0.95195, 0.9515, 0.95201, 0.95251, 0.95259, 0.95332, 0.95438, 0.95496, 0.95619, 0.95633, 0.95531, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections pulmonaires": {
men: [0.44845, 0.95622, 0.95597, 0.95563, 0.95539, 0.95539, 0.95471, 0.95646, 0.95707, 0.95784, 0.95809, 0.9578, 0.6507, 0, 0, 0.31607, 0.65327, 0.71852, 0.77187, 0.77179, 0.77062, 0.76978, 0.76839, 0.8028, 0.80248, 0.80223, 0.88113, 0.96307, 0.84811, 0.83597, 0.77569, 0.71937, 0.57303, 0.57305, 0.5734, 0.57368, 0.57455, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"douleurs abdominales": {
men: [0.9693, 0.96883, 0.96858, 0.96823, 0.96799, 0.96799, 0.9673, 0.96872, 0.96934, 0.97012, 0.97038, 0.97008, 0.96585, 0, 0.95767, 0.95788, 0.95459, 0.95353, 0.95381, 0.95372, 0.95227, 0.95123, 0.94952, 0.94855, 0.94818, 0.94788, 0.54117, 0.30923, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides aminés": {
men: [0.37148, 0.3713, 0.3712, 0.37107, 0.38559, 0.31783, 0.3176, 0.25507, 0.25524, 0.25544, 0.25551, 0.17963, 0.098599, 0.10277, 0.090607, 0.090627, 0.090316, 0.090215, 0.076912, 0.074735, 0.074621, 0, 0.18451, 0.18432, 0.18425, 0.31419, 0.51809, 0.51807, 0.48992, 0.48982, 0.61224, 0.63938, 0.63941, 0.67674, 0.67715, 0.59519, 0.54225, 0.54249, 0.58487, 0.52542, 0.59563, 0.58422, 0.67651, 0.67642, 0.58986, 0.55089, 0.61605, 0.51785, 0.51849, 0.59326, 0.47747, 0.42004, 0.32834, 0.32836, 0.18344, 0.1368, 0.12603, 0.12601, 0.126, 0.12602, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.040399, 0.23401, 0.23365, 0.18841, 0.18825, 0.18811, 0.18816, 0.14112, 0.14113, 0.30573, 0.30569, 0.32044, 0.30598, 0.30586, 0.21961, 0.21968, 0.18606, 0.26709, 0.26716, 0.26714, 0.26694, 0.32527, 0.32504, 0.14679, 0.14674], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0.95096, 0.95586, 0.95561, 0.95527, 0.95503, 0.66759, 0.66712, 0.66834, 0.66877, 0.66931, 0.41403, 0.23442, 0.23446, 0.23478, 0.1652, 0, 0, 0, 0, 0.15878, 0.15854, 0.15837, 0.34824, 0.34789, 0.53142, 0.53125, 0.53079, 0.4261, 0.50047, 0.50036, 0.50082, 0.50107, 0.50109, 0.34419, 0.3444, 0.34457, 0.15942, 0.13387, 0.13388, 0.13396, 0.13413, 0.24229, 0.20105, 0.20102, 0.20121, 0.20129, 0.20116, 0.30401, 0.30439, 0.19492, 0.19493, 0.25732, 0.25728, 0.2573, 0.25742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94878, 0.94903, 0.94894, 0.94826, 0.94885, 0.94818, 0.94869, 0.36294], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pelotes microscopiques": {
men: [0.95096, 0.95049, 0.95024, 0.9499, 0.94967, 0.54078, 0.5404, 0.54139, 0.54173, 0.54217, 0.28806, 0, 0, 0, 0, 0, 0, 0, 0, 0.15878, 0.15854, 0.15837, 0.34824, 0.34789, 0.53142, 0.53125, 0.53079, 0.4261, 0.50047, 0.50036, 0.50082, 0.50107, 0.50109, 0.34419, 0.3444, 0.34457, 0.15942, 0.13387, 0.13388, 0.13396, 0.13413, 0.24229, 0.20105, 0.20102, 0.20121, 0.20129, 0.20116, 0.30401, 0.30439, 0.19492, 0.19493, 0.25732, 0.25728, 0.2573, 0.25742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94878, 0.94903, 0.94894, 0.94826, 0.94885, 0.94818, 0.94869, 0.36294], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"substance cancérigène": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0040167, 0.003895, 0.0038967, 0.0037807, 0.003783, 0.003788, 0.0075587, 0.0075716, 0.0045406, 0.0050073, 0.0057781, 0.0064357, 0.0095081, 0.0095199, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95492, 0.95494, 0.95536, 0.95469, 0.95481, 0.95516, 0.95465, 0.95678, 0.95704, 0.95719, 0.95674, 0.95724, 0.95775, 0.95783, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1636, 0.16348, 0.16352, 0.16343, 0.16343, 0.16335, 0.16333, 0.26056, 0.26052, 0.95754, 0.95787, 0.95819, 0.95872, 0.95961, 0.95215, 0.95207, 0.95139, 0.95197, 0.9513, 0.95181, 0.95145], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes biologiques": {
men: [0, 0, 0, 0, 0.94614, 0.94613, 0.94546, 0.64265, 0.64306, 0.64358, 0.64375, 0.72704, 0.72718, 0.72815, 0.72848, 0.72865, 0.72614, 0.72534, 0.64469, 0.45682, 0.37523, 0.30764, 0.30709, 0.30678, 0.22102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21071, 0.24106, 0.2412, 0.24152, 0.22557, 0.22596, 0.22593, 0.34274, 0.38711, 0.38687, 0.3868, 0.417, 0.41684, 0.41686, 0.47937, 0.47931, 0.47934, 0.47956, 0.7048, 0.70445, 0.70433, 0.94337, 0.94354, 0.94454, 0.94491, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phytoplancton": {
men: [0.35111, 0.28122, 0.26104, 0.14939, 0.12169, 0.12169, 0.11986, 0.12925, 0.12934, 0.089711, 0.089735, 0.089707, 0.09294, 0.068382, 0.04731, 0.0031501, 0.0031827, 0.011447, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20329, 0.20339, 0.2037, 0.39791, 0.39794, 0.41583, 0.61549, 0.61456, 0.67102, 0.59771, 0.59826, 0.59849, 0.4506, 0.48468, 0.40412, 0.40397, 0.26203, 0.19167, 0.19164, 0.11487, 0.11492, 0.11516, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94515, 0.94526, 0.3618, 0.36161, 0.36241, 0.36251, 0.36257, 0.3624, 0.36259, 0.36278, 0.36281, 0.36309, 0.36349, 0.36371, 0, 0, 0.96653, 0.62103, 0.47304, 0.40924, 0.4086, 0.40805, 0.40772, 0.40741, 0.40752, 0.40729, 0.40731, 0.40709, 0.40704, 0.4069, 0.15902, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03712, 0.03714, 0.037126], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"méduses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.044713, 0.078987, 0.084342, 0.096259, 0.13469, 0.13464, 0.1346, 0.15051, 0.18064, 0.18052, 0.51705, 0.68527, 0.68561, 0.68564, 0.85022, 0.85074, 0.85116, 0.85246, 0.85283, 0.85289, 0.8534, 0.60903, 0.63001, 0.58472, 0.52922, 0.23966, 0.23975, 0.2396, 0.1776, 0.17782, 0.17775, 0.17776, 0.17782, 0.1778, 0.17781, 0.18337, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93503, 0.93544, 0.93478, 0.037731, 0.037745, 0.025936, 0.025993, 0.026, 0.026004, 0.025992, 0.026006, 0.02602, 0.026022, 0.026042, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95982, 0.95913, 0.95972, 0.95905, 0.95956, 0.9592], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 
