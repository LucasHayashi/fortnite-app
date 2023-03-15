import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentFormat'
})
export class PercentFormatPipe implements PipeTransform {

  transform(value: any): string {
    return `${value.toFixed(2)}%`;
  }

}
