// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(220, 38, 38, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #dc2626, #ea580c)';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Menu item hover effects with Vietnamese-inspired animations
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(15px) scale(1.02)';
        this.style.transition = 'all 0.3s ease';
        this.style.background = 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(220, 38, 38, 0.05))';
        this.style.borderRadius = '10px';
        this.style.padding = '15px';
        this.style.borderLeft = '4px solid #fbbf24';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.background = 'transparent';
        this.style.padding = '0';
        this.style.borderLeft = 'none';
    });
});

// Menu categories with dynamic border animation
document.querySelectorAll('.menu-category').forEach((category, index) => {
    category.style.animationDelay = `${index * 0.2}s`;
    
    // Add Vietnamese-inspired floating animation
    category.addEventListener('mouseenter', function() {
        this.style.animation = 'float 2s ease-in-out infinite';
        this.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.2)';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
});

// Review cards stagger animation with Vietnamese flair
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.3}s`;
    
    // Add lantern-like glow effect
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateX(8deg)';
        this.style.boxShadow = '0 12px 30px rgba(220, 38, 38, 0.2), 0 0 20px rgba(251, 191, 36, 0.1)';
        this.style.borderTop = '3px solid #dc2626';
        this.style.borderLeft = '3px solid #fbbf24';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        this.style.borderTop = '3px solid #fbbf24';
        this.style.borderLeft = '3px solid #16a34a';
    });
});

// Contact info cards with Vietnamese colors
document.querySelectorAll('.contact-item').forEach(item => {
    const colors = ['#dc2626', '#ea580c', '#16a34a', '#fbbf24'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    item.addEventListener('mouseenter', function() {
        this.style.background = `linear-gradient(135deg, rgba(251, 243, 199, 0.3), rgba(254, 249, 231, 0.3))`;
        this.style.transition = 'all 0.3s ease';
        this.style.borderColor = randomColor;
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.background = 'white';
        this.style.borderColor = '#fbbf24';
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Hours highlight current day with special closed day handling
function highlightCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    const hoursItems = document.querySelectorAll('.hours-item');
    
    hoursItems.forEach((item, index) => {
        if (index === currentDay) {
            if (item.classList.contains('closed')) {
                item.style.background = 'linear-gradient(135deg, #fecaca, #fee2e2)';
                item.style.borderLeft = '4px solid #ef4444';
            } else {
                item.style.background = 'linear-gradient(135deg, #fef3c7, #fef9e7)';
                item.style.borderLeft = '4px solid #16a34a';
            }
            item.style.fontWeight = 'bold';
            item.style.borderRadius = '10px';
            item.style.padding = '1rem';
            item.style.transform = 'scale(1.02)';
        }
    });
}

// Call function when page loads
window.addEventListener('load', highlightCurrentDay);

// Add loading animation with Vietnamese theme
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero decoration
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroDecoration = document.querySelector('.hero-decoration');
    
    if (heroDecoration) {
        heroDecoration.style.transform = `translateY(-50%) translateX(${scrolled * 0.1}px) rotate(${scrolled * 0.05}deg)`;
    }
});

// Add Vietnamese-style ripple effect to CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('pho-ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Dynamic color changing based on scroll for Vietnamese flag colors
window.addEventListener('scroll', () => {
    const scrollPercent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    const hero = document.querySelector('.hero');
    
    if (hero && scrollPercent < 20) {
        const redIntensity = Math.max(220 - scrollPercent * 2, 180);
        const yellowIntensity = Math.min(36 + scrollPercent * 3, 100);
        
        hero.style.background = `linear-gradient(135deg, 
            rgb(${redIntensity}, 38, 38) 0%, 
            rgb(234, 88, 12) 50%, 
            rgb(22, ${100 + yellowIntensity}, 74) 100%)`;
    }
});

// Special Monday notification since they're closed
function checkMondayNotification() {
    const today = new Date().getDay();
    if (today === 1) { // Monday
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1001;
            font-weight: 600;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            border: 2px solid #fbbf24;
        `;
        
        notification.innerHTML = '🍜 We\'re closed Mondays!<br><small>Visit us Tuesday-Sunday</small>';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 1000);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 7000);
    }
}

// Vietnamese food emojis animation on scroll
function createFoodEmojis() {
    const foods = ['🍜', '🥖', '🦐', '🌿', '🥒', '🍅', '🧄'];
    const container = document.querySelector('.hero');
    
    foods.forEach((food, index) => {
        const emoji = document.createElement('div');
        emoji.textContent = food;
        emoji.style.cssText = `
            position: absolute;
            font-size: 2rem;
            opacity: 0.1;
            animation: float-food ${3 + index}s ease-in-out infinite;
            left: ${10 + index * 12}%;
            top: ${20 + index * 8}%;
            z-index: 1;
        `;
        container.appendChild(emoji);
    });
}

// Call special functions
setTimeout(checkMondayNotification, 2000);
setTimeout(createFoodEmojis, 1000);

// Add CSS for custom animations
const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .pho-ripple {
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(45deg, rgba(220, 38, 38, 0.4), rgba(251, 191, 36, 0.4));
        animation: pho-ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes pho-ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes float-food {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
    }
    
    .menu-category {
        transform-style: preserve-3d;
        perspective: 1000px;
    }
    
    .review-card {
        transform-style: preserve-3d;
        perspective: 1000px;
    }
    
    .hours-item:hover {
        box-shadow: 0 4px 15px rgba(220, 38, 38, 0.1);
    }
`;
document.head.appendChild(style);