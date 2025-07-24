import { Component, input } from '@angular/core';

@Component({
  selector: 'app-load-spinner',
  imports: [],
  templateUrl: './load-spinner.html',
  styleUrl: './load-spinner.css',
})
export class LoadSpinner {
  text = input<string>('Loading shows...');
}
