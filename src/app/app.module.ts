import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayGameComponent } from './pages/play-game/play-game';
import { FormsModule } from '@angular/forms';
import { ButtonRestartComponent } from './components/button-restart/button-restart.component';
import { GameObjectiveComponent } from './components/game-objective/game-objective.component';
import { LogoComponent } from './components/logo/logo.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AttemptConfigComponent } from './components/attempt-config/attempt-config.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent,
    ButtonRestartComponent,
    GameObjectiveComponent,
    LogoComponent,
    AttemptComponent,
    HeaderComponent,
    FooterComponent,
    AttemptConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
