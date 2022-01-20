import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../profileTemplate';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl : string ="http://localhost:8080/profile/"
  constructor(private http : HttpClient) { }

  public getProfile (id :Number) : Observable<Profile>{

     let profile =this.http.get<Profile>(this.apiUrl+"get")
    return profile
  }

  public saveProfile ( profile : Profile): Observable<Profile>{
        return this.http.post<Profile>(this.apiUrl+"save",profile)
  }

}
