// Smooth scroll functionality
function scrollToWaitlist() {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toast notification functionality
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            
            // Validate name
            if (!name) {
                showToast('Please enter your name', 'error');
                nameInput.focus();
                return;
            }
            
            if (name.length > 100) {
                showToast('Name must be less than 100 characters', 'error');
                nameInput.focus();
                return;
            }
            
            // Validate email
            if (!email) {
                showToast('Please enter your email', 'error');
                emailInput.focus();
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showToast('Please enter a valid email address', 'error');
                emailInput.focus();
                return;
            }
            
            if (email.length > 255) {
                showToast('Email must be less than 255 characters', 'error');
                emailInput.focus();
                return;
            }
            
            // Disable button during submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Joining...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showToast('Welcome to Duella! 🎉 You\'re on the waitlist. We\'ll notify you when we launch.', 'success');
                
                // Reset form
                nameInput.value = '';
                emailInput.value = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // In a real implementation, you would send data to a server here:
                // fetch('/api/waitlist', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ name, email })
                // })
                // .then(response => response.json())
                // .then(data => {
                //     showToast('Welcome to Duella! You\'re on the waitlist.', 'success');
                //     form.reset();
                // })
                // .catch(error => {
                //     showToast('Something went wrong. Please try again.', 'error');
                // });
            }, 1000);
        });
    }
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and showcase items
    document.querySelectorAll('.feature-card, .showcase-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
