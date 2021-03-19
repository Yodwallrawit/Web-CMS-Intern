import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class ObserveService implements OnInit {
    
    ngOnInit(): void {
        
    }
    private getDatatble = new BehaviorSubject<any>("");
    currentMessage = this.getDatatble.asObservable()

    changeMessage(message: string){
        console.log('message' ,message)
        this.getDatatble.next(message);
    }
}
