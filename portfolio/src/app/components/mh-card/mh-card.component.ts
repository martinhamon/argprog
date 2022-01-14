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
  @Output() emitEdit : EventEmitter <string>= new EventEmitter();
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  title : string = ""
  subTitle: string = ""
  logo: string = ""
  tasks: string = ""
  job_id: string=""
  start: string = ""
  end: string = ""

  constructor( ) { }

  ngOnInit(): void {


    this.logo=this.job["logo"]
    this.title =this.job["title"]
    this.subTitle=this.job["subTitle"]
    this.tasks=this.job["tasks"]
    this.start=this.job["start"]
    this.end=this.job["end"]
    this.job_id = this.job["id"]
  }

onDelete (j : string) : void{

this.emitDelete.emit(this.job_id);

}


onEdit() : void {
  console.log("Editando")
  this.emitEdit.emit()
}

}
