import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house/house.component';
import { CaveComponent } from './cave/cave.component';
import { FarmComponent } from './farm/farm.component';
import { CasinoComponent } from './casino/casino.component';
import { ScoresComponent } from './scores/scores.component';
import { LogComponent } from './log/log.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'house', component: HouseComponent},
  { path: 'cave', component: CaveComponent},
  { path: 'farm', component: FarmComponent},
  { path: 'casino', component: CasinoComponent},
  { path: 'log', component: LogComponent},
  { path: 'scores', component: ScoresComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
   RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
