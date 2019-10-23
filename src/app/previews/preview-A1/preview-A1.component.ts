import { D1Data } from 'src/app/models/D1Data';
import { Component, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';
import { A1Data } from 'src/app/models/A1Data';
import { IA1Iframe } from 'src/app/interfaces/IA1Iframe';

declare const download: any;
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
  // @Input() logoSize: string;

  A1iframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    this.insertbg(this.a1Data.data.parameterValues['DE:Image for desktop - 960px x 410px'], this.a1Data.data.parameterValues['DE:Image for mobile - 480px x 205px']);
    this.insertLogo(this.a1Data.data.parameterValues['DE:Image path for logo']);
    // $('.A1-iframe ').contents().find('#A1logo').removeClass(this.prevLogoSize).addClass(this.logoSize);

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

  //     /* Logo size class  */
  //     if (this.logoSize !== this.prevLogoSize) {
  //       const str = $('.a1-supplier-logo').html();
  //       const str1 = $('.a1-supplier-logo').html().replace(this.prevLogoSize, this.logoSize);
  //       const res = $('.A1-template').html().replace(str, str1);
  //       this.prevLogoSize = this.logoSize;
  //       tmp = res;
  //     }

      $('.a1-hero_text-wrap').attr('style', "background-color:" + this.a1Data.data.parameterValues['DE:Hex #']);
      $('.A1-iframe').contents().find('.a1-hero_text-wrap').attr('style', "background-color:" + this.a1Data.data.parameterValues['DE:Hex #']);

      if (this.a1Data.data.parameterValues['DE:Background color behind text'] !== 'White') {
      $('.A1-template').removeClass('a1-hero_primary').addClass('a1-hero_secondary');
      $('.A1-iframe').contents().find('.a1-hero').removeClass('a1-hero_primary').addClass('a1-hero_secondary');
    } else {
      $('.A1-template').removeClass('a1-hero_secondary').addClass('a1-hero_primary');
      $('.A1-iframe').contents().find('.a1-hero').removeClass('a1-hero_secondary').addClass('a1-hero_primary');
    }


      tmp = $('.A1-template').html();
      this.outputCode = tmp; // this.css.getA1CSS() 
      // this.A1Code.emit(tmp);

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
    $('.A1-iframe').contents().find('#A1logo').attr('src', logo);
  }

  /* Prevent default from clicking iframe button */
  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
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

