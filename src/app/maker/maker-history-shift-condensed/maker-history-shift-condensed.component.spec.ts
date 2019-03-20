import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerHistoryShiftCondensedPage } from './maker-history-shift-condensed.page';

describe('MakeHistoryrShiftCondensedPage', () => {
  let component: MakerHistoryShiftCondensedPage;
  let fixture: ComponentFixture<MakerHistoryShiftCondensedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerHistoryShiftCondensedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerHistoryShiftCondensedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
