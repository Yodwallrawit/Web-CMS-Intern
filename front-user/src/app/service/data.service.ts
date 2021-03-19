import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CatagoryService } from "./service";
import { Router } from '@angular/router';

@Injectable()
export class DataService implements OnInit {
    
    ngOnInit(): void {
        
    }
    private getapiCAT = new BehaviorSubject<any>("");
    currentMessage = this.getapiCAT.asObservable()

    changeMessage(message: string){
        console.log('message' ,message)
        this.getapiCAT.next(message);
    }

    private getapiMenu = new BehaviorSubject<any>("");
    presentMessage = this.getapiMenu.asObservable()

    nowMessage(menuname: string){
        console.log('menuname' ,menuname)
        this.getapiMenu.next(menuname);
    }
    // private getapiContent = new BehaviorSubject<any>("");
    // testmessage = this.getapiContent.asObservable()

    // changeContent(message: string){
    //     console.log('message' ,message)
    //     this.getapiContent.next(message);
    // }

    // private getdataTable = new BehaviorSubject<any>("");
    // takedataTable = this.getdataTable.asObservable()

    // Keepmessage(message: string){
    //     console.log('message' ,message)
    //     this.getdataTable.next(message);
    // }
}
