import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }
  
  getAbout() {
    return this.http.get('https://api.spacexdata.com/v3/info');
  }
}