import { Pipe, PipeTransform } from '@angular/core';
import { Section } from '../types/api.types';
import { Show } from '../types/show.types';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(sections: Section[], searchQuery: string): Section[] {
    if (!searchQuery?.trim()) {
      // Return original sections if search query is empty
      return sections;
    }

    const searchTerm = searchQuery.toLowerCase().trim();
    const allShows: Show[] = [];
    const uniqueIds = new Set<string>();

    // Collect all shows thatt match the search term
    sections.forEach((section) => {
      section.data.forEach((show) => {
        if (
          show.heading.toLowerCase().includes(searchTerm) &&
          !uniqueIds.has(show.id)
        ) {
          allShows.push(show);
          uniqueIds.add(show.id);
        }
      });
    });

    if (allShows.length > 0) {
      return [
        {
          header: `Otsingu tulemused päringule "${searchQuery}" (${allShows.length} tulemust)`,
          data: allShows,
          highTimeline: true,
        },
      ];
    }

    return [
      {
        header: `Päringule "${searchQuery}" pole leitud tulemusi`,
        data: [],
        highTimeline: true,
      },
    ];
  }
}
