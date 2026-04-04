import {Component} from '@angular/core';
import * as data from '../../data-access/gestalt-data.json';
import {Button} from '../../../../shared/components/button/button';

@Component({
  selector: 'app-about-gestalt',
  imports: [
    Button
  ],
  templateUrl: './about-gestalt.html',
  styleUrl: './about-gestalt.css',
})
export class AboutGestalt {
  protected readonly gestalt = data;

  getContact(): void {
    console.log("Contact me");
  }
}
