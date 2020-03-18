import { TestBed } from '@angular/core/testing';

import { AlderaanService } from './alderaan.service';

describe('AlderaanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlderaanService = TestBed.get(AlderaanService);
    expect(service).toBeTruthy();
  });
});
