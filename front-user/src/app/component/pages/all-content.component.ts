import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CatagoryService, DataService } from '../../../app/service/service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JwPaginationComponent } from 'jw-angular-pagination';
const LIMIT = 14;

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
})
export class AllContentComponent {
  @Input() pageIndex: number = 0;
  @Input() articleJson: any;
  items = [];
  pageOfItems: Array<any>;
  title = 'cmsreal';
  p: number = 1;
  public router: Router;
  public getrespone;
  public categoryservice: CatagoryService;
  public observservice: DataService
  public getresponsepin: any;
  public selected: boolean;
  public newnamemenu: DataService;
  public skip = 0;
  public paramkeepvalue: any;
  paramcategory: any;
  paramsort: any;
  paramDate: any;
  paramSearch: any;
  paramTag: any;

  datamenu: any;
  message: any;
  getdatatag: any;
  getdataarticle: any;
  public sortap: any = [
    { 'name': "new-old", 'id': "new" },
    { 'name': "old-new", 'id': "old" },
    { 'name': "poppular", 'id': "popular" },
  ]


  constructor(categoryservice: CatagoryService, router: Router, observservice: DataService, newnamemenu: DataService) {
    this.router = router;
    this.categoryservice = categoryservice;
    this.getresponsepin = [];
    this.observservice = observservice;




    // this.newnamemenu = newnamemenu;


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;

        console.log(' this.router.url; ', this.router.url)
        let getspliturl = url.split("=")[1];
        console.log(getspliturl);
        if (url.split("=")[0].includes('keyword')) {
          this.getarticlesearch(url.split("=")[1]);
        }
      }

    });

    this.observservice.currentMessage.subscribe(message => {
      console.log('message ', message)
      this.message = message;
      this.getarticlesearch("", message.id)
    });

    // this.newnamemenu.presentMessage.subscribe(menuname => {
    //   this.datamenu = menuname;
    // });
  }

  ngOnInit(): void {
    this.getcategory();
    this.getcategorypin();
    this.gettag();
    // this.getarticle();
    // this.items = Array(this.getarticle.length).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
  }



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  public getcategory() {
    this.categoryservice.getcategory().then((response: any) => {
      this.getrespone = response;
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

  public gettag() {
    this.categoryservice.gettag().then((response: any) => {
      this.getdatatag = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }


  // public getarticle() {
  //   this.categoryservice.getarticle().then((response: any) => {
  //     this.getdataarticle = response;
  //     console.log('getdataarticle', this.getdataarticle)
  //   }).catch((error: any) => {
  //     console.log(error);
  //   })
  // }





  public getarticlesearch(keyword?: string, category?: string, tag?: string, startdate?: string, enddate?: string, owner?: string, orderby?: string, skip?: number,) {
    this.categoryservice.getarticlesearch(keyword, category, tag, startdate, enddate, owner, orderby, skip, LIMIT).then((response: any) => {
      this.getdataarticle = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  sentparamiter(value: any) {
    console.log('value555', value)
    if (value.keyword === 'category') {
      this.paramcategory = value.category_id;
      this.getarticlesearch(this.paramSearch, value.category_id);
    }
    else if (value.keyword === 'sort') {
      this.paramsort = value.category_id;
      this.getarticlesearch(this.paramSearch, this.paramcategory, this.paramTag, this.paramDate, this.paramDate, "", value.category_id);
    }
    else if (value.keyword === 'tags') {
      this.paramTag = value.category_id;
      this.getarticlesearch(this.paramSearch, this.paramcategory, value.category_id,this.paramDate);
    }
  }

  sentparamDate(sentdate: any) {
    this.paramDate = sentdate;
    this.getarticlesearch(this.paramSearch, this.paramcategory, this.paramTag, sentdate);
    console.log('sentdate', sentdate);
  }

  sentparamSearch(sentdata: any) {
    this.paramSearch = sentdata;
    this.getarticlesearch(sentdata,this.paramcategory, this.paramTag, this.paramDate, this.paramDate);
  }
  sentskip(index: any) {
    this.getarticlesearch(index);
    console.log('index', index);
  }
}
