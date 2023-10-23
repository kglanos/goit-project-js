var e=globalThis,r={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){o[e]=r},e.parcelRequired7c6=t),t.register;var i=t("lXnOV");console.log((0,i.fetchBooksByCategory)("Hardcover Nonfiction"));const n=document.querySelector(".list-books-by-category"),a=async e=>{let r=await (0,i.fetchBooksByCategory)(e),o=r.map(e=>`<li data-id="${e._id}">
        <h4>${e.title}</h4>
        <p>${e.author}</p>
    </li>`).join("");n.insertAdjacentHTML("afterbegin",o)};a("Hardcover Nonfiction");//# sourceMappingURL=index.69459ee8.js.map

//# sourceMappingURL=index.69459ee8.js.map
