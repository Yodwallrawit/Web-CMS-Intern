import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CatagoryService, DataService } from '../../service/service';

@Component({
  selector: 'app-typecontent',
  templateUrl: './typecontent.component.html',
  
})
export class TypecontentComponent implements OnInit {
  @Output() takeidtype = new EventEmitter();  
  public categoryservice: CatagoryService;
  public data: DataService
  public router: Router;
  getresponsepin: any;
  getdatacategory:any;
 getarticleOftype:any;
  
  constructor(categoryservice: CatagoryService, router: Router, data: DataService) {
    this.categoryservice = categoryservice;
    this.router = router;
    this.data = data;
    console.log(this.router.url)
  }
  ngOnInit(): void {
    this.getcategorypin();
  }

  public getcategorypin() {
    this.categoryservice.getcategorypin().then((response: any) => {
      this.getresponsepin = response;
      // console.log('respgetresponsepinonseid',this.getresponsepin);
    }).catch((error: any) => {
      console.log(error);
    })
  }

  changcontentOftype(itemId:any){
    this.takeidtype.emit(itemId.id);
    // console.log('lol',itemId.id);
  }


  public getarticleID(id:string) {
    this.categoryservice.getarticleID(id).then((response: any) => {
      this.getarticleOftype = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

 
 

}
