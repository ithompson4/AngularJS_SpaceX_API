import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>();
  dataStr = 'Back to Home Page';

  sendMessage() {
    this.dataEmitter.emit(this.dataStr);
  }

  ngOnInit(): void {
    this.sendMessage();
  }

}