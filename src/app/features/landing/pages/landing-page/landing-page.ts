import {Component} from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {AboutGestalt} from '../../components/about-gestalt/about-gestalt';
import {AboutMe} from '../../components/about-me/about-me';

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
    AboutGestalt,
    AboutMe
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
}
