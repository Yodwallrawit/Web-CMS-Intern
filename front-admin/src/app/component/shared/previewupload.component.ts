import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { elementAt } from 'rxjs/operators';
import { DialoguploadComponent } from './dialogupload.component';
import { Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-previewupload',
  templateUrl: 'previewupload.component.html',
})
export class PreviewuploadComponent {
  constructor(public dialog: MatDialog) { }
  public imgput: any;

 @Output() imageApi = new EventEmitter();

  openDialog() {
    let data = {
      image: this.image
    }
    const dialogRef = this.dialog.open(DialoguploadComponent, {
      data: data,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.imgput = result;
      this.imageApi.emit(this.imgput)
    });
  }

  public image: any;

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

  ngAfterViewInit(): void {

  }

}