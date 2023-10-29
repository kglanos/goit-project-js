function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o.register;i("kM5jX",function(e,t){(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{let r="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");//bodyScrollLock can be added to block page scrolling when mobile-menu is opened. To use this code we need to install body-scroll-lock using "npm install body-scroll-lock"
// const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
// bodyScrollLock[scrollLockMethod](document.body);
};t.addEventListener("click",n),r.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1));// bodyScrollLock.enableBodyScroll(document.body);
})})();let r=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");n.disabled=!0,r.addEventListener("click",()=>{setTimeout(()=>{r.disabled=!0,n.disabled=!1},500)}),n.addEventListener("click",()=>{setTimeout(()=>{n.disabled=!0,r.disabled=!1},500)})}),i("haS5e",function(e,t){let r=document.querySelector(".theme-button"),n=document.querySelector("body"),o=localStorage.getItem("theme")||"light-theme";n.classList.add(o),r.addEventListener("click",()=>{let e=document.querySelector(".popup__btn-add"),t=document.querySelector(".popup__btn-remove"),r=document.querySelector(".popup"),i=document.querySelector(".popup__comment"),a=document.querySelector(".popup__icon-close"),s=document.querySelector(".popup__amazon");"dark-theme"===o?(n.classList.remove("dark-theme"),r.classList.remove("popup-dark-theme"),a.classList.remove("icon-close-dark-theme"),e.classList.remove("btn-add-dark-theme"),t.classList.remove("btn-remove-dark-theme"),i.classList.remove("comment-dark-theme"),s.classList.remove("amazon-dark-theme"),o="light-theme"):(n.classList.add("dark-theme"),r.classList.add("popup-dark-theme"),a.classList.add("icon-close-dark-theme"),e.classList.add("btn-add-dark-theme"),t.classList.add("btn-remove-dark-theme"),i.classList.add("comment-dark-theme"),s.classList.add("amazon-dark-theme"),o="dark-theme"),localStorage.setItem("theme",o)})}),i("fQwj1",function(e,t){(()=>{let e={currentURL:window.location.href,homeLink:document.querySelector(".header__navigation-link--home"),shoppingListLink:document.querySelector(".header__navigation-link--shopping-list"),mobileHomeLink:document.querySelector(".menu-container__navigation-link"),mobileShoppingListLink:document.querySelector(".menu-container__navigation-link--shopping-list"),mobileShoppingListLinkIcon:document.querySelector(".menu-container__navigation-icon")};e.currentURL.includes("index.html")?(e.homeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileHomeLink.style.color="var(--denary-font-color)"):e.currentURL.includes("shopping-list.html")&&(e.shoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.backgroundColor="var(--primary-object-background-color)",e.mobileShoppingListLink.style.color="var(--denary-font-color)",e.mobileShoppingListLinkIcon.style.fill="var(--secondary-icon-color)")})()}),i("a7nVE",function(e,t){var r=o("7l8RX");let n=document.querySelector(".support__list"),i=document.querySelector(".next"),a=document.querySelector(".back"),s=(0,r.default).map(function({url:e,title:t,img:r},n){let o=(n+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${o}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${r}" 1x
                src="${r}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function u(e){n.style.transform=`translateY(${e}px)`,i.classList.toggle("btn-hidden"),a.classList.toggle("btn-hidden")}n.innerHTML=s,i.addEventListener("click",function(){u(-152)}),a.addEventListener("click",()=>{u(0)})}),i("7l8RX",function(t,r){e(t.exports,"default",()=>n);var n=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(o("iDuzi")).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(o("aifyG")).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(o("2up6P")).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(o("gjlMe")).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(o("b7z3C")).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(o("6m7xZ")).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(o("58KpR")).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(o("gQ9iT")).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(o("eNTiA")).href}]}),i("iDuzi",function(e,t){e.exports=new URL("save-the-children.e7cb9515.png",import.meta.url).toString()}),i("aifyG",function(e,t){e.exports=new URL("project-hope.65587b00.png",import.meta.url).toString()}),i("2up6P",function(e,t){e.exports=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString()}),i("gjlMe",function(e,t){e.exports=new URL("razom.3639a3ee.png",import.meta.url).toString()}),i("b7z3C",function(e,t){e.exports=new URL("action-against-hunger.6319825b.png",import.meta.url).toString()}),i("6m7xZ",function(e,t){e.exports=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString()}),i("58KpR",function(e,t){e.exports=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString()}),i("gQ9iT",function(e,t){e.exports=new URL("world-vision.8a329a07.png",import.meta.url).toString()}),i("eNTiA",function(e,t){e.exports=new URL("united24.9625498b.png",import.meta.url).toString()}),i("1fSMk",function(e,t){let r=document.querySelector(".sign-up-btn"),n=document.querySelector(".user-btn"),o=document.querySelector(".registration-backdrop"),i=document.querySelector(".sign-up-link"),a=document.querySelector(".sign-in-link"),s=document.querySelector(".sign-up-modal"),u=document.querySelector(".sign-in-modal"),l=document.querySelector(".name-input-container"),f=document.querySelector(".registration-close-btn"),c=document.querySelector(".registration-modal-form"),d=document.querySelector(".input-name"),h=document.querySelector(".input-email"),p=document.querySelector(".input-password"),g=document.querySelector(".name-error"),m=document.querySelector(".email-error"),y=document.querySelector(".password-error"),b=document.querySelector(".log-out-btn"),v=()=>{o.classList.toggle("registration-hidden")},w=/^[\p{L}\s]+$/u,E=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,S=/^.{7,}$/,A=(e,t,r)=>{let n=r.every(e=>e.classList.contains("valid"));n?(e.disabled=!1,e.classList.remove("disabled"),t.disabled=!1,t.classList.remove("disabled")):(e.disabled=!0,e.classList.add("disabled"),t.disabled=!0,t.classList.add("disabled"))},L=(e,t,r,n,o,i)=>{r.test(e.value)?(e.classList.add("valid"),e.classList.remove("invalid"),t.classList.add("warning-valid"),t.classList.remove("warning-invalid")):(e.classList.remove("valid"),e.classList.add("invalid"),t.classList.remove("warning-valid"),t.classList.add("warning-invalid")),A(n,o,i)},R=[d,h,p];d.addEventListener("input",()=>L(d,g,w,s,u,R)),d.addEventListener("blur",()=>L(d,g,w,s,u,R)),h.addEventListener("input",()=>L(h,m,E,s,u,R)),h.addEventListener("blur",()=>L(h,m,E,s,u,R)),p.addEventListener("input",()=>L(p,y,S,s,u,R)),p.addEventListener("blur",()=>L(p,y,S,s,u,R));let x=()=>{R.forEach(e=>{e.classList.remove("invalid"),e.classList.add("valid")}),[g,m,y].forEach(e=>{e.classList.remove("warning-invalid"),e.classList.add("warning-valid")}),s.disabled=!1,s.classList.remove("disabled"),u.disabled=!1,u.classList.remove("disabled")};r.addEventListener("click",()=>{c.reset(),x(),o.classList.toggle("registration-hidden")}),a.addEventListener("click",()=>{u.classList.remove("btn-sing-in-up-hidden"),s.classList.add("btn-sing-in-up-hidden"),l.classList.add("name-input-hidden"),g.classList.add("warning-valid"),g.classList.remove("warning-invalid")}),i.addEventListener("click",()=>{u.classList.add("btn-sing-in-up-hidden"),s.classList.remove("btn-sing-in-up-hidden"),l.classList.remove("name-input-hidden")}),f.addEventListener("click",v),c.addEventListener("submit",e=>{e.preventDefault(),v(),r.classList.toggle("visually-hidden"),n.classList.toggle("visually-hidden"),c.reset()}),n.addEventListener("click",()=>{b.classList.toggle("visually-hidden")})}),i("lXnOV",function(t,r){e(t.exports,"fetchBooksCategoryList",()=>i),e(t.exports,"fetchTopBooksInCategories",()=>a),e(t.exports,"fetchBooksByCategory",()=>s),e(t.exports,"fetchBookById",()=>u),o("hGVxz");var n=o("9d9Fx");let i=async()=>{try{let e=await (0,n.default).get("https://books-backend.p.goit.global/books/category-list");return e.data}catch(e){console.log(e)}},a=async()=>{try{let e=await (0,n.default).get("https://books-backend.p.goit.global/books/top-books");return e.data}catch(e){console.log(e)}},s=async e=>{try{let t=await (0,n.default).get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t.data}catch(e){console.log(e)}},u=async e=>{try{let t=await (0,n.default).get(`https://books-backend.p.goit.global/books/${e}`);return t.data}catch(e){console.log(e)}}}),i("hGVxz",function(t,r){e(t.exports,"default",()=>o("9d9Fx").default);var n=o("9d9Fx");// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:i,AxiosError:a,CanceledError:s,isCancel:u,CancelToken:l,VERSION:f,all:c,Cancel:d,isAxiosError:h,spread:p,toFormData:g,AxiosHeaders:m,HttpStatusCode:y,formToJSON:b,getAdapter:v,mergeConfig:w}=n.default}),i("9d9Fx",function(t,r){e(t.exports,"default",()=>S);var n=o("i4ijA"),i=o("lwbau"),a=o("eCrWh"),s=o("kSe7Y"),u=o("bJncD"),l=o("2eGDI"),f=o("7XT9I"),c=o("9GGcx"),d=o("5SIUr"),h=o("8WPkr"),p=o("gZZY4"),g=o("k5sPl"),m=o("4rx4g"),y=o("4Qexm"),b=o("fRBtE"),v=o("9o9qV"),w=o("dcCu5");// Create the default instance to be exported
let E=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new a.default(t),o=(0,i.default)(a.default.prototype.request,r);return(// Copy axios.prototype to instance
(0,n.default).extend(o,a.default.prototype,r,{allOwnKeys:!0}),// Copy context to instance
(0,n.default).extend(o,r,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(r){return e((0,s.default)(t,r))},o)}(u.default);// Expose Axios class to allow class inheritance
E.Axios=a.default,// Expose Cancel & CancelToken
E.CanceledError=f.default,E.CancelToken=c.default,E.isCancel=d.default,E.VERSION=h.VERSION,E.toFormData=p.default,// Expose AxiosError class
E.AxiosError=g.default,// alias for CanceledError for backward compatibility
E.Cancel=E.CanceledError,// Expose all/spread
E.all=function(e){return Promise.all(e)},E.spread=m.default,// Expose isAxiosError
E.isAxiosError=y.default,// Expose mergeConfig
E.mergeConfig=s.default,E.AxiosHeaders=b.default,E.formToJSON=e=>(0,l.default)((0,n.default).isHTMLForm(e)?new FormData(e):e),E.getAdapter=v.default.getAdapter,E.HttpStatusCode=w.default,E.default=E;var S=E}),i("i4ijA",function(r,n){e(r.exports,"default",()=>D);var i,a,s=o("lwbau");// utils is a library of generic helper functions non-specific to axios
let{toString:u}=Object.prototype,{getPrototypeOf:l}=Object,f=(i=Object.create(null),e=>{let t=u.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())}),c=e=>(e=e.toLowerCase(),t=>f(t)===e),d=e=>t=>typeof t===e,{isArray:h}=Array,p=d("undefined"),g=c("ArrayBuffer"),m=d("string"),y=d("function"),b=d("number"),v=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==f(e))return!1;let t=l(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},E=c("Date"),S=c("File"),A=c("Blob"),L=c("FileList"),R=c("URLSearchParams");/**
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
 */function x(e,t,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),h(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;for(n=0;n<a;n++)o=i[n],t.call(null,e[o],o,e)}}}function O(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),o=n.length;for(;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}let k=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,T=e=>!p(e)&&e!==k,U=(a="undefined"!=typeof Uint8Array&&l(Uint8Array),e=>a&&e instanceof a),B=c("HTMLFormElement"),C=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),j=c("RegExp"),_=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};x(r,(r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)}),Object.defineProperties(e,n)},P="abcdefghijklmnopqrstuvwxyz",N="0123456789",I={DIGIT:N,ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+N},F=c("AsyncFunction");var D={isArray:h,isArrayBuffer:g,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=f(e))||// detect form-data instance
"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer)},isString:m,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:w,isUndefined:p,isDate:E,isFile:S,isBlob:A,isRegExp:j,isFunction:y,isStream:e=>v(e)&&y(e.pipe),isURLSearchParams:R,isTypedArray:U,isFileList:L,forEach:x,merge:/**
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
 */function e(){let{caseless:t}=T(this)&&this||{},r={},n=(n,o)=>{let i=t&&O(r,o)||o;w(r[i])&&w(n)?r[i]=e(r[i],n):w(n)?r[i]=e({},n):h(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&x(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(x(t,(t,n)=>{r&&y(t)?e[n]=(0,s.default)(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)a=o[i],(!n||n(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=!1!==r&&l(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:f,kindOfTest:c,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(h(e))return e;let t=e.length;if(!b(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],o=n.call(e);for(;(r=o.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:B,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:_,freezeMethods:e=>{_(e,(t,r)=>{// skip restricted props in strict mode
if(y(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(y(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(h(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:O,global:k,isContextDefined:T,ALPHABET:I,generateString:(e=16,t=I.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let o=h(e)?[]:{};return x(e,(e,t)=>{let i=r(e,n+1);p(i)||(o[t]=i)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:F,isThenable:e=>e&&(v(e)||y(e))&&y(e.then)&&y(e.catch)}}),i("lwbau",function(t,r){e(t.exports,"default",()=>n);function n(e,t){return function(){return e.apply(t,arguments)}}}),i("eCrWh",function(t,r){e(t.exports,"default",()=>p);var n=o("i4ijA"),i=o("h9Lf1"),a=o("itbxz"),s=o("2u9Ce"),u=o("kSe7Y"),l=o("kHvG3"),f=o("hd4Q7"),c=o("fRBtE");let d=f.default.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class h{constructor(e){this.defaults=e,this.interceptors={request:new a.default,response:new a.default}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,o;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,u.default)(this.defaults,t);let{transitional:i,paramsSerializer:a,headers:l}=t;void 0!==i&&(0,f.default).assertOptions(i,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=a&&((0,n.default).isFunction(a)?t.paramsSerializer={serialize:a}:(0,f.default).assertOptions(a,{encode:d.function,serialize:d.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let h=l&&(0,n.default).merge(l.common,l[t.method]);l&&(0,n.default).forEach(["delete","get","head","post","put","patch","common"],e=>{delete l[e]}),t.headers=(0,c.default).concat(h,l);// filter out skipped interceptors
let p=[],g=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(g=g&&e.synchronous,p.unshift(e.fulfilled,e.rejected))});let m=[];this.interceptors.response.forEach(function(e){m.push(e.fulfilled,e.rejected)});let y=0;if(!g){let e=[(0,s.default).bind(this),void 0];for(e.unshift.apply(e,p),e.push.apply(e,m),o=e.length,r=Promise.resolve(t);y<o;)r=r.then(e[y++],e[y++]);return r}o=p.length;let b=t;for(y=0;y<o;){let e=p[y++],t=p[y++];try{b=e(b)}catch(e){t.call(this,e);break}}try{r=(0,s.default).call(this,b)}catch(e){return Promise.reject(e)}for(y=0,o=m.length;y<o;)r=r.then(m[y++],m[y++]);return r}getUri(e){e=(0,u.default)(this.defaults,e);let t=(0,l.default)(e.baseURL,e.url);return(0,i.default)(t,e.params,e.paramsSerializer)}}// Provide aliases for supported request methods
(0,n.default).forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/h.prototype[e]=function(t,r){return this.request((0,u.default)(r||{},{method:e,url:t,data:(r||{}).data}))}}),(0,n.default).forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,o){return this.request((0,u.default)(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)});var p=h}),i("h9Lf1",function(t,r){e(t.exports,"default",()=>s);var n=o("i4ijA"),i=o("5B7zY");/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t,r){let o;/*eslint no-param-reassign:0*/if(!t)return e;let s=r&&r.encode||a,u=r&&r.serialize;if(o=u?u(t,r):(0,n.default).isURLSearchParams(t)?t.toString():new(0,i.default)(t,r).toString(s)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}}),i("5B7zY",function(t,r){e(t.exports,"default",()=>u);var n=o("gZZY4");/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function i(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function a(e,t){this._pairs=[],e&&(0,n.default)(e,this,t)}let s=a.prototype;s.append=function(e,t){this._pairs.push([e,t])},s.toString=function(e){let t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var u=a}),i("gZZY4",function(t,r){e(t.exports,"default",()=>d);var n=o("i4ijA"),i=o("k5sPl"),a=o("l52nF"),s=o("cNvas").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function u(e){return(0,n.default).isPlainObject(e)||(0,n.default).isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function l(e){return(0,n.default).endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function f(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=l(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}let c=(0,n.default).toFlatObject(n.default,{},null,function(e){return/^is[A-Z]/.test(e)});var d=/**
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
 */function(e,t,r){if(!(0,n.default).isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new(a.default||FormData),// eslint-disable-next-line no-param-reassign
r=(0,n.default).toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!(0,n.default).isUndefined(t[e])});let o=r.metaTokens,d=r.visitor||b,h=r.dots,p=r.indexes,g=r.Blob||"undefined"!=typeof Blob&&Blob,m=g&&(0,n.default).isSpecCompliantForm(t);if(!(0,n.default).isFunction(d))throw TypeError("visitor must be a function");function y(e){if(null===e)return"";if((0,n.default).isDate(e))return e.toISOString();if(!m&&(0,n.default).isBlob(e))throw new i.default("Blob is not supported. Use a Buffer instead.");return(0,n.default).isArrayBuffer(e)||(0,n.default).isTypedArray(e)?m&&"function"==typeof Blob?new Blob([e]):s.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function b(e,r,i){let a=e;if(e&&!i&&"object"==typeof e){if((0,n.default).endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=o?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var s;if((0,n.default).isArray(e)&&(s=e,(0,n.default).isArray(s)&&!s.some(u))||((0,n.default).isFileList(e)||(0,n.default).endsWith(r,"[]"))&&(a=(0,n.default).toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=l(r),a.forEach(function(e,o){(0,n.default).isUndefined(e)||null===e||t.append(!0===p?f([r],o,h):null===p?r:r+"[]",y(e))}),!1)}}return!!u(e)||(t.append(f(i,r,h),y(e)),!1)}let v=[],w=Object.assign(c,{defaultVisitor:b,convertValue:y,isVisitable:u});if(!(0,n.default).isObject(e))throw TypeError("data must be an object");return function e(r,o){if(!(0,n.default).isUndefined(r)){if(-1!==v.indexOf(r))throw Error("Circular reference detected in "+o.join("."));v.push(r),(0,n.default).forEach(r,function(r,i){let a=!((0,n.default).isUndefined(r)||null===r)&&d.call(t,r,(0,n.default).isString(i)?i.trim():i,o,w);!0===a&&e(r,o?o.concat(i):[i])}),v.pop()}}(e),t}}),i("k5sPl",function(t,r){e(t.exports,"default",()=>u);var n=o("i4ijA");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function i(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}(0,n.default).inherits(i,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:(0,n.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let a=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{s[e]={value:e}}),Object.defineProperties(i,s),Object.defineProperty(a,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
i.from=(e,t,r,o,s,u)=>{let l=Object.create(a);return(0,n.default).toFlatObject(e,l,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),i.call(l,e.message,t,r,o,s),l.cause=e,l.name=e.name,u&&Object.assign(l,u),l};var u=i}),i("l52nF",function(t,r){e(t.exports,"default",()=>n);// eslint-disable-next-line strict
var n=null}),i("cNvas",function(t,r){e(t.exports,"Buffer",()=>n,e=>n=e),e(t.exports,"INSPECT_MAX_BYTES",()=>i,e=>i=e);var n,i,a=o("3g1et"),s=o("1AWVL"),u="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function l(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var t=new Uint8Array(e);return Object.setPrototypeOf(t,f.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function f(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return h(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!f.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|y(e,t),n=l(r),o=n.write(e,t);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(C(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(C(e,ArrayBuffer)||e&&C(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(C(e,SharedArrayBuffer)||e&&C(e.buffer,SharedArrayBuffer)))return g(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return f.from(n,t,r);var o=function(e){if(f.isBuffer(e)){var t,r=0|m(e.length),n=l(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?l(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return f.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return d(e),l(e<0?0:0|m(e))}function p(e){for(var t=e.length<0?0:0|m(e.length),r=l(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function g(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),f.prototype),n)}function m(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function y(e,t){if(f.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||C(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return T(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(e).length;default:if(o)return n?-1:T(e).length// assume utf8
;t=(""+t).toLowerCase(),o=!0}}function b(e,t,r){var n,o,i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=j[e[i]];return o}(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return n=t,o=r,0===n&&o===this.length?a.fromByteArray(this):a.fromByteArray(this.slice(n,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function v(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function w(e,t,r,n,o){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=f.from(t,n)),f.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:E(e,t,r,n,o));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):E(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function E(e,t,r,n,o){var i,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,u/=2,r/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){var f=-1;for(i=r;i<s;i++)if(l(e,i)===l(t,-1===f?0:i-f)){if(-1===f&&(f=i),i-f+1===u)return f*a}else -1!==f&&(i-=i-f),f=-1}else for(r+u>s&&(r=s-u),i=r;i>=0;i--){for(var c=!0,d=0;d<u;d++)if(l(e,i+d)!==l(t,d)){c=!1;break}if(c)return i}return -1}function S(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,a,s,u,l=e[o],f=null,c=l>239?4:l>223?3:l>191?2:1;if(o+c<=r)switch(c){case 1:l<128&&(f=l);break;case 2:(192&(i=e[o+1]))==128&&(u=(31&l)<<6|63&i)>127&&(f=u);break;case 3:i=e[o+1],a=e[o+2],(192&i)==128&&(192&a)==128&&(u=(15&l)<<12|(63&i)<<6|63&a)>2047&&(u<55296||u>57343)&&(f=u);break;case 4:i=e[o+1],a=e[o+2],s=e[o+3],(192&i)==128&&(192&a)==128&&(192&s)==128&&(u=(15&l)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(f=u)}null===f?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
f=65533,c=1):f>65535&&(// encode to utf16 (surrogate pair dance)
f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),o+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function A(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function L(e,t,r,n,o,i){if(!f.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function R(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function x(e,t,r,n,o){return t=+t,r>>>=0,o||R(e,t,r,4,34028234663852886e22,-34028234663852886e22),s.write(e,t,r,n,23,4),r+4}function O(e,t,r,n,o){return t=+t,r>>>=0,o||R(e,t,r,8,17976931348623157e292,-17976931348623157e292),s.write(e,t,r,n,52,8),r+8}n=f,i=50,/**
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
 */f.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/f.from=function(e,t,r){return c(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/f.alloc=function(e,t,r){return(d(e),e<=0)?l(e):void 0!==t?"string"==typeof r?l(e).fill(t,r):l(e).fill(t):l(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */f.allocUnsafe=function(e){return h(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */f.allocUnsafeSlow=function(e){return h(e)},f.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==f.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},f.compare=function(e,t){if(C(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),C(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(e)||!f.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return f.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=f.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(C(i,Uint8Array))o+i.length>n.length?f.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(f.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},f.byteLength=y,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
f.prototype._isBuffer=!0,f.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},f.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},f.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},f.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?S(this,0,e):b.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(e){if(!f.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===f.compare(this,e)},f.prototype.inspect=function(){var e="",t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(f.prototype[u]=f.prototype.inspect),f.prototype.compare=function(e,t,r,n,o){if(C(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var i=o-n,a=r-t,s=Math.min(i,a),u=this.slice(n,o),l=e.slice(t,r),c=0;c<s;++c)if(u[c]!==l[c]){i=u[c],a=l[c];break}return i<a?-1:a<i?1:0},f.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},f.prototype.indexOf=function(e,t,r){return w(this,e,t,r,!0)},f.prototype.lastIndexOf=function(e,t,r){return w(this,e,t,r,!1)},f.prototype.write=function(e,t,r,n){// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,a,s,u,l,f,c,d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var h=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(s!=s)break;e[r+a]=s}return a}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,B(T(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return a=t,s=r,B(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,l=r,B(U(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=t,c=r,B(function(e,t){for(var r,n,o=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-f),this,f,c);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,f.prototype),n)},f.prototype.readUintLE=f.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||A(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},f.prototype.readUintBE=f.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||A(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},f.prototype.readUint8=f.prototype.readUInt8=function(e,t){return e>>>=0,t||A(e,1,this.length),this[e]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(e,t){return e>>>=0,t||A(e,2,this.length),this[e]|this[e+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(e,t){return e>>>=0,t||A(e,2,this.length),this[e]<<8|this[e+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(e,t){return e>>>=0,t||A(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(e,t){return e>>>=0,t||A(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},f.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||A(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},f.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||A(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},f.prototype.readInt8=function(e,t){return(e>>>=0,t||A(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},f.prototype.readInt16LE=function(e,t){e>>>=0,t||A(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(e,t){e>>>=0,t||A(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(e,t){return e>>>=0,t||A(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},f.prototype.readInt32BE=function(e,t){return e>>>=0,t||A(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},f.prototype.readFloatLE=function(e,t){return e>>>=0,t||A(e,4,this.length),s.read(this,e,!0,23,4)},f.prototype.readFloatBE=function(e,t){return e>>>=0,t||A(e,4,this.length),s.read(this,e,!1,23,4)},f.prototype.readDoubleLE=function(e,t){return e>>>=0,t||A(e,8,this.length),s.read(this,e,!0,52,8)},f.prototype.readDoubleBE=function(e,t){return e>>>=0,t||A(e,8,this.length),s.read(this,e,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;L(this,e,t,r,o,0)}var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;L(this,e,t,r,o,0)}var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},f.prototype.writeUint8=f.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,255,0),this[t]=255&e,t+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);L(this,e,t,r,o-1,-o)}var i=0,a=1,s=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},f.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);L(this,e,t,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+r},f.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},f.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},f.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},f.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},f.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},f.prototype.writeFloatLE=function(e,t,r){return x(this,e,t,!0,r)},f.prototype.writeFloatBE=function(e,t,r){return x(this,e,t,!1,r)},f.prototype.writeDoubleLE=function(e,t,r){return O(this,e,t,!0,r)},f.prototype.writeDoubleBE=function(e,t,r){return O(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
f.prototype.copy=function(e,t,r,n){if(!f.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
f.prototype.fill=function(e,t,r,n){// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=f.isBuffer(e)?e:f.from(e,n),s=a.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};// HELPER FUNCTIONS
// ================
var k=/[^+/0-9A-Za-z-_]/g;function T(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],a=0;a<n;++a){// is surrogate component
if((r=e.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function U(e){return a.toByteArray(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(k,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function B(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function C(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var j=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}()}),i("3g1et",function(t,r){e(t.exports,"toByteArray",()=>n,e=>n=e),e(t.exports,"fromByteArray",()=>o,e=>o=e),n=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],i=n[1],u=new s((o+i)*3/4-i),l=0,f=i>0?o-4:o;for(r=0;r<f;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;return 2===i&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,u[l++]=255&t),1===i&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t),u},o=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],a=0,s=r-n;a<s;a+=16383// must be multiple of 3
)o.push(function(e,t,r){for(var n,o=[],a=t;a<r;a+=3)o.push(i[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?o.push(i[(t=e[r-1])>>2]+i[t<<4&63]+"=="):2===n&&o.push(i[(t=(e[r-2]<<8)+e[r-1])>>10]+i[t>>4&63]+i[t<<2&63]+"="),o.join("")};for(var n,o,i=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,f=u.length;l<f;++l)i[l]=u[l],a[u.charCodeAt(l)]=l;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63}),i("1AWVL",function(t,r){var n,o;e(t.exports,"read",()=>n,e=>n=e),e(t.exports,"write",()=>o,e=>o=e),n=function(e,t,r,n,o){var i,a,s=8*o-n-1,u=(1<<s)-1,l=u>>1,f=-7,c=r?o-1:0,d=r?-1:1,h=e[t+c];for(c+=d,i=h&(1<<-f)-1,h>>=-f,f+=s;f>0;i=256*i+e[t+c],c+=d,f-=8);for(a=i&(1<<-f)-1,i>>=-f,f+=n;f>0;a=256*a+e[t+c],c+=d,f-=8);if(0===i)i=1-l;else{if(i===u)return a?NaN:(h?-1:1)*(1/0);a+=Math.pow(2,n),i-=l}return(h?-1:1)*a*Math.pow(2,i-n)},o=function(e,t,r,n,o,i){var a,s,u,l=8*i-o-1,f=(1<<l)-1,c=f>>1,d=23===o?5960464477539062e-23:0,h=n?0:i-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+c>=1?t+=d/u:t+=d*Math.pow(2,1-c),t*u>=2&&(a++,u/=2),a+c>=f?(s=0,a=f):a+c>=1?(s=(t*u-1)*Math.pow(2,o),a+=c):(s=t*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;e[r+h]=255&s,h+=p,s/=256,o-=8);for(a=a<<o|s,l+=o;l>0;e[r+h]=255&a,h+=p,a/=256,l-=8);e[r+h-p]|=128*g}}),i("itbxz",function(t,r){e(t.exports,"default",()=>i);var n=o("i4ijA"),i=class{constructor(){this.handlers=[]}/**
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
   */forEach(e){(0,n.default).forEach(this.handlers,function(t){null!==t&&e(t)})}}}),i("2u9Ce",function(t,r){e(t.exports,"default",()=>c);var n=o("iQhXV"),i=o("5SIUr"),a=o("bJncD"),s=o("7XT9I"),u=o("fRBtE"),l=o("9o9qV");/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function f(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s.default(null,e)}function c(e){f(e),e.headers=(0,u.default).from(e.headers),// Transform request data
e.data=(0,n.default).call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=(0,l.default).getAdapter(e.adapter||a.default.adapter);return t(e).then(function(t){return f(e),// Transform response data
t.data=(0,n.default).call(e,e.transformResponse,t),t.headers=(0,u.default).from(t.headers),t},function(t){return!(0,i.default)(t)&&(f(e),t&&t.response&&(t.response.data=(0,n.default).call(e,e.transformResponse,t.response),t.response.headers=(0,u.default).from(t.response.headers))),Promise.reject(t)})}}),i("iQhXV",function(t,r){e(t.exports,"default",()=>s);var n=o("i4ijA"),i=o("bJncD"),a=o("fRBtE");function s(e,t){let r=this||i.default,o=t||r,s=(0,a.default).from(o.headers),u=o.data;return(0,n.default).forEach(e,function(e){u=e.call(r,u,s.normalize(),t?t.status:void 0)}),s.normalize(),u}}),i("bJncD",function(t,r){e(t.exports,"default",()=>d);var n=o("i4ijA"),i=o("k5sPl"),a=o("fK4vu"),s=o("gZZY4"),u=o("aVTCj"),l=o("8KDYS"),f=o("2eGDI");let c={transitional:a.default,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let o=t.getContentType()||"",i=o.indexOf("application/json")>-1,a=(0,n.default).isObject(e);a&&(0,n.default).isHTMLForm(e)&&(e=new FormData(e));let l=(0,n.default).isFormData(e);if(l)return i&&i?JSON.stringify((0,f.default)(e)):e;if((0,n.default).isArrayBuffer(e)||(0,n.default).isBuffer(e)||(0,n.default).isStream(e)||(0,n.default).isFile(e)||(0,n.default).isBlob(e))return e;if((0,n.default).isArrayBufferView(e))return e.buffer;if((0,n.default).isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(a){if(o.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((r=(0,n.default).isFileList(e))||o.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return(0,s.default)(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||i?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if((0,n.default).isString(e))try{return(0,JSON.parse)(e),(0,n.default).trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||c.transitional,r=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&(0,n.default).isString(e)&&(r&&!this.responseType||o)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&o){if("SyntaxError"===e.name)throw(0,i.default).from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:l.default.classes.FormData,Blob:l.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,n.default).forEach(["delete","get","head","post","put","patch"],e=>{c.headers[e]={}});var d=c}),i("fK4vu",function(t,r){e(t.exports,"default",()=>n);var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),i("aVTCj",function(t,r){e(t.exports,"default",()=>s);var n=o("i4ijA"),i=o("gZZY4"),a=o("8KDYS");function s(e,t){return(0,i.default)(e,new a.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,o){return a.default.isNode&&(0,n.default).isBuffer(e)?(this.append(t,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}}),i("8KDYS",function(t,r){let n;e(t.exports,"default",()=>f);var i=o("hbIyF"),a=o("jDCoP"),s=o("cuQ85");/**
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
 */let u=("undefined"==typeof navigator||"ReactNative"!==(n=navigator.product)&&"NativeScript"!==n&&"NS"!==n)&&"undefined"!=typeof window&&"undefined"!=typeof document,l="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var f={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:a.default,Blob:s.default},isStandardBrowserEnv:u,isStandardBrowserWebWorkerEnv:l,protocols:["http","https","file","blob","url","data"]}}),i("hbIyF",function(t,r){e(t.exports,"default",()=>i);var n=o("5B7zY"),i="undefined"!=typeof URLSearchParams?URLSearchParams:n.default}),i("jDCoP",function(t,r){e(t.exports,"default",()=>n);var n="undefined"!=typeof FormData?FormData:null}),i("cuQ85",function(t,r){e(t.exports,"default",()=>n);var n="undefined"!=typeof Blob?Blob:null}),i("2eGDI",function(t,r){e(t.exports,"default",()=>i);var n=o("i4ijA"),i=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if((0,n.default).isFormData(e)&&(0,n.default).isFunction(e.entries)){let t={};return(0,n.default).forEachEntry(e,(e,r)=>{!function e(t,r,o,i){let a=t[i++],s=Number.isFinite(+a),u=i>=t.length;if(a=!a&&(0,n.default).isArray(o)?o.length:a,u)return(0,n.default).hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s;o[a]&&(0,n.default).isObject(o[a])||(o[a]=[]);let l=e(t,r,o[a],i);return l&&(0,n.default).isArray(o[a])&&(o[a]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(o[a])),!s}((0,n.default).matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null}}),i("fRBtE",function(t,r){e(t.exports,"default",()=>d);var n=o("i4ijA"),i=o("gwcWo");let a=Symbol("internals");function s(e){return e&&String(e).trim().toLowerCase()}function u(e){return!1===e||null==e?e:(0,n.default).isArray(e)?e.map(u):String(e)}let l=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function f(e,t,r,o,i){if((0,n.default).isFunction(o))return o.call(this,t,r);if(i&&(t=r),(0,n.default).isString(t)){if((0,n.default).isString(o))return -1!==t.indexOf(o);if((0,n.default).isRegExp(o))return o.test(t)}}class c{constructor(e){e&&this.set(e)}set(e,t,r){let o=this;function a(e,t,r){let i=s(t);if(!i)throw Error("header name must be a non-empty string");let a=(0,n.default).findKey(o,i);a&&void 0!==o[a]&&!0!==r&&(void 0!==r||!1===o[a])||(o[a||t]=u(e))}let f=(e,t)=>(0,n.default).forEach(e,(e,r)=>a(e,r,t));return(0,n.default).isPlainObject(e)||e instanceof this.constructor?f(e,t):(0,n.default).isString(e)&&(e=e.trim())&&!l(e)?f((0,i.default)(e),t):null!=e&&a(t,e,r),this}get(e,t){if(e=s(e)){let r=(0,n.default).findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if((0,n.default).isFunction(t))return t.call(this,e,r);if((0,n.default).isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=s(e)){let r=(0,n.default).findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||f(this,this[r],r,t)))}return!1}delete(e,t){let r=this,o=!1;function i(e){if(e=s(e)){let i=(0,n.default).findKey(r,e);i&&(!t||f(r,r[i],i,t))&&(delete r[i],o=!0)}}return(0,n.default).isArray(e)?e.forEach(i):i(e),o}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let o=t[r];(!e||f(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){let t=this,r={};return(0,n.default).forEach(this,(o,i)=>{let a=(0,n.default).findKey(r,i);if(a){t[a]=u(o),delete t[i];return}let s=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();s!==i&&delete t[i],t[s]=u(o),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return(0,n.default).forEach(this,(r,o)=>{null!=r&&!1!==r&&(t[o]=e&&(0,n.default).isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[a]=this[a]={accessors:{}},r=t.accessors,o=this.prototype;function i(e){let t=s(e);r[t]||(function(e,t){let r=(0,n.default).toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(o,e),r[t]=!0)}return(0,n.default).isArray(e)?e.forEach(i):i(e),this}}c.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),// reserved names hotfix
(0,n.default).reduceDescriptors(c.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),(0,n.default).freezeMethods(c);var d=c}),i("gwcWo",function(t,r){e(t.exports,"default",()=>a);var n=o("i4ijA");// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let i=(0,n.default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */a=e=>{let t,r,n;let o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&i[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o}}),i("5SIUr",function(t,r){e(t.exports,"default",()=>n);function n(e){return!!(e&&e.__CANCEL__)}}),i("7XT9I",function(t,r){e(t.exports,"default",()=>a);var n=o("k5sPl");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function i(e,t,r){// eslint-disable-next-line no-eq-null,eqeqeq
(0,n.default).call(this,null==e?"canceled":e,n.default.ERR_CANCELED,t,r),this.name="CanceledError"}(0,o("i4ijA").default).inherits(i,n.default,{__CANCEL__:!0});var a=i}),i("9o9qV",function(t,r){e(t.exports,"default",()=>c);var n=o("i4ijA"),i=o("l52nF"),a=o("2kdvM"),s=o("k5sPl");let u={http:i.default,xhr:a.default};(0,n.default).forEach(u,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});let l=e=>`- ${e}`,f=e=>(0,n.default).isFunction(e)||null===e||!1===e;var c={getAdapter:e=>{let t,r;e=(0,n.default).isArray(e)?e:[e];let{length:o}=e,i={};for(let n=0;n<o;n++){let o;if(r=t=e[n],!f(t)&&void 0===(r=u[(o=String(t)).toLowerCase()]))throw new s.default(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+n]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")),t=o?e.length>1?"since :\n"+e.map(l).join("\n"):" "+l(e[0]):"as no adapter specified";throw new s.default("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return r},adapters:u}}),i("2kdvM",function(t,r){e(t.exports,"default",()=>v);var n=o("i4ijA"),i=o("4Bh8W"),a=o("j9ifV"),s=o("h9Lf1"),u=o("kHvG3"),l=o("kgVUb"),f=o("fK4vu"),c=o("k5sPl"),d=o("7XT9I"),h=o("jOreR"),p=o("8KDYS"),g=o("fRBtE"),m=o("el6rn");function y(e,t){let r=0,n=(0,m.default)(50,250);return o=>{let i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-r,u=n(s),l=i<=a;r=i;let f={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&l?(a-i)/u:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}let b="undefined"!=typeof XMLHttpRequest;var v=b&&function(e){return new Promise(function(t,r){let o,m,b=e.data,v=(0,g.default).from(e.headers).normalize(),w=e.responseType;function E(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}(0,n.default).isFormData(b)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv?v.setContentType(!1):v.getContentType(/^\s*multipart\/form-data/)?(0,n.default).isString(m=v.getContentType())&&v.setContentType(m.replace(/^\s*(multipart\/form-data);+/,"$1")):v.setContentType("multipart/form-data"));let S=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.set("Authorization","Basic "+btoa(t+":"+r))}let A=(0,u.default)(e.baseURL,e.url);function L(){if(!S)return;// Prepare the response
let n=(0,g.default).from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),o=w&&"text"!==w&&"json"!==w?S.response:S.responseText,a={data:o,status:S.status,statusText:S.statusText,headers:n,config:e,request:S};(0,i.default)(function(e){t(e),E()},function(e){r(e),E()},a),// Clean up request
S=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(S.open(e.method.toUpperCase(),(0,s.default)(A,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
S.timeout=e.timeout,"onloadend"in S?S.onloadend=L:S.onreadystatechange=function(){S&&4===S.readyState&&(0!==S.status||S.responseURL&&0===S.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(L)},// Handle browser request cancellation (as opposed to a manual cancellation)
S.onabort=function(){S&&(r(new c.default("Request aborted",c.default.ECONNABORTED,e,S)),// Clean up request
S=null)},// Handle low level network errors
S.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new c.default("Network Error",c.default.ERR_NETWORK,e,S)),// Clean up request
S=null},// Handle timeout
S.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||f.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new c.default(t,n.clarifyTimeoutError?c.default.ETIMEDOUT:c.default.ECONNABORTED,e,S)),// Clean up request
S=null},p.default.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||(0,l.default)(A))&&e.xsrfCookieName&&(0,a.default).read(e.xsrfCookieName);t&&v.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===b&&v.setContentType(null),"setRequestHeader"in S&&(0,n.default).forEach(v.toJSON(),function(e,t){S.setRequestHeader(t,e)}),(0,n.default).isUndefined(e.withCredentials)||(S.withCredentials=!!e.withCredentials),w&&"json"!==w&&(S.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&S.addEventListener("progress",y(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&S.upload&&S.upload.addEventListener("progress",y(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=t=>{S&&(r(!t||t.type?new d.default(null,e,S):t),S.abort(),S=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));let R=(0,h.default)(A);if(R&&-1===(0,p.default).protocols.indexOf(R)){r(new c.default("Unsupported protocol "+R+":",c.default.ERR_BAD_REQUEST,e));return}// Send the request
S.send(b||null)})}}),i("4Bh8W",function(t,r){e(t.exports,"default",()=>i);var n=o("k5sPl");function i(e,t,r){let o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):t(new n.default("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}}),i("j9ifV",function(t,r){e(t.exports,"default",()=>i);var n=o("i4ijA"),i=o("8KDYS").default.isStandardBrowserEnv?{write:function(e,t,r,o,i,a){let s=[];s.push(e+"="+encodeURIComponent(t)),(0,n.default).isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),(0,n.default).isString(o)&&s.push("path="+o),(0,n.default).isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),i("kHvG3",function(t,r){e(t.exports,"default",()=>a);var n=o("2IQpt"),i=o("bb7xE");function a(e,t){return e&&!(0,n.default)(t)?(0,i.default)(e,t):t}}),i("2IQpt",function(t,r){e(t.exports,"default",()=>n);function n(e){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}}),i("bb7xE",function(t,r){e(t.exports,"default",()=>n);function n(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}}),i("kgVUb",function(t,r){e(t.exports,"default",()=>i);var n=o("i4ijA"),i=o("8KDYS").default.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function o(e){let n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=o(window.location.href),function(t){let r=(0,n.default).isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}}),i("jOreR",function(t,r){e(t.exports,"default",()=>n);function n(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}}),i("el6rn",function(t,r){e(t.exports,"default",()=>n);var n=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),o=Array(e),i=0,a=0;return t=void 0!==t?t:1e3,function(s){let u=Date.now(),l=o[a];r||(r=u),n[i]=s,o[i]=u;let f=a,c=0;for(;f!==i;)c+=n[f++],f%=e;if((i=(i+1)%e)===a&&(a=(a+1)%e),u-r<t)return;let d=l&&u-l;return d?Math.round(1e3*c/d):void 0}}}),i("kSe7Y",function(t,r){e(t.exports,"default",()=>s);var n=o("i4ijA"),i=o("fRBtE");let a=e=>e instanceof i.default?e.toJSON():e;function s(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function o(e,t,r){return(0,n.default).isPlainObject(e)&&(0,n.default).isPlainObject(t)?(0,n.default).merge.call({caseless:r},e,t):(0,n.default).isPlainObject(t)?(0,n.default).merge({},t):(0,n.default).isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function i(e,t,r){return(0,n.default).isUndefined(t)?(0,n.default).isUndefined(e)?void 0:o(void 0,e,r):o(e,t,r)}// eslint-disable-next-line consistent-return
function s(e,t){if(!(0,n.default).isUndefined(t))return o(void 0,t)}// eslint-disable-next-line consistent-return
function u(e,t){return(0,n.default).isUndefined(t)?(0,n.default).isUndefined(e)?void 0:o(void 0,e):o(void 0,t)}// eslint-disable-next-line consistent-return
function l(r,n,i){return i in t?o(r,n):i in e?o(void 0,r):void 0}let f={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l,headers:(e,t)=>i(a(e),a(t),!0)};return(0,n.default).forEach(Object.keys(Object.assign({},e,t)),function(o){let a=f[o]||i,s=a(e[o],t[o],o);(0,n.default).isUndefined(s)&&a!==l||(r[o]=s)}),r}}),i("hd4Q7",function(t,r){e(t.exports,"default",()=>u);var n=o("8WPkr"),i=o("k5sPl");let a={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{a[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let s={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */a.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n.VERSION+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,n,a)=>{if(!1===e)throw new i.default(o(n," has been removed"+(t?" in "+t:"")),i.default.ERR_DEPRECATED);return t&&!s[n]&&(s[n]=!0,// eslint-disable-next-line no-console
console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}};var u={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new i.default("options must be an object",i.default.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let a=n[o],s=t[a];if(s){let t=e[a],r=void 0===t||s(t,a,e);if(!0!==r)throw new i.default("option "+a+" must be "+r,i.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new i.default("Unknown option "+a,i.default.ERR_BAD_OPTION)}},validators:a}}),i("8WPkr",function(t,r){e(t.exports,"VERSION",()=>n);let n="1.5.1"}),i("9GGcx",function(t,r){e(t.exports,"default",()=>a);var n=o("7XT9I");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class i{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,o,i){r.reason||(r.reason=new n.default(e,o,i),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new i(function(t){e=t});return{token:t,cancel:e}}}var a=i}),i("4rx4g",function(t,r){e(t.exports,"default",()=>n);function n(e){return function(t){return e.apply(null,t)}}}),i("4Qexm",function(t,r){e(t.exports,"default",()=>i);var n=o("i4ijA");function i(e){return(0,n.default).isObject(e)&&!0===e.isAxiosError}}),i("dcCu5",function(t,r){e(t.exports,"default",()=>o);let n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach(([e,t])=>{n[t]=e});var o=n}),i("2DTLi",function(e,t){// import { Notify } from 'notiflix';
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
});//# sourceMappingURL=shopping-list.082c6bf6.js.map

//# sourceMappingURL=shopping-list.082c6bf6.js.map
