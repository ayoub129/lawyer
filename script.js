// Premium Lawyer Website - JavaScript

(function() {
    'use strict';

    // Header scroll effect
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load

    // Smooth scroll for anchor links
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

    // Form validation and handling
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        // Form validation
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const formData = new FormData(bookingForm);
            
            // Clear previous errors
            document.querySelectorAll('.form-error').forEach(error => {
                error.classList.remove('show');
                error.textContent = '';
            });
            document.querySelectorAll('.form-input, .form-select').forEach(input => {
                input.classList.remove('error');
            });

            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                showError('name', 'Name is required');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }

            // Validate phone
            const phone = document.getElementById('phone');
            const phoneRegex = /^[\d\s\(\)\-]+$/;
            if (!phone.value.trim()) {
                showError('phone', 'Phone number is required');
                isValid = false;
            } else if (!phoneRegex.test(phone.value) || phone.value.replace(/\D/g, '').length < 10) {
                showError('phone', 'Please enter a valid phone number');
                isValid = false;
            }

            // Validate practice area
            const practiceArea = document.getElementById('practice-area');
            if (!practiceArea.value) {
                showError('practice-area', 'Please select a practice area');
                isValid = false;
            }

            // Validate date
            const date = document.getElementById('date');
            if (!date.value) {
                showError('date', 'Please select a preferred date');
                isValid = false;
            } else {
                const selectedDate = new Date(date.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    showError('date', 'Please select a future date');
                    isValid = false;
                }
            }

            // Validate time
            const time = document.getElementById('time');
            if (!time.value) {
                showError('time', 'Please select a preferred time');
                isValid = false;
            }

            if (isValid) {
                // Show success message (in a real app, this would submit to a server)
                showSuccessMessage();
            }
        });

        function showError(fieldId, message) {
            const errorElement = document.getElementById(`${fieldId}-error`);
            const inputElement = document.getElementById(fieldId);
            
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.add('show');
            }
            
            if (inputElement) {
                inputElement.classList.add('error');
            }
        }

        function showSuccessMessage() {
            // Create success message
            const successDiv = document.createElement('div');
            successDiv.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, #D4AF37, #B8941F);
                color: #0A0A0A;
                padding: 1.5rem 2rem;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
                z-index: 10000;
                max-width: 400px;
                animation: slideIn 0.3s ease;
            `;
            successDiv.innerHTML = `
                <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">Request Submitted</h3>
                <p style="margin: 0; opacity: 0.9;">We'll contact you within 24 hours to confirm your consultation.</p>
            `;
            
            document.body.appendChild(successDiv);
            
            // Add slide-in animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Remove after 5 seconds
            setTimeout(() => {
                successDiv.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => {
                    successDiv.remove();
                    style.remove();
                }, 300);
            }, 5000);
            
            // Reset form
            bookingForm.reset();
        }

        // Real-time validation
        const inputs = bookingForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
        });

        function validateField(field) {
            const fieldId = field.id;
            const value = field.value.trim();
            
            // Clear previous error
            const errorElement = document.getElementById(`${fieldId}-error`);
            if (errorElement) {
                errorElement.classList.remove('show');
            }
            field.classList.remove('error');

            // Validate based on field type
            if (field.hasAttribute('required') && !value) {
                showError(fieldId, 'This field is required');
                return false;
            }

            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showError(fieldId, 'Please enter a valid email address');
                    return false;
                }
            }

            if (field.type === 'tel' && value) {
                const phoneRegex = /^[\d\s\(\)\-]+$/;
                if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
                    showError(fieldId, 'Please enter a valid phone number');
                    return false;
                }
            }

            return true;
        }
    }

    // Smooth page transitions
    document.addEventListener('DOMContentLoaded', () => {
        // Add fade-in effect to page
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '1';
        }, 10);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.highlight-card, .practice-area-card, .value-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Number counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-card__number');
    
    const animateNumber = (element) => {
        const target = element.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        
        if (isNaN(numericValue)) return;
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                let displayValue = Math.floor(current);
                if (isPercentage) displayValue += '%';
                if (isPlus) displayValue += '+';
                element.textContent = displayValue;
            }
        }, stepTime);
    };

    // Intersection Observer for number animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.stat-card__number');
                if (numberElement && !numberElement.dataset.animated) {
                    numberElement.dataset.animated = 'true';
                    animateNumber(numberElement);
                }
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        const card = stat.closest('.stat-card');
        if (card) {
            numberObserver.observe(card);
        }
    });

})();
