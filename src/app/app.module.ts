import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayGameComponent } from './pages/play-game/play-game';
import { FormsModule } from '@angular/forms';
import { ButtonRestartComponent } from './component/button-restart/button-restart.component';
import { GameObjectiveComponent } from './component/game-objective/game-objective.component';
import { LogoComponent } from './component/logo/logo.component';
import { AttemptComponent } from './component/attempt/attempt.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent,
    ButtonRestartComponent,
    GameObjectiveComponent,
    LogoComponent,
    AttemptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
