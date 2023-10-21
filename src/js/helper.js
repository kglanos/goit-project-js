'use strict';
import { fetchBooksByCategory } from './api';

console.log(fetchBooksByCategory('Hardcover Nonfiction'));

const listBooksByCategory = document.querySelector('.list-books-by-category');

const createListBooksByCategory = async selectedCategory => {
  const books = await fetchBooksByCategory(selectedCategory);
  const list = books
    .map(
      book => `<li data-id="${book._id}">
        <h4>${book.title}</h4>
        <p>${book.author}</p>
    </li>`,
    )
    .join('');
  listBooksByCategory.insertAdjacentHTML('afterbegin', list);
};
createListBooksByCategory('Hardcover Nonfiction');
