import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MenubarComponent, NavbarComponent, SelectdropdownComponent, InputtextComponent, MainpageComponent, AllArticleComponent, EditorComponent, DatePickerComponent, InputsearchComponent, SelectTableComponent, TimepickerComponent, TablePaginationExample, UploadimgComponent, ManageAdminPageComponent,
  ButtoncreateComponent, CreateArticle, TableManageAdminExample, DropdownComponent, DatetwoComponent, RegisterComponnent, ManageTagComponent, InputAddComponent, RadiobuttonComponent, ManageCategoryComponent, VideoPageComponnent, KeepLogComponent, PreviewuploadComponent, DatetimepickerComponent, ConfigComponent, DialogContentExampleDialog, TableconfigComponent, DialoguploadComponent, TestcropComponent, LoginComponent, Tooltipdiscription, DragDirective, PloadComponent, DialogCEditCategoryComponent, DialogCEditTagComponent, DialogEditConfigComponent, DialogCEditVideoComponent, DialogEditAllcontentComponent, MyaccoundComponnent, DialogCEditPasswordComponent, DialogManageAdminComponent, 
} from './component/component';
// import { CKEditorModule } from 'ng2-ckeditor';


import { CdkTableModule } from '@angular/cdk/table';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatChipsModule } from '@angular/material/chips';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';


import { ArticleService, ObserveService, } from './service/service';

import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PortalModule } from '@angular/cdk/portal';
import { TagInputModule } from 'ngx-chips';
import {MatListModule} from '@angular/material/list';
import { DatePipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// import { CKEditorMoืเ หdule } from 'ng2-ckeditor';

const SERVICE_CLASSE: any[] = [
  ObserveService,
  ArticleService,
  DatePipe,
];

@NgModule({
  exports:[
    PortalModule,
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    MenubarComponent,
    InputtextComponent,
    SelectdropdownComponent,
    MainpageComponent,
    AllArticleComponent,
    EditorComponent,
    DatePickerComponent,
    InputsearchComponent,
    SelectTableComponent,
    TimepickerComponent,
    TablePaginationExample,
    UploadimgComponent,
    ManageAdminPageComponent,
    ButtoncreateComponent,
    CreateArticle,
    TableManageAdminExample,
    DropdownComponent,
    DatetwoComponent,
    RegisterComponnent,
    ManageTagComponent,
    InputAddComponent,
    RadiobuttonComponent,
    ManageCategoryComponent,
    VideoPageComponnent,
    KeepLogComponent,
    PreviewuploadComponent,
    DatetimepickerComponent,
    ConfigComponent,
    DialogContentExampleDialog,
    TableconfigComponent,
    DialoguploadComponent,
    TestcropComponent,
    LoginComponent,
    Tooltipdiscription,
    DialoguploadComponent,
    DragDirective,
    PloadComponent,
    DialogCEditCategoryComponent,
    DialogCEditTagComponent,
    DialogEditConfigComponent,
    DialogCEditVideoComponent,
    DialogEditAllcontentComponent,
    MyaccoundComponnent,
    DialogCEditPasswordComponent,
    DialogManageAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    MatSliderModule,
    MatFormFieldModule,
    MatRippleModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxDropzoneModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    ImageCropperModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    OverlayModule,
    MatTooltipModule,
    TagInputModule,
    MatListModule,
    MatProgressSpinnerModule,
   
  ],
  providers: SERVICE_CLASSE,
  bootstrap: [AppComponent]
})
export class AppModule {}
