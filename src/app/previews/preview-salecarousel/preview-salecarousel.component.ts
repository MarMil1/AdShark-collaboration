import { Component, ViewEncapsulation, Input, DoCheck } from '@angular/core';
import { SaleCarouselData } from 'src/app/models/SaleCarouselData';
import { ISaleCarouselIframe } from 'src/app/interfaces/ISaleCarouselIframe';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';

declare const download: any;
declare const copy: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-preview-SaleCarousel',
  templateUrl: './preview-salecarousel.component.html',
  styleUrls: ['./preview-salecarousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewSaleCarouselComponent implements DoCheck, ISaleCarouselIframe {
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }
  @Input() salecarouselData: SaleCarouselData;

  SaleCarouseliframeCode: string;
  outputCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) { }


  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  generateCode() {
    try {
      const tmp = $('.SaleCarousel-template').html();

      this.outputCode = tmp;

      this.SaleCarouseliframeCode = $('.text-wrap').html();
      this.insertCodeBlock(this.SaleCarouseliframeCode);

    } catch (err) {}
  }

  insertGlobalcss(css: string): void {
    $('.SaleCarousel-iframe').contents().find('#globalcss').html(css);
  }
  insertCodeBlock(code: string): void {
    $('.SaleCarousel-iframe').contents().find('#SaleCarouselHTML').html(code);
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
