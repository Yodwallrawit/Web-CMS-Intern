import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CatagoryService, DataService } from '../../service/service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',

})
export class MenuComponent implements OnInit {

    public categoryservice: CatagoryService
    public router: Router;
    public getchildmenu: any;
    public observservice:DataService;
    public dataChild: any = [];
    @Input() items:any =[]; 

    @ViewChild('childMenu',{static: true}) public childMenu:any;


    constructor(categoryservice: CatagoryService, router: Router,observservice:DataService,) {
        this.categoryservice = categoryservice;
        this.router = router;
        this.observservice = observservice;
    }
    ngOnInit(): void {
        // this.getmodechild()
    }

    public openMenu(child){
        this.observservice.changeMessage(child);
        this.router.navigateByUrl('/allcontent?category=' + child.name);
    }

    // public getmodechild() {
    //     this.categoryservice.getmodechild().then((response: any) => {
    //         this.getchildmenu = response;
    //         this.dataChild.push({
    //             name: 'All',
    //             children: this.getchildmenu,
    //         });
    //         this.items = this.dataChild;
    //         console.log('this.items',this.items)
    //     }).catch((error: any) => {
    //         console.log(error);
    //     })
    // }

}