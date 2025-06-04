function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});
