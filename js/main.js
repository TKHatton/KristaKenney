/**
 * Dr. Krista T. Kenney Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const overlay = document.querySelector('.overlay');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Form Validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Create error message if it doesn't exist
                    let errorMessage = field.nextElementSibling;
                    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                        errorMessage = document.createElement('div');
                        errorMessage.classList.add('error-message');
                        errorMessage.textContent = 'This field is required';
                        field.parentNode.insertBefore(errorMessage, field.nextSibling);
                    }
                } else {
                    field.classList.remove('error');
                    
                    // Remove error message if it exists
                    const errorMessage = field.nextElementSibling;
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.remove();
                    }
                    
                    // Email validation
                    if (field.type === 'email' && !isValidEmail(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                        
                        // Create error message for email
                        let emailError = field.nextElementSibling;
                        if (!emailError || !emailError.classList.contains('error-message')) {
                            emailError = document.createElement('div');
                            emailError.classList.add('error-message');
                            emailError.textContent = 'Please enter a valid email address';
                            field.parentNode.insertBefore(emailError, field.nextSibling);
                        }
                    }
                }
            });
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    });
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Lazy loading images
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        const lazyImages = document.querySelectorAll('.lazy-image');
        
        if (lazyImages.length > 0) {
            const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy-image');
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });
            
            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    }
    
    // Cookie consent banner
    const cookieConsent = localStorage.getItem('cookieConsent');
    const cookieBanner = document.querySelector('.cookie-banner');
    
    if (cookieBanner && !cookieConsent) {
        cookieBanner.classList.add('active');
        
        const acceptButton = cookieBanner.querySelector('.accept-cookies');
        if (acceptButton) {
            acceptButton.addEventListener('click', function() {
                localStorage.setItem('cookieConsent', 'true');
                cookieBanner.classList.remove('active');
            });
        }
    }
    
    // Testimonial slider (if exists)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        const prevButton = testimonialSlider.querySelector('.prev-button');
        const nextButton = testimonialSlider.querySelector('.next-button');
        let currentIndex = 0;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Function to show testimonial at specific index
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.style.display = 'block';
                    testimonial.classList.add('fade-in');
                    setTimeout(() => {
                        testimonial.classList.remove('fade-in');
                    }, 1000);
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }
        
        // Event listeners for navigation buttons
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentIndex);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            });
        }
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
    
    // UTM tracking for CTA buttons
    const trackButtons = document.querySelectorAll('[data-track]');
    
    trackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const trackingId = this.dataset.track;
            
            // Get UTM parameters from URL
            const urlParams = new URLSearchParams(window.location.search);
            const utmSource = urlParams.get('utm_source') || 'direct';
            const utmMedium = urlParams.get('utm_medium') || 'none';
            const utmCampaign = urlParams.get('utm_campaign') || 'none';
            
            // Get button destination
            const destination = this.href || this.dataset.href;
            
            // If Google Analytics is available, track the event
            if (typeof gtag === 'function') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': trackingId,
                    'utm_source': utmSource,
                    'utm_medium': utmMedium,
                    'utm_campaign': utmCampaign,
                    'destination': destination
                });
            }
        });
    });
});
