//new approach
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}
document.getElementById("new").innerHTML = text;

//already known approach

let text2 = "";
for (i = 0; i < cars.length; i++) {
  text2 += cars[i] + "<br>";
}
document.getElementById("old").innerHTML = text2;

let language = "JavaScript";

let text3 = "";
for (let x of language) {
  text3 += x + "<br>";
}
document.getElementById("java").innerHTML = text3;

//let word = prompt("enter several words");
let word = "asd asdd12 123123 asddd ";
/*
var counter = 0;
var counter_sentence = 0;
N = 4;

for (let x of word) {
  counter_sentence++;
  if (x == " ") {
    //document.getElementById("demo").innerHTML = x + " tā ir atstarpe"
    console.log(x + " tā ir atstarpe");
    console.log("Iepriekšējā vārdā bija " + counter + " burti");
    if (counter >= N) {
      console.log("Iepriekšējā vārdā bija vismaz " + N + " simboli");
    }
    counter = 0;
  } else {
    //document.getElementById("demo").innerHTML = x

    counter++;
    console.log(x + " tas ir " + counter + ". simbols vārdā");

    if (counter_sentence == text.length) {
      console.log("Iepriekšējā vārdā bija " + counter + " burti");

      if (counter >= N) {
        console.log("Iepriekšējā vārdā bija vismaz " + N + " simboli");
      }
      counter = 0;
      console.log("Teikuma biegas");
    }
  }
}
*/
text = prompt("Cien. lietotāj, lūdzu, ievadi kādu teikumu:");
//text = text + " ";
var burtu_skaitiitaajs_vaardaa = 0;
var simbolu_skaitiitaajs_teikumaa = 0;
var deriigu_vaardu_skaits = 0;
N = 5;
for (let x of text) {
  simbolu_skaitiitaajs_teikumaa++;
  if (x == " ") {
    //console.log(x + " tā ir atstarpe");
    //console.log("Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti");
    if (burtu_skaitiitaajs_vaardaa >= N) {
      //console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
      deriigu_vaardu_skaits++;
    }
    burtu_skaitiitaajs_vaardaa = 0;
  } else {
    burtu_skaitiitaajs_vaardaa++;
    //console.log(x + " tas ir " + burtu_skaitiitaajs_vaardaa + ". simbols vārdā");

    if (simbolu_skaitiitaajs_teikumaa == text.length) {
      //console.log("Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti");
      if (burtu_skaitiitaajs_vaardaa >= N) {
        //console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
        deriigu_vaardu_skaits++;
      }
      burtu_skaitiitaajs_vaardaa = 0;
      //console.log("Un vēl vairāk šis bija pēdējais vārds teikumā");
    }
  }
}

document.getElementById("text_analysis").innerHTML = "Šajā teikumā:<br><b>" + text + 
                                                    "</b><br>ir "+ deriigu_vaardu_skaits + " vārdi, kuru"+
                                                    " garums ir >= " + N;