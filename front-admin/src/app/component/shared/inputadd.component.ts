import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputadd',
  templateUrl: './inputadd.component.html',
})
export class InputAddComponent {
  @Input() public topicinput: string = "";
}