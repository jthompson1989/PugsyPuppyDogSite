// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery image click effect
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); 