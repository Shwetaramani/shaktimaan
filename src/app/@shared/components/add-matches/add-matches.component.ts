import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.scss']
})

export class AddMatchesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
 
  closeAndAddMachesModal(): void {
    console.log(">>>>>>>")
    // localStorage.setItem('addBanner', 'addTemp')
    // this.activeModal.dismiss(true);
    this.activeModal.close({
      addMatch: true
    });
  }

}
