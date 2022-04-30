import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input() tabs: any={};
  @Input() isCondition: boolean=false;
  routerUrl: any;

  constructor(private router: Router,) {
    router.events.subscribe((val) => {
      this.routerUrl = router.url;

    });
    console.log(">>", this.tabs)
   }
  ngOnInit(): void {
  }
}
