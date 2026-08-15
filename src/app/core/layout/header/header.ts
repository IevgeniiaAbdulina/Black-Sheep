import {Component, inject, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Button} from '../../../shared/components/button/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    Button
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router = inject(Router)
  isSidenavOpen = signal(false);

  toggleSidenav(): void {
    this.isSidenavOpen.update(state => !state);
  }

  goToContact(): void {
    this.router.navigate(['/'], {fragment: 'contact'});
  }

  goToAboutGestalt(): void {
    this.router.navigate(['/about-gestalt']);
  }
}
