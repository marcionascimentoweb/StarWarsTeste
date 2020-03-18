import { TestBed } from '@angular/core/testing';

import { GeonosisService } from './geonosis.service';

describe('GeonosisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeonosisService = TestBed.get(GeonosisService);
    expect(service).toBeTruthy();
  });
});
