import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllArticleComponent, ConfigComponent, CreateArticle, KeepLogComponent, LoginComponent,MainpageComponent, ManageAdminPageComponent, ManageCategoryComponent, ManageTagComponent, MyaccoundComponnent, RegisterComponnent, VideoPageComponnent } from './component/component';


export const  APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",

  },
  {
    path: "login",
    component: LoginComponent,
  
  } , 
  {
    path: "",
    component: MainpageComponent,
    children: [
      {
        path: 'index', // child route path
        component: ManageAdminPageComponent, // child route component that the router renders
      },
      {
        path: 'all-article', // child route path
        component: AllArticleComponent, // child route component that the router renders
      },
      {
        path: 'manage-admin', // child route path
        component: ManageAdminPageComponent, // child route component that the router renders
      },
      {
        path: 'createarticle', // child route path
        component: CreateArticle, // child route component that the router renders
      },
      {
        path: 'managetag', // child route path
        component: ManageTagComponent, // child route component that the router renders
      },
      {
        path: 'register', // child route path
        component: RegisterComponnent, // child route component that the router renders
      },
      {
        path: 'managecategory', // child route path
        component: ManageCategoryComponent, // child route component that the router renders
      },
      {
        path: 'video', // child route path
        component: VideoPageComponnent, // child route component that the router renders
      },
      {
        path: 'log', // child route path
        component: KeepLogComponent, // child route component that the router renders
      },
      {
        path: 'config', // child route path
        component: ConfigComponent, // child route component that the router renders
      },
      {
        path: 'myaccound', // child route path
        component: MyaccoundComponnent, // child route component that the router renders
      },
      {
        path: "login",
        component: LoginComponent,
      },
      
    ]
    
  } , 
  
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
