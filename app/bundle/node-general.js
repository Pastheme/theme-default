/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(1)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/admin/node-general.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4d9ec951/node-general.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'General',
	        icon: 'pk-icon-large-settings',
	        priority: 10
	    },

	    props: ['config']

	};

	window.Site.components['site-general'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\n    <div data-uk-margin>\n        <h2 class=\"uk-margin-remove\">{{ 'General' | trans }}</h2>\n    </div>\n    <div data-uk-margin>\n        <button class=\"uk-button uk-button-primary\" type=\"submit\">{{ 'Save' | trans }}</button>\n    </div>\n</div>\n\n<div class=\"uk-form uk-form-horizontal\">\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <input id=\"form-title\" class=\"uk-form-width-large\" name=\"title\" type=\"text\" v-model=\"config.title\" v-validate:required>\n            <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Site title cannot be blank.' | trans }}</p>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-logo\" class=\"uk-form-label\">{{ 'Logo' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-width-large\">\n            <input-image :source.sync=\"config.view.logo\"></input-image>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-logo\" class=\"uk-form-label\">{{ 'Contrast Logo' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-width-large\">\n            <input-image :source.sync=\"config.view.contrast_logo\"></input-image>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-favicon\" class=\"uk-form-label\">{{ 'Favicon' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-width-large\">\n            <input-image :source.sync=\"config.icons.favicon\"></input-image>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-appicon\" class=\"uk-form-label\">{{ 'Appicon' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-width-large\">\n            <input-image :source.sync=\"config.icons.appicon\"></input-image>\n        </div>\n    </div>\n\n</div>\n\n";

/***/ })
/******/ ]);