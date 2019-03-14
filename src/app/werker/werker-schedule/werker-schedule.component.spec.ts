import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerSchedulePage } from './werker-schedule.page';

describe('WerkerSchedulePage', () => {
  let component: WerkerSchedulePage;
  let fixture: ComponentFixture<WerkerSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
