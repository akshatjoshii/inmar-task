import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, completed: boolean): any {
    if (value && value.length === 0) { return value; }
    if (completed) {
     return value.filter(task => task.completed === true );
    } else {
      return value;
    }
  }

}
