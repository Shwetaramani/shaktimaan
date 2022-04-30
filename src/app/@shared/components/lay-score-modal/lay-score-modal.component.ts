import { Component, EventEmitter, Input, OnInit, Output, HostListener } from '@angular/core';


@Component({
  selector: 'app-lay-score-modal',
  templateUrl: './lay-score-modal.component.html',
  styleUrls: ['./lay-score-modal.component.scss']
})
export class LayScoreModalComponent implements OnInit {

  
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
