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
  { path: 'settings', component: SettingsPage, canActivate: [authGuard] },
];
