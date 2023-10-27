let e;var t,r,n,o,i,s,a=globalThis;(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{let r="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");let n=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",n),r.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const l=document.querySelector(".js-open-menu"),u=document.querySelector(".js-close-menu");u.disabled=!0,l.addEventListener("click",()=>{setTimeout(()=>{l.disabled=!0,u.disabled=!1},500)}),u.addEventListener("click",()=>{setTimeout(()=>{u.disabled=!0,l.disabled=!1},500)});const c=document.querySelector(".theme-button"),f=document.querySelector("body");let h=localStorage.getItem("theme")||"light-theme";f.classList.add(h),c.addEventListener("click",()=>{"dark-theme"===h?(f.classList.remove("dark-theme"),h="light-theme"):(f.classList.add("dark-theme"),h="dark-theme"),localStorage.setItem("theme",h)});const p=window.location.href,d=document.querySelector(".header__navigation-link--home"),g=document.querySelector(".header__navigation-link--shopping-list"),y=document.querySelector(".menu-container__navigation-link"),m=document.querySelector(".menu-container__navigation-link--shopping-list"),b=document.querySelector(".menu-container__navigation-icon");function v(e,t){return function(){return e.apply(t,arguments)}}p.includes("index.html")?(d.style.backgroundColor="var(--primary-object-background-color)",y.style.backgroundColor="var(--primary-object-background-color)",y.style.color="var(--denary-font-color)"):p.includes("shopping-list.html")&&(g.style.backgroundColor="var(--primary-object-background-color)",m.style.backgroundColor="var(--primary-object-background-color)",m.style.color="var(--denary-font-color)",b.style.fill="var(--secondary-icon-color)");// utils is a library of generic helper functions non-specific to axios
const{toString:w}=Object.prototype,{getPrototypeOf:E}=Object,S=(t=Object.create(null),e=>{let r=w.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),A=e=>(e=e.toLowerCase(),t=>S(t)===e),_=e=>t=>typeof t===e,{isArray:O}=Array,R=_("undefined"),L=A("ArrayBuffer"),k=_("string"),T=_("function"),U=_("number"),B=e=>null!==e&&"object"==typeof e,C=e=>{if("object"!==S(e))return!1;let t=E(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},j=A("Date"),x=A("File"),N=A("Blob"),P=A("FileList"),q=A("URLSearchParams");/**
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
 */function I(e,t,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),O(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;for(n=0;n<s;n++)o=i[n],t.call(null,e[o],o,e)}}}function F(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),o=n.length;for(;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}const D=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:a,M=e=>!R(e)&&e!==D,H=(r="undefined"!=typeof Uint8Array&&E(Uint8Array),e=>r&&e instanceof r),$=A("HTMLFormElement"),z=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),J=A("RegExp"),W=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};I(r,(r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)}),Object.defineProperties(e,n)},V="abcdefghijklmnopqrstuvwxyz",K="0123456789",G={DIGIT:K,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+K},Y=A("AsyncFunction");var Z={isArray:O,isArrayBuffer:L,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!R(e)&&null!==e.constructor&&!R(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||T(e.append)&&("formdata"===(t=S(e))||// detect form-data instance
"object"===t&&T(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&L(e.buffer)},isString:k,isNumber:U,isBoolean:e=>!0===e||!1===e,isObject:B,isPlainObject:C,isUndefined:R,isDate:j,isFile:x,isBlob:N,isRegExp:J,isFunction:T,isStream:e=>B(e)&&T(e.pipe),isURLSearchParams:q,isTypedArray:H,isFileList:P,forEach:I,merge:/**
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
 */function e(){let{caseless:t}=M(this)&&this||{},r={},n=(n,o)=>{let i=t&&F(r,o)||o;C(r[i])&&C(n)?r[i]=e(r[i],n):C(n)?r[i]=e({},n):O(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&I(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(I(t,(t,n)=>{r&&T(t)?e[n]=v(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==r&&E(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:S,kindOfTest:A,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(O(e))return e;let t=e.length;if(!U(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],o=n.call(e);for(;(r=o.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:$,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:W,freezeMethods:e=>{W(e,(t,r)=>{// skip restricted props in strict mode
if(T(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(T(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(O(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:F,global:D,isContextDefined:M,ALPHABET:G,generateString:(e=16,t=G.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&T(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(B(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let o=O(e)?[]:{};return I(e,(e,t)=>{let i=r(e,n+1);R(i)||(o[t]=i)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:Y,isThenable:e=>e&&(B(e)||T(e))&&T(e.then)&&T(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function X(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}Z.inherits(X,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:Z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Q=X.prototype,ee={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ee[e]={value:e}}),Object.defineProperties(X,ee),Object.defineProperty(Q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
X.from=(e,t,r,n,o,i)=>{let s=Object.create(Q);return Z.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),X.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s},o=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(e,t,r){for(var n,o=[],i=t;i<r;i+=3)o.push(et[(n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]))>>18&63]+et[n>>12&63]+et[n>>6&63]+et[63&n]);return o.join("")}(e,i,i+16383>s?s:i+16383));return 1===n?o.push(et[(t=e[r-1])>>2]+et[t<<4&63]+"=="):2===n&&o.push(et[(t=(e[r-2]<<8)+e[r-1])>>10]+et[t>>4&63]+et[t<<2&63]+"="),o.join("")};for(var et=[],er=[],en="undefined"!=typeof Uint8Array?Uint8Array:Array,eo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ei=0,es=eo.length;ei<es;++ei)et[ei]=eo[ei],er[eo.charCodeAt(ei)]=ei;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
er["-".charCodeAt(0)]=62,er["_".charCodeAt(0)]=63,i=function(e,t,r,n,o){var i,s,a=8*o-n-1,l=(1<<a)-1,u=l>>1,c=-7,f=r?o-1:0,h=r?-1:1,p=e[t+f];for(f+=h,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+e[t+f],f+=h,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+e[t+f],f+=h,c-=8);if(0===i)i=1-u;else{if(i===l)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),i-=u}return(p?-1:1)*s*Math.pow(2,i-n)},s=function(e,t,r,n,o,i){var s,a,l,u=8*i-o-1,c=(1<<u)-1,f=c>>1,h=23===o?5960464477539062e-23:0,p=n?0:i-1,d=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+f>=1?t+=h/l:t+=h*Math.pow(2,1-f),t*l>=2&&(s++,l/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(t*l-1)*Math.pow(2,o),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;e[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;e[r+p]=255&s,p+=d,s/=256,u-=8);e[r+p-d]|=128*g};var ea="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function el(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var t=new Uint8Array(e);return Object.setPrototypeOf(t,eu.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function eu(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return eh(e)}return ec(e,t,r)}function ec(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!eu.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|ey(e,t),n=el(r),o=n.write(e,t);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(eB(e,Uint8Array)){var t=new Uint8Array(e);return ed(t.buffer,t.byteOffset,t.byteLength)}return ep(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(eB(e,ArrayBuffer)||e&&eB(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(eB(e,SharedArrayBuffer)||e&&eB(e.buffer,SharedArrayBuffer)))return ed(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return eu.from(n,t,r);var o=function(e){if(eu.isBuffer(e)){var t,r=0|eg(e.length),n=el(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?el(0):ep(e):"Buffer"===e.type&&Array.isArray(e.data)?ep(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return eu.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ef(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function eh(e){return ef(e),el(e<0?0:0|eg(e))}function ep(e){for(var t=e.length<0?0:0|eg(e.length),r=el(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function ed(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),eu.prototype),n)}function eg(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function ey(e,t){if(eu.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||eB(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ek(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return eT(e).length;default:if(o)return n?-1:ek(e).length// assume utf8
;t=(""+t).toLowerCase(),o=!0}}function em(e,t,r){var n,i,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=eC[e[i]];return o}(this,t,r);case"utf8":case"utf-8":return eE(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?o(this):o(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function eb(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function ev(e,t,r,n,o){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=eu.from(t,n)),eu.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:ew(e,t,r,n,o));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):ew(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function ew(e,t,r,n,o){var i,s=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,l/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){var c=-1;for(i=r;i<a;i++)if(u(e,i)===u(t,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===l)return c*s}else -1!==c&&(i-=i-c),c=-1}else for(r+l>a&&(r=a-l),i=r;i>=0;i--){for(var f=!0,h=0;h<l;h++)if(u(e,i+h)!==u(t,h)){f=!1;break}if(f)return i}return -1}function eE(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,s,a,l,u=e[o],c=null,f=u>239?4:u>223?3:u>191?2:1;if(o+f<=r)switch(f){case 1:u<128&&(c=u);break;case 2:(192&(i=e[o+1]))==128&&(l=(31&u)<<6|63&i)>127&&(c=l);break;case 3:i=e[o+1],s=e[o+2],(192&i)==128&&(192&s)==128&&(l=(15&u)<<12|(63&i)<<6|63&s)>2047&&(l<55296||l>57343)&&(c=l);break;case 4:i=e[o+1],s=e[o+2],a=e[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(l=(15&u)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(c=l)}null===c?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
c=65533,f=1):c>65535&&(// encode to utf16 (surrogate pair dance)
c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function eS(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function eA(e,t,r,n,o,i){if(!eu.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function e_(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function eO(e,t,r,n,o){return t=+t,r>>>=0,o||e_(e,t,r,4,34028234663852886e22,-34028234663852886e22),s(e,t,r,n,23,4),r+4}function eR(e,t,r,n,o){return t=+t,r>>>=0,o||e_(e,t,r,8,17976931348623157e292,-17976931348623157e292),s(e,t,r,n,52,8),r+8}/**
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
 */eu.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),eu.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(eu.prototype,"parent",{enumerable:!0,get:function(){if(eu.isBuffer(this))return this.buffer}}),Object.defineProperty(eu.prototype,"offset",{enumerable:!0,get:function(){if(eu.isBuffer(this))return this.byteOffset}}),eu.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/eu.from=function(e,t,r){return ec(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(eu.prototype,Uint8Array.prototype),Object.setPrototypeOf(eu,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/eu.alloc=function(e,t,r){return(ef(e),e<=0)?el(e):void 0!==t?"string"==typeof r?el(e).fill(t,r):el(e).fill(t):el(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */eu.allocUnsafe=function(e){return eh(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */eu.allocUnsafeSlow=function(e){return eh(e)},eu.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==eu.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},eu.compare=function(e,t){if(eB(e,Uint8Array)&&(e=eu.from(e,e.offset,e.byteLength)),eB(t,Uint8Array)&&(t=eu.from(t,t.offset,t.byteLength)),!eu.isBuffer(e)||!eu.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},eu.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},eu.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return eu.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=eu.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(eB(i,Uint8Array))o+i.length>n.length?eu.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(eu.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},eu.byteLength=ey,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
eu.prototype._isBuffer=!0,eu.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)eb(this,t,t+1);return this},eu.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)eb(this,t,t+3),eb(this,t+1,t+2);return this},eu.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)eb(this,t,t+7),eb(this,t+1,t+6),eb(this,t+2,t+5),eb(this,t+3,t+4);return this},eu.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?eE(this,0,e):em.apply(this,arguments)},eu.prototype.toLocaleString=eu.prototype.toString,eu.prototype.equals=function(e){if(!eu.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===eu.compare(this,e)},eu.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ea&&(eu.prototype[ea]=eu.prototype.inspect),eu.prototype.compare=function(e,t,r,n,o){if(eB(e,Uint8Array)&&(e=eu.from(e,e.offset,e.byteLength)),!eu.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var i=o-n,s=r-t,a=Math.min(i,s),l=this.slice(n,o),u=e.slice(t,r),c=0;c<a;++c)if(l[c]!==u[c]){i=l[c],s=u[c];break}return i<s?-1:s<i?1:0},eu.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},eu.prototype.indexOf=function(e,t,r){return ev(this,e,t,r,!0)},eu.prototype.lastIndexOf=function(e,t,r){return ev(this,e,t,r,!1)},eu.prototype.write=function(e,t,r,n){// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,l,u,c,f,h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(a!=a)break;e[r+s]=a}return s}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,eU(ek(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=t,a=r,eU(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,u=r,eU(eT(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=r,eU(function(e,t){for(var r,n,o=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-c),this,c,f);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},eu.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},eu.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,eu.prototype),n)},eu.prototype.readUintLE=eu.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eS(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},eu.prototype.readUintBE=eu.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eS(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},eu.prototype.readUint8=eu.prototype.readUInt8=function(e,t){return e>>>=0,t||eS(e,1,this.length),this[e]},eu.prototype.readUint16LE=eu.prototype.readUInt16LE=function(e,t){return e>>>=0,t||eS(e,2,this.length),this[e]|this[e+1]<<8},eu.prototype.readUint16BE=eu.prototype.readUInt16BE=function(e,t){return e>>>=0,t||eS(e,2,this.length),this[e]<<8|this[e+1]},eu.prototype.readUint32LE=eu.prototype.readUInt32LE=function(e,t){return e>>>=0,t||eS(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},eu.prototype.readUint32BE=eu.prototype.readUInt32BE=function(e,t){return e>>>=0,t||eS(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},eu.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eS(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},eu.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eS(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},eu.prototype.readInt8=function(e,t){return(e>>>=0,t||eS(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},eu.prototype.readInt16LE=function(e,t){e>>>=0,t||eS(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},eu.prototype.readInt16BE=function(e,t){e>>>=0,t||eS(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},eu.prototype.readInt32LE=function(e,t){return e>>>=0,t||eS(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},eu.prototype.readInt32BE=function(e,t){return e>>>=0,t||eS(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},eu.prototype.readFloatLE=function(e,t){return e>>>=0,t||eS(e,4,this.length),i(this,e,!0,23,4)},eu.prototype.readFloatBE=function(e,t){return e>>>=0,t||eS(e,4,this.length),i(this,e,!1,23,4)},eu.prototype.readDoubleLE=function(e,t){return e>>>=0,t||eS(e,8,this.length),i(this,e,!0,52,8)},eu.prototype.readDoubleBE=function(e,t){return e>>>=0,t||eS(e,8,this.length),i(this,e,!1,52,8)},eu.prototype.writeUintLE=eu.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;eA(this,e,t,r,o,0)}var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},eu.prototype.writeUintBE=eu.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;eA(this,e,t,r,o,0)}var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},eu.prototype.writeUint8=eu.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,1,255,0),this[t]=255&e,t+1},eu.prototype.writeUint16LE=eu.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},eu.prototype.writeUint16BE=eu.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},eu.prototype.writeUint32LE=eu.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},eu.prototype.writeUint32BE=eu.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eu.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);eA(this,e,t,r,o-1,-o)}var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},eu.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);eA(this,e,t,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},eu.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},eu.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},eu.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},eu.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},eu.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eu.prototype.writeFloatLE=function(e,t,r){return eO(this,e,t,!0,r)},eu.prototype.writeFloatBE=function(e,t,r){return eO(this,e,t,!1,r)},eu.prototype.writeDoubleLE=function(e,t,r){return eR(this,e,t,!0,r)},eu.prototype.writeDoubleBE=function(e,t,r){return eR(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
eu.prototype.copy=function(e,t,r,n){if(!eu.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
eu.prototype.fill=function(e,t,r,n){// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!eu.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=eu.isBuffer(e)?e:eu.from(e,n),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%a]}return this};// HELPER FUNCTIONS
// ================
var eL=/[^+/0-9A-Za-z-_]/g;function ek(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],s=0;s<n;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function eT(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],i=n[1],s=new en((o+i)*3/4-i),a=0,l=i>0?o-4:o;for(r=0;r<l;r+=4)t=er[e.charCodeAt(r)]<<18|er[e.charCodeAt(r+1)]<<12|er[e.charCodeAt(r+2)]<<6|er[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===i&&(t=er[e.charCodeAt(r)]<<2|er[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===i&&(t=er[e.charCodeAt(r)]<<10|er[e.charCodeAt(r+1)]<<4|er[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(eL,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function eU(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function eB(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var eC=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function ej(e){return Z.isPlainObject(e)||Z.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function ex(e){return Z.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function eN(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=ex(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}const eP=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});var eq=/**
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
 */function(e,t,r){if(!Z.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
r=Z.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!Z.isUndefined(t[e])});let n=r.metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,l=a&&Z.isSpecCompliantForm(t);if(!Z.isFunction(o))throw TypeError("visitor must be a function");function u(e){if(null===e)return"";if(Z.isDate(e))return e.toISOString();if(!l&&Z.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(e)||Z.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):eu.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(e,r,o){let a=e;if(e&&!o&&"object"==typeof e){if(Z.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var l;if(Z.isArray(e)&&(l=e,Z.isArray(l)&&!l.some(ej))||(Z.isFileList(e)||Z.endsWith(r,"[]"))&&(a=Z.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=ex(r),a.forEach(function(e,n){Z.isUndefined(e)||null===e||t.append(!0===s?eN([r],n,i):null===s?r:r+"[]",u(e))}),!1)}}return!!ej(e)||(t.append(eN(o,r,i),u(e)),!1)}let f=[],h=Object.assign(eP,{defaultVisitor:c,convertValue:u,isVisitable:ej});if(!Z.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!Z.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),Z.forEach(r,function(r,i){let s=!(Z.isUndefined(r)||null===r)&&o.call(t,r,Z.isString(i)?i.trim():i,n,h);!0===s&&e(r,n?n.concat(i):[i])}),f.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function eI(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function eF(e,t){this._pairs=[],e&&eq(e,this,t)}const eD=eF.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function eM(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eH(e,t,r){let n;/*eslint no-param-reassign:0*/if(!t)return e;let o=r&&r.encode||eM,i=r&&r.serialize;if(n=i?i(t,r):Z.isURLSearchParams(t)?t.toString():new eF(t,r).toString(o)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}eD.append=function(e,t){this._pairs.push([e,t])},eD.toString=function(e){let t=e?function(t){return e.call(this,t,eI)}:eI;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var e$=class{constructor(){this.handlers=[]}/**
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
   */forEach(e){Z.forEach(this.handlers,function(t){null!==t&&e(t)})}},ez={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eJ="undefined"!=typeof URLSearchParams?URLSearchParams:eF,eW="undefined"!=typeof FormData?FormData:null,eV="undefined"!=typeof Blob?Blob:null;/**
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
 */const eK=("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document,eG="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var eY={classes:{URLSearchParams:eJ,FormData:eW,Blob:eV},isStandardBrowserEnv:eK,isStandardBrowserWebWorkerEnv:eG,protocols:["http","https","file","blob","url","data"]},eZ=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(Z.isFormData(e)&&Z.isFunction(e.entries)){let t={};return Z.forEachEntry(e,(e,r)=>{!function e(t,r,n,o){let i=t[o++],s=Number.isFinite(+i),a=o>=t.length;if(i=!i&&Z.isArray(n)?n.length:i,a)return Z.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&Z.isObject(n[i])||(n[i]=[]);let l=e(t,r,n[i],o);return l&&Z.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!s}(Z.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const eX={transitional:ez,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=Z.isObject(e);i&&Z.isHTMLForm(e)&&(e=new FormData(e));let s=Z.isFormData(e);if(s)return o&&o?JSON.stringify(eZ(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=e,l=this.formSerializer,eq(a,new eY.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return eY.isNode&&Z.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},l))).toString()}if((r=Z.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return eq(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(Z.isString(e))try{return(0,JSON.parse)(e),Z.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eX.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&Z.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw X.from(e,X.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:eY.classes.FormData,Blob:eY.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],e=>{eX.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const eQ=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */e0=e=>{let t,r,n;let o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&eQ[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o};const e1=Symbol("internals");function e2(e){return e&&String(e).trim().toLowerCase()}function e4(e){return!1===e||null==e?e:Z.isArray(e)?e.map(e4):String(e)}const e5=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function e6(e,t,r,n,o){if(Z.isFunction(n))return n.call(this,t,r);if(o&&(t=r),Z.isString(t)){if(Z.isString(n))return -1!==t.indexOf(n);if(Z.isRegExp(n))return n.test(t)}}class e3{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function o(e,t,r){let o=e2(t);if(!o)throw Error("header name must be a non-empty string");let i=Z.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||t]=e4(e))}let i=(e,t)=>Z.forEach(e,(e,r)=>o(e,r,t));return Z.isPlainObject(e)||e instanceof this.constructor?i(e,t):Z.isString(e)&&(e=e.trim())&&!e5(e)?i(e0(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=e2(e)){let r=Z.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(Z.isFunction(t))return t.call(this,e,r);if(Z.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=e2(e)){let r=Z.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||e6(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function o(e){if(e=e2(e)){let o=Z.findKey(r,e);o&&(!t||e6(r,r[o],o,t))&&(delete r[o],n=!0)}}return Z.isArray(e)?e.forEach(o):o(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let o=t[r];(!e||e6(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){let t=this,r={};return Z.forEach(this,(n,o)=>{let i=Z.findKey(r,o);if(i){t[i]=e4(n),delete t[o];return}let s=e?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(o).trim();s!==o&&delete t[o],t[s]=e4(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return Z.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Z.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[e1]=this[e1]={accessors:{}},r=t.accessors,n=this.prototype;function o(e){let t=e2(e);r[t]||(!function(e,t){let r=Z.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(n,e),r[t]=!0)}return Z.isArray(e)?e.forEach(o):o(e),this}}function e8(e,t){let r=this||eX,n=t||r,o=e3.from(n.headers),i=n.data;return Z.forEach(e,function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function e9(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function e7(e,t,r){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,r),this.name="CanceledError"}e3.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Z.reduceDescriptors(e3.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),Z.freezeMethods(e3),Z.inherits(e7,X,{__CANCEL__:!0});var te=eY.isStandardBrowserEnv?{write:function(e,t,r,n,o,i){let s=[];s.push(e+"="+encodeURIComponent(t)),Z.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),Z.isString(n)&&s.push("path="+n),Z.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tr=eY.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
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
    */return e=n(window.location.href),function(t){let r=Z.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},tn=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),o=Array(e),i=0,s=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),u=o[s];r||(r=l),n[i]=a,o[i]=l;let c=s,f=0;for(;c!==i;)f+=n[c++],c%=e;if((i=(i+1)%e)===s&&(s=(s+1)%e),l-r<t)return;let h=u&&l-u;return h?Math.round(1e3*f/h):void 0}};function to(e,t){let r=0,n=tn(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,l=n(a),u=i<=s;r=i;let c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-i)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const ti="undefined"!=typeof XMLHttpRequest;var ts=ti&&function(e){return new Promise(function(t,r){let n,o,i=e.data,s=e3.from(e.headers).normalize(),a=e.responseType;function l(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}Z.isFormData(i)&&(eY.isStandardBrowserEnv||eY.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?Z.isString(o=s.getContentType())&&s.setContentType(o.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let u=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+r))}let c=tt(e.baseURL,e.url);function f(){if(!u)return;// Prepare the response
let n=e3.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:n,config:e,request:u};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new X("Request failed with status code "+r.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),l()},function(e){r(e),l()},i),// Clean up request
u=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(u.open(e.method.toUpperCase(),eH(c,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(f)},// Handle browser request cancellation (as opposed to a manual cancellation)
u.onabort=function(){u&&(r(new X("Request aborted",X.ECONNABORTED,e,u)),// Clean up request
u=null)},// Handle low level network errors
u.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new X("Network Error",X.ERR_NETWORK,e,u)),// Clean up request
u=null},// Handle timeout
u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||ez;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new X(t,n.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,u)),// Clean up request
u=null},eY.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||tr(c))&&e.xsrfCookieName&&te.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===i&&s.setContentType(null),"setRequestHeader"in u&&Z.forEach(s.toJSON(),function(e,t){u.setRequestHeader(t,e)}),Z.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",to(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",to(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{u&&(r(!t||t.type?new e7(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let h=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(c);if(h&&-1===eY.protocols.indexOf(h)){r(new X("Unsupported protocol "+h+":",X.ERR_BAD_REQUEST,e));return}// Send the request
u.send(i||null)})};const ta={http:null,xhr:ts};Z.forEach(ta,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});const tl=e=>`- ${e}`,tu=e=>Z.isFunction(e)||null===e||!1===e;var tc={getAdapter:e=>{let t,r;e=Z.isArray(e)?e:[e];let{length:n}=e,o={};for(let i=0;i<n;i++){let n;if(r=t=e[i],!tu(t)&&void 0===(r=ta[(n=String(t)).toLowerCase()]))throw new X(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let e=Object.entries(o).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new X("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(tl).join("\n"):" "+tl(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:ta};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function tf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new e7(null,e)}function th(e){tf(e),e.headers=e3.from(e.headers),// Transform request data
e.data=e8.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=tc.getAdapter(e.adapter||eX.adapter);return t(e).then(function(t){return tf(e),// Transform response data
t.data=e8.call(e,e.transformResponse,t),t.headers=e3.from(t.headers),t},function(t){return!e9(t)&&(tf(e),t&&t.response&&(t.response.data=e8.call(e,e.transformResponse,t.response),t.response.headers=e3.from(t.response.headers))),Promise.reject(t)})}const tp=e=>e instanceof e3?e.toJSON():e;function td(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function n(e,t,r){return Z.isPlainObject(e)&&Z.isPlainObject(t)?Z.merge.call({caseless:r},e,t):Z.isPlainObject(t)?Z.merge({},t):Z.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function o(e,t,r){return Z.isUndefined(t)?Z.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}// eslint-disable-next-line consistent-return
function i(e,t){if(!Z.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return Z.isUndefined(t)?Z.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}let l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(tp(e),tp(t),!0)};return Z.forEach(Object.keys(Object.assign({},e,t)),function(n){let i=l[n]||o,s=i(e[n],t[n],n);Z.isUndefined(s)&&i!==a||(r[n]=s)}),r}const tg="1.5.1",ty={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ty[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tm={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ty.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tg+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===e)throw new X(n(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!tm[o]&&(tm[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var tb={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let i=n[o],s=t[i];if(s){let t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new X("option "+i+" must be "+r,X.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new X("Unknown option "+i,X.ERR_BAD_OPTION)}},validators:ty};const tv=tb.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class tw{constructor(e){this.defaults=e,this.interceptors={request:new e$,response:new e$}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=td(this.defaults,t);let{transitional:o,paramsSerializer:i,headers:s}=t;void 0!==o&&tb.assertOptions(o,{silentJSONParsing:tv.transitional(tv.boolean),forcedJSONParsing:tv.transitional(tv.boolean),clarifyTimeoutError:tv.transitional(tv.boolean)},!1),null!=i&&(Z.isFunction(i)?t.paramsSerializer={serialize:i}:tb.assertOptions(i,{encode:tv.function,serialize:tv.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&Z.merge(s.common,s[t.method]);s&&Z.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=e3.concat(a,s);// filter out skipped interceptors
let l=[],u=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(u=u&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let f=0;if(!u){let e=[th.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,c),n=e.length,r=Promise.resolve(t);f<n;)r=r.then(e[f++],e[f++]);return r}n=l.length;let h=t;for(f=0;f<n;){let e=l[f++],t=l[f++];try{h=e(h)}catch(e){t.call(this,e);break}}try{r=th.call(this,h)}catch(e){return Promise.reject(e)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(e){e=td(this.defaults,e);let t=tt(e.baseURL,e.url);return eH(t,e.params,e.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/tw.prototype[e]=function(t,r){return this.request(td(r||{},{method:e,url:t,data:(r||{}).data}))}}),Z.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,o){return this.request(td(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}tw.prototype[e]=t(),tw.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class tE{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new e7(e,n,o),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new tE(function(t){e=t});return{token:t,cancel:e}}}const tS={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tS).forEach(([e,t])=>{tS[t]=e});// Create the default instance to be exported
const tA=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new tw(t),n=v(tw.prototype.request,r);return Z.extend(n,tw.prototype,r,{allOwnKeys:!0}),Z.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(td(t,r))},n}(eX);// Expose Axios class to allow class inheritance
tA.Axios=tw,// Expose Cancel & CancelToken
tA.CanceledError=e7,tA.CancelToken=tE,tA.isCancel=e9,tA.VERSION=tg,tA.toFormData=eq,// Expose AxiosError class
tA.AxiosError=X,// alias for CanceledError for backward compatibility
tA.Cancel=tA.CanceledError,// Expose all/spread
tA.all=function(e){return Promise.all(e)},tA.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
tA.isAxiosError=function(e){return Z.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
tA.mergeConfig=td,tA.AxiosHeaders=e3,tA.formToJSON=e=>eZ(Z.isHTMLForm(e)?new FormData(e):e),tA.getAdapter=tc.getAdapter,tA.HttpStatusCode=tS,tA.default=tA;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:t_,AxiosError:tO,CanceledError:tR,isCancel:tL,CancelToken:tk,VERSION:tT,all:tU,Cancel:tB,isAxiosError:tC,spread:tj,toFormData:tx,AxiosHeaders:tN,HttpStatusCode:tP,formToJSON:tq,getAdapter:tI,mergeConfig:tF}=tA,tD=async()=>{try{let e=await tA.get("https://books-backend.p.goit.global/books/category-list");return e.data}catch(e){console.log(e)}},tM=async()=>{try{let e=await tA.get("https://books-backend.p.goit.global/books/top-books");return e.data}catch(e){console.log(e)}},tH=async e=>{try{let t=await tA.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t.data}catch(e){console.log(e)}},t$=async e=>{try{let t=await tA.get(`https://books-backend.p.goit.global/books/${e}`);return t.data}catch(e){console.log(e)}},tz=document.querySelector(".side-bar__categories");!async function(){let e=await tD(),t=e.map(e=>`<li tabindex='-1' class="side-bar__categories-item">${e.list_name}</li>`).join("");tz.insertAdjacentHTML("beforeend",t)}();var tJ={};tJ=new URL("save-the-children.e7cb9515.png",import.meta.url).toString();var tW={};tW=new URL("project-hope.65587b00.png",import.meta.url).toString();var tV={};tV=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString();var tK={};tK=new URL("razom.3639a3ee.png",import.meta.url).toString();var tG={};tG=new URL("action-against-hunger.6319825b.png",import.meta.url).toString();var tY={};tY=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString();var tZ={};tZ=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString();var tX={};tX=new URL("world-vision.8a329a07.png",import.meta.url).toString();var tQ={};tQ=new URL("united24.9625498b.png",import.meta.url).toString();var t0=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(tJ).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(tW).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(tV).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(tK).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(tG).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(tY).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(tZ).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(tX).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(tQ).href}];const t1=document.querySelector(".support__list"),t2=document.querySelector(".next"),t4=document.querySelector(".back"),t5=t0.map(function({url:e,title:t,img:r},n){let o=(n+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${o}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${r}" 1x
                src="${r}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function t6(e){t1.style.transform=`translateY(${e}px)`,t2.classList.toggle("btn-hidden"),t4.classList.toggle("btn-hidden")}t1.innerHTML=t5,t2.addEventListener("click",function(){t6(-152)}),t4.addEventListener("click",()=>{t6(0)});const t3=document.querySelector(".books-gallery");!async function(){let e=await tM(),t=e.slice(0,4);console.log(e);let r=t.map(e=>`<div>
        <h2 class="books-gallery__category-title">${e.list_name}</h2>
    <ul class="books-gallery__section">
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[0].book_image}"> <h3>${e.books[0].title}</h3><h4>${e.books[0].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[1].book_image}"> <h3>${e.books[1].title}</h3><h4>${e.books[1].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[2].book_image}"> <h3>${e.books[2].title}</h3><h4>${e.books[2].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[3].book_image}"> <h3>${e.books[3].title}</h3><h4>${e.books[3].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[4].book_image}"> <h3>${e.books[4].title}</h3><h4>${e.books[4].author}</h4> </li>
    </ul></div>`).join("");t3.insertAdjacentHTML("beforeend",r)}();const t8=document.querySelector(".category__title"),t9=document.querySelector(".category__list"),t7=document.querySelector(".side-bar__categories"),re=document.querySelector(".books-gallery"),rt=async e=>{let t=await tH(e),r=t.map(e=>`<li class="category__item" data-id="${e._id}">
        <div class="category__cover"><img class="category__image" alt="book cover" src="${e.book_image}"/></div>
        <h4 class="category__book-title">${e.title}</h4>
        <p class="category__book-author">${e.author}</p>
    </li>`).join("");t9.innerHTML=r},rr=async e=>{if(e.target.closest("li")){re.classList.add("gallery-hidden");let t=e.target.closest("li").textContent;t8.textContent=t,t9.innerHTML="",rt(t)}};t7.addEventListener("click",rr),(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})();// sposób 1
const rn=document.querySelector("#user-email"),ro=document.querySelector("#user-password"),ri=document.querySelector(".registration-modal-form");document.querySelector(".msg");const rs=document.querySelector(".sign-up-modal");document.querySelector(".sign-up-link"),document.querySelector(".sign-in-link"),document.querySelector(".log-out-btn"),document.querySelector(".sign-up-btn");// Function to validate the email
const ra=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),rl=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),ru=(e,t)=>{let r=document.getElementById("emailError"),n=document.getElementById("passwordError");"email"==e?r.innerText=t:"password"==e&&(n.innerText=t)},rc=(e,t)=>{if(!ra(e)){ru("email",emailError="please enter a valid email address");return}if(!rl(t)){ru(ru("password",passwordError="please enter correct password"));return}};//triggers when user submits the form
ri.addEventListener("submit",e=>{e.preventDefault(),rc(rn,ro),document.querySelector("[registration-data-modal]").classList.toggle("visually-hidden"),document.querySelector(".sign-up-btn").classList.toggle("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden")}),rs.addEventListener("click",e=>{e.preventDefault(),rc(rn,ro),document.querySelector("[registration-data-modal]").classList.toggle("visually-hidden"),document.querySelector(".sign-up-btn").classList.toggle("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden"),ri.reset()}),// Focusout event listener. Triggers when the user clicks anywhere else besides the input
rn.addEventListener("focusout",e=>{ra(rn)||(rn.style.borderColor="red",ru("email","Please enter a valid email"),rn.parentElement.classList.add("error"))}),// Focusout event listener triggers when the user clicks anywhere else besides the input
ro.addEventListener("focusout",e=>{rl(ro)||(ro.style.borderColor="red",ru("password","Please enter a valid password"),ro.parentElement.classList.add("error"))});// const signUpBtnModal = document.querySelector('.sign-up-modal');
// const signUpLink = document.querySelector('.sign-up-link');
// const signInLink = document.querySelector('.sign-in-link');
// const logOutHeader = document.querySelector('.log-out-btn');
// const signUpHeader = document.querySelector('.sign-up-btn');
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');
// const inputPassword = document.querySelector('#user-password');
// const registrationForm = document.querySelector('.registration-modal-form');
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const name = form.elements.inputName.value;
//   const email = form.elements.inputEmail.value;
//   const password = form.elements.inputPassword.value;
//   if (inputName === '' || inputPassword === '' || inputEmail === '') {
//     return console.log('Please fill in all the fields!');
//   }
//   console.log(
//     `Name: ${inputName.value}, E-mail: ${inputEmail.value}, Password: ${inputPassword.value}`,
//   );
//   document.querySelector('[registration-data-modal]').classList.toggle('visually-hidden'),
//     document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
//     document.querySelector('.user-btn').classList.remove('visually-hidden'),
//     document.querySelector('.log-out-btn').classList.remove('visually-hidden');
//   Notify.success(`You're logged in!`);
//   registrationForm.reset();
// }
// registrationForm.addEventListener('submit', handleSubmit);
// sposób 3
// const form = document.querySelector('.registration-modal-form');
// const btnSubmit = document.querySelector('.sign-up-modal');
// const inputName = document.querySelector('#user-name');
// const inputEmail = document.querySelector('#user-email');
// form.reset();
// const regexName = /^[\p{L}\s]+$/u;
// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const validateButton = (button, elements) => {
//   const allValid = elements.every(element => element.classList.contains('valid'));
//   if (allValid) {
//     button.disabled = false;
//     button.classList.remove('disabled');
//   } else {
//     button.disabled = true;
//     button.classList.add('disabled');
//   }
// };
// const doValidation = (element, message, regex, button, elements) => {
//   if (!regex.test(element.value)) {
//     element.classList.remove('valid');
//     element.classList.add('invalid');
//     message.classList.remove('warning-valid');
//     message.classList.add('warning-invalid');
//   } else {
//     element.classList.add('valid');
//     element.classList.remove('invalid');
//     message.classList.add('warning-valid');
//     message.classList.remove('warning-invalid');
//     document.querySelector('[registration-data-modal]').classList.toggle('visually-hidden'),
//       document.querySelector('.sign-up-btn').classList.toggle('visually-hidden'),
//       document.querySelector('.user-btn').classList.remove('visually-hidden'),
//       document.querySelector('.log-out-btn').classList.remove('visually-hidden');
//   }
//   validateButton(button, elements);
// };
// const allElementsToValidate = [inputName, inputEmail];
// inputName.addEventListener('input', () =>
//   doValidation(inputName, warningMessageName, regexName, btnSubmit, allElementsToValidate),
// );
// inputName.addEventListener('blur', () =>
//   doValidation(inputName, warningMessageName, regexName, btnSubmit, allElementsToValidate),
// );
// inputEmail.addEventListener('input', () =>
//   doValidation(inputEmail, warningMessageEmail, regexEmail, btnSubmit, allElementsToValidate),
// );
// inputEmail.addEventListener('blur', () =>
//   doValidation(inputEmail, warningMessageEmail, regexEmail, btnSubmit, allElementsToValidate),
// );
// document.addEventListener('DOMContentLoaded', event => {
//   form.reset();
// });
// btnSubmit.addEventListener('click', doValidation);
// import { Notify } from 'notiflix';
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
var rf={},rh={},rp={};rp=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var rd={},rg={},ry={};ry="object"==typeof a&&a&&a.Object===Object&&a;/** Detect free variable `self`. */var rm="object"==typeof self&&self&&self.Object===Object&&self;rg=ry||rm||Function("return this")(),rd=function(){return rg.Date.now()};var rb={},rv={},rw={},rE=/\s/;rw=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&rE.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var rS=/^\s+/;rv=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,rw(e)+1).replace(rS,""):e};var rA={},r_={},rO={};rO=rg.Symbol;var rR={},rL=Object.prototype,rk=rL.hasOwnProperty,rT=rL.toString,rU=rO?rO.toStringTag:void 0;rR=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=rk.call(e,rU),r=e[rU];try{e[rU]=void 0;var n=!0}catch(e){}var o=rT.call(e);return n&&(t?e[rU]=r:delete e[rU]),o};var rB={},rC=Object.prototype.toString;rB=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return rC.call(e)};/** Built-in value references. */var rj=rO?rO.toStringTag:void 0;r_=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":rj&&rj in Object(e)?rR(e):rB(e)};var rx={};rx=/**
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
 */function(e){return null!=e&&"object"==typeof e},rA=/**
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
 */function(e){return"symbol"==typeof e||rx(e)&&"[object Symbol]"==r_(e)};/** Used as references for various `Number` constants. */var rN=0/0,rP=/^[-+]0x[0-9a-f]+$/i,rq=/^0b[01]+$/i,rI=/^0o[0-7]+$/i,rF=parseInt;rb=/**
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
 */function(e){if("number"==typeof e)return e;if(rA(e))return rN;if(rp(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=rp(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=rv(e);var r=rq.test(e);return r||rI.test(e)?rF(e.slice(2),r?2:8):rP.test(e)?rN:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var rD=Math.max,rM=Math.min;rh=/**
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
 */function(e,t,r){var n,o,i,s,a,l,u=0,c=!1,f=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,u=t,s=e.apply(i,r)}function d(e){var r=e-l,n=e-u;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||r>=t||r<0||f&&n>=i}function g(){var e,r,n,o=rd();if(d(o))return y(o);// Restart the timer.
a=setTimeout(g,(e=o-l,r=o-u,n=t-e,f?rM(n,i-r):n))}function y(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(a=void 0,h&&n)?p(e):(n=o=void 0,s))}function m(){var e,r=rd(),i=d(r);if(n=arguments,o=this,l=r,i){if(void 0===a)return(// Reset any `maxWait` timer.
u=e=l,// Start the timer for the trailing edge.
a=setTimeout(g,t),c?p(e):s);if(f)return(// Handle invocations in a tight loop.
clearTimeout(a),a=setTimeout(g,t),p(l))}return void 0===a&&(a=setTimeout(g,t)),s}return t=rb(t)||0,rp(r)&&(c=!!r.leading,i=(f="maxWait"in r)?rD(rb(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),m.cancel=function(){void 0!==a&&clearTimeout(a),u=0,n=l=o=a=void 0},m.flush=function(){return void 0===a?s:y(rd())},m},rf=/**
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
 */function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return rp(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),rh(e,t,{leading:n,maxWait:t,trailing:o})};const rH=document.querySelector(".scroll-to-top"),r$=((n=rf)&&n.__esModule?n.default:n)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function r(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(rH.addEventListener("click",r),rH.classList.remove("unvisually")):(rH.classList.add("unvisually"),rH.addEventListener("click",r))},500);window.addEventListener("scroll",r$);let rz=null;const rJ=document.querySelector(".popup__img"),rW=document.querySelector(".popup__amazon"),rV=document.querySelector(".popup__description-details"),rK=document.querySelector(".popup__btn-add"),rG=document.querySelector(".popup__btn-remove"),rY=document.querySelector(".popup__btn-close"),rZ=document.querySelector(".backdrop-popup"),rX=document.querySelector(".popup"),rQ=document.querySelector(".popup__comment"),r0=document.querySelector(".popup__shops-list"),r1=document.querySelector(".category__list"),r2=document.querySelector(".books-gallery__section");let r4=!1;const r5=()=>{r4?(rK.classList.add("popup__btn-text-hidden"),rG.classList.remove("popup__btn-text-hidden"),rQ.classList.remove("popup__btn-text-hidden")):(rK.classList.remove("popup__btn-text-hidden"),rG.classList.add("popup__btn-text-hidden"),rQ.classList.add("popup__btn-text-hidden"))},r6=async e=>{let t=await t$(e);rz=t;let r=JSON.parse(localStorage.getItem("books"))||[];r4=r.some(e=>e._id===t._id),r5(),rJ.src=t.book_image,rW.href=t.amazon_product_url;let n=`<h2 class="popup__title">${t.title}</h2>
                <p class="popup__author">${t.author}</p>
                <p class="popup__text">${t.description}</p>`;rV.innerHTML=n;let o=t.buy_links.slice(1).map(e=>`<li class="popup__shops-item"><a class="popup__shops-link" href="${e.url}" target="_blank">${e.name}</a></li>`).join("");r0.innerHTML=o},r3=()=>{rZ.classList.add("popup-is-hidden"),rY.removeEventListener("click",r3),rZ.removeEventListener("click",r8),document.removeEventListener("keydown",r9)},r8=e=>{e.target===rZ&&r3()};rX.addEventListener("click",e=>{e.stopPropagation()});const r9=e=>{"Escape"===e.code&&r3()},r7=e=>{if(e.target.closest("li")){let t=e.target.closest("li").dataset.id;r6(t),rY.addEventListener("click",r3),rZ.addEventListener("click",r8),document.addEventListener("keydown",r9),rZ.classList.remove("popup-is-hidden")}};r1.addEventListener("click",r7),r2.addEventListener("click",r7),rG.addEventListener("click",()=>{if(!rz)return;let e=JSON.parse(localStorage.getItem("books"))||[],t=e.filter(e=>e._id!==rz._id);localStorage.setItem("books",JSON.stringify(t)),r4=!1,r5()}),rK.addEventListener("click",()=>{if(!rz)return;let e=JSON.parse(localStorage.getItem("books"))||[],t=e.some(e=>e._id===rz._id);t||(e.push(rz),localStorage.setItem("books",JSON.stringify(e))),r4=!0,r5()});// toggleDarkThemePopUp();
// openPopUp();
// localStorage.clear();
//# sourceMappingURL=index.dd8f24d8.js.map

//# sourceMappingURL=index.dd8f24d8.js.map
