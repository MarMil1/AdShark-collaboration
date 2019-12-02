export class A1Data {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
      ['DE:A1 Hero Banner']: string;
      ['DE:Image provided?']: string;
      ['DE:Image type']: string;
      ['DE:Image for Desktop - 960 x 410']: string;
      ['DE:Image for mobile - 480 x 205']: string;
      ['DE:Logo required?']: string;
      ['DE:Logo Size A1/CLP']: string;
      ['DE:Image path for logo']: string;
      ['DE:Sale Call-Out']: string;
      ['DE:Text for Sale Call-Out']: string;
      ['DE:Background color behind text']: string;
      ['DE:Hex #']: string;
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
        ['DE:A1 Hero Banner']: 'A1 Hero Banner',
        ['DE:Image provided?']: 'No',
        ['DE:Image type']: '',
        ['DE:Image for Desktop - 960 x 410']: '',
        ['DE:Image for mobile - 480 x 205']: '',
        ['DE:Logo required?']: 'No',
        ['DE:Logo Size A1/CLP']: 'Large',
        ['DE:Image path for logo']: '',
        ['DE:Sale Call-Out']: 'None',
        ['DE:Text for Sale Call-Out']: '',
        ['DE:Background color behind text']: 'White',
        ['DE:Hex #']: '',
        ['DE:Headline']: '',
        ['DE:Sub-Headline']: '',
        ['DE:CTA Text']: '',
        ['DE:CTA URL']: '',
      }
    };
  }

}
