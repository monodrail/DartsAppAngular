import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { MatchScreenComponent } from './match-screen/match-screen.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { PlayerOverviewComponent } from './player-overview/player-overview.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    MatchScreenComponent,
    MatchOverviewComponent,
    PlayerOverviewComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
