import { Component, Input, OnInit, Pipe, ViewChild } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { CatagoryService, DataService } from '../../service/service';

@Component({
  selector: 'app-videocontent',
  templateUrl: './videocontent.component.html',

})
export class VideocontentComponent implements OnInit {
  public index = 0;
  public getlink = "https://www.youtube.com/embed/";
  public getlinkurl: any;
  public geturl: any
  public categoryservice: CatagoryService;
  public data: DataService
  // public takelink = {
  //   "fields": [
  //       {
  //           "name": "ClipV1",
  //           "type": "video",
  //           "link": "https://www.youtube.com/embed/mIR51FCbcLY"
  //       },
  //       {
  //         "name": "ClipV2",
  //         "type": "video",
  //         "link": "https://www.youtube.com/embed/xCxyingvh9M"
  //       },
  //       {
  //         "name": "ClipV3",
  //         "type": "video",
  //         "link": "https://www.youtube.com/embed/A_SRaIVhOcU"
  //       },
  //       {
  //         "name": "ClipV4",
  //         "type": "video",
  //         "link": "https://www.youtube.com/embed/Qii5jorBxGA"
  //       },
  //       {
  //         "name": "ClipV5",
  //         "type": "video",
  //         "link": "https://www.youtube.com/embed/rDe36L06sPc"
  //       },
  //       {
  //         "name": "ClipV6",
  //         "type": "video",
  //         "link": "https://www.youtube.com/embed/wSI9UqepxAo"
  //       },

  //   ]
  // }

  @ViewChild(SwiperComponent, { static: false }) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef: SwiperDirective;

  constructor(categoryservice: CatagoryService) {
    this.categoryservice = categoryservice;
  }

  public getvideo() {
    this.categoryservice.getvideo().then((response: any) => {

      this.geturl = response;
      this.getlinkurl = this.geturl[0].url;
      // console.log('heyloo',this.geturl)

    }).catch((error: any) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.getvideo()
  }
  myFunc(clip: any) {
    console.log("function called", clip);
    this.getlinkurl = clip;
  }

  public configvideo: SwiperConfigInterface = {

    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    loop: true,
    // effect: 'fade',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // type:'bullets',
      // dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      479: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      899: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

    }

  }

}
