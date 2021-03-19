import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
  
@Component({
  selector: 'app-testcrop',
  templateUrl: './testcrop.component.html',
})
export class TestcropComponent {
  title = 'ngImageCrop';
  
  imageChangedEvent: any = '';
    croppedImage: any = '';
  
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    // imageCropped(event: ImageCroppedEvent) {
    //     this.croppedImage = event.base64;
    // }
    imageLoaded() {
        /* show cropper */
    }
    cropperReady() {
        /* cropper ready */
    }
    loadImageFailed() {
        /* show message */
    }

    public image : any;
    public readURL(event) {
        let file = event.target.files[0];
        if (file.length === 0) {
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: any) => { 
                var b64 = reader.result;
                this.image = b64
            }
            reader.readAsDataURL(file);
        }
    }
}