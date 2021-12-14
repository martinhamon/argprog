import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/jobsTemplate';
import { JOBS } from 'src/app/mock-jobs';
@Component({
  selector: 'app-mh-card',
  templateUrl: './mh-card.component.html',
  styleUrls: ['./mh-card.component.css']
})
export class MhCardComponent implements OnInit {
  @Input() job:Job = JOBS[1]

  constructor() { }

  ngOnInit(): void {
  }

}
