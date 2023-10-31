'use strict';
import axios from 'axios';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const fetchBooksCategoryList = async () => {
  try {
    const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(fetchBooksCategoryList());

const fetchTopBooksInCategories = async () => {
  Notiflix.Loading.circle('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgColor: '#fff',
  });
  try {
    const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
    Notiflix.Loading.remove();
    return response.data;
  } catch (error) {
    Notiflix.Loading.remove();
    console.log(error);
  }
};
// console.log(fetchTopBooksInCategories());

const fetchBooksByCategory = async selectedCategory => {
  Notiflix.Loading.circle('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgColor: '#fff',
  });
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`,
    );
    Notiflix.Loading.remove();
    return response.data;
  } catch (error) {
    Notiflix.Loading.remove();
    console.log(error);
  }
};
// console.log(fetchBooksByCategory('Hardcover Nonfiction'));

const fetchBookById = async id => {
  try {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(fetchBookById('643282b1e85766588626a07d'));

export { fetchBooksCategoryList, fetchTopBooksInCategories, fetchBooksByCategory, fetchBookById };
