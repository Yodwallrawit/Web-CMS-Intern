import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { BehaviorSubject } from 'rxjs';
import { DataService, LoaderService } from 'src/app/service/service';

import { CatagoryService } from "../../../service/catagory.service";
const LIMIT = 0;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public showburger: boolean;
  public nameprofile: boolean;
  public router: Router;
  public getresponse;
  public getresponsepin;
  public showlogoweb;
  public value;

  public categoryservice: CatagoryService;
  public observservice: DataService;


  message: string;
  getchildmenu: any;
  public dataChild: any = [];
  getdataarticle: any;
  

  constructor(categoryservice: CatagoryService, router: Router, observservice: DataService, public loaderService: LoaderService) {
    this.categoryservice = categoryservice;
    this.router = router;
    this.observservice = observservice;
    // this.loaderService = loaderService;
  }
  ngOnInit(): void {
    this.getcategory();
    this.getcategorypin();
    this.getlogoweb();
    this.getmodechild();
  }

 
  // printtxt(){
  //   console.log('lolololo')
  // }


  public getcategory() {
    this.categoryservice.getcategory().then((response: any) => {
      this.getresponse = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }


  public getcategorypin() {
    this.categoryservice.getcategorypin().then((response: any) => {
      this.getresponsepin = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public getlogoweb() {
    this.categoryservice.getlogoweb().then((response: any) => {
      this.showlogoweb = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }



  public getmodechild() {
    this.categoryservice.getmodechild().then((response: any) => {
      this.getchildmenu = response;
      this.dataChild.push({
        name: 'All',
        parent_category: this.getchildmenu
      });
    }).catch((error: any) => {
      console.log(error);
    })
  }






  @ViewChild("menubar")
  public menubar: ElementRef;

  @ViewChild("menubur")
  public menu: ElementRef;

  @ViewChild("search")
  public search: ElementRef;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  ngAfterViewInit(): void {
    console.log("menubar", this.menubar.nativeElement.offsetHeight);

  }
  public show() {
    this.showburger = !this.showburger;
    this.menu.nativeElement.style.top = this.menubar.nativeElement.offsetHeight + 'px';
    this.search.nativeElement.style.top = this.menubar.nativeElement.offsetHeight + 'px';
  }


  

  public clickprofile() {
    this.nameprofile = !this.nameprofile;
    console.log("sssssss")
  }

  public clickdrop() {
    this.nameprofile = false;
    console.log("Icepajingko")
  }
  public openLink(item) {
    this.showburger = false;
    this.observservice.changeMessage(item);
    this.router.navigateByUrl('/allcontent?category='+item.name);
    // console.log(item.name);
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  onEnter(value: string) {
    this.value = value;
    console.log('thisvalue>>>>', this.value);
    this.getarticlesearch(this.value);
    this.router.navigateByUrl('/allcontent?keyword=' + this.value);
    this.showburger = false;
  }


  public getarticlesearch(keyword?: string, category?: string, tagname?: string, startdate?: string, enddate?: string, owner?: string, orderby?: string, skip?: number,) {
    this.categoryservice.getarticlesearch(keyword, category, tagname, startdate, enddate, owner, orderby, skip, LIMIT).then((response: any) => {
      this.getdataarticle = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }
}


