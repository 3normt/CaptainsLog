System.register(['angular2/platform/browser', './captainsLog.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, captainsLog_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (captainsLog_component_1_1) {
                captainsLog_component_1 = captainsLog_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(captainsLog_component_1.CaptainsLog);
        }
    }
});
//# sourceMappingURL=main.js.map