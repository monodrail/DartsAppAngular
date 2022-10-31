import { TestBed } from '@angular/core/testing';

import { MatchOverviewService } from './match-overview.service';

describe('MatchOverviewService', () => {
  let service: MatchOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
