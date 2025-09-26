document.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) { // adjust threshold
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#primary-nav');
    const header = document.querySelector('.header');
    if (!toggle || !nav) return;

    function closeMenu() {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        header.classList.remove('menu-open');
    }

    toggle.addEventListener('click', function() {
        const isOpen = nav.classList.toggle('open');
        toggle.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        header.classList.toggle('menu-open', isOpen);
    });

    // Close on link click (mobile UX)
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target)) {
            closeMenu();
        }
    });
});