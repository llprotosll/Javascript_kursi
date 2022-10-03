//funkcija nolasīt lietotāju un paroli no ievades lauka
function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;


//funkcija izveidotā lietotājas un paroles pārbaudīšanai
if(username=="admin"&& password=="1234")
{ 
    //apstiprinājums veiksmīgam loginam un pāreja uz citu lapu
    alert("Pieteikšanās veiksmīga");
    setTimeout(function(){
        window.location.href="hangman.html"
    }, 200); 
    
    
    return false;
       
}

//paziņojums par neveiksmīgu pieteikšanos
else
{
    alert("Pieteikšanās nav izdevusies");
    validate.preventDefault()
}


}
