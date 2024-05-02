import { Component } from '@angular/core';

@Component({
  selector: 'app-cycle-info',
  templateUrl: './cycle-info.component.html',
  styleUrl: './cycle-info.component.css'
})
export class CycleInfoComponent {

  day: number = 5;
  phase: string;
  exercise: string;
  nutrition: string;
  fast: number;

  ngOnInit(): void {
    this.getCycleInfo(this.day);
    this.getFasting(this.day);
  }

  getCycleInfo(day: number) {
    if(day > 0 && day < 11) {
      this.phase = "Power Phase 1";
      this.exercise = "High Intensity";
      this.nutrition = "Ketobiotic"
    } else if(day > 10 && day < 16) {
      this.phase = "Manifestation"
      this.exercise = "Strength";
      this.nutrition = "Hormone Feasting"
    } else if(day > 15 && day < 20) {
      this.phase = "Power Phase 2"
      this.exercise = "High Intensity";
      this.nutrition = "Ketobiotic"
    } else if(day > 20) {
      this.phase = "Nurture"
      this.exercise = "Light";
      this.nutrition = "Hormone Feasting"
    } else {
      this.phase = ""
      this.exercise = "";
      this.nutrition = ""
    }
  }

  getFasting(day: number) {
    if((day > 0 && day <5) || (day > 10  && day < 16)){
      this.fast = 13;
    } else if(day == 5 || (day > 15 && day < 20)) {
      this.fast = 17;
    } else if(day > 5 && day < 11) {
      this.fast = 17;
    } else {
      this.fast = 0;
    }
  }
}
