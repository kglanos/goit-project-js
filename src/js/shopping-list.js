/*'use strict';
import { fetchBookById } from './api';

let currentBookData = null;

const coverBook = document.querySelector('.shop__img');
const bookAmazon = document.querySelector('.shop__amazon');
const descriptionBook = document.querySelector('.shop__description-details');
const btnCloseShop = document.querySelector('.shop__btn-trash');
const backdropShop = document.querySelector('.backdrop-shop');
const shop = document.querySelector('.shop');
const comment = document.querySelector('.shop__comment');
const shopsList = document.querySelector('.shop__shops-list');


const addToLocalStorage = () => {
  if (!currentBookData) return;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const bookExists = storedBooks.some(book => book._id === currentBookData._id);

  if (!bookExists) {
    storedBooks.push(currentBookData);
    localStorage.setItem('books', JSON.stringify(storedBooks));
  }


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

  coverBook.src = bookData.book_image;
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
checkEmptyShoppingList();*/
