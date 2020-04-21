import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) { }

  getRockets() {
    return this.http.get('https://api.spacexdata.com/v3/rockets');
  }

  getSingleRocket(rocket_id) {
    return this.http.get('https://api.spacexdata.com/v3/rockets/' + rocket_id);
  }
  
}