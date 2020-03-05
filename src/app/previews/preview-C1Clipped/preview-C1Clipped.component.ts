import { Component, Input, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';
import { C1ClippedData } from 'src/app/models/C1ClippedData';
import { IC1ClippedIframe } from 'src/app/interfaces/IC1ClippedIframe';


declare const download: any;
declare const copy: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-C1Clipped',
  templateUrl: './preview-C1Clipped.component.html',
  styleUrls: ['./preview-C1Clipped.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewC1ClippedComponent implements IC1ClippedIframe, DoCheck {
  @Input() c1clippedData: C1ClippedData;
  @Input() altLogo: string;

  C1ClippediframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    // tslint:disable-next-line: max-line-length
    // this.insertbg(this.c1clippedData.data.parameterValues['DE:Image - 520 x 450']);
    this.insertLogo(this.c1clippedData.data.parameterValues['DE:Image path for logo']);
    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(this.c1clippedData.data.parameterValues['DE:CTA URL']);
  }

  generateCode() {
    let tmp: string;

    try {

      tmp = $('.C1Clipped-template').html();
      this.outputCode = this.css.getC1ClippedCSS() + tmp;

      this.impexCode = tmp.replace(/"/g, '""');

      let btnElement = document.getElementById('logoElement').style.display = 'inline';

      if (this.c1clippedData.data.parameterValues['DE:Logo required?'] === 'No') {
        btnElement = document.getElementById('logoElement').style.display = 'none';
        // this.C1ClippediframeCode = `
        // <h3 class="pb-1">${this.c1clippedData.data.parameterValues['DE:Headline']}</h3>
        // <p class="pb-2">${this.c1clippedData.data.parameterValues['DE:Sub-Headline']}</p>`;
        // console.log('this is iframecode: ' + this.C1ClippediframeCode );

      } else if (this.c1clippedData.data.parameterValues['DE:Logo required?'] === 'Yes') {
        btnElement = document.getElementById('logoElement').style.display = 'inline';
        // this.C1ClippediframeCode = `
        // <h3 class="pb-1">${this.c1clippedData.data.parameterValues['DE:Headline']}</h3>
        // <p class="pb-2">${this.c1clippedData.data.parameterValues['DE:Sub-Headline']}</p>
        // <a href="${this.c1clippedData.data.parameterValues['DE:CTA URL']}" class="btn btn--default">${this.c1clippedData.data.parameterValues['DE:CTA Text']}</a>`;
      }

      this.C1ClippediframeCode = $('#clp-product-ad').parent().html();
      this.C1ClippediframeCode = this.getScript(this.C1ClippediframeCode);

      this.insertCodeBlock(this.C1ClippediframeCode);

    } catch (err) { }

  }

  insertGlobalcss(css: string): void {
    $('.C1Clipped-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.C1Clipped-iframe').contents().find('#C1ClippedHTML').html(code);
  }

 /*  insertbg(img1: string, img2: string): void {
    const C1Clippedbg = $('.C1Clipped-iframe');
    const defaultImage = 'https://images.americanhotel.com/images/banners/C1Clipped-placeholder-widescreen.jpg';
    if (img1 !== '' && img2 !== '') {
      C1Clippedbg.contents().find('#C1Clippedbg').attr('src', img1);
      C1Clippedbg.contents().find('#C1ClippedDesktop').attr('srcset', img1);
      C1Clippedbg.contents().find('#C1ClippedMobile').attr('srcset', img2);
    } else {
      C1Clippedbg.contents().find('#C1Clippedbg').attr('src', defaultImage);
      C1Clippedbg.contents().find('#C1ClippedDesktop').attr('srcset', defaultImage);
      C1Clippedbg.contents().find('#C1ClippedMobile').attr('srcset', defaultImage);
    }
  } */

  insertLogo(logo: string): void {
    $('.C1Clipped-iframe').contents().find('#C1Clippedlogo').attr('src', logo);
    // if (this.c1clippedData.data.parameterValues['DE:Logo required?'] === 'No') {
    //   $('.C1Clipped-iframe').contents().find('#C1Clippedlogo').hide();
    //   this.comment($('.C1Clipped-template').find('.logo'), '<!--<div alt="" class="c1clipped-supplier-logo">', '</div>-->');

    // } else if (this.c1clippedData.data.parameterValues['DE:Logo required?'] === 'Yes') {
    //   $('.C1Clipped-iframe').contents().find('#C1Clippedlogo').show();
    //   $('.C1Clipped-iframe').contents().find('#C1Clippedlogo').attr('src', logo);
    // }
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

}

