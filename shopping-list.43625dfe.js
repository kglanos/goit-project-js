function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=globalThis,n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o=i.register;o("ifJdc",function(t,n){e(t.exports,"register",()=>r,e=>r=e);var r,i=new Map;r=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("kM5jX",function(e,t){(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{let n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");//bodyScrollLock can be added to block page scrolling when mobile-menu is opened. To use this code we need to install body-scroll-lock using "npm install body-scroll-lock"
// const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
};t.addEventListener("click",r),n.addEventListener("click",r),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1));// bodyScrollLock.enableBodyScroll(document.body);
})})();let n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");r.disabled=!0,n.addEventListener("click",()=>{setTimeout(()=>{n.disabled=!0,r.disabled=!1},500)}),r.addEventListener("click",()=>{setTimeout(()=>{r.disabled=!0,n.disabled=!1},500)})}),o("haS5e",function(e,t){let n=document.querySelector(".theme-button"),r=document.querySelector("body"),i=localStorage.getItem("theme")||"light-theme";r.classList.add(i),n.addEventListener("click",()=>{"dark-theme"===i?(r.classList.remove("dark-theme"),i="light-theme"):(r.classList.add("dark-theme"),i="dark-theme"),localStorage.setItem("theme",i)})}),o("fQwj1",function(e,t){(()=>{let e={currentURL:window.location.href,homeLink:document.querySelector(".header__navigation-link--home"),shoppingListLink:document.querySelector(".header__navigation-link--shopping-list"),mobileHomeLink:document.querySelector(".menu-container__navigation-link"),mobileShoppingListLink:document.querySelector(".menu-container__navigation-link--shopping-list"),mobileShoppingListLinkIcon:document.querySelector(".menu-container__navigation-icon")};e.currentURL.includes("index.html")?(e.homeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.color="var(--denary-font-color)"):e.currentURL.includes("shopping-list.html")&&(e.shoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.color="var(--denary-font-color)",e.mobileShoppingListLinkIcon.style.fill="var(--secondary-icon-color)")})()}),o("a7nVE",function(e,t){var n=i("7l8RX");let r=document.querySelector(".support__list"),o=document.querySelector(".next"),a=document.querySelector(".back"),c=(0,n.default).map(function({url:e,title:t,img:n},r){let i=(r+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${i}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${n}" 1x
                src="${n}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function l(e){r.style.transform=`translateY(${e}px)`,o.classList.toggle("btn-hidden"),a.classList.toggle("btn-hidden")}r.innerHTML=c,o.addEventListener("click",function(){l(-152)}),a.addEventListener("click",()=>{l(0)})}),o("7l8RX",function(t,n){e(t.exports,"default",()=>r);var r=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(i("iDuzi")).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(i("aifyG")).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(i("2up6P")).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(i("gjlMe")).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(i("b7z3C")).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(i("6m7xZ")).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(i("58KpR")).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(i("gQ9iT")).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(i("eNTiA")).href}]}),o("iDuzi",function(e,t){e.exports=new URL("save-the-children.e7cb9515.png",import.meta.url).toString()}),o("aifyG",function(e,t){e.exports=new URL("project-hope.65587b00.png",import.meta.url).toString()}),o("2up6P",function(e,t){e.exports=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString()}),o("gjlMe",function(e,t){e.exports=new URL("razom.3639a3ee.png",import.meta.url).toString()}),o("b7z3C",function(e,t){e.exports=new URL("action-against-hunger.6319825b.png",import.meta.url).toString()}),o("6m7xZ",function(e,t){e.exports=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString()}),o("58KpR",function(e,t){e.exports=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString()}),o("gQ9iT",function(e,t){e.exports=new URL("world-vision.8a329a07.png",import.meta.url).toString()}),o("eNTiA",function(e,t){e.exports=new URL("united24.9625498b.png",import.meta.url).toString()}),o("2DTLi",function(e,t){// import { Notify } from 'notiflix';
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
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');
// const inputPassword = document.querySelector('#user-password');
// const registrationForm = document.querySelector('.registration-modal-form');
// let user;
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// signInLink.addEventListener('click', e => {
//   e.preventDefault();
//   // registrationForm.elements.userName.style.display = 'none';
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
//         (user = userCredential.user),
//           document.querySelector('[registration-data-modal]').classList.toggle('is-hidden'),
//           document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
//           document.querySelector('.user-btn').classList.remove('visually-hidden'),
//           document.querySelector('.log-out-btn').classList.remove('visually-hidden');
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
//         const errorCode = error.code;
//         const errorMessage = error.message;
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
}),o("865h4",function(e,t){var n=i("g269p");let r=document.querySelector(".scroll-to-top"),o=(n&&n.__esModule?n.default:n)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function n(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(r.addEventListener("click",n),r.classList.remove("unvisually")):(r.classList.add("unvisually"),r.addEventListener("click",n))},500);window.addEventListener("scroll",o)}),o("g269p",function(e,t){var n=i("cawi6"),r=i("e9Eyz");e.exports=/**
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
 */function(e,t,i){var o=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return r(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})}}),o("cawi6",function(e,t){var n=i("e9Eyz"),r=i("1HwuP"),o=i("lbaLz"),a=Math.max,c=Math.min;e.exports=/**
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
 */function(e,t,i){var l,u,s,p,f,d,m=0,g=!1,h=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=l,r=u;return l=u=void 0,m=t,p=e.apply(r,n)}function S(e){var n=e-d,r=e-m;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===d||n>=t||n<0||h&&r>=s}function y(){var e,n,i,o=r();if(S(o))return w(o);// Restart the timer.
f=setTimeout(y,(e=o-d,n=o-m,i=t-e,h?c(i,s-n):i))}function w(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,v&&l)?b(e):(l=u=void 0,p))}function L(){var e,n=r(),i=S(n);if(l=arguments,u=this,d=n,i){if(void 0===f)return(// Reset any `maxWait` timer.
m=e=d,// Start the timer for the trailing edge.
f=setTimeout(y,t),g?b(e):p);if(h)return(// Handle invocations in a tight loop.
clearTimeout(f),f=setTimeout(y,t),b(d))}return void 0===f&&(f=setTimeout(y,t)),p}return t=o(t)||0,n(i)&&(g=!!i.leading,s=(h="maxWait"in i)?a(o(i.maxWait)||0,t):s,v="trailing"in i?!!i.trailing:v),L.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=d=u=f=void 0},L.flush=function(){return void 0===f?p:w(r())},L}}),o("e9Eyz",function(e,t){e.exports=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}}),o("1HwuP",function(e,t){var n=i("8hDRs");e.exports=function(){return n.Date.now()}}),o("8hDRs",function(e,t){var n=i("jc27j"),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o}),o("jc27j",function(e,n){/** Detect free variable `global` from Node.js. */var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}),o("lbaLz",function(e,t){var n=i("jDStY"),r=i("e9Eyz"),o=i("tMqsp"),a=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=/**
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
 */function(e){if("number"==typeof e)return e;if(o(e))return a;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var i=l.test(e);return i||u.test(e)?s(e.slice(2),i?2:8):c.test(e)?a:+e}}),o("jDStY",function(e,t){var n=i("2JI2I"),r=/^\s+/;e.exports=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,n(e)+1).replace(r,""):e}}),o("2JI2I",function(e,t){/** Used to match a single whitespace character. */var n=/\s/;e.exports=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}}),o("tMqsp",function(e,t){var n=i("iQRu3"),r=i("7S6hp");e.exports=/**
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
 */function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}}),o("iQRu3",function(e,t){var n=i("bpT63"),r=i("6tEGU"),o=i("aqTTO"),a=n?n.toStringTag:void 0;e.exports=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):o(e)}}),o("bpT63",function(e,t){/** Built-in value references. */var n=i("8hDRs").Symbol;e.exports=n}),o("6tEGU",function(e,t){var n=i("bpT63"),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,c=n?n.toStringTag:void 0;e.exports=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var i=a.call(e);return r&&(t?e[c]=n:delete e[c]),i}}),o("aqTTO",function(e,t){/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var n=Object.prototype.toString;e.exports=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return n.call(e)}}),o("7S6hp",function(e,t){e.exports=/**
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
 */function(e){return null!=e&&"object"==typeof e}}),i("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["haV3F","shopping-list.43625dfe.js","2usor","save-the-children.e7cb9515.png","2AGy0","project-hope.65587b00.png","7adUJ","international-medical-corps.bb14a1fb.png","2KExU","razom.3639a3ee.png","30dzm","action-against-hunger.6319825b.png","e1omX","sergiy-prytula.d33ef8f5.png","8anbz","medecins-sans-frontieres.0a6ef6af.png","6tfSA","world-vision.8a329a07.png","g1g53","united24.9625498b.png"]'));//# sourceMappingURL=shopping-list.43625dfe.js.map

//# sourceMappingURL=shopping-list.43625dfe.js.map
