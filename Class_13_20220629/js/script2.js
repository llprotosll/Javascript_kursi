/*
let text = "";

//for (let i = 1; i <= 25; i++)
i = Number(prompt("Ievadi skaitli"));
switch (i)
{
case i%2==0:
text = i + " šis skaitlis dalās ar 2" + "<br>";
console.log(i + " šis skaitlis dalās ar 2")
case i%3==0:
text = i + " šis skaitlis dalās ar 2" + "<br>";
case i%5==0:
text = i + " šis skaitlis dalās ar 5" + "<br>";
case i%7==0:
text = i + " šis skaitlis dalās ar 7" + "<br>";
    
    
}
document.getElementById("auto").innerHTML = text;
*/

//https://github.com/ArtursRemess/JavaScript/blob/main/Class_13_20220629/js/script.js

var   text = "",
      dalit=[2,3,5,7];
for (let i = 1; i <= 25; i++){
    let flag = 1;
    text = text + i;
  for (let k=0; k<dalit.length; k++ ){
        if (i % dalit[k] == 0) {
        text (flag == 1){
            text = text + " dalās ar skaitli ";
            flag = 0;
        }
      text = text + dalit[k] + ",";
     }

    text=text+"<BR>";
}
}
document.getElementById("auto").innerHTML = text;