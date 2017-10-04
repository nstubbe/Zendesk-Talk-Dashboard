import { Component, OnInit } from '@angular/core';
import { AgentsActivityService } from '../services/agents-activity.service';
import { Observable } from 'rxjs/Rx';
import { Agent } from '../agent';
import { TruncatePipe } from '../pipes/truncate'

@Component({
  selector: 'app-agent-activity',
  templateUrl: './agent-activity.component.html',
  styleUrls: ['./agent-activity.component.css'],
  providers: [AgentsActivityService, TruncatePipe]
})
export class AgentActivityComponent implements OnInit {

  sound: Howl;
  seconds: number = 10;

  agents: Agent[] = [];

  constructor(private agentsActivityService: AgentsActivityService, private truncatePipe: TruncatePipe) { 
    this.sound = new Howl({
      src: ['../../assets/sounds/overtime.mp3']
    });
  }

  ngOnInit() {
    //Initial load
    this.loadAgentActivity();

    //Request new data every x seconds
    Observable.interval(1000 * this.seconds).subscribe(
      x => { this.loadAgentActivity() });

    Observable.interval(1000 * 10).subscribe(
      x => this.playWarning()
    );
  }

  loadAgentActivity() {
    this.agentsActivityService.getAgentActivityList()
      .subscribe((data) => {
        this.agents = data.filter(x => x.status_code !== 'not_available');
      });
  }

  playWarning() {
    if (this.agents.length < 1)
      this.sound.play();
  }
}
