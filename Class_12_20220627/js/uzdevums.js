const datums = new Date()
var diena = new Date().toLocaleDateString('lv-LV',{weekday:"long"});
//var day = datums.getDate();
//console.log(day)

document.getElementById("CurrentDay").innerHTML = document.getElementById("CurrentDay").innerHTML + diena;
document.getElementById("CurrentTime").innerHTML = document.getElementById("CurrentTime").innerHTML + datums;