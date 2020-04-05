export class SeasonalData {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
        ['DE:Seasonal Component']: string;
        ['DE:Headline']: string;
        ['DE:Logo required?']: string;
        ['DE:Image path for logo']: string;
        ['DE:Add white background behind the logo?']: string;
        ['DE:Sub-Headline']: string;
        ['DE:Paragraph']: string;
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
        ['DE:CTA Button Text']: string;
        ['DE:CTA Button URL']: string;
        ['DE:Logo Size Seasonal']: number;
        ['DE:CTA Button Required?']: string;
    };
  };

    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:Seasonal Component']: 'Seasonal Component',
          ['DE:Headline']: '',
          ['DE:Logo required?']: 'No',
          ['DE:Image path for logo']: '',
          ['DE:Add white background behind the logo?']: 'No',
          ['DE:Sub-Headline']: '',
          ['DE:Paragraph']: '',
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
          ['DE:URL for C5']: '',
          ['DE:CTA Button Text']: '',
          ['DE:CTA Button URL']: '',
          ['DE:Logo Size Seasonal']: 150,
          ['DE:CTA Button Required?']: 'Yes'
        }
      };
    }

}
