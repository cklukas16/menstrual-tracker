import { Component, Input, OnInit } from '@angular/core';
import { Daily } from '../model/daily';
import { DailyService } from '../service/daily.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-daily-edit',
  templateUrl: './daily-edit.component.html',
  styleUrl: './daily-edit.component.css'
})
export class DailyEditComponent implements OnInit{

  date: string = "";
  dailyList: Daily[];
  dailyEntry: Daily;

  constructor(private dailyService: DailyService, private route: ActivatedRoute, private router: Router){
      this.dailyEntry = new Daily();
  }

  ngOnInit(): void {
    this.getDailyByParamDate();
    this.getDaily();
  }

  // Get the date from the URL param
  getDailyByParamDate(){
    // ! Let's TypeScript know the param will never be null. 
    // This resolves a type mismatch error between string and string | null.
    this.date = this.route.snapshot.paramMap.get('date')!;
    console.log(this.date);
  }

  // Get the daily record corresponding with the URL param date
  getDaily(){
    this.dailyService.findDate(this.date).subscribe(daily => {
      this.dailyList = daily;
      this.dailyEntry = this.dailyList[0];
      console.log(this.dailyEntry);
    })
  }

  onSubmit(){
    this.dailyService.update(this.dailyEntry, this.dailyEntry.id).subscribe(result => this.gotoDailyList());
  }

  gotoDailyList(){
    this.router.navigate(['/allDaily']);
  }
}
