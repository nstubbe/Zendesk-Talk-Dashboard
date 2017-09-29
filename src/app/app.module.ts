import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgentActivityComponent } from './agent-activity/agent-activity.component';
import { QueueActivityComponent } from './queue-activity/queue-activity.component';
import { AgentsActivityService } from './services/agents-activity.service';
import { QueueActivityService } from './services/queue-activity.service';
import { TruncatePipe } from './pipes/truncate';
import { TimeFormatPipe } from './pipes/timeformat';

@NgModule({
  declarations: [
    AppComponent,
    AgentActivityComponent,
    QueueActivityComponent,
    TruncatePipe,
    TimeFormatPipe
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
