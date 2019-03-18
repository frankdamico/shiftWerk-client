import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerSearchBarPage } from './maker-search-bar.page';

describe('MakerSearchPage', () => {
  let component: MakerSearchBarPage;
  let fixture: ComponentFixture<MakerSearchBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerSearchBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerSearchBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
