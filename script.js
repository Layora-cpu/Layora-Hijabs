// Welcome Message
console.log("Welcome to Layora");

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {
navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
} else {
navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
}

});

// Smooth Fade Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.8s";

observer.observe(card);

});
