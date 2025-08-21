/ Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const hamb = document.getElementById('hamb');
const menu = document.getElementById('menu');
hamb.addEventListener('click', () => menu.classList.toggle('open'));

// Typing effect
const typed = document.getElementById('typed');
const roles = [
  'Software Developer',
  'Frontend Engineer',
  'Problem Solver',
  'Tech Enthusiast'
];
let ri = 0, ci = 0, typing = true;
function tick() {
  const word = roles[ri];
  if (typing) {
    typed.textContent = word.slice(0, ++ci);
    if (ci === word.length) { 
      typing = false; 
      setTimeout(tick, 1200); 
      return; 
    }
  } else {
    typed.textContent = word.slice(0, --ci);
    if (ci === 0) { 
      typing = true; 
      ri = (ri + 1) % roles.length; 
    }
  }
  setTimeout(tick, typing ? 85 : 40);
}
tick();

// Reveal on scroll & animate meters
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      if (e.target.id === 'skills') {
        document.querySelectorAll('.meter > span').forEach(el => {
          const target = el.style.getPropertyValue('--t') || '85%';
          requestAnimationFrame(() => el.style.width = target);
        });
      }
    }
  })
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Projects modal
const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeModal');
document.querySelectorAll('.open').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = btn.dataset.title;
    document.getElementById('modalDesc').textContent = btn.dataset.desc;
    modal.showModal();
  })
})
closeBtn.addEventListener('click', () => modal.close());

// Contact form (demo)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});


 


