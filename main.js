(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Lorven\repo\LorvenIT.Services.UI\src\main.ts */"zUnb");


/***/ }),

/***/ "3wve":
/*!********************************************************!*\
  !*** ./src/app/top-nav-menu/top-nav-menu.component.ts ***!
  \********************************************************/
/*! exports provided: TopNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuComponent", function() { return TopNavMenuComponent; });
/* harmony import */ var _resources_home_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/home-resource */ "3y7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








function TopNavMenuComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function TopNavMenuComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TopNavMenuComponent_span_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.startSignoutMainWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r1.HomeResource.Logout);
} }
const _c0 = function () { return ["/protected"]; };
function TopNavMenuComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.HomeResource.Login);
} }
class TopNavMenuComponent {
    constructor(authService) {
        this.authService = authService;
        this.HomeResource = _resources_home_resource__WEBPACK_IMPORTED_MODULE_0__["HomeResource"];
        this.isLoggedIn = false;
        this.isExpanded = false;
        this.authService.isLoggedInObs().toPromise().then(x => this.isLoggedIn = x.valueOf());
    }
    ngOnInit() {
        this.authService.isLoggedInObs().toPromise().then(x => this.isLoggedIn = x.valueOf());
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    startSignoutMainWindow() {
        this.authService.startSignout();
    }
}
TopNavMenuComponent.??fac = function TopNavMenuComponent_Factory(t) { return new (t || TopNavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
TopNavMenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TopNavMenuComponent, selectors: [["top-app-nav-menu"]], decls: 7, vars: 4, consts: [["color", "primary"], ["mat-icon-button", "", "id", "sidebarCollapse", "aria-label", "Example icon-button with menu icon", 4, "ngIf"], [1, "top-navbar-spacer"], [4, "ngIf"], ["mat-button", "", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "id", "sidebarCollapse", "aria-label", "Example icon-button with menu icon"], ["mat-button", "", "href", "#", 3, "click"], ["mat-button", "", 3, "routerLink"]], template: function TopNavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, TopNavMenuComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, TopNavMenuComponent_span_5_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, TopNavMenuComponent_a_6_Template, 2, 3, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.HomeResource.AppTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".top-navbar-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJ0b3AtbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbmF2YmFyLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ "3y7Y":
/*!****************************************!*\
  !*** ./src/resources/home-resource.ts ***!
  \****************************************/
/*! exports provided: HomeResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResource", function() { return HomeResource; });
const HomeResource = {
    AppTitle: "Monitoromatic",
    //Menus
    Login: "Login",
    Logout: "Logout",
    Profile: "Profile",
    Dashboard: "Dashboard",
    Services: "Services",
    HealthCheck: "Health check",
    CPUUtilization: "CPU utilization",
    MemoryUtilization: "RAM utilization",
    DiskUtilization: "Disk utilization",
    ApplicationBug: "Application Bugs",
    ServiceGroup: "Service groups",
    Notification: "Notification",
    EmailNotification: "Email",
    TeamsNotification: "Teams",
    SlackNotification: "Slack",
    WhatsappNotification: "Whatsapp",
    Report: "Report",
    ScheduledReport: "Scheduled",
    AddHocReport: "Ad-hoc",
    Agent: "Agent",
    Billing: "Billing",
    PaymentHistory: "Payment history",
    Credit: "Credit",
    Setting: "Setting",
    Administration: "Administration"
};


/***/ }),

/***/ "6c7w":
/*!**********************************************************!*\
  !*** ./src/app/side-nav-menu/side-nav-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return SideNavMenuComponent; });
/* harmony import */ var _resources_home_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/home-resource */ "3y7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






function SideNavMenuComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SideNavMenuComponent_nav_0_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r1.startSignoutMainWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "api");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](38, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "bug_report");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "list_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "notifications_active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "announcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](77, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "stream");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", ctx_r0.HomeResource.manageProfileLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Profile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Logout);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.HomeResource.Dashboard, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.HomeResource.Services, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.HomeResource.HealthCheck, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.DiskUtilization);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.HomeResource.CPUUtilization, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.MemoryUtilization);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.ApplicationBug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.ServiceGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Notification);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.EmailNotification);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.TeamsNotification);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.HomeResource.SlackNotification, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.WhatsappNotification);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Report);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.ScheduledReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.AddHocReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Agent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.HomeResource.Billing, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.PaymentHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Credit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Setting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.HomeResource.Administration);
} }
class SideNavMenuComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
        this.userName = "";
        this.isExpanded = false;
        this.HomeResource = _resources_home_resource__WEBPACK_IMPORTED_MODULE_0__["HomeResource"];
        this.authService.isLoggedInObs().toPromise().then(x => this.isLoggedIn = x.valueOf());
    }
    ngOnInit() {
        this.authService.isLoggedInObs().toPromise().then(x => {
            this.isLoggedIn = x.valueOf();
            if (x.valueOf()) {
                this.userName = this.authService.getClaims()['name'];
            }
        });
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    startSignoutMainWindow() {
        this.authService.startSignout();
    }
}
SideNavMenuComponent.??fac = function SideNavMenuComponent_Factory(t) { return new (t || SideNavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
SideNavMenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SideNavMenuComponent, selectors: [["side-app-nav-menu"]], decls: 1, vars: 1, consts: [["id", "sidebar", 4, "ngIf"], ["id", "sidebar"], [1, "sidebar-header", "bg-info", "bg-gradient", "text-center"], [1, "mt-4", 2, "font-size", "400% !important", 3, "inline"], [1, "mt-2", "display-5", 2, "font-weight", "580"], [1, "list-inline"], [1, "list-inline-item"], ["matRipple", "", 3, "href"], ["matRipple", "", "href", "#", 3, "click"], [1, "list-unstyled", "components"], ["matRipple", "", "href", "#"], [3, "inline"], ["href", "#homeSubmenu", "matRipple", "", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], ["id", "homeSubmenu", 1, "collapse", "list-unstyled"], [1, "fa", "fa-heartbeat"], [1, "fa", "fa-microchip"], ["href", "#pageSubmenu", "data-toggle", "collapse", "matRipple", "", "aria-expanded", "false", 1, "dropdown-toggle"], ["id", "pageSubmenu", 1, "collapse", "list-unstyled"], [1, "fa", "fa-slack"], [1, "fa", "fa-whatsapp"], ["href", "#reportSubmenu", "data-toggle", "collapse", "aria-expanded", "false", "matRipple", "", 1, "dropdown-toggle"], ["id", "reportSubmenu", 1, "collapse", "list-unstyled"], ["href", "#subscriptionSubmenu", "data-toggle", "collapse", "matRipple", "", "aria-expanded", "false", 1, "dropdown-toggle"], ["id", "subscriptionSubmenu", 1, "collapse", "list-unstyled"], ["matRipple", "", "href", "HomeResource.adminPanel"]], template: function SideNavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, SideNavMenuComponent_nav_0_Template, 126, 45, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]], styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html[_ngcontent-%COMP%] {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow[_ngcontent-%COMP%] {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsOENBQThDO0VBQ2hEIiwiZmlsZSI6InNpZGUtbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









const _c0 = function () { return ["/protected"]; };
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "You are not logged in. Please login to user our services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Enter a date range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-date-range-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "mat-datepicker-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "mat-date-range-picker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Health check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Services not responding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-card-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Take action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Disk utilzation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Hight disk utilization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-card-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Take action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "CPU utilzation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Hight CPU utilization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-card-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Take action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "RAM utilzation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Hight RAM utilization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "23");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "mat-card-actions", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Take action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rangePicker", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r2);
} }
class HomeComponent {
    constructor(authService) {
        this.authService = authService;
        this.userName = "";
    }
    ngOnInit() {
        this.authService.isLoggedInObs().toPromise().then(x => {
            this.isLoggedIn = x.valueOf();
            if (x.valueOf()) {
                this.userName = this.authService.getClaims()['name'];
            }
        });
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "m-auto"], [1, "card", "text-center"], [1, "card-body"], [1, "card-text", "mb-5"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "col-md-6", 2, "display", "flex", "align-items", "center"], [1, "display-6", "m-0", "p-0"], [1, "col-md-6"], ["appearance", "fill", 1, "pull-right"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "m-0", "mb-3"], [1, "row", "mb-3"], [1, "col-md-3"], [1, "example-card", "bg-light"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "fa", "fa-heartbeat", 2, "font-size", "200%"], [1, "m-0", "p-0", "mb-2"], [1, "text-center", "mb-0"], [1, "display-4", "text-warning"], [1, "text-right"], ["color", "primary", "mat-button", ""], [1, "fa", "fa-microchip", 2, "font-size", "200%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, HomeComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_div_1_Template, 83, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDateRangePicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    OuthSettings: {
        authority: 'https://localhost:44310',
        client_id: 'lorven_service_dashbaord',
        //redirect_uri: 'http://localhost:4200/auth-callback',
        redirect_uri: 'http://localhost:4200/auth.html',
        post_logout_redirect_uri: 'http://localhost:4200',
        response_type: "id_token",
        scope: "openid profile email company roles",
        filterProtocolClaims: true,
        loadUserInfo: true,
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
    },
    apiURL: "http://localhost:5001/api/values",
    manageProfileLink: 'https://lorvenidentity.azurewebsites.net/Manage',
    adminPanel: 'https://lorvenadmin.azurewebsites.net'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MESX":
/*!**************************************************!*\
  !*** ./src/app/protected/protected.component.ts ***!
  \**************************************************/
/*! exports provided: ProtectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedComponent", function() { return ProtectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ProtectedComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.profile = this.authService.getClaims();
    }
}
ProtectedComponent.??fac = function ProtectedComponent_Factory(t) { return new (t || ProtectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProtectedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProtectedComponent, selectors: [["app-protected"]], decls: 3, vars: 3, template: function ProtectedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx.profile), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm90ZWN0ZWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "NBk6":
/*!**********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthCallbackComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.completeAuthentication();
        //this.router.navigate(['']);
        this.router.navigateByUrl("");
        //document.location.reload(); 
        //location.reload();
    }
}
AuthCallbackComponent.??fac = function AuthCallbackComponent_Factory(t) { return new (t || AuthCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthCallbackComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthCallbackComponent, selectors: [["app-auth-callback"]], decls: 2, vars: 0, template: function AuthCallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "auth-callback works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "QiSM":
/*!************************************************!*\
  !*** ./src/app/call-api/call-api.component.ts ***!
  \************************************************/
/*! exports provided: CallApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallApiComponent", function() { return CallApiComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");





class CallApiComponent {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ngOnInit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': this.authService.getAuthorizationHeaderValue() });
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, { headers: headers })
            .subscribe(response => this.response = response.toString(), error => console.error(error));
    }
}
CallApiComponent.??fac = function CallApiComponent_Factory(t) { return new (t || CallApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CallApiComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: CallApiComponent, selectors: [["app-call-api"]], decls: 2, vars: 1, template: function CallApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" Response: ", ctx.response, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsLWFwaS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _top_nav_menu_top_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-nav-menu/top-nav-menu.component */ "3wve");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _side_nav_menu_side_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-nav-menu/side-nav-menu.component */ "6c7w");






function AppComponent_side_app_nav_menu_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "side-app-nav-menu");
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
        this.authService.isLoggedInObs().toPromise().then(x => this.isLoggedIn = x.valueOf());
    }
    ngOnInit() {
        this.authService.isLoggedInObs().toPromise().then(x => {
            this.isLoggedIn = x.valueOf();
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[4, "ngIf"], ["id", "content"], ["id", "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AppComponent_side_app_nav_menu_0_Template, 1, 0, "side-app-nav-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "top-app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _top_nav_menu_top_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__["TopNavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _side_nav_menu_side_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideNavMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _protected_protected_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./protected/protected.component */ "MESX");
/* harmony import */ var _side_nav_menu_side_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav-menu/side-nav-menu.component */ "6c7w");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _call_api_call_api_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-api/call-api.component */ "QiSM");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "NBk6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "hSMY");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _top_nav_menu_top_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top-nav-menu/top-nav-menu.component */ "3wve");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineInjector"]({ providers: [_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _protected_protected_component__WEBPACK_IMPORTED_MODULE_3__["ProtectedComponent"],
        _side_nav_menu_side_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideNavMenuComponent"],
        _top_nav_menu_top_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__["TopNavMenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _call_api_call_api_component__WEBPACK_IMPORTED_MODULE_6__["CallApiComponent"],
        _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_7__["AuthCallbackComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "hSMY":
/*!************************************************!*\
  !*** ./src/app/services/auth-gaurd.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");


class AuthGuardService {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.startAuthentication();
        return false;
    }
}
AuthGuardService.??fac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.??fac });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService, getClientSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSettings", function() { return getClientSettings; });
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ "3Rfw");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AuthService {
    constructor() {
        this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_0__["UserManager"](getClientSettings());
        this.user = null;
        this.manager.getUser().then(user => {
            this.user = user;
        });
    }
    isLoggedIn() {
        return this.user != null && !this.user.expired;
    }
    isLoggedInObs() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.manager.getUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (user) {
                return true;
            }
            else {
                return false;
            }
        }));
    }
    /*return Observable.fromPromise(this.mgr.getUser()).map<User, boolean>((user) => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });*/
    getClaims() {
        return this.user.profile;
    }
    getAuthorizationHeaderValue() {
        return `${this.user.token_type} ${this.user.access_token}`;
    }
    startAuthentication() {
        return this.manager.signinRedirect();
    }
    completeAuthentication() {
        return this.manager.signinRedirectCallback().then(user => {
            this.user = user;
        });
    }
    startSignout() {
        this.manager.getUser().then(user => {
            return this.manager.signoutRedirect({ id_token_hint: user.id_token }).then(resp => {
                console.log('signed out', resp);
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
    ;
    endSignout() {
        this.manager.signoutRedirectCallback().then(function (resp) {
            console.log('signed out', resp);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ;
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac });
function getClientSettings() {
    return {
        authority: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.authority,
        client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.client_id,
        redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.redirect_uri,
        post_logout_redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.post_logout_redirect_uri,
        response_type: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.response_type,
        scope: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.scope,
        filterProtocolClaims: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.filterProtocolClaims,
        loadUserInfo: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.loadUserInfo,
        automaticSilentRenew: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.automaticSilentRenew,
        silent_redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OuthSettings.silent_redirect_uri
    };
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "NBk6");
/* harmony import */ var _call_api_call_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-api/call-api.component */ "QiSM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _protected_protected_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./protected/protected.component */ "MESX");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "hSMY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: 'protected',
        component: _protected_protected_component__WEBPACK_IMPORTED_MODULE_4__["ProtectedComponent"],
        canActivate: [_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    {
        path: 'auth-callback',
        component: _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_1__["AuthCallbackComponent"]
    },
    {
        path: 'call-api',
        component: _call_api_call_api_component__WEBPACK_IMPORTED_MODULE_2__["CallApiComponent"],
        canActivate: [_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map