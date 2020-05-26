//Select element function

const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function() {
    body.classList.toggle("open");
});


// scroll reveal
window.sr = ScrollReveal();

// select the element you want to animate
sr.reveal(".animate-left", {
    // where the animation is coming from
    origin: 'left',
    duration: 1000,
    // how far it is traveling from
    distance: '25rem',
    delay: 300
});

sr.reveal(".animate-right", {
    // where the animation is coming from
    origin: 'right',
    duration: 1000,
    // how far it is traveling from
    distance: '25rem',
    delay: 600
});

sr.reveal(".animate-top", {
    // where the animation is coming from
    origin: 'top',
    duration: 1000,
    // how far it is traveling from
    distance: '25rem',
    delay: 600
});

sr.reveal(".animate-bottom", {
    // where the animation is coming from
    origin: 'bottom',
    duration: 1000,
    // how far it is traveling from
    distance: '25rem',
    delay: 300
});