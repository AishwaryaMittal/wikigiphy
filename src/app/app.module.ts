import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WikiService } from './wiki.service';
import { HistoryService } from './history.service';
import { GiphyService } from './giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WikiService, HistoryService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
