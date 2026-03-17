// ── Curseur personnalisé ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
});

(function tick() {
    rx += (mx - rx) * .18;
    ry += (my - ry) * .18;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    ring.style.left   = rx + 'px';
    ring.style.top    = ry + 'px';
    requestAnimationFrame(tick);
})();


// ── Navbar au scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});


// ── Révélation au scroll ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });
revealEls.forEach(el => obs.observe(el));


// ── Scroll fluide sur les ancres ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ── Effet 3D tilt sur les cartes ──
document.querySelectorAll('.card:not(.coming-soon)').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - .5;
        const y = (e.clientY - r.top)  / r.height - .5;
        card.style.transform = `translateY(-10px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});