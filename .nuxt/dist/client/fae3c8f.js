(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,5,6,7,8,9],{362:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("4557dc76",content,!0,{sourceMap:!1})},363:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("0c041bd3",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n(362)},365:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,".indicator-bg[data-v-9ea9a9d6]{background:url(/img/indicator-bg.png)}",""]),r.locals={},t.exports=r},366:function(t,e,n){"use strict";n.r(e);n(357);var r=n(55),o=n(56),l=n(360),c=n(361),f=n(358),d=n(11),m=(n(43),n(359));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(l.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).addedItems=t.$store.state.addedToCart,t.totalAmount="",t.toggleMenu=!1,t.delItem=function(e){t.$store.commit("removeItem",e)},t}return Object(o.a)(n,[{key:"mounted",value:function(){var t=0;this.addedItems.forEach((function(e){t+=e.productPrice})),this.totalAmount=t}},{key:"updated",value:function(){var t=0;this.addedItems.forEach((function(e){t+=e.productPrice})),this.totalAmount=t}}]),n}(m.Vue),y=x=h([Object(m.Component)({})],x),_=(n(364),n(39)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-300px h-full relative inline-block cool-transition",class:t.toggleMenu?"":"overflow-hidden"},[n("img",{staticClass:"ml-auto relative z-50 -mb-4",attrs:{src:"/img/cart.png",alt:""}}),t._v(" "),n("button",{staticClass:"relative w-full flex h-20 items-center z-40",on:{click:function(e){t.toggleMenu=!t.toggleMenu}}},[n("img",{staticClass:"absolute w-full h-full",attrs:{src:"/img/dropdown-img.png",alt:""}}),t._v(" "),n("div",{staticClass:"relative z-20 flex justify-center w-full space-x-4"},[n("img",{attrs:{src:"/img/cart-heading.png",alt:""}}),t._v(" "),n("div",{staticClass:"indicator-bg w-7 h-7 flex items-center justify-center"},[n("span",{staticClass:"text-xl filter drop-shadow-text-dense text-shadow"},[t._v(t._s(t.$store.state.addedToCart.length))])])])]),t._v(" "),n("div",{staticClass:"\n      bg-white\n      shadow-main\n      border border-black-light\n      rounded-t-xl\n      w-260px\n      mx-auto\n      py-3\n      px-4\n      cool-transition\n      absolute\n      bottom-20\n      left-1/2\n      right-1/2\n      -translate-x-1/2\n    ",class:t.toggleMenu?"block":"hidden"},[n("div",{staticClass:"flex flex-wrap"},[t._l(t.addedItems,(function(e,r){return[n("div",{key:r,staticClass:"\n            w-full\n            flex\n            justify-between\n            items-center\n            border-b-2\n            pr-2\n            py-4\n          "},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"w-12",attrs:{src:"/img/toys/"+e.productImg,alt:""}}),t._v(" "),n("p",{staticClass:"text-black opacity-80 text-sm ml-2"},[t._v("\n              "+t._s(e.miniName)+"\n            ")])]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("p",{staticClass:"text-black opacity-80 mr-2 text-sm"},[t._v("\n              "+t._s("$"+e.productPrice)+"\n            ")]),t._v(" "),n("button",{staticClass:"bg-transparent outline-none focus:outline-none",on:{click:function(e){return t.delItem(r)}}},[n("img",{attrs:{src:"/img/cross-icon.svg",alt:""}})])])])]})),t._v(" "),n("div",{staticClass:"w-full py-4"},[n("p",{staticClass:"text-sm text-blue text-center mb-4"},[t._v("\n          Total amount: "+t._s("$"+t.totalAmount)+"\n        ")]),t._v(" "),n("button",{staticClass:"\n            btn-gradient\n            text-white\n            outline-none\n            focus:outline-none\n            w-full\n            h-11\n            rounded-full\n            flex\n            items-center\n            justify-center\n          "},[t._v("\n          Checkout\n        ")])])],2)])])}),[],!1,null,"9ea9a9d6",null);e.default=component.exports},367:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("0e24d9d2",content,!0,{sourceMap:!1})},368:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("27e5f6ea",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";var r=n(6),o=n(27),l=n(28),c=n(276),f=n(78),d=n(10),m=n(57).f,v=n(58).f,h=n(14).f,x=n(370).trim,y="Number",_=r.Number,w=_,C=_.prototype,j=l(n(95)(C))==y,O="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=O?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(j?d((function(){C.valueOf.call(n)})):l(n)!=y)?c(new w(k(e)),n,_):k(e)};for(var R,S=n(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;S.length>P;P++)o(w,R=S[P])&&!o(_,R)&&h(_,R,v(w,R));_.prototype=C,C.constructor=_,n(16)(r,y,_)}},370:function(t,e,n){var r=n(4),o=n(40),l=n(10),c=n(371),f="["+c+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t,e,n){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=f?e(h):c[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},371:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},372:function(t,e,n){"use strict";n(363)},373:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,".item-bg[data-v-11d01c9f]{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0) 48.95%),url(/img/item-bg.png) 50%/cover no-repeat}",""]),r.locals={},t.exports=r},374:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("6eba89da",content,!0,{sourceMap:!1})},375:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("650bbda7",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);n(369);var r={name:"ProductCard",props:{productFrom:String,productTo:String,productName:String,productImg:String,causeOfDeath:String,productPrice:Number},methods:{clickCart:function(){this.$emit("onCartClick")},goToProduct:function(){this.$router.push("/product-page")}}},o=(n(372),n(39)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    min-h-580px\n    h-full\n    md:w-400px\n    w-full\n    rounded-t-full rounded-b-20px\n    flex flex-wrap\n    overflow-hidden\n  "},[n("div",{staticClass:"w-full rounded-t-full item-bg flex flex-wrap items-start pt-8 px-4"},[n("div",{staticClass:"w-full flex justify-center items-center space-x-3"},[n("p",{staticClass:"text-sm text-black opacity-50"},[t._v(t._s(t.productFrom))]),t._v(" "),n("img",{attrs:{src:"/img/death-icon.svg",alt:""}}),t._v(" "),n("p",{staticClass:"text-sm text-black opacity-50"},[t._v(t._s(t.productTo))])]),t._v(" "),n("div",{staticClass:"w-full flex justify-center my-5"},[n("img",{attrs:{src:"/img/toy-logos/"+t.productName,alt:""}})]),t._v(" "),n("div",{staticClass:"w-full flex justify-center"},[n("img",{attrs:{src:"/img/toys/"+t.productImg,alt:""}})])]),t._v(" "),n("div",{staticClass:"w-full bg-white rounded-b-20px px-4 pt-5 flex flex-wrap"},[n("div",{staticClass:"w-full"},[n("fieldset",{staticClass:"border pb-3 pt-2 rounded-20px"},[n("legend",{staticClass:"text-sm text-black opacity-50 px-4"},[t._v("\n          Cause Of Death\n        ")]),t._v(" "),n("p",{staticClass:"md:text-xl text-lg"},[t._v(t._s(t.causeOfDeath))])])]),t._v(" "),n("div",{staticClass:"\n        mb-3\n        w-full\n        flex\n        md:flex-nowrap\n        flex-wrap\n        justify-between\n        items-center\n        md:space-x-2\n      "},[n("button",{staticClass:"\n          md:my-0\n          my-2\n          outline-none\n          focus:outline-none\n          btn-gradient\n          px-8\n          rounded-full\n          text-white\n          md:text-xl\n          text-lg\n          flex\n          items-center\n          md:w-auto\n          w-full\n          justify-center\n          h-16\n          truncate\n        ",on:{click:t.clickCart}},[t._v("\n        Add to cart\n        "),n("span",{staticClass:"opacity-50 ml-2"},[t._v(t._s(t.productPrice))])]),t._v(" "),n("button",{staticClass:"\n          outline-none\n          focus:outline-none\n          btn-gradient-secondary\n          px-10\n          border border-secondary\n          text-secondary\n          opacity-50\n          flex\n          items-center\n          rounded-full\n          md:w-auto\n          w-full\n          justify-center\n          h-16\n        ",on:{click:t.goToProduct}},[t._v("\n        Story\n      ")])])])])}),[],!1,null,"11d01c9f",null);e.default=component.exports},377:function(t,e,n){"use strict";n.r(e);var r=n(378),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},378:function(t,e){},379:function(t,e,n){"use strict";n(367)},380:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,".banner-bg[data-v-1f9f1e5d]{background:url(/img/clouds-bg.png) 50%/cover no-repeat fixed}",""]),r.locals={},t.exports=r},381:function(t,e,n){"use strict";n(368)},382:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,".product-bg[data-v-7d13d6ef]{background:url(/img/clouds.jpg) 50%/cover no-repeat fixed;background-position-y:0}",""]),r.locals={},t.exports=r},383:function(t,e,n){"use strict";n(374)},384:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,".manifesto-bg[data-v-1cf3a2f3]{background:url(/img/manifesto-bg.png) 50%/cover no-repeat}",""]),r.locals={},t.exports=r},385:function(t,e,n){"use strict";n(375)},386:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,".footer-bg[data-v-52b8445a]{background:url(/img/footer.png) 50%/cover no-repeat}@media only screen and (max-width:760px){.footer-bg[data-v-52b8445a]{background:url(/img/footer-mob.png) 50%/cover no-repeat!important}}",""]),r.locals={},t.exports=r},388:function(t,e,n){"use strict";n.r(e);n(357);var r=n(55),o=n(56),l=n(360),c=n(361),f=n(358),d=n(11),m=(n(43),n(359)),v=n(392);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(l.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"mounted",value:function(){v.a.from(".toy-1",{y:2e3,ease:"ease.out",duration:20,repeat:1e6}),v.a.from(".toy-2",{y:2e3,ease:"ease.out",duration:20,repeat:1e6,delay:1.5}),v.a.from(".toy-3",{y:2e3,ease:"ease.out",duration:20,repeat:1e6,delay:2.5}),v.a.from(".toy-4",{y:2e3,ease:"ease.out",duration:20,repeat:1e6,delay:3.5}),v.a.from(".toy-5",{y:2e3,ease:"ease.out",duration:20,repeat:1e6,delay:4.5})}}]),n}(m.Vue),_=y=x([Object(m.Component)({})],y),w=(n(379),n(39)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"\n    h-screen\n    bg-red-400\n    flex\n    items-center\n    relative\n    banner-bg\n    overflow-hidden\n  "},[n("img",{staticClass:"w-1/3 md:hidden block top-0 fixed z-50 left-1/2 right-1/2 -translate-x-1/2",attrs:{src:"/img/label.png",alt:""}}),t._v(" "),n("img",{staticClass:"fixed z-40 h-full w-full",attrs:{src:"/img/castle.png",alt:""}}),t._v(" "),n("div",{staticClass:"fixed top-4 md:right-8 right-0 z-50"},[n("img",{staticClass:"ml-auto sm:w-full w-1/2 md:block hidden",attrs:{src:"/img/label.png",alt:""}}),t._v(" "),n("img",{staticClass:"-mt-5 sm:w-full w-2/3 ml-auto sm:mr-0 -mr-5",attrs:{src:"/img/angel-2.png",alt:""}})]),t._v(" "),n("div",{staticClass:"fixed top-4 md:left-8 left-0 z-50"},[n("img",{staticClass:"sm:w-full w-1/2 md:block hidden",attrs:{src:"/img/label.png",alt:""}}),t._v(" "),n("img",{staticClass:"-mt-5 sm:w-full w-2/3 sm:ml-0 -ml-5",attrs:{src:"/img/angel.png",alt:""}})]),t._v(" "),n("img",{staticClass:"\n      absolute\n      bottom-0\n      left-0\n      right-0\n      w-11/12\n      mx-auto\n      z-30\n      md:block\n      hidden\n    ",attrs:{src:"/img/banner-castle-footer.svg",alt:""}}),t._v(" "),n("img",{staticClass:"\n      absolute\n      bottom-0\n      left-0\n      right-0\n      w-full\n      mx-auto\n      z-30\n      md:hidden\n      block\n      sm:h-auto h-1/5\n    ",attrs:{src:"/img/castle-footer-mob.png",alt:""}}),t._v(" "),n("div",{staticClass:"w-full flex flex-wrap fixed z-20 sm:px-0 px-10"},[n("div",{staticClass:"w-full flex flex-wrap"},[n("div",{staticClass:"w-full text-center"},[n("h1",{staticClass:"\n            md:text-110px\n            text-56px\n            recoleta-font\n            text-white\n            filter\n            drop-shadow-text\n            md:leading-tight leading-none\n          "},[t._v("\n          Dead "),n("br",{staticClass:"sm:hidden block"}),t._v("\n          Startup "),n("br",{staticClass:"sm:hidden block"}),t._v("\n          Toys\n        ")])]),t._v(" "),n("div",{staticClass:"w-full text-center sm:mb-10 mb-6 sm:mt-0 mt-4"},[n("p",{staticClass:"filter drop-shadow-text md:text-4xl text-xl text-white"},[t._v("\n          Toy versions of iconic "),n("br",{staticClass:"sm:hidden block"}),t._v("\n          failed startups\n        ")])]),t._v(" "),n("div",{staticClass:"w-full flex justify-center"},[n("a",{staticClass:"\n            btn-gradient\n            text-white\n            flex flex-wrap\n            shadow-main\n            rounded-full\n            sm:py-3 py-1\n            px-8\n            text-center\n          ",attrs:{href:"#products"}},[n("span",{staticClass:"w-full sm:text-xl text-lg sm:mb-2"},[t._v("Shop now")]),t._v(" "),n("span",{staticClass:"w-full sm:text-xl text-lg opacity-50"},[t._v("Limited edition")])])])])]),t._v(" "),n("div",{staticClass:"\n      flex\n      lg:flex-nowrap\n      flex-wrap\n      fixed\n      z-20\n      w-full\n      justify-between\n      h-full\n      overflow-y-hidden\n    "},[n("div",{staticClass:"w-full relative"},[n("img",{staticClass:"toy-1 absolute -top-1/2 left-40",attrs:{src:"/img/floating-toy-1.svg",alt:""}}),t._v(" "),n("img",{staticClass:"toy-2 absolute sm:left-3/4 left-1/3 -top-1/2",attrs:{src:"/img/floating-toy-2.svg",alt:""}}),t._v(" "),n("img",{staticClass:"toy-3 absolute left-1/4 -top-1/2",attrs:{src:"/img/floating-toy-3.svg",alt:""}}),t._v(" "),n("img",{staticClass:"toy-4 absolute left-1/3 -top-1/2",attrs:{src:"/img/floating-toy-4.svg",alt:""}}),t._v(" "),n("img",{staticClass:"toy-5 absolute left-1/2 -top-1/2",attrs:{src:"/img/floating-toy-5.svg",alt:""}})])])])}],!1,null,"1f9f1e5d",null);e.default=component.exports},389:function(t,e,n){"use strict";n.r(e);n(357);var r=n(55),o=n(360),l=n(361),c=n(358),f=n(11),d=(n(43),n(359));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).deadToys=t.$store.state.deadToys,t.updateCart=function(e){t.$store.commit("updateCart",e)},t}return n}(d.Vue),x=h=v([Object(d.Component)({})],h),y=(n(381),n(39)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative product-bg",attrs:{id:"products"}},[n("div",{staticClass:"relative z-50"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"sticky top-2/3 lg:block hidden pt-24 w-300px ml-auto mr-32",staticStyle:{"z-index":"100"}},[n("CartDropdownComponent")],1),t._v(" "),t._m(3),t._v(" "),0!==t.$store.state.addedToCart.length?n("div",{staticClass:"lg:hidden flex absolute bottom-0 w-full justify-center",staticStyle:{"z-index":"100"}},[n("CartDropdownComponent")],1):t._e(),t._v(" "),n("div",{staticClass:"\n        md:w-full\n        sm:w-600px\n        w-300px\n        mx-auto\n        flex flex-wrap\n        md:px-0\n        sm:px-16\n        px-10\n        md:pb-0\n        pb-36\n        sticky\n        xl:pt-0\n        lg:pt-20\n        md:pt-52\n        pt-80\n      ",staticStyle:{"z-index":"60"}},[t._l(t.deadToys,(function(e){return[n("div",{key:e.id,staticClass:"w-full flex justify-center mb-8"},[n("ProductCard",{staticClass:"text-center",attrs:{productFrom:e.productFrom,productTo:e.productTo,productName:e.productName,productImg:e.productImg,causeOfDeath:e.causeOfDeath,productPrice:e.productPrice},on:{onCartClick:function(n){return t.updateCart(e)}}})],1)]}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky top-0",staticStyle:{"z-index":"100"}},[n("img",{staticClass:"absolute xl:block hidden z-50 w-full",attrs:{src:"/img/product-temple-top.png",alt:""}}),t._v(" "),n("img",{staticClass:"absolute xl:hidden md:block hidden",attrs:{src:"/img/product-temple-tab-top.png",alt:""}}),t._v(" "),n("img",{staticClass:"absolute md:hidden block z-50 w-full",attrs:{src:"/img/product-temple-mob-top.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky top-0 z-50 bg-transparent"},[n("img",{staticClass:"absolute xl:block hidden z-50 w-full",attrs:{src:"/img/product-temple.png",alt:""}}),t._v(" "),n("img",{staticClass:"absolute xl:hidden md:block hidden z-50",attrs:{src:"/img/product-temple-tab.png",alt:""}}),t._v(" "),n("img",{staticClass:"absolute md:hidden block z-50 w-full",attrs:{src:"/img/product-temple-mob.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n        md:flex\n        hidden\n        sticky\n        top-0\n        items-start\n        2xl:pt-32\n        lg:pt-24\n        md:pt-20\n      ",staticStyle:{"z-index":"100 !important"}},[n("img",{staticClass:"absolute mt-4",attrs:{src:"/img/product-castle-pillar.svg",alt:""}}),t._v(" "),n("img",{staticClass:"absolute left-1/2 right-1/2 transform -translate-x-1/2",attrs:{src:"/img/toys-label.svg",alt:""}}),t._v(" "),n("img",{staticClass:"absolute right-0 mt-4",attrs:{src:"/img/product-castle-pillar.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:hidden flex sticky top-0 w-full justify-center",staticStyle:{"z-index":"100"}},[e("img",{staticClass:"absolute",attrs:{src:"/img/toys-label.svg",alt:""}})])}],!1,null,"7d13d6ef",null);e.default=component.exports;installComponents(component,{CartDropdownComponent:n(366).default,ProductCard:n(376).default})},390:function(t,e,n){"use strict";n.r(e);n(357);var r=n(55),o=n(360),l=n(361),c=n(358),f=n(11),d=(n(43),n(359));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),x=h=v([Object(d.Component)({})],h),y=(n(383),n(39)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-full manifesto-bg sm:pt-40 pt-52 lg:px-0 md:px-6 px-4 md:pb-28 pb-40"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"xl:w-full lg:w-3/4 mx-auto flex justify-center"},[n("img",{staticClass:"md:block hidden",attrs:{src:"/img/manifesto-text.png",alt:""}}),t._v(" "),n("img",{staticClass:"md:hidden block",attrs:{src:"/img/manifesto-text-mob.png",alt:""}})]),t._v(" "),n("div",{staticClass:"\n          lg:w-4/5\n          mx-auto\n          w-full\n          flex\n          lg:flex-nowrap\n          lg:space-x-6\n          flex-wrap\n          mt-10\n        "},[n("div",{staticClass:"lg:w-1/2 w-full lg:mb-0 mb-6"},[n("p",{staticClass:"\n              text-lg text-shadow\n              filter\n              drop-shadow-text-dense\n              sfcompact-font\n            "},[t._v("\n            If slow evolution - the accumulation of tiny changes over geologic\n            time - is insufficient to account for all evolutionary leaps, so\n            the theory goes, then perhaps there exist macroevolutionary jumps\n            due to large mutations that create organisms with significant\n            advantages over their erstwhile species. These macro-mutant\n            organisms are dubbed Hopeful Monsters, born without kin or kind,\n            seeking that slimmest improbable chance to thrive. "),n("br"),t._v(" "),n("br"),t._v("\n            This is by no means widely accepted - common criticisms point\n            rightly to the fact that macroevolutionary mutations are almost\n            invariably lethal, or render the mutant sterile, unable to\n            propagate their mutation forward. "),n("br"),t._v(" "),n("br"),t._v("\n            This all, looking at the history of fledgling startups born from\n            the roiling primordial soup of our VC bubble, sounds about right.\n            Fuck Social Darwinism, but how about Corporate Goldschmidtism?\n          ")])]),t._v(" "),n("div",{staticClass:"lg:w-1/2 w-full"},[n("p",{staticClass:"\n              text-lg text-shadow\n              filter\n              drop-shadow-text-dense\n              sfcompact-font\n            "},[t._v("\n            A lineup of Dead Startup Toys on a shelf is the equivalent of a\n            line of heads on stakes, or the macabre pyramids of Kublai Khan.\n            Not exactly triumphant, given that companies fail through no real\n            fault of our own, as consumers– but schadenfreude is a small\n            sadism, after all. "),n("br"),t._v(" "),n("br"),t._v("\n            This is not a memorialization. Let Thernanos burn and never taste\n            the light of heaven. Still we are perhaps honor-bound to\n            acknowledge the mutants, for they accomplish a certain weirding of\n            the world that we aspire to. Dead Startup Toys are not a\n            resurrection, to be sure, but perhaps they are a form of\n            necromancy: we celebrate their pale shadows, deprived of their\n            original context. "),n("br"),t._v(" "),n("br"),t._v("\n            Behold these beautiful mutants, hoisted on petards of their own\n            solid-aluminum-unibody construction. We salute these voyagers,\n            flown too close to the blood-red suns of their own fever dreams,\n            on wings made of oh-so-flammable dollar bills, whose inexplicably\n            sincere hopes became our most surreal entertainment..\n          ")])])])])])])}],!1,null,"1cf3a2f3",null);e.default=component.exports},391:function(t,e,n){"use strict";n.r(e);n(357);var r=n(55),o=n(360),l=n(361),c=n(358),f=n(11),d=(n(43),n(359));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),x=h=v([Object(d.Component)({})],h),y=(n(385),n(39)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"md:h-450px h-500px flex items-center justify-center footer-bg"},[n("div",{staticClass:"flex items-center space-x-6"},[n("a",{staticClass:"filter text-lg text-white underline drop-shadow-text",attrs:{href:"#"}},[t._v("Support")]),t._v(" "),n("a",{staticClass:"filter text-lg text-white underline drop-shadow-text",attrs:{href:"#"}},[t._v("Term")])])])}],!1,null,"52b8445a",null);e.default=component.exports},399:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PageBanner"),t._v(" "),n("ProductsSection",{staticClass:"relative",staticStyle:{"z-index":"999"}}),t._v(" "),n("ManifestoSection",{staticClass:"relative",staticStyle:{"z-index":"999"}}),t._v(" "),n("FooterSection",{staticClass:"relative",staticStyle:{"z-index":"999"}})],1)},o=[]},401:function(t,e,n){"use strict";n.r(e);var r=n(399),o=n(377);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);var c=n(39),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{PageBanner:n(388).default,ProductsSection:n(389).default,ManifestoSection:n(390).default,FooterSection:n(391).default})}}]);