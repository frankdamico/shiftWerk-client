import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerSchedulePage } from './maker-schedule.page';

describe('MakerSchedulePage', () => {
  let component: MakerSchedulePage;
  let fixture: ComponentFixture<MakerSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
