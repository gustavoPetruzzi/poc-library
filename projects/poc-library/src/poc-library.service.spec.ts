import { TestBed } from '@angular/core/testing';

import { PocLibraryService } from './poc-library.service';

describe('PocLibraryService', () => {
  let service: PocLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
