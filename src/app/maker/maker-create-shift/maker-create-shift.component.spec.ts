import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerCreateShiftPage } from './maker-create-shift.page';

describe('MakerCreateShiftPage', () => {
  let component: MakerCreateShiftPage;
  let fixture: ComponentFixture<MakerCreateShiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerCreateShiftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerCreateShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
