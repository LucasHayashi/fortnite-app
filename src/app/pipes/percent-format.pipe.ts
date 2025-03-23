import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentFormat',
})
export class PercentFormatPipe implements PipeTransform {
  transform(value: number): string {
    return `${value.toFixed(2)}%`;
  }
}
