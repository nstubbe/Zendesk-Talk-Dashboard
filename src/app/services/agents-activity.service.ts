import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Agent} from '../agent';

@Injectable()
export class AgentsActivityService {

  //URL to your backend which returns json from Zendesk (to avoid CORS)
  private AgentsUrl = 'http://localhost/AgentActivity.php'

  constructor(private http: Http) {}

  getAgentActivityList(): Observable<Agent[]>{
    return this. http.get(this.AgentsUrl)
    .map(res => res.json().agents_activity)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
