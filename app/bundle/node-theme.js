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
	__vue_script__ = __webpack_require__(5)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/admin/node-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
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
	  var id = "_v-60c24eb6/node-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    props: ['config', 'node'],
	    section: {
	        label: 'Hero',
	        priority: 80
	    }
	};
	window.Site.components['node-theme'] = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "\n<section class=\"uk-grid pk-grid-large pk-width-sidebar-large uk-form-stacked\" data-uk-grid-margin>\n\n    <div class=\"pk-width-content\">\n\n        <div class=\"uk-form-row\">\n            <v-editor :value.sync=\"node.theme.hero.main.content\" :options=\"{markdown : false}\"></v-editor>\n        </div>\n\n    </div>\n\n    <div class=\"pk-width-sidebar\">\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-status\" class=\"uk-form-label\">{{ 'Status' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select id=\"form-status\" class=\"uk-form-width-large\" v-model=\"node.theme.hero.is\">\n                    <option value=\"0\">{{ 'Disabled' | trans }}</option>\n                    <option value=\"1\">{{ 'Enabled' | trans }}</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-status\" class=\"uk-form-label\">{{ 'Image' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input-image :source.sync=\"node.theme.hero.header.style.image\"></input-image>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-status\" class=\"uk-form-label\">{{ 'Background' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select class=\"uk-form-width-large\" v-model=\"node.theme.hero.header.class.background\">\n                    <option value=\"uk-background-primary\">Primary</option>\n                    <option value=\"uk-background-secondary\">Secondary</option>\n                    <option value=\"uk-background-default\">Default</option>\n                    <option value=\"uk-background-muted\">Muted</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-status\" class=\"uk-form-label\">{{ 'Other Class' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"node.theme.hero.header.class.otherClass\">\n            </div>\n        </div>\n\n        <hr />\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-status\" class=\"uk-form-label\">{{ 'Main Height' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select class=\"uk-form-width-large\" v-model=\"node.theme.hero.main.class.height\">\n                    <option value=\"\">Default</option>\n                    <option value=\"uk-height-1-1\">Height-1-1</option>\n                    <option value=\"uk-height-small\">Height-small</option>\n                    <option value=\"uk-height-max-small\">Height-max-small</option>\n                    <option value=\"uk-height-medium\">Height-medium</option>\n                    <option value=\"uk-height-large\">Height-large</option>\n                    <option value=\"uk-height-max-large\">Height-max-large</option>\n                    <option value=\"uk-height-viewport\">Height-viewport</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-status\" class=\"uk-form-label\">{{ 'Main Other Class' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"node.theme.hero.main.class.otherClass\">\n            </div>\n        </div>\n\n    </div>\n\n</section>\n";

/***/ })
/******/ ]);