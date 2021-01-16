import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { LevelsComponent } from './levels/levels.component';
import { PlayComponent } from './play/play.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      { path: 'levels', component: LevelsComponent },
      { path: 'play', component: PlayComponent },
      { path: 'stats', component: StatsComponent },
      { path: '', redirectTo: 'levels', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
