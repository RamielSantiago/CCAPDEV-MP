document.addEventListener("DOMContentLoaded", function (event) {
	
	$("#postSubmit").click(function () {
		var postUsername = document.querySelector("#postUsername");
		var postTitle = document.querySelector("#postTitle");
		var desc = document.querySelector("#desc");
		var postPhoto =  document.querySelector("#postPhoto");

        if (postTitle.value != "" && desc.value != "" && postPhoto.value != "") {
            var url = `/addPost?postUsername=${postUsername.value}&postTitle=${postTitle.value}&desc=${desc.value}&postPhoto=${postPhoto.value}`;
			
			$.get(url, (data, status, xhr) => {
                alert(status);
                if (status == "success") {
                    document.querySelector("#posts").innerHTML += data;
                }
            });
			
			postUsername.value = '';
			postTitle.value = '';
			desc.value = '';
			postPhoto.value = '';
        }
    }); 
});