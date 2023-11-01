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

  btnTrash.addEventListener('click', () => {
    const shopItem = btnTrash.closest('.shop');
    if (shopItem) {
      shopItem.remove();
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
    <div class="shop__author-inline">
    <p class="shop__author">${bookData.author}</p>
    <div class="shop__amazon-book">
   <img class="shop__amazon" src="../images/amazon.png" alt="Amazon" />
  <img class="shop__book-icon" src="../images/amazon-book.png" alt="Book" />
</div>
</div>
  `;

  /*const shopTextElements = document.querySelectorAll('.shop__text');

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
  });*/

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
    emptyListImage.alt = 'book image';
    return;
  }
  emptyList.classList.add('hidden');

  storedBooksId.forEach(async id => {
    const bookDetails = await fetchBookById(id);
    renderBook(bookDetails);
  });
};

loadBooks();
