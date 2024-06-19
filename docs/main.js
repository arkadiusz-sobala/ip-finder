(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2UF":
/*!**************************************!*\
  !*** ./src/constants/mocks.const.ts ***!
  \**************************************/
/*! exports provided: USER_ADDRESS_INFO, EXAMPLE_RESPONSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ADDRESS_INFO", function() { return USER_ADDRESS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_RESPONSES", function() { return EXAMPLE_RESPONSES; });
const USER_ADDRESS_INFO = {
    status: 'success',
    country: 'Poland',
    countryCode: 'PL',
    region: '02',
    regionName: 'Lower Silesia',
    city: 'Wroclaw',
    zip: '50-019',
    lat: 51.1043,
    lon: 17.0335,
    timezone: 'Europe/Warsaw',
    isp: 'TK Telekom sp. z o.o',
    org: 'WROCNET M.Konstantynowicz T.Jozefowicz Sp. j.',
    as: 'AS20960 TK Telekom sp. z o.o.',
    query: '88.199.123.71',
};
const EXAMPLE_RESPONSES = [
    {
        status: 'success',
        country: 'Poland',
        countryCode: 'PL',
        region: '02',
        regionName: 'Lower Silesia',
        city: 'Wroclaw',
        zip: '50-088',
        lat: 51.0984,
        lon: 17.031,
        timezone: 'Europe/Warsaw',
        isp: 'OVH ISP',
        org: 'OVH Sp. z o. o',
        as: 'AS16276 OVH SAS',
        query: '178.33.51.175',
    },
    {
        status: 'success',
        country: 'Canada',
        countryCode: 'CA',
        region: 'ON',
        regionName: 'Ontario',
        city: 'Toronto',
        zip: 'M5A',
        lat: 43.6532,
        lon: -79.3832,
        timezone: 'America/Toronto',
        isp: 'Cloudflare, Inc.',
        org: 'Cloudflare, Inc.',
        as: 'AS13335 Cloudflare, Inc.',
        query: '2606:4700:3031::6815:2170',
    },
    {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'NY',
        regionName: 'New York',
        city: 'New York',
        zip: '10123',
        lat: 40.7128,
        lon: -74.006,
        timezone: 'America/New_York',
        isp: 'Google LLC',
        org: 'Google LLC',
        as: 'AS15169 Google LLC',
        query: '172.217.12.142',
    },
    {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'MI',
        regionName: 'Michigan',
        city: 'Dearborn',
        zip: '48121',
        lat: 42.3223,
        lon: -83.1763,
        timezone: 'America/Detroit',
        isp: 'Ford Motor Company',
        org: 'Ford Motor Company',
        as: '',
        query: '2001:0:130f::9c0:876a:130b',
    },
    {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'CA',
        regionName: 'California',
        city: 'Mountain View',
        zip: '94043',
        lat: 37.422,
        lon: -122.084,
        timezone: 'America/Los_Angeles',
        isp: 'Google LLC',
        org: 'Google LLC',
        as: 'AS15169 Google LLC',
        query: '172.253.122.136',
    },
    {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'CA',
        regionName: 'California',
        city: 'San Francisco',
        zip: '94107',
        lat: 37.7823,
        lon: -122.391,
        timezone: 'America/Los_Angeles',
        isp: 'GitHub, Inc.',
        org: 'GitHub, Inc.',
        as: 'AS36459 GitHub, Inc.',
        query: '140.82.112.3',
    },
    {
        status: 'success',
        country: 'France',
        countryCode: 'FR',
        region: 'IDF',
        regionName: 'Île-de-France',
        city: 'Paris',
        zip: '75008',
        lat: 48.8714,
        lon: 2.32141,
        timezone: 'Europe/Paris',
        isp: 'Online S.A.S.',
        org: 'ONLINE',
        as: 'AS12876 SCALEWAY S.A.S.',
        query: '212.129.51.63',
    },
    {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'CA',
        regionName: 'California',
        city: 'Los Angeles',
        zip: '90060',
        lat: 34.0544,
        lon: -118.2441,
        timezone: 'America/Los_Angeles',
        isp: 'Facebook, Inc.',
        org: 'Meta Platforms Ireland Limited',
        as: 'AS32934 Facebook, Inc.',
        query: '31.13.70.36',
    },
    {
        status: 'success',
        country: 'United States',
        countryCode: 'US',
        region: 'CA',
        regionName: 'California',
        city: 'San Francisco',
        zip: '94103',
        lat: 37.7768,
        lon: -122.416,
        timezone: 'America/Los_Angeles',
        isp: 'Twitter Inc.',
        org: 'Twitter Inc',
        as: 'AS13414 Twitter Inc.',
        query: '104.244.42.1',
    },
    {
        status: 'success',
        country: 'Canada',
        countryCode: 'CA',
        region: 'ON',
        regionName: 'Ontario',
        city: 'Toronto',
        zip: 'M5A',
        lat: 43.6532,
        lon: -79.3832,
        timezone: 'America/Toronto',
        isp: 'Cloudflare, Inc.',
        org: 'Cloudflare, Inc.',
        as: 'AS13335 Cloudflare, Inc.',
        query: '172.67.70.227',
    },
];


/***/ }),

/***/ "+roq":
/*!*****************************************************************!*\
  !*** ./src/components/location-info/location-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationInfoComponent", function() { return LocationInfoComponent; });
/* harmony import */ var _constants_info_label_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../constants/info-label.const */ "xck8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");




function LocationInfoComponent_table_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.infoLabelMap[item_r5.key], ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.value);
} }
function LocationInfoComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocationInfoComponent_table_0_tr_1_Template, 5, 2, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.addressInfo));
} }
function LocationInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No info available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LocationInfoComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LocationInfoComponent {
    constructor() {
        this.infoLabelMap = _constants_info_label_const__WEBPACK_IMPORTED_MODULE_0__["INFO_LABEL_MAP"];
    }
    ngOnInit() { }
}
LocationInfoComponent.ɵfac = function LocationInfoComponent_Factory(t) { return new (t || LocationInfoComponent)(); };
LocationInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocationInfoComponent, selectors: [["app-location-info"]], inputs: { addressInfo: "addressInfo", loading: "loading" }, decls: 4, vars: 3, consts: [["class", "info-table", 4, "ngIf", "ngIfElse"], ["class", "spinner-container", 4, "ngIf"], ["spinner", ""], [1, "info-table"], [4, "ngFor", "ngForOf"], [1, "info-table__label"], [1, "spinner-container"]], template: function LocationInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LocationInfoComponent_table_0_Template, 3, 3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocationInfoComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LocationInfoComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.addressInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".info-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.info-table__label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 100px;\n}\n.info-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2F0aW9uLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUNSO0FBRUk7RUFDSSx5QkFBQTtBQUFSO0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESiIsImZpbGUiOiJsb2NhdGlvbi1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJl9fbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIH1cclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Komp\Desktop\Praca\Projekty do firm\Ip finder\ip-finder\src\main.ts */"zUnb");


/***/ }),

/***/ "6aKi":
/*!*********************************************!*\
  !*** ./src/components/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




function MapComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("leafletLayer", ctx_r0.marker);
} }
class MapComponent {
    constructor() {
        this.tooltipText = 'This is the marker';
        this._markerIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"]({
            iconUrl: 'assets/marker.png',
            iconSize: [30, 45],
            iconAnchor: [15, 45],
            tooltipAnchor: [15, -30],
        });
        this.mapOptions = {
            layers: [
                leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 15,
                    minZoom: 1,
                }),
            ],
            zoom: 5,
            center: leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"](52, 17),
        };
    }
    set locationData(value) {
        this._handleLocationDataChange(value);
    }
    _handleLocationDataChange(data) {
        if (!data) {
            this.marker = undefined;
            return;
        }
        this._createMarker(data);
        this._moveMapToPoint(data);
    }
    _createMarker(data) {
        this.marker = leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"]([data.lat, data.lon], {
            icon: this._markerIcon,
        }).bindTooltip(this.tooltipText);
    }
    _moveMapToPoint(data) {
        this.mapCenter = leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"](data.lat, data.lon);
        this.mapZoom = 12;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["map"]], inputs: { tooltipText: "tooltipText", locationData: "locationData" }, decls: 2, vars: 4, consts: [["leaflet", "", 1, "map-container", 3, "leafletOptions", "leafletZoom", "leafletCenter"], [3, "leafletLayer", 4, "ngIf"], [3, "leafletLayer"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MapComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("leafletOptions", ctx.mapOptions)("leafletZoom", ctx.mapZoom)("leafletCenter", ctx.mapCenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.marker);
    } }, directives: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"]], styles: [".map-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "98cB":
/*!*****************************************************************!*\
  !*** ./src/directives/address-input/address-input.directive.ts ***!
  \*****************************************************************/
/*! exports provided: AddressInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInputDirective", function() { return AddressInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

const disallowedCharacters = /[ `!@#$%^&*()_+=\[\]{};'"\\\/|,<>~]/;
const disallowedPhrases = ['http://', 'https://'];
class AddressInputDirective {
    constructor() { }
    onKeydown(event) {
        if (disallowedCharacters.test(event.key)) {
            event.preventDefault();
        }
    }
    onInput(event) {
        const disallowedPhrase = disallowedPhrases.find((phrase) => event.target.value.includes(phrase));
        if (!disallowedPhrase) {
            return;
        }
        event.target.value = event.target.value.replace(disallowedPhrase, '');
    }
}
AddressInputDirective.ɵfac = function AddressInputDirective_Factory(t) { return new (t || AddressInputDirective)(); };
AddressInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AddressInputDirective, selectors: [["", "addressInput", ""]], hostBindings: function AddressInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddressInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("input", function AddressInputDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } } });


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
    production: false
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

/***/ "C2qV":
/*!**********************************************!*\
  !*** ./src/data-access/ip-search.service.ts ***!
  \**********************************************/
/*! exports provided: IpSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpSearchService", function() { return IpSearchService; });
/* harmony import */ var _constants_mocks_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants/mocks.const */ "+2UF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class IpSearchService {
    constructor(_http) {
        this._http = _http;
        this._ipApiAddress = 'http://ip-api.com/json/';
    }
    getAddressInfo(address) {
        let value = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_constants_mocks_const__WEBPACK_IMPORTED_MODULE_0__["EXAMPLE_RESPONSES"][Math.floor(Math.random() * 10)]);
        if (address === '') {
            value = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_constants_mocks_const__WEBPACK_IMPORTED_MODULE_0__["USER_ADDRESS_INFO"]);
        }
        const queryAddress = this._ipApiAddress + address.trim();
        return value.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => (Object.assign(Object.assign({}, value), { searchPhrase: address }))));
    }
}
IpSearchService.ɵfac = function IpSearchService_Factory(t) { return new (t || IpSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
IpSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IpSearchService, factory: IpSearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H8Hw":
/*!*****************************************************************!*\
  !*** ./src/pipes/address-info-pipe/address-info-pipe.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddressInfoPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInfoPipeModule", function() { return AddressInfoPipeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _address_info_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-info-pipe.pipe */ "XQlh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class AddressInfoPipeModule {
}
AddressInfoPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddressInfoPipeModule });
AddressInfoPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AddressInfoPipeModule_Factory(t) { return new (t || AddressInfoPipeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddressInfoPipeModule, { declarations: [_address_info_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__["AddressInfoPipePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_address_info_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__["AddressInfoPipePipe"]] }); })();


/***/ }),

/***/ "Lu6i":
/*!********************************************************!*\
  !*** ./src/components/search-bar/search-bar.module.ts ***!
  \********************************************************/
/*! exports provided: SearchBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarModule", function() { return SearchBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-bar.component */ "mlx3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_directives_address_input_address_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/directives/address-input/address-input.module */ "rKW5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");







class SearchBarModule {
}
SearchBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SearchBarModule });
SearchBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function SearchBarModule_Factory(t) { return new (t || SearchBarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            src_directives_address_input_address_input_module__WEBPACK_IMPORTED_MODULE_5__["AddressInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SearchBarModule, { declarations: [_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        src_directives_address_input_address_input_module__WEBPACK_IMPORTED_MODULE_5__["AddressInputModule"]], exports: [_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"]] }); })();


/***/ }),

/***/ "Pi+Y":
/*!********************************************!*\
  !*** ./src/components/card/card.module.ts ***!
  \********************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "smw8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class CardModule {
}
CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]] }); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_data_access_ip_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data-access/ip-search.service */ "C2qV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card/card.component */ "smw8");
/* harmony import */ var _components_search_history_list_search_history_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search-history-list/search-history-list.component */ "xcGy");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/map/map.component */ "6aKi");
/* harmony import */ var _components_location_info_location_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/location-info/location-info.component */ "+roq");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/search-bar/search-bar.component */ "mlx3");
/* harmony import */ var _pipes_address_info_pipe_address_info_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/address-info-pipe/address-info-pipe.pipe */ "XQlh");










class AppComponent {
    constructor(_ipSearchService, _snackBar) {
        this._ipSearchService = _ipSearchService;
        this._snackBar = _snackBar;
        this.searchHistory = [];
    }
    ngOnInit() {
        this._getUserAddressInfo();
    }
    getAddressInfo(address) {
        if (!address) {
            this._openSnackbar('No address provided');
            return;
        }
        this._setSearchAddressLoading(true);
        this._fetchAddressInfo(address).subscribe((res) => {
            this.searchedAddressInfo = res;
            this.searchHistory = [res, ...this.searchHistory];
        });
    }
    _getUserAddressInfo() {
        this._fetchAddressInfo('').subscribe((response) => {
            this.userAddressInfo = response;
        });
    }
    _fetchAddressInfo(address) {
        return this._ipSearchService.getAddressInfo(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => this._setSearchAddressLoading(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(({ status }) => this._handleFailedStatus(status)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ status }) => status !== 'fail'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(() => {
            this._handleError();
            throw Error;
        }));
    }
    _setSearchAddressLoading(value) {
        this.searchAddressLoading = value;
    }
    _handleFailedStatus(status) {
        if (status === 'fail') {
            this.searchedAddressInfo = undefined;
            this._openSnackbar('Address not found');
        }
    }
    _handleError() {
        this.searchedAddressInfo = undefined;
        this._openSnackbar('Something went wrong');
        this._setSearchAddressLoading(false);
    }
    _openSnackbar(message) {
        this._snackBar.open(message, null, { duration: 5000 });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_data_access_ip_search_service__WEBPACK_IMPORTED_MODULE_2__["IpSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 10, consts: [[1, "page"], ["headerLabel", "Search history", 1, "page__list"], [3, "list", "select"], [1, "page__right-side"], [1, "page__right-side__address-info", "margin-b-20"], ["headerLabel", "Your IP address location", 1, "page__right-side__address-info__map-container"], ["tooltipText", "Your location", 1, "page__right-side__address-info__map-container__map", 3, "locationData"], ["headerLabel", "Your IP address information", 1, "page__right-side__address-info__info-container"], [1, "page__right-side__address-info__info-container__info-table", 3, "addressInfo"], [1, "page__right-side__search-bar"], [1, "page__right-side__search-bar__container"], [3, "search"], [1, "page__right-side__address-info", "margin-t-20"], ["headerLabel", "Searched IP address location", 1, "page__right-side__address-info__map-container"], ["tooltipText", "Searched address location", 1, "page__right-side__address-info__map-container__map", 3, "locationData"], ["headerLabel", "Searched IP address information", 1, "page__right-side__address-info__info-container"], [1, "page__right-side__address-info__info-container__info-table", 3, "addressInfo", "loading"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "search-history-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function AppComponent_Template_search_history_list_select_2_listener($event) { return ctx.searchedAddressInfo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-location-info", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "addressInfoPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "search-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function AppComponent_Template_search_bar_search_12_listener($event) { return ctx.getAddressInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "map", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-location-info", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "addressInfoPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", ctx.searchHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locationData", ctx.userAddressInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("addressInfo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, ctx.userAddressInfo));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locationData", ctx.searchedAddressInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("addressInfo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 8, ctx.searchedAddressInfo))("loading", ctx.searchAddressLoading);
    } }, directives: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _components_search_history_list_search_history_list_component__WEBPACK_IMPORTED_MODULE_5__["SearchHistoryListComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _components_location_info_location_info_component__WEBPACK_IMPORTED_MODULE_7__["LocationInfoComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"]], pipes: [_pipes_address_info_pipe_address_info_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["AddressInfoPipePipe"]], styles: [".page[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(37deg, #666666, white);\n}\n.page__list[_ngcontent-%COMP%] {\n  margin: 30px 10px 30px 30px;\n  width: 20%;\n}\n.page__right-side[_ngcontent-%COMP%] {\n  display: grid;\n  width: 80%;\n  margin: 30px 30px 30px 10px;\n  grid-template-rows: 45% [row-start] 10% [row-start] 45% [row-start];\n}\n.page__right-side__address-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.page__right-side__address-info__map-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-right: 10px;\n}\n.page__right-side__address-info__map-container__map[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page__right-side__address-info__info-container[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-left: 10px;\n}\n.page__right-side__address-info__info-container__info-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n.page__right-side__search-bar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page__right-side__search-bar__container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.margin-b-20[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.margin-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7QUFDSjtBQUNJO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0FBQ1I7QUFFSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtRUFBQTtBQUFSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUFaO0FBRVk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFBaEI7QUFFZ0I7RUFDSSxZQUFBO0FBQXBCO0FBSVk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFGaEI7QUFJZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUZwQjtBQU9RO0VBQ0ksYUFBQTtBQUxaO0FBT1k7RUFDSSxXQUFBO0FBTGhCO0FBV0E7RUFDSSxtQkFBQTtBQVJKO0FBV0E7RUFDSSxnQkFBQTtBQVJKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzN2RlZywgIzY2NjY2Niwgd2hpdGUpO1xyXG5cclxuICAgICZfX2xpc3Qge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAxMHB4IDMwcHggMzBweDtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3JpZ2h0LXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDEwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NSUgW3Jvdy1zdGFydF0gMTAlIFtyb3ctc3RhcnRdIDQ1JSBbcm93LXN0YXJ0XTtcclxuICAgICAgICBcclxuICAgICAgICAmX19hZGRyZXNzLWluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICZfX21hcC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmX19tYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9faW5mby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICZfX2luZm8tdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICZfX3NlYXJjaC1iYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFyZ2luLWItMjAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbi10LTIwIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "XQlh":
/*!***************************************************************!*\
  !*** ./src/pipes/address-info-pipe/address-info-pipe.pipe.ts ***!
  \***************************************************************/
/*! exports provided: AddressInfoPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInfoPipePipe", function() { return AddressInfoPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class AddressInfoPipePipe {
    transform(value) {
        if (!value) {
            return null;
        }
        return {
            city: value.city,
            country: value.country,
            isp: value.isp,
            org: value.org,
            query: value.query,
            regionName: value.regionName,
            timezone: value.timezone,
            zip: value.zip,
        };
    }
}
AddressInfoPipePipe.ɵfac = function AddressInfoPipePipe_Factory(t) { return new (t || AddressInfoPipePipe)(); };
AddressInfoPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "addressInfoPipe", type: AddressInfoPipePipe, pure: true });


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
/* harmony import */ var _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/search-bar/search-bar.module */ "Lu6i");
/* harmony import */ var _components_map_map_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/map/map.module */ "sW7m");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_components_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/card/card.module */ "Pi+Y");
/* harmony import */ var src_components_location_info_location_info_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/location-info/location-info.module */ "t09s");
/* harmony import */ var src_pipes_address_info_pipe_address_info_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/pipes/address-info-pipe/address-info-pipe.module */ "H8Hw");
/* harmony import */ var src_components_search_history_list_search_history_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/search-history-list/search-history-list.module */ "sxYx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _components_map_map_module__WEBPACK_IMPORTED_MODULE_1__["MapModule"],
            _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_0__["SearchBarModule"],
            src_components_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
            src_pipes_address_info_pipe_address_info_pipe_module__WEBPACK_IMPORTED_MODULE_10__["AddressInfoPipeModule"],
            src_components_search_history_list_search_history_list_module__WEBPACK_IMPORTED_MODULE_11__["SearchHistoryListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            src_components_location_info_location_info_module__WEBPACK_IMPORTED_MODULE_9__["LocationInfoModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_components_map_map_module__WEBPACK_IMPORTED_MODULE_1__["MapModule"],
        _components_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_0__["SearchBarModule"],
        src_components_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
        src_pipes_address_info_pipe_address_info_pipe_module__WEBPACK_IMPORTED_MODULE_10__["AddressInfoPipeModule"],
        src_components_search_history_list_search_history_list_module__WEBPACK_IMPORTED_MODULE_11__["SearchHistoryListModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
        src_components_location_info_location_info_module__WEBPACK_IMPORTED_MODULE_9__["LocationInfoModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "mlx3":
/*!***********************************************************!*\
  !*** ./src/components/search-bar/search-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _directives_address_input_address_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/address-input/address-input.directive */ "98cB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");








class SearchBarComponent {
    constructor() {
        this.searchFieldControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["search-bar"]], outputs: { search: "search" }, decls: 7, vars: 1, consts: [[1, "search-container"], [1, "search-container__input"], ["matInput", "", "addressInput", "", "type", "text", 3, "formControl", "keyup.enter"], ["mat-raised-button", "", "color", "primary", 1, "search-container__button", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type in IP or URL address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchBarComponent_Template_input_keyup_enter_4_listener() { return ctx.search.emit(ctx.searchFieldControl.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_5_listener() { return ctx.search.emit(ctx.searchFieldControl.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchFieldControl);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_address_input_address_input_directive__WEBPACK_IMPORTED_MODULE_4__["AddressInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["[_nghost-%COMP%] {\n  height: inherit;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: inherit;\n}\n\n.search-container__input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.search-container__button[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 0px 10px 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDSTtFQUNJLFVBQUE7QUFDUjs7QUFFSTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQUFSIiwiZmlsZSI6InNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuXHJcbiAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMjBweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "rKW5":
/*!**************************************************************!*\
  !*** ./src/directives/address-input/address-input.module.ts ***!
  \**************************************************************/
/*! exports provided: AddressInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInputModule", function() { return AddressInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _address_input_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-input.directive */ "98cB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class AddressInputModule {
}
AddressInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddressInputModule });
AddressInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AddressInputModule_Factory(t) { return new (t || AddressInputModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddressInputModule, { declarations: [_address_input_directive__WEBPACK_IMPORTED_MODULE_1__["AddressInputDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_address_input_directive__WEBPACK_IMPORTED_MODULE_1__["AddressInputDirective"]] }); })();


/***/ }),

/***/ "sW7m":
/*!******************************************!*\
  !*** ./src/components/map/map.module.ts ***!
  \******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component */ "6aKi");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class MapModule {
}
MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MapModule_Factory(t) { return new (t || MapModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletModule"]], exports: [_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]] }); })();


/***/ }),

/***/ "smw8":
/*!***********************************************!*\
  !*** ./src/components/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");



function CardComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.headerLabel);
} }
const _c0 = ["*"];
class CardComponent {
    constructor() { }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["card"]], inputs: { headerLabel: "headerLabel" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "card-container"], [4, "ngIf"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_h1_1_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerLabel);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFDSiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "sxYx":
/*!**************************************************************************!*\
  !*** ./src/components/search-history-list/search-history-list.module.ts ***!
  \**************************************************************************/
/*! exports provided: SearchHistoryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHistoryListModule", function() { return SearchHistoryListModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _search_history_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-history-list.component */ "xcGy");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class SearchHistoryListModule {
}
SearchHistoryListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SearchHistoryListModule });
SearchHistoryListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SearchHistoryListModule_Factory(t) { return new (t || SearchHistoryListModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SearchHistoryListModule, { declarations: [_search_history_list_component__WEBPACK_IMPORTED_MODULE_2__["SearchHistoryListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]], exports: [_search_history_list_component__WEBPACK_IMPORTED_MODULE_2__["SearchHistoryListComponent"]] }); })();


/***/ }),

/***/ "t09s":
/*!**************************************************************!*\
  !*** ./src/components/location-info/location-info.module.ts ***!
  \**************************************************************/
/*! exports provided: LocationInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationInfoModule", function() { return LocationInfoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _location_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-info.component */ "+roq");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





class LocationInfoModule {
}
LocationInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LocationInfoModule });
LocationInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function LocationInfoModule_Factory(t) { return new (t || LocationInfoModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LocationInfoModule, { declarations: [_location_info_component__WEBPACK_IMPORTED_MODULE_1__["LocationInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]], exports: [_location_info_component__WEBPACK_IMPORTED_MODULE_1__["LocationInfoComponent"]] }); })();


/***/ }),

/***/ "xcGy":
/*!*****************************************************************************!*\
  !*** ./src/components/search-history-list/search-history-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchHistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHistoryListComponent", function() { return SearchHistoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");






function SearchHistoryListComponent_cdk_virtual_scroll_viewport_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHistoryListComponent_cdk_virtual_scroll_viewport_0_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.select.emit(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r4.searchPhrase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.searchPhrase, " ");
} }
function SearchHistoryListComponent_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchHistoryListComponent_cdk_virtual_scroll_viewport_0_div_1_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.list);
} }
function SearchHistoryListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchHistoryListComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
SearchHistoryListComponent.ɵfac = function SearchHistoryListComponent_Factory(t) { return new (t || SearchHistoryListComponent)(); };
SearchHistoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchHistoryListComponent, selectors: [["search-history-list"]], inputs: { list: "list" }, outputs: { select: "select" }, decls: 3, vars: 2, consts: [["class", "list-container", 3, "itemSize", 4, "ngIf", "ngIfElse"], ["noItems", ""], [1, "list-container", 3, "itemSize"], ["class", "flex", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "flex"], ["mat-stroked-button", "", "matTooltipPosition", "right", 1, "list-container__item", 3, "matTooltip", "click"], ["tooltip", "matTooltip"], [1, "list-container__item__label"], [1, "no-items-message"]], template: function SearchHistoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchHistoryListComponent_cdk_virtual_scroll_viewport_0_Template, 2, 2, "cdk-virtual-scroll-viewport", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchHistoryListComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.list-container__item[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 5px;\n  width: 100%;\n}\n\n.list-container__item__label[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.no-items-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC1oaXN0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUNRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUNaOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESiIsImZpbGUiOiJzZWFyY2gtaGlzdG9yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmX19sYWJlbCB7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5vLWl0ZW1zLW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgOjpuZy1kZWVwIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "xck8":
/*!*******************************************!*\
  !*** ./src/constants/info-label.const.ts ***!
  \*******************************************/
/*! exports provided: INFO_LABEL_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_LABEL_MAP", function() { return INFO_LABEL_MAP; });
const INFO_LABEL_MAP = {
    city: 'City',
    country: 'Country',
    countryCode: 'Country code',
    isp: 'Internet service provider',
    org: 'Organization',
    query: 'IP address',
    regionName: 'Region name',
    timezone: 'Timezone',
    zip: 'Zip code',
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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