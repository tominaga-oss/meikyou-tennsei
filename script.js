document.addEventListener('DOMContentLoaded', () => {
    // ローディング画面の制御
    const loadingScreen = document.querySelector('.loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 2500);
    });

    // スクロールアニメーション (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度だけ再生
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // パララックス効果
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-element');

        parallaxElements.forEach(el => {
            const speed = 0.05;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
