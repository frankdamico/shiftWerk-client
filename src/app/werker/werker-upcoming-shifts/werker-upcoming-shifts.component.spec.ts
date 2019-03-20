import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerUpcomingShiftsPage } from './werker-upcoming-shifts.page';

describe('WerkerUpcomingShiftsPage', () => {
  let component: WerkerUpcomingShiftsPage;
  let fixture: ComponentFixture<WerkerUpcomingShiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerUpcomingShiftsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerUpcomingShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
