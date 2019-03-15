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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-author/new-author.component */ "./src/app/new-author/new-author.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/new-quote/new-quote.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'new', component: _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_1__["NewAuthorComponent"] },
    { path: 'edit/:id', component: _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_2__["EditAuthorComponent"] },
    { path: 'write/:id', component: _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_3__["NewQuoteComponent"] },
    { path: 'quotes/:id', component: _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__["QuotesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>Quote Ranks</h1>\n\n<div class=\"alert alert-info text-center\">\n\n  <router-outlet></router-outlet>\n\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
        this.goHome();
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-author/new-author.component */ "./src/app/new-author/new-author.component.ts");
/* harmony import */ var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-author/edit-author.component */ "./src/app/edit-author/edit-author.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/new-quote/new-quote.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_8__["NewAuthorComponent"],
                _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_9__["EditAuthorComponent"],
                _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_10__["NewQuoteComponent"],
                _authors_authors_component__WEBPACK_IMPORTED_MODULE_11__["AuthorsComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_12__["QuotesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authors/authors.component.css":
/*!***********************************************!*\
  !*** ./src/app/authors/authors.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authors/authors.component.html":
/*!************************************************!*\
  !*** ./src/app/authors/authors.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Author</th>\n        <th>Actions available</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let author of authors\">\n        <td>\n          {{ author.name }}\n        </td>\n        <td>\n          <div *ngIf=\"author\" class=\"btn-group pull-right btn-group-justified\" role=\"group\">\n            <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/quotes',author._id]\">View quotes</button>\n            <button type=\"button\" class=\"btn btn-warning\" [routerLink]=\"['/edit',author._id]\">Edit</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAuthor(author._id)\">Delete</button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(_httpService) {
        this._httpService = _httpService;
        this.authors = [];
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        this.getAuthors();
    };
    AuthorsComponent.prototype.getAuthors = function () {
        var _this = this;
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            _this.authors = data;
        });
    };
    AuthorsComponent.prototype.deleteAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.deleteAuthor(id);
        observable.subscribe(function (data) {
            _this.getAuthors();
        });
    };
    AuthorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/authors/authors.component.html"),
            styles: [__webpack_require__(/*! ./authors.component.css */ "./src/app/authors/authors.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/edit-author/edit-author.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Edit this author:</p>\n<div class=\"container alert-primary\">\n  <form class=\"form-group\">\n      <label class=\"form-label\" for=\"name\">Name: </label>\n      <input class=\"form-control col-xs-8\" id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"name\">  \n      <div class=\"btn-group pull-right btn-group-justified\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/home']\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"putAuthor()\">Submit</button>\n      </div>\n  </form>\n</div>\n<div *ngIf=\"errors\" class=\"text-danger\"><p *ngFor=\"let error of errors\">{{error}}</p></div>"

/***/ }),

/***/ "./src/app/edit-author/edit-author.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-author/edit-author.component.ts ***!
  \******************************************************/
/*! exports provided: EditAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function() { return EditAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAuthorComponent = /** @class */ (function () {
    function EditAuthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getAuthor();
        });
    };
    EditAuthorComponent.prototype.getAuthor = function () {
        var _this = this;
        var observable = this._httpService.getAuthor(this.id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.name = data.name;
        });
    };
    EditAuthorComponent.prototype.putAuthor = function () {
        var _this = this;
        var observable = this._httpService.putAuthor(this.id, this.name);
        observable.subscribe(function (data) {
            console.log(data);
            if (data.error) {
                _this.errors = data.error;
            }
            else {
                _this._router.navigate(['/home']);
            }
        });
    };
    EditAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-author',
            template: __webpack_require__(/*! ./edit-author.component.html */ "./src/app/edit-author/edit-author.component.html"),
            styles: [__webpack_require__(/*! ./edit-author.component.css */ "./src/app/edit-author/edit-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditAuthorComponent);
    return EditAuthorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Quote Ranks!</h1>\n\n<a class=\"btn btn-outline-success\" [routerLink]=\"['/new']\">Add an author</a>\n\n<app-authors></app-authors>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.getAuthor = function (id) {
        return this._http.get('/authors/' + id);
    };
    HttpService.prototype.postAuthor = function (name) {
        return this._http.post('/authors/new', { name: name });
    };
    HttpService.prototype.putAuthor = function (id, name) {
        return this._http.put('/authors/edit/' + id, { name: name });
    };
    HttpService.prototype.deleteAuthor = function (id) {
        return this._http.delete('/authors/remove/' + id);
    };
    HttpService.prototype.postQuote = function (id, quote) {
        return this._http.post('/quotes/new', { id: id, quote: quote });
    };
    HttpService.prototype.voteQuote = function (id, vote) {
        return this._http.put('/vote/' + id, { vote: vote });
    };
    HttpService.prototype.deleteQuote = function (id) {
        return this._http.delete('/quotes/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-author/new-author.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-author/new-author.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-author/new-author.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-author/new-author.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Add a new quoteable author:</p>\n<div class=\"container alert-primary\">\n  <form class=\"form-group\">\n      <label class=\"form-label\" for=\"name\">Name: </label>\n      <input class=\"form-control col-xs-8\" id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"name\">  \n      <div class=\"btn-group pull-right btn-group-justified\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/home']\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"addAuthor()\">Submit</button>\n      </div>\n    </form>\n</div>\n<div *ngIf=\"errors\" class=\"text-danger\"><p *ngFor=\"let error of errors\">{{error}}</p></div>\n"

/***/ }),

/***/ "./src/app/new-author/new-author.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-author/new-author.component.ts ***!
  \****************************************************/
/*! exports provided: NewAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuthorComponent", function() { return NewAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAuthorComponent = /** @class */ (function () {
    function NewAuthorComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewAuthorComponent.prototype.ngOnInit = function () {
    };
    NewAuthorComponent.prototype.addAuthor = function () {
        var _this = this;
        var observable = this._httpService.postAuthor(this.name);
        observable.subscribe(function (data) {
            console.log(data);
            if (data.error) {
                _this.errors = data.error;
            }
            else {
                _this._router.navigate(['/home']);
            }
        });
    };
    NewAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-author',
            template: __webpack_require__(/*! ./new-author.component.html */ "./src/app/new-author/new-author.component.html"),
            styles: [__webpack_require__(/*! ./new-author.component.css */ "./src/app/new-author/new-author.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewAuthorComponent);
    return NewAuthorComponent;
}());



/***/ }),

/***/ "./src/app/new-quote/new-quote.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-quote/new-quote.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Provide a quote by {{ name }}:</p>\n<div class=\"container alert-primary\" *ngIf=\"name\">\n  <form class=\"form-group\">\n    <label class=\"form-label\" for=\"quote\">Quote: </label>\n    <input class=\"form-control col-xs-8\" id=\"quote\" name=\"quote\" type=\"text\" [(ngModel)]=\"quote\">\n    <div class=\"btn-group pull-right btn-group-justified\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/quotes',id]\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addQuote()\">Submit</button>    \n    </div>\n  </form>\n</div>\n<div *ngIf=\"errors\" class=\"text-danger\"><p *ngFor=\"let error of errors\">{{error}}</p></div>\n"

/***/ }),

/***/ "./src/app/new-quote/new-quote.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-quote/new-quote.component.ts ***!
  \**************************************************/
/*! exports provided: NewQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuoteComponent", function() { return NewQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewQuoteComponent = /** @class */ (function () {
    function NewQuoteComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewQuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getAuthor();
        });
    };
    NewQuoteComponent.prototype.getAuthor = function () {
        var _this = this;
        var observable = this._httpService.getAuthor(this.id);
        observable.subscribe(function (data) {
            _this.name = data.name;
        });
    };
    NewQuoteComponent.prototype.addQuote = function () {
        var _this = this;
        var observable = this._httpService.postQuote(this.id, this.quote);
        observable.subscribe(function (data) {
            if (data.error) {
                console.log(data);
                _this.errors = data.error;
            }
            else {
                _this._router.navigate(['/quotes/' + _this.id]);
            }
        });
    };
    NewQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-quote',
            template: __webpack_require__(/*! ./new-quote.component.html */ "./src/app/new-quote/new-quote.component.html"),
            styles: [__webpack_require__(/*! ./new-quote.component.css */ "./src/app/new-quote/new-quote.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewQuoteComponent);
    return NewQuoteComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Quotes by {{ name }}</h1>\n\n<a class=\"btn btn-outline-primary\" [routerLink]=\"['/home']\">Home</a>\n<a class=\"btn btn-outline-success\" [routerLink]=\"['/write',id]\">Add a quote</a>\n  \n<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Quote</th>\n        <th>Votes</th>\n        <th>Actions available</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let quote of quotes\">\n        <td>{{ quote.quote }}</td>\n        <td>{{ quote.votes }}</td>\n        <td>\n          <div *ngIf=\"quote\" class=\"btn-group pull-right btn-group-justified\" role=\"group\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"voteQuote(quote._id,1)\">Vote up</button>\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"voteQuote(quote._id,-1)\">Vote down</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteQuote(quote._id)\">Delete</button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    QuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getAuthor();
        });
    };
    QuotesComponent.prototype.getAuthor = function () {
        var _this = this;
        var observable = this._httpService.getAuthor(this.id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.name = data.name;
            _this.quotes = data.quotes;
        });
    };
    QuotesComponent.prototype.deleteQuote = function (quote_id) {
        var _this = this;
        var observable = this._httpService.deleteQuote(quote_id);
        observable.subscribe(function (data) {
            _this.getAuthor();
        });
    };
    QuotesComponent.prototype.voteQuote = function (quote_id, vote) {
        var _this = this;
        var observable = this._httpService.voteQuote(quote_id, vote);
        observable.subscribe(function (data) {
            _this.getAuthor();
        });
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuotesComponent);
    return QuotesComponent;
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

module.exports = __webpack_require__(/*! /Users/macbook/Desktop/DojoAssignments/MEAN/Angular/Navigation/4.3 - Authors/authors/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map