import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SettingsPage } from './settings/settings.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage), canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'settings', component: SettingsPage, canActivate: [authGuard],
    children: [
      { path: 'account', loadComponent: () => import('./settings/components/account-settings/account-settings.component').then(m => m.AccountSettingsComponent) },
      { path: 'appearance', loadComponent: () => import('./settings/components/appearance-settings/appearance-settings.component').then(m => m.AppearanceSettingsComponent) },
      { path: 'help', loadComponent: () => import('./settings/components/help-support/help-support.component').then(m => m.HelpSupportComponent) },
      { path: 'security', loadComponent: () => import('./settings/components/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
      /*{
        path: '',
        redirectTo: '/settings/account',
        pathMatch: 'full'
      }*/
    ]
  },
];
