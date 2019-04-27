webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-reactive-form></app-reactive-form> -->\n<!-- <app-model-driven-form></app-model-driven-form> -->\n<!-- <app-template-driven-form></app-template-driven-form> -->\n<!-- \n<br />\n<br />\n<br />\n<br />\n<hr /> -->\n<br />\n\n<div class=\"userListContainer\">\n  <nav class=\"navbar navbar-inverse navbar-static-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/users\">Users</a>\n        <a class=\"navbar-brand\" routerLink=\"/registertempate\">register-tempate</a>\n        <a class=\"navbar-brand\" routerLink=\"/registermodel\">register-model</a>\n        <a class=\"navbar-brand\" routerLink=\"/registerreactive\">register-reactive</a>\n        <a *ngIf=\"!isLoggedIn\" class=\"navbar-brand\" routerLink=\"/auth/login\">Login</a>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n\n  <!-- <app-user-list></app-user-list> -->\n  <br />\n  <br />\n</div>\n\n<hr/>\n<app-pipes-demo></app-pipes-demo>\n<br />\n<hr />\n<app-counter></app-counter>\n\n<br />\n<hr />\n<h2>Bindings</h2>\n<h3>Property Binding</h3>\n<h4>Message1: {{message}}</h4>\n<h4 innerHTML=\"{{message}}\">Message2: </h4>\n<h4 bind-innerHTML=message>Message3: </h4>\n<h4 [innerHTML]=message>Message4: </h4>\n<h4>Message5:\n  <span [textContent]=message></span>\n</h4>\n<br>\n\n<h3>Event Binding</h3>\n<button on-click=\"change()\">Click to Change</button>\n<button (click)=change()>Click to Change</button>\n<br>\n\n<h3>Two Way Binding</h3>\n1.\n<input type=\"text\" [value]=message> 2.\n<input type=\"text\" bindon-ngModel=message> 3.\n<input type=\"text\" [(ngModel)]=message> 4.\n<input type=\"text\" [(ngModel)]=name>\n<h3>Hello, {{name}}</h3>\n\n<br>\n<br>\n<br>\n<br>\n<hr />\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n\n\n\n\n\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <h2>Sass Content</h2>\n</div>\n<div class=\"customClass\">Custom Text</div>\n<br>\n<h2>Directives</h2>\n<div>\n  <h2 [ngClass]=\"{textRed: flag===true, smallerFont: flag===false}\">Attribute Directive</h2>\n  <h2 [ngStyle]=\"{'color': 'green', 'font-size.px': 12}\">Attribute Directive 2</h2>\n</div>\n<div>\n  <h3 *ngIf=flag>Conditional Display</h3>\n  <ul [ngSwitch]=flag>\n    <li *ngSwitchCase=true>Display text for true</li>\n    <li *ngSwitchCase=false>Display text for false</li>\n    <li *ngSwitchDefault>Display text for default</li>\n\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: blue; }\n\n.customClass {\n  color: orange;\n  font-size: 40px; }\n\n.textRed {\n  color: red; }\n\n.smallerFont {\n  font-size: 12px; }\n\n.userListContainer {\n  background-color: white;\n  padding: 10px;\n  color: gray; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
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
    // @ViewChild(UserListComponent)
    // private userList: UserListComponent;
    function AppComponent(store, cdRef) {
        var _this = this;
        this.store = store;
        this.cdRef = cdRef;
        this.name = '';
        this.title = 'app';
        this.flag = true;
        this.message = 'Hello World';
        this.isLoggedIn = false;
        this.store.select('isLoggedIn').subscribe(function (isLogged) {
            if (isLogged !== undefined) {
                _this.isLoggedIn = isLogged;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.userList.selectedUserCountRadioButton = 'all';
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.change = function () {
        this.message = 'Changed world';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__counter_counter_component__ = __webpack_require__("./src/app/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_driven_form_model_driven_form_component__ = __webpack_require__("./src/app/model-driven-form/model-driven-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_demo_pipes_demo_component__ = __webpack_require__("./src/app/pipes-demo/pipes-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_capitalize_pipe__ = __webpack_require__("./src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_pipe__ = __webpack_require__("./src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reactive_form_reactive_form_component__ = __webpack_require__("./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__state_auth_reducer__ = __webpack_require__("./src/app/state/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__state_user_reducer__ = __webpack_require__("./src/app/state/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__template_driven_form_template_driven_form_component__ = __webpack_require__("./src/app/template-driven-form/template-driven-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_count_user_count_component__ = __webpack_require__("./src/app/user-count/user-count.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_details_user_details_component__ = __webpack_require__("./src/app/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_list_user_list_component__ = __webpack_require__("./src/app/user-list/user-list.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_count_user_count_component__["a" /* UserCountComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_demo_pipes_demo_component__["a" /* PipesDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_17__template_driven_form_template_driven_form_component__["a" /* TemplateDrivenFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__model_driven_form_model_driven_form_component__["a" /* ModelDrivenFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* StoreModule */].forRoot({ users: __WEBPACK_IMPORTED_MODULE_16__state_user_reducer__["b" /* usersReducer */], isLoggedIn: __WEBPACK_IMPORTED_MODULE_15__state_auth_reducer__["b" /* authReducer */] }),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__ = __webpack_require__("./src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_driven_form_template_driven_form_component__ = __webpack_require__("./src/app/template-driven-form/template-driven-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_driven_form_model_driven_form_component__ = __webpack_require__("./src/app/model-driven-form/model-driven-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactive_form_reactive_form_component__ = __webpack_require__("./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_details_user_details_component__ = __webpack_require__("./src/app/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");






var routes = [
    { path: 'users/:username', component: __WEBPACK_IMPORTED_MODULE_4__user_details_user_details_component__["a" /* UserDetailsComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_0__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'registertempate', component: __WEBPACK_IMPORTED_MODULE_1__template_driven_form_template_driven_form_component__["a" /* TemplateDrivenFormComponent */] },
    { path: 'registermodel', component: __WEBPACK_IMPORTED_MODULE_2__model_driven_form_model_driven_form_component__["a" /* ModelDrivenFormComponent */] },
    { path: 'registerreactive', component: __WEBPACK_IMPORTED_MODULE_3__reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */] },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */] }
];


/***/ }),

/***/ "./src/app/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Counter</h2>\nCount By:\n<input [(ngModel)]=countBy type=\"number\">\n<br /> \nCurrent Count: {{count}}\n<br />\n<button (click)=incClicked()>Increase</button>\n<button (click)=decClicked()>Decrease</button>\n<br />"

/***/ }),

/***/ "./src/app/counter/counter.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.countBy = 1;
        this.count = 0;
    }
    CounterComponent.prototype.incClicked = function () {
        this.count = this.count + this.countBy;
    };
    CounterComponent.prototype.decClicked = function () {
        this.count -= this.countBy;
    };
    CounterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-counter',
            template: __webpack_require__("./src/app/counter/counter.component.html"),
            styles: [__webpack_require__("./src/app/counter/counter.component.scss")]
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/model-driven-form/model-driven-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Model Driven Form</h3>\n\n<form class=\"form-horizontal\" (submit)=\"logForm()\">\n  <div class=\"form-group\">\n    <label>Name: </label>\n    <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"user.name\" [disabled]=\"user.name=='yogesh'\" #name=\"ngModel\">\n    <div *ngIf=\"isInvalid() && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n\n      <div *ngIf=\"user.name==''\">\n        Name is required.\n      </div>\n      <div *ngIf=\"user.name.length>0 && user.name.length<4\">\n        Name must be at least 4 characters long.\n      </div>\n      <div *ngIf=\"user.name=='bob'\">\n        Name cannot be bob.\n      </div>\n\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>UserName: </label>\n    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Gender: </label>\n    <input type=\"text\" class=\"form-control\" name=\"gender\" [(ngModel)]=\"user.gender\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email: </label>\n    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Phone: </label>\n    <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"user.phone\">\n  </div>\n  <div class=\"form-group\">\n    <label>City: </label>\n    <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"user.address.city\">\n  </div>\n  <div class=\"form-group\">\n    <label>Zip: </label>\n    <input type=\"text\" class=\"form-control\" name=\"zip\" [(ngModel)]=\"user.address.zip\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" [disabled]=\"isInvalid()\">\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/model-driven-form/model-driven-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model-driven-form/model-driven-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelDrivenFormComponent; });
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

var ModelDrivenFormComponent = /** @class */ (function () {
    function ModelDrivenFormComponent() {
        this.user = {
            id: -1,
            name: '',
            username: '',
            gender: '',
            email: '',
            phone: '',
            address: {
                city: '',
                zip: 0
            }
        };
    }
    ModelDrivenFormComponent.prototype.isInvalid = function () {
        return this.user.name.length === 0 || (this.user.name.length > 0 && this.user.name.length < 4) || this.user.name === 'bob';
    };
    ModelDrivenFormComponent.prototype.ngOnInit = function () {
    };
    ModelDrivenFormComponent.prototype.logForm = function () {
        console.log(this.user);
    };
    ModelDrivenFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-model-driven-form',
            template: __webpack_require__("./src/app/model-driven-form/model-driven-form.component.html"),
            styles: [__webpack_require__("./src/app/model-driven-form/model-driven-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModelDrivenFormComponent);
    return ModelDrivenFormComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n  Requested resource could not be found.</h2>\n<h3>Please try again or contact administrator.</h3>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes-demo/pipes-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Pipes</h2>\n<h3>{{today}}</h3>\n<h3>{{today | date}}</h3>\n<h3>{{today | date:'MM/dd/yy'}}</h3>\n<h3>{{today | date:'shortDate'}}</h3>\n<h3>{{today | date:'fullDate' | uppercase }}</h3> "

/***/ }),

/***/ "./src/app/pipes-demo/pipes-demo.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pipes-demo/pipes-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesDemoComponent; });
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

var PipesDemoComponent = /** @class */ (function () {
    function PipesDemoComponent() {
        this.today = new Date();
    }
    PipesDemoComponent.prototype.ngOnInit = function () {
    };
    PipesDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pipes-demo',
            template: __webpack_require__("./src/app/pipes-demo/pipes-demo.component.html"),
            styles: [__webpack_require__("./src/app/pipes-demo/pipes-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PipesDemoComponent);
    return PipesDemoComponent;
}());



/***/ }),

/***/ "./src/app/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        return value.filter(function (item) { return item.name.indexOf(args) !== -1; });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Reactive Form</h2>\n\n<form class=\"form-horizontal\" [formGroup]=\"registerForm\" (submit)=\"logForm(registerForm.value)\">\n  <div class=\"form-group\">\n    <label>ID: </label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"id\">\n    <div class=\"text-danger\" *ngIf=\"registerForm.get('id').hasError('required') && registerForm.get('id').touched\">\n      ID is required\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Name: </label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n    <div class=\"text-danger\" *ngIf=\"registerForm.get('name').hasError('required') && registerForm.get('name').touched\">\n      Name is required\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>UserName: </label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n    <div class=\"text-danger\" *ngIf=\"registerForm.get('username').touched\">\n      <p *ngIf=\"registerForm.get('username').hasError('required') \">UserName is required</p>\n      <p *ngIf=\"registerForm.get('username').hasError('minlength') \">Min Length</p>\n      <p *ngIf=\"registerForm.get('username').hasError('maxlength') \">Max Length</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Gender: </label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"gender\">\n    <div class=\"text-danger\" *ngIf=\"registerForm.get('gender').hasError('required') && registerForm.get('gender').touched\">\n      Gender is required\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Email: </label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n    <div class=\"text-danger\" *ngIf=\"registerForm.get('email').touched\">\n      <p *ngIf=\"registerForm.get('email').hasError('required') \">Email is required</p>\n      <p *ngIf=\"registerForm.get('email').hasError('email') \">Incorrect email</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Phone: </label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n    <div class=\"text-danger\" *ngIf=\"registerForm.get('phone').hasError('required') && registerForm.get('phone').touched\">\n      Phone is required.....\n    </div>\n  </div>\n  <fieldset formGroupName=\"address\">\n    <div class=\"form-group\">\n      <label>City: </label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n    </div>\n    <div class=\"form-group\">\n      <label>Zip: </label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"zip\">\n    </div>\n  </fieldset>\n  <div class=\"form-group\">\n    <input type=\"submit\" class=\"btn btn-primary\" [disabled]=registerForm.invalid value=\"Submit\">\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(fb) {
        this.fb = fb;
        this.disableID = false;
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.fb.group({
            id: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            username: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20)
                ])],
            gender: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])],
            phone: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            address: this.fb.group({
                city: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                zip: 0
            })
        });
        // this.registerForm = new FormGroup({
        //   id: new FormControl(),
        //   someProp: new FormControl(),
        //   name: new FormControl(),
        //   username: new FormControl(),
        //   gender: new FormControl(),
        //   email: new FormControl(),
        //   phone: new FormControl(),
        //   address: new FormGroup({
        //     city: new FormControl(),
        //     zip: new FormControl()
        //   })
        // });
        this.registerForm.valueChanges.subscribe(function () {
            if (_this.registerForm.controls['id'].value === 10) {
                setTimeout(function () {
                    _this.registerForm.get('id').disable();
                }, 10);
            }
        });
    };
    ReactiveFormComponent.prototype.logForm = function (value) {
        console.log(value);
        console.log(value.name);
    };
    ReactiveFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reactive-form',
            template: __webpack_require__("./src/app/reactive-form/reactive-form.component.html"),
            styles: [__webpack_require__("./src/app/reactive-form/reactive-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_user_reducer__ = __webpack_require__("./src/app/state/user.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, store) {
        this.http = http;
        this.store = store;
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }
    UserService.prototype.loadUsers = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Authorization', 'Check');
        this.http.get(this.url, { headers: headers })
            .subscribe(function (users) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__state_user_reducer__["a" /* UsersLoadedAction */](users));
        });
    };
    UserService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Authorization', 'Check');
        return this.http.get(this.url, {
            headers: headers
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/state/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DO_LOGIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoLoginAction; });
/* harmony export (immutable) */ __webpack_exports__["b"] = authReducer;
var DO_LOGIN = 'DO_LOGIN';
var DoLoginAction = /** @class */ (function () {
    function DoLoginAction(payload) {
        this.payload = payload;
        this.type = DO_LOGIN;
    }
    return DoLoginAction;
}());

var initialState = {
    isLoggedIn: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DO_LOGIN: {
            return true;
            // return Object.assign({}, state, {
            //     isLoggedIn: true,
            // });
        }
        default: {
            return state.isLoggedIn;
        }
    }
}


/***/ }),

/***/ "./src/app/state/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USERS_LOADED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersLoadedAction; });
/* harmony export (immutable) */ __webpack_exports__["b"] = usersReducer;
/* unused harmony export selectUsers */
var USERS_LOADED = 'USERS_LOADED';
var UsersLoadedAction = /** @class */ (function () {
    function UsersLoadedAction(payload) {
        this.payload = payload;
        this.type = USERS_LOADED;
    }
    return UsersLoadedAction;
}());

var initialState = {
    users: []
};
function usersReducer(state, action) {
    if (state === void 0) { state = initialState.users; }
    switch (action.type) {
        case USERS_LOADED: {
            return Array.prototype.concat(action.payload);
        }
        default: {
            return state;
        }
    }
}
var selectUsers = function (state) { return state.users; };


/***/ }),

/***/ "./src/app/template-driven-form/template-driven-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Template Driven Form</h3>\n<div style=\"padding: 20px;\">\n  <form class=\"form-horizontal\" #form1=\"ngForm\" (submit)=\"logForm(form1.value)\">\n    <div class=\"form-group\">\n      <label>Name: </label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" ngModel required minlength=\"4\" #myname=\"ngModel\">\n      <div *ngIf=\"myname.invalid && (myname.dirty || myname.touched)\" class=\"alert alert-danger\">\n\n        <div *ngIf=\"myname.errors.required\">\n          Name is required.\n        </div>\n        <div *ngIf=\"myname.errors.minlength\">\n          Name must be at least 4 characters long.\n        </div>\n\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>UserName: </label>\n      <input type=\"text\" class=\"form-control\" name=\"username\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender: </label>\n      <input type=\"text\" class=\"form-control\" name=\"gender\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label>Email: </label>\n      <input type=\"text\" class=\"form-control\" name=\"email\" ngModel>\n    </div>\n    <div class=\"form-group\">\n      <label>Phone: </label>\n      <input type=\"text\" class=\"form-control\" name=\"phone\" ngModel>\n    </div>\n    <fieldset ngModelGroup=\"address\">\n      <div class=\"form-group\">\n        <label>City: </label>\n        <input type=\"text\" class=\"form-control\" name=\"city\" ngModel>\n      </div>\n      <div class=\"form-group\">\n        <label>Zip: </label>\n        <input type=\"text\" class=\"form-control\" name=\"zip\" ngModel>\n      </div>\n    </fieldset>\n    <div class=\"form-group\">\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" [disabled]=\"!form1.valid\">\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/template-driven-form/template-driven-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/template-driven-form/template-driven-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateDrivenFormComponent; });
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

var TemplateDrivenFormComponent = /** @class */ (function () {
    function TemplateDrivenFormComponent() {
    }
    TemplateDrivenFormComponent.prototype.ngOnInit = function () {
    };
    TemplateDrivenFormComponent.prototype.logForm = function (value) {
        console.log(value);
    };
    TemplateDrivenFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template-driven-form',
            template: __webpack_require__("./src/app/template-driven-form/template-driven-form.component.html"),
            styles: [__webpack_require__("./src/app/template-driven-form/template-driven-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateDrivenFormComponent);
    return TemplateDrivenFormComponent;
}());



/***/ }),

/***/ "./src/app/user-count/user-count.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"radioClass\">Show : </span>\n\n<input type=\"radio\" name=\"options\" value=\"all\" [(ngModel)]=\"selectedRadioButtonValue\" (change)=\"onRadioButtonSelectionChange()\"\n/>\n<span class=\"radioClass\">{{\"All(\" + allCount + \")\"}}</span>\n\n<input name=\"options\" type=\"radio\" value=\"male\" [(ngModel)]=\"selectedRadioButtonValue\" (change)=\"onRadioButtonSelectionChange()\">\n<span class=\"radioClass\">{{\"Male(\" + maleCount + \")\"}}</span>\n\n<input name=\"options\" type=\"radio\" value=\"female\" [(ngModel)]=\"selectedRadioButtonValue\" (change)=\"onRadioButtonSelectionChange()\">\n<span class=\"radioClass\">{{\"Female(\" + femaleCount + \")\"}}</span>"

/***/ }),

/***/ "./src/app/user-count/user-count.component.scss":
/***/ (function(module, exports) {

module.exports = ".radioClass {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: large; }\n"

/***/ }),

/***/ "./src/app/user-count/user-count.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCountComponent; });
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

var UserCountComponent = /** @class */ (function () {
    function UserCountComponent() {
        this.allCount = 10;
        this.maleCount = 5;
        this.femaleCount = 5;
        this.selectedRadioButtonValue = 'all';
        this.selectedRadioButtonValueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    UserCountComponent.prototype.onRadioButtonSelectionChange = function () {
        this.selectedRadioButtonValueChanged.emit(this.selectedRadioButtonValue);
    };
    UserCountComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserCountComponent.prototype, "allCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserCountComponent.prototype, "maleCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserCountComponent.prototype, "femaleCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], UserCountComponent.prototype, "selectedRadioButtonValueChanged", void 0);
    UserCountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-count',
            template: __webpack_require__("./src/app/user-count/user-count.component.html"),
            styles: [__webpack_require__("./src/app/user-count/user-count.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserCountComponent);
    return UserCountComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-details works!\n</p>\n<h2>Selected user: {{userName}}</h2>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
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


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.userName = '';
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.userName = this.activatedRoute.snapshot.params['username'];
    };
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-details',
            template: __webpack_require__("./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__("./src/app/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2>Component Interaction</h2>\n<app-user-count [allCount]=\"getAllUsersCount()\" [maleCount]=\"getAllMaleUsersCount()\" [femaleCount]=\"getAllFemaleUsersCount()\"\n  (selectedRadioButtonValueChanged)=\"onUserCountRadioButtonChange($event)\"></app-user-count>\n<br />\n<br /> -->\n\nFilter on Name:\n<input type=\"text\" [(ngModel)]=\"filterBy\">\n<br />\n<br />\n\n<table>\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>UserName</th>\n      <th>Gender</th>\n      <th>Email</th>\n      <th>Phone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let user of users | async\">\n      <tr *ngIf=\"selectedUserCountRadioButton==='all' || selectedUserCountRadioButton===user.gender \">\n        <td>{{user.id}}</td>\n        <td>{{user.name | capitalize }}</td>\n        <td>\n          <a [routerLink]=\"['/users', user.username | uppercase ]\">{{user.username | uppercase}}</a>\n        </td>\n        <td>{{user.gender}}</td>\n        <td>{{user.email | lowercase }}</td>\n        <td>{{user.phone}}</td>\n      </tr>\n    </ng-container>\n\n    <tr *ngIf=\"!users || users.length==0\">\n      <td colspan=\"6\">\n        No users to display\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.scss":
/***/ (function(module, exports) {

module.exports = "table {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: large;\n  border-collapse: collapse; }\n\ntd {\n  border: 1px solid #369;\n  padding: 5px; }\n\nth {\n  border: 1px solid #369;\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, store) {
        this.userService = userService;
        this.store = store;
        this.users = [];
        this.today = new Date();
        this.filterBy = '';
        this.users = this.store.select('users');
        this.userService.loadUsers();
    }
    UserListComponent.prototype.ngOnInit = function () {
        // this.userService.getUsers().subscribe(users => {
        //   this.users = users;
        // });
    };
    // getAllUsersCount(): number {
    //   return this.users.length;
    // }
    // getAllMaleUsersCount(): number {
    //   return this.users.filter(x => x.gender === 'male').length;
    // }
    // getAllFemaleUsersCount(): number {
    //   return this.users.filter(x => x.gender === 'female').length;
    // }
    UserListComponent.prototype.onUserCountRadioButtonChange = function (selectedValue) {
        console.log(selectedValue);
        this.selectedUserCountRadioButton = selectedValue;
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], UserListComponent);
    return UserListComponent;
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