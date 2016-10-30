"use strict";
var platform_browser_1 = require('@angular/platform-browser');
var app_module_ngfactory_1 = require('../aot/src/app/app.module.ngfactory');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=main.aot.js.map