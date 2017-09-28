import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string): string {
    let lenght = value.indexOf(' ') + 2;
    return value.substring(0, lenght);
  }
}
