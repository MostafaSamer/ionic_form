import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPage } from './reg.page';

describe('RegPage', () => {
  let component: RegPage;
  let fixture: ComponentFixture<RegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
