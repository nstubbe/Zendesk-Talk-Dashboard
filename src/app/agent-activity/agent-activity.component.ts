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

  seconds: number = 60;

  agents: Agent[] = [];

  constructor(private agentsActivityService: AgentsActivityService, private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    //Initial load
    this.loadAgentActivity();

    //Request new data every x seconds
    Observable.interval(1000 * this.seconds).subscribe(
      x => { this.loadAgentActivity() });
  }

  loadAgentActivity() {
    this.agentsActivityService.getAgentActivityList()
      .subscribe((data) => {
        this.agents = data
        // data.filter(x => x.status_code !== 'not_available');
      });
  }
}
