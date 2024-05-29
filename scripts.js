document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing effect
    const typingElement = document.getElementById('typing-effect');
    const text = "Hi! I am Abhishek Tiwari....";
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            if (charIndex > 0) {
                typingElement.innerHTML = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 100);
            } else {
                isDeleting = false;
                setTimeout(type, 500);
            }
        } else {
            if (charIndex < text.length) {
                typingElement.innerHTML = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(type, 200);
            } else {
                isDeleting = true;
                setTimeout(type, 1000);
            }
        }
    }

    type();
});
