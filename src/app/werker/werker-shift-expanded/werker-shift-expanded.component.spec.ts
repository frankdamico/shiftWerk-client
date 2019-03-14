import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerShiftExpandedPage } from './werker-shift-expanded.page';

describe('WerkerShiftExpandedPage', () => {
  let component: WerkerShiftExpandedPage;
  let fixture: ComponentFixture<WerkerShiftExpandedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerShiftExpandedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerShiftExpandedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
