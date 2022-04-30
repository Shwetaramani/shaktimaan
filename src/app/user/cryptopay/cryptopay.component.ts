import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptopay',
  templateUrl: './cryptopay.component.html',
  styleUrls: ['./cryptopay.component.scss']
})
export class CryptopayComponent implements OnInit {

  subNavTabs = {
    '/deposit/all': "Bank Transfer",
    '/deposit/paytm': "paytm",
    '/deposit/phonepay': "phonepay",
    '/deposit/gpay': "gpay",
    '/deposit/upi': "UPI",
    '/deposit/instant-deposit': "Instant deposit",
    '/deposit/cryptopay': "cryptopay"
  }

   slides: any = [
    '../../../assets/images/casino.png',
    '../../../assets/images/Crypto.png',
    '../../../assets/images/Fantasy.png',
    '../../../assets/images/Powergames.png'
  ];
  amount: string = '₹50,000';
  promocode: string = 'HUFDISDOCK545'
  constructor() { }

  ngOnInit(): void {
  }

  showRules(){
    var rulesContainer = document.querySelector('.rule-container');
    //rulesContainer.classList.toggle('show');
  }
}
