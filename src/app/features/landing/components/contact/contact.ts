import {Component} from '@angular/core';
import {Button} from '../../../../shared/components/button/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [
    Button,
    MatIcon
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
}
