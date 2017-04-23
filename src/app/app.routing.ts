// Pkgs/Modules/Librariesimport { ModuleWithProviders }  from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './router_views/landing/landing.component';
import { PurchaseComponent } from './router_views/purchase/purchase.component';
import { WithdrawComponent } from './router_views/withdraw/withdraw.component';
import { StatusComponent } from './router_views/status/status.component';
import { AllTransactionsComponent } from './router_views/all-transactions/all-transactions.component';

import { PurchaseThanksComponent } from './router_views/purchase-thanks/purchase-thanks.component';
import { WithdrawalThanksComponent } from './router_views/withdrawal-thanks/withdrawal-thanks.component';

const appRoutes: Routes = [
    {   path: '',
        redirectTo: '/landing',
        pathMatch: 'full' },
    

    {   path: 'landing',
        component:  LandingComponent },
    {   path: 'purchase',
        component:  PurchaseComponent },
    {   path: 'withdraw',
        component:  WithdrawComponent },
    {   path: 'status',
        component:  StatusComponent },
    {   path: 'all_deposits',
        component:  AllTransactionsComponent },
    
    {   path: 'purchase_thanks',
        component:  PurchaseThanksComponent },
    {   path: 'withdrawal_thanks',
        component:  WithdrawalThanksComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});