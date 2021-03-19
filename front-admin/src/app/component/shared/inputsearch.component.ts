import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputsearch',
  templateUrl: './inputsearch.component.html',
  
})
export class InputsearchComponent implements OnInit {
  @Output() sentkeyword = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onKey(data:any){
    console.log('key',data)
    this.sentkeyword.emit(data);
  }

}