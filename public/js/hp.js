document.addEventListener("DOMContentLoaded", function (event) {
	
	$("#postSubmit").click(function () {
		var postTitle = document.querySelector("#postTitle");
		var desc = document.querySelector("#desc");
		var postPhoto =  document.querySelector("#postPhoto");
        if (postTitle.value != "" && desc.value != "" && postPhoto.value != "") {
            var url = `/addPost?postTitle=${postTitle.value}&desc=${desc.value}&postPhoto=${postPhoto.value}`;
			
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
	
	$("#commentSubmit").click(function () {
		var commenttedUsername = document.querySelector("#commenttedUsername");
		var postComment = document.querySelector("#postComment");
        if (postComment.value != "" && commenttedUsername.value != "") {
            var url = `/getAddComment?postComment=${postComment.value}&commenttedUsername=${commenttedUsername.value}`;
			
			$.get(url, (data, status, xhr) => {
                alert(status);
                if (status == "success") {
                    document.querySelector("#comments").innerHTML += data;
                }
            });
			
			postComment.value = '';
			commenttedUsername.value = '';
        }
    }); 

	$("#commenttedUsername").keyup(function () {
        var input = this;
        var url = `/getCheckPostUsername?q=${input.value}`;

        $.get(url, (data, status, xhr) => {
            if (status == "success") {
                if (data) {
                    input.style.backgroundColor = "green";
                    document.querySelector("#commentSubmit").disabled = false;
                } else {
                    input.style.backgroundColor = "red";
                    document.querySelector("#commentSubmit").disabled = true;
                }
            }
        });
    });	
	
});