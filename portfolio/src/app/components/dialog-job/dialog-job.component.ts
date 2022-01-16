import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Job } from 'src/app/jobsTemplate';
@Component({
  selector: 'app-dialog-job',
  templateUrl: './dialog-job.component.html',
  styleUrls: ['./dialog-job.component.css']
})
export class DialogJobComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogJobComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Job) { }

  ngOnInit(): void {
  }
  cancelar() {
    this.dialogRef.close();
  }
}
