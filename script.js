import 'animate.css';

window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (skillsPosition < screenPosition) {
        skillsSection.classList.add('fade-in');
    }
});
const carousel = document.querySelector('.carousel-list');

carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});
