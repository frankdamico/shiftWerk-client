import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkerProfilePage } from './werker-profile.page';

describe('WerkerProfilePage', () => {
  let component: WerkerProfilePage;
  let fixture: ComponentFixture<WerkerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkerProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
