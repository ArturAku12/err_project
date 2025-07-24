import {
  Component,
  input,
  ElementRef,
  viewChild,
  AfterViewInit,
  signal,
} from '@angular/core';
import { Card } from '../card/card';
import { Show } from '../../types/show.types';

@Component({
  selector: 'app-row',
  imports: [Card],
  standalone: true,
  templateUrl: './row.html',
  styleUrl: './row.css',
})
export class Row implements AfterViewInit {
  section = input.required<{ header: string; data: Show[] }>();

  cardContainer = viewChild.required<ElementRef>('cardContainer');

  showLeftButton = signal(false);
  showRightButton = signal(false);
  scrollAmount = 500;

  ngAfterViewInit() {
    // Initial visibility
    setTimeout(() => {
      this.updateButtonVisibility();
    }, 100);

    this.cardContainer().nativeElement.addEventListener('scroll', () => {
      this.updateButtonVisibility();
    });

    window.addEventListener('resize', () => {
      this.updateButtonVisibility();
    });
  }

  scrollLeft() {
    this.cardContainer().nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
    // Update button visibility after scroll animation
    setTimeout(() => this.updateButtonVisibility(), 300);
  }

  scrollRight() {
    this.cardContainer().nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
    // Update button visibility after scroll animation
    setTimeout(() => this.updateButtonVisibility(), 300);
  }

  private updateButtonVisibility() {
    const container = this.cardContainer().nativeElement;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Show left button if we can scroll left
    this.showLeftButton.set(scrollLeft > 1);

    // Show right button if we can scroll right
    const maxScrollLeft = scrollWidth - clientWidth;
    this.showRightButton.set(scrollLeft < maxScrollLeft - 1);
  }
}
