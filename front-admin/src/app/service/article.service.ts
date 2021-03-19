import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract.service";
const TOKEN_KEY = "User";
@Injectable()
export class ArticleService extends AbstractService {
    getusername() {
        throw new Error('Method not implemented.');
    }
    gatmanagetag() {
        throw new Error('Method not implemented.');
    }
    constructor(http: HttpClient) {
        super(http)
    }

    public putarticle(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article/' + id;
            let options = this.getDefaultOptions();
            let body = {};

            if (data !== undefined && data !== null) {

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public putvideo(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/video/' + id;
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public putadmin(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user/' + id + '/password';
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public puttype(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user/' + id + '/type';
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public putcontact(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/contact/' + id;
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public putlogoconfig(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/config/logo/';
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public puttag(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/tag/' + id;
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public putcategory(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category/' + id;
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public puteditmyaccount(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user/' + id;
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public puteditpass(id: string, data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user/' + id + '/password/';
            let options = this.getDefaultOptions();
            let body = {};
            console.log('ff', data);

            if (data !== undefined && data !== null) {
                console.log('ss', data);

                body = Object.assign(data)
            }
            this.http.put(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }


    public postregister(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/auth/register';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public postcategory(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public posttags(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/tag';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }



    public postvideo(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/video';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public postlogin(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/auth/login';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
                sessionStorage.setItem(TOKEN_KEY, JSON.stringify(response.data))
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getlogin(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/auth/login';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public logout(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/auth/logout';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }



    public getlogo(): Promise<any> {
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

    // public getarticle(): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         let url: string = this.baseURL + '/article/admin';
    //         let options = this.getDefaultOptions();
    //         this.http.get(url, options).toPromise().then((response: any) => {
    //             resolve(response)
    //         }).catch((error: any) => {
    //             rejects(error)
    //         })
    //     })
    // }

    // public deletearticle(id: string): Promise<any> {
    //     return new Promise((resolve, rejects) => {
    //         let url: string = this.baseURL + '/article/' + id;
    //         let options = this.getDefaultOptions();
    //         this.http.delete(url, options).toPromise().then((response: any) => {
    //             resolve(response)
    //         }).catch((error: any) => {
    //             rejects(error)
    //         })
    //     })
    // }

    public getlog(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/log';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getuser(): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user';
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getuserid(id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user/' + id;
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public getAdminsearch(keyword: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user';
            let queryparam = "";

            if (keyword !== undefined && keyword !== "") {
                queryparam += "&keyword=" + keyword
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

    public deleteuser(id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/user/' + id;
            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
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

    public geteditcategory(category_id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category?mode=notChild&category_id=' + category_id;
            let options = this.getDefaultOptions();
            this.http.get(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public geteditArticle(id: string): Promise<any> {
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

    public getarticlesearch(keyword: string, category: string, tag: string, startdate: string,): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article/admin';
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

    public deletecategory(id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category/' + id;
            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
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

    public deletetag(id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/tag/' + id;
            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
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

    public deletevideo(id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/video/' + id;
            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public postcontact(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/contact';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
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

    public deletecontact(id: string, user_id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/contact/' + id;
            let queryparam = "";

            if (user_id !== undefined && user_id !== "") {
                queryparam += "&user_id=" + user_id
            }
            if (queryparam !== undefined && queryparam !== "") {
                queryparam = queryparam.substring(1, queryparam.length)
            }
            if (queryparam !== undefined && queryparam !== "") {
                url += '?' + queryparam
            }

            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public PostcreateArticle(data: any) {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article';
            let options = this.getDefaultOptions();
            let body = {};
            if (data !== undefined && data !== null) {
                body = Object.assign(data)
            }
            this.http.post(url, body, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public deleteCategoryparam(id: string, user_id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/category/' + id;
            let queryparam = "";

            if (user_id !== undefined && user_id !== "") {
                queryparam += "&user_id=" + user_id
            }
            if (queryparam !== undefined && queryparam !== "") {
                queryparam = queryparam.substring(1, queryparam.length)
            }
            if (queryparam !== undefined && queryparam !== "") {
                url += '?' + queryparam
            }

            console.log('url', url)

            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public deleteManageTagparam(id: string, user_id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/tag/' + id;
            let queryparam = "";

            if (user_id !== undefined && user_id !== "") {
                queryparam += "&user_id=" + user_id
            }
            if (queryparam !== undefined && queryparam !== "") {
                queryparam = queryparam.substring(1, queryparam.length)
            }
            if (queryparam !== undefined && queryparam !== "") {
                url += '?' + queryparam
            }

            console.log('url', url)

            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public deleteVideoparam(id: string, user_id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/video/' + id;
            let queryparam = "";

            if (user_id !== undefined && user_id !== "") {
                queryparam += "&user_id=" + user_id
            }
            if (queryparam !== undefined && queryparam !== "") {
                queryparam = queryparam.substring(1, queryparam.length)
            }
            if (queryparam !== undefined && queryparam !== "") {
                url += '?' + queryparam
            }

            console.log('url', url)

            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }

    public deleteArticle(id: string, user_id: string): Promise<any> {
        return new Promise((resolve, rejects) => {
            let url: string = this.baseURL + '/article/' + id;
            let queryparam = "";

            if (user_id !== undefined && user_id !== "") {
                queryparam += "&user_id=" + user_id
            }
            if (queryparam !== undefined && queryparam !== "") {
                queryparam = queryparam.substring(1, queryparam.length)
            }
            if (queryparam !== undefined && queryparam !== "") {
                url += '?' + queryparam
            }

            console.log('url', url)

            let options = this.getDefaultOptions();
            this.http.delete(url, options).toPromise().then((response: any) => {
                resolve(response)
            }).catch((error: any) => {
                rejects(error)
            })
        })
    }
}

