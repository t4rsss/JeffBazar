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

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchInput');
    const canalSelect = document.getElementById('canalSelect');
    const letraSpans = document.querySelectorAll('.letras-filtro span');
    const storeCards = document.querySelectorAll('.store-card');
  
    let letraSelecionada = '*'; // padrão: todas
  
    function aplicarTodosOsFiltros() {
      const termo = searchInput.value.toLowerCase();
      const canal = canalSelect.value;
  
      storeCards.forEach(card => {
        const nome = card.dataset.name?.toLowerCase() || "";
        const canalLoja = card.dataset.canal;
  
        const comecaComLetra =
          letraSelecionada === '*'
            ? true
            : letraSelecionada === '#'
              ? !/^[a-z]/.test(nome[0])
              : nome.startsWith(letraSelecionada);
  
        const contemBusca = nome.includes(termo);
        const canalMatch = canal === "" || canal === canalLoja;
  
        const mostrar = comecaComLetra && contemBusca && canalMatch;
  
        card.style.display = mostrar ? 'block' : 'none';
      });
    }
  
    // Filtro por letra
    letraSpans.forEach(span => {
      span.addEventListener('click', () => {
        const letraRaw = span.dataset.letter;
        if (!letraRaw) return;
        letraSelecionada = letraRaw.toLowerCase();
        aplicarTodosOsFiltros();
      });
    });
  
    // Filtro por nome (texto)
    searchInput.addEventListener('input', aplicarTodosOsFiltros);
  
    // Filtro por canal (select)
    canalSelect.addEventListener('change', aplicarTodosOsFiltros);
  });
  