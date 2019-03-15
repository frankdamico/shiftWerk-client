import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerUnfilledShiftsPage } from './maker-history-shifts.page';

describe('MakerHistoryShiftsPage', () => {
  let component: MakerHistoryShiftsPage;
  let fixture: ComponentFixture<MakerHistoryShiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerHistoryShiftsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerHistoryShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
