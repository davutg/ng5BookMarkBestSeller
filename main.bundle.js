webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works !\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */],
        data: { ext: '123' }
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__["a" /* CartComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<spinner></spinner>\r\n<div class=\"w3-center w3-jumbo w3-margin\">Leave a Mark !</div>\r\n<div class=\"w3-right\">\r\n        <a class=\"w3-btn w3-green w3-ripple\" [routerLink]=\"['/cart']\" style=\"position:fixed;z-index:1;margin-left:-128px;\">\r\n        <i class=\"fa fa-shopping-cart fa-large\"></i> Checkout \r\n            <span *ngIf=\"items.length>0\" class=\"w3-large\" style=\"font-family:cursive; color:yellow\"> ({{items.length}}<i *ngIf=\"items.length!=grossTotal\" class=\"w3-small\">/{{grossTotal}}</i>)\r\n            </span>\r\n        </a>\r\n</div>\r\n<ul>\r\n    <li><a routerLink=\"\">Products</a></li>\r\n    <li><a [routerLink]=\"['/about', { id: '123' }]\">About</a></li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("./src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_cart) {
        var _this = this;
        this._cart = _cart;
        this.title = 'Bookmark Best Seller';
        this.items = new Array();
        this.grossTotal = 0;
        this.s1 = this._cart.items.subscribe(function (res) {
            _this.items = res;
        });
        this.s2 = this._cart.grossTotal.subscribe(function (x) {
            return _this.grossTotal = x;
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.s1.unsubscribe();
        this.s2.unsubscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spinner_spinner_component__ = __webpack_require__("./src/app/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_service__ = __webpack_require__("./src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bs_global_service__ = __webpack_require__("./src/app/bs-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_clientstore__ = __webpack_require__("./node_modules/clientstore/client-store.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__spinner_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_13__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_14__cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_15_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_16__bs_global_service__["a" /* BsGlobalService */], __WEBPACK_IMPORTED_MODULE_17_clientstore__["a" /* ClientStore */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bs-global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsGlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsGlobalService = /** @class */ (function () {
    function BsGlobalService() {
    }
    BsGlobalService.genGuid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    BsGlobalService.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    BsGlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BsGlobalService);
    return BsGlobalService;
}());



/***/ }),

/***/ "./src/app/cart-item-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_global_service__ = __webpack_require__("./src/app/bs-global.service.ts");

var CartItemModel = /** @class */ (function () {
    function CartItemModel(p) {
        this.PK = __WEBPACK_IMPORTED_MODULE_0__bs_global_service__["a" /* BsGlobalService */].genGuid();
        this.creation = new Date();
        this.quantity = 1;
        this.product = p;
    }
    ;
    return CartItemModel;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_observable_collection__ = __webpack_require__("./node_modules/observable-collection/dist/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_observable_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_observable_collection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_item_model__ = __webpack_require__("./src/app/cart-item-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_typescript_linq__ = __webpack_require__("./node_modules/typescript-linq/TS.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_typescript_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_typescript_linq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactiveproperty__ = __webpack_require__("./node_modules/reactiveproperty/dist/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactiveproperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactiveproperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clientstore__ = __webpack_require__("./node_modules/clientstore/client-store.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartService = /** @class */ (function () {
    function CartService(_clientContext) {
        this._clientContext = _clientContext;
        this.items = new __WEBPACK_IMPORTED_MODULE_1_observable_collection__["ObservableArray"]();
        this.grossTotal = new __WEBPACK_IMPORTED_MODULE_4_reactiveproperty__["ReactiveProperty"](0);
        this.storeSelection = new Array(0 /* Cookie */, 1 /* Local */);
        this._clientContext.changeClientStore(this.storeSelection);
        this.loadFromCache();
    }
    CartService.prototype.loadFromCache = function () {
        var cartCache = this._clientContext.get('shoppingList');
        if (cartCache != null && cartCache != "") {
            var cachedItems = JSON.parse(cartCache);
            this.loadCart(cachedItems);
        }
    };
    CartService.prototype.loadCart = function (itemz) {
        this.items = __WEBPACK_IMPORTED_MODULE_1_observable_collection__["ObservableArray"].from(itemz);
        this.updateGrossTotal();
    };
    CartService.prototype.getCartItems = function () {
        return this.items;
    };
    CartService.prototype.addToCart = function (pm) {
        try {
            var existingItem = __WEBPACK_IMPORTED_MODULE_3_typescript_linq__["TS"].Linq.Extensions.where(this.items, function (w) { return w.product.Code == pm.Code; }).first();
            existingItem.quantity++;
        }
        catch (error) {
            var cartItem = new __WEBPACK_IMPORTED_MODULE_2__cart_item_model__["a" /* CartItemModel */](pm);
            this.items.push(cartItem);
        }
        this.updateCache();
    };
    CartService.prototype.removeFromCart = function (pm) {
        var ndx = this.items.findIndex(function (i) { return i.PK === pm.PK; });
        if (ndx > -1) {
            var removedItem = this.items.splice(ndx, 1);
            pm = null;
        }
        this.updateCache();
    };
    CartService.prototype.updateCache = function () {
        this._clientContext.save('shoppingList', JSON.stringify(this.items));
        this.updateGrossTotal();
    };
    CartService.prototype.updateGrossTotal = function () {
        var _this = this;
        this.grossTotal.value = 0;
        __WEBPACK_IMPORTED_MODULE_3_typescript_linq__["TS"].Linq.Extensions.forEach(this.items, function (i) { return _this.grossTotal.value += i.quantity; });
    };
    CartService.prototype.ngOnDestroy = function () {
        //todo:unregister subscriptions
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_clientstore__["a" /* ClientStore */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    opacity:1;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n\r\n    /* Position the tooltip */\r\n    padding: 5px 0;\r\n    position:absolute;\r\n    z-index: 1;\r\n    top: 100%;\r\n    left: 50%;\r\n\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n\r\n.cartitem:hover {\r\n    font-weight: bold;\r\n}\r\n\r\n#main {\r\n    width: 1900px;\r\n    height: 800px;\r\n    border: 1px solid #c3c3c3;\r\n    display: -webkit-flex; /* Safari */\r\n    -webkit-flex-wrap: wrap; /* Safari 6.1+ */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n#main div {\r\n    width:auto;\r\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"w3-right btn btn-success fa fa-truck fa-large\"> Confirm Shipping </a>\n<div [@items]=\"items.length\">\n    <span>\n        <i class=\"fa fa-bookmark-o\"></i> Here are your ({{items.length}}) cool products! </span>\n    <div>\n        <div *ngFor=\"let item of items;let i=index\" class=\"w3-margin\" style=\"display:inline\">\n            <table style=\"display:inline\">\n                <tr class=\"w3-teal w3-border-green w3-round\">                    \n                    <input style=\"width:55px\" type=\"number\" placeholder=\"# of\" value=\"{{item.quantity}}\" \n                        required min=\"1\" max=\"100\" (change)=\"quantitiyChanged(item,$event)\"/>\n                    <div class=\"tooltip w3-margin-left w3-text cartitem w3-hover-green w3-opacity\">{{item.product.Name}}\n                        <span class=\"tooltiptext\">\n                            {{item.product.Name}} - {{item.product.Description}}\n                        </span>\n                    </div>                    \n                    <i class=\" w3-padding-2 w3-btn w3-hover-red w3-ripple  fa fa-trash w3-right\" (click)=\"removeItem(i,item)\"></i>\n                </tr>\n                <tr>\n                    <img src=\"assets/images/{{item.product.Code}}.PNG\" style=\"height:500px\" alt=\"BookMark\" />\n                </tr>\n            </table>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("./src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(_cart, _ds) {
        this._cart = _cart;
        this._ds = _ds;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.register = this._cart.items.subscribe(function (res) {
            _this.items = res;
            //TODO:do whatever need when a cart item changed        
        });
    };
    CartComponent.prototype.quantitiyChanged = function (quantitiyChangedItem, event) {
        var updatedQuantity = event.srcElement.value;
        var newVal = Number.parseInt(updatedQuantity);
        if (!isNaN(newVal) && newVal < 100) {
            quantitiyChangedItem.quantity = newVal.valueOf();
            this._cart.updateCache();
        }
        else {
            event.srcElement.value = quantitiyChangedItem.quantity.toString();
        }
    };
    CartComponent.prototype.removeItem = function (ix, itm) {
        this._cart.removeFromCart(itm);
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.register.unsubscribe();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/cart/cart.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('items', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1 })
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.6s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-35px)', offset: 1 })
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_observable_collection__ = __webpack_require__("./node_modules/observable-collection/dist/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_observable_collection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_observable_collection__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.productList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.products = this.productList.asObservable();
        this.loadProducts(_http);
    }
    DataService.prototype.loadProducts = function (_http) {
        var _this = this;
        this.httpObs = this._http.get("assets/data/products.json");
        this.httpObs.subscribe(function (s) {
            _this.productList.next(s);
            _this.productArray = __WEBPACK_IMPORTED_MODULE_3_observable_collection__["ObservableArray"].from(s);
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " \n<div class=\"\">    \n    <div class=\"w3-row\">\n        <form> \n            <!-- form [ngFormOptions]=\"{updateOn: 'submit'}\"-->        \n            <input type=\"text\" style=\"color:black\" name=\"item\" [(ngModel)]=\"searchKeyword\"\n            placeholder=\"Serch something...\" (keyup.enter)=\"search()\"/>    \n            <!-- [ngModelOptions]=\"{updateOn: 'blur'}\"--> \n            <button class=\"w3-green\" type=\"button\" default (click)=\"search()\">\n            Search!\n            </button>         \n        </form>\n    </div>\n    <p></p>\n    <div class=\"w3-row\">\n        <div  *ngFor=\"let prod of productsView\" class=\"\">\n            <app-product [model]=\"prod\" class=\"w3 w3-quarter w3-hover-teal w3-opacity-min w3-hover-opacity-off\" style=\"transition:0.5s;margin-bottom:5px;\">\n                {{prod.Name}}\n            </app-product>\n        </div>\n        <div *ngIf=\"productsView.length <1\">\n            <div>No item to show !</div> \n            <p class=\"btn btn-primary\" (click)=\"search()\">Get all!</p>\n        </div>\n\n    </div>    \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: % 50 auto;\n      grid-template-columns: % 50 auto; }\n\n.col {\n  padding: .4em 1.3em; }\n\n.color-dark {\n  background: #2885c4; }\n\n.color-light {\n  background: #57B3f1; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_data) {
        this._data = _data;
        this.searchKeyword = "";
        this.products = new Array();
        this.productsView = new Array();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.products.subscribe(function (res) {
            _this.products = res;
            _this.productsView = _this.products;
        });
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        if (this.searchKeyword.length < 1) {
            this.productsView = this.products;
        }
        else {
            this.productsView = this.products.filter(function (f) {
                return f.Name.toLowerCase().indexOf(_this.searchKeyword.toLowerCase()) > -1 ||
                    f.Keywords.toLowerCase().indexOf(_this.searchKeyword.toLowerCase()) > -1;
            });
        }
        this.searchKeyword = "";
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <i class=\"fa fa-eye-slash\" style=\"color:burlywood\"></i> Page Not Found\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-display-container\" (mouseenter)=\"isOver=true\" (mouseleave)=\"isOver=false\">     \n    <div [ngClass]=\"{'w3-card-4':isOver==true}\">\n      <div  class=\"w3-xlarge\">\n        <i class=\"w3-green w3-button w3-hover-red\">{{model.Code}}</i>  {{model.Name}}\n    </div>        \n    <img  src=\"assets/images/{{model.Code}}.PNG\" style=\"height:500px\" alt=\"BookMark\"/>\n    <div class=\"w3-display-topright w3-display-hover w3-large\" (mouseenter)=\"isOver=true;isChekingOut=true\" (mouseleave)=\"isOver=false;isChekingOut=false\">\n        <button type=\"button\" (click)=\"addToCart(model)\" class=\"w3-white  w3-btn w3-margin w3-round\" title=\"Shopping Cart\"><i class=\"fa fa-shopping-cart w3-text-grey\"></i></button>\n    </div>\n    <div class=\"w3-display-bottomright w3-display-hover w3-large\">\n        <button type=\"button\" class=\"w3-white w3-animate-opacity w3-btn w3-margin w3-round\" title=\"Save\"><i class=\"fa fa-heart w3-text-red\"></i></button>\n      </div>\n    <div class=\"w3-display-bottomright w3-display-hover w3-large\" style=\"right:65px\">\n        <button type=\"button\" class=\"w3-white w3-animate-opacity w3-btn w3-margin w3-round\" title=\"Share\"><i class=\"fa fa-paper-plane w3-text-grey\"></i></button>\n    </div>\n    <div *ngIf=\"isChekingOut\"  class=\"w3-display-middle w3-display-hover w3-green\" \n        style=\"font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n        {{model.Price}}\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("./src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(_cart) {
        this._cart = _cart;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addToCart = function (item) {
        this._cart.addToCart(item);
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.scss")],
            inputs: ['model']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-center\" *ngIf=\"isBusy\">\n     Loading...<br/>\n    <i class=\"w3-jumbo fa fa-spinner fa-4x fa-spin\"></i>\n</div>"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router) {
        var _this = this;
        this.router = router;
        this.isBusy = true;
        this.router.events.subscribe(function (e) {
            //console.info(e); 
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                console.log("Spinner Start at " + new Date());
                _this.isBusy = true;
            }
            else if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                console.log("Spinner End at " + new Date());
                _this.isBusy = false;
            }
        });
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner',
            template: __webpack_require__("./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__("./src/app/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map