function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

const string = prompt("Enter a string: ");
const letterToCheck = prompt("Enter a letter to check: ");
const result = countString(string, letterToCheck);

console.log(result);
document.getElementById("letters").innerHTML =
  "Šajā teikumā:<br><b>" + string + "</b><br>ir " +  result  + " " + letterToCheck  + " burti";
