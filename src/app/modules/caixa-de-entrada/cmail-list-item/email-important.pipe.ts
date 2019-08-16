import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailImportant'
})
export class EmailImportantPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == 'importante'){
      return 'URGENTE';
    }
    return value;
  }

}
