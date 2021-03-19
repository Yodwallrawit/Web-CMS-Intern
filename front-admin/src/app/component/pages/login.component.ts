import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractService, ArticleService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent extends AbstractService{
  loginservice: ArticleService;
  logomg: ArticleService
  getlogoimg: any;
  username: string = "";
  password: string = "";
  
  constructor(private router: Router, loginservice: ArticleService,
    logomg: ArticleService, public dialog: MatDialog) {
      super(null)
    this.loginservice = loginservice;
    this.logomg = logomg;
  }

  ngOnInit(): void {
    this.getlogo();

    if (this.isLogin()) {
      this.router.navigate(['all-article']);
    }
  }

  public getlogo() {
    this.logomg.getlogo().then((response: any) => {
      this.getlogoimg = response;
      // console.log('sgdsfdsfsdf',this.getlogoimg)
    }).catch((error: any) => {
      console.log(error);
    })
  }

  public onClickSubmit() {
    let data = {
      username: this.username,
      password: this.password
    }

    this.loginservice.postlogin(data).then((response: any) => {
      this.loginservice = response;
      if (this.loginservice) {
        this.router.navigate(["/all-article"])
      }
      else {

      }

    }).catch((error: any) => {
      console.log(error);
      const dialoglogin = this.dialog.open(DialogContentExampleDialog, {
        data: {
          text: 'incorrect username or password !!!',
          isBtnDelete : true,
          butt2: "none",
          btntext1: 'OK'
      }
    });

      dialoglogin.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);

      });
    })
  }
}
