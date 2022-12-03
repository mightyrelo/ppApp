import { TestBed } from '@angular/core/testing';

import { SmDataService } from './sm-data.service';

describe('SmDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmDataService = TestBed.get(SmDataService);
    expect(service).toBeTruthy();
  });
});
