const hamburger = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".navbar-links")

hamburger.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});