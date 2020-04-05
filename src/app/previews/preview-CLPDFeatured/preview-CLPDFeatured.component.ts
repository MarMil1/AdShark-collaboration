import { Component, Input, DoCheck, ViewEncapsulation } from '@angular/core';
import { CLPDFeaturedData } from 'src/app/models/CLPDFeaturedData';
import { MatSnackBar } from '@angular/material';

declare const download: any;
declare const copy: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-preview-CLPDFeatured',
  templateUrl: './preview-CLPDFeatured.component.html',
  styleUrls: ['./preview-CLPDFeatured.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewCLPDFeaturedComponent implements DoCheck {
  @Input() clpDFeaturedData: CLPDFeaturedData;
  color = 'RED';

  constructor(private snackBar: MatSnackBar) { }
  ngDoCheck(): void {
    this.color = this.clpDFeaturedData.data.parameterValues['DE:Headline Color'].toUpperCase();
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
