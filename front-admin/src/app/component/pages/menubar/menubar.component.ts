import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {
//     public menu = [{ name: 'Create Article', logo: 'create.png' },
//     { name: 'All Article', logo: 'article.png' },
//     { name: 'Manage Admin' , logo: 'admin.png'},
//     { name: 'Register' , logo: 'register.png' },
//     { name: 'Manage Category' , logo: 'category.png'},
//     { name: 'Manage Tag' , logo: 'tag.png' },
//     { name: 'Video' , logo: 'video.png'},
//     { name: 'Log' , logo: 'log.png' },
//     { name: 'Config' , logo: 'config.png'},];

public links = [
  {
    link : "createarticle",
    img : "create.png",
    lable : "Create Article",
  },
  {
    link : "all-article",
    img : "article.png",
    lable : "All Article",
  },
  {
    link : "manage-admin",
    img : "admin.png",
    lable : "Manage Admin",
  },
  {
    link : "register",
    img : "register.png",
    lable : "Register",
  },
  {
    link : "managecategory",
    img : "category.png",
    lable : "Manage Category",
  },
  {
    link : "managetag",
    img : "tag.png",
    lable : "Manage Tag",
  },
  {
    link : "video",
    img : "video.png",
    lable : "Video",
  },
  {
    link : "log",
    img : "log.png",
    lable : "Log",
  },
  {
    link : "config",
    img : "config.png",
    lable : "Config",
  },
]
}