var x = 33;
//y=0b00100001
document.getElementById("dec").innerHTML = x;

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
/*
x >> 0 - 33(dec) atbilst 0010 0001
(x >> 0) & 1 -> 0010 0001
                0000 0000
                0000 0000 -> 0(dec)
*/
console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 1) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 2) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 3) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 4) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 5) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 6) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

var zero_th_bit = (x >> 7) & 1;

console.log (zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log (bit_sequence)

/*
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
*/

//document.getElementById("bin").innerHTML = y;
//binars=xo-(2*(xo>>1)),xo=xo>>1

/*
pareizi ir 
Number(x).toString(2)
(x >> 7) & 1
(x >> 6) & 1
*/