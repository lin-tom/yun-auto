document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('感谢您的留言！我们会尽快回复您。');
        contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, i) => {
            const text = slide.querySelector('.slide-text');
            if (i === index) {
                text.style.opacity = '1';
                text.style.transform = 'translate(-50%, -50%) scale(1)';
            } else {
                text.style.opacity = '0';
                text.style.transform = 'translate(-50%, -50%) scale(0.8)';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 自动轮播
    setInterval(nextSlide, 5000);

    // 初始显示
    showSlide(currentIndex);
});
