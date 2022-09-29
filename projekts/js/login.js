function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;



if(username=="admin"&& password=="1234")
{ 
    alert("Pieteikšanās veiksmīga");
    setTimeout(function(){
        window.location.href="hangman.html"
    }, 200); 
    
    
    return false;
       
}
else
{
    alert("Pieteikšanās nav izdevusies");
    validate.preventDefault()
}


}
