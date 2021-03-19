import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Inject, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentExampleDialog } from "../shared/dialogdelete.component";
import { ArticleService, ObserveService } from 'src/app/service/service';
import { DialogManageAdminComponent } from '../shared/dialogmanageAdmin.component';

export interface PeriodicElement2 {
    name: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    position: string;
}

let ELEMENT_DATA: PeriodicElement2[] = [];

@Component({
    selector: 'table-admin-example',
    templateUrl: 'table-manage-admin.component.html',
})

export class TableManageAdminExample {
    categoryservice: ArticleService;
    delete: any
    @Input() Adminparam: any
    datasession:any
    putEditadmin: any;

    constructor(categoryservice: ArticleService, public dialog: MatDialog) {
        this.categoryservice = categoryservice;

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.tableAdmin(this.Adminparam);
        console.log('ssssssssss' , this.Adminparam)
    }

    ngOnInit(): void {
        // this.getuser();
        // console.log('741236', this.dataSource);
        this.datasession = JSON.parse(sessionStorage.getItem("User"));
        console.log('Adminparam', this.Adminparam);

    }

    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['name', 'username', 'firstname', 'lastname', 'email', 'password', 'position', 'edit', 'delete'];
    public dataSource = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA);
    getdataarticle: any;

    openDialogManageAdmin(element,index: number, id: string){

        const dialogRef = this.dialog.open(DialogManageAdminComponent, {
            data: {
                id: id,
                element: element,
                
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            console.log('good',result);
            
            if (result) {
                Object.assign(result, {user_id: this.datasession.user.id })
                const data = this.dataSource.data;
                data.splice(index, 1);
                this.dataSource.data = ELEMENT_DATA;
                this.putadmin(element.id,result);

            }
        }
        );
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
                this.deleteuser(id);
            }
        });
    }

    public deleteuser(id: string) {
        this.categoryservice.deleteuser(id).then((response: any) => {
            this.delete = response;
            console.log(' this.delete', this.delete);

        }).catch((error: any) => {
            console.log(error);
        })
    }



    public tableAdmin(response: any) {
        // console.log('eeee',ELEMENT_DATA)
        ELEMENT_DATA = [];
        console.log('ddddd', response);
        if (response !== undefined && response.length > 0) {
            for (let i = 0; i < response.length; i++) {
                const element = {
                    id: response[i].id,
                    name: response[i].nickname,
                    username: response[i].username,
                    firstname: response[i].firstname,
                    lastname: response[i].lastname,
                    email: response[i].email,
                    password: response[i].password,
                    position: response[i].type,
                    image: response[i].image,
                };
                ELEMENT_DATA.push(element);
            }
            this.dataSource = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA);
            this.dataSource.sort = this.sort;

        }

    }

    public putadmin(id:string,data?:any){
        this.categoryservice.putarticle(id,data).then((response: any) => {
            this.putEditadmin = response;
        }).catch((error: any) => {
            console.log(error);
        })
      }
      
}


