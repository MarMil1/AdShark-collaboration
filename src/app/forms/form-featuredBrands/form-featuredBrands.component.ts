import { Component, OnInit, Input } from '@angular/core';
import { FeaturedBrandsData } from 'src/app/models/FeaturedBrandsData';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-form-featuredBrands',
  templateUrl: './form-featuredBrands.component.html',
  styleUrls: ['./form-featuredBrands.component.css']
})
export class FormFeaturedBrandsComponent implements OnInit {
  @Input() featuredBrandsData: FeaturedBrandsData;

  constructor() { }

  ngOnInit() {
  }

  onChangeHeadline() {
    if (this.featuredBrandsData.data.parameterValues['DE:Custom headline?'] === 'No') {
       this.featuredBrandsData.data.parameterValues['DE:Custom Headline'] = 'Featured Brands';
    }
  }

}
