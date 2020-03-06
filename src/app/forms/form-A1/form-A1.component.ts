import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { A1Data } from 'src/app/models/A1Data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-A1',
  templateUrl: './form-A1.component.html',
  styleUrls: ['./form-A1.component.css']
})
export class FormA1Component implements OnInit {
  @Input() a1Data: A1Data;
  listofLogoSize = ['Small', 'Medium', 'Large'];
  tempLogo = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLogoSize() {
    console.log(`A1 Logo size: ${this.a1Data.data.parameterValues['DE:Logo Size A1/CLP']}`);
  }

  onChangeLogo() {
    if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      this.tempLogo = this.a1Data.data.parameterValues['DE:Image path for logo'];
      this.a1Data.data.parameterValues['DE:Image path for logo'] = '';
    } else if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'Yes') {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = this.tempLogo;
    }
  }

  onChangeCallout() {
    if ((this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale'
    || this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'No Sale')
    && this.a1Data.data.parameterValues['DE:Text for Sale Call-Out'] === '') {
      this.a1Data.data.parameterValues['DE:Text for Sale Call-Out'] = 'Call out goes here!';
    }
  }

  getBackgroundColor() {
    if (this.a1Data.data.parameterValues['DE:Background color behind text'] === 'White') {
      this.a1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
    } else {
      this.a1Data.data.parameterValues['DE:Hex #'] = '#9e876b';
    }
  }

}
