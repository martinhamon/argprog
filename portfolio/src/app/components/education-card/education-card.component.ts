import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/EducationTemplate';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
  @Input() edu: any;
  @Input() logued : boolean=false;
  @Output() emitDelete : EventEmitter <string>= new EventEmitter();
  @Output() emitEdit : EventEmitter <string>= new EventEmitter();
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  edu_title : string = ""
  edu_sub_title: string = ""
  edu_logo: string = ""
  edu_description: string = ""
  start: string = ""
  end: string = ""
  constructor() { }

  ngOnInit(): void {
    this.edu_title  = this.edu["title"]
    this.edu_sub_title = this.edu["subTitle"]
    this.edu_logo = this.edu["logo"]
    this.edu_description = this.edu["description"]
    this.start= this.edu["start"]
    this.end = this.edu["end"]

  }

  onDelete(){
    this.emitDelete.emit()
  }

  onEdit(){
    this.emitEdit.emit()
  }

}
