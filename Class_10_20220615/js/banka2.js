var rate = [
0.001,
0.002,
0.003,
0.004,
0.005,
0.006,
0.007
];

var NS = "Jānis Bērziņš"
var sum = 30000
var term = 7
const years = [
"Ja ieguldīsiet to mūsu bankā uz 1 gadu, tad termiņa beigās kā % saņemsiet ",
"Ja ieguldīsiet to mūsu bankā uz 2 gadiem, tad termiņa beigās kā % saņemsiet ",
"Ja ieguldīsiet to mūsu bankā uz 3 gadiem, tad termiņa beigās kā % saņemsiet ",
"Ja ieguldīsiet to mūsu bankā uz 4 gadiem, tad termiņa beigās kā % saņemsiet ",
"Ja ieguldīsiet to mūsu bankā uz 5 gadiem, tad termiņa beigās kā % saņemsiet ",
"Ja ieguldīsiet to mūsu bankā uz 6 gadiem, tad termiņa beigās kā % saņemsiet ",
"Ja ieguldīsiet to mūsu bankā uz 7 gadiem, tad termiņa beigās kā % saņemsiet "
];
var gain = " Jūsu kopējais balanss "

var a = Number(sum * rate[0])
var b = Number((sum + a) * rate[1])
var c = Number((sum + b) * rate[2])
var d = Number((sum + c) * rate[3])
var e = Number((sum + d) * rate[4])
var f = Number((sum + e) * rate[5])
var g = Number((sum + f) * rate[6])

//sum*($*(term-));

//gads % = $ * (term - gads)

text = "Cien. " + NS + "!";
console.log (text);
text2 = "Mēs, banka, redzam, ka Jums kontā ir " + sum + " EUR." 
console.log (text2);
text3 = years [0] + a.toFixed(2) + " EUR." + gain + (sum + a).toFixed(2) + " EUR.";
console.log (text3);
text4 = years [1] + b.toFixed(2) + " EUR." + gain + (sum + b).toFixed(2) + " EUR.";
console.log (text4);
text5 = years [2] + c.toFixed(2) + " EUR." + gain + (sum + c).toFixed(2) + " EUR.";
console.log (text5);
text6 = years [3] + d.toFixed(2) + " EUR." + gain + (sum + d).toFixed(2) + " EUR.";
console.log (text6);
text7 = years [4] + e.toFixed(2) + " EUR." + gain + (sum + e).toFixed(2) + " EUR.";
console.log (text7);
text8 = years [5] + f.toFixed(2) + " EUR." + gain + (sum + f).toFixed(2) + " EUR.";
console.log (text8);
text9 = years [6] + g.toFixed(2) + " EUR." + gain + (sum + g).toFixed(2) + " EUR.";
console.log (text9);

document.getElementById("client").innerHTML = text;
document.getElementById("intro").innerHTML = text2;
document.getElementById("year1").innerHTML = text3;
document.getElementById("year2").innerHTML = text4;
document.getElementById("year3").innerHTML = text5;
document.getElementById("year4").innerHTML = text6;
document.getElementById("year5").innerHTML = text7;
document.getElementById("year6").innerHTML = text8;
document.getElementById("year7").innerHTML = text9;