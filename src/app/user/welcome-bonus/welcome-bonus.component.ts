import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-bonus',
  templateUrl: './welcome-bonus.component.html',
  styleUrls: ['./welcome-bonus.component.scss']
})
export class WelcomeBonusComponent implements OnInit {

  subNavTabs = {
    '/promotion/Bonus-welcome': "Welcome Bonus",
    '/promotion/Vipclub': "VIP Club",
    '/promotion/loyalty-program': "Loyalty Program",
    '/promotion/referandearn': "Refer & Earn"
  }

   slides: any = [
    '../../../assets/images/casino.png',
    '../../../assets/images/Crypto.png',
    '../../../assets/images/Fantasy.png',
    '../../../assets/images/Powergames.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
