import { Component, OnInit } from '@angular/core';
import{ MatchOverviewService } from './match-overview.service';
import { Game } from '../Game';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {

  games!:Game[];
  flagUrl: string;
  constructor(private service: MatchOverviewService) {
    this.flagUrl = "https://countryflagsapi.com/png/";
  }

  ngOnInit(): void {

  }

  getGames() {
    this.service.getGames().subscribe((response:Game[]) => {
      this.games = response;
    });
  }
}
