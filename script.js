// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

setInterval(nextSlide, 5000);
