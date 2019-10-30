import { Component, OnInit, Input } from '@angular/core';
import { D1Data } from 'src/app/models/D1Data';

@Component({
  selector: 'app-form-D1',
  templateUrl: './form-D1.component.html',
  styleUrls: ['./form-D1.component.css']
})
export class FormD1Component implements OnInit {
  @Input() d1Data: D1Data;

  constructor() { }

  ngOnInit() {
  }

}
