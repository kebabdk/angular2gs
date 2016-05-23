
export enum SamleverStatusEnum {
    Samgifte = 0,
    GiftSamlever = 1,
    Enlig = 2
};

export enum UdbetalingsTypeEnum {
    HelVedHel,
    HalvVedHalv,
    HelvVed2_3
};

export class DaekningInddata {
    samleverStatus: SamleverStatusEnum; //Inddata!D18
    udbetalingsType: UdbetalingsTypeEnum; //Inddata!D20
    aarligHelDaekningTop: number = 0; //Inddata!D22
    aarligDaekningAndre: number = 0; //Inddata!D24
    flexjobAntalTimerPrUge: number = 0; //Inddata!D27
    aegtefaelleSamleverIndkomst: number = 0; //Inddata!D30
    flexjobTimeloenUdenPension: number = 0;//Inddata!D36
    flexjobTimeloenMedPension: number = 0;//Inddata!D37
    flexjobManedsloenUdenPension: number = 0; //Inddata!D42
    flexjobMaanedsloenMedPension: number = 0; //Inddata!D43
    arbejdsgiverPensionsbidragPct: number = 0; //Inddata!D46

    beregnetDaekning: number = 0; //Beregninger!D76
    beregnetTimeloenMedPension: number = 0; //Beregninger!D78
    beregnetMaanedsloenMedPension: number = 0; //Beregninger!D79

    calc(): void {
        //Beregn årlig dækning fra topdanmark
        if (this.udbetalingsType === UdbetalingsTypeEnum.HalvVedHalv) {
            this.beregnetDaekning = 0.5 * this.aarligHelDaekningTop;
        } else {
            this.beregnetDaekning = this.aarligHelDaekningTop;
        }

        //Beregn timeløn 
        if (this.flexjobTimeloenMedPension > 0 || this.flexjobTimeloenUdenPension > 0) {
            if (this.flexjobTimeloenMedPension > 0) {
                this.beregnetTimeloenMedPension = this.flexjobTimeloenMedPension;
            } else {
                this.beregnetTimeloenMedPension =
                    this.flexjobTimeloenUdenPension +
                    this.flexjobTimeloenUdenPension * this.arbejdsgiverPensionsbidragPct / 100;
            }
        }

        //Beregn månedsløn
        if (this.flexjobMaanedsloenMedPension > 0 || this.flexjobManedsloenUdenPension > 0) {
            if (this.flexjobMaanedsloenMedPension > 0) {
                this.beregnetMaanedsloenMedPension = this.flexjobMaanedsloenMedPension;
            } else {
                this.beregnetMaanedsloenMedPension =
                    this.flexjobManedsloenUdenPension +
                    this.flexjobManedsloenUdenPension * this.arbejdsgiverPensionsbidragPct / 100;
            }
        }
    };
};