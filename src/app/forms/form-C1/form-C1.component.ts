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
  listofLogoSize = ['Small', 'Medium', 'Large'];
  tempLogo = '';
  tempCtaUrl = '';
  tempCtaText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLogoSize() {
    console.log(`C1 Logo size: ${this.c1Data.data.parameterValues['DE:Logo Size A1/CLP']}`);
  }

  onChangeLogo() {
    if (this.c1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      this.tempLogo = this.c1Data.data.parameterValues['DE:Image path for logo'];
      this.c1Data.data.parameterValues['DE:Image path for logo'] = '';
    } else if (this.c1Data.data.parameterValues['DE:Logo required?'] === 'Yes') {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = this.tempLogo;
    }
  }

  onChangeCallout() {
    if ((this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale'
    || this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'No Sale')
    && this.c1Data.data.parameterValues['DE:Text for Sale Call-Out'] === '') {
      this.c1Data.data.parameterValues['DE:Text for Sale Call-Out'] = 'Call out goes here!';
    }
  }

  getBackgroundColor() {
    if (this.c1Data.data.parameterValues['DE:Background color behind text'] === 'White') {
      this.c1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
    } else {
      this.c1Data.data.parameterValues['DE:Hex #'] = '#9e876b';
    }
  }

  onChangeCta() {
    if (this.c1Data.data.parameterValues['DE:CTA Button Required?'] === 'No') {
      this.tempCtaUrl = this.c1Data.data.parameterValues['DE:CTA URL'];
      this.tempCtaText = this.c1Data.data.parameterValues['DE:CTA Text'];
      this.c1Data.data.parameterValues['DE:CTA URL'] = '';
      this.c1Data.data.parameterValues['DE:CTA Text'] = '';
    } else if (this.c1Data.data.parameterValues['DE:CTA Button Required?'] === 'Yes') {
      this.c1Data.data.parameterValues['DE:CTA URL'] = this.tempCtaUrl;
      this.c1Data.data.parameterValues['DE:CTA Text'] = this.tempCtaText;
    }

  }

  onChangeLogoPosition() {
    console.log('C1 logo position changed');
    if (this.c1Data.data.parameterValues['DE:Logo position'] === 'Top') {
      $('.c1-supplier-logo img').addClass('l-p-top').removeClass('l-p-bottom');

    } else if (this.c1Data.data.parameterValues['DE:Logo position'] === 'Bottom') {
      $('.c1-supplier-logo img').addClass('l-p-bottom').removeClass('l-p-top');
    }
  }

}
