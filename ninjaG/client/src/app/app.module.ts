import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HouseComponent } from './house/house.component';
import { CaveComponent } from './cave/cave.component';
import { FarmComponent } from './farm/farm.component';
import { CasinoComponent } from './casino/casino.component';
import { ScoresComponent } from './scores/scores.component';
import { LogComponent } from './log/log.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    CaveComponent,
    FarmComponent,
    CasinoComponent,
    ScoresComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
