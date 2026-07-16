const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Hero floating icon parallax
const heroSection = document.getElementById('heroSection');
const floatingIcons = document.querySelectorAll('.floating-icon');

if (heroSection && floatingIcons.length) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    floatingIcons.forEach((icon) => {
      const depth = parseFloat(icon.dataset.depth) || 0.04;
      const moveX = dx * depth * 100;
      const moveY = dy * depth * 100;
      icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    floatingIcons.forEach((icon) => {
      icon.style.transform = 'translate(0, 0)';
    });
  });
}