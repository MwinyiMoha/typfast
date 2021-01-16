import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    SharedModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
