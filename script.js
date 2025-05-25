// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in');
    } else {
      section.classList.remove('fade-in');
    }
  });
};

// Run on scroll and on initial load
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
