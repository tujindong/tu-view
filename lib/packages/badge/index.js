!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("badge",[],t):"object"==typeof exports?exports.badge=t():e.badge=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=663)}({0:function(e,t){e.exports=require("core-js/modules/es6.object.define-property.js")},1:function(e,t,n){"use strict";function o(e,t,n,o,r,i,s,u){var a,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=a):r&&(a=u?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(d.functional){d._injectStyles=a;var f=d.render;d.render=function(e,t){return a.call(t),f(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:d}}n.d(t,"a",(function(){return o}))},2:function(e,t){e.exports=require("core-js/modules/es6.function.name.js")},272:function(e,t,n){"use strict";n.r(t);var o=n(273),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t.default=r.a},273:function(e,t,n){var o,r,i;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t,n(5),n(4)],void 0===(i="function"==typeof(o=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"TuBadge",components:{},props:{value:[String,Number],max:Number,isDot:Boolean,hidden:Boolean,type:{type:String,validator:function(e){return["primary","success","warning","info","danger"].indexOf(e)>-1}},numberStyle:Object,color:String,text:String},computed:{dotColor:function(){return this.color},content:function(){if(!this.isDot){var e=this.value,t=this.max;return"number"==typeof e&&"number"==typeof t&&t<e?"".concat(t,"+"):e}}}};e.default=o})?o.apply(t,r):o)||(e.exports=i)},4:function(e,t){e.exports=require("core-js/modules/es6.array.index-of.js")},426:function(e,t,n){"use strict";var o=n(512);n.o(o,"render")&&n.d(t,"render",(function(){return o.render})),n.o(o,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return o.staticRenderFns}))},5:function(e,t){e.exports=require("core-js/modules/es6.number.constructor.js")},512:function(e,t,n){var o,r,i;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t],void 0===(i="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var t=function(){var e=this,t=e._self._c;return t("div",{class:["tu-badge",{"is-single":!e.$slots.default&&!e.text},{"is-status":!e.$slots.default&&e.text}]},[e._t("default"),e.dotColor&&!e.$slots.default?t("span",{staticClass:"tu-badge__status-dot",style:{background:e.dotColor}}):e._e(),e.text?t("span",{staticClass:"tu-badge__status-text"},[e._v(e._s(e.text))]):e._e(),t("transition",{attrs:{name:"tu-zoom-in-center"}},[t("sup",{directives:[{name:"show",rawName:"v-show",value:!e.hidden&&(e.content||0===e.content||e.isDot),expression:"!hidden && (content || content === 0 || isDot)"}],staticClass:"tu-badge__content",class:[e.type?"tu-badge__content--"+e.type:null,{"is-fixed":e.$slots.default,"is-dot":e.isDot}],style:e.numberStyle,domProps:{textContent:e._s(e.content)}})])],2)};e.render=t,e.staticRenderFns=[],t._withStripped=!0})?o.apply(t,r):o)||(e.exports=i)},663:function(e,t,n){var o,r,i;n(0),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t,n(2),n(664)],void 0===(i="function"==typeof(o=function(e,t,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(o=n,n=o&&o.__esModule?o:{default:o}).default.install=function(e){e.component(n.default.name,Table)};var r=n.default;e.default=r})?o.apply(t,r):o)||(e.exports=i)},664:function(e,t,n){"use strict";n.r(t);var o=n(426),r=n(272);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var s=n(1),u=Object(s.a)(r.default,o.render,o.staticRenderFns,!1,null,null,null);t.default=u.exports}}).default}));
//# sourceMappingURL=index.js.map