// منوی موبایل
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// دارک مود
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// فرم تماس ساده
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('پیام شما ثبت شد. (این فرم نمایشی است و به سرور متصل نیست.)');
  this.reset();
});