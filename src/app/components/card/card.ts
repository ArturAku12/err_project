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
    try {
      const show = this.show();
      if (!show?.verticalPhotos?.[0]) {
        return '/assets/images/placeholder.png';
      }

      const photo = show.verticalPhotos[0];

      if (photo.photoTypes) {
        if (photo.photoTypes['80']?.url) {
          return photo.photoTypes['80'].url;
        }
        if (photo.photoTypes['60']?.url) {
          return photo.photoTypes['60'].url;
        }
      }

      return photo.photoUrlBase || '/assets/images/placeholder.png';
    } catch (error) {
      console.error('Error getting photo URL:', error);
      return '/assets/images/placeholder.png';
    }
  }
}
