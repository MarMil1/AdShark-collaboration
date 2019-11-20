export class SaleCarouselData {
    data: {
      ID: string;
      name: string;
      objCode: string;
      parameterValues: {
        ['DE:Sale Carousel']: string;
          ['DE:Headline Color']: string;
          ['DE:SKUs']: string;
          ['DE:Custom headline?']: string;
          ['DE:Cusom Headline']: string;
      };
    };
  
      constructor() {
        this.data = {
          ID: '',
          name: '',
          objCode: '',
          parameterValues: {
            ['DE:Sale Carousel']: 'Sale Carousel',
            ['DE:Headline Color']: 'Red',
            ['DE:SKUs']: '',
            ['DE:Custom headline?']: 'No',
            ['DE:Cusom Headline']: 'Featured Sales'
          }
        };
      }
  
  }
  