// +.-.*./
// ||,&&,!
// |,&,~
// <<, >>
//>,>=, <. <=, == (vienāds), !=, === (identisks)

456||0;

console.log(456||0);
document.getElementById("demo").innerHTML = 456||0;

/*
2 -> 0000 001(0)
4 -> 0000 010(0)

3 -> 0000 001(1)
11 ->0000 101(1)

x&0 -> 0000 0000
x&1 -> 0000 000(x)
(x%2) == 1
*/

// program to check if the number is even or odd
// take input from the user
*const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

//script to change paragraph

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }