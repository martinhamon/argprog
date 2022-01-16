import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/auth.service';
import { DialogComponent } from '../dialogc/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logued :boolean = false
  adm : boolean = false
  constructor(private auth : AuthenticationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.logued= this.auth.isUserLoggedIn()
  this.adm = this.auth.isAdmin()
  }

  isLoguedIn():boolean
  {
   return this.auth.isUserLoggedIn()
  }
  abrirDialogo(addType : string) {
    const dialogo1 = this.dialog.open(DialogComponent, {
     data: addType
    });
    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
       console.log("sdfsdf")
    });
  }

}
