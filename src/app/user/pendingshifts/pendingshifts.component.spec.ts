import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingshiftsPage } from './pendingshifts.page';

describe('PendingshiftsPage', () => {
  let component: PendingshiftsPage;
  let fixture: ComponentFixture<PendingshiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingshiftsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingshiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
