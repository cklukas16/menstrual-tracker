import { Component, Input, OnInit } from '@angular/core';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';

@Component({
  selector: 'app-daily-edit',
  templateUrl: './daily-edit.component.html',
  styleUrl: './daily-edit.component.css'
})
export class DailyEditComponent implements OnInit{

  @Input() id: number = 0;
  daily: Daily;

  constructor(private dailyService: DailyService){
      this.daily = new Daily();
  }

  ngOnInit(): void {
    this.getDaily();
  }

  getDaily(){
    this.dailyService.findByID(this.id).subscribe(daily => {
      this.daily = daily;
    })
  }
}
