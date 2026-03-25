import {Component} from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {AboutGestalt} from '../../components/about-gestalt/about-gestalt';

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
    AboutGestalt
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
}
