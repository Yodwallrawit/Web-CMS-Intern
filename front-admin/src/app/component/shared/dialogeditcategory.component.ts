import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-dialogeditcategory',
  templateUrl: 'dialogeditcategory.component.html',
})

export class DialogCEditCategoryComponent {
  categoryservice: ArticleService
  name: any
  parent: any
  parents: any[] = []
  discription: any
  pinorder: any
  id: any
  parent_id: any
  parent_edit: any
  

  @Output() submit = new EventEmitter();

  // panal = new FormControl(this.data.element.parent_id);

  constructor(
    public dialogRef: MatDialogRef<DialogCEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    categoryservice: ArticleService) {
    this.categoryservice = categoryservice;
    this.name = this.data.element.name
    this.parents = this.data.parentt
    this.parent_id = this.data.element.parent_id
    this.discription = this.data.element.discription
    this.pinorder = this.data.element.pinid
    this.parent_edit = this.parent_id


    console.log('dsaxzcqwe', this.parents);
    console.log('data', this.data.element.parent_id);

    // if (this.parents.length > 0) {

    // } else {
    //   this.parents.push({
    //     id: "none",
    //     name: "none",
    //   })
    //   this.panal = new FormControl(this.parents[0].id);
    // }
    // console.log(this.parents.length);
  }

  ngOnInit(): void {

  }

  onClick() {
    let data = {
      id: this.data.element.id,
      name: this.name,
      parent_category: this.parent_edit,
      description: this.discription,
      pin_ordering: this.pinorder
    }
    this.dialogRef.close(data)
    console.log('dssss', data);

  }
}