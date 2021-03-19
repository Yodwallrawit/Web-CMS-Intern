import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-dialogeditpassword',
  templateUrl: 'dialogeditpassword.component.html',
})
export class DialogCEditPasswordComponent {
  passservise: ArticleService
  passbefore: any
  passafter: any
  passconfirm: any
  IsActivePassword: boolean = false
  IsActiveConfirmPass: boolean = false
  test: boolean = false
  pload: boolean = false

  constructor(
    public dialogRef: MatDialogRef<DialogCEditPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    passservise: ArticleService) {
    this.passservise = passservise;

  }

  onClick() {
    let checkerror = false
    if (this.passafter === undefined || this.passafter === "" || this.passconfirm === undefined || this.passconfirm === "") {
      this.IsActivePassword = true;
      this.IsActiveConfirmPass = true;
      checkerror = true
      this.test = true;

    } else if (this.passafter !== this.passconfirm) {
      checkerror = true
      this.IsActivePassword = true;
      this.IsActiveConfirmPass = true;
      this.test = false;

    } else if (this.passafter === this.passconfirm) {
      this.IsActivePassword = false;
      this.IsActiveConfirmPass = false;
      this.test = false;
    }

    let data = {
      oldpassword: this.passbefore,
      newpassword: this.passafter

    }

    setTimeout(() => {
      // document.getElementById('js-spinner').classList.add('--spinner-complete');
      document.getElementById('js-success-tick').classList.add('--tick-complete');
      document.getElementById('js-success-ring').classList.add('--ring-complete');

      setTimeout(() => {

        this.dialogRef.close(data)
      }, 1000);
    }, 2000);


  }
}