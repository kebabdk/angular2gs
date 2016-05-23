import {DaekningInddata, SamleverStatusEnum} from './daekningInddata';

export class FoertidsPension {
     samleverStatus:SamleverStatusEnum;
     samletTabAfErhvervsevneDaekning:number=0; //Beregninger!F86
     aegtefaelleSamleverIndkomst:number=0; //Beregninger!E88
     fradragIkkePensionistIndkomst:number=0; //Beregninger!E90
     aegtefaelleSamleverIndkomstEfterFradrag:number=0; //Beregninger!E92
     bidragFraAegtefaelleSamleverEfterMaks:number=0; //Beregninger!F94
     samletIndtaegtsGrundlagEfterMaks:number=0; //Beregninger!F96     
     fradragsbeloeb:number=0; //Beregninger!F98
     indtaegtsGrundlag:number =0;  //Beregninger!F100 
     pensionssats: number=0; //Beregninger!F102
     nedsaettelseFoertidspension:number=0; //Beregninger!F104
     foertidspensionEfterNedsaettelse:number=0; //Beregninger!F106
     foertidspensionAarligEfterAfrundingOgMin:number=0; //Beregninger!F108     
}
