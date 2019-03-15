import { TestBed } from '@angular/core/testing';

import { MakerService } from './maker.service';

describe('MakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakerService = TestBed.get(MakerService);
    expect(service).toBeTruthy();
  });
});
