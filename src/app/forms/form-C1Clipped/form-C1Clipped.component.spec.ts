/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormC1ClippedComponent } from './form-C1Clipped.component';

describe('FormC1ClippedComponent', () => {
  let component: FormC1ClippedComponent;
  let fixture: ComponentFixture<FormC1ClippedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormC1ClippedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormC1ClippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
