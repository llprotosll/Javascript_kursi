const datums = new Date()
var diena = datums.toLocaleDateString('lv-LV',{weekday:"long"});
let hh = datums.getHours();
let mm = datums.getMinutes();
let ss = datums.getSeconds();
//var day = datums.getDate();
//console.log(day)
if (hh < 10) {hh = "0"+hh;}
if (mm < 10) {mm = "0"+mm;}
if (ss < 10) {ss = "0"+ss;}


document.getElementById("CurrentDay").innerHTML = document.getElementById("CurrentDay").innerHTML + diena;
document.getElementById("CurrentTime").innerHTML = document.getElementById("CurrentTime").innerHTML + hh + ":" + mm +  ":" + ss;