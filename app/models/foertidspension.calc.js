System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FoertidspensionCalc;
    return {
        setters:[],
        execute: function() {
            FoertidspensionCalc = (function () {
                function FoertidspensionCalc() {
                }
                FoertidspensionCalc.prototype.calculateGift = function (i, f, s) {
                    f.samletTabAfErhvervsevneDaekning = i.beregnetDaekning + i.aarligDaekningAndre;
                    f.aegtefaelleSamleverIndkomst = i.aegtefaelleSamleverIndkomst;
                    f.fradragIkkePensionistIndkomst = -s.fradragsbeloebGifte;
                    f.aegtefaelleSamleverIndkomstEfterFradrag = f.aegtefaelleSamleverIndkomst - f.fradragIkkePensionistIndkomst;
                    f.bidragFraAegtefaelleSamleverEfterMaks =
                        Math.max(0, Math.min(s.maksbeloebTilModregningGifte, f.aegtefaelleSamleverIndkomstEfterFradrag));
                    f.samletIndtaegtsGrundlagEfterMaks = f.samletTabAfErhvervsevneDaekning + f.bidragFraAegtefaelleSamleverEfterMaks;
                    f.fradragsbeloeb = -s.fradragsbeloebGifte;
                    f.indtaegtsGrundlag = Math.floor(f.samletIndtaegtsGrundlagEfterMaks + f.fradragsbeloeb);
                    f.indtaegtsGrundlag = Math.floor(f.indtaegtsGrundlag / 100) * 100;
                    f.pensionssats = s.foertidspensionGifte;
                    f.nedsaettelseFoertidspension = -0.3 * f.indtaegtsGrundlag; //Gifte
                    f.foertidspensionEfterNedsaettelse = f.pensionssats + f.nedsaettelseFoertidspension;
                    return f;
                };
                FoertidspensionCalc.prototype.calculateSamgift = function (i, f) {
                    return f;
                };
                FoertidspensionCalc.prototype.calculateEnlig = function (i, f) {
                    return f;
                };
                return FoertidspensionCalc;
            }());
            exports_1("FoertidspensionCalc", FoertidspensionCalc);
        }
    }
});
//# sourceMappingURL=foertidspension.calc.js.map