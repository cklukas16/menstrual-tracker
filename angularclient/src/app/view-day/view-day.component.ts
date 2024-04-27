import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Daily } from '../model/daily';

@Component({
  selector: 'app-view-day',
  templateUrl: './view-day.component.html',
  styleUrl: './view-day.component.css'
})
export class ViewDayComponent {

  today: NgbDateStruct;
  selectedDay: NgbDateStruct;
  // convertedDay: string;
  convertedDay: Date;
  dailyList: Daily[] = [];
  dailyInfo: Daily;
  

  //defaults datePicker to today
  constructor() {
    const today = new Date();
    this.today = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
  }

  ngOnInit(): void {
    // this.convertedDay = `${this.today.year}-${this.today.month}-${this.today.day}`
    this.convertedDay = new Date(this.today.year, this.today.month, this.today.day);
}

  //converts date to string & sends request to backend
  onDateSelect(selectedDay: NgbDateStruct) {
    this.selectedDay = selectedDay;
    this.convertedDay = new Date(this.selectedDay.year, this.selectedDay.month, this.selectedDay.day);
    this.findDailyInfo();
    
  }

  findDailyInfo(){
    this.dailyInfo = this.dailyList.filter(dailyInfo => dailyInfo.date === this.convertedDay)[0];
  }

}
