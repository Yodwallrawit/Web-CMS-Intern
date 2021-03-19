import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { element } from 'protractor';
import { environment } from '../../../environments/environment';
import { AbstractService, ArticleService } from '../../service/service';
import { FileHandle } from './dragDrop.directive';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogallcontent',
  templateUrl: 'dialogallcontent.component.html',
})
export class DialogEditAllcontentComponent extends AbstractService {
  files: FileHandle[] = [];
  //ngModelEdit
  router: Router;
  public categorydrop: ArticleService
  public apiBaseURL = environment.apiBaseURL
  public datasession = JSON.parse(sessionStorage.getItem("User"));
  headernew: any;
  isActiveImage: boolean = false
  isActiveImageNew: boolean = false
  selectcategoryNew: any;
  selectnewStatus: any;
  image: any;
  isUpload: boolean = false;
  newimage: boolean = false;
  imageInput: boolean = false;
  isActiveText: boolean = false;
  newprecontent: any;
  newUrl: any;
  date: any;
  dataEditer: any;
  SelectTag: any;
  autocompleteItemsAsObjects = [];
  getmenu: any;//
  imagenew: any;
  ifEditImg: boolean = false;
  public keeptag: any[] = [];
  imageNew: boolean = false;
  EditorNew: any;
  pinorder: any;
  ArrIDTag:any[] = [];


  constructor(categorydrop: ArticleService, public dialogRef: MatDialogRef<DialogEditAllcontentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, router: Router) {
    super(null);
    this.router = router;
    console.log("data", data);
    this.categorydrop = categorydrop;
    this.headernew = this.data.olddata[0].title;
    this.selectcategoryNew = this.data.olddata[0].category_name;
    this.newprecontent = this.data.olddata[0].pre_content;
    this.newUrl = this.data.olddata[0].url_video;
    this.image = this.apiBaseURL + this.data.olddata[0].cover_image;
    this.date = this.data.olddata[0].publish_datetime.substring(0, 19);
    this.EditorNew = this.data.olddata[0].content;
    this.selectcategoryNew = this.data.olddata[0].category_id;
    this.selectnewStatus = this.data.olddata[0].status;
    this.pinorder = this.data.olddata[0].pin_ordering;
      
    for (const iterator of this.data.olddata[0].tag) {
        console.log('iterator', iterator);
        const element = { display: iterator.name, value: iterator._id }
        this.keeptag.push(element);
      }    
      console.log(this.keeptag);
     this.SelectTag = this.keeptag;
   
   
  }
 
  

  ngOnInit(): void {
    if (!this.isLogin()) {
      this.router.navigate(['login']);
    }
    this.getcategory();
    this.gettag()

  }

  CancelImg: boolean = false;
  @Output() public dataIMGArticle = new EventEmitter();
  public Editor = DecoupledEditor;
  keepdatetime: string;


  filesDropped(files: FileHandle[]) {
    this.files = files;
    for (let data of this.files) {
      this.readThis(data.file);
    }
  }

  clear() {
    this.imagenew = '';
    this.files = [];
    this.CancelImg = false;
    this.isActiveText = false;
    this.imageNew = false;
  }

  changeListener($event): void {
    this.readThis($event.target.files[0]);
    console.log('$event', $event.target.files);
  }
  somethingChanged(date: any) {
    const datestring: string = new Date(date).toString();
    this.keepdatetime = datestring;
  }

  readThis(inputValue: any): void {
    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.imagenew = myReader.result;
      this.CancelImg = true;
      this.imageNew = true;
      this.isActiveText = true;
      this.ifEditImg = true;

    }
    myReader.readAsDataURL(inputValue);
  }
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.dataEditer = data;
    // console.log('this.dataEditer', this.dataEditer)
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public getcategory() {
    this.categorydrop.getcategory().then((response: any) => {
      this.getmenu = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public gettag() {
    this.categorydrop.gettag().then((response: any) => {
      const gettagname: any[] = response;
      for (const iterator of gettagname) {
        this.autocompleteItemsAsObjects.push({ value: iterator.name, id: iterator.id })
      }
      // console.log('99990,', gettagname)
    }).catch((error: any) => {
      console.log(error);
    })
  }
  onClick() {
    let getfactChangeImg = this.imagenew
    
    this.ifEditImg
    if (this.ifEditImg) {

    } else {
      getfactChangeImg = "";
    }

   const arrayTag = []  
    for (const objtag of this.SelectTag) {
      
      arrayTag.push(objtag.value);
    }
    console.log(arrayTag);
    
    let data = {
      id: this.data.element.id,
      title: this.headernew,
      cover_image: getfactChangeImg,
      category_id: this.selectcategoryNew,
      content: this.EditorNew,
      pre_content: this.newprecontent,
      tag_id:arrayTag,
      url_video: this.newUrl,
      status: this.selectnewStatus,
      publish_datetime: this.date,
      user_id: this.datasession.user.id,
      pin_ordering : this.pinorder,
    }
    this.dialogRef.close(data)
    // console.log('LOLOZAZA', data);

  }
}