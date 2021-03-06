import { Component, Input, OnInit } from '@angular/core';
import { SeasonalData } from 'src/app/models/SeasonalData';

@Component({
  selector: 'app-form-seasonal',
  templateUrl: './form-seasonal.component.html',
  styleUrls: ['./form-seasonal.component.css']
})
export class FormSeasonalComponent implements OnInit {
  @Input() seasonalData: SeasonalData;
  whitebg: boolean;
  listofColor = ['black', 'red'];
  tempLogo = '';
  tempCtaUrl = '';
  tempCtaText = '';

  constructor() { }

  ngOnInit() {
    if (this.seasonalData.data.parameterValues['DE:Sub-Headline'] === undefined) {
      this.seasonalData.data.parameterValues['DE:Sub-Headline'] = '';
    } else if (this.seasonalData.data.parameterValues['DE:Paragraph'] === undefined) {
      this.seasonalData.data.parameterValues['DE:Paragraph'] = '';
    } else if (this.seasonalData.data.parameterValues['DE:Headline'] === undefined) {
      this.seasonalData.data.parameterValues['DE:Headline'] = '';
    }
    // This if and else statement fixed logo background when using the checkbox
    if (this.seasonalData.data.parameterValues['DE:Add white background behind the logo?'] === 'Yes') {
      this.whitebg = true;
    } else {
     this.whitebg = false;
    }
  }

  /* Check the text color */
  changeColor(value) {
    // console.log(this.txtColor);
  }
  onChangeLogo() {
    if (this.seasonalData.data.parameterValues['DE:Logo required?'] === 'No') {
      this.tempLogo = this.seasonalData.data.parameterValues['DE:Image path for logo'];
      this.seasonalData.data.parameterValues['DE:Image path for logo'] = '';
      this.seasonalData.data.parameterValues['DE:Add white background behind the logo?'] = 'No';

    } else if (this.seasonalData.data.parameterValues['DE:Logo required?'] === 'Yes') {
      this.seasonalData.data.parameterValues['DE:Image path for logo'] = this.tempLogo;
      this.seasonalData.data.parameterValues['DE:Sub-Headline'] = '';
      this.whitebg = false;
    }
  }

  onChangeCta() {
    if (this.seasonalData.data.parameterValues['DE:CTA Button Required?'] === 'No') {
      this.tempCtaUrl = this.seasonalData.data.parameterValues['DE:CTA Button URL'];
      this.tempCtaText = this.seasonalData.data.parameterValues['DE:CTA Button Text'];
      this.seasonalData.data.parameterValues['DE:CTA Button URL'] = '';
      this.seasonalData.data.parameterValues['DE:CTA Button Text'] = '';
    } else if (this.seasonalData.data.parameterValues['DE:CTA Button Required?'] === 'Yes') {
      this.seasonalData.data.parameterValues['DE:CTA Button URL'] = this.tempCtaUrl;
      this.seasonalData.data.parameterValues['DE:CTA Button Text'] = this.tempCtaText;
    }

  }

  minusLogo(e) {
    // tslint:disable-next-line: max-line-length
    this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] = Number(this.seasonalData.data.parameterValues['DE:Logo Size Seasonal']);
    if (this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] > 100) {
      this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] -= 5;
    }
    if (this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] < 100 ||
    this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] > 220) {
      this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] = 100;
    }
  }

  plusLogo(e) {
    // tslint:disable-next-line: max-line-length
    this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] = Number(this.seasonalData.data.parameterValues['DE:Logo Size Seasonal']);
    if (this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] < 220) {
      this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] += 5;
    }
    if (this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] > 220 ||
    this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] < 100) {
      this.seasonalData.data.parameterValues['DE:Logo Size Seasonal'] = 220;
    }
  }

  addWhiteBgLogo() {
    this.whitebg = !this.whitebg;
    if (this.whitebg) {
      this.seasonalData.data.parameterValues['DE:Add white background behind the logo?'] = 'Yes';
    } else {
      this.seasonalData.data.parameterValues['DE:Add white background behind the logo?'] = 'No';
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
/* ------------------------------------------------

  onClickProductSample() {
    this.seasonalData.products = {
      // tslint:disable-next-line: max-line-length
      prod1Link: '/1888-mills-aura-spa-collection-spa-towel-40x70-27lb-dz-white-herringbone/p/1078073?icid=1888-mills-c1-c5_hp_car_3_20190913_2_1078073',
      prod1Name: 'Aura Spa Towel, 40″ x 70″, White Herringbone',
      prod1Img: 'https://images.americanhotel.com/images/products/1078073_1.jpg',
      // tslint:disable-next-line: max-line-length
      prod2Link: '/1888-mills-aura-spa-collection-spa-towel-40x70-27lb-dz-white-diamond-velour/p/1078060?icid=1888-mills-c1-c5_hp_car_3_20190913_3_1078060',
      prod2Name: 'Aura Spa Towel, 40″ x 70″, White Diamond Velour',
      prod2Img: 'https://images.americanhotel.com/images/products/1078060_1.jpg',
      // tslint:disable-next-line: max-line-length
      prod3Link: '/1888-mills-aura-spa-collection-spa-towel-40x70-27lb-dz-solid-white-velour/p/1078059?icid=1888-mills-c1-c5_hp_car_3_20190913_4_1078059',
      prod3Name: 'Aura Spa Towel, 40″ x 70″, Solid White Velour',
      prod3Img: 'https://images.americanhotel.com/images/products/1078059_1.jpg',
      // tslint:disable-next-line: max-line-length
      prod4Link: '/1888-mills-aura-spa-towel-40-x-70-white--blue/p/1078065?icid=1888-mills-c1-c5_hp_car_3_20190913_5_1078065',
      prod4Name: 'Aura Spa Towel, 40″ x 70″, White & Blue',
      prod4Img: 'https://images.americanhotel.com/images/products/1078065_1.jpg'
    };
  }

  onClearProductSample() {
    this.seasonalData.products = {
      prod1Link: '', prod1Name: '', prod1Img: '',
      prod2Link: '', prod2Name: '', prod2Img: '' ,
      prod3Link: '', prod3Name: '', prod3Img: '' ,
      prod4Link: '', prod4Name: '', prod4Img: ''
    };
  }
*/
}
