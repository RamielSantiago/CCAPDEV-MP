document.getElementById("popup").addEventListener("click", function(){
    document.querySelector(".writePosts").classList.add("active");
    document.querySelector("#popup").style.display="none";
});
document.getElementById("closeBtn").addEventListener("click", function(){
    document.querySelector(".writePosts").classList.remove("active");
    document.querySelector("#popup").style.display="block";
});
