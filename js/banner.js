document.querySelector(".alertbanner-close").addEventListener("click" , function() {
    this.closest(".alertbanner").style.display = "none";
});