/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway&family=Ultra&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n  box-sizing: border-box;\\n}\\n\\n#nav_wrapper {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  padding: 0.5rem;\\n}\\n\\n.logo {\\n  font-family: 'Ultra', serif, Arial;\\n  font-size: 1.8rem;\\n  color: #14213d;\\n  line-height: 2;\\n}\\n\\n.logo span {\\n  font-family: 'Ultra', serif, Arial;\\n  font-size: 1.8rem;\\n  color: #fca311;\\n  line-height: 2;\\n}\\n\\n.tab {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.tab button {\\n  padding: 0.2rem 1.5rem;\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  outline: none;\\n  transition: 0.3s;\\n  text-transform: uppercase;\\n  font-size: 1.1rem;\\n  font-family: 'Raleway', sans-serif;\\n  font-weight: 700;\\n  color: #03045e;\\n}\\n\\n.tablinks:hover {\\n  border-bottom: 3px solid #fca311;\\n  color: #fca311;\\n}\\n\\n.tab button.active {\\n  border-bottom: 3px solid #fca311;\\n}\\n\\n.tabcontent {\\n  display: none;\\n  animation: fadeEffect 1s;\\n}\\n\\n@-webkit-keyframes fadeEffect {\\n  from { opacity: 0; }\\n  to { opacity: 1; }\\n}\\n\\n@keyframes fadeEffect {\\n  from { opacity: 0; }\\n  to { opacity: 1; }\\n}\\n\\n#home {\\n  padding: 0.5rem;\\n  overflow: hidden;\\n}\\n\\n.heroWrapper {\\n  position: relative;\\n  width: 100%;\\n  height: 90vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.hero_til_wrap {\\n  width: 40%;\\n  padding: 4rem;\\n  background-color: rgba(43, 37, 6, 0.38);\\n  z-index: 10;\\n}\\n\\n.hero_til_text {\\n  font-size: 3rem;\\n  font-weight: 900;\\n  color: white;\\n  text-transform: uppercase;\\n}\\n\\n.hero_image {\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  object-fit: cover;\\n  object-position: center;\\n  -o-object-fit: cover;\\n  -o-object-position: center;\\n}\\n\\n#menu {\\n  min-height: 90vh;\\n  overflow: hidden;\\n}\\n\\n.dish_container {\\n  width: 100%;\\n  height: 70vh;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.menu_image {\\n  height: 100%;\\n  object-fit: cover;\\n  object-position: center;\\n  -o-object-fit: cover;\\n  -o-object-position: center;\\n}\\n\\n.dish_text_area {\\n  padding: 20%;\\n  align-self: center;\\n}\\n\\n.dish_title {\\n  font-family: 'Abril Fatface', cursive;\\n  font-size: 2rem;\\n  color: #14213d;\\n  margin-bottom: 1rem;\\n}\\n\\n.dish_text {\\n  font-family: 'Raleway', sans-serif;\\n  font-size: 1.2rem;\\n  color: #14213d;\\n}\\n\\n.dish_price {\\n  text-align: end;\\n  color: #fca311;\\n  font-weight: 700;\\n}\\n\\n#contact {\\n  height: 90vh;\\n  overflow: hidden;\\n}\\n\\n.grid_contact {\\n  width: 100%;\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 3fr 1fr;\\n  grid-template-areas:\\n    \\\"text map\\\"\\n    \\\"social map\\\";\\n}\\n\\n.contact_text_area {\\n  grid-area: text;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding-left: 10%;\\n}\\n\\n.contact_social_area {\\n  grid-area: social;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding-left: 10%;\\n}\\n\\n.contact_map_area {\\n  grid-area: map;\\n}\\n\\n.social_icon {\\n  width: 2.5rem;\\n}\\n\\n.contact_title {\\n  font-family: 'Abril Fatface', cursive;\\n  font-size: 2rem;\\n  color: #14213d;\\n  margin-bottom: 1rem;\\n  text-transform: uppercase;\\n}\\n\\n.contact_elem_wrap {\\n  margin-bottom: 1.5rem;\\n}\\n\\n.contact_elem_title {\\n  font-family: 'Abril Fatface', cursive;\\n}\\n\\n.contact_elem_value {\\n  font-family: 'Raleway', sans-serif;\\n  color: #14213d;\\n  text-decoration: none;\\n}\\n\\n.social_media_wrap {\\n  list-style: none;\\n  margin-top: 1rem;\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  justify-content: center;\\n}\\n\\n.contact_social_link {\\n  margin-right: 0.5rem;\\n}\\n\\n.contact_social_link a:hover {\\n  background-color: #fca311;\\n}\\n\\n.contact_map_area iframe {\\n  height: 100%;\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/facebook.png":
/*!*********************************!*
  !*** ./src/assets/facebook.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"125eb1d6965dfb847b3c10ec80d15f72.png\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/facebook.png?");

/***/ }),

/***/ "./src/assets/homehero.jpg":
/*!*********************************!*
  !*** ./src/assets/homehero.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a4d146aae961b0db0da07dddf17c1c94.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/homehero.jpg?");

/***/ }),

/***/ "./src/assets/image10-yughurt.jpg":
/*!****************************************!*
  !*** ./src/assets/image10-yughurt.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"114aaf1f7f9c9621c865d70aa1f50a0e.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image10-yughurt.jpg?");

/***/ }),

/***/ "./src/assets/image3-saladcesar.jpg":
/*!******************************************!*
  !*** ./src/assets/image3-saladcesar.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"03e9b4d654e019d4c775dd57e80877d2.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image3-saladcesar.jpg?");

/***/ }),

/***/ "./src/assets/image4-naan.jpg":
/*!************************************!*
  !*** ./src/assets/image4-naan.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d4d06140ee8d33792a744358266cf7aa.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image4-naan.jpg?");

/***/ }),

/***/ "./src/assets/image5-pizza.jpg":
/*!*************************************!*
  !*** ./src/assets/image5-pizza.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cf63627c063eddb448cf1088a3a74217.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image5-pizza.jpg?");

/***/ }),

/***/ "./src/assets/image6-meat.jpg":
/*!************************************!*
  !*** ./src/assets/image6-meat.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f6b2a7d189af548058b0c71679485b0a.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image6-meat.jpg?");

/***/ }),

/***/ "./src/assets/image7-pumkin.jpg":
/*!**************************************!*
  !*** ./src/assets/image7-pumkin.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6de49677476d4ebe78053833e68ac0f5.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image7-pumkin.jpg?");

/***/ }),

/***/ "./src/assets/image8-figues.jpg":
/*!**************************************!*
  !*** ./src/assets/image8-figues.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"96fcc98cb05454c81000edf9a265f9c8.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image8-figues.jpg?");

/***/ }),

/***/ "./src/assets/image9-chocolat.jpg":
/*!****************************************!*
  !*** ./src/assets/image9-chocolat.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"eeb3b6360c7150ef325555f038ae6dd0.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/image9-chocolat.jpg?");

/***/ }),

/***/ "./src/assets/instagram.png":
/*!**********************************!*
  !*** ./src/assets/instagram.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"58e0bfafc4ac0fcdb6f6b3956c306220.png\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/instagram.png?");

/***/ }),

/***/ "./src/assets/linkedin.png":
/*!*********************************!*
  !*** ./src/assets/linkedin.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"eaeb4f9906968bc344baf585efbffd2f.png\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/linkedin.png?");

/***/ }),

/***/ "./src/assets/twitter.png":
/*!********************************!*
  !*** ./src/assets/twitter.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"517404b85bb73456bd3d32cb0de77365.png\");\n\n//# sourceURL=webpack://restaurant_page/./src/assets/twitter.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst contact = (list) => {\n  const contactDiv = document.createElement('div');\n  contactDiv.setAttribute('class', 'tabcontent');\n  contactDiv.setAttribute('id', 'contact');\n\n  const contactWrapper = document.createElement('div');\n  contactWrapper.setAttribute('class', 'grid_contact');\n\n  const contactTextArea = document.createElement('div');\n  contactTextArea.setAttribute('class', 'contact_text_area');\n\n  const contactTitle = document.createElement('h2');\n  contactTitle.setAttribute('class', 'contact_title');\n  contactTitle.innerHTML = 'Get in touch';\n\n  const contactAdressCont = document.createElement('div');\n  contactAdressCont.setAttribute('class', 'contact_elem_wrap');\n  const contactAdressT = document.createElement('h3');\n  contactAdressT.setAttribute('class', 'contact_elem_title');\n  contactAdressT.innerHTML = 'Visit Us:';\n  const contactAdressV = document.createElement('p');\n  contactAdressV.setAttribute('class', 'contact_elem_value');\n  contactAdressV.innerHTML = '<span>Mount Hiei,<span><br>Kyoto, 606-0000, Japan';\n  contactAdressCont.append(contactAdressT, contactAdressV);\n\n  const contactTelCont = document.createElement('div');\n  contactTelCont.setAttribute('class', 'contact_elem_wrap');\n  const contactTelT = document.createElement('h3');\n  contactTelT.setAttribute('class', 'contact_elem_title');\n  contactTelT.innerHTML = 'Give Us A Call:';\n  const contactTelV = document.createElement('a');\n  contactTelV.setAttribute('class', 'contact_elem_value');\n  contactTelV.setAttribute('href', 'tel:+1234567891263');\n  contactTelV.innerHTML = '+123 4567891263';\n  contactTelCont.append(contactTelT, contactTelV);\n\n  const contactEmailCont = document.createElement('div');\n  contactEmailCont.setAttribute('class', 'contact_elem_wrap');\n  const contactEmailT = document.createElement('h3');\n  contactEmailT.setAttribute('class', 'contact_elem_title');\n  contactEmailT.innerHTML = 'Email Us:';\n  const contactEmailV = document.createElement('a');\n  contactEmailV.setAttribute('class', 'contact_elem_value');\n  contactEmailV.setAttribute('href', 'mailto:service@avocado-st.com');\n  contactEmailV.innerHTML = 'service@avocado-st.com';\n  contactEmailCont.append(contactEmailT, contactEmailV);\n\n  contactTextArea.append(contactTitle, contactAdressCont, contactTelCont, contactEmailCont);\n\n  const contactSocialArea = document.createElement('div');\n  contactSocialArea.setAttribute('class', 'contact_social_area');\n  const socialMediaT = document.createElement('h3');\n  socialMediaT.setAttribute('class', 'contact_elem_title');\n  socialMediaT.innerHTML = 'Follow us:';\n  const socialMediaWrap = document.createElement('ul');\n  socialMediaWrap.setAttribute('class', 'social_media_wrap');\n  for (let i = 0; i < list.length; i += 1) {\n    const li = document.createElement('li');\n    li.setAttribute('class', 'contact_social_link');\n    li.append(list[i]);\n    socialMediaWrap.append(li);\n  }\n\n  contactSocialArea.append(socialMediaT, socialMediaWrap);\n\n  const contactMapArea = document.createElement('div');\n  contactMapArea.setAttribute('class', 'contact_map_area');\n  contactMapArea.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52247.16561858881!2d135.80677966237747!3d35.070541234937274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010a26bf288311%3A0xe255a69c5e4cefef!2sMount%20Hiei!5e0!3m2!1sen!2sma!4v1608082885428!5m2!1sen!2sma\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>';\n\n  contactWrapper.append(contactTextArea, contactSocialArea, contactMapArea);\n  contactDiv.append(contactWrapper);\n\n  return contactDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst home = (img) => {\n  const homeDiv = document.createElement('div');\n  homeDiv.setAttribute('class', 'tabcontent');\n  homeDiv.setAttribute('id', 'home');\n\n  const heroWrapper = document.createElement('div');\n  heroWrapper.setAttribute('class', 'heroWrapper');\n\n  const heroTilWrap = document.createElement('div');\n  heroTilWrap.setAttribute('class', 'hero_til_wrap');\n  heroTilWrap.innerHTML = \"<p class='hero_til_text'> Avocado Studio for a Healthy gourmet experience.</P>\";\n\n  heroWrapper.append(heroTilWrap, img);\n  homeDiv.append(heroWrapper);\n  return homeDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\nconst globalContainer = document.querySelector('#content');\nglobalContainer.append((0,_navigation__WEBPACK_IMPORTED_MODULE_2__.default)(),\n  (0,_home__WEBPACK_IMPORTED_MODULE_3__.default)(_variables__WEBPACK_IMPORTED_MODULE_1__.heroImage),\n  (0,_menu__WEBPACK_IMPORTED_MODULE_4__.default)(_variables__WEBPACK_IMPORTED_MODULE_1__.dishes),\n  (0,_contact__WEBPACK_IMPORTED_MODULE_5__.default)(_variables__WEBPACK_IMPORTED_MODULE_1__.followUs));\n\nconst openTab = (e) => {\n  const tabcontent = document.getElementsByClassName('tabcontent');\n  for (let i = 0; i < tabcontent.length; i += 1) {\n    tabcontent[i].style.display = 'none';\n  }\n\n  const tablinks = document.getElementsByClassName('tablinks');\n  for (let i = 0; i < tablinks.length; i += 1) {\n    tablinks[i].className = tablinks[i].className.replace(' active', '');\n  }\n\n  const tabName = e.currentTarget.attributes.getNamedItem('value').value;\n  document.getElementById(tabName).style.display = 'block';\n  e.currentTarget.className += ' active';\n};\n\nconst tabElms = document.querySelectorAll('.tablinks');\nfor (let i = 0; i < tabElms.length; i += 1) {\n  tabElms[i].addEventListener('click', openTab);\n}\n\ndocument.getElementById('home').style.display = 'block';\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst menu = (list) => {\n  const menuDiv = document.createElement('div');\n  menuDiv.setAttribute('class', 'tabcontent');\n  menuDiv.setAttribute('id', 'menu');\n\n  for (let i = 0; i < list.length; i += 1) {\n    menuDiv.append(list[i]);\n  }\n  return menuDiv;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst navigation = () => {\n  const logo = document.createElement('h1');\n  logo.setAttribute('class', 'logo');\n  logo.innerHTML = 'The Avocado <span>Studio<span>.';\n  const navigationList = document.createElement('div');\n  navigationList.setAttribute('class', 'tab');\n\n  const navigationElemHome = document.createElement('button');\n  navigationElemHome.setAttribute('class', 'tablinks');\n  navigationElemHome.setAttribute('value', 'home');\n  navigationElemHome.innerHTML = 'Home';\n\n  const navigationElemMenu = document.createElement('button');\n  navigationElemMenu.setAttribute('class', 'tablinks');\n  navigationElemMenu.setAttribute('value', 'menu');\n  navigationElemMenu.innerHTML = 'Menu';\n\n  const navigationElemContact = document.createElement('button');\n  navigationElemContact.setAttribute('class', 'tablinks');\n  navigationElemContact.setAttribute('value', 'contact');\n  navigationElemContact.innerHTML = 'Contact-us';\n\n  navigationList.append(navigationElemHome, navigationElemMenu, navigationElemContact);\n\n  const navWrapper = document.createElement('div');\n  navWrapper.setAttribute('id', 'nav_wrapper');\n  navWrapper.append(logo, navigationList);\n\n  return navWrapper;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);\n\n\n//# sourceURL=webpack://restaurant_page/./src/navigation.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroImage\": () => /* binding */ heroImage,\n/* harmony export */   \"dishes\": () => /* binding */ dishes,\n/* harmony export */   \"followUs\": () => /* binding */ followUs\n/* harmony export */ });\n/* harmony import */ var _assets_homehero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/homehero.jpg */ \"./src/assets/homehero.jpg\");\n/* harmony import */ var _assets_image3_saladcesar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/image3-saladcesar.jpg */ \"./src/assets/image3-saladcesar.jpg\");\n/* harmony import */ var _assets_image4_naan_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/image4-naan.jpg */ \"./src/assets/image4-naan.jpg\");\n/* harmony import */ var _assets_image5_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/image5-pizza.jpg */ \"./src/assets/image5-pizza.jpg\");\n/* harmony import */ var _assets_image6_meat_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/image6-meat.jpg */ \"./src/assets/image6-meat.jpg\");\n/* harmony import */ var _assets_image7_pumkin_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/image7-pumkin.jpg */ \"./src/assets/image7-pumkin.jpg\");\n/* harmony import */ var _assets_image8_figues_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/image8-figues.jpg */ \"./src/assets/image8-figues.jpg\");\n/* harmony import */ var _assets_image9_chocolat_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/image9-chocolat.jpg */ \"./src/assets/image9-chocolat.jpg\");\n/* harmony import */ var _assets_image10_yughurt_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/image10-yughurt.jpg */ \"./src/assets/image10-yughurt.jpg\");\n/* harmony import */ var _assets_facebook_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/facebook.png */ \"./src/assets/facebook.png\");\n/* harmony import */ var _assets_twitter_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/twitter.png */ \"./src/assets/twitter.png\");\n/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/instagram.png */ \"./src/assets/instagram.png\");\n/* harmony import */ var _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/linkedin.png */ \"./src/assets/linkedin.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst heroImg = new Image();\nheroImg.setAttribute('src', _assets_homehero_jpg__WEBPACK_IMPORTED_MODULE_0__.default);\nheroImg.setAttribute('class', 'hero_image');\nheroImg.setAttribute('loading', 'lazy');\nconst heroImage = heroImg;\n\nclass Dish {\n  constructor(image, title, text, price) {\n    this.image = image;\n    this.title = title;\n    this.text = text;\n    this.price = price;\n  }\n\n  dishElem() {\n    const dishContainer = document.createElement('div');\n    dishContainer.setAttribute('class', 'dish_container');\n\n    const dishTexteArea = document.createElement('div');\n    dishTexteArea.setAttribute('class', 'dish_text_area');\n\n    const dishTitle = document.createElement('h2');\n    dishTitle.setAttribute('class', 'dish_title');\n    dishTitle.innerHTML = this.title;\n\n    const dishText = document.createElement('p');\n    dishText.setAttribute('class', 'dish_text');\n    dishText.innerHTML = this.text;\n\n    const dishPrice = document.createElement('p');\n    dishPrice.setAttribute('class', 'dish_price');\n    dishPrice.innerHTML = `$ ${this.price}`;\n\n    dishTexteArea.append(dishTitle, dishText, dishPrice);\n\n    const ImgElem = new Image();\n    ImgElem.setAttribute('src', this.image);\n    ImgElem.setAttribute('loading', 'lazy');\n    ImgElem.setAttribute('class', 'menu_image');\n\n    dishContainer.append(ImgElem, dishTexteArea);\n\n    return dishContainer;\n  }\n}\n\nconst dishList = [];\n\nconst dish3 = new Dish(\n  _assets_image3_saladcesar_jpg__WEBPACK_IMPORTED_MODULE_1__.default,\n  'Ave Caesar!',\n  \"Give to Caesar what is Caesar's, and to God what is God's. Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.\",\n  '20.00',\n);\ndishList.push(dish3.dishElem());\n\nconst dish4 = new Dish(\n  _assets_image4_naan_jpg__WEBPACK_IMPORTED_MODULE_2__.default,\n  'A Rajasthani Story.',\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '30.00',\n);\ndishList.push(dish4.dishElem());\n\nconst dish5 = new Dish(\n  _assets_image5_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__.default,\n  \"All'italiana!\",\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '18.00',\n);\ndishList.push(dish5.dishElem());\n\nconst dish6 = new Dish(\n  _assets_image6_meat_jpg__WEBPACK_IMPORTED_MODULE_4__.default,\n  'Nice to Meat You!',\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '20.00',\n);\ndishList.push(dish6.dishElem());\n\nconst dish7 = new Dish(\n  _assets_image7_pumkin_jpg__WEBPACK_IMPORTED_MODULE_5__.default,\n  'Smashing Pumkins.',\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '12.00',\n);\ndishList.push(dish7.dishElem());\n\nconst dish8 = new Dish(\n  _assets_image8_figues_jpg__WEBPACK_IMPORTED_MODULE_6__.default,\n  'September harvest!',\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '12.00',\n);\ndishList.push(dish8.dishElem());\n\nconst dish9 = new Dish(\n  _assets_image9_chocolat_jpg__WEBPACK_IMPORTED_MODULE_7__.default,\n  'Serotonin Booster!',\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '10.00',\n);\ndishList.push(dish9.dishElem());\n\nconst dish10 = new Dish(\n  _assets_image10_yughurt_jpg__WEBPACK_IMPORTED_MODULE_8__.default,\n  'Hellenic delight!',\n  'Integer vestibulum eros iaculis magna auctor, in sollicitudin tellus ultricies.',\n  '9.00',\n);\ndishList.push(dish10.dishElem());\n\nconst dishes = dishList;\n\nconst socialMedia = [];\n\nconst facebook = document.createElement('a');\nfacebook.setAttribute('href', 'https://www.facebook.com/houdacherkaouicalypso');\nconst facebookImg = new Image();\nfacebookImg.setAttribute('src', _assets_facebook_png__WEBPACK_IMPORTED_MODULE_9__.default);\nfacebookImg.setAttribute('class', 'social_icon');\nfacebook.append(facebookImg);\nsocialMedia.push(facebook);\n\nconst twitter = document.createElement('a');\ntwitter.setAttribute('href', 'https://twitter.com/Houda59579688');\nconst twitterImg = new Image();\ntwitterImg.setAttribute('src', _assets_twitter_png__WEBPACK_IMPORTED_MODULE_10__.default);\ntwitterImg.setAttribute('class', 'social_icon');\ntwitter.append(twitterImg);\nsocialMedia.push(twitter);\n\nconst instagram = document.createElement('a');\ninstagram.setAttribute('href', 'https://www.instagram.com/caly_cher');\nconst instagramImg = new Image();\ninstagramImg.setAttribute('src', _assets_instagram_png__WEBPACK_IMPORTED_MODULE_11__.default);\ninstagramImg.setAttribute('class', 'social_icon');\ninstagram.append(instagramImg);\nsocialMedia.push(instagram);\n\nconst linkedin = document.createElement('a');\nlinkedin.setAttribute('href', 'http://www.linkedin.com/in/houda-cherkaoui-64106395/');\nconst linkedinImg = new Image();\nlinkedinImg.setAttribute('src', _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_12__.default);\nlinkedinImg.setAttribute('class', 'social_icon');\nlinkedin.append(linkedinImg);\nsocialMedia.push(linkedin);\n\nconst followUs = socialMedia;\n\n//# sourceURL=webpack://restaurant_page/./src/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;