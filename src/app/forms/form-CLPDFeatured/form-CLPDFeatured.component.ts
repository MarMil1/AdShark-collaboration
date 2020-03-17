import { Component, OnInit, Input } from '@angular/core';
import { CLPDFeaturedData } from 'src/app/models/CLPDFeaturedData';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-form-CLPDFeatured',
  templateUrl: './form-CLPDFeatured.component.html',
  styleUrls: ['./form-CLPDFeatured.component.css']
})
export class FormCLPDFeaturedComponent implements OnInit {
  @Input() clpDFeaturedData: CLPDFeaturedData;

  constructor() { }

  ngOnInit() {
  }

  onChangeHeadline() {
    if (this.clpDFeaturedData.data.parameterValues['DE:Custom headline?'] === 'No') {
      this.clpDFeaturedData.data.parameterValues['DE:Custom Headline'] = 'Featured Items';
    }
  }

}
