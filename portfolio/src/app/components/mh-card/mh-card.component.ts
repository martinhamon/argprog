import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Job } from 'src/app/jobsTemplate';

import { faPen, faPenFancy, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-mh-card',
  templateUrl: './mh-card.component.html',
  styleUrls: ['./mh-card.component.css']
})
export class MhCardComponent implements OnInit {
  @Input() job:any
  @Input() logued : boolean=false;
  @Input () adm : boolean = false
  @Output() emitDelete : EventEmitter <string>= new EventEmitter();
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  job_title : string = ""
  job_sub_title: string = ""
  job_logo: string = ""
  job_tasks: string = ""
  job_id: string=""
  start: string = ""
  end: string = ""

  constructor( ) { }

  ngOnInit(): void {


    this.job_logo=this.job["logo"]
    this.job_title =this.job["title"]
    this.job_sub_title=this.job["job_sub_title"]
    this.job_tasks=this.job["tasks"]
    this.start=this.job["start"]
    this.end=this.job["end"]
    this.job_id = this.job["id"]
  }

onDelete (j : string){

this.emitDelete.emit(this.job_id);

}


onEdit(){
  console.log("Editando")
}

}
