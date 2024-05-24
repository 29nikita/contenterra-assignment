import { TestBed } from '@angular/core/testing';

import { RedditCardsService } from './reddit-cards.service';

describe('RedditCardsService', () => {
  let service: RedditCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
