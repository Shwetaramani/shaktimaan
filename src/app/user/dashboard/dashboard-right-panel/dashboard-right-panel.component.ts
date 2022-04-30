import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-right-panel',
  templateUrl: './dashboard-right-panel.component.html',
  styleUrls: ['./dashboard-right-panel.component.scss']
})
export class DashboardRightPanelComponent implements OnInit {

  constructor() { }
  Betslips: boolean = true;
  Cashout: boolean = false;
  Promotions: boolean = false;
  live_game: boolean = false;
  provider: boolean = true
  virtual_game: boolean = false;
  ngOnInit(): void {
  }

}
