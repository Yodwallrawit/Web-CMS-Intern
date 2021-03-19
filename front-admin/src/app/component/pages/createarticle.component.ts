import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AbstractService, ArticleService } from 'src/app/service/service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { TagModel } from 'ngx-chips/core/accessor';
import { Router } from '@angular/router';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
})
export class CreateArticle extends AbstractService {
  public createarticleService: ArticleService 
  public router :Router
  header2: any;
  header3: any;
  header4: any;
  value: any
  precontent: any;
  header: any;
  keepurl: any;
  getmenudrop: any;
  selectedID = 0;
  keepstatus: any;
  keepdatetime: any;
  dataEditer: any;
  imgupload64: any;
  SelectTag: any;
  selectedStatus = 'private';
  getdeletearticle: any;
  isActiveHeader: boolean = false;
  isActivePrecontent: boolean = false;
  isActiveURL: boolean = false;
  isActiveDatetime: boolean = false;
  isActiveCategory: boolean = false;
  isActiveContent: boolean = false;
  isActiveImage: boolean = false;
  

  styletest: string = "";
  public keeptag: any[] = [];
  public Editor = DecoupledEditor;
  public datasession = JSON.parse(sessionStorage.getItem("User"));

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  createArticle: any;
  // files: FileHandle[] = [];

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }


  constructor(createarticleService: ArticleService,router:Router) {
    super(null);
    this.createarticleService = createarticleService;
    this.router = router
  }

  autocompleteItemsAsObjects = [];


  ngOnInit(): void {
    this.getcategory();
    this.gettag();
    if (!this.isLogin()) {
      this.router.navigate(['login']);
    }
  }


  img64(image: any) {
    this.imgupload64 = image
    // console.log('lolsas',this.imgupload64);
  }

  somethingChanged(date: any) {
    const datestring: string = new Date(date).toString();
    // console.log('date', datestring);
    this.keepdatetime = datestring;
  }

  create() {

    let checkerror = false


    if (this.header === undefined || this.header === "") {
      this.isActiveHeader = true
      checkerror = true
    } else {
      this.isActiveHeader = false;
    }

    if (this.precontent === undefined || this.precontent === "") {
      this.isActivePrecontent = true
      checkerror = true
    } else {
      this.isActivePrecontent = false;
    }

    if (this.dataEditer === undefined || this.dataEditer === "") {
      this.isActiveContent = true
      checkerror = true
    } else {
      this.isActiveContent = false;
    }

    if (this.imgupload64 === undefined || this.imgupload64 === "") {
      this.isActiveImage = true
      checkerror = true
    } else {
      this.isActiveImage = false;
    }

    if (this.keepurl === undefined || this.keepurl === "") {
      this.isActiveURL = true
      checkerror = true

    } else {
      this.isActiveURL = false;
    }
    if (this.keepdatetime === undefined || this.keepdatetime === "") {
      this.isActiveDatetime = true
      checkerror = true

    } else {
      this.isActiveDatetime = false;
    }

    if (this.selectedID === 0 || this.selectedID === undefined) {
      this.isActiveCategory = true
      checkerror = true
    } else {
      this.isActiveCategory = false;
    }


    this.keeptag = [];
    if (this.SelectTag !== undefined && this.SelectTag.length > 0) {
      for (const iterator of this.SelectTag) {
        this.keeptag.push(iterator.id);
      }
      console.log("SSS",this.keeptag);
      
    }

    let data = {
      title: this.header,
      category_id: this.selectedID,
      content: this.dataEditer,
      pre_content: this.precontent,
      cover_image: this.imgupload64,
      tag_id: this.keeptag,
      url_video: this.keepurl,
      status: this.selectedStatus,
      user_id: this.datasession.user.id,
      publish_datetime: this.keepdatetime,
    }

    if (this.selectedID === 0) {
      delete data.category_id;
    }

    if (checkerror) {

    } else {
      this.createarticleService.PostcreateArticle(data).then((response: any) => {
        this.createArticle = response.data;
        // window.location.reload()

      }).catch((error: any) => {
        console.log(error);
      })
    }

  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.dataEditer = data;
    // console.log('this.dataEditer', this.dataEditer)
  }

  public getcategory() {
    this.createarticleService.getcategory().then((response: any) => {
      this.getmenudrop = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public gettag() {
    this.createarticleService.gettag().then((response: any) => {
      const gettagname: any[] = response;
      for (const iterator of gettagname) {
        this.autocompleteItemsAsObjects.push({ value: iterator.name, id: iterator.id })
      }
      // console.log('99990,',this.autocompleteItemsAsObjects)
    }).catch((error: any) => {
      console.log(error);
    })
  }
}