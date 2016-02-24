System.register(['angular2/core', './logEntry'], function(exports_1, context_1) {
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
    var core_1, logEntry_1;
    var LogEntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logEntry_1_1) {
                logEntry_1 = logEntry_1_1;
            }],
        execute: function() {
            LogEntryComponent = (function () {
                function LogEntryComponent() {
                    this.id = 1;
                }
                LogEntryComponent.prototype.ngOnInit = function () {
                    this.id++;
                    this.model = new logEntry_1.LogEntryModel(this.id, "", "");
                };
                LogEntryComponent.prototype.onSubmit = function () {
                    this.model = new logEntry_1.LogEntryModel(this.id, this.model.subject, this.model.description);
                    alert("Yay!");
                };
                LogEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'log-entry',
                        //templateUrl: 'app/logEntry.component.html'
                        template: "\n        <div>\n            <span >Star date: </span><br/>\n            <input [(ngModel)]=\"model.subject\" id=\"subjectInput\" type=\"text\" placeholder=\"Subject\"/><br/>\n            <textarea [(ngModel)]=\"model.description\" id=\"descriptionText\" rows=\"4\"></textarea><br/>\n            <button (click)=\"onSubmit()\" type=\"button\">Save</button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogEntryComponent);
                return LogEntryComponent;
            }());
            exports_1("LogEntryComponent", LogEntryComponent);
        }
    }
});
//# sourceMappingURL=logEntry.component.js.map