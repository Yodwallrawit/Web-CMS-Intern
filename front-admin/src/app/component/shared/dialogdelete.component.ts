import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { publish } from 'rxjs/operators';
@Component({
  selector: 'app-dialogdelete',
  templateUrl: 'dialogdelete.component.html',
})
export class DialogContentExampleDialog {
  dataSource: any;
  getdataarticle: any;  
  public isBtnDelete : boolean;
  btntext1: any;
  btntext2: any;
  @Output() submit = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      
      this.isBtnDelete = this.data.isBtnDelete;
     }

  ngOnInit(): void {
    console.log('afasfsfa', this.data.isBtnDelete)
  }

  clickdelete() {
    this.submit.emit(true);
  }

  clickCancelDelete() {
    this.submit.emit(false); 
  }

}