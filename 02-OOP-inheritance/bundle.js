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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/playground.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/actor.js":
/*!*********************!*\
  !*** ./js/actor.js ***!
  \*********************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Actor\", function() { return Actor; });\nclass Actor {\n  constructor(name, age){\n    this.name = name;\n    this.age = age;\n  }\n}\n\n\n//# sourceURL=webpack:///./js/actor.js?");

/***/ }),

/***/ "./js/eventEmitter.js":
/*!****************************!*\
  !*** ./js/eventEmitter.js ***!
  \****************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\nclass EventEmitter {\n  constructor(){\n    this.events = {};\n  }\n\n  on(eventName, callback){\n\n    if (!this.events[eventName]) {\n      this.events[eventName] = [];\n    }\n\n    this.events[eventName].push(callback);\n  }\n\n  emit(eventName, data){\n    const event = this.events[eventName];\n    if (event) {\n      event.forEach( fn => {\n        fn.call(null,data)\n      });\n    }\n  }\n\n  off(eventName){\n    this.events[eventName] = [];\n  }\n}\n\n\n//# sourceURL=webpack:///./js/eventEmitter.js?");

/***/ }),

/***/ "./js/logger.js":
/*!**********************!*\
  !*** ./js/logger.js ***!
  \**********************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return Logger; });\nclass Logger {\n  constructor(){\n  }\n\n  log(info){\n    console.log(\"Logger: \" + info);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/logger.js?");

/***/ }),

/***/ "./js/movie.js":
/*!*********************!*\
  !*** ./js/movie.js ***!
  \*********************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Movie\", function() { return Movie; });\n/* harmony import */ var _eventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventEmitter.js */ \"./js/eventEmitter.js\");\n/* harmony import */ var _socialMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socialMixin.js */ \"./js/socialMixin.js\");\n\n\n\nclass Movie extends _eventEmitter_js__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]{\n  constructor(title, year, duration){\n    super()\n    this.title = title;\n    this.year = year;\n    this.duration = duration;\n    this.cast = [];\n\n    Object.assign(Movie.prototype, _socialMixin_js__WEBPACK_IMPORTED_MODULE_1__[\"socialMixin\"]);\n  }\n\n  play() {\n    this.emit(\"play\", this);\n  }\n\n  pause() {\n    this.emit(\"pause\", this);\n  }\n  resume() {\n    this.emit(\"resume\", this);\n  }\n\n  addCast(...cast) {\n\n    for(let i = 0; i < cast.length; i++){\n      this.cast.push(cast[i]);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/movie.js?");

/***/ }),

/***/ "./js/playground.js":
/*!**************************!*\
  !*** ./js/playground.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie.js */ \"./js/movie.js\");\n/* harmony import */ var _actor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor.js */ \"./js/actor.js\");\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.js */ \"./js/logger.js\");\n\n\n\n\nwindow.addEventListener('load', function () {\n\n  const movie = new _movie_js__WEBPACK_IMPORTED_MODULE_0__[\"Movie\"](\"Pokemon The Movie\", 1993, 1.5);\n  const actor = new _actor_js__WEBPACK_IMPORTED_MODULE_1__[\"Actor\"](\"Pikachu\", 5);\n  const logger = new _logger_js__WEBPACK_IMPORTED_MODULE_2__[\"Logger\"]();\n\n  movie.on(\"play\", () => logger.log(\"The movie is playing\"));\n  movie.on(\"play\", () => logger.log(\"Now you can have multiple callbacks to a single event\"));\n  movie.on(\"pause\", () => logger.log(\"The movie is paused\"));\n  movie.on(\"resume\", () => logger.log(\"The movie resumed playing\"));\n\n  movie.play();\n  movie.pause();\n  movie.resume();\n\n  movie.addCast(actor);\n\n  movie.like(\"Nic\");\n  movie.share(\"Nic\");\n\n}, false);\n\n\n//# sourceURL=webpack:///./js/playground.js?");

/***/ }),

/***/ "./js/socialMixin.js":
/*!***************************!*\
  !*** ./js/socialMixin.js ***!
  \***************************/
/*! exports provided: socialMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socialMixin\", function() { return socialMixin; });\nconst socialMixin = {\n\n  share(friendName) {\n    console.log(friendName + \" shared \" + this.title);\n  },\n\n  like(friendName) {\n    console.log(friendName + \" liked \" + this.title);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/socialMixin.js?");

/***/ })

/******/ });