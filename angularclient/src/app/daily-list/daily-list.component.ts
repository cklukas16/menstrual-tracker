import { Component, Input, OnInit } from '@angular/core';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrl: './daily-list.component.css'
})
export class DailyListComponent implements OnInit{

  dailyList: Daily[];
  dailyEntry: Daily;

  // *************
  date: String;

  constructor(private dailyService: DailyService) {
    
  }

  ngOnInit(): void {
      this.dailyService.findAll().subscribe(data => {
        this.dailyList = data;
      });
  }

  // *************
  getSelectedDate(){
  }
  
}
