import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';
import { AppCss } from '../AppCss';
import { MatSnackBar } from '@angular/material';

declare const insertSeasonal: any;
declare const insertbg: any;
declare const insertLogo: any;
declare const insertGlobalcss: any;
declare const download: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-Seasonal',
  templateUrl: './preview-Seasonal.component.html',
  styleUrls: ['./preview-Seasonal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewSeasonalComponent implements DoCheck {
  @Input() data: AppData;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  @Input() logoSize: string;
  @Input() txtColor: any = [];
  @Input() whiteBGLogo: boolean;
  @Input() textAlign: string;
  @Input() logoAlign: string;
  // @Output() SeasonalCode = new EventEmitter();
  buttonLink: string;
  SeasonaliframeCode: string;
  outputCode: string;
  impexCode: string;
  prevTextAlign = 'left'; prevLogoAlign = 'left'; prevLogoSize = 'small';
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    insertGlobalcss(this.css.getGlobalCSS);

    if (this.data.bgURL === '') {
      const tmpBg = 'https://images.americanhotel.com/images/banners/Seasonal-placeholder-widescreen.jpg';
      insertbg(tmpBg, 'Seasonal');
    } else {
      insertbg(this.data.bgURL, 'Seasonal');
    }

    insertLogo(this.data.logoURL, 'Seasonal');

    $('.Seasonal-iframe ').contents().find('#Seasonallogo').removeClass(this.prevLogoAlign).addClass(this.logoAlign);
    $('.Seasonal-iframe ').contents().find('#Seasonallogo').removeClass(this.prevLogoSize).addClass(this.logoSize);

    if (this.whiteBGLogo === true) {
      $('.Seasonal-iframe').contents().find('#Seasonallogo').addClass('bg-white-transparent');
      $('.Seasonal-template').find('.Seasonal-supplier-logo').find('img').addClass('bg-white-transparent');
    } else {
      $('.Seasonal-iframe').contents().find('#Seasonallogo').removeClass('bg-white-transparent');
      $('.Seasonal-template').find('div.Seasonal-supplier-logo').find('img').removeClass('bg-white-transparent');
    }

    this.getHTML();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    let tmp: string;
    tmp = $('.Seasonal-template').html();
  
    //let style = $('.Seasonal-template').css();
    let tmpButtonTxt = this.data.buttonTxt;

    try {

      // /* Text alignment */
      // if (this.textAlign !== this.prevTextAlign) {
      //   const len = this.prevTextAlign.length;
      //   const str = tmp.substring( tmp.search('c-hero__copy--align-') + 20, tmp.search('c-hero__copy--align-') + 20 + len);
      //   const res = tmp.replace(str, this.textAlign);
      //   tmp = res;
      //   this.prevTextAlign = this.textAlign;
      // }

      // /* Logo alignment */
      // if (this.logoAlign !== this.prevLogoAlign) {
      //   // $('.Seasonal-iframe ').contents().find('#Seasonallogo').removeClass(this.prevLogoAlign).addClass(this.logoAlign);
      //   const str = $('.Seasonal-supplier-logo').html();
      //   const str1 = $('.Seasonal-supplier-logo').html().replace(this.prevLogoAlign, this.logoAlign);
      //   const res = $('.Seasonal-template').children().html().replace(str, str1);
      //   this.prevLogoAlign = this.logoAlign;
      //   tmp = res;
      // }

      // /* Logo size class  */
      // if (this.logoSize !== this.prevLogoSize) {
      //   const str = $('.Seasonal-supplier-logo').html();
      //   const str1 = $('.Seasonal-supplier-logo').html().replace(this.prevLogoSize, this.logoSize);
      //   const res = $('.Seasonal-template').children().html().replace(str, str1);
      //   this.prevLogoSize = this.logoSize;
      //   tmp = res;
      // }

      // /* Button Type */
      // if (tmp.includes('btn--')) {
      //   const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
      //   const res = tmp.replace(str, 'btn--' + this.button + ' ');
      //   tmp = res;
      // }

      // /* If no button, comment out */
      // if (this.button === 'none') {
      //   const str = tmp.substring(tmp.search('btn') - 28, tmp.search('/a') + 9);
      //   const res = tmp.replace(str, '');
      //   tmp = res;
      //   tmpButtonTxt = '';
      // }

      // /* Button link path */
      // if (this.data.buttonURL.startsWith('https://www.americanhotel.com') || this.data.buttonURL.startsWith('www.americanhotel.com')) {
      //   const url = this.data.buttonURL;
      //   let lst: string[] = url.split('www.americanhotel.com');
      //   const str = tmp.substring(tmp.search('href') + 6, tmp.search('Seasonal-supplier-logo') - 42);
      //   this.buttonLink = lst[1];
      // } else {
      //   this.buttonLink = this.data.buttonURL;
      // }

      // /* Headline Color */
      // if (tmp.includes('c-hero__title--')) {
      //   const str = tmp.substring(tmp.search('c-hero__title--'), tmp.indexOf('c-hero__title--') + 20);
      //   const res = tmp.replace(str, 'c-hero__title--' + this.txtColor[0].color + ' ');
      //   tmp = res;
      // }

      // /* Subline Color */
      // if (tmp.includes('c-hero__sub-title--')) {
      //   const str = tmp.substring(tmp.search('c-hero__sub-title--'), tmp.indexOf('c-hero__sub-title--') + 24);
      //   const res = tmp.replace(str, 'c-hero__sub-title--' + this.txtColor[1].color + ' ');
      //   tmp = res;
      // }

      // /* if no headline, comment out */
      // if (this.data.headline === '') {
      //   const start = tmp.indexOf('h2');
      //   const end = tmp.indexOf('h2>');
      //   const str = tmp.substring(start - 1, end + 3);
      //   const res = tmp.replace(str, '');
      //   tmp = res;
      // }

      // /* if no subline, comment out */
      // if (this.data.subline === '') {
      //   const start = tmp.indexOf('h3');
      //   const end = tmp.indexOf('h3>');
      //   const str = tmp.substring(start - 1, end + 3);
      //   const res = tmp.replace(str, '');
      //   tmp = res;
      // }

      this.outputCode = tmp;
      // this.SeasonalCode.emit(tmp);
      this.SeasonaliframeCode = this.outputCode;

      this.impexCode = tmp.replace(/"/g, '""');

      // this.SeasonaliframeCode =
      // '<div class="c-hero__copy c-hero__copy--align-' + this.textAlign + '">' +
      // '<h2 class="c-hero__title c-hero__title--' + this.txtColor[0].color + ' c-hero__title--weight-extrabold c-hero__title--size-large">' + this.data.headline + '</h2>' +
      // '<h3 class="c-hero__sub-title c-hero__sub-title--' + this.txtColor[1].color + ' c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">' + this.data.subline + '</h3>' +
      // '<div class="mt-2"><a class="btn btn--' + this.button + ' c-hero__action" href="' + this.data.buttonURL + '">' + tmpButtonTxt + '</a></div></div>';
      
      this.SeasonaliframeCode = this.getScript(this.SeasonaliframeCode);
      insertSeasonal(this.SeasonaliframeCode);

    } catch (err) { }

  }

  
  /* Prevent default from clicking iframe button */
  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a.btn\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
  }

  /* Copy code */
  onCopy(codeType) {
    let copyCode = '';
    if (codeType === 'plain') {
      copyCode = this.outputCode;
    } else if (codeType === 'impex') {
      copyCode = $('code#impex-code').text();
    }

    let txtarea: any;
    txtarea = document.createElement('textarea');
    txtarea.style.position = 'fixed';
    txtarea.style.left = '0';
    txtarea.style.top = '0';
    txtarea.style.opacity = '0';
    txtarea.value = copyCode;
    document.body.appendChild(txtarea);
    txtarea.focus();
    txtarea.select();
    document.execCommand('copy');
    document.body.removeChild(txtarea);
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

