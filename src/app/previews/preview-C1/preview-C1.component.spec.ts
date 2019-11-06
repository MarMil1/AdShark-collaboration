/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreviewC1Component } from './preview-C1.component';

describe('PreviewC1Component', () => {
  let component: PreviewC1Component;
  let fixture: ComponentFixture<PreviewC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
