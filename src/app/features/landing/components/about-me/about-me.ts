import {Component, signal} from '@angular/core';
import * as data from '../../data-access/about-me-data.json';
import {Button} from '../../../../shared/components/button/button';
import {NgClass} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

interface CardData {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-about-me',
  imports: [
    Button,
    NgClass,
    MatCardModule
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  protected readonly aboutMe = data;

  cards = signal<Array<CardData>>([
    {id: 1, name: 'Card One', description: ''},
    {id: 2, name: 'Card Two', description: this.aboutMe.withWhom.content[0]},
    {id: 3, name: 'Card Three', description: ''},
    {id: 4, name: 'Card Four', description: this.aboutMe.withWhom.content[1]},
    {id: 5, name: 'Card Five', description: ''},
    {id: 6, name: 'Card Six', description: this.aboutMe.withWhom.content[2]}
  ]);

  getContact(): void {
    console.log("Contact me");
  }
}
