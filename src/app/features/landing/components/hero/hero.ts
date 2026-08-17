import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import * as data from '../../data-access/hero-data.json';
import {Button} from '../../../../shared/components/button/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected router = inject(Router);
  protected readonly hero = data;

  goToContact(): void {
    this.router.navigate(['/'], {fragment: 'contact'});
  }

  goToTherapy(): void {
    this.router.navigate(['/'], {fragment: 'about-gestalt'});
  }
}
