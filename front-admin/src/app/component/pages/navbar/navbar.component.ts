import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public nameprofile: boolean;
  getlogoimg: any;
  logomg: ArticleService;
  postloginimg: any;
  public datasession = JSON.parse(sessionStorage.getItem("User"));
  // public datasession = {
  //   user:{
  //     image:"https://i.ytimg.com/vi/LenobeImeX0/hqdefault.jpg",
  //     nickname:"พี่โตต้องการตูดคุณ"
  //   }
  // }
  public router :Router

  constructor(logomg: ArticleService,) {
    this.logomg = logomg;

  }

  ngOnInit(): void {
    this.getlogo();
    console.log('sssss', this.datasession)

  }

  public getlogo() {
    this.logomg.getlogo().then((response: any) => {
      this.getlogoimg = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public postlogin(data: any) {
    this.logomg.postlogin(data).then((response: any) => {
      this.postloginimg = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public clickprofile() {
    this.nameprofile = !this.nameprofile;
  }

  public clickdrop() {
    this.nameprofile = false;
  }

  public links = [
    {
      link: "myaccound"
    }
  ]

  onLogout() {
    sessionStorage.removeItem('User');
    sessionStorage.clear();
    console.log(sessionStorage);
    
  }
}