import { Component, OnInit, Input } from '@angular/core';
import { SaleCarouselData } from 'src/app/models/SaleCarouselData';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-form-salecarousel',
  templateUrl: './form-salecarousel.component.html',
  styleUrls: ['./form-salecarousel.component.css']
})
export class FormSalecarouselComponent implements OnInit {
  @Input() salecarouselData: SaleCarouselData;

  constructor() { }

  ngOnInit() {
 
  }

  onChangeHeadline() {
    if (this.salecarouselData.data.parameterValues['DE:Custom headline?'] === 'No') {
      this.salecarouselData.data.parameterValues['DE:Custom Headline'] = 'Featured Sales';
    }
  }
}
