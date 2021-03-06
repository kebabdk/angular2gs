System.register(['@angular/core', '@angular/router', '../models/daekningInddata'], function(exports_1, context_1) {
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
    var core_1, router_1, daekningInddata_1;
    var KeysPipe, FlexjobComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (daekningInddata_1_1) {
                daekningInddata_1 = daekningInddata_1_1;
            }],
        execute: function() {
            KeysPipe = (function () {
                function KeysPipe() {
                }
                KeysPipe.prototype.transform = function (value, args) {
                    var keys = [];
                    for (var enumMember in value) {
                        var isValueProperty = parseInt(enumMember, 10) >= 0;
                        if (isValueProperty) {
                            keys.push({ key: enumMember, value: value[enumMember] });
                            console.log("enum member: ", value[enumMember]);
                        }
                    }
                    return keys;
                };
                KeysPipe = __decorate([
                    core_1.Pipe({ name: 'keys' }), 
                    __metadata('design:paramtypes', [])
                ], KeysPipe);
                return KeysPipe;
            }());
            exports_1("KeysPipe", KeysPipe);
            FlexjobComponent = (function () {
                function FlexjobComponent() {
                    this.pageTitle = 'Beregning af udbetaling ved flexjob';
                    this.samleverEnum = daekningInddata_1.SamleverStatusEnum;
                    this.udbetalingsTypeEnum = daekningInddata_1.UdbetalingsTypeEnum;
                    this.daekningInddata = new daekningInddata_1.DaekningInddata();
                }
                ;
                FlexjobComponent.prototype.ngOnInit = function () {
                    this.daekningInddata.samleverStatus = daekningInddata_1.SamleverStatusEnum.GiftSamlever;
                };
                ;
                FlexjobComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flexjob/flexjob.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [KeysPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlexjobComponent);
                return FlexjobComponent;
            }());
            exports_1("FlexjobComponent", FlexjobComponent);
        }
    }
});
//# sourceMappingURL=flexjob.component.js.map