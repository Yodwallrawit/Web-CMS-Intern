import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-headcontent',
  templateUrl: './headcontent.component.html',
})
export class HeadcontentComponent implements OnInit {
  @Input() public headname: string ="qqqq";
  constructor() { }

  ngOnInit(): void {
  }

}
