import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/jobsTemplate';
import { JOBS } from 'src/app/mock-jobs';
import { faPen, faPenFancy, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mh-card',
  templateUrl: './mh-card.component.html',
  styleUrls: ['./mh-card.component.css']
})
export class MhCardComponent implements OnInit {
  @Input() job:Job = JOBS[1]
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  constructor() { }

  ngOnInit(): void {
  }

}
