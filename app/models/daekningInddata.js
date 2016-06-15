System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SamleverStatusEnum, UdbetalingsTypeEnum, DaekningInddata;
    return {
        setters:[],
        execute: function() {
            (function (SamleverStatusEnum) {
                SamleverStatusEnum[SamleverStatusEnum["Samgifte"] = 0] = "Samgifte";
                SamleverStatusEnum[SamleverStatusEnum["GiftSamlever"] = 1] = "GiftSamlever";
                SamleverStatusEnum[SamleverStatusEnum["Enlig"] = 2] = "Enlig";
            })(SamleverStatusEnum || (SamleverStatusEnum = {}));
            exports_1("SamleverStatusEnum", SamleverStatusEnum);
            ;
            (function (UdbetalingsTypeEnum) {
                UdbetalingsTypeEnum[UdbetalingsTypeEnum["HelVedHel"] = 0] = "HelVedHel";
                UdbetalingsTypeEnum[UdbetalingsTypeEnum["HalvVedHalv"] = 1] = "HalvVedHalv";
                UdbetalingsTypeEnum[UdbetalingsTypeEnum["HelVed2_3"] = 2] = "HelVed2_3";
            })(UdbetalingsTypeEnum || (UdbetalingsTypeEnum = {}));
            exports_1("UdbetalingsTypeEnum", UdbetalingsTypeEnum);
            ;
            DaekningInddata = (function () {
                function DaekningInddata() {
                    this.aarligHelDaekningTop = 0; //Inddata!D22
                    this.aarligDaekningAndre = 0; //Inddata!D24
                    this.flexjobAntalTimerPrUge = 0; //Inddata!D27
                    this.aegtefaelleSamleverIndkomst = 0; //Inddata!D30
                    this.flexjobTimeloenUdenPension = 0; //Inddata!D36
                    this.flexjobTimeloenMedPension = 0; //Inddata!D37
                    this.flexjobManedsloenUdenPension = 0; //Inddata!D42
                    this.flexjobMaanedsloenMedPension = 0; //Inddata!D43
                    this.arbejdsgiverPensionsbidragPct = 0; //Inddata!D46
                    this.beregnetDaekning = 0; //Beregninger!D76
                    this.beregnetTimeloenMedPension = 0; //Beregninger!D78
                    this.beregnetMaanedsloenMedPension = 0; //Beregninger!D79
                }
                DaekningInddata.prototype.calc = function () {
                    //Beregn årlig dækning fra topdanmark
                    if (this.udbetalingsType === UdbetalingsTypeEnum.HalvVedHalv) {
                        this.beregnetDaekning = 0.5 * this.aarligHelDaekningTop;
                    }
                    else {
                        this.beregnetDaekning = this.aarligHelDaekningTop;
                    }
                    //Beregn timeløn 
                    if (this.flexjobTimeloenMedPension > 0 || this.flexjobTimeloenUdenPension > 0) {
                        if (this.flexjobTimeloenMedPension > 0) {
                            this.beregnetTimeloenMedPension = this.flexjobTimeloenMedPension;
                        }
                        else {
                            this.beregnetTimeloenMedPension =
                                this.flexjobTimeloenUdenPension +
                                    this.flexjobTimeloenUdenPension * this.arbejdsgiverPensionsbidragPct / 100;
                        }
                    }
                    //Beregn månedsløn
                    if (this.flexjobMaanedsloenMedPension > 0 || this.flexjobManedsloenUdenPension > 0) {
                        if (this.flexjobMaanedsloenMedPension > 0) {
                            this.beregnetMaanedsloenMedPension = this.flexjobMaanedsloenMedPension;
                        }
                        else {
                            this.beregnetMaanedsloenMedPension =
                                this.flexjobManedsloenUdenPension +
                                    this.flexjobManedsloenUdenPension * this.arbejdsgiverPensionsbidragPct / 100;
                        }
                    }
                };
                ;
                return DaekningInddata;
            }());
            exports_1("DaekningInddata", DaekningInddata);
            ;
        }
    }
});
//# sourceMappingURL=daekningInddata.js.map