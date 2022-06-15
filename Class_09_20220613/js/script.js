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