import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/auth.service';
import { JobsService } from 'src/app/services/jobs.service';
import { DialogComponent } from '../dialogc/dialog.component';
import { Job } from 'src/app/jobsTemplate';
import { Education } from 'src/app/EducationTemplate';
import { Project } from 'src/app/ProjectTemplate';

import { EventEmitter } from '@angular/core';
import { ComunicationService, } from 'src/app/services/comunication-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logued :boolean = false
  adm : boolean = false
  @Output() emitJobAdd : EventEmitter <any> = new EventEmitter()
  constructor(private auth : AuthenticationService, public dialog: MatDialog
    , private jobService : JobsService, private comuicationService : ComunicationService
    ) { }

  ngOnInit(): void {
    this.logued= this.auth.isUserLoggedIn()
  this.adm = this.auth.isAdmin()


  }

  isLoguedIn():boolean
  {
   return this.auth.isUserLoggedIn()
  }
  abrirDialogo(addType : string) {
    let j : Job = new Job()
    let e : Education =  new Education()
    let p : Project = new Project()
    let obj = undefined

    if (addType==="job")
        obj=j
    else if (addType==="education")
        obj=e
        else if (addType==="project")
        obj=p


    const dialogAdd = this.dialog.open(DialogComponent, {
     data: obj

    });
   dialogAdd.afterClosed().subscribe(obj => {
      if (obj != undefined)
      {

      this.comuicationService.sendMessage(obj)

      }

    });
  }

}
