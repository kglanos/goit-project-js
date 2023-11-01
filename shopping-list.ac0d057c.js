var e=globalThis,t={},o={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var s=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=s),s.register,s("kM5jX"),s("haS5e"),s("fQwj1"),s("a7nVE"),s("1fSMk");var a=s("lXnOV");const l=document.querySelector(".empty-list"),n=document.querySelector(".shopping-gallery");document.getElementById("pageNumbers"),document.getElementById("prev"),document.getElementById("next"),document.getElementById("prevPage"),document.getElementById("nextPage");const r=()=>{let e=JSON.parse(localStorage.getItem("books"))||[],t=e.map(e=>e._id);return t},d=e=>{let t=document.createElement("div");t.classList.add("shop");let o=document.createElement("button");o.classList.add("shop__btn-trash"),t.appendChild(o),o.addEventListener("click",()=>{let t=o.closest(".shop");if(t){let o=e._id,s=JSON.parse(localStorage.getItem("books")),a=s.filter(e=>e._id!==o);localStorage.setItem("books",JSON.stringify(a)),t.remove(),0===a.length&&l.classList.remove("hidden")}});let s=document.createElement("img");s.classList.add("shop__photo"),s.src=e.book_image,t.appendChild(s);let a=`
    <h2 class="shop__title">${e.title}</h2>
    <p class="shop__category">${e.list_name}</p>
    <p class="shop__text">${e.description}</p>
  <div class="author-inline">
      <p class="shop__author">${e.author}</p>
      <div class="shop__amazon-book">
        <a class="shop__amazon" href="${e.amazon_product_url}" target="_blank"></a>
        <div class="shop__book-icon"></div>
      </div>
    </div>
  `,r=document.createElement("div");r.classList.add("shop__content"),r.innerHTML=a,t.appendChild(r),n.appendChild(t)},i=async()=>{let e=r();if(0===e.length){l.classList.remove("hidden");return}l.classList.add("hidden"),e.forEach(async e=>{let t=await (0,a.fetchBookById)(e);d(t)})};i(),/*function checkIfBooksExist() {
  const storedBooksId = getFromLocalStorage();
  return storedBooksId.length > 0;
}

// Funkcja do generowania numerów stron
function setupPagination(data, itemsPerPage) {
  pageNumbers.innerHTML = '';
  const pageCount = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const button = paginationButton(i);
    pageNumbers.appendChild(button);
  }
}

// Funkcja do tworzenia przycisków numerów stron
function paginationButton(page) {
  const button = document.createElement('button');
  button.innerText = page;
  button.addEventListener('click', () => {
    currentPage = page;
    displayPage(currentPage);
  });
  return button;
}

// Funkcja do wyświetlania danej strony
function displayPage(page) {
  const storedBooksId = getFromLocalStorage();
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const booksToDisplay = storedBooksId.slice(start, end);

  shoppingGallery.innerHTML = '';
  booksToDisplay.forEach(async id => {
    const bookDetails = await fetchBookById(id);
    renderBook(bookDetails);
  });

  const currentButton = document.querySelector(`#pageNumbers button.active`);
  if (currentButton) {
    currentButton.classList.remove('active');
  }
  document.querySelector(`#pageNumbers button:nth-child(${page})`).classList.add('active');
}

// Inicjalizacja paginacji
function initializePagination() {
  if (checkIfBooksExist()) {
    const storedBooksId = getFromLocalStorage();
    setupPagination(storedBooksId, itemsPerPage);
    displayPage(currentPage);
    pageNumbers.style.display = 'block'; // Pokaż paginację
  } else {
    pageNumbers.style.display = 'none'; // Ukryj paginację
  }
}

// Przewijanie do poprzedniej strony
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

// Przewijanie do następnej strony
nextButton.addEventListener('click', () => {
  const storedBooksId = getFromLocalStorage();
  const pageCount = Math.ceil(storedBooksId.length / itemsPerPage);
  if (currentPage < pageCount) {
    currentPage++;
    displayPage(currentPage);
  }
});

nextPageButton.addEventListener('click', () => {
  const storedBooksId = getFromLocalStorage();
  const pageCount = Math.ceil(storedBooksId.length / itemsPerPage);
  if (currentPage < pageCount) {
    currentPage++;
    displayPage(currentPage);
  }
});

// Inicjalizacja paginacji przy załadowaniu strony
initializePagination();*/s("2DTLi"),s("eNCUi");//# sourceMappingURL=shopping-list.ac0d057c.js.map

//# sourceMappingURL=shopping-list.ac0d057c.js.map
