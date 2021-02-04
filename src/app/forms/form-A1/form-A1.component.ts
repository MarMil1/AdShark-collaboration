import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { A1Data } from 'src/app/models/A1Data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-A1',
  templateUrl: './form-A1.component.html',
  styleUrls: ['./form-A1.component.css']
})
export class FormA1Component implements OnInit {
  @Input() a1Data: A1Data;
  listofLogoSize = ['Small', 'Medium', 'Large'];
  tempLogo = '';
  tempCtaUrl = '';
  tempCtaText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickImageSample(){
    this.a1Data.data.parameterValues['DE:Image for Desktop - 960 x 410'] = 'https://images.americanhotel.com/images/banners/8962k_Westpoint_A1_100919-960.jpg?123';
    this.a1Data.data.parameterValues['DE:Image for mobile - 480 x 205'] = 'https://images.americanhotel.com/images/banners/8962k_Westpoint_A1_100919-480.jpg?123';
  }

  onChangeLogoPosition() {
    console.log('A1 logo position changed');
    if (this.a1Data.data.parameterValues['DE:Logo position'] === 'Top') {
      $('.a1-supplier-logo img').addClass('l-p-top').removeClass('l-p-bottom');

    } else if (this.a1Data.data.parameterValues['DE:Logo position'] === 'Bottom') {
      $('.a1-supplier-logo img').addClass('l-p-bottom').removeClass('l-p-top');
    }
  }

  onChangeLogoSize() {
    console.log(`A1 Logo size: ${this.a1Data.data.parameterValues['DE:Logo Size A1/CLP']}`);
  }
// onChangeCta makes CTA Link and CTA Text appear and disappear
  onChangeCta() {
    if (this.a1Data.data.parameterValues['DE:CTA Button Required?'] === 'No') {
      // tempCtaUrl will store a current url so we can use it in else statement below
      this.tempCtaUrl = this.a1Data.data.parameterValues['DE:CTA URL'];
      // tempCtaText will store a current text so we can use it in else statement below
      this.tempCtaText = this.a1Data.data.parameterValues['DE:CTA Text'];
      // now we set url & text to empty
      this.a1Data.data.parameterValues['DE:CTA URL'] = '';
      this.a1Data.data.parameterValues['DE:CTA Text'] = '';
    } else if (this.a1Data.data.parameterValues['DE:CTA Button Required?'] === 'Yes') {
      // now we are able to reuse link and text through temporary variables declared above
      this.a1Data.data.parameterValues['DE:CTA URL'] = this.tempCtaUrl;
      this.a1Data.data.parameterValues['DE:CTA Text'] = this.tempCtaText;
    }

  }
// onChangeLogo makes image path for logo appear and disappear
  onChangeLogo() {
    if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      // tempLogo will store logo for later use
      this.tempLogo = this.a1Data.data.parameterValues['DE:Image path for logo'];
      // image path is set to empty
      this.a1Data.data.parameterValues['DE:Image path for logo'] = '';
    } else if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'Yes') {
      // now we can use the previously stored logo value
      this.a1Data.data.parameterValues['DE:Image path for logo'] = this.tempLogo;
    }
  }

  onChangeCallout() {
    if ((this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale'
    || this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'No Sale')
    && this.a1Data.data.parameterValues['DE:Text for Sale Call-Out'] === '') {
      this.a1Data.data.parameterValues['DE:Text for Sale Call-Out'] = 'Call out goes here!';
    }
  }

  getBackgroundColor() {
    if (this.a1Data.data.parameterValues['DE:Background color behind text'] === 'White') {
      this.a1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
    } else {
      this.a1Data.data.parameterValues['DE:Hex #'] = '#9e876b';
    }
  }

}
