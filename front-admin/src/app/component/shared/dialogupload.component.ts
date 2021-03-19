import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog' 
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
    selector: 'app-dialogupload',
    templateUrl: 'dialogupload.component.html',

})
export class DialoguploadComponent {
    @ViewChild('fileimg', {static :false})
    public fileimg: ElementRef<HTMLElement>
    
    constructor(public dialogRef: MatDialogRef<DialoguploadComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,) { 
 

    }

    ngOnInit(): void {
        setTimeout(() => {
            this.fileimg.nativeElement.click()
        }, 1);
    }
    imageChangedEvent: any = '';
    croppedImage: any = '';
    public image : any;
      
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log('this.croppedImage ',event)
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    public readURL(event) {
        let file = event.target.files[0];
        if (file.length === 0) {
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: any) => {
                var b64 = reader.result;
                this.croppedImage = b64
                
            }
            reader.readAsDataURL(file);
        }
    }

}