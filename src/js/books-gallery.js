import { fetchTopBooksInCategories } from "./api";


const booksGallery = document.querySelector('.books-gallery')


async function renderBestsellerGallery () {
    const bestsellers = await fetchTopBooksInCategories();
    const bestsellersSliced = bestsellers.slice(0,4)

    const bestsellersCategory = bestsellersSliced
    .map(bestseller =>
        `<div>
        <h2 class="books-gallery__category-title">${bestseller.list_name}</h2>
    <ul class="books-gallery__section">
    <li data-id="${bestseller.books[0]._id}"><img class="books-gallery__image" alt="book cover" src="${bestseller.books[0].book_image}"> <h3 class="books-gallery__book-title">${bestseller.books[0].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[0].author}</h4> <div class="books-gallery__button-wrapper"><button type="button" class="books-gallery__button">SEE MORE </button></div></li>
    <li class="is-hidden-tablet" data-id="${bestseller.books[1]._id}"><img class="books-gallery__image" alt="book cover" src="${bestseller.books[1].book_image}"> <h3 class="books-gallery__book-title">${bestseller.books[1].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[1].author}</h4> <div class="books-gallery__button-wrapper"><button type="button" class="books-gallery__button">SEE MORE </button></div></li>
    <li class="is-hidden-tablet" data-id="${bestseller.books[2]._id}"><img class="books-gallery__image" alt="book cover" src="${bestseller.books[2].book_image}"> <h3 class="books-gallery__book-title">${bestseller.books[2].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[2].author}</h4> <div class="books-gallery__button-wrapper"><button type="button" class="books-gallery__button">SEE MORE </button></div></li>
    <li class="is-hidden-desktop" data-id="${bestseller.books[3]._id}"><img class="books-gallery__image" alt="book cover" src="${bestseller.books[3].book_image}"> <h3 class="books-gallery__book-title">${bestseller.books[3].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[3].author}</h4> <div class="books-gallery__button-wrapper"><button type="button" class="books-gallery__button">SEE MORE </button></div></li>
    <li class="is-hidden-desktop" data-id="${bestseller.books[4]._id}"><img class="books-gallery__image" alt="book cover" src="${bestseller.books[4].book_image}"> <h3 class="books-gallery__book-title">${bestseller.books[4].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[4].author}</h4> <div class="books-gallery__button-wrapper"><button type="button" class="books-gallery__button">SEE MORE </button></div></li>
    </ul></div>` )
    .join('')

    booksGallery.insertAdjacentHTML('beforeend', bestsellersCategory);

}
 
renderBestsellerGallery()

