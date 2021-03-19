import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_ROUTES } from './app-routing.module';
import { LoaderInterceptorService } from './service/service';

import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatMomentDateModule, MomentDateModule} from '@angular/material-moment-adapter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper'; 
import { AppComponent } from './app.component';
import { HeadcontentComponent, NavbarComponent,HomeComponent, SwiperComponent1, CardComponent, SlidecontentComponent, FooterComponent, ImgcontentComponent, TypecontentComponent, VideocontentComponent
  , SafePipe, SearchbarComponent,ContentpageComponent, HeadtopicComponent, ChipsAutocompleteExample, TagsComponent,AllContentComponent, SelectdropdownComponent, InputsearchComponent, 
  DaterangePickerComponent, DatePickerComponent, MainpageComponent, PaginationComponent, MenuComponent,} from './component/component';
import {CatagoryService, DataService, LoaderService} from './service/service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';





const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const SERVICE_CLASSE: any[]= [
  CatagoryService,
  DataService,
  DatePipe,
  LoaderService,
  LoaderInterceptorService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptorService,
    multi:true,
  },
  ,{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadcontentComponent,
    HomeComponent,
    SwiperComponent1,
    CardComponent,
    SlidecontentComponent,
    FooterComponent,
    ImgcontentComponent,
    TypecontentComponent,
    VideocontentComponent,
    SafePipe,
    SearchbarComponent,
    ContentpageComponent,
    HeadtopicComponent,
    ChipsAutocompleteExample,
    TagsComponent,
    AllContentComponent,
    SelectdropdownComponent,
    InputsearchComponent,
    DaterangePickerComponent,
    DatePickerComponent, 
    MainpageComponent,
    PaginationComponent,
    MenuComponent,
    
    
  ],
  imports: [
    BrowserModule, 
    SwiperModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatChipsModule,
    MatFormFieldModule,
    MatRippleModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,             
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatMomentDateModule,
    MomentDateModule,
    HttpClientModule,    
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatPaginatorModule,
    NgxPaginationModule,
    NgxUsefulSwiperModule,
    RouterModule.forRoot(APP_ROUTES),  
  ],
  
  providers:  SERVICE_CLASSE,
  bootstrap: [AppComponent]
})
export class AppModule { }
