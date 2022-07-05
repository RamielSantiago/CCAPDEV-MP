document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("popup").addEventListener("click", function(){
	document.querySelector(".writePosts").classList.add("active");
	document.querySelector("#popup").style.display="none";
});

document.getElementById("closeBtn").addEventListener("click", function(){
    document.querySelector(".writePosts").classList.remove("active");
    document.querySelector("#popup").style.display="block";
});

var likeButtons = [].slice.call(document.getElementsByClassName("like"));
var likeClicked = [likeButtons.length];
var likeCount = [likeButtons.length];

function liked(element, index) {
	if (!likeClicked[index]) {
		element.setAttribute('class', 'likeUser');
		likeClicked[index] = true;
		likeCount[index] += 1; 
	}
	else {
		element.setAttribute('class', 'like');
		likeClicked[index] = false;
		likeCount[index] -= 1;
	}
}

likeButtons.forEach(function(element,index) { 
	element.addEventListener("click", (evt) => liked(element, index));
});

var commentButtons = [].slice.call(document.getElementsByClassName("comment"));

commentButtons.forEach(function(element,index) { 
	element.addEventListener("click", (evt) => document.querySelector(".writeComment").classList.add("active"));
});

document.getElementById("closeBtnComment").addEventListener("click", function(){
    document.querySelector(".writeComment").classList.remove("active");
});

});