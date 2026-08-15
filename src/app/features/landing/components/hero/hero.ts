import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import * as data from '../../data-access/hero-data.json';
import {Button} from '../../../../shared/components/button/button';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly hero = data;
}
