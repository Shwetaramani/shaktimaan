import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../@shared/components/login-modal/login-modal.component';
import { SignupModalComponent } from '../../@shared/components/signup-modal/signup-modal.component';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { OneClickBetModalComponent } from 'src/app/@shared/components/one-click-bet-modal/one-click-bet-modal.component';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {

  carouselSlideOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: false,
    navSpeed: 1500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      }
    },
    nav: true
  }
  panelOpenState1: boolean = false;
  allExpandState1: boolean = false;
  panelOpenState2: boolean = false;
  allExpandState2: boolean = false;
  panelOpenState3: boolean = false;
  allExpandState3: boolean = false;
  panelOpenState4: boolean = false;
  allExpandState4: boolean = false;
  panelOpenState5: boolean = false;
  allExpandState5: boolean = false;
  panelOpenState6: boolean = false;
  allExpandState6: boolean = false;
  panelOpenState7: boolean = false;
  allExpandState7: boolean = false;
  isPromotionActive: boolean = false;
  isoneClickBetActive: boolean = false;
  isfavoriteActive: boolean = false;
  routerUrl: any;
  setActiveEffect: boolean = false;
  @ViewChild(MatExpansionPanel) pannel!: MatExpansionPanel;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      if ($('#layoutSidenav_nav').width() == 230) {
        this.closeSidebarpanel();
      }
    }
  }
  constructor(private router: Router, private modalService: NgbModal, private eRef: ElementRef) {
    router.events.subscribe((val) => {
      this.routerUrl = router.url;

    });
    // this.expandSidebar();
  }

  ngAfterViewInit() {
    // $('.sidebar-title').addClass('invisible');
    // console.log(" $('.sidebar-title')", $('.sidebar-title'))
  }


  toggleSidebar(event: MouseEvent): void {
    event.preventDefault();
    document.body.classList.toggle('sm-sidenav-toggled');
    localStorage.setItem('sm|sidebar-toggle', document.body.classList.contains('sm-sidenav-toggled').toString());
  }

  closeSidebar(event: MouseEvent): void {
    event.preventDefault();
    document.body.classList.remove('sm-sidenav-toggled');
    localStorage.setItem('sm|sidebar-toggle', document.body.classList.contains('sm-sidenav-toggled').toString());
  }

  logout(): void {
  }

  openComponent(route: string): void {
    this.router.navigateByUrl(route);
  }

  openLoginModal(): void {
    const modalRef = this.modalService.open(LoginModalComponent, { modalDialogClass: 'sm-modal', size: 'lg' });
  }

  openSignupModal(): void {
    const modalRef = this.modalService.open(SignupModalComponent, { modalDialogClass: 'sm-modal', size: 'lg' });
  }

  expandSidebar() {
    setTimeout(() => {
      this.isPromotionActive = false;
      this.isoneClickBetActive = false;
      this.isfavoriteActive = false;
      if ($('#layoutSidenav_nav').width() != '230') {
        // if ($('.collapse.show').length > 0) {
        $('#layoutSidenav_nav').css('width', '230px');
        // $('.sidebar-title').css('visibility', '')
        $('.sidebar-title').removeClass('invisible');

      } else {
        console.log("inside else block")
        this.closeSidebarpanel();
      }
    }, 200);
  }

  expand_Sidebar() {

    setTimeout(() => {
      this.isPromotionActive = false;
      this.isoneClickBetActive = false;
      this.isfavoriteActive = false;
      if ($('.mat-expanded').length > 0) {
        $('#layoutSidenav_nav').css('width', '230px');
        console.log("+++++++")
        setTimeout(() => {
          $('.sidebar-title').removeClass('invisible');
        }, 100);
        // $('.sidebar-title').css('visibility', '')
      } else {
        console.log("+++++++----")
        $('#layoutSidenav_nav').css('width', '80px');
        $('.sidebar-title').addClass('invisible');
        this.panelOpenState1 = false;
        this.allExpandState1 = false;
        this.panelOpenState2 = false;
        this.allExpandState2 = false;
        this.panelOpenState3 = false;
        this.allExpandState3 = false;
        this.panelOpenState4 = false;
        this.allExpandState4 = false;
        this.panelOpenState5 = false;
        this.allExpandState5 = false;
        this.panelOpenState6 = false;
        this.allExpandState6 = false;
        this.panelOpenState7 = false;
        this.allExpandState7 = false;


      }
    }, 100);
  }

  openBettingModal(): void {
    this.isPromotionActive = false;
    this.isfavoriteActive = false;
    const modalRef = this.modalService.open(OneClickBetModalComponent, { modalDialogClass: 'sm-modal', size: 'sm' });
  }
  closeSidebarpanel() {
    $('#layoutSidenav_nav').css('width', '80px');
    $('.sidebar-title').addClass('invisible');
    this.panelOpenState1 = false;
    this.allExpandState1 = false;
    this.panelOpenState2 = false;
    this.allExpandState2 = false;
    this.panelOpenState3 = false;
    this.allExpandState3 = false;
    this.panelOpenState4 = false;
    this.allExpandState4 = false;
    this.panelOpenState5 = false;
    this.allExpandState5 = false;
    this.panelOpenState6 = false;
    this.allExpandState6 = false;
    this.panelOpenState7 = false;
    this.allExpandState7 = false;
    // this.isPromotionActive = false;
    // this.isoneClickBetActive = false;
    // this.isfavoriteActive = false;
    this.accordion.closeAll();
  }
}
