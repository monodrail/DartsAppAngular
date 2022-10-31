import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../Game';

@Injectable({
  providedIn: 'root'
})
export class MatchOverviewService {
  private url = "https://localhost:44308/Games";

  constructor(private httpClient: HttpClient) { }

  getGames() {
    return this.httpClient.get<Game[]>(this.url);
  }
}
