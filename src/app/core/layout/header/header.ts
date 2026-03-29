import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
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
