let t;var e,r,n,o,i,s=globalThis,a={},u={},l=s.parcelRequired7c6;function f(t,e){return function(){return t.apply(e,arguments)}}null==l&&((l=function(t){if(t in a)return a[t].exports;if(t in u){var e=u[t];delete u[t];var r={id:t,exports:{}};return a[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){u[t]=e},s.parcelRequired7c6=l),l.register,l("kM5jX"),l("haS5e"),l("865h4"),l("fQwj1");// utils is a library of generic helper functions non-specific to axios
const{toString:c}=Object.prototype,{getPrototypeOf:h}=Object,p=(e=Object.create(null),t=>{let r=c.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),d=t=>(t=t.toLowerCase(),e=>p(e)===t),y=t=>e=>typeof e===t,{isArray:g}=Array,m=y("undefined"),b=d("ArrayBuffer"),E=y("string"),w=y("function"),v=y("number"),A=t=>null!==t&&"object"==typeof t,S=t=>{if("object"!==p(t))return!1;let e=h(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},O=d("Date"),_=d("File"),R=d("Blob"),T=d("FileList"),k=d("URLSearchParams");/**
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
 */function U(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),g(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;for(n=0;n<s;n++)o=i[n],e.call(null,t[o],o,t)}}}function B(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}const L=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,C=t=>!m(t)&&t!==L,x=(r="undefined"!=typeof Uint8Array&&h(Uint8Array),t=>r&&t instanceof r),j=d("HTMLFormElement"),N=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),P=d("RegExp"),I=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};U(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},F="abcdefghijklmnopqrstuvwxyz",D="0123456789",M={DIGIT:D,ALPHA:F,ALPHA_DIGIT:F+F.toUpperCase()+D},q=d("AsyncFunction");var z={isArray:g,isArrayBuffer:b,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!m(t)&&null!==t.constructor&&!m(t.constructor)&&w(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||w(t.append)&&("formdata"===(e=p(t))||// detect form-data instance
"object"===e&&w(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&b(t.buffer)},isString:E,isNumber:v,isBoolean:t=>!0===t||!1===t,isObject:A,isPlainObject:S,isUndefined:m,isDate:O,isFile:_,isBlob:R,isRegExp:P,isFunction:w,isStream:t=>A(t)&&w(t.pipe),isURLSearchParams:k,isTypedArray:x,isFileList:T,forEach:U,merge:/**
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
 */function t(){let{caseless:e}=C(this)&&this||{},r={},n=(n,o)=>{let i=e&&B(r,o)||o;S(r[i])&&S(n)?r[i]=t(r[i],n):S(n)?r[i]=t({},n):g(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&U(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(U(e,(e,n)=>{r&&w(e)?t[n]=f(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)s=o[i],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&h(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:p,kindOfTest:d,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(g(t))return t;let e=t.length;if(!v(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:j,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:I,freezeMethods:t=>{I(t,(e,r)=>{// skip restricted props in strict mode
if(w(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(w(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(g(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:B,global:L,isContextDefined:C,ALPHABET:M,generateString:(t=16,e=M.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&w(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(A(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=g(t)?[]:{};return U(t,(t,e)=>{let i=r(t,n+1);m(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:q,isThenable:t=>t&&(A(t)||w(t))&&w(t.then)&&w(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function $(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}z.inherits($,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const H=$.prototype,J={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{J[t]={value:t}}),Object.defineProperties($,J),Object.defineProperty(H,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
$.from=(t,e,r,n,o,i)=>{let s=Object.create(H);return z.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),$.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s},n=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(V[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+V[n>>12&63]+V[n>>6&63]+V[63&n]);return o.join("")}(t,i,i+16383>s?s:i+16383));return 1===n?o.push(V[(e=t[r-1])>>2]+V[e<<4&63]+"=="):2===n&&o.push(V[(e=(t[r-2]<<8)+t[r-1])>>10]+V[e>>4&63]+V[e<<2&63]+"="),o.join("")};for(var V=[],W=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",X=0,Y=G.length;X<Y;++X)V[X]=G[X],W[G.charCodeAt(X)]=X;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
W["-".charCodeAt(0)]=62,W["_".charCodeAt(0)]=63,o=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,f=-7,c=r?o-1:0,h=r?-1:1,p=t[e+c];for(c+=h,i=p&(1<<-f)-1,p>>=-f,f+=a;f>0;i=256*i+t[e+c],c+=h,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=n;f>0;s=256*s+t[e+c],c+=h,f-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),i-=l}return(p?-1:1)*s*Math.pow(2,i-n)},i=function(t,e,r,n,o,i){var s,a,u,l=8*i-o-1,f=(1<<l)-1,c=f>>1,h=23===o?5960464477539062e-23:0,p=n?0:i-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(e*u-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[r+p]=255&s,p+=d,s/=256,l-=8);t[r+p-d]|=128*y};var Q="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function Z(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var e=new Uint8Array(t);return Object.setPrototypeOf(e,tt.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function tt(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return tn(t)}return te(t,e,r)}function te(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!tt.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|ta(t,e),n=Z(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tA(t,Uint8Array)){var e=new Uint8Array(t);return ti(e.buffer,e.byteOffset,e.byteLength)}return to(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tA(t,ArrayBuffer)||t&&tA(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tA(t,SharedArrayBuffer)||t&&tA(t.buffer,SharedArrayBuffer)))return ti(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return tt.from(n,e,r);var o=function(t){if(tt.isBuffer(t)){var e,r=0|ts(t.length),n=Z(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?Z(0):to(t):"Buffer"===t.type&&Array.isArray(t.data)?to(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tt.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tr(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tn(t){return tr(t),Z(t<0?0:0|ts(t))}function to(t){for(var e=t.length<0?0:0|ts(t.length),r=Z(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function ti(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),tt.prototype),n)}function ts(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function ta(t,e){if(tt.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tA(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tE(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tw(t).length;default:if(o)return n?-1:tE(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function tu(t,e,r){var o,i,s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=tS[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return th(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return o=e,i=r,0===o&&i===this.length?n(this):n(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(s)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),s=!0}}function tl(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tf(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=tt.from(e,n)),tt.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tc(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tc(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function tc(t,e,r,n,o){var i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var f=-1;for(i=r;i<a;i++)if(l(t,i)===l(e,-1===f?0:i-f)){if(-1===f&&(f=i),i-f+1===u)return f*s}else -1!==f&&(i-=i-f),f=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){for(var c=!0,h=0;h<u;h++)if(l(t,i+h)!==l(e,h)){c=!1;break}if(c)return i}return -1}function th(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,a,u,l=t[o],f=null,c=l>239?4:l>223?3:l>191?2:1;if(o+c<=r)switch(c){case 1:l<128&&(f=l);break;case 2:(192&(i=t[o+1]))==128&&(u=(31&l)<<6|63&i)>127&&(f=u);break;case 3:i=t[o+1],s=t[o+2],(192&i)==128&&(192&s)==128&&(u=(15&l)<<12|(63&i)<<6|63&s)>2047&&(u<55296||u>57343)&&(f=u);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(u=(15&l)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(f=u)}null===f?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
f=65533,c=1):f>65535&&(// encode to utf16 (surrogate pair dance)
f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),o+=c}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tp(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function td(t,e,r,n,o,i){if(!tt.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function ty(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tg(t,e,r,n,o){return e=+e,r>>>=0,o||ty(t,e,r,4,34028234663852886e22,-34028234663852886e22),i(t,e,r,n,23,4),r+4}function tm(t,e,r,n,o){return e=+e,r>>>=0,o||ty(t,e,r,8,17976931348623157e292,-17976931348623157e292),i(t,e,r,n,52,8),r+8}/**
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
 */tt.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),tt.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tt.prototype,"parent",{enumerable:!0,get:function(){if(tt.isBuffer(this))return this.buffer}}),Object.defineProperty(tt.prototype,"offset",{enumerable:!0,get:function(){if(tt.isBuffer(this))return this.byteOffset}}),tt.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/tt.from=function(t,e,r){return te(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(tt.prototype,Uint8Array.prototype),Object.setPrototypeOf(tt,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/tt.alloc=function(t,e,r){return(tr(t),t<=0)?Z(t):void 0!==e?"string"==typeof r?Z(t).fill(e,r):Z(t).fill(e):Z(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */tt.allocUnsafe=function(t){return tn(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */tt.allocUnsafeSlow=function(t){return tn(t)},tt.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tt.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},tt.compare=function(t,e){if(tA(t,Uint8Array)&&(t=tt.from(t,t.offset,t.byteLength)),tA(e,Uint8Array)&&(e=tt.from(e,e.offset,e.byteLength)),!tt.isBuffer(t)||!tt.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},tt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tt.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tt.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=tt.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(tA(i,Uint8Array))o+i.length>n.length?tt.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(tt.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},tt.byteLength=ta,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
tt.prototype._isBuffer=!0,tt.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)tl(this,e,e+1);return this},tt.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)tl(this,e,e+3),tl(this,e+1,e+2);return this},tt.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)tl(this,e,e+7),tl(this,e+1,e+6),tl(this,e+2,e+5),tl(this,e+3,e+4);return this},tt.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?th(this,0,t):tu.apply(this,arguments)},tt.prototype.toLocaleString=tt.prototype.toString,tt.prototype.equals=function(t){if(!tt.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tt.compare(this,t)},tt.prototype.inspect=function(){var t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Q&&(tt.prototype[Q]=tt.prototype.inspect),tt.prototype.compare=function(t,e,r,n,o){if(tA(t,Uint8Array)&&(t=tt.from(t,t.offset,t.byteLength)),!tt.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,s=r-e,a=Math.min(i,s),u=this.slice(n,o),l=t.slice(e,r),f=0;f<a;++f)if(u[f]!==l[f]){i=u[f],s=l[f];break}return i<s?-1:s<i?1:0},tt.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},tt.prototype.indexOf=function(t,e,r){return tf(this,t,e,r,!0)},tt.prototype.lastIndexOf=function(t,e,r){return tf(this,t,e,r,!1)},tt.prototype.write=function(t,e,r,n){// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,s,a,u,l,f,c,h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(a!=a)break;t[r+s]=a}return s}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tv(tE(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,tv(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,l=r,tv(tw(t),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=e,c=r,tv(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-f),this,f,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},tt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tt.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,tt.prototype),n)},tt.prototype.readUintLE=tt.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tp(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},tt.prototype.readUintBE=tt.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tp(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},tt.prototype.readUint8=tt.prototype.readUInt8=function(t,e){return t>>>=0,e||tp(t,1,this.length),this[t]},tt.prototype.readUint16LE=tt.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tp(t,2,this.length),this[t]|this[t+1]<<8},tt.prototype.readUint16BE=tt.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tp(t,2,this.length),this[t]<<8|this[t+1]},tt.prototype.readUint32LE=tt.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tp(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},tt.prototype.readUint32BE=tt.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tp(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tt.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tp(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},tt.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tp(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},tt.prototype.readInt8=function(t,e){return(t>>>=0,e||tp(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tt.prototype.readInt16LE=function(t,e){t>>>=0,e||tp(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},tt.prototype.readInt16BE=function(t,e){t>>>=0,e||tp(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},tt.prototype.readInt32LE=function(t,e){return t>>>=0,e||tp(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tt.prototype.readInt32BE=function(t,e){return t>>>=0,e||tp(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tt.prototype.readFloatLE=function(t,e){return t>>>=0,e||tp(t,4,this.length),o(this,t,!0,23,4)},tt.prototype.readFloatBE=function(t,e){return t>>>=0,e||tp(t,4,this.length),o(this,t,!1,23,4)},tt.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tp(t,8,this.length),o(this,t,!0,52,8)},tt.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tp(t,8,this.length),o(this,t,!1,52,8)},tt.prototype.writeUintLE=tt.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;td(this,t,e,r,o,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},tt.prototype.writeUintBE=tt.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;td(this,t,e,r,o,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},tt.prototype.writeUint8=tt.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,1,255,0),this[e]=255&t,e+1},tt.prototype.writeUint16LE=tt.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},tt.prototype.writeUint16BE=tt.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},tt.prototype.writeUint32LE=tt.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},tt.prototype.writeUint32BE=tt.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tt.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);td(this,t,e,r,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},tt.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);td(this,t,e,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+r},tt.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},tt.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},tt.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},tt.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},tt.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||td(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tt.prototype.writeFloatLE=function(t,e,r){return tg(this,t,e,!0,r)},tt.prototype.writeFloatBE=function(t,e,r){return tg(this,t,e,!1,r)},tt.prototype.writeDoubleLE=function(t,e,r){return tm(this,t,e,!0,r)},tt.prototype.writeDoubleBE=function(t,e,r){return tm(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
tt.prototype.copy=function(t,e,r,n){if(!tt.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
tt.prototype.fill=function(t,e,r,n){// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!tt.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=tt.isBuffer(t)?t:tt.from(t,n),a=s.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};// HELPER FUNCTIONS
// ================
var tb=/[^+/0-9A-Za-z-_]/g;function tE(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function tw(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new K((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=W[t.charCodeAt(r)]<<18|W[t.charCodeAt(r+1)]<<12|W[t.charCodeAt(r+2)]<<6|W[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===i&&(e=W[t.charCodeAt(r)]<<2|W[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===i&&(e=W[t.charCodeAt(r)]<<10|W[t.charCodeAt(r+1)]<<4|W[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tb,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tv(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tA(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var tS=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}();/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tO(t){return z.isPlainObject(t)||z.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function t_(t){return z.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tR(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=t_(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}const tT=z.toFlatObject(z,{},null,function(t){return/^is[A-Z]/.test(t)});var tk=/**
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
 */function(t,e,r){if(!z.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=z.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!z.isUndefined(e[t])});let n=r.metaTokens,o=r.visitor||f,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&z.isSpecCompliantForm(e);if(!z.isFunction(o))throw TypeError("visitor must be a function");function l(t){if(null===t)return"";if(z.isDate(t))return t.toISOString();if(!u&&z.isBlob(t))throw new $("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(t)||z.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):tt.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function f(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if(z.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(z.isArray(t)&&(u=t,z.isArray(u)&&!u.some(tO))||(z.isFileList(t)||z.endsWith(r,"[]"))&&(a=z.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=t_(r),a.forEach(function(t,n){z.isUndefined(t)||null===t||e.append(!0===s?tR([r],n,i):null===s?r:r+"[]",l(t))}),!1)}}return!!tO(t)||(e.append(tR(o,r,i),l(t)),!1)}let c=[],h=Object.assign(tT,{defaultVisitor:f,convertValue:l,isVisitable:tO});if(!z.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!z.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),z.forEach(r,function(r,i){let s=!(z.isUndefined(r)||null===r)&&o.call(e,r,z.isString(i)?i.trim():i,n,h);!0===s&&t(r,n?n.concat(i):[i])}),c.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tU(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tB(t,e){this._pairs=[],t&&tk(t,this,e)}const tL=tB.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tx(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let o=r&&r.encode||tC,i=r&&r.serialize;if(n=i?i(e,r):z.isURLSearchParams(e)?e.toString():new tB(e,r).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tL.append=function(t,e){this._pairs.push([t,e])},tL.toString=function(t){let e=t?function(e){return t.call(this,e,tU)}:tU;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tj=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
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
   */forEach(t){z.forEach(this.handlers,function(e){null!==e&&t(e)})}},tN={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tP="undefined"!=typeof URLSearchParams?URLSearchParams:tB,tI="undefined"!=typeof FormData?FormData:null,tF="undefined"!=typeof Blob?Blob:null;/**
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
 */const tD=("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document,tM="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tq={classes:{URLSearchParams:tP,FormData:tI,Blob:tF},isStandardBrowserEnv:tD,isStandardBrowserWebWorkerEnv:tM,protocols:["http","https","file","blob","url","data"]},tz=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(z.isFormData(t)&&z.isFunction(t.entries)){let e={};return z.forEachEntry(t,(t,r)=>{!function t(e,r,n,o){let i=e[o++],s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&z.isArray(n)?n.length:i,a)return z.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&z.isObject(n[i])||(n[i]=[]);let u=t(e,r,n[i],o);return u&&z.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i])),!s}(z.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const t$={transitional:tN,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let n=e.getContentType()||"",o=n.indexOf("application/json")>-1,i=z.isObject(t);i&&z.isHTMLForm(t)&&(t=new FormData(t));let s=z.isFormData(t);if(s)return o&&o?JSON.stringify(tz(t)):t;if(z.isArrayBuffer(t)||z.isBuffer(t)||z.isStream(t)||z.isFile(t)||z.isBlob(t))return t;if(z.isArrayBufferView(t))return t.buffer;if(z.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tk(a,new tq.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return tq.isNode&&z.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=z.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tk(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(z.isString(t))try{return(0,JSON.parse)(t),z.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t$.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&z.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw $.from(t,$.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tq.classes.FormData,Blob:tq.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],t=>{t$.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const tH=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */tJ=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&tH[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o};const tV=Symbol("internals");function tW(t){return t&&String(t).trim().toLowerCase()}function tK(t){return!1===t||null==t?t:z.isArray(t)?t.map(tK):String(t)}const tG=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function tX(t,e,r,n,o){if(z.isFunction(n))return n.call(this,e,r);if(o&&(e=r),z.isString(e)){if(z.isString(n))return -1!==e.indexOf(n);if(z.isRegExp(n))return n.test(e)}}class tY{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function o(t,e,r){let o=tW(e);if(!o)throw Error("header name must be a non-empty string");let i=z.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||e]=tK(t))}let i=(t,e)=>z.forEach(t,(t,r)=>o(t,r,e));return z.isPlainObject(t)||t instanceof this.constructor?i(t,e):z.isString(t)&&(t=t.trim())&&!tG(t)?i(tJ(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=tW(t)){let r=z.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(z.isFunction(e))return e.call(this,t,r);if(z.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=tW(t)){let r=z.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||tX(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function o(t){if(t=tW(t)){let o=z.findKey(r,t);o&&(!e||tX(r,r[o],o,e))&&(delete r[o],n=!0)}}return z.isArray(t)?t.forEach(o):o(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||tX(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return z.forEach(this,(n,o)=>{let i=z.findKey(r,o);if(i){e[i]=tK(n),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=tK(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return z.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&z.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[tV]=this[tV]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){let e=tW(t);r[e]||(!function(t,e){let r=z.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(n,t),r[e]=!0)}return z.isArray(t)?t.forEach(o):o(t),this}}function tQ(t,e){let r=this||t$,n=e||r,o=tY.from(n.headers),i=n.data;return z.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function tZ(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function t0(t,e,r){$.call(this,null==t?"canceled":t,$.ERR_CANCELED,e,r),this.name="CanceledError"}tY.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),z.reduceDescriptors(tY.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),z.freezeMethods(tY),z.inherits(t0,$,{__CANCEL__:!0});var t1=tq.isStandardBrowserEnv?{write:function(t,e,r,n,o,i){let s=[];s.push(t+"="+encodeURIComponent(e)),z.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),z.isString(n)&&s.push("path="+n),z.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function t2(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var t4=tq.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=n(window.location.href),function(e){let r=z.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},t6=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),l=o[s];r||(r=u),n[i]=a,o[i]=u;let f=s,c=0;for(;f!==i;)c+=n[f++],f%=t;if((i=(i+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=l&&u-l;return h?Math.round(1e3*c/h):void 0}};function t5(t,e){let r=0,n=t6(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a),l=i<=s;r=i;let f={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-i)/u:void 0,event:o};f[e?"download":"upload"]=!0,t(f)}}const t8="undefined"!=typeof XMLHttpRequest;var t3=t8&&function(t){return new Promise(function(e,r){let n,o,i=t.data,s=tY.from(t.headers).normalize(),a=t.responseType;function u(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}z.isFormData(i)&&(tq.isStandardBrowserEnv||tq.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?z.isString(o=s.getContentType())&&s.setContentType(o.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let l=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+r))}let f=t2(t.baseURL,t.url);function c(){if(!l)return;// Prepare the response
let n=tY.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?l.response:l.responseText,i={data:o,status:l.status,statusText:l.statusText,headers:n,config:t,request:l};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new $("Request failed with status code "+r.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),u()},function(t){r(t),u()},i),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(t.method.toUpperCase(),tx(f,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=t.timeout,"onloadend"in l?l.onloadend=c:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(r(new $("Request aborted",$.ECONNABORTED,t,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new $("Network Error",$.ERR_NETWORK,t,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tN;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new $(e,n.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,t,l)),// Clean up request
l=null},tq.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||t4(f))&&t.xsrfCookieName&&t1.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===i&&s.setContentType(null),"setRequestHeader"in l&&z.forEach(s.toJSON(),function(t,e){l.setRequestHeader(e,t)}),z.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),a&&"json"!==a&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t5(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t5(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{l&&(r(!e||e.type?new t0(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(f);if(h&&-1===tq.protocols.indexOf(h)){r(new $("Unsupported protocol "+h+":",$.ERR_BAD_REQUEST,t));return}// Send the request
l.send(i||null)})};const t7={http:null,xhr:t3};z.forEach(t7,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});const t9=t=>`- ${t}`,et=t=>z.isFunction(t)||null===t||!1===t;var ee={getAdapter:t=>{let e,r;t=z.isArray(t)?t:[t];let{length:n}=t,o={};for(let i=0;i<n;i++){let n;if(r=e=t[i],!et(e)&&void 0===(r=t7[(n=String(e)).toLowerCase()]))throw new $(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let t=Object.entries(o).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new $("There is no suitable adapter to dispatch the request "+(n?t.length>1?"since :\n"+t.map(t9).join("\n"):" "+t9(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:t7};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function er(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new t0(null,t)}function en(t){er(t),t.headers=tY.from(t.headers),// Transform request data
t.data=tQ.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ee.getAdapter(t.adapter||t$.adapter);return e(t).then(function(e){return er(t),// Transform response data
e.data=tQ.call(t,t.transformResponse,e),e.headers=tY.from(e.headers),e},function(e){return!tZ(e)&&(er(t),e&&e.response&&(e.response.data=tQ.call(t,t.transformResponse,e.response),e.response.headers=tY.from(e.response.headers))),Promise.reject(e)})}const eo=t=>t instanceof tY?t.toJSON():t;function ei(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return z.isPlainObject(t)&&z.isPlainObject(e)?z.merge.call({caseless:r},t,e):z.isPlainObject(e)?z.merge({},e):z.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return z.isUndefined(e)?z.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function i(t,e){if(!z.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return z.isUndefined(e)?z.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(eo(t),eo(e),!0)};return z.forEach(Object.keys(Object.assign({},t,e)),function(n){let i=u[n]||o,s=i(t[n],e[n],n);z.isUndefined(s)&&i!==a||(r[n]=s)}),r}const es="1.5.1",ea={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ea[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const eu={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ea.transitional=function(t,e,r){function n(t,e){return"[Axios v"+es+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===t)throw new $(n(o," has been removed"+(e?" in "+e:"")),$.ERR_DEPRECATED);return e&&!eu[o]&&(eu[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var el={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let i=n[o],s=e[i];if(s){let e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new $("option "+i+" must be "+r,$.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new $("Unknown option "+i,$.ERR_BAD_OPTION)}},validators:ea};const ef=el.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class ec{constructor(t){this.defaults=t,this.interceptors={request:new tj,response:new tj}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=ei(this.defaults,e);let{transitional:o,paramsSerializer:i,headers:s}=e;void 0!==o&&el.assertOptions(o,{silentJSONParsing:ef.transitional(ef.boolean),forcedJSONParsing:ef.transitional(ef.boolean),clarifyTimeoutError:ef.transitional(ef.boolean)},!1),null!=i&&(z.isFunction(i)?e.paramsSerializer={serialize:i}:el.assertOptions(i,{encode:ef.function,serialize:ef.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&z.merge(s.common,s[e.method]);s&&z.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=tY.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(l=l&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let f=[];this.interceptors.response.forEach(function(t){f.push(t.fulfilled,t.rejected)});let c=0;if(!l){let t=[en.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,f),n=t.length,r=Promise.resolve(e);c<n;)r=r.then(t[c++],t[c++]);return r}n=u.length;let h=e;for(c=0;c<n;){let t=u[c++],e=u[c++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=en.call(this,h)}catch(t){return Promise.reject(t)}for(c=0,n=f.length;c<n;)r=r.then(f[c++],f[c++]);return r}getUri(t){t=ei(this.defaults,t);let e=t2(t.baseURL,t.url);return tx(e,t.params,t.paramsSerializer)}}z.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/ec.prototype[t]=function(e,r){return this.request(ei(r||{},{method:t,url:e,data:(r||{}).data}))}}),z.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request(ei(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ec.prototype[t]=e(),ec.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eh{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,o){r.reason||(r.reason=new t0(t,n,o),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eh(function(e){t=e});return{token:e,cancel:t}}}const ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ep).forEach(([t,e])=>{ep[e]=t});// Create the default instance to be exported
const ed=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new ec(e),n=f(ec.prototype.request,r);return z.extend(n,ec.prototype,r,{allOwnKeys:!0}),z.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(ei(e,r))},n}(t$);// Expose Axios class to allow class inheritance
ed.Axios=ec,// Expose Cancel & CancelToken
ed.CanceledError=t0,ed.CancelToken=eh,ed.isCancel=tZ,ed.VERSION=es,ed.toFormData=tk,// Expose AxiosError class
ed.AxiosError=$,// alias for CanceledError for backward compatibility
ed.Cancel=ed.CanceledError,// Expose all/spread
ed.all=function(t){return Promise.all(t)},ed.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
ed.isAxiosError=function(t){return z.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
ed.mergeConfig=ei,ed.AxiosHeaders=tY,ed.formToJSON=t=>tz(z.isHTMLForm(t)?new FormData(t):t),ed.getAdapter=ee.getAdapter,ed.HttpStatusCode=ep,ed.default=ed;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:ey,AxiosError:eg,CanceledError:em,isCancel:eb,CancelToken:eE,VERSION:ew,all:ev,Cancel:eA,isAxiosError:eS,spread:eO,toFormData:e_,AxiosHeaders:eR,HttpStatusCode:eT,formToJSON:ek,getAdapter:eU,mergeConfig:eB}=ed,eL=async()=>{try{let t=await ed.get("https://books-backend.p.goit.global/books/category-list");return t.data}catch(t){console.log(t)}},eC=async()=>{try{let t=await ed.get("https://books-backend.p.goit.global/books/top-books");return t.data}catch(t){console.log(t)}},ex=async t=>{try{let e=await ed.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e.data}catch(t){console.log(t)}},ej=async t=>{try{let e=await ed.get(`https://books-backend.p.goit.global/books/${t}`);return e.data}catch(t){console.log(t)}},eN=document.querySelector(".side-bar__categories");(async function(){let t=await eL(),e=t.map(t=>`<li tabindex='-1' class="side-bar__categories-item">${t.list_name}</li>`).join("");eN.insertAdjacentHTML("beforeend",e)})(),l("a7nVE");const eP=document.querySelector(".books-gallery");!async function(){let t=await eC(),e=t.slice(0,4);console.log(t);let r=e.map(t=>`<div>
        <h2 class="books-gallery__category-title">${t.list_name}</h2>
    <ul class="books-gallery__section">
    <li><img class="books-gallery__image" alt="book cover" src="${t.books[0].book_image}"> <h3>${t.books[0].title}</h3><h4>${t.books[0].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${t.books[1].book_image}"> <h3>${t.books[1].title}</h3><h4>${t.books[1].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${t.books[2].book_image}"> <h3>${t.books[2].title}</h3><h4>${t.books[2].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${t.books[3].book_image}"> <h3>${t.books[3].title}</h3><h4>${t.books[3].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${t.books[4].book_image}"> <h3>${t.books[4].title}</h3><h4>${t.books[4].author}</h4> </li>
    </ul></div>`).join("");eP.insertAdjacentHTML("beforeend",r)}();const eI=document.querySelector(".category__title"),eF=document.querySelector(".category__list"),eD=document.querySelector(".side-bar__categories"),eM=document.querySelector(".books-gallery"),eq=async t=>{let e=await ex(t),r=e.map(t=>`<li class="category__item" data-id="${t._id}">
        <div class="category__cover"><img class="category__image" alt="book cover" src="${t.book_image}"/></div>
        <h4 class="category__book-title">${t.title}</h4>
        <p class="category__book-author">${t.author}</p>
    </li>`).join("");eF.innerHTML=r},ez=async t=>{if(t.target.closest("li")){eM.classList.add("gallery-hidden");let e=t.target.closest("li").textContent;eI.textContent=e,eF.innerHTML="",eq(e)}};eD.addEventListener("click",ez),l("1fSMk");let e$=null;const eH=document.querySelector(".popup__img"),eJ=document.querySelector(".popup__amazon"),eV=document.querySelector(".popup__description-details"),eW=document.querySelector(".popup__btn-add"),eK=document.querySelector(".popup__btn-remove"),eG=document.querySelector(".popup__btn-close"),eX=document.querySelector(".backdrop-popup"),eY=document.querySelector(".popup"),eQ=document.querySelector(".popup__comment"),eZ=document.querySelector(".popup__shops-list"),e0=document.querySelector(".category__list"),e1=document.querySelector(".books-gallery__section");let e2=!1;const e4=()=>{e2?(eW.classList.add("popup__btn-text-hidden"),eK.classList.remove("popup__btn-text-hidden"),eQ.classList.remove("popup__btn-text-hidden")):(eW.classList.remove("popup__btn-text-hidden"),eK.classList.add("popup__btn-text-hidden"),eQ.classList.add("popup__btn-text-hidden"))},e6=async t=>{let e=await ej(t);e$=e;let r=JSON.parse(localStorage.getItem("books"))||[];e2=r.some(t=>t._id===e._id),e4(),eH.src=e.book_image,eJ.href=e.amazon_product_url;let n=`<h2 class="popup__title">${e.title}</h2>
                <p class="popup__author">${e.author}</p>
                <p class="popup__text">${e.description}</p>`;eV.innerHTML=n;let o=e.buy_links.slice(1).map(t=>`<li class="popup__shops-item"><a class="popup__shops-link" href="${t.url}" target="_blank">${t.name}</a></li>`).join("");eZ.innerHTML=o},e5=()=>{eX.classList.add("popup-is-hidden"),eG.removeEventListener("click",e5),eX.removeEventListener("click",e8),document.removeEventListener("keydown",e3)},e8=t=>{t.target===eX&&e5()};eY.addEventListener("click",t=>{t.stopPropagation()});const e3=t=>{"Escape"===t.code&&e5()},e7=t=>{if(t.target.closest("li")){let e=t.target.closest("li").dataset.id;e6(e),eG.addEventListener("click",e5),eX.addEventListener("click",e8),document.addEventListener("keydown",e3),eX.classList.remove("popup-is-hidden")}};e0.addEventListener("click",e7),e1.addEventListener("click",e7),eK.addEventListener("click",()=>{if(!e$)return;let t=JSON.parse(localStorage.getItem("books"))||[],e=t.filter(t=>t._id!==e$._id);localStorage.setItem("books",JSON.stringify(e)),e2=!1,e4()}),eW.addEventListener("click",()=>{if(!e$)return;let t=JSON.parse(localStorage.getItem("books"))||[],e=t.some(t=>t._id===e$._id);e||(t.push(e$),localStorage.setItem("books",JSON.stringify(t))),e2=!0,e4()}),// openPopUp();
// localStorage.clear();
l("2DTLi");//# sourceMappingURL=index.9d747bfd.js.map

//# sourceMappingURL=index.9d747bfd.js.map
