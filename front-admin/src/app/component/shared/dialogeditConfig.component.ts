import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { element } from 'protractor';
import { environment } from '../../../environments/environment';
import { ArticleService } from '../../service/service';

@Component({
    selector: 'app-dialogeditConfig',
    templateUrl: 'dialogeditConfig.component.html',
})
export class DialogEditConfigComponent {
    dataSource: any;
    getdatacategory: any;
    getedit: any;
    btntext1: any;
    btntext2: any;
    categoryservice: ArticleService
    editimg: any
    namecontact: any
    Urlnumber: any;
    description: any
    pinorder: any
    id: any
    FactEditImg: boolean = false
    public apiBaseURL = environment.apiBaseURL

    @Output() submit = new EventEmitter();
    @Output() keepdataContact = new EventEmitter();

    constructor(
        public dialogRef: MatDialogRef<DialogEditConfigComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        categoryservice: ArticleService) {
        this.categoryservice = categoryservice;
        this.editimg = this.apiBaseURL + this.data.element.image
        this.namecontact = this.data.element.name
        this.Urlnumber = this.data.element.urlnumber
        this.description = this.data.element.description
    }

    ngOnInit(): void {

    }

    onSide(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.editimg = event.target.result;
                // console.log('sssss', this.editimg)
            }
            this.FactEditImg = true;
            // console.log(' this.FactEditImg', this.FactEditImg)
        }
        else {

        }
    }


    onClick() {
        let getfact = this.editimg
        if (this.FactEditImg) {

        } else {
            getfact = "";
        }
        let data = {
            id: this.data.element.id,
            icon: getfact,
            lable: this.namecontact,
            url: this.Urlnumber,
            value: this.description,
        }
        this.dialogRef.close(data);
        // this.keepdataContact.emit(data);
        console.log('sss', data);
    }
}