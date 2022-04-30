import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  @ViewChild('mySelect') mySelect: any;
  carouselSlideOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: false,
    navSpeed: 1500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0
      },
      400: {
        items: 0
      },
      740: {
        items: 3
      },
      1200: {
        items: 3
      },
      1201: {
        items: 4
      }
    },
    nav: true
  }

  activeTab: string = 'profile';
  routerUrl: any;
  sport = new FormControl();
  Athletics: boolean = true;
  Boxing: boolean = false;
  Baseball: boolean = false;
  Basketball: boolean = false;
  Cycling: boolean = false;
  Ps5: boolean = false;

  sports: any = [
    {
      img: 'directions_run',
      text: 'Athletics'
    }
    ,
    {
      img: 'sports_mma',
      text: 'Boxing'
    },
    {
      img: 'sports_baseball',
      text: 'Baseball'
    },
    {
      img: 'sports_basketball',
      text: 'Basketball'
    },
    {
      img: 'directions_bike',
      text: 'Cycling'
    },
    {
      img: 'sports_esports',
      text: 'Ps5'
    }];
  @Input() public showLimitSatck: any;
  constructor(private router: Router, public activeModal: NgbActiveModal) {
    router.events.subscribe((val) => {
      this.routerUrl = router.url;
    });
  }
  ngOnInit(): void {
  }
  openDropdown() {
    this.mySelect.open();
  }
  changeGameRules(sport: any) {
    console.log("sport" , sport)
    switch (sport) {
      case 'Athletics':
        this.Athletics = true;
        this.Boxing = false;
        this.Baseball = false;
        this.Basketball = false;
        this.Cycling = false;
        this.Ps5 = false;
        break;
      case 'Boxing':
        this.Athletics = false;
        this.Boxing = true;
        this.Baseball = false;
        this.Basketball = false;
        this.Cycling = false;
        this.Ps5 = false;
        break;
      case 'Baseball':
        this.Athletics = false;
        this.Boxing = false;
        this.Baseball = true;
        this.Basketball = false;
        this.Cycling = false;
        this.Ps5 = false;
        break;
      case 'Basketball':
        this.Athletics = false;
        this.Boxing = false;
        this.Baseball = false;
        this.Basketball = true;
        this.Cycling = false;
        this.Ps5 = false;
        break;
      case 'Cycling':
        this.Athletics = false;
        this.Boxing = false;
        this.Baseball = false;
        this.Basketball = false;
        this.Cycling = true;
        this.Ps5 = false;
        break;
      case 'Ps5':
        this.Athletics = false;
        this.Boxing = false;
        this.Baseball = false;
        this.Basketball = false;
        this.Cycling = false;
        this.Ps5 = true;
        break;
      default:
        break;
    }
  }
}
