import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AbstractService, ArticleService } from 'src/app/service/service';
import { Tooltipdiscription } from '../component';
import { OverlayModule } from '@angular/cdk/overlay';
import { Router } from '@angular/router';



export interface PeriodicElement7 {
    username: string;
    action: string;
    collection: string;
    document: string;
    description: string;
    date: string;
    time: string;

}

let ELEMENT_DATA: PeriodicElement7[] = [];

@Component({
    selector: 'app-keeplog',
    templateUrl: './keeplog.component.html',
})
export class KeepLogComponent extends AbstractService {
    categoryservice: ArticleService;
    router: Router
    pload: boolean = true

    constructor(categoryservice: ArticleService, router: Router) {
        super(null)
        this.categoryservice = categoryservice;
        this.router = router;
    }

    ngOnInit(): void {
        this.getlog();
        console.log('785566', this.dataSource);
        console.log('sss', this.isLogin())
        console.log('sss', !this.isLogin())
        if (!this.isLogin()) {
            this.router.navigate(['login']);
        }
    }

    displayedColumns: string[] = ['username', 'action', 'collection', 'document', 'description', 'date', 'time'];
    public dataSource = new MatTableDataSource<PeriodicElement7>(ELEMENT_DATA);
    getdataarticle: any;

    public async getlog() {
        await this.categoryservice.getlog().then((response: any) => {
            this.getdataarticle = response;
            ELEMENT_DATA = []
            for (let i = 0; i < response.length; i++) {
                const element = {
                    username: response[i].user_nickname,
                    action: response[i].action,
                    collection: response[i].collection,
                    document: response[i].document,
                    description: response[i].description,
                    date: response[i].date,
                    time: response[i].time,
                };
                console.log(element)
                ELEMENT_DATA.push(element);
            }

        }).catch((error: any) => {
            console.log(error);
        })

        this.dataSource = new MatTableDataSource<PeriodicElement7>(ELEMENT_DATA);
    }

    // @ViewChild(MatSort) sort: MatSort;
    // @ViewChild(MatPaginator) paginator: MatPaginator;

    // ngAfterViewInit() {
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    // }

    public mousetool() {
        // const overlayRef = overlay.create();
        // const userProfilePortal = new Tooltipdiscription(UserProfile);
        // overlayRef.attach(userProfilePortal);

    }

}
