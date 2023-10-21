'use strict';
import { fetchBooksByCategory } from './api';

console.log(fetchBooksByCategory('Hardcover Nonfiction'));

const createListBooksByCategory = async selectedCategory => {
  const books = await fetchBooksByCategory(selectedCategory);
  const list = books
    .map(
      book => `<li class="book-item" data-id="${book._id}">
        <img class="book-item__img" src="${book.book_image}" alt="${book.title}" />
        <h2 class="book-item__title">${book.title}</h2>
        <p class="book-item__author">${book.author}</p>
        <p class="book-item__publisher">${book.publisher}</p>
        <p class="book-item__description">${book.description}</p>
        <a class="book-item__link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
        <button class="book-item__btn-add">Add to shopping list</button>
    </li>`,
    )
    .join('');
  return list;
};
