import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { SeasonalData } from 'src/app/models/SeasonalData';
import { MatSnackBar } from '@angular/material';
import { AppCss } from 'src/app/AppCss';
import { ISeasonalIframe } from 'src/app/interfaces/ISeasonalIframe';

declare const download: any;
declare const copy: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-seasonal',
  templateUrl: './preview-seasonal.component.html',
  styleUrls: ['./preview-seasonal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewSeasonalComponent implements ISeasonalIframe, DoCheck {
  @Input() seasonalData: SeasonalData;
  @Input() altLogo: string;
  buttonLink: string;
  SeasonaliframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();
  path = 'https://images.americanhotel.com/images/products/';
  size = '_1.jpg?width=140&amp;height=140';
  ctaButton = '';

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    this.insertLogo(this.seasonalData.data.parameterValues['DE:Image path for logo']);
    this.insertHeadline(this.seasonalData.data.parameterValues['DE:Headline']);
    this.insertLogoWidth(this.seasonalData.data.parameterValues['DE:Logo Size Seasonal']);
    this.insertLogoWhiteBackground(this.seasonalData.data.parameterValues['DE:Add white background behind the logo?']);
    this.insertProductImages();
    this.insertProductNames();
    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    // window.open(data.buttonURL);
  }

  generateCode() {

    try {
      let tmp: string;

      tmp = $('.seasonal-template').html();

      this.outputCode = this.outputCode = this.css.getSeasonalCSS() + tmp;

      this.impexCode = tmp.replace(/"/g, '""');

      if (this.seasonalData.data.parameterValues['DE:CTA Button Text'] === '') {
        this.SeasonaliframeCode =
        `<h5 class="text-center">${this.seasonalData.data.parameterValues['DE:Sub-Headline']}</h5>
        <p class="text-white">${this.seasonalData.data.parameterValues['DE:Paragraph']}</p>`;
      } else {
        this.SeasonaliframeCode =
        `<h5 class="text-center">${this.seasonalData.data.parameterValues['DE:Sub-Headline']}</h5>
        <p class="text-white">${this.seasonalData.data.parameterValues['DE:Paragraph']}</p>
        <a href="${this.seasonalData.data.parameterValues['DE:CTA Button URL']}" class="btn btn--secondary">
        ${this.seasonalData.data.parameterValues['DE:CTA Button Text']}</a>`;
      }

      this.SeasonaliframeCode = this.getScript(this.SeasonaliframeCode);
      this.insertCodeBlock(this.SeasonaliframeCode);

    } catch (err) { }

  }

  insertGlobalcss(css: string): void {
    $('.seasonal-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.seasonal-iframe').contents().find('#SeasonalHTML').html(code);
  }

  insertLogo(logo: string): void {
    $('.seasonal-iframe').contents().find('#Seasonallogo').attr('src', logo);
  }

  insertLogoWidth(width: number): void {
    $('.seasonal-iframe').contents().find('#Seasonallogo').attr('width', width);
  }

  insertLogoWhiteBackground(white: string): void {
    if (white === 'Yes') {
      $('.seasonal-iframe').contents().find('#Seasonallogo').addClass('bg-white-transparent');
      $('.seasonal-template').find('.mx-auto').addClass('bg-white-transparent');
    } else {
      $('.seasonal-iframe').contents().find('#Seasonallogo').removeClass('bg-white-transparent');
      $('.seasonal-template').find('.mx-auto').removeClass('bg-white-transparent');
    }
  }

  insertHeadline(headline: string): void {
    $('.seasonal-iframe').contents().find('.container').find('h4').text(headline);
  }


  insertProductImages(): void {
    $('.seasonal-iframe').contents().find('#Seasonal-prod1').find('img').attr('src', `${this.path}${this.seasonalData.data.parameterValues['DE:Enter product SKU to display C2 image']}${this.size}`);
    $('.seasonal-iframe').contents().find('#Seasonal-prod2').find('img').attr('src', `${this.path}${this.seasonalData.data.parameterValues['DE:Enter product SKU to display C3 image']}${this.size}`);
    $('.seasonal-iframe').contents().find('#Seasonal-prod3').find('img').attr('src', `${this.path}${this.seasonalData.data.parameterValues['DE:Enter product SKU to display C4 image']}${this.size}`);
    $('.seasonal-iframe').contents().find('#Seasonal-prod4').find('img').attr('src', `${this.path}${this.seasonalData.data.parameterValues['DE:Enter product SKU to display C5 image']}${this.size}`);
  }

  insertProductNames(): void {
    $('.seasonal-iframe').contents().find('#Seasonal-prod1').find('span').text(this.seasonalData.data.parameterValues['DE:Text to display for C2']);
    $('.seasonal-iframe').contents().find('#Seasonal-prod2').find('span').text(this.seasonalData.data.parameterValues['DE:Text to display for C3']);
    $('.seasonal-iframe').contents().find('#Seasonal-prod3').find('span').text(this.seasonalData.data.parameterValues['DE:Text to display for C4']);
    $('.seasonal-iframe').contents().find('#Seasonal-prod4').find('span').text(this.seasonalData.data.parameterValues['DE:Text to display for C5']);
  }

  /* Prevent default from clicking iframe button */
  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a.btn\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
  }

  /* Copy code */
  onCopy(codeType) {
    let code = '';
    if (codeType === 'plain') {
      code = this.outputCode;
    } else if (codeType === 'impex') {
      code = $('code#impex-code').text();
    }
    copy(code);
  }

  onDownload(filename, type) {
    if (type === 'html') {
      download(filename, this.outputCode);
    } else if (type === 'impex') {
      const impex = $('code#impex-code').text();
      download(filename, impex);
    }
  }

}

