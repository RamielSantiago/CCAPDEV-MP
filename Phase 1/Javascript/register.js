let submit = document.querySelector('#submitBtn');
submit.addEventListener("click", validate);

function validate(){
    var errorText = document.getElementById("errorText");
    var email =  document.getElementById("email");
    var pass =  document.getElementById("password1");
    var confirm =  document.getElementById("password2");
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var complete = 0;
    var error = 0;
    if(emailFormat.test(email.value)){
        complete++;
    }
    else{
        email.style.backgroundColor = "red";
        errorText.innerHTML = "Invalid Email"
        error++;
    }
    if(pass.length < 8){
        pass.style.backgroundColor = "red";
        errorText.innerHTML = "Password must be at least 8 characters long";
        error++;
    }
    if(pass.value == confirm.value){
        complete++;
    }
    else{
        pass.style.backgroundColor = "red";
        confirm.style.backgroundColor = "red";
        errorText.textContent = "Passwords don't match";
        error++;
    }
    if(error > 1){
        errorText.innerHTML = "2 or more conditions not met to complete the form";
    }
    if(complete == 2){
        alert("Form Complete");
        window.location.href = "../HTML/homepage.html";
    }
}