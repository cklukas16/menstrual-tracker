import { Component } from '@angular/core';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.dailyService.save(this.daily).subscribe(result => this.gotoDailyList());
  }

  gotoDailyList(){
    this.router.navigate(['/allDaily']);
  }

}
