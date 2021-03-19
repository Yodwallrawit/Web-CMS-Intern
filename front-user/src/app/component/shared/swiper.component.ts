import { Component, OnInit, ViewChild } from '@angular/core';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';
import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { CatagoryService } from 'src/app/service/service';
import { environment } from 'src/environments/environment';
// import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-swipertest',
  templateUrl: './swiper.component.html',
})
export class SwiperComponent1 {
  public index = 0;
  categoryservice: CatagoryService;
  getdataarticlepin: any;
  public apiBaseURL = environment.apiBaseURL;

  @ViewChild(SwiperComponent, { static: false }) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef: SwiperDirective;

  constructor(categoryservice: CatagoryService,) {
    this.categoryservice = categoryservice;
    // this.datacontent = datacontent; 
  }
  ngOnInit(): void {
    this.getarticlepin()

  }
  public configoat: SwiperConfigInterface = {

    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100,
    

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {}

  }
 

  public getarticlepin() {
    this.categoryservice.getarticlepin().then((response: any) => {
      this.getdataarticlepin = response;
      console.log('getdataarticlepin', this.getdataarticlepin);
      // this.datacontent.changeContent(this.getdataarticlepin);
      console.log('getdataarticlepin', this.getdataarticlepin);
    }).catch((error: any) => {
      console.log(error);
    })
  }

}
