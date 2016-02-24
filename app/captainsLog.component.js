System.register(['angular2/core', './logEntry.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logEntry_component_1;
    var CaptainsLog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logEntry_component_1_1) {
                logEntry_component_1 = logEntry_component_1_1;
            }],
        execute: function() {
            CaptainsLog = (function () {
                function CaptainsLog() {
                    this.greeting = 'Welcome to the captains log.';
                }
                CaptainsLog.prototype.ngOnInit = function () {
                    console.log('init for captnslog');
                };
                CaptainsLog = __decorate([
                    core_1.Component({
                        selector: 'captains-log',
                        template: "\n\t\t<div class=\"captns-log-container\">\n\t\t\t<h1>Captains Log</h1>\n\t\t\t<p>{{greeting}}</p>\n\t\t\t\n\t\t\tThis is the captains-log component. \n\t\t\t<log-entry></log-entry>\n\t\t</div>\t\t\n\t\t",
                        directives: [logEntry_component_1.LogEntryComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CaptainsLog);
                return CaptainsLog;
            }());
            exports_1("CaptainsLog", CaptainsLog);
        }
    }
});
//# sourceMappingURL=captainsLog.component.js.map