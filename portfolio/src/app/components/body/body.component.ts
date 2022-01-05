import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/jobsTemplate';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   jobs:Job [] = []
  constructor(private jobsservice :JobsService) { }

  ngOnInit(): void {

    this.jobsservice.getJobs().subscribe(data => {
      this.jobs = data;
     // console.log(data);
    });;

  }

}
