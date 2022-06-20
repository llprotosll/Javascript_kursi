var a=99,
    b=2,
    c=13,
   
sequence_before = ("a= "+ a + " b= "+ b + " c= " + c);
console.log(sequence_before)

if (b>a)
    {
        a=a+b;
        b=a-b;
        a=a-b;
    sequence1 = 
    console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (c>a)
    {
        a=a+c;
        c=a-c;
        a=a-c;
    sequence2 =    
    console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (c>b)
    {
        b=b+c;
        c=b-c;
        b=b-c;
    }

sequence_after = ("a= "+ a + " b= "+ b + " c= " + c);
console.log (sequence_after)

document.getElementById("Before").innerHTML = sequence_before;
document.getElementById("After").innerHTML = sequence_after;