import {Component, input, output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  type = input<'button' | 'submit'>('button');
  ariaLabel = input<string>('');
  buttonClass = input<string>('');
  buttonAction = output();
}
