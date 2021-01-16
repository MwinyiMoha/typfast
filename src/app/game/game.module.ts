import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { LevelsComponent } from './levels/levels.component';

@NgModule({
  declarations: [GameComponent, LevelsComponent],
  imports: [
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }
