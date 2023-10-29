let e;var t,r,n,o,i,s,a=globalThis,u={},l={},c=a.parcelRequired7c6;null==c&&((c=function(e){if(e in u)return u[e].exports;if(e in l){var t=l[e];delete l[e];var r={id:e,exports:{}};return u[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},a.parcelRequired7c6=c);var f=c.register;f("kM5jX",function(e,t){(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{let r="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");//bodyScrollLock can be added to block page scrolling when mobile-menu is opened. To use this code we need to install body-scroll-lock using "npm install body-scroll-lock"
// const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
};t.addEventListener("click",n),r.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1));// bodyScrollLock.enableBodyScroll(document.body);
})})();let r=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");n.disabled=!0,r.addEventListener("click",()=>{setTimeout(()=>{r.disabled=!0,n.disabled=!1},500)}),n.addEventListener("click",()=>{setTimeout(()=>{n.disabled=!0,r.disabled=!1},500)})}),f("haS5e",function(e,t){let r=document.querySelector(".theme-button"),n=document.querySelector("body"),o=localStorage.getItem("theme")||"light-theme";n.classList.add(o),r.addEventListener("click",()=>{"dark-theme"===o?(n.classList.remove("dark-theme"),o="light-theme"):(n.classList.add("dark-theme"),o="dark-theme"),localStorage.setItem("theme",o)})}),f("fQwj1",function(e,t){(()=>{let e={currentURL:window.location.href,homeLink:document.querySelector(".header__navigation-link--home"),shoppingListLink:document.querySelector(".header__navigation-link--shopping-list"),mobileHomeLink:document.querySelector(".menu-container__navigation-link"),mobileShoppingListLink:document.querySelector(".menu-container__navigation-link--shopping-list"),mobileShoppingListLinkIcon:document.querySelector(".menu-container__navigation-icon")};e.currentURL.includes("index.html")?(e.homeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.color="var(--denary-font-color)"):e.currentURL.includes("shopping-list.html")&&(e.shoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.color="var(--denary-font-color)",e.mobileShoppingListLinkIcon.style.fill="var(--secondary-icon-color)")})()}),f("a7nVE",function(e,t){var r=c("7l8RX");let n=document.querySelector(".support__list"),o=document.querySelector(".next"),i=document.querySelector(".back"),s=(0,r.default).map(function({url:e,title:t,img:r},n){let o=(n+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${o}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${r}" 1x
                src="${r}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function a(e){n.style.transform=`translateY(${e}px)`,o.classList.toggle("btn-hidden"),i.classList.toggle("btn-hidden")}n.innerHTML=s,o.addEventListener("click",function(){a(-152)}),i.addEventListener("click",()=>{a(0)})}),f("7l8RX",function(e,t){Object.defineProperty(e.exports,"default",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});var r=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(c("iDuzi")).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(c("aifyG")).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(c("2up6P")).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(c("gjlMe")).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(c("b7z3C")).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(c("6m7xZ")).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(c("58KpR")).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(c("gQ9iT")).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(c("eNTiA")).href}]}),f("iDuzi",function(e,t){e.exports=new URL("save-the-children.e7cb9515.png",import.meta.url).toString()}),f("aifyG",function(e,t){e.exports=new URL("project-hope.65587b00.png",import.meta.url).toString()}),f("2up6P",function(e,t){e.exports=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString()}),f("gjlMe",function(e,t){e.exports=new URL("razom.3639a3ee.png",import.meta.url).toString()}),f("b7z3C",function(e,t){e.exports=new URL("action-against-hunger.6319825b.png",import.meta.url).toString()}),f("6m7xZ",function(e,t){e.exports=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString()}),f("58KpR",function(e,t){e.exports=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString()}),f("gQ9iT",function(e,t){e.exports=new URL("world-vision.8a329a07.png",import.meta.url).toString()}),f("eNTiA",function(e,t){e.exports=new URL("united24.9625498b.png",import.meta.url).toString()}),f("1fSMk",function(e,t){(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})();let r=document.getElementById("emailError"),n=document.getElementById("passwordError"),o=document.querySelector("#user-email"),i=document.querySelector("#user-password"),s=document.querySelector(".registration-modal-form");document.querySelector(".msg");let a=document.querySelector(".sign-up-modal");document.querySelector(".sign-up-link"),document.querySelector(".sign-in-link"),document.querySelector(".log-out-btn"),document.querySelector(".sign-up-btn"),document.querySelector(".user-btn");// Function to validate the email
let u=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),l=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),c=(e,t)=>{"email"==e?r.innerText=t:"password"==e&&(n.innerText=t)},f=(e,t)=>(r.innerText="",n.innerText="",u(e))?!!l(t)||(c(c("password",n="please enter correct password")),!1):(c("email",r="please enter a valid email address"),!1);//triggers when user submits the form
s?.addEventListener("submit",e=>{e.preventDefault(),f(o,i),document.querySelector("[registration-data-modal]").classList.add("visually-hidden"),document.querySelector(".sign-up-btn").classList.add("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden")}),a.addEventListener("click",e=>{e.preventDefault(),f(o,i),document.querySelector("[registration-data-modal]").classList.add("visually-hidden"),document.querySelector(".sign-up-btn").classList.add("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden"),s.reset()}),// Focusout event listener. Triggers when the user clicks anywhere else besides the input
o.addEventListener("focusout",e=>{u(o)||(o.style.borderColor="red",c("email","Please enter a valid email"),o.parentElement.classList.add("error"))}),// Focusout event listener triggers when the user clicks anywhere else besides the input
i.addEventListener("focusout",e=>{l(i)||(i.style.borderColor="red",c("password","Please enter a valid password"),i.parentElement.classList.add("error"))})}),f("2DTLi",function(e,t){// import { Notify } from 'notiflix';
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
}),c("kM5jX"),c("haS5e");var p={},h={},d={};d=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var g={},m={},y={};y="object"==typeof a&&a&&a.Object===Object&&a;/** Detect free variable `self`. */var b="object"==typeof self&&self&&self.Object===Object&&self;m=y||b||Function("return this")(),g=function(){return m.Date.now()};var v={},w={},E={},S=/\s/;E=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&S.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var A=/^\s+/;w=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,E(e)+1).replace(A,""):e};var _={},L={},O={};O=m.Symbol;var k={},R=Object.prototype,T=R.hasOwnProperty,U=R.toString,x=O?O.toStringTag:void 0;k=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=T.call(e,x),r=e[x];try{e[x]=void 0;var n=!0}catch(e){}var o=U.call(e);return n&&(t?e[x]=r:delete e[x]),o};var j={},C=Object.prototype.toString;j=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return C.call(e)};/** Built-in value references. */var B=O?O.toStringTag:void 0;L=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":B&&B in Object(e)?k(e):j(e)};var N={};N=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},_=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==L(e)};/** Used as references for various `Number` constants. */var P=0/0,q=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,F=/^0o[0-7]+$/i,D=parseInt;v=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(e){if("number"==typeof e)return e;if(_(e))return P;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=w(e);var r=I.test(e);return r||F.test(e)?D(e.slice(2),r?2:8):q.test(e)?P:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var M=Math.max,H=Math.min;h=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,r){var n,o,i,s,a,u,l=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var r=n,i=o;return n=o=void 0,l=t,s=e.apply(i,r)}function m(e){var r=e-u,n=e-l;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===u||r>=t||r<0||f&&n>=i}function y(){var e,r,n,o=g();if(m(o))return b(o);// Restart the timer.
a=setTimeout(y,(e=o-u,r=o-l,n=t-e,f?H(n,i-r):n))}function b(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(a=void 0,p&&n)?h(e):(n=o=void 0,s))}function w(){var e,r=g(),i=m(r);if(n=arguments,o=this,u=r,i){if(void 0===a)return(// Reset any `maxWait` timer.
l=e=u,// Start the timer for the trailing edge.
a=setTimeout(y,t),c?h(e):s);if(f)return(// Handle invocations in a tight loop.
clearTimeout(a),a=setTimeout(y,t),h(u))}return void 0===a&&(a=setTimeout(y,t)),s}return t=v(t)||0,d(r)&&(c=!!r.leading,i=(f="maxWait"in r)?M(v(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=u=o=a=void 0},w.flush=function(){return void 0===a?s:b(g())},w},p=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return d(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),h(e,t,{leading:n,maxWait:t,trailing:o})};const $=document.querySelector(".scroll-to-top"),z=((t=p)&&t.__esModule?t.default:t)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function r(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?($.addEventListener("click",r),$.classList.remove("unvisually")):($.classList.add("unvisually"),$.addEventListener("click",r))},500);function J(e,t){return function(){return e.apply(t,arguments)}}window.addEventListener("scroll",z),c("fQwj1");// utils is a library of generic helper functions non-specific to axios
const{toString:W}=Object.prototype,{getPrototypeOf:V}=Object,K=(r=Object.create(null),e=>{let t=W.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}),G=e=>(e=e.toLowerCase(),t=>K(t)===e),Z=e=>t=>typeof t===e,{isArray:X}=Array,Y=Z("undefined"),Q=G("ArrayBuffer"),ee=Z("string"),et=Z("function"),er=Z("number"),en=e=>null!==e&&"object"==typeof e,eo=e=>{if("object"!==K(e))return!1;let t=V(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ei=G("Date"),es=G("File"),ea=G("Blob"),eu=G("FileList"),el=G("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function ec(e,t,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),X(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;for(n=0;n<s;n++)o=i[n],t.call(null,e[o],o,e)}}}function ef(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),o=n.length;for(;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}const ep=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:a,eh=e=>!Y(e)&&e!==ep,ed=(n="undefined"!=typeof Uint8Array&&V(Uint8Array),e=>n&&e instanceof n),eg=G("HTMLFormElement"),em=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ey=G("RegExp"),eb=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};ec(r,(r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)}),Object.defineProperties(e,n)},ev="abcdefghijklmnopqrstuvwxyz",ew="0123456789",eE={DIGIT:ew,ALPHA:ev,ALPHA_DIGIT:ev+ev.toUpperCase()+ew},eS=G("AsyncFunction");var eA={isArray:X,isArrayBuffer:Q,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!Y(e)&&null!==e.constructor&&!Y(e.constructor)&&et(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||et(e.append)&&("formdata"===(t=K(e))||// detect form-data instance
"object"===t&&et(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Q(e.buffer)},isString:ee,isNumber:er,isBoolean:e=>!0===e||!1===e,isObject:en,isPlainObject:eo,isUndefined:Y,isDate:ei,isFile:es,isBlob:ea,isRegExp:ey,isFunction:et,isStream:e=>en(e)&&et(e.pipe),isURLSearchParams:el,isTypedArray:ed,isFileList:eu,forEach:ec,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function e(){let{caseless:t}=eh(this)&&this||{},r={},n=(n,o)=>{let i=t&&ef(r,o)||o;eo(r[i])&&eo(n)?r[i]=e(r[i],n):eo(n)?r[i]=e({},n):X(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&ec(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(ec(t,(t,n)=>{r&&et(t)?e[n]=J(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==r&&V(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:K,kindOfTest:G,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(X(e))return e;let t=e.length;if(!er(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],o=n.call(e);for(;(r=o.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:eg,hasOwnProperty:em,hasOwnProp:em,reduceDescriptors:eb,freezeMethods:e=>{eb(e,(t,r)=>{// skip restricted props in strict mode
if(et(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(et(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(X(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:ef,global:ep,isContextDefined:eh,ALPHABET:eE,generateString:(e=16,t=eE.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&et(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(en(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let o=X(e)?[]:{};return ec(e,(e,t)=>{let i=r(e,n+1);Y(i)||(o[t]=i)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:eS,isThenable:e=>e&&(en(e)||et(e))&&et(e.then)&&et(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function e_(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}eA.inherits(e_,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:eA.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const eL=e_.prototype,eO={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{eO[e]={value:e}}),Object.defineProperties(e_,eO),Object.defineProperty(eL,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
e_.from=(e,t,r,n,o,i)=>{let s=Object.create(eL);return eA.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),e_.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s},o=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(e,t,r){for(var n,o=[],i=t;i<r;i+=3)o.push(ek[(n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]))>>18&63]+ek[n>>12&63]+ek[n>>6&63]+ek[63&n]);return o.join("")}(e,i,i+16383>s?s:i+16383));return 1===n?o.push(ek[(t=e[r-1])>>2]+ek[t<<4&63]+"=="):2===n&&o.push(ek[(t=(e[r-2]<<8)+e[r-1])>>10]+ek[t>>4&63]+ek[t<<2&63]+"="),o.join("")};for(var ek=[],eR=[],eT="undefined"!=typeof Uint8Array?Uint8Array:Array,eU="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ex=0,ej=eU.length;ex<ej;++ex)ek[ex]=eU[ex],eR[eU.charCodeAt(ex)]=ex;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
eR["-".charCodeAt(0)]=62,eR["_".charCodeAt(0)]=63,i=function(e,t,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,c=-7,f=r?o-1:0,p=r?-1:1,h=e[t+f];for(f+=p,i=h&(1<<-c)-1,h>>=-c,c+=a;c>0;i=256*i+e[t+f],f+=p,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+e[t+f],f+=p,c-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:(h?-1:1)*(1/0);s+=Math.pow(2,n),i-=l}return(h?-1:1)*s*Math.pow(2,i-n)},s=function(e,t,r,n,o,i){var s,a,u,l=8*i-o-1,c=(1<<l)-1,f=c>>1,p=23===o?5960464477539062e-23:0,h=n?0:i-1,d=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+f>=1?t+=p/u:t+=p*Math.pow(2,1-f),t*u>=2&&(s++,u/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(t*u-1)*Math.pow(2,o),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;e[r+h]=255&a,h+=d,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;e[r+h]=255&s,h+=d,s/=256,l-=8);e[r+h-d]|=128*g};var eC="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function eB(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var t=new Uint8Array(e);return Object.setPrototypeOf(t,eN.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function eN(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return eI(e)}return eP(e,t,r)}function eP(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!eN.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|eH(e,t),n=eB(r),o=n.write(e,t);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(e5(e,Uint8Array)){var t=new Uint8Array(e);return eD(t.buffer,t.byteOffset,t.byteLength)}return eF(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(e5(e,ArrayBuffer)||e&&e5(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(e5(e,SharedArrayBuffer)||e&&e5(e.buffer,SharedArrayBuffer)))return eD(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return eN.from(n,t,r);var o=function(e){if(eN.isBuffer(e)){var t,r=0|eM(e.length),n=eB(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?eB(0):eF(e):"Buffer"===e.type&&Array.isArray(e.data)?eF(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return eN.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function eq(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function eI(e){return eq(e),eB(e<0?0:0|eM(e))}function eF(e){for(var t=e.length<0?0:0|eM(e.length),r=eB(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function eD(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),eN.prototype),n)}function eM(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function eH(e,t){if(eN.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||e5(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return e0(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return e1(e).length;default:if(o)return n?-1:e0(e).length// assume utf8
;t=(""+t).toLowerCase(),o=!0}}function e$(e,t,r){var n,i,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=e6[e[i]];return o}(this,t,r);case"utf8":case"utf-8":return eV(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?o(this):o(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function ez(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function eJ(e,t,r,n,o){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=eN.from(t,n)),eN.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:eW(e,t,r,n,o));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):eW(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function eW(e,t,r,n,o){var i,s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){var c=-1;for(i=r;i<a;i++)if(l(e,i)===l(t,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===u)return c*s}else -1!==c&&(i-=i-c),c=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var f=!0,p=0;p<u;p++)if(l(e,i+p)!==l(t,p)){f=!1;break}if(f)return i}return -1}function eV(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,s,a,u,l=e[o],c=null,f=l>239?4:l>223?3:l>191?2:1;if(o+f<=r)switch(f){case 1:l<128&&(c=l);break;case 2:(192&(i=e[o+1]))==128&&(u=(31&l)<<6|63&i)>127&&(c=u);break;case 3:i=e[o+1],s=e[o+2],(192&i)==128&&(192&s)==128&&(u=(15&l)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:i=e[o+1],s=e[o+2],a=e[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(u=(15&l)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(c=u)}null===c?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
c=65533,f=1):c>65535&&(// encode to utf16 (surrogate pair dance)
c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function eK(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function eG(e,t,r,n,o,i){if(!eN.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function eZ(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function eX(e,t,r,n,o){return t=+t,r>>>=0,o||eZ(e,t,r,4,34028234663852886e22,-34028234663852886e22),s(e,t,r,n,23,4),r+4}function eY(e,t,r,n,o){return t=+t,r>>>=0,o||eZ(e,t,r,8,17976931348623157e292,-17976931348623157e292),s(e,t,r,n,52,8),r+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */eN.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),eN.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(eN.prototype,"parent",{enumerable:!0,get:function(){if(eN.isBuffer(this))return this.buffer}}),Object.defineProperty(eN.prototype,"offset",{enumerable:!0,get:function(){if(eN.isBuffer(this))return this.byteOffset}}),eN.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/eN.from=function(e,t,r){return eP(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(eN.prototype,Uint8Array.prototype),Object.setPrototypeOf(eN,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/eN.alloc=function(e,t,r){return(eq(e),e<=0)?eB(e):void 0!==t?"string"==typeof r?eB(e).fill(t,r):eB(e).fill(t):eB(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */eN.allocUnsafe=function(e){return eI(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */eN.allocUnsafeSlow=function(e){return eI(e)},eN.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==eN.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},eN.compare=function(e,t){if(e5(e,Uint8Array)&&(e=eN.from(e,e.offset,e.byteLength)),e5(t,Uint8Array)&&(t=eN.from(t,t.offset,t.byteLength)),!eN.isBuffer(e)||!eN.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},eN.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},eN.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return eN.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=eN.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(e5(i,Uint8Array))o+i.length>n.length?eN.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(eN.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},eN.byteLength=eH,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
eN.prototype._isBuffer=!0,eN.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ez(this,t,t+1);return this},eN.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ez(this,t,t+3),ez(this,t+1,t+2);return this},eN.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ez(this,t,t+7),ez(this,t+1,t+6),ez(this,t+2,t+5),ez(this,t+3,t+4);return this},eN.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?eV(this,0,e):e$.apply(this,arguments)},eN.prototype.toLocaleString=eN.prototype.toString,eN.prototype.equals=function(e){if(!eN.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===eN.compare(this,e)},eN.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},eC&&(eN.prototype[eC]=eN.prototype.inspect),eN.prototype.compare=function(e,t,r,n,o){if(e5(e,Uint8Array)&&(e=eN.from(e,e.offset,e.byteLength)),!eN.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var i=o-n,s=r-t,a=Math.min(i,s),u=this.slice(n,o),l=e.slice(t,r),c=0;c<a;++c)if(u[c]!==l[c]){i=u[c],s=l[c];break}return i<s?-1:s<i?1:0},eN.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},eN.prototype.indexOf=function(e,t,r){return eJ(this,e,t,r,!0)},eN.prototype.lastIndexOf=function(e,t,r){return eJ(this,e,t,r,!1)},eN.prototype.write=function(e,t,r,n){// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,u,l,c,f,p=this.length-t;if((void 0===r||r>p)&&(r=p),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var h=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(a!=a)break;e[r+s]=a}return s}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,e2(e0(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=t,a=r,e2(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,l=r,e2(e1(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=r,e2(function(e,t){for(var r,n,o=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-c),this,c,f);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},eN.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},eN.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,eN.prototype),n)},eN.prototype.readUintLE=eN.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eK(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},eN.prototype.readUintBE=eN.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eK(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},eN.prototype.readUint8=eN.prototype.readUInt8=function(e,t){return e>>>=0,t||eK(e,1,this.length),this[e]},eN.prototype.readUint16LE=eN.prototype.readUInt16LE=function(e,t){return e>>>=0,t||eK(e,2,this.length),this[e]|this[e+1]<<8},eN.prototype.readUint16BE=eN.prototype.readUInt16BE=function(e,t){return e>>>=0,t||eK(e,2,this.length),this[e]<<8|this[e+1]},eN.prototype.readUint32LE=eN.prototype.readUInt32LE=function(e,t){return e>>>=0,t||eK(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},eN.prototype.readUint32BE=eN.prototype.readUInt32BE=function(e,t){return e>>>=0,t||eK(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},eN.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eK(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},eN.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eK(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},eN.prototype.readInt8=function(e,t){return(e>>>=0,t||eK(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},eN.prototype.readInt16LE=function(e,t){e>>>=0,t||eK(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},eN.prototype.readInt16BE=function(e,t){e>>>=0,t||eK(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},eN.prototype.readInt32LE=function(e,t){return e>>>=0,t||eK(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},eN.prototype.readInt32BE=function(e,t){return e>>>=0,t||eK(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},eN.prototype.readFloatLE=function(e,t){return e>>>=0,t||eK(e,4,this.length),i(this,e,!0,23,4)},eN.prototype.readFloatBE=function(e,t){return e>>>=0,t||eK(e,4,this.length),i(this,e,!1,23,4)},eN.prototype.readDoubleLE=function(e,t){return e>>>=0,t||eK(e,8,this.length),i(this,e,!0,52,8)},eN.prototype.readDoubleBE=function(e,t){return e>>>=0,t||eK(e,8,this.length),i(this,e,!1,52,8)},eN.prototype.writeUintLE=eN.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;eG(this,e,t,r,o,0)}var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},eN.prototype.writeUintBE=eN.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;eG(this,e,t,r,o,0)}var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},eN.prototype.writeUint8=eN.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,1,255,0),this[t]=255&e,t+1},eN.prototype.writeUint16LE=eN.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},eN.prototype.writeUint16BE=eN.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},eN.prototype.writeUint32LE=eN.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},eN.prototype.writeUint32BE=eN.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eN.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);eG(this,e,t,r,o-1,-o)}var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},eN.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);eG(this,e,t,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},eN.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},eN.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},eN.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},eN.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},eN.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eG(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eN.prototype.writeFloatLE=function(e,t,r){return eX(this,e,t,!0,r)},eN.prototype.writeFloatBE=function(e,t,r){return eX(this,e,t,!1,r)},eN.prototype.writeDoubleLE=function(e,t,r){return eY(this,e,t,!0,r)},eN.prototype.writeDoubleBE=function(e,t,r){return eY(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
eN.prototype.copy=function(e,t,r,n){if(!eN.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
eN.prototype.fill=function(e,t,r,n){// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!eN.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=eN.isBuffer(e)?e:eN.from(e,n),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%a]}return this};// HELPER FUNCTIONS
// ================
var eQ=/[^+/0-9A-Za-z-_]/g;function e0(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],s=0;s<n;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function e1(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],i=n[1],s=new eT((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)t=eR[e.charCodeAt(r)]<<18|eR[e.charCodeAt(r+1)]<<12|eR[e.charCodeAt(r+2)]<<6|eR[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===i&&(t=eR[e.charCodeAt(r)]<<2|eR[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===i&&(t=eR[e.charCodeAt(r)]<<10|eR[e.charCodeAt(r+1)]<<4|eR[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(eQ,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function e2(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function e5(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var e6=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function e4(e){return eA.isPlainObject(e)||eA.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function e3(e){return eA.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function e8(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=e3(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}const e7=eA.toFlatObject(eA,{},null,function(e){return/^is[A-Z]/.test(e)});var e9=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(e,t,r){if(!eA.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
r=eA.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!eA.isUndefined(t[e])});let n=r.metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&eA.isSpecCompliantForm(t);if(!eA.isFunction(o))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(eA.isDate(e))return e.toISOString();if(!u&&eA.isBlob(e))throw new e_("Blob is not supported. Use a Buffer instead.");return eA.isArrayBuffer(e)||eA.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):eN.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(e,r,o){let a=e;if(e&&!o&&"object"==typeof e){if(eA.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var u;if(eA.isArray(e)&&(u=e,eA.isArray(u)&&!u.some(e4))||(eA.isFileList(e)||eA.endsWith(r,"[]"))&&(a=eA.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=e3(r),a.forEach(function(e,n){eA.isUndefined(e)||null===e||t.append(!0===s?e8([r],n,i):null===s?r:r+"[]",l(e))}),!1)}}return!!e4(e)||(t.append(e8(o,r,i),l(e)),!1)}let f=[],p=Object.assign(e7,{defaultVisitor:c,convertValue:l,isVisitable:e4});if(!eA.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!eA.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),eA.forEach(r,function(r,i){let s=!(eA.isUndefined(r)||null===r)&&o.call(t,r,eA.isString(i)?i.trim():i,n,p);!0===s&&e(r,n?n.concat(i):[i])}),f.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function te(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tt(e,t){this._pairs=[],e&&e9(e,this,t)}const tr=tt.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function to(e,t,r){let n;/*eslint no-param-reassign:0*/if(!t)return e;let o=r&&r.encode||tn,i=r&&r.serialize;if(n=i?i(t,r):eA.isURLSearchParams(t)?t.toString():new tt(t,r).toString(o)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}tr.append=function(e,t){this._pairs.push([e,t])},tr.toString=function(e){let t=e?function(t){return e.call(this,t,te)}:te;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var ti=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){eA.forEach(this.handlers,function(t){null!==t&&e(t)})}},ts={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ta="undefined"!=typeof URLSearchParams?URLSearchParams:tt,tu="undefined"!=typeof FormData?FormData:null,tl="undefined"!=typeof Blob?Blob:null;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const tc=("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document,tf="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tp={classes:{URLSearchParams:ta,FormData:tu,Blob:tl},isStandardBrowserEnv:tc,isStandardBrowserWebWorkerEnv:tf,protocols:["http","https","file","blob","url","data"]},th=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(eA.isFormData(e)&&eA.isFunction(e.entries)){let t={};return eA.forEachEntry(e,(e,r)=>{!function e(t,r,n,o){let i=t[o++],s=Number.isFinite(+i),a=o>=t.length;if(i=!i&&eA.isArray(n)?n.length:i,a)return eA.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&eA.isObject(n[i])||(n[i]=[]);let u=e(t,r,n[i],o);return u&&eA.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!s}(eA.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const td={transitional:ts,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=eA.isObject(e);i&&eA.isHTMLForm(e)&&(e=new FormData(e));let s=eA.isFormData(e);if(s)return o&&o?JSON.stringify(th(e)):e;if(eA.isArrayBuffer(e)||eA.isBuffer(e)||eA.isStream(e)||eA.isFile(e)||eA.isBlob(e))return e;if(eA.isArrayBufferView(e))return e.buffer;if(eA.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=e,u=this.formSerializer,e9(a,new tp.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return tp.isNode&&eA.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=eA.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return e9(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(eA.isString(e))try{return(0,JSON.parse)(e),eA.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||td.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&eA.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw e_.from(e,e_.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tp.classes.FormData,Blob:tp.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};eA.forEach(["delete","get","head","post","put","patch"],e=>{td.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const tg=eA.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */tm=e=>{let t,r,n;let o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&tg[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o};const ty=Symbol("internals");function tb(e){return e&&String(e).trim().toLowerCase()}function tv(e){return!1===e||null==e?e:eA.isArray(e)?e.map(tv):String(e)}const tw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tE(e,t,r,n,o){if(eA.isFunction(n))return n.call(this,t,r);if(o&&(t=r),eA.isString(t)){if(eA.isString(n))return -1!==t.indexOf(n);if(eA.isRegExp(n))return n.test(t)}}class tS{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function o(e,t,r){let o=tb(t);if(!o)throw Error("header name must be a non-empty string");let i=eA.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||t]=tv(e))}let i=(e,t)=>eA.forEach(e,(e,r)=>o(e,r,t));return eA.isPlainObject(e)||e instanceof this.constructor?i(e,t):eA.isString(e)&&(e=e.trim())&&!tw(e)?i(tm(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=tb(e)){let r=eA.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(eA.isFunction(t))return t.call(this,e,r);if(eA.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tb(e)){let r=eA.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||tE(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function o(e){if(e=tb(e)){let o=eA.findKey(r,e);o&&(!t||tE(r,r[o],o,t))&&(delete r[o],n=!0)}}return eA.isArray(e)?e.forEach(o):o(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let o=t[r];(!e||tE(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){let t=this,r={};return eA.forEach(this,(n,o)=>{let i=eA.findKey(r,o);if(i){t[i]=tv(n),delete t[o];return}let s=e?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(o).trim();s!==o&&delete t[o],t[s]=tv(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return eA.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&eA.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[ty]=this[ty]={accessors:{}},r=t.accessors,n=this.prototype;function o(e){let t=tb(e);r[t]||(!function(e,t){let r=eA.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(n,e),r[t]=!0)}return eA.isArray(e)?e.forEach(o):o(e),this}}function tA(e,t){let r=this||td,n=t||r,o=tS.from(n.headers),i=n.data;return eA.forEach(e,function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function t_(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function tL(e,t,r){e_.call(this,null==e?"canceled":e,e_.ERR_CANCELED,t,r),this.name="CanceledError"}tS.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),eA.reduceDescriptors(tS.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),eA.freezeMethods(tS),eA.inherits(tL,e_,{__CANCEL__:!0});var tO=tp.isStandardBrowserEnv?{write:function(e,t,r,n,o,i){let s=[];s.push(e+"="+encodeURIComponent(t)),eA.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),eA.isString(n)&&s.push("path="+n),eA.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tk(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tR=tp.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(e){let n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=n(window.location.href),function(t){let r=eA.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},tT=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),o=Array(e),i=0,s=0;return t=void 0!==t?t:1e3,function(a){let u=Date.now(),l=o[s];r||(r=u),n[i]=a,o[i]=u;let c=s,f=0;for(;c!==i;)f+=n[c++],c%=e;if((i=(i+1)%e)===s&&(s=(s+1)%e),u-r<t)return;let p=l&&u-l;return p?Math.round(1e3*f/p):void 0}};function tU(e,t){let r=0,n=tT(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a),l=i<=s;r=i;let c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const tx="undefined"!=typeof XMLHttpRequest;var tj=tx&&function(e){return new Promise(function(t,r){let n,o,i=e.data,s=tS.from(e.headers).normalize(),a=e.responseType;function u(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}eA.isFormData(i)&&(tp.isStandardBrowserEnv||tp.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?eA.isString(o=s.getContentType())&&s.setContentType(o.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let l=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+r))}let c=tk(e.baseURL,e.url);function f(){if(!l)return;// Prepare the response
let n=tS.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?l.response:l.responseText,i={data:o,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new e_("Request failed with status code "+r.status,[e_.ERR_BAD_REQUEST,e_.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),u()},function(e){r(e),u()},i),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(e.method.toUpperCase(),to(c,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=e.timeout,"onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(f)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(r(new e_("Request aborted",e_.ECONNABORTED,e,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new e_("Network Error",e_.ERR_NETWORK,e,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||ts;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new e_(t,n.clarifyTimeoutError?e_.ETIMEDOUT:e_.ECONNABORTED,e,l)),// Clean up request
l=null},tp.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||tR(c))&&e.xsrfCookieName&&tO.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===i&&s.setContentType(null),"setRequestHeader"in l&&eA.forEach(s.toJSON(),function(e,t){l.setRequestHeader(t,e)}),eA.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",tU(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",tU(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{l&&(r(!t||t.type?new tL(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let p=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(c);if(p&&-1===tp.protocols.indexOf(p)){r(new e_("Unsupported protocol "+p+":",e_.ERR_BAD_REQUEST,e));return}// Send the request
l.send(i||null)})};const tC={http:null,xhr:tj};eA.forEach(tC,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});const tB=e=>`- ${e}`,tN=e=>eA.isFunction(e)||null===e||!1===e;var tP={getAdapter:e=>{let t,r;e=eA.isArray(e)?e:[e];let{length:n}=e,o={};for(let i=0;i<n;i++){let n;if(r=t=e[i],!tN(t)&&void 0===(r=tC[(n=String(t)).toLowerCase()]))throw new e_(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let e=Object.entries(o).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new e_("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(tB).join("\n"):" "+tB(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:tC};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function tq(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tL(null,e)}function tI(e){tq(e),e.headers=tS.from(e.headers),// Transform request data
e.data=tA.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=tP.getAdapter(e.adapter||td.adapter);return t(e).then(function(t){return tq(e),// Transform response data
t.data=tA.call(e,e.transformResponse,t),t.headers=tS.from(t.headers),t},function(t){return!t_(t)&&(tq(e),t&&t.response&&(t.response.data=tA.call(e,e.transformResponse,t.response),t.response.headers=tS.from(t.response.headers))),Promise.reject(t)})}const tF=e=>e instanceof tS?e.toJSON():e;function tD(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function n(e,t,r){return eA.isPlainObject(e)&&eA.isPlainObject(t)?eA.merge.call({caseless:r},e,t):eA.isPlainObject(t)?eA.merge({},t):eA.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function o(e,t,r){return eA.isUndefined(t)?eA.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}// eslint-disable-next-line consistent-return
function i(e,t){if(!eA.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return eA.isUndefined(t)?eA.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(tF(e),tF(t),!0)};return eA.forEach(Object.keys(Object.assign({},e,t)),function(n){let i=u[n]||o,s=i(e[n],t[n],n);eA.isUndefined(s)&&i!==a||(r[n]=s)}),r}const tM="1.5.1",tH={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tH[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const t$={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tH.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tM+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===e)throw new e_(n(o," has been removed"+(t?" in "+t:"")),e_.ERR_DEPRECATED);return t&&!t$[o]&&(t$[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var tz={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new e_("options must be an object",e_.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let i=n[o],s=t[i];if(s){let t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new e_("option "+i+" must be "+r,e_.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new e_("Unknown option "+i,e_.ERR_BAD_OPTION)}},validators:tH};const tJ=tz.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class tW{constructor(e){this.defaults=e,this.interceptors={request:new ti,response:new ti}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=tD(this.defaults,t);let{transitional:o,paramsSerializer:i,headers:s}=t;void 0!==o&&tz.assertOptions(o,{silentJSONParsing:tJ.transitional(tJ.boolean),forcedJSONParsing:tJ.transitional(tJ.boolean),clarifyTimeoutError:tJ.transitional(tJ.boolean)},!1),null!=i&&(eA.isFunction(i)?t.paramsSerializer={serialize:i}:tz.assertOptions(i,{encode:tJ.function,serialize:tJ.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&eA.merge(s.common,s[t.method]);s&&eA.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=tS.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(l=l&&e.synchronous,u.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let f=0;if(!l){let e=[tI.bind(this),void 0];for(e.unshift.apply(e,u),e.push.apply(e,c),n=e.length,r=Promise.resolve(t);f<n;)r=r.then(e[f++],e[f++]);return r}n=u.length;let p=t;for(f=0;f<n;){let e=u[f++],t=u[f++];try{p=e(p)}catch(e){t.call(this,e);break}}try{r=tI.call(this,p)}catch(e){return Promise.reject(e)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(e){e=tD(this.defaults,e);let t=tk(e.baseURL,e.url);return to(t,e.params,e.paramsSerializer)}}eA.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/tW.prototype[e]=function(t,r){return this.request(tD(r||{},{method:e,url:t,data:(r||{}).data}))}}),eA.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,o){return this.request(tD(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}tW.prototype[e]=t(),tW.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class tV{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new tL(e,n,o),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new tV(function(t){e=t});return{token:t,cancel:e}}}const tK={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tK).forEach(([e,t])=>{tK[t]=e});// Create the default instance to be exported
const tG=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new tW(t),n=J(tW.prototype.request,r);return eA.extend(n,tW.prototype,r,{allOwnKeys:!0}),eA.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(tD(t,r))},n}(td);// Expose Axios class to allow class inheritance
tG.Axios=tW,// Expose Cancel & CancelToken
tG.CanceledError=tL,tG.CancelToken=tV,tG.isCancel=t_,tG.VERSION=tM,tG.toFormData=e9,// Expose AxiosError class
tG.AxiosError=e_,// alias for CanceledError for backward compatibility
tG.Cancel=tG.CanceledError,// Expose all/spread
tG.all=function(e){return Promise.all(e)},tG.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
tG.isAxiosError=function(e){return eA.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
tG.mergeConfig=tD,tG.AxiosHeaders=tS,tG.formToJSON=e=>th(eA.isHTMLForm(e)?new FormData(e):e),tG.getAdapter=tP.getAdapter,tG.HttpStatusCode=tK,tG.default=tG;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:tZ,AxiosError:tX,CanceledError:tY,isCancel:tQ,CancelToken:t0,VERSION:t1,all:t2,Cancel:t5,isAxiosError:t6,spread:t4,toFormData:t3,AxiosHeaders:t8,HttpStatusCode:t7,formToJSON:t9,getAdapter:re,mergeConfig:rt}=tG,rr=async()=>{try{let e=await tG.get("https://books-backend.p.goit.global/books/category-list");return e.data}catch(e){console.log(e)}},rn=async()=>{try{let e=await tG.get("https://books-backend.p.goit.global/books/top-books");return e.data}catch(e){console.log(e)}},ro=async e=>{try{let t=await tG.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t.data}catch(e){console.log(e)}},ri=async e=>{try{let t=await tG.get(`https://books-backend.p.goit.global/books/${e}`);return t.data}catch(e){console.log(e)}},rs=document.querySelector(".side-bar__categories");(async function(){let e=await rr(),t=e.map(e=>`<li tabindex='-1' class="side-bar__categories-item">${e.list_name}</li>`).join("");rs.insertAdjacentHTML("beforeend",t)})(),c("a7nVE");const ra=document.querySelector(".books-gallery");!async function(){let e=await rn(),t=e.slice(0,4);console.log(e);let r=t.map(e=>`<div>
        <h2 class="books-gallery__category-title">${e.list_name}</h2>
    <ul class="books-gallery__section">
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[0].book_image}"> <h3>${e.books[0].title}</h3><h4>${e.books[0].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[1].book_image}"> <h3>${e.books[1].title}</h3><h4>${e.books[1].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[2].book_image}"> <h3>${e.books[2].title}</h3><h4>${e.books[2].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[3].book_image}"> <h3>${e.books[3].title}</h3><h4>${e.books[3].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[4].book_image}"> <h3>${e.books[4].title}</h3><h4>${e.books[4].author}</h4> </li>
    </ul></div>`).join("");ra.insertAdjacentHTML("beforeend",r)}();const ru=document.querySelector(".category__title"),rl=document.querySelector(".category__list"),rc=document.querySelector(".side-bar__categories"),rf=document.querySelector(".books-gallery"),rp=async e=>{let t=await ro(e),r=t.map(e=>`<li class="category__item" data-id="${e._id}">
        <div class="category__cover"><img class="category__image" alt="book cover" src="${e.book_image}"/></div>
        <div class="category__image-description"><h4 class="category__book-title">${e.title}</h4>
        <p class="category__book-author">${e.author}</p></div>
    </li>`).join("");rl.innerHTML=r},rh=async e=>{if(e.target.closest("li")){rf.classList.add("gallery-hidden");let t=e.target.closest("li").textContent,r=t.split(" "),n=r.pop(),o=r.join(" ");ru.innerHTML=`${o} <span class="last-word-color">${n}</span>`,// title.textContent = selectedCategory;
rl.innerHTML="",rp(t)}};rc.addEventListener("click",rh),c("1fSMk"),c("2DTLi");// console.log('pop-up.js');
let rd=null;const rg=document.querySelector(".popup__img"),rm=document.querySelector(".popup__amazon"),ry=document.querySelector(".popup__description-details"),rb=document.querySelector(".popup__btn-add"),rv=document.querySelector(".popup__btn-remove"),rw=document.querySelector(".popup__btn-close"),rE=document.querySelector(".backdrop-popup"),rS=document.querySelector(".popup"),rA=document.querySelector(".popup__comment"),r_=document.querySelector(".popup__shops-list"),rL=document.querySelector(".category__list"),rO=document.querySelector(".books-gallery");let rk=!1;const rR=()=>{rk?(rb.classList.add("popup__btn-text-hidden"),rv.classList.remove("popup__btn-text-hidden"),rA.classList.remove("popup__btn-text-hidden")):(rb.classList.remove("popup__btn-text-hidden"),rv.classList.add("popup__btn-text-hidden"),rA.classList.add("popup__btn-text-hidden"))},rT=async e=>{let t=await ri(e);rd=t;let r=JSON.parse(localStorage.getItem("books"))||[];rk=r.some(e=>e._id===t._id),rR(),rg.src=t.book_image,rm.href=t.amazon_product_url;let n=`<h2 class="popup__title">${t.title}</h2>
                <p class="popup__author">${t.author}</p>
                <p class="popup__text">${t.description}</p>`;ry.innerHTML=n;let o=t.buy_links.slice(1).map(e=>`<li class="popup__shops-item"><a class="popup__shops-link" href="${e.url}" target="_blank">${e.name}</a></li>`).join("");r_.innerHTML=o},rU=()=>{rE.classList.add("popup-is-hidden"),rw.removeEventListener("click",rU),rE.removeEventListener("click",rx),document.removeEventListener("keydown",rj)},rx=e=>{e.target===rE&&rU()};rS.addEventListener("click",e=>{e.stopPropagation()});const rj=e=>{"Escape"===e.code&&rU()},rC=e=>{if(e.target.closest("li")){let t=e.target.closest("li").dataset.id;rT(t),rw.addEventListener("click",rU),rE.addEventListener("click",rx),document.addEventListener("keydown",rj),rE.classList.remove("popup-is-hidden")}};rL.addEventListener("click",rC),rO.addEventListener("click",rC),rv.addEventListener("click",()=>{if(!rd)return;let e=JSON.parse(localStorage.getItem("books"))||[],t=e.filter(e=>e._id!==rd._id);localStorage.setItem("books",JSON.stringify(t)),rk=!1,rR()}),rb.addEventListener("click",()=>{if(!rd)return;let e=JSON.parse(localStorage.getItem("books"))||[],t=e.some(e=>e._id===rd._id);t||(e.push(rd),localStorage.setItem("books",JSON.stringify(e))),rk=!0,rR()});// toggleDarkThemePopUp();
// openPopUp();
// localStorage.clear();
//# sourceMappingURL=index.1e03f1b5.js.map

//# sourceMappingURL=index.1e03f1b5.js.map
