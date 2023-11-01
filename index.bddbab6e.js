function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register,i("kM5jX"),i("haS5e");var a={},l={},n={};n=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var s={},c={},d={};d="object"==typeof t&&t&&t.Object===Object&&t;/** Detect free variable `self`. */var u="object"==typeof self&&self&&self.Object===Object&&self;c=d||u||Function("return this")(),s=function(){return c.Date.now()};var b={},g={},_={},v=/\s/;_=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&v.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var y=/^\s+/;g=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,_(e)+1).replace(y,""):e};var f={},k={},h={};h=c.Symbol;var m={},p=Object.prototype,$=p.hasOwnProperty,L=p.toString,j=h?h.toStringTag:void 0;m=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=$.call(e,j),o=e[j];try{e[j]=void 0;var r=!0}catch(e){}var i=L.call(e);return r&&(t?e[j]=o:delete e[j]),i};var T={},E=Object.prototype.toString;T=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return E.call(e)};/** Built-in value references. */var S=h?h.toStringTag:void 0;k=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":S&&S in Object(e)?m(e):T(e)};var w={};w=/**
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
 */function(e){return null!=e&&"object"==typeof e},f=/**
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
 */function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==k(e)};/** Used as references for various `Number` constants. */var O=0/0,x=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,q=/^0o[0-7]+$/i,H=parseInt;b=/**
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
 */function(e){if("number"==typeof e)return e;if(f(e))return O;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=g(e);var o=M.test(e);return o||q.test(e)?H(e.slice(2),o?2:8):x.test(e)?O:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var C=Math.max,N=Math.min;l=/**
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
 */function(e,t,o){var r,i,a,l,c,d,u=0,g=!1,_=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(t){var o=r,a=i;return r=i=void 0,u=t,l=e.apply(a,o)}function f(e){var o=e-d,r=e-u;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===d||o>=t||o<0||_&&r>=a}function k(){var e,o,r,i=s();if(f(i))return h(i);// Restart the timer.
c=setTimeout(k,(e=i-d,o=i-u,r=t-e,_?N(r,a-o):r))}function h(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(c=void 0,v&&r)?y(e):(r=i=void 0,l))}function m(){var e,o=s(),a=f(o);if(r=arguments,i=this,d=o,a){if(void 0===c)return(// Reset any `maxWait` timer.
u=e=d,// Start the timer for the trailing edge.
c=setTimeout(k,t),g?y(e):l);if(_)return(// Handle invocations in a tight loop.
clearTimeout(c),c=setTimeout(k,t),y(d))}return void 0===c&&(c=setTimeout(k,t)),l}return t=b(t)||0,n(o)&&(g=!!o.leading,a=(_="maxWait"in o)?C(b(o.maxWait)||0,t):a,v="trailing"in o?!!o.trailing:v),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=d=i=c=void 0},m.flush=function(){return void 0===c?l:h(s())},m},a=/**
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
 */function(e,t,o){var r=!0,i=!0;if("function"!=typeof e)throw TypeError("Expected a function");return n(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),l(e,t,{leading:r,maxWait:t,trailing:i})};const U=document.querySelector(".scroll-to-top"),A=/*@__PURE__*/e(a)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function o(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(U.addEventListener("click",o),U.classList.remove("unvisually")):(U.classList.add("unvisually"),U.addEventListener("click",o))},500);window.addEventListener("scroll",A),i("fQwj1");var B=(i("lXnOV"),i("lXnOV")),D=i("7IoHk");const I=document.querySelector(".category__title"),R=document.querySelector(".category__list"),V=document.querySelector(".side-bar__categories"),X=document.querySelector(".books-gallery"),W=document.querySelector(".category"),F=async t=>{let o=await (0,B.fetchBooksByCategory)(t);if(0===o.length){/*@__PURE__*/e(D).Notify.info("Unfortunately, we do not have these books at the moment.");return}let r=o.map(e=>`<li class="category__item" data-id="${e._id}">
        <div class="category__cover"><img class="category__image" alt="book cover" src="${e.book_image}"/></div>
        <div class="category__image-description"><h4 class="category__book-title">${e.title}</h4>
        <p class="category__book-author">${e.author}</p></div> 
    </li>`).join("");R.innerHTML=r},P=async e=>{if(e.target.closest("li")&&"All categories"!=e.target.textContent){X.classList.add("gallery-hidden"),W.classList.remove("gallery-hidden");let t=e.target.closest("li").textContent,o=t.split(" "),r=o.pop(),i=o.join(" ");I.innerHTML=`${i} <span class="last-word-color">${r}</span>`,R.innerHTML="",F(t)}else if("SEE MORE"===e.target.textContent){X.classList.add("gallery-hidden"),W.classList.remove("gallery-hidden");let t=e.target.name,o=t.split(" "),r=o.pop(),i=o.join(" ");I.innerHTML=`${i} <span class="last-word-color">${r}</span>`,R.innerHTML="",F(t)}};V.addEventListener("click",P);var D=i("7IoHk");const Q=document.querySelector(".books-gallery"),Y=document.querySelector(".side-bar__categories-item"),z=document.querySelector(".category");!async function(){let t=await (0,B.fetchTopBooksInCategories)(),o=t.slice(0,4);if(0===o.length){/*@__PURE__*/e(D).Notify.info("Unfortunately, we do not have these books at the moment.");return}let r=o.map(e=>`<div>
        <h2 class="books-gallery__category-title">${e.list_name}</h2>
    <ul class="books-gallery__section">

    <li data-id="${e.books[0]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${e.books[0].book_image}"> </div> <h3 class="books-gallery__book-title">${e.books[0].title}</h3><h4 class="books-gallery__book-author">${e.books[0].author}</h4> </li>

    <li class="is-hidden-tablet" data-id="${e.books[1]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${e.books[1].book_image}"> </div><h3 class="books-gallery__book-title">${e.books[1].title}</h3><h4 class="books-gallery__book-author">${e.books[1].author}</h4> </li>

    <li class="is-hidden-tablet" data-id="${e.books[2]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${e.books[2].book_image}"> </div> <h3 class="books-gallery__book-title">${e.books[2].title}</h3><h4 class="books-gallery__book-author">${e.books[2].author}</h4> </li>

    <li class="is-hidden-desktop" data-id="${e.books[3]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${e.books[3].book_image}"> </div> <h3 class="books-gallery__book-title">${e.books[3].title}</h3><h4 class="books-gallery__book-author">${e.books[3].author}</h4> </li>

    <li class="is-hidden-desktop" data-id="${e.books[4]._id}"><div class="category__cover"><img class="category__image" alt="book cover" src="${e.books[4].book_image}"> </div> <h3 class="books-gallery__book-title">${e.books[4].title}</h3><h4 class="books-gallery__book-author">${e.books[4].author}</h4> </li>

    </ul>
    
    <div class="books-gallery__button-wrapper"><button name="${e.list_name}" type="button" class="books-gallery__button">SEE MORE</button></div>
    </div>`).join("");Q.insertAdjacentHTML("beforeend",r),function(){let e=document.querySelectorAll(".books-gallery__button");e.forEach(e=>e.addEventListener("click",P))}()}(),Y.addEventListener("click",()=>{Q.classList.remove("gallery-hidden"),z.classList.add("gallery-hidden")});var B=i("lXnOV");const G=document.querySelector(".side-bar__categories");(async function(){let e=await (0,B.fetchBooksCategoryList)(),t=e.map(e=>`<li tabindex='-1' class="side-bar__categories-item">${e.list_name}</li>`).join("");G.insertAdjacentHTML("beforeend",t)})(),i("a7nVE"),i("1fSMk"),i("2DTLi"),i("eNCUi");//# sourceMappingURL=index.bddbab6e.js.map

//# sourceMappingURL=index.bddbab6e.js.map
