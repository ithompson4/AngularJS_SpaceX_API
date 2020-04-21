import { Component, OnInit } from '@angular/core';
import { RocketsService } from '../services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rocketsTitle: string = "SpaceX Rockets";
  rocket: any;
  rocketsCallError: any;
  public loading = true;

  constructor(private rocketsService: RocketsService) { }

  ngOnInit() {
    this.rocketsService.getRockets().subscribe((rockets) => {
      setTimeout(() => {
        this.rocket = rockets;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.rocketsCallError = error;
    });
  }
  
}