import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleService } from '../../service/service';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
})
export class InputtextComponent {
  public createarticleService: ArticleService
  @Input() public header: string = "";
  @Input() public value:any;

  @Output() checkValue = new EventEmitter();
  
}