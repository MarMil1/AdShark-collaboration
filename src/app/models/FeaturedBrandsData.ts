export class FeaturedBrandsData {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
        ['DE:Featured Brand Carousel']: string;
        ['DE:Go-Live Date']: string;
        ['DE:Headline Color']: string;
        ['DE:Custom headline?']: string;
        ['DE:Custom Headline']: string;
        ['DE:Requested Due Date']: string;
        ['DE:Logo 1 Link']: string;
        ['DE:Logo 2 Link']: string;
        ['DE:Logo 3 Link']: string;
        ['DE:Logo 4 Link']: string;
        ['DE:Logo 5 Link']: string;
        ['DE:Logo 1 Image Path']: string;
        ['DE:Logo 2 Image Path']: string;
        ['DE:Logo 3 Image Path']: string;
        ['DE:Logo 4 Image Path']: string;
        ['DE:Logo 5 Image Path']: string;
    };
  };
    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:Featured Brand Carousel']: 'Featured Brand Carousel',
          ['DE:Go-Live Date']: '',
          ['DE:Headline Color']: 'Black',
          ['DE:Custom headline?']: 'No',
          ['DE:Custom Headline']: '',
          ['DE:Requested Due Date']: '',
          ['DE:Logo 1 Link']: '',
          ['DE:Logo 2 Link']: '',
          ['DE:Logo 3 Link']: '',
          ['DE:Logo 4 Link']: '',
          ['DE:Logo 5 Link']: '',
          ['DE:Logo 1 Image Path']: '',
          ['DE:Logo 2 Image Path']: '',
          ['DE:Logo 3 Image Path']: '',
          ['DE:Logo 4 Image Path']: '',
          ['DE:Logo 5 Image Path']: '',
        }
      };
    }
}
