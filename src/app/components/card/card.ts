import { Component, input } from '@angular/core';
import { Show } from '../../types/show.types';

@Component({
  selector: 'app-card',
  imports: [],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  show = input.required<Show>();

  getOptimalPhotoUrl() {
    const show = this.show();
    if (!show?.verticalPhotos?.[0]) {
      return '/assets/images/placeholder.png'; // Create a fallback image.
    }

    const photo = show.verticalPhotos[0];

    // Check if photoTypes exist and return the first available type.
    if (photo.photoTypes) {
      if (photo.photoTypes['80']) {
        return photo.photoTypes['80'].url;
      }
      if (photo.photoTypes['60']) {
        return photo.photoTypes['60'].url;
      }
    }

    return photo.photoUrlBase || '';
  }
}
