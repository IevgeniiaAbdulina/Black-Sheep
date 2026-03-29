import {Component} from '@angular/core';
import * as data from '../../data-access/contact-data.json';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contact = data;
}
