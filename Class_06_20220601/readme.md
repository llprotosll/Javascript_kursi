https://stackoverflow.com/questions/65153150/how-to-get-all-javascript-functions-available-to-the-webpage-html

pārlūka konsolē: funkciju saraksts
var list = [];
for (let i in window) {
    if (typeof(window[i]) === "function")
        list.push(i);
}
console.log(list)



console.log("Hello world!")
console.log("Hello world!\nNew line")

https://www.w3schools.com/js/js_whereto.asp

Homework javascript - whereto
turpināt izmēģināt dažādas operācijas ar dažādiem datu tipiem