export class D1Data {
    data: {
      ID: string;
      name: string;
      objCode: string;
      parameterValues: {
        ['DE:Image path for 1/3 banner']: string;
        ['DE:Sub-Headline']: string;
        ['DE:CTA text']: string;
        ['DE:CTA URL']: string;
      };
    };
  
    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
            ['DE:Image path for 1/3 banner']: '',
            ['DE:Sub-Headline']: '',
            ['DE:CTA text']: '',
            ['DE:CTA URL']: ''
        }
      };
    }
  
  }
  