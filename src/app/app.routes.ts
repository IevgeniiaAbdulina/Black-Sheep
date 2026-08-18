import {Routes} from '@angular/router';
import {LandingPage} from './features/landing/pages/landing-page/landing-page';
import {AboutGestalt} from './features/landing/components/about-gestalt/about-gestalt';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingPage },
  {path: 'about-gestalt', component: AboutGestalt},
];
