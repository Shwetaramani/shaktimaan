import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MatchComponent } from 'src/app/user/match/match.component';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
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
    this.isCollasped7 = false;
    this.isCollasped8 = false;
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped9 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
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
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
  }

  openMatchScoreModal11(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false
    this.isCollasped11 = !this.isCollasped11;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
  }
  openMatchScoreModal12(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = !this.isCollasped12;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
  }
  openMatchScoreModal13(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = !this.isCollasped13;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
  }
  openMatchScoreModal14(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = !this.isCollasped14;
    this.isCollasped15 = false;
    this.isCollasped16 = false;
  }
  openMatchScoreModal15(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = !this.isCollasped15;
    this.isCollasped16 = false;
  }
  openMatchScoreModal16(): void {
    this.isCollapsed = false
    this.isCollasped2 = false
    this.isCollasped4 = false;
    this.isCollasped3 = false;
    this.isCollasped5 = false;
    this.isCollasped7 = false;
    this.isCollasped6 = false;
    this.isCollasped9 = false;
    this.isCollasped8 = false;
    this.isCollasped10 = false;
    this.isCollasped11 = false;
    this.isCollasped12 = false;
    this.isCollasped13 = false;
    this.isCollasped14 = false;
    this.isCollasped15 = false;
    this.isCollasped16 = !this.isCollasped16;

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
  isCollasped11 = false;
  isCollasped12 = false;
  isCollasped13 = false;
  isCollasped14 = false;
  isCollasped15 = false;
  isCollasped16 = false;

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
