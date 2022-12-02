import { TestBed } from '@angular/core/testing';

import { MDataService } from './m-data.service';

describe('MDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MDataService = TestBed.get(MDataService);
    expect(service).toBeTruthy();
  });
});
