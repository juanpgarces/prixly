import { TestBed } from '@angular/core/testing';

import { PrixlyDataService } from './prixly-data.service';

describe('PrixlyDataService', () => {
  let service: PrixlyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrixlyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
