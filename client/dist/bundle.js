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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/wangguan/Documents/code/hackreactor/419/navigation/client/src/index.jsx: Expected corresponding JSX closing tag for <span> (77:58)\\n\\n\\u001b[0m \\u001b[90m 75 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33msvg\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 76 | \\u001b[39m              \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mspan\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 77 | \\u001b[39m              \\u001b[33m<\\u001b[39m\\u001b[33mspan\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"dropdown-title\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mRestaurants\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 78 | \\u001b[39m              \\u001b[33m<\\u001b[39m\\u001b[33mspan\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"nav-triangle-stroke\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 79 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33msvg\\u001b[39m xmlns\\u001b[33m=\\u001b[39m\\u001b[32m\\\"http://www.w3.org/2000/svg\\\"\\u001b[39m width\\u001b[33m=\\u001b[39m\\u001b[32m\\\"24\\\"\\u001b[39m height\\u001b[33m=\\u001b[39m\\u001b[32m\\\"24\\\"\\u001b[39m viewBox\\u001b[33m=\\u001b[39m\\u001b[32m\\\"0 0 24 24\\\"\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"icon_svg\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 80 | \\u001b[39m                  \\u001b[33m<\\u001b[39m\\u001b[33mpath\\u001b[39m d\\u001b[33m=\\u001b[39m\\u001b[32m\\\"M18.364 9.525L16.95 8.11 12 13.06 7.05 8.11 5.636 9.526 12 15.89l6.364-6.365z\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mpath\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:6344:17)\\n    at Object.jsxParseElementAt (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3561:16)\\n    at Object.jsxParseElementAt (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3529:32)\\n    at Object.jsxParseElementAt (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3529:32)\\n    at Object.jsxParseElementAt (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3529:32)\\n    at Object.jsxParseElementAt (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3529:32)\\n    at Object.jsxParseElement (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3587:17)\\n    at Object.parseExprAtom (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3594:19)\\n    at Object.parseExprSubscripts (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Object.parseMaybeUnary (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Object.parseExprOps (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Object.parseMaybeConditional (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Object.parseMaybeAssign (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Object.parseParenAndDistinguishExpression (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8963:28)\\n    at Object.parseExprAtom (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8760:21)\\n    at Object.parseExprAtom (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:3599:20)\\n    at Object.parseExprSubscripts (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Object.parseMaybeUnary (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Object.parseExprOps (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Object.parseMaybeConditional (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Object.parseMaybeAssign (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Object.parseExpression (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:8148:23)\\n    at Object.parseReturnStatement (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:10157:28)\\n    at Object.parseStatementContent (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:9836:21)\\n    at Object.parseStatement (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Object.parseBlockBody (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Object.parseBlock (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:10335:10)\\n    at Object.parseFunctionBody (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:9408:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/wangguan/Documents/code/hackreactor/419/navigation/node_modules/@babel/parser/lib/index.js:9378:10)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });