import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AbstractService, ArticleService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';
import { DialogCEditVideoComponent } from '../shared/dialogeditvideo.component';

export interface PeriodicElement5 {
    name: string;
    url: string;


}

let ELEMENT_DATA: PeriodicElement5[] = [];

@Component({
    selector: 'app-videopage',
    templateUrl: './videopage.component.html',
})
export class VideoPageComponnent extends AbstractService {
    videoservice: ArticleService;
    delete: any
    getdatavideo: any;
    namevideo: any;
    nameUrl: any;
    URL: any;
    NameCategory: any;
    DesciptVideo: any;
    putedit: any;
    getdelete: any;
    // Discription: string = "วีดีโอ2"
    takevideo: any;
    public datasession = JSON.parse(sessionStorage.getItem("User"));
    deleteParamvideo: any;
    isActiveNameVideo = false;
    isActiveURL = false;
    isActiveDescription = false;
    router: Router

    constructor(videoservice: ArticleService, public dialog: MatDialog, router: Router
    ) {
        super(null)
        this.router = router;
        this.videoservice = videoservice;

    }

    ngOnInit(): void {
        this.getvideo();
        console.log('as25as25as25', this.dataSource);
    }

    VideoAdd(name: any, url: any) {
        let checkerror = false;
        this.NameCategory = name
        this.URL = url

        if (this.NameCategory === undefined || this.NameCategory === "") {
            this.isActiveNameVideo = true;
            checkerror = true;
        } else {
            this.isActiveNameVideo = false;
        }
        if (this.URL === undefined || this.URL === "") {
            this.isActiveURL = true;
            checkerror = true;
        } else {
            this.isActiveURL = false;
        }
        if (this.DesciptVideo === undefined || this.DesciptVideo === "") {
            this.isActiveDescription = true;
            checkerror = true;
        } else {
            this.isActiveDescription = false;
        }


        let data = {
            name: this.NameCategory,
            url: this.URL,
            description: this.DesciptVideo,
            user_id: this.datasession.user.id,
        }
        console.log('test',data);
        
        if (checkerror) {

        } else {
            this.videoservice.postvideo(data).then((response: any) => {
                this.takevideo = response.data;
                if (this.takevideo) {
                    const element = {
                        name: this.takevideo.name,
                        url: this.takevideo.url,
                        description: this.takevideo.description,
                    };
                    ELEMENT_DATA.push(element);
                    this.dataSource = new MatTableDataSource<PeriodicElement5>(ELEMENT_DATA);

                    this.namevideo = "";
                    this.nameUrl = "";
                    this.DesciptVideo = "";

                }
                else {

                }

            }).catch((error: any) => {
                console.log(error);
            })
        }
    }

    displayedColumns: string[] = ['name', 'url', 'description', 'edit', 'delete'];
    dataSource = new MatTableDataSource<PeriodicElement5>(ELEMENT_DATA);

    public async getvideo() {
        await this.videoservice.getvideo().then((response: any) => {
            this.getdatavideo = response;
            console.log('1s2dzs1s5z', this.getdatavideo)
            ELEMENT_DATA = [];
            for (let i = 0; i < response.length; i++) {
                const element = {
                    id: response[i].id,
                    name: response[i].name,
                    url: response[i].url,
                    description: response[i].description,
                };
                console.log(element)
                ELEMENT_DATA.push(element);
            }

        }).catch((error: any) => {
            console.log(error);
        })

        this.dataSource = new MatTableDataSource<PeriodicElement5>(ELEMENT_DATA);
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
                this.deleteVideoparam(id, this.datasession.session.user.id);
            }
        });
    }

    // public deletevideo(id: string) {
    //     this.categoryservice.deletevideo(id).then((response: any) => {
    //         this.delete = response;
    //         console.log(' this.delete', this.delete);

    //     }).catch((error: any) => {
    //         console.log(error);
    //     })
    // }

    public deleteVideoparam(id: string, user_id?: string) {
        this.videoservice.deleteVideoparam(id, user_id).then((response: any) => {
            this.deleteParamvideo = response;
        }).catch((error: any) => {
            console.log(error);
        })
    }

    public deleteCategoryparam(id: string, user_id?: string) {
        this.videoservice.deleteCategoryparam(id, user_id).then((response: any) => {
            this.getdelete = response;
        }).catch((error: any) => {
            console.log(error);
        })
    }

    openDialogEdit(element, index: number, id: string,) {
        const dialogRef = this.dialog.open(DialogCEditVideoComponent, {
            data: {
                id: id,
                element: element,
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            if (result) {
                Object.assign(result, { user_id: this.datasession.session.id })
                const data = this.dataSource.data;
                this.putvideo(element.id, result);
            }
        }
        );
    }

    public putvideo(id: string, data?: string) {
        console.log('kkkk', data);
        this.videoservice.putvideo(id, data).then((Response: any) => {
            this.putedit = Response;
            this.getvideo();
        }).catch((error: any) => {
            console.log(error);
        })
    }
}
