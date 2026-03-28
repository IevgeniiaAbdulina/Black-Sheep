import {Component} from '@angular/core';
import * as data from '../../data-access/gestalt-data.json';

@Component({
  selector: 'app-about-gestalt',
  imports: [],
  templateUrl: './about-gestalt.html',
  styleUrl: './about-gestalt.css',
})
export class AboutGestalt {
  protected readonly gestalt = data;
}
