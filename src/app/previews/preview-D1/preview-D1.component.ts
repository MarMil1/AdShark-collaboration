import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';
import { ID1Iframe } from 'src/app/interfaces/ID1Iframe';
import { D1Data } from 'src/app/models/D1Data';

declare const download: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-D1',
  templateUrl: './preview-D1.component.html',
  styleUrls: ['./preview-D1.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PreviewD1Component implements ID1Iframe, DoCheck {
  @Input() d1Data: D1Data;
  @Input() altLogo: string;
  @Input() altImg: string;
  buttonLink: string;
  D1iframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    this.insertbg(this.d1Data.imgURL);
    this.insertLogo(this.d1Data.logoURL);
    this.insertLogoWidth(this.d1Data.logoWidth);
    this.insertLogoWhiteBackground(this.d1Data.whiteBGLogo);

    this.generateCode();
  }

  /* Snackbar for copied */
  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  generateCode() {
    // $('.resize-sensor').remove(); // this.D1Code.emit(tmp);
    let tmp: string;
    tmp = $('.D1-template').children().html();
    let tmpButtonTxt = this.d1Data.buttonTxt;

    try {
      /* Button Type */
      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.d1Data.buttonType + ' ');
        tmp = res;
      }

      /* If no button, comment out */
      if (this.d1Data.buttonType === 'none') {
        const str = tmp.substring(tmp.search('btn') - 10, tmp.search('/a') + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        tmpButtonTxt = '';
      }

      /* Button link path */
      if (this.d1Data.buttonURL.startsWith('https://www.americanhotel.com') || this.d1Data.buttonURL.startsWith('www.americanhotel.com')) {
        const url = this.d1Data.buttonURL;
        const lst: string[] = url.split('www.americanhotel.com');
        const str = tmp.substring(tmp.search('href') + 6, tmp.search('title="') - 1);
        this.buttonLink = lst[1];
      } else {
        this.buttonLink = this.d1Data.buttonURL;
      }

      /* Headline Color */
      if (tmp.includes('c-hero__title--')) {
        const str = tmp.substring(tmp.search('c-hero__title--'), tmp.indexOf('c-hero__title--') + 20);
        const res = tmp.replace(str, 'c-hero__title--' + this.d1Data.txtColor[0].color + ' ');
        tmp = res;
      }

      /* Subline Color */
      if (tmp.includes('c-hero__sub-title--')) {
        const str = tmp.substring(tmp.search('c-hero__sub-title--'), tmp.indexOf('c-hero__sub-title--') + 24);
        const res = tmp.replace(str, 'c-hero__sub-title--' + this.d1Data.txtColor[1].color + ' ');
        tmp = res;
      }

      /* if no headline, comment out */
      if (this.d1Data.headline === '') {
        const start = tmp.indexOf('h2');
        const end = tmp.indexOf('/h2');
        const str = tmp.substring(start - 1, end + 4);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      /* if no subline, comment out */
      if (this.d1Data.subline === '') {
        const start = tmp.indexOf('h3');
        const end = tmp.indexOf('h3>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      this.outputCode = tmp;
      // this.D1Code.emit(tmp);

      this.impexCode = tmp.replace(/"/g, '""');

      this.D1iframeCode =
      // tslint:disable-next-line:max-line-length
      '<h2 class="c-hero__title c-hero__title--' + this.d1Data.txtColor[0].color + ' c-hero__title--weight-extrabold c-hero__title--size-normal pt-3">' + this.d1Data.headline + '</h2>' +
      // tslint:disable-next-line:max-line-length
      '<h3 class="c-hero__sub-title c-hero__sub-title--' + this.d1Data.txtColor[1].color + ' c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">' + this.d1Data.subline + '</h3>' +
      // tslint:disable-next-line:max-line-length
      '<a class="btn btn--' + this.d1Data.buttonType + ' c-hero__action" href="' + this.d1Data.buttonURL + '" title="' + tmpButtonTxt + '">' + tmpButtonTxt + '</a>';

      this.D1iframeCode = this.getScript(this.D1iframeCode);
      this.insertCodeBlock(this.D1iframeCode);

    } catch (err) { }

  }

  insertGlobalcss(css: string): void {
    $('.D1-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.D1-iframe').contents().find('#D1HTML').html(code);
  }

  insertbg(img: string): void {
    const defaultImage = 'https://images.americanhotel.com/images/banners/D1-placeholder.jpg';
    if (img !== '') {
      $('.D1-iframe').contents().find('#D1bg').attr('src', img);
    } else {
      $('.D1-iframe').contents().find('#D1bg').attr('src', defaultImage);
    }
  }

  insertLogo(logo: string): void {
    $('.D1-iframe').contents().find('#D1logo').attr('src', logo);
  }

  insertLogoWidth(width: number): void {
    $('.D1-iframe').contents().find('#D1logo').attr('width', width);
  }

  insertLogoWhiteBackground(white: boolean): void {
    if (white) {
      $('.D1-template').find('img.pb-2').addClass('bg-white-transparent');
      $('.D1-iframe').contents().find('#D1logo').addClass('bg-white-transparent');
    } else {
      $('.D1-template').find('img.pb-2').removeClass('bg-white-transparent');
      $('.D1-iframe').contents().find('#D1logo').removeClass('bg-white-transparent');
    }
  }

  /* To prevent default behavior from open the link */
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
