System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TilstandEnum, TilstandsdataComponent;
    return {
        setters:[],
        execute: function() {
            (function (TilstandEnum) {
                TilstandEnum[TilstandEnum["Sygedagpenge"] = 0] = "Sygedagpenge";
                TilstandEnum[TilstandEnum["Ressourceforloeb"] = 1] = "Ressourceforloeb";
                TilstandEnum[TilstandEnum["Jobafklaringsforloeb"] = 2] = "Jobafklaringsforloeb";
                TilstandEnum[TilstandEnum["Revalidering"] = 3] = "Revalidering";
                TilstandEnum[TilstandEnum["Flexjob"] = 4] = "Flexjob";
                TilstandEnum[TilstandEnum["Foertidspension"] = 5] = "Foertidspension";
            })(TilstandEnum || (TilstandEnum = {}));
            exports_1("TilstandEnum", TilstandEnum);
            ;
            TilstandsdataComponent = (function () {
                function TilstandsdataComponent() {
                    this.pageTitle = 'Forløbsdata for forsikringstager';
                    this.tilstand = TilstandEnum.Sygedagpenge;
                    this.maxDaekning = 0;
                }
                TilstandsdataComponent.prototype.ngOnInit = function () {
                };
                return TilstandsdataComponent;
            }());
            exports_1("TilstandsdataComponent", TilstandsdataComponent);
        }
    }
});
//# sourceMappingURL=tilstandsdata.component.js.map