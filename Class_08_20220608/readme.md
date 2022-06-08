mainīgie
https://www.w3schools.com/js/js_variables.asp
https://www.w3schools.com/js/js_reserved.asp

x=4
x=x*x 
//nav matemātiska prioritāte, piešķiršana ir maznozīmīgāka
x=16 (sareizina un piešķir jauno vērtību)

// 'scope' - skripta bloks, nodalams ar šādām iekavām]

var a = 45
console.log("a vērtība (no 'galvenā pirms scope'): "+a);
{
    console.log("a vērtība pirms pārdefinēšanas (no 'scope'): "+a);
    var a=46;
    console.log("a vērtība pēc pārdefinēšanas (no 'scope'): "+a);
}
console.log("a vērtība (no 'galvenā zara' pēc scope): "+a);

//let atslēgas vāds ļauj nodefinēt lokālo mainīgo - pieejams koda blokā noroberžotā ar {} - scope, vērtība var tikt mainīta
let b=60;
console.log("b vērtība (no 'galvenā zara' pirms scope): "+b);
{
    //console.log("b vērtība (no 'galvenā zara' pirms scope): "+b);
    let b=61;
    console.log("b vērtība (pēc 'galvenā zara' pirms scope): "+b);
}
console.log("b vērtība (no 'galvenā zara' pēc scope): "+b);

//const atslēgas vārds ļauj nodefinēt lokālo konstanti - pieejams koda blokā norobežotā ar {} - scope vērtība tiks mainīta
const c=10
console.log("c vērtība (no 'galvenā zara' pirms scope): "+c);
{
    //console.log("c vērtība (no 'galvenā zara' pirms scope): "+c);
    let c=101;
    console.log("bvērtība (pēc 'galvenā zara' pirms scope): "+b);
}
console.log("c vērtība (no 'galvenā zara' pēc scope): "+c);