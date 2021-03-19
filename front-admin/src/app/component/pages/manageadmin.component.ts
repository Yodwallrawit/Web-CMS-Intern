import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractService, ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-manageadmin',
  templateUrl: './manageadmin.component.html',
})
export class ManageAdminPageComponent extends AbstractService{
  title = 'cmsreal';
  router : Router
  articleservice:ArticleService;
  AdminService:any;
  constructor(articleservice:ArticleService,router : Router){
    super(null)
    this.articleservice = articleservice;
    this.router = router;
    this.getAdminsearch();

  }
  ngOnInit(): void {
    if (!this.isLogin()) {
      this.router.navigate(['login']);
    }
  }

  public getAdminsearch(keyword?: string) {
    this.articleservice.getAdminsearch(keyword).then((response: any) => {
      this.AdminService = response;
      console.log(' this.AdminService', this.AdminService)
    }).catch((error: any) => {
      console.log(error);
    })
  }

  sentdata(data: any) {
    // this.paramKeywordSearch = data
    this.getAdminsearch(data);
  }

}
