import {Component} from '@angular/core';
import {Hero} from '../../components/hero/hero';

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
}
