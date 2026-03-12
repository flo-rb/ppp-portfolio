// Curseur personnalisé
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
});


// Navbar qui s'opacifie au scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Apparition des éléments au scroll
const elementsAReveler = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observateur = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

elementsAReveler.forEach(function(el) {
    observateur.observe(el);
});


// Scroll fluide vers les sections
const liens = document.querySelectorAll('a[href^="#"]');

liens.forEach(function(lien) {
    lien.addEventListener('click', function(e) {
        const cible = document.querySelector(this.getAttribute('href'));
        if (cible) {
            e.preventDefault();
            cible.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Effet tilt 3D sur les cartes
const cartes = document.querySelectorAll('.card');

cartes.forEach(function(carte) {
    carte.addEventListener('mousemove', function(e) {
        const rect = carte.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        carte.style.transform = 'translateY(-10px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 4) + 'deg)';
    });

    carte.addEventListener('mouseleave', function() {
        carte.style.transform = '';
    });
});