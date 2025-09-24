// scripts/main.js
// Lightweight helpers for the static site

document.addEventListener('DOMContentLoaded', function () {
    // Update year placeholders
    const year = new Date().getFullYear();
    const elIds = ['year', 'year-login', 'year-student', 'year-admin'];
    elIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = year;
    });

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mobile nav toggle
    const toggleButtons = document.querySelectorAll('.nav-toggle');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if (!navLinks) return;
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
                // hide
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.gap = '8px';
            }
        });
    });

    // Automatically hide mobile nav on resize to desktop
    window.addEventListener('resize', () => {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        if (window.innerWidth > 700) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
        } else if (window.innerWidth <= 700) {
            // keep hidden by default (user may toggle)
            if (!document.querySelector('.nav-toggle').getAttribute('aria-expanded') === 'true') {
                navLinks.style.display = 'none';
            }
        }
    });
});
