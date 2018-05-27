(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n\tfont-family: arial;\n\tcolor: black;\n}\nbody {\n\tmargin: 0px;\n}\nh1 {\n\tfont-size: 40px;\n\ttext-align: center;\n\tfont-family: courier;\n}\np {\n\ttext-align: left;\n\tcolor: #666;\n}\nspan {\n\tcolor: #666;\n}\nimg {\n\twidth: 137px;\n\theight: 195px;\n}\nh3 {\n\tmargin-bottom: 10px;\n\tcolor: black;\n}\nh4 {\n\tfont-size: 25px;\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tcolor: black;\n}\n.container {\n\twidth: 90%;\n\ttext-align: left;\n\tpadding: 10px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.podcast {\n\twidth: 60%;\n\ttext-align: center;\n\tmargin-left: auto;\n    margin-right: auto;\n    margin-bottom: 3%;\n    padding: 15px;\n    background: #9999;\n}\n.podcast_title { \n\theight: auto;\n    width:100%;\n}\n.podcast_playbar { \n\theight: auto;\n    vertical-align: middle;\n    text-align: center;\n    width:100%;\n\n}\n.grey_container {\n\tbackground-color: #ccc;\n}\n.white_container {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding-top: 95px;\n\tbackground-color: white;\n\twidth: 80%;\n\ttext-align: center;\n\tpadding-bottom: 10%;\n\tbox-shadow: 0px 0px 38px -6px;\n}\n.video_container {\n\tposition: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n    margin-bottom: 10px;\n}\n.video {\n\tposition: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n/*Carousel styling*/\n.gallery {\n\tbackground: white;\n}\n.gallery-cell {\n\theight: auto;\n\twidth: 140px;\n\tmargin-right: 10px;\n\tbackground: white;\n}\n/* cell number */\n.gallery-cell:before {\n\tdisplay: block;\n\ttext-align: center;\n\tline-height: 200px;\n\tfont-size: 80px;\n\tcolor: white;\n}\n.inner_cell {\n\tpadding-right:20%;\n}\naudio {\n\twidth: 100%;\n}\n@media only screen and (max-width: 800px) {\n\t.container {\n\t\twidth: 100%;\n\t}\n\n\t.white_container {\n\t\twidth: 100%;\n\t\tborder: none;\n\t}\n}\n@media only screen and (max-width: 450px) {\n\th4 {\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 0px;\n\t}\n\t.white_container {\n\t\tpadding-top: 90px;\n\t}\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grey_container\">\n  \n  <div class=\"white_container\">\n    <!-- <h1>\n      {{ title }}\n    </h1> -->\n    <div class=\"container\"> \n    <h4>Latest Episode</h4>\n        \n        <div class=\"video_container\">\n          <iframe class=\"video\" src=\"https://www.youtube.com/embed/sR0ULMH2QX0?vq=hd720\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        </div>\n\n        <p>\n          Episode 5 - Sim Shitty AKA The Simulation Theory\n        </p>\n        <hr>\n\n        <h4>Previous Episodes</h4>\n\n        <div class=\"main-gallery js-flickity\" data-flickity-options='{ \"cellAlign\": \"left\", \"contain\": true }'>\n\n<!-- change src to /podcast-app for git hub pages deployments -->\n          <div class=\"gallery-cell\"><img src=\"assets/Forward-Space-Sci-Fi-Science-Fiction-Futuristic-3212212.jpg\">\n            <div class=\"inner_cell\">\n              <h3>Episode 1</h3><span>Sci-Fi?</span>\n            </div>\n          </div>\n\n          <div class=\"gallery-cell\"><img src=\"assets/landscape-1673929_960_720.jpg\">\n            <div class=\"inner_cell\">\n              <h3>Episode 2</h3><span>Is there anybody out there?</span>\n            </div>\n          </div>\n\n          <div class=\"gallery-cell\"><img src=\"assets/Elon_Musk_2015.jpg\">\n            <div class=\"inner_cell\">\n              <h3>Episode 3</h3><span>Back to the day after Tomorrowland</span>\n            </div>\n          </div>\n\n          <div class=\"gallery-cell\"><img src=\"assets/big-foot-statue.jpg\">\n            <div class=\"inner_cell\">\n              <h3>Episode 4</h3><span>Tales from the Cryptozoologist</span>\n            </div>\n          </div>\n\n          <div class=\"gallery-cell\"><img src=\"assets/vr.jpeg\">\n            <div class=\"inner_cell\">\n              <h3>Episode 5</h3><span>Sim Shitty</span>\n            </div>\n          </div>\n\n          <div class=\"gallery-cell\"><img src=\"assets/towers.jpg\">\n            <div class=\"inner_cell\">\n              <h3>Episode 6</h3><span>Towers of Terror</span>\n            </div>\n          </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Andrew & Jordan';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Andrew/Documents/Code/personal_projects/podcast-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map