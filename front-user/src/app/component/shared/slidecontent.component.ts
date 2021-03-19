import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slidecontent',
  templateUrl: './slidecontent.component.html',
  
})
export class SlidecontentComponent implements OnInit {
  @Input () articleslideCont:any;
  public apiBaseURL = environment.apiBaseURL
  constructor() { }

  ngOnInit(): void {
    // console.log('articleslideCont',this.articleslideCont)
  }

}
