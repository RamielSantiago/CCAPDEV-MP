document.addEventListener("DOMContentLoaded", function (event) {
	$("#postSubmit").click(function () {
		var postTitle = document.querySelector("#postTitle");
		var desc = document.querySelector("#desc");

        if (postTitle.value != "" && desc.value != "") {
            var url = `/addPost?postTitle=${postTitle.value}&desc=${desc.value}`;
			
			$.get(url, (data, status, xhr) => {
                alert(status);
                if (status == "success") {
                    console.log("HELLO THERE!");
                }
            });
            var form = document.getElementById("post");
            form.reset();
        }
    }); 
});