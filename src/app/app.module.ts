import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgentActivityComponent } from './agent-activity/agent-activity.component';
import { QueueActivityComponent } from './queue-activity/queue-activity.component';
import { AgentsActivityService } from './services/agents-activity.service';
import { QueueActivityService } from './services/queue-activity.service';
import { TruncatePipe } from './pipes/truncate'

@NgModule({
  declarations: [
    AppComponent,
    AgentActivityComponent,
    QueueActivityComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AgentsActivityService,
    QueueActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
