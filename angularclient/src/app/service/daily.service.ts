import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Daily } from '../model/daily';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  private dailyUrl: string;
  private dateUrl: string;

  constructor(private http: HttpClient) {
    this.dailyUrl = 'http://localhost:8080/api/daily';
    this.dateUrl = 'http://localhost:8080/api/daily/filter/'
  }

  public findAll(): Observable<Daily[]> {
    return this.http.get<Daily[]>(this.dailyUrl);
  }

  public findDate(date: string): Observable<Daily[]> {
    return this.http.get<Daily[]>(`${this.dateUrl}${date}`);
  }

  public save(daily: Daily) {
    return this.http.post<Daily>(this.dailyUrl, daily);
  }

  public update(daily: Daily, id: number){
    return this.http.post<Daily>(`${this.dailyUrl}${id}`, daily);
  }

}