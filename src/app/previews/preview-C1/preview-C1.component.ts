import { Component, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';
import { C1Data } from 'src/app/models/C1Data';
import { IC1Iframe } from 'src/app/interfaces/IC1Iframe';

declare const download: any;
declare const copy: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-C1',
  templateUrl: './preview-C1.component.html',
  styleUrls: ['./preview-C1.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewC1Component implements IC1Iframe, DoCheck {
  @Input() c1Data: C1Data;
  // @Input() altLogo: string;

  C1iframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();
  altLogo = '';

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    // tslint:disable-next-line: max-line-length
    this.insertbg(this.c1Data.data.parameterValues['DE:Image for Desktop - 960 x 410'], this.c1Data.data.parameterValues['DE:Image for mobile - 480 x 205']);
    this.insertLogo(this.c1Data.data.parameterValues['DE:Image path for logo']);
    this.insertLogoSize(this.c1Data.data.parameterValues['DE:Logo Size A1/CLP'].toLocaleLowerCase());
    this.altLogo = this.getAlterLogo(this.c1Data.data.parameterValues['DE:Image path for logo']);
    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(this.c1Data.data.parameterValues['DE:CTA URL']);
  }

  generateCode() {
    let tmp: string;

    try {
      /* add sale and no sale  */
      if (this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'None') {
        $('.C1-template').find('.callout').html('');
        this.comment($('.C1-template').find('.callout')
        , `<!--<h4 class="callout">`
        , '</h4>-->');

      } else if (this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale'
      || this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'No Sale') {
        this.uncomment($('.C1-template').find('.c-hero__copy'));
        $('.C1-template').find('.callout').html(this.c1Data.data.parameterValues['DE:Text for Sale Call-Out']);
        $('.C1-template').find('.headline').html(this.c1Data.data.parameterValues['DE:Headline']);
        $('.C1-template').find('.sub-headline').html(this.c1Data.data.parameterValues['DE:Sub-Headline']);
        $('.C1-template').find('.cta').html(this.c1Data.data.parameterValues['DE:CTA Text']);

        if (this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale') {
          $('.C1-template').find('.callout').addClass('sale');
        } else {
          $('.C1-template').find('.callout').removeClass('sale');
        }
      }

      /* Give condition for changing background color and changing between primary and secondary */
      if (this.c1Data.data.parameterValues['DE:Background color behind text'] !== 'White'
          && this.c1Data.data.parameterValues['DE:Hex #'].length === 7) {
        this.insertHexColor(this.c1Data.data.parameterValues['DE:Hex #']);
        this.insertTextColor('c1-hero_secondary');
        $('.C1-template').find('.c1-hero').removeClass('c1-hero_primary').addClass('c1-hero_secondary');
        $('.c1-hero_text-wrap').attr('style', 'background-color:' + this.c1Data.data.parameterValues['DE:Hex #']);

      } else if (this.c1Data.data.parameterValues['DE:Hex #'] === '') {
          this.insertHexColor('#FFFFFF');
          this.insertTextColor('c1-hero_primary');
          $('.C1-template').find('.c1-hero').removeClass('c1-hero_secondary').addClass('c1-hero_primary');
          $('.c1-hero_text-wrap').attr('style', 'background-color:' + '#FFFFFF');

      } else {
        this.insertHexColor('#FFFFFF');
        this.insertTextColor('c1-hero_primary');
        $('.C1-template').find('.c1-hero').removeClass('c1-hero_secondary').addClass('c1-hero_primary');
        $('.c1-hero_text-wrap').attr('style', 'background-color:' + '#FFFFFF');
      }

      tmp = $('.C1-template').html();
      this.outputCode = this.css.getC1CSS() + tmp;

      this.impexCode = tmp.replace(/"/g, '""');

      this.C1iframeCode = $('div.c1-hero_text-wrap').html();
      this.C1iframeCode = this.getScript(this.C1iframeCode);

      this.insertCodeBlock(this.C1iframeCode);

    } catch (err) { }

  }

  insertGlobalcss(css: string): void {
    $('.C1-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.C1-iframe').contents().find('#C1HTML').html(code);
  }

  insertbg(img1: string, img2: string): void {
    const C1bg = $('.C1-iframe');
    const defaultImage = 'https://images.americanhotel.com/images/banners/C1-placeholder-widescreen.jpg';
    if (img1 !== '' && img2 !== '') {
      C1bg.contents().find('#C1bg').attr('src', img1);
      C1bg.contents().find('#C1Desktop').attr('srcset', img1);
      C1bg.contents().find('#C1Mobile').attr('srcset', img2);
    } else {
      C1bg.contents().find('#C1bg').attr('src', defaultImage);
      C1bg.contents().find('#C1Desktop').attr('srcset', defaultImage);
      C1bg.contents().find('#C1Mobile').attr('srcset', defaultImage);
    }
  }

  insertLogo(logo: string): void {
    // $('.C1-iframe').contents().find('#C1logo').attr('src', logo);
    if (this.c1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      $('.C1-iframe').contents().find('#C1logo').hide();
      this.comment($('.C1-template').find('.c1-supplier-logo'), '<!--<div alt="" class="c1-supplier-logo">', '</div>-->');

    } else if (this.c1Data.data.parameterValues['DE:Logo required?'] === 'Yes') {
      $('.C1-iframe').contents().find('#C1logo').show();
      $('.C1-iframe').contents().find('#C1logo').attr('src', logo);

      if (this.isCommented($('.C1-template').find('.order-first'))) {
        this.uncomment($('.C1-template').find('.order-first'));
      }

      $('.C1-template').find('.c1-supplier-logo').find('.bg-white').attr('src', logo);
      $('.C1-template').find('.c1-supplier-logo').attr('alt', this.altLogo);
    }
  }

  insertLogoSize(size: string): void {
    $('.C1-iframe').contents().find('#C1logo').removeClass('small medium large').addClass(size);
    $('.C1-template').find('.bg-white').removeClass('small medium large').addClass(size);
  }

  insertHexColor(color: string): void {
    $('.C1-iframe').contents().find('.c1-hero_text-wrap').attr('style', 'background-color:' + color);
  }

  insertTextColor(classname: string): void {
    $('.C1-iframe').contents().find('.c1-hero').removeClass('c1-hero_primary c1-hero_secondary').addClass(classname);
  }

  /* comment logo element */
  comment(element, front?, back?) {
    element.wrap(() => {
      return front + element.html() + back;
    });
  }

  uncomment(element) {
    element.html(element.html().replace('<!--', ''));
    element.html(element.html().replace('--&gt;', ''));
  }

  isCommented(element): boolean {
    if (element.html() !== undefined) {
      return element.html().includes('<!--');
    }

    return false;
}

  /* Prevent default from clicking iframe button */
  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
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

  getAlterLogo(logoPath: string) {
    let result = '';
    if (logoPath !== undefined) {
      let lst: string[] = [];
      const words: string[] = [];
      let tmp = logoPath.toLowerCase();
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      const i = lst[lst.length - 1].indexOf('.');
      tmp = tmp.substring(0, i);
      tmp = tmp.replace(/[_-]/g, ' ');
      const listOfWords = tmp.split(' ');
      for (let index = 0; index < listOfWords.length; index++) {
        words[index] = listOfWords[index].charAt(0).toUpperCase() + listOfWords[index].slice(1);
      }
      tmp = `${words.join(' ')}`;
      result = tmp.trim();
    }
    return result;
  }

}

