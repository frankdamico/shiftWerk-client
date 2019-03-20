import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerUpcomingShiftPage } from './werker-upcoming-shift.page';

describe('WerkerUpcomingShiftPage', () => {
  let component: WerkerUpcomingShiftPage;
  let fixture: ComponentFixture<WerkerUpcomingShiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerUpcomingShiftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerUpcomingShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
