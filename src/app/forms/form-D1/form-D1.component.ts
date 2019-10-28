import { Component, Input } from '@angular/core';
import { D1Data } from 'src/app/models/D1Data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-D1',
  templateUrl: './form-D1.component.html',
  styleUrls: ['./form-D1.component.css']
})
export class FormD1Component {
  @Input() d1Data: D1Data;
  @Input() altLogo: string;
  @Input() altImg: string;
  imageProvided = 'no';
  disabledButton = false;
  listofColor = ['blue', 'black', 'white'];
  buttonOptions: any = [
    { type: 'default', name: 'Solid/Blue' },
    { type: 'primary', name: 'Clear/White' },
    { type: 'alternate', name: 'Clear/Blue' }
  ];

  constructor() { }

  /* Check the text color */
  changeColor(value) {
    // console.log(this.txtColor);
  }

  /* Check the button style */
  changeButton(event) {
    console.log(this.d1Data.buttonType);

    if (this.d1Data.buttonType === 'none') {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }

  minusLogo(e) {
    this.d1Data.logoWidth = Number(this.d1Data.logoWidth);
    this.d1Data.logoWidth -= 5;
  }

  plusLogo(e) {
    this.d1Data.logoWidth = Number(this.d1Data.logoWidth);
    this.d1Data.logoWidth += 5;
  }

  addWhiteBgLogo() {
    this.d1Data.whiteBGLogo = !this.d1Data.whiteBGLogo;
  }

  /* -------- Show and Hide Sample bg / logo / products  -----*/
     onClickSample(field, ad) {
      if (field === 'bg') {
        if (ad === 'D1') {
          this.d1Data.imgURL = 'https://images.americanhotel.com/images/banners/8754_1888Mills_AD_D1_061719_bg.jpg';

        } else if (ad === 'A1Left') {
          this.d1Data.imgURL = 'https://images.americanhotel.com/images/banners/8713_hunter_A1_widescreen_overlay.jpg';

        }  else if (ad === 'A1Right') {
          this.d1Data.imgURL = 'https://images.americanhotel.com/images/banners/8865_1888Mills_080619_widescreen.jpg?q=123';

        } else { this.d1Data.imgURL = 'https://images.americanhotel.com/images/emails/8743K_Inteplast_EML_061919_03.jpg'; }

      } else if (field === 'logo') {

        if (ad === 1) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo-white.svg';

        } else if (ad === 2) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/hunter-logo.svg';

        } else if (ad === 3) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo.png';

        } else if (ad === 4) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/emails/logos/RegistryNoTag.png';

        } else if (ad === 5) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/GE bw.svg';

        } else if (ad === 6) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/ForbesLogo.svg';

        } else if (ad === 7) {
          this.d1Data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-aura-logo-white.svg';
        }
      }
    }

    bgBorder(ad) {
      if (ad === 'D1') {
        $('.sample-bg-D1').css('background-color', 'lightgray');
        $('.sample-bg-A1Left').css('background-color', 'transparent');
        $('.sample-bg-A1Right').css('background-color', 'transparent');
        $('.sample-bg-email').css('background-color', 'transparent');
      } else if (ad === 'A1Left') {
        $('.sample-bg-D1').css('background-color', 'transparent');
        $('.sample-bg-A1Left').css('background-color', 'lightgray');
        $('.sample-bg-A1Right').css('background-color', 'transparent');
        $('.sample-bg-email').css('background-color', 'transparent');
      } else if (ad === 'A1Right') {
        $('.sample-bg-D1').css('background-color', 'transparent');
        $('.sample-bg-A1Left').css('background-color', 'transparent');
        $('.sample-bg-A1Right').css('background-color', 'lightgray');
        $('.sample-bg-email').css('background-color', 'transparent');
      } else if (ad === 'email') {
        $('.sample-bg-D1').css('background-color', 'transparent');
        $('.sample-bg-A1Left').css('background-color', 'transparent');
        $('.sample-bg-A1Right').css('background-color', 'transparent');
        $('.sample-bg-email').css('background-color', 'lightgray');
      }
    }

    logoBorder(ad) {
      if (ad === 1) {
        $('.sample-logo-1').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');
      } else if (ad === 2) {
        $('.sample-logo-2').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 3) {
        $('.sample-logo-3').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 4) {
        $('.sample-logo-4').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 5) {
        $('.sample-logo-5').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 6) {
        $('.sample-logo-6').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 7) {
        $('.sample-logo-7').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6').css('background-color', 'transparent');

      }
    }
    /* ------------------------------------------------*/

}
