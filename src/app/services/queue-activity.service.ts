import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {queue} from '../queue';

@Injectable()
export class QueueActivityService {

    //URL to your backend which returns json from Zendesk (to avoid CORS)
    private queueUrl = 'http://localhost/QueueActivity.php'
    
      constructor(private http: Http) {}
    
      getAgentActivityList(): Observable<queue>{
        return this. http.get(this.queueUrl)
        .map(res => res.json().current_queue_activity)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }

}
