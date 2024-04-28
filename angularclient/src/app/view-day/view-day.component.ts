import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';

@Component({
  selector: 'app-view-day',
  templateUrl: './view-day.component.html',
  styleUrl: './view-day.component.css'
})
export class ViewDayComponent implements OnInit {

  dailyList: Daily[];
  dailyInfo: Daily;
  today: NgbDateStruct;
  selectedDay: NgbDateStruct;
  javaDate: string;

  //defaults datePicker to today
  constructor(private dailyService: DailyService) {
    const today = new Date();
    this.today = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
  }

  ngOnInit(): void {
      this.convertDate(this.today)
      this.dailyService.findDate(this.javaDate).subscribe(data => {
        this.dailyList = data
        this.dailyInfo = this.dailyList[0]
        console.log(this.dailyInfo)
      });
  }

  //converts date to string & sends request to backend
  onDateSelect(selectedDay: NgbDateStruct) {
    this.selectedDay = selectedDay;
    this.convertDate(this.selectedDay)
    this.dailyService.findDate(this.javaDate).subscribe(data => {
      this.dailyList = data
      this.dailyInfo = this.dailyList[0]
      console.log(this.dailyInfo)
    });

  }

  //convert NgbDateStruct to Java LocalDate format
  convertDate(ngbDate: NgbDateStruct) {
    const year = ngbDate.year;
    const month = ngbDate.month.toString().padStart(2,"0");
    const day = ngbDate.day.toString().padStart(2,"0");
    this.javaDate = `${year}-${month}-${day}`;
    return this.javaDate;
  }

}
