import { Component, input } from '@angular/core';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row',
  imports: [Card, CommonModule],
  standalone: true,
  templateUrl: './row.html',
  styleUrl: './row.css',
})
export class Row {
  section = input<any>({});
}
