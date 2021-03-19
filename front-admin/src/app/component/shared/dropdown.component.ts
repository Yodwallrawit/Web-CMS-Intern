import { Component, Input } from '@angular/core';
import { ArticleService } from 'src/app/service/service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  @Input() public header: string = "";

}