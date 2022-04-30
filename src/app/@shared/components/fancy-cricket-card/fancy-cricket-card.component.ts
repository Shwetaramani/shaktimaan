import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MatchComponent } from 'src/app/user/match/match.component';
import { MatDialog } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { LadderModalComponent } from '../ladder-modal/ladder-modal.component';
@Component({
  selector: 'app-fancy-cricket-card',
  templateUrl: './fancy-cricket-card.component.html',
  styleUrls: ['./fancy-cricket-card.component.scss']
})
export class FancyCricketCardComponent implements OnInit {
  @ViewChild(MatchComponent) matchComponent!: MatchComponent
  @Input() isLive: boolean = false;
  @Output() onMatchBidClick = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<boolean>();
  items: any = [];
  showMatch = false;
  selectIndex: any = null;
  isrow1Hidden: boolean = true;
  isrow2Hidden: boolean = true;
  isrow3Hidden: boolean = true;
  isrow4Hidden: boolean = true;
  isrow5Hidden: boolean = true;
  // onClose : boolean = false;
  isInfoActive1: boolean = false;
  isInfoActive2: boolean = false;
  isInfoActive3: boolean = false;
  isInfoActive4: boolean = false;
  isInfoActive5: boolean = false;
  constructor(
    private modalService: NgbModal, private router: Router, public dialog: MatDialog) {
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
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
  }
  openMatchScoreModal2(): void {
    this.isCollapsed = false
    this.isCollasped3 = false
    this.isCollasped4 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped2 = !this.isCollasped2;
  }
  openMatchScoreModal3(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped3 = !this.isCollasped3;
  }
  openMatchScoreModal4(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped3 = false
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped4 = !this.isCollasped4;
  }
  openMatchScoreModal5(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped3 = false
    this.isCollasped4 = false;
    this.isCollasped6 = false;
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped5 = !this.isCollasped5;
  }
  openMatchScoreModal6(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped6 = !this.isCollasped6;
  }
  openMatchScoreModal7(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped6 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped7 = !this.isCollasped7;
  }
  openMatchScoreModal8(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped8 = !this.isCollasped8;
  }

  openMatchScoreModal9(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false;
    this.isCollasped9 = !this.isCollasped9;
  }

  openMatchScoreModal10(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = !this.isCollasped10;
  }

  isCollapsed = false;
  isCollasped2 = false;

  isCollasped3 = false;
  isCollasped4 = false;

  isCollasped5 = false;
  isCollasped6 = false;
  isCollasped7 = false;
  isCollasped8 = false;
  isCollasped9 = false;
  isCollasped10 = false;

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
    modalRef.componentInstance.showLimitSatck = true;
  }

  openladderModal(): void {
    const modalRef = this.modalService.open(LadderModalComponent, { modalDialogClass: 'sm-modal', size: 'lg' });
  }
}
