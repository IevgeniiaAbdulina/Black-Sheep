import {Component, signal} from '@angular/core';
import * as data from '../../data-access/about-me-data.json';
import {Button} from '../../../../shared/components/button/button';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

interface CardData {
  id: number;
  name: string;
  description?: string;
  src?: string;
}

@Component({
  selector: 'app-about-me',
  imports: [
    Button,
    NgClass,
    MatCardModule,
    NgOptimizedImage
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  protected readonly aboutMe = data;

  cards = signal<Array<CardData>>([
    {id: 1, name: 'Painting girl', src: './assets/images/paint-girl-black.png'},
    {id: 2, name: 'Work with', description: this.aboutMe.withWhom.content[0]},
    {id: 3, name: 'Painting boy', src: './assets/images/paint-boy-black.png'},
    {id: 4, name: 'Work with', description: this.aboutMe.withWhom.content[1]},
    {id: 5, name: 'Two girls', src: './assets/images/two-girls-black.png'},
    {id: 6, name: 'Work with', description: this.aboutMe.withWhom.content[2]}
  ]);

  getContact(): void {
    console.log("Contact me");
  }
}
