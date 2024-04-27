import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-day',
  templateUrl: './view-day.component.html',
  styleUrl: './view-day.component.css'
})
export class ViewDayComponent {

  today: NgbDateStruct;
  selectedDay: NgbDateStruct;
  convertedDay: String;

  //defaults datePicker to today
  constructor() {
    const today = new Date();
    this.today = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
  }

  //converts date to string & sends request to backend
  onDateSelect(selectedDay: NgbDateStruct) {
    this.selectedDay = selectedDay;
    this.convertedDay = `${this.selectedDay.year}-${this.selectedDay.month}-${this.selectedDay.day}`
  }

}
