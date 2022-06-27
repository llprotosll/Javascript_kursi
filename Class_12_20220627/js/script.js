//let x = prompt("Ievadi ciparu") - nenostrādā
let x = 9


switch(x)
{
    case 9:
        console.log ("x ir precīzi 9");
    case 10:
        console.log ("vai nu x ir precīzi 10 vai x ir bijis vienāds ar 9");
    case 11:
        console.log ("vai nu x ir precīzi 11 vai x ir bijis vienāds ar 10");
    default:
        console.log ("šāds gadījums nav bijis");
    
}

let y = x + 1

switch(y)
{
    case 9:
        console.log ("y ir precīzi 9");
        break;
    case 10:
        console.log ("y ir precīzi 10");
        break;
    case 11:
        console.log ("y ir precīzi 11");
        break;
    default:
        console.log ("šāds gadījums nav bijis");
    
}

a = +prompt('a?', '');
switch (a)
{
case 0: 
  console.log("0");
break;

case 1:  
console.log("1");
break;

case 2||3:  
  console.log("2,3");
  break;
default:
    console.log("vērtība nav definēta");
}