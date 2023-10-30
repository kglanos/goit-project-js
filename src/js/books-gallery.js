import { each } from "lodash";
import { fetchTopBooksInCategories } from "./api";
import { createListBooksByCategory, showBooksByCategory } from "./booklist";

const booksGallery = document.querySelector('.books-gallery')
const allCategories = document.querySelector('.side-bar__categories-item')
const category = document.querySelector('.category')






function seeMore () {
    const seeMoreBtn = document.querySelectorAll('.books-gallery button')
    seeMoreBtn.forEach((button) => button.addEventListener('click', showBooksByCategory))
}


async function renderBestsellerGallery () {
    const bestsellers = await fetchTopBooksInCategories();
    const bestsellersSliced = bestsellers.slice(0,4)
    const bestsellersCategory = bestsellersSliced

    .map(bestseller =>
        `<div>
        <h2 class="books-gallery__category-title">${bestseller.list_name}</h2>
    <ul class="books-gallery__section">

    <li data-id="${bestseller.books[0]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${bestseller.books[0].book_image}"> </div> <h3 class="books-gallery__book-title">${bestseller.books[0].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[0].author}</h4> </li>

    <li class="is-hidden-tablet" data-id="${bestseller.books[1]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${bestseller.books[1].book_image}"> </div><h3 class="books-gallery__book-title">${bestseller.books[1].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[1].author}</h4> </li>

    <li class="is-hidden-tablet" data-id="${bestseller.books[2]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${bestseller.books[2].book_image}"> </div> <h3 class="books-gallery__book-title">${bestseller.books[2].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[2].author}</h4> </li>

    <li class="is-hidden-desktop" data-id="${bestseller.books[3]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${bestseller.books[3].book_image}"> </div> <h3 class="books-gallery__book-title">${bestseller.books[3].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[3].author}</h4> </li>

    <li class="is-hidden-desktop" data-id="${bestseller.books[4]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${bestseller.books[4].book_image}"> </div> <h3 class="books-gallery__book-title">${bestseller.books[4].title}</h3><h4 class="books-gallery__book-author">${bestseller.books[4].author}</h4> </li>

    </ul>
    
    <div class="books-gallery__button-wrapper"><button name="${bestseller.list_name}" type="button" class="books-gallery__button">SEE MORE</button></div>
    </div>` )
    .join('')

    booksGallery.insertAdjacentHTML('beforeend', bestsellersCategory);

    seeMore ()
    
    
}
 

renderBestsellerGallery()

const showAllCategories = () => {
    booksGallery.classList.remove('gallery-hidden')
    category.classList.add('gallery-hidden')
}

allCategories.addEventListener('click', showAllCategories);
