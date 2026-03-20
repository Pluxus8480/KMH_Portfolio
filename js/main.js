/* ==========================================
   KMH Portfolio - Main JavaScript
   ========================================== */

// ===== DOM Elements =====
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const typingText = document.getElementById('typing-text');

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
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle) navToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===== Skill Badge Click -> Navigate to Study Page with Filter =====
const skillBadges = document.querySelectorAll('.skill-badge[data-skill]');

skillBadges.forEach(badge => {
    badge.addEventListener('click', () => {
        const skill = badge.dataset.skill.toLowerCase();
        // Navigate to study page with filter parameter
        window.location.href = `study.html?filter=${encodeURIComponent(skill)}`;
    });
});

// ===== Typing Effect =====
const textArray = ['KMH', 'DirectX Engine Developer', 'Game Server Programmer', 'Becoming Full-Stack'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function typeEffect() {
    const currentText = textArray[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 80;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }

    // Finished typing current text
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
    }

    // Finished deleting
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingDelay = 500; // Pause before typing next
    }

    setTimeout(typeEffect, typingDelay);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', () => {
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }
});

// ===== Counter Animation =====
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation for stat values
            if (entry.target.classList.contains('stats')) {
                const counters = entry.target.querySelectorAll('.stat-value');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.count);
                    animateCounter(counter, target);
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observe stats section for counter animation
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Observe cards
    const cards = document.querySelectorAll('.about-card, .bento-card, .project-card, .timeline-item');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Nav Link on Scroll =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Parallax Effect (Optional) =====
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
}

window.addEventListener('scroll', parallaxEffect);

// ===== Console Easter Egg =====
console.log('%c🎮 Welcome to KMH Portfolio!', 'color: #00FF99; font-size: 24px; font-weight: bold;');
console.log('%cLooking for a developer? Let\'s connect!', 'color: #A1A1AA; font-size: 14px;');

// ===== Private/Public Mode Toggle =====
// Public = 개발 포트폴리오 (기본 페이지)
// Private = 개인 정보 (오버레이)
const modeToggle = document.getElementById('mode-toggle');
const privateOverlay = document.getElementById('private-overlay');
const privateClose = document.getElementById('private-close');
const modeButtons = document.querySelectorAll('.mode-toggle__btn');

if (modeToggle && privateOverlay) {
    // Handle mode toggle button clicks
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;

            // Update active button state
            modeButtons.forEach(b => b.classList.remove('mode-toggle__btn--active'));
            btn.classList.add('mode-toggle__btn--active');

            // Toggle overlay visibility
            if (mode === 'private') {
                privateOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                privateOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });

    // Handle close button
    if (privateClose) {
        privateClose.addEventListener('click', () => {
            privateOverlay.classList.remove('active');
            document.body.style.overflow = '';

            // Reset toggle button state
            modeButtons.forEach(btn => {
                btn.classList.remove('mode-toggle__btn--active');
                if (btn.dataset.mode === 'public') {
                    btn.classList.add('mode-toggle__btn--active');
                }
            });
        });
    }

    // Close overlay with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privateOverlay.classList.contains('active')) {
            privateOverlay.classList.remove('active');
            document.body.style.overflow = '';

            // Reset toggle button state
            modeButtons.forEach(btn => {
                btn.classList.remove('mode-toggle__btn--active');
                if (btn.dataset.mode === 'public') {
                    btn.classList.add('mode-toggle__btn--active');
                }
            });
        }
    });
}
