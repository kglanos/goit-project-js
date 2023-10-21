'use strict';
import { fetchBooksByCategory, fetchBookById } from './api';

console.log(fetchBooksByCategory('Hardcover Nonfiction'));
console.log(fetchBookById('643282b2e85766588626a122'));

const bookCover = document.querySelector('.popup__img');
const bookAmazonLink = document.querySelector('.popup__amazon');
const bookDescription = document.querySelector('.popup__description');
const btnAddToShoppingList = document.querySelector('.popup__btn-add');
const btnRemoveFromShoppingList = document.querySelector('.popup__btn-remove');
const btnClosePopUp = document.querySelector('.popup__btn-close');
const backdrop = document.querySelector('.backdrop-popup');
const popUp = document.querySelector('.popup');
const comment = document.querySelector('.popup__comment');
const shopsList = document.querySelector('.popup__shops-list');

let isBookAlreadyInShoppingList = false;

const toggleButtonsVisibility = () => {
  if (isBookAlreadyInShoppingList) {
    btnAddToShoppingList.classList.add('popup__btn-text-hidden');
    btnRemoveFromShoppingList.classList.remove('popup__btn-text-hidden');
    comment.classList.remove('popup__btn-text-hidden');
  } else {
    btnAddToShoppingList.classList.remove('popup__btn-text-hidden');
    btnRemoveFromShoppingList.classList.add('popup__btn-text-hidden');
    comment.classList.add('popup__btn-text-hidden');
  }
};

const createPopUp = async bookId => {
  const bookData = await fetchBookById(bookId);
  bookCover.src = bookData.book_image;
  bookAmazonLink.href = bookData.amazon_product_url;
  const markup = `<h2 class="popup__title">${bookData.title}</h2>
                <p class="popup__author">${bookData.author}</p>
                <p class="popup__text">${bookData.description}</p>`;
  bookDescription.insertAdjacentHTML('afterbegin', markup);

  const shopsBooks = bookData.buy_links
    .slice(1)
    .map(
      link =>
        `<li class="popup__shops-item"><a class="popup__shops-link" href="${link.url}" target="_blank">${link.name}</a></li>`,
    )
    .join('');
  shopsList.insertAdjacentHTML('afterbegin', shopsBooks);

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  isBookAlreadyInShoppingList = storedBooks.some(book => book._id === bookData._id);
  toggleButtonsVisibility();

  const addToLocalStorage = () => {
    if (!isBookAlreadyInShoppingList) {
      storedBooks.push(bookData);
      localStorage.setItem('books', JSON.stringify(storedBooks));
      isBookAlreadyInShoppingList = true;
      toggleButtonsVisibility();
    }
  };

  const removeFromLocalStorage = () => {
    if (isBookAlreadyInShoppingList) {
      const filteredBooks = storedBooks.filter(book => book._id !== bookData._id);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
      isBookAlreadyInShoppingList = false;
      toggleButtonsVisibility();
    }
  };

  btnRemoveFromShoppingList.addEventListener('click', removeFromLocalStorage);
  btnAddToShoppingList.addEventListener('click', addToLocalStorage);
};

createPopUp('643282b3e85766588626a1d6');

const closePopUp = () => {
  backdrop.classList.add('popup-is-hidden');
  btnClosePopUp.removeEventListener('click', closePopUp);
  backdrop.removeEventListener('click', backdropClickHandler);
  document.removeEventListener('keydown', keydownHandler);
};

const backdropClickHandler = event => {
  if (event.target === backdrop) {
    closePopUp();
  }
};
popUp.addEventListener('click', event => {
  event.stopPropagation();
});

const keydownHandler = e => {
  if (e.code === 'Escape') {
    closePopUp();
  }
};

btnClosePopUp.addEventListener('click', closePopUp);
backdrop.addEventListener('click', backdropClickHandler);
document.addEventListener('keydown', keydownHandler);

// localStorage.clear();
