import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX API';

  parentData = this.title;
  childData: string;

  captureEmittedData(emittedData) {
    console.log(emittedData);
    this.childData = emittedData;
  }

}
