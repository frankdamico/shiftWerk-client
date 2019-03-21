import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerNotificationPage } from './maker-notification.page';

describe('MakerNotificationPage', () => {
  let component: MakerNotificationPage;
  let fixture: ComponentFixture<MakerNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerNotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
