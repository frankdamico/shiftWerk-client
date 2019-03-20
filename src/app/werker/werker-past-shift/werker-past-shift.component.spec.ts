import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerPastShiftPage } from './werker-past-shift.page';

describe('WerkerPastShiftPage', () => {
  let component: WerkerPastShiftPage;
  let fixture: ComponentFixture<WerkerPastShiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerPastShiftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerPastShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
