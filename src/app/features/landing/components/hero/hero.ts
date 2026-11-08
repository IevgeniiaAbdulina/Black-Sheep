import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
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

  goToContact(): void {
    this.router.navigate(['/'], {fragment: 'contact'});
  }

  goToAboutGestalt(): void {
    this.router.navigate(['/about-gestalt']);
  }
}
