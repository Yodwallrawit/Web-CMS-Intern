import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleService } from 'src/app/service/service';
import { DialogCEditPasswordComponent, DialogContentExampleDialog, DialoguploadComponent } from '../shared/shared';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-myaccound',
  templateUrl: './myaccound.component.html',
})
export class MyaccoundComponnent {
  editpassservice: ArticleService
  id: any
  NameAc: any
  username: any
  password: any
  firstname: any
  lastname: any
  email: any
  type: any
  image: any
  getuseraccount: any
  editpass: any
  sentimage: any
  editmyaccount: any
  public apiBaseURL = environment.apiBaseURL


  @Output() imageApi = new EventEmitter();

  public datasession = JSON.parse(sessionStorage.getItem("User"));

  constructor(
    editpassservice: ArticleService, public dialog: MatDialog
  ) {
    this.editpassservice = editpassservice

  }

  ngOnInit(): void {
    this.getuserid(this.datasession.user.id)
  }

  cutimage(keepimg: string) {
    this.sentimage = keepimg;
  }

  getuserid(id: string) {
    this.editpassservice.getuserid(id).then((response: any) => {
      this.getuseraccount = response;
      this.NameAc = this.getuseraccount.nickname
      this.username = this.getuseraccount.username
      this.password = this.getuseraccount.password
      this.firstname = this.getuseraccount.firstname
      this.lastname = this.getuseraccount.lastname
      this.email = this.getuseraccount.email
      this.type = this.getuseraccount.type
      this.image = this.apiBaseURL + this.getuseraccount.image

    }).catch((error: any) => {
      console.log(error);
    })
  }

  openDialog() {
    let data = {
      image: this.image
    }
    const dialogRef = this.dialog.open(DialoguploadComponent, {
      data: data,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.image = result;
      // this.imageApi.emit(this.image)
    });
  }

  public readURL(event) {
    let file = event.target.files[0];
    if (file.length === 0) {
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        var b64 = reader.result;
        this.image = b64
      }
      reader.readAsDataURL(file);
    }
  }

  onClickEditPass() {
    const dialogRef = this.dialog.open(DialogCEditPasswordComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        Object.assign(result, { user_id: this.datasession.user.id })
        // const data = this.dataSource.data;
        this.puteditpass(this.datasession.user.id, result);

      }
    });
  }

  public puteditpass(id: string, data?: string) {
    console.log('kkkk', data);
    this.editpassservice.puteditpass(id, data).then((Response: any) => {
      this.editpass = Response;


    }).catch((error: any) => {
      console.log(error);
    })
  }

  onClickSaveAccount() {
    let data = {
      user_id:this.datasession.user.id,
      nickname: this.NameAc,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      image:this.image,
    }

    Object.assign(data, { user_id: this.datasession.user.id })
      this.puteditmyaccount(this.datasession.user.id,data)

      if (this.puteditmyaccount) {
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {
          data: {
            text: 'Edit Success',
            btntext1: 'OK',
            butt2: "none",
          }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
      }
  }

  puteditmyaccount(id: string, data: any) {
    this.editpassservice.puteditmyaccount(id, data).then((Response: any) => {
      this.editmyaccount = Response;
      this.getuserid(id);
    }).catch((error: any) => {
      console.log(error);
    })
  }
}