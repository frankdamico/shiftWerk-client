import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerHomePage } from './werker-home.page';

describe('WerkerHomePage', () => {
  let component: WerkerHomePage;
  let fixture: ComponentFixture<WerkerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
