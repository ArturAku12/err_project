import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  show = input<any>({});

  backgroundColor = '';

  private backgroundColors = [
    '#e50914',
    '#b20710',
    '#461220',
    '#f5f5f1',
    '#141414',
    '#221f1f',
  ];

  ngOnInit(): void {
    this.backgroundColor = this.getRandomBackgroundColor();
  }

  getOptimalPhotoUrl(): string {
    if (
      !this.show() ||
      !this.show().verticalPhotos ||
      !this.show().verticalPhotos[0]
    ) {
      return '';
    }

    const photo = this.show().verticalPhotos[0];

    if (photo.photoTypes) {
      if (photo.photoTypes['80']) {
        return photo.photoTypes['80'].url;
      }
      if (photo.photoTypes['60']) {
        return photo.photoTypes['60'].url;
      }
    }

    // Fallback to the base URL
    return photo.photoUrlBase;
  }

  private getRandomBackgroundColor(): string {
    const index = Math.floor(Math.random() * this.backgroundColors.length);
    return this.backgroundColors[index];
  }
}
