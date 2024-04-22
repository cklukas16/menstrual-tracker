import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DailyListComponent } from './daily-list/daily-list/daily-list.component';
import { DailyFormComponent } from './daily-form/daily-form/daily-form.component';
import { DailyService } from './service/daily.service';

@NgModule({
  declarations: [
    AppComponent,
    DailyListComponent,
    DailyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DailyService],
  bootstrap: [AppComponent]
})
export class AppModule { }