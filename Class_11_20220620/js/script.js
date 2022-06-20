var a=13,
   b=22,
   c=29;

if (a>b && a>c)
   {
    console.log("Max is a=" +a )
    if (b>c)
        {
          console.log("Next is b=" +b )
          console.log("Min is c=" +c )
        }
        else
        {
            console.log("Next is c=" +c )
            console.log("Min is b=" +b )
            
        }

    
   }
else if (b>a && b>c)
   {
    console.log("Max is b=" +b )
    if (a>c)
        {
          console.log("Next is a=" +a )
          console.log("Min is c=" +c )
        }
        else 
        {
          console.log("Next is c=" +c )
          console.log("Min is a=" +a )
        }
   }
   else
   {
    console.log("Max is c=" +c )
    if (b>a)
        {
          console.log("Next is b=" +b )
          console.log("Min is a=" +a )
        }
        else
        { 
          console.log("Next is b=" +b )
          console.log("Min is a=" +a )
        }
   }
  // document.getElementById("Max").innerHTML = Max is;
 //  document.getElementById("Next").innerHTML = Max is;
  // document.getElementById("Min").innerHTML = Max is;