import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { element } from 'protractor';
import { environment } from '../../../environments/environment';
import { AbstractService, ArticleService } from '../../service/service';

@Component({
    selector: 'app-dialogmanageAdmin',
    templateUrl: 'dialogmanageAdmin.component.html',
})
export class DialogManageAdminComponent extends AbstractService {
    categoryservice: ArticleService
    editpass: any;
    @Input() Textvalue: string;
    editMode: boolean;
    nameshow: any;
    usernameshow: any;
    firstnameshow: any;
    lastnameshow: any;
    emailshow: any;
    imageshow: any;
    IsEditactivePass: boolean = false;
    IsEditactiveSave: boolean = false;
    selectnewPosition: any;
    editSelect: boolean;
    IsEditPosition: boolean;
    IsBtnPosition: boolean;
    IsEditactivePass555: boolean;
    IsEditactiveSaveSelect: boolean;
    editModeSelect: boolean;
    editMode2: boolean;
    IsEditPosition555: boolean;
    IsEditactiveSave555: boolean;
    public datasession = JSON.parse(sessionStorage.getItem("User"));
    public apiBaseURL = environment.apiBaseURL

    @Output() submit = new EventEmitter();
    @Output() keepdataContact = new EventEmitter();
    putEditadmin: any;


    constructor(
        public dialogRef: MatDialogRef<DialogManageAdminComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        categoryservice: ArticleService) {
        super(null)
        this.IsEditactiveSave != this.IsEditactiveSave
        this.categoryservice = categoryservice;
        console.log(this.data);
        this.nameshow = this.data.element.name;
        this.usernameshow = this.data.element.username;
        this.firstnameshow = this.data.element.firstname;
        this.lastnameshow = this.data.element.lastname;
        this.emailshow = this.data.element.email;
        this.imageshow = this.apiBaseURL + this.data.element.image;
        this.selectnewPosition = this.data.element.position;
    }

    ngOnInit(): void {

    }
    onClicksave() {
        this.editMode = false
        this.IsEditactivePass = false
        this.IsEditactiveSave = false


        if (this.editpass === undefined || this.editpass === "") {
            alert("Error")
        } else {
            let data = {
                newpassword: this.editpass,
                user_id: this.datasession.user.id
            }
            this.putadmin(this.data.element.id, data)
        }


    }

    onClicksaveType() {
        this.editMode2 = false
        this.IsEditactivePass555 = false
        this.IsEditactiveSave555 = false

       
            let data = {
                type: this.selectnewPosition,
                user_id: this.datasession.user.id
            }
            this.puttype(this.data.element.id, data)
        


    }

    onClick() {

    }

    public putadmin(id: string, data?: any) {
        this.categoryservice.putadmin(id, data).then((response: any) => {
            this.putEditadmin = response;
        }).catch((error: any) => {
            console.log(error);
        })
    }

    public puttype(id: string, data?: any) {
        this.categoryservice.puttype(id, data).then((response: any) => {
            this.putEditadmin = response;
        }).catch((error: any) => {
            console.log(error);
        })
    }
}