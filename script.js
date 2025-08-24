function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
const links = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('section')];

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = '#' + entry.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(sec => obs.observe(sec));


document.documentElement.style.scrollBehavior = 'smooth';

