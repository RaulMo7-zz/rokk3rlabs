import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AnalyticsService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get(`assets/data.json`)
    .map((res:Response) => res.json());
  }

}
