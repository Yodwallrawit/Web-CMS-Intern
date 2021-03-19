import { Component, EventEmitter, Input, Output } from '@angular/core';
import { log } from 'console';
import { on } from 'events';
import { ArticleService } from '../../service/service';

@Component({
  selector: 'app-radiobutton',
  templateUrl: 'radiobutton.component.html',

})
export class RadiobuttonComponent {
  public createarticleService: ArticleService
  @Input() public header: string = "";
  public defaultSelected = 0;
  public selection: number;
  // @Input() public value:any;
  @Output() radiotype = new EventEmitter();

  ngOnInit(): void {
    
  }
  // constructor(){
  //   -
  // }

  OnClick(keep:any){
    
    const lowkeep = keep.toLowerCase()
    this.radiotype.emit(lowkeep)
    console.log(lowkeep);
    
  }

  favoriteSeason: string;
  seasons: string[] = ['Author', 'Admin', 'Superadmin'];

}
