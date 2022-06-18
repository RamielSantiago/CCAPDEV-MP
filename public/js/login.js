document.addEventListener("DOMContentLoaded", function (event) {
    var errorText = document.querySelector('#error');
    var form = document.querySelector('#login');
	$("#submitBtn").click(function () {
        var user = document.querySelector('#username');
        var pass = document.querySelector('#password');
        var url = `/CheckLogin?username=${user.value}&password=${pass.value}`;
        if(user.value != "" && pass.value != ""){
            $.post(url, (data, status, xhr) => {
                if(status == "success"){
                    if(!data){
                        console.log("Account with this username/password does not exist");
                        errorText.innerHTML = "Account with this username/password does not exist";
                    } else {
                        alert("Logged in");
                        window.location.href = '/';
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