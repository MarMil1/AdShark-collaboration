export class CLPDFeaturedData {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
        ['DE:Featured Items Carousel']: string;
        ['DE:Headline Color']: string;
        ['DE:SKUs']: string;
        ['DE:Custom headline?']: string;
        ['DE:Custom Headline']: string;
    };
  };
    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:Featured Items Carousel']: 'Featured Items Carousel',
          ['DE:Headline Color']: 'Black',
          ['DE:SKUs']: '',
          ['DE:Custom headline?']: 'No',
          ['DE:Custom Headline']: 'Featured Items'
        }
      };
    }
}
