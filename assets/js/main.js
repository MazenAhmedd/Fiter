// Show Menu

const navToggle = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("close");

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}



// Slider

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Autoplay
let autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

// Pause autoplay on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
});








// Class's 

const tap_1  = document.getElementById("tap-1");
const tap_2  = document.getElementById("tap-2");
const tap_3  = document.getElementById("tap-3");
const tap_4  = document.getElementById("tap-4");
const tap_5  = document.getElementById("tap-5");
const tap_6  = document.getElementById("tap-6");
const tap_7  = document.getElementById("tap-7");

if(tap_1) {
    tap_1.addEventListener("click", () => {
        tap_1.classList.add("active-day");
        tap_2.classList.remove("active-day");
        tap_3.classList.remove("active-day");
        tap_4.classList.remove("active-day");
        tap_5.classList.remove("active-day");
        tap_6.classList.remove("active-day");
        tap_7.classList.remove("active-day");
    })
}

if(tap_2) {
    tap_2.addEventListener("click", () => {
        tap_2.classList.add("active-day");
        tap_1.classList.remove("active-day");
        tap_3.classList.remove("active-day");
        tap_4.classList.remove("active-day");
        tap_5.classList.remove("active-day");
        tap_6.classList.remove("active-day");
        tap_7.classList.remove("active-day");
    })
}

if(tap_3) {
    tap_3.addEventListener("click", () => {
        tap_3.classList.add("active-day");
        tap_1.classList.remove("active-day");
        tap_2.classList.remove("active-day");
        tap_4.classList.remove("active-day");
        tap_5.classList.remove("active-day");
        tap_6.classList.remove("active-day");
        tap_7.classList.remove("active-day");
    })
}

if(tap_4) {
    tap_4.addEventListener("click", () => {
        tap_4.classList.add("active-day");
        tap_1.classList.remove("active-day");
        tap_3.classList.remove("active-day");
        tap_2.classList.remove("active-day");
        tap_5.classList.remove("active-day");
        tap_6.classList.remove("active-day");
        tap_7.classList.remove("active-day");
    })
}

if(tap_5) {
    tap_5.addEventListener("click", () => {
        tap_5.classList.add("active-day");
        tap_1.classList.remove("active-day");
        tap_3.classList.remove("active-day");
        tap_4.classList.remove("active-day");
        tap_2.classList.remove("active-day");
        tap_6.classList.remove("active-day");
        tap_7.classList.remove("active-day");
    })
}

if(tap_6) {
    tap_6.addEventListener("click", () => {
        tap_6.classList.add("active-day");
        tap_1.classList.remove("active-day");
        tap_3.classList.remove("active-day");
        tap_4.classList.remove("active-day");
        tap_5.classList.remove("active-day");
        tap_2.classList.remove("active-day");
        tap_7.classList.remove("active-day");
    })
}

if(tap_7) {
    tap_7.addEventListener("click", () => {
        tap_7.classList.add("active-day");
        tap_1.classList.remove("active-day");
        tap_3.classList.remove("active-day");
        tap_4.classList.remove("active-day");
        tap_5.classList.remove("active-day");
        tap_6.classList.remove("active-day");
        tap_2.classList.remove("active-day");
    })
}
