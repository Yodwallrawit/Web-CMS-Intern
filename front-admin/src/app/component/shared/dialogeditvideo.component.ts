import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { element } from 'protractor';
import { ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-dialogeditvideo',
  templateUrl: 'dialogeditvideo.component.html',
})
export class DialogCEditVideoComponent {
  dataSource: any;
  getdatatag: any;
  getedit:any;
  btntext1: any;
  btntext2: any;
  videoservice: ArticleService
  name: any
  url:any
  parent: any
  description: any
  pinorder: any
  id: any

  @Output() submit = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<DialogCEditVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    videoservice: ArticleService) {
    this.videoservice = videoservice;
    this.name = this.data.element.name
    this.url= this.data.element.url
    this.description=this.data.element.description
  }

  ngOnInit(): void {

  }

  onClick() {
    let data = {
      id: this.data.element.id,
      name: this.name,
      url:this.url,
      description:this.description
    }
    this.dialogRef.close(data)
  }
}