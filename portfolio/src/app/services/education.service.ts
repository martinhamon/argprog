import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../EducationTemplate';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl : string ="http://localhost:8080/education/"
  constructor(private http: HttpClient) {

   }

  getEducation() : Observable < Education[]> {
    //const tasks = of(TASKS);

    return this.http.get<Education[]>(this.apiUrl+"list");
  }
  deleteEducation(edu : Education) : Observable<Education>{
    return this.http.delete<Education>(this.apiUrl+"delete/"+edu.id)
  }

  ediatAddEducation (edu : Education): Observable<Education>{
    return this.http.post<Education>(this.apiUrl+"add",edu)
  }
}
