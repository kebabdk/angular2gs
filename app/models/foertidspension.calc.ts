import {FoertidsPension} from './foertidspension';
import {DaekningInddata} from './daekningInddata';
import {ISats} from './sats';

export class FoertidspensionCalc {
    calculateGift(i:DaekningInddata, f:FoertidsPension, s:ISats): FoertidsPension {
        
        f.samletTabAfErhvervsevneDaekning = i.beregnetDaekning+i.aarligDaekningAndre;
        f.aegtefaelleSamleverIndkomst = i.aegtefaelleSamleverIndkomst;
        f.fradragIkkePensionistIndkomst = -s.fradragsbeloebGifte;
        f.aegtefaelleSamleverIndkomstEfterFradrag = f.aegtefaelleSamleverIndkomst-f.fradragIkkePensionistIndkomst;
        f.bidragFraAegtefaelleSamleverEfterMaks =
            Math.max(0,Math.min(s.maksbeloebTilModregningGifte,f.aegtefaelleSamleverIndkomstEfterFradrag));
        f.samletIndtaegtsGrundlagEfterMaks = f.samletTabAfErhvervsevneDaekning + f.bidragFraAegtefaelleSamleverEfterMaks;
        f.fradragsbeloeb = -s.fradragsbeloebGifte;
        f.indtaegtsGrundlag = Math.floor(f.samletIndtaegtsGrundlagEfterMaks+f.fradragsbeloeb);
        f.indtaegtsGrundlag = Math.floor(f.indtaegtsGrundlag/100)*100;
        f.pensionssats = s.foertidspensionGifte;
        f.nedsaettelseFoertidspension = -0.3*f.indtaegtsGrundlag; //Gifte
        f.foertidspensionEfterNedsaettelse = f.pensionssats+f.nedsaettelseFoertidspension;
        return f;
    }
    calculateSamgift(i:DaekningInddata, f:FoertidsPension): FoertidsPension {
        
        return f;
    }
    calculateEnlig(i:DaekningInddata, f:FoertidsPension): FoertidsPension {
        
        return f;
    }


}
