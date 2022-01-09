import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
  }

  isLoguedIn():boolean
  {
   return this.auth.isUserLoggedIn()
  }

}
