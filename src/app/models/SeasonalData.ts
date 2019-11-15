export class SeasonalData {
  public headlineColor: string;
  public logoWidth: number;
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
        ['DE:Seasonal Component']: string;
        ['DE:Bold headline above the Seasonal Component']: string;
        ['DE:Logo required']: string;
        ['DE:Image path for logo']: string;
        ['DE:Add white background behind the logo?']: string;
        ['DE:Sub-Headline']: string;
        ['DE:CTA Button Text']: string;
        ['DE:CTA Button URL']: string;
        ['DE:CTA URL']: string;
        ['DE:Enter product SKU to display C2 image']: string;
        ['DE:Text to display for C2']: string;
        ['DE:URL for C2']: string;
        ['DE:Enter product SKU to display C3 image']: string;
        ['DE:Text to display for C3']: string;
        ['DE:URL for C3']: string;
        ['DE:Enter product SKU to display C4 image']: string;
        ['DE:Text to display for C4']: string;
        ['DE:URL for C4']: string;
        ['DE:Enter product SKU to display C5 image']: string;
        ['DE:Text to display for C5']: string;
        ['DE:URL for C5']: string;
    };
  };

    constructor() {
      this.logoWidth = 150;
      this.headlineColor = 'black';
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:Seasonal Component']: 'Seasonal Component',
          ['DE:Bold headline above the Seasonal Component']: '',
          ['DE:Logo required']: 'No',
          ['DE:Image path for logo']: '',
          ['DE:Add white background behind the logo?']: '',
          ['DE:Sub-Headline']: '',
          ['DE:CTA Button Text']: '',
          ['DE:CTA Button URL']: '',
          ['DE:CTA URL']: '',
          ['DE:Enter product SKU to display C2 image']: '',
          ['DE:Text to display for C2']: '',
          ['DE:URL for C2']: '',
          ['DE:Enter product SKU to display C3 image']: '',
          ['DE:Text to display for C3']: '',
          ['DE:URL for C3']: '',
          ['DE:Enter product SKU to display C4 image']: '',
          ['DE:Text to display for C4']: '',
          ['DE:URL for C4']: '',
          ['DE:Enter product SKU to display C5 image']: '',
          ['DE:Text to display for C5']: '',
          ['DE:URL for C5']: ''
        }
      };
    }

}
