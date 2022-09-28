function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;



if(username=="admin"&& password=="1234")
{ 
    alert("login successful");
    setTimeout(function(){
        window.location.href="hangman.html"
    }, 200); 
    
    
    return false;
       
}
else
{
    alert("login failed");
    validate.preventDefault()
}


}
