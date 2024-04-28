import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyListComponent } from './daily-list/daily-list.component';
import { DailyFormComponent } from './daily-form/daily-form.component';
import { DailyEditComponent } from './daily-edit/daily-edit.component';
import { ViewDayComponent } from './view-day/view-day.component';

const routes: Routes = [
  { path: 'allDaily', component: DailyListComponent },
  { path: 'addDaily', component: DailyFormComponent }, 
  { path: 'editDaily', component: DailyEditComponent},
  { path: 'viewDay', component: ViewDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
