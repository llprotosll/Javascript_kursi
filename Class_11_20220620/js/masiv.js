var x=[13,9,55]
   
sequence_before = ("Pirms: " + x[0] + " " + x[1] + " " + x[2]);
console.log(sequence_before)

if (x[1]>x[0])
    {
      [x[0],x[1]]=[x[1],x[0]] 
        }
if (x[2]>x[0])
    {
        x[0]=x[0]+x[2];
        x[2]=x[0]-x[2];
        x[0]=x[0]-x[2];
        }
if (x[2]>x[1])
    {
        x[1]=x[1]^x[2];
        x[2]=x[1]^x[2];
        x[1]=x[1]^x[2];
    }

sequence_after = ("Pēc: " + x[0] + " " + x[1] + " " + x[2]);
console.log (sequence_after)

document.getElementById("Before").innerHTML = sequence_before;
document.getElementById("After").innerHTML = sequence_after;