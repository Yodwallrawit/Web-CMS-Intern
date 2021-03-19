import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CatagoryService } from '../../../app/service/service';

@Component({
  selector: 'app-selectdropdown',
  templateUrl: './selectdropdown.component.html',

})
export class SelectdropdownComponent implements OnInit {
  @Input() public topicselect: string = "";
  @Input() public tanname: any;
  @Input() public tantag: string = "";
  @Input() public selectedValue: any;
  @Input() public selectedMenuchild: any;
  @Output() takeselectemit = new EventEmitter();


  // @Output() onClick = new EventEmitter();
  // @Input() public placehold:string[]=[{name: ""}];
  public getrespone;
  public categoryservice: CatagoryService;
  public getdatatag;

  // message: any;

  constructor(categoryservice: CatagoryService,) {
    this.categoryservice = categoryservice;

  }

  ngOnInit(): void {

  
  }

  getselect(id) {
    //function target ส่ง event มาอันจะแยกให้ว่าเป็นของตัวไหน
    console.log('testid',id)
    var keyword: any;
    if (this.topicselect === "Category:") {
      keyword = {
        keyword: 'category', category_id: id.target.value
      }
    } else if (this.topicselect === "Sort:") {
      keyword = {
        keyword: 'sort', category_id: id.target.value
      }
    } else if (this.topicselect === "Tags:") {
      keyword = {
        keyword: 'tags', category_id: id.target.value
      }
    }
    this.takeselectemit.emit(keyword);
  }
}
