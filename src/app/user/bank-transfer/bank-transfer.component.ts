import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.scss']
})
export class BankTransferComponent implements OnInit {


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
  holdername: string = 'bank of spain'
  acountNumber:string ='FGHDHDY4120';
  acountType: string = 'FGHDHDY4120'
  ifsccode: string ='FGHDHDY4120'
  branchName : string = 'FGHDHDY4120'
  withdrawalAmount: string ='₹50,000'
  name:string = 'FGHDHDY4120';
  email: string = 'sarthaktiwari077@gmail.com'
  referenceID: string ='18858-5025-5522'
  constructor() { }

  ngOnInit(): void {
  }

  showRules() {
    var rulesContainer = document.querySelector('.rule-container');
    //rulesContainer.classList.toggle('show');
  }
}
