document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Theme toggle
    const themeBtn = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcons(savedTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.setAttribute('data-theme', 'dark');
            updateThemeIcons('dark');
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcons(newTheme);
        });
    }

    function updateThemeIcons(theme) {
        if (!sunIcon || !moonIcon) return;
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // Scroll Reveal Animation Observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Run once
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal, .animate-in');
    revealElements.forEach(el => {
        // Automatically add reveal class if it's currently using animate-in
        if (el.classList.contains('animate-in') && !el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
        revealObserver.observe(el);
    });

    // Inject ambient background if it doesn't exist
    if (!document.querySelector('.ambient-bg')) {
        const ambientBg = document.createElement('div');
        ambientBg.className = 'ambient-bg';
        ambientBg.innerHTML = `
            <div class="ambient-orb orb-1"></div>
            <div class="ambient-orb orb-2"></div>
            <div class="ambient-orb orb-3"></div>
        `;
        document.body.prepend(ambientBg);
    }
});
