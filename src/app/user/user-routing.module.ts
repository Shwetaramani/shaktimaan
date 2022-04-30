import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { CasinoComponent } from './casino/casino.component';
import { CryptopayComponent } from './cryptopay/cryptopay.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { FancyBetsComponent } from './fancy-bets/fancy-bets.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HorseBettingDesignComponent } from './horse-betting-design/horse-betting-design.component';
import { HorseBettingComponent } from './horse-betting/horse-betting.component';
import { InplayComponent } from './inplay/inplay.component';
import { LoyaltyProgramComponent } from './loyalty-program/loyalty-program.component';
import { MatchComponent } from './match/match.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ReferAndEarnComponent } from './refer-and-earn/refer-and-earn.component';
import { UserComponent } from './user.component';
import { VipClubComponent } from './vip-club/vip-club.component';
import { WelcomeBonusComponent } from './welcome-bonus/welcome-bonus.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: '/:tab',
        component: DashboardComponent
      },
      {
        path: 'dashboard/:tab',
        component: DashboardComponent
      },
      { path: 'fancy', redirectTo: 'match/fancy', pathMatch: 'full' },
      {
        path: 'match/fancy',
        component: FancyBetsComponent
      },
      { path: 'match', redirectTo: 'match/all', pathMatch: 'full' },
      {
        path: 'match/:tab',
        component: MatchComponent
      },
      { path: 'casino', redirectTo: 'casino/all', pathMatch: 'full' },
      {
        path: 'casino/:tab',
        component: CasinoComponent
      },
      { path: 'horse-betting/match', redirectTo: 'horse-betting/match', pathMatch: 'full' },
      {
        path: 'horse-betting/match',
        component: HorseBettingDesignComponent
      },
      { path: 'horse-betting', redirectTo: 'horse-betting/all', pathMatch: 'full' },
      {
        path: 'horse-betting/:tab',
        component: HorseBettingComponent
      },    
      { path: 'bonus-welcome', redirectTo: 'promotion/bonus-welcome', pathMatch: 'full' },
      {
        path: 'promotion/bonus-welcome',
        component: WelcomeBonusComponent
      },
      { path: 'Vipclub', redirectTo: 'promotion/Vipclub', pathMatch: 'full' },
      {
        path: 'promotion/Vipclub',
        component: VipClubComponent
      },
      { path: 'loyalty-program', redirectTo: 'promotion/loyalty-program', pathMatch: 'full' },
      {
        path: 'promotion/loyalty-program',
        component: LoyaltyProgramComponent
      },
      { path: 'referandearn', redirectTo: 'promotion/referandearn', pathMatch: 'full' },
      {
        path: 'promotion/referandearn',
        component: ReferAndEarnComponent
      },
      { path: 'promotion', redirectTo: 'promotion/all', pathMatch: 'full' },
      {
        path: 'promotion/:tab',
        component: WelcomeBonusComponent
      },
      { path: 'favorites', redirectTo: 'favorites/all', pathMatch: 'full' },
      {
        path: 'favorites/:tab',
        component: FavoritesComponent
      },
      { path: 'inplay', redirectTo: 'inplay/all', pathMatch: 'full' },
      {
        path: 'inplay/:tab',
        component: InplayComponent
      },
      { path: 'cryptopay', redirectTo: 'deposit/cryptopay', pathMatch: 'full' },
      {
        path: 'deposit/cryptopay',
        component: CryptopayComponent
      },
      { path: 'phonepay', redirectTo: 'deposit/phonepay', pathMatch: 'full' },
      {
        path: 'deposit/phonepay',
        component: DepositComponent
      },
      { path: 'instant-deposit', redirectTo: 'deposit/instant-deposit', pathMatch: 'full' },
      {
        path: 'deposit/instant-deposit',
        component: DepositComponent
      },
      { path: 'upi', redirectTo: 'deposit/upi', pathMatch: 'full' },
      {
        path: 'deposit/upi',
        component: DepositComponent
      },
      { path: 'gpay', redirectTo: 'deposit/gpay', pathMatch: 'full' },
      {
        path: 'deposit/gpay',
        component: DepositComponent
      },
      { path: 'paytm', redirectTo: 'deposit/paytm', pathMatch: 'full' },
      {
        path: 'deposit/paytm',
        component: DepositComponent
      },
      { path: 'deposit', redirectTo: 'deposit/all', pathMatch: 'full' },
      {
        path: 'deposit/:tab',
        component: BankTransferComponent
      },
     

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
