const themeButton = document.querySelector('.theme-button');
const body = document.querySelector('body');

let theme = localStorage.getItem('theme') || 'light-theme';

body.classList.add(theme);

themeButton.addEventListener('click', () => {
  if (theme === 'dark-theme') {
    body.classList.remove('dark-theme');
    theme = 'light-theme';
  } else {
    body.classList.add('dark-theme');
    theme = 'dark-theme';
  }
  localStorage.setItem('theme', theme);
});
