System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LogEntryModel;
    return {
        setters:[],
        execute: function() {
            LogEntryModel = (function () {
                function LogEntryModel(id, subject, description) {
                    this.id = id;
                    this.subject = subject;
                    this.description = description;
                }
                return LogEntryModel;
            }());
            exports_1("LogEntryModel", LogEntryModel);
        }
    }
});
//# sourceMappingURL=logEntry.js.map