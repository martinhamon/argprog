import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FILE_URL } from 'src/app/globals';




@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})

export class FileUploaderComponent implements OnInit {
  // const URL = '/api/';

  public uploader:FileUploader = new FileUploader({url: FILE_URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
