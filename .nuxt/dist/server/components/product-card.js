exports.ids = [5];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0c041bd3", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_11d01c9f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_11d01c9f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_11d01c9f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_11d01c9f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_11d01c9f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item-bg[data-v-11d01c9f]{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0) 48.95%),url(/img/item-bg.png) 50%/cover no-repeat}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=11d01c9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    min-h-580px\n    h-full\n    md:w-400px\n    w-full\n    rounded-t-full rounded-b-20px\n    flex flex-wrap\n    overflow-hidden\n  "},[_vm._ssrNode("<div class=\"w-full rounded-t-full item-bg flex flex-wrap items-start pt-8 px-4\" data-v-11d01c9f><div class=\"w-full flex justify-center items-center space-x-3\" data-v-11d01c9f><p class=\"text-sm text-black opacity-50\" data-v-11d01c9f>"+_vm._ssrEscape(_vm._s(_vm.productFrom))+"</p> <img src=\"/img/death-icon.svg\" alt data-v-11d01c9f> <p class=\"text-sm text-black opacity-50\" data-v-11d01c9f>"+_vm._ssrEscape(_vm._s(_vm.productTo))+"</p></div> <div class=\"w-full flex justify-center my-5\" data-v-11d01c9f><img"+(_vm._ssrAttr("src",("/img/toy-logos/" + _vm.productName)))+" alt data-v-11d01c9f></div> <div class=\"w-full flex justify-center\" data-v-11d01c9f><img"+(_vm._ssrAttr("src",("/img/toys/" + _vm.productImg)))+" alt data-v-11d01c9f></div></div> <div class=\"w-full bg-white rounded-b-20px px-4 pt-5 flex flex-wrap\" data-v-11d01c9f><div class=\"w-full\" data-v-11d01c9f><fieldset class=\"border pb-3 pt-2 rounded-20px\" data-v-11d01c9f><legend class=\"text-sm text-black opacity-50 px-4\" data-v-11d01c9f>\n          Cause Of Death\n        </legend> <p class=\"md:text-xl text-lg\" data-v-11d01c9f>"+_vm._ssrEscape(_vm._s(_vm.causeOfDeath))+"</p></fieldset></div> <div class=\"\n        mb-3\n        w-full\n        flex\n        md:flex-nowrap\n        flex-wrap\n        justify-between\n        items-center\n        md:space-x-2\n      \" data-v-11d01c9f><button class=\"\n          md:my-0\n          my-2\n          outline-none\n          focus:outline-none\n          btn-gradient\n          px-8\n          rounded-full\n          text-white\n          md:text-xl\n          text-lg\n          flex\n          items-center\n          md:w-auto\n          w-full\n          justify-center\n          h-16\n          truncate\n        \" data-v-11d01c9f>\n        Add to cart\n        <span class=\"opacity-50 ml-2\" data-v-11d01c9f>"+_vm._ssrEscape(_vm._s(_vm.productPrice))+"</span></button> <button class=\"\n          outline-none\n          focus:outline-none\n          btn-gradient-secondary\n          px-10\n          border border-secondary\n          text-secondary\n          opacity-50\n          flex\n          items-center\n          rounded-full\n          md:w-auto\n          w-full\n          justify-center\n          h-16\n        \" data-v-11d01c9f>\n        Story\n      </button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=11d01c9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=ts&
/* harmony default export */ var ProductCardvue_type_script_lang_ts_ = ({
  name: "ProductCard",
  props: {
    productFrom: String,
    productTo: String,
    productName: String,
    productImg: String,
    causeOfDeath: String,
    productPrice: Number
  },
  methods: {
    clickCart() {
      // @ts-ignore
      this.$emit("onCartClick");
    },

    goToProduct() {
      // @ts-ignore
      this.$router.push("/product-page");
    }

  }
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_ts_ = (ProductCardvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11d01c9f",
  "2f903258"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-card.js.map