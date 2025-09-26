// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and effects
    initPageLoadAnimation();
    initScrollAnimations();
    initInteractiveEffects();
    initParallaxEffect();
    initScrollButton();
    initServiceItems();
    initImageEffects();
    initCursorEffect();
});

// Page Load Animation Sequence
function initPageLoadAnimation() {
    // Create loading overlay
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">HIREMATH</div>
            <div class="loader-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;

    // Add loader styles
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #9333ea, #ec4899);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        
        .loader-content {
            text-align: center;
            color: white;
        }
        
        .loader-logo {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 2rem;
            animation: loaderPulse 1.5s ease-in-out infinite;
        }
        
        .loader-progress {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: white;
            width: 0%;
            animation: progressLoad 2s ease-out forwards;
        }
        
        @keyframes loaderPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes progressLoad {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(loaderStyles);
    document.body.appendChild(loader);

    // Remove loader after animation
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        setTimeout(() => {
            loader.remove();
            loaderStyles.remove();
        }, 800);
    }, 2500);
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.hero-subtitle, .hero-title, .scalability-badge, .scroll-btn, .service-item, .image-container');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Interactive Effects
function initInteractiveEffects() {
    // Navigation links enhanced hover
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.textShadow = '0 5px 15px rgba(147, 51, 234, 0.3)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.textShadow = 'none';
        });
    });

    // Contact button enhanced effects
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(147, 51, 234, 0.4)';
    });

    contactBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
}

// Parallax Effect for Background Elements
function initParallaxEffect() {
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');

        parallaxElements.forEach(element => {
            const speed = 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, {
        passive: true
    });
}

// Scroll Button with Enhanced Animation
function initScrollButton() {
    const scrollBtn = document.querySelector('.scroll-btn');

    scrollBtn.addEventListener('click', function() {
        const bottomSection = document.querySelector('.bottom-section');
        bottomSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Enhanced ripple effect
        createEnhancedRippleEffect(this);
    });

    // Add continuous subtle animation
    setInterval(() => {
        scrollBtn.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            scrollBtn.style.transform = 'translateY(0)';
        }, 1500);
    }, 3000);
}

// Enhanced Ripple Effect
function createEnhancedRippleEffect(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.4)';
    ripple.style.position = 'absolute';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'enhancedRipple 0.8s ease-out';

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Add enhanced ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes enhancedRipple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Service Items with Enhanced Interactions
function initServiceItems() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach((item, index) => {
        // Add staggered animation delay
        item.style.animationDelay = `${index * 0.1}s`;

        // Enhanced click effect
        item.addEventListener('click', function() {
            // Remove active class from all items
            serviceItems.forEach(si => si.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');

            // Enhanced pulse effect
            this.style.animation = 'enhancedPulse 0.4s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 400);
        });

        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(20px) scale(1.05)';
            this.style.textShadow = '0 5px 15px rgba(147, 51, 234, 0.3)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.textShadow = 'none';
        });
    });
}

// Enhanced pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes enhancedPulse {
        0% { transform: translateX(0) scale(1); }
        25% { transform: translateX(10px) scale(1.1); }
        50% { transform: translateX(5px) scale(1.05); }
        75% { transform: translateX(15px) scale(1.08); }
        100% { transform: translateX(0) scale(1); }
    }
    
    .service-item.active {
        color: #9333ea !important;
        font-weight: 600;
        transform: translateX(20px);
        text-shadow: 0 5px 15px rgba(147, 51, 234, 0.3);
    }
    
    .service-item.active::before {
        opacity: 1 !important;
        width: 15px !important;
        height: 15px !important;
        background: linear-gradient(135deg, #9333ea, #ec4899);
        box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
    }
`;
document.head.appendChild(pulseStyle);

// Image Effects
function initImageEffects() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container, index) => {
        // Add staggered entrance delay
        container.style.animationDelay = `${index * 0.2}s`;

        // Enhanced hover effects
        container.addEventListener('mouseenter', function() {
            this.style.zIndex = '15';
            this.style.transform = 'translateY(-20px) scale(1.1)';
            this.style.boxShadow = '0 30px 60px rgba(147, 51, 234, 0.3)';

            // Add glow effect
            this.style.filter = 'brightness(1.1) saturate(1.2)';
        });

        container.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            this.style.filter = 'brightness(1) saturate(1)';
        });

        // Add subtle continuous animation
        setInterval(() => {
            container.style.transform = 'translateY(-2px)';
            setTimeout(() => {
                container.style.transform = 'translateY(0)';
            }, 2000);
        }, 5000 + (index * 1000));
    });
}

// Custom Cursor Effect
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(236, 72, 153, 0.4) 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
        opacity: 0;
    `;

    document.body.appendChild(cursor);

    // Show cursor on mouse move
    document.addEventListener('mousemove', (e) => {
        cursor.style.opacity = '1';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Enhanced cursor effects for interactive elements
    document.querySelectorAll('a, button, .service-item, .image-container').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 1) 0%, rgba(236, 72, 153, 0.8) 100%)';
            cursor.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(236, 72, 153, 0.4) 100%)';
            cursor.style.border = 'none';
        });
    });
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance Optimization
function optimizePerformance() {
    // Lazy load images with intersection observer
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';

                img.onload = () => {
                    img.style.opacity = '1';
                };

                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Scroll-based animations here
        }, 10);
    });
}

// Initialize performance optimizations
optimizePerformance();

// Add CSS for animation classes
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-in {
        animation-play-state: running !important;
    }
    
    /* Enhanced transitions */
    * {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Scroll button continuous animation */
    .scroll-btn {
        animation: subtleBounce 3s ease-in-out infinite;
    }
    
    @keyframes subtleBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
    }
`;
document.head.appendChild(animationStyles);