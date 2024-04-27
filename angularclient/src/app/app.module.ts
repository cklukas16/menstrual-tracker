import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailyListComponent } from './daily-list/daily-list.component';
import { DailyFormComponent } from './daily-form/daily-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DailyService } from './service/daily.service';
import { DailyEditComponent } from './daily-edit/daily-edit.component';
import { ViewDayComponent } from './view-day/view-day.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyListComponent,
    DailyFormComponent,
    DailyEditComponent,
    ViewDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DailyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
