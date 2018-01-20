import { TestBed, inject } from '@angular/core/testing';

import { BsGlobalService } from './bs-global.service';

describe('BsGlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BsGlobalService]
    });
  });

  it('should be created', inject([BsGlobalService], (service: BsGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
