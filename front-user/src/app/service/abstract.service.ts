import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

export abstract class AbstractService {
    public baseURL: string;
    public http: HttpClient;

    constructor(http: HttpClient, baseURL?: string) {
        this.http = http;
        this.baseURL = baseURL;

        if (this.baseURL === undefined || this.baseURL === null) {
            this.baseURL = environment.apiBaseURL;
        }
    }

    public getDefaultHeader(): HttpHeaders {

        let headers = new HttpHeaders({
          'Content-Type': 'application/json', 
        });  
    
        return headers;
      }

      public getDefaultOptions(): any {
        let header = this.getDefaultHeader(); 
    
        let httpOptions = {
          headers: header
        };
    
        return httpOptions;
      }
}