import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputsearch',
  templateUrl: './inputsearch.component.html',
  
})
export class InputsearchComponent implements OnInit {
  @Output() takeinputemit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onKey(datasearch:string){
    this.takeinputemit.emit(datasearch)
  }
  
}
