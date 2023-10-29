function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t=globalThis,n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r);var o=r.register;o("ifJdc",function(t,n){e(t.exports,"register",()=>i,e=>i=e);var i,r=new Map;i=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("kM5jX",function(e,t){(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{let n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");//bodyScrollLock can be added to block page scrolling when mobile-menu is opened. To use this code we need to install body-scroll-lock using "npm install body-scroll-lock"
// const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
};t.addEventListener("click",i),n.addEventListener("click",i),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1));// bodyScrollLock.enableBodyScroll(document.body);
})})();let n=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu");i.disabled=!0,n.addEventListener("click",()=>{setTimeout(()=>{n.disabled=!0,i.disabled=!1},500)}),i.addEventListener("click",()=>{setTimeout(()=>{i.disabled=!0,n.disabled=!1},500)})}),o("haS5e",function(e,t){let n=document.querySelector(".theme-button"),i=document.querySelector("body"),r=localStorage.getItem("theme")||"light-theme";i.classList.add(r),n.addEventListener("click",()=>{let e=document.querySelector(".popup__btn-add"),t=document.querySelector(".popup__btn-remove"),n=document.querySelector(".popup"),o=document.querySelector(".popup__comment"),a=document.querySelector(".popup__icon-close"),s=document.querySelector(".popup__amazon");"dark-theme"===r?(i.classList.remove("dark-theme"),n.classList.remove("popup-dark-theme"),a.classList.remove("icon-close-dark-theme"),e.classList.remove("btn-add-dark-theme"),t.classList.remove("btn-remove-dark-theme"),o.classList.remove("comment-dark-theme"),s.classList.remove("amazon-dark-theme"),r="light-theme"):(i.classList.add("dark-theme"),n.classList.add("popup-dark-theme"),a.classList.add("icon-close-dark-theme"),e.classList.add("btn-add-dark-theme"),t.classList.add("btn-remove-dark-theme"),o.classList.add("comment-dark-theme"),s.classList.add("amazon-dark-theme"),r="dark-theme"),localStorage.setItem("theme",r)})}),o("fQwj1",function(e,t){(()=>{let e={currentURL:window.location.href,homeLink:document.querySelector(".header__navigation-link--home"),shoppingListLink:document.querySelector(".header__navigation-link--shopping-list"),mobileHomeLink:document.querySelector(".menu-container__navigation-link"),mobileShoppingListLink:document.querySelector(".menu-container__navigation-link--shopping-list"),mobileShoppingListLinkIcon:document.querySelector(".menu-container__navigation-icon")};e.currentURL.includes("index.html")?(e.homeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.color="var(--denary-font-color)"):e.currentURL.includes("shopping-list.html")&&(e.shoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.color="var(--denary-font-color)",e.mobileShoppingListLinkIcon.style.fill="var(--secondary-icon-color)")})()}),o("a7nVE",function(e,t){var n=r("7l8RX");let i=document.querySelector(".support__list"),o=document.querySelector(".next"),a=document.querySelector(".back"),s=(0,n.default).map(function({url:e,title:t,img:n},i){let r=(i+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${r}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${n}" 1x
                src="${n}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function l(e){i.style.transform=`translateY(${e}px)`,o.classList.toggle("btn-hidden"),a.classList.toggle("btn-hidden")}i.innerHTML=s,o.addEventListener("click",function(){l(-152)}),a.addEventListener("click",()=>{l(0)})}),o("7l8RX",function(t,n){e(t.exports,"default",()=>i);var i=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(r("iDuzi")).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(r("aifyG")).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(r("2up6P")).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(r("gjlMe")).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(r("b7z3C")).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(r("6m7xZ")).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(r("58KpR")).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(r("gQ9iT")).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(r("eNTiA")).href}]}),o("iDuzi",function(e,t){e.exports=new URL("save-the-children.e7cb9515.png",import.meta.url).toString()}),o("aifyG",function(e,t){e.exports=new URL("project-hope.65587b00.png",import.meta.url).toString()}),o("2up6P",function(e,t){e.exports=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString()}),o("gjlMe",function(e,t){e.exports=new URL("razom.3639a3ee.png",import.meta.url).toString()}),o("b7z3C",function(e,t){e.exports=new URL("action-against-hunger.6319825b.png",import.meta.url).toString()}),o("6m7xZ",function(e,t){e.exports=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString()}),o("58KpR",function(e,t){e.exports=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString()}),o("gQ9iT",function(e,t){e.exports=new URL("world-vision.8a329a07.png",import.meta.url).toString()}),o("eNTiA",function(e,t){e.exports=new URL("united24.9625498b.png",import.meta.url).toString()}),o("1fSMk",function(e,t){let n=document.querySelector(".sign-up-btn"),i=document.querySelector(".user-btn"),r=document.querySelector(".registration-backdrop"),o=document.querySelector(".sign-up-link"),a=document.querySelector(".sign-in-link"),s=document.querySelector(".sign-up-modal"),l=document.querySelector(".sign-in-modal"),d=document.querySelector(".name-input-container"),c=document.querySelector(".registration-close-btn"),u=document.querySelector(".registration-modal-form"),m=document.querySelector(".input-name"),p=document.querySelector(".input-email"),g=document.querySelector(".input-password"),L=document.querySelector(".name-error"),f=document.querySelector(".email-error"),h=document.querySelector(".password-error"),v=document.querySelector(".log-out-btn"),b=()=>{r.classList.toggle("registration-hidden")},S=/^[\p{L}\s]+$/u,y=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,_=/^.{7,}$/,k=(e,t,n)=>{let i=n.every(e=>e.classList.contains("valid"));i?(e.disabled=!1,e.classList.remove("disabled"),t.disabled=!1,t.classList.remove("disabled")):(e.disabled=!0,e.classList.add("disabled"),t.disabled=!0,t.classList.add("disabled"))},w=(e,t,n,i,r,o)=>{n.test(e.value)?(e.classList.add("valid"),e.classList.remove("invalid"),t.classList.add("warning-valid"),t.classList.remove("warning-invalid")):(e.classList.remove("valid"),e.classList.add("invalid"),t.classList.remove("warning-valid"),t.classList.add("warning-invalid")),k(i,r,o)},E=[m,p,g];m.addEventListener("input",()=>w(m,L,S,s,l,E)),m.addEventListener("blur",()=>w(m,L,S,s,l,E)),p.addEventListener("input",()=>w(p,f,y,s,l,E)),p.addEventListener("blur",()=>w(p,f,y,s,l,E)),g.addEventListener("input",()=>w(g,h,_,s,l,E)),g.addEventListener("blur",()=>w(g,h,_,s,l,E));let R=()=>{E.forEach(e=>{e.classList.remove("invalid"),e.classList.add("valid")}),[L,f,h].forEach(e=>{e.classList.remove("warning-invalid"),e.classList.add("warning-valid")}),s.disabled=!1,s.classList.remove("disabled"),l.disabled=!1,l.classList.remove("disabled")};n.addEventListener("click",()=>{u.reset(),R(),r.classList.toggle("registration-hidden")}),a.addEventListener("click",()=>{l.classList.remove("btn-sing-in-up-hidden"),s.classList.add("btn-sing-in-up-hidden"),d.classList.add("name-input-hidden"),L.classList.add("warning-valid"),L.classList.remove("warning-invalid")}),o.addEventListener("click",()=>{l.classList.add("btn-sing-in-up-hidden"),s.classList.remove("btn-sing-in-up-hidden"),d.classList.remove("name-input-hidden")}),c.addEventListener("click",b),u.addEventListener("submit",e=>{e.preventDefault(),b(),n.classList.toggle("visually-hidden"),i.classList.toggle("visually-hidden"),u.reset()}),i.addEventListener("click",()=>{v.classList.toggle("visually-hidden")})}),o("2DTLi",function(e,t){// import { Notify } from 'notiflix';
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
}),r("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["g6fwI","shopping-list.34692f95.js","2usor","save-the-children.e7cb9515.png","2AGy0","project-hope.65587b00.png","7adUJ","international-medical-corps.bb14a1fb.png","2KExU","razom.3639a3ee.png","30dzm","action-against-hunger.6319825b.png","e1omX","sergiy-prytula.d33ef8f5.png","8anbz","medecins-sans-frontieres.0a6ef6af.png","6tfSA","world-vision.8a329a07.png","g1g53","united24.9625498b.png"]'));//# sourceMappingURL=shopping-list.34692f95.js.map

//# sourceMappingURL=shopping-list.34692f95.js.map
