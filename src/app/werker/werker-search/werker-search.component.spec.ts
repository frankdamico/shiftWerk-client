import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerSearchPage } from './werker-search.page';

describe('WerkerSearchPage', () => {
  let component: WerkerSearchPage;
  let fixture: ComponentFixture<WerkerSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
