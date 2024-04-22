import { Component, OnInit } from '@angular/core';
import { Daily } from '../../model/daily';
import { DailyService } from '../../service/daily.service';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})

export class DailyListComponent implements OnInit {

  allDaily: Daily[] = [];

  constructor(private dailyService: DailyService) {
  }

  ngOnInit() {
    this.dailyService.findAll().subscribe(data => {
      this.allDaily = data;
    });
  }
}