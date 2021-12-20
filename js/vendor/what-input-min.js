/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.10
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,exports){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",o=n,i=Date.now(),r="false",u=["button","input","select","textarea"],a=[],s=[16,17,18,91,93],d=[],c={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},w=!1,p={x:null,y:null},f={2:"touch",3:"touch",4:"mouse"},l=!1;try{var m=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,m)}catch(e){}var h=function(){var e=!!l&&{passive:!0};document.addEventListener("DOMContentLoaded",v),window.PointerEvent?(window.addEventListener("pointerdown",y),window.addEventListener("pointermove",E)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",y),window.addEventListener("MSPointerMove",E)):(window.addEventListener("mousedown",y),window.addEventListener("mousemove",E),"ontouchstart"in window&&(window.addEventListener("touchstart",y,e),window.addEventListener("touchend",y))),window.addEventListener(O(),E,e),window.addEventListener("keydown",y),window.addEventListener("keyup",y),window.addEventListener("focusin",L),window.addEventListener("focusout",b)},v=function(){if(r=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(e){}g("input"),g("intent")},y=function(e){var t=e.which,i=c[e.type];"pointer"===i&&(i=S(e));var r=!d.length&&-1===s.indexOf(t),a=d.length&&-1!==d.indexOf(t),w="keyboard"===i&&t&&(r||a)||"mouse"===i||"touch"===i;if(M(i)&&(w=!1),w&&n!==i&&(x("input",n=i),g("input")),w&&o!==i){var p=document.activeElement;p&&p.nodeName&&(-1===u.indexOf(p.nodeName.toLowerCase())||"button"===p.nodeName.toLowerCase()&&!C(p,"form"))&&(x("intent",o=i),g("intent"))}},g=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),k(t)},E=function(e){var t=c[e.type];"pointer"===t&&(t=S(e)),A(e),(!w&&!M(t)||w&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&o!==t&&(x("intent",o=t),g("intent"))},L=function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):b()},b=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},x=function(e,t){if(r)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},S=function(e){return"number"==typeof e.pointerType?f[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},M=function(e){var t=Date.now(),o="mouse"===e&&"touch"===n&&t-i<200;return i=t,o},O=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},k=function(e){for(var t=0,i=a.length;t<i;t++)a[t].type===e&&a[t].fn.call(void 0,"input"===e?n:o)},A=function(e){p.x!==e.screenX||p.y!==e.screenY?(w=!1,p.x=e.screenX,p.y=e.screenY):w=!0},C=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(c[O()]="mouse",h()),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){s=e},specificKeys:function(e){d=e},registerOnChange:function(e,t){a.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=a.length;t<n;t++)if(a[t].fn===e)return t}(e);(t||0===t)&&a.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])}));