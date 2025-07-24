import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectionFilter',
})
export class SectionFilterPipe implements PipeTransform {
  transform(sections: any[]): any[] {
    return sections.filter(
      (section) => section.highTimeline === true && section.header !== ''
    );
  }
}
