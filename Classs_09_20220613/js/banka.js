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
var sum = 20000
var term = 7
var year = "Ja ieguldīsiet to mūsu bankā uz"
//sum*($*(term-));

//procenti % = $ * (term - gads)

text = "Cien. " + NS
console.log (text);
text2 = "Mēs, banka, redzam, ka Jums kontā ir " + sum + " EUR."
console.log (text2);
text3 = year + " 1 gadu, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-6)) + " EUR.";
console.log (text3);
text4 = year + " 2 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-5)) + " EUR.";
console.log (text4);
text5 = year + " 3 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-4)) + " EUR.";
console.log (text5);
text6 = year + " 4 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-3)) + " EUR.";
console.log (text6);
text7 = year + " 5 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-2)) + " EUR.";
console.log (text7);
text8 = year + " 6 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term-1)) + " EUR.";
console.log (text8);
text9 = year + " 7 gadiem, tad termiņa beigās kā % saņemsiet " +  sum*($*(term)) + " EUR.";
console.log (text9);