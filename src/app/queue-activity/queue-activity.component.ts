import { Component, OnInit } from '@angular/core';
import { QueueActivityService } from '../services/queue-activity.service';
import { Observable } from 'rxjs/Rx';
import { Queue } from '../queue';
import { TimeFormatPipe } from '../pipes/timeformat';
import { Howl } from 'howler'

@Component({
  selector: 'app-queue-activity',
  templateUrl: './queue-activity.component.html',
  styleUrls: ['./queue-activity.component.css'],
  providers: [QueueActivityService]
})
export class QueueActivityComponent implements OnInit {

  sound: Howl;
  seconds: number = 5;
  queue: Queue;

  constructor(private queueActivityService: QueueActivityService) {
    this.sound = new Howl({
      src: ['../../assets/sounds/overtime.mp3']
    });
  }

  ngOnInit() {
    //initial load
    this.loadQueueActivity();

    //Request new data every x seconds
    Observable.interval(1000 * this.seconds).subscribe(
      x => this.loadQueueActivity());

    Observable.interval(1000 * 20).subscribe(
      x => this.playWarning()
    );
  }

  loadQueueActivity() {
    this.queueActivityService.getQueueActivity()
      .subscribe((data) => {
        this.queue = data
      });
  }

  playWarning(){
    if (this.queue.longest_wait_time > 150)
      this.sound.play();
  }
}