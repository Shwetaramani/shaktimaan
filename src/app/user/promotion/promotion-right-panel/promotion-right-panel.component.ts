import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-right-panel',
  templateUrl: './promotion-right-panel.component.html',
  styleUrls: ['./promotion-right-panel.component.scss']
})
export class PromotionRightPanelComponent implements OnInit {

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
