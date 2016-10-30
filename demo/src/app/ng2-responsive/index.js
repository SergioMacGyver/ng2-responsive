/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 23, 2016
 * @updated_at Sept 15, 2016 - by ManuCutillas
 * @version_0.4.6
 *
 * Dependencies:
 * @angular/core : "2.0.0"
 * rxjs: "5.0.0-beta.12"
 *
 * @more_info http://kalypso.agency
 *            https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NG2-RESPONSIVE
 *
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* IMPORTS => MODULES */
var core_1 = require('@angular/core');
var config_1 = require('./config');
exports.ResponsiveConfig = config_1.ResponsiveConfig;
exports.ResponsiveState = config_1.ResponsiveState;
var bootstrap_1 = require('./bootstrap');
var browsers_1 = require('./browsers');
var custom_sizes_1 = require('./custom-sizes');
var devices_1 = require('./devices');
var pixelratio_1 = require('./pixelratio');
var responsive_1 = require('./responsive');
var responsive_window_1 = require('./responsive-window');
var useragent_1 = require('./useragent');
var ResponsiveModule = (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule = __decorate([
        core_1.NgModule({
            declarations: [
                bootstrap_1.BOOTSTRAP_DIRECTIVES,
                browsers_1.BROWSER_DIRECTIVES,
                custom_sizes_1.CUSTOMSIZES_DIRECTIVES,
                devices_1.DEVICES_DIRECTIVES,
                pixelratio_1.PIXELRATIO_DIRECTIVES,
                responsive_1.RESPONSIVE_DIRECTIVE,
                responsive_window_1.RESPONSIVEWINDOW_DIRECTIVE,
                useragent_1.USERAGENT_DIRECTIVE
            ],
            exports: [
                bootstrap_1.BOOTSTRAP_DIRECTIVES,
                browsers_1.BROWSER_DIRECTIVES,
                custom_sizes_1.CUSTOMSIZES_DIRECTIVES,
                devices_1.DEVICES_DIRECTIVES,
                pixelratio_1.PIXELRATIO_DIRECTIVES,
                responsive_1.RESPONSIVE_DIRECTIVE,
                responsive_window_1.RESPONSIVEWINDOW_DIRECTIVE,
                useragent_1.USERAGENT_DIRECTIVE,
            ],
            providers: [config_1.ResponsiveState, config_1.ResponsiveConfig]
        }), 
        __metadata('design:paramtypes', [])
    ], ResponsiveModule);
    return ResponsiveModule;
}());
exports.ResponsiveModule = ResponsiveModule;
//# sourceMappingURL=index.js.map