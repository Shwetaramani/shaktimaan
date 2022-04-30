import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

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

  showRules(){
    var rulesContainer = document.querySelector('.rule-container');
    //rulesContainer.classList.toggle('show');
  }
}
