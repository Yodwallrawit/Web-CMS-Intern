import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllContentComponent, ContentpageComponent, HomeComponent, MainpageComponent } from './component/component';


export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full",

  },
  {
    path: "",
    component: MainpageComponent,
    children: [
      {
        path: 'index', // child route path
        component: HomeComponent, // child route component that the router renders
      }, 
      {
        path: 'content',// child route path
        component: ContentpageComponent, // child route component that the router renders
      },
      {
        path: 'content/' + ':id' ,// child route path
        component: ContentpageComponent, // child route component that the router renders
      },
      {
        path: 'content-type1', // child route path
        component: AllContentComponent, // child route component that the router renders
      },
      
      {
        path: 'allcontent', // child route path
        component: AllContentComponent, // child route component that the router renders
       
      },
      {
        path : 'allcontent/category',
        component:AllContentComponent,
        children : [
          {
            path: '**',
            component: AllContentComponent,
          }
        ]
      }
    ]
    
  } , 

  
];

