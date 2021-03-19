import { error } from '@angular/compiler/src/util';
import { AfterViewInit, Component, Output, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { AbstractService, ArticleService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';
import { DialogCEditCategoryComponent } from '../shared/dialogeditcategory.component';

export interface PeriodicElement4 {
  name: string;
  parent: string;
  discription: string;
}

let ELEMENT_DATA: PeriodicElement4[] = [];

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
})

export class ManageCategoryComponent extends AbstractService {
  categoryservice: ArticleService;
  delete: any;
  NameCatergory: any;
  Discriptcategory: any;
  selectedCategory: any;
  getparent: any;
  public datasession = JSON.parse(sessionStorage.getItem("User"));
  managecategory: any;
  getdelete: any;
  putedit: any;
  categoryaa: any;
  pinid: any;
  router: Router

  @Output() tablecategory = new EventEmitter();
  getedit: any;

  constructor(categoryservice: ArticleService, public dialog: MatDialog, router: Router) {
    super(null);
    this.categoryservice = categoryservice;
    this.router = router;
  }

  ngOnInit(): void {
    this.getcategory();
    if (!this.isLogin) {
      this.router.navigate(['login']);
    }
  }

  clickManagecategory() {
    if (this.selectedCategory === undefined || this.selectedCategory === null) {
      this.selectedCategory = "";
    }

    let data = {
      name: this.NameCatergory,
      parent_category: this.selectedCategory,
      description: this.Discriptcategory,
      user_id: this.datasession.user.id,
      pin_ordering: this.pinid,
    }

    this.categoryservice.postcategory(data).then((response: any) => {
      this.managecategory = response.data;
      if (this.managecategory) {
        this.dataSource = new MatTableDataSource<PeriodicElement4>(ELEMENT_DATA);
        this.NameCatergory = "";
        this.selectedCategory = "";
        this.Discriptcategory = "";
        this.getcategory();
      }
      else {
      }

    }).catch((error: any) => {
      console.log(error);
    })
  }

  displayedColumns: string[] = ['name', 'parent', 'discription', 'pinid', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement4>(ELEMENT_DATA);
  getnameCategory: any;

  public async getcategory() {
    ELEMENT_DATA = [];
    await this.categoryservice.getcategory().then((response: any) => {
      this.getnameCategory = response;
      for (let i = 0; i < response.length; i++) {
        const element = {
          id: response[i].id,
          name: response[i].name,
          parent: response[i].parent_category_name,
          parent_id: response[i].parent_category,
          discription: response[i].description,
          pinid: response[i].pin_ordering,
        };
        console.log(element)
        ELEMENT_DATA.push(element);
      }
    }).catch((error: any) => {
      console.log(error);
    })
    this.dataSource = new MatTableDataSource<PeriodicElement4>(ELEMENT_DATA);
  }

  openDialog(element, index: number, id: string) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        id: id,
        element: element,
        text: 'Are you sure?',
        btntext1: 'Cancel',
        btntext2: 'Delete'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log('lol', id)
      if (result) {
        const data = this.dataSource.data;
        data.splice(index, 1);
        this.dataSource.data = ELEMENT_DATA;
        this.deleteCategoryparam(element.id, this.datasession.user.id);
      }
    });
  }

  public deleteCategoryparam(id: string, user_id?: string) {
    this.categoryservice.deleteCategoryparam(id, user_id).then((response: any) => {
      this.getdelete = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  async openDialogEdit(element, index: number, id: string, parent: any) {
    const getedit2 = await this.geteditcategory(id);
    console.log('aa', parent);
    console.log('4567', getedit2);

    const dialogRef = this.dialog.open(DialogCEditCategoryComponent, {
      data: {
        id: id,
        element: element,
        parentt: getedit2,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        Object.assign(result, { user_id: this.datasession.user.id })
        const data = this.dataSource.data;
        this.putcategory(element.id, result);
      }
    }
    );
  }

  geteditcategory(category_id?: string) {
    return this.categoryservice.geteditcategory(category_id)
  }

  public putcategory(id: string, data?: string) {
    console.log('kkkk', data);
    this.categoryservice.putcategory(id, data).then((Response: any) => {
      this.putedit = Response;
      this.getcategory();
    }).catch((error: any) => {
      console.log(error);
    })
  }
}
