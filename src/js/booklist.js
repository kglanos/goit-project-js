'use strict';
import { fetchBooksByCategory } from './api';

const title = document.querySelector('.category__title');
const listBooksByCategory = document.querySelector('.category__list');
const bookCategoriesList = document.querySelector('.side-bar__categories');
const bookGallery = document.querySelector('.books-gallery');

const createListBooksByCategory = async selectedCategory => {
  const books = await fetchBooksByCategory(selectedCategory);
  const list = books
    .map(
      book => `<li class="category__item" data-id="${book._id}">
        <div class="category__cover"><img class="category__image" alt="book cover" src="${book.book_image}"/></div>
        <h4 class="category__book-title">${book.title}</h4>
        <p class="category__book-author">${book.author}</p>
    </li>`,
    )
    .join('');
  listBooksByCategory.innerHTML = list;
};

const showBooksByCategory = async e => {
  if (e.target.closest('li')) {
    bookGallery.classList.add('gallery-hidden');
    const selectedCategory = e.target.closest('li').textContent;
    title.textContent = selectedCategory;
    listBooksByCategory.innerHTML = '';
    createListBooksByCategory(selectedCategory);
  }
};

bookCategoriesList.addEventListener('click', showBooksByCategory);
