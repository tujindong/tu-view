!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("loading",["vue"],t):"object"==typeof exports?exports.loading=t(require("vue")):e.loading=t(e.vue)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=712)}({0:function(e,t){e.exports=require("core-js/modules/es6.object.define-property.js")},1:function(e,t,n){"use strict";function o(e,t,n,o,i,r,l,s){var d,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),r&&(a._scopeId="data-v-"+r),l?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},a._ssrRegister=d):i&&(d=s?function(){i.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:i),d)if(a.functional){a._injectStyles=d;var u=a.render;a.render=function(e,t){return d.call(t),u(e,t)}}else{var c=a.beforeCreate;a.beforeCreate=c?[].concat(c,d):[d]}return{exports:e,options:a}}n.d(t,"a",(function(){return o}))},10:function(e,t){e.exports=require("core-js/modules/web.dom.iterable.js")},11:function(e,t){e.exports=require("core-js/modules/es6.string.iterator.js")},12:function(e,t){e.exports=require("core-js/modules/es6.regexp.split.js")},13:function(e,t){e.exports=require("core-js/modules/es6.regexp.replace.js")},16:function(e,t){e.exports=require("core-js/modules/es6.array.filter.js")},17:function(e,t){e.exports=require("core-js/modules/es6.object.keys.js")},18:function(e,t,n){var o,i,r;n(0),n(8),n(11),n(6),n(9),n(10),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(5),n(13),n(4),n(12),n(16),n(19),n(26),n(25),n(3)],void 0===(r="function"==typeof(o=function(e,t,n,o,i,r,l,s,d,a){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.addClass=function(e,t){if(e){for(var n=e.className,o=(t||"").split(" "),i=0,r=o.length;i<r;i++){var l=o[i];l&&(e.classList?e.classList.add(l):b(e,l)||(n+=" "+l))}e.classList||e.setAttribute("class",n)}},e.getStyle=e.getScrollContainer=void 0,e.hasClass=b,e.once=e.on=e.off=e.isScroll=e.isInContainer=void 0,e.removeClass=function(e,t){if(e&&t){for(var n=t.split(" "),o=" "+e.className+" ",i=0,r=n.length;i<r;i++){var l=n[i];l&&(e.classList?e.classList.remove(l):b(e,l)&&(o=o.replace(" "+l+" "," ")))}e.classList||e.setAttribute("class",(o||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}},e.setStyle=function e(t,n,o){if(t&&n)if("object"===u(n))for(var i in n)n.hasOwnProperty(i)&&e(t,i,n[i]);else"opacity"===(n=v(n))&&m<9?t.style.filter=isNaN(o)?"":"alpha(opacity="+100*o+")":t.style[n]=o};var c,f=(c=a,a=c&&c.__esModule?c:{default:c}).default.prototype.$isServer,p=/([\:\-\_]+(.))/g,y=/^moz([A-Z])/,m=f?0:Number(document.documentMode),v=function(e){return e.replace(p,(function(e,t,n,o){return o?n.toUpperCase():n})).replace(y,"Moz$1")},h=!f&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)};e.on=h;var g=!f&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};function b(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}e.off=g,e.once=function(e,t,n){h(e,t,(function o(){n&&n.apply(this,arguments),g(e,t,o)}))};var x=m<9?function(e,t){if(!f){if(!e||!t)return null;"float"===(t=v(t))&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!f){if(!e||!t)return null;"float"===(t=v(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}};e.getStyle=x;var _=function(e,t){if(!f)return x(e,null!=t?t?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto|overlay)/)};e.isScroll=_,e.getScrollContainer=function(e,t){if(!f){for(var n=e;n;){if([window,document,document.documentElement].includes(n))return window;if(_(n,t))return n;n=n.parentNode}return n}},e.isInContainer=function(e,t){if(f||!e||!t)return!1;var n,o=e.getBoundingClientRect();return n=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),o.top<n.bottom&&o.bottom>n.top&&o.right>n.left&&o.left<n.right}})?o.apply(t,i):o)||(e.exports=r)},19:function(e,t){e.exports=require("core-js/modules/es6.regexp.match.js")},25:function(e,t){e.exports=require("core-js/modules/es7.array.includes.js")},26:function(e,t){e.exports=require("core-js/modules/es6.string.includes.js")},27:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t],void 0===(r="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){for(var t=1,n=arguments.length;t<n;t++){var o=arguments[t]||{};for(var i in o)if(o.hasOwnProperty(i)){var r=o[i];void 0!==r&&(e[i]=r)}}return e}})?o.apply(t,i):o)||(e.exports=r)},28:function(e,t){e.exports=require("core-js/modules/es6.string.trim.js")},29:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(3)],void 0===(r="function"==typeof(o=function(e,t){"use strict";var n,o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if(t.default.prototype.$isServer)return 0;if(void 0!==n)return n;var e=document.createElement("div");e.className="tu-scrollbar__wrap",e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var o=e.offsetWidth;e.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",e.appendChild(i);var r=i.offsetWidth;return e.parentNode.removeChild(e),n=o-r},t=(o=t)&&o.__esModule?o:{default:o}})?o.apply(t,i):o)||(e.exports=r)},3:function(t,n){t.exports=e},318:function(e,t,n){"use strict";n.r(t);var o=n(319),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t.default=i.a},319:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t],void 0===(r="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default={data:function(){return{text:null,spinner:null,background:null,fullscreen:!0,visible:!1,customClass:""}},methods:{handleAfterLeave:function(){this.$emit("after-leave")},setText:function(e){this.text=e}}}})?o.apply(t,i):o)||(e.exports=r)},35:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(5),n(3),n(27),n(37),n(29),n(18)],void 0===(r="function"==typeof(o=function(e,t,n,o,i,r,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"PopupManager",{enumerable:!0,get:function(){return i.default}}),e.default=void 0,n=s(n),o=s(o),i=s(i),r=s(r);var d,a=1,u={props:{visible:{type:Boolean,default:!1},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,default:!1},modalFade:{type:Boolean,default:!0},modalClass:{},modalAppendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1}},beforeMount:function(){this._popupId="popup-"+a++,i.default.register(this._popupId,this)},beforeDestroy:function(){i.default.deregister(this._popupId),i.default.closeModal(this._popupId),this.restoreBodyStyle()},data:function(){return{opened:!1,bodyPaddingRight:null,computedBodyPaddingRight:0,withoutHiddenClass:!0,rendered:!1}},watch:{visible:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,n.default.nextTick((function(){t.open()})))}else this.close()}},methods:{open:function(e){var t=this;this.rendered||(this.rendered=!0);var n=(0,o.default)({},this.$props||this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var i=Number(n.openDelay);i>0?this._openTimer=setTimeout((function(){t._openTimer=null,t.doOpen(n)}),i):this.doOpen(n)},doOpen:function(e){if(!this.$isServer&&(!this.willOpen||this.willOpen())&&!this.opened){this._opening=!0;var t=this.$el,n=e.modal,o=e.zIndex;if(o&&(i.default.zIndex=o),n&&(this._closing&&(i.default.closeModal(this._popupId),this._closing=!1),i.default.openModal(this._popupId,i.default.nextZIndex(),this.modalAppendToBody?void 0:t,e.modalClass,e.modalFade),e.lockScroll)){this.withoutHiddenClass=!(0,l.hasClass)(document.body,"tu-popup-parent--hidden"),this.withoutHiddenClass&&(this.bodyPaddingRight=document.body.style.paddingRight,this.computedBodyPaddingRight=parseInt((0,l.getStyle)(document.body,"paddingRight"),10)),d=(0,r.default)();var s=document.documentElement.clientHeight<document.body.scrollHeight,a=(0,l.getStyle)(document.body,"overflowY");d>0&&(s||"scroll"===a)&&this.withoutHiddenClass&&(document.body.style.paddingRight=this.computedBodyPaddingRight+d+"px"),(0,l.addClass)(document.body,"tu-popup-parent--hidden")}"static"===getComputedStyle(t).position&&(t.style.position="absolute"),t.style.zIndex=i.default.nextZIndex(),this.opened=!0,this.onOpen&&this.onOpen(),this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout((function(){e._closeTimer=null,e.doClose()}),t):this.doClose()}},doClose:function(){this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&setTimeout(this.restoreBodyStyle,200),this.opened=!1,this.doAfterClose()},doAfterClose:function(){i.default.closeModal(this._popupId),this._closing=!1},restoreBodyStyle:function(){this.modal&&this.withoutHiddenClass&&(document.body.style.paddingRight=this.bodyPaddingRight,(0,l.removeClass)(document.body,"tu-popup-parent--hidden")),this.withoutHiddenClass=!0}}};e.default=u})?o.apply(t,i):o)||(e.exports=r)},37:function(e,t,n){var o,i,r;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(12),n(28),n(7),n(0),n(3),n(18)],void 0===(r="function"==typeof(o=function(e,t,n,o,i,r,l){"use strict";var s;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r=(s=r)&&s.__esModule?s:{default:s};var d,a=!1,u=!1,c=function(){if(!r.default.prototype.$isServer){var e=p.modalDom;return e?a=!0:(a=!1,e=document.createElement("div"),p.modalDom=e,e.addEventListener("touchmove",(function(e){e.preventDefault(),e.stopPropagation()})),e.addEventListener("click",(function(){p.doOnModalClick&&p.doOnModalClick()}))),e}},f={},p={modalFade:!0,getInstance:function(e){return f[e]},register:function(e,t){e&&t&&(f[e]=t)},deregister:function(e){e&&(f[e]=null,delete f[e])},nextZIndex:function(){return p.zIndex++},modalStack:[],doOnModalClick:function(){var e=p.modalStack[p.modalStack.length-1];if(e){var t=p.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,n,o,i){if(!r.default.prototype.$isServer&&e&&void 0!==t){this.modalFade=i;for(var s=this.modalStack,d=0,u=s.length;d<u;d++)if(s[d].id===e)return;var f=c();(0,l.addClass)(f,"v-modal"),this.modalFade&&!a&&(0,l.addClass)(f,"v-modal-enter"),o&&o.trim().split(/\s+/).forEach((function(e){return(0,l.addClass)(f,e)})),setTimeout((function(){(0,l.removeClass)(f,"v-modal-enter")}),200),n&&n.parentNode&&11!==n.parentNode.nodeType?n.parentNode.appendChild(f):document.body.appendChild(f),t&&(f.style.zIndex=t),f.tabIndex=0,f.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:o})}},closeModal:function(e){var t=this.modalStack,n=c();if(t.length>0){var o=t[t.length-1];if(o.id===e)o.modalClass&&o.modalClass.trim().split(/\s+/).forEach((function(e){return(0,l.removeClass)(n,e)})),t.pop(),t.length>0&&(n.style.zIndex=t[t.length-1].zIndex);else for(var i=t.length-1;i>=0;i--)if(t[i].id===e){t.splice(i,1);break}}0===t.length&&(this.modalFade&&(0,l.addClass)(n,"v-modal-leave"),setTimeout((function(){0===t.length&&(n.parentNode&&n.parentNode.removeChild(n),n.style.display="none",p.modalDom=void 0),(0,l.removeClass)(n,"v-modal-leave")}),200))}};Object.defineProperty(p,"zIndex",{configurable:!0,get:function(){return u||(d=d||(r.default.prototype.$ELEMENT||{}).zIndex||2e3,u=!0),d},set:function(e){d=e}}),r.default.prototype.$isServer||window.addEventListener("keydown",(function(e){if(27===e.keyCode){var t=function(){if(!r.default.prototype.$isServer&&p.modalStack.length>0){var e=p.modalStack[p.modalStack.length-1];if(!e)return;return p.getInstance(e.id)}}();t&&t.closeOnPressEscape&&(t.handleClose?t.handleClose():t.handleAction?t.handleAction("cancel"):t.close())}}));var y=p;e.default=y})?o.apply(t,i):o)||(e.exports=r)},4:function(e,t){e.exports=require("core-js/modules/es6.array.index-of.js")},446:function(e,t,n){"use strict";var o=n(533);n.o(o,"render")&&n.d(t,"render",(function(){return o.render})),n.o(o,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return o.staticRenderFns}))},5:function(e,t){e.exports=require("core-js/modules/es6.number.constructor.js")},532:function(e,t,n){"use strict";n.r(t);var o=n(446),i=n(318);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var l=n(1),s=Object(l.a)(i.default,o.render,o.staticRenderFns,!1,null,null,null);t.default=s.exports},533:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t],void 0===(r="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var t=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"tu-loading-fade"},on:{"after-leave":e.handleAfterLeave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"tu-loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}],style:{backgroundColor:e.background||""}},[t("div",{staticClass:"tu-loading-spinner"},[e.spinner?t("i",{class:e.spinner}):t("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[t("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),e.text?t("p",{staticClass:"tu-loading-text"},[e._v("\n\t\t\t\t"+e._s(e.text)+"\n\t\t\t")]):e._e()])])])};e.render=t,e.staticRenderFns=[],t._withStripped=!0})?o.apply(t,i):o)||(e.exports=r)},534:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t],void 0===(r="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e||!t)throw new Error("instance & callback is required");var i=!1,r=function(){i||(i=!0,t&&t.apply(null,arguments))};o?e.$once("after-leave",r):e.$on("after-leave",r),setTimeout((function(){r()}),n+100)}})?o.apply(t,i):o)||(e.exports=r)},6:function(e,t){e.exports=require("core-js/modules/es6.object.to-string.js")},7:function(e,t){e.exports=require("core-js/modules/es6.array.for-each.js")},712:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(713),n(714)],void 0===(r="function"==typeof(o=function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=o(t),n=o(n);var i={install:function(e){e.use(t.default),e.prototype.$loading=n.default},directive:t.default,service:n.default};e.default=i})?o.apply(t,i):o)||(e.exports=r)},713:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(7),n(17),n(3),n(532),n(18),n(35),n(534)],void 0===(r="function"==typeof(o=function(e,t,n,o,i,r,l,s){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o=d(o),i=d(i),s=d(s);var a=o.default.extend(i.default),u={install:function(e){if(!e.prototype.$isServer){var t=function(t,o){o.value?e.nextTick((function(){o.modifiers.fullscreen?(t.originalPosition=(0,r.getStyle)(document.body,"position"),t.originalOverflow=(0,r.getStyle)(document.body,"overflow"),t.maskStyle.zIndex=l.PopupManager.nextZIndex(),(0,r.addClass)(t.mask,"is-fullscreen"),n(document.body,t,o)):((0,r.removeClass)(t.mask,"is-fullscreen"),o.modifiers.body?(t.originalPosition=(0,r.getStyle)(document.body,"position"),["top","left"].forEach((function(e){var n="top"===e?"scrollTop":"scrollLeft";t.maskStyle[e]=t.getBoundingClientRect()[e]+document.body[n]+document.documentElement[n]-parseInt((0,r.getStyle)(document.body,"margin-".concat(e)),10)+"px"})),["height","width"].forEach((function(e){t.maskStyle[e]=t.getBoundingClientRect()[e]+"px"})),n(document.body,t,o)):(t.originalPosition=(0,r.getStyle)(t,"position"),n(t,t,o)))})):((0,s.default)(t.instance,(function(e){if(t.instance.hiding){t.domVisible=!1;var n=o.modifiers.fullscreen||o.modifiers.body?document.body:t;(0,r.removeClass)(n,"el-loading-parent--relative"),(0,r.removeClass)(n,"el-loading-parent--hidden"),t.instance.hiding=!1}}),300,!0),t.instance.visible=!1,t.instance.hiding=!0)},n=function(t,n,o){n.domVisible||"none"===(0,r.getStyle)(n,"display")||"hidden"===(0,r.getStyle)(n,"visibility")?n.domVisible&&!0===n.instance.hiding&&(n.instance.visible=!0,n.instance.hiding=!1):(Object.keys(n.maskStyle).forEach((function(e){n.mask.style[e]=n.maskStyle[e]})),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&"sticky"!==n.originalPosition&&(0,r.addClass)(t,"el-loading-parent--relative"),o.modifiers.fullscreen&&o.modifiers.lock&&(0,r.addClass)(t,"el-loading-parent--hidden"),n.domVisible=!0,t.appendChild(n.mask),e.nextTick((function(){n.instance.hiding?n.instance.$emit("after-leave"):n.instance.visible=!0})),n.domInserted=!0)};e.directive("loading",{bind:function(e,n,o){var i=e.getAttribute("tu-loading-text"),r=e.getAttribute("tu-loading-spinner"),l=e.getAttribute("tu-loading-background"),s=e.getAttribute("tu-loading-custom-class"),d=o.context,u=new a({el:document.createElement("div"),data:{text:d&&d[i]||i,spinner:d&&d[r]||r,background:d&&d[l]||l,customClass:d&&d[s]||s,fullscreen:!!n.modifiers.fullscreen}});e.instance=u,e.mask=u.$el,e.maskStyle={},n.value&&t(e,n)},update:function(e,n){e.instance.setText(e.getAttribute("tu-loading-text")),n.oldValue!==n.value&&t(e,n)},unbind:function(e,n){e.domInserted&&(e.mask&&e.mask.parentNode&&e.mask.parentNode.removeChild(e.mask),t(e,{value:!1,modifiers:n.modifiers})),e.instance&&e.instance.$destroy()}})}}},c=u;e.default=c})?o.apply(t,i):o)||(e.exports=r)},714:function(e,t,n){var o,i,r;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,i=[t,n(7),n(17),n(3),n(532),n(18),n(35),n(534),n(27)],void 0===(r="function"==typeof(o=function(e,t,n,o,i,r,l,s,d){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o=a(o),i=a(i),s=a(s),d=a(d);var u,c=o.default.extend(i.default),f={text:null,fullscreen:!0,body:!1,lock:!1,customClass:""};c.prototype.originalPosition="",c.prototype.originalOverflow="",c.prototype.close=function(){var e=this;this.fullscreen&&(u=void 0),(0,s.default)(this,(function(t){var n=e.fullscreen||e.body?document.body:e.target;(0,r.removeClass)(n,"tu-loading-parent--relative"),(0,r.removeClass)(n,"tu-loading-parent--hidden"),e.$el&&e.$el.parentNode&&e.$el.parentNode.removeChild(e.$el),e.$destroy()}),300),this.visible=!1};var p=function(e,t,n){var o={};e.fullscreen?(n.originalPosition=(0,r.getStyle)(document.body,"position"),n.originalOverflow=(0,r.getStyle)(document.body,"overflow"),o.zIndex=l.PopupManager.nextZIndex()):e.body?(n.originalPosition=(0,r.getStyle)(document.body,"position"),["top","left"].forEach((function(t){var n="top"===t?"scrollTop":"scrollLeft";o[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]+"px"})),["height","width"].forEach((function(t){o[t]=e.target.getBoundingClientRect()[t]+"px"}))):n.originalPosition=(0,r.getStyle)(t,"position"),Object.keys(o).forEach((function(e){n.$el.style[e]=o[e]}))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!o.default.prototype.$isServer){if("string"==typeof(e=(0,d.default)({},f,e)).target&&(e.target=document.querySelector(e.target)),e.target=e.target||document.body,e.target!==document.body?e.fullscreen=!1:e.body=!0,e.fullscreen&&u)return u;var t=e.body?document.body:e.target,n=new c({el:document.createElement("div"),data:e});return p(e,t,n),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&"sticky"!==n.originalPosition&&(0,r.addClass)(t,"tu-loading-parent--relative"),e.fullscreen&&e.lock&&(0,r.addClass)(t,"tu-loading-parent--hidden"),t.appendChild(n.$el),o.default.nextTick((function(){n.visible=!0})),e.fullscreen&&(u=n),n}};e.default=y})?o.apply(t,i):o)||(e.exports=r)},8:function(e,t){e.exports=require("core-js/modules/es6.symbol.js")},9:function(e,t){e.exports=require("core-js/modules/es6.array.iterator.js")}}).default}));
//# sourceMappingURL=index.js.map