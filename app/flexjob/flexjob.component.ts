import { Component, OnInit, Pipe, PipeTransform }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {FoertidsPension} from '../models/foertidspension';
import {DaekningInddata, SamleverStatusEnum, UdbetalingsTypeEnum} from '../models/daekningInddata';
import {ISats} from '../models/sats';


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        keys.push({key: enumMember, value: value[enumMember]});
        console.log("enum member: ", value[enumMember]);
      } 
  
    //for (let key in value) {
    //  keys.push({key: key, value: value[key]);
    }
    return keys;
  }
}
@Component({
    templateUrl: 'app/flexjob/flexjob.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [KeysPipe]
})

export class FlexjobComponent implements OnInit {
    pageTitle: string = 'Beregning af udbetaling ved flexjob';
    forsikrede: string;
    cprNr: string;
    forsikringsnummer: string;
    forsikringsDato: Date;
    sygemeldtFra: Date;
    flexjobStart: number;
    daekningInddata: DaekningInddata;
    samleverEnum = SamleverStatusEnum;
    udbetalingsTypeEnum = UdbetalingsTypeEnum;
    
    constructor() {
        this.daekningInddata = new DaekningInddata();       
    };
    
    ngOnInit(): void {
        this.daekningInddata.samleverStatus = SamleverStatusEnum.GiftSamlever;
    };

}