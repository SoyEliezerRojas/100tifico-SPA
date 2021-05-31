/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\n\nwindow.addEventListener('load', _routes_index__WEBPACK_IMPORTED_MODULE_1__.default); // Cuando carga\n\nwindow.addEventListener('hashchange', _routes_index__WEBPACK_IMPORTED_MODULE_1__.default); // Cuando hay un cambio\n\n//# sourceURL=webpack://cientifico/./src/index.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404 = () => {\n  const vew = `\n        <div class=\"Error404\">\n            <h2>Error 404</h2>\n        </div>\n\n    `;\n  return vew;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://cientifico/./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n //La funcion que hace fetch a la API\n\nconst Home = async () => {\n  const characters = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(); //Será un json con la data de todos los personajes\n\n  const vew = `\n            <div class=\"Characters\">\n                ${characters.results.map(character => //itera en cada uno de los personajes recibidos\n  `\n                    <article class=\"Characters-item\">\n                        <a href=\"#/${character.id}/\">\n                            <img src=\"${character.image}\" alt=\"${character.name}\">\n                            <h2>${character.name}</h2>\n                        </a>\n                        \n                    </article>\n                `).join('')}\n            </div>\n\n    `;\n  return vew;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://cientifico/./src/pages/home.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _templates_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/character */ \"./src/templates/character.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n\n\n\n\n\n\nconst routes = {\n  '/': _pages_home__WEBPACK_IMPORTED_MODULE_1__.default,\n  '/:id': _templates_character__WEBPACK_IMPORTED_MODULE_2__.default,\n  '/contact': 'Contact'\n};\n\nconst router = async () => {\n  const header =  false || document.getElementById('header');\n  const content =  false || document.getElementById('content');\n  header.innerHTML = await (0,_templates_Header__WEBPACK_IMPORTED_MODULE_0__.default)();\n  let hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_4__.default)();\n  let route = await (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__.default)(hash);\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__.default;\n  content.innerHTML = await render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://cientifico/./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\n  const vew = `\n        <div class=\"Header-main\">\n            <div class=\"Header-logo\">\n                <h1>\n                    <a href=\"#\">100tifi.co</a>\n                </h1>\n            </div>\n            <div class=\"Header-nav\">\n                <a href=\"#/about/\">About</a>\n            </div>\n        </div>\n    `;\n  return vew;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://cientifico/./src/templates/Header.js?");

/***/ }),

/***/ "./src/templates/character.js":
/*!************************************!*\
  !*** ./src/templates/character.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\n\nconst Character = async () => {\n  const id = await (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const character = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_1__.default)(id);\n  const vew = `\n    <div class=\"Characters-inner\">\n        <article class=\"Characters-card\">\n            <img src=\"${character.image}\" alt=\"${character.name}\">\n            <h2>${character.name}</h2>\n        </article>\n        <article class=\"Characters-card\">\n            <h3>Episodes: <span>${character.episode.length}</span></h3>\n            <h3>Status: <span>${character.status}</span></h3>\n            <h3>Species: <span>${character.species}</span></h3>\n            <h3>Gender: <span>${character.gender}</span></h3>\n            <h3>Origin: <span>${character.origin.name}</span></h3>\n            <h3>Last Location: <span>${character.location.name}</span></h3>\n        </article>\n    </div>\n    `;\n  return vew;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n\n//# sourceURL=webpack://cientifico/./src/templates/character.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = 'https://rickandmortyapi.com/api/character/';\n\nconst getData = async id => {\n  const urlAPI = id ? `${API}${id}` : API; //Si recib el id entonces se lo concatena a la API, sino, hará render de los personajes\n\n  try {\n    const response = await fetch(urlAPI); //Espero la respuesta de la API\n\n    const data = await response.json(); //Lo transformo a un Json\n\n    return data; //Retorno la data \n  } catch (error) {\n    console.log('Fetch error ', error); //Caso de error\n  }\n\n  ;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://cientifico/./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //Obtiene la locacion (URL) y el hash ('#') con su respectivo valor. Ej: '#/1/'\n//Uso el slice para eliminar el '#' quedando así: '/1/'\n//Transformo todo a minuscula \n//Uso el split para convertir todo a un arreglo y elimino los '/' quedando asi: ['']['1']['']\n//Accedo a la posicion 1 (0,1,2) del array que es donde esta el id. Ej: '1'\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://cientifico/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resolveRoutes = route => {\n  //Recibe una ruta\n  if (route.length <= 3) {\n    //como, segun la API, no hay menos de 1000 elementos, entonces tomo como maximo 3 caracteres\n    let validRoute = route === '/' ? route : '/:id'; //               route será un '/' o un id, segun lo que reciba \n\n    return validRoute;\n  }\n\n  return `/${route}`; //Si no es <= 3, entonces retorno lo que recibí. Ej 'About'\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://cientifico/./src/utils/resolveRoutes.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cientifico/./src/styles/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;