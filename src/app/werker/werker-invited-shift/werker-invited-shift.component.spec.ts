import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerInvitedShiftPage } from './werker-invited-shift.page';

describe('WerkerInvitedShiftPage', () => {
  let component: WerkerInvitedShiftPage;
  let fixture: ComponentFixture<WerkerInvitedShiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerInvitedShiftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerInvitedShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
