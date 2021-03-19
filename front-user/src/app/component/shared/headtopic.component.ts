import { Component, Input, OnInit } from '@angular/core';
import {CatagoryService} from "../../service/service";

@Component({
  selector: 'app-headtopic',
  templateUrl: './headtopic.component.html',
  
})
export class HeadtopicComponent implements OnInit {
    @Input() topic:string ="";
    public categoryservice: CatagoryService;
    getdataarticle: any;
     getdataArr: any;

  constructor(categoryservice: CatagoryService){
    this.categoryservice = categoryservice;
  }

  ngOnInit(){
    // this.getarticle();
  }

  // public getarticle() {
  //   this.categoryservice.getarticle().then((response: any) => {
  //     this.getdataarticle = response;
  //     this.getdataArr = this.getdataarticle[0].title
  //   }).catch((error: any) => {
  //     console.log(error);
  //   })
  // }
}
