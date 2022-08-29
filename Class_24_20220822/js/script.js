function myFunction() {
  let text = "Do you want to open a different page?";
  if (confirm(text) == true) {
    var url1 = prompt("Enter URL", "https://9gag.com");
    if (url1 != null) {
     var type = prompt("Do you want to open it in a new tab?", "Yes")
      
      var count = 0;
      var el = document.getElementById('demo3');
      
      function timer() {
      count += 1;
      el.innerText = (5 - count) + " seconds remain.";
        if (count == 5) {clearInterval(cancel)};
      }
      var cancel = setInterval(timer, 1000);
      
      if (type == null) {
        setTimeout(() => {
          window.open(url1, "_self");
        }, 5000);
        
        } else {
          setTimeout(() => {
          window.open(url1, "_blank");
        }, 5000);

     
    }
  }
  document.getElementById("demo").innerHTML = text;
  }
}

/*

 window.open(url1);
counter = 1;
var x = setInterval(my_function, 1000);

document.getElementById("demo1").innerHTML = `Intervāla Id ${x}`;

function my_function() {
document.getElementById("demo2").innerHTML = counter;
counter++;
if (counter > 15){clearInterval(x);}
}
*/

/*
var text = "Jā",
  links = "https://spoki.lv",
  logatips = "Jā";

text = confirm("Pāriet uz citu lapu?" );
document.getElementById("demo").innerHTML = text;
if (text == true) {
  links = prompt("Kādu interneta adresi?", links);
  document.getElementById("demo2").innerHTML = links;
  logatips = prompt("Atvērt jaunā lapā", logatips);

  var count = 0;
  var el = document.getElementById('demo3');
  
  function timer() {
  count += 1;
  el.innerText = "Palika" + (5 - count) + "sekundes.";
    if (count == 5) {clearInterval(cancel)};
  }
  var cancel = setInterval(timer, 1000);
   
  
  if (logatips == null) {
    setTimeout(() => {
      window.open(links, "_self");
    }, 5000);
    
    } else {
      setTimeout(() => {
      window.open(links, "_blank");
    }, 5000);
  }
}
*/