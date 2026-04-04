import {Component} from '@angular/core';
import * as data from '../../data-access/contact-data.json';
import {Button} from '../../../../shared/components/button/button';

@Component({
  selector: 'app-contact',
  imports: [
    Button
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contact = data;
}
