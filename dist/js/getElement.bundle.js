/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/getElement.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/domanipulation.js":
/*!**********************************!*\
  !*** ./src/js/domanipulation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DOManipulation =\n/*#__PURE__*/\nfunction () {\n  function DOManipulation() {\n    _classCallCheck(this, DOManipulation);\n\n    this.init = 'Class DOManipulation has initialized.';\n  }\n\n  _createClass(DOManipulation, [{\n    key: \"each\",\n    value: function each(callback) {\n      // convert this to Array to use for...of\n      var _arr = Array.from(this);\n\n      for (var _i = 0; _i < _arr.length; _i++) {\n        var el = _arr[_i];\n        callback.call(el);\n      } // return this for chaining\n\n\n      return this;\n    }\n  }, {\n    key: \"addClass\",\n    value: function addClass(className) {\n      return this.each(function addClass() {\n        this.classList.add(className);\n      });\n    }\n  }, {\n    key: \"removeClass\",\n    value: function removeClass(className) {\n      return this.each(function removeClass() {\n        this.classList.remove(className);\n      });\n    }\n  }, {\n    key: \"hasClass\",\n    value: function hasClass(className) {\n      return this[0].classList.contains(className);\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, callback) {\n      return this.each(function on() {\n        this.addEventListener(event, callback, false);\n      });\n    }\n  }, {\n    key: \"checkInit\",\n    value: function checkInit() {\n      return this.init;\n    }\n  }]);\n\n  return DOManipulation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOManipulation);\n\n//# sourceURL=webpack:///./src/js/domanipulation.js?");

/***/ }),

/***/ "./src/js/getElement.js":
/*!******************************!*\
  !*** ./src/js/getElement.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GetElement; });\n/* harmony import */ var _domanipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domanipulation */ \"./src/js/domanipulation.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar GetElement =\n/*#__PURE__*/\nfunction (_DOManipulation) {\n  _inherits(GetElement, _DOManipulation);\n\n  function GetElement(selector) {\n    var _this;\n\n    _classCallCheck(this, GetElement);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetElement).call(this, selector));\n    var elements;\n\n    if (selector.startsWith('#')) {\n      elements = document.getElementById(selector.substr(1));\n    } else if (selector.startsWith('.')) {\n      elements = document.getElementsByClassName(selector.substr(1));\n    } else {\n      elements = {};\n    }\n\n    _this[0] = elements;\n    _this.init = 'Class GetElement has initialized.';\n    _this.length = 1;\n    Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), elements);\n    return _this;\n  }\n\n  _createClass(GetElement, [{\n    key: \"each\",\n    value: function each(callback) {\n      _get(_getPrototypeOf(GetElement.prototype), \"each\", this).call(this, callback);\n    }\n  }, {\n    key: \"addClass\",\n    value: function addClass(className) {\n      _get(_getPrototypeOf(GetElement.prototype), \"addClass\", this).call(this, className);\n    }\n  }, {\n    key: \"removeClass\",\n    value: function removeClass(className) {\n      _get(_getPrototypeOf(GetElement.prototype), \"removeClass\", this).call(this, className);\n    }\n  }, {\n    key: \"hasClass\",\n    value: function hasClass(className) {\n      _get(_getPrototypeOf(GetElement.prototype), \"hasClass\", this).call(this, className);\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, callback) {\n      _get(_getPrototypeOf(GetElement.prototype), \"on\", this).call(this, event, callback);\n    }\n  }, {\n    key: \"checkInit\",\n    value: function checkInit() {\n      return this.init;\n    }\n  }]);\n\n  return GetElement;\n}(_domanipulation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nwindow.GetElement = GetElement;\n\n\n//# sourceURL=webpack:///./src/js/getElement.js?");

/***/ })

/******/ });