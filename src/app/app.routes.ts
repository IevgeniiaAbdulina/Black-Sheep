import {Routes} from '@angular/router';
import {LandingPage} from './features/landing/pages/landing-page/landing-page';
import {Therapy} from './features/landing/pages/therapy/therapy';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingPage },
  {path: 'about-gestalt', component: Therapy},
];
