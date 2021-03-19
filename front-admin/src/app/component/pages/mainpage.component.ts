import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  title = 'cmsreal';

  public isImg: boolean = true;

  public ngOnInit(): void {
    setTimeout(() => {
      this.isImg = false;
    }, 1000);
  }
}
