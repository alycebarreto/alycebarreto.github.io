document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.15 // Dispara quando 15% do item aparece
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Seleciona títulos e cards
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((el) => observer.observe(el));
});

function moveSlide(n, btn) {
    const carousel = btn.closest('.carousel');
    const inner = carousel.querySelector('.carousel-inner');
    const slides = inner.querySelectorAll('.carousel-item');
    
    // Recupera ou define o index atual do carrossel específico
    let currentIndex = parseInt(carousel.getAttribute('data-index') || '0');
    
    currentIndex += n;

    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    carousel.setAttribute('data-index', currentIndex);
    inner.style.transform = `translateX(${-currentIndex * 100}%)`;
}