function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register,o("kM5jX"),o("haS5e"),o("fQwj1"),o("a7nVE"),o("1fSMk");var l=o("lXnOV"),i=o("7IoHk");let s=1;const d=document.querySelector(".empty-list"),r=document.querySelector(".shopping-gallery"),c=document.querySelector(".btn-first-page"),p=document.querySelector(".btn-prev-page"),h=document.querySelector(".btn-next-page"),g=document.querySelector(".btn-last-page"),u=document.querySelector(".shopping-pagination__btn-second"),_=document.querySelector(".shopping-pagination"),m=()=>{let e=JSON.parse(localStorage.getItem("books"))||[],t=e.map(e=>e._id);return t},b=e=>{let t=document.createElement("div");t.classList.add("shop");let n=document.createElement("button");n.classList.add("shop__btn-trash"),t.appendChild(n),n.addEventListener("click",()=>{let t=n.closest(".shop");if(t){let n=e._id,a=JSON.parse(localStorage.getItem("books")),o=a.filter(e=>e._id!==n);localStorage.setItem("books",JSON.stringify(o)),t.remove(),0===o.length?(d.classList.remove("hidden"),_.classList.add("hidden")):v(o)}});let a=document.createElement("img");a.classList.add("shop__photo"),a.src=e.book_image,t.appendChild(a);let o=`
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
  `,l=document.createElement("div");l.classList.add("shop__content"),l.innerHTML=o,t.appendChild(l),r.appendChild(t)},v=e=>{let t=(s-1)*3,n=t+3,a=e.slice(t,n);if(0===a.length){let t=Math.ceil(e.length/3);s>=t&&t>0?s=Math.max(t,1):1===s&&t>1&&L(s=1),L(s)}},L=async t=>{let n=m(),a=(t-1)*3,o=a+3;if(/*@__PURE__*/e(i).Loading.circle("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"#fff"}),r.innerHTML="",0===n.length){d.classList.remove("hidden"),_.classList.add("hidden"),/*@__PURE__*/e(i).Loading.remove();return}d.classList.add("hidden");for(let e=a;e<o&&e<n.length;e++){let t=await (0,l.fetchBookById)(n[e]);b(t)}p.disabled=1===s,c.disabled=1===s,h.disabled=s===Math.ceil(n.length/3),g.disabled=s===Math.ceil(n.length/3),f(Math.ceil(n.length/3)),/*@__PURE__*/e(i).Loading.remove()},f=e=>{u.innerHTML="";for(let t=1;t<=e;t++){let e=document.createElement("button");e.classList.add("shopping-pagination__btn"),e.classList.add(s===t?"shopping-pagination__btn-black-background":"shopping-pagination__btn-white-color"),e.textContent=t,e.addEventListener("click",()=>{L(s=t)}),u.appendChild(e)}};c.addEventListener("click",()=>{L(s=1)}),p.addEventListener("click",()=>{L(s=Math.max(1,s-1))}),h.addEventListener("click",()=>{let e=m();L(s=Math.min(s+1,Math.ceil(e.length/3)))}),g.addEventListener("click",()=>{let e=m();L(s=Math.ceil(e.length/3))}),L(s),o("2DTLi"),o("eNCUi");//# sourceMappingURL=shopping-list.1e83926b.js.map

//# sourceMappingURL=shopping-list.1e83926b.js.map
