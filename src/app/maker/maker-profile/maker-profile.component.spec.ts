import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerProfilePage } from './maker-profile.page';

describe('MakerProfilePage', () => {
  let component: MakerProfilePage;
  let fixture: ComponentFixture<MakerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
