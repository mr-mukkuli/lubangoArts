document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contactForm');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const imageWrapper = card.querySelector('.project-image-wrapper');
        const img = card.querySelector('.project-img');
        
        if (imageWrapper && img) {
            let animationFrame = null;
            let isHovering = false;
            let scale = 1;
            let targetScale = 1;
            
            const animateScale = () => {
                const diff = targetScale - scale;
                scale += diff * 0.1;
                
                img.style.transform = `scale(${scale})`;
                
                if (Math.abs(diff) > 0.001) {
                    animationFrame = requestAnimationFrame(animateScale);
                }
            };
            
            card.addEventListener('mouseenter', function() {
                isHovering = true;
                targetScale = 1.08;
                if (animationFrame) cancelAnimationFrame(animationFrame);
                animateScale();
            });
            
            card.addEventListener('mouseleave', function() {
                isHovering = false;
                targetScale = 1;
                scale = parseFloat(img.style.transform.replace('scale(', '').replace(')', '')) || 1;
                animateScale();
            });
            
            imageWrapper.addEventListener('mousemove', function(e) {
                if (!isHovering) return;
                
                const rect = imageWrapper.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const moveX = (x - 0.5) * 20;
                const moveY = (y - 0.5) * 20;
                
                img.style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
            });
            
            imageWrapper.addEventListener('mouseleave', function() {
                img.style.transform = `scale(${scale})`;
            });
        }
    });
    
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    nav.style.transition = 'transform 0.3s ease';
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            heroTitle.style.transform = `translateY(${rate}px)`;
        });
    }
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});
