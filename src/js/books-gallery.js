import { fetchTopBooksInCategories } from "./api";


const booksGallery = document.querySelector('.books-gallery')


async function renderBestsellerGallery () {
    const bestsellers = await fetchTopBooksInCategories();
    const bestsellersSliced = bestsellers.slice(0,4)

   
    const bestsellersCategory = bestsellersSliced
    // .flatMap(bestseller => bestseller.books)
    .map(bestseller =>
    //  console.log(bestseller))
        
    // `<div><h2>${bestseller.list_name}</h2>
    //     <ul>
    //         <li><img src="${bestseller.book_image}"> <h3>${bestseller.title}</h3><h4>${bestseller.author}</h4> </li>
    //     </ul>
    // </div>` )
    // .join('')


     `<div><h2>${bestseller.list_name}</h2>
    <ul class="books-gallery__section">
    <li><img src="${bestseller.books[0].book_image}"> <h3>${bestseller.books[0].title}</h3><h4>${bestseller.books[0].author}</h4> </li>
    <li><img src="${bestseller.books[1].book_image}"> <h3>${bestseller.books[1].title}</h3><h4>${bestseller.books[1].author}</h4> </li>
    <li><img src="${bestseller.books[2].book_image}"> <h3>${bestseller.books[2].title}</h3><h4>${bestseller.books[2].author}</h4> </li>
    <li><img src="${bestseller.books[3].book_image}"> <h3>${bestseller.books[3].title}</h3><h4>${bestseller.books[3].author}</h4> </li>
    <li><img src="${bestseller.books[4].book_image}"> <h3>${bestseller.books[4].title}</h3><h4>${bestseller.books[4].author}</h4> </li>
    </ul></div>` )
    .join('')

    console.log(bestsellersCategory)
    booksGallery.insertAdjacentHTML('beforeend', bestsellersCategory);

}
 
renderBestsellerGallery()


// <li><img src="${bestseller.book_image}"> <h3>${bestseller.title}</h3><h4>${bestseller.author}</h4> </li>
    // <li><img src="${bestseller.book_image}"> <h3>${bestseller.title}</h3><h4>${bestseller.author}</h4> </li>
    // <li><img src="${bestseller.book_image}"> <h3>${bestseller.title}</h3><h4>${bestseller.author}</h4> </li>
    // <li><img src="${bestseller.book_image}"> <h3>${bestseller.title}</h3><h4>${bestseller.author}</h4> </li>