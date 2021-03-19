import { F } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractService, ArticleService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponnent extends AbstractService {
  registerservice: ArticleService
  register: any
  name: any
  firstname: any
  password: any
  email: any
  username: any
  lastname: any
  confirmpassword: any
  senttypeforApi: any
  public datasession = JSON.parse(sessionStorage.getItem("User"));
  sentimage: any;
  IsActiveName: boolean = false;
  IsActiveUserName: boolean = false;
  IsActiveFirstname: boolean = false;
  IsActivePassword: boolean = false;
  IsActiveEmail: boolean = false;
  IsActiveLastname: boolean = false;
  IsActiveConfirmPass: boolean = false;
  IsActiveConfirm: boolean = false;
  test: boolean = false;

  constructor(
    private router: Router,
    registerservice: ArticleService,
    public dialog: MatDialog,
  ) {
    super(null)
    this.registerservice = registerservice;
    
  }

  senttype(typeadmin: any) {
    this.senttypeforApi = typeadmin;

  }

  addText(data: any) {
    // console.log('password', this.password);
    // console.log('name', this.name);
    // console.log('firstname', this.firstname);
    // console.log('username', this.username);
    // console.log('confirmpassword', this.confirmpassword);
    // console.log('email', this.email);
    // console.log('lastname', this.lastname);
    // console.log('senttypeforApi', this.senttypeforApi);
    // console.log('fakesession', this.fakesession);
    // console.log('sentimage', this.sentimage);

    if (data = this.name,
      data = this.password,
      data = this.firstname,
      data = this.username,
      data = this.email,
      data = this.lastname,
      data = this.senttypeforApi,
      data = this.datasession.user.id,
      data = this.sentimage
    ) {
    }
  }
  ngOnInit(): void {
    if (!this.isLogin) {
      this.router.navigate(['login']);
    } 
  }

  cutimage(keepimg: string) {
    this.sentimage = keepimg;
  }

  onClick() {
    // if (this.password !== this.confirmpassword) {
    //   console.log('true');

    // } else {
    //   console.log('false');
    // }
    let checkerror = false;

    if (this.name === undefined || this.name === "") {
      this.IsActiveName = true;
      checkerror = true
    } else {
      this.IsActiveName = false;
    }
    if (this.firstname === undefined || this.firstname === "") {
      this.IsActiveFirstname = true;
      checkerror = true
    } else {
      this.IsActiveFirstname = false;
    }
    if (this.username === undefined || this.username === "") {
      this.IsActiveUserName = true;
      checkerror = true
    } else {
      this.IsActiveUserName = false;
    }

    if (this.password === undefined || this.password === "" || this.confirmpassword === undefined || this.confirmpassword === "") {
      this.IsActivePassword = true;
      this.IsActiveConfirmPass = true;
      checkerror = true
      this.test = true;
    } else if (this.password !== this.confirmpassword) {
      checkerror = true
      this.IsActivePassword = true;
      this.IsActiveConfirmPass = true;
      this.test = false;
    } else if (this.password === this.confirmpassword) {
      this.IsActivePassword = false;
      this.IsActiveConfirmPass = false;
      this.test = false;
    }

    if (this.email === undefined || this.email === "") {
      this.IsActiveEmail = true;
      checkerror = true
    } else {
      this.IsActiveEmail = false;
    }
    if (this.lastname === undefined || this.lastname === "") {
      this.IsActiveLastname = true;
      checkerror = true
    } else {
      this.IsActiveLastname = false;
    }

    // if (this.confirmpassword === undefined || this.confirmpassword === "") {
    //   this.IsActiveConfirmPass = true;
    //   checkerror = true
    //   this.test = true;
    // } else {
    //   this.IsActiveConfirmPass = false;
    //   this.test = false;
    // }
    // if (this.confirmpassword === undefined || this.confirmpassword === "") {
    //   this.IsActiveConfirmPass = true; 
    //   checkerror = true
    // } else {
    //   this.IsActiveConfirmPass = false;
    // }

    // if(){

    // } else if(){

    // }

    // if (this.password !== this.confirmpassword){
    //   this.IsActiveConfirmPass = true
    //   checkerror = true
    // }else{
    //   this.IsActiveConfirmPass = false;
    // }



    let data = {
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      type: this.senttypeforApi,
      image: this.sentimage,
      nickname: this.name,
      user_id: this.datasession.user.id,
    }
    if (checkerror) {

    } else {
      this.registerservice.postregister(data).then((response: any) => {
        this.register = response;

        if (this.username &&
          this.password &&
          this.firstname &&
          this.lastname &&
          this.email &&
          this.senttypeforApi &&
          this.sentimage &&
          this.name &&
          this.datasession.user.id &&
          this.confirmpassword
        ) {
          const dialogRef = this.dialog.open(DialogContentExampleDialog, {
            data: {
              text: 'Complete registration',
              btntext1: 'OK',
              butt2: "none",
            }
          });
          dialogRef.afterClosed().subscribe(result => {
          });

        } else {
          const dialogRef = this.dialog.open(DialogContentExampleDialog, {
            data: {
              text: 'Please enter all information',
              btntext1: 'OK',
              butt2: "none",
            }
          });
          dialogRef.afterClosed().subscribe(result => {
           
          });
          window.location.reload();
        }
      })
    }

  }
}