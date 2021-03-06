import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';

export class User {
  constructor(public status: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  url  =""
  currentUserSubjet : BehaviorSubject <any>;
  constructor(private httpClient: HttpClient  , private router:Router) {

    this.currentUserSubjet= new BehaviorSubject <any > (JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

   authenticate(username : string, password : string) {
    return this.httpClient
      .post<any>("http://localhost:8080/login", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
   }
   isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
   // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");

    this.router.navigate(['login']);
  }
}
