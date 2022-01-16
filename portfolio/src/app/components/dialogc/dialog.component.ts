import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Job } from 'src/app/jobsTemplate';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Job) { }

  ngOnInit(): void {
  }
  cancelar() {
    this.dialogRef.close();
  }
}
