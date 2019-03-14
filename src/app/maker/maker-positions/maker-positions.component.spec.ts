import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerPositionsPage } from './maker-positions.page';

describe('MakerPositionsPage', () => {
  let component: MakerPositionsPage;
  let fixture: ComponentFixture<MakerPositionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerPositionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerPositionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
