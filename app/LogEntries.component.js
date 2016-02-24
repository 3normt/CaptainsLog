System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LogEntries;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LogEntries = (function () {
                function LogEntries() {
                    this.logEntries = [{ id: 0, subject: 'Jørgen', description: '...er .... KUL!' }, { id: 1, subject: 'Lars', description: '...er .... KUL!' }, { id: 2, subject: 'Morten', description: '...er .... KUL!' }];
                }
                LogEntries.prototype.ngOnInit = function () {
                    console.log('init for log entries');
                };
                LogEntries = __decorate([
                    core_1.Component({
                        selector: 'log-entries',
                        template: "\n\t\t<div class=\"log-entries-container\">\t\t\t\n\t\t\t<p>Here comes the log entries</p>\t\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"log-entries\">\n\t\t\t\t<div class=\"entry\" *ngFor=\"#entry of logEntries\">\n\t\t\t\t\t{{entry.subject}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogEntries);
                return LogEntries;
            }());
            exports_1("LogEntries", LogEntries);
        }
    }
});
//# sourceMappingURL=LogEntries.component.js.map