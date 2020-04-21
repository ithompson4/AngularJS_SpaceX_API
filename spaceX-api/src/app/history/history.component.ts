import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyTitle: string = "SpaceX API History";
  history: any;
  historyCallError: any;
  public loading = true;

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.getHistory().subscribe((allHistory) => {
      setTimeout(() => {
        this.history = allHistory;
        this.loading = false;
      }, 1000);
    }, (error) => {
      this.historyCallError = error;
  });
 }
 
}