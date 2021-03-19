import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';
import {Component, ElementRef, ViewChild , OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import * as _moment from 'moment';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  
})
export class DatePickerComponent implements OnInit {
  public date1:Date;
  date = new FormControl(moment());
  @Output() takedateemit = new EventEmitter();
  constructor(public datepipe: DatePipe) { 
    this.datepipe = datepipe;
  }

  ngOnInit(): void {
  }
  onDataChange(newdate:string){
    const _ = moment();
    const date = moment(newdate)
    this.date1 = date.toDate();
    let latest_date =this.datepipe.transform(this.date1, 'yyyy-MM-dd');
    console.log('Date',latest_date);
    this.takedateemit.emit(latest_date);
  }
}