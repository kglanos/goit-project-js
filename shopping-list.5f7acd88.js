var r=globalThis,e={},i={},t=r.parcelRequired7c6;null==t&&((t=function(r){if(r in e)return e[r].exports;if(r in i){var t=i[r];delete i[r];var n={id:r,exports:{}};return e[r]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(r,e){i[r]=e},r.parcelRequired7c6=t),t.register,t("kM5jX"),t("haS5e"),t("fQwj1"),t("a7nVE"),t("1fSMk"),/*'use strict';
import { fetchBookById } from './api';

let currentBookData = null;

const bookCover = document.querySelector('.shop__img');
const bookAmazon = document.querySelector('.shop__amazon');
const bookDescription = document.querySelector('.shop__description-details');
const btnCloseShop = document.querySelector('.shop__btn-trash');
const backdropShop = document.querySelector('.backdrop-shop');
const shop = document.querySelector('.shop');
const comment = document.querySelector('.shop__comment');
const shopsList = document.querySelector('.shop__shops-list');

const listBooks = document.querySelector('.category__list');
const listBooksInCategories = document.querySelector('.books-gallery__section');

let isBookAlreadyInShoppingList = false;

const toggleButtonsVisibility = () => {
  if (isBookAlreadyInShoppingList) {
    document.querySelector('.shop__btn-add').classList.add('shop__btn-text-hidden');
    document.querySelector('.shop__btn-remove').classList.remove('shop__btn-text-hidden');
    comment.classList.remove('shop__btn-text-hidden');
  } else {
    document.querySelector('.shop__btn-add').classList.remove('shop__btn-text-hidden');
    document.querySelector('.shop__btn-remove').classList.add('shop__btn-text-hidden');
    comment.classList.add('shop__btn-text-hidden');
  }
};

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

const removeFromLocalStorage = () => {
  if (!currentBookData) return;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const updatedBooks = storedBooks.filter(book => book._id !== currentBookData._id);

  localStorage.setItem('books', JSON.stringify(updatedBooks));

  isBookAlreadyInShoppingList = false;
  toggleButtonsVisibility();
};

const createShop = async bookId => {
  const bookData = await fetchBookById(bookId);
  currentBookData = bookData;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  isBookAlreadyInShoppingList = storedBooks.some(book => book._id === bookData._id);
  toggleButtonsVisibility();

  bookCover.src = bookData.book_image;
  bookAmazon.href = bookData.amazon_product_url;
  const markup = `<h2 class='shop__title'>${bookData.title}</h2>
                <p class='shop__author'>${bookData.author}</p>
                <p class='shop__text'>${bookData.description}</p>`;
  bookDescription.innerHTML = markup;

  const shopsBooks = bookData.buy_links
    .slice(1)
    .map(
      link =>
        `<li class='shop__shops-item'><a class='shop__shops-link' href='${link.url}' target='_blank'>${link.name}</a></li>`,
    )
    .join('');
  shopsList.innerHTML = shopsBooks;
};

const closeShop = () => {
  backdropShop.classList.add('shop-is-hidden');

  btnCloseShop.removeEventListener('click', closeShop);
  backdropShop.removeEventListener('click', backdropClickHandler);
};

const backdropClickHandler = event => {
  if (event.target === backdropShop) {
    closeShop();
  }
};
shop.addEventListener('click', event => {
  event.stopPropagation();
});

const openShop = e => {
  if (e.target.closest('.shop__btn-add')) {
    const bookId = e.target.closest('li').dataset.id;
    createShop(bookId);

    btnCloseShop.addEventListener('click', closeShop);
    backdropShop.addEventListener('click', backdropClickHandler);
  }
};

listBooks.addEventListener('click', openShop);
listBooksInCategories.addEventListener('click', openShop);

// Obsługa pustej listy zakupów
const emptyListContainer = document.querySelector('.centering');
const supportShopping = document.querySelector('.support-shopping');
const shoppingList = document.querySelector('.shopping');

const checkEmptyShoppingList = () => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  if (storedBooks.length === 0) {
    emptyListContainer.classList.remove('centering-is-hidden');
    supportShopping.classList.remove('support-shopping-is-hidden');
    shoppingList.classList.add('shopping-is-hidden');
  } else {
    emptyListContainer.classList.add('centering-is-hidden');
    supportShopping.classList.add('support-shopping-is-hidden');
    shoppingList.classList.remove('shopping-is-hidden');
  }
};

// Wywołaj funkcję, aby sprawdzić, czy lista zakupów jest pusta
checkEmptyShoppingList();*/t("2DTLi"),t("865h4");//# sourceMappingURL=shopping-list.5f7acd88.js.map

//# sourceMappingURL=shopping-list.5f7acd88.js.map
