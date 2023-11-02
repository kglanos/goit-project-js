'use strict';

import { fetchBookById } from './api';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const ITEMS_PER_PAGE = 3;
let currentPage = 1;

const emptyList = document.querySelector('.empty-list');
const shoppingGallery = document.querySelector('.shopping-gallery');
const btnFirstPage = document.querySelector('.btn-first-page');
const btnPrevPage = document.querySelector('.btn-prev-page');
const btnNextPage = document.querySelector('.btn-next-page');
const btnLastPage = document.querySelector('.btn-last-page');
const paginationContainer = document.querySelector('.shopping-pagination__btn-second');
const shoppingButtons = document.querySelector('.shopping-pagination');

const getFromLocalStorage = () => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const storedBooksId = storedBooks.map(book => book._id);
  return storedBooksId;
};

const renderBook = bookData => {
  const shopItem = document.createElement('div');
  shopItem.classList.add('shop');
  const btnTrash = document.createElement('button');
  btnTrash.classList.add('shop__btn-trash');
  shopItem.appendChild(btnTrash);

  btnTrash.addEventListener('click', () => {
    const shopItem = btnTrash.closest('.shop');
    if (shopItem) {
      const bookId = bookData._id;
      const storedBooks = JSON.parse(localStorage.getItem('books'));
      const updatedBooks = storedBooks.filter(book => book._id !== bookId);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      shopItem.remove();
      if (updatedBooks.length === 0) {
        emptyList.classList.remove('hidden');
        shoppingButtons.classList.add('hidden');
      } else {
        adjustPageAfterDeletion(updatedBooks);
      }
    }
  });

  const shopImg = document.createElement('img');
  shopImg.classList.add('shop__photo');
  shopImg.src = bookData.book_image;
  shopItem.appendChild(shopImg);
  const markup = `
    <h2 class="shop__title">${bookData.title}</h2>
    <p class="shop__category">${bookData.list_name}</p>
    <p class="shop__text">${bookData.description}</p>
  <div class="author-inline">
      <p class="shop__author">${bookData.author}</p>
      <div class="shop__amazon-book">
        <a class="shop__amazon" href="${bookData.amazon_product_url}" target="_blank"></a>
        <div class="shop__book-icon"></div>
      </div>
    </div>
  `;

  const shopDescriptionDetails = document.createElement('div');
  shopDescriptionDetails.classList.add('shop__content');
  shopDescriptionDetails.innerHTML = markup;
  shopItem.appendChild(shopDescriptionDetails);
  shoppingGallery.appendChild(shopItem);
};

  const adjustPageAfterDeletion = updatedBooks => {
  const totalPages = Math.ceil(updatedBooks.length / ITEMS_PER_PAGE);

  if (updatedBooks.length === 0 && totalPages > 1) {
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    return loadPage(currentPage);
  } else if (currentPage > totalPages) {
    currentPage = Math.max(totalPages, 1);
    return loadPage(currentPage);
  }
  renderPageNumbers(totalPages);
};


const loadPage = async pageNumber => {
  const storedBooksId = getFromLocalStorage();
  const start = (pageNumber - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  Notiflix.Loading.circle('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgColor: '#fff',
  });

  shoppingGallery.innerHTML = '';

  if (storedBooksId.length === 0) {
    emptyList.classList.remove('hidden');
    shoppingButtons.classList.add('hidden');
    Notiflix.Loading.remove();
    return;
  }

  emptyList.classList.add('hidden');

  for (let i = start; i < end && i < storedBooksId.length; i++) {
    const bookDetails = await fetchBookById(storedBooksId[i]);
    renderBook(bookDetails);
  }

  btnPrevPage.disabled = currentPage === 1;
  btnFirstPage.disabled = currentPage === 1;
  btnNextPage.disabled = currentPage === Math.ceil(storedBooksId.length / ITEMS_PER_PAGE);
  btnLastPage.disabled = currentPage === Math.ceil(storedBooksId.length / ITEMS_PER_PAGE);

  renderPageNumbers(Math.ceil(storedBooksId.length / ITEMS_PER_PAGE));

  Notiflix.Loading.remove();
};

const renderPageNumbers = totalPages => {
  paginationContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.classList.add('shopping-pagination__btn');
    btn.classList.add(
      currentPage === i
        ? 'shopping-pagination__btn-black-background'
        : 'shopping-pagination__btn-white-color',
    );
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentPage = i;
      loadPage(currentPage);
    });
    paginationContainer.appendChild(btn);
  }
};

btnFirstPage.addEventListener('click', () => {
  currentPage = 1;
  loadPage(currentPage);
});

btnPrevPage.addEventListener('click', () => {
  currentPage = Math.max(1, currentPage - 1);
  loadPage(currentPage);
});

btnNextPage.addEventListener('click', () => {
  const storedBooks = getFromLocalStorage();
  currentPage = Math.min(currentPage + 1, Math.ceil(storedBooks.length / ITEMS_PER_PAGE));
  loadPage(currentPage);
});

btnLastPage.addEventListener('click', () => {
  const storedBooks = getFromLocalStorage();
  currentPage = Math.ceil(storedBooks.length / ITEMS_PER_PAGE);
  loadPage(currentPage);
});

loadPage(currentPage);
