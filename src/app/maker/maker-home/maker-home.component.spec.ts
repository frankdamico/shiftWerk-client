import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerHomePage } from './maker-home.page';

describe('MakerHomePage', () => {
  let component: MakerHomePage;
  let fixture: ComponentFixture<MakerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
