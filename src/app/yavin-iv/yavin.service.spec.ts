import { TestBed } from '@angular/core/testing';

import { YavinService } from './yavin.service';

describe('YavinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YavinService = TestBed.get(YavinService);
    expect(service).toBeTruthy();
  });
});
