// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on state
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
});

// Intersection Observer for Scroll Animations
const observeElements = (elements, threshold = 0.1) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Observe only once
            }
        });
    }, {
        threshold: threshold
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    observeElements(revealElements);
});
