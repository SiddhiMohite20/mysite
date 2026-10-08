// Mobile nav toggle
const navBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
navBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  navBtn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); navBtn.setAttribute('aria-expanded', false); }
});

// Dark mode toggle (remembers choice)
const themeBtn = document.querySelector('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

// Project filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn); });
  cards.forEach(c => { c.hidden = btn.dataset.filter !== 'all' && c.dataset.type !== btn.dataset.filter; });
}));

document.getElementById('year').textContent = new Date().getFullYear();
