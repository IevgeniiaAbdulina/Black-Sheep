import {inject, Injectable, signal} from "@angular/core";
import {DOCUMENT} from "@angular/common";

const THEME_STORAGE_KEY = 'black-sheep-theme';
const DEFAULT_THEME = 'green';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);

  public currentTheme = signal<string>(DEFAULT_THEME);

  init(): void {
    const savedTheme = this.getSavedTheme();
    if (savedTheme) {
      this.applyTheme(savedTheme);
    }
  }

  setTheme(theme: 'green' | 'yellow'): void {
    this.applyTheme(theme);
    this.saveTheme(theme);
  }

  private applyTheme(theme: string): void {
    this.currentTheme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  private getSavedTheme(): string | null {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to get ' + THEME_STORAGE_KEY, e);
      return null;
    }
  }

  private saveTheme(theme: string): void {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}
