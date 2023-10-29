const themeButton = document.querySelector('.theme-button');
const body = document.querySelector('body');

let theme = localStorage.getItem('theme') || 'light-theme';

body.classList.add(theme);

themeButton.addEventListener('click', () => {
  const btnAddToShoppingList = document.querySelector('.popup__btn-add');
  const btnRemoveFromShoppingList = document.querySelector('.popup__btn-remove');
  const popUp = document.querySelector('.popup');
  const comment = document.querySelector('.popup__comment');
  const iconClose = document.querySelector('.popup__icon-close');
  const amazonLogo = document.querySelector('.popup__amazon');

  if (theme === 'dark-theme') {
    body.classList.remove('dark-theme');
    popUp.classList.remove('popup-dark-theme');
    iconClose.classList.remove('icon-close-dark-theme');
    btnAddToShoppingList.classList.remove('btn-add-dark-theme');
    btnRemoveFromShoppingList.classList.remove('btn-remove-dark-theme');
    comment.classList.remove('comment-dark-theme');
    amazonLogo.classList.remove('amazon-dark-theme');
    theme = 'light-theme';
  } else {
    body.classList.add('dark-theme');
    popUp.classList.add('popup-dark-theme');
    iconClose.classList.add('icon-close-dark-theme');
    btnAddToShoppingList.classList.add('btn-add-dark-theme');
    btnRemoveFromShoppingList.classList.add('btn-remove-dark-theme');
    comment.classList.add('comment-dark-theme');
    amazonLogo.classList.add('amazon-dark-theme');
    theme = 'dark-theme';
  }
  localStorage.setItem('theme', theme);
});
