export class C1ClippedData {
    data: {
      ID: string;
      name: string;
      objCode: string;
      parameterValues: {
        ['DE:CLP Banner Clipped']: string;
        ['DE:Image provided?']: string;
        ['DE:Image type']: string;
        ['DE:Image - 520 x 450']: string;
        ['DE:Logo required?']: string;
        ['DE:Image path for logo']: string;
        ['DE:Headline']: string;
        ['DE:Sub-Headline']: string;
        ['DE:CTA Text']: string;
        ['DE:CTA URL']: string;
      };
    };
  
    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:CLP Banner Clipped']: 'CLP Banner Clipped',
          ['DE:Image provided?']: 'No',
          ['DE:Image type']: '',
          ['DE:Image - 520 x 450']: '',
          ['DE:Logo required?']: 'No',
          ['DE:Image path for logo']: '',
          ['DE:Headline']: '',
          ['DE:Sub-Headline']: '',
          ['DE:CTA Text']: '',
          ['DE:CTA URL']: '',
        }
      };
    }
  
  }
  