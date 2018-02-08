import { TestBed, inject } from '@angular/core/testing';

import { CcontextService } from './ccontext.service';

describe('CcontextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CcontextService]
    });
  });

  it('should be created', inject([CcontextService], (service: CcontextService) => {
    expect(service).toBeTruthy();
  }));
});
