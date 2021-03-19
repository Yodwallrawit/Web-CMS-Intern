import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AbstractService, ArticleService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';
import { Observable, interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DialogCEditTagComponent } from '../shared/dialogedittag.component';
export interface PeriodicElement3 {
  name: string;

}

let ELEMENT_DATA: PeriodicElement3[] = [];

@Component({
  selector: 'app-managetag',
  templateUrl: './managetag.component.html',
})
export class ManageTagComponent extends AbstractService {
  categoryservice: ArticleService;
  getdatatag: any;
  delete: any
  nametag: any;
  Tagname: any
  public datasession = JSON.parse(sessionStorage.getItem("User"));
  router: Router
  taketag: any;
  putedit: any;
  getdeletetag: any;
  isActiveTag = false;
  isActiveURL = false;
  public updateSubscription: Subscription;

  constructor(categoryservice: ArticleService, public dialog: MatDialog, router: Router) {
    super(null)
    this.categoryservice = categoryservice;
    this.router = router;
  }
  ngOnInit(): void {
    this.gettag();
    if (!this.isLogin) {
      this.router.navigate(['login']);
    }
    console.log('q7q7q7q7', this.dataSource);
  }

  onClick(name: any) {
    let checkerror = false

    if (this.Tagname === undefined || this.Tagname === "") {
      this.isActiveTag = true
      checkerror = true
    } else {
      this.isActiveTag = false
    }

    this.Tagname = name;

    let data = {
      name: this.Tagname,
      user_id: this.datasession.user.id,
    }

    if (checkerror) {

    } else {
      this.categoryservice.posttags(data).then((response: any) => {
        this.taketag = response.data;
        if (this.taketag) {
          const element = {
            id: this.taketag.id,
            name: this.taketag.name,
          };
          ELEMENT_DATA.push(element);
          this.dataSource = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA);

          this.nametag = "";
        }
        else {
        }

      }).catch((error: any) => {
        console.log(error);
      })
    }
  }


  displayedColumns: string[] = ['name', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA);

  public async gettag() {
    await this.categoryservice.gettag().then((response: any) => {
      this.getdatatag = response;
      ELEMENT_DATA = [];
      for (let i = 0; i < response.length; i++) {
        const element = {
          id: response[i].id,
          name: response[i].name,
        };
        console.log(element)
        ELEMENT_DATA.push(element);
      }

    }).catch((error: any) => {
      console.log(error);
    })

    this.dataSource = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA);
  }
  
  openDialog(element, index: number, id: string) {
    console.log('index >> ', index);
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        id: id,
        element: element,
        row: index,
        text: 'Are you sure?',
        btntext1: 'Cancel',
        btntext2: 'Delete'
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        const data = this.dataSource.data;
        data.splice(index, 1);
        this.dataSource.data = ELEMENT_DATA;
        this.deleteManageTagparam(id, this.datasession.user.id);

      }
    });
  }

  public deleteManageTagparam(id: string, user_id?: string) {
    this.categoryservice.deleteManageTagparam(id, user_id).then((response: any) => {
      this.getdeletetag = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  openDialogEdit(element, index: number, id: string) {
    const dialogRef = this.dialog.open(DialogCEditTagComponent, {
      data: {
        id: id,
        element: element,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        Object.assign(result, { user_id: this.datasession.user.id })
        const data = this.dataSource.data;
        this.puttag(element.id, result);
      }
    });
  }

  public puttag(id: string, data?: string) {
    console.log('kkkk', data);
    this.categoryservice.puttag(id, data).then((Response: any) => {
      this.putedit = Response;
      this.gettag();
    }).catch((error: any) => {
      console.log(error);
    })
  }
}
