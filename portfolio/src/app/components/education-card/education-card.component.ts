import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/EducationTemplate';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
  @Input() edu: any;
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  constructor() { }

  ngOnInit(): void {
  }

}
