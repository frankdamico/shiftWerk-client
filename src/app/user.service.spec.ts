import { TestBed } from '@angular/core/testing';

import { WerkerService } from './werker.service';

describe('WerkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WerkerService = TestBed.get(WerkerService);
    expect(service).toBeTruthy();
  });
});
