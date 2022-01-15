import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/ProjectTemplate';

@Component({
  selector: 'app-proyects-card',
  templateUrl: './proyects-card.component.html',
  styleUrls: ['./proyects-card.component.css']
})
export class ProyectsCardComponent implements OnInit {
  @Input() prj:any
  @Input() logued : boolean=false;
  @Output() emitDelete : EventEmitter <string>= new EventEmitter();
  @Output() emitEdit : EventEmitter <string>= new EventEmitter();
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  pry_title : string =""
  pry_subTitle: string =""
  pry_description: string =""
  pry_url: string =""
  constructor() { }

  ngOnInit(): void {
    this.pry_title = this.prj["title"]
    this.pry_subTitle=this.prj["subTitle"]
    this.pry_description=this.prj["description"]
    this. pry_url=this.prj["url"]
  }
  onDelete(){
    this.emitDelete.emit()
  }
 onEdit(){

  this.emitEdit.emit()
 }



}
