import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-one-click-bet-modal',
  templateUrl: './one-click-bet-modal.component.html',
  styleUrls: ['./one-click-bet-modal.component.scss']
})
export class OneClickBetModalComponent implements OnInit {

  routerUrl: any;
  isChecked: boolean = true;
  number1: number = 10;
  number2: number = 20;
  number3: number = 30;
  number4: number = 40;
  number5: number = 10;
  enableInput: boolean = false;
  @Input() public showLimitSatck: any;
  constructor(private router: Router, public activeModal: NgbActiveModal) {
    router.events.subscribe((val) => {
      this.routerUrl = router.url;
    });
  }
  ngOnInit(): void {
  }

  increment(i: any) {
    switch (i) {
      case 'number1':
        this.number1++;
        break;
      case 'number2':
        this.number2++;
        break;
      case 'number3':
        this.number3++;
        break;
      case 'number4':
        this.number4++;
        break;
      default:
        break;
    }
  }

  decrement(i: any) {
    switch (i) {
      case 'number1':
        this.number1--;
        break;
      case 'number2':
        this.number2--;
        break;
      case 'number3':
        this.number3--;
        break;
      case 'number4':
        this.number4--;
        break;
      default:
        break;
    }
  }
}
