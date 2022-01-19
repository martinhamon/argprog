import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/jobsTemplate';
import { Project } from 'src/app/ProjectTemplate';
import { Education } from 'src/app/EducationTemplate';
import { EducationService } from 'src/app/services/education.service';
import { ProjectService } from 'src/app/services/project.service';
import { AuthenticationService } from 'src/app/services/auth.service';
import { Observable,of, Subscription } from 'rxjs';
import { DialogComponent } from '../dialogc/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/SkillTemplate';
import { ComunicationService } from 'src/app/services/comunication-service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   jobs:Job [] = []
   tjobs:Job [] = []

   projects : Project[]=[]
   educations : Education []=[]
  logued :boolean = false
  adm : boolean = false
 private comuServiceEndRef : Subscription =new Subscription
  constructor(private jobsservice :JobsService,
    private educationService: EducationService, private projectService: ProjectService,
    private auth : AuthenticationService, public dialog: MatDialog, private comuicationService : ComunicationService
    ) { }
    ngOnDestroy() {
      this.comuServiceEndRef.unsubscribe()
    }
  ngOnInit(): void {

 //Suscribirse al servicio

 this.comuServiceEndRef=this.comuicationService.sendMessageObservable.subscribe(response =>{
console.log("Evento disparado.........");

  if (response instanceof Job)
   {

    this.jobAdd(response)
       console.log(response);

    }
    else if(response instanceof Education){
      this.educationAdd(response)
    }
    else if(response instanceof Project){
      this.projectAdd(response)
    }
})
  this.logued= this.auth.isUserLoggedIn()
  this.adm = this.auth.isAdmin()

    this.jobsservice.getJobs().subscribe(
      (      data: Job[]) => {
      this.jobs = data

     // console.log(data);
    });
    this.projectService.getProjects().subscribe(
      (      data: Project[]) => {
        this.projects=data
    });
    this.educationService.getEducation().subscribe((data: Education[]) => {
      this.educations=data
    });

  }

  jobDelete (job : Job){
   // console.log("evento emitido :     "+job.id);
    this.jobsservice.deleteJob(job).subscribe(() =>
    [
      this.jobs = this.jobs.filter ((j) => j.id !== job.id)
    ]);
  }

  projectAdd (pro: Project){



  this.projectService.editAddProject(pro).subscribe ((data: Project)=>{

    this.projects = this.projects.concat([data])
  })


  }

  educationAdd(education : Education){



  this.educationService.ediatAddEducation(education).subscribe ((data: Education)=>{



      this.educations =this.educations.concat([data])
      })
  }

  jobAdd(job : Job): void {


    this.jobsservice.editJob(job).subscribe ((data: Job)=>{
      this.jobs=this.jobs.concat([data])
       })
  }



  jobEdit(job : Job) {
        job.setSubTitle="78...."
        let index = 0;
        let jbn : Job = job;
      this.jobsservice.editJob(job).subscribe ((data: Job)=>{
        jbn=data


      this.jobs =this.jobs.map( (jb, index, array) => {

        if (jb.id === job.id)
        {
          //console.log("evento jobEdit :     "+job.id);
          jbn.id=jb.id
          jbn.setLogo=jb.getLogo
          jbn.setTtitle=jb.getTitle
          jbn.setSubTitle=jb.getSubTitle
          jbn.setTasks=jb.getTasks
          jbn.setStart=jb.getStart
          jbn.setEnd=jb.getEnd
          return jbn
          }
          else

          return jb

      }
      )});


      }



      projectDelete(pro: Project){
        this.projectService.projectDelete(pro).subscribe(() =>
        [
          this.projects = this.projects.filter ((j) => j.id !== pro.id)
        ]);
      }


      projectEdit (pro: Project){

        pro.subTitle="1...."
        let index = 0;
        let pron : Project = pro;
      this.projectService.editAddProject(pro).subscribe ((data: Project)=>{
        pron=data


      this.projects =this.projects.map( (jb, index, array) => {

          if (jb.id === pro.id)
          {
            //console.log("evento jobEdit :     "+job.id);
            pron.id=jb.id
            pron.title=jb.title
            pron.subTitle=jb.subTitle
            pron.description=jb.description
            pron.url=jb.url

            return pron
          }
          else

          return jb

      }
      )});


      }


      educationDelete (edu : Education){
        this.educationService.deleteEducation(edu).subscribe(() =>
        [
          this.educations = this.educations.filter ((j) => j.id !== edu.id)
        ]);
      }


      educationEdit (edu : Education){


        let index = 0;
        let edun : Education = edu;
      this.educationService.ediatAddEducation(edu).subscribe ((data: Education)=>{
        edun=data


      this.educations =this.educations.map( (jb, index, array) => {

          if (jb.id === edu.id)
          {
            //console.log("evento jobEdit :     "+job.id);
            edun.id=jb.id
            edun.setlogo=jb.getlogo
            edun.settitle=jb.gettitle
            edun.setsubTitle=jb.getsubTitle
            edun.setdescription=jb.getdescription
            edun.setstart=jb.getstart
            edun.setend=jb.getend

            return edun
          }
          else

          return jb

      }
      )});


      }

      openDialog(){

      }



}
