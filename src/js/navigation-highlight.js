const currentURL = window.location.href;

const homeLink = document.querySelector('.header__navigation-link--home');
const shoppingListLink = document.querySelector('.header__navigation-link--shopping-list');
const mobileHomeLink = document.querySelector('.menu-container__navigation-link');
const mobileShoppingListLink = document.querySelector(
  '.menu-container__navigation-link--shopping-list',
);
const mobileShoppingListLinkIcon = document.querySelector('.menu-container__navigation-icon');

if (currentURL.includes('index.html')) {
  homeLink.style.backgroundColor = 'var(--primary-object-background-color)';
  mobileHomeLink.style.backgroundColor = 'var(--primary-object-background-color)';
  mobileHomeLink.style.color = 'var(--denary-font-color)';
} else if (currentURL.includes('shopping-list.html')) {
  shoppingListLink.style.backgroundColor = 'var(--primary-object-background-color)';
  mobileShoppingListLink.style.backgroundColor = 'var(--primary-object-background-color)';
  mobileShoppingListLink.style.color = 'var(--denary-font-color)';
  mobileShoppingListLinkIcon.style.fill = 'var(--secondary-icon-color)';
}
