import { TestBed } from '@angular/core/testing';

import { EduDataService } from './edu-data.service';

describe('EduDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EduDataService = TestBed.get(EduDataService);
    expect(service).toBeTruthy();
  });
});
