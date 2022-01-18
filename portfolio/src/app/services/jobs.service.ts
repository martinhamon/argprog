import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../jobsTemplate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl : string ="http://localhost:8080"
  constructor(private http: HttpClient) {

   }

  getJobs() : Observable < Job[]> {
    //const tasks = of(TASKS);

    return this.http.get<Job[]>(this.apiUrl+"/job/list");
  }
  deleteJob(job : Job) : Observable < Job>{

    return this.http.delete<Job>(this.apiUrl+"/job/delete/"+job.id);
  }

  editJob(job : Job): Observable <Job>{
    return this.http.post<Job>(this.apiUrl+"/job/add",job);
  }
}
