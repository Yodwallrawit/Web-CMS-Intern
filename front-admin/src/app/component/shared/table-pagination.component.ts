import { AfterViewInit, Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ArticleService } from 'src/app/service/service';
import { DialogContentExampleDialog } from './dialogdelete.component';
import { MatDialog } from '@angular/material/dialog';
import { get } from 'http';
import { userInfo } from 'os';
import { DialogEditAllcontentComponent } from './dialogallcontent.component';

export interface PeriodicElement {
    header: string;
    name: string;
    category: string;
    status: string;
    datetime: string;
    pin: number;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
    selector: 'table-pagination-example',
    templateUrl: 'table-pagination.component.html',
})
export class TablePaginationExample {
    categoryservice: ArticleService;
    delete: any;
    getdataarticle: any;
    datasession:any
    putEditarticle:any;
    @Input() searchTable: any;
    @Output() pload = new EventEmitter();

    @ViewChild(MatSort) sort: MatSort;
    getdeletearticle: any;
    getEditarticle: any;

    constructor(categoryservice: ArticleService, public dialog: MatDialog) {
        this.categoryservice = categoryservice;
        ELEMENT_DATA = [];
    }

    ngOnInit(): void {
        console.log('666666', this.pload);
        this.datasession = JSON.parse(sessionStorage.getItem("User"));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.tableSearchArticle(this.searchTable);
    }

    displayedColumns: string[] = ['header', 'name', 'category', 'status', 'datetime', 'pin', 'edit', 'delete'];
    public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    public tableSearchArticle(response: any) {
        // console.log('eeee',ELEMENT_DATA)
        ELEMENT_DATA = [];
        console.log('ddddd', response);
        if (response !== undefined && response.length > 0) {
            for (let i = 0; i < response.length; i++) {
                const element = {
                    id: response[i].id,
                    header: response[i].title,
                    name: response[i].user_nickname,
                    category: response[i].category_name,
                    status: response[i].status,
                    datetime: response[i].publish_datetime,
                    pin: response[i].pin_ordering
                };
                ELEMENT_DATA.push(element);
            }
            this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
            this.dataSource.sort = this.sort;

        }

    }

    async openDialogEditAllcontent(element, index: number, id: string) {
        const getediNewarticle = await this.geteditArticle(id);
        console.log('ddddd',getediNewarticle)
        const dialogRef = this.dialog.open(DialogEditAllcontentComponent, {
            data: {
                id: id,
                element: element,
                olddata: getediNewarticle,
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            console.log('good',result);
            
            if (result) {
                Object.assign(result, {user_id: this.datasession.user.id })
                const data = this.dataSource.data;
                data.splice(index, 1);
                this.dataSource.data = ELEMENT_DATA;
                this.putarticle(element.id,result);

            }
            window.location.reload();
        }
        );
    }

    openDialog(element, index: number, id: string) {
        // console.log('index >> ', index);
        // console.log('id', element);
        

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
                this.deleteArticle(element.id,this.datasession.user.id);
            }
        });
    }

    public deleteArticle(id: string, user_id?: string) {
        this.categoryservice.deleteArticle(id, user_id).then((response: any) => {
            this.getdeletearticle = response;
        }).catch((error: any) => {
            console.log(error);
        })
    }

    public geteditArticle(id: string,) {
      return this.categoryservice.geteditArticle(id)
    }

  public putarticle(id:string,data?:any){
    this.categoryservice.putarticle(id,data).then((response: any) => {
        this.putEditarticle = response;
    }).catch((error: any) => {
        console.log(error);
    })
  }
}
