import { Routes } from '@angular/router';
import {LandingPage} from './features/landing/pages/landing-page/landing-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingPage },
];
