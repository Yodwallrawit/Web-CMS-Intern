import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { element } from 'protractor';
import { ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-dialogedittag',
  templateUrl: 'dialogedittag.component.html',
})
export class DialogCEditTagComponent {
  dataSource: any;
  getdatatag: any;
  getedit:any;
  btntext1: any;
  btntext2: any;
  tagservice: ArticleService
  name: any
  parent: any
  discription: any
  pinorder: any
  id: any

  @Output() submit = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<DialogCEditTagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    tagservice: ArticleService) {
    this.tagservice = tagservice;
    this.name = this.data.element.name
  }

  ngOnInit(): void {
    this.getcategory();
  }

  getcategory() {
    this.tagservice.getcategory().then((response: any) => {
      this.getdatatag = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  onClick() {
    let data = {
      id: this.data.element.id,
      name: this.name,
    }
    this.dialogRef.close(data)
    console.log('tag', data);
  }
}