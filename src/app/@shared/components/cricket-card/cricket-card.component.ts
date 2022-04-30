import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MatchComponent } from 'src/app/user/match/match.component';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { MatchScoreModalComponent } from '../match-score-modal/match-score-modal.component';


@Component({
  selector: 'app-cricket-card',
  templateUrl: './cricket-card.component.html',
  styleUrls: ['./cricket-card.component.scss']
})
export class CricketCardComponent implements OnInit {
  @ViewChild(MatchComponent) matchComponent!: MatchComponent
  @Input() isLive: boolean = false;
  @Output() onMatchBidClick = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<boolean>();
  items: any = [];
  showMatch = false;
  selectIndex: any = null;
  isInfoActive: boolean = false;
  isBookmarkActive: boolean = false;
  isFavoriteActive: boolean = false;
  constructor(
    private modalService: NgbModal, private router: Router
  ) {
    this.items = this.randomArray();

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.items = this.randomArray();
      }
    });
  }

  ngOnInit(): void {
  }

  openMatchScoreModal(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isCollasped2 = false
    this.isCollasped3 = false
    this.isCollasped4 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
  }
  openMatchScoreModal2(): void {
    this.isCollapsed = false
    this.isCollasped3 = false
    this.isCollasped4 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped2 = !this.isCollasped2;
  }
  openMatchScoreModal3(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped3 = !this.isCollasped3;
  }
  openMatchScoreModal4(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped3 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped4 = !this.isCollasped4;
  }
  openMatchScoreModal5(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped3 = false
    this.isCollasped4 = false;
    this.isCollasped6 = false;
    this.isCollasped5 = !this.isCollasped5;
  }
  openMatchScoreModal6(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped6 = !this.isCollasped6;
  }

  isCollapsed = false;
  isCollasped2 = false;

  isCollasped3 = false;
  isCollasped4 = false;

  isCollasped5 = false;
  isCollasped6 = false;

  onCloseCard(): void {
    this.onClose.emit(true);
  }





  showDive() {
    this.showMatch = true;
  }

  showAgain() {
    this.showMatch = !this.showMatch
  }

  closeData() {
    this.showMatch = false;
  }

  randomArray(): any {
    return [false, true, false, true, false, false, true, false, false, true, false, false, true, false];
  }

  deleteCard(i: number = 0): void {
    this.items[i] = 'delete';
  }

  openInfoModal(): void {
    const modalRef = this.modalService.open(InfoModalComponent, { modalDialogClass: 'sm-modal', size: 'lg' });
  }

}
