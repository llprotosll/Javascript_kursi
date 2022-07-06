let text = "";
for (let i = 1; i <= 5; i++){
    text = text + i + "<br>";
if (i == 4) {
    break;
} 
}
document.getElementById("classic").innerHTML = text;

let text2 = "";
var i =1 ;
for ( ; i <= 5; ){
    text2 = text2 + i + "<br>";
    i++;
   
}
document.getElementById("not_classic").innerHTML = text2;

let text3 = "";
var i =1;
while (i <= 5){
    text3 = text3 + i + "<br>";
    i++;
   
}
document.getElementById("while").innerHTML = text3;

text4 = "do while:<br>";
var i = 1;
do {
  text4 = text4 + i + "<br>";
  i++;
} while (i < 5 && i == 2 );
document.getElementById("do").innerHTML = text4;

//koda atkārtošana//

text = "count" + 15 + ":<br>";
for (let i = 1; i<= 15; i++){
    text = text + i   + "<br>";
}
document.getElementById("count").innerHTML = text;

/**
 * @name counter 
 * @description Counting from 1 to N
 * @param {Number} N
 * @param {Number} html_el_id_nr
 */

function counter(N,html_el_id_nr) {
  text = "for count until " + N + ":<br>";
  for (let i = 1; i <= N; i++) {
    text = text + i + "<br>";
  }
  document.getElementById("count_"+html_el_id_nr).innerHTML = text;
}

counter(20,4);
//html jānosauc count ar atbilstošu otro ciparu, līdz kuram skaitīt count_4