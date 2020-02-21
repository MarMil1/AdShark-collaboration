/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormFeaturedBrandsComponent } from './form-featuredBrands.component';

describe('FormFeaturedBrandsComponent', () => {
  let component: FormFeaturedBrandsComponent;
  let fixture: ComponentFixture<FormFeaturedBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFeaturedBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeaturedBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
