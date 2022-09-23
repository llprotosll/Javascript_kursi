// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("myButton").onclick = function () {
    location.href = "https://www.w3schools.com/howto/howto_css_signup_form.asp";
};

