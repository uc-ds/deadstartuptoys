(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4],{362:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("4557dc76",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n(362)},365:function(t,e,n){var l=n(53)((function(i){return i[1]}));l.push([t.i,".indicator-bg[data-v-9ea9a9d6]{background:url(/img/indicator-bg.png)}",""]),l.locals={},t.exports=l},366:function(t,e,n){"use strict";n.r(e);n(357);var l=n(55),c=n(56),r=n(360),o=n(361),d=n(358),m=n(11),f=(n(43),n(359));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,l=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(l,arguments,c)}else n=l.apply(this,arguments);return Object(o.a)(this,n)}}var x=function(t,e,n,desc){var l,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(r=(c<3?l(r):c>3?l(e,n,r):l(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},_=function(t){Object(r.a)(n,t);var e=v(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).addedItems=t.$store.state.addedToCart,t.totalAmount="",t.toggleMenu=!1,t.delItem=function(e){t.$store.commit("removeItem",e)},t}return Object(c.a)(n,[{key:"mounted",value:function(){var t=0;this.addedItems.forEach((function(e){t+=e.productPrice})),this.totalAmount=t}},{key:"updated",value:function(){var t=0;this.addedItems.forEach((function(e){t+=e.productPrice})),this.totalAmount=t}}]),n}(f.Vue),h=_=x([Object(f.Component)({})],_),w=(n(364),n(39)),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-300px h-full relative inline-block cool-transition",class:t.toggleMenu?"":"overflow-hidden"},[n("img",{staticClass:"ml-auto relative z-50 -mb-4",attrs:{src:"/img/cart.png",alt:""}}),t._v(" "),n("button",{staticClass:"relative w-full flex h-20 items-center z-40",on:{click:function(e){t.toggleMenu=!t.toggleMenu}}},[n("img",{staticClass:"absolute w-full h-full",attrs:{src:"/img/dropdown-img.png",alt:""}}),t._v(" "),n("div",{staticClass:"relative z-20 flex justify-center w-full space-x-4"},[n("img",{attrs:{src:"/img/cart-heading.png",alt:""}}),t._v(" "),n("div",{staticClass:"indicator-bg w-7 h-7 flex items-center justify-center"},[n("span",{staticClass:"text-xl filter drop-shadow-text-dense text-shadow"},[t._v(t._s(t.$store.state.addedToCart.length))])])])]),t._v(" "),n("div",{staticClass:"\n      bg-white\n      shadow-main\n      border border-black-light\n      rounded-t-xl\n      w-260px\n      mx-auto\n      py-3\n      px-4\n      cool-transition\n      absolute\n      bottom-20\n      left-1/2\n      right-1/2\n      -translate-x-1/2\n    ",class:t.toggleMenu?"block":"hidden"},[n("div",{staticClass:"flex flex-wrap"},[t._l(t.addedItems,(function(e,l){return[n("div",{key:l,staticClass:"\n            w-full\n            flex\n            justify-between\n            items-center\n            border-b-2\n            pr-2\n            py-4\n          "},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"w-12",attrs:{src:"/img/toys/"+e.productImg,alt:""}}),t._v(" "),n("p",{staticClass:"text-black opacity-80 text-sm ml-2"},[t._v("\n              "+t._s(e.miniName)+"\n            ")])]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("p",{staticClass:"text-black opacity-80 mr-2 text-sm"},[t._v("\n              "+t._s("$"+e.productPrice)+"\n            ")]),t._v(" "),n("button",{staticClass:"bg-transparent outline-none focus:outline-none",on:{click:function(e){return t.delItem(l)}}},[n("img",{attrs:{src:"/img/cross-icon.svg",alt:""}})])])])]})),t._v(" "),n("div",{staticClass:"w-full py-4"},[n("p",{staticClass:"text-sm text-blue text-center mb-4"},[t._v("\n          Total amount: "+t._s("$"+t.totalAmount)+"\n        ")]),t._v(" "),n("button",{staticClass:"\n            btn-gradient\n            text-white\n            outline-none\n            focus:outline-none\n            w-full\n            h-11\n            rounded-full\n            flex\n            items-center\n            justify-center\n          "},[t._v("\n          Checkout\n        ")])])],2)])])}),[],!1,null,"9ea9a9d6",null);e.default=component.exports},387:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("0f0a61b5",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";n(387)},394:function(t,e,n){var l=n(53)((function(i){return i[1]}));l.push([t.i,".product-bg[data-v-08465596]{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0) 48.95%),url(/img/item-bg.png) 50%/cover no-repeat}",""]),l.locals={},t.exports=l},402:function(t,e,n){"use strict";n.r(e);var l={methods:{goBack:function(){this.$router.push("/")},addToCart:function(){this.$store.commit("updateCart",{id:1,productFrom:"2016",productTo:"2017",productName:"logo-1.svg",productImg:"toy-1.png",causeOfDeath:"Mockery and non-functionality",productPrice:59.99,miniName:"juicero"})}}},c=(n(393),n(39)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative md:pb-0 pb-40"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"sticky top-3/4 w-full lg:flex hidden justify-end xl:pr-20",staticStyle:{"z-index":"70"}},[n("CartDropdownComponent")],1),t._v(" "),0!==t.$store.state.addedToCart.length?n("div",{staticClass:"lg:hidden flex absolute bottom-0 w-full justify-center",staticStyle:{"z-index":"62"}},[n("CartDropdownComponent")],1):t._e(),t._v(" "),n("div",{staticClass:"fixed sm:top-20 top-0 z-50 w-full flex justify-center",staticStyle:{"z-index":"62"}},[n("button",{staticClass:"bg-transparent outline-none focus:outline-none",on:{click:t.goBack}},[n("img",{attrs:{src:"/img/back-img.svg",alt:""}})])]),t._v(" "),n("div",{staticClass:"flex flex-wrap 2xl:pt-40 pt-36 relative md:pb-0",staticStyle:{"z-index":"60"}},[t._m(4),t._v(" "),n("div",{staticClass:"\n        md:w-360px\n        w-full\n        lg:px-6\n        md:px-6\n        px-10\n        mx-auto\n        flex flex-wrap\n        md:bg-white\n      "},[n("div",{staticClass:"w-full -mt-8"},[n("button",{staticClass:"\n            btn-gradient\n            outline-none\n            focus:outline-none\n            items-center\n            h-16\n            rounded-full\n            text-center text-white text-xl\n            w-full\n          ",on:{click:t.addToCart}},[t._v("\n          Add to cart "),n("span",{staticClass:"opacity-50 ml-2"},[t._v("$59.99")])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("div",{staticClass:"w-full mt-6"},[n("button",{staticClass:"\n            btn-gradient\n            outline-none\n            focus:outline-none\n            items-center\n            h-16\n            rounded-full\n            text-center text-white text-xl\n            w-full\n            mb-3\n          ",on:{click:t.addToCart}},[t._v("\n          Add to cart "),n("span",{staticClass:"opacity-50 ml-2"},[t._v("$59.99")])]),t._v(" "),n("button",{staticClass:"\n            btn-gradient-secondary\n            outline-none\n            focus:outline-none\n            items-center\n            h-16\n            rounded-full\n            text-center text-xl\n            w-full\n            text-secondary\n          ",on:{click:t.goBack}},[n("span",{staticClass:"opacity-50"},[t._v("Back to overview")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky top-0 z-50 bg-transparent"},[n("img",{staticClass:"absolute xl:block hidden z-50 w-full",attrs:{src:"/img/product-temple.png",alt:""}}),t._v(" "),n("img",{staticClass:"absolute xl:hidden md:block hidden z-50",attrs:{src:"/img/product-temple-tab.png",alt:""}}),t._v(" "),n("img",{staticClass:"absolute md:hidden block z-50 w-full",attrs:{src:"/img/product-temple-mob.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed top-4 md:right-20 right-0",staticStyle:{"z-index":"62"}},[n("img",{staticClass:"ml-auto sm:w-full w-1/2 md:block hidden",attrs:{src:"/img/label.png",alt:""}}),t._v(" "),n("img",{staticClass:"-mt-5 sm:w-full w-2/3 ml-auto sm:mr-0 -mr-5",attrs:{src:"/img/angel-2.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed top-4 md:left-20 left-0",staticStyle:{"z-index":"62"}},[n("img",{staticClass:"sm:w-full w-1/2 md:block hidden",attrs:{src:"/img/label.png",alt:""}}),t._v(" "),n("img",{staticClass:"-mt-5 sm:w-full w-2/3 sm:ml-0 -ml-5",attrs:{src:"/img/angel.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n      md:flex\n      hidden\n      flex-wrap\n      md:justify-between\n      justify-center\n      sticky\n      top-0\n      items-start\n      md:pt-0\n      pt-28\n    ",staticStyle:{"z-index":"60"}},[n("img",{staticClass:"absolute top-20",attrs:{src:"/img/product-castle-pillar.svg",alt:""}}),t._v(" "),n("img",{staticClass:"absolute right-0 top-20",attrs:{src:"/img/product-castle-pillar.svg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full lg:px-0 md:px-6 px-10"},[n("div",{staticClass:"\n          md:w-360px\n          w-full\n          product-bg\n          mx-auto\n          flex flex-wrap\n          rounded-t-full\n          py-10\n        "},[n("div",{staticClass:"w-full flex justify-center items-center space-x-3"},[n("p",{staticClass:"text-sm text-black opacity-50"},[t._v("2016")]),t._v(" "),n("img",{attrs:{src:"/img/death-icon.svg",alt:""}}),t._v(" "),n("p",{staticClass:"text-sm text-black opacity-50"},[t._v("2017")])]),t._v(" "),n("div",{staticClass:"w-full flex justify-center my-5"},[n("img",{attrs:{src:"/img/toy-logos/logo-1.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"w-full flex justify-center"},[n("img",{attrs:{src:"/img/toys/toy-1.png",alt:""}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full flex md:flex-nowrap flex-wrap my-4 md:space-x-4"},[n("div",{staticClass:"md:w-1/2 w-full"},[n("fieldset",{staticClass:"\n              border border-black-light\n              rounded-20px\n              text-center\n              h-100px\n              flex\n              items-center\n              justify-center\n            "},[n("legend",{staticClass:"uppercase text-black opacity-50 px-2 text-sm"},[t._v("\n              toy specs\n            ")]),t._v(" "),n("p",{staticClass:"text-black opacity-90 text-sm"},[t._v("\n              Weight: 122g "),n("br"),t._v("\n              Size: 52x52x89mm Material: PVC\n            ")])])]),t._v(" "),n("div",{staticClass:"md:w-1/2 w-full md:my-0 my-5"},[n("fieldset",{staticClass:"\n              border border-black-light\n              rounded-20px\n              text-center\n              h-100px\n              flex\n              items-center\n              justify-center\n            "},[n("legend",{staticClass:"uppercase text-black opacity-50 px-2 text-sm"},[t._v("\n              startup specs\n            ")]),t._v(" "),n("p",{staticClass:"text-black opacity-90 text-sm"},[t._v("\n              Lifespan: 1 year "),n("br"),t._v("\n              Funding: $120M "),n("br"),t._v("\n              Units shipped: ~2-3k "),n("br"),t._v("\n              Retail Price: $200\n            ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("img",{attrs:{src:"/img/product-image.png",alt:""}}),t._v(" "),n("img",{staticClass:"my-6",attrs:{src:"/img/product-image-2.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("p",{staticClass:"text-center text-sm text-black opacity-50 uppercase mb-4"},[t._v("\n          the story\n        ")]),t._v(" "),n("p",{staticClass:"text-xl text-black opacity-90"},[t._v("\n          Juicero was a company that made a device that was marketed as a\n          fruit and vegetable juicer but was revealed to extrat juice from\n          pre-processed packets.\n          "),n("br"),t._v(" "),n("br")]),t._v(" "),n("p",{staticClass:"text-black opacity-90"},[t._v('\n          The $400 Wi-Fi-connected juicer, billed by company founder Doug\n          Evans as "The first at home cold-pressed juicing system," promised\n          conveniece. Wellnes, A world where a glass of fresh juice in the\n          morning didn\'t require you to squeeze pulpy citrus between your bare\n          hands like monkey. '),n("br"),t._v(" "),n("br"),t._v('\n          It was as simple as pulling out a "produce pack" (a sachet of\n          prechopped fruits and vegetables), securing it between the juicero\'s\n          flat squeezing plates and pressing a button to get instant\n          cold-pressed juice.\n        ')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full my-6"},[e("img",{attrs:{src:"/img/product-image-3.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("p",{staticClass:"text-black opacity-90"},[t._v("\n          I'm not saying we have to stop innovating or cut the tech out of our\n          lives. But I also didn't ask for the perfect storm we've somehow\n          woken up in: a Silicon Valley amalgam of tech-bro babysitting,\n          post-Goop wellness and the internet-of-spinach. "),n("br"),t._v(" "),n("br"),t._v("\n          Let me live a simple life. Let me get back to nature. "),n("br"),t._v("\n          Let me squeeze fruit with my damn, dirt ape-hands.\n        ")])])}],!1,null,"08465596",null);e.default=component.exports;installComponents(component,{CartDropdownComponent:n(366).default})}}]);