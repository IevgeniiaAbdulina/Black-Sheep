import {Component} from '@angular/core';
import * as data from '../../data-access/about-me-data.json';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  protected readonly aboutMe = data;
}
