/* ==========================================
   KMH Portfolio - Study Page JavaScript
   ========================================== */

// ===== DOM Elements =====
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const tagBtns = document.querySelectorAll('.tag-btn');
const studyCards = document.querySelectorAll('.study-card');

// ===== Header Scroll Effect =====
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// ===== Mobile Navigation =====
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle) navToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== Tag Filter =====
tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        tagBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter.toLowerCase();

        // Filter cards
        studyCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                card.classList.remove('highlight');
            } else {
                const tags = card.dataset.tags.toLowerCase().split(',');
                if (tags.includes(filter)) {
                    card.classList.remove('hidden');
                    card.classList.add('highlight');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('highlight');
                }
            }
        });
    });
});

// ===== Check URL for filter parameter =====
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');

    if (filterParam) {
        const targetBtn = document.querySelector(`.tag-btn[data-filter="${filterParam.toLowerCase()}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }

    // Add fade-in animation to cards
    studyCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.05}s`;
        setTimeout(() => {
            card.classList.add('visible');
        }, 100);
    });
});

// ===== Console Easter Egg =====
console.log('%c📚 Study Notes - KMH Portfolio', 'color: #00FF99; font-size: 20px; font-weight: bold;');
console.log('%cKeep learning, keep growing!', 'color: #A1A1AA; font-size: 14px;');
