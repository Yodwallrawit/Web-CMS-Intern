import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from 'src/app/service/service';

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
    public getrespone;
    public getdatatag;
    // @Input() public placehold:string[]=[{name: ""}];
    @Output() takeselectemit = new EventEmitter();
    public articleservice: ArticleService;
    constructor(articleservice: ArticleService) {

        this.articleservice = articleservice;
    }

    ngOnInit(): void {
    }

    getselect(id) {
        //function target ส่ง event มาอันจะแยกให้ว่าเป็นของตัวไหน
        console.log('testid', id)
        var keyword: any;
        if (this.topicselect === "Category:") {
            keyword = {
                keyword: 'category', category_id: id.target.value
            }
        } else if (this.topicselect === "Tags:") {
            keyword = {
                keyword: 'tags', category_id: id.target.value
            }
        }
        this.takeselectemit.emit(keyword);
        // console.log(keyword);
        
    }

}
