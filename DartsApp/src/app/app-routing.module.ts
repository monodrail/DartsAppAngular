import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from "./create-game/create-game.component";
import { MainComponent } from './main/main.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';

const routes: Routes = [
  { path: 'main.component', component: MainComponent },
  { path: 'create-game.component', component: CreateGameComponent },
  { path: 'match-overview.component', component: MatchOverviewComponent },
  { path: 'player-overview.component', component: PlayerOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
