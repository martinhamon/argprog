import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyects-card',
  templateUrl: './proyects-card.component.html',
  styleUrls: ['./proyects-card.component.css']
})
export class ProyectsCardComponent implements OnInit {
  @Input() prj:any
  @Input() logued : boolean=false;
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  pry_title : string =""
  pry_subTitle: string =""
  pry_description: string =""
  pry_url: string =""
  constructor() { }

  ngOnInit(): void {
    this.pry_title = this.prj["title"]
    this.pry_subTitle=this.prj["subtitle"]
    this.pry_description=this.prj["description"]
    this. pry_url=this.prj["url"]
  }

}
