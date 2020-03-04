import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { C1ClippedData } from 'src/app/models/C1ClippedData';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-C1Clipped',
  templateUrl: './form-C1Clipped.component.html',
  styleUrls: ['./form-C1Clipped.component.css']
})
export class FormC1ClippedComponent implements OnInit {
  @Input() c1clippedData: C1ClippedData;
  tempLogo = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLogo() {
    if (this.c1clippedData.data.parameterValues['DE:Logo required?'] === 'No') {
      this.tempLogo = this.c1clippedData.data.parameterValues['DE:Image path for logo'];
      this.c1clippedData.data.parameterValues['DE:Image path for logo'] = '';
    } else if (this.c1clippedData.data.parameterValues['DE:Logo required?'] === 'Yes') {
      this.c1clippedData.data.parameterValues['DE:Image path for logo'] = this.tempLogo;
    }
  }

}
