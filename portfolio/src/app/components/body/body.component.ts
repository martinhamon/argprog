import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/jobsTemplate';
import { Project } from 'src/app/ProjectTemplate';
import { Education } from 'src/app/EducationTemplate';
import { EducationService } from 'src/app/services/education.service';
import { ProjectService } from 'src/app/services/project.service';
import { AuthenticationService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   jobs:Job [] = []
   projects : Project[]=[]
   educations : Education []=[]
  logued :boolean = false ;
  constructor(private jobsservice :JobsService,
    private educationService: EducationService, private projectService: ProjectService,
    private auth : AuthenticationService
    ) { }

  ngOnInit(): void {
  this.logued= this.auth.isUserLoggedIn()
    this.jobsservice.getJobs().subscribe(
      data => {
      this.jobs = data

     // console.log(data);
    });
    this.projectService.getProjects().subscribe(
      data => {
        this.projects=data
    });
    this.educationService.getEducation().subscribe(data => {
      this.educations=data
    });

  }

}
