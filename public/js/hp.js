document.addEventListener("DOMContentLoaded", function (event) {
	
	$("#postSubmit").click(function () {
		var postTitle = document.querySelector("#postTitle");
		var desc = document.querySelector("#desc");
		var postPhoto =  document.querySelector("#postPhoto");
        if (postTitle.value != "" && desc.value != "" && postPhoto.value != "") {
            var url = `/addPost?}&postTitle=${postTitle.value}&desc=${desc.value}&postPhoto=${postPhoto.value}`;
			
			$.get(url, (data, status, xhr) => {
                alert(status);
                if (status == "success") {
                    document.querySelector("#posts").innerHTML += data;
                }
            });
			
			postTitle.value = '';
			desc.value = '';
			postPhoto.value = '';
        }
    }); 
});