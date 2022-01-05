import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../jobsTemplate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl : string ="http://localhost:8080/job/list"
  constructor(private http: HttpClient) {

   }

  getJobs() : Observable < Job[]> {
    //const tasks = of(TASKS);

    return this.http.get<Job[]>(this.apiUrl);
  }
}
