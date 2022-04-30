import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-club',
  templateUrl: './vip-club.component.html',
  styleUrls: ['./vip-club.component.scss']
})
export class VipClubComponent implements OnInit {
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
