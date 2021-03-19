import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from 'src/app/service/service';
import { environment } from '../../../environments/environment'
import { DialogEditConfigComponent } from '../shared/dialogeditConfig.component';
import { DialogContentExampleDialog } from "../shared/dialogdelete.component";

export interface PeriodicElement8 {
    urlnumber: string;
    name: string;
    description: string;
}

let ELEMENT_DATA: PeriodicElement8[] = [];

@Component({
    selector: 'app-tableconfig',
    templateUrl: './tableconfig.component.html',
})
export class TableconfigComponent {
    contactservice: ArticleService;
    delete: any;
    getdatacontact: any;
    @Input() ConfigTable: any
    public apiBaseURL = environment.apiBaseURL
    namecontact: any;
    Urlnumber: any
    datatest: any;
    puteditcontact: any;
    public datasession = JSON.parse(sessionStorage.getItem("User"));

    constructor(contactservice: ArticleService, public dialog: MatDialog) {
        this.contactservice = contactservice;
    }
    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.TableConfing(this.ConfigTable)
        console.log('ssssssssss', this.ConfigTable);
    }
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['image', 'name', 'urlnumber', 'description', 'edit', 'delete'];
    public dataSource = new MatTableDataSource<PeriodicElement8>(ELEMENT_DATA);
    public TableConfing(response: any) {
        // console.log('eeee',ELEMENT_DATA)
        ELEMENT_DATA = [];
        console.log('ddddd', response);
        if (response !== undefined && response.length > 0) {
            for (let i = 0; i < response.length; i++) {
                const element = {
                    id: response[i].id,
                    image: response[i].icon,
                    urlnumber: response[i].url,
                    name: response[i].lable,
                    description: response[i].value
                };
                ELEMENT_DATA.push(element);
            }
            this.dataSource = new MatTableDataSource<PeriodicElement8>(ELEMENT_DATA);
            this.dataSource.sort = this.sort;
        }
    }

    openDialogDeleteConfig(element, index: number, id: string) {
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
            if (result) {
                const data = this.dataSource.data;
                data.splice(index, 1);
                this.dataSource.data = ELEMENT_DATA;
            }
        });
    }

    async openDialogEditConfig(element, index: number, id: string) {
        const dialogRef = this.dialog.open(DialogEditConfigComponent, {
            data: {
                id: id,
                element: element,
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('good',result);
            if (result) {
                Object.assign(result, { user_id: this.datasession.user.id })
                const data = this.dataSource.data;
                data.splice(index, 1);
                this.dataSource.data = ELEMENT_DATA;
                this.putcontact(element.id, result);
            }
        }
        );
    }

    public deletecontact(id: string, datasession?: string) {
        this.contactservice.deletecontact(id, datasession).then((response: any) => {
            this.delete = response;
            console.log(' this.delete', this.delete);
        }).catch((error: any) => {
            console.log(error);
        })
    }

    public putcontact(id: string, data?: string) {
        console.log('kkkk', data);
        this.contactservice.putcontact(id, data).then((response: any) => {
            this.puteditcontact = response;
            console.log('dddd', this.puteditcontact);
        }).catch((error: any) => {
            console.log(error);
        })
    }
}