'use strict';
import { fetchBookById } from './api';

const shoppingTitle = document.querySelector('.title-shopping');
const emptyList = document.querySelector('.empty-list');
const shoppingGallery = document.querySelector('.shopping-gallery');
const shop = document.querySelector('.shop');
const shopBtnTrash = document.querySelector('.shop__btn-trash');
const shopImg = document.querySelector('.shop__img');
const shopDescriptionDetails = document.querySelector('.shop__description-details');
const shopAmazon = document.querySelector('.shop__amazon');

const addToLocalStorage = () => {
  if (!currentBookData) return;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const bookExists = storedBooks.some(book => book._id === currentBookData._id);

  if (!bookExists) {
    storedBooks.push(currentBookData);
    localStorage.setItem('books', JSON.stringify(storedBooks));
  }

  isBookAlreadyInShoppingList = true;
  toggleButtonsVisibility();
};

const renderShoppingList = storedBooks => {
  shoppingGallery.innerHTML = '';

  if (storedBooks.length === 0) {
    emptyList.classList.remove('hidden');

    const emptyListText = document.querySelector('.empty-list__text');
    emptyListText.textContent = 'Ta strona jest pusta, dodaj książki i przejdź do zamówienia.';

    const emptyListImage = document.querySelector('.empty-list img');
    emptyListImage.src = '/src/images/books-empty-page@1x.png';
    emptyListImage.alt = 'Książki';
  } else {
    emptyList.classList.add('hidden');
  }

  storedBooks.forEach(bookData => {
    const shopItem = document.createElement('div');
    shopItem.classList.add('shop');

    shopImg.src = bookData.book_image;
    shopAmazon.href = bookData.amazon_product_url;
    const markup = `<h2 class="shop__title">${bookData.title}</h2>
                <p class="shop__category">${bookData.category}</p>
                <p class="shop__text">${bookData.description}</p>
                <p class="shop__author">${bookData.author}</p>`;
    shopDescriptionDetails.innerHTML = markup;

    shoppingGallery.appendChild(shopItem);
  });
};

const closeShop = () => {
  shop.classList.add('shop-is-hidden');
  shopBtnTrash.removeEventListener('click', removeFromShoppingList);
  document.removeEventListener('keydown', keydownHandler);
};

const openShop = e => {
  if (e.target.closest('li')) {
    const bookId = e.target.closest('li').dataset.id;
    shop.classList.remove('shop-is-hidden');
    shopBtnTrash.addEventListener('click', removeFromShoppingList);
  }
};

/*const toggleDarkThemePopUp = () => {
  const btnAddToShoppingList = document.querySelector('.popup__btn-add');
  const btnRemoveFromShoppingList = document.querySelector('.popup__btn-remove');
  const popUp = document.querySelector('.popup');
  const comment = document.querySelector('.popup__comment');
  const iconClose = document.querySelector('.popup__icon-close');
  const amazonLogo = document.querySelector('.popup__amazon');

  popUp.classList.toggle('popup-dark-theme');
  iconClose.classList.toggle('icon-close-dark-theme');
  btnAddToShoppingList.classList.toggle('btn-add-dark-theme');
  btnRemoveFromShoppingList.classList.toggle('btn-remove-dark-theme');
  comment.classList.toggle('comment-dark-theme');
  amazonLogo.classList.toggle('amazon-dark-theme');
};

// toggleDarkThemePopUp();

// openPopUp();
// localStorage.clear();*/
