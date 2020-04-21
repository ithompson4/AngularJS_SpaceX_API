import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  aboutTitle: string = "About SpaceX API Project";
  aboutItem: any;
  aboutCallError: any;
  public loading = true;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((about) => {
      setTimeout(() => {
        this.aboutItem = about;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.aboutCallError = error;
    });
  }

}