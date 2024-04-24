import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Daily } from '../model/daily';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  private dailyUrl: string;

  constructor(private http: HttpClient) {
    this.dailyUrl = 'http://localhost:8080/api/daily';
  }

  public findAll(): Observable<Daily[]> {
    return this.http.get<Daily[]>(this.dailyUrl);
  }

  public save(daily: Daily) {
    return this.http.post<Daily>(this.dailyUrl, daily);
  }
}