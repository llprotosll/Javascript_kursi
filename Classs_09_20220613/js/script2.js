/*
r - rinķa līnijas raduss
P - pī
c - riņķa līnijas garums
*/

var r = 6371;
p = 3.14;
c = 2*p*r;
let rounded = c.toFixed(2);

var text = "Līdz zemes centram:";
text = text + " " + r + "km"
console.log(text);

//document.getElementById(text).innerHTML = text;

var formula = "C=2πr (2*pī*radiuss)"
console.log(formula);

formula = "2" + "*" + p + "*" + r
console.log(formula);

//document.getElementById(formula).innerHTML = formula;

var text2 = "Zemes ekvatora garums:"
text2 = text2 + " " + rounded + "km"
console.log(text2);

//document.getElementById(text2).innerHTML = text2;