import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    NavbarComponent
  ]
})
export class SharedModule { }
