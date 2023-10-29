const setHeaderLinksBackgroundColors = () => {
  const pageElements = {
    currentURL: window.location.href,
    homeLink: document.querySelector('.header__navigation-link--home'),
    shoppingListLink: document.querySelector('.header__navigation-link--shopping-list'),
    mobileHomeLink: document.querySelector('.menu-container__navigation-link'),
    mobileShoppingListLink: document.querySelector(
      '.menu-container__navigation-link--shopping-list',
    ),
    mobileShoppingListLinkIcon: document.querySelector('.menu-container__navigation-icon'),
  };

  if (pageElements.currentURL.includes('index.html')) {
    pageElements.homeLink.style.backgroundColor = 'var(--primary-object-background-color)';
    pageElements.mobileHomeLink.style.backgroundColor = 'var(--primary-object-background-color)';
    pageElements.mobileHomeLink.style.color = 'var(--denary-font-color)';
  } else if (pageElements.currentURL.includes('shopping-list.html')) {
    pageElements.shoppingListLink.style.backgroundColor = 'var(--primary-object-background-color)';
    pageElements.mobileShoppingListLink.style.backgroundColor =
      'var(--primary-object-background-color)';
    pageElements.mobileShoppingListLink.style.color = 'var(--denary-font-color)';
    pageElements.mobileShoppingListLinkIcon.style.fill = 'var(--secondary-icon-color)';
  }
};

setHeaderLinksBackgroundColors();
