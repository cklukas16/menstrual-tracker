import { Component } from '@angular/core';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-daily-form',
  templateUrl: './daily-form.component.html',
  styleUrl: './daily-form.component.css'
})
export class DailyFormComponent {

  daily: Daily;
  today: Date;

  constructor(private route: ActivatedRoute, private router: Router, private dailyService: DailyService) {

    this.daily = new Daily();
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
  }

  onSubmit() {
    if (Date.parse(this.daily.date.toString()) > Date.parse(this.today.toString())) {
      window.alert("The selected date is in the future. Please choose a current or previous date.");
    }
    else {
      this.dailyService.save(this.daily).subscribe(next => this.gotoDailyList(),
        err => {
          if (err instanceof HttpErrorResponse) {
            const errorMessage = new Array<{ propName: string; errors: string }>();

            if (err.status === 406) {
              window.alert("An entry for this date already exists.")
            }
          }
        });
    }
  }

  gotoDailyList() {
    this.router.navigate(['/allDaily']);
  }

}
