import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerUnfilledShiftCondensedPage } from './maker-unfilled-shift-condensed.page';

describe('MakerUnfilledShiftCondensedPage', () => {
  let component: MakerUnfilledShiftCondensedPage;
  let fixture: ComponentFixture<MakerUnfilledShiftCondensedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerUnfilledShiftCondensedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerUnfilledShiftCondensedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
