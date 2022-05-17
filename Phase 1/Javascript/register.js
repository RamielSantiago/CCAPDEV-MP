let submit = document.querySelector('#submitBtn');
submit.addEventListener("click", validate);

function validate(){
	var fName = document.getElementById("firstname");
	var lName = document.getElementById("lastname");
    var errorText = document.getElementById("errorText");
    var email =  document.getElementById("email");
	var userName = document.getElementById("username");
    var pass =  document.getElementById("password1");
    var confirm =  document.getElementById("password2");
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var complete = 0;
    var error1, error2, error3, error4, error5, error6;
	const errorMessages = ["Invalid Email", "Username must be at least 6 characters long", "Password must be at least 8 characters long", "Passwords don't match", "Fill up First Name", "Fill up Last Name"];
	error1 = error2 = error3 = error4 = error5 = error6 = false;
	
	if (fName.value.length == 0) {
		fName.style.backgroundColor = "red";
		error5 = true;
	} else {
		complete++;
	}
	
	if (lName.value.length == 0) {
		lName.style.backgroundColor = "red";
		error6 = true;
	} else {
		complete++;
	}
	
    if(emailFormat.test(email.value)){
        complete++;
    } else{
        email.style.backgroundColor = "red";
        error1 = true;
    }
	
	if(username.value.length < 6) {
		userName.style.backgroundColor = "red";
		error2 = true;
	} else {
		complete++;
	}
	
    if(pass.value.length < 8){
        pass.style.backgroundColor = "red";
        error3 = true;
    } else {
		complete++;
	}
	
    if(pass.value == confirm.value){
        complete++;
    } else{
        pass.style.backgroundColor = "red";
        confirm.style.backgroundColor = "red";
        error4 = true;
    }
	
	if(error1 || error2 || error3 || error4 || error5 || error6) {
		let message = "";
		for (let i = 0; i < 6; i++) {
			if (i == 0 && error1) {
				message += errorMessages[i] + "<br>";
			} else if (i == 1 && error2) {
				message += errorMessages[i] + "<br>";
			} else if (i == 2 && error3) {
				message += errorMessages[i] + "<br>";
			} else if (i == 3 && error4) {
				message += errorMessages[i] + "<br>";
			} else if (i == 4 && error5) {
				message += errorMessages[i] + "<br>";
			} else if (i == 5 && error6) {
				message += errorMessages[i] + "<br>";
			}
		}
		errorText.innerHTML = message;
	}
	
    if(complete == 6){
        alert("Form Complete");
        window.location.href = "../HTML/homepage.html";
    }
}
