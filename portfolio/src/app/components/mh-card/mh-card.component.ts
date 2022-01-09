import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/jobsTemplate';

import { faPen, faPenFancy, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mh-card',
  templateUrl: './mh-card.component.html',
  styleUrls: ['./mh-card.component.css']
})
export class MhCardComponent implements OnInit {
  @Input() job:any
  @Input() logued : boolean=false;
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  job_title : string = ""
  job_sub_title: string = ""
  job_logo: string = ""
  job_tasks: string = ""
  start: string = ""
  end: string = ""
  constructor( ) { }

  ngOnInit(): void {

    console.log("Job: " +this.job["title"]);
    this.job_logo=this.job["logo"]
    this.job_title =this.job["title"]
    this.job_sub_title=this.job["job_sub_title"]
    this.job_tasks=this.job["tasks"]
    this.start=this.job["start"]
    this.end=this.job["end"]
  }

}
