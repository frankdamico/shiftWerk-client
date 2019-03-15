import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavbarPage } from './user-navbar.page';

describe('UserNavbarPage', () => {
  let component: UserNavbarPage;
  let fixture: ComponentFixture<UserNavbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
