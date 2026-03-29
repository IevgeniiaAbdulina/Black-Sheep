import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import * as data from '../../data-access/hero-data.json';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly hero = data;
}
