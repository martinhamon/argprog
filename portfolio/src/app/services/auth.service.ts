import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import {Rol} from '../rolTemplate';
export class User {
  constructor(public status: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  url  =""
  private isadmin =false
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
          //sessionStorage.setItem("isadm",  this.isAdmin ())

          return userData;
        })
      );
   }

   public isAdmin() : boolean{
    this.hasRole("ROLE_ADMIN")
     return this.isadmin;
   }


    async hasRole (role : String):Promise<boolean>{
      let isadm =false;
      let data = await  this.httpClient
      .get<[Rol]>("http://localhost:8080/rol/info").toPromise()

      if (data !=null)
      data.forEach((element: Rol) => {
        if (element.authority == "ROLE_ADMIN")
        {
        console.log("En hasRole:   " +  element.authority )

        this.isadmin= true;
        isadm=this.isadmin
        }

      })





     /* let  a = this.httpClient
      .get<any>("http://localhost:8080/rol/info");

      a.forEach(element => {

        if (element[0]["authority"].toString() === role)
        {
        isadm = true
        console.log("En forrrrr:   " + isadm);
        }
      });

      console.log("Es admin1?: 11  " +isadm);*/
      return isadm;
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
