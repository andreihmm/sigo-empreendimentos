// ======== GALERIA PRINCIPAL ========
const slides = document.querySelectorAll(".slides .slide");
const dots = document.querySelectorAll(".dots .dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        currentSlide = parseInt(dot.getAttribute("data-index"));
        showSlide(currentSlide);
    });
});

// Autoplay para galeria principal
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // troca a cada 5 segundos



// ======== GALERIA DE PLANTAS ========
const plantaSlides = document.querySelectorAll(".planta-slides .slide");
const plantaDots = document.querySelectorAll(".planta-dots .dot");
const plantaPrevBtn = document.querySelector(".planta-prev");
const plantaNextBtn = document.querySelector(".planta-next");
let currentPlantaSlide = 0;

function showPlantaSlide(index) {
    plantaSlides.forEach(slide => slide.classList.remove("active"));
    plantaDots.forEach(dot => dot.classList.remove("active"));
    plantaSlides[index].classList.add("active");
    plantaDots[index].classList.add("active");
}

plantaPrevBtn.addEventListener("click", () => {
    currentPlantaSlide = (currentPlantaSlide - 1 + plantaSlides.length) % plantaSlides.length;
    showPlantaSlide(currentPlantaSlide);
});

plantaNextBtn.addEventListener("click", () => {
    currentPlantaSlide = (currentPlantaSlide + 1) % plantaSlides.length;
    showPlantaSlide(currentPlantaSlide);
});

plantaDots.forEach(dot => {
    dot.addEventListener("click", () => {
        currentPlantaSlide = parseInt(dot.getAttribute("data-index"));
        showPlantaSlide(currentPlantaSlide);
    });
});

// Autoplay para galeria de plantas
setInterval(() => {
    currentPlantaSlide = (currentPlantaSlide + 1) % plantaSlides.length;
    showPlantaSlide(currentPlantaSlide);
}, 6000); // troca a cada 6 segundos
