var x = 33;
//y=0b100001
document.getElementById("dec").innerHTML = x;

var bit_number = 7;
var y = (x << (bit_number-7)) >> bit_number;
var a = String(y);
y = (x << (bit_number-6)) >> bit_number;
a = a + String(y);
y = (x << (bit_number-5)) >> bit_number;
a = a + String(y);
y = (x << (bit_number-4)) >> bit_number;
a = a + String(y);
y = (x << (bit_number-3)) >> bit_number;
a = a + String(y);
y = (x << (bit_number-2)) >> bit_number;
a = a + String(y);
y = (x << (bit_number-1)) >> bit_number;
a = a + String(y);


//document.getElementById("bin").innerHTML = y;
//binars=xo-(2*(xo>>1)),xo=xo>>1

//pareizi ir 
number(x).toString(2)
(x >> 7) & 1
(x >> 6) & 1