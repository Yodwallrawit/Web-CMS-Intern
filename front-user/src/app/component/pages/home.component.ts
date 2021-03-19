import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { environment } from "../../../environments/environment";
import { CatagoryService, DataService } from '../../../app/service/service';
import { DomSanitizer } from '@angular/platform-browser';
const LIMIT = 0;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  title = 'cmsreal';

  public getrespone;
  public categoryservice: CatagoryService;
  getdataarticle: any;
  getdaravideo: any;
  datacontent: DataService;
  activatedRoute: ActivatedRoute;
  public getresponsetopview;
  public getresponsepopofweek;
  public router: Router;
  getnewArticle: any;
  public ApiIMG:any
  

  constructor(categoryservice: CatagoryService, datacontent: DataService, activatedRoute: ActivatedRoute, router: Router,) {
    this.categoryservice = categoryservice;
    this.activatedRoute = activatedRoute;
    this.router = router;
    // this.datacontent = datacontent; 
  }
  ngAfterViewInit(): void {
    // this.ApiIMG = this.apiBaseURL + 
  }
  ngOnInit(): void {
    this.getvideo();
    this.getarticle();
    this.getarticletopview();
    this.getarticlepopofweek()
    this.getarticlenew()

  }


  public getvideo() {
    this.categoryservice.getvideo().then((response: any) => {
      this.getdaravideo = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public getarticle() {
    this.categoryservice.getarticle().then((response: any) => {
      this.getdataarticle = response;
      // this.datacontent.changeContent(this.getdataarticle);

    }).catch((error: any) => {
      console.log(error);
    })
  }
 
  public getarticlenew() {
    this.categoryservice.getarticlenew().then((response: any) => {
      this.getnewArticle = response;
      // console.log('this.getnewArticle', this.getnewArticle)
      // this.datacontent.changeContent(this.getdataarticle);

    }).catch((error: any) => {
      console.log(error);
    })
  }

  public getarticlesearch(keyword?: string, category?: string, tagname?: string, startdate?: string, enddate?: string, owner?: string, orderby?: string, skip?: number,) {
    this.categoryservice.getarticlesearch(keyword, category, tagname, startdate, enddate, owner, orderby, skip, LIMIT).then((response: any) => {
      this.getdataarticle = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public sentIdgetarticle(keepid: any) {
    this.getarticlesearch("", keepid);
    this.getarticlesearch("", keepid, "", "", "", "", 'new');
  }


  public getarticletopview() {
    this.categoryservice.getarticletopview().then((response: any) => {
      this.getresponsetopview = response;
      // console.log(' this.getresponsetopview', this.getresponsetopview);

    }).catch((error: any) => {
      console.log(error);
    })
  }

  public getarticlepopofweek() {
    this.categoryservice.getarticlepopofweek().then((response: any) => {
      this.getresponsepopofweek = response;
      // console.log(' this.getresponsepopofweek', this.getresponsepopofweek);

    }).catch((error: any) => {
      console.log(error);
    })
  }


}
