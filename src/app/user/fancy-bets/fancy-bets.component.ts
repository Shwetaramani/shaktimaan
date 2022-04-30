import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from "@angular/router";
import * as Flickity from "flickity";
declare var $: any;
interface VideoElement extends HTMLVideoElement {
  requestPictureInPicture(): any;
}
@Component({
  selector: 'app-fancy-bets',
  templateUrl: './fancy-bets.component.html',
  styleUrls: ['./fancy-bets.component.scss']
})
export class FancyBetsComponent implements OnInit {

  subNavTabs = {
    '/match/all': "All",
    '/match/match-odds': "Match Odds",
    '/match/bookmaker': "Bookmaker",
    '/match/fancy': "Fancy",
    '/match/player': "Player",
    '/match/wicket': "Wicket",
    '/match/bowler-session': "Bowler Session",
  }

  items: any = [];
  slides: any = [
    '../../../assets/images/match-page-bg.png',
  ];

  selectIndex: any = null;
  upgradeTime: number = 172801;
  seconds: number = this.upgradeTime;
  counter: any = [];
  playVideo: boolean = false;
  betSlips: boolean = false
  @ViewChild("videoElement") videoElement!: ElementRef;
  constructor(private router: Router , private _snackBar: MatSnackBar) {
    this.items = this.randomArray();

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.items = this.randomArray();
      }
    });

    setTimeout(() => {
      if(window.screen.width <= 767){
        this.betSlips = true;
      }
    }, 2000);
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

    setInterval(() => {
      this.timer();
    }, 1000)
  }

  randomArray(): any {
    return [false, true, false, true, false, false, true, false, false, true, false, false, true, false];
  }

  deleteCard(i: number = 0): void {
    this.items[i] = 'delete';
    this.openSnackBar('Bet card deleted', 'close');
  }

  timer() {
    var days = Math.floor(this.seconds / 24 / 60 / 60);
    var hoursLeft = Math.floor((this.seconds) - (days * 86400));
    var hours = Math.floor(hoursLeft / 3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    var minutes = Math.floor(minutesLeft / 60);
    var remainingSeconds = this.seconds % 60;
    if (this.seconds == 0) {
    } else {
      this.seconds--;
      let str = this.pad(days) + this.pad(hours) + this.pad(minutes) + this.pad(remainingSeconds);
      this.counter = [];
      for (var i = 0; i < str.length; i++) {
        this.counter.push(str.charAt(i))
      }
    }
  }
  pad(n: any) {
    return (n < 10 ? "0" + n : n);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
