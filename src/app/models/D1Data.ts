export class D1Data {
  public headline: string;
  public subline: string;
  public imgURL: string;
  public logoURL: string;
  public logoWidth: number;
  public whiteBGLogo: boolean;
  public buttonTxt: string;
  public buttonURL: string;
  public buttonType: string;
  public txtColor: any[];

  constructor() {
    this.headline = '';
    this.subline = '';
    this.imgURL = '';
    this.logoURL = '';
    this.logoWidth = 150;
    this.whiteBGLogo = false;
    this.buttonTxt = '';
    this.buttonURL = '';
    this.buttonType = '';
    this.txtColor = [
        { name: 'headline', color: 'blue'},
        { name: 'subline', color: 'blue'},
      ];
  }

}
