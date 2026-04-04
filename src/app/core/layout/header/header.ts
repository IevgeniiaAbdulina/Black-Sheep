import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Button} from '../../../shared/components/button/button';

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
  isSidenavOpen = signal(false);

  toggleSidenav(): void {
    this.isSidenavOpen.update(state => !state);
  }
}
