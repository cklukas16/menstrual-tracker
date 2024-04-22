import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyListComponent } from './daily-list/daily-list/daily-list.component';
import { DailyFormComponent } from './daily-form/daily-form/daily-form.component';

export const routes: Routes = [
    { path: 'allDaily', component: DailyListComponent },
    { path: 'addDaily', component: DailyFormComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
