import { Component, OnInit } from '@angular/core';
import { QueueActivityService } from '../services/queue-activity.service';
import { Observable } from 'rxjs/Rx';
import { Queue } from '../queue';
import { TimeFormatPipe } from '../pipes/timeformat'

@Component({
  selector: 'app-queue-activity',
  templateUrl: './queue-activity.component.html',
  styleUrls: ['./queue-activity.component.css'],
  providers: [QueueActivityService]
})
export class QueueActivityComponent implements OnInit {

  seconds: number = 5;
  queue: Queue;

  constructor(private queueActivityService: QueueActivityService) {}

  ngOnInit() {
    //initial load
    this.loadQueueActivity();

    //Request new data every x seconds
    Observable.interval(1000 * this.seconds).subscribe(
      x => {this.loadQueueActivity()});
  }

  loadQueueActivity() {
    this.queueActivityService.getQueueActivity()
      .subscribe((data) => {
        this.queue = data
      });
  }

}
