export class C1Data {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
      ['DE:CLP Banner']: string;
      ['DE:Image provided?']: string;
      ['DE:Image type']: string;
      ['DE:Image for Desktop - 960 x 410']: string;
      ['DE:Image for mobile - 480 x 205']: string;
      ['DE:Logo required?']: string;
      ['DE:Image path for logo']: string;
      ['DE:Sale Call-Out']: string;
      ['DE:Text for Sale Call-Out']: string;
      ['DE:Background color behind text']: string;
      ['DE:Hex #']: string;
      ['DE:Cusom Headline']: string;
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
        ['DE:CLP Banner']: 'CLP Banner',
        ['DE:Image provided?']: 'No',
        ['DE:Image type']: '',
        ['DE:Image for Desktop - 960 x 410']: '',
        ['DE:Image for mobile - 480 x 205']: '',
        ['DE:Logo required?']: 'No',
        ['DE:Image path for logo']: '',
        ['DE:Sale Call-Out']: 'No',
        ['DE:Text for Sale Call-Out']: '',
        ['DE:Background color behind text']: 'White',
        ['DE:Hex #']: '',
        ['DE:Cusom Headline']: '',
        ['DE:Sub-Headline']: '',
        ['DE:CTA Text']: '',
        ['DE:CTA URL']: '',
      }
    };
  }

}
