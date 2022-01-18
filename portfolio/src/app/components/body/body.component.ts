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

  constructor(private jobsservice :JobsService,
    private educationService: EducationService, private projectService: ProjectService,
    private auth : AuthenticationService, public dialog: MatDialog, private comuicationService : ComunicationService
    ) { }
    ngOnDestroy() {

    }
  ngOnInit(): void {
 //Suscribirse al servicio
 this.comuicationService.sendMessageObservable.subscribe(response =>{
   if (response instanceof Job)
   {

    this.jobAdd(response)
       console.log(response);
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
      this.jobs = this.jobs.filter ((j) => j.getId !== job.getId)
    ]);
  }

  jobAdd(job : Job) {

    let index = 0;
    job.setId=0
    let jbn : Job = job;
    this.jobsservice.editJob(job).subscribe ((data: Job)=>{
    jbn=data


  this.jobs=this.jobs.concat([job])


  })
}



  jobEdit(job : Job) {
        job.setSubTitle="78...."
        let index = 0;
        let jbn : Job = job;
      this.jobsservice.editJob(job).subscribe ((data: Job)=>{
        jbn=data


      this.jobs =this.jobs.map( (jb, index, array) => {

        if (jb.getId === job.getId)
        {
          //console.log("evento jobEdit :     "+job.id);
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
            pron.logo=jb.logo
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

        edu.subTitle="78...."
        let index = 0;
        let edun : Education = edu;
      this.educationService.ediatAddEducation(edu).subscribe ((data: Education)=>{
        edun=data


      this.educations =this.educations.map( (jb, index, array) => {

          if (jb.id === edu.id)
          {
            //console.log("evento jobEdit :     "+job.id);
            edun.logo=jb.logo
            edun.title=jb.title
            edun.subTitle=jb.subTitle
            edun.description=jb.description
            edun.start=jb.start
            edun.end=jb.end

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
