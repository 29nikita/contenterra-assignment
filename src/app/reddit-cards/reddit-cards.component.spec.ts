import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCardsComponent } from './reddit-cards.component';

describe('RedditCardsComponent', () => {
  let component: RedditCardsComponent;
  let fixture: ComponentFixture<RedditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
