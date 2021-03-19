import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog' 
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({

    selector: 'app-dialoglogin',
    templateUrl: 'dialoglogin.component.html',

})
export class DialogloginComponent {

    constructor(public dialoglogin: MatDialogRef<DialogloginComponent,any>){

    }

}