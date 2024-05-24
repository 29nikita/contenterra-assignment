import { Component, OnInit } from '@angular/core';
import { RedditCardsService } from './reddit-cards.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as he from 'he';

@Component({
  selector: 'app-reddit-cards',
  templateUrl: './reddit-cards.component.html',
  styleUrls: ['./reddit-cards.component.css']
})
export class RedditCardsComponent implements OnInit {
  resp: any;
  sanitizedHtmlContents!: SafeHtml[];
  sanitizer: any;
  p: number = 1;

  constructor(private service: RedditCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(){
    this.service.getData().subscribe((response) => {
      this.resp = response.data.children;
      this.decodeHtmlEntities();
    })
  }

  decodeHtmlEntities(): void {
    this.sanitizedHtmlContents = this.resp.map((child: { data: { selftext_html: any; }; }) => {
      const decodedHtml = he.decode(child.data.selftext_html); // Decode HTML entities
      return this.sanitizer.bypassSecurityTrustHtml(decodedHtml); // Sanitize and return as SafeHtml
    });
  }

}
