const themeButton = document.querySelector('.theme-button');
const body = document.querySelector('body');

let theme = localStorage.getItem('theme') || 'light-theme';

function setThemeButtonIconPosition() {
  const themeButtonIcon = themeButton.querySelector('.theme-button__icon');
  if (theme === 'dark-theme') {
    themeButtonIcon.style.transform = 'translateX(21px)';
  } else {
    themeButtonIcon.style.transform = 'translateX(0)';
  }
}
setThemeButtonIconPosition();

body.classList.add(theme);

themeButton.addEventListener('click', () => {
  if (theme === 'dark-theme') {
    body.classList.remove('dark-theme');
    theme = 'light-theme';
  } else {
    body.classList.add('dark-theme');
    theme = 'dark-theme';
  }
  setThemeButtonIconPosition();
  localStorage.setItem('theme', theme);
});
