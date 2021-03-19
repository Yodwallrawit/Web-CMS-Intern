import { Component, Input, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-imgcontent',
  templateUrl: './imgcontent.component.html',
  
})
export class ImgcontentComponent implements OnInit {
  @Input() articleIMGJson: any;
  public getimg:string = "../../../assets/img/";
  public apiBaseURL = environment.apiBaseURL
  constructor() { }

  ngOnInit(): void {
    
  }

}
