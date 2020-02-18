import { Component, OnInit, Input, DoCheck, ViewEncapsulation } from '@angular/core';
import { FeaturedBrandsData } from 'src/app/models/FeaturedBrandsData';
import { IFeaturedBrandsIframe } from 'src/app/interfaces/IFeaturedBrandsIframe';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';

declare const download: any;
declare const copy: any;
declare var $: any;


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-preview-featuredBrands',
  templateUrl: './preview-featuredBrands.component.html',
  styleUrls: ['./preview-featuredBrands.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewFeaturedBrandsComponent implements IFeaturedBrandsIframe, DoCheck {
  @Input() featuredBrandsData: FeaturedBrandsData;
  featuredBrandsiframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) { }

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    this.insertHeadline(this.featuredBrandsData.data.parameterValues['DE:Custom Headline']);
    this.insertProductImages();
    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  generateCode() {
    try {
      let tmp: string;
      let script: string;
      tmp = $('.featuredBrands-template').html();
      script = this.css.getFeaturedBrandsScript();
      this.outputCode = this.css.getFeaturedBrandsCSS() + tmp + script;
      this.impexCode = tmp.replace(/"/g, '""') + '\n' + this.css.getFeaturedBrandsCSS() + '\n' + script;

    } catch (err) {}
  }

  insertGlobalcss(css: string): void {
    $('.featuredBrands-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.featuredBrands-iframe').contents().find('#featuredBrandsHTML').html(code);
  }

  insertHeadline(headline: string): void {
    $('.featuredBrands-iframe').contents().find('.container').find('h4').text(headline);
  }

  insertProductImages(): void {
    $('.featuredBrands-iframe').contents().find('#featured-img1').find('img').attr('src', this.featuredBrandsData.data.parameterValues['DE:Logo 1 Image Path']);
    $('.featuredBrands-iframe').contents().find('#featured-img2').find('img').attr('src', this.featuredBrandsData.data.parameterValues['DE:Logo 2 Image Path']);
    $('.featuredBrands-iframe').contents().find('#featured-img3').find('img').attr('src', this.featuredBrandsData.data.parameterValues['DE:Logo 3 Image Path']);
    $('.featuredBrands-iframe').contents().find('#featured-img4').find('img').attr('src', this.featuredBrandsData.data.parameterValues['DE:Logo 4 Image Path']);
    $('.featuredBrands-iframe').contents().find('#featured-img5').find('img').attr('src', this.featuredBrandsData.data.parameterValues['DE:Logo 5 Image Path']);

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
