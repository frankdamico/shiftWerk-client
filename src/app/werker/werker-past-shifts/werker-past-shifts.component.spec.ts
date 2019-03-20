import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerPastShiftsPage } from './werker-past-shifts.page';

describe('WerkerPastShiftsPage', () => {
  let component: WerkerPastShiftsPage;
  let fixture: ComponentFixture<WerkerPastShiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerPastShiftsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerPastShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
