import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import * as Flickity from "flickity";
import { OwlOptions } from "ngx-owl-carousel-o";
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  carouselSlideOptions: OwlOptions = {
    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 1000,
    navText: ['', ''],
    //margin:-100,
    stagePadding: 43,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  CardcarouselSlideOptions: OwlOptions = {
    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: false,
    navSpeed: 1000,
    navText: ['', ''],
    //margin:0,
    stagePadding: 45,
    responsive: {
      0: {
        items: 1
      },
      400: {

        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  timer: any;

  subNavTabs = {
    '/dashboard/today': "Today",
    '/dashboard/tomorrow': "Tomorrow",
    // '/dashboard/inplay': "Inplay"
  }

  slides: any = [
    '../../../assets/images/casino.png',
    '../../../assets/images/Crypto.png',
    '../../../assets/images/Fantasy.png',
    '../../../assets/images/Powergames.png'
  ];


  slide: any = this.slides[0];
  index: number = 0;
  constructor(
  ) {
    if (window.screen.width <= 380) {
      this.CardcarouselSlideOptions.stagePadding = 30;

    }
  }
  ngOnInit(): void {
    const elem = document.querySelector('.carousel');

    if (elem) {
      new Flickity(elem, {
        autoPlay: false,
        cellAlign: 'center',
        contain: false,
        groupCells: '20%',
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        selectedAttraction: 0.03,
        friction: 0.15
      });
    }

    this.timer = 
    setInterval(() => {
      if (this.index < 3) {
        this.index++
        this.slide = this.slides[this.index]
      } else {
        this.index = 0
        this.slide = this.slides[this.index]
      }
    }, 3000)

  }

  activeSlide(i: any) {
    this.slide = this.slides[i];
    this.index = i;

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
