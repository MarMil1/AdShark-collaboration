import { Component, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';
import { A1Data } from 'src/app/models/A1Data';
import { IA1Iframe } from 'src/app/interfaces/IA1Iframe';

declare const download: any;
declare const copy: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-A1',
  templateUrl: './preview-A1.component.html',
  styleUrls: ['./preview-A1.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewA1Component implements IA1Iframe, DoCheck {
  @Input() a1Data: A1Data;
  // @Input() altLogo: string;

  A1iframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();
  altLogo = '';

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    // tslint:disable-next-line: max-line-length
    this.insertbg(this.a1Data.data.parameterValues['DE:Image for Desktop - 960 x 410'], this.a1Data.data.parameterValues['DE:Image for mobile - 480 x 205']);
    this.insertLogo(this.a1Data.data.parameterValues['DE:Image path for logo']);
    this.insertLogoSize(this.a1Data.data.parameterValues['DE:Logo Size A1/CLP'].toLocaleLowerCase());
    this.altLogo = this.getAlterLogo(this.a1Data.data.parameterValues['DE:Image path for logo']);
    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(this.a1Data.data.parameterValues['DE:CTA URL']);
  }

  generateCode() {
    let tmp: string;

    try {
      /* add sale and no sale  */
      if (this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'None') {
        $('.A1-template').find('.callout').html('');
        this.comment($('.A1-template').find('.callout')
        , `<!--<h4 class="callout">`
        , '</h4>-->');

      } else if (this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale'
      || this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'No Sale') {
        this.uncomment($('.A1-template').find('.c-hero__copy'));
        $('.A1-template').find('.callout').html(this.a1Data.data.parameterValues['DE:Text for Sale Call-Out']);
        $('.A1-template').find('.headline').html(this.a1Data.data.parameterValues['DE:Headline']);
        $('.A1-template').find('.sub-headline').html(this.a1Data.data.parameterValues['DE:Sub-Headline']);
        $('.A1-template').find('.cta').html(this.a1Data.data.parameterValues['DE:CTA Text']);

        if (this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale') {
          $('.A1-template').find('.callout').addClass('sale');
        } else {
          $('.A1-template').find('.callout').removeClass('sale');
        }
      }

      /* Give condition for changing background color and changing between primary and secondary */
      if (this.a1Data.data.parameterValues['DE:Background color behind text'] !== 'White'
          && this.a1Data.data.parameterValues['DE:Hex #'].length === 7) {
        this.insertHexColor(this.a1Data.data.parameterValues['DE:Hex #']);
        this.insertTextColor('a1-hero_secondary');
        $('.A1-template').find('.a1-hero').removeClass('a1-hero_primary').addClass('a1-hero_secondary');
        $('.a1-hero_text-wrap').attr('style', 'background-color:' + this.a1Data.data.parameterValues['DE:Hex #']);

      } else if (this.a1Data.data.parameterValues['DE:Hex #'] === '') {
          this.insertHexColor('#FFFFFF');
          this.insertTextColor('a1-hero_primary');
          $('.A1-template').find('.a1-hero').removeClass('a1-hero_secondary').addClass('a1-hero_primary');
          $('.a1-hero_text-wrap').attr('style', 'background-color:' + '#FFFFFF');

      } else {
        this.insertHexColor('#FFFFFF');
        this.insertTextColor('a1-hero_primary');
        $('.A1-template').find('.a1-hero').removeClass('a1-hero_secondary').addClass('a1-hero_primary');
        $('.a1-hero_text-wrap').attr('style', 'background-color:' + '#FFFFFF');
      }

      tmp = $('.A1-template').html();
      this.outputCode = this.css.getA1CSS() + tmp;

      this.impexCode = tmp.replace(/"/g, '""');

      this.A1iframeCode = $('div.a1-hero_text-wrap').html();
      this.A1iframeCode = this.getScript(this.A1iframeCode);

      this.insertCodeBlock(this.A1iframeCode);

    } catch (err) { }

  }

  insertGlobalcss(css: string): void {
    $('.A1-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.A1-iframe').contents().find('#A1HTML').html(code);
  }

  insertbg(img1: string, img2: string): void {
    const A1bg = $('.A1-iframe');
    const defaultImage = 'https://images.americanhotel.com/images/banners/A1-placeholder-widescreen.jpg';
    if (img1 !== '' && img2 !== '') {
      A1bg.contents().find('#A1bg').attr('src', img1);
      A1bg.contents().find('#A1Desktop').attr('srcset', img1);
      A1bg.contents().find('#A1Mobile').attr('srcset', img2);
    } else {
      A1bg.contents().find('#A1bg').attr('src', defaultImage);
      A1bg.contents().find('#A1Desktop').attr('srcset', defaultImage);
      A1bg.contents().find('#A1Mobile').attr('srcset', defaultImage);
    }
  }

  insertLogo(logo: string): void {
    // $('.A1-iframe').contents().find('#A1logo').attr('src', logo);
    if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      $('.A1-iframe').contents().find('#A1logo').hide();
      this.comment($('.A1-template').find('.a1-supplier-logo'), '<!--<div alt="" class="a1-supplier-logo">', '</div>-->');

    } else if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'Yes') {
      $('.A1-iframe').contents().find('#A1logo').show();
      $('.A1-iframe').contents().find('#A1logo').attr('src', logo);

      if (this.isCommented($('.A1-template').find('.order-first'))) {
        this.uncomment($('.A1-template').find('.order-first'));
      }

      $('.A1-template').find('.a1-supplier-logo').find('.bg-white').attr('src', logo);
      $('.A1-template').find('.a1-supplier-logo').attr('alt', this.altLogo);
    }
  }

  insertLogoSize(size: string): void {
    $('.A1-iframe').contents().find('#A1logo').removeClass('small medium large').addClass(size);
    $('.A1-template').find('.bg-white').removeClass('small medium large').addClass(size);
  }

  insertHexColor(color: string): void {
    $('.A1-iframe').contents().find('.a1-hero_text-wrap').attr('style', 'background-color:' + color);
  }

  insertTextColor(classname: string): void {
    $('.A1-iframe').contents().find('.a1-hero').removeClass('a1-hero_primary a1-hero_secondary').addClass(classname);
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

