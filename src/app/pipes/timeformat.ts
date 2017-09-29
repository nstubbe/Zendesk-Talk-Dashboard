import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeformat'
})
export class TimeFormatPipe {
  transform(value: number): string {
    let minutes = Math.floor(value / 60).toString();
    let seconds = (value % 60).toString();

    if (minutes.length < 2)
      minutes = '0' + minutes;

    if (seconds.length < 2)
      seconds = '0' + seconds;

    let waitTime = minutes + ':' + seconds;
    
    return waitTime;
  }
}
