import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileHandle } from '../shared/dragDrop.directive';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
})
export class UploadimgComponent {
  files: FileHandle[] = [];
  image: any;
  
  CancelImg:boolean = false;
  @Output() public dataIMGArticle = new EventEmitter();


 
  filesDropped(files: FileHandle[]) {
    this.files = files;
    for(let data of this.files){ 
      this.readThis(data.file);
    }
  }

  

  clear() {
    this.image = '';
    this.files = [];
    this.CancelImg = false;
    
  }

  changeListener($event): void {
    this.readThis($event.target.files[0]);
    console.log('$event',$event.target.files);
  }

  readThis(inputValue: any): void {

    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.CancelImg = true;
      // console.log('this.image', this.image);
      this.dataIMGArticle.emit(this.image);
    }
    myReader.readAsDataURL(inputValue);
  }


}