function validate(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var countryRegion = document.getElementById("country-region").value;
    var message = document.getElementById("message").value;
    var agreement = document.getElementById("agreement");

    // event.preventDefault()
    if(username.length < 5){
        alert("Username must be at least 5 characters long")
    //     document.getElementById("error_message").innerHTML="Username must be at least 5 characters long <br> <br>"
    }
    if(email.endsWith("@gmail.com") == false){
        alert("Email must be end with @gmail.com")
        // document.getElementById("error_message").innerHTML="Email must be end with @gmail.com <br> <br>"
    } 
    if(message.length == 0){
        alert("Message cannot be empty")
        // document.getElementById("error_message").innerHTML="Message cannot be empty <br> <br>"
    }
    if (countryRegion == "empty") {
        alert("Please select your country or region");
        // document.getElementById("error_message").innerHTML="Please select your country or region <br> <br>"
        return;
    }
    if(!agreement.checked){
        alert("You must agree with our terms and conditions to submit")
        // document.getElementById("error_message").innerHTML="You must agree with our terms and conditions to submit <br> <br>"
    }
}
