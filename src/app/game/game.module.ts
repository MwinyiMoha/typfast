import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { LevelsComponent } from './levels/levels.component';
import { PlayComponent } from './play/play.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [GameComponent, LevelsComponent, PlayComponent, StatsComponent],
  imports: [
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }
