import { Component, EventEmitter, Input, OnInit, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-match-score-modal',
  templateUrl: './match-score-modal.component.html',
  styleUrls: ['./match-score-modal.component.scss']
})
export class MatchScoreModalComponent implements OnInit {

  @Output() onClose = new EventEmitter<string>();
  count: number = 5000;
  score: number = 1.84;
  constructor(
  ) { }

  ngOnInit(): void {

  }

  // @HostListener('click') onclick(){
  //   alert("click");
  // }
  onCloseModal(): void {
    this.onClose.emit();
  }

  increseCount() {
    this.count++;
  }
  decreseCount() {
    this.count--;
  }
  increment() {
    this.score = this.score + 0.01
  }
  decrement() {
    this.score = this.score - 0.01
  }
}
