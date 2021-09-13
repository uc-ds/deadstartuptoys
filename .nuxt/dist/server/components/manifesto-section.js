exports.ids = [3];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6eba89da", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManifestoSection_vue_vue_type_style_index_0_id_1cf3a2f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManifestoSection_vue_vue_type_style_index_0_id_1cf3a2f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManifestoSection_vue_vue_type_style_index_0_id_1cf3a2f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManifestoSection_vue_vue_type_style_index_0_id_1cf3a2f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManifestoSection_vue_vue_type_style_index_0_id_1cf3a2f3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".manifesto-bg[data-v-1cf3a2f3]{background:url(/img/manifesto-bg.png) 50%/cover no-repeat}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ManifestoSection.vue?vue&type=template&id=1cf3a2f3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"h-full manifesto-bg sm:pt-40 pt-52 lg:px-0 md:px-6 px-4 md:pb-28 pb-40"},[_vm._ssrNode("<div class=\"container mx-auto\" data-v-1cf3a2f3><div class=\"flex flex-wrap\" data-v-1cf3a2f3><div class=\"xl:w-full lg:w-3/4 mx-auto flex justify-center\" data-v-1cf3a2f3><img src=\"/img/manifesto-text.png\" alt class=\"md:block hidden\" data-v-1cf3a2f3> <img src=\"/img/manifesto-text-mob.png\" alt class=\"md:hidden block\" data-v-1cf3a2f3></div> <div class=\"\n          lg:w-4/5\n          mx-auto\n          w-full\n          flex\n          lg:flex-nowrap\n          lg:space-x-6\n          flex-wrap\n          mt-10\n        \" data-v-1cf3a2f3><div class=\"lg:w-1/2 w-full lg:mb-0 mb-6\" data-v-1cf3a2f3><p class=\"\n              text-lg text-shadow\n              filter\n              drop-shadow-text-dense\n              sfcompact-font\n            \" data-v-1cf3a2f3>\n            If slow evolution - the accumulation of tiny changes over geologic\n            time - is insufficient to account for all evolutionary leaps, so\n            the theory goes, then perhaps there exist macroevolutionary jumps\n            due to large mutations that create organisms with significant\n            advantages over their erstwhile species. These macro-mutant\n            organisms are dubbed Hopeful Monsters, born without kin or kind,\n            seeking that slimmest improbable chance to thrive. <br data-v-1cf3a2f3> <br data-v-1cf3a2f3>\n            This is by no means widely accepted - common criticisms point\n            rightly to the fact that macroevolutionary mutations are almost\n            invariably lethal, or render the mutant sterile, unable to\n            propagate their mutation forward. <br data-v-1cf3a2f3> <br data-v-1cf3a2f3>\n            This all, looking at the history of fledgling startups born from\n            the roiling primordial soup of our VC bubble, sounds about right.\n            Fuck Social Darwinism, but how about Corporate Goldschmidtism?\n          </p></div> <div class=\"lg:w-1/2 w-full\" data-v-1cf3a2f3><p class=\"\n              text-lg text-shadow\n              filter\n              drop-shadow-text-dense\n              sfcompact-font\n            \" data-v-1cf3a2f3>\n            A lineup of Dead Startup Toys on a shelf is the equivalent of a\n            line of heads on stakes, or the macabre pyramids of Kublai Khan.\n            Not exactly triumphant, given that companies fail through no real\n            fault of our own, as consumers– but schadenfreude is a small\n            sadism, after all. <br data-v-1cf3a2f3> <br data-v-1cf3a2f3>\n            This is not a memorialization. Let Thernanos burn and never taste\n            the light of heaven. Still we are perhaps honor-bound to\n            acknowledge the mutants, for they accomplish a certain weirding of\n            the world that we aspire to. Dead Startup Toys are not a\n            resurrection, to be sure, but perhaps they are a form of\n            necromancy: we celebrate their pale shadows, deprived of their\n            original context. <br data-v-1cf3a2f3> <br data-v-1cf3a2f3>\n            Behold these beautiful mutants, hoisted on petards of their own\n            solid-aluminum-unibody construction. We salute these voyagers,\n            flown too close to the blood-red suns of their own fever dreams,\n            on wings made of oh-so-flammable dollar bills, whose inexplicably\n            sincere hopes became our most surreal entertainment..\n          </p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ManifestoSection.vue?vue&type=template&id=1cf3a2f3&scoped=true&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ManifestoSection.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ManifestoSectionvue_type_script_lang_ts_ManifestoSection = class ManifestoSection extends external_nuxt_property_decorator_["Vue"] {};
ManifestoSectionvue_type_script_lang_ts_ManifestoSection = __decorate([Object(external_nuxt_property_decorator_["Component"])({})], ManifestoSectionvue_type_script_lang_ts_ManifestoSection);
/* harmony default export */ var ManifestoSectionvue_type_script_lang_ts_ = (ManifestoSectionvue_type_script_lang_ts_ManifestoSection);
// CONCATENATED MODULE: ./components/ManifestoSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ManifestoSectionvue_type_script_lang_ts_ = (ManifestoSectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ManifestoSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ManifestoSectionvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cf3a2f3",
  "7af634bc"
  
)

/* harmony default export */ var components_ManifestoSection = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=manifesto-section.js.map