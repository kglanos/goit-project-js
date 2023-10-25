'use strict';
import axios from 'axios';


// kategorie książek 
const fetchBooksCategoryList = async () => {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(fetchBooksCategoryList());


// bestsellery
const fetchTopBooksInCategories = async () => {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(fetchTopBooksInCategories());


// książki z danej kategorii
const fetchBooksByCategory = async selectedCategory => {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(fetchBooksByCategory('Hardcover Nonfiction'));



// szczegółowa informacja o książce
const fetchBookById = async id => {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(fetchBookById('643282b1e85766588626a07d'));

export {
  fetchBooksCategoryList,
  fetchTopBooksInCategories,
  fetchBooksByCategory,
  fetchBookById,
};
