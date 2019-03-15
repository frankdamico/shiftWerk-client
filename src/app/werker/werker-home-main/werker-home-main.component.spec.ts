import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerHomeMainPage } from './werker-home-main.page';

describe('WerkerHomeMainPage', () => {
  let component: WerkerHomeMainPage;
  let fixture: ComponentFixture<WerkerHomeMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerHomeMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerHomeMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
