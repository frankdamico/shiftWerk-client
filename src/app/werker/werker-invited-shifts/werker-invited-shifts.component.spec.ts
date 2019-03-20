import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerInvitedShiftsPage } from './werker-invited-shifts.page';

describe('WerkerInvitedShiftsPage', () => {
  let component: WerkerInvitedShiftsPage;
  let fixture: ComponentFixture<WerkerInvitedShiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerInvitedShiftsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerInvitedShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
