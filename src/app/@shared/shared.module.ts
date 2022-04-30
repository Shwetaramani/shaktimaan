import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbPaginationModule, NgbTooltipModule, NgbAccordionModule, NgbNavModule, } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgxTrimDirectiveModule } from "ngx-trim-directive";
import { BestSlipCardComponent } from "./components/best-slip-card/best-slip-card.component";
import { CricketCardComponent } from "./components/cricket-card/cricket-card.component";
import { MatchCardComponent } from "./components/match-card/match-card.component";
import { ScoreCardComponent } from "./components/score-card/score-card.component";
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { MatchScoreModalComponent } from './components/match-score-modal/match-score-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { MainContainerCarouselComponent } from './components/main-container-carousel/main-container-carousel.component';
import { SubNavFlagComponent } from "./components/sub-nav-flag/sub-nav-flag.component";

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { FancyCricketCardComponent } from './components/fancy-cricket-card/fancy-cricket-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { LayScoreModalComponent } from './components/lay-score-modal/lay-score-modal.component';
import { LadderModalComponent } from './components/ladder-modal/ladder-modal.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { OneClickBetModalComponent } from './components/one-click-bet-modal/one-click-bet-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    MatchCardComponent,
    ScoreCardComponent,
    SubNavComponent,
    SubNavFlagComponent,
    CricketCardComponent,
    BestSlipCardComponent,
    MatchScoreModalComponent,
    MatchScoreModalComponent,
    LoginModalComponent,
    SignupModalComponent,
    MainContainerCarouselComponent,
    FancyCricketCardComponent,
    InfoModalComponent,
    LayScoreModalComponent,
    LadderModalComponent,
    TicketCardComponent,
    OneClickBetModalComponent,
    AddMatchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxTrimDirectiveModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbAccordionModule,
    NgbNavModule,
    NgSelectModule,
    CarouselModule,
    CollapseModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    NgxTrimDirectiveModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbAccordionModule,
    NgbNavModule,

    NgSelectModule,

    CarouselModule,

    MatchCardComponent,
    ScoreCardComponent,
    SubNavComponent,
    SubNavFlagComponent,
    CricketCardComponent,
    BestSlipCardComponent,
    MatchScoreModalComponent,
    LoginModalComponent,
    SignupModalComponent,
    MainContainerCarouselComponent,
    CollapseModule,
    FancyCricketCardComponent,
    InfoModalComponent,
    LayScoreModalComponent,
    LadderModalComponent,
    TicketCardComponent
  ]
})
export class SharedModule { }
