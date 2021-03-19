import { Component, Input, OnInit } from '@angular/core';
import { CatagoryService } from '../../service/service';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',

})
export class TagsComponent implements OnInit {
    // public tagsname = [{ name: 'Icepajingko' }, { name: 'Lucky13' }, { name: 'Ratchanat' },{ name: 'Valrolant' }]
    @Input() tagJson: any;
    public categoryservice:CatagoryService
    
    constructor(categoryservice: CatagoryService) {
        this.categoryservice = categoryservice;
        
        // this.datacontent.testmessage.subscribe(message => {
        //   this.message = message; 
        // });
      }

    ngOnInit(): void {
        console.log('tagJson',this.tagJson);
    }

}