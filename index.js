// ===== HAMBURGER MENU =====
const headerDiv = document.querySelector('header > div');
const head2 = document.querySelector('.head2');

const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<span></span><span></span><span></span>';
hamburger.setAttribute('aria-label', 'Toggle menu');
headerDiv.appendChild(hamburger);

hamburger.addEventListener('click', () => {
    head2.classList.toggle('open');
});

document.querySelectorAll('.head2 a').forEach(link => {
    link.addEventListener('click', () => {
        head2.classList.remove('open');
    });
});

// ===== INTERSECTION OBSERVER =====
// الأنيميشن تشتغل كل مرة تدخل على السكشن

const animatedElements = document.querySelectorAll(
    '.dcontent1, .dcontent2, #pro, #d, .pro3, .card, .icon'
);

// كل عنصر هيبدأ invisible
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // دخل السكشن → اظهر
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            // خرج من السكشن → اختفي تاني عشان الأنيميشن تشتغل من أول
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(40px)';
        }
    });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));

// Hero دايما ظاهر
const heroContent = document.getElementById('s1');
if (heroContent) {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'none';
}
