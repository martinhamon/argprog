import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url  =""
  currentUserSubjet : BehaviorSubject <any>;
  constructor(private httpClient: HttpClient ) {

    this.currentUserSubjet= new BehaviorSubject <any > (JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

   public login(credenciales : any ):Observable <any>{
     return this.httpClient.post(this.url, credenciales).pipe(map(data=>{

      sessionStorage.setItem ('currentUser',JSON.stringify(data))
      return data
     }))

   }
}
