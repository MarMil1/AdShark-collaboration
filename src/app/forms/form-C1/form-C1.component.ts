import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { C1Data } from 'src/app/models/C1Data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-C1',
  templateUrl: './form-C1.component.html',
  styleUrls: ['./form-C1.component.css']
})
export class FormC1Component implements OnInit {
  @Input() c1Data: C1Data;
  @Output() c1LogoSize = new EventEmitter();
  logoSize: string;
  listofLogoSize = ['small', 'medium', 'large'];

  constructor() { }

  ngOnInit(): void {
    this.logoSize = 'large';
  }

  onChangeLogoSize() {
    this.c1LogoSize.emit(this.logoSize);
  }

  onChangeLogo() {
    if (this.c1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = '';
    }
  }

  onChangeCallout() {
    if (this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'Yes') {
      this.c1Data.data.parameterValues['DE:Background color behind text'] = 'White';
      this.c1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
      this.c1Data.data.parameterValues['DE:Text for Sale Call-Out'] = 'call out goes here!';
    } else if (this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'No') {
      this.c1Data.data.parameterValues['DE:Text for Sale Call-Out'] = '';
    }
  }

  getBackgroundColor() {
    if (this.c1Data.data.parameterValues['DE:Background color behind text'] === 'White') {
      this.c1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
    } else {
      this.c1Data.data.parameterValues['DE:Hex #'] = '#9e876b';
    }
  }



  /* ---------------------------------------------------------------------------------------------------------------------------------- */




  onClickImageSample(){
    this.c1Data.data.parameterValues['DE:Image for desktop - 960px x 410px'] = 'https://images.americanhotel.com/images/banners/8962k_Westpoint_A1_100919-960.jpg?123';
    this.c1Data.data.parameterValues['DE:Image for mobile - 480px x 205px'] = 'https://images.americanhotel.com/images/banners/8962k_Westpoint_A1_100919-480.jpg?123';
  }

  onClickLogoSample(ad) {
    if (ad === 1) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo-white.svg';

    } else if (ad === 2) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/hunter-logo.svg';

    } else if (ad === 3) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo.png';

    } else if (ad === 4) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/emails/logos/RegistryNoTag.png';

    } else if (ad === 5) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/GE bw.svg';

    } else if (ad === 6) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/ForbesLogo.svg';

    } else if (ad === 7) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/1888-aura-logo-white.svg';
    }
    else if (ad === 8) {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/westpoint-martex-logo.svg';
    }
  
  }


  logoBorder(ad) {
    if (ad === 1) {
      $('.sample-logo-1').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');
    } else if (ad === 2) {
      $('.sample-logo-2').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 3) {
      $('.sample-logo-3').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 4) {
      $('.sample-logo-4').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 5) {
      $('.sample-logo-5').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 6) {
      $('.sample-logo-6').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 7) {
      $('.sample-logo-7').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 8) {
      $('.sample-logo-8').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

    }
  }

}
