import { TestBed } from '@angular/core/testing';

import { FortniteService } from './fortnite.service';

describe('FortniteService', () => {
  let service: FortniteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortniteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
