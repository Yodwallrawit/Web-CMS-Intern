import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CatagoryService } from "../../service/service";

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
})
export class ContentpageComponent implements OnInit {
  title = 'cmsreal';
  public categoryservice: CatagoryService;
  public router: Router;
  getdataarticle: any;
  keepimg: any
  cover_image: any;
  getvideocontent = "https://www.youtube.com/embed/";
  public keepvideo: any;
  getdataarticleID: any;
  activatedRoute: ActivatedRoute;
  public apiBaseURL = environment.apiBaseURL

  constructor(categoryservice: CatagoryService, router: Router, activatedRoute: ActivatedRoute) {
    this.categoryservice = categoryservice;
    this.router = router;
    this.activatedRoute = activatedRoute;

    this.activatedRoute.params.subscribe((param) => {
      let id = param['id'];
      this.getarticleID(id)
      console.log('id', id);
    });

  }


  ngOnInit() {
    this.getarticle();

  }



  public getarticle() {
    this.categoryservice.getarticle().then((response: any) => {
      this.getdataarticle = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public getarticleID(id: string) {
    this.categoryservice.getarticleID(id).then((response: any) => {
      this.getdataarticleID = response;
      console.log('this.getdataarticleID',this.getdataarticleID)
      
    }).catch((error: any) => {
      console.log(error);
    })
  }
}
