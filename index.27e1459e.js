function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e=globalThis,r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o);var i=o.register;i("lXnOV",function(e,r){t(e.exports,"fetchBooksByCategory",()=>i),t(e.exports,"fetchBookById",()=>a),o("hGVxz");var n=o("9d9Fx");// console.log(fetchTopBooksInCategories());
let i=async t=>{try{let e=await (0,n.default).get(`https://books-backend.p.goit.global/books/category?category=${t}`);return e.data}catch(t){console.log(t)}},a=async t=>{try{let e=await (0,n.default).get(`https://books-backend.p.goit.global/books/${t}`);return e.data}catch(t){console.log(t)}}}),i("hGVxz",function(e,r){t(e.exports,"default",()=>o("9d9Fx").default);var n=o("9d9Fx");// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:i,AxiosError:a,CanceledError:s,isCancel:u,CancelToken:f,VERSION:l,all:c,Cancel:d,isAxiosError:p,spread:h,toFormData:y,AxiosHeaders:g,HttpStatusCode:m,formToJSON:b,getAdapter:v,mergeConfig:E}=n.default}),i("9d9Fx",function(e,r){t(e.exports,"default",()=>A);var n=o("i4ijA"),i=o("lwbau"),a=o("eCrWh"),s=o("kSe7Y"),u=o("bJncD"),f=o("2eGDI"),l=o("7XT9I"),c=o("9GGcx"),d=o("5SIUr"),p=o("8WPkr"),h=o("gZZY4"),y=o("k5sPl"),g=o("4rx4g"),m=o("4Qexm"),b=o("fRBtE"),v=o("9o9qV"),E=o("dcCu5");// Create the default instance to be exported
let w=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new a.default(e),o=(0,i.default)(a.default.prototype.request,r);return(// Copy axios.prototype to instance
(0,n.default).extend(o,a.default.prototype,r,{allOwnKeys:!0}),// Copy context to instance
(0,n.default).extend(o,r,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(r){return t((0,s.default)(e,r))},o)}(u.default);// Expose Axios class to allow class inheritance
w.Axios=a.default,// Expose Cancel & CancelToken
w.CanceledError=l.default,w.CancelToken=c.default,w.isCancel=d.default,w.VERSION=p.VERSION,w.toFormData=h.default,// Expose AxiosError class
w.AxiosError=y.default,// alias for CanceledError for backward compatibility
w.Cancel=w.CanceledError,// Expose all/spread
w.all=function(t){return Promise.all(t)},w.spread=g.default,// Expose isAxiosError
w.isAxiosError=m.default,// Expose mergeConfig
w.mergeConfig=s.default,w.AxiosHeaders=b.default,w.formToJSON=t=>(0,f.default)((0,n.default).isHTMLForm(t)?new FormData(t):t),w.getAdapter=v.default.getAdapter,w.HttpStatusCode=E.default,w.default=w;var A=w}),i("i4ijA",function(r,n){t(r.exports,"default",()=>F);var i,a,s=o("lwbau");// utils is a library of generic helper functions non-specific to axios
let{toString:u}=Object.prototype,{getPrototypeOf:f}=Object,l=(i=Object.create(null),t=>{let e=u.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())}),c=t=>(t=t.toLowerCase(),e=>l(e)===t),d=t=>e=>typeof e===t,{isArray:p}=Array,h=d("undefined"),y=c("ArrayBuffer"),g=d("string"),m=d("function"),b=d("number"),v=t=>null!==t&&"object"==typeof t,E=t=>{if("object"!==l(t))return!1;let e=f(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},w=c("Date"),A=c("File"),S=c("Blob"),O=c("FileList"),x=c("URLSearchParams");/**
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
 */function R(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),p(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),a=i.length;for(n=0;n<a;n++)o=i[n],e.call(null,t[o],o,t)}}}function B(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}let T=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,U=t=>!h(t)&&t!==T,C=(a="undefined"!=typeof Uint8Array&&f(Uint8Array),t=>a&&t instanceof a),j=c("HTMLFormElement"),_=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),L=c("RegExp"),k=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};R(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},P="abcdefghijklmnopqrstuvwxyz",N="0123456789",I={DIGIT:N,ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+N},D=c("AsyncFunction");var F={isArray:p,isArrayBuffer:y,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||m(t.append)&&("formdata"===(e=l(t))||// detect form-data instance
"object"===e&&m(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&y(t.buffer)},isString:g,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:v,isPlainObject:E,isUndefined:h,isDate:w,isFile:A,isBlob:S,isRegExp:L,isFunction:m,isStream:t=>v(t)&&m(t.pipe),isURLSearchParams:x,isTypedArray:C,isFileList:O,forEach:R,merge:/**
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
 */function t(){let{caseless:e}=U(this)&&this||{},r={},n=(n,o)=>{let i=e&&B(r,o)||o;E(r[i])&&E(n)?r[i]=t(r[i],n):E(n)?r[i]=t({},n):p(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&R(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(R(e,(e,n)=>{r&&m(e)?t[n]=(0,s.default)(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)a=o[i],(!n||n(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=!1!==r&&f(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:l,kindOfTest:c,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(p(t))return t;let e=t.length;if(!b(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:j,hasOwnProperty:_,hasOwnProp:_,reduceDescriptors:k,freezeMethods:t=>{k(t,(e,r)=>{// skip restricted props in strict mode
if(m(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(m(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(p(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:B,global:T,isContextDefined:U,ALPHABET:I,generateString:(t=16,e=I.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&m(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=p(t)?[]:{};return R(t,(t,e)=>{let i=r(t,n+1);h(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:D,isThenable:t=>t&&(v(t)||m(t))&&m(t.then)&&m(t.catch)}}),i("lwbau",function(e,r){t(e.exports,"default",()=>n);function n(t,e){return function(){return t.apply(e,arguments)}}}),i("eCrWh",function(e,r){t(e.exports,"default",()=>h);var n=o("i4ijA"),i=o("h9Lf1"),a=o("itbxz"),s=o("2u9Ce"),u=o("kSe7Y"),f=o("kHvG3"),l=o("hd4Q7"),c=o("fRBtE");let d=l.default.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class p{constructor(t){this.defaults=t,this.interceptors={request:new a.default,response:new a.default}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,o;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=(0,u.default)(this.defaults,e);let{transitional:i,paramsSerializer:a,headers:f}=e;void 0!==i&&(0,l.default).assertOptions(i,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=a&&((0,n.default).isFunction(a)?e.paramsSerializer={serialize:a}:(0,l.default).assertOptions(a,{encode:d.function,serialize:d.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let p=f&&(0,n.default).merge(f.common,f[e.method]);f&&(0,n.default).forEach(["delete","get","head","post","put","patch","common"],t=>{delete f[t]}),e.headers=(0,c.default).concat(p,f);// filter out skipped interceptors
let h=[],y=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(y=y&&t.synchronous,h.unshift(t.fulfilled,t.rejected))});let g=[];this.interceptors.response.forEach(function(t){g.push(t.fulfilled,t.rejected)});let m=0;if(!y){let t=[(0,s.default).bind(this),void 0];for(t.unshift.apply(t,h),t.push.apply(t,g),o=t.length,r=Promise.resolve(e);m<o;)r=r.then(t[m++],t[m++]);return r}o=h.length;let b=e;for(m=0;m<o;){let t=h[m++],e=h[m++];try{b=t(b)}catch(t){e.call(this,t);break}}try{r=(0,s.default).call(this,b)}catch(t){return Promise.reject(t)}for(m=0,o=g.length;m<o;)r=r.then(g[m++],g[m++]);return r}getUri(t){t=(0,u.default)(this.defaults,t);let e=(0,f.default)(t.baseURL,t.url);return(0,i.default)(e,t.params,t.paramsSerializer)}}// Provide aliases for supported request methods
(0,n.default).forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/p.prototype[t]=function(e,r){return this.request((0,u.default)(r||{},{method:t,url:e,data:(r||{}).data}))}}),(0,n.default).forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request((0,u.default)(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}p.prototype[t]=e(),p.prototype[t+"Form"]=e(!0)});var h=p}),i("h9Lf1",function(e,r){t(e.exports,"default",()=>s);var n=o("i4ijA"),i=o("5B7zY");/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(t,e,r){let o;/*eslint no-param-reassign:0*/if(!e)return t;let s=r&&r.encode||a,u=r&&r.serialize;if(o=u?u(e,r):(0,n.default).isURLSearchParams(e)?e.toString():new(0,i.default)(e,r).toString(s)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}}),i("5B7zY",function(e,r){t(e.exports,"default",()=>u);var n=o("gZZY4");/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function i(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function a(t,e){this._pairs=[],t&&(0,n.default)(t,this,e)}let s=a.prototype;s.append=function(t,e){this._pairs.push([t,e])},s.toString=function(t){let e=t?function(e){return t.call(this,e,i)}:i;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var u=a}),i("gZZY4",function(e,r){t(e.exports,"default",()=>d);var n=o("i4ijA"),i=o("k5sPl"),a=o("l52nF"),s=o("cNvas").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function u(t){return(0,n.default).isPlainObject(t)||(0,n.default).isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function f(t){return(0,n.default).endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function l(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=f(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}let c=(0,n.default).toFlatObject(n.default,{},null,function(t){return/^is[A-Z]/.test(t)});var d=/**
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
 */function(t,e,r){if(!(0,n.default).isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new(a.default||FormData),// eslint-disable-next-line no-param-reassign
r=(0,n.default).toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!(0,n.default).isUndefined(e[t])});let o=r.metaTokens,d=r.visitor||b,p=r.dots,h=r.indexes,y=r.Blob||"undefined"!=typeof Blob&&Blob,g=y&&(0,n.default).isSpecCompliantForm(e);if(!(0,n.default).isFunction(d))throw TypeError("visitor must be a function");function m(t){if(null===t)return"";if((0,n.default).isDate(t))return t.toISOString();if(!g&&(0,n.default).isBlob(t))throw new i.default("Blob is not supported. Use a Buffer instead.");return(0,n.default).isArrayBuffer(t)||(0,n.default).isTypedArray(t)?g&&"function"==typeof Blob?new Blob([t]):s.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function b(t,r,i){let a=t;if(t&&!i&&"object"==typeof t){if((0,n.default).endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=o?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var s;if((0,n.default).isArray(t)&&(s=t,(0,n.default).isArray(s)&&!s.some(u))||((0,n.default).isFileList(t)||(0,n.default).endsWith(r,"[]"))&&(a=(0,n.default).toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=f(r),a.forEach(function(t,o){(0,n.default).isUndefined(t)||null===t||e.append(!0===h?l([r],o,p):null===h?r:r+"[]",m(t))}),!1)}}return!!u(t)||(e.append(l(i,r,p),m(t)),!1)}let v=[],E=Object.assign(c,{defaultVisitor:b,convertValue:m,isVisitable:u});if(!(0,n.default).isObject(t))throw TypeError("data must be an object");return function t(r,o){if(!(0,n.default).isUndefined(r)){if(-1!==v.indexOf(r))throw Error("Circular reference detected in "+o.join("."));v.push(r),(0,n.default).forEach(r,function(r,i){let a=!((0,n.default).isUndefined(r)||null===r)&&d.call(e,r,(0,n.default).isString(i)?i.trim():i,o,E);!0===a&&t(r,o?o.concat(i):[i])}),v.pop()}}(t),e}}),i("k5sPl",function(e,r){t(e.exports,"default",()=>u);var n=o("i4ijA");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function i(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}(0,n.default).inherits(i,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:(0,n.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let a=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{s[t]={value:t}}),Object.defineProperties(i,s),Object.defineProperty(a,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
i.from=(t,e,r,o,s,u)=>{let f=Object.create(a);return(0,n.default).toFlatObject(t,f,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),i.call(f,t.message,e,r,o,s),f.cause=t,f.name=t.name,u&&Object.assign(f,u),f};var u=i}),i("l52nF",function(e,r){t(e.exports,"default",()=>n);// eslint-disable-next-line strict
var n=null}),i("cNvas",function(e,r){t(e.exports,"Buffer",()=>n,t=>n=t),t(e.exports,"INSPECT_MAX_BYTES",()=>i,t=>i=t);var n,i,a=o("3g1et"),s=o("1AWVL"),u="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function f(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function l(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return p(t)}return c(t,e,r)}function c(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!l.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|m(t,e),n=f(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(_(t,Uint8Array)){var e=new Uint8Array(t);return y(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(_(t,ArrayBuffer)||t&&_(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(_(t,SharedArrayBuffer)||t&&_(t.buffer,SharedArrayBuffer)))return y(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return l.from(n,e,r);var o=function(t){if(l.isBuffer(t)){var e,r=0|g(t.length),n=f(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?f(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return l.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return d(t),f(t<0?0:0|g(t))}function h(t){for(var e=t.length<0?0:0|g(t.length),r=f(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function y(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),l.prototype),n)}function g(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function m(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||_(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return C(t).length;default:if(o)return n?-1:U(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function b(t,e,r){var n,o,i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=L[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return A(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return n=e,o=r,0===n&&o===this.length?a.fromByteArray(this):a.fromByteArray(this.slice(n,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function v(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function E(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=l.from(e,n)),l.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:w(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):w(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function w(t,e,r,n,o){var i,a=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;a=2,s/=2,u/=2,r/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var l=-1;for(i=r;i<s;i++)if(f(t,i)===f(e,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===u)return l*a}else -1!==l&&(i-=i-l),l=-1}else for(r+u>s&&(r=s-u),i=r;i>=0;i--){for(var c=!0,d=0;d<u;d++)if(f(t,i+d)!==f(e,d)){c=!1;break}if(c)return i}return -1}function A(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,a,s,u,f=t[o],l=null,c=f>239?4:f>223?3:f>191?2:1;if(o+c<=r)switch(c){case 1:f<128&&(l=f);break;case 2:(192&(i=t[o+1]))==128&&(u=(31&f)<<6|63&i)>127&&(l=u);break;case 3:i=t[o+1],a=t[o+2],(192&i)==128&&(192&a)==128&&(u=(15&f)<<12|(63&i)<<6|63&a)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:i=t[o+1],a=t[o+2],s=t[o+3],(192&i)==128&&(192&a)==128&&(192&s)==128&&(u=(15&f)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(l=u)}null===l?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
l=65533,c=1):l>65535&&(// encode to utf16 (surrogate pair dance)
l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),o+=c}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function S(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function O(t,e,r,n,o,i){if(!l.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function x(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function R(t,e,r,n,o){return e=+e,r>>>=0,o||x(t,e,r,4,34028234663852886e22,-34028234663852886e22),s.write(t,e,r,n,23,4),r+4}function B(t,e,r,n,o){return e=+e,r>>>=0,o||x(t,e,r,8,17976931348623157e292,-17976931348623157e292),s.write(t,e,r,n,52,8),r+8}n=l,i=50,/**
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
 */l.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/l.from=function(t,e,r){return c(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/l.alloc=function(t,e,r){return(d(t),t<=0)?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */l.allocUnsafe=function(t){return p(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */l.allocUnsafeSlow=function(t){return p(t)},l.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==l.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},l.compare=function(t,e){if(_(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),_(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(t)||!l.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=l.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(_(i,Uint8Array))o+i.length>n.length?l.from(i).copy(n,o):Uint8Array.prototype.set.call(n,i,o);else if(l.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},l.byteLength=m,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
l.prototype._isBuffer=!0,l.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)v(this,e,e+1);return this},l.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},l.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},l.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?A(this,0,t):b.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(t){if(!l.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){var t="",e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},u&&(l.prototype[u]=l.prototype.inspect),l.prototype.compare=function(t,e,r,n,o){if(_(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,a=r-e,s=Math.min(i,a),u=this.slice(n,o),f=t.slice(e,r),c=0;c<s;++c)if(u[c]!==f[c]){i=u[c],a=f[c];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},l.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},l.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},l.prototype.write=function(t,e,r,n){// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,a,s,u,f,l,c,d=this.length-e;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var s=parseInt(e.substr(2*a,2),16);if(s!=s)break;t[r+a]=s}return a}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,j(U(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return a=e,s=r,j(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,f=r,j(C(t),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,c=r,j(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-l),this,l,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,l.prototype),n)},l.prototype.readUintLE=l.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(t,e){return t>>>=0,e||S(t,1,this.length),this[t]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(t,e){return t>>>=0,e||S(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(t,e){return t>>>=0,e||S(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(t,e){return t>>>=0,e||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(t,e){return t>>>=0,e||S(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},l.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},l.prototype.readInt8=function(t,e){return(t>>>=0,e||S(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},l.prototype.readInt16LE=function(t,e){t>>>=0,e||S(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(t,e){t>>>=0,e||S(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(t,e){return t>>>=0,e||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return t>>>=0,e||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readFloatLE=function(t,e){return t>>>=0,e||S(t,4,this.length),s.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return t>>>=0,e||S(t,4,this.length),s.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return t>>>=0,e||S(t,8,this.length),s.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return t>>>=0,e||S(t,8,this.length),s.read(this,t,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;O(this,t,e,r,o,0)}var i=1,a=0;for(this[e]=255&t;++a<r&&(i*=256);)this[e+a]=t/i&255;return e+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;O(this,t,e,r,o,0)}var i=r-1,a=1;for(this[e+i]=255&t;--i>=0&&(a*=256);)this[e+i]=t/a&255;return e+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,1,255,0),this[e]=255&t,e+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);O(this,t,e,r,o-1,-o)}var i=0,a=1,s=0;for(this[e]=255&t;++i<r&&(a*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+r},l.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);O(this,t,e,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[e+i]=255&t;--i>=0&&(a*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+r},l.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},l.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||O(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeFloatLE=function(t,e,r){return R(this,t,e,!0,r)},l.prototype.writeFloatBE=function(t,e,r){return R(this,t,e,!1,r)},l.prototype.writeDoubleLE=function(t,e,r){return B(this,t,e,!0,r)},l.prototype.writeDoubleBE=function(t,e,r){return B(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
l.prototype.copy=function(t,e,r,n){if(!l.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
l.prototype.fill=function(t,e,r,n){// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var a=l.isBuffer(t)?t:l.from(t,n),s=a.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=a[o%s]}return this};// HELPER FUNCTIONS
// ================
var T=/[^+/0-9A-Za-z-_]/g;function U(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],a=0;a<n;++a){// is surrogate component
if((r=t.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function C(t){return a.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(T,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function j(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function _(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var L=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}()}),i("3g1et",function(e,r){t(e.exports,"toByteArray",()=>n,t=>n=t),t(e.exports,"fromByteArray",()=>o,t=>o=t),n=function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],u=new s((o+i)*3/4-i),f=0,l=i>0?o-4:o;for(r=0;r<l;r+=4)e=a[t.charCodeAt(r)]<<18|a[t.charCodeAt(r+1)]<<12|a[t.charCodeAt(r+2)]<<6|a[t.charCodeAt(r+3)],u[f++]=e>>16&255,u[f++]=e>>8&255,u[f++]=255&e;return 2===i&&(e=a[t.charCodeAt(r)]<<2|a[t.charCodeAt(r+1)]>>4,u[f++]=255&e),1===i&&(e=a[t.charCodeAt(r)]<<10|a[t.charCodeAt(r+1)]<<4|a[t.charCodeAt(r+2)]>>2,u[f++]=e>>8&255,u[f++]=255&e),u},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],a=0,s=r-n;a<s;a+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],a=e;a<r;a+=3)o.push(i[(n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]))>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return o.join("")}(t,a,a+16383>s?s:a+16383));return 1===n?o.push(i[(e=t[r-1])>>2]+i[e<<4&63]+"=="):2===n&&o.push(i[(e=(t[r-2]<<8)+t[r-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),o.join("")};for(var n,o,i=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,l=u.length;f<l;++f)i[f]=u[f],a[u.charCodeAt(f)]=f;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63}),i("1AWVL",function(e,r){var n,o;t(e.exports,"read",()=>n,t=>n=t),t(e.exports,"write",()=>o,t=>o=t),n=function(t,e,r,n,o){var i,a,s=8*o-n-1,u=(1<<s)-1,f=u>>1,l=-7,c=r?o-1:0,d=r?-1:1,p=t[e+c];for(c+=d,i=p&(1<<-l)-1,p>>=-l,l+=s;l>0;i=256*i+t[e+c],c+=d,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=n;l>0;a=256*a+t[e+c],c+=d,l-=8);if(0===i)i=1-f;else{if(i===u)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),i-=f}return(p?-1:1)*a*Math.pow(2,i-n)},o=function(t,e,r,n,o,i){var a,s,u,f=8*i-o-1,l=(1<<f)-1,c=l>>1,d=23===o?5960464477539062e-23:0,p=n?0:i-1,h=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+c>=1?e+=d/u:e+=d*Math.pow(2,1-c),e*u>=2&&(a++,u/=2),a+c>=l?(s=0,a=l):a+c>=1?(s=(e*u-1)*Math.pow(2,o),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;t[r+p]=255&s,p+=h,s/=256,o-=8);for(a=a<<o|s,f+=o;f>0;t[r+p]=255&a,p+=h,a/=256,f-=8);t[r+p-h]|=128*y}}),i("itbxz",function(e,r){t(e.exports,"default",()=>i);var n=o("i4ijA"),i=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){(0,n.default).forEach(this.handlers,function(e){null!==e&&t(e)})}}}),i("2u9Ce",function(e,r){t(e.exports,"default",()=>c);var n=o("iQhXV"),i=o("5SIUr"),a=o("bJncD"),s=o("7XT9I"),u=o("fRBtE"),f=o("9o9qV");/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function l(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s.default(null,t)}function c(t){l(t),t.headers=(0,u.default).from(t.headers),// Transform request data
t.data=(0,n.default).call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=(0,f.default).getAdapter(t.adapter||a.default.adapter);return e(t).then(function(e){return l(t),// Transform response data
e.data=(0,n.default).call(t,t.transformResponse,e),e.headers=(0,u.default).from(e.headers),e},function(e){return!(0,i.default)(e)&&(l(t),e&&e.response&&(e.response.data=(0,n.default).call(t,t.transformResponse,e.response),e.response.headers=(0,u.default).from(e.response.headers))),Promise.reject(e)})}}),i("iQhXV",function(e,r){t(e.exports,"default",()=>s);var n=o("i4ijA"),i=o("bJncD"),a=o("fRBtE");function s(t,e){let r=this||i.default,o=e||r,s=(0,a.default).from(o.headers),u=o.data;return(0,n.default).forEach(t,function(t){u=t.call(r,u,s.normalize(),e?e.status:void 0)}),s.normalize(),u}}),i("bJncD",function(e,r){t(e.exports,"default",()=>d);var n=o("i4ijA"),i=o("k5sPl"),a=o("fK4vu"),s=o("gZZY4"),u=o("aVTCj"),f=o("8KDYS"),l=o("2eGDI");let c={transitional:a.default,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let o=e.getContentType()||"",i=o.indexOf("application/json")>-1,a=(0,n.default).isObject(t);a&&(0,n.default).isHTMLForm(t)&&(t=new FormData(t));let f=(0,n.default).isFormData(t);if(f)return i&&i?JSON.stringify((0,l.default)(t)):t;if((0,n.default).isArrayBuffer(t)||(0,n.default).isBuffer(t)||(0,n.default).isStream(t)||(0,n.default).isFile(t)||(0,n.default).isBlob(t))return t;if((0,n.default).isArrayBufferView(t))return t.buffer;if((0,n.default).isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(a){if(o.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(t,this.formSerializer).toString();if((r=(0,n.default).isFileList(t))||o.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return(0,s.default)(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return a||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if((0,n.default).isString(t))try{return(0,JSON.parse)(t),(0,n.default).trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||c.transitional,r=e&&e.forcedJSONParsing,o="json"===this.responseType;if(t&&(0,n.default).isString(t)&&(r&&!this.responseType||o)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&o){if("SyntaxError"===t.name)throw(0,i.default).from(t,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:f.default.classes.FormData,Blob:f.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,n.default).forEach(["delete","get","head","post","put","patch"],t=>{c.headers[t]={}});var d=c}),i("fK4vu",function(e,r){t(e.exports,"default",()=>n);var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),i("aVTCj",function(e,r){t(e.exports,"default",()=>s);var n=o("i4ijA"),i=o("gZZY4"),a=o("8KDYS");function s(t,e){return(0,i.default)(t,new a.default.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,o){return a.default.isNode&&(0,n.default).isBuffer(t)?(this.append(e,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}}),i("8KDYS",function(e,r){let n;t(e.exports,"default",()=>l);var i=o("hbIyF"),a=o("jDCoP"),s=o("cuQ85");/**
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
 */let u=("undefined"==typeof navigator||"ReactNative"!==(n=navigator.product)&&"NativeScript"!==n&&"NS"!==n)&&"undefined"!=typeof window&&"undefined"!=typeof document,f="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var l={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:a.default,Blob:s.default},isStandardBrowserEnv:u,isStandardBrowserWebWorkerEnv:f,protocols:["http","https","file","blob","url","data"]}}),i("hbIyF",function(e,r){t(e.exports,"default",()=>i);var n=o("5B7zY"),i="undefined"!=typeof URLSearchParams?URLSearchParams:n.default}),i("jDCoP",function(e,r){t(e.exports,"default",()=>n);var n="undefined"!=typeof FormData?FormData:null}),i("cuQ85",function(e,r){t(e.exports,"default",()=>n);var n="undefined"!=typeof Blob?Blob:null}),i("2eGDI",function(e,r){t(e.exports,"default",()=>i);var n=o("i4ijA"),i=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if((0,n.default).isFormData(t)&&(0,n.default).isFunction(t.entries)){let e={};return(0,n.default).forEachEntry(t,(t,r)=>{!function t(e,r,o,i){let a=e[i++],s=Number.isFinite(+a),u=i>=e.length;if(a=!a&&(0,n.default).isArray(o)?o.length:a,u)return(0,n.default).hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s;o[a]&&(0,n.default).isObject(o[a])||(o[a]=[]);let f=t(e,r,o[a],i);return f&&(0,n.default).isArray(o[a])&&(o[a]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(o[a])),!s}((0,n.default).matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null}}),i("fRBtE",function(e,r){t(e.exports,"default",()=>d);var n=o("i4ijA"),i=o("gwcWo");let a=Symbol("internals");function s(t){return t&&String(t).trim().toLowerCase()}function u(t){return!1===t||null==t?t:(0,n.default).isArray(t)?t.map(u):String(t)}let f=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function l(t,e,r,o,i){if((0,n.default).isFunction(o))return o.call(this,e,r);if(i&&(e=r),(0,n.default).isString(e)){if((0,n.default).isString(o))return -1!==e.indexOf(o);if((0,n.default).isRegExp(o))return o.test(e)}}class c{constructor(t){t&&this.set(t)}set(t,e,r){let o=this;function a(t,e,r){let i=s(e);if(!i)throw Error("header name must be a non-empty string");let a=(0,n.default).findKey(o,i);a&&void 0!==o[a]&&!0!==r&&(void 0!==r||!1===o[a])||(o[a||e]=u(t))}let l=(t,e)=>(0,n.default).forEach(t,(t,r)=>a(t,r,e));return(0,n.default).isPlainObject(t)||t instanceof this.constructor?l(t,e):(0,n.default).isString(t)&&(t=t.trim())&&!f(t)?l((0,i.default)(t),e):null!=t&&a(e,t,r),this}get(t,e){if(t=s(t)){let r=(0,n.default).findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if((0,n.default).isFunction(e))return e.call(this,t,r);if((0,n.default).isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=s(t)){let r=(0,n.default).findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||l(this,this[r],r,e)))}return!1}delete(t,e){let r=this,o=!1;function i(t){if(t=s(t)){let i=(0,n.default).findKey(r,t);i&&(!e||l(r,r[i],i,e))&&(delete r[i],o=!0)}}return(0,n.default).isArray(t)?t.forEach(i):i(t),o}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||l(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return(0,n.default).forEach(this,(o,i)=>{let a=(0,n.default).findKey(r,i);if(a){e[a]=u(o),delete e[i];return}let s=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(i).trim();s!==i&&delete e[i],e[s]=u(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return(0,n.default).forEach(this,(r,o)=>{null!=r&&!1!==r&&(e[o]=t&&(0,n.default).isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[a]=this[a]={accessors:{}},r=e.accessors,o=this.prototype;function i(t){let e=s(t);r[e]||(function(t,e){let r=(0,n.default).toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(o,t),r[e]=!0)}return(0,n.default).isArray(t)?t.forEach(i):i(t),this}}c.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),// reserved names hotfix
(0,n.default).reduceDescriptors(c.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),(0,n.default).freezeMethods(c);var d=c}),i("gwcWo",function(e,r){t(e.exports,"default",()=>a);var n=o("i4ijA");// RawAxiosHeaders whose duplicates are ignored by node
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
 */a=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&i[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o}}),i("5SIUr",function(e,r){t(e.exports,"default",()=>n);function n(t){return!!(t&&t.__CANCEL__)}}),i("7XT9I",function(e,r){t(e.exports,"default",()=>a);var n=o("k5sPl");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function i(t,e,r){// eslint-disable-next-line no-eq-null,eqeqeq
(0,n.default).call(this,null==t?"canceled":t,n.default.ERR_CANCELED,e,r),this.name="CanceledError"}(0,o("i4ijA").default).inherits(i,n.default,{__CANCEL__:!0});var a=i}),i("9o9qV",function(e,r){t(e.exports,"default",()=>c);var n=o("i4ijA"),i=o("l52nF"),a=o("2kdvM"),s=o("k5sPl");let u={http:i.default,xhr:a.default};(0,n.default).forEach(u,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});let f=t=>`- ${t}`,l=t=>(0,n.default).isFunction(t)||null===t||!1===t;var c={getAdapter:t=>{let e,r;t=(0,n.default).isArray(t)?t:[t];let{length:o}=t,i={};for(let n=0;n<o;n++){let o;if(r=e=t[n],!l(e)&&void 0===(r=u[(o=String(e)).toLowerCase()]))throw new s.default(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+n]=r}if(!r){let t=Object.entries(i).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")),e=o?t.length>1?"since :\n"+t.map(f).join("\n"):" "+f(t[0]):"as no adapter specified";throw new s.default("There is no suitable adapter to dispatch the request "+e,"ERR_NOT_SUPPORT")}return r},adapters:u}}),i("2kdvM",function(e,r){t(e.exports,"default",()=>v);var n=o("i4ijA"),i=o("4Bh8W"),a=o("j9ifV"),s=o("h9Lf1"),u=o("kHvG3"),f=o("kgVUb"),l=o("fK4vu"),c=o("k5sPl"),d=o("7XT9I"),p=o("jOreR"),h=o("8KDYS"),y=o("fRBtE"),g=o("el6rn");function m(t,e){let r=0,n=(0,g.default)(50,250);return o=>{let i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-r,u=n(s),f=i<=a;r=i;let l={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&f?(a-i)/u:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}let b="undefined"!=typeof XMLHttpRequest;var v=b&&function(t){return new Promise(function(e,r){let o,g,b=t.data,v=(0,y.default).from(t.headers).normalize(),E=t.responseType;function w(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}(0,n.default).isFormData(b)&&(h.default.isStandardBrowserEnv||h.default.isStandardBrowserWebWorkerEnv?v.setContentType(!1):v.getContentType(/^\s*multipart\/form-data/)?(0,n.default).isString(g=v.getContentType())&&v.setContentType(g.replace(/^\s*(multipart\/form-data);+/,"$1")):v.setContentType("multipart/form-data"));let A=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";v.set("Authorization","Basic "+btoa(e+":"+r))}let S=(0,u.default)(t.baseURL,t.url);function O(){if(!A)return;// Prepare the response
let n=(0,y.default).from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),o=E&&"text"!==E&&"json"!==E?A.response:A.responseText,a={data:o,status:A.status,statusText:A.statusText,headers:n,config:t,request:A};(0,i.default)(function(t){e(t),w()},function(t){r(t),w()},a),// Clean up request
A=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(A.open(t.method.toUpperCase(),(0,s.default)(S,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
A.timeout=t.timeout,"onloadend"in A?A.onloadend=O:A.onreadystatechange=function(){A&&4===A.readyState&&(0!==A.status||A.responseURL&&0===A.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(O)},// Handle browser request cancellation (as opposed to a manual cancellation)
A.onabort=function(){A&&(r(new c.default("Request aborted",c.default.ECONNABORTED,t,A)),// Clean up request
A=null)},// Handle low level network errors
A.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new c.default("Network Error",c.default.ERR_NETWORK,t,A)),// Clean up request
A=null},// Handle timeout
A.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||l.default;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new c.default(e,n.clarifyTimeoutError?c.default.ETIMEDOUT:c.default.ECONNABORTED,t,A)),// Clean up request
A=null},h.default.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||(0,f.default)(S))&&t.xsrfCookieName&&(0,a.default).read(t.xsrfCookieName);e&&v.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===b&&v.setContentType(null),"setRequestHeader"in A&&(0,n.default).forEach(v.toJSON(),function(t,e){A.setRequestHeader(e,t)}),(0,n.default).isUndefined(t.withCredentials)||(A.withCredentials=!!t.withCredentials),E&&"json"!==E&&(A.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&A.addEventListener("progress",m(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&A.upload&&A.upload.addEventListener("progress",m(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=e=>{A&&(r(!e||e.type?new d.default(null,t,A):e),A.abort(),A=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));let x=(0,p.default)(S);if(x&&-1===(0,h.default).protocols.indexOf(x)){r(new c.default("Unsupported protocol "+x+":",c.default.ERR_BAD_REQUEST,t));return}// Send the request
A.send(b||null)})}}),i("4Bh8W",function(e,r){t(e.exports,"default",()=>i);var n=o("k5sPl");function i(t,e,r){let o=r.config.validateStatus;!r.status||!o||o(r.status)?t(r):e(new n.default("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}}),i("j9ifV",function(e,r){t(e.exports,"default",()=>i);var n=o("i4ijA"),i=o("8KDYS").default.isStandardBrowserEnv?{write:function(t,e,r,o,i,a){let s=[];s.push(t+"="+encodeURIComponent(e)),(0,n.default).isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),(0,n.default).isString(o)&&s.push("path="+o),(0,n.default).isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),i("kHvG3",function(e,r){t(e.exports,"default",()=>a);var n=o("2IQpt"),i=o("bb7xE");function a(t,e){return t&&!(0,n.default)(e)?(0,i.default)(t,e):e}}),i("2IQpt",function(e,r){t(e.exports,"default",()=>n);function n(t){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}}),i("bb7xE",function(e,r){t(e.exports,"default",()=>n);function n(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}}),i("kgVUb",function(e,r){t(e.exports,"default",()=>i);var n=o("i4ijA"),i=o("8KDYS").default.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function o(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=o(window.location.href),function(e){let r=(0,n.default).isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}}),i("jOreR",function(e,r){t(e.exports,"default",()=>n);function n(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}}),i("el6rn",function(e,r){t(e.exports,"default",()=>n);var n=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,a=0;return e=void 0!==e?e:1e3,function(s){let u=Date.now(),f=o[a];r||(r=u),n[i]=s,o[i]=u;let l=a,c=0;for(;l!==i;)c+=n[l++],l%=t;if((i=(i+1)%t)===a&&(a=(a+1)%t),u-r<e)return;let d=f&&u-f;return d?Math.round(1e3*c/d):void 0}}}),i("kSe7Y",function(e,r){t(e.exports,"default",()=>s);var n=o("i4ijA"),i=o("fRBtE");let a=t=>t instanceof i.default?t.toJSON():t;function s(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function o(t,e,r){return(0,n.default).isPlainObject(t)&&(0,n.default).isPlainObject(e)?(0,n.default).merge.call({caseless:r},t,e):(0,n.default).isPlainObject(e)?(0,n.default).merge({},e):(0,n.default).isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,r){return(0,n.default).isUndefined(e)?(0,n.default).isUndefined(t)?void 0:o(void 0,t,r):o(t,e,r)}// eslint-disable-next-line consistent-return
function s(t,e){if(!(0,n.default).isUndefined(e))return o(void 0,e)}// eslint-disable-next-line consistent-return
function u(t,e){return(0,n.default).isUndefined(e)?(0,n.default).isUndefined(t)?void 0:o(void 0,t):o(void 0,e)}// eslint-disable-next-line consistent-return
function f(r,n,i){return i in e?o(r,n):i in t?o(void 0,r):void 0}let l={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f,headers:(t,e)=>i(a(t),a(e),!0)};return(0,n.default).forEach(Object.keys(Object.assign({},t,e)),function(o){let a=l[o]||i,s=a(t[o],e[o],o);(0,n.default).isUndefined(s)&&a!==f||(r[o]=s)}),r}}),i("hd4Q7",function(e,r){t(e.exports,"default",()=>u);var n=o("8WPkr"),i=o("k5sPl");let a={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{a[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});let s={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */a.transitional=function(t,e,r){function o(t,e){return"[Axios v"+n.VERSION+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,n,a)=>{if(!1===t)throw new i.default(o(n," has been removed"+(e?" in "+e:"")),i.default.ERR_DEPRECATED);return e&&!s[n]&&(s[n]=!0,// eslint-disable-next-line no-console
console.warn(o(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,a)}};var u={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new i.default("options must be an object",i.default.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let a=n[o],s=e[a];if(s){let e=t[a],r=void 0===e||s(e,a,t);if(!0!==r)throw new i.default("option "+a+" must be "+r,i.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new i.default("Unknown option "+a,i.default.ERR_BAD_OPTION)}},validators:a}}),i("8WPkr",function(e,r){t(e.exports,"VERSION",()=>n);let n="1.5.1"}),i("9GGcx",function(e,r){t(e.exports,"default",()=>a);var n=o("7XT9I");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class i{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,o,i){r.reason||(r.reason=new n.default(t,o,i),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new i(function(e){t=e});return{token:e,cancel:t}}}var a=i}),i("4rx4g",function(e,r){t(e.exports,"default",()=>n);function n(t){return function(e){return t.apply(null,e)}}}),i("4Qexm",function(e,r){t(e.exports,"default",()=>i);var n=o("i4ijA");function i(t){return(0,n.default).isObject(t)&&!0===t.isAxiosError}}),i("dcCu5",function(e,r){t(e.exports,"default",()=>o);let n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach(([t,e])=>{n[e]=t});var o=n});var a=o("lXnOV");let s=null;const u=document.querySelector(".popup__img"),f=document.querySelector(".popup__amazon"),l=document.querySelector(".popup__description-details"),c=document.querySelector(".popup__btn-add"),d=document.querySelector(".popup__btn-remove"),p=document.querySelector(".popup__btn-close"),h=document.querySelector(".backdrop-popup"),y=document.querySelector(".popup"),g=document.querySelector(".popup__comment"),m=document.querySelector(".popup__shops-list");let b=!1;const v=()=>{b?(c.classList.add("popup__btn-text-hidden"),d.classList.remove("popup__btn-text-hidden"),g.classList.remove("popup__btn-text-hidden")):(c.classList.remove("popup__btn-text-hidden"),d.classList.add("popup__btn-text-hidden"),g.classList.add("popup__btn-text-hidden"))},E=async t=>{let e=await (0,a.fetchBookById)(t);s=e;let r=JSON.parse(localStorage.getItem("books"))||[];b=r.some(t=>t._id===e._id),v(),u.src=e.book_image,f.href=e.amazon_product_url;let n=`<h2 class="popup__title">${e.title}</h2>
                <p class="popup__author">${e.author}</p>
                <p class="popup__text">${e.description}</p>`;l.innerHTML=n;let o=e.buy_links.slice(1).map(t=>`<li class="popup__shops-item"><a class="popup__shops-link" href="${t.url}" target="_blank">${t.name}</a></li>`).join("");m.innerHTML=o},w=()=>{h.classList.add("popup-is-hidden"),p.removeEventListener("click",w),h.removeEventListener("click",A),document.removeEventListener("keydown",S)},A=t=>{t.target===h&&w()};y.addEventListener("click",t=>{t.stopPropagation()});const S=t=>{"Escape"===t.code&&w()},O=document.querySelector(".open-list");O.addEventListener("click",t=>{if(t.target.closest("li")){let e=t.target.closest("li").dataset.id;E(e),p.addEventListener("click",w),h.addEventListener("click",A),document.addEventListener("keydown",S),h.classList.remove("popup-is-hidden")}}),d.addEventListener("click",()=>{if(!s)return;let t=JSON.parse(localStorage.getItem("books"))||[],e=t.filter(t=>t._id!==s._id);localStorage.setItem("books",JSON.stringify(e)),b=!1,v()}),c.addEventListener("click",()=>{if(!s)return;let t=JSON.parse(localStorage.getItem("books"))||[],e=t.some(t=>t._id===s._id);e||(t.push(s),localStorage.setItem("books",JSON.stringify(t))),b=!0,v()});// toggleDarkThemePopUp();
// openPopUp();
// localStorage.clear();
//# sourceMappingURL=index.27e1459e.js.map

//# sourceMappingURL=index.27e1459e.js.map