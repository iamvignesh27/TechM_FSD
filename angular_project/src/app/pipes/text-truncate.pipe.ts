import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate',
  standalone: true
})
export class TextTruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + '...';
  }
}