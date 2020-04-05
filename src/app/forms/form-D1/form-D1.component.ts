import { Component, OnInit, Input } from '@angular/core';
import { D1Data } from 'src/app/models/D1Data';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-form-D1',
  templateUrl: './form-D1.component.html',
  styleUrls: ['./form-D1.component.css']
})
export class FormD1Component implements OnInit {
  @Input() d1Data: D1Data;
  tempCtaUrl = '';
  tempCtaText = '';

  constructor() { }

  ngOnInit() {
  }

  onClickImageSample() {
    this.d1Data.data.parameterValues['DE:Image - 450 x 350'] = 'https://images.americanhotel.com/images/banners/D1_generic_foodservice.jpg';
  }

  onChangeCta() {
    if (this.d1Data.data.parameterValues['DE:CTA Button Required?'] === 'No') {
      this.tempCtaUrl = this.d1Data.data.parameterValues['DE:CTA URL'];
      this.tempCtaText = this.d1Data.data.parameterValues['DE:CTA Text'];
      this.d1Data.data.parameterValues['DE:CTA URL'] = '';
      this.d1Data.data.parameterValues['DE:CTA Text'] = '';
    } else if (this.d1Data.data.parameterValues['DE:CTA Button Required?'] === 'Yes') {
      this.d1Data.data.parameterValues['DE:CTA URL'] = this.tempCtaUrl;
      this.d1Data.data.parameterValues['DE:CTA Text'] = this.tempCtaText;
    }

  }



    // minusLogo(e) {
    //   this.d1Data.logoWidth = Number(this.d1Data.logoWidth);
    //   this.d1Data.logoWidth -= 5;
    // }

    // plusLogo(e) {
    //   this.d1Data.logoWidth = Number(this.d1Data.logoWidth);
    //   this.d1Data.logoWidth += 5;
    // }

    // addWhiteBgLogo() {
    //   this.d1Data.whiteBGLogo = !this.d1Data.whiteBGLogo;
    // }

}
