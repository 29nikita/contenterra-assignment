import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../ApiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditCardsService {
  redditUrl = "https://www.reddit.com/r/Angular2.json";

  constructor(private http: HttpClient) { }

  getData():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.redditUrl);
  }
}
