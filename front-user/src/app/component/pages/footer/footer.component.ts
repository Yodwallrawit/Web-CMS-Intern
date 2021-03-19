import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CatagoryService } from '../../../service/service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',

})
export class FooterComponent implements OnInit {
  public categoryservice: CatagoryService;
  public router: Router;
  public getlogocontact: any
  public apiBaseURL = environment.apiBaseURL
  constructor(categoryservice: CatagoryService, router: Router,) {
    this.categoryservice = categoryservice;
    this.router = router;
  }

  ngOnInit(): void {
    this.getcontact();
  }

  public getcontact() {
    this.categoryservice.getcontact().then((response: any) => {
      this.getlogocontact = response;

    }).catch((error: any) => {
      console.log(error);
    })
  }

}
