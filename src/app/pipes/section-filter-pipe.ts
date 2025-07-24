import { Pipe, PipeTransform } from '@angular/core';
import { Section } from '../types/api.types';

@Pipe({
  name: 'sectionFilter',
})
export class SectionFilterPipe implements PipeTransform {
  transform(sections: Section[]): Section[] {
    return sections.filter(
      (section) =>
        section.highTimeline === true &&
        section.header !== '' &&
        section.header !== 'MyFrenchFilmFestival'
    );
  }
}
