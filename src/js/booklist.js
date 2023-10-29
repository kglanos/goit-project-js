'use strict';
import { indexOf } from 'lodash';
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
        <div class="category__image-description"><h4 class="category__book-title">${book.title}</h4>
        <p class="category__book-author">${book.author}</p></div>
    </li>`,
    )
    .join('');
  listBooksByCategory.innerHTML = list;
};

const showBooksByCategory = async e => {

  if (e.target.closest('li') && e.target.textContent != 'All categories') {
    console.log(e.target.textContent == "All categories")
    bookGallery.classList.add('gallery-hidden');
    const selectedCategory = e.target.closest('li').textContent;

    const words = selectedCategory.split(' ');
    const lastWord = words.pop();
    const titleShort = words.join(' ');
    title.innerHTML = `${titleShort} <span class="last-word-color">${lastWord}</span>`;

    // title.textContent = selectedCategory;
    listBooksByCategory.innerHTML = '';
    createListBooksByCategory(selectedCategory);
  }
};

bookCategoriesList.addEventListener('click', showBooksByCategory);
