document.addEventListener("DOMContentLoaded", function (event) {
	$("#username").keyup(function () {
        var input = this;
        var url = `/getCheckUsername?q=${input.value}`;

        $.get(url, (data, status, xhr) => {
            if (status == "success") {
                if (!data) {
                    document.querySelector("#errorText").innerHTML = "";
                    input.style.backgroundColor = "#e3e3e3";
                    document.querySelector("#submitBtn").disabled = false;
                } else {
                    input.style.backgroundColor = "red";
                    document.querySelector("#errorText").innerHTML = "Username already in the database";
                    document.querySelector("#submitBtn").disabled = true;
                }
            }
        });
    });
	
	$("#submitBtn").click(function () {
        var firstname = document.querySelector("#firstname");
		var lastname = document.querySelector("#lastname");
		var email = document.querySelector("#email");
		var username = document.querySelector("#username");
		var password1 = document.querySelector("#password1");
		var password2 = document.querySelector("#password2");

        if (firstname.value != "" && lastname.value != "" && email.value != "" 
			&& username.value != "" && password1.value != "" && password2.value != "" 
			&& password2.value == password1.value) {
            var url = `/addUser?firstname=${firstname.value}&lastname=${lastname.value}&email=${email.value}&username=${username.value}&password1=${password1.value}}&password2=${password2.value}`;
			
			$.get(url, (data, status, xhr) => {
                alert(status);
                if (status == "success") {
                    console.log("HELLO");
                }
            });
            var form = document.getElementById("register");
            form.reset();
        }
		else {
			document.querySelector("#errorText").innerHTML = "";
			document.querySelector("#errorText").innerHTML += "Fill up all fields.";
		}
    });   
});