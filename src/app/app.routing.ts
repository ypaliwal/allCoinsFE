// Pkgs/Modules/Librariesimport { ModuleWithProviders }  from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './router_views/landing/landing.component';

const appRoutes: Routes = [
    {   path: '',
        redirectTo: '/landing',
        pathMatch: 'full' },
    

    {   path: 'landing',
        component:  LandingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});