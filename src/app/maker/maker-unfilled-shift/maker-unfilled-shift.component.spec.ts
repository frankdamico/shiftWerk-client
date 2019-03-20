import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerUnfilledShiftPage } from './maker-unfilled-shift.page';

describe('MakerUnfilledShiftPage', () => {
  let component: MakerUnfilledShiftPage;
  let fixture: ComponentFixture<MakerUnfilledShiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerUnfilledShiftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerUnfilledShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
