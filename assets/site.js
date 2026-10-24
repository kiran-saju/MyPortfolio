// Portfolio interactions: mobile navigation, scroll reveals, and image fallbacks.

// Enhance the page only when JavaScript is available.
document.documentElement.classList.add('js');

const header = document.getElementById('site-header');
const menuButton = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
}

function closeMobileMenu() {
    if (!header || !menuButton) {
        return;
    }

    header.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');

    const menuIcon = menuButton.querySelector('i');
    if (menuIcon) {
        menuIcon.className = 'fa-solid fa-bars';
    }
}

if (header && menuButton && primaryNav) {
    menuButton.addEventListener('click', () => {
        const isOpen = header.classList.toggle('nav-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));

        const menuIcon = menuButton.querySelector('i');
        if (menuIcon) {
            menuIcon.className = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars';
        }
    });

    primaryNav.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Scroll reveal is decorative. Content remains visible if an observer is unavailable.
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                activeObserver.unobserve(entry.target);
            }
        }
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
}

// The page keeps a designed gradient fallback until real project screenshots are added.
// Only successful images get the is-loaded class, so absent files won't show broken icons.
document.querySelectorAll('.project-banner img').forEach((image) => {
    const revealImage = () => {
        if (image.naturalWidth > 0) {
            image.classList.add('is-loaded');
        }
    };

    if (image.complete) {
        revealImage();
    } else {
        image.addEventListener('load', revealImage, { once: true });
    }
});
