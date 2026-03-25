import {Component} from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {AboutGestalt} from '../../components/about-gestalt/about-gestalt';
import {AboutMe} from '../../components/about-me/about-me';
import {Contact} from '../../components/contact/contact';

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
    AboutGestalt,
    AboutMe,
    Contact
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
}
