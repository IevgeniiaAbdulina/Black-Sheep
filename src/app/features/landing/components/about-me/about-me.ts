import {Component} from '@angular/core';
import * as data from '../../data-access/about-me-data.json';
import {Button} from '../../../../shared/components/button/button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [
    Button,
    NgClass
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  protected readonly aboutMe = data;

  getContact(): void {
    console.log("Contact me");
  }
}
