import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttoncreate',
  templateUrl: './buttoncreate.component.html',
})
export class ButtoncreateComponent {
  @Input() public topicbtn:string ="";
}