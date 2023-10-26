let e,t,i,n,r;var a,s,o,l,c,d,u,p,h,m,f=globalThis,g={},v={},b=f.parcelRequired7c6;null==b&&((b=function(e){if(e in g)return g[e].exports;if(e in v){var t=v[e];delete v[e];var i={id:e,exports:{}};return g[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){v[e]=t},f.parcelRequired7c6=b),b.register,(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=()=>{let i="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open");let n=i?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",n),i.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const y=document.querySelector(".js-open-menu"),w=document.querySelector(".js-close-menu");w.disabled=!0,y.addEventListener("click",()=>{setTimeout(()=>{y.disabled=!0,w.disabled=!1},500)}),w.addEventListener("click",()=>{setTimeout(()=>{w.disabled=!0,y.disabled=!1},500)});const x=document.querySelector(".theme-button"),k=document.querySelector("body");let S=localStorage.getItem("theme")||"light-theme";k.classList.add(S),x.addEventListener("click",()=>{"dark-theme"===S?(k.classList.remove("dark-theme"),S="light-theme"):(k.classList.add("dark-theme"),S="dark-theme"),localStorage.setItem("theme",S)});var T=b("lXnOV");const I=document.querySelector(".side-bar__categories");!async function(){let e=await (0,T.fetchBooksCategoryList)(),t=e.map(e=>`<li tabindex='-1' class="side-bar__categories-item">${e.list_name}</li>`).join("");I.insertAdjacentHTML("beforeend",t)}();var E={};E=new URL("save-the-children.e7cb9515.png",import.meta.url).toString();var C={};C=new URL("project-hope.65587b00.png",import.meta.url).toString();var _={};_=new URL("international-medical-corps.bb14a1fb.png",import.meta.url).toString();var N={};N=new URL("razom.3639a3ee.png",import.meta.url).toString();var L={};L=new URL("action-against-hunger.6319825b.png",import.meta.url).toString();var A={};A=new URL("sergiy-prytula.d33ef8f5.png",import.meta.url).toString();var P={};P=new URL("medecins-sans-frontieres.0a6ef6af.png",import.meta.url).toString();var O={};O=new URL("world-vision.8a329a07.png",import.meta.url).toString();var R={};R=new URL("united24.9625498b.png",import.meta.url).toString();var M=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(E).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(C).href,width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(_).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(N).href},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(L).href},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en",img:new URL(A).href},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine",img:new URL(P).href},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(O).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(R).href}];/**
 * Swiper 11.0.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 25, 2023
 *//**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 *//* eslint-disable no-param-reassign */function D(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function z(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach(i=>{void 0===e[i]?e[i]=t[i]:D(t[i])&&D(e[i])&&Object.keys(t[i]).length>0&&z(e[i],t[i])})}const W={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function B(){let e="undefined"!=typeof document?document:{};return z(e,W),e}const F={document:W,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function j(){let e="undefined"!=typeof window?window:{};return z(e,F),e}function U(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function H(){return Date.now()}function V(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function $(){let e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){let n=i<0||arguments.length<=i?void 0:arguments[i];if(null!=n&&// eslint-disable-next-line
("undefined"!=typeof window&&void 0!==window.HTMLElement?!(n instanceof HTMLElement):!n||1!==n.nodeType&&11!==n.nodeType)){let i=Object.keys(Object(n)).filter(e=>0>t.indexOf(e));for(let t=0,r=i.length;t<r;t+=1){let r=i[t],a=Object.getOwnPropertyDescriptor(n,r);void 0!==a&&a.enumerable&&(V(e[r])&&V(n[r])?n[r].__swiper__?e[r]=n[r]:$(e[r],n[r]):!V(e[r])&&V(n[r])?(e[r]={},n[r].__swiper__?e[r]=n[r]:$(e[r],n[r])):e[r]=n[r])}}}return e}function G(e,t,i){e.style.setProperty(t,i)}function X(e){let t,{swiper:i,targetPosition:n,side:r}=e,a=j(),s=-i.translate,o=null,l=i.params.speed;i.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(i.cssModeFrameID);let c=n>s?"next":"prev",d=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{t=new Date().getTime(),null===o&&(o=t);let e=Math.max(Math.min((t-o)/l,1),0),c=s+(.5-Math.cos(e*Math.PI)/2)*(n-s);if(d(c,n)&&(c=n),i.wrapperEl.scrollTo({[r]:c}),d(c,n)){i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[r]:c})}),a.cancelAnimationFrame(i.cssModeFrameID);return}i.cssModeFrameID=a.requestAnimationFrame(u)};u()}function q(e,t){return void 0===t&&(t=""),[...e.children].filter(e=>e.matches(t))}function K(e){try{console.warn(e);return}catch(e){// err
}}function Y(e,t){var i;void 0===t&&(t=[]);let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:(void 0===(i=t)&&(i=""),i.trim().split(" ").filter(e=>!!e.trim()))),n}function J(e,t){let i=j();return i.getComputedStyle(e,null).getPropertyValue(t)}function Q(e){let t,i=e;if(i){// eslint-disable-next-line
for(t=0;null!==(i=i.previousSibling);)1===i.nodeType&&(t+=1);return t}}function Z(e,t,i){let n=j();return i?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function ee(){return e||(e=function(){let e=j(),t=B();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),e}const et=(e,t)=>{if(!e||e.destroyed||!e.params)return;let i=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(i){let t=i.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(i.shadowRoot?t=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(t=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))&&t.remove()})),t&&t.remove()}},ei=(e,t)=>{if(!e.slides[t])return;let i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},en=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);let n="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let i=[r-t];i.push(...Array.from({length:t}).map((e,t)=>r+n+t)),e.slides.forEach((t,n)=>{i.includes(t.column)&&ei(e,n)});return}let a=r+n-1;if(e.params.rewind||e.params.loop)for(let n=r-t;n<=a+t;n+=1){let t=(n%i+i)%i;(t<r||t>a)&&ei(e,t)}else for(let n=Math.max(r-t,0);n<=Math.min(a+t,i-1);n+=1)n!==r&&(n>a||n<r)&&ei(e,n)};function er(e){let{swiper:t,runCallbacks:i,direction:n,step:r}=e,{activeIndex:a,previousIndex:s}=t,o=n;if(o||(o=a>s?"next":a<s?"prev":"reset"),t.emit(`transition${r}`),i&&a!==s){if("reset"===o){t.emit(`slideResetTransition${r}`);return}t.emit(`slideChangeTransition${r}`),"next"===o?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`)}}function ea(e,t,i){let n=j(),{params:r}=e,a=r.edgeSwipeDetection,s=r.edgeSwipeThreshold;return!a||!(i<=s)&&!(i>=n.innerWidth-s)||"prevent"===a&&(t.preventDefault(),!0)}function es(e){let t=B(),i=e;i.originalEvent&&(i=i.originalEvent);let n=this.touchEventsData;if("pointerdown"===i.type){if(null!==n.pointerId&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(n.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type){// don't proceed touch event
ea(this,i,i.targetTouches[0].pageX);return}let{params:r,touches:a,enabled:s}=this;if(!s||!r.simulateTouch&&"mouse"===i.pointerType||this.animating&&r.preventInteractionOnTransition)return;!this.animating&&r.cssMode&&r.loop&&this.loopFix();let o=i.target;if("wrapper"===r.touchEventsTarget&&!this.wrapperEl.contains(o)||"which"in i&&3===i.which||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;// change target el for shadow root component
let l=!!r.noSwipingClass&&""!==r.noSwipingClass,c=i.composedPath?i.composedPath():i.path;l&&i.target&&i.target.shadowRoot&&c&&(o=c[0]);let d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,u=!!(i.target&&i.target.shadowRoot);// use closestElement for shadow root element to get the actual closest for nested shadow root element
if(r.noSwiping&&(u?// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function(e,t){return void 0===t&&(t=this),function t(i){if(!i||i===B()||i===j())return null;i.assignedSlot&&(i=i.assignedSlot);let n=i.closest(e);return n||i.getRootNode?n||t(i.getRootNode().host):null}(t)}(d,o):o.closest(d))){this.allowClick=!0;return}if(r.swipeHandler&&!o.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;let p=a.currentX,h=a.currentY;// Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
if(!ea(this,i,p))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=h,n.touchStartTime=H(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let m=!0;o.matches(n.focusableElements)&&(m=!1,"SELECT"===o.nodeName&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==o&&t.activeElement.blur();let f=m&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&!o.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&this.freeMode&&this.animating&&!r.cssMode&&this.freeMode.onTouchStart(),this.emit("touchStart",i)}function eo(e){let t,i;let n=B(),r=this.touchEventsData,{params:a,touches:s,rtlTranslate:o,enabled:l}=this;if(!l||!a.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),"pointermove"===c.type){if(null!==r.touchId)return;// return from pointer if we use touch
let e=c.pointerId;if(e!==r.pointerId)return}if("touchmove"===c.type){if(!(t=[...c.changedTouches].filter(e=>e.identifier===r.touchId)[0])||t.identifier!==r.touchId)return}else t=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&this.emit("touchMoveOpposite",c);return}let d=t.pageX,u=t.pageY;if(c.preventedByNestedSwiper){s.startX=d,s.startY=u;return}if(!this.allowTouchMove){c.target.matches(r.focusableElements)||(this.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:d,startY:u,currentX:d,currentY:u}),r.touchStartTime=H());return}if(a.touchReleaseOnEdges&&!a.loop){if(this.isVertical()){if(u<s.startY&&this.translate<=this.maxTranslate()||u>s.startY&&this.translate>=this.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<s.startX&&this.translate<=this.maxTranslate()||d>s.startX&&this.translate>=this.minTranslate())return}if(n.activeElement&&c.target===n.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,this.allowClick=!1;return}r.allowTouchCallbacks&&this.emit("touchMove",c),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=u;let p=s.currentX-s.startX,h=s.currentY-s.startY;if(this.params.threshold&&Math.sqrt(p**2+h**2)<this.params.threshold)return;if(void 0===r.isScrolling){let e;this.isHorizontal()&&s.currentY===s.startY||this.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:p*p+h*h>=25&&(e=180*Math.atan2(Math.abs(h),Math.abs(p))/Math.PI,r.isScrolling=this.isHorizontal()?e>a.touchAngle:90-e>a.touchAngle)}if(r.isScrolling&&this.emit("touchMoveOpposite",c),void 0===r.startMoving&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||this.zoom&&this.params.zoom&&this.params.zoom.enabled){r.isTouched=!1;return}if(!r.startMoving)return;this.allowClick=!1,!a.cssMode&&c.cancelable&&c.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&c.stopPropagation();let m=this.isHorizontal()?p:h,f=this.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;a.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),f=Math.abs(f)*(o?1:-1)),s.diff=m,m*=a.touchRatio,o&&(m=-m,f=-f);let g=this.touchesDirection;this.swipeDirection=m>0?"prev":"next",this.touchesDirection=f>0?"prev":"next";let v=this.params.loop&&!a.cssMode,b="next"===this.touchesDirection&&this.allowSlideNext||"prev"===this.touchesDirection&&this.allowSlidePrev;if(!r.isMoved){if(v&&b&&this.loopFix({direction:this.swipeDirection}),r.startTranslate=this.getTranslate(),this.setTransition(0),this.animating){let e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});this.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,a.grabCursor&&(!0===this.allowSlideNext||!0===this.allowSlidePrev)&&this.setGrabCursor(!0),this.emit("sliderFirstMove",c)}if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&g!==this.touchesDirection&&v&&b&&Math.abs(m)>=1){Object.assign(s,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}this.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,w=a.resistanceRatio;// Threshold
if(a.touchReleaseOnEdges&&(w=0),m>0?(v&&b&&!i&&r.allowThresholdMove&&r.currentTranslate>(a.centeredSlides?this.minTranslate()-this.slidesSizesGrid[this.activeIndex+1]:this.minTranslate())&&this.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>this.minTranslate()&&(y=!1,a.resistance&&(r.currentTranslate=this.minTranslate()-1+(-this.minTranslate()+r.startTranslate+m)**w))):m<0&&(v&&b&&!i&&r.allowThresholdMove&&r.currentTranslate<(a.centeredSlides?this.maxTranslate()+this.slidesSizesGrid[this.slidesSizesGrid.length-1]:this.maxTranslate())&&this.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:this.slides.length-("auto"===a.slidesPerView?this.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),r.currentTranslate<this.maxTranslate()&&(y=!1,a.resistance&&(r.currentTranslate=this.maxTranslate()+1-(this.maxTranslate()-r.startTranslate-m)**w))),y&&(c.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),this.allowSlidePrev||this.allowSlideNext||(r.currentTranslate=r.startTranslate),a.threshold>0){if(Math.abs(m)>a.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=this.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}}a.followFinger&&!a.cssMode&&((a.freeMode&&a.freeMode.enabled&&this.freeMode||a.watchSlidesProgress)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&this.freeMode&&this.freeMode.onTouchMove(),// Update progress
this.updateProgress(r.currentTranslate),// Update translate
this.setTranslate(r.currentTranslate))}function el(e){let t,i;let n=this,r=n.touchEventsData,a=e;a.originalEvent&&(a=a.originalEvent);let s="touchend"===a.type||"touchcancel"===a.type;if(s){if(!(t=[...a.changedTouches].filter(e=>e.identifier===r.touchId)[0])||t.identifier!==r.touchId)return}else{if(null!==r.touchId||a.pointerId!==r.pointerId)return;// return from pointer if we use touch
t=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)){let e=["pointercancel","contextmenu"].includes(a.type)&&(n.browser.isSafari||n.browser.isWebView);if(!e)return}r.pointerId=null,r.touchId=null;let{params:o,touches:l,rtlTranslate:c,slidesGrid:d,enabled:u}=n;if(!u||!o.simulateTouch&&"mouse"===a.pointerType)return;if(r.allowTouchCallbacks&&n.emit("touchEnd",a),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&o.grabCursor&&n.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}o.grabCursor&&r.isMoved&&r.isTouched&&(!0===n.allowSlideNext||!0===n.allowSlidePrev)&&n.setGrabCursor(!1);// Time diff
let p=H(),h=p-r.touchStartTime;// Tap, doubleTap, Click
if(n.allowClick){let e=a.path||a.composedPath&&a.composedPath();n.updateClickedSlide(e&&e[0]||a.target,e),n.emit("tap click",a),h<300&&p-r.lastClickTime<300&&n.emit("doubleTap doubleClick",a)}if(r.lastClickTime=H(),U(()=>{n.destroyed||(n.allowClick=!0)}),!r.isTouched||!r.isMoved||!n.swipeDirection||0===l.diff&&!r.loopSwapReset||r.currentTranslate===r.startTranslate&&!r.loopSwapReset){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}if(r.isTouched=!1,r.isMoved=!1,r.startMoving=!1,i=o.followFinger?c?n.translate:-n.translate:-r.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:i});return}// Find current slide
let m=0,f=n.slidesSizesGrid[0];for(let e=0;e<d.length;e+=e<o.slidesPerGroupSkip?1:o.slidesPerGroup){let t=e<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;void 0!==d[e+t]?i>=d[e]&&i<d[e+t]&&(m=e,f=d[e+t]-d[e]):i>=d[e]&&(m=e,f=d[d.length-1]-d[d.length-2])}let g=null,v=null;o.rewind&&(n.isBeginning?v=o.virtual&&o.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(g=0));// Find current slide size
let b=(i-d[m])/f,y=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(h>o.longSwipesMs){// Long touches
if(!o.longSwipes){n.slideTo(n.activeIndex);return}"next"===n.swipeDirection&&(b>=o.longSwipesRatio?n.slideTo(o.rewind&&n.isEnd?g:m+y):n.slideTo(m)),"prev"===n.swipeDirection&&(b>1-o.longSwipesRatio?n.slideTo(m+y):null!==v&&b<0&&Math.abs(b)>o.longSwipesRatio?n.slideTo(v):n.slideTo(m))}else{// Short swipes
if(!o.shortSwipes){n.slideTo(n.activeIndex);return}let e=n.navigation&&(a.target===n.navigation.nextEl||a.target===n.navigation.prevEl);e?a.target===n.navigation.nextEl?n.slideTo(m+y):n.slideTo(m):("next"===n.swipeDirection&&n.slideTo(null!==g?g:m+y),"prev"===n.swipeDirection&&n.slideTo(null!==v?v:m))}}function ec(){let e=this,{params:t,el:i}=e;if(i&&0===i.offsetWidth)return;t.breakpoints&&e.setBreakpoint();// Save locks
let{allowSlideNext:n,allowSlidePrev:r,snapGrid:a}=e,s=e.virtual&&e.params.virtual.enabled;// Disable locks on resize
e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let o=s&&t.loop;"auto"!==t.slidesPerView&&!(t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||o?e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),// Return locks after resize
e.allowSlidePrev=r,e.allowSlideNext=n,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function ed(e){this.enabled&&!this.allowClick&&(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function eu(){let{wrapperEl:e,rtlTranslate:t,enabled:i}=this;if(!i)return;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=-e.scrollLeft:this.translate=-e.scrollTop,0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();let n=this.maxTranslate()-this.minTranslate();(0===n?0:(this.translate-this.minTranslate())/n)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}function ep(e){et(this,e.target),!this.params.cssMode&&("auto"===this.params.slidesPerView||this.params.autoHeight)&&this.update()}function eh(){!this.documentTouchHandlerProceeded&&(this.documentTouchHandlerProceeded=!0,this.params.touchReleaseOnEdges&&(this.el.style.touchAction="auto"))}const em=(e,t)=>{let i=B(),{params:n,el:r,wrapperEl:a,device:s}=e,o=!!n.nested,l="on"===t?"addEventListener":"removeEventListener";// Touch Events
i[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",e.onTouchStart,{passive:!1}),r[l]("pointerdown",e.onTouchStart,{passive:!1}),i[l]("touchmove",e.onTouchMove,{passive:!1,capture:o}),i[l]("pointermove",e.onTouchMove,{passive:!1,capture:o}),i[l]("touchend",e.onTouchEnd,{passive:!0}),i[l]("pointerup",e.onTouchEnd,{passive:!0}),i[l]("pointercancel",e.onTouchEnd,{passive:!0}),i[l]("touchcancel",e.onTouchEnd,{passive:!0}),i[l]("pointerout",e.onTouchEnd,{passive:!0}),i[l]("pointerleave",e.onTouchEnd,{passive:!0}),i[l]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[l]("click",e.onClick,!0),n.cssMode&&a[l]("scroll",e.onScroll),n.updateOnWindowResize?e[t](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",ec,!0):e[t]("observerUpdate",ec,!0),// Images loader
r[l]("load",e.onLoad,{capture:!0})},ef=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var eg={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",// Overrides
width:null,height:null,//
preventInteractionOnTransition:!1,// ssr
userAgent:null,url:null,// To support iOS's swipe-to-go-back gesture (when being used in-app).
edgeSwipeDetection:!1,edgeSwipeThreshold:20,// Autoheight
autoHeight:!1,// Set wrapper width
setWrapperSize:!1,// Virtual Translate
virtualTranslate:!1,// Effects
effect:"slide",// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
// Breakpoints
breakpoints:void 0,breakpointsBase:"window",// Slides grid
spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,// in px
slidesOffsetAfter:0,// in px
normalizeSlideIndex:!0,centerInsufficientSlides:!1,// Disable swiper and hide navigation when container not overflow
watchOverflow:!0,// Round length
roundLengths:!1,// Touches
touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,// Unique Navigation Elements
uniqueNavElements:!0,// Resistance
resistance:!0,resistanceRatio:.85,// Progress
watchSlidesProgress:!1,// Cursor
grabCursor:!1,// Clicks
preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,// loop
loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,// rewind
rewind:!1,// Swiping/no swiping
allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,// '.swipe-handler',
noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,// Passive Listeners
passiveListeners:!0,maxBackfaceHiddenSlides:10,// NS
containerModifierClass:"swiper-",// NEW
slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,// Callbacks
runCallbacksOnInit:!0,// Internals
_emitClasses:!1};/* eslint no-param-reassign: "off" */const ev={eventsEmitter:{on(e,t,i){let n=this;if(!n.eventsListeners||n.destroyed||"function"!=typeof t)return n;let r=i?"unshift":"push";return e.split(" ").forEach(e=>{n.eventsListeners[e]||(n.eventsListeners[e]=[]),n.eventsListeners[e][r](t)}),n},once(e,t,i){let n=this;if(!n.eventsListeners||n.destroyed||"function"!=typeof t)return n;function r(){n.off(e,r),r.__emitterProxy&&delete r.__emitterProxy;for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];t.apply(n,a)}return r.__emitterProxy=t,n.on(e,r,i)},onAny(e,t){return!this.eventsListeners||this.destroyed||"function"!=typeof e||0>this.eventsAnyListeners.indexOf(e)&&this.eventsAnyListeners[t?"unshift":"push"](e),this},offAny(e){if(!this.eventsListeners||this.destroyed||!this.eventsAnyListeners)return this;let t=this.eventsAnyListeners.indexOf(e);return t>=0&&this.eventsAnyListeners.splice(t,1),this},off(e,t){let i=this;return i.eventsListeners&&!i.destroyed&&i.eventsListeners&&e.split(" ").forEach(e=>{void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach((n,r)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&i.eventsListeners[e].splice(r,1)})}),i},emit(){let e,t,i;let n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];"string"==typeof a[0]||Array.isArray(a[0])?(e=a[0],t=a.slice(1,a.length),i=n):(e=a[0].events,t=a[0].data,i=a[0].context||n),t.unshift(i);let o=Array.isArray(e)?e:e.split(" ");return o.forEach(e=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(n=>{n.apply(i,[e,...t])}),n.eventsListeners&&n.eventsListeners[e]&&n.eventsListeners[e].forEach(e=>{e.apply(i,t)})}),n}},update:{updateSize:function(){let e,t;let i=this.el;e=void 0!==this.params.width&&null!==this.params.width?this.params.width:i.clientWidth,t=void 0!==this.params.height&&null!==this.params.height?this.params.height:i.clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(// Subtract paddings
e=e-parseInt(J(i,"padding-left")||0,10)-parseInt(J(i,"padding-right")||0,10),t=t-parseInt(J(i,"padding-top")||0,10)-parseInt(J(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){let e;let t=this;function i(e,i){return parseFloat(e.getPropertyValue(t.getDirectionLabel(i))||0)}let n=t.params,{wrapperEl:r,slidesEl:a,size:s,rtlTranslate:o,wrongRTL:l}=t,c=t.virtual&&n.virtual.enabled,d=c?t.virtual.slides.length:t.slides.length,u=q(a,`.${t.params.slideClass}, swiper-slide`),p=c?t.virtual.slides.length:u.length,h=[],m=[],f=[],g=n.slidesOffsetBefore;"function"==typeof g&&(g=n.slidesOffsetBefore.call(t));let v=n.slidesOffsetAfter;"function"==typeof v&&(v=n.slidesOffsetAfter.call(t));let b=t.snapGrid.length,y=t.slidesGrid.length,w=n.spaceBetween,x=-g,k=0,S=0;if(void 0===s)return;"string"==typeof w&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*s:"string"==typeof w&&(w=parseFloat(w)),t.virtualSize=-w,// reset margins
u.forEach(e=>{o?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(G(r,"--swiper-centered-offset-before",""),G(r,"--swiper-centered-offset-after",""));let T=n.grid&&n.grid.rows>1&&t.grid;T?t.grid.initSlides(u):t.grid&&t.grid.unsetSlides();let I="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>void 0!==n.breakpoints[e].slidesPerView).length>0;for(let r=0;r<p;r+=1){let a;if(e=0,u[r]&&(a=u[r]),T&&t.grid.updateSlide(r,a,u),!u[r]||"none"!==J(a,"display")){if("auto"===n.slidesPerView){I&&(u[r].style[t.getDirectionLabel("width")]="");let s=getComputedStyle(a),o=a.style.transform,l=a.style.webkitTransform;if(o&&(a.style.transform="none"),l&&(a.style.webkitTransform="none"),n.roundLengths)e=t.isHorizontal()?Z(a,"width",!0):Z(a,"height",!0);else{// eslint-disable-next-line
let t=i(s,"width"),n=i(s,"padding-left"),r=i(s,"padding-right"),o=i(s,"margin-left"),l=i(s,"margin-right"),c=s.getPropertyValue("box-sizing");if(c&&"border-box"===c)e=t+o+l;else{let{clientWidth:i,offsetWidth:s}=a;e=t+n+r+o+l+(s-i)}}o&&(a.style.transform=o),l&&(a.style.webkitTransform=l),n.roundLengths&&(e=Math.floor(e))}else e=(s-(n.slidesPerView-1)*w)/n.slidesPerView,n.roundLengths&&(e=Math.floor(e)),u[r]&&(u[r].style[t.getDirectionLabel("width")]=`${e}px`);u[r]&&(u[r].swiperSlideSize=e),f.push(e),n.centeredSlides?(x=x+e/2+k/2+w,0===k&&0!==r&&(x=x-s/2-w),0===r&&(x=x-s/2-w),.001>Math.abs(x)&&(x=0),n.roundLengths&&(x=Math.floor(x)),S%n.slidesPerGroup==0&&h.push(x),m.push(x)):(n.roundLengths&&(x=Math.floor(x)),(S-Math.min(t.params.slidesPerGroupSkip,S))%t.params.slidesPerGroup==0&&h.push(x),m.push(x),x=x+e+w),t.virtualSize+=e+w,k=e,S+=1}// eslint-disable-line
}// Remove last grid elements depending on width
if(t.virtualSize=Math.max(t.virtualSize,s)+v,o&&l&&("slide"===n.effect||"coverflow"===n.effect)&&(r.style.width=`${t.virtualSize+w}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+w}px`),T&&t.grid.updateWrapperSize(e,h),!n.centeredSlides){let e=[];for(let i=0;i<h.length;i+=1){let r=h[i];n.roundLengths&&(r=Math.floor(r)),h[i]<=t.virtualSize-s&&e.push(r)}h=e,Math.floor(t.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(t.virtualSize-s)}if(c&&n.loop){let e=f[0]+w;if(n.slidesPerGroup>1){let i=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),r=e*n.slidesPerGroup;for(let e=0;e<i;e+=1)h.push(h[h.length-1]+r)}for(let i=0;i<t.virtual.slidesBefore+t.virtual.slidesAfter;i+=1)1===n.slidesPerGroup&&h.push(h[h.length-1]+e),m.push(m[m.length-1]+e),t.virtualSize+=e}if(0===h.length&&(h=[0]),0!==w){let e=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");u.filter((e,t)=>!n.cssMode||!!n.loop||t!==u.length-1).forEach(t=>{t.style[e]=`${w}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;f.forEach(t=>{e+=t+(w||0)}),e-=w;let t=e-s;h=h.map(e=>e<=0?-g:e>t?t+v:e)}if(n.centerInsufficientSlides){let e=0;if(f.forEach(t=>{e+=t+(w||0)}),(e-=w)<s){let t=(s-e)/2;h.forEach((e,i)=>{h[i]=e-t}),m.forEach((e,i)=>{m[i]=e+t})}}if(Object.assign(t,{slides:u,snapGrid:h,slidesGrid:m,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){G(r,"--swiper-centered-offset-before",`${-h[0]}px`),G(r,"--swiper-centered-offset-after",`${t.size/2-f[f.length-1]/2}px`);let e=-t.snapGrid[0],i=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(t=>t+e),t.slidesGrid=t.slidesGrid.map(e=>e+i)}if(p!==d&&t.emit("slidesLengthChange"),h.length!==b&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),m.length!==y&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),!c&&!n.cssMode&&("slide"===n.effect||"fade"===n.effect)){let e=`${n.containerModifierClass}backface-hidden`,i=t.el.classList.contains(e);p<=n.maxBackfaceHiddenSlides?i||t.el.classList.add(e):i&&t.el.classList.remove(e)}},updateAutoHeight:function(e){let t;let i=this,n=[],r=i.virtual&&i.params.virtual.enabled,a=0;"number"==typeof e?i.setTransition(e):!0===e&&i.setTransition(i.params.speed);let s=e=>r?i.slides[i.getSlideIndexByData(e)]:i.slides[e];// Find slides currently in view
if("auto"!==i.params.slidesPerView&&i.params.slidesPerView>1){if(i.params.centeredSlides)(i.visibleSlides||[]).forEach(e=>{n.push(e)});else for(t=0;t<Math.ceil(i.params.slidesPerView);t+=1){let e=i.activeIndex+t;if(e>i.slides.length&&!r)break;n.push(s(e))}}else n.push(s(i.activeIndex));// Find new height from highest slide in view
for(t=0;t<n.length;t+=1)if(void 0!==n[t]){let e=n[t].offsetHeight;a=e>a?e:a}// Update Height
(a||0===a)&&(i.wrapperEl.style.height=`${a}px`)},updateSlidesOffset:function(){let e=this.slides,t=this.isElement?this.isHorizontal()?this.wrapperEl.offsetLeft:this.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(this.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-this.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);let t=this.params,{slides:i,rtlTranslate:n,snapGrid:r}=this;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();let a=-e;n&&(a=e),// Visible Slides
i.forEach(e=>{e.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),this.visibleSlidesIndexes=[],this.visibleSlides=[];let s=t.spaceBetween;"string"==typeof s&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*this.size:"string"==typeof s&&(s=parseFloat(s));for(let e=0;e<i.length;e+=1){let o=i[e],l=o.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(l-=i[0].swiperSlideOffset);let c=(a+(t.centeredSlides?this.minTranslate():0)-l)/(o.swiperSlideSize+s),d=(a-r[0]+(t.centeredSlides?this.minTranslate():0)-l)/(o.swiperSlideSize+s),u=-(a-l),p=u+this.slidesSizesGrid[e],h=u>=0&&u<=this.size-this.slidesSizesGrid[e],m=u>=0&&u<this.size-1||p>1&&p<=this.size||u<=0&&p>=this.size;m&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(e),i[e].classList.add(t.slideVisibleClass)),h&&i[e].classList.add(t.slideFullyVisibleClass),o.progress=n?-c:c,o.originalProgress=n?-d:d}},updateProgress:function(e){if(void 0===e){let t=this.rtlTranslate?-1:1;// eslint-disable-next-line
e=this&&this.translate&&this.translate*t||0}let t=this.params,i=this.maxTranslate()-this.minTranslate(),{progress:n,isBeginning:r,isEnd:a,progressLoop:s}=this,o=r,l=a;if(0===i)n=0,r=!0,a=!0;else{n=(e-this.minTranslate())/i;let t=1>Math.abs(e-this.minTranslate()),s=1>Math.abs(e-this.maxTranslate());r=t||n<=0,a=s||n>=1,t&&(n=0),s&&(n=1)}if(t.loop){let t=this.getSlideIndexByData(0),i=this.getSlideIndexByData(this.slides.length-1),n=this.slidesGrid[t],r=this.slidesGrid[i],a=this.slidesGrid[this.slidesGrid.length-1],o=Math.abs(e);(s=o>=n?(o-n)/a:(o+a-r)/a)>1&&(s-=1)}Object.assign(this,{progress:n,progressLoop:s,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&this.updateSlidesProgress(e),r&&!o&&this.emit("reachBeginning toEdge"),a&&!l&&this.emit("reachEnd toEdge"),(o&&!r||l&&!a)&&this.emit("fromEdge"),this.emit("progress",n)},updateSlidesClasses:function(){let e,t,i;let{slides:n,params:r,slidesEl:a,activeIndex:s}=this,o=this.virtual&&r.virtual.enabled,l=this.grid&&r.grid&&r.grid.rows>1,c=e=>q(a,`.${r.slideClass}${e}, swiper-slide${e}`)[0];if(n.forEach(e=>{e.classList.remove(r.slideActiveClass,r.slideNextClass,r.slidePrevClass)}),o){if(r.loop){let t=s-this.virtual.slidesBefore;t<0&&(t=this.virtual.slides.length+t),t>=this.virtual.slides.length&&(t-=this.virtual.slides.length),e=c(`[data-swiper-slide-index="${t}"]`)}else e=c(`[data-swiper-slide-index="${s}"]`)}else l?(e=n.filter(e=>e.column===s)[0],i=n.filter(e=>e.column===s+1)[0],t=n.filter(e=>e.column===s-1)[0]):e=n[s];e&&(// Active classes
e.classList.add(r.slideActiveClass),l?i&&i.classList.add(r.slideNextClass):(// Next Slide
i=function(e,t){let i=[];for(;e.nextElementSibling;){let n=e.nextElementSibling;// eslint-disable-line
t?n.matches(t)&&i.push(n):i.push(n),e=n}return i}(e,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!i&&(i=n[0]),i&&i.classList.add(r.slideNextClass),// Prev Slide
t=function(e,t){let i=[];for(;e.previousElementSibling;){let n=e.previousElementSibling;// eslint-disable-line
t?n.matches(t)&&i.push(n):i.push(n),e=n}return i}(e,`.${r.slideClass}, swiper-slide`)[0],r.loop),t&&t.classList.add(r.slidePrevClass)),this.emitSlidesClasses()},updateActiveIndex:function(e){let t,i;let n=this,r=n.rtlTranslate?n.translate:-n.translate,{snapGrid:a,params:s,activeIndex:o,realIndex:l,snapIndex:c}=n,d=e,u=e=>{let t=e-n.virtual.slidesBefore;return t<0&&(t=n.virtual.slides.length+t),t>=n.virtual.slides.length&&(t-=n.virtual.slides.length),t};if(void 0===d&&(d=function(e){let t;let{slidesGrid:i,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?r>=i[e]&&r<i[e+1]-(i[e+1]-i[e])/2?t=e:r>=i[e]&&r<i[e+1]&&(t=e+1):r>=i[e]&&(t=e);return n.normalizeSlideIndex&&(t<0||void 0===t)&&(t=0),t}(n)),a.indexOf(r)>=0)t=a.indexOf(r);else{let e=Math.min(s.slidesPerGroupSkip,d);t=e+Math.floor((d-e)/s.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),d===o&&!n.params.loop){t!==c&&(n.snapIndex=t,n.emit("snapIndexChange"));return}if(d===o&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=u(d);return}let p=n.grid&&s.grid&&s.grid.rows>1;if(n.virtual&&s.virtual.enabled&&s.loop)i=u(d);else if(p){let e=n.slides.filter(e=>e.column===d)[0],t=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(t)&&(t=Math.max(n.slides.indexOf(e),0)),i=Math.floor(t/s.grid.rows)}else if(n.slides[d]){let e=n.slides[d].getAttribute("data-swiper-slide-index");i=e?parseInt(e,10):d}else i=d;Object.assign(n,{previousSnapIndex:c,snapIndex:t,previousRealIndex:l,realIndex:i,previousIndex:o,activeIndex:d}),n.initialized&&en(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(l!==i&&n.emit("realIndexChange"),n.emit("slideChange"))},updateClickedSlide:function(e,t){let i;let n=this.params,r=e.closest(`.${n.slideClass}, swiper-slide`);!r&&this.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!r&&e.matches&&e.matches(`.${n.slideClass}, swiper-slide`)&&(r=e)});let a=!1;if(r){for(let e=0;e<this.slides.length;e+=1)if(this.slides[e]===r){a=!0,i=e;break}}if(r&&a)this.clickedSlide=r,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):this.clickedIndex=i;else{this.clickedSlide=void 0,this.clickedIndex=void 0;return}n.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");let{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=this;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let a=function(e,t){let i,n,r;void 0===t&&(t="x");let a=j(),s=function(e){let t;let i=j();return i.getComputedStyle&&(t=i.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return a.WebKitCSSMatrix?((n=s.transform||s.webkitTransform).split(",").length>6&&(n=n.split(", ").map(e=>e.replace(",",".")).join(", ")),// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
r=new a.WebKitCSSMatrix("none"===n?"":n)):i=(r=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(n=a.WebKitCSSMatrix?r.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(n=a.WebKitCSSMatrix?r.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),n||0}(r,e);return a+=this.cssOverflowAdjustment(),i&&(a=-a),a||0},setTranslate:function(e,t){let{rtlTranslate:i,params:n,wrapperEl:r,progress:a}=this,s=0,o=0;this.isHorizontal()?s=i?-e:e:o=e,n.roundLengths&&(s=Math.floor(s),o=Math.floor(o)),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?s:o,n.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-s:-o:n.virtualTranslate||(this.isHorizontal()?s-=this.cssOverflowAdjustment():o-=this.cssOverflowAdjustment(),r.style.transform=`translate3d(${s}px, ${o}px, 0px)`);let l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==a&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,n,r){let a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===n&&(n=!0);let s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;let c=s.minTranslate(),d=s.maxTranslate();if(a=n&&e>c?c:n&&e<d?d:e,// Update progress
s.updateProgress(a),o.cssMode){let e=s.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-a;else{if(!s.support.smoothScroll)return X({swiper:s,targetPosition:-a,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-a,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(a),i&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(a),i&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,i&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){this.params.cssMode||(this.wrapperEl.style.transitionDuration=`${e}ms`,this.wrapperEl.style.transitionDelay=0===e?"0ms":""),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);let{params:i}=this;i.cssMode||(i.autoHeight&&this.updateAutoHeight(),er({swiper:this,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);let{params:i}=this;this.animating=!1,i.cssMode||(this.setTransition(0),er({swiper:this,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e,t,i,n,r){let a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),"string"==typeof e&&(e=parseInt(e,10));let s=this,o=e;o<0&&(o=0);let{params:l,snapGrid:c,slidesGrid:d,previousIndex:u,activeIndex:p,rtlTranslate:h,wrapperEl:m,enabled:f}=s;if(s.animating&&l.preventInteractionOnTransition||!f&&!n&&!r)return!1;let g=Math.min(s.params.slidesPerGroupSkip,o),v=g+Math.floor((o-g)/s.params.slidesPerGroup);v>=c.length&&(v=c.length-1);let b=-c[v];// Normalize slideIndex
if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){let t=-Math.floor(100*b),i=Math.floor(100*d[e]),n=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=i&&t<n-(n-i)/2?o=e:t>=i&&t<n&&(o=e+1):t>=i&&(o=e)}// Directions locks
if(s.initialized&&o!==p&&(!s.allowSlideNext&&(h?b>s.translate&&b>s.minTranslate():b<s.translate&&b<s.minTranslate())||!s.allowSlidePrev&&b>s.translate&&b>s.maxTranslate()&&(p||0)!==o))return!1;// Update Index
if(o!==(u||0)&&i&&s.emit("beforeSlideChangeStart"),// Update progress
s.updateProgress(b),a=o>p?"next":o<p?"prev":"reset",h&&-b===s.translate||!h&&b===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==l.effect&&s.setTranslate(b),"reset"!==a&&(s.transitionStart(i,a),s.transitionEnd(i,a)),!1;if(l.cssMode){let e=s.isHorizontal(),i=h?b:-b;if(0===t){let t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[e?"scrollLeft":"scrollTop"]=i})):m[e?"scrollLeft":"scrollTop"]=i,t&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return X({swiper:s,targetPosition:i,side:e?"left":"top"}),!0;m.scrollTo({[e?"left":"top"]:i,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(b),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,n),s.transitionStart(i,a),0===t?s.transitionEnd(i,a):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(i,a))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,i,n){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),"string"==typeof e){let t=parseInt(e,10);e=t}let r=this,a=r.grid&&r.params.grid&&r.params.grid.rows>1,s=e;if(r.params.loop){if(r.virtual&&r.params.virtual.enabled)s+=r.virtual.slidesBefore;else{let e;if(a){let t=s*r.params.grid.rows;e=r.slides.filter(e=>1*e.getAttribute("data-swiper-slide-index")===t)[0].column}else e=r.getSlideIndexByData(s);let t=a?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:i}=r.params,n=r.params.slidesPerView;"auto"===n?n=r.slidesPerViewDynamic():(n=Math.ceil(parseFloat(r.params.slidesPerView,10)),i&&n%2==0&&(n+=1));let o=t-e<n;if(i&&(o=o||e<Math.ceil(n/2)),o){let n=i?e<r.activeIndex?"prev":"next":e-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:n,slideTo:!0,activeSlideIndex:"next"===n?e+1:e-t+1,slideRealIndex:"next"===n?r.realIndex:void 0})}if(a){let e=s*r.params.grid.rows;s=r.slides.filter(t=>1*t.getAttribute("data-swiper-slide-index")===e)[0].column}else s=r.getSlideIndexByData(s)}}return requestAnimationFrame(()=>{r.slideTo(s,t,i,n)}),r},slideNext:/* eslint no-unused-vars: "off" */function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);let n=this,{enabled:r,params:a,animating:s}=n;if(!r)return n;let o=a.slidesPerGroup;"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));let l=n.activeIndex<a.slidesPerGroupSkip?1:o,c=n.virtual&&a.virtual.enabled;if(a.loop){if(s&&!c&&a.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),// eslint-disable-next-line
n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,e,t,i)}),!0}return a.rewind&&n.isEnd?n.slideTo(0,e,t,i):n.slideTo(n.activeIndex+l,e,t,i)},slidePrev:/* eslint no-unused-vars: "off" */function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);let n=this,{params:r,snapGrid:a,slidesGrid:s,rtlTranslate:o,enabled:l,animating:c}=n;if(!l)return n;let d=n.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),// eslint-disable-next-line
n._clientLeft=n.wrapperEl.clientLeft}let u=o?n.translate:-n.translate;function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let h=p(u),m=a.map(e=>p(e)),f=a[m.indexOf(h)-1];if(void 0===f&&r.cssMode){let e;a.forEach((t,i)=>{h>=t&&(e=i)}),void 0!==e&&(f=a[e>0?e-1:e])}let g=0;if(void 0!==f&&((g=s.indexOf(f))<0&&(g=n.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(g=Math.max(g=g-n.slidesPerViewDynamic("previous",!0)+1,0))),r.rewind&&n.isBeginning){let r=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(r,e,t,i)}return r.loop&&0===n.activeIndex&&r.cssMode?(requestAnimationFrame(()=>{n.slideTo(g,e,t,i)}),!0):n.slideTo(g,e,t,i)},slideReset:/* eslint no-unused-vars: "off" */function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:/* eslint no-unused-vars: "off" */function(e,t,i,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===n&&(n=.5);let r=this.activeIndex,a=Math.min(this.params.slidesPerGroupSkip,r),s=a+Math.floor((r-a)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[s]){// The current translate is on or after the current snap index, so the choice
// is between the current index and the one after it.
let e=this.snapGrid[s],t=this.snapGrid[s+1];o-e>(t-e)*n&&(r+=this.params.slidesPerGroup)}else{// The current translate is before the current snap index, so the choice
// is between the current index and the one before it.
let e=this.snapGrid[s-1],t=this.snapGrid[s];o-e<=(t-e)*n&&(r-=this.params.slidesPerGroup)}return r=Math.min(r=Math.max(r,0),this.slidesGrid.length-1),this.slideTo(r,e,t,i)},slideToClickedSlide:function(){let e;let t=this,{params:i,slidesEl:n}=t,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,a=t.clickedIndex,s=t.isElement?"swiper-slide":`.${i.slideClass}`;if(i.loop){if(t.animating)return;e=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),i.centeredSlides?a<t.loopedSlides-r/2||a>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),a=t.getSlideIndex(q(n,`${s}[data-swiper-slide-index="${e}"]`)[0]),U(()=>{t.slideTo(a)})):t.slideTo(a):a>t.slides.length-r?(t.loopFix(),a=t.getSlideIndex(q(n,`${s}[data-swiper-slide-index="${e}"]`)[0]),U(()=>{t.slideTo(a)})):t.slideTo(a)}else t.slideTo(a)}},loop:{loopCreate:function(e){let t=this,{params:i,slidesEl:n}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;let r=()=>{let e=q(n,`.${i.slideClass}, swiper-slide`);e.forEach((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})},a=t.grid&&i.grid&&i.grid.rows>1,s=i.slidesPerGroup*(a?i.grid.rows:1),o=t.slides.length%s!=0,l=a&&t.slides.length%i.grid.rows!=0,c=e=>{for(let n=0;n<e;n+=1){let e=t.isElement?Y("swiper-slide",[i.slideBlankClass]):Y("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(e)}};if(o){if(i.loopAddBlankSlides){let e=s-t.slides.length%s;c(e),t.recalcSlides(),t.updateSlides()}else K("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(i.loopAddBlankSlides){let e=i.grid.rows-t.slides.length%i.grid.rows;c(e),t.recalcSlides(),t.updateSlides()}else K("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();t.loopFix({slideRealIndex:e,direction:i.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:i=!0,direction:n,setTranslate:r,activeSlideIndex:a,byController:s,byMousewheel:o}=void 0===e?{}:e,l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");let{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:h}=l,{centeredSlides:m}=h;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){i&&(h.centeredSlides||0!==l.snapIndex?h.centeredSlides&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let f=h.slidesPerView;"auto"===f?f=l.slidesPerViewDynamic():(f=Math.ceil(parseFloat(h.slidesPerView,10)),m&&f%2==0&&(f+=1));let g=h.slidesPerGroupAuto?f:h.slidesPerGroup,v=g;v%g!=0&&(v+=g-v%g),v+=h.loopAdditionalSlides,l.loopedSlides=v;let b=l.grid&&h.grid&&h.grid.rows>1;c.length<f+v?K("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&"row"===h.grid.fill&&K("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let y=[],w=[],x=l.activeIndex;void 0===a?a=l.getSlideIndex(c.filter(e=>e.classList.contains(h.slideActiveClass))[0]):x=a;let k="next"===n||!n,S="prev"===n||!n,T=0,I=0,E=b?Math.ceil(c.length/h.grid.rows):c.length,C=b?c[a].column:a,_=C+(m&&void 0===r?-f/2+.5:0);// prepend last slides before start
if(_<v){T=Math.max(v-_,g);for(let e=0;e<v-_;e+=1){let t=e-Math.floor(e/E)*E;if(b){let e=E-t-1;for(let t=c.length-1;t>=0;t-=1)c[t].column===e&&y.push(t);// slides.forEach((slide, slideIndex) => {
//   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
// });
}else y.push(E-t-1)}}else if(_+f>E-v){I=Math.max(_-(E-2*v),g);for(let e=0;e<I;e+=1){let t=e-Math.floor(e/E)*E;b?c.forEach((e,i)=>{e.column===t&&w.push(i)}):w.push(t)}}if(S&&y.forEach(e=>{c[e].swiperLoopMoveDOM=!0,p.prepend(c[e]),c[e].swiperLoopMoveDOM=!1}),k&&w.forEach(e=>{c[e].swiperLoopMoveDOM=!0,p.append(c[e]),c[e].swiperLoopMoveDOM=!1}),l.recalcSlides(),"auto"===h.slidesPerView?l.updateSlides():b&&(y.length>0&&S||w.length>0&&k)&&l.slides.forEach((e,t)=>{l.grid.updateSlide(t,e,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),i){if(y.length>0&&S){if(void 0===t){let e=l.slidesGrid[x],t=l.slidesGrid[x+T],i=t-e;o?l.setTranslate(l.translate-i):(l.slideTo(x+T,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-i,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-i))}else if(r){let e=b?y.length/h.grid.rows:y.length;l.slideTo(l.activeIndex+e,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&k){if(void 0===t){let e=l.slidesGrid[x],t=l.slidesGrid[x-I],i=t-e;o?l.setTranslate(l.translate-i):(l.slideTo(x-I,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-i,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-i))}else{let e=b?w.length/h.grid.rows:w.length;l.slideTo(l.activeIndex-e,0,!1,!0)}}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!s){let e={slideRealIndex:t,direction:n,setTranslate:r,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===h.slidesPerView&&i})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...e,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView&&i})}l.emit("loopFix")},loopDestroy:function(){let{params:e,slidesEl:t}=this;if(!e.loop||this.virtual&&this.params.virtual.enabled)return;this.recalcSlides();let i=[];this.slides.forEach(e=>{let t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e}),this.slides.forEach(e=>{e.removeAttribute("data-swiper-slide-index")}),i.forEach(e=>{t.append(e)}),this.recalcSlides(),this.slideTo(this.realIndex,0)}},grabCursor:{setGrabCursor:function(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let i="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})},unsetGrabCursor:function(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}},events:{attachEvents:function(){let{params:e}=this;this.onTouchStart=es.bind(this),this.onTouchMove=eo.bind(this),this.onTouchEnd=el.bind(this),this.onDocumentTouchStart=eh.bind(this),e.cssMode&&(this.onScroll=eu.bind(this)),this.onClick=ed.bind(this),this.onLoad=ep.bind(this),em(this,"on")},detachEvents:function(){em(this,"off")}},breakpoints:{setBreakpoint:function(){let e=this,{realIndex:t,initialized:i,params:n,el:r}=e,a=n.breakpoints;if(!a||a&&0===Object.keys(a).length)return;// Get breakpoint for window width and update parameters
let s=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;let o=s in a?a[s]:void 0,l=o||e.originalParams,c=ef(e,n),d=ef(e,l),u=n.enabled;c&&!d?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(r.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===n.grid.fill)&&r.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),// Toggle navigation, pagination, scrollbar
["navigation","pagination","scrollbar"].forEach(t=>{if(void 0===l[t])return;let i=n[t]&&n[t].enabled,r=l[t]&&l[t].enabled;i&&!r&&e[t].disable(),!i&&r&&e[t].enable()});let p=l.direction&&l.direction!==n.direction,h=n.loop&&(l.slidesPerView!==n.slidesPerView||p),m=n.loop;p&&i&&e.changeDirection(),$(e.params,l);let f=e.params.enabled,g=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",l),i&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!m&&g?(e.loopCreate(t),e.updateSlides()):m&&!g&&e.loopDestroy()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,i){if(void 0===t&&(t="window"),!e||"container"===t&&!i)return;let n=!1,r=j(),a="window"===t?r.innerHeight:i.clientHeight,s=Object.keys(e).map(e=>{if("string"==typeof e&&0===e.indexOf("@")){let t=parseFloat(e.substr(1));return{value:a*t,point:e}}return{value:e,point:e}});s.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<s.length;e+=1){let{point:a,value:o}=s[e];"window"===t?r.matchMedia(`(min-width: ${o}px)`).matches&&(n=a):o<=i.clientWidth&&(n=a)}return n||"max"}},checkOverflow:{checkOverflow:function(){let{isLocked:e,params:t}=this,{slidesOffsetBefore:i}=t;if(i){let e=this.slides.length-1,t=this.slidesGrid[e]+this.slidesSizesGrid[e]+2*i;this.isLocked=this.size>t}else this.isLocked=1===this.snapGrid.length;!0===t.allowSlideNext&&(this.allowSlideNext=!this.isLocked),!0===t.allowSlidePrev&&(this.allowSlidePrev=!this.isLocked),e&&e!==this.isLocked&&(this.isEnd=!1),e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock")}},classes:{addClasses:function(){let{classNames:e,params:t,rtl:i,el:n,device:r}=this,a=function(e,t){let i=[];return e.forEach(e=>{"object"==typeof e?Object.keys(e).forEach(n=>{e[n]&&i.push(t+n)}):"string"==typeof e&&i.push(t+e)}),i}(["initialized",t.direction,{"free-mode":this.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&"column"===t.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),n.classList.add(...e),this.emitContainerClasses()},removeClasses:function(){let{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},eb={};class ey{constructor(){let e,n;for(var r,a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?n=s[0]:[e,n]=s,n||(n={}),n=$({},n),e&&!n.el&&(n.el=e);let l=B();if(n.el&&"string"==typeof n.el&&l.querySelectorAll(n.el).length>1){let e=[];// eslint-disable-next-line no-constructor-return
return l.querySelectorAll(n.el).forEach(t=>{let i=$({},n,{el:t});e.push(new ey(i))}),e}// Swiper Instance
let c=this;c.__swiper__=!0,c.support=ee(),c.device=(r={userAgent:n.userAgent},t||(t=function(e){let{userAgent:t}=void 0===e?{}:e,i=ee(),n=j(),r=n.navigator.platform,a=t||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/),d=a.match(/(iPad).*OS\s([\d_]+)/),u=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="MacIntel"===r;// Export object
return!d&&h&&i.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${l}`)>=0&&((d=a.match(/(Version)\/([\d.]+)/))||(d=[0,1,"13_0_0"]),h=!1),c&&"Win32"!==r&&(s.os="android",s.android=!0),(d||p||u)&&(s.os="ios",s.ios=!0),s}(r)),t),c.browser=(i||(i=function(){let e=j(),t=!1;function i(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&0>t.indexOf("chrome")&&0>t.indexOf("android")}if(i()){let i=String(e.navigator.userAgent);if(i.includes("Version/")){let[e,n]=i.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e));t=e<16||16===e&&n<2}}return{isSafari:t||i(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),i),c.eventsListeners={},c.eventsAnyListeners=[],c.modules=[...c.__modules__],n.modules&&Array.isArray(n.modules)&&c.modules.push(...n.modules);let d={};c.modules.forEach(e=>{var t;e({params:n,swiper:c,extendParams:(t=n,function(e){void 0===e&&(e={});let i=Object.keys(e)[0],n=e[i];if("object"!=typeof n||null===n||(!0===t[i]&&(t[i]={enabled:!0}),"navigation"===i&&t[i]&&t[i].enabled&&!t[i].prevEl&&!t[i].nextEl&&(t[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&t[i]&&t[i].enabled&&!t[i].el&&(t[i].auto=!0),!(i in t&&"enabled"in n))){$(d,e);return}"object"!=typeof t[i]||"enabled"in t[i]||(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),$(d,e)}),on:c.on.bind(c),once:c.once.bind(c),off:c.off.bind(c),emit:c.emit.bind(c)})});// Extend defaults with modules params
let u=$({},eg,d);// Return app instance
// eslint-disable-next-line no-constructor-return
return(// Extend defaults with passed params
c.params=$({},u,eb,n),c.originalParams=$({},c.params),c.passedParams=$({},n),c.params&&c.params.on&&Object.keys(c.params.on).forEach(e=>{c.on(e,c.params.on[e])}),c.params&&c.params.onAny&&c.onAny(c.params.onAny),// Extend Swiper
Object.assign(c,{enabled:c.params.enabled,el:e,// Classes
classNames:[],// Slides
slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],// isDirection
isHorizontal:()=>"horizontal"===c.params.direction,isVertical:()=>"vertical"===c.params.direction,// Indexes
activeIndex:0,realIndex:0,//
isBeginning:!0,isEnd:!1,// Props
translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){// Returns 0 unless `translate` is > 2**23
// Should be subtracted from css values to prevent overflow
return 8388608*Math.trunc(this.translate/8388608)},// Locks
allowSlideNext:c.params.allowSlideNext,allowSlidePrev:c.params.allowSlidePrev,// Touch Events
touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,// Form elements to match
focusableElements:c.params.focusableElements,// Last click time
lastClickTime:0,clickTimeout:void 0,// Velocities
velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},// Clicks
allowClick:!0,// Touches
allowTouchMove:c.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},// Images
imagesToLoad:[],imagesLoaded:0}),c.emit("_swiper"),c.params.init&&c.init(),c)}getDirectionLabel(e){return this.isHorizontal()?e:({width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"})[e]}getSlideIndex(e){let{slidesEl:t,params:i}=this,n=q(t,`.${i.slideClass}, swiper-slide`),r=Q(n[0]);return Q(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>1*t.getAttribute("data-swiper-slide-index")===e)[0])}recalcSlides(){let{slidesEl:e,params:t}=this;this.slides=q(e,`.${t.slideClass}, swiper-slide`)}enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"))}setProgress(e,t){e=Math.min(Math.max(e,0),1);let i=this.minTranslate(),n=this.maxTranslate(),r=(n-i)*e+i;this.translateTo(r,void 0===t?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return t.destroyed?"":e.className.split(" ").filter(e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(i=>{let n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);let{params:i,slides:n,slidesGrid:r,slidesSizesGrid:a,size:s,activeIndex:o}=this,l=1;if("number"==typeof i.slidesPerView)return i.slidesPerView;if(i.centeredSlides){let e,t=n[o]?n[o].swiperSlideSize:0;for(let i=o+1;i<n.length;i+=1)n[i]&&!e&&(t+=n[i].swiperSlideSize,l+=1,t>s&&(e=!0));for(let i=o-1;i>=0;i-=1)n[i]&&!e&&(t+=n[i].swiperSlideSize,l+=1,t>s&&(e=!0))}else // eslint-disable-next-line
if("current"===e)for(let e=o+1;e<n.length;e+=1){let i=t?r[e]+a[e]-r[o]<s:r[e]-r[o]<s;i&&(l+=1)}else for(let e=o-1;e>=0;e-=1){let t=r[o]-r[e]<s;t&&(l+=1)}return l}update(){let e;let t=this;if(!t||t.destroyed)return;let{snapGrid:i,params:n}=t;function r(){let e=t.rtlTranslate?-1*t.translate:t.translate,i=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}if(n.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(e=>{e.complete&&et(t,e)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&t.updateAutoHeight();else{if(("auto"===n.slidesPerView||n.slidesPerView>1)&&t.isEnd&&!n.centeredSlides){let i=t.virtual&&n.virtual.enabled?t.virtual.slides:t.slides;e=t.slideTo(i.length-1,0,!1,!0)}else e=t.slideTo(t.activeIndex,0,!1,!0);e||r()}n.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);let i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.el.classList.remove(`${this.params.containerModifierClass}${i}`),this.el.classList.add(`${this.params.containerModifierClass}${e}`),this.emitContainerClasses(),this.params.direction=e,this.slides.forEach(t=>{"vertical"===e?t.style.width="":t.style.height=""}),this.emit("changeDirection"),t&&this.update()),this}changeLanguageDirection(e){(!this.rtl||"rtl"!==e)&&(this.rtl||"ltr"!==e)&&(this.rtl="rtl"===e,this.rtlTranslate="horizontal"===this.params.direction&&this.rtl,this.rtl?(this.el.classList.add(`${this.params.containerModifierClass}rtl`),this.el.dir="rtl"):(this.el.classList.remove(`${this.params.containerModifierClass}rtl`),this.el.dir="ltr"),this.update())}mount(e){let t=this;if(t.mounted)return!0;// Find el
let i=e||t.params.el;if("string"==typeof i&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&"SWIPER-CONTAINER"===i.parentNode.host.nodeName&&(t.isElement=!0);let n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,r=(()=>{if(i&&i.shadowRoot&&i.shadowRoot.querySelector){let e=i.shadowRoot.querySelector(n());// Children needs to return slot items
return e}return q(i,n())[0]})();return!r&&t.params.createElements&&(r=Y("div",t.params.wrapperClass),i.append(r),q(i,`.${t.params.slideClass}`).forEach(e=>{r.append(e)})),Object.assign(t,{el:i,wrapperEl:r,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:r,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,// RTL
rtl:"rtl"===i.dir.toLowerCase()||"rtl"===J(i,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===i.dir.toLowerCase()||"rtl"===J(i,"direction")),wrongRTL:"-webkit-box"===J(r,"display")}),!0}init(e){let t=this;if(t.initialized)return t;let i=t.mount(e);if(!1===i)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),// Add Classes
t.addClasses(),// Update size
t.updateSize(),// Update slides
t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),// Attach events
t.attachEvents();let n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(e=>{e.complete?et(t,e):e.addEventListener("load",e=>{et(t,e.target)})}),en(t),// Init Flag
t.initialized=!0,en(t),// Emit
t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);let i=this,{params:n,el:r,wrapperEl:a,slides:s}=i;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),// Init Flag
i.initialized=!1,// Detach events
i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttribute("style"),a.removeAttribute("style"),s&&s.length&&s.forEach(e=>{e.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),// Detach emitter events
Object.keys(i.eventsListeners).forEach(e=>{i.off(e)}),!1!==e&&(i.el.swiper=null,function(e){Object.keys(e).forEach(t=>{try{e[t]=null}catch(e){// no getter for object
}try{delete e[t]}catch(e){// something got wrong
}})}(i)),i.destroyed=!0),null}static extendDefaults(e){$(eb,e)}static get extendedDefaults(){return eb}static get defaults(){return eg}static installModule(e){ey.prototype.__modules__||(ey.prototype.__modules__=[]);let t=ey.prototype.__modules__;"function"==typeof e&&0>t.indexOf(e)&&t.push(e)}static use(e){return Array.isArray(e)?e.forEach(e=>ey.installModule(e)):ey.installModule(e),ey}}Object.keys(ev).forEach(e=>{Object.keys(ev[e]).forEach(t=>{ey.prototype[t]=ev[e][t]})}),ey.use([function(e){let{swiper:t,on:i,emit:n}=e,r=j(),a=null,s=null,o=()=>{t&&!t.destroyed&&t.initialized&&(n("beforeResize"),n("resize"))},l=()=>{t&&!t.destroyed&&t.initialized&&(a=new ResizeObserver(e=>{s=r.requestAnimationFrame(()=>{let{width:i,height:n}=t,r=i,a=n;e.forEach(e=>{let{contentBoxSize:i,contentRect:n,target:s}=e;s&&s!==t.el||(r=n?n.width:(i[0]||i).inlineSize,a=n?n.height:(i[0]||i).blockSize)}),(r!==i||a!==n)&&o()})})).observe(t.el)},c=()=>{s&&r.cancelAnimationFrame(s),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},d=()=>{t&&!t.destroyed&&t.initialized&&n("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&void 0!==r.ResizeObserver){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",d)}),i("destroy",()=>{c(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",d)})},function(e){let{swiper:t,extendParams:i,on:n,emit:r}=e,a=[],s=j(),o=function(e,i){void 0===i&&(i={});let n=s.MutationObserver||s.WebkitMutationObserver,o=new n(e=>{// The observerUpdate event should only be triggered
// once despite the number of mutations.  Additional
// triggers are redundant and are very costly
if(t.__preventObserver__)return;if(1===e.length){r("observerUpdate",e[0]);return}let i=function(){r("observerUpdate",e[0])};s.requestAnimationFrame?s.requestAnimationFrame(i):s.setTimeout(i,0)});o.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),a.push(o)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",()=>{if(t.params.observer){if(t.params.observeParents){let e=function(e,t){let i=[],n=e.parentElement;// eslint-disable-line
for(;n;)t?n.matches(t)&&i.push(n):i.push(n),n=n.parentElement;return i}(t.hostEl);for(let t=0;t<e.length;t+=1)o(e[t])}// Observe container
o(t.hostEl,{childList:t.params.observeSlideChildren}),// Observe wrapper
o(t.wrapperEl,{attributes:!1})}}),n("destroy",()=>{a.forEach(e=>{e.disconnect()}),a.splice(0,a.length)})}]);const ew=document.querySelector(".support__list"),ex=M.map(function({url:e,title:t,img:i},n){let r=(n+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${r}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${i}" 1x
                src="${i}" type="image/png" alt="${t}">
        </a>
    </li>`}).join("");ew.innerHTML=ex,new ey(".swiper",{direction:"vertical",slidesPerView:6,rewind:!0,spaceBetween:20,effect:"slide",modules:[function(e){let{swiper:t,extendParams:i,on:n,emit:r}=e;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};let a=e=>(Array.isArray(e)?e:[e]).filter(e=>!!e);function s(e){let i;return e&&"string"==typeof e&&t.isElement&&(i=t.el.querySelector(e))?i:(e&&("string"==typeof e&&(i=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&i.length>1&&1===t.el.querySelectorAll(e).length&&(i=t.el.querySelector(e))),e&&!i)?e:i}function o(e,i){let n=t.params.navigation;(e=a(e)).forEach(e=>{e&&(e.classList[i?"add":"remove"](...n.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=i),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](n.lockClass))})}function l(){// Update Navigation Buttons
let{nextEl:e,prevEl:i}=t.navigation;if(t.params.loop){o(i,!1),o(e,!1);return}o(i,t.isBeginning&&!t.params.rewind),o(e,t.isEnd&&!t.params.rewind)}function c(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function d(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function u(){var e,i,n;let r=t.params.navigation;if(t.params.navigation=(e=t.originalParams.navigation,i=t.params.navigation,n={nextEl:"swiper-button-next",prevEl:"swiper-button-prev"},t.params.createElements&&Object.keys(n).forEach(r=>{if(!i[r]&&!0===i.auto){let a=q(t.el,`.${n[r]}`)[0];a||((a=Y("div",n[r])).className=n[r],t.el.append(a)),i[r]=a,e[r]=a}}),i),!(r.nextEl||r.prevEl))return;let o=s(r.nextEl),l=s(r.prevEl);Object.assign(t.navigation,{nextEl:o,prevEl:l}),o=a(o),l=a(l);let u=(e,i)=>{e&&e.addEventListener("click","next"===i?d:c),!t.enabled&&e&&e.classList.add(...r.lockClass.split(" "))};o.forEach(e=>u(e,"next")),l.forEach(e=>u(e,"prev"))}function p(){let{nextEl:e,prevEl:i}=t.navigation;e=a(e),i=a(i);let n=(e,i)=>{e.removeEventListener("click","next"===i?d:c),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach(e=>n(e,"next")),i.forEach(e=>n(e,"prev"))}n("init",()=>{!1===t.params.navigation.enabled?h():(u(),l())}),n("toEdge fromEdge lock unlock",()=>{l()}),n("destroy",()=>{p()}),n("enable disable",()=>{let{nextEl:e,prevEl:i}=t.navigation;if(e=a(e),i=a(i),t.enabled){l();return}[...e,...i].filter(e=>!!e).forEach(e=>e.classList.add(t.params.navigation.lockClass))}),n("click",(e,i)=>{let{nextEl:n,prevEl:s}=t.navigation;n=a(n),s=a(s);let o=i.target;if(t.params.navigation.hideOnClick&&!s.includes(o)&&!n.includes(o)){let e;if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===o||t.pagination.el.contains(o)))return;n.length?e=n[0].classList.contains(t.params.navigation.hiddenClass):s.length&&(e=s[0].classList.contains(t.params.navigation.hiddenClass)),!0===e?r("navigationShow"):r("navigationHide"),[...n,...s].filter(e=>!!e).forEach(e=>e.classList.toggle(t.params.navigation.hiddenClass))}});let h=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),l()},disable:h,update:l,init:u,destroy:p})}],navigation:{nextEl:".swiper-next"}});var T=b("lXnOV");const ek=document.querySelector(".books-gallery");(async function(){let e=await (0,T.fetchTopBooksInCategories)(),t=e.slice(0,4);console.log(e);let i=t.map(e=>`<div>
        <h2 class="books-gallery__category-title">${e.list_name}</h2>
    <ul class="books-gallery__section">
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[0].book_image}"> <h3>${e.books[0].title}</h3><h4>${e.books[0].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[1].book_image}"> <h3>${e.books[1].title}</h3><h4>${e.books[1].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[2].book_image}"> <h3>${e.books[2].title}</h3><h4>${e.books[2].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[3].book_image}"> <h3>${e.books[3].title}</h3><h4>${e.books[3].author}</h4> </li>
    <li><img class="books-gallery__image" alt="book cover" src="${e.books[4].book_image}"> <h3>${e.books[4].title}</h3><h4>${e.books[4].author}</h4> </li>
    </ul></div>`).join("");ek.insertAdjacentHTML("beforeend",i)})(),(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})(),// registerForm.addEventListener('submit', handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const name = form.elements.name.value;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
//   if (login === '' || password === '' || name === '') {
//     return console.log('Please fill in all the fields!');
//   }
//   console.log(`Name: ${name.value}, Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }
// WALIDACJA Z EMAIL I NAME
// const form = document.querySelector('.registration-modal-form');
// const btnSubmit = document.querySelector('.sign-up-btn');
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
// // eslint-disable-next-line no-unused-vars
// document.addEventListener('DOMContentLoaded', event => {
//   form.reset();
// });
b("a7iaw");var eS={};s=void 0===f?"undefined"==typeof window?eS:window:f,o=function(e){if(void 0===e&&void 0===e.document)return!1;var t,i,n,r,a,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},c={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},u={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},p={Show:"Show",Ask:"Ask",Prompt:"Prompt"},h={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},m={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},f={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},g={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},v={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},b=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},y=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},w=function(t){return t||(t="head"),null!==e.document[t]||(b('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},x=function(t,i){if(!w("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},k=function(){var e={},t=!1,i=0;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<arguments.length;i++)!function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=t&&"[object Object]"===Object.prototype.toString.call(i[n])?k(e[n],i[n]):i[n])}(arguments[i]);return e},S=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},I=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},L=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},A=0,P=function(i,n,r,a){if(!w("body"))return!1;t||H.Notify.init({});var s=k(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof a&&!Array.isArray(a)){var d={};"object"==typeof r?d=r:"object"==typeof a&&(d=a),t=k(!0,t,d)}var u=t[i.toLocaleLowerCase("en")];A++,"string"!=typeof n&&(n="Notiflix "+i),t.plainText&&(n=S(n)),!t.plainText&&n.length>t.messageMaxLength&&(t=k(!0,t,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>t.messageMaxLength&&(n=n.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),t.cssAnimation||(t.cssAnimationDuration=0);var p=e.document.getElementById(c.wrapID)||e.document.createElement("div");if(p.id=c.wrapID,p.style.width=t.width,p.style.zIndex=t.zindex,p.style.opacity=t.opacity,"center-center"===t.position?(p.style.left=t.distance,p.style.top=t.distance,p.style.right=t.distance,p.style.bottom=t.distance,p.style.margin="auto",p.classList.add("nx-flex-center-center"),p.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",p.style.display="flex",p.style.flexWrap="wrap",p.style.flexDirection="column",p.style.justifyContent="center",p.style.alignItems="center",p.style.pointerEvents="none"):"center-top"===t.position?(p.style.left=t.distance,p.style.right=t.distance,p.style.top=t.distance,p.style.bottom="auto",p.style.margin="auto"):"center-bottom"===t.position?(p.style.left=t.distance,p.style.right=t.distance,p.style.bottom=t.distance,p.style.top="auto",p.style.margin="auto"):"right-bottom"===t.position?(p.style.right=t.distance,p.style.bottom=t.distance,p.style.top="auto",p.style.left="auto"):"left-top"===t.position?(p.style.left=t.distance,p.style.top=t.distance,p.style.right="auto",p.style.bottom="auto"):"left-bottom"===t.position?(p.style.left=t.distance,p.style.bottom=t.distance,p.style.top="auto",p.style.right="auto"):(p.style.right=t.distance,p.style.top=t.distance,p.style.left="auto",p.style.bottom="auto"),t.backOverlay){var h=e.document.getElementById(c.overlayID)||e.document.createElement("div");h.id=c.overlayID,h.style.width="100%",h.style.height="100%",h.style.position="fixed",h.style.zIndex=t.zindex-1,h.style.left=0,h.style.top=0,h.style.right=0,h.style.bottom=0,h.style.background=u.backOverlayColor||t.backOverlayColor,h.className=t.cssAnimation?"nx-with-animation":"",h.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(c.overlayID)||e.document.body.appendChild(h)}e.document.getElementById(c.wrapID)||e.document.body.appendChild(p);var m=e.document.createElement("div");m.id=t.ID+"-"+A,m.className=t.className+" "+u.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),m.style.fontSize=t.fontSize,m.style.color=u.textColor,m.style.background=u.background,m.style.borderRadius=t.borderRadius,m.style.pointerEvents="all",t.rtl&&(m.setAttribute("dir","rtl"),m.classList.add("nx-rtl-on")),m.style.fontFamily='"'+t.fontFamily+'", '+o,t.cssAnimation&&(m.style.animationDuration=t.cssAnimationDuration+"ms");var f="";if(t.closeButton&&"function"!=typeof r&&(f='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon){if(t.useFontAwesome)m.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?f:"");else{var g="";i===l.Success?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===l.Failure?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===l.Warning?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===l.Info&&(g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),m.innerHTML=g+'<span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?f:"")}}else m.innerHTML='<span class="nx-message">'+n+"</span>"+(t.closeButton?f:"");if("left-bottom"===t.position||"right-bottom"===t.position){var v=e.document.getElementById(c.wrapID);v.insertBefore(m,v.firstChild)}else e.document.getElementById(c.wrapID).appendChild(m);var b=e.document.getElementById(m.id);if(b){var y,x,T=function(){b.classList.add("nx-remove");var t=e.document.getElementById(c.overlayID);t&&0>=p.childElementCount&&t.classList.add("nx-remove"),clearTimeout(y)},I=function(){if(b&&null!==b.parentNode&&b.parentNode.removeChild(b),0>=p.childElementCount&&null!==p.parentNode){p.parentNode.removeChild(p);var t=e.document.getElementById(c.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(x)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(m.id).querySelector("span.nx-close-button").addEventListener("click",function(){T();var e=setTimeout(function(){I(),clearTimeout(e)},t.cssAnimationDuration)}),("function"==typeof r||t.clickToClose)&&b.addEventListener("click",function(){"function"==typeof r&&r(),T();var e=setTimeout(function(){I(),clearTimeout(e)},t.cssAnimationDuration)}),!t.closeButton&&"function"!=typeof r){var E=function(){y=setTimeout(function(){T()},t.timeout),x=setTimeout(function(){I()},t.timeout+t.cssAnimationDuration)};E(),t.pauseOnHover&&(b.addEventListener("mouseenter",function(){b.classList.add("nx-paused"),clearTimeout(y),clearTimeout(x)}),b.addEventListener("mouseleave",function(){b.classList.remove("nx-paused"),E()}))}}if(t.showOnlyTheLastOne&&0<A)for(var C,_=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+A+"])"),N=0;N<_.length;N++)null!==(C=_[N]).parentNode&&C.parentNode.removeChild(C);t=k(!0,t,s)},O=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},R=function(t,n,r,a,s,l){if(!w("body"))return!1;i||H.Report.init({});var c,p,h,m,f,g,v,b,y={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var x={};"object"==typeof s?x=s:"object"==typeof l&&(x=l),y=k(!0,i,{}),i=k(!0,i,x)}var T=i[t.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+t),"string"!=typeof r&&(t===d.Success?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===d.Failure?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===d.Warning?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===d.Info&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof a&&(a="Okay"),i.plainText&&(n=S(n),r=S(r),a=S(a)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',a="Okay"),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',a="Okay"),a.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',a="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),a.length>i.buttonMaxLength&&(a=a.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var I=e.document.createElement("div");I.id=u.ID,I.className=i.className,I.style.zIndex=i.zindex,I.style.borderRadius=i.borderRadius,I.style.fontFamily='"'+i.fontFamily+'", '+o,i.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center";var E="",C=!0===i.backOverlayClickToClose;i.backOverlay&&(E='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(C?" nx-report-click-to-close":"")+'" style="background:'+(T.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var _="";if(t===d.Success?(c=i.svgSize,p=T.svgColor,c||(c="110px"),p||(p="#32c682"),_='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+c+'" height="'+c+'" fill="'+p+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===d.Failure?(h=i.svgSize,m=T.svgColor,h||(h="110px"),m||(m="#ff5549"),_='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+h+'" height="'+h+'" fill="'+m+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===d.Warning?(f=i.svgSize,g=T.svgColor,f||(f="110px"),g||(g="#eebf31"),_='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+f+'" height="'+f+'" fill="'+g+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===d.Info&&(v=i.svgSize,b=T.svgColor,v||(v="110px"),b||(b="#26c0d3"),_='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+v+'" height="'+v+'" fill="'+b+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'),I.innerHTML=E+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+_+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+T.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+T.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+T.buttonBackground+"; color:"+T.buttonColor+';">'+a+"</a></div>",!e.document.getElementById(I.id)){e.document.body.appendChild(I);var N=function(){var t=e.document.getElementById(I.id);t.classList.add("nx-remove");var n=setTimeout(function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(n)},i.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",function(){"function"==typeof s&&s(),N()}),E&&C&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",function(){N()})}i=k(!0,i,y)},M=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},D=function(t,i,r,a,s,l,c,d,u){if(!w("body"))return!1;n||H.Confirm.init({});var m=k(!0,n,{});"object"!=typeof u||Array.isArray(u)||(n=k(!0,n,u)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof d&&(d=void 0),n.plainText&&(i=S(i),r=S(r),s=S(s),l=S(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonsMaxLength&&(s=s.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=h.ID,f.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),f.style.zIndex=n.zindex,f.style.padding=n.distance,n.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var g="string"==typeof n.position?n.position.trim():"center";f.classList.add("nx-position-"+g),f.style.fontFamily='"'+n.fontFamily+'", '+o;var v="";n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b="";"function"==typeof c&&(b='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var y="",x=null,T=void 0;if(t===p.Ask||t===p.Prompt){x=a||"";var I=t===p.Ask?Math.ceil(1.5*x.length):200<x.length?Math.ceil(1.5*x.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===p.Prompt?'value="'+x+'"':"")+' maxlength="'+I+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=v+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+r+y+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+s+"</a>"+b+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var E=e.document.getElementById(f.id),C=e.document.getElementById("NXConfirmButtonOk"),_=e.document.getElementById("NXConfirmValidationInput");_&&(_.focus(),_.setSelectionRange(0,(_.value||"").length),_.addEventListener("keyup",function(e){var i=e.target.value;t===p.Ask&&i!==x?(e.preventDefault(),_.classList.add("nx-validation-failure"),_.classList.remove("nx-validation-success")):(t===p.Ask&&(_.classList.remove("nx-validation-failure"),_.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&C.dispatchEvent(new Event("click")))})),C.addEventListener("click",function(e){if(t===p.Ask&&x&&_){if((_.value||"").toString()!==x)return _.focus(),_.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;_.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===p.Prompt&&_&&(T=_.value||""),c(T)),E.classList.add("nx-remove");var i=setTimeout(function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(i))},n.cssAnimationDuration)}),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",function(){"function"==typeof d&&(t===p.Prompt&&_&&(T=_.value||""),d(T)),E.classList.add("nx-remove");var e=setTimeout(function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(e))},n.cssAnimationDuration)})}n=k(!0,n,m)},z=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},W=function(t,i,n,a,s){if(!w("body"))return!1;r||H.Loading.init({});var l=k(!0,r,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),r=k(!0,r,c)}var d="";if("string"==typeof i&&0<i.length&&(d=i),a){d=d.length>r.messageMaxLength?S(d).toString().substring(0,r.messageMaxLength)+"...":S(d).toString();var u,p,h="";0<d.length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+d+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var g="";if(t===m.Standard)g=T(r.svgSize,r.svgColor);else if(t===m.Hourglass)g=I(r.svgSize,r.svgColor);else if(t===m.Circle)g=E(r.svgSize,r.svgColor);else if(t===m.Arrows)g=C(r.svgSize,r.svgColor);else if(t===m.Dots)g=_(r.svgSize,r.svgColor);else if(t===m.Pulse)g=N(r.svgSize,r.svgColor);else if(t===m.Custom&&null!==r.customSvgCode&&null===r.customSvgUrl)g=r.customSvgCode||"";else if(t===m.Custom&&null!==r.customSvgUrl&&null===r.customSvgCode)g='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===m.Custom&&(null===r.customSvgUrl||null===r.customSvgCode))return b('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;(u=r.svgSize)||(u="60px"),g='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+u+'" height="'+u+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+(p="#32c682")+'" stroke="'+p+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}var v=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),y=e.innerWidth,x=v>=y?y-40+"px":v+"px",L='<div style="width:'+x+"; height:"+x+';" class="'+r.className+"-icon"+(0<d.length?" nx-with-message":"")+'">'+g+"</div>",A=e.document.createElement("div");A.id=f.ID,A.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),A.style.zIndex=r.zindex,A.style.background=r.backgroundColor,A.style.animationDuration=r.cssAnimationDuration+"ms",A.style.fontFamily='"'+r.fontFamily+'", '+o,A.style.display="flex",A.style.flexWrap="wrap",A.style.flexDirection="column",A.style.alignItems="center",A.style.justifyContent="center",r.rtl&&(A.setAttribute("dir","rtl"),A.classList.add("nx-rtl-on")),A.innerHTML=L+h,!e.document.getElementById(A.id)&&(e.document.body.appendChild(A),r.clickToClose)&&e.document.getElementById(A.id).addEventListener("click",function(){A.classList.add("nx-remove");var e=setTimeout(function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))},r.cssAnimationDuration)})}else if(e.document.getElementById(f.ID))var P=e.document.getElementById(f.ID),O=setTimeout(function(){P.classList.add("nx-remove");var e=setTimeout(function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(e))},r.cssAnimationDuration);clearTimeout(O)},s);r=k(!0,r,l)},B=function(t){"string"!=typeof t&&(t="");var i=e.document.getElementById(f.ID);if(i){if(0<t.length){t=t.length>r.messageMaxLength?S(t).substring(0,r.messageMaxLength)+"...":S(t);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=t;else{var a=e.document.createElement("p");a.id=r.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=r.messageColor,a.style.fontSize=r.messageFontSize,a.innerHTML=t,i.appendChild(a)}}else b("Where is the new message?")}},F=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},j=0,U=function(t,i,n,r,s,l){if(Array.isArray(n)){if(1>n.length)return b("Array of HTMLElements should contains at least one HTMLElement."),!1;L=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return b("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;L=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return b("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var c=e.document.querySelectorAll(n);if(1>c.length)return b('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;L=c}a||H.Block.init({});var d=k(!0,a,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var u={};"object"==typeof r?u=r:"object"==typeof s&&(u=s),a=k(!0,a,u)}var p="";"string"==typeof r&&0<r.length&&(p=r),a.cssAnimation||(a.cssAnimationDuration=0);var h=v.className;"string"==typeof a.className&&(h=a.className.trim());var m="number"==typeof a.querySelectorLimit?a.querySelectorLimit:200,f=(L||[]).length>=m?m:L.length,x="nx-block-temporary-position";if(t){for(var L,A,P=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],O=0;O<f;O++)if(A=L[O]){if(-1<P.indexOf(A.tagName.toLocaleLowerCase("en")))break;var R=A.querySelectorAll("[id^="+v.ID+"]");if(1>R.length){var M="";i&&(M=i===g.Hourglass?I(a.svgSize,a.svgColor):i===g.Circle?E(a.svgSize,a.svgColor):i===g.Arrows?C(a.svgSize,a.svgColor):i===g.Dots?_(a.svgSize,a.svgColor):i===g.Pulse?N(a.svgSize,a.svgColor):T(a.svgSize,a.svgColor));var D='<span class="'+h+'-icon" style="width:'+a.svgSize+";height:"+a.svgSize+';">'+M+"</span>",z="";0<p.length&&(p=p.length>a.messageMaxLength?S(p).substring(0,a.messageMaxLength)+"...":S(p),z='<span style="font-size:'+a.messageFontSize+";color:"+a.messageColor+';" class="'+h+'-message">'+p+"</span>"),j++;var W=e.document.createElement("div");W.id=v.ID+"-"+j,W.className=h+(a.cssAnimation?" nx-with-animation":""),W.style.position=a.position,W.style.zIndex=a.zindex,W.style.background=a.backgroundColor,W.style.animationDuration=a.cssAnimationDuration+"ms",W.style.fontFamily='"'+a.fontFamily+'", '+o,W.style.display="flex",W.style.flexWrap="wrap",W.style.flexDirection="column",W.style.alignItems="center",W.style.justifyContent="center",a.rtl&&(W.setAttribute("dir","rtl"),W.classList.add("nx-rtl-on")),W.innerHTML=D+z;var B=e.getComputedStyle(A).getPropertyValue("position"),F="string"==typeof B?B.toLocaleLowerCase("en"):"relative",U=Math.round(1.25*parseInt(a.svgSize))+40,V=A.offsetHeight||0,$="";U>V&&($="min-height:"+U+"px;");var G="";G=A.getAttribute("id")?"#"+A.getAttribute("id"):A.classList[0]?"."+A.classList[0]:(A.tagName||"").toLocaleLowerCase("en");var X="",q=-1>=["absolute","relative","fixed","sticky"].indexOf(F);if(q||0<$.length){if(!w("head"))return!1;q&&(X="position:relative!important;");var K='<style id="Style-'+v.ID+"-"+j+'">'+G+"."+x+"{"+X+$+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(K);e.document.head.appendChild(J),A.classList.add(x)}A.appendChild(W)}}}else var Q=function(t){var i=setTimeout(function(){null!==t.parentNode&&t.parentNode.removeChild(t);var n=t.getAttribute("id"),r=e.document.getElementById("Style-"+n);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(i)},a.cssAnimationDuration)},Z=function(e){if(e&&0<e.length)for(var t,i=0;i<e.length;i++)(t=e[i])&&(t.classList.add("nx-remove"),Q(t));else"string"==typeof n?y('"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.'):y('"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},ee=function(e){var t=setTimeout(function(){e.classList.remove(x),clearTimeout(t)},a.cssAnimationDuration+300)},et=setTimeout(function(){for(var e,t=0;t<f;t++)(e=L[t])&&(ee(e),Z(R=e.querySelectorAll("[id^="+v.ID+"]")));clearTimeout(et)},l);a=k(!0,a,d)},H={Notify:{init:function(e){t=k(!0,c,e),x(L,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=k(!0,t,e)):(b("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,i){P(l.Success,e,t,i)},failure:function(e,t,i){P(l.Failure,e,t,i)},warning:function(e,t,i){P(l.Warning,e,t,i)},info:function(e,t,i){P(l.Info,e,t,i)}},Report:{init:function(e){i=k(!0,u,e),x(O,"NotiflixReportInternalCSS")},merge:function(e){return i?void(i=k(!0,i,e)):(b("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,i,n,r){R(d.Success,e,t,i,n,r)},failure:function(e,t,i,n,r){R(d.Failure,e,t,i,n,r)},warning:function(e,t,i,n,r){R(d.Warning,e,t,i,n,r)},info:function(e,t,i,n,r){R(d.Info,e,t,i,n,r)}},Confirm:{init:function(e){n=k(!0,h,e),x(M,"NotiflixConfirmInternalCSS")},merge:function(e){return n?void(n=k(!0,n,e)):(b("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,i,n,r,a,s){D(p.Show,e,t,null,i,n,r,a,s)},ask:function(e,t,i,n,r,a,s,o){D(p.Ask,e,t,i,n,r,a,s,o)},prompt:function(e,t,i,n,r,a,s,o){D(p.Prompt,e,t,i,n,r,a,s,o)}},Loading:{init:function(e){r=k(!0,f,e),x(z,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=k(!0,r,e)):(b("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){W(m.Standard,e,t,!0,0)},hourglass:function(e,t){W(m.Hourglass,e,t,!0,0)},circle:function(e,t){W(m.Circle,e,t,!0,0)},arrows:function(e,t){W(m.Arrows,e,t,!0,0)},dots:function(e,t){W(m.Dots,e,t,!0,0)},pulse:function(e,t){W(m.Pulse,e,t,!0,0)},custom:function(e,t){W(m.Custom,e,t,!0,0)},notiflix:function(e,t){W(m.Notiflix,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),W(null,null,null,!1,e)},change:function(e){B(e)}},Block:{init:function(e){a=k(!0,v,e),x(F,"NotiflixBlockInternalCSS")},merge:function(e){return a?void(a=k(!0,a,e)):(b('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,i){U(!0,g.Standard,e,t,i)},hourglass:function(e,t,i){U(!0,g.Hourglass,e,t,i)},circle:function(e,t,i){U(!0,g.Circle,e,t,i)},arrows:function(e,t,i){U(!0,g.Arrows,e,t,i)},dots:function(e,t,i){U(!0,g.Dots,e,t,i)},pulse:function(e,t,i){U(!0,g.Pulse,e,t,i)},remove:function(e,t){"number"!=typeof t&&(t=0),U(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?k(!0,e.Notiflix,{Notify:H.Notify,Report:H.Report,Confirm:H.Confirm,Loading:H.Loading,Block:H.Block}):{Notify:H.Notify,Report:H.Report,Confirm:H.Confirm,Loading:H.Loading,Block:H.Block}},"function"==typeof define&&define.amd?define([],function(){return o(s)}):"object"==typeof eS?eS=o(s):s.Notiflix=o(s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var eT={},eI=eT={};function eE(){throw Error("setTimeout has not been defined")}function eC(){throw Error("clearTimeout has not been defined")}function e_(e){if(u===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((u===eE||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return u(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return u.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return u.call(this,e,0)}}}!function(){try{u="function"==typeof setTimeout?setTimeout:eE}catch(e){u=eE}try{p="function"==typeof clearTimeout?clearTimeout:eC}catch(e){p=eC}}();var eN=[],eL=!1,eA=-1;function eP(){eL&&h&&(eL=!1,h.length?eN=h.concat(eN):eA=-1,eN.length&&eO())}function eO(){if(!eL){var e=e_(eP);eL=!0;for(var t=eN.length;t;){for(h=eN,eN=[];++eA<t;)h&&h[eA].run();eA=-1,t=eN.length}h=null,eL=!1,function(e){if(p===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((p===eC||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
p(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return p.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return p.call(this,e)}}}(e)}}// v8 likes predictible objects
function eR(e,t){this.fun=e,this.array=t}function eM(){}eI.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];eN.push(new eR(e,t)),1!==eN.length||eL||e_(eO)},eR.prototype.run=function(){this.fun.apply(null,this.array)},eI.title="browser",eI.browser=!0,eI.env={},eI.argv=[],eI.version="",eI.versions={},eI.on=eM,eI.addListener=eM,eI.once=eM,eI.off=eM,eI.removeListener=eM,eI.removeAllListeners=eM,eI.emit=eM,eI.prependListener=eM,eI.prependOnceListener=eM,eI.listeners=function(e){return[]},eI.binding=function(e){throw Error("process.binding is not supported")},eI.cwd=function(){return"/"},eI.chdir=function(e){throw Error("process.chdir is not supported")},eI.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},ez=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let a=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){// Surrogate Pair
let a=e[i++],s=e[i++],o=e[i++],l=((7&r)<<18|(63&a)<<12|(63&s)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let a=e[i++],s=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&s)}}return t.join("")},eW={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=r>>2,d=(3&r)<<4|s>>4,u=(15&s)<<2|l>>6,p=63&l;o||(p=64,a||(u=64)),n.push(i[c],i[d],i[u],i[p])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eD(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):ez(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],a=t<e.length,s=a?i[e.charAt(t)]:0;++t;let o=t<e.length,l=o?i[e.charAt(t)]:64;++t;let c=t<e.length,d=c?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==l||null==d)throw new eB;let u=r<<2|s>>4;if(n.push(u),64!==l){let e=s<<4&240|l>>2;if(n.push(e),64!==d){let e=l<<6&192|d;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class eB extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const eF=function(e){let t=eD(e);return eW.encodeByteArray(t,!0)},ej=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return eF(e).replace(/\./g,"")},eU=function(e){try{return eW.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eH=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==f)return f;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eV=()=>{if(void 0===eT||void 0===eT.env)return;let e=void 0;if(e)return JSON.parse(e)},e$=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&eU(e[1]);return t&&JSON.parse(t)},eG=()=>{try{return eH()||eV()||e$()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eX=e=>{var t,i;return null===(i=null===(t=eG())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},eq=()=>{var e;return null===(e=eG())||void 0===e?void 0:e.config},eK=e=>{var t;return null===(t=eG())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function eJ(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class eQ extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */i){super(t),this.code=e,this.customData=i,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,eQ.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eZ.prototype.create)}}class eZ{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],a=r?r.replace(e0,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${a} (${n}).`,o=new eQ(n,s,i);return o}}const e0=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function e1(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],a=t[r];if(e6(i)&&e6(a)){if(!e1(i,a))return!1}else if(i!==a)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function e6(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function e5(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function e2(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function e3(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class e4{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=e9),void 0===n.error&&(n.error=e9),void 0===n.complete&&(n.complete=e9);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){// nothing
}}),this.observers.push(n),r}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){// Ignore exceptions raised in Observers or missing methods of an
// Observer.
// Log error to console. b/31404806
"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e9(){// do nothing
}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class e7{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class tt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:te})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=te){return this.instances.has(e)}getOptions(e=te){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);i===r&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===te?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return i||null}normalizeInstanceIdentifier(e=te){return this.component?this.component.multipleInstances?e:te:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class ti{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new tt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const tn=[];(l=m||(m={}))[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT";const tr={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},ta=m.INFO,ts={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},to=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=ts[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tl{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=ta,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=to,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */tn.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?tr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const tc=(e,t)=>t.some(t=>e instanceof t),td=new WeakMap,tu=new WeakMap,tp=new WeakMap,th=new WeakMap,tm=new WeakMap;let tf={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return tu.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||tp.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return tg(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function tg(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(tg(e.result)),n()},a=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",a)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&td.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
tm.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(th.has(e))return th.get(e);let i="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(tv(this),e),tg(td.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return tg(t.apply(tv(this),e))}:function(e,...i){let n=t.call(tv(this),e,...i);return tp.set(n,e.sort?e.sort():[e]),tg(n)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(tu.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),n()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)});// Cache it for later retrieval.
tu.set(e,t)}(t),tc(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,tf):t;return i!==e&&(th.set(e,i),tm.set(i,e)),i}const tv=e=>tm.get(e),tb=["get","getKey","getAll","getAllKeys","count"],ty=["put","add","delete","clear"],tw=new Map;function tx(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tw.get(t))return tw.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=ty.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||tb.includes(i)))return;let a=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let a=this.transaction(e,r?"readwrite":"readonly"),s=a.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),r&&a.done]))[0]};return tw.set(t,a),a}tf={...a=tf,get:(e,t,i)=>tx(e,t)||a.get(e,t,i),has:(e,t)=>!!tx(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const tS="@firebase/app",tT="0.9.20",tI=new tl("@firebase/app"),tE="[DEFAULT]",tC={[tS]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},t_=new Map,tN=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function tL(e){let t=e.name;if(tN.has(t))return tI.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let i of(tN.set(t,e),t_.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(i){tI.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function tA(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}const tP=new eZ("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new e7("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw tP.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */const tR="10.5.0";function tM(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:tE,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw tP.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(i||(i=eq()),!i)throw tP.create("no-options"/* AppError.NO_OPTIONS */);let a=t_.get(r);if(a){// return the existing app if options and config deep equal the ones in the existing app.
if(e1(i,a.options)&&e1(n,a.config))return a;throw tP.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let s=new ti(r);for(let e of tN.values())s.addComponent(e);let o=new tO(i,n,s);return t_.set(r,o),o}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function tD(e,t,i){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(n=tC[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let a=r.match(/\s|\//),s=t.match(/\s|\//);if(a||s){let e=[`Unable to register library "${r}" with version "${t}":`];a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tI.warn(e.join(" "));return}tL(new e7(`${r}-version`,()=>({library:r,version:t}),"VERSION"/* ComponentType.VERSION */))}const tz="firebase-heartbeat-store";let tW=null;function tB(){return tW||(tW=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:a}={}){let s=indexedDB.open(e,1),o=tg(s);return n&&s.addEventListener("upgradeneeded",e=>{n(tg(s.result),e.oldVersion,e.newVersion,tg(s.transaction),e)}),i&&s.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(tz)}}).catch(e=>{throw tP.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),tW}async function tF(e){try{let t=await tB(),i=await t.transaction(tz).objectStore(tz).get(tU(e));return i}catch(e){if(e instanceof eQ)tI.warn(e.message);else{let t=tP.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});tI.warn(t.message)}}}async function tj(e,t){try{let i=await tB(),n=i.transaction(tz,"readwrite"),r=n.objectStore(tz);await r.put(t,tU(e)),await n.done}catch(e){if(e instanceof eQ)tI.warn(e.message);else{let t=tP.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});tI.warn(t.message)}}}function tU(e){return`${e.name}!${e.options.appId}`}class tH{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new t$(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=tV();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=tV(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let i=[],n=e.slice();for(let r of e){// Look for an existing entry with the same user agent.
let e=i.find(e=>e.agent===r.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(r.date),tG(i)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
i.push({agent:r.agent,dates:[r.date]}),tG(i)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
i.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=ej(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=i,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],// Do not wait for this, to reduce latency.
this._storage.overwrite(this._heartbeatsCache)),n)}}function tV(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class t${constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await tF(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return tj(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return tj(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function tG(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return ej(JSON.stringify({version:2,heartbeats:e})).length}function tX(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function tq(e){return void 0!==e&&void 0!==e.enterprise}tL(new e7("platform-logger",e=>new tk(e),"PRIVATE"/* ComponentType.PRIVATE */)),tL(new e7("heartbeat",e=>new tH(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
tD(tS,tT,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
tD(tS,tT,"esm2017"),// Register platform SDK identifier (no version).
tD("fire-js",""),tD("firebase","10.5.0","app"),"function"==typeof SuppressedError&&SuppressedError;class tK{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function tY(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tJ=new eZ("auth","Firebase",tY()),tQ=new tl("@firebase/auth");function tZ(e,...t){tQ.logLevel<=m.ERROR&&tQ.error(`Auth (${tR}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(e,...t){throw t6(e,...t)}function t1(e,...t){return t6(e,...t)}function t6(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return tJ.create(e,...t)}function t5(e,t,...i){if(!e)throw t6(t,...i)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function t2(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw tZ(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function t4(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class t9{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||t2("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eJ())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===t4()||"https:"===t4()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t8(e,t){e.emulator||t2("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void t2("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void t2("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void t2("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const ie={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},it=new t9(3e4,6e4);function ii(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ir(e,t,i,n,r={}){return ia(e,r,async()=>{let r={},a={};n&&("GET"/* HttpMethod.GET */===t?a=n:r={body:JSON.stringify(n)});let s=e5(Object.assign({key:e.config.apiKey},a)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(o["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),t7.fetch()(io(e,e.config.apiHost,i,s),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))})}async function ia(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},ie),t);try{let t=new il(e),r=await Promise.race([i(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let a=await r.json();if("needConfirmation"in a)throw ic(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,a);if(r.ok&&!("errorMessage"in a))return a;{let t=r.ok?a.errorMessage:a.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===i)throw ic(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,a);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===i)throw ic(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,a);if("USER_DISABLED"/* ServerError.USER_DISABLED */===i)throw ic(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,a);let o=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw function(e,t,i){let n=Object.assign(Object.assign({},tY()),{[t]:i}),r=new eZ("auth","Firebase",n);return r.create(t,{appName:e.name})}(e,o,s);t0(e,o)}}catch(t){if(t instanceof eQ)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
t0(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function is(e,t,i,n,r={}){let a=await ir(e,t,i,n,r);return"mfaPendingCredential"in a&&t0(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:a}),a}function io(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?t8(e.config,r):`${e.config.apiScheme}://${r}`}class il{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(t1(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),it.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ic(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=t1(e,t,n);return(// We know customData is defined on error because errorParams is defined
r.customData._tokenResponse=i,r)}async function id(e,t){return ir(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(e,t){return ir(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function ip(e,t){return ir(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function im(e,t=!1){let i=e8(e),n=await i.getIdToken(t),r=iv(n);t5(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a="object"==typeof r.firebase?r.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:r,token:n,authTime:ih(ig(r.auth_time)),issuedAtTime:ih(ig(r.iat)),expirationTime:ih(ig(r.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function ig(e){return 1e3*Number(e)}function iv(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return tZ("JWT malformed, contained fewer than 3 sections"),null;try{let e=eU(i);if(!e)return tZ("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tZ("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof eQ&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){// Only retry on network errors
(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ih(this.lastLoginAt),this.creationTime=ih(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(e){var t;let i=e.auth,n=await e.getIdToken(),r=await ib(e,ip(i,{idToken:n}));t5(null==r?void 0:r.users.length,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=r.users[0];e._notifyReloadListener(a);let s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map(e=>{var{providerId:t}=e,i=tX(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],o=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,s),l=e.isAnonymous,c=!(e.email&&a.passwordHash)&&!(null==o?void 0:o.length),d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new iw(a.createdAt,a.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,d)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function ik(e){let t=e8(e);await ix(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(e,t){let i=await ia(e,{},async()=>{let i=e5({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,a=io(e,n,"/v1/token"/* Endpoint.TOKEN */,`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",t7.fetch()(a,{method:"POST"/* HttpMethod.POST */,headers:s,body:i})});// The response comes back in snake_case. Convert to camel:
return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class iT{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){t5(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=iv(e);return t5(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(t5(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await iS(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,a=new iT;return i&&(t5("string"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.refreshToken=i),n&&(t5("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.accessToken=n),r&&(t5("number"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new iT,this.toJSON())}_performRefresh(){return t2("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(e,t){t5("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class iE{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=tX(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new iy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new iw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await ib(this,this.stsTokenManager.getToken(this.auth,e));return t5(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return im(this,e)}reload(){return ik(this)}_assign(e){this!==e&&(t5(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new iE(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
t5(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ix(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await ib(this,iu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,a,s,o,l,c;let d=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,p=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,h=null!==(a=t.photoURL)&&void 0!==a?a:void 0,m=null!==(s=t.tenantId)&&void 0!==s?s:void 0,f=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:x,stsTokenManager:k}=t;t5(b&&k,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let S=iT.fromJSON(this.name,k);t5("string"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),iI(d,e.name),iI(u,e.name),t5("boolean"==typeof y,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t5("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),iI(p,e.name),iI(h,e.name),iI(m,e.name),iI(f,e.name),iI(g,e.name),iI(v,e.name);let T=new iE({uid:b,auth:e,email:u,emailVerified:y,displayName:d,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:m,stsTokenManager:S,createdAt:g,lastLoginAt:v});return x&&Array.isArray(x)&&(T.providerData=x.map(e=>Object.assign({},e))),f&&(T._redirectEventId=f),T}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,i=!1){let n=new iT;n.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let r=new iE({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return(// Updates the user info and data and resolves with a user instance.
await ix(r),r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new Map;function i_(e){e instanceof Function||t2("Expected a class definition");let t=iC.get(e);return t?t instanceof e||t2("Instance stored in cache mismatched with class"):(t=new e,iC.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(e,t,i){return`firebase:${e}:${t}:${i}`}iN.type="NONE";class iA{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=iL(this.userKey,n.apiKey,r),this.fullPersistenceKey=iL("persistence"/* KeyName.PERSISTENCE_USER */,n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?iE._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new iA(i_(iN),e,i);// Eliminate any persistences that are not available
let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||i_(iN),a=iL(i,e.config.apiKey,e.name),s=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let i of t)try{let t=await i._get(a);if(t){let n=iE._fromJSON(e,t);// throws for unparsable blob (wrong format)
i!==r&&(s=n),r=i;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let o=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&o.length&&(r=o[0],s&&// we'll just let it bubble to surface the error.
await r._set(a,s.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(a)}catch(e){}}))),new iA(r,e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function iP(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(iD(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(iO(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(iW(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(iB(t))return"Webos"/* BrowserName.WEBOS */;if(iR(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||iM(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(iz(t))return"Android"/* BrowserName.ANDROID */;let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"/* BrowserName.OTHER */}function iO(e=eJ()){return/firefox\//i.test(e)}function iR(e=eJ()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function iM(e=eJ()){return/crios\//i.test(e)}function iD(e=eJ()){return/iemobile/i.test(e)}function iz(e=eJ()){return/android/i.test(e)}function iW(e=eJ()){return/blackberry/i.test(e)}function iB(e=eJ()){return/webos/i.test(e)}function iF(e=eJ()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ij(e=eJ()){// TODO: implement getBrowserName equivalent for OS.
return iF(e)||iz(e)||iB(e)||iW(e)||/windows phone/i.test(e)||iD(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function iU(e,t=[]){let i;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
i=iP(eJ());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
i=`${iP(eJ())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${i}/JsCore/${tR}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iH{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let i=t=>new Promise((i,n)=>{try{let n=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    i(n)}catch(e){// Sync callback throws.
    n(e)}});// Attach the onAbort if present
i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function iV(e,t={}){return ir(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,ii(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class i${constructor(e){var t,i,n,r;// Only include custom strength options defined in the response.
let a=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=a.minPasswordLength)&&void 0!==t?t:6,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),void 0!==a.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),void 0!==a.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),void 0!==a.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),void 0!==a.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,a,s;let o={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),// Combine the status into single isValid property.
o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(i=o.meetsMaxPasswordLength)||void 0===i||i),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsUppercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(a=o.containsNumericCharacter)||void 0===a||a),o.isValid&&(o.isValid=null===(s=o.containsNonAlphanumericCharacter)||void 0===s||s),o)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let i;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */i>="a"&&i<="z",/* containsUppercaseCharacter= */i>="A"&&i<="Z",/* containsNumericCharacter= */i>="0"&&i<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(i))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iX(this),this.idTokenSubscription=new iX(this),this.beforeStateQueue=new iH(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tJ,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=i_(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await iA.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!i||i===a)&&(null==s?void 0:s.user)&&(n=s.user,r=!0)}// If no user in persistence, there is no current user. Set to null.
if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(t5(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ix(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?e8(e):null;return t&&t5(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&t5(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(i_(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await iV(this),t=new i$(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eZ("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&i_(e)||this._popupRedirectResolver;t5(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await iA.create(this,[i_(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),a=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(t5(s,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
s.then(()=>{a||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{a=!0,r()}}{let i=e.addObserver(t);return()=>{a=!0,i()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return t5(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=iU(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=i);// If the App Check service exists, add the App Check token in the headers
let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){tQ.logLevel<=m.WARN&&tQ.warn(`Auth (${tR}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class iX{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let i=new e4(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return t5(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function iq(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,i)=>{var n,r;let a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=e=>{let t=t1("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,i(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(a)})}function iK(e){return`__${e}${Math.floor(1e6*Math.random())}`}class iY{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=e8(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{id(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new tK(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;tq(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&tq(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}iq("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function iJ(e,t,i,n=!1){let r;let a=new iY(e);try{r=await a.verify(i)}catch(e){r=await a.verify(i,!0)}let s=Object.assign({},t);return n?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),s}function iQ(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function iZ(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class i0{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return t2("not implemented")}/** @internal */_getIdTokenResponse(e){return t2("not implemented")}/** @internal */_linkToIdToken(e,t){return t2("not implemented")}/** @internal */_getReauthenticationResolver(e){return t2("not implemented")}}async function i1(e,t){return ir(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i6(e,t){return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i5(e,t){return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,ii(e,t))}async function i2(e,t){return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,ii(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class i3 extends i0{/** @internal */constructor(/** @internal */e,/** @internal */t,i,/** @internal */n=null){super("password"/* ProviderId.PASSWORD */,i),this._email=e,this._password=t,this._tenantId=n}/** @internal */static _fromEmailAndPassword(e,t){return new i3(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,i=null){return new i3(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,i)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return i6(e,i).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await iJ(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return i6(e,t)}});{let t=await iJ(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return i6(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return i5(e,{email:this._email,oobCode:this._password});default:t0(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return i1(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return i2(e,{idToken:t,email:this._email,oobCode:this._password});default:t0(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i4(e,t){return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,ii(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class i9 extends i0{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new i9(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):t0("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=tX(t,["providerId","signInMethod"]);if(!i||!n)return null;let a=new i9(i,n);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return i4(e,t)}/** @internal */_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,i4(e,i)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,i4(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=e5(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i8(e,t){return ir(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,ii(e,t))}async function i7(e,t){return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,ii(e,t))}async function ne(e,t){let i=await is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,ii(e,t));if(i.temporaryProof)throw ic(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,i);return i}const nt={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function ni(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,ii(e,i),nt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class nn extends i0{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new nn({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new nn({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return i7(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return ne(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return ni(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new nn({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class nr{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,i,n,r,a,s;let o=e2(e3(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(i=o.oobCode)&&void 0!==i?i:null,d=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);// Validate API key, code and mode.
t5(l&&c&&d,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(a=o.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=o.tenantId)&&void 0!==s?s:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=e2(e3(e)).link,i=t?e2(e3(t)).deep_link_id:null,n=e2(e3(e)).deep_link_id,r=n?e2(e3(n)).link:null;return r||n||i||t||e}(e);try{return new nr(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class na{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=na.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return i3._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let i=nr.parseLink(t);return t5(i,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),i3._fromEmailAndCode(e,i.code,i.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */na.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */na.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */na.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class ns{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class no extends ns{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class nl extends no{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return i9._fromParams({providerId:nl.PROVIDER_ID,signInMethod:nl.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nl.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nl.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */nl.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */nl.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class nc extends no{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return i9._fromParams({providerId:nc.PROVIDER_ID,signInMethod:nc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nc.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return nc.credential(t,i)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */nc.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */nc.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class nd extends no{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return i9._fromParams({providerId:nd.PROVIDER_ID,signInMethod:nd.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nd.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nd.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */nd.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */nd.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class nu extends no{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return i9._fromParams({providerId:nu.PROVIDER_ID,signInMethod:nu.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nu.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return nu.credential(t,i)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(e,t){return is(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,ii(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */nu.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */nu.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){let r=await iE._fromIdTokenResponse(e,i,n),a=nm(i),s=new nh({user:r,providerId:a,_tokenResponse:i,operationType:t});return s}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,/* reload */!0);let n=nm(i);return new nh({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function nm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends eQ{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,nf.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new nf(e,t,i,n)}}function ng(e,t,i,n){let r="reauthenticate"/* OperationType.REAUTHENTICATE */===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return r.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw nf._fromErrorAndOperation(e,i,t,n);throw i})}async function nv(e,t,i=!1){let n=await ib(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return nh._forOperation(e,"link"/* OperationType.LINK */,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(e,t,i=!1){let{auth:n}=e,r="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let a=await ib(e,ng(n,r,t,e),i);t5(a.idToken,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s=iv(a.idToken);t5(s,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:o}=s;return t5(e.uid===o,n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),nh._forOperation(e,r,a)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&t0(n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(e,t,i=!1){let n="signIn"/* OperationType.SIGN_IN */,r=await ng(e,n,t),a=await nh._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(a.user),a}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function nw(e,t){return ny(e8(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function nx(e){let t=e8(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */async function nk(e,t,i){var n;let r;let a=e8(e),s={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(n=a._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await iJ(a,s,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);r=np(a,e)}else r=np(a,s).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await iJ(a,s,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);return np(a,e)}throw e});let o=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&nx(e),t}),l=await nh._fromIdTokenResponse(a,"signIn"/* OperationType.SIGN_IN */,o);return await a._updateCurrentUser(l.user),l}new WeakMap;const nS="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class nT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(nS,"1"),this.storage.removeItem(nS),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class nI extends nT{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=eJ();return iR(e)||iF(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=ij(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let i=this.storage.getItem(t),n=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let n=this.storage.getItem(i);// Value not synchronized, synchronize manually.
if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);/** Detects Internet Explorer. */(function(){let e=eJ();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nI.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends nT{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}nE.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class nC{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new nC(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:i});let a=Array.from(r).map(async t=>t(e.origin,n)),s=await Promise.all(a.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:i,response:s})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}nC.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class nN{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,i=50/* _TimeoutDuration.ACK */){let n,r;let a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((s,o)=>{let l=n_("",20);a.port1.start();let c=setTimeout(()=>{o(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},i);r={messageChannel:a,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(c),n=setTimeout(()=>{o(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(n),s(e.data.response);break;default:clearTimeout(c),clearTimeout(n),o(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(r),a.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[a.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function nL(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return void 0!==nL().WorkerGlobalScope&&"function"==typeof nL().importScripts}async function nP(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO="firebaseLocalStorageDb",nR="firebaseLocalStorage",nM="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class nD{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nz(e,t){return e.transaction([nR],t?"readwrite":"readonly").objectStore(nR)}function nW(){let e=indexedDB.open(nO,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(nR,{keyPath:nM})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
i.objectStoreNames.contains(nR)?t(i):(// Need to close the database or else you get a `blocked` event
i.close(),await function(){let e=indexedDB.deleteDatabase(nO);return new nD(e).toPromise()}(),t(await nW()))})})}async function nB(e,t,i){let n=nz(e,!0).put({[nM]:t,value:i});return new nD(n).toPromise()}async function nF(e,t){let i=nz(e,!1).get(t),n=await new nD(i).toPromise();return void 0===n?null:n.value}function nj(e,t){let i=nz(e,!0).delete(t);return new nD(i).toPromise()}class nU{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await nW()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return nA()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=nC._getInstance(nA()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await nP(),!this.activeServiceWorker)return;this.sender=new nN(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let i=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await nW();return await nB(e,nS,"1"),await nj(e,nS),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nB(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>nF(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nj(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=nz(e,!1).getAll();return new nD(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function nH(e,t,i){var n,r,a;let s=await i.verify();try{let o;if(t5("string"==typeof s,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t5("recaptcha"===i.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){t5("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:s}},ir(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,ii(e,r)));return i.phoneSessionInfo.sessionInfo}{t5("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=(null===(n=o.multiFactorHint)||void 0===n?void 0:n.uid)||o.multiFactorUid;t5(i,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let r=await (a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:s}},ir(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,ii(e,a)));return r.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await i8(e,{phoneNumber:o.phoneNumber,recaptchaToken:s});return t}}finally{i._reset()}}nU.type="LOCAL",iK("rcb"),new t9(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class nV{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=nV.PROVIDER_ID,this.auth=e8(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return nH(this.auth,e,e8(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return nn._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nV.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return nV.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?nn._fromTokenResponse(t,i):null}}/** Always set to {@link ProviderId}.PHONE. */nV.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */nV.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n$ extends i0{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return i4(e,this._buildIdpRequest())}_linkToIdToken(e,t){return i4(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return i4(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nG(e){return ny(e.auth,new n$(e),e.bypassAuthState)}function nX(e){let{auth:t,user:i}=e;return t5(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nb(i,new n$(e),e.bypassAuthState)}async function nq(e){let{auth:t,user:i}=e;return t5(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nv(i,new n$(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class nK{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:a,type:s}=e;if(a){this.reject(a);return}let o={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return nG;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return nq;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return nX;default:t0(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||t2("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||t2("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nY=new t9(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class nJ extends nK{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,nJ.currentPopupAction&&nJ.currentPopupAction.cancel(),nJ.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return t5(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||t2("Popup operations only handle one event");let e=n_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(t1(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(t1(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nJ.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(t1(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,nY.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
nJ.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const nQ=new Map;class nZ extends nK{constructor(e,t,i=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,i),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=nQ.get(this.auth._key());if(!e){try{let t=await n0(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}nQ.set(this.auth._key(),e)}return this.bypassAuthState||nQ.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n0(e,t){let i=iL("pendingRedirect",t.config.apiKey,t.name),n=i_(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function n1(e,t){nQ.set(e._key(),t)}async function n6(e,t,i=!1){let n=e8(e),r=t?i_(t):(t5(n._popupRedirectResolver,n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n._popupRedirectResolver),a=new nZ(n,r,i),s=await a.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}class n5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return n3(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!n3(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(t1(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(n2(e))}saveEventToCache(e){this.cachedEventUids.add(n2(e)),this.lastProcessedEventTime=Date.now()}}function n2(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function n3({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n4(e,t={}){return ir(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n8=/^https?/;async function n7(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await n4(e);for(let e of t)try{if(function(e){let t=t3(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!n8.test(i))return!1;if(n9.test(e))// only contain the IP, no extra character.
return n===e;// Dots in pattern should be escaped.
let r=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+r+"|"+r+")$","i");return a.test(n)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
t0(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new t9(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function rt(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=nL().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let ri=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new t9(5e3,15e3),rr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ra=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function rs(e){let t=await (ri=ri||new Promise((t,i)=>{var n,r,a;// Function to run when gapi.load is ready.
function s(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
rt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
rt(),i(t1(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:re.get()})}if(null===(r=null===(n=nL().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(a=nL().gapi)||void 0===a?void 0:a.load)s();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=iK("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
nL()[t]=()=>{// GApi loader should be ready.
gapi.load?s():i(t1(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},iq(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
ri=null,e)})),i=nL().gapi;return t5(i,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;t5(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let i=t.emulator?t8(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:tR},r=ra.get(e.config.apiHost);r&&(n.eid=r);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${e5(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rr,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let r=t1(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),a=nL().setTimeout(()=>{n(r)},rn.get());// Clear timer and resolve pending iframe ready promise.
    function s(){nL().clearTimeout(a),i(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(s).then(s,()=>{n(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class rl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const rc=encodeURIComponent("fac");async function rd(e,t,i,n,r,a){t5(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),t5(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let s={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:tR,eventId:r};if(t instanceof ns)// TODO set additionalParams from the provider as well?
for(let[i,n]of(t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(s.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))s[i]=n;if(t instanceof no){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}for(let t of(e.tenantId&&(s.tid=e.tenantId),Object.keys(s)))void 0===s[t]&&delete s[t];// Sets the App Check token to pass to the widget
let o=await e._getAppCheckToken(),l=o?`#${rc}=${encodeURIComponent(o)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?t8(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${e5(s).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */const ru="webStorageSupport",rp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=n6,this._overrideRedirectResult=n1}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,i,n){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||t2("_initialize() not called before _openPopup()");let a=await rd(e,t,i,t3(),n);return function(e,t,i,n=500,r=600){let a=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString(),o="",l=Object.assign(Object.assign({},ro),{width:n.toString(),height:r.toString(),top:a,left:s}),c=eJ().toLowerCase();i&&(o=iM(c)?"_blank":i),iO(c)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let d=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=eJ()){var t;return iF(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",o),new rl(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let u=window.open(t||"",o,d);t5(u,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{u.focus()}catch(e){}return new rl(u)}(e,a,n_())}async _openRedirect(e,t,i,n){await this._originValidation(e);let r=await rd(e,t,i,t3(),n);return nL().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||t2("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await rs(e),i=new n5(e);return t.register("authEvent",t=>{t5(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let n=i.onEvent(t.authEvent);return{status:n?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(ru,{type:ru},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[ru];void 0!==r&&t(!!r),t0(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=n7(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return ij()||iR()||iF()}};class rh{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,i);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return t2("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class rm extends rh{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new rm(e)}/** @internal */_finalizeEnroll(e,t,i){return ir(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,ii(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return ir(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,ii(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class rf extends rh{constructor(e,t,i){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=i}/** @internal */static _fromSecret(e,t){return new rf(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new rf(t,e)}/** @internal */async _finalizeEnroll(e,t,i){return t5(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),ir(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,ii(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){t5(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let i={verificationCode:this.otp};return ir(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,ii(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class rg{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,i,n,r,a,s){this.sessionInfo=a,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new rg(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var i;let n=!1;return(rv(e)||rv(t))&&(n=!0),n&&(rv(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),rv(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function rv(e){return void 0===e||(null==e?void 0:e.length)===0}var rb="@firebase/auth",ry="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){t5(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const rx=eK("authIdTokenMaxAge")||300;let rk=null;const rS=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>rx)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let r=null==i?void 0:i.token;rk!==r&&(rk=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};c="Browser"/* ClientPlatform.BROWSER */,tL(new e7("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=i.options;t5(a&&!a.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:i.name});let o={apiKey:a,authDomain:s,clientPlatform:c,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:iU(c)},l=new iG(i,n,r,o);return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(i_);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,i)=>{let n=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);n.initialize()})),tL(new e7("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=e8(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new rw(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),tD(rb,ry,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(c)),tD(rb,ry,"esm2017"),tM({apiKey:"AIzaSyAjvSJvQxu47W-Oa1JrSyOVnKx1KBTL5UA",authDomain:"goit-project-js-bookshelf.firebaseapp.com",projectId:"goit-project-js-bookshelf",storageBucket:"goit-project-js-bookshelf.appspot.com",messagingSenderId:"93438368377",appId:"1:93438368377:web:063f56aa4bd4ee23e1d2a8",measurementId:"G-BRZ6Z5X8NQ"});const rT=document.querySelector(".sign-up-modal");document.querySelector(".sign-up-link");const rI=document.querySelector(".sign-in-link"),rE=document.querySelector(".log-out-btn");document.querySelector(".registration-modal-form"),document.querySelector(".registration-backdrop"),document.querySelector(".registration-close-btn"),[...document.querySelectorAll(".sign-up-btn")],[...document.querySelectorAll(".log-out-btn")],document.querySelector("#user-name");const rC=document.querySelector("#user-email"),r_=document.querySelector("#user-password"),rN=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function(e=tE){let t=t_.get(e);if(!t&&e===tE&&eq())return tM();if(!t)throw tP.create("no-app"/* AppError.NO_APP */,{appName:e});return t}()){let t=tA(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let i=tA(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),n=i.getOptions();if(e1(n,null!=t?t:{}))return e;t0(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let n=i.initialize({options:t});return n}(e,{popupRedirectResolver:rp,persistence:[nU,nI,nE]}),n=eK("authTokenSyncURL");if(n){let e=rS(n);e8(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),e8(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let r=eX("auth");return r&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,i){let n=e8(e);t5(n._canInitEmulator,n,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),t5(/^https?:\/\//.test(t),n,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let r=!!(null==i?void 0:i.disableWarnings),a=iQ(t),{host:s,port:o}=function(e){let t=iQ(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);// Strip out "username:password@".
if(r){let e=r[1];return{host:e,port:iZ(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:iZ(t)}}}(t),l=null===o?"":`:${o}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
n.config.emulator={url:`${a}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${r}`),i}(rL),rL=tM(firebaseConfig);// Sign up
rT.addEventListener("click",e=>{e.preventDefault(),nk(rN,rC.value,r_.value).then(e=>{user=e.user,document.querySelector(".sign-up-btn").classList.toggle(".is-hidden"),document.querySelector(".user-btn").classList.remove(".is-hidden"),(0,eS.Notify).success("You're signed up!")}).catch(e=>{let t=e.message;console.log(t,errorMessage)})}),// Sign in
rI.addEventListener("click",e=>{var t,i;e.preventDefault(),(t=rC.value,i=r_.value,nw(e8(rN),na.credential(t,i)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&nx(rN),e})).then(e=>{user=e.user,document.querySelector("[registration-data-modal]").classList.toggle("is-hidden"),document.querySelector(".sign-up-btn").classList.toggle(".is-hidden"),document.querySelector(".user-btn").classList.remove(".is-hidden"),document.querySelector(".log-out-btn").classList.remove(".visually-hiden"),(0,eS.Notify).success("You're logged in!")}).catch(e=>{e.code,e.message,(0,eS.Notify).failure("Wrong email or password. Try again.")})}),// Log out
rE.addEventListener("click",e=>{e.preventDefault(),e8(rN).signOut().then(()=>(rT.classList.toggle("is-hidden"),rE.classList.toggle("is-hidden"),(0,eS.Notify).info("You are logged out!"))).catch(e=>{(0,eS.Notify).info("You are logged out!")})}),e8(rN).onAuthStateChanged(e=>{e&&(rT.classList.toggle("is-hidden"),rE.classList.toggle("is-hidden"),e.uid)},void 0,void 0);var rA={},rP={},rO={};rO=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var rR={},rM={},rD={};rD="object"==typeof f&&f&&f.Object===Object&&f;/** Detect free variable `self`. */var rz="object"==typeof self&&self&&self.Object===Object&&self;rM=rD||rz||Function("return this")(),rR=function(){return rM.Date.now()};var rW={},rB={},rF={},rj=/\s/;rF=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&rj.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var rU=/^\s+/;rB=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,rF(e)+1).replace(rU,""):e};var rH={},rV={},r$={};r$=rM.Symbol;var rG={},rX=Object.prototype,rq=rX.hasOwnProperty,rK=rX.toString,rY=r$?r$.toStringTag:void 0;rG=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=rq.call(e,rY),i=e[rY];try{e[rY]=void 0;var n=!0}catch(e){}var r=rK.call(e);return n&&(t?e[rY]=i:delete e[rY]),r};var rJ={},rQ=Object.prototype.toString;rJ=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return rQ.call(e)};/** Built-in value references. */var rZ=r$?r$.toStringTag:void 0;rV=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":rZ&&rZ in Object(e)?rG(e):rJ(e)};var r0={};r0=/**
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
 */function(e){return null!=e&&"object"==typeof e},rH=/**
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
 */function(e){return"symbol"==typeof e||r0(e)&&"[object Symbol]"==rV(e)};/** Used as references for various `Number` constants. */var r1=0/0,r6=/^[-+]0x[0-9a-f]+$/i,r5=/^0b[01]+$/i,r2=/^0o[0-7]+$/i,r3=parseInt;rW=/**
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
 */function(e){if("number"==typeof e)return e;if(rH(e))return r1;if(rO(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=rO(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=rB(e);var i=r5.test(e);return i||r2.test(e)?r3(e.slice(2),i?2:8):r6.test(e)?r1:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var r4=Math.max,r9=Math.min;rP=/**
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
 */function(e,t,i){var n,r,a,s,o,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var i=n,a=r;return n=r=void 0,c=t,s=e.apply(a,i)}function m(e){var i=e-l,n=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||i>=t||i<0||u&&n>=a}function f(){var e,i,n,r=rR();if(m(r))return g(r);// Restart the timer.
o=setTimeout(f,(e=r-l,i=r-c,n=t-e,u?r9(n,a-i):n))}function g(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(o=void 0,p&&n)?h(e):(n=r=void 0,s))}function v(){var e,i=rR(),a=m(i);if(n=arguments,r=this,l=i,a){if(void 0===o)return(// Reset any `maxWait` timer.
c=e=l,// Start the timer for the trailing edge.
o=setTimeout(f,t),d?h(e):s);if(u)return(// Handle invocations in a tight loop.
clearTimeout(o),o=setTimeout(f,t),h(l))}return void 0===o&&(o=setTimeout(f,t)),s}return t=rW(t)||0,rO(i)&&(d=!!i.leading,a=(u="maxWait"in i)?r4(rW(i.maxWait)||0,t):a,p="trailing"in i?!!i.trailing:p),v.cancel=function(){void 0!==o&&clearTimeout(o),c=0,n=l=r=o=void 0},v.flush=function(){return void 0===o?s:g(rR())},v},rA=/**
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
 */function(e,t,i){var n=!0,r=!0;if("function"!=typeof e)throw TypeError("Expected a function");return rO(i)&&(n="leading"in i?!!i.leading:n,r="trailing"in i?!!i.trailing:r),rP(e,t,{leading:n,maxWait:t,trailing:r})};const r8=document.querySelector(".scroll-to-top"),r7=((d=rA)&&d.__esModule?d.default:d)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function i(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(r8.addEventListener("click",i),r8.classList.remove("unvisually")):(r8.classList.add("unvisually"),r8.addEventListener("click",i))}//# sourceMappingURL=index.433a8ecd.js.map
,500);window.addEventListener("scroll",r7);
//# sourceMappingURL=index.433a8ecd.js.map
