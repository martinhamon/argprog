import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../EducationTemplate';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl : string ="http://localhost:8080/education/list"
  constructor(private http: HttpClient) {

   }

  getEducation() : Observable < Education[]> {
    //const tasks = of(TASKS);

    return this.http.get<Education[]>(this.apiUrl);
  }
}
