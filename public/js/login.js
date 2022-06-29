document.addEventListener("DOMContentLoaded", function (event) {
    var errorText = document.querySelector('#error');
    var form = document.querySelector('#login');
    var allow = false;
	$("#submitBtn").click(function () {
        var user = document.querySelector('#username');
        var pass = document.querySelector('#password');
        var url = `/CheckLogin?username=${user.value}&password=${pass.value}`;
        var auth = `/AllowLogin?username=${user.value}`;
        var sesh = `/createSession?username=${user.value}`;
        if(user.value != "" && pass.value != ""){
            $.post(url, (data, status, xhr) => {
                if(status == "success"){
                    if(!data){
                        console.log("Account with this username/password does not exist");
                        errorText.innerHTML = "Account with this username/password does not exist";
                    } else {
                        alert("Logged in");
                        $.get(sesh, (data, status, xhr) => {
                            if(status == 'success'){
                                console.log("Session Created");
                            } else {
                                console.log("An Error Occurred");
                            }
                        });
                        $.get(auth, (data, status, xhr) => {
                            if(status == 'success'){
                                window.location.href = '/';
                            } else {
                                console.log("An Error Occurred");
                            }
                        });
                    }
                }
            });
            form.reset();
        } else {
			errorText.innerHTML = "";
			errorText.innerHTML += "Fill up all fields.";
        }
    });
});