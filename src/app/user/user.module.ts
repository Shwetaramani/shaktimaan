import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { MatchComponent } from './match/match.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRightPanelComponent } from './dashboard/dashboard-right-panel/dashboard-right-panel.component';
import { MatchRightPanelComponent } from './match/match-right-panel/match-right-panel.component';
import { CasinoComponent } from './casino/casino.component';
import { CasinoRightPanelComponent } from './casino/casino-right-panel/casino-right-panel.component';
import { HorseBettingComponent } from './horse-betting/horse-betting.component';
import { HorseBettingRightPanelComponent } from './horse-betting/horse-betting-right-panel/horse-betting-right-panel.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionRightPanelComponent } from './promotion/promotion-right-panel/promotion-right-panel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FancyBetsComponent } from './fancy-bets/fancy-bets.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FavoritesComponent } from './favorites/favorites.component';
import { InplayComponent } from './inplay/inplay.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HorseBettingDesignComponent } from './horse-betting-design/horse-betting-design.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { CryptopayComponent } from './cryptopay/cryptopay.component';
import { WelcomeBonusComponent } from './welcome-bonus/welcome-bonus.component';
import { VipClubComponent } from './vip-club/vip-club.component';
import { LoyaltyProgramComponent } from './loyalty-program/loyalty-program.component';
import { ReferAndEarnComponent } from './refer-and-earn/refer-and-earn.component';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    DashboardRightPanelComponent,
    MatchComponent,
    MatchRightPanelComponent,
    CasinoComponent,
    CasinoRightPanelComponent,
    HorseBettingComponent,
    HorseBettingRightPanelComponent,
    PromotionComponent,
    PromotionRightPanelComponent,
    FooterComponent,
    HeaderComponent,
    FancyBetsComponent,
    FavoritesComponent,
    InplayComponent,
    HorseBettingDesignComponent,
    BankTransferComponent,
    DepositComponent,
    CryptopayComponent,
    WelcomeBonusComponent,
    VipClubComponent,
    LoyaltyProgramComponent,
    ReferAndEarnComponent, 
  ],
  imports: [
    SharedModule,    
    UserRoutingModule,
    MatExpansionModule,
    MatSnackBarModule,
    DragDropModule,
  ]
})
export class UserModule { }
