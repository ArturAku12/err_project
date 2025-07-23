import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectionFilter'
})
export class SectionFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
