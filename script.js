// Menu mobile
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const navPanel = document.getElementById('navPanel');

if (openBtn) openBtn.addEventListener('click', () => navPanel.classList.add('open'));
if (closeBtn) closeBtn.addEventListener('click', () => navPanel.classList.remove('open'));

// Carousel Home
function initCarousel() {
  const slides = document.querySelectorAll('.carousel .slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[n].classList.add('active');
    dots[n].classList.add('active');
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showSlide(current);
    });
  });

  // Auto-play
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);

  showSlide(0);
}

window.addEventListener('load', () => {
  if (document.querySelector('.carousel')) initCarousel();
});
