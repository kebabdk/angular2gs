import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {FoertidsPension} from '../models/foertidspension';
import {DaekningInddata, SamleverStatusEnum, UdbetalingsTypeEnum} from '../models/daekningInddata';
import {ISats} from '../models/sats';

@Component({
    templateUrl: 'app/flexjob/flexjob.component.html',
    directives: [ROUTER_DIRECTIVES]
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
    keys:[number];
    

    constructor() {
        this.daekningInddata = new DaekningInddata();
        this.keys = Object.keys(SamleverStatusEnum).filter(Number);
        
    }
    ngOnInit(): void {
        this.daekningInddata.samleverStatus = SamleverStatusEnum.GiftSamlever;
    }

}