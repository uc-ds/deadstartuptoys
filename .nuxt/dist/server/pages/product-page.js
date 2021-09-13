exports.ids = [8,1];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4557dc76", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdownComponent_vue_vue_type_style_index_0_id_9ea9a9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdownComponent_vue_vue_type_style_index_0_id_9ea9a9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdownComponent_vue_vue_type_style_index_0_id_9ea9a9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdownComponent_vue_vue_type_style_index_0_id_9ea9a9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdownComponent_vue_vue_type_style_index_0_id_9ea9a9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".indicator-bg[data-v-9ea9a9d6]{background:url(/img/indicator-bg.png)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartDropdownComponent.vue?vue&type=template&id=9ea9a9d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-300px h-full relative inline-block cool-transition",class:_vm.toggleMenu ? '' : 'overflow-hidden'},[_vm._ssrNode("<img src=\"/img/cart.png\" alt class=\"ml-auto relative z-50 -mb-4\" data-v-9ea9a9d6> <button class=\"relative w-full flex h-20 items-center z-40\" data-v-9ea9a9d6><img src=\"/img/dropdown-img.png\" alt class=\"absolute w-full h-full\" data-v-9ea9a9d6> <div class=\"relative z-20 flex justify-center w-full space-x-4\" data-v-9ea9a9d6><img src=\"/img/cart-heading.png\" alt data-v-9ea9a9d6> <div class=\"indicator-bg w-7 h-7 flex items-center justify-center\" data-v-9ea9a9d6><span class=\"text-xl filter drop-shadow-text-dense text-shadow\" data-v-9ea9a9d6>"+_vm._ssrEscape(_vm._s(_vm.$store.state.addedToCart.length))+"</span></div></div></button> <div"+(_vm._ssrClass("\n      bg-white\n      shadow-main\n      border border-black-light\n      rounded-t-xl\n      w-260px\n      mx-auto\n      py-3\n      px-4\n      cool-transition\n      absolute\n      bottom-20\n      left-1/2\n      right-1/2\n      -translate-x-1/2\n    ",_vm.toggleMenu ? 'block' : 'hidden'))+" data-v-9ea9a9d6><div class=\"flex flex-wrap\" data-v-9ea9a9d6>"+(_vm._ssrList((_vm.addedItems),function(item,index){return ("<div class=\"\n            w-full\n            flex\n            justify-between\n            items-center\n            border-b-2\n            pr-2\n            py-4\n          \" data-v-9ea9a9d6><div class=\"flex items-center\" data-v-9ea9a9d6><img"+(_vm._ssrAttr("src",("/img/toys/" + (item.productImg))))+" alt class=\"w-12\" data-v-9ea9a9d6> <p class=\"text-black opacity-80 text-sm ml-2\" data-v-9ea9a9d6>"+_vm._ssrEscape("\n              "+_vm._s(item.miniName)+"\n            ")+"</p></div> <div class=\"flex items-center\" data-v-9ea9a9d6><p class=\"text-black opacity-80 mr-2 text-sm\" data-v-9ea9a9d6>"+_vm._ssrEscape("\n              "+_vm._s("$" + item.productPrice)+"\n            ")+"</p> <button class=\"bg-transparent outline-none focus:outline-none\" data-v-9ea9a9d6><img src=\"/img/cross-icon.svg\" alt data-v-9ea9a9d6></button></div></div>")}))+" <div class=\"w-full py-4\" data-v-9ea9a9d6><p class=\"text-sm text-blue text-center mb-4\" data-v-9ea9a9d6>"+_vm._ssrEscape("\n          Total amount: "+_vm._s("$" + _vm.totalAmount)+"\n        ")+"</p> <button class=\"\n            btn-gradient\n            text-white\n            outline-none\n            focus:outline-none\n            w-full\n            h-11\n            rounded-full\n            flex\n            items-center\n            justify-center\n          \" data-v-9ea9a9d6>\n          Checkout\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CartDropdownComponent.vue?vue&type=template&id=9ea9a9d6&scoped=true&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CartDropdownComponent.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CartDropdownComponentvue_type_script_lang_ts_CartDropdownComponent = class CartDropdownComponent extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.addedItems = this.$store.state.addedToCart;
    this.totalAmount = "";
    this.toggleMenu = false;

    this.delItem = item => {
      this.$store.commit("removeItem", item);
    };
  }

  mounted() {
    let amountInTotal = 0;
    this.addedItems.forEach(item => {
      amountInTotal += item.productPrice;
    });
    this.totalAmount = amountInTotal;
  }

  updated() {
    let amountInTotal = 0;
    this.addedItems.forEach(item => {
      amountInTotal += item.productPrice;
    });
    this.totalAmount = amountInTotal;
  }

};
CartDropdownComponentvue_type_script_lang_ts_CartDropdownComponent = __decorate([Object(external_nuxt_property_decorator_["Component"])({})], CartDropdownComponentvue_type_script_lang_ts_CartDropdownComponent);
/* harmony default export */ var CartDropdownComponentvue_type_script_lang_ts_ = (CartDropdownComponentvue_type_script_lang_ts_CartDropdownComponent);
// CONCATENATED MODULE: ./components/CartDropdownComponent.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CartDropdownComponentvue_type_script_lang_ts_ = (CartDropdownComponentvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CartDropdownComponent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CartDropdownComponentvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9ea9a9d6",
  "2e7606a5"
  
)

/* harmony default export */ var components_CartDropdownComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0f0a61b5", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_style_index_0_id_08465596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_style_index_0_id_08465596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_style_index_0_id_08465596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_style_index_0_id_08465596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_page_vue_vue_type_style_index_0_id_08465596_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-bg[data-v-08465596]{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0) 48.95%),url(/img/item-bg.png) 50%/cover no-repeat}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product-page.vue?vue&type=template&id=08465596&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative md:pb-0 pb-40"},[_vm._ssrNode("<div class=\"sticky top-0 z-50 bg-transparent\" data-v-08465596><img src=\"/img/product-temple.png\" alt class=\"absolute xl:block hidden z-50 w-full\" data-v-08465596> <img src=\"/img/product-temple-tab.png\" alt class=\"absolute xl:hidden md:block hidden z-50\" data-v-08465596> <img src=\"/img/product-temple-mob.png\" alt class=\"absolute md:hidden block z-50 w-full\" data-v-08465596></div> <div class=\"fixed top-4 md:right-20 right-0\" style=\"z-index: 62\" data-v-08465596><img src=\"/img/label.png\" alt class=\"ml-auto sm:w-full w-1/2 md:block hidden\" data-v-08465596> <img src=\"/img/angel-2.png\" alt class=\"-mt-5 sm:w-full w-2/3 ml-auto sm:mr-0 -mr-5\" data-v-08465596></div> <div class=\"fixed top-4 md:left-20 left-0\" style=\"z-index: 62\" data-v-08465596><img src=\"/img/label.png\" alt class=\"sm:w-full w-1/2 md:block hidden\" data-v-08465596> <img src=\"/img/angel.png\" alt class=\"-mt-5 sm:w-full w-2/3 sm:ml-0 -ml-5\" data-v-08465596></div> <div class=\"\n      md:flex\n      hidden\n      flex-wrap\n      md:justify-between\n      justify-center\n      sticky\n      top-0\n      items-start\n      md:pt-0\n      pt-28\n    \" style=\"z-index: 60\" data-v-08465596><img src=\"/img/product-castle-pillar.svg\" alt class=\"absolute top-20\" data-v-08465596> <img src=\"/img/product-castle-pillar.svg\" alt class=\"absolute right-0 top-20\" data-v-08465596></div> "),_vm._ssrNode("<div class=\"sticky top-3/4 w-full lg:flex hidden justify-end xl:pr-20\" style=\"z-index: 70\" data-v-08465596>","</div>",[_c('CartDropdownComponent')],1),_vm._ssrNode(" "),(_vm.$store.state.addedToCart.length !== 0)?_vm._ssrNode("<div class=\"lg:hidden flex absolute bottom-0 w-full justify-center\" style=\"z-index: 62\" data-v-08465596>","</div>",[_c('CartDropdownComponent')],1):_vm._e(),_vm._ssrNode(" <div class=\"fixed sm:top-20 top-0 z-50 w-full flex justify-center\" style=\"z-index: 62\" data-v-08465596><button class=\"bg-transparent outline-none focus:outline-none\" data-v-08465596><img src=\"/img/back-img.svg\" alt data-v-08465596></button></div> <div class=\"flex flex-wrap 2xl:pt-40 pt-36 relative md:pb-0\" style=\"z-index: 60\" data-v-08465596><div class=\"w-full lg:px-0 md:px-6 px-10\" data-v-08465596><div class=\"\n          md:w-360px\n          w-full\n          product-bg\n          mx-auto\n          flex flex-wrap\n          rounded-t-full\n          py-10\n        \" data-v-08465596><div class=\"w-full flex justify-center items-center space-x-3\" data-v-08465596><p class=\"text-sm text-black opacity-50\" data-v-08465596>2016</p> <img src=\"/img/death-icon.svg\" alt data-v-08465596> <p class=\"text-sm text-black opacity-50\" data-v-08465596>2017</p></div> <div class=\"w-full flex justify-center my-5\" data-v-08465596><img src=\"/img/toy-logos/logo-1.svg\" alt data-v-08465596></div> <div class=\"w-full flex justify-center\" data-v-08465596><img src=\"/img/toys/toy-1.png\" alt data-v-08465596></div></div></div> <div class=\"\n        md:w-360px\n        w-full\n        lg:px-6\n        md:px-6\n        px-10\n        mx-auto\n        flex flex-wrap\n        md:bg-white\n      \" data-v-08465596><div class=\"w-full -mt-8\" data-v-08465596><button class=\"\n            btn-gradient\n            outline-none\n            focus:outline-none\n            items-center\n            h-16\n            rounded-full\n            text-center text-white text-xl\n            w-full\n          \" data-v-08465596>\n          Add to cart <span class=\"opacity-50 ml-2\" data-v-08465596>$59.99</span></button></div> <div class=\"w-full flex md:flex-nowrap flex-wrap my-4 md:space-x-4\" data-v-08465596><div class=\"md:w-1/2 w-full\" data-v-08465596><fieldset class=\"\n              border border-black-light\n              rounded-20px\n              text-center\n              h-100px\n              flex\n              items-center\n              justify-center\n            \" data-v-08465596><legend class=\"uppercase text-black opacity-50 px-2 text-sm\" data-v-08465596>\n              toy specs\n            </legend> <p class=\"text-black opacity-90 text-sm\" data-v-08465596>\n              Weight: 122g <br data-v-08465596>\n              Size: 52x52x89mm Material: PVC\n            </p></fieldset></div> <div class=\"md:w-1/2 w-full md:my-0 my-5\" data-v-08465596><fieldset class=\"\n              border border-black-light\n              rounded-20px\n              text-center\n              h-100px\n              flex\n              items-center\n              justify-center\n            \" data-v-08465596><legend class=\"uppercase text-black opacity-50 px-2 text-sm\" data-v-08465596>\n              startup specs\n            </legend> <p class=\"text-black opacity-90 text-sm\" data-v-08465596>\n              Lifespan: 1 year <br data-v-08465596>\n              Funding: $120M <br data-v-08465596>\n              Units shipped: ~2-3k <br data-v-08465596>\n              Retail Price: $200\n            </p></fieldset></div></div> <div class=\"w-full\" data-v-08465596><img src=\"/img/product-image.png\" alt data-v-08465596> <img src=\"/img/product-image-2.png\" alt class=\"my-6\" data-v-08465596></div> <div class=\"w-full\" data-v-08465596><p class=\"text-center text-sm text-black opacity-50 uppercase mb-4\" data-v-08465596>\n          the story\n        </p> <p class=\"text-xl text-black opacity-90\" data-v-08465596>\n          Juicero was a company that made a device that was marketed as a\n          fruit and vegetable juicer but was revealed to extrat juice from\n          pre-processed packets.\n          <br data-v-08465596> <br data-v-08465596></p> <p class=\"text-black opacity-90\" data-v-08465596>\n          The $400 Wi-Fi-connected juicer, billed by company founder Doug\n          Evans as &quot;The first at home cold-pressed juicing system,&quot; promised\n          conveniece. Wellnes, A world where a glass of fresh juice in the\n          morning didn't require you to squeeze pulpy citrus between your bare\n          hands like monkey. <br data-v-08465596> <br data-v-08465596>\n          It was as simple as pulling out a &quot;produce pack&quot; (a sachet of\n          prechopped fruits and vegetables), securing it between the juicero's\n          flat squeezing plates and pressing a button to get instant\n          cold-pressed juice.\n        </p></div> <div class=\"w-full my-6\" data-v-08465596><img src=\"/img/product-image-3.png\" alt data-v-08465596></div> <div class=\"w-full\" data-v-08465596><p class=\"text-black opacity-90\" data-v-08465596>\n          I'm not saying we have to stop innovating or cut the tech out of our\n          lives. But I also didn't ask for the perfect storm we've somehow\n          woken up in: a Silicon Valley amalgam of tech-bro babysitting,\n          post-Goop wellness and the internet-of-spinach. <br data-v-08465596> <br data-v-08465596>\n          Let me live a simple life. Let me get back to nature. <br data-v-08465596>\n          Let me squeeze fruit with my damn, dirt ape-hands.\n        </p></div> <div class=\"w-full mt-6\" data-v-08465596><button class=\"\n            btn-gradient\n            outline-none\n            focus:outline-none\n            items-center\n            h-16\n            rounded-full\n            text-center text-white text-xl\n            w-full\n            mb-3\n          \" data-v-08465596>\n          Add to cart <span class=\"opacity-50 ml-2\" data-v-08465596>$59.99</span></button> <button class=\"\n            btn-gradient-secondary\n            outline-none\n            focus:outline-none\n            items-center\n            h-16\n            rounded-full\n            text-center text-xl\n            w-full\n            text-secondary\n          \" data-v-08465596><span class=\"opacity-50\" data-v-08465596>Back to overview</span></button></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product-page.vue?vue&type=template&id=08465596&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var product_pagevue_type_script_lang_js_ = ({
  methods: {
    goBack() {
      this.$router.push("/");
    },

    addToCart() {
      let item = {
        id: 1,
        productFrom: "2016",
        productTo: "2017",
        productName: "logo-1.svg",
        productImg: "toy-1.png",
        causeOfDeath: "Mockery and non-functionality",
        productPrice: 59.99,
        miniName: "juicero"
      };
      this.$store.commit("updateCart", item);
    }

  }
});
// CONCATENATED MODULE: ./pages/product-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_product_pagevue_type_script_lang_js_ = (product_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/product-page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_product_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "08465596",
  "7da80f2c"
  
)

/* harmony default export */ var product_page = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CartDropdownComponent: __webpack_require__(42).default})


/***/ })

};;
//# sourceMappingURL=product-page.js.map