import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-slip-card',
  templateUrl: './best-slip-card.component.html',
  styleUrls: ['./best-slip-card.component.scss']
})
export class BestSlipCardComponent implements OnInit {
  routerUrl: any;
  @Input() type = 'green';
  constructor(private router: Router , public cd: ChangeDetectorRef) {
    // router.events.subscribe((val) => {
    //   this.routerUrl = router.url;
    // });
    this.routerUrl = this.router.url;
    
  }

  ngOnInit(): void {
  }

}
