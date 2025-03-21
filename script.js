document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.opacity = "0"; 
        });

        slides[index].classList.add("active");
        setTimeout(() => {
            slides[index].style.opacity = "1";
        }, 50);
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".highlight-slide");
    const prevButton = document.querySelector(".prev-highlights");
    const nextButton = document.querySelector(".next-highlights");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 20.5}%)`;
        });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});
