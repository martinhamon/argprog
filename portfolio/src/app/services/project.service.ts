import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../ProjectTemplate';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl : string ="http://localhost:8080/project/list"
  constructor(private http: HttpClient) {

   }

  getProjects() : Observable < Project[]> {
    //const tasks = of(TASKS);

    return this.http.get<Project[]>(this.apiUrl);
  }
}
