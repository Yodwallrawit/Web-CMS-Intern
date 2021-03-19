import { Component, Input, OnInit } from '@angular/core';
import { CatagoryService, DataService } from '../../service/service';
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',



})
export class CardComponent implements OnInit {
  public categoryservice: CatagoryService;
  @Input() linkname: any;
  @Input() articleJson: any;
  datacontent: DataService;
  public apiBaseURL = environment.apiBaseURL




  getdataarticle: any;
  message: any;


  constructor(categoryservice: CatagoryService, datacontent: DataService,) {
    this.categoryservice = categoryservice;
  
  }
  ngOnInit(): void {
  
  }

}