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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_scss__);
/** Logic to move the duck!! */



var myduck = document.getElementById('myduck');
var startbtn = document.getElementById('startbtn');
var stopbtn = document.getElementById('stopbtn');

var right = 0;
var startmovefunhandler, startreversefunhandler;
var pageWidth = document.body.offsetWidth;

function startmovefun() {
    clearInterval(startreversefunhandler);
    startmovefunhandler = setInterval(function () {
        if (pageWidth !== right) {
            right += 1;
            myduck.style.right = right + 'px';
        } else {
            $('#myduck').css('transform','rotateY(' + 180 + 'deg)');
            moveReverse(right);
        }
    }, 10);
}


function moveReverse(right) {
    clearInterval(startmovefunhandler);
    startreversefunhandler = setInterval(function () {
        if (right !== 0) {
            right -= 1;
            myduck.style.right = right + 'px';
        } else {
            $('#myduck').css('transform','rotateY(' + 180 + 'deg)');
            startmovefun();
        }
    }, 10);
}

var stopmovefun = function () {
    clearInterval(startmovefunhandler);
    clearInterval(startreversefunhandler);
}


startbtn.addEventListener('click', startmovefun);
stopbtn.addEventListener('click', stopmovefun);





// var myduck = document.getElementById('myduck');
// console.log("myduck.style.right");
// console.log(myduck.style.right+1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);