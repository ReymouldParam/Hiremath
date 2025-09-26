document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) { // adjust threshold
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});