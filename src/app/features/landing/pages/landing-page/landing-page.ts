import {Component} from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {AboutMe} from '../../components/about-me/about-me';
import {Contact} from '../../components/contact/contact';

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
    AboutMe,
    Contact
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
}
