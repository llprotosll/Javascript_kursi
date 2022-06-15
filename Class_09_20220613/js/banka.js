//gada procentu likme 0.01% 1. gadā, 0.02% 2. gadā, 0.03% 3. gadā, 0.04% 4. gadā, 0.05% 5. gadā
//1. mainīgais - klienta vārds uzvārds
//2. mainīgais - noguldāmā summa
//3. mainīgais - noguldījuma termiņš (gadi)

/*
Cien. klienta_vārds,
Mēs, banka, redzam, ka Jums kontā ir xx EUR.
Ja ieguldīsiet to mūsu bankā uz 1 gadu, tad termiņa beigās kā % saņemsiet xx EUR
Ja ieguldīsiet to mūsu bankā uz 2 gadu, tad termiņa beigās kā % saņemsiet xx EUR
Ja ieguldīsiet to mūsu bankā uz 3 gadu, tad termiņa beigās kā % saņemsiet xx EUR
Ja ieguldīsiet to mūsu bankā uz 4 gadu, tad termiņa beigās kā % saņemsiet xx EUR
Ja ieguldīsiet to mūsu bankā uz 5 gadu, tad termiņa beigās kā % saņemsiet xx EUR
*/

var $ = 0.0001

var NS = "Jānis Bērziņš"
var sum = 30000
var term = 7
var year = "Ja ieguldīsiet to mūsu bankā uz"
//sum*($*(term-));

//gads % = $ * (term - gads)

text = "Cien. " + NS + "!"
console.log (text);
text2 = "Mēs, banka, redzam, ka Jums kontā ir " + sum + " EUR."
console.log (text2);
text3 = "Ja ieguldīsiet to mūsu bankā uz 1 gadu, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-6)) + " EUR.";
console.log (text3);
text4 = "Ja ieguldīsiet to mūsu bankā uz 2 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-5)) + " EUR.";
console.log (text4);
text5 = "Ja ieguldīsiet to mūsu bankā uz 3 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-4)) + " EUR.";
console.log (text5);
text6 =  "Ja ieguldīsiet to mūsu bankā uz 4 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-3)) + " EUR.";
console.log (text6);
text7 = "Ja ieguldīsiet to mūsu bankā uz 5 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-2)) + " EUR.";
console.log (text7);
text8 = "Ja ieguldīsiet to mūsu bankā uz 6 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-1)) + " EUR.";
console.log (text8);
text9 = "Ja ieguldīsiet to mūsu bankā uz 7 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term)) + " EUR.";
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