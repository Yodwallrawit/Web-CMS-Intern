import { Component, Input } from '@angular/core';
import { AbstractService, ArticleService, ObserveService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { constants } from 'buffer';

@Component({
  selector: 'app-allarticle',
  templateUrl: './allarticle.component.html',
})
export class AllArticleComponent extends AbstractService {
  articleservice: ArticleService;
  observservice: ObserveService;
  router: Router;
  getdataarticle: any;
  getdeletearticle: any;
  message: any;
  articlesearchservice: any;
  getcategorynam: any;
  getdatatag: any;
  datamenu: any;
  public selected: boolean;
  public getrespone;
  paramCategory: any;
  paramKeywordSearch: any;
  paramDate: any;
  paramTag: any;
  pload: boolean = true;
  public datasession = JSON.parse(sessionStorage.getItem("User"));

  constructor(articleservice: ArticleService, public dialog: MatDialog, router: Router, observservice: ObserveService) {
    super(null)
    this.articleservice = articleservice;
    this.router = router;
    this.observservice = observservice;
    this.pload = true
    this.observservice.currentMessage.subscribe(message => {
      console.log('message ', message)
      // if (message !== "") {
      this.message = message;
      this.getarticlesearch("", message.id)
      // }

    });
  }

  ngOnInit(): void {
    this.getcategory();
    this.gettag();
    // this.isLogin()
    // console.log("this.isLogin()",this.isLogin());
    
    if (!this.isLogin()) {
      this.router.navigate(['login']);
    }
  }

  public deleteArticle(id: string, user_id?: string) {
    this.articleservice.deleteArticle(id, user_id).then((response: any) => {
      this.getdeletearticle = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }


  // public postlogin(data) {
  //   this.articleservice.postlogin(id, user_id).then((response: any) => {
  //     this.getdeletearticle = response;
  //   }).catch((error: any) => {
  //     console.log(error);
  //   })
  // }

  //   public async getarticle() {
  //     await this.categoryservice.getarticle().then((response: any) => {
  //         this.getdataarticle = response;
  //         for (let i = 0; i < response.length; i++) {
  //             const element = {
  //                 id: response[i].id,
  //                 header: response[i].title,
  //                 name: response[i].user_nickname,
  //                 category: response[i].category_name,
  //                 status: response[i].status,
  //                 datetime: response[i].publish_datetime,
  //                 pin: response[i].pin_ordering
  //             };
  //             console.log(element)
  //             ELEMENT_DATA.push(element);
  //         }
  //     }).catch((error: any) => {
  //         console.log(error);
  //     })

  //     this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //     this.dataSource.sort = this.sort;
  //     console.log(this.getdataarticle);

  //     // this.pload.emit(true);
  // }

  openDialog(element, index: number, id: string) {
    console.log('index >> ', index);
    console.log('id', element);
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
        this.deleteArticle(element.id, this.datasession.user.id);
      }
    });
  }

  public getcategory() {
    this.articleservice.getcategory().then((response: any) => {
      this.getrespone = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public gettag() {
    this.articleservice.gettag().then((response: any) => {
      this.getdatatag = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public getarticlesearch(keyword?: string, category?: string, tag?: string, startdate?: string,) {
    this.articleservice.getarticlesearch(keyword, category, tag, startdate,).then((response: any) => {
      this.articlesearchservice = response;
      setTimeout(() => {
        this.pload = false
      }, 2000);
      console.log(' this.articlesearchservice', this.articlesearchservice)
    }).catch((error: any) => {
      console.log(error);
    })
  }

  sentparamiter(value: any) {
    console.log('value555', value)
    if (value.keyword === 'category') {
      this.paramCategory = value.category_id
      this.getarticlesearch(this.paramKeywordSearch, value.category_id, this.paramTag, this.paramDate);
    }
    else if (value.keyword === 'tags') {
      this.paramTag = value.category_id
      this.getarticlesearch(this.paramKeywordSearch, this.paramCategory, value.category_id, this.paramDate);
    }
  }

  sentdata(data: any) {
    this.paramKeywordSearch = data
    this.getarticlesearch(data, this.paramCategory, this.paramTag, this.paramDate);
  }

  sentDate(date: any) {
    this.paramDate = date
    this.getarticlesearch(this.paramKeywordSearch, this.paramCategory, this.paramTag, date);
  }

}