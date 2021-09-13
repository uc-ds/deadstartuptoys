exports.ids = [4];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0e24d9d2", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_1f9f1e5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_1f9f1e5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_1f9f1e5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_1f9f1e5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBanner_vue_vue_type_style_index_0_id_1f9f1e5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".banner-bg[data-v-1f9f1e5d]{background:url(/img/clouds-bg.png) 50%/cover no-repeat fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageBanner.vue?vue&type=template&id=1f9f1e5d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"\n    h-screen\n    bg-red-400\n    flex\n    items-center\n    relative\n    banner-bg\n    overflow-hidden\n  "},[_vm._ssrNode("<img src=\"/img/label.png\" alt class=\"w-1/3 md:hidden block top-0 fixed z-50 left-1/2 right-1/2 -translate-x-1/2\" data-v-1f9f1e5d> <img src=\"/img/castle.png\" alt class=\"fixed z-40 h-full w-full\" data-v-1f9f1e5d> <div class=\"fixed top-4 md:right-8 right-0 z-50\" data-v-1f9f1e5d><img src=\"/img/label.png\" alt class=\"ml-auto sm:w-full w-1/2 md:block hidden\" data-v-1f9f1e5d> <img src=\"/img/angel-2.png\" alt class=\"-mt-5 sm:w-full w-2/3 ml-auto sm:mr-0 -mr-5\" data-v-1f9f1e5d></div> <div class=\"fixed top-4 md:left-8 left-0 z-50\" data-v-1f9f1e5d><img src=\"/img/label.png\" alt class=\"sm:w-full w-1/2 md:block hidden\" data-v-1f9f1e5d> <img src=\"/img/angel.png\" alt class=\"-mt-5 sm:w-full w-2/3 sm:ml-0 -ml-5\" data-v-1f9f1e5d></div> <img src=\"/img/banner-castle-footer.svg\" alt class=\"\n      absolute\n      bottom-0\n      left-0\n      right-0\n      w-11/12\n      mx-auto\n      z-30\n      md:block\n      hidden\n    \" data-v-1f9f1e5d> <img src=\"/img/castle-footer-mob.png\" alt class=\"\n      absolute\n      bottom-0\n      left-0\n      right-0\n      w-full\n      mx-auto\n      z-30\n      md:hidden\n      block\n      sm:h-auto h-1/5\n    \" data-v-1f9f1e5d> <div class=\"w-full flex flex-wrap fixed z-20 sm:px-0 px-10\" data-v-1f9f1e5d><div class=\"w-full flex flex-wrap\" data-v-1f9f1e5d><div class=\"w-full text-center\" data-v-1f9f1e5d><h1 class=\"\n            md:text-110px\n            text-56px\n            recoleta-font\n            text-white\n            filter\n            drop-shadow-text\n            md:leading-tight leading-none\n          \" data-v-1f9f1e5d>\n          Dead <br class=\"sm:hidden block\" data-v-1f9f1e5d>\n          Startup <br class=\"sm:hidden block\" data-v-1f9f1e5d>\n          Toys\n        </h1></div> <div class=\"w-full text-center sm:mb-10 mb-6 sm:mt-0 mt-4\" data-v-1f9f1e5d><p class=\"filter drop-shadow-text md:text-4xl text-xl text-white\" data-v-1f9f1e5d>\n          Toy versions of iconic <br class=\"sm:hidden block\" data-v-1f9f1e5d>\n          failed startups\n        </p></div> <div class=\"w-full flex justify-center\" data-v-1f9f1e5d><a href=\"#products\" class=\"\n            btn-gradient\n            text-white\n            flex flex-wrap\n            shadow-main\n            rounded-full\n            sm:py-3 py-1\n            px-8\n            text-center\n          \" data-v-1f9f1e5d><span class=\"w-full sm:text-xl text-lg sm:mb-2\" data-v-1f9f1e5d>Shop now</span> <span class=\"w-full sm:text-xl text-lg opacity-50\" data-v-1f9f1e5d>Limited edition</span></a></div></div></div> <div class=\"\n      flex\n      lg:flex-nowrap\n      flex-wrap\n      fixed\n      z-20\n      w-full\n      justify-between\n      h-full\n      overflow-y-hidden\n    \" data-v-1f9f1e5d><div class=\"w-full relative\" data-v-1f9f1e5d><img src=\"/img/floating-toy-1.svg\" alt class=\"toy-1 absolute -top-1/2 left-40\" data-v-1f9f1e5d> <img src=\"/img/floating-toy-2.svg\" alt class=\"toy-2 absolute sm:left-3/4 left-1/3 -top-1/2\" data-v-1f9f1e5d> <img src=\"/img/floating-toy-3.svg\" alt class=\"toy-3 absolute left-1/4 -top-1/2\" data-v-1f9f1e5d> <img src=\"/img/floating-toy-4.svg\" alt class=\"toy-4 absolute left-1/3 -top-1/2\" data-v-1f9f1e5d> <img src=\"/img/floating-toy-5.svg\" alt class=\"toy-5 absolute left-1/2 -top-1/2\" data-v-1f9f1e5d></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PageBanner.vue?vue&type=template&id=1f9f1e5d&scoped=true&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(36);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(37);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageBanner.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PageBannervue_type_script_lang_ts_PageBanner = class PageBanner extends external_nuxt_property_decorator_["Vue"] {
  mounted() {
    external_gsap_default.a.from(".toy-1", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000
    });
    external_gsap_default.a.from(".toy-2", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 1.5
    });
    external_gsap_default.a.from(".toy-3", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 2.5
    });
    external_gsap_default.a.from(".toy-4", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 3.5
    });
    external_gsap_default.a.from(".toy-5", {
      y: 2000,
      ease: "ease.out",
      duration: 20,
      repeat: 1000000,
      delay: 4.5
    });
  }

};
PageBannervue_type_script_lang_ts_PageBanner = __decorate([Object(external_nuxt_property_decorator_["Component"])({})], PageBannervue_type_script_lang_ts_PageBanner);
/* harmony default export */ var PageBannervue_type_script_lang_ts_ = (PageBannervue_type_script_lang_ts_PageBanner);
// CONCATENATED MODULE: ./components/PageBanner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageBannervue_type_script_lang_ts_ = (PageBannervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageBannervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f9f1e5d",
  "31da7e1c"
  
)

/* harmony default export */ var components_PageBanner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=page-banner.js.map