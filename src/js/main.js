
const html = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});
