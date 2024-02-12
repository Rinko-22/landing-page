let humburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let moblieMenu = document.getElementById("mobile-menu");

humburger.addEventListener("click", function(){

    moblieMenu.classList.add("show-menu")
})



close.addEventListener("click", function(){
    
    moblieMenu.classList.remove("show-menu")
})