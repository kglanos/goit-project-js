let e,t,i,r,s;var n,a,o,l,d,c,u,h,p=globalThis,f={},m={},g=p.parcelRequired7c6;null==g&&((g=function(e){if(e in f)return f[e].exports;if(e in m){var t=m[e];delete m[e];var i={id:e,exports:{}};return f[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){m[e]=t},p.parcelRequired7c6=g),g.register,(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),r=()=>{let i="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open");let r=i?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};t.addEventListener("click",r),i.addEventListener("click",r),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const v=document.querySelector(".js-open-menu"),w=document.querySelector(".js-close-menu");/**
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
 *//* eslint-disable no-param-reassign */function y(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function b(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach(i=>{void 0===e[i]?e[i]=t[i]:y(t[i])&&y(e[i])&&Object.keys(t[i]).length>0&&b(e[i],t[i])})}w.disabled=!0,v.addEventListener("click",()=>{setTimeout(()=>{v.disabled=!0,w.disabled=!1},500)}),w.addEventListener("click",()=>{setTimeout(()=>{w.disabled=!0,v.disabled=!1},500)});const T={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function S(){let e="undefined"!=typeof document?document:{};return b(e,T),e}const I={document:T,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function E(){let e="undefined"!=typeof window?window:{};return b(e,I),e}function _(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function C(){return Date.now()}function k(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function P(){let e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){let r=i<0||arguments.length<=i?void 0:arguments[i];if(null!=r&&// eslint-disable-next-line
("undefined"!=typeof window&&void 0!==window.HTMLElement?!(r instanceof HTMLElement):!r||1!==r.nodeType&&11!==r.nodeType)){let i=Object.keys(Object(r)).filter(e=>0>t.indexOf(e));for(let t=0,s=i.length;t<s;t+=1){let s=i[t],n=Object.getOwnPropertyDescriptor(r,s);void 0!==n&&n.enumerable&&(k(e[s])&&k(r[s])?r[s].__swiper__?e[s]=r[s]:P(e[s],r[s]):!k(e[s])&&k(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:P(e[s],r[s])):e[s]=r[s])}}}return e}function O(e,t,i){e.style.setProperty(t,i)}function A(e){let t,{swiper:i,targetPosition:r,side:s}=e,n=E(),a=-i.translate,o=null,l=i.params.speed;i.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(i.cssModeFrameID);let d=r>a?"next":"prev",c=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,u=()=>{t=new Date().getTime(),null===o&&(o=t);let e=Math.max(Math.min((t-o)/l,1),0),d=a+(.5-Math.cos(e*Math.PI)/2)*(r-a);if(c(d,r)&&(d=r),i.wrapperEl.scrollTo({[s]:d}),c(d,r)){i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[s]:d})}),n.cancelAnimationFrame(i.cssModeFrameID);return}i.cssModeFrameID=n.requestAnimationFrame(u)};u()}function L(e,t){return void 0===t&&(t=""),[...e.children].filter(e=>e.matches(t))}function x(e){try{console.warn(e);return}catch(e){// err
}}function M(e,t){var i;void 0===t&&(t=[]);let r=document.createElement(e);return r.classList.add(...Array.isArray(t)?t:(void 0===(i=t)&&(i=""),i.trim().split(" ").filter(e=>!!e.trim()))),r}function R(e,t){let i=E();return i.getComputedStyle(e,null).getPropertyValue(t)}function N(e){let t,i=e;if(i){// eslint-disable-next-line
for(t=0;null!==(i=i.previousSibling);)1===i.nodeType&&(t+=1);return t}}function D(e,t,i){let r=E();return i?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function V(){return e||(e=function(){let e=E(),t=S();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),e}const U=(e,t)=>{if(!e||e.destroyed||!e.params)return;let i=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(i){let t=i.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(i.shadowRoot?t=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(t=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))&&t.remove()})),t&&t.remove()}},z=(e,t)=>{if(!e.slides[t])return;let i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},j=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);let r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let i=[s-t];i.push(...Array.from({length:t}).map((e,t)=>s+r+t)),e.slides.forEach((t,r)=>{i.includes(t.column)&&z(e,r)});return}let n=s+r-1;if(e.params.rewind||e.params.loop)for(let r=s-t;r<=n+t;r+=1){let t=(r%i+i)%i;(t<s||t>n)&&z(e,t)}else for(let r=Math.max(s-t,0);r<=Math.min(n+t,i-1);r+=1)r!==s&&(r>n||r<s)&&z(e,r)};function F(e){let{swiper:t,runCallbacks:i,direction:r,step:s}=e,{activeIndex:n,previousIndex:a}=t,o=r;if(o||(o=n>a?"next":n<a?"prev":"reset"),t.emit(`transition${s}`),i&&n!==a){if("reset"===o){t.emit(`slideResetTransition${s}`);return}t.emit(`slideChangeTransition${s}`),"next"===o?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`)}}function B(e,t,i){let r=E(),{params:s}=e,n=s.edgeSwipeDetection,a=s.edgeSwipeThreshold;return!n||!(i<=a)&&!(i>=r.innerWidth-a)||"prevent"===n&&(t.preventDefault(),!0)}function H(e){let t=S(),i=e;i.originalEvent&&(i=i.originalEvent);let r=this.touchEventsData;if("pointerdown"===i.type){if(null!==r.pointerId&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(r.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type){// don't proceed touch event
B(this,i,i.targetTouches[0].pageX);return}let{params:s,touches:n,enabled:a}=this;if(!a||!s.simulateTouch&&"mouse"===i.pointerType||this.animating&&s.preventInteractionOnTransition)return;!this.animating&&s.cssMode&&s.loop&&this.loopFix();let o=i.target;if("wrapper"===s.touchEventsTarget&&!this.wrapperEl.contains(o)||"which"in i&&3===i.which||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;// change target el for shadow root component
let l=!!s.noSwipingClass&&""!==s.noSwipingClass,d=i.composedPath?i.composedPath():i.path;l&&i.target&&i.target.shadowRoot&&d&&(o=d[0]);let c=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,u=!!(i.target&&i.target.shadowRoot);// use closestElement for shadow root element to get the actual closest for nested shadow root element
if(s.noSwiping&&(u?// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function(e,t){return void 0===t&&(t=this),function t(i){if(!i||i===S()||i===E())return null;i.assignedSlot&&(i=i.assignedSlot);let r=i.closest(e);return r||i.getRootNode?r||t(i.getRootNode().host):null}(t)}(c,o):o.closest(c))){this.allowClick=!0;return}if(s.swipeHandler&&!o.closest(s.swipeHandler))return;n.currentX=i.pageX,n.currentY=i.pageY;let h=n.currentX,p=n.currentY;// Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
if(!B(this,i,h))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=h,n.startY=p,r.touchStartTime=C(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let f=!0;o.matches(r.focusableElements)&&(f=!1,"SELECT"===o.nodeName&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==o&&t.activeElement.blur();let m=f&&this.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||m)&&!o.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&this.freeMode&&this.animating&&!s.cssMode&&this.freeMode.onTouchStart(),this.emit("touchStart",i)}function $(e){let t,i;let r=S(),s=this.touchEventsData,{params:n,touches:a,rtlTranslate:o,enabled:l}=this;if(!l||!n.simulateTouch&&"mouse"===e.pointerType)return;let d=e;if(d.originalEvent&&(d=d.originalEvent),"pointermove"===d.type){if(null!==s.touchId)return;// return from pointer if we use touch
let e=d.pointerId;if(e!==s.pointerId)return}if("touchmove"===d.type){if(!(t=[...d.changedTouches].filter(e=>e.identifier===s.touchId)[0])||t.identifier!==s.touchId)return}else t=d;if(!s.isTouched){s.startMoving&&s.isScrolling&&this.emit("touchMoveOpposite",d);return}let c=t.pageX,u=t.pageY;if(d.preventedByNestedSwiper){a.startX=c,a.startY=u;return}if(!this.allowTouchMove){d.target.matches(s.focusableElements)||(this.allowClick=!1),s.isTouched&&(Object.assign(a,{startX:c,startY:u,currentX:c,currentY:u}),s.touchStartTime=C());return}if(n.touchReleaseOnEdges&&!n.loop){if(this.isVertical()){if(u<a.startY&&this.translate<=this.maxTranslate()||u>a.startY&&this.translate>=this.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(c<a.startX&&this.translate<=this.maxTranslate()||c>a.startX&&this.translate>=this.minTranslate())return}if(r.activeElement&&d.target===r.activeElement&&d.target.matches(s.focusableElements)){s.isMoved=!0,this.allowClick=!1;return}s.allowTouchCallbacks&&this.emit("touchMove",d),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=c,a.currentY=u;let h=a.currentX-a.startX,p=a.currentY-a.startY;if(this.params.threshold&&Math.sqrt(h**2+p**2)<this.params.threshold)return;if(void 0===s.isScrolling){let e;this.isHorizontal()&&a.currentY===a.startY||this.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:h*h+p*p>=25&&(e=180*Math.atan2(Math.abs(p),Math.abs(h))/Math.PI,s.isScrolling=this.isHorizontal()?e>n.touchAngle:90-e>n.touchAngle)}if(s.isScrolling&&this.emit("touchMoveOpposite",d),void 0===s.startMoving&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(s.startMoving=!0),s.isScrolling||this.zoom&&this.params.zoom&&this.params.zoom.enabled){s.isTouched=!1;return}if(!s.startMoving)return;this.allowClick=!1,!n.cssMode&&d.cancelable&&d.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&d.stopPropagation();let f=this.isHorizontal()?h:p,m=this.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;n.oneWayMovement&&(f=Math.abs(f)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),a.diff=f,f*=n.touchRatio,o&&(f=-f,m=-m);let g=this.touchesDirection;this.swipeDirection=f>0?"prev":"next",this.touchesDirection=m>0?"prev":"next";let v=this.params.loop&&!n.cssMode,w="next"===this.touchesDirection&&this.allowSlideNext||"prev"===this.touchesDirection&&this.allowSlidePrev;if(!s.isMoved){if(v&&w&&this.loopFix({direction:this.swipeDirection}),s.startTranslate=this.getTranslate(),this.setTransition(0),this.animating){let e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});this.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,n.grabCursor&&(!0===this.allowSlideNext||!0===this.allowSlidePrev)&&this.setGrabCursor(!0),this.emit("sliderFirstMove",d)}if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&g!==this.touchesDirection&&v&&w&&Math.abs(f)>=1){Object.assign(a,{startX:c,startY:u,currentX:c,currentY:u,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}this.emit("sliderMove",d),s.isMoved=!0,s.currentTranslate=f+s.startTranslate;let y=!0,b=n.resistanceRatio;// Threshold
if(n.touchReleaseOnEdges&&(b=0),f>0?(v&&w&&!i&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?this.minTranslate()-this.slidesSizesGrid[this.activeIndex+1]:this.minTranslate())&&this.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>this.minTranslate()&&(y=!1,n.resistance&&(s.currentTranslate=this.minTranslate()-1+(-this.minTranslate()+s.startTranslate+f)**b))):f<0&&(v&&w&&!i&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?this.maxTranslate()+this.slidesSizesGrid[this.slidesSizesGrid.length-1]:this.maxTranslate())&&this.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:this.slides.length-("auto"===n.slidesPerView?this.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<this.maxTranslate()&&(y=!1,n.resistance&&(s.currentTranslate=this.maxTranslate()+1-(this.maxTranslate()-s.startTranslate-f)**b))),y&&(d.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),this.allowSlidePrev||this.allowSlideNext||(s.currentTranslate=s.startTranslate),n.threshold>0){if(Math.abs(f)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,a.diff=this.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{s.currentTranslate=s.startTranslate;return}}n.followFinger&&!n.cssMode&&((n.freeMode&&n.freeMode.enabled&&this.freeMode||n.watchSlidesProgress)&&(this.updateActiveIndex(),this.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&this.freeMode&&this.freeMode.onTouchMove(),// Update progress
this.updateProgress(s.currentTranslate),// Update translate
this.setTranslate(s.currentTranslate))}function G(e){let t,i;let r=this,s=r.touchEventsData,n=e;n.originalEvent&&(n=n.originalEvent);let a="touchend"===n.type||"touchcancel"===n.type;if(a){if(!(t=[...n.changedTouches].filter(e=>e.identifier===s.touchId)[0])||t.identifier!==s.touchId)return}else{if(null!==s.touchId||n.pointerId!==s.pointerId)return;// return from pointer if we use touch
t=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)){let e=["pointercancel","contextmenu"].includes(n.type)&&(r.browser.isSafari||r.browser.isWebView);if(!e)return}s.pointerId=null,s.touchId=null;let{params:o,touches:l,rtlTranslate:d,slidesGrid:c,enabled:u}=r;if(!u||!o.simulateTouch&&"mouse"===n.pointerType)return;if(s.allowTouchCallbacks&&r.emit("touchEnd",n),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&r.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(!0===r.allowSlideNext||!0===r.allowSlidePrev)&&r.setGrabCursor(!1);// Time diff
let h=C(),p=h-s.touchStartTime;// Tap, doubleTap, Click
if(r.allowClick){let e=n.path||n.composedPath&&n.composedPath();r.updateClickedSlide(e&&e[0]||n.target,e),r.emit("tap click",n),p<300&&h-s.lastClickTime<300&&r.emit("doubleTap doubleClick",n)}if(s.lastClickTime=C(),_(()=>{r.destroyed||(r.allowClick=!0)}),!s.isTouched||!s.isMoved||!r.swipeDirection||0===l.diff&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,i=o.followFinger?d?r.translate:-r.translate:-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){r.freeMode.onTouchEnd({currentPos:i});return}// Find current slide
let f=0,m=r.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<o.slidesPerGroupSkip?1:o.slidesPerGroup){let t=e<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;void 0!==c[e+t]?i>=c[e]&&i<c[e+t]&&(f=e,m=c[e+t]-c[e]):i>=c[e]&&(f=e,m=c[c.length-1]-c[c.length-2])}let g=null,v=null;o.rewind&&(r.isBeginning?v=o.virtual&&o.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1:r.isEnd&&(g=0));// Find current slide size
let w=(i-c[f])/m,y=f<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){// Long touches
if(!o.longSwipes){r.slideTo(r.activeIndex);return}"next"===r.swipeDirection&&(w>=o.longSwipesRatio?r.slideTo(o.rewind&&r.isEnd?g:f+y):r.slideTo(f)),"prev"===r.swipeDirection&&(w>1-o.longSwipesRatio?r.slideTo(f+y):null!==v&&w<0&&Math.abs(w)>o.longSwipesRatio?r.slideTo(v):r.slideTo(f))}else{// Short swipes
if(!o.shortSwipes){r.slideTo(r.activeIndex);return}let e=r.navigation&&(n.target===r.navigation.nextEl||n.target===r.navigation.prevEl);e?n.target===r.navigation.nextEl?r.slideTo(f+y):r.slideTo(f):("next"===r.swipeDirection&&r.slideTo(null!==g?g:f+y),"prev"===r.swipeDirection&&r.slideTo(null!==v?v:f))}}function W(){let e=this,{params:t,el:i}=e;if(i&&0===i.offsetWidth)return;t.breakpoints&&e.setBreakpoint();// Save locks
let{allowSlideNext:r,allowSlidePrev:s,snapGrid:n}=e,a=e.virtual&&e.params.virtual.enabled;// Disable locks on resize
e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let o=a&&t.loop;"auto"!==t.slidesPerView&&!(t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||o?e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),// Return locks after resize
e.allowSlidePrev=s,e.allowSlideNext=r,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function q(e){this.enabled&&!this.allowClick&&(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function K(){let{wrapperEl:e,rtlTranslate:t,enabled:i}=this;if(!i)return;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=-e.scrollLeft:this.translate=-e.scrollTop,0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();let r=this.maxTranslate()-this.minTranslate();(0===r?0:(this.translate-this.minTranslate())/r)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}function Y(e){U(this,e.target),!this.params.cssMode&&("auto"===this.params.slidesPerView||this.params.autoHeight)&&this.update()}function X(){!this.documentTouchHandlerProceeded&&(this.documentTouchHandlerProceeded=!0,this.params.touchReleaseOnEdges&&(this.el.style.touchAction="auto"))}const J=(e,t)=>{let i=S(),{params:r,el:s,wrapperEl:n,device:a}=e,o=!!r.nested,l="on"===t?"addEventListener":"removeEventListener";// Touch Events
i[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),s[l]("touchstart",e.onTouchStart,{passive:!1}),s[l]("pointerdown",e.onTouchStart,{passive:!1}),i[l]("touchmove",e.onTouchMove,{passive:!1,capture:o}),i[l]("pointermove",e.onTouchMove,{passive:!1,capture:o}),i[l]("touchend",e.onTouchEnd,{passive:!0}),i[l]("pointerup",e.onTouchEnd,{passive:!0}),i[l]("pointercancel",e.onTouchEnd,{passive:!0}),i[l]("touchcancel",e.onTouchEnd,{passive:!0}),i[l]("pointerout",e.onTouchEnd,{passive:!0}),i[l]("pointerleave",e.onTouchEnd,{passive:!0}),i[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&s[l]("click",e.onClick,!0),r.cssMode&&n[l]("scroll",e.onScroll),r.updateOnWindowResize?e[t](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",W,!0):e[t]("observerUpdate",W,!0),// Images loader
s[l]("load",e.onLoad,{capture:!0})},Q=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Z={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",// Overrides
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
_emitClasses:!1};/* eslint no-param-reassign: "off" */const ee={eventsEmitter:{on(e,t,i){let r=this;if(!r.eventsListeners||r.destroyed||"function"!=typeof t)return r;let s=i?"unshift":"push";return e.split(" ").forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][s](t)}),r},once(e,t,i){let r=this;if(!r.eventsListeners||r.destroyed||"function"!=typeof t)return r;function s(){r.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var i=arguments.length,n=Array(i),a=0;a<i;a++)n[a]=arguments[a];t.apply(r,n)}return s.__emitterProxy=t,r.on(e,s,i)},onAny(e,t){return!this.eventsListeners||this.destroyed||"function"!=typeof e||0>this.eventsAnyListeners.indexOf(e)&&this.eventsAnyListeners[t?"unshift":"push"](e),this},offAny(e){if(!this.eventsListeners||this.destroyed||!this.eventsAnyListeners)return this;let t=this.eventsAnyListeners.indexOf(e);return t>=0&&this.eventsAnyListeners.splice(t,1),this},off(e,t){let i=this;return i.eventsListeners&&!i.destroyed&&i.eventsListeners&&e.split(" ").forEach(e=>{void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach((r,s)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&i.eventsListeners[e].splice(s,1)})}),i},emit(){let e,t,i;let r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;for(var s=arguments.length,n=Array(s),a=0;a<s;a++)n[a]=arguments[a];"string"==typeof n[0]||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),i=r):(e=n[0].events,t=n[0].data,i=n[0].context||r),t.unshift(i);let o=Array.isArray(e)?e:e.split(" ");return o.forEach(e=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(r=>{r.apply(i,[e,...t])}),r.eventsListeners&&r.eventsListeners[e]&&r.eventsListeners[e].forEach(e=>{e.apply(i,t)})}),r}},update:{updateSize:function(){let e,t;let i=this.el;e=void 0!==this.params.width&&null!==this.params.width?this.params.width:i.clientWidth,t=void 0!==this.params.height&&null!==this.params.height?this.params.height:i.clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(// Subtract paddings
e=e-parseInt(R(i,"padding-left")||0,10)-parseInt(R(i,"padding-right")||0,10),t=t-parseInt(R(i,"padding-top")||0,10)-parseInt(R(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){let e;let t=this;function i(e,i){return parseFloat(e.getPropertyValue(t.getDirectionLabel(i))||0)}let r=t.params,{wrapperEl:s,slidesEl:n,size:a,rtlTranslate:o,wrongRTL:l}=t,d=t.virtual&&r.virtual.enabled,c=d?t.virtual.slides.length:t.slides.length,u=L(n,`.${t.params.slideClass}, swiper-slide`),h=d?t.virtual.slides.length:u.length,p=[],f=[],m=[],g=r.slidesOffsetBefore;"function"==typeof g&&(g=r.slidesOffsetBefore.call(t));let v=r.slidesOffsetAfter;"function"==typeof v&&(v=r.slidesOffsetAfter.call(t));let w=t.snapGrid.length,y=t.slidesGrid.length,b=r.spaceBetween,T=-g,S=0,I=0;if(void 0===a)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*a:"string"==typeof b&&(b=parseFloat(b)),t.virtualSize=-b,// reset margins
u.forEach(e=>{o?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(O(s,"--swiper-centered-offset-before",""),O(s,"--swiper-centered-offset-after",""));let E=r.grid&&r.grid.rows>1&&t.grid;E?t.grid.initSlides(u):t.grid&&t.grid.unsetSlides();let _="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter(e=>void 0!==r.breakpoints[e].slidesPerView).length>0;for(let s=0;s<h;s+=1){let n;if(e=0,u[s]&&(n=u[s]),E&&t.grid.updateSlide(s,n,u),!u[s]||"none"!==R(n,"display")){if("auto"===r.slidesPerView){_&&(u[s].style[t.getDirectionLabel("width")]="");let a=getComputedStyle(n),o=n.style.transform,l=n.style.webkitTransform;if(o&&(n.style.transform="none"),l&&(n.style.webkitTransform="none"),r.roundLengths)e=t.isHorizontal()?D(n,"width",!0):D(n,"height",!0);else{// eslint-disable-next-line
let t=i(a,"width"),r=i(a,"padding-left"),s=i(a,"padding-right"),o=i(a,"margin-left"),l=i(a,"margin-right"),d=a.getPropertyValue("box-sizing");if(d&&"border-box"===d)e=t+o+l;else{let{clientWidth:i,offsetWidth:a}=n;e=t+r+s+o+l+(a-i)}}o&&(n.style.transform=o),l&&(n.style.webkitTransform=l),r.roundLengths&&(e=Math.floor(e))}else e=(a-(r.slidesPerView-1)*b)/r.slidesPerView,r.roundLengths&&(e=Math.floor(e)),u[s]&&(u[s].style[t.getDirectionLabel("width")]=`${e}px`);u[s]&&(u[s].swiperSlideSize=e),m.push(e),r.centeredSlides?(T=T+e/2+S/2+b,0===S&&0!==s&&(T=T-a/2-b),0===s&&(T=T-a/2-b),.001>Math.abs(T)&&(T=0),r.roundLengths&&(T=Math.floor(T)),I%r.slidesPerGroup==0&&p.push(T),f.push(T)):(r.roundLengths&&(T=Math.floor(T)),(I-Math.min(t.params.slidesPerGroupSkip,I))%t.params.slidesPerGroup==0&&p.push(T),f.push(T),T=T+e+b),t.virtualSize+=e+b,S=e,I+=1}// eslint-disable-line
}// Remove last grid elements depending on width
if(t.virtualSize=Math.max(t.virtualSize,a)+v,o&&l&&("slide"===r.effect||"coverflow"===r.effect)&&(s.style.width=`${t.virtualSize+b}px`),r.setWrapperSize&&(s.style[t.getDirectionLabel("width")]=`${t.virtualSize+b}px`),E&&t.grid.updateWrapperSize(e,p),!r.centeredSlides){let e=[];for(let i=0;i<p.length;i+=1){let s=p[i];r.roundLengths&&(s=Math.floor(s)),p[i]<=t.virtualSize-a&&e.push(s)}p=e,Math.floor(t.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(t.virtualSize-a)}if(d&&r.loop){let e=m[0]+b;if(r.slidesPerGroup>1){let i=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/r.slidesPerGroup),s=e*r.slidesPerGroup;for(let e=0;e<i;e+=1)p.push(p[p.length-1]+s)}for(let i=0;i<t.virtual.slidesBefore+t.virtual.slidesAfter;i+=1)1===r.slidesPerGroup&&p.push(p[p.length-1]+e),f.push(f[f.length-1]+e),t.virtualSize+=e}if(0===p.length&&(p=[0]),0!==b){let e=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");u.filter((e,t)=>!r.cssMode||!!r.loop||t!==u.length-1).forEach(t=>{t.style[e]=`${b}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;m.forEach(t=>{e+=t+(b||0)}),e-=b;let t=e-a;p=p.map(e=>e<=0?-g:e>t?t+v:e)}if(r.centerInsufficientSlides){let e=0;if(m.forEach(t=>{e+=t+(b||0)}),(e-=b)<a){let t=(a-e)/2;p.forEach((e,i)=>{p[i]=e-t}),f.forEach((e,i)=>{f[i]=e+t})}}if(Object.assign(t,{slides:u,snapGrid:p,slidesGrid:f,slidesSizesGrid:m}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){O(s,"--swiper-centered-offset-before",`${-p[0]}px`),O(s,"--swiper-centered-offset-after",`${t.size/2-m[m.length-1]/2}px`);let e=-t.snapGrid[0],i=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(t=>t+e),t.slidesGrid=t.slidesGrid.map(e=>e+i)}if(h!==c&&t.emit("slidesLengthChange"),p.length!==w&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),f.length!==y&&t.emit("slidesGridLengthChange"),r.watchSlidesProgress&&t.updateSlidesOffset(),!d&&!r.cssMode&&("slide"===r.effect||"fade"===r.effect)){let e=`${r.containerModifierClass}backface-hidden`,i=t.el.classList.contains(e);h<=r.maxBackfaceHiddenSlides?i||t.el.classList.add(e):i&&t.el.classList.remove(e)}},updateAutoHeight:function(e){let t;let i=this,r=[],s=i.virtual&&i.params.virtual.enabled,n=0;"number"==typeof e?i.setTransition(e):!0===e&&i.setTransition(i.params.speed);let a=e=>s?i.slides[i.getSlideIndexByData(e)]:i.slides[e];// Find slides currently in view
if("auto"!==i.params.slidesPerView&&i.params.slidesPerView>1){if(i.params.centeredSlides)(i.visibleSlides||[]).forEach(e=>{r.push(e)});else for(t=0;t<Math.ceil(i.params.slidesPerView);t+=1){let e=i.activeIndex+t;if(e>i.slides.length&&!s)break;r.push(a(e))}}else r.push(a(i.activeIndex));// Find new height from highest slide in view
for(t=0;t<r.length;t+=1)if(void 0!==r[t]){let e=r[t].offsetHeight;n=e>n?e:n}// Update Height
(n||0===n)&&(i.wrapperEl.style.height=`${n}px`)},updateSlidesOffset:function(){let e=this.slides,t=this.isElement?this.isHorizontal()?this.wrapperEl.offsetLeft:this.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(this.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-this.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);let t=this.params,{slides:i,rtlTranslate:r,snapGrid:s}=this;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();let n=-e;r&&(n=e),// Visible Slides
i.forEach(e=>{e.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),this.visibleSlidesIndexes=[],this.visibleSlides=[];let a=t.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*this.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<i.length;e+=1){let o=i[e],l=o.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(l-=i[0].swiperSlideOffset);let d=(n+(t.centeredSlides?this.minTranslate():0)-l)/(o.swiperSlideSize+a),c=(n-s[0]+(t.centeredSlides?this.minTranslate():0)-l)/(o.swiperSlideSize+a),u=-(n-l),h=u+this.slidesSizesGrid[e],p=u>=0&&u<=this.size-this.slidesSizesGrid[e],f=u>=0&&u<this.size-1||h>1&&h<=this.size||u<=0&&h>=this.size;f&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(e),i[e].classList.add(t.slideVisibleClass)),p&&i[e].classList.add(t.slideFullyVisibleClass),o.progress=r?-d:d,o.originalProgress=r?-c:c}},updateProgress:function(e){if(void 0===e){let t=this.rtlTranslate?-1:1;// eslint-disable-next-line
e=this&&this.translate&&this.translate*t||0}let t=this.params,i=this.maxTranslate()-this.minTranslate(),{progress:r,isBeginning:s,isEnd:n,progressLoop:a}=this,o=s,l=n;if(0===i)r=0,s=!0,n=!0;else{r=(e-this.minTranslate())/i;let t=1>Math.abs(e-this.minTranslate()),a=1>Math.abs(e-this.maxTranslate());s=t||r<=0,n=a||r>=1,t&&(r=0),a&&(r=1)}if(t.loop){let t=this.getSlideIndexByData(0),i=this.getSlideIndexByData(this.slides.length-1),r=this.slidesGrid[t],s=this.slidesGrid[i],n=this.slidesGrid[this.slidesGrid.length-1],o=Math.abs(e);(a=o>=r?(o-r)/n:(o+n-s)/n)>1&&(a-=1)}Object.assign(this,{progress:r,progressLoop:a,isBeginning:s,isEnd:n}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&this.updateSlidesProgress(e),s&&!o&&this.emit("reachBeginning toEdge"),n&&!l&&this.emit("reachEnd toEdge"),(o&&!s||l&&!n)&&this.emit("fromEdge"),this.emit("progress",r)},updateSlidesClasses:function(){let e,t,i;let{slides:r,params:s,slidesEl:n,activeIndex:a}=this,o=this.virtual&&s.virtual.enabled,l=this.grid&&s.grid&&s.grid.rows>1,d=e=>L(n,`.${s.slideClass}${e}, swiper-slide${e}`)[0];if(r.forEach(e=>{e.classList.remove(s.slideActiveClass,s.slideNextClass,s.slidePrevClass)}),o){if(s.loop){let t=a-this.virtual.slidesBefore;t<0&&(t=this.virtual.slides.length+t),t>=this.virtual.slides.length&&(t-=this.virtual.slides.length),e=d(`[data-swiper-slide-index="${t}"]`)}else e=d(`[data-swiper-slide-index="${a}"]`)}else l?(e=r.filter(e=>e.column===a)[0],i=r.filter(e=>e.column===a+1)[0],t=r.filter(e=>e.column===a-1)[0]):e=r[a];e&&(// Active classes
e.classList.add(s.slideActiveClass),l?i&&i.classList.add(s.slideNextClass):(// Next Slide
i=function(e,t){let i=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;// eslint-disable-line
t?r.matches(t)&&i.push(r):i.push(r),e=r}return i}(e,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!i&&(i=r[0]),i&&i.classList.add(s.slideNextClass),// Prev Slide
t=function(e,t){let i=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;// eslint-disable-line
t?r.matches(t)&&i.push(r):i.push(r),e=r}return i}(e,`.${s.slideClass}, swiper-slide`)[0],s.loop),t&&t.classList.add(s.slidePrevClass)),this.emitSlidesClasses()},updateActiveIndex:function(e){let t,i;let r=this,s=r.rtlTranslate?r.translate:-r.translate,{snapGrid:n,params:a,activeIndex:o,realIndex:l,snapIndex:d}=r,c=e,u=e=>{let t=e-r.virtual.slidesBefore;return t<0&&(t=r.virtual.slides.length+t),t>=r.virtual.slides.length&&(t-=r.virtual.slides.length),t};if(void 0===c&&(c=function(e){let t;let{slidesGrid:i,params:r}=e,s=e.rtlTranslate?e.translate:-e.translate;for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?s>=i[e]&&s<i[e+1]-(i[e+1]-i[e])/2?t=e:s>=i[e]&&s<i[e+1]&&(t=e+1):s>=i[e]&&(t=e);return r.normalizeSlideIndex&&(t<0||void 0===t)&&(t=0),t}(r)),n.indexOf(s)>=0)t=n.indexOf(s);else{let e=Math.min(a.slidesPerGroupSkip,c);t=e+Math.floor((c-e)/a.slidesPerGroup)}if(t>=n.length&&(t=n.length-1),c===o&&!r.params.loop){t!==d&&(r.snapIndex=t,r.emit("snapIndexChange"));return}if(c===o&&r.params.loop&&r.virtual&&r.params.virtual.enabled){r.realIndex=u(c);return}let h=r.grid&&a.grid&&a.grid.rows>1;if(r.virtual&&a.virtual.enabled&&a.loop)i=u(c);else if(h){let e=r.slides.filter(e=>e.column===c)[0],t=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(t)&&(t=Math.max(r.slides.indexOf(e),0)),i=Math.floor(t/a.grid.rows)}else if(r.slides[c]){let e=r.slides[c].getAttribute("data-swiper-slide-index");i=e?parseInt(e,10):c}else i=c;Object.assign(r,{previousSnapIndex:d,snapIndex:t,previousRealIndex:l,realIndex:i,previousIndex:o,activeIndex:c}),r.initialized&&j(r),r.emit("activeIndexChange"),r.emit("snapIndexChange"),(r.initialized||r.params.runCallbacksOnInit)&&(l!==i&&r.emit("realIndexChange"),r.emit("slideChange"))},updateClickedSlide:function(e,t){let i;let r=this.params,s=e.closest(`.${r.slideClass}, swiper-slide`);!s&&this.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!s&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(s=e)});let n=!1;if(s){for(let e=0;e<this.slides.length;e+=1)if(this.slides[e]===s){n=!0,i=e;break}}if(s&&n)this.clickedSlide=s,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):this.clickedIndex=i;else{this.clickedSlide=void 0,this.clickedIndex=void 0;return}r.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");let{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=this;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let n=function(e,t){let i,r,s;void 0===t&&(t="x");let n=E(),a=function(e){let t;let i=E();return i.getComputedStyle&&(t=i.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return n.WebKitCSSMatrix?((r=a.transform||a.webkitTransform).split(",").length>6&&(r=r.split(", ").map(e=>e.replace(",",".")).join(", ")),// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
s=new n.WebKitCSSMatrix("none"===r?"":r)):i=(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(r=n.WebKitCSSMatrix?s.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(r=n.WebKitCSSMatrix?s.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),r||0}(s,e);return n+=this.cssOverflowAdjustment(),i&&(n=-n),n||0},setTranslate:function(e,t){let{rtlTranslate:i,params:r,wrapperEl:s,progress:n}=this,a=0,o=0;this.isHorizontal()?a=i?-e:e:o=e,r.roundLengths&&(a=Math.floor(a),o=Math.floor(o)),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?a:o,r.cssMode?s[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-a:-o:r.virtualTranslate||(this.isHorizontal()?a-=this.cssOverflowAdjustment():o-=this.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${o}px, 0px)`);let l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,r,s){let n;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===r&&(r=!0);let a=this,{params:o,wrapperEl:l}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let d=a.minTranslate(),c=a.maxTranslate();if(n=r&&e>d?d:r&&e<c?c:e,// Update progress
a.updateProgress(n),o.cssMode){let e=a.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-n;else{if(!a.support.smoothScroll)return A({swiper:a,targetPosition:-n,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-n,behavior:"smooth"})}return!0}return 0===t?(a.setTransition(0),a.setTranslate(n),i&&(a.emit("beforeTransitionStart",t,s),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(n),i&&(a.emit("beforeTransitionStart",t,s),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,i&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){this.params.cssMode||(this.wrapperEl.style.transitionDuration=`${e}ms`,this.wrapperEl.style.transitionDelay=0===e?"0ms":""),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);let{params:i}=this;i.cssMode||(i.autoHeight&&this.updateAutoHeight(),F({swiper:this,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);let{params:i}=this;this.animating=!1,i.cssMode||(this.setTransition(0),F({swiper:this,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e,t,i,r,s){let n;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),"string"==typeof e&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:l,snapGrid:d,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:p,wrapperEl:f,enabled:m}=a;if(a.animating&&l.preventInteractionOnTransition||!m&&!r&&!s)return!1;let g=Math.min(a.params.slidesPerGroupSkip,o),v=g+Math.floor((o-g)/a.params.slidesPerGroup);v>=d.length&&(v=d.length-1);let w=-d[v];// Normalize slideIndex
if(l.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){let t=-Math.floor(100*w),i=Math.floor(100*c[e]),r=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=i&&t<r-(r-i)/2?o=e:t>=i&&t<r&&(o=e+1):t>=i&&(o=e)}// Directions locks
if(a.initialized&&o!==h&&(!a.allowSlideNext&&(p?w>a.translate&&w>a.minTranslate():w<a.translate&&w<a.minTranslate())||!a.allowSlidePrev&&w>a.translate&&w>a.maxTranslate()&&(h||0)!==o))return!1;// Update Index
if(o!==(u||0)&&i&&a.emit("beforeSlideChangeStart"),// Update progress
a.updateProgress(w),n=o>h?"next":o<h?"prev":"reset",p&&-w===a.translate||!p&&w===a.translate)return a.updateActiveIndex(o),l.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==l.effect&&a.setTranslate(w),"reset"!==n&&(a.transitionStart(i,n),a.transitionEnd(i,n)),!1;if(l.cssMode){let e=a.isHorizontal(),i=p?w:-w;if(0===t){let t=a.virtual&&a.params.virtual.enabled;t&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),t&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[e?"scrollLeft":"scrollTop"]=i})):f[e?"scrollLeft":"scrollTop"]=i,t&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1})}else{if(!a.support.smoothScroll)return A({swiper:a,targetPosition:i,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:i,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(w),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(i,n),0===t?a.transitionEnd(i,n):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(i,n))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,i,r){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),"string"==typeof e){let t=parseInt(e,10);e=t}let s=this,n=s.grid&&s.params.grid&&s.params.grid.rows>1,a=e;if(s.params.loop){if(s.virtual&&s.params.virtual.enabled)a+=s.virtual.slidesBefore;else{let e;if(n){let t=a*s.params.grid.rows;e=s.slides.filter(e=>1*e.getAttribute("data-swiper-slide-index")===t)[0].column}else e=s.getSlideIndexByData(a);let t=n?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:i}=s.params,r=s.params.slidesPerView;"auto"===r?r=s.slidesPerViewDynamic():(r=Math.ceil(parseFloat(s.params.slidesPerView,10)),i&&r%2==0&&(r+=1));let o=t-e<r;if(i&&(o=o||e<Math.ceil(r/2)),o){let r=i?e<s.activeIndex?"prev":"next":e-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:r,slideTo:!0,activeSlideIndex:"next"===r?e+1:e-t+1,slideRealIndex:"next"===r?s.realIndex:void 0})}if(n){let e=a*s.params.grid.rows;a=s.slides.filter(t=>1*t.getAttribute("data-swiper-slide-index")===e)[0].column}else a=s.getSlideIndexByData(a)}}return requestAnimationFrame(()=>{s.slideTo(a,t,i,r)}),s},slideNext:/* eslint no-unused-vars: "off" */function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);let r=this,{enabled:s,params:n,animating:a}=r;if(!s)return r;let o=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(o=Math.max(r.slidesPerViewDynamic("current",!0),1));let l=r.activeIndex<n.slidesPerGroupSkip?1:o,d=r.virtual&&n.virtual.enabled;if(n.loop){if(a&&!d&&n.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),// eslint-disable-next-line
r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,i)}),!0}return n.rewind&&r.isEnd?r.slideTo(0,e,t,i):r.slideTo(r.activeIndex+l,e,t,i)},slidePrev:/* eslint no-unused-vars: "off" */function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);let r=this,{params:s,snapGrid:n,slidesGrid:a,rtlTranslate:o,enabled:l,animating:d}=r;if(!l)return r;let c=r.virtual&&s.virtual.enabled;if(s.loop){if(d&&!c&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),// eslint-disable-next-line
r._clientLeft=r.wrapperEl.clientLeft}let u=o?r.translate:-r.translate;function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=h(u),f=n.map(e=>h(e)),m=n[f.indexOf(p)-1];if(void 0===m&&s.cssMode){let e;n.forEach((t,i)=>{p>=t&&(e=i)}),void 0!==e&&(m=n[e>0?e-1:e])}let g=0;if(void 0!==m&&((g=a.indexOf(m))<0&&(g=r.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(g=Math.max(g=g-r.slidesPerViewDynamic("previous",!0)+1,0))),s.rewind&&r.isBeginning){let s=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(s,e,t,i)}return s.loop&&0===r.activeIndex&&s.cssMode?(requestAnimationFrame(()=>{r.slideTo(g,e,t,i)}),!0):r.slideTo(g,e,t,i)},slideReset:/* eslint no-unused-vars: "off" */function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:/* eslint no-unused-vars: "off" */function(e,t,i,r){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===r&&(r=.5);let s=this.activeIndex,n=Math.min(this.params.slidesPerGroupSkip,s),a=n+Math.floor((s-n)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[a]){// The current translate is on or after the current snap index, so the choice
// is between the current index and the one after it.
let e=this.snapGrid[a],t=this.snapGrid[a+1];o-e>(t-e)*r&&(s+=this.params.slidesPerGroup)}else{// The current translate is before the current snap index, so the choice
// is between the current index and the one before it.
let e=this.snapGrid[a-1],t=this.snapGrid[a];o-e<=(t-e)*r&&(s-=this.params.slidesPerGroup)}return s=Math.min(s=Math.max(s,0),this.slidesGrid.length-1),this.slideTo(s,e,t,i)},slideToClickedSlide:function(){let e;let t=this,{params:i,slidesEl:r}=t,s="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,n=t.clickedIndex,a=t.isElement?"swiper-slide":`.${i.slideClass}`;if(i.loop){if(t.animating)return;e=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),i.centeredSlides?n<t.loopedSlides-s/2||n>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),n=t.getSlideIndex(L(r,`${a}[data-swiper-slide-index="${e}"]`)[0]),_(()=>{t.slideTo(n)})):t.slideTo(n):n>t.slides.length-s?(t.loopFix(),n=t.getSlideIndex(L(r,`${a}[data-swiper-slide-index="${e}"]`)[0]),_(()=>{t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}},loop:{loopCreate:function(e){let t=this,{params:i,slidesEl:r}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;let s=()=>{let e=L(r,`.${i.slideClass}, swiper-slide`);e.forEach((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})},n=t.grid&&i.grid&&i.grid.rows>1,a=i.slidesPerGroup*(n?i.grid.rows:1),o=t.slides.length%a!=0,l=n&&t.slides.length%i.grid.rows!=0,d=e=>{for(let r=0;r<e;r+=1){let e=t.isElement?M("swiper-slide",[i.slideBlankClass]):M("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(e)}};if(o){if(i.loopAddBlankSlides){let e=a-t.slides.length%a;d(e),t.recalcSlides(),t.updateSlides()}else x("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(l){if(i.loopAddBlankSlides){let e=i.grid.rows-t.slides.length%i.grid.rows;d(e),t.recalcSlides(),t.updateSlides()}else x("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();t.loopFix({slideRealIndex:e,direction:i.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:i=!0,direction:r,setTranslate:s,activeSlideIndex:n,byController:a,byMousewheel:o}=void 0===e?{}:e,l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");let{slides:d,allowSlidePrev:c,allowSlideNext:u,slidesEl:h,params:p}=l,{centeredSlides:f}=p;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){i&&(p.centeredSlides||0!==l.snapIndex?p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=u,l.emit("loopFix");return}let m=p.slidesPerView;"auto"===m?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(p.slidesPerView,10)),f&&m%2==0&&(m+=1));let g=p.slidesPerGroupAuto?m:p.slidesPerGroup,v=g;v%g!=0&&(v+=g-v%g),v+=p.loopAdditionalSlides,l.loopedSlides=v;let w=l.grid&&p.grid&&p.grid.rows>1;d.length<m+v?x("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&"row"===p.grid.fill&&x("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let y=[],b=[],T=l.activeIndex;void 0===n?n=l.getSlideIndex(d.filter(e=>e.classList.contains(p.slideActiveClass))[0]):T=n;let S="next"===r||!r,I="prev"===r||!r,E=0,_=0,C=w?Math.ceil(d.length/p.grid.rows):d.length,k=w?d[n].column:n,P=k+(f&&void 0===s?-m/2+.5:0);// prepend last slides before start
if(P<v){E=Math.max(v-P,g);for(let e=0;e<v-P;e+=1){let t=e-Math.floor(e/C)*C;if(w){let e=C-t-1;for(let t=d.length-1;t>=0;t-=1)d[t].column===e&&y.push(t);// slides.forEach((slide, slideIndex) => {
//   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
// });
}else y.push(C-t-1)}}else if(P+m>C-v){_=Math.max(P-(C-2*v),g);for(let e=0;e<_;e+=1){let t=e-Math.floor(e/C)*C;w?d.forEach((e,i)=>{e.column===t&&b.push(i)}):b.push(t)}}if(I&&y.forEach(e=>{d[e].swiperLoopMoveDOM=!0,h.prepend(d[e]),d[e].swiperLoopMoveDOM=!1}),S&&b.forEach(e=>{d[e].swiperLoopMoveDOM=!0,h.append(d[e]),d[e].swiperLoopMoveDOM=!1}),l.recalcSlides(),"auto"===p.slidesPerView?l.updateSlides():w&&(y.length>0&&I||b.length>0&&S)&&l.slides.forEach((e,t)=>{l.grid.updateSlide(t,e,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),i){if(y.length>0&&I){if(void 0===t){let e=l.slidesGrid[T],t=l.slidesGrid[T+E],i=t-e;o?l.setTranslate(l.translate-i):(l.slideTo(T+E,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-i,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-i))}else if(s){let e=w?y.length/p.grid.rows:y.length;l.slideTo(l.activeIndex+e,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(b.length>0&&S){if(void 0===t){let e=l.slidesGrid[T],t=l.slidesGrid[T-_],i=t-e;o?l.setTranslate(l.translate-i):(l.slideTo(T-_,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-i,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-i))}else{let e=w?b.length/p.grid.rows:b.length;l.slideTo(l.activeIndex-e,0,!1,!0)}}}if(l.allowSlidePrev=c,l.allowSlideNext=u,l.controller&&l.controller.control&&!a){let e={slideRealIndex:t,direction:r,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===p.slidesPerView&&i})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...e,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView&&i})}l.emit("loopFix")},loopDestroy:function(){let{params:e,slidesEl:t}=this;if(!e.loop||this.virtual&&this.params.virtual.enabled)return;this.recalcSlides();let i=[];this.slides.forEach(e=>{let t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e}),this.slides.forEach(e=>{e.removeAttribute("data-swiper-slide-index")}),i.forEach(e=>{t.append(e)}),this.recalcSlides(),this.slideTo(this.realIndex,0)}},grabCursor:{setGrabCursor:function(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let i="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})},unsetGrabCursor:function(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}},events:{attachEvents:function(){let{params:e}=this;this.onTouchStart=H.bind(this),this.onTouchMove=$.bind(this),this.onTouchEnd=G.bind(this),this.onDocumentTouchStart=X.bind(this),e.cssMode&&(this.onScroll=K.bind(this)),this.onClick=q.bind(this),this.onLoad=Y.bind(this),J(this,"on")},detachEvents:function(){J(this,"off")}},breakpoints:{setBreakpoint:function(){let e=this,{realIndex:t,initialized:i,params:r,el:s}=e,n=r.breakpoints;if(!n||n&&0===Object.keys(n).length)return;// Get breakpoint for window width and update parameters
let a=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;let o=a in n?n[a]:void 0,l=o||e.originalParams,d=Q(e,r),c=Q(e,l),u=r.enabled;d&&!c?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(s.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===r.grid.fill)&&s.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),// Toggle navigation, pagination, scrollbar
["navigation","pagination","scrollbar"].forEach(t=>{if(void 0===l[t])return;let i=r[t]&&r[t].enabled,s=l[t]&&l[t].enabled;i&&!s&&e[t].disable(),!i&&s&&e[t].enable()});let h=l.direction&&l.direction!==r.direction,p=r.loop&&(l.slidesPerView!==r.slidesPerView||h),f=r.loop;h&&i&&e.changeDirection(),P(e.params,l);let m=e.params.enabled,g=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!m?e.disable():!u&&m&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),i&&(p?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!f&&g?(e.loopCreate(t),e.updateSlides()):f&&!g&&e.loopDestroy()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,i){if(void 0===t&&(t="window"),!e||"container"===t&&!i)return;let r=!1,s=E(),n="window"===t?s.innerHeight:i.clientHeight,a=Object.keys(e).map(e=>{if("string"==typeof e&&0===e.indexOf("@")){let t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}});a.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<a.length;e+=1){let{point:n,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(r=n):o<=i.clientWidth&&(r=n)}return r||"max"}},checkOverflow:{checkOverflow:function(){let{isLocked:e,params:t}=this,{slidesOffsetBefore:i}=t;if(i){let e=this.slides.length-1,t=this.slidesGrid[e]+this.slidesSizesGrid[e]+2*i;this.isLocked=this.size>t}else this.isLocked=1===this.snapGrid.length;!0===t.allowSlideNext&&(this.allowSlideNext=!this.isLocked),!0===t.allowSlidePrev&&(this.allowSlidePrev=!this.isLocked),e&&e!==this.isLocked&&(this.isEnd=!1),e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock")}},classes:{addClasses:function(){let{classNames:e,params:t,rtl:i,el:r,device:s}=this,n=function(e,t){let i=[];return e.forEach(e=>{"object"==typeof e?Object.keys(e).forEach(r=>{e[r]&&i.push(t+r)}):"string"==typeof e&&i.push(t+e)}),i}(["initialized",t.direction,{"free-mode":this.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&"column"===t.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...n),r.classList.add(...e),this.emitContainerClasses()},removeClasses:function(){let{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},et={};class ei{constructor(){let e,r;for(var s,n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?r=a[0]:[e,r]=a,r||(r={}),r=P({},r),e&&!r.el&&(r.el=e);let l=S();if(r.el&&"string"==typeof r.el&&l.querySelectorAll(r.el).length>1){let e=[];// eslint-disable-next-line no-constructor-return
return l.querySelectorAll(r.el).forEach(t=>{let i=P({},r,{el:t});e.push(new ei(i))}),e}// Swiper Instance
let d=this;d.__swiper__=!0,d.support=V(),d.device=(s={userAgent:r.userAgent},t||(t=function(e){let{userAgent:t}=void 0===e?{}:e,i=V(),r=E(),s=r.navigator.platform,n=t||r.navigator.userAgent,a={ios:!1,android:!1},o=r.screen.width,l=r.screen.height,d=n.match(/(Android);?[\s\/]+([\d.]+)?/),c=n.match(/(iPad).*OS\s([\d_]+)/),u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="MacIntel"===s;// Export object
return!c&&p&&i.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${l}`)>=0&&((c=n.match(/(Version)\/([\d.]+)/))||(c=[0,1,"13_0_0"]),p=!1),d&&"Win32"!==s&&(a.os="android",a.android=!0),(c||h||u)&&(a.os="ios",a.ios=!0),a}(s)),t),d.browser=(i||(i=function(){let e=E(),t=!1;function i(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&0>t.indexOf("chrome")&&0>t.indexOf("android")}if(i()){let i=String(e.navigator.userAgent);if(i.includes("Version/")){let[e,r]=i.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e));t=e<16||16===e&&r<2}}return{isSafari:t||i(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),i),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],r.modules&&Array.isArray(r.modules)&&d.modules.push(...r.modules);let c={};d.modules.forEach(e=>{var t;e({params:r,swiper:d,extendParams:(t=r,function(e){void 0===e&&(e={});let i=Object.keys(e)[0],r=e[i];if("object"!=typeof r||null===r||(!0===t[i]&&(t[i]={enabled:!0}),"navigation"===i&&t[i]&&t[i].enabled&&!t[i].prevEl&&!t[i].nextEl&&(t[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&t[i]&&t[i].enabled&&!t[i].el&&(t[i].auto=!0),!(i in t&&"enabled"in r))){P(c,e);return}"object"!=typeof t[i]||"enabled"in t[i]||(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),P(c,e)}),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});// Extend defaults with modules params
let u=P({},Z,c);// Return app instance
// eslint-disable-next-line no-constructor-return
return(// Extend defaults with passed params
d.params=P({},u,et,r),d.originalParams=P({},d.params),d.passedParams=P({},r),d.params&&d.params.on&&Object.keys(d.params.on).forEach(e=>{d.on(e,d.params.on[e])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),// Extend Swiper
Object.assign(d,{enabled:d.params.enabled,el:e,// Classes
classNames:[],// Slides
slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],// isDirection
isHorizontal:()=>"horizontal"===d.params.direction,isVertical:()=>"vertical"===d.params.direction,// Indexes
activeIndex:0,realIndex:0,//
isBeginning:!0,isEnd:!1,// Props
translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){// Returns 0 unless `translate` is > 2**23
// Should be subtracted from css values to prevent overflow
return 8388608*Math.trunc(this.translate/8388608)},// Locks
allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,// Touch Events
touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,// Form elements to match
focusableElements:d.params.focusableElements,// Last click time
lastClickTime:0,clickTimeout:void 0,// Velocities
velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},// Clicks
allowClick:!0,// Touches
allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},// Images
imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d)}getDirectionLabel(e){return this.isHorizontal()?e:({width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"})[e]}getSlideIndex(e){let{slidesEl:t,params:i}=this,r=L(t,`.${i.slideClass}, swiper-slide`),s=N(r[0]);return N(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>1*t.getAttribute("data-swiper-slide-index")===e)[0])}recalcSlides(){let{slidesEl:e,params:t}=this;this.slides=L(e,`.${t.slideClass}, swiper-slide`)}enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"))}setProgress(e,t){e=Math.min(Math.max(e,0),1);let i=this.minTranslate(),r=this.maxTranslate(),s=(r-i)*e+i;this.translateTo(s,void 0===t?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return t.destroyed?"":e.className.split(" ").filter(e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(i=>{let r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);let{params:i,slides:r,slidesGrid:s,slidesSizesGrid:n,size:a,activeIndex:o}=this,l=1;if("number"==typeof i.slidesPerView)return i.slidesPerView;if(i.centeredSlides){let e,t=r[o]?r[o].swiperSlideSize:0;for(let i=o+1;i<r.length;i+=1)r[i]&&!e&&(t+=r[i].swiperSlideSize,l+=1,t>a&&(e=!0));for(let i=o-1;i>=0;i-=1)r[i]&&!e&&(t+=r[i].swiperSlideSize,l+=1,t>a&&(e=!0))}else // eslint-disable-next-line
if("current"===e)for(let e=o+1;e<r.length;e+=1){let i=t?s[e]+n[e]-s[o]<a:s[e]-s[o]<a;i&&(l+=1)}else for(let e=o-1;e>=0;e-=1){let t=s[o]-s[e]<a;t&&(l+=1)}return l}update(){let e;let t=this;if(!t||t.destroyed)return;let{snapGrid:i,params:r}=t;function s(){let e=t.rtlTranslate?-1*t.translate:t.translate,i=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}if(r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(e=>{e.complete&&U(t,e)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),r.freeMode&&r.freeMode.enabled&&!r.cssMode)s(),r.autoHeight&&t.updateAutoHeight();else{if(("auto"===r.slidesPerView||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){let i=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;e=t.slideTo(i.length-1,0,!1,!0)}else e=t.slideTo(t.activeIndex,0,!1,!0);e||s()}r.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);let i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.el.classList.remove(`${this.params.containerModifierClass}${i}`),this.el.classList.add(`${this.params.containerModifierClass}${e}`),this.emitContainerClasses(),this.params.direction=e,this.slides.forEach(t=>{"vertical"===e?t.style.width="":t.style.height=""}),this.emit("changeDirection"),t&&this.update()),this}changeLanguageDirection(e){(!this.rtl||"rtl"!==e)&&(this.rtl||"ltr"!==e)&&(this.rtl="rtl"===e,this.rtlTranslate="horizontal"===this.params.direction&&this.rtl,this.rtl?(this.el.classList.add(`${this.params.containerModifierClass}rtl`),this.el.dir="rtl"):(this.el.classList.remove(`${this.params.containerModifierClass}rtl`),this.el.dir="ltr"),this.update())}mount(e){let t=this;if(t.mounted)return!0;// Find el
let i=e||t.params.el;if("string"==typeof i&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&"SWIPER-CONTAINER"===i.parentNode.host.nodeName&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,s=(()=>{if(i&&i.shadowRoot&&i.shadowRoot.querySelector){let e=i.shadowRoot.querySelector(r());// Children needs to return slot items
return e}return L(i,r())[0]})();return!s&&t.params.createElements&&(s=M("div",t.params.wrapperClass),i.append(s),L(i,`.${t.params.slideClass}`).forEach(e=>{s.append(e)})),Object.assign(t,{el:i,wrapperEl:s,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:s,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,// RTL
rtl:"rtl"===i.dir.toLowerCase()||"rtl"===R(i,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===i.dir.toLowerCase()||"rtl"===R(i,"direction")),wrongRTL:"-webkit-box"===R(s,"display")}),!0}init(e){let t=this;if(t.initialized)return t;let i=t.mount(e);if(!1===i)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),// Add Classes
t.addClasses(),// Update size
t.updateSize(),// Update slides
t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),// Attach events
t.attachEvents();let r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(e=>{e.complete?U(t,e):e.addEventListener("load",e=>{U(t,e.target)})}),j(t),// Init Flag
t.initialized=!0,j(t),// Emit
t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);let i=this,{params:r,el:s,wrapperEl:n,slides:a}=i;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),// Init Flag
i.initialized=!1,// Detach events
i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s.removeAttribute("style"),n.removeAttribute("style"),a&&a.length&&a.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),// Detach emitter events
Object.keys(i.eventsListeners).forEach(e=>{i.off(e)}),!1!==e&&(i.el.swiper=null,function(e){Object.keys(e).forEach(t=>{try{e[t]=null}catch(e){// no getter for object
}try{delete e[t]}catch(e){// something got wrong
}})}(i)),i.destroyed=!0),null}static extendDefaults(e){P(et,e)}static get extendedDefaults(){return et}static get defaults(){return Z}static installModule(e){ei.prototype.__modules__||(ei.prototype.__modules__=[]);let t=ei.prototype.__modules__;"function"==typeof e&&0>t.indexOf(e)&&t.push(e)}static use(e){return Array.isArray(e)?e.forEach(e=>ei.installModule(e)):ei.installModule(e),ei}}Object.keys(ee).forEach(e=>{Object.keys(ee[e]).forEach(t=>{ei.prototype[t]=ee[e][t]})}),ei.use([function(e){let{swiper:t,on:i,emit:r}=e,s=E(),n=null,a=null,o=()=>{t&&!t.destroyed&&t.initialized&&(r("beforeResize"),r("resize"))},l=()=>{t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver(e=>{a=s.requestAnimationFrame(()=>{let{width:i,height:r}=t,s=i,n=r;e.forEach(e=>{let{contentBoxSize:i,contentRect:r,target:a}=e;a&&a!==t.el||(s=r?r.width:(i[0]||i).inlineSize,n=r?r.height:(i[0]||i).blockSize)}),(s!==i||n!==r)&&o()})})).observe(t.el)},d=()=>{a&&s.cancelAnimationFrame(a),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null)},c=()=>{t&&!t.destroyed&&t.initialized&&r("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&void 0!==s.ResizeObserver){l();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),i("destroy",()=>{d(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})},function(e){let{swiper:t,extendParams:i,on:r,emit:s}=e,n=[],a=E(),o=function(e,i){void 0===i&&(i={});let r=a.MutationObserver||a.WebkitMutationObserver,o=new r(e=>{// The observerUpdate event should only be triggered
// once despite the number of mutations.  Additional
// triggers are redundant and are very costly
if(t.__preventObserver__)return;if(1===e.length){s("observerUpdate",e[0]);return}let i=function(){s("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(i):a.setTimeout(i,0)});o.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),n.push(o)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",()=>{if(t.params.observer){if(t.params.observeParents){let e=function(e,t){let i=[],r=e.parentElement;// eslint-disable-line
for(;r;)t?r.matches(t)&&i.push(r):i.push(r),r=r.parentElement;return i}(t.hostEl);for(let t=0;t<e.length;t+=1)o(e[t])}// Observe container
o(t.hostEl,{childList:t.params.observeSlideChildren}),// Observe wrapper
o(t.wrapperEl,{attributes:!1})}}),r("destroy",()=>{n.forEach(e=>{e.disconnect()}),n.splice(0,n.length)})}]);const er=document.querySelector(".support__list"),es=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/"},{title:"RAZOM",url:"https://www.razomforukraine.org/"},{title:"ACTION AGAINST HUNGER",url:"https://www.actionagainsthunger.org/location/europe/ukraine/"},{title:"Charity Foundation SERGIY PRYTULA",url:"https://prytulafoundation.org/en"},{title:"MEDECINS SANS FRONTIERES",url:"https://www.msf.org/ukraine"},{title:"World Vision",url:"https://www.wvi.org/emergencies/ukraine"},{title:"UNITED24",url:"https://u24.gov.ua/uk"}].map(function({url:e,title:t,img:i},r){let s=(r+1).toString().padStart(2,"0");return`
  <li class="swiper-slide">
        <div class="support__item">
        <span class="support__index">${s}</span>
        <a class="support__link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">
            <img
                srcset="${i}" 1x
                src="${i}" type="png" alt="${t}">
        </a>
    </li>`}).join("");er.insertAdjacentHTML("beforeend",es),new ei(".swiper",{direction:"vertical",slidesPerView:6,rewind:!0,spaceBetween:20,effect:"slide",modules:[function(e){let{swiper:t,extendParams:i,on:r,emit:s}=e;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};let n=e=>(Array.isArray(e)?e:[e]).filter(e=>!!e);function a(e){let i;return e&&"string"==typeof e&&t.isElement&&(i=t.el.querySelector(e))?i:(e&&("string"==typeof e&&(i=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&i.length>1&&1===t.el.querySelectorAll(e).length&&(i=t.el.querySelector(e))),e&&!i)?e:i}function o(e,i){let r=t.params.navigation;(e=n(e)).forEach(e=>{e&&(e.classList[i?"add":"remove"](...r.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=i),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](r.lockClass))})}function l(){// Update Navigation Buttons
let{nextEl:e,prevEl:i}=t.navigation;if(t.params.loop){o(i,!1),o(e,!1);return}o(i,t.isBeginning&&!t.params.rewind),o(e,t.isEnd&&!t.params.rewind)}function d(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),s("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),s("navigationNext"))}function u(){var e,i,r;let s=t.params.navigation;if(t.params.navigation=(e=t.originalParams.navigation,i=t.params.navigation,r={nextEl:"swiper-button-next",prevEl:"swiper-button-prev"},t.params.createElements&&Object.keys(r).forEach(s=>{if(!i[s]&&!0===i.auto){let n=L(t.el,`.${r[s]}`)[0];n||((n=M("div",r[s])).className=r[s],t.el.append(n)),i[s]=n,e[s]=n}}),i),!(s.nextEl||s.prevEl))return;let o=a(s.nextEl),l=a(s.prevEl);Object.assign(t.navigation,{nextEl:o,prevEl:l}),o=n(o),l=n(l);let u=(e,i)=>{e&&e.addEventListener("click","next"===i?c:d),!t.enabled&&e&&e.classList.add(...s.lockClass.split(" "))};o.forEach(e=>u(e,"next")),l.forEach(e=>u(e,"prev"))}function h(){let{nextEl:e,prevEl:i}=t.navigation;e=n(e),i=n(i);let r=(e,i)=>{e.removeEventListener("click","next"===i?c:d),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach(e=>r(e,"next")),i.forEach(e=>r(e,"prev"))}r("init",()=>{!1===t.params.navigation.enabled?p():(u(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{h()}),r("enable disable",()=>{let{nextEl:e,prevEl:i}=t.navigation;if(e=n(e),i=n(i),t.enabled){l();return}[...e,...i].filter(e=>!!e).forEach(e=>e.classList.add(t.params.navigation.lockClass))}),r("click",(e,i)=>{let{nextEl:r,prevEl:a}=t.navigation;r=n(r),a=n(a);let o=i.target;if(t.params.navigation.hideOnClick&&!a.includes(o)&&!r.includes(o)){let e;if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===o||t.pagination.el.contains(o)))return;r.length?e=r[0].classList.contains(t.params.navigation.hiddenClass):a.length&&(e=a[0].classList.contains(t.params.navigation.hiddenClass)),!0===e?s("navigationShow"):s("navigationHide"),[...r,...a].filter(e=>!!e).forEach(e=>e.classList.toggle(t.params.navigation.hiddenClass))}});let p=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),l()},disable:p,update:l,init:u,destroy:h})}],navigation:{nextEl:".swiper-next"}}),(()=>{let e={openModalBtns:document.querySelectorAll("[registration-data-modal-open]"),closeModalBtn:document.querySelector("[registration-data-modal-close]"),modal:document.querySelector("[registration-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach(e=>{e.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t)})(),// registerForm.addEventListener('submit', handleSubmit);
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
// const btnSubmit = document.querySelector('.signup-btn');
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
g("a7iaw");/**
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
 */var en={},ea=en={};function eo(){throw Error("setTimeout has not been defined")}function el(){throw Error("clearTimeout has not been defined")}function ed(e){if(d===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((d===eo||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return d(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return d.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return d.call(this,e,0)}}}!function(){try{d="function"==typeof setTimeout?setTimeout:eo}catch(e){d=eo}try{c="function"==typeof clearTimeout?clearTimeout:el}catch(e){c=el}}();var ec=[],eu=!1,eh=-1;function ep(){eu&&u&&(eu=!1,u.length?ec=u.concat(ec):eh=-1,ec.length&&ef())}function ef(){if(!eu){var e=ed(ep);eu=!0;for(var t=ec.length;t;){for(u=ec,ec=[];++eh<t;)u&&u[eh].run();eh=-1,t=ec.length}u=null,eu=!1,function(e){if(c===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((c===el||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
c(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return c.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return c.call(this,e)}}}(e)}}// v8 likes predictible objects
function em(e,t){this.fun=e,this.array=t}function eg(){}ea.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];ec.push(new em(e,t)),1!==ec.length||eu||ed(ef)},em.prototype.run=function(){this.fun.apply(null,this.array)},ea.title="browser",ea.browser=!0,ea.env={},ea.argv=[],ea.version="",ea.versions={},ea.on=eg,ea.addListener=eg,ea.once=eg,ea.off=eg,ea.removeListener=eg,ea.removeAllListeners=eg,ea.emit=eg,ea.prependListener=eg,ea.prependOnceListener=eg,ea.listeners=function(e){return[]},ea.binding=function(e){throw Error("process.binding is not supported")},ea.cwd=function(){return"/"},ea.chdir=function(e){throw Error("process.chdir is not supported")},ea.umask=function(){return 0};/**
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
 */const ev=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[i++]=s:(s<2048?t[i++]=s>>6|192:((64512&s)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(// Surrogate Pair
s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[i++]=s>>18|240,t[i++]=s>>12&63|128):t[i++]=s>>12|224,t[i++]=s>>6&63|128),t[i++]=63&s|128)}return t},ew=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0,r=0;for(;i<e.length;){let s=e[i++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){let n=e[i++];t[r++]=String.fromCharCode((31&s)<<6|63&n)}else if(s>239&&s<365){// Surrogate Pair
let n=e[i++],a=e[i++],o=e[i++],l=((7&s)<<18|(63&n)<<12|(63&a)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let n=e[i++],a=e[i++];t[r++]=String.fromCharCode((15&s)<<12|(63&n)<<6|63&a)}}return t.join("")},ey={/**
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
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let s=e[t],n=t+1<e.length,a=n?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,d=s>>2,c=(3&s)<<4|a>>4,u=(15&a)<<2|l>>6,h=63&l;o||(h=64,n||(u=64)),r.push(i[d],i[c],i[u],i[h])}return r.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ev(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):ew(this.decodeStringToByteArray(e,t)))},/**
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
     */decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let s=i[e.charAt(t++)],n=t<e.length,a=n?i[e.charAt(t)]:0;++t;let o=t<e.length,l=o?i[e.charAt(t)]:64;++t;let d=t<e.length,c=d?i[e.charAt(t)]:64;if(++t,null==s||null==a||null==l||null==c)throw new eb;let u=s<<2|a>>4;if(r.push(u),64!==l){let e=a<<4&240|l>>2;if(r.push(e),64!==c){let e=l<<6&192|c;r.push(e)}}}return r},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class eb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const eT=function(e){let t=ev(e);return ey.encodeByteArray(t,!0)},eS=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return eT(e).replace(/\./g,"")},eI=function(e){try{return ey.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eE=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==p)return p;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,e_=()=>{if(void 0===en||void 0===en.env)return;let e=void 0;if(e)return JSON.parse(e)},eC=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&eI(e[1]);return t&&JSON.parse(t)},ek=()=>{try{return eE()||e_()||eC()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eP=e=>{var t,i;return null===(i=null===(t=ek())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},eO=()=>{var e;return null===(e=ek())||void 0===e?void 0:e.config},eA=e=>{var t;return null===(t=ek())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class eL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
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
 */function ex(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class eM extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */i){super(t),this.code=e,this.customData=i,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,eM.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eR.prototype.create)}}class eR{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],n=s?s.replace(eN,(e,t)=>{let r=i[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${n} (${r}).`,o=new eM(r,a,i);return o}}const eN=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function eD(e,t){if(e===t)return!0;let i=Object.keys(e),r=Object.keys(t);for(let s of i){if(!r.includes(s))return!1;let i=e[s],n=t[s];if(eV(i)&&eV(n)){if(!eD(i,n))return!1}else if(i!==n)return!1}for(let e of r)if(!i.includes(e))return!1;return!0}function eV(e){return null!==e&&"object"==typeof e}/**
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
 */function eU(e){let t=[];for(let[i,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function ez(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,r]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function ej(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class eF{/**
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
     */subscribe(e,t,i){let r;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(r=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(r.next=eB),void 0===r.error&&(r.error=eB),void 0===r.complete&&(r.complete=eB);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){// nothing
}}),this.observers.push(r),s}// Unsubscribe is synchronous - we guarantee that no events are sent to
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
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eB(){// do nothing
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
 */function eH(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class e${/**
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
 */const eG="[DEFAULT]";/**
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
 */class eW{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eL;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(r)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eG})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=eG){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eG){return this.instances.has(e)}getOptions(e=eG){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(e);i===s&&t.resolve(r)}return r}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var i;let r=this.normalizeInstanceIdentifier(t),s=null!==(i=this.onInitCallbacks.get(r))&&void 0!==i?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);let n=this.instances.get(r);return n&&e(n,r),()=>{s.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let r of i)try{r(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===eG?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return i||null}normalizeInstanceIdentifier(e=eG){return this.component?this.component.multipleInstances?e:eG:e// assume multiple instances are supported before the component is provided.
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
 */class eq{constructor(e){this.name=e,this.providers=new Map}/**
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
let t=new eW(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const eK=[];(a=h||(h={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";const eY={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},eX=h.INFO,eJ={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},eQ=(e,t,...i)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),s=eJ[t];if(s)console[s](`[${r}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eZ{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=eX,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=eQ,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */eK.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?eY[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const e0=(e,t)=>t.some(t=>e instanceof t),e1=new WeakMap,e2=new WeakMap,e3=new WeakMap,e6=new WeakMap,e4=new WeakMap;let e8={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return e2.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||e3.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return e5(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function e5(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",n)},s=()=>{t(e5(e.result)),r()},n=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",n)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&e1.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
e4.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(e6.has(e))return e6.get(e);let i="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(e9(this),e),e5(e1.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return e5(t.apply(e9(this),e))}:function(e,...i){let r=t.call(e9(this),e,...i);return e3.set(r,e.sort?e.sort():[e]),e5(r)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(e2.has(e))return;let t=new Promise((t,i)=>{let r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",n),e.removeEventListener("abort",n)},s=()=>{t(),r()},n=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",n),e.addEventListener("abort",n)});// Cache it for later retrieval.
e2.set(e,t)}(t),e0(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,e8):t;return i!==e&&(e6.set(e,i),e4.set(i,e)),i}const e9=e=>e4.get(e),e7=["get","getKey","getAll","getAllKeys","count"],te=["put","add","delete","clear"],tt=new Map;function ti(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tt.get(t))return tt.get(t);let i=t.replace(/FromIndex$/,""),r=t!==i,s=te.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(s||e7.includes(i)))return;let n=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let n=this.transaction(e,s?"readwrite":"readonly"),a=n.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return r&&(a=a.index(t.shift())),(await Promise.all([a[i](...t),s&&n.done]))[0]};return tt.set(t,n),n}e8={...n=e8,get:(e,t,i)=>ti(e,t)||n.get(e,t,i),has:(e,t)=>!!ti(e,t)||n.has(e,t)};/**
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
 */class tr{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
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
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ts="@firebase/app",tn="0.9.20",ta=new eZ("@firebase/app"),to="[DEFAULT]",tl={[ts]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},td=new Map,tc=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function tu(e){let t=e.name;if(tc.has(t))return ta.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let i of(tc.set(t,e),td.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(i){ta.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function th(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}const tp=new eR("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class tf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new e$("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw tp.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
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
 */const tm="10.5.0";function tg(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:to,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw tp.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(s)});if(i||(i=eO()),!i)throw tp.create("no-options"/* AppError.NO_OPTIONS */);let n=td.get(s);if(n){// return the existing app if options and config deep equal the ones in the existing app.
if(eD(i,n.options)&&eD(r,n.config))return n;throw tp.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:s})}let a=new eq(s);for(let e of tc.values())a.addComponent(e);let o=new tf(i,r,a);return td.set(s,o),o}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function tv(e,t,i){var r;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let s=null!==(r=tl[e])&&void 0!==r?r:e;i&&(s+=`-${i}`);let n=s.match(/\s|\//),a=t.match(/\s|\//);if(n||a){let e=[`Unable to register library "${s}" with version "${t}":`];n&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),n&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ta.warn(e.join(" "));return}tu(new e$(`${s}-version`,()=>({library:s,version:t}),"VERSION"/* ComponentType.VERSION */))}const tw="firebase-heartbeat-store";let ty=null;function tb(){return ty||(ty=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:i,upgrade:r,blocking:s,terminated:n}={}){let a=indexedDB.open(e,1),o=e5(a);return r&&a.addEventListener("upgradeneeded",e=>{r(e5(a.result),e.oldVersion,e.newVersion,e5(a.transaction),e)}),i&&a.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),o.then(e=>{n&&e.addEventListener("close",()=>n()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(tw)}}).catch(e=>{throw tp.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),ty}async function tT(e){try{let t=await tb(),i=await t.transaction(tw).objectStore(tw).get(tI(e));return i}catch(e){if(e instanceof eM)ta.warn(e.message);else{let t=tp.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});ta.warn(t.message)}}}async function tS(e,t){try{let i=await tb(),r=i.transaction(tw,"readwrite"),s=r.objectStore(tw);await s.put(t,tI(e)),await r.done}catch(e){if(e instanceof eM)ta.warn(e.message);else{let t=tp.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});ta.warn(t.message)}}}function tI(e){return`${e.name}!${e.options.appId}`}class tE{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tC(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=t_();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=t_(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let i=[],r=e.slice();for(let s of e){// Look for an existing entry with the same user agent.
let e=i.find(e=>e.agent===s.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(s.date),tk(i)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
i.push({agent:s.agent,dates:[s.date]}),tk(i)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
i.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=eS(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=i,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],// Do not wait for this, to reduce latency.
this._storage.overwrite(this._heartbeatsCache)),r)}}function t_(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class tC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0,r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await tT(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return tS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return tS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function tk(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return eS(JSON.stringify({version:2,heartbeats:e})).length}function tP(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(i[r[s]]=e[r[s]]);return i}function tO(e){return void 0!==e&&void 0!==e.enterprise}tu(new e$("platform-logger",e=>new tr(e),"PRIVATE"/* ComponentType.PRIVATE */)),tu(new e$("heartbeat",e=>new tE(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
tv(ts,tn,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
tv(ts,tn,"esm2017"),// Register platform SDK identifier (no version).
tv("fire-js",""),tv("firebase","10.5.0","app"),"function"==typeof SuppressedError&&SuppressedError;class tA{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function tL(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tx=new eR("auth","Firebase",tL()),tM=new eZ("@firebase/auth");function tR(e,...t){tM.logLevel<=h.ERROR&&tM.error(`Auth (${tm}): ${e}`,...t)}/**
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
 */function tN(e,...t){throw tV(e,...t)}function tD(e,...t){return tV(e,...t)}function tV(e,...t){if("string"!=typeof e){let i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(i,...r)}return tx.create(e,...t)}function tU(e,t,...i){if(!e)throw tV(t,...i)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function tz(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw tR(t),Error(t)}/**
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
 */function tj(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tF(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */class tB{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||tz("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ex())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===tF()||"https:"===tF()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
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
 */function tH(e,t){e.emulator||tz("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class t${static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void tz("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void tz("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void tz("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tG={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},tW=new tB(3e4,6e4);function tq(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tK(e,t,i,r,s={}){return tY(e,s,async()=>{let s={},n={};r&&("GET"/* HttpMethod.GET */===t?n=r:s={body:JSON.stringify(r)});let a=eU(Object.assign({key:e.config.apiKey},n)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(o["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),t$.fetch()(tJ(e,e.config.apiHost,i,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},s))})}async function tY(e,t,i){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},tG),t);try{let t=new tQ(e),s=await Promise.race([i(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let n=await s.json();if("needConfirmation"in n)throw tZ(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,n);if(s.ok&&!("errorMessage"in n))return n;{let t=s.ok?n.errorMessage:n.error.message,[i,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===i)throw tZ(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,n);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===i)throw tZ(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,n);if("USER_DISABLED"/* ServerError.USER_DISABLED */===i)throw tZ(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,n);let o=r[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,i){let r=Object.assign(Object.assign({},tL()),{[t]:i}),s=new eR("auth","Firebase",r);return s.create(t,{appName:e.name})}(e,o,a);tN(e,o)}}catch(t){if(t instanceof eM)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
tN(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function tX(e,t,i,r,s={}){let n=await tK(e,t,i,r,s);return"mfaPendingCredential"in n&&tN(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:n}),n}function tJ(e,t,i,r){let s=`${t}${i}?${r}`;return e.config.emulator?tH(e.config,s):`${e.config.apiScheme}://${s}`}class tQ{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tD(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),tW.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tZ(e,t,i){let r={appName:e.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);let s=tD(e,t,r);return(// We know customData is defined on error because errorParams is defined
s.customData._tokenResponse=i,s)}async function t0(e,t){return tK(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,tq(e,t))}/**
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
 */async function t1(e,t){return tK(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function t2(e,t){return tK(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
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
 */function t3(e){if(e)try{// Convert to date object.
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
 */async function t6(e,t=!1){let i=eH(e),r=await i.getIdToken(t),s=t8(r);tU(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n="object"==typeof s.firebase?s.firebase:void 0,a=null==n?void 0:n.sign_in_provider;return{claims:s,token:r,authTime:t3(t4(s.auth_time)),issuedAtTime:t3(t4(s.iat)),expirationTime:t3(t4(s.exp)),signInProvider:a||null,signInSecondFactor:(null==n?void 0:n.sign_in_second_factor)||null}}function t4(e){return 1e3*Number(e)}function t8(e){let[t,i,r]=e.split(".");if(void 0===t||void 0===i||void 0===r)return tR("JWT malformed, contained fewer than 3 sections"),null;try{let e=eI(i);if(!e)return tR("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tR("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function t5(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof eM&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class t9{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
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
 */class t7{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=t3(this.lastLoginAt),this.creationTime=t3(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ie(e){var t;let i=e.auth,r=await e.getIdToken(),s=await t5(e,t2(i,{idToken:r}));tU(null==s?void 0:s.users.length,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=s.users[0];e._notifyReloadListener(n);let a=(null===(t=n.providerUserInfo)||void 0===t?void 0:t.length)?n.providerUserInfo.map(e=>{var{providerId:t}=e,i=tP(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],o=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,a),l=e.isAnonymous,d=!(e.email&&n.passwordHash)&&!(null==o?void 0:o.length),c={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new t7(n.createdAt,n.lastLoginAt),isAnonymous:!!l&&d};Object.assign(e,c)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function it(e){let t=eH(e);await ie(t),// Even though the current user hasn't changed, update
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
 */async function ii(e,t){let i=await tY(e,{},async()=>{let i=eU({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,n=tJ(e,r,"/v1/token"/* Endpoint.TOKEN */,`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",t$.fetch()(n,{method:"POST"/* HttpMethod.POST */,headers:a,body:i})});// The response comes back in snake_case. Convert to camel:
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
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){tU(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tU(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tU(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=t8(e);return tU(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tU(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tU(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(tU(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:r,expiresIn:s}=await ii(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:s}=t,n=new ir;return i&&(tU("string"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),n.refreshToken=i),r&&(tU("string"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),n.accessToken=r),s&&(tU("number"==typeof s,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),n.expirationTime=s),n}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return tz("not implemented")}}/**
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
 */function is(e,t){tU("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class ia{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=tP(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new t9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new t7(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await t5(this,this.stsTokenManager.getToken(this.auth,e));return tU(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return t6(this,e)}reload(){return it(this)}_assign(e){this!==e&&(tU(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ia(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
tU(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await t5(this,t1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,n,a,o,l,d;let c=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(n=t.photoURL)&&void 0!==n?n:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(d=t.lastLoginAt)&&void 0!==d?d:void 0,{uid:w,emailVerified:y,isAnonymous:b,providerData:T,stsTokenManager:S}=t;tU(w&&S,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let I=ir.fromJSON(this.name,S);tU("string"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),is(c,e.name),is(u,e.name),tU("boolean"==typeof y,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tU("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),is(h,e.name),is(p,e.name),is(f,e.name),is(m,e.name),is(g,e.name),is(v,e.name);let E=new ia({uid:w,auth:e,email:u,emailVerified:y,displayName:c,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:v});return T&&Array.isArray(T)&&(E.providerData=T.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,i=!1){let r=new ir;r.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let s=new ia({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return(// Updates the user info and data and resolves with a user instance.
await ie(s),s)}}/**
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
 */const io=new Map;function il(e){e instanceof Function||tz("Expected a class definition");let t=io.get(e);return t?t instanceof e||tz("Instance stored in cache mismatched with class"):(t=new e,io.set(e,t)),t}/**
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
 */class id{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function ic(e,t,i){return`firebase:${e}:${t}:${i}`}id.type="NONE";class iu{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:s}=this.auth;this.fullUserKey=ic(this.userKey,r.apiKey,s),this.fullPersistenceKey=ic("persistence"/* KeyName.PERSISTENCE_USER */,r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ia._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new iu(il(id),e,i);// Eliminate any persistences that are not available
let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),s=r[0]||il(id),n=ic(i,e.config.apiKey,e.name),a=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let i of t)try{let t=await i._get(n);if(t){let r=ia._fromJSON(e,t);// throws for unparsable blob (wrong format)
i!==s&&(a=r),s=i;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let o=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&o.length&&(s=o[0],a&&// we'll just let it bubble to surface the error.
await s._set(n,a.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(n)}catch(e){}}))),new iu(s,e,i)}}/**
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
 */function ih(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(iv(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(ip(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(iy(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(ib(t))return"Webos"/* BrowserName.WEBOS */;if(im(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||ig(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(iw(t))return"Android"/* BrowserName.ANDROID */;let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"/* BrowserName.OTHER */}function ip(e=ex()){return/firefox\//i.test(e)}function im(e=ex()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ig(e=ex()){return/crios\//i.test(e)}function iv(e=ex()){return/iemobile/i.test(e)}function iw(e=ex()){return/android/i.test(e)}function iy(e=ex()){return/blackberry/i.test(e)}function ib(e=ex()){return/webos/i.test(e)}function iT(e=ex()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function iS(e=ex()){// TODO: implement getBrowserName equivalent for OS.
return iT(e)||iw(e)||ib(e)||iy(e)||/windows phone/i.test(e)||iv(e)}/**
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
 */function iI(e,t=[]){let i;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
i=ih(ex());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
i=`${ih(ex())}-${e}`;break;default:i=e}let r=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${i}/JsCore/${tm}/${r}`}/**
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
 */class iE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let i=t=>new Promise((i,r)=>{try{let r=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    i(r)}catch(e){// Sync callback throws.
    r(e)}});// Attach the onAbort if present
i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
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
 */async function i_(e,t={}){return tK(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,tq(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class iC{constructor(e){var t,i,r,s;// Only include custom strength options defined in the response.
let n=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=n.minPasswordLength)&&void 0!==t?t:6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(r=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(s=e.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,n,a;let o={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),// Combine the status into single isValid property.
o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(i=o.meetsMaxPasswordLength)||void 0===i||i),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(s=o.containsUppercaseLetter)||void 0===s||s),o.isValid&&(o.isValid=null===(n=o.containsNumericCharacter)||void 0===n||n),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let i;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */i>="a"&&i<="z",/* containsUppercaseCharacter= */i>="A"&&i<="Z",/* containsNumericCharacter= */i>="0"&&i<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(i))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ik{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iP(this),this.idTokenSubscription=new iP(this),this.beforeStateQueue=new iE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=il(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await iu.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let i=await this.assertedPersistence.getCurrentUser(),r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,n=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!i||i===n)&&(null==a?void 0:a.user)&&(r=a.user,s=!0)}// If no user in persistence, there is no current user. Set to null.
if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=i,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(tU(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
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
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?eH(e):null;return t&&tU(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tU(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(il(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await i_(this),t=new iC(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eR("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&il(e)||this._popupRedirectResolver;tU(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await iu.create(this,[il(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let s="function"==typeof t?t:t.next.bind(t),n=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(tU(a,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
a.then(()=>{n||s(this.currentUser)}),"function"==typeof t){let s=e.addObserver(t,i,r);return()=>{n=!0,s()}}{let i=e.addObserver(t);return()=>{n=!0,i()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return tU(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=iI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=i);// If the App Check service exists, add the App Check token in the headers
let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){tM.logLevel<=h.WARN&&tM.warn(`Auth (${tm}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class iP{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let i=new eF(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return tU(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function iO(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,i)=>{var r,s;let n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{let t=tD("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(n)})}function iA(e){return`__${e}${Math.floor(1e6*Math.random())}`}class iL{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=eH(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{t0(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(r=>{if(void 0===r.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new tA(r);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function r(t,i,r){let s=window.grecaptcha;tO(s)?s.enterprise.ready(()=>{s.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,s)=>{i(this.auth).then(i=>{if(!t&&tO(window.grecaptcha))r(i,e,s);else{if("undefined"==typeof window){s(Error("RecaptchaVerifier is only supported in browser"));return}iO("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{r(i,e,s)}).catch(e=>{s(e)})}}).catch(e=>{s(e)})})}}async function ix(e,t,i,r=!1){let s;let n=new iL(e);try{s=await n.verify(i)}catch(e){s=await n.verify(i,!0)}let a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),a}/**
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
 */function iM(e,t,i){let r=eH(e);tU(r._canInitEmulator,r,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),tU(/^https?:\/\//.test(t),r,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let s=!!(null==i?void 0:i.disableWarnings),n=iR(t),{host:a,port:o}=function(e){let t=iR(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let r=i[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);// Strip out "username:password@".
if(s){let e=s[1];return{host:e,port:iN(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:iN(t)}}}(t),l=null===o?"":`:${o}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
r.config.emulator={url:`${n}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function iR(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function iN(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */class iD{/** @internal */constructor(/**
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
     */toJSON(){return tz("not implemented")}/** @internal */_getIdTokenResponse(e){return tz("not implemented")}/** @internal */_linkToIdToken(e,t){return tz("not implemented")}/** @internal */_getReauthenticationResolver(e){return tz("not implemented")}}async function iV(e,t){return tK(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
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
 */async function iU(e,t){return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,tq(e,t))}/**
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
 */async function iz(e,t){return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,tq(e,t))}async function ij(e,t){return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,tq(e,t))}/**
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
 */class iF extends iD{/** @internal */constructor(/** @internal */e,/** @internal */t,i,/** @internal */r=null){super("password"/* ProviderId.PASSWORD */,i),this._email=e,this._password=t,this._tenantId=r}/** @internal */static _fromEmailAndPassword(e,t){return new iF(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,i=null){return new iF(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,i)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return iU(e,i).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await ix(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return iU(e,t)}});{let t=await ix(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return iU(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return iz(e,{email:this._email,oobCode:this._password});default:tN(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return iV(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return ij(e,{idToken:t,email:this._email,oobCode:this._password});default:tN(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function iB(e,t){return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,tq(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class iH extends iD{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new iH(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tN("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=tP(t,["providerId","signInMethod"]);if(!i||!r)return null;let n=new iH(i,r);return n.idToken=s.idToken||void 0,n.accessToken=s.accessToken||void 0,n.secret=s.secret,n.nonce=s.nonce,n.pendingToken=s.pendingToken||null,n}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return iB(e,t)}/** @internal */_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,iB(e,i)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,iB(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=eU(t)}return e}}/**
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
 */async function i$(e,t){return tK(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,tq(e,t))}async function iG(e,t){return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tq(e,t))}async function iW(e,t){let i=await tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tq(e,t));if(i.temporaryProof)throw tZ(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,i);return i}const iq={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function iK(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tq(e,i),iq)}/**
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
 */class iY extends iD{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new iY({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new iY({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return iG(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return iW(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return iK(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return i||t||r||s?new iY({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class iX{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,i,r,s,n,a;let o=ez(ej(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,d=null!==(i=o.oobCode)&&void 0!==i?i:null,c=/**
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
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);// Validate API key, code and mode.
tU(l&&d&&c,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=c,this.code=d,this.continueUrl=null!==(s=o.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(n=o.languageCode)&&void 0!==n?n:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}/**
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
 */function(e){let t=ez(ej(e)).link,i=t?ez(ej(t)).deep_link_id:null,r=ez(ej(e)).deep_link_id,s=r?ez(ej(r)).link:null;return s||r||i||t||e}(e);try{return new iX(t)}catch(e){return null}}}/**
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
 */class iJ{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=iJ.PROVIDER_ID}/**
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
     */static credential(e,t){return iF._fromEmailAndPassword(e,t)}/**
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
     */static credentialWithLink(e,t){let i=iX.parseLink(t);return tU(i,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),iF._fromEmailAndCode(e,i.code,i.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */iJ.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */iJ.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */iJ.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
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
 */class iQ{/**
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
 */class iZ extends iQ{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
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
 */class i0 extends iZ{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
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
     */static credential(e){return iH._fromParams({providerId:i0.PROVIDER_ID,signInMethod:i0.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return i0.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return i0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return i0.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */i0.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */i0.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
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
 */class i1 extends iZ{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
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
     */static credential(e,t){return iH._fromParams({providerId:i1.PROVIDER_ID,signInMethod:i1.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return i1.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return i1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return i1.credential(t,i)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */i1.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */i1.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
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
 */class i2 extends iZ{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return iH._fromParams({providerId:i2.PROVIDER_ID,signInMethod:i2.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return i2.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return i2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return i2.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */i2.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */i2.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
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
 */class i3 extends iZ{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return iH._fromParams({providerId:i3.PROVIDER_ID,signInMethod:i3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return i3.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return i3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return i3.credential(t,i)}catch(e){return null}}}/**
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
 */async function i6(e,t){return tX(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,tq(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */i3.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */i3.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
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
 */class i4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){let s=await ia._fromIdTokenResponse(e,i,r),n=i8(i),a=new i4({user:s,providerId:n,_tokenResponse:i,operationType:t});return a}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,/* reload */!0);let r=i8(i);return new i4({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function i8(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
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
 */class i5 extends eM{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,i5.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new i5(e,t,i,r)}}function i9(e,t,i,r){let s="reauthenticate"/* OperationType.REAUTHENTICATE */===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return s.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw i5._fromErrorAndOperation(e,i,t,r);throw i})}async function i7(e,t,i=!1){let r=await t5(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return i4._forOperation(e,"link"/* OperationType.LINK */,r)}/**
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
 */async function re(e,t,i=!1){let{auth:r}=e,s="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let n=await t5(e,i9(r,s,t,e),i);tU(n.idToken,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=t8(n.idToken);tU(a,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:o}=a;return tU(e.uid===o,r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),i4._forOperation(e,s,n)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&tN(r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
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
 */async function rt(e,t,i=!1){let r="signIn"/* OperationType.SIGN_IN */,s=await i9(e,r,t),n=await i4._fromIdTokenResponse(e,r,s);return i||await e._updateCurrentUser(n.user),n}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function ri(e,t){return rt(eH(e),t)}/**
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
 */async function rr(e){let t=eH(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
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
 */async function rs(e,t,i){var r;let s;let n=eH(e),a={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(r=n._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){let e=await ix(n,a,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);s=i6(n,e)}else s=i6(n,a).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await ix(n,a,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);return i6(n,e)}throw e});let o=await s.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&rr(e),t}),l=await i4._fromIdTokenResponse(n,"signIn"/* OperationType.SIGN_IN */,o);return await n._updateCurrentUser(l.user),l}new WeakMap;const rn="__sak";/**
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
class ra{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rn,"1"),this.storage.removeItem(rn),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class ro extends ra{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
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
 */function(){let e=ex();return im(e)||iT(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=iS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let i=this.storage.getItem(t),r=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let r=this.storage.getItem(i);// Value not synchronized, synchronize manually.
if(e.newValue!==r)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let r=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},s=this.storage.getItem(i);/** Detects Internet Explorer. */(function(){let e=ex();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ro.type="LOCAL";/**
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
 */class rl extends ra{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}rl.type="SESSION";/**
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
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new rd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:i});let n=Array.from(s).map(async t=>t(e.origin,r)),a=await Promise.all(n.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:i,response:a})}/**
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
 */function rc(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}rd.receivers=[];/**
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
 */class ru{constructor(e){this.target=e,this.handlers=new Set}/**
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
     */async _send(e,t,i=50/* _TimeoutDuration.ACK */){let r,s;let n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((a,o)=>{let l=rc("",20);n.port1.start();let d=setTimeout(()=>{o(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},i);s={messageChannel:n,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(d),r=setTimeout(()=>{o(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(r),a(e.data.response);break;default:clearTimeout(d),clearTimeout(r),o(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function rh(){return window}/**
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
 */function rp(){return void 0!==rh().WorkerGlobalScope&&"function"==typeof rh().importScripts}async function rf(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
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
 */const rm="firebaseLocalStorageDb",rg="firebaseLocalStorage",rv="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class rw{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ry(e,t){return e.transaction([rg],t?"readwrite":"readonly").objectStore(rg)}function rb(){let e=indexedDB.open(rm,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rg,{keyPath:rv})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
i.objectStoreNames.contains(rg)?t(i):(// Need to close the database or else you get a `blocked` event
i.close(),await function(){let e=indexedDB.deleteDatabase(rm);return new rw(e).toPromise()}(),t(await rb()))})})}async function rT(e,t,i){let r=ry(e,!0).put({[rv]:t,value:i});return new rw(r).toPromise()}async function rS(e,t){let i=ry(e,!1).get(t),r=await new rw(i).toPromise();return void 0===r?null:r.value}function rI(e,t){let i=ry(e,!0).delete(t);return new rw(i).toPromise()}class rE{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rb()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return rp()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=rd._getInstance(rp()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await rf(),!this.activeServiceWorker)return;this.sender=new ru(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let i=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rb();return await rT(e,rn,"1"),await rI(e,rn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>rT(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rS(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=ry(e,!1).getAll();return new rw(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function r_(e,t,i){var r,s,n;let a=await i.verify();try{let o;if(tU("string"==typeof a,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),tU("recaptcha"===i.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){tU("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=await (s={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},tK(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,tq(e,s)));return i.phoneSessionInfo.sessionInfo}{tU("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;tU(i,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let s=await (n={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:a}},tK(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,tq(e,n)));return s.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await i$(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{i._reset()}}rE.type="LOCAL",iA("rcb"),new tB(3e4,6e4);/**
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
 */class rC{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=rC.PROVIDER_ID,this.auth=eH(e)}/**
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
     */verifyPhoneNumber(e,t){return r_(this.auth,e,eH(t))}/**
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
     */static credential(e,t){return iY._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rC.credentialFromTaggedObject(e)}/**
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
     */static credentialFromError(e){return rC.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?iY._fromTokenResponse(t,i):null}}/** Always set to {@link ProviderId}.PHONE. */rC.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */rC.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
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
 */class rk extends iD{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return iB(e,this._buildIdpRequest())}_linkToIdToken(e,t){return iB(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return iB(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rP(e){return rt(e.auth,new rk(e),e.bypassAuthState)}function rO(e){let{auth:t,user:i}=e;return tU(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),re(i,new rk(e),e.bypassAuthState)}async function rA(e){let{auth:t,user:i}=e;return tU(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),i7(i,new rk(e),e.bypassAuthState)}/**
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
 */class rL{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:n,type:a}=e;if(n){this.reject(n);return}let o={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return rP;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return rA;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return rO;default:tN(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||tz("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tz("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rx=new tB(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class rM extends rL{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,rM.currentPopupAction&&rM.currentPopupAction.cancel(),rM.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tU(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||tz("Popup operations only handle one event");let e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tD(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tD(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rM.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tD(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,rx.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
rM.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const rR=new Map;class rN extends rL{constructor(e,t,i=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,i),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=rR.get(this.auth._key());if(!e){try{let t=await rD(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}rR.set(this.auth._key(),e)}return this.bypassAuthState||rR.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rD(e,t){let i=ic("pendingRedirect",t.config.apiKey,t.name),r=il(e._redirectPersistence);if(!await r._isAvailable())return!1;let s=await r._get(i)==="true";return await r._remove(i),s}function rV(e,t){rR.set(e._key(),t)}async function rU(e,t,i=!1){let r=eH(e),s=t?il(t):(tU(r._popupRedirectResolver,r,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),r._popupRedirectResolver),n=new rN(r,s,i),a=await n.execute();return a&&!i&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class rz{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return rF(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!rF(e)){let r=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(tD(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rj(e))}saveEventToCache(e){this.cachedEventUids.add(rj(e)),this.lastProcessedEventTime=Date.now()}}function rj(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function rF({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function rB(e,t={}){return tK(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
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
 */const rH=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r$=/^https?/;async function rG(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await rB(e);for(let e of t)try{if(function(e){let t=tj(),{protocol:i,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&s.hostname===r}if(!r$.test(i))return!1;if(rH.test(e))// only contain the IP, no extra character.
return r===e;// Dots in pattern should be escaped.
let s=e.replace(/\./g,"\\."),n=RegExp("^(.+\\."+s+"|"+s+")$","i");return n.test(r)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
tN(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
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
 */const rW=new tB(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function rq(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=rh().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let rK=null;/**
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
 */const rY=new tB(5e3,15e3),rX={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rJ=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function rQ(e){let t=await (rK=rK||new Promise((t,i)=>{var r,s,n;// Function to run when gapi.load is ready.
function a(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
rq(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
rq(),i(tD(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:rW.get()})}if(null===(s=null===(r=rh().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else if(null===(n=rh().gapi)||void 0===n?void 0:n.load)a();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=iA("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
rh()[t]=()=>{// GApi loader should be ready.
gapi.load?a():i(tD(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},iO(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
rK=null,e)})),i=rh().gapi;return tU(i,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;tU(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let i=t.emulator?tH(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:tm},s=rJ.get(e.config.apiHost);s&&(r.eid=s);let n=e._getFrameworks();return n.length&&(r.fw=n.join(",")),`${i}?${eU(r).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rX,dontclear:!0},t=>new Promise(async(i,r)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let s=tD(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),n=rh().setTimeout(()=>{r(s)},rY.get());// Clear timer and resolve pending iframe ready promise.
    function a(){rh().clearTimeout(n),i(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(a).then(a,()=>{r(s)})}))}/**
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
 */const rZ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class r0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const r1=encodeURIComponent("fac");async function r2(e,t,i,r,s,n){tU(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),tU(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let a={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:r,v:tm,eventId:s};if(t instanceof iQ)// TODO set additionalParams from the provider as well?
for(let[i,r]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(n||{})))a[i]=r;if(t instanceof iZ){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}for(let t of(e.tenantId&&(a.tid=e.tenantId),Object.keys(a)))void 0===a[t]&&delete a[t];// Sets the App Check token to pass to the widget
let o=await e._getAppCheckToken(),l=o?`#${r1}=${encodeURIComponent(o)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?tH(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${eU(a).slice(1)}${l}`}/**
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
 */const r3="webStorageSupport",r6=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=rU,this._overrideRedirectResult=rV}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,i,r){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||tz("_initialize() not called before _openPopup()");let n=await r2(e,t,i,tj(),r);return function(e,t,i,r=500,s=600){let n=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),o="",l=Object.assign(Object.assign({},rZ),{width:r.toString(),height:s.toString(),top:n,left:a}),d=ex().toLowerCase();i&&(o=ig(d)?"_blank":i),ip(d)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=ex()){var t;return iT(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(d)&&"_self"!==o)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}(t||"",o),new r0(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let u=window.open(t||"",o,c);tU(u,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{u.focus()}catch(e){}return new r0(u)}(e,n,rc())}async _openRedirect(e,t,i,r){await this._originValidation(e);let s=await r2(e,t,i,tj(),r);return rh().location.href=s,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||tz("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await rQ(e),i=new rz(e);return t.register("authEvent",t=>{tU(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let r=i.onEvent(t.authEvent);return{status:r?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(r3,{type:r3},i=>{var r;let s=null===(r=null==i?void 0:i[0])||void 0===r?void 0:r[r3];void 0!==s&&t(!!s),tN(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rG(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return iS()||im()||iT()}};class r4{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,i);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return tz("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class r8 extends r4{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new r8(e)}/** @internal */_finalizeEnroll(e,t,i){return tK(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,tq(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return tK(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,tq(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class r5 extends r4{constructor(e,t,i){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=i}/** @internal */static _fromSecret(e,t){return new r5(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new r5(t,e)}/** @internal */async _finalizeEnroll(e,t,i){return tU(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),tK(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,tq(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){tU(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let i={verificationCode:this.otp};return tK(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,tq(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class r9{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,i,r,s,n,a){this.sessionInfo=n,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=s}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new r9(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var i;let r=!1;return(r7(e)||r7(t))&&(r=!0),r&&(r7(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),r7(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function r7(e){return void 0===e||(null==e?void 0:e.length)===0}var se="@firebase/auth",st="1.3.0";/**
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
 */class si{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tU(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const sr=eA("authIdTokenMaxAge")||300;let ss=null;const sn=e=>async t=>{let i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>sr)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let s=null==i?void 0:i.token;ss!==s&&(ss=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};o="Browser"/* ClientPlatform.BROWSER */,tu(new e$("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:n,authDomain:a}=i.options;tU(n&&!n.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:i.name});let l={apiKey:n,authDomain:a,clientPlatform:o,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:iI(o)},d=new ik(i,r,s,l);return function(e,t){let i=(null==t?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(il);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(d,t),d},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,i)=>{let r=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);r.initialize()})),tu(new e$("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=eH(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new si(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),tv(se,st,/**
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
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(o)),tv(se,st,"esm2017");const sa=tg({apiKey:"AIzaSyAjvSJvQxu47W-Oa1JrSyOVnKx1KBTL5UA",authDomain:"goit-project-js-bookshelf.firebaseapp.com",projectId:"goit-project-js-bookshelf",storageBucket:"goit-project-js-bookshelf.appspot.com",messagingSenderId:"93438368377",appId:"1:93438368377:web:063f56aa4bd4ee23e1d2a8",measurementId:"G-BRZ6Z5X8NQ"}),so=document.querySelector(".sign-up-link");document.querySelector(".sign-in-link"),document.querySelector(".sign-out-link"),document.querySelector(".registration-modal-form"),document.querySelector(".registration-backdrop");const sl=document.querySelector(".signin-btn");document.querySelector(".registration-close-btn"),[...document.querySelectorAll(".sign-up-btn")];const sd=[...document.querySelectorAll(".sign-out-btn")];document.querySelector("#user-name");const sc=document.querySelector("#user-email"),su=document.querySelector("#user-password"),sh=async()=>{let e=sc.value,t=su.value;await ri(eH(sg),iJ.credential(e,t)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&rr(sg),e})},sp=async()=>{let e=sc.value,t=su.value;try{await rs(sg,e,t)}catch(e){console.log(`There was an error: ${e}`),showLoginError(e)}},sf=async()=>{eH(sg).onAuthStateChanged(e=>{e?(console.log(e),showApp(),showLoginState(e),hideLoginError(),hideLinkError()):(showLoginForm(),lblAuthState.innerHTML="You're not logged in.")},void 0,void 0)},sm=async()=>{await eH(sg).signOut()};sl.addEventListener("click",sh),so.addEventListener("click",sp),sd.addEventListener("click",sm);const sg=/**
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
 */function(e=to){let t=td.get(e);if(!t&&e===to&&eO())return tg();if(!t)throw tp.create("no-app"/* AppError.NO_APP */,{appName:e});return t}()){let t=th(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
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
 */function(e,t){let i=th(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),r=i.getOptions();if(eD(r,null!=t?t:{}))return e;tN(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let r=i.initialize({options:t});return r}(e,{popupRedirectResolver:r6,persistence:[rE,ro,rl]}),r=eA("authTokenSyncURL");if(r){let e=sn(r);eH(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),eH(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let s=eP("auth");return s&&iM(i,`http://${s}`),i}(sa);iM(sg,"http://localhost:9099"),sf();var sv={},sw={},sy={};sy=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var sb={},sT={},sS={};sS="object"==typeof p&&p&&p.Object===Object&&p;/** Detect free variable `self`. */var sI="object"==typeof self&&self&&self.Object===Object&&self;sT=sS||sI||Function("return this")(),sb=function(){return sT.Date.now()};var sE={},s_={},sC={},sk=/\s/;sC=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&sk.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var sP=/^\s+/;s_=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,sC(e)+1).replace(sP,""):e};var sO={},sA={},sL={};sL=sT.Symbol;var sx={},sM=Object.prototype,sR=sM.hasOwnProperty,sN=sM.toString,sD=sL?sL.toStringTag:void 0;sx=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=sR.call(e,sD),i=e[sD];try{e[sD]=void 0;var r=!0}catch(e){}var s=sN.call(e);return r&&(t?e[sD]=i:delete e[sD]),s};var sV={},sU=Object.prototype.toString;sV=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return sU.call(e)};/** Built-in value references. */var sz=sL?sL.toStringTag:void 0;sA=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":sz&&sz in Object(e)?sx(e):sV(e)};var sj={};sj=/**
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
 */function(e){return null!=e&&"object"==typeof e},sO=/**
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
 */function(e){return"symbol"==typeof e||sj(e)&&"[object Symbol]"==sA(e)};/** Used as references for various `Number` constants. */var sF=0/0,sB=/^[-+]0x[0-9a-f]+$/i,sH=/^0b[01]+$/i,s$=/^0o[0-7]+$/i,sG=parseInt;sE=/**
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
 */function(e){if("number"==typeof e)return e;if(sO(e))return sF;if(sy(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=sy(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s_(e);var i=sH.test(e);return i||s$.test(e)?sG(e.slice(2),i?2:8):sB.test(e)?sF:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var sW=Math.max,sq=Math.min;sw=/**
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
 */function(e,t,i){var r,s,n,a,o,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var i=r,n=s;return r=s=void 0,d=t,a=e.apply(n,i)}function f(e){var i=e-l,r=e-d;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||i>=t||i<0||u&&r>=n}function m(){var e,i,r,s=sb();if(f(s))return g(s);// Restart the timer.
o=setTimeout(m,(e=s-l,i=s-d,r=t-e,u?sq(r,n-i):r))}function g(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(o=void 0,h&&r)?p(e):(r=s=void 0,a))}function v(){var e,i=sb(),n=f(i);if(r=arguments,s=this,l=i,n){if(void 0===o)return(// Reset any `maxWait` timer.
d=e=l,// Start the timer for the trailing edge.
o=setTimeout(m,t),c?p(e):a);if(u)return(// Handle invocations in a tight loop.
clearTimeout(o),o=setTimeout(m,t),p(l))}return void 0===o&&(o=setTimeout(m,t)),a}return t=sE(t)||0,sy(i)&&(c=!!i.leading,n=(u="maxWait"in i)?sW(sE(i.maxWait)||0,t):n,h="trailing"in i?!!i.trailing:h),v.cancel=function(){void 0!==o&&clearTimeout(o),d=0,r=l=s=o=void 0},v.flush=function(){return void 0===o?a:g(sb())},v},sv=/**
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
 */function(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw TypeError("Expected a function");return sy(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),sw(e,t,{leading:r,maxWait:t,trailing:s})};const sK=document.querySelector(".scroll-to-top"),sY=((l=sv)&&l.__esModule?l.default:l)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function i(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(sK.addEventListener("click",i),sK.classList.remove("unvisually")):(sK.classList.add("unvisually"),sK.addEventListener("click",i))}//# sourceMappingURL=index.aa8b0922.js.map
,500);window.addEventListener("scroll",sY);
//# sourceMappingURL=index.aa8b0922.js.map
