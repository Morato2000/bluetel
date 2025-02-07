//opacity on header

document.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {  
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



document.addEventListener("scroll", function() {
    console.log("Scrolling Y:", window.scrollY);
});
