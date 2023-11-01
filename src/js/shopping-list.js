'use strict';

import { fetchBookById } from './api';

const emptyList = document.querySelector('.empty-list');
const shoppingGallery = document.querySelector('.shopping-gallery');
const pageNumbers = document.getElementById('pageNumbers');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');

const itemsPerPage = 4;
let currentPage = 1;

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
const loadBooks = async () => {
  const storedBooksId = getFromLocalStorage();
  if (storedBooksId.length === 0) {
    emptyList.classList.remove('hidden');
    return;
  }
  emptyList.classList.add('hidden');
  storedBooksId.forEach(async id => {
    const bookDetails = await fetchBookById(id);
    renderBook(bookDetails);
  });
};
loadBooks();

// Funkcja do sprawdzania dostępności książek w liście
/*function checkIfBooksExist() {
  const storedBooksId = getFromLocalStorage();
  return storedBooksId.length > 0;
}

// Funkcja do generowania numerów stron
function setupPagination(data, itemsPerPage) {
  pageNumbers.innerHTML = '';
  const pageCount = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const button = paginationButton(i);
    pageNumbers.appendChild(button);
  }
}

// Funkcja do tworzenia przycisków numerów stron
function paginationButton(page) {
  const button = document.createElement('button');
  button.innerText = page;
  button.addEventListener('click', () => {
    currentPage = page;
    displayPage(currentPage);
  });
  return button;
}

// Funkcja do wyświetlania danej strony
function displayPage(page) {
  const storedBooksId = getFromLocalStorage();
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const booksToDisplay = storedBooksId.slice(start, end);

  shoppingGallery.innerHTML = '';
  booksToDisplay.forEach(async id => {
    const bookDetails = await fetchBookById(id);
    renderBook(bookDetails);
  });

  const currentButton = document.querySelector(`#pageNumbers button.active`);
  if (currentButton) {
    currentButton.classList.remove('active');
  }
  document.querySelector(`#pageNumbers button:nth-child(${page})`).classList.add('active');
}

// Inicjalizacja paginacji
function initializePagination() {
  if (checkIfBooksExist()) {
    const storedBooksId = getFromLocalStorage();
    setupPagination(storedBooksId, itemsPerPage);
    displayPage(currentPage);
    pageNumbers.style.display = 'block'; // Pokaż paginację
  } else {
    pageNumbers.style.display = 'none'; // Ukryj paginację
  }
}

// Przewijanie do poprzedniej strony
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

// Przewijanie do następnej strony
nextButton.addEventListener('click', () => {
  const storedBooksId = getFromLocalStorage();
  const pageCount = Math.ceil(storedBooksId.length / itemsPerPage);
  if (currentPage < pageCount) {
    currentPage++;
    displayPage(currentPage);
  }
});

nextPageButton.addEventListener('click', () => {
  const storedBooksId = getFromLocalStorage();
  const pageCount = Math.ceil(storedBooksId.length / itemsPerPage);
  if (currentPage < pageCount) {
    currentPage++;
    displayPage(currentPage);
  }
});

// Inicjalizacja paginacji przy załadowaniu strony
initializePagination();*/
