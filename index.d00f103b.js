let e;var t,r,n,o,i,s,a=globalThis;(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{let r="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");let n=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",n),r.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const u=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu");l.disabled=!0,u.addEventListener("click",()=>{setTimeout(()=>{u.disabled=!0,l.disabled=!1},500)}),l.addEventListener("click",()=>{setTimeout(()=>{l.disabled=!0,u.disabled=!1},500)});const c=document.querySelector(".theme-button"),f=document.querySelector("body");let h=localStorage.getItem("theme")||"light-theme";function p(e,t){return function(){return e.apply(t,arguments)}}f.classList.add(h),c.addEventListener("click",()=>{"dark-theme"===h?(f.classList.remove("dark-theme"),h="light-theme"):(f.classList.add("dark-theme"),h="dark-theme"),localStorage.setItem("theme",h)});// utils is a library of generic helper functions non-specific to axios
const{toString:d}=Object.prototype,{getPrototypeOf:g}=Object,m=(t=Object.create(null),e=>{let r=d.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),y=e=>(e=e.toLowerCase(),t=>m(t)===e),b=e=>t=>typeof t===e,{isArray:v}=Array,w=b("undefined"),E=y("ArrayBuffer"),S=b("string"),A=b("function"),O=b("number"),R=e=>null!==e&&"object"==typeof e,L=e=>{if("object"!==m(e))return!1;let t=g(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_=y("Date"),T=y("File"),k=y("Blob"),U=y("FileList"),B=y("URLSearchParams");/**
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
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),v(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;for(n=0;n<s;n++)o=i[n],t.call(null,e[o],o,e)}}}function C(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),o=n.length;for(;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}const j=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:a,N=e=>!w(e)&&e!==j,P=(r="undefined"!=typeof Uint8Array&&g(Uint8Array),e=>r&&e instanceof r),I=y("HTMLFormElement"),F=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),q=y("RegExp"),D=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};x(r,(r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)}),Object.defineProperties(e,n)},M="abcdefghijklmnopqrstuvwxyz",H="0123456789",z={DIGIT:H,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+H},$=y("AsyncFunction");var J={isArray:v,isArrayBuffer:E,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!w(e)&&null!==e.constructor&&!w(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||A(e.append)&&("formdata"===(t=m(e))||// detect form-data instance
"object"===t&&A(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&E(e.buffer)},isString:S,isNumber:O,isBoolean:e=>!0===e||!1===e,isObject:R,isPlainObject:L,isUndefined:w,isDate:_,isFile:T,isBlob:k,isRegExp:q,isFunction:A,isStream:e=>R(e)&&A(e.pipe),isURLSearchParams:B,isTypedArray:P,isFileList:U,forEach:x,merge:/**
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
 */function e(){let{caseless:t}=N(this)&&this||{},r={},n=(n,o)=>{let i=t&&C(r,o)||o;L(r[i])&&L(n)?r[i]=e(r[i],n):L(n)?r[i]=e({},n):v(n)?r[i]=n.slice():r[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&x(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(x(t,(t,n)=>{r&&A(t)?e[n]=p(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==r&&g(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:m,kindOfTest:y,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(v(e))return e;let t=e.length;if(!O(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],o=n.call(e);for(;(r=o.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:I,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:D,freezeMethods:e=>{D(e,(t,r)=>{// skip restricted props in strict mode
if(A(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(A(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(v(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:C,global:j,isContextDefined:N,ALPHABET:z,generateString:(e=16,t=z.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&A(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(R(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let o=v(e)?[]:{};return x(e,(e,t)=>{let i=r(e,n+1);w(i)||(o[t]=i)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:$,isThenable:e=>e&&(R(e)||A(e))&&A(e.then)&&A(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function W(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}J.inherits(W,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:J.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V=W.prototype,K={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{K[e]={value:e}}),Object.defineProperties(W,K),Object.defineProperty(V,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
W.from=(e,t,r,n,o,i)=>{let s=Object.create(V);return J.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),W.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s},o=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(e,t,r){for(var n,o=[],i=t;i<r;i+=3)o.push(G[(n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]))>>18&63]+G[n>>12&63]+G[n>>6&63]+G[63&n]);return o.join("")}(e,i,i+16383>s?s:i+16383));return 1===n?o.push(G[(t=e[r-1])>>2]+G[t<<4&63]+"=="):2===n&&o.push(G[(t=(e[r-2]<<8)+e[r-1])>>10]+G[t>>4&63]+G[t<<2&63]+"="),o.join("")};for(var G=[],Y=[],Z="undefined"!=typeof Uint8Array?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q=0,ee=X.length;Q<ee;++Q)G[Q]=X[Q],Y[X.charCodeAt(Q)]=Q;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
Y["-".charCodeAt(0)]=62,Y["_".charCodeAt(0)]=63,i=function(e,t,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,c=-7,f=r?o-1:0,h=r?-1:1,p=e[t+f];for(f+=h,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+e[t+f],f+=h,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+e[t+f],f+=h,c-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),i-=l}return(p?-1:1)*s*Math.pow(2,i-n)},s=function(e,t,r,n,o,i){var s,a,u,l=8*i-o-1,c=(1<<l)-1,f=c>>1,h=23===o?5960464477539062e-23:0,p=n?0:i-1,d=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+f>=1?t+=h/u:t+=h*Math.pow(2,1-f),t*u>=2&&(s++,u/=2),s+f>=c?(a=0,s=c):s+f>=1?(a=(t*u-1)*Math.pow(2,o),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;e[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;e[r+p]=255&s,p+=d,s/=256,l-=8);e[r+p-d]|=128*g};var et="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function er(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var t=new Uint8Array(e);return Object.setPrototypeOf(t,en.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function en(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return es(e)}return eo(e,t,r)}function eo(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!en.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|ec(e,t),n=er(r),o=n.write(e,t);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(eR(e,Uint8Array)){var t=new Uint8Array(e);return eu(t.buffer,t.byteOffset,t.byteLength)}return ea(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(eR(e,ArrayBuffer)||e&&eR(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(eR(e,SharedArrayBuffer)||e&&eR(e.buffer,SharedArrayBuffer)))return eu(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return en.from(n,t,r);var o=function(e){if(en.isBuffer(e)){var t,r=0|el(e.length),n=er(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?er(0):ea(e):"Buffer"===e.type&&Array.isArray(e.data)?ea(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return en.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ei(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function es(e){return ei(e),er(e<0?0:0|el(e))}function ea(e){for(var t=e.length<0?0:0|el(e.length),r=er(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function eu(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),en.prototype),n)}function el(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function ec(e,t){if(en.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||eR(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return eS(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return eA(e).length;default:if(o)return n?-1:eS(e).length// assume utf8
;t=(""+t).toLowerCase(),o=!0}}function ef(e,t,r){var n,i,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=eL[e[i]];return o}(this,t,r);case"utf8":case"utf-8":return eg(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?o(this):o(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=e.slice(t,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function eh(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function ep(e,t,r,n,o){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=en.from(t,n)),en.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:ed(e,t,r,n,o));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):ed(e,[t],r,n,o);throw TypeError("val must be string, number or Buffer")}function ed(e,t,r,n,o){var i,s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){var c=-1;for(i=r;i<a;i++)if(l(e,i)===l(t,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===u)return c*s}else -1!==c&&(i-=i-c),c=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var f=!0,h=0;h<u;h++)if(l(e,i+h)!==l(t,h)){f=!1;break}if(f)return i}return -1}function eg(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i,s,a,u,l=e[o],c=null,f=l>239?4:l>223?3:l>191?2:1;if(o+f<=r)switch(f){case 1:l<128&&(c=l);break;case 2:(192&(i=e[o+1]))==128&&(u=(31&l)<<6|63&i)>127&&(c=u);break;case 3:i=e[o+1],s=e[o+2],(192&i)==128&&(192&s)==128&&(u=(15&l)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:i=e[o+1],s=e[o+2],a=e[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(u=(15&l)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(c=u)}null===c?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
c=65533,f=1):c>65535&&(// encode to utf16 (surrogate pair dance)
c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=f}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function em(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function ey(e,t,r,n,o,i){if(!en.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function eb(e,t,r,n,o,i){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function ev(e,t,r,n,o){return t=+t,r>>>=0,o||eb(e,t,r,4,34028234663852886e22,-34028234663852886e22),s(e,t,r,n,23,4),r+4}function ew(e,t,r,n,o){return t=+t,r>>>=0,o||eb(e,t,r,8,17976931348623157e292,-17976931348623157e292),s(e,t,r,n,52,8),r+8}/**
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
 */en.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),en.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(en.prototype,"parent",{enumerable:!0,get:function(){if(en.isBuffer(this))return this.buffer}}),Object.defineProperty(en.prototype,"offset",{enumerable:!0,get:function(){if(en.isBuffer(this))return this.byteOffset}}),en.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/en.from=function(e,t,r){return eo(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(en.prototype,Uint8Array.prototype),Object.setPrototypeOf(en,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/en.alloc=function(e,t,r){return(ei(e),e<=0)?er(e):void 0!==t?"string"==typeof r?er(e).fill(t,r):er(e).fill(t):er(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */en.allocUnsafe=function(e){return es(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */en.allocUnsafeSlow=function(e){return es(e)},en.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==en.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},en.compare=function(e,t){if(eR(e,Uint8Array)&&(e=en.from(e,e.offset,e.byteLength)),eR(t,Uint8Array)&&(t=en.from(t,t.offset,t.byteLength)),!en.isBuffer(e)||!en.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},en.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},en.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return en.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=en.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var i=e[r];if(eR(i,Uint8Array))o+i.length>n.length?en.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(en.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},en.byteLength=ec,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
en.prototype._isBuffer=!0,en.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)eh(this,t,t+1);return this},en.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)eh(this,t,t+3),eh(this,t+1,t+2);return this},en.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)eh(this,t,t+7),eh(this,t+1,t+6),eh(this,t+2,t+5),eh(this,t+3,t+4);return this},en.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?eg(this,0,e):ef.apply(this,arguments)},en.prototype.toLocaleString=en.prototype.toString,en.prototype.equals=function(e){if(!en.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===en.compare(this,e)},en.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},et&&(en.prototype[et]=en.prototype.inspect),en.prototype.compare=function(e,t,r,n,o){if(eR(e,Uint8Array)&&(e=en.from(e,e.offset,e.byteLength)),!en.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var i=o-n,s=r-t,a=Math.min(i,s),u=this.slice(n,o),l=e.slice(t,r),c=0;c<a;++c)if(u[c]!==l[c]){i=u[c],s=l[c];break}return i<s?-1:s<i?1:0},en.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},en.prototype.indexOf=function(e,t,r){return ep(this,e,t,r,!0)},en.prototype.lastIndexOf=function(e,t,r){return ep(this,e,t,r,!1)},en.prototype.write=function(e,t,r,n){// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,u,l,c,f,h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(a!=a)break;e[r+s]=a}return s}(this,e,t,r);case"utf8":case"utf-8":return o=t,i=r,eO(eS(e,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=t,a=r,eO(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,l=r,eO(eA(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,f=r,eO(function(e,t){for(var r,n,o=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(e,this.length-c),this,c,f);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},en.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},en.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,en.prototype),n)},en.prototype.readUintLE=en.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||em(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},en.prototype.readUintBE=en.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||em(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},en.prototype.readUint8=en.prototype.readUInt8=function(e,t){return e>>>=0,t||em(e,1,this.length),this[e]},en.prototype.readUint16LE=en.prototype.readUInt16LE=function(e,t){return e>>>=0,t||em(e,2,this.length),this[e]|this[e+1]<<8},en.prototype.readUint16BE=en.prototype.readUInt16BE=function(e,t){return e>>>=0,t||em(e,2,this.length),this[e]<<8|this[e+1]},en.prototype.readUint32LE=en.prototype.readUInt32LE=function(e,t){return e>>>=0,t||em(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},en.prototype.readUint32BE=en.prototype.readUInt32BE=function(e,t){return e>>>=0,t||em(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},en.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||em(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},en.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||em(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},en.prototype.readInt8=function(e,t){return(e>>>=0,t||em(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},en.prototype.readInt16LE=function(e,t){e>>>=0,t||em(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},en.prototype.readInt16BE=function(e,t){e>>>=0,t||em(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},en.prototype.readInt32LE=function(e,t){return e>>>=0,t||em(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},en.prototype.readInt32BE=function(e,t){return e>>>=0,t||em(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},en.prototype.readFloatLE=function(e,t){return e>>>=0,t||em(e,4,this.length),i(this,e,!0,23,4)},en.prototype.readFloatBE=function(e,t){return e>>>=0,t||em(e,4,this.length),i(this,e,!1,23,4)},en.prototype.readDoubleLE=function(e,t){return e>>>=0,t||em(e,8,this.length),i(this,e,!0,52,8)},en.prototype.readDoubleBE=function(e,t){return e>>>=0,t||em(e,8,this.length),i(this,e,!1,52,8)},en.prototype.writeUintLE=en.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;ey(this,e,t,r,o,0)}var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},en.prototype.writeUintBE=en.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;ey(this,e,t,r,o,0)}var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},en.prototype.writeUint8=en.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,1,255,0),this[t]=255&e,t+1},en.prototype.writeUint16LE=en.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},en.prototype.writeUint16BE=en.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},en.prototype.writeUint32LE=en.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},en.prototype.writeUint32BE=en.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},en.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);ey(this,e,t,r,o-1,-o)}var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},en.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var o=Math.pow(2,8*r-1);ey(this,e,t,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},en.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},en.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},en.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},en.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},en.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||ey(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},en.prototype.writeFloatLE=function(e,t,r){return ev(this,e,t,!0,r)},en.prototype.writeFloatBE=function(e,t,r){return ev(this,e,t,!1,r)},en.prototype.writeDoubleLE=function(e,t,r){return ew(this,e,t,!0,r)},en.prototype.writeDoubleBE=function(e,t,r){return ew(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
en.prototype.copy=function(e,t,r,n){if(!en.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
en.prototype.fill=function(e,t,r,n){// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!en.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var o,i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=en.isBuffer(e)?e:en.from(e,n),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%a]}return this};// HELPER FUNCTIONS
// ================
var eE=/[^+/0-9A-Za-z-_]/g;function eS(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],s=0;s<n;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function eA(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),o=n[0],i=n[1],s=new Z((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)t=Y[e.charCodeAt(r)]<<18|Y[e.charCodeAt(r+1)]<<12|Y[e.charCodeAt(r+2)]<<6|Y[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===i&&(t=Y[e.charCodeAt(r)]<<2|Y[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===i&&(t=Y[e.charCodeAt(r)]<<10|Y[e.charCodeAt(r+1)]<<4|Y[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(eE,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function eO(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length)&&!(o>=e.length);++o)t[o+r]=e[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function eR(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var eL=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)t[n+o]=e[r]+e[o];return t}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function e_(e){return J.isPlainObject(e)||J.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function eT(e){return J.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function ek(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=eT(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}const eU=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});var eB=/**
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
 */function(e,t,r){if(!J.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
r=J.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!J.isUndefined(t[e])});let n=r.metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&J.isSpecCompliantForm(t);if(!J.isFunction(o))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(J.isDate(e))return e.toISOString();if(!u&&J.isBlob(e))throw new W("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(e)||J.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):en.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(e,r,o){let a=e;if(e&&!o&&"object"==typeof e){if(J.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var u;if(J.isArray(e)&&(u=e,J.isArray(u)&&!u.some(e_))||(J.isFileList(e)||J.endsWith(r,"[]"))&&(a=J.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=eT(r),a.forEach(function(e,n){J.isUndefined(e)||null===e||t.append(!0===s?ek([r],n,i):null===s?r:r+"[]",l(e))}),!1)}}return!!e_(e)||(t.append(ek(o,r,i),l(e)),!1)}let f=[],h=Object.assign(eU,{defaultVisitor:c,convertValue:l,isVisitable:e_});if(!J.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!J.isUndefined(r)){if(-1!==f.indexOf(r))throw Error("Circular reference detected in "+n.join("."));f.push(r),J.forEach(r,function(r,i){let s=!(J.isUndefined(r)||null===r)&&o.call(t,r,J.isString(i)?i.trim():i,n,h);!0===s&&e(r,n?n.concat(i):[i])}),f.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function ex(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function eC(e,t){this._pairs=[],e&&eB(e,this,t)}const ej=eC.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function eN(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eP(e,t,r){let n;/*eslint no-param-reassign:0*/if(!t)return e;let o=r&&r.encode||eN,i=r&&r.serialize;if(n=i?i(t,r):J.isURLSearchParams(t)?t.toString():new eC(t,r).toString(o)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}ej.append=function(e,t){this._pairs.push([e,t])},ej.toString=function(e){let t=e?function(t){return e.call(this,t,ex)}:ex;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var eI=class{constructor(){this.handlers=[]}/**
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
   */forEach(e){J.forEach(this.handlers,function(t){null!==t&&e(t)})}},eF={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eq="undefined"!=typeof URLSearchParams?URLSearchParams:eC,eD="undefined"!=typeof FormData?FormData:null,eM="undefined"!=typeof Blob?Blob:null;/**
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
 */const eH=("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document,ez="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var e$={classes:{URLSearchParams:eq,FormData:eD,Blob:eM},isStandardBrowserEnv:eH,isStandardBrowserWebWorkerEnv:ez,protocols:["http","https","file","blob","url","data"]},eJ=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(J.isFormData(e)&&J.isFunction(e.entries)){let t={};return J.forEachEntry(e,(e,r)=>{!function e(t,r,n,o){let i=t[o++],s=Number.isFinite(+i),a=o>=t.length;if(i=!i&&J.isArray(n)?n.length:i,a)return J.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&J.isObject(n[i])||(n[i]=[]);let u=e(t,r,n[i],o);return u&&J.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!s}(J.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const eW={transitional:eF,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=J.isObject(e);i&&J.isHTMLForm(e)&&(e=new FormData(e));let s=J.isFormData(e);if(s)return o&&o?JSON.stringify(eJ(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=e,u=this.formSerializer,eB(a,new e$.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return e$.isNode&&J.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=J.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return eB(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(J.isString(e))try{return(0,JSON.parse)(e),J.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eW.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&J.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw W.from(e,W.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:e$.classes.FormData,Blob:e$.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],e=>{eW.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const eV=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */eK=e=>{let t,r,n;let o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&eV[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o};const eG=Symbol("internals");function eY(e){return e&&String(e).trim().toLowerCase()}function eZ(e){return!1===e||null==e?e:J.isArray(e)?e.map(eZ):String(e)}const eX=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eQ(e,t,r,n,o){if(J.isFunction(n))return n.call(this,t,r);if(o&&(t=r),J.isString(t)){if(J.isString(n))return -1!==t.indexOf(n);if(J.isRegExp(n))return n.test(t)}}class e0{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function o(e,t,r){let o=eY(t);if(!o)throw Error("header name must be a non-empty string");let i=J.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||t]=eZ(e))}let i=(e,t)=>J.forEach(e,(e,r)=>o(e,r,t));return J.isPlainObject(e)||e instanceof this.constructor?i(e,t):J.isString(e)&&(e=e.trim())&&!eX(e)?i(eK(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=eY(e)){let r=J.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(J.isFunction(t))return t.call(this,e,r);if(J.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=eY(e)){let r=J.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||eQ(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function o(e){if(e=eY(e)){let o=J.findKey(r,e);o&&(!t||eQ(r,r[o],o,t))&&(delete r[o],n=!0)}}return J.isArray(e)?e.forEach(o):o(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let o=t[r];(!e||eQ(this,this[o],o,e,!0))&&(delete this[o],n=!0)}return n}normalize(e){let t=this,r={};return J.forEach(this,(n,o)=>{let i=J.findKey(r,o);if(i){t[i]=eZ(n),delete t[o];return}let s=e?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(o).trim();s!==o&&delete t[o],t[s]=eZ(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return J.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&J.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[eG]=this[eG]={accessors:{}},r=t.accessors,n=this.prototype;function o(e){let t=eY(e);r[t]||(!function(e,t){let r=J.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(n,e),r[t]=!0)}return J.isArray(e)?e.forEach(o):o(e),this}}function e1(e,t){let r=this||eW,n=t||r,o=e0.from(n.headers),i=n.data;return J.forEach(e,function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function e2(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function e4(e,t,r){W.call(this,null==e?"canceled":e,W.ERR_CANCELED,t,r),this.name="CanceledError"}e0.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),J.reduceDescriptors(e0.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),J.freezeMethods(e0),J.inherits(e4,W,{__CANCEL__:!0});var e5=e$.isStandardBrowserEnv?{write:function(e,t,r,n,o,i){let s=[];s.push(e+"="+encodeURIComponent(t)),J.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),J.isString(n)&&s.push("path="+n),J.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function e6(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var e3=e$.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
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
    */return e=n(window.location.href),function(t){let r=J.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},e8=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),o=Array(e),i=0,s=0;return t=void 0!==t?t:1e3,function(a){let u=Date.now(),l=o[s];r||(r=u),n[i]=a,o[i]=u;let c=s,f=0;for(;c!==i;)f+=n[c++],c%=e;if((i=(i+1)%e)===s&&(s=(s+1)%e),u-r<t)return;let h=l&&u-l;return h?Math.round(1e3*f/h):void 0}};function e9(e,t){let r=0,n=e8(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a),l=i<=s;r=i;let c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const e7="undefined"!=typeof XMLHttpRequest;var te=e7&&function(e){return new Promise(function(t,r){let n,o,i=e.data,s=e0.from(e.headers).normalize(),a=e.responseType;function u(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}J.isFormData(i)&&(e$.isStandardBrowserEnv||e$.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?J.isString(o=s.getContentType())&&s.setContentType(o.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let l=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+r))}let c=e6(e.baseURL,e.url);function f(){if(!l)return;// Prepare the response
let n=e0.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?l.response:l.responseText,i={data:o,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new W("Request failed with status code "+r.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),u()},function(e){r(e),u()},i),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(e.method.toUpperCase(),eP(c,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=e.timeout,"onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(f)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(r(new W("Request aborted",W.ECONNABORTED,e,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new W("Network Error",W.ERR_NETWORK,e,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||eF;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new W(t,n.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,l)),// Clean up request
l=null},e$.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||e3(c))&&e.xsrfCookieName&&e5.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===i&&s.setContentType(null),"setRequestHeader"in l&&J.forEach(s.toJSON(),function(e,t){l.setRequestHeader(t,e)}),J.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e9(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e9(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{l&&(r(!t||t.type?new e4(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let h=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(c);if(h&&-1===e$.protocols.indexOf(h)){r(new W("Unsupported protocol "+h+":",W.ERR_BAD_REQUEST,e));return}// Send the request
l.send(i||null)})};const tt={http:null,xhr:te};J.forEach(tt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});const tr=e=>`- ${e}`,tn=e=>J.isFunction(e)||null===e||!1===e;var to={getAdapter:e=>{let t,r;e=J.isArray(e)?e:[e];let{length:n}=e,o={};for(let i=0;i<n;i++){let n;if(r=t=e[i],!tn(t)&&void 0===(r=tt[(n=String(t)).toLowerCase()]))throw new W(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let e=Object.entries(o).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new W("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(tr).join("\n"):" "+tr(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:tt};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function ti(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new e4(null,e)}function ts(e){ti(e),e.headers=e0.from(e.headers),// Transform request data
e.data=e1.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=to.getAdapter(e.adapter||eW.adapter);return t(e).then(function(t){return ti(e),// Transform response data
t.data=e1.call(e,e.transformResponse,t),t.headers=e0.from(t.headers),t},function(t){return!e2(t)&&(ti(e),t&&t.response&&(t.response.data=e1.call(e,e.transformResponse,t.response),t.response.headers=e0.from(t.response.headers))),Promise.reject(t)})}const ta=e=>e instanceof e0?e.toJSON():e;function tu(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function n(e,t,r){return J.isPlainObject(e)&&J.isPlainObject(t)?J.merge.call({caseless:r},e,t):J.isPlainObject(t)?J.merge({},t):J.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function o(e,t,r){return J.isUndefined(t)?J.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}// eslint-disable-next-line consistent-return
function i(e,t){if(!J.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return J.isUndefined(t)?J.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(ta(e),ta(t),!0)};return J.forEach(Object.keys(Object.assign({},e,t)),function(n){let i=u[n]||o,s=i(e[n],t[n],n);J.isUndefined(s)&&i!==a||(r[n]=s)}),r}const tl="1.5.1",tc={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tf={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tc.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tl+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===e)throw new W(n(o," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!tf[o]&&(tf[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var th={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let i=n[o],s=t[i];if(s){let t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new W("option "+i+" must be "+r,W.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}},validators:tc};const tp=th.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class td{constructor(e){this.defaults=e,this.interceptors={request:new eI,response:new eI}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=tu(this.defaults,t);let{transitional:o,paramsSerializer:i,headers:s}=t;void 0!==o&&th.assertOptions(o,{silentJSONParsing:tp.transitional(tp.boolean),forcedJSONParsing:tp.transitional(tp.boolean),clarifyTimeoutError:tp.transitional(tp.boolean)},!1),null!=i&&(J.isFunction(i)?t.paramsSerializer={serialize:i}:th.assertOptions(i,{encode:tp.function,serialize:tp.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&J.merge(s.common,s[t.method]);s&&J.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=e0.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(l=l&&e.synchronous,u.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let f=0;if(!l){let e=[ts.bind(this),void 0];for(e.unshift.apply(e,u),e.push.apply(e,c),n=e.length,r=Promise.resolve(t);f<n;)r=r.then(e[f++],e[f++]);return r}n=u.length;let h=t;for(f=0;f<n;){let e=u[f++],t=u[f++];try{h=e(h)}catch(e){t.call(this,e);break}}try{r=ts.call(this,h)}catch(e){return Promise.reject(e)}for(f=0,n=c.length;f<n;)r=r.then(c[f++],c[f++]);return r}getUri(e){e=tu(this.defaults,e);let t=e6(e.baseURL,e.url);return eP(t,e.params,e.paramsSerializer)}}J.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/td.prototype[e]=function(t,r){return this.request(tu(r||{},{method:e,url:t,data:(r||{}).data}))}}),J.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,o){return this.request(tu(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}td.prototype[e]=t(),td.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class tg{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new e4(e,n,o),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new tg(function(t){e=t});return{token:t,cancel:e}}}const tm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tm).forEach(([e,t])=>{tm[t]=e});// Create the default instance to be exported
const ty=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new td(t),n=p(td.prototype.request,r);return J.extend(n,td.prototype,r,{allOwnKeys:!0}),J.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(tu(t,r))},n}(eW);// Expose Axios class to allow class inheritance
ty.Axios=td,// Expose Cancel & CancelToken
ty.CanceledError=e4,ty.CancelToken=tg,ty.isCancel=e2,ty.VERSION=tl,ty.toFormData=eB,// Expose AxiosError class
ty.AxiosError=W,// alias for CanceledError for backward compatibility
ty.Cancel=ty.CanceledError,// Expose all/spread
ty.all=function(e){return Promise.all(e)},ty.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
ty.isAxiosError=function(e){return J.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
ty.mergeConfig=tu,ty.AxiosHeaders=e0,ty.formToJSON=e=>eJ(J.isHTMLForm(e)?new FormData(e):e),ty.getAdapter=to.getAdapter,ty.HttpStatusCode=tm,ty.default=ty;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:tb,AxiosError:tv,CanceledError:tw,isCancel:tE,CancelToken:tS,VERSION:tA,all:tO,Cancel:tR,isAxiosError:tL,spread:t_,toFormData:tT,AxiosHeaders:tk,HttpStatusCode:tU,formToJSON:tB,getAdapter:tx,mergeConfig:tC}=ty,tj=async()=>{try{let e=await ty.get("https://books-backend.p.goit.global/books/category-list");return e.data}catch(e){console.log(e)}},tN=async()=>{try{let e=await ty.get("https://books-backend.p.goit.global/books/top-books");return e.data}catch(e){console.log(e)}},tP=async e=>{try{let t=await ty.get(`https://books-backend.p.goit.global/books/${e}`);return t.data}catch(e){console.log(e)}},tI=document.querySelector(".side-bar__categories");!async function(){let e=await tj(),t=e.map(e=>`<li tabindex='-1' class="side-bar__categories-item">${e.list_name}</li>`).join("");tI.insertAdjacentHTML("beforeend",t)}();var tF={};tF=new URL("save-the-children.e7cb9515.png",import.meta.url).toString();var tq={};tq=new URL("project-hope.65587b00.png",import.meta.url).toString();var tD={};tD=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString();var tM={};tM=new URL("razom.3639a3ee.png",import.meta.url).toString();var tH={};tH=new URL("action-against-hunger.6319825b.png",import.meta.url).toString();var tz={};tz=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString();var t$={};t$=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString();var tJ={};tJ=new URL("world-vision.8a329a07.png",import.meta.url).toString();var tW={};tW=new URL("united24.9625498b.png",import.meta.url).toString();var tV=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(tF).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(tq).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(tD).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(tM).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(tH).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(tz).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(t$).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(tJ).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(tW).href}];const tK=document.querySelector(".support__list"),tG=document.querySelector(".next"),tY=document.querySelector(".back"),tZ=tV.map(function({url:e,title:t,img:r},n){let o=(n+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${o}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${r}" 1x
                src="${r}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");function tX(e){tK.style.transform=`translateY(${e}px)`,tG.classList.toggle("btn-hidden"),tY.classList.toggle("btn-hidden")}tK.innerHTML=tZ,tG.addEventListener("click",function(){tX(-152)}),tY.addEventListener("click",()=>{tX(0)});const tQ=document.querySelector(".books-gallery");(async function(){let e=await tN(),t=e.slice(0,4);console.log(e);let r=t.map(e=>`<div>
        <h2 class="books-gallery__category-title">${e.list_name}</h2>
    <ul class="books-gallery__section">
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[0].book_image}"> <h3>${e.books[0].title}</h3><h4>${e.books[0].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[1].book_image}"> <h3>${e.books[1].title}</h3><h4>${e.books[1].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[2].book_image}"> <h3>${e.books[2].title}</h3><h4>${e.books[2].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[3].book_image}"> <h3>${e.books[3].title}</h3><h4>${e.books[3].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[4].book_image}"> <h3>${e.books[4].title}</h3><h4>${e.books[4].author}</h4> </li>
    </ul></div>`).join("");tQ.insertAdjacentHTML("beforeend",r)})(),(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})();// sposób 1
const t0=document.querySelector("#user-email"),t1=document.querySelector("#user-password"),t2=document.querySelector(".registration-modal-form");document.querySelector(".msg");const t4=document.querySelector(".sign-up-modal");document.querySelector(".sign-up-link"),document.querySelector(".sign-in-link"),document.querySelector(".log-out-btn"),document.querySelector(".sign-up-btn");// Function to validate the email
const t5=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),t6=e=>e.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),t3=(e,t)=>{let r=document.getElementById("emailError"),n=document.getElementById("passwordError");"email"==e?r.innerText=t:"password"==e&&(n.innerText=t)},t8=(e,t)=>{if(!t5(e)){t3("email",emailError="please enter a valid email address");return}if(!t6(t)){t3(t3("password",passwordError="please enter correct password"));return}};//triggers when user submits the form
t2.addEventListener("submit",e=>{e.preventDefault(),t8(t0,t1),document.querySelector("[registration-data-modal]").classList.toggle("visually-hidden"),document.querySelector(".sign-up-btn").classList.toggle("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden")}),t4.addEventListener("click",e=>{e.preventDefault(),t8(t0,t1),document.querySelector("[registration-data-modal]").classList.toggle("visually-hidden"),document.querySelector(".sign-up-btn").classList.toggle("visually-hidden"),document.querySelector(".user-btn").classList.remove("visually-hidden"),document.querySelector(".log-out-btn").classList.remove("visually-hidden"),t2.reset()}),// Focusout event listener. Triggers when the user clicks anywhere else besides the input
t0.addEventListener("focusout",e=>{t5(t0)||(t0.style.borderColor="red",t3("email","Please enter a valid email"),t0.parentElement.classList.add("error"))}),// Focusout event listener triggers when the user clicks anywhere else besides the input
t1.addEventListener("focusout",e=>{t6(t1)||(t1.style.borderColor="red",t3("password","Please enter a valid password"),t1.parentElement.classList.add("error"))});// const signUpBtnModal = document.querySelector('.sign-up-modal');
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
var t9={},t7={},re={};re=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var rt={},rr={},rn={};rn="object"==typeof a&&a&&a.Object===Object&&a;/** Detect free variable `self`. */var ro="object"==typeof self&&self&&self.Object===Object&&self;rr=rn||ro||Function("return this")(),rt=function(){return rr.Date.now()};var ri={},rs={},ra={},ru=/\s/;ra=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&ru.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var rl=/^\s+/;rs=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,ra(e)+1).replace(rl,""):e};var rc={},rf={},rh={};rh=rr.Symbol;var rp={},rd=Object.prototype,rg=rd.hasOwnProperty,rm=rd.toString,ry=rh?rh.toStringTag:void 0;rp=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=rg.call(e,ry),r=e[ry];try{e[ry]=void 0;var n=!0}catch(e){}var o=rm.call(e);return n&&(t?e[ry]=r:delete e[ry]),o};var rb={},rv=Object.prototype.toString;rb=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return rv.call(e)};/** Built-in value references. */var rw=rh?rh.toStringTag:void 0;rf=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":rw&&rw in Object(e)?rp(e):rb(e)};var rE={};rE=/**
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
 */function(e){return null!=e&&"object"==typeof e},rc=/**
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
 */function(e){return"symbol"==typeof e||rE(e)&&"[object Symbol]"==rf(e)};/** Used as references for various `Number` constants. */var rS=0/0,rA=/^[-+]0x[0-9a-f]+$/i,rO=/^0b[01]+$/i,rR=/^0o[0-7]+$/i,rL=parseInt;ri=/**
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
 */function(e){if("number"==typeof e)return e;if(rc(e))return rS;if(re(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=re(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=rs(e);var r=rO.test(e);return r||rR.test(e)?rL(e.slice(2),r?2:8):rA.test(e)?rS:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var r_=Math.max,rT=Math.min;t7=/**
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
 */function(e,t,r){var n,o,i,s,a,u,l=0,c=!1,f=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,l=t,s=e.apply(i,r)}function d(e){var r=e-u,n=e-l;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===u||r>=t||r<0||f&&n>=i}function g(){var e,r,n,o=rt();if(d(o))return m(o);// Restart the timer.
a=setTimeout(g,(e=o-u,r=o-l,n=t-e,f?rT(n,i-r):n))}function m(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(a=void 0,h&&n)?p(e):(n=o=void 0,s))}function y(){var e,r=rt(),i=d(r);if(n=arguments,o=this,u=r,i){if(void 0===a)return(// Reset any `maxWait` timer.
l=e=u,// Start the timer for the trailing edge.
a=setTimeout(g,t),c?p(e):s);if(f)return(// Handle invocations in a tight loop.
clearTimeout(a),a=setTimeout(g,t),p(u))}return void 0===a&&(a=setTimeout(g,t)),s}return t=ri(t)||0,re(r)&&(c=!!r.leading,i=(f="maxWait"in r)?r_(ri(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=u=o=a=void 0},y.flush=function(){return void 0===a?s:m(rt())},y},t9=/**
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
 */function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return re(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),t7(e,t,{leading:n,maxWait:t,trailing:o})};const rk=document.querySelector(".scroll-to-top"),rU=((n=t9)&&n.__esModule?n.default:n)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function r(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(rk.addEventListener("click",r),rk.classList.remove("unvisually")):(rk.classList.add("unvisually"),rk.addEventListener("click",r))},500);window.addEventListener("scroll",rU);let rB=null;const rx=document.querySelector(".popup__img"),rC=document.querySelector(".popup__amazon"),rj=document.querySelector(".popup__description-details"),rN=document.querySelector(".popup__btn-add"),rP=document.querySelector(".popup__btn-remove"),rI=document.querySelector(".popup__btn-close"),rF=document.querySelector(".backdrop-popup"),rq=document.querySelector(".popup"),rD=document.querySelector(".popup__comment"),rM=document.querySelector(".popup__shops-list"),rH=document.querySelector(".category__list"),rz=document.querySelector(".books-gallery__section");let r$=!1;const rJ=()=>{r$?(rN.classList.add("popup__btn-text-hidden"),rP.classList.remove("popup__btn-text-hidden"),rD.classList.remove("popup__btn-text-hidden")):(rN.classList.remove("popup__btn-text-hidden"),rP.classList.add("popup__btn-text-hidden"),rD.classList.add("popup__btn-text-hidden"))},rW=async e=>{let t=await tP(e);rB=t;let r=JSON.parse(localStorage.getItem("books"))||[];r$=r.some(e=>e._id===t._id),rJ(),rx.src=t.book_image,rC.href=t.amazon_product_url;let n=`<h2 class="popup__title">${t.title}</h2>
                <p class="popup__author">${t.author}</p>
                <p class="popup__text">${t.description}</p>`;rj.innerHTML=n;let o=t.buy_links.slice(1).map(e=>`<li class="popup__shops-item"><a class="popup__shops-link" href="${e.url}" target="_blank">${e.name}</a></li>`).join("");rM.innerHTML=o},rV=()=>{rF.classList.add("popup-is-hidden"),rI.removeEventListener("click",rV),rF.removeEventListener("click",rK),document.removeEventListener("keydown",rG)},rK=e=>{e.target===rF&&rV()};rq.addEventListener("click",e=>{e.stopPropagation()});const rG=e=>{"Escape"===e.code&&rV()},rY=e=>{if(e.target.closest("li")){let t=e.target.closest("li").dataset.id;rW(t),rI.addEventListener("click",rV),rF.addEventListener("click",rK),document.addEventListener("keydown",rG),rF.classList.remove("popup-is-hidden")}};rH.addEventListener("click",rY),rz.addEventListener("click",rY),rP.addEventListener("click",()=>{if(!rB)return;let e=JSON.parse(localStorage.getItem("books"))||[],t=e.filter(e=>e._id!==rB._id);localStorage.setItem("books",JSON.stringify(t)),r$=!1,rJ()}),rN.addEventListener("click",()=>{if(!rB)return;let e=JSON.parse(localStorage.getItem("books"))||[],t=e.some(e=>e._id===rB._id);t||(e.push(rB),localStorage.setItem("books",JSON.stringify(e))),r$=!0,rJ()});// toggleDarkThemePopUp();
// openPopUp();
// localStorage.clear();
//# sourceMappingURL=index.d00f103b.js.map

//# sourceMappingURL=index.d00f103b.js.map
