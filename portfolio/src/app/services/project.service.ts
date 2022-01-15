import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../ProjectTemplate';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl : string ="http://localhost:8080/project/"
  constructor(private http: HttpClient) {

   }

  getProjects() : Observable < Project[]> {


    return this.http.get<Project[]>(this.apiUrl+"list");
  }

  projectDelete(pro : Project) : Observable<Project>{


    return this.http.delete<Project>(this.apiUrl+"delete/"+pro.id)
  }
  editAddProject (pro : Project) : Observable<Project>
  {
    return this.http.post<Project>(this.apiUrl+"add",pro)
  }
}
