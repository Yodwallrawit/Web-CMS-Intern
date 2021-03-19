import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";

import { AbstractService } from "./abstract.service";

@Injectable()
export class CatagoryService extends AbstractService {
    constructor(http: HttpClient) {
        super(http)
    }
    public getcategory(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getcategoryID(id: string): Promise<any> {
        
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/?category=' + id;
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getcategorypin(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category?mode=pin';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public gettag(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/tag';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getvideo(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/video';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getarticle(): Promise<any> {
        // console.log('lolololo')
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getarticlenew(): Promise<any> {
        // console.log('lolololo')
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article?mode=new';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }


    public getarticlepin(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article?mode=pin';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getarticleID(id: string): Promise<any> {
        console.log('idtest',id)
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article/' + id;
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getarticletopview(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article/?mode=topview';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getarticlepopofweek(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article/?mode=popofweek';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getarticlesearch(keyword: string, category: string, tag: string, startdate: string, enddate: string, owner: string, orderby: string, skip:number , limit: number): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article';
            let queryparam = "";

            if (keyword !== undefined && keyword !== "") {
                queryparam += "&keyword=" + keyword
            }

            if (category !== undefined && category !== "") {
                queryparam += "&category=" + category
            }

            if (tag !== undefined && tag !== "") {
                queryparam += "&tag=" + tag
            }
            if (startdate !== undefined && startdate !== "") {
                queryparam += "&startdate=" + startdate

            }
            if (enddate !== undefined && enddate !== "") {
                queryparam += "&enddate=" + enddate
            }
            if (owner !== undefined && owner !== "") {
                queryparam += "&owner=" + owner
            }
            if (orderby !== undefined && orderby !== "") {
                queryparam += "&orderby=" + orderby
            }
            if (skip !== undefined &&  skip !== null) {
                queryparam += "&skip=" + skip
            }
            // if (limit !== undefined && limit !== null) {
            //     queryparam += "&limit=" + limit
            // }
            if (queryparam !== undefined && queryparam !== "") {
                queryparam = queryparam.substring(1, queryparam.length)
            }
            if (queryparam !== undefined && queryparam !== "") {
                url += '?' + queryparam
            }

            console.log('url', url)

            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getcontact(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/contact';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getmodechild(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category?mode=child';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getlogoweb(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/config/logo';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }
}
