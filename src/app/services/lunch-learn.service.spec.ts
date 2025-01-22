import { TestBed } from '@angular/core/testing';

import { LunchLearnService } from './lunch-learn.service';

describe('LunchLearnService', () => {
  let service: LunchLearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunchLearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
