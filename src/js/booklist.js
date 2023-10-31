'use strict';
import { indexOf } from 'lodash';
import { fetchBooksByCategory } from './api';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const title = document.querySelector('.category__title');
const listBooksByCategory = document.querySelector('.category__list');
const bookCategoriesList = document.querySelector('.side-bar__categories');
const bookGallery = document.querySelector('.books-gallery');
const category = document.querySelector('.category');

export const createListBooksByCategory = async selectedCategory => {
  const books = await fetchBooksByCategory(selectedCategory);
  if (books.length === 0) {
    Notiflix.Notify.info(`Unfortunately, we do not have these books at the moment.`);
    return;
  }
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

export const showBooksByCategory = async e => {
  if (e.target.closest('li') && e.target.textContent != 'All categories') {
    bookGallery.classList.add('gallery-hidden');
    category.classList.remove('gallery-hidden');
    let selectedCategory = e.target.closest('li').textContent;

    const words = selectedCategory.split(' ');
    const lastWord = words.pop();
    const titleShort = words.join(' ');
    title.innerHTML = `${titleShort} <span class="last-word-color">${lastWord}</span>`;
    listBooksByCategory.innerHTML = '';
    createListBooksByCategory(selectedCategory);
  } else if (e.target.textContent === 'SEE MORE') {
    bookGallery.classList.add('gallery-hidden');
    category.classList.remove('gallery-hidden');

    selectedCategory = e.target.name;

    const words = selectedCategory.split(' ');
    const lastWord = words.pop();
    const titleShort = words.join(' ');
    title.innerHTML = `${titleShort} <span class="last-word-color">${lastWord}</span>`;
    listBooksByCategory.innerHTML = '';
    createListBooksByCategory(selectedCategory);
  }
};

const seeMoreBtn = document.querySelector('.books-gallery__button');

bookCategoriesList.addEventListener('click', showBooksByCategory);
