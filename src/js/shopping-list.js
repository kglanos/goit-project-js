'use strict';
import { fetchBookById } from './api';

const emptyList = document.querySelector('.empty-list');
const shoppingGallery = document.querySelector('.shopping-gallery');

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

  const shopImg = document.createElement('img');
  shopImg.classList.add('shop__photo');
  shopImg.src = bookData.book_image;
  shopItem.appendChild(shopImg);

  const shopAmazonBook = document.createElement('div');
  shopAmazonBook.classList.add('shop__amazon-book');

  const shopAmazonName = document.createElement('img');
  shopAmazonName.classList.add('shop__amazon');
  shopAmazonBook.appendChild(shopAmazonName);

  const shopAmazonIcon = document.createElement('img');
  shopAmazonIcon.classList.add('shop__icon-book');
  shopAmazonBook.appendChild(shopAmazonIcon);

  shopItem.appendChild(shopAmazonBook);

  const markup = `
    <h2 class="shop__title">${bookData.title}</h2>
    <p class="shop__category">${bookData.category}</p>
    <p class="shop__text">${bookData.description}</p>
    <p class="shop__author">${bookData.author}</p>
  `;
  const shopTextElements = document.querySelectorAll('.shop__text');

  shopTextElements.forEach(shopTextElement => {
    const text = shopTextElement.textContent;
    const firstSentenceEnd = text.indexOf('. ') + 1;

    if (firstSentenceEnd > 0) {
      const truncatedText = text.substring(0, firstSentenceEnd);
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      shopTextElement.textContent = truncatedText;
      shopTextElement.appendChild(ellipsis);
    }
  });

  const shopDescriptionDetails = document.createElement('div');
  shopDescriptionDetails.innerHTML = markup;
  shopItem.appendChild(shopDescriptionDetails);

  shoppingGallery.appendChild(shopItem);
};

const loadBooks = async () => {
  const storedBooksId = getFromLocalStorage();

  if (storedBooksId.length === 0) {
    emptyList.classList.remove('hidden');

    const emptyListText = document.querySelector('.empty-list__text');
    emptyListText.textContent = 'Ta strona jest pusta, dodaj książki i przejdź do zamówienia.';

    const emptyListImage = document.querySelector('.empty-list__image');
    emptyListImage.src = '/src/images/books-empty-page@1x.png';
    emptyListImage.alt = 'Książki';
    return;
  }
  emptyList.classList.add('hidden');

  storedBooksId.forEach(async id => {
    const bookDetails = await fetchBookById(id);
    renderBook(bookDetails);
  });
};

loadBooks();

const openShop = e => {
  const shopBtnTrash = e.target.closest('.shop__btn-trash');
  if (shopBtnTrash) {
    shopBtnTrash.classList.remove('shop__btn-trash');
    shoppingGallery.classList.remove('hidden');
  }
};
