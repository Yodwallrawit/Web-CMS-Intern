import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import * as moment from 'moment';
import { DatePipe } from '@angular/common'

export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
    
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-daterange',
  templateUrl: './daterange-picker.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class DaterangePickerComponent implements OnInit {
  public date1:Date;
  date = new FormControl(moment());
  roomsFilter: any;
  getData: any;
  @Output() takedateemit = new EventEmitter();
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  constructor(public datepipe: DatePipe) { 
    this.datepipe = datepipe;
  }

  ngOnInit(): void {
  }

  onDataChange(newdate:string) {
    const _ = moment();
    const date = moment(newdate)
    this.date1 = date.toDate();
    let latest_date =this.datepipe.transform(this.date1, 'yyyy-MM-dd');
    console.log('Date',latest_date);
    this.takedateemit.emit(latest_date);
    // let date2 = JSON.stringify(this.date1)
    // date2 = date2.slice(1,11)
    // console.log(date2)
  }
}
