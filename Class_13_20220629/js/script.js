console.log("Skripta izpildes sākums:\n" + new Date())
document.getElementById("manual").innerHTML = "1<br>2<br>3<br>4<br>";

/*
text += cars[0] + "<br>";
text = text + cars[0] + "<br>";
*/

/*
let text = "";
let text2 = "";
for (let i = 1; i <= 10; i++){
    if(i%2==0)
    text = text + i + "<br>";
}


for (let u = 1; u <= 10; u++){
        if(u%2>0)
    text2 = text2 + u + "<br>";
}
document.getElementById("auto").innerHTML =" šis ir pāra skaitlis" + "<br>" + text;
document.getElementById("auto2").innerHTML ="šis ir nepāra skaitlis: " + "<br>" + text2;
*/

let text = "";

for (let i = 1; i <= 10; i++){
    //for ( darbība 1x; nosacījums katru x ; soļu veikšana )
    if(i%2==0)
    text = text + i + " šis ir pāra skaitlis" + "<br>";
    else
    text = text + i + " šis ir nepāra skaitlis" + "<br>";
}
document.getElementById("auto").innerHTML = text;
