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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(7)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/admin/widget-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
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
	  var id = "_v-3ca36e98/widget-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    section: {
	        label: 'Settings'
	    },

	    props: ['widget', 'config', 'form'],

	    created: function created() {
	        this.$options.partials = this.$parent.$options.partials;
	    }
	};
	window.Widgets.components['system-text:settings'] = module.exports;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-grid pk-grid-large pk-width-sidebar-large\" data-uk-grid-margin>\n    <div class=\"pk-width-content uk-form-stacked\">\n\n        <div class=\"uk-form-row\">\n\n            <input class=\"uk-width-1-1 uk-form-large\" type=\"text\" name=\"title\" :placeholder=\"'Enter Title' | trans\" v-model=\"widget.title\" v-validate:required>\n            <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p>\n\n        </div>\n\n        <div class=\"uk-form-row\">\n            <v-editor :value.sync=\"widget.data.content\" :options=\"{markdown : widget.data.markdown}\"></v-editor>\n            <p>\n                <label><input type=\"checkbox\" v-model=\"widget.data.markdown\"> {{ 'Enable Markdown' | trans }}</label>\n            </p>\n        </div>\n\n    </div>\n    <div class=\"pk-width-sidebar\">\n\n        <div class=\"uk-panel uk-form-stacked\">\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-status\" class=\"uk-form-label\">{{ 'Status' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <select id=\"form-status\" class=\"uk-width-1-1\" v-model=\"widget.status\">\n                        <option value=\"0\">{{ 'Disabled' | trans }}</option>\n                        <option value=\"1\">{{ 'Enabled' | trans }}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"uk-form-row\">\n                <label for=\"form-position\" class=\"uk-form-label\">{{ 'Position' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <select id=\"form-position\" name=\"position\" class=\"uk-width-1-1\" v-model=\"widget.position\">\n                        <option value=\"\">{{ '- Assign -' | trans }}</option>\n                        <option v-for=\"position in config.positions\" :value=\"position.name\">{{ position.label }}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"uk-margin\" v-if=\"widget.position != 'navbar' && widget.position != 'offcanvas-top' && widget.position != 'offcanvas-bottom'\">\n\n                <div class=\"uk-form-row\">\n                    <div class=\"uk-form-controls\">\n                        <label><input type=\"checkbox\" v-model=\"widget.theme.title.hide\"> {{ 'Hide Title' | trans }}</label>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{ 'Title Color'  | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-width-1-1\" v-model=\"widget.theme.title.color\">\n                            <option value=\"\">Default</option>\n                            <option value=\"uk-text-muted\">Muted</option>\n                            <option value=\"uk-text-primary\">Primary</option>\n                            <option value=\"uk-text-success\">Success</option>\n                            <option value=\"uk-text-warning\">Warning</option>\n                            <option value=\"uk-text-danger\">Danger</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{ 'Title Size'  | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-width-1-1\" v-model=\"widget.theme.title.size\">\n                            <option value=\"\">Default</option>\n                            <option value=\"uk-h1\">H1</option>\n                            <option value=\"uk-h2\">H2</option>\n                            <option value=\"uk-h3\">H3</option>\n                            <option value=\"uk-h4\">H4</option>\n                            <option value=\"uk-h5\">H5</option>\n                            <option value=\"uk-h6\">H6</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{'Title Class' | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <input type=\"text\" class=\"uk-width-1-1\" v-model=\"widget.theme.title.otherClass\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"uk-form-row\" v-if=\"widget.position == 'sidebar'\">\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{'Card Background' | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-width-1-1\" v-model=\"widget.theme.card.background\">\n                            <option value=\"uk-card uk-card-default\">Default</option>\n                            <option value=\"uk-card uk-card-primary\">Primary</option>\n                            <option value=\"uk-card uk-card-secondary\">Secondary</option>\n                            <option value=\"uk-card uk-card-muted\">Muted</option>\n                            <option value=\"uk-card\">Blank</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{'Size' | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-width-1-1\" v-model=\"widget.theme.card.size\">\n                            <option value=\"uk-card-body\">Default</option>\n                            <option value=\"uk-card-body uk-card-small\">Small</option>\n                            <option value=\"uk-card-body uk-card-large\">Large</option>\n                            <option value=\"uk-padding-remove\">Blank</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{'Hover Shadow' | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-width-1-1\" v-model=\"widget.theme.card.hover\">\n                            <option value=\"uk-card-hover\">Active</option>\n                            <option value=\"\">None</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{'Other Class' | trans}}</label>\n                    <div class=\"uk-form-controls\">\n                        <input type=\"text\" class=\"uk-width-1-1\" v-model=\"widget.theme.card.otherClass\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"uk-form-row\" v-if=\"widget.position != 'sidebar' && widget.position != 'navbar' && widget.position != 'offcanvas-top' && widget.position != 'offcanvas-bottom'\">\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-status\" class=\"uk-form-label\">{{ 'Section Background' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-form-width-large\" v-model=\"widget.theme.section.background\">\n                            <option value=\"\">Default</option>\n                            <option value=\"uk-section uk-section-primary\">Primary</option>\n                            <option value=\"uk-section uk-section-secondary\">Secondary</option>\n                            <option value=\"uk-section uk-section-default\">Default</option>\n                            <option value=\"uk-section uk-section-muted\">Muted</option>\n                            <option value=\"uk-section\">Just Section</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-status\" class=\"uk-form-label\">{{ 'Content Size' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-form-width-large\" v-model=\"widget.theme.section.size\">\n                            <option value=\"\">Default</option>\n                            <option value=\"uk-section-xsmall\">uk-section-xsmall</option>\n                            <option value=\"uk-section-small\">uk-section-small</option>\n                            <option value=\"uk-section-large\">uk-section-large</option>\n                            <option value=\"uk-section-xlarge\">uk-section-xlarge</option>\n                            <option value=\"uk-padding-remove-vertical\">uk-padding-remove-vertical</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-status\" class=\"uk-form-label\">{{ 'Image' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input-image :source.sync=\"widget.theme.section.image\"></input-image>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-status\" class=\"uk-form-label\">{{ 'Other Class' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input type=\"text\" class=\"uk-width-1-1\" v-model=\"widget.theme.section.otherClass\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Restrict Access' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <p v-for=\"role in config.roles\" class=\"uk-form-controls-condensed\">\n                        <label><input type=\"checkbox\" :value=\"role.id\" v-model=\"widget.roles\" number> {{ role.name }}</label>\n                    </p>\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>\n</div>\n\n";

/***/ })

/******/ });