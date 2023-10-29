function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o.register;i("ifJdc",function(t,r){e(t.exports,"register",()=>n,e=>n=e);var n,o=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)o.set(t[r],{baseUrl:e,path:t[r+1]})}}),i("kM5jX",function(e,t){(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{let r="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");//bodyScrollLock can be added to block page scrolling when mobile-menu is opened. To use this code we need to install body-scroll-lock using "npm install body-scroll-lock"
// const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
};t.addEventListener("click",n),r.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1));// bodyScrollLock.enableBodyScroll(document.body);
})})();let r=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");n.disabled=!0,r.addEventListener("click",()=>{setTimeout(()=>{r.disabled=!0,n.disabled=!1},500)}),n.addEventListener("click",()=>{setTimeout(()=>{n.disabled=!0,r.disabled=!1},500)})}),i("haS5e",function(e,t){let r=document.querySelector(".theme-button"),n=document.querySelector("body"),o=localStorage.getItem("theme")||"light-theme";n.classList.add(o),r.addEventListener("click",()=>{let e=document.querySelector(".popup__btn-add"),t=document.querySelector(".popup__btn-remove"),r=document.querySelector(".popup"),i=document.querySelector(".popup__comment"),a=document.querySelector(".popup__icon-close"),l=document.querySelector(".popup__amazon");"dark-theme"===o?(n.classList.remove("dark-theme"),r.classList.remove("popup-dark-theme"),a.classList.remove("icon-close-dark-theme"),e.classList.remove("btn-add-dark-theme"),t.classList.remove("btn-remove-dark-theme"),i.classList.remove("comment-dark-theme"),l.classList.remove("amazon-dark-theme"),o="light-theme"):(n.classList.add("dark-theme"),r.classList.add("popup-dark-theme"),a.classList.add("icon-close-dark-theme"),e.classList.add("btn-add-dark-theme"),t.classList.add("btn-remove-dark-theme"),i.classList.add("comment-dark-theme"),l.classList.add("amazon-dark-theme"),o="dark-theme"),localStorage.setItem("theme",o)})}),i("fQwj1",function(e,t){(()=>{let e={currentURL:window.location.href,homeLink:document.querySelector(".header__navigation-link--home"),shoppingListLink:document.querySelector(".header__navigation-link--shopping-list"),mobileHomeLink:document.querySelector(".menu-container__navigation-link"),mobileShoppingListLink:document.querySelector(".menu-container__navigation-link--shopping-list"),mobileShoppingListLinkIcon:document.querySelector(".menu-container__navigation-icon")};e.currentURL.includes("index.html")?(e.homeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.color="var(--denary-font-color)"):e.currentURL.includes("shopping-list.html")&&(e.shoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.color="var(--denary-font-color)",e.mobileShoppingListLinkIcon.style.fill="var(--secondary-icon-color)")})()}),i("a7nVE",function(e,t){var r=o("7l8RX");let n=document.querySelector(".support__list"),i=document.querySelector(".next"),a=document.querySelector(".back"),l=(0,r.default).map(function({url:e,title:t,img:r},n){let o=(n+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${o}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${r}" 1x
                src="${r}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function s(e){n.style.transform=`translateY(${e}px)`,i.classList.toggle("btn-hidden"),a.classList.toggle("btn-hidden")}n.innerHTML=l,i.addEventListener("click",function(){s(-152)}),a.addEventListener("click",()=>{s(0)})}),i("7l8RX",function(t,r){e(t.exports,"default",()=>n);var n=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(o("iDuzi")).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(o("aifyG")).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(o("2up6P")).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(o("gjlMe")).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(o("b7z3C")).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(o("6m7xZ")).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(o("58KpR")).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(o("gQ9iT")).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(o("eNTiA")).href}]}),i("iDuzi",function(e,t){e.exports=new URL("save-the-children.e7cb9515.png",import.meta.url).toString()}),i("aifyG",function(e,t){e.exports=new URL("project-hope.65587b00.png",import.meta.url).toString()}),i("2up6P",function(e,t){e.exports=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString()}),i("gjlMe",function(e,t){e.exports=new URL("razom.3639a3ee.png",import.meta.url).toString()}),i("b7z3C",function(e,t){e.exports=new URL("action-against-hunger.6319825b.png",import.meta.url).toString()}),i("6m7xZ",function(e,t){e.exports=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString()}),i("58KpR",function(e,t){e.exports=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString()}),i("gQ9iT",function(e,t){e.exports=new URL("world-vision.8a329a07.png",import.meta.url).toString()}),i("eNTiA",function(e,t){e.exports=new URL("united24.9625498b.png",import.meta.url).toString()}),i("1fSMk",function(e,t){(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})();let r=document.getElementById("emailError"),n=document.getElementById("passwordError"),o=document.querySelector("#user-email"),i=document.querySelector("#user-password"),a=document.querySelector(".registration-modal-form");document.querySelector(".msg");let l=document.querySelector(".sign-up-modal");document.querySelector(".sign-up-link"),document.querySelector(".sign-in-link"),document.querySelector(".log-out-btn"),document.querySelector(".sign-up-btn"),document.querySelector(".user-btn");// Function to validate the email
let s=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),c=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),d=(e,t)=>{"email"==e?r.innerText=t:"password"==e&&(n.innerText=t)},u=(e,t)=>(r.innerText="",n.innerText="",s(e))?!!c(t)||(d(d("password",n="please enter correct password")),!1):(d("email",r="please enter a valid email address"),!1);//triggers when user submits the form
a?.addEventListener("submit",e=>{e.preventDefault(),u(o,i),document.querySelector("[registration-data-modal]").classList.add("visually-hidden"),document.querySelector(".sign-up-btn").classList.add("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden")}),l.addEventListener("click",e=>{e.preventDefault(),u(o,i),document.querySelector("[registration-data-modal]").classList.add("visually-hidden"),document.querySelector(".sign-up-btn").classList.add("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden"),a.reset()}),// Focusout event listener. Triggers when the user clicks anywhere else besides the input
o.addEventListener("focusout",e=>{s(o)||(o.style.borderColor="red",d("email","Please enter a valid email"),o.parentElement.classList.add("error"))}),// Focusout event listener triggers when the user clicks anywhere else besides the input
i.addEventListener("focusout",e=>{c(i)||(i.style.borderColor="red",d("password","Please enter a valid password"),i.parentElement.classList.add("error"))})}),i("2DTLi",function(e,t){// import { Notify } from 'notiflix';
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   onAuthStateChanged,
//   signOut,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: 'AIzaSyAjvSJvQxu47W-Oa1JrSyOVnKx1KBTL5UA',
//   authDomain: 'goit-project-js-bookshelf.firebaseapp.com',
//   projectId: 'goit-project-js-bookshelf',
//   storageBucket: 'goit-project-js-bookshelf.appspot.com',
//   messagingSenderId: '93438368377',
//   appId: '1:93438368377:web:063f56aa4bd4ee23e1d2a8',
//   measurementId: 'G-BRZ6Z5X8NQ',
// };
// const signUpBtnModal = document.querySelector('.sign-up-modal');
// const signUpLink = document.querySelector('.sign-up-link');
// const signInLink = document.querySelector('.sign-in-link');
// const logOutHeader = document.querySelector('.log-out-btn');
// const signUpHeader = document.querySelector('.sign-up-btn');
// const userStephen = document.querySelector('.user-btn');
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');
// const inputPassword = document.querySelector('#user-password');
// const registrationForm = document.querySelector('.registration-modal-form');
// let user;
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// signInLink.addEventListener('click', e => {
//   e.preventDefault();
//   registrationForm.elements.inputName.style.display = 'none';
//   signUpBtnModal.textContent = 'Sign in';
// });
// signUpLink.addEventListener('click', e => {
//   e.preventDefault();
//   signUpBtnModal.textContent = 'Sign up';
// });
// // Sign up
// signUpBtnModal.addEventListener('click', e => {
//   e.preventDefault(),
//     createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
//       .then(userCredential => {
//         (user = userCredential.user), registrationForm.classList.toggle('is-hidden');
//         signUpHeader.classList.toggle('visually-hidden');
//         userStephen.classList.remove('visually-hidden');
//         document.querySelector('.log-out-btn').classList.remove('visually-hidden');
//         registrationForm.reset();
//         Notify.success(`You're signed up!`);
//       })
//       .catch(error => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
// });
// // Sign in
// signInLink.addEventListener('click', e => {
//   e.preventDefault(),
//     signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
//       .then(userCredential => {
//         (user = userCredential.user),
//           document.querySelector('[registration-data-modal]').classList.toggle('is-hidden'),
//           document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
//           document.querySelector('.user-btn').classList.remove('visually-hidden'),
//           document.querySelector('.log-out-btn').classList.remove('visually-hidden');
//         registrationForm.reset();
//         Notify.success(`You're logged in!`);
//       })
//       .catch(error => {
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         Notify.failure(`Wrong email or password. Try again.`);
//       });
// });
// // Log out
// logOutHeader.addEventListener('click', e => {
//   e.preventDefault(),
//     signOut(auth)
//       .then(() => {
//         return (
//           signUpBtnModal.classList.toggle('visually-hidden'),
//           logOutHeader.classList.toggle('visually-hidden'),
//           Notify.info('You are logged out!')
//         );
//       })
//       .catch(error => {
//         Notify.info('You are logged out!');
//       });
// });
// onAuthStateChanged(auth, user => {
//   if (user) {
//     signUpHeader.classList.toggle('visually-hidden'),
//       logOutHeader.classList.toggle('visually-hidden');
//     const uid = user.uid;
//   } else {
//     //User is signed out
//   }
// });
}),o("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["f9Mh2","shopping-list.ed255233.js","2usor","save-the-children.e7cb9515.png","2AGy0","project-hope.65587b00.png","7adUJ","international-medical-corps.bb14a1fb.png","2KExU","razom.3639a3ee.png","30dzm","action-against-hunger.6319825b.png","e1omX","sergiy-prytula.d33ef8f5.png","8anbz","medecins-sans-frontieres.0a6ef6af.png","6tfSA","world-vision.8a329a07.png","g1g53","united24.9625498b.png","bSbOs","shopping-list.682e5f71.css"]')),o("kM5jX"),o("haS5e"),o("fQwj1"),o("a7nVE"),o("1fSMk"),/*'use strict';
import { fetchBookById } from './api';

let currentBookData = null;

const bookCover = document.querySelector('.shop__img');
const bookAmazon = document.querySelector('.shop__amazon');
const bookDescription = document.querySelector('.shop__description-details');
const btnCloseShop = document.querySelector('.shop__btn-trash');
const backdropShop = document.querySelector('.backdrop-shop');
const shop = document.querySelector('.shop');
const comment = document.querySelector('.shop__comment');
const shopsList = document.querySelector('.shop__shops-list');

const listBooks = document.querySelector('.category__list');
const listBooksInCategories = document.querySelector('.books-gallery__section');

let isBookAlreadyInShoppingList = false;

const toggleButtonsVisibility = () => {
  if (isBookAlreadyInShoppingList) {
    document.querySelector('.shop__btn-add').classList.add('shop__btn-text-hidden');
    document.querySelector('.shop__btn-remove').classList.remove('shop__btn-text-hidden');
    comment.classList.remove('shop__btn-text-hidden');
  } else {
    document.querySelector('.shop__btn-add').classList.remove('shop__btn-text-hidden');
    document.querySelector('.shop__btn-remove').classList.add('shop__btn-text-hidden');
    comment.classList.add('shop__btn-text-hidden');
  }
};

const addToLocalStorage = () => {
  if (!currentBookData) return;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const bookExists = storedBooks.some(book => book._id === currentBookData._id);

  if (!bookExists) {
    storedBooks.push(currentBookData);
    localStorage.setItem('books', JSON.stringify(storedBooks));
  }

  isBookAlreadyInShoppingList = true;
  toggleButtonsVisibility();
};

const removeFromLocalStorage = () => {
  if (!currentBookData) return;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const updatedBooks = storedBooks.filter(book => book._id !== currentBookData._id);

  localStorage.setItem('books', JSON.stringify(updatedBooks));

  isBookAlreadyInShoppingList = false;
  toggleButtonsVisibility();
};

const createShop = async bookId => {
  const bookData = await fetchBookById(bookId);
  currentBookData = bookData;

  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  isBookAlreadyInShoppingList = storedBooks.some(book => book._id === bookData._id);
  toggleButtonsVisibility();

  bookCover.src = bookData.book_image;
  bookAmazon.href = bookData.amazon_product_url;
  const markup = `<h2 class='shop__title'>${bookData.title}</h2>
                <p class='shop__author'>${bookData.author}</p>
                <p class='shop__text'>${bookData.description}</p>`;
  bookDescription.innerHTML = markup;

  const shopsBooks = bookData.buy_links
    .slice(1)
    .map(
      link =>
        `<li class='shop__shops-item'><a class='shop__shops-link' href='${link.url}' target='_blank'>${link.name}</a></li>`,
    )
    .join('');
  shopsList.innerHTML = shopsBooks;
};

const closeShop = () => {
  backdropShop.classList.add('shop-is-hidden');

  btnCloseShop.removeEventListener('click', closeShop);
  backdropShop.removeEventListener('click', backdropClickHandler);
};

const backdropClickHandler = event => {
  if (event.target === backdropShop) {
    closeShop();
  }
};
shop.addEventListener('click', event => {
  event.stopPropagation();
});

const openShop = e => {
  if (e.target.closest('.shop__btn-add')) {
    const bookId = e.target.closest('li').dataset.id;
    createShop(bookId);

    btnCloseShop.addEventListener('click', closeShop);
    backdropShop.addEventListener('click', backdropClickHandler);
  }
};

listBooks.addEventListener('click', openShop);
listBooksInCategories.addEventListener('click', openShop);

// Obsługa pustej listy zakupów
const emptyListContainer = document.querySelector('.centering');
const supportShopping = document.querySelector('.support-shopping');
const shoppingList = document.querySelector('.shopping');

const checkEmptyShoppingList = () => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  if (storedBooks.length === 0) {
    emptyListContainer.classList.remove('centering-is-hidden');
    supportShopping.classList.remove('support-shopping-is-hidden');
    shoppingList.classList.add('shopping-is-hidden');
  } else {
    emptyListContainer.classList.add('centering-is-hidden');
    supportShopping.classList.add('support-shopping-is-hidden');
    shoppingList.classList.remove('shopping-is-hidden');
  }
};

// Wywołaj funkcję, aby sprawdzić, czy lista zakupów jest pusta
checkEmptyShoppingList();*/o("2DTLi");//# sourceMappingURL=shopping-list.ed255233.js.map

//# sourceMappingURL=shopping-list.ed255233.js.map
