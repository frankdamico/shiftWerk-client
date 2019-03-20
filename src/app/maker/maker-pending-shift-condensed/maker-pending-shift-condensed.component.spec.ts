import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerPendingShiftCondensedPage } from './maker-pending-shift-condensed.page';

describe('MakerPendingShiftCondensedPage', () => {
  let component: MakerPendingShiftCondensedPage;
  let fixture: ComponentFixture<MakerPendingShiftCondensedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerPendingShiftCondensedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerPendingShiftCondensedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
