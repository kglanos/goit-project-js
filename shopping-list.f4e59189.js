var e=globalThis,t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a),a.register,a("kM5jX"),a("haS5e"),a("fQwj1"),a("a7nVE"),a("1fSMk");var s=a("lXnOV");const i=document.querySelector(".empty-list"),l=document.querySelector(".shopping-gallery"),r=()=>{let e=JSON.parse(localStorage.getItem("books"))||[],t=e.map(e=>e._id);return t},n=e=>{let t=document.createElement("div");t.classList.add("shop");let o=document.createElement("button");o.classList.add("shop__btn-trash"),t.appendChild(o),o.addEventListener("click",()=>{let e=o.closest(".shop");e&&e.remove()});let a=document.createElement("img");a.classList.add("shop__photo"),a.src=e.book_image,t.appendChild(a);let s=`
    <h2 class="shop__title">${e.title}</h2>
    <p class="shop__category">${e.list_name}</p>
    <p class="shop__text">${e.description}</p>
    <div class="shop__author-inline">
    <p class="shop__author">${e.author}</p>
    <div class="shop__amazon-book">
   <img class="shop__amazon" src="../images/amazon.png" alt="Amazon" />
  <img class="shop__book-icon" src="../images/amazon-book.png" alt="Book" />
</div>
</div>
  `,i=document.createElement("div");i.innerHTML=s,t.appendChild(i),l.appendChild(t)},c=async()=>{let e=r();if(0===e.length){i.classList.remove("hidden");let e=document.querySelector(".empty-list__text");e.textContent="Ta strona jest pusta, dodaj książki i przejdź do zam\xf3wienia.";let t=document.querySelector(".empty-list__image");t.src="/src/images/books-empty-page@1x.png",t.alt="book image";return}i.classList.add("hidden"),e.forEach(async e=>{let t=await (0,s.fetchBookById)(e);n(t)})};c(),a("2DTLi"),a("eNCUi");//# sourceMappingURL=shopping-list.f4e59189.js.map

//# sourceMappingURL=shopping-list.f4e59189.js.map
