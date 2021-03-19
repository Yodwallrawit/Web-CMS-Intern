import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'
import { AbstractService, ArticleService } from '../../service/service';
import { DialogContentExampleDialog } from '../shared/dialogdelete.component';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent extends AbstractService {
  url: any;
  nametype: any;
  nameimg: any;
  nameurl: any;
  urlnumber: any;
  discription: any;
  contact: any;
  public datasession = JSON.parse(sessionStorage.getItem("User"));
  contactservice: ArticleService
  contactService: any;
  stringTel: string = "tel:"
  putlogo: any


  constructor(private router: Router, contactservice: ArticleService, public dialog: MatDialog,) {
    super(null);
    this.contactservice = contactservice;
    this.getcontact();

  }

  ngOnInit(): void {
    if (!this.isLogin()) {
      this.router.navigate(['login']);
    }
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;

      }
    }
    else {

    }
  }

  public getcontact() {
    this.contactservice.getcontact().then((response: any) => {
      this.contactService = response;
    }).catch((error: any) => {
      console.log(error);
    })
  }

  onSide(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.nameurl = event.target.result;
      }
    }
    else {

    }
  }

  addText(data: any) {
    if (data = this.nameurl,
      data = this.urlnumber,
      data = this.nametype,
      data = this.discription
    ) {
    }
  }

  onClick() {
    if (this.urlnumber === Number) {
      this.stringTel + this.urlnumber
    }
    let data = {
      icon: this.nameurl,
      url: this.urlnumber,
      lable: this.nametype,
      value: this.discription,
      user_id: this.datasession.user.id
    }

    this.contactservice.postcontact(data).then((response: any) => {
      console.log('asdczzzz', data);
      this.contact = response;
      if (this.nameurl &&
        this.urlnumber &&
        this.nametype &&
        this.discription &&
        this.datasession.user.id

      ) {

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
      }
    })
  }

  onClick01() {
    let data = {
      user_id: this.datasession.user.id,
      value: this.url
    }
    this.putlogoconfig(data)
    window.location.reload();
  }

  public putlogoconfig(data?: any) {
    this.contactservice.putlogoconfig(data).then((Response: any) => {
      this.putlogo = Response;
    }).catch((error: any) => {
      console.log(error);
    })
    
  }
  
}