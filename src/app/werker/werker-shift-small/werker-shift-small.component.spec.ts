import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerShiftSmallPage } from './werker-shift-small.page';

describe('WerkerShiftSmallPage', () => {
  let component: WerkerShiftSmallPage;
  let fixture: ComponentFixture<WerkerShiftSmallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerShiftSmallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerShiftSmallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
