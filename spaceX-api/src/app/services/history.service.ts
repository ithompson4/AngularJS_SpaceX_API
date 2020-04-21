import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistory() {
    return this.http.get('https://api.spacexdata.com/v3/history');
  }
}