System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FoertidsPension;
    return {
        setters:[],
        execute: function() {
            FoertidsPension = (function () {
                function FoertidsPension() {
                    this.samletTabAfErhvervsevneDaekning = 0; //Beregninger!F86
                    this.aegtefaelleSamleverIndkomst = 0; //Beregninger!E88
                    this.fradragIkkePensionistIndkomst = 0; //Beregninger!E90
                    this.aegtefaelleSamleverIndkomstEfterFradrag = 0; //Beregninger!E92
                    this.bidragFraAegtefaelleSamleverEfterMaks = 0; //Beregninger!F94
                    this.samletIndtaegtsGrundlagEfterMaks = 0; //Beregninger!F96     
                    this.fradragsbeloeb = 0; //Beregninger!F98
                    this.indtaegtsGrundlag = 0; //Beregninger!F100 
                    this.pensionssats = 0; //Beregninger!F102
                    this.nedsaettelseFoertidspension = 0; //Beregninger!F104
                    this.foertidspensionEfterNedsaettelse = 0; //Beregninger!F106
                    this.foertidspensionAarligEfterAfrundingOgMin = 0; //Beregninger!F108     
                }
                return FoertidsPension;
            }());
            exports_1("FoertidsPension", FoertidsPension);
        }
    }
});
//# sourceMappingURL=foertidspension.js.map