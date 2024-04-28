import { Component } from '@angular/core';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-daily-form',
  templateUrl: './daily-form.component.html',
  styleUrl: './daily-form.component.css'
})
export class DailyFormComponent {

  daily: Daily;

  constructor(private route: ActivatedRoute, private router: Router, private dailyService: DailyService){

      this.daily = new Daily();
  }

  onSubmit(){
    this.dailyService.save(this.daily).subscribe(result => this.gotoDailyList(), 
      err => {
        if (err instanceof HttpErrorResponse){
          const errorMessage = new Array<{propName: string; errors: string}>();

          if (err.status ===406){
            window.alert("An entry for this date already exists.")
          }
        }
      });
  }

  gotoDailyList(){
    this.router.navigate(['/allDaily']);
  }

}
