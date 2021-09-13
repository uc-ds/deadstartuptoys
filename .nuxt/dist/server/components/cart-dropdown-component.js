exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=cart-dropdown-component.js.map