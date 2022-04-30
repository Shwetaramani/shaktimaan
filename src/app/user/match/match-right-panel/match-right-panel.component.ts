import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-right-panel',
  templateUrl: './match-right-panel.component.html',
  styleUrls: ['./match-right-panel.component.scss']
})
export class MatchRightPanelComponent implements OnInit {
  routerUrl: any;
  constructor(private router: Router) {
    // router.events.subscribe((val) => {
    //   this.routerUrl = router.url;

    // });
    this.routerUrl = router.url;

  }
  ngOnInit(): void {
  }

}
