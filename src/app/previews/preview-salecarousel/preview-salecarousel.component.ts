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
export class PreviewSaleCarouselComponent implements DoCheck {
  @Input() salecarouselData: SaleCarouselData;
  color = 'RED';

  constructor(private snackBar: MatSnackBar) { }
  ngDoCheck(): void {
    this.color = this.salecarouselData.data.parameterValues['DE:Headline Color'].toUpperCase();
  }
 
  /* Copy code */
    onCopy(codeType) {
      const code = $('code#impex-code').text();
      copy(code);
    }

    onDownload(filename, type) {
        const impex = $('code#impex-code').text();
        download(filename, impex);
    }

}
