import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty-program',
  templateUrl: './loyalty-program.component.html',
  styleUrls: ['./loyalty-program.component.scss']
})
export class LoyaltyProgramComponent implements OnInit {
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
