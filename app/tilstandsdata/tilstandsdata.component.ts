import { Component, OnInit, Pipe, PipeTransform }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {FoertidsPension} from '../models/foertidspension';
import {DaekningInddata, SamleverStatusEnum, UdbetalingsTypeEnum} from '../models/daekningInddata';
import {ISats} from '../models/sats';

export enum TilstandEnum {
    Sygedagpenge = 0,
    Ressourceforloeb = 1,
    Jobafklaringsforloeb = 2,
    Revalidering = 3,
    Flexjob = 4,
    Foertidspension = 5
};

export class TilstandsdataComponent implements OnInit 
{
        pageTitle: string = 'Forløbsdata for forsikringstager';
        tilstand: TilstandEnum = TilstandEnum.Sygedagpenge;
        startDato: Date;
        slutDato: Date;
        maxDaekning: number=0;       
        basisdaekning: number=0;
        tillaegsdaekning: number=0;        
        samletDaekning: number=0;
        indtaegter: number[];

        samletAarsindkomst: number; //beregnet        
        maxUdbetalt: number=0;
        udbetaltBasisdaekning: number=0;
        udbetaltTillaegsdaekning: number=0;
        udbetaltSamlet: number =0;        
        

        beregn(): void {
            this.samletAarsindkomst = this.indtaegter.reduce((total:number,indtaegt:number)=>{return total + indtaegt;}, 0);
            this.samletDaekning = this.basisdaekning + this.tillaegsdaekning;
            
        }
        ngOnInit(): void {
             
         }
} 